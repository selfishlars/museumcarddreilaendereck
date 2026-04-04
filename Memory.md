# Memory.md — Museums-PASS Dreiländereck Expedition

Dieses Dokument enthält alle projektrelevanten Informationen für KI-Assistenten (Gemini, Codex, Claude etc.), die an diesem Projekt weiterarbeiten.

---

## ZWINGENDE VORGABEN

**Sprache:** IMMER Deutsch für Ausgaben und "Thinking"-Prozess-Beschreibungen verwenden.
- Alle Antworten an den Benutzer auf Deutsch
- Alle Denkprozesse / Erklärungen was ich tue auf Deutsch
- Das gilt auch für neue Sessions und alle Agenten

---

## Projekt-Überblick

**Was ist das?**
Eine einzelne statische HTML-Seite (`index.html`) — kein Framework, kein Build-System, keine npm-Dependencies. Alles (CSS + JS) ist inline im HTML. Sie wird über **GitHub Pages** unter `https://selfishlars.github.io/museumcarddreilaendereck/` gehostet.

**Zweck:** Persönliches Logbuch zur Verfolgung der Museums-PASS Musées Nutzung. Zwei anonyme Erwachsene ("Anon 1" & "Anon 2") mit zwei Kindern ("Kind 1" älteres, "Kind 2" jüngeres) verfolgen Besuche, Ersparnisse und den Break-Even ihres Museums-PASS.

---

## Pass-Daten

| Feld | Wert |
|------|------|
| Kaufdatum | 07.03.2026 |
| Gültig bis | 07.03.2027 |
| Anzahl Pässe | 2 (Anon 1 + Anon 2) |
| Preis/Pass | 129 € |
| Gesamtinvestition | 258 € |
| Break-Even | 258 € Gesamtersparnis |
| Reisende | Anon 1, Anon 2, Kind 1 (älter), Kind 2 (jünger: 7 & 9 Jahre) |
| Heimatbasis | Rheinfelden (Baden), Eggbergstr. 52, 79618 Rheinfelden (Baden), Deutschland |
| GitHub Repo | https://github.com/selfishlars/museumcarddreilaendereck |
| Live-URL | https://museum.hertenbw.de (CNAME → GitHub Pages) |
| GitHub Pages | https://selfishlars.github.io/museumcarddreilaendereck/ (Fallback-URL) |
| **DNS-Probleme?** | Im Repo → Settings → Pages → Custom Domain prüfen/ändern |

**Datenschutz:** Echte Namen wurden entfernt. "Anon 1" und "Anon 2" sind die Erwachsenen, "Kind 1" und "Kind 2" sind die Kinder. Nie echte Namen in den Code schreiben.

---

## Aktuelle Bilanz

| | Wert |
|--|------|
| Bisher gespart | ~87 € |
| Château HK | 28 € (2×14€, Kinder unter 18 frei) |
| Papiermühle Basel | 56 CHF ≈ 59 € (Kurs ~0,95 CHF/€) |
| Noch bis Break-Even | ~171 € |
| Besuche | 2 |
| Ø Ersparnis/Besuch | ~44 € |
| Thermometer-Skala | 0–2.500 € (theoretisches Maximum) |

**Thermometer-Berechnung:**
- `mercury height %` = `Gesamtersparnis / 2500 * 100` (z.B. 87/2500 = 3,48%)
- `break-even marker bottom` = `258/2500*100` = 10,32% (fest)
- Break-Even-Fortschritt (für Header) = `Gesamtersparnis / 258 * 100`

---

## Besuchsprotokoll

### Besuch 1: Château du Haut-Kœnigsbourg
- **Datum:** 07.03.2026 (Kauftag des Passes)
- **Ort:** Château du Haut-Kœnigsbourg, 67600 Orschwiller, Elsass, Frankreich
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 14 € / Erw., Kinder unter 18 frei
- **Ersparnis:** 2 × 14 € = **28 €**
- **Homepage:** https://www.haut-koenigsbourg.fr
- **Jährliche Besucher:** ~500.000

