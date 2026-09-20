#!/usr/bin/env node
// Konsistenzprüfung: index.html (VISITS = Wahrheitsquelle) gegen Doku und Seitenstruktur.
// Aufruf: node tools/check-consistency.mjs   (Exit-Code 1 bei Abweichungen)
// Keine Abhängigkeiten. Siehe DOKU-PROTOKOLL.MD (Pre-Commit-Checkliste).

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(join(ROOT, file), 'utf8');

const errors = [];
const passes = [];
const check = (ok, okMsg, errMsg) => (ok ? passes.push(okMsg) : errors.push(errMsg));

// ── Datenquelle aus index.html laden (gleiche Logik wie die Seite) ──────────
const html = read('index.html');
const start = html.indexOf('const PASS_COST');
const end = html.indexOf('function renderStats');
if (start < 0 || end < 0) {
  console.error('FEHLER: Datenquelle (const PASS_COST … function renderStats) in index.html nicht gefunden.');
  process.exit(1);
}
const { PASS_COST, THERMO_MAX, VISITS, computeStats, fmtDateLong } = vm.runInNewContext(
  `${html.slice(start, end)}\n({ PASS_COST, THERMO_MAX, VISITS, computeStats, fmtDateLong })`,
);
const st = computeStats(VISITS);
const n = VISITS.length;

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
const norm = (s) => decode(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const de = (x, digits) => x.toFixed(digits);

// ── 1. VISITS selbst ─────────────────────────────────────────────────────────
check(
  VISITS.every((v, i) => i === 0 || VISITS[i - 1].date <= v.date),
  'VISITS chronologisch aufsteigend',
  'VISITS nicht chronologisch aufsteigend sortiert (neuer Besuch gehört ans ENDE)',
);
check(
  new Set(VISITS.map((v) => norm(v.name))).size === n,
  'VISITS: Namen eindeutig',
  'VISITS enthält doppelte Museumsnamen',
);
check(
  VISITS.every((v) => v.lat > 46 && v.lat < 49.5 && v.lng > 6 && v.lng < 9),
  'VISITS: Koordinaten plausibel (Dreiländereck, lat/lng nicht vertauscht)',
  'VISITS: Koordinaten außerhalb des Dreiländerecks (lat/lng vertauscht?)',
);
check(
  VISITS.every((v) => Number.isInteger(v.savings) && v.savings >= 0),
  'VISITS: Ersparnis je Besuch ganzzahlig in €',
  'VISITS: Ersparnis muss ganzzahlig (€, CHF × 1,10 gerundet) sein',
);

// ── 2. index.html: keine hartkodierten Kennzahlen, Struktur ─────────────────
check(!/const savings\s*=\s*\d+/.test(html), 'index.html: kein hartkodiertes `const savings`', 'index.html: hartkodiertes `const savings = <Zahl>` gefunden');
const placeholders = ['hdr-count', 'stat-total', 'stat-net', 'stat-count', 'stat-avg', 'thermo-pct'];
check(
  placeholders.every((id) => new RegExp(`id="${id}">—<`).test(html)),
  'index.html: Kennzahlen-Elemente sind Platzhalter (werden aus VISITS gefüllt)',
  'index.html: Kennzahlen-Element mit festem Wert statt Platzhalter „—“ gefunden',
);
check(/leaflet\.js"\s+integrity="sha256-/.test(html) && /leaflet\.css"\s+integrity="sha256-/.test(html), 'index.html: Leaflet mit SRI', 'index.html: Leaflet ohne SRI-Hash');

// Tagebuch-Karten (ohne Expeditionsstart-Karte): Anzahl, Datum, Ersparnis
const diary = html.slice(html.indexOf('<div class="visit-log">'), html.indexOf('EINTRAG START'));
const cardChunks = diary.split(/<div class="visit-card (?:swiss|france|germany)">/).slice(1);
check(cardChunks.length === n, `Tagebuch: ${n} Karten = ${n} Besuche`, `Tagebuch: ${cardChunks.length} Karten, aber ${n} Besuche in VISITS`);
const reversed = VISITS.slice().reverse();
cardChunks.forEach((chunk, i) => {
  const v = reversed[i];
  if (!v) return;
  const date = ((chunk.match(/📅<\/span>\s*<span>(\d{1,2}\. \S+ \d{4})/) || [])[1] || '').replace(/^0/, '');
  check(date === fmtDateLong(v.date), `Tagebuch-Karte ${i + 1}: Datum ${date}`, `Tagebuch-Karte ${i + 1} (${v.name}): Datum „${date}“ ≠ VISITS „${fmtDateLong(v.date)}“`);
  const badge = (chunk.match(/visit-badge[^>]*>([\s\S]*?)<\/div>/) || [])[1] || '';
  const eur = (badge.match(/(\d+)\s*€\s*gespart/) || [])[1];
  check(Number(eur) === v.savings, `Tagebuch-Karte ${i + 1}: Ersparnis ${eur} €`, `Tagebuch-Karte ${i + 1} (${v.name}): Badge ${eur} € ≠ VISITS ${v.savings} €`);
});

// Ländersektionen: Zähler = Einträge; besuchte Museen nicht doppelt
const sections = html.split('<div class="museum-section-header"').slice(1);
const visitedNames = VISITS.map((v) => norm(v.name));
for (const sec of sections) {
  const title = sec.slice(0, 120).replace(/<[^>]+>/g, ' ').replace(/^[^>]*>/, '').replace(/\s+/g, ' ').trim();
  const label = title.replace(/[^\p{L}\s]/gu, '').trim().split(/\s+/)[0];
  const badge = sec.match(/museum-count">(\d+) gelistet/);
  if (!badge) continue;
  const body = sec.split('<!-- ══')[0];
  const items = body.match(/<div class="museum-item(?: uninteressant)?">/g) || [];
  check(items.length === Number(badge[1]), `Sektion „${label}“: Zähler ${badge[1]} = Einträge`, `Sektion „${title}“: Zähler ${badge[1]} ≠ ${items.length} Einträge`);
  const names = [...body.matchAll(/class="museum-name">.*?<\/span>(.*?)<\/div>/g)].map((m) => norm(m[1]));
  const dup = names.filter((nm) => visitedNames.includes(nm));
  check(dup.length === 0, `Sektion „${label}“: kein besuchtes Museum doppelt`, `Sektion „${title}“: besuchtes Museum noch in Ländersektion: ${dup.join(', ')}`);
}

// ── 3. DATABASE.MD ───────────────────────────────────────────────────────────
const db = read('DATABASE.MD');
const dbVisits = db.slice(db.indexOf('## TABELLE: visits'), db.indexOf('## TABELLE: museums'));
const dbRows = dbVisits.split('\n').filter((l) => /^\|\s*\d+\s*\|/.test(l)).map((l) => l.split('|').map((c) => c.trim()));
check(dbRows.length === n, `DATABASE.MD visits: ${n} Zeilen`, `DATABASE.MD visits: ${dbRows.length} Zeilen ≠ ${n} Besuche`);
const dbSum = dbRows.reduce((sum, r) => sum + Number(r[7]), 0);
check(dbSum === st.total, `DATABASE.MD visits: Summe ${dbSum} € = ${st.total} €`, `DATABASE.MD visits: Summe ${dbSum} € ≠ VISITS ${st.total} €`);
const dbDates = dbRows.map((r) => r[3]).sort().join();
check(dbDates === VISITS.map((v) => v.date).sort().join(), 'DATABASE.MD visits: Daten stimmen', 'DATABASE.MD visits: Daten weichen von VISITS ab');
const summary = Object.fromEntries(
  db.slice(db.indexOf('## TABELLE: savings_summary')).split('\n').filter((l) => /^\|\s*[a-z_]+\s*\|/.test(l)).map((l) => {
    const c = l.split('|').map((x) => x.trim());
    return [c[1], c[2]];
  }),
);
const expectSummary = {
  total_savings: de(st.total, 2),
  pass_cost: de(PASS_COST, 2),
  net_savings: de(st.net, 2),
  visits_count: String(n),
  avg_savings_per_visit: de(st.avg, 2),
  thermometer_pct: de((st.total / THERMO_MAX) * 100, 2),
  break_even_pct: de(st.bePct, 2),
};
for (const [key, want] of Object.entries(expectSummary)) {
  check(summary[key] === want, `DATABASE.MD savings_summary.${key} = ${want}`, `DATABASE.MD savings_summary.${key}: „${summary[key]}“ ≠ erwartet „${want}“`);
}
// Besucht-Tabelle (museums): Koordinaten, Preis und Datum je Besuch = VISITS
const dbMuseums = db.slice(db.indexOf('### Besucht'), db.indexOf('\n---\n', db.indexOf('### Besucht')))
  .split('\n').filter((l) => /^\|\s*[A-Z]{2}-\d+/.test(l)).map((l) => l.split('|').map((c) => c.trim()));
for (const v of VISITS) {
  const row = dbMuseums.find((r) => norm(r[2]) === norm(v.name));
  if (!row) { errors.push(`DATABASE.MD „Besucht“-Tabelle: „${v.name}“ fehlt`); continue; }
  const same = Number(row[5]) === v.lat && Number(row[6]) === v.lng && Number(row[9]) === v.savings && row[11] === v.date;
  check(same, `DATABASE.MD Besucht: ${v.name} (Koordinaten/Preis/Datum)`, `DATABASE.MD Besucht: „${v.name}“ weicht von VISITS ab (DB: ${row[5]}/${row[6]}, ${row[9]} €, ${row[11]} — VISITS: ${v.lat}/${v.lng}, ${v.savings} €, ${v.date})`);
}
check(new RegExp(`Datenstand Besuche: ${n} `).test(db), 'DATABASE.MD: Datenstand-Zähler', `DATABASE.MD: „Datenstand Besuche“ ≠ ${n}`);

// ── 4. MEMORY.MD ─────────────────────────────────────────────────────────────
const mem = read('MEMORY.MD');
const memCell = (label) => (mem.match(new RegExp(`\\|\\s*${label}\\s*\\|\\s*([^|]+?)\\s*\\|`)) || [])[1] || '';
check(memCell('Bisher gespart') === `~${st.total} €`, 'MEMORY.MD: Bisher gespart', `MEMORY.MD: „Bisher gespart“ = „${memCell('Bisher gespart')}“ ≠ ~${st.total} €`);
check(memCell('Netto-Ersparnis').startsWith(`~${st.net} €`), 'MEMORY.MD: Netto-Ersparnis', `MEMORY.MD: Netto-Ersparnis „${memCell('Netto-Ersparnis')}“ ≠ ~${st.net} €`);
check(memCell('Besuche') === String(n), 'MEMORY.MD: Besuche', `MEMORY.MD: Besuche „${memCell('Besuche')}“ ≠ ${n}`);
check(memCell('Ø Ersparnis/Besuch') === `~${Math.round(st.avg)} €`, 'MEMORY.MD: Ø/Besuch', `MEMORY.MD: Ø/Besuch „${memCell('Ø Ersparnis/Besuch')}“ ≠ ~${Math.round(st.avg)} €`);
const memHeads = (mem.match(/^#### Besuch \d+:/gm) || []).length;
check(memHeads === n, `MEMORY.MD: ${n} Besuchsprotokolle`, `MEMORY.MD: ${memHeads} Besuchsprotokolle ≠ ${n}`);
check(new RegExp(`\\+ ${n} besucht`).test(mem), 'MEMORY.MD: Museum-Liste „+ N besucht“', `MEMORY.MD: „+ ${n} besucht“ in der Museum-Liste fehlt`);

// ── 5. PERSOENLICHE-NOTIZEN.MD ───────────────────────────────────────────────
const notes = read('PERSOENLICHE-NOTIZEN.MD');
const noteHeads = (notes.match(/^## Besuch \d+:/gm) || []).length;
check(noteHeads === n, `PERSOENLICHE-NOTIZEN.MD: ${n} Einträge`, `PERSOENLICHE-NOTIZEN.MD: ${noteHeads} Einträge ≠ ${n}`);

// ── 6. Doku ohne veraltbare Kennzahlen ───────────────────────────────────────
for (const file of ['docs/adm/ARCHITEKTUR.MD', 'docs/usr/ADMIN-BEREICH.MD']) {
  const txt = read(file);
  check(!/const savings\s*=\s*\d+/.test(txt) && !/aktueller Wert:\s*\d+/.test(txt), `${file}: keine festen Kennzahlen`, `${file}: feste Kennzahl (const savings / aktueller Wert) gefunden — auf VISITS verweisen`);
}

// ── Ergebnis ─────────────────────────────────────────────────────────────────
passes.forEach((m) => console.log(`  ✓ ${m}`));
errors.forEach((m) => console.error(`  ✗ ${m}`));
console.log(`\n${passes.length} OK, ${errors.length} Fehler — ${n} Besuche, ${st.total} € gespart, Netto ${st.net} €, ${de(st.bePct, 1)} %`);
process.exit(errors.length ? 1 : 0);