### Besuch 2: Basler Papiermühle
- **Datum:** 22.03.2026
- **Ort:** Basler Papiermühle, St. Alban-Tal 37, 4052 Basel, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 2 Erw. + 2 Kinder = 56 CHF ≈ 59 € (Kurs 0,95 CHF/€)
- **Ersparnis:** **56 CHF ≈ 59 €**
- **Homepage:** https://www.papiermuseum.ch

---

## Architektur & Technik

### Datei-Struktur
```
museumcarddreilaendereck/
├── index.html          ← Die gesamte App (CSS + JS inline)
├── Memory.md           ← Diese Datei (für KIs, in git)
├── AGENTS.md           ← Coding-Conventions für Agenten
├── Database.md         ← Strukturierte Datenbasis (Besuche, Museen, Preise, Distanzen)
├── CLAUDE.md           ← Claude Code Anweisungen (gitignored)
└── .gitignore          ← Ignoriert CLAUDE.md, .claude/, memory/
```

### CSS Design-System (`:root` Custom Properties)
```css
--parchment: #f4e8c1    /* Haupthintergrund */
--parchment-dark: #e8d5a3
--ink: #2c1810          /* Text */
--ink-light: #4a2c1a
--gold: #b8860b         /* Akzente */
--gold-light: #daa520
--rust: #8b3a2a         /* Warnung/Negativ */
--forest: #2d4a2d       /* Positiv/Gewinn */
--forest-light: #3d6b3d
--leather: #6b3a2a      /* Sekundär */
```

### Schriftarten (Google Fonts)
- **Playfair Display** — Überschriften, Titel
- **Crimson Text** — Fließtext (Body-Font, 18px Basis)
- **Special Elite** — Labels, Zahlen, Monospace-Elemente

### Seiten-Aufbau (in Reihenfolge)
1. `<header class="page-header">` — Titel, Pass-Metadaten
2. `.pass-holders` — Zwei Pass-Karten (Anon 1, Anon 2)
3. `.stats-grid` — Expeditions-Bilanz Dashboard
4. `.map-section` — SVG-Karte Dreiländereck
5. `.thermo-section` — Break-Even Thermometer (0–2.500 €)
6. `.visit-log` — Besuchs-Tagebuch (`.visit-card.swiss/.france/.germany`)
7. `.timeline` — Chronik
8. `.info-grid` — Pass-Informationen (4 Karten)
9. `.museum-grid` — Alle Museums-PASS Museen
10. `<footer>`
11. `<script>` — Countdown-Timer für Ablaufdatum

### Museum-Karten-Struktur (`.museum-grid`)
Jedes Museum hat folgende HTML-Struktur:
```html
<div class="museum-item [visited]">
  <div class="museum-name"><span class="museum-flag">🇨🇭</span>Name</div>
  <div class="museum-city">Stadt, Land</div>
  <div class="museum-meta">
    <span class="museum-price">💶 ~XX €*</span>
    <span class="museum-dist">📍 XXkm</span>
    <a class="museum-web" href="URL" target="_blank" rel="noopener">🌐 website.de</a>
  </div>
</div>
```
- `.visited` = bereits besucht (goldener Rahmen)
- `.museum-price` (forest green) — Preis für 2 Erw. + 2 Kinder; `~` und `*` = ca.-Wert
- `.museum-dist` (leather) — Straßendistanz von Rheinfelden (Baden)
- `.museum-web` (gold) — Webseite wenn bekannt
- `.museum-price-note` — Disclaimer nach Länder-Header (geschätzte Preise)

### Sortierung der Museen
Innerhalb jedes Landes:
1. Top 5 mit recherchierten Preisen → absteigend nach Preis
2. Restliche Museen → aufsteigend nach Distanz von Rheinfelden

### Länder-Abschnitte im `.museum-grid`
```html
<div class="country-section">
  <div class="country-header">
    <span class="country-flag">🇨🇭</span>
    <h3>Schweiz</h3>
    <span class="count-badge">40 gelistet</span>
  </div>
  <p class="museum-price-note">* Angaben ca., Stand Trainingsdaten. Bitte vor Besuch prüfen.</p>
  <!-- .museum-item Karten -->
</div>
```

### JavaScript
Nur ein kleines Snippet am Ende: berechnet `days-remaining` bis 07.03.2027.

---

## Daten aktualisieren

### Neuen Besuch hinzufügen:
1. Neues `<div class="visit-card swiss/france/germany">` in `.visit-log` einfügen
2. Ersparnisbetrag in Euro berechnen (CHF÷0,95 für Schweiz)
3. Gesamtersparnis im `.stats-grid` aktualisieren
4. Thermometer anpassen: `height: X%` = `neue_gesamtersparnis/2500*100`
5. Thermometer-Bulb-Label und Info-Panel anpassen
6. `thermo-pct` = `neue_gesamtersparnis/258*100`
7. Chronik-Eintrag hinzufügen (chronologisch!)
8. Museum in `.museum-grid` als `.visited` markieren

### Eintrittspreise-Logik:
- Kinder unter 18 oft frei (CH, FR)
- Familienticket wenn verfügbar vorziehen
- CHF → EUR: Betrag × 1,10 (1 CHF = 1,10 EUR)
- Ersparnis = was wir ohne Pass bezahlt hätten

---

## Museum-Liste

Aktuell 154 Museen gelistet + 2 besuchte (von 350+ im Pass enthalten):
- 🇨🇭 Schweiz: 40 gelistet (davon 1 besucht: Basler Papiermühle)
- 🇩🇪 Deutschland: 62 gelistet
- 🇫🇷 Frankreich: 52 gelistet (davon 1 besucht: Château HK)

**Sortierung:** Innerhalb jedes Landes: Top 5 nach Preis (absteigend), Rest nach Distanz (aufsteigend). ✅ Umgesetzt.

**Top 5 Preise recherchiert (Stand 2026-03-28, ca.-Werte):**
- 🇨🇭 CH: Ballenberg ~103€, Zentrum Paul Klee ~72€, KM Basel ~55€, Tinguely ~38€, Bern. HM ~34€
- 🇩🇪 DE: Fabergé ~44€, Technoseum ~39€, Vogtsbauernhof ~34€, Frieder Burda ~28€, Bad. LM ~24€
- 🇫🇷 FR: Cité Automobile ~48€, Cité du Train ~46€, Saline Royale ~38€, Citadelle Besançon ~36€, Pompidou-Metz ~24€

**Preise:** Für Top 5 je Land eingetragen (ca.-Werte, als `~XX €*` markiert). Restliche Museen: Preise ausstehend.

**Distanz-Berechnung:** Von Heimatbasis Rheinfelden (47.555°N, 7.767°E) — Straßendistanzen für alle 154+ Museen eingetragen.

**Webseiten:** Für die meisten Museen eingetragen, einige noch offen.

**WebFetch erlaubt für:** `www.museumspass.com` (in `.claude/settings.local.json` konfiguriert)

---

## Deployment

Jeder `git push` auf `main` deployt automatisch via GitHub Pages (ca. 30–90 Sekunden Verzögerung).

```bash
git add index.html Memory.md
git commit -m "feat: ..."
git push
```

---

## Offene Aufgaben / TODO

- [x] Frankreich Museum-Liste auf 52 Einträge erweitert
- [x] Distanz von Rheinfelden für alle Museen eingetragen
- [x] Museen nach Ersparnis sortieren (Top 5 je Land, Rest nach Distanz) ✅
- [x] Top 5 Preise pro Land recherchiert und eingetragen ✅
- [x] Database.md erstellt mit strukturierten Daten ✅
- [x] persoenliche_notizen.md angelegt (Papiermühle-Erinnerungen eingetragen) ✅
- [x] **NotebookLM via MCP eingebunden** — `notebooklm-mcp-cli` v0.5.11 via pipx, Auth mit dediziertem Google-Account ✅ (siehe infra-doku.md)
- [ ] Persönliche Notizen für Château HK ergänzen
- [ ] Eintrittspreise für alle verbleibenden Museen (peu à peu — erst nach MCP-Setup)
- [ ] Homepages für noch fehlende Museum-Einträge ergänzen
- [ ] Reguläre Eintrittspreise in den visit-cards vollständig erfassen
