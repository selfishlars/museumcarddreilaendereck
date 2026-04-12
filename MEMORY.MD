---
name: MEMORY.MD
description: Central orchestration and routing hub for the entire project documentation. Defines the active SSOT method (GitHub Issues), project goal, document-routing entry points, and mandatory operating rules for AI sessions.
beschreibung: Zentrale Orchestrierungs- und Routing-Datei der gesamten Projektdokumentation. Definiert das aktive SSOT-Verfahren (GitHub Issues), das Projekt-Zielbild, Doku-Routing-Einstiegspunkte und verbindliche Betriebsregeln für KI-Sessions.
---

# MEMORY.MD — Museums-PASS Dreiländereck Logbuch

> **PFLICHTLEKTÜRE:** Bei Initialisierung, vor/nach größeren Änderungen, vor Commit/Push und wiederholt während längerer Umsetzungsphasen.
> **Konsolidierte Regel:** Vor jedem Commit/Push `DOKU-PROTOKOLL.MD` und `SSOT-VERFAHREN.MD` lesen und beachten.

---

## INIT-MODUS

`repair` — angewendet: 2026-04-12 (INIT_V4_0)

---

## PROJEKT-ZIELBILD

Persönliches Logbuch zur Verfolgung der Museums-PASS Musées Nutzung. Zwei anonyme Erwachsene mit zwei Kindern tracken Besuche, Ersparnisse und den Break-Even ihres Museums-PASS. Technisch: eine einzelne statische `index.html`, gehostet via GitHub Pages.

---

## AKTIVES SSOT-VERFAHREN

**B: GitHub Issues** — Details in [SSOT-VERFAHREN.MD](./SSOT-VERFAHREN.MD)

---

## ISSUE-TRACKING

| Feld | Wert |
|------|------|
| Verfahren | GitHub Issues (SSOT B) |
| ISSUE_PREFIX | `MUSEUM` |
| Tracking-ID-Schema | `MUSEUM-ISSUE-0001`, `MUSEUM-ISSUE-0002`, … |
| GitHub Repo | https://github.com/selfishlars/museumcarddreilaendereck |
| Labels | status:offen, status:in_bearbeitung, status:blockiert, ergebnis:erledigt, ergebnis:verworfen, prio:P0–P3, type:bug/feature/refactor/chore |

---

## DOKU-ROUTING

| Datei | Zweck |
|-------|-------|
| `MEMORY.MD` | Diese Datei — Orchestrierung, Routing, Kernregeln |
| `DOKU-ARCHITEKTUR.MD` | Übersicht aller Doku-Dateien und deren Zusammenspiel |
| `DOKU-PROTOKOLL.MD` | Wann und wie Doku aktualisieren — vor Commit/Push lesen |
| `SSOT-VERFAHREN.MD` | SSOT B (GitHub Issues) — Prozessregeln |
| `AGENTS.MD` | Coding-Conventions und Agent-Ausführungsregeln |
| `docs/adm/ARCHITEKTUR.MD` | Technische Architektur der index.html |
| `docs/adm/INFRASTRUKTUR.MD` | Infrastruktur, Deployment, MCP-Setup |
| `docs/adm/MCP-INFOS.MD` | MCP-Fähigkeitskatalog und Status |
| `docs/adm/SECRETS.MD` | Lokale Secrets — **NICHT in git!** |
| `docs/usr/APP-NAVIGATION.MD` | Nutzerorientierte Navigation und Seitenaufbau |
| `docs/usr/ADMIN-BEREICH.MD` | Admin-Aktionen und Pflegeanleitung |
| `Database.md` | Strukturierte Datenbasis (Besuche, Museen, Preise, Distanzen) |

---

## KERNREGELN

1. **Sprache:** IMMER Deutsch für Ausgaben und Erklärungen. Code-Bezeichner bleiben englisch.
2. **Datenschutz:** Keine echten Namen. Nur: Anon 1, Anon 2, Kind 1, Kind 2.
3. **Secrets:** Keine Credentials in versionierten Dateien.
4. **Dateiformat:** Standard-Dateinamen in GROSSSCHREIBUNG (R-BASE-002).
5. **Single File:** Die gesamte App ist `index.html` — kein Build, kein Framework.
6. **Thermometer:** Nach jedem Besuch `const savings = XXX;` in `updateThermometer()` anpassen.
7. **Break-Even-Marker:** `bottom: 10,32%` (fest, nie ändern!).

---

## MCP-STATUS

→ Details in [docs/adm/MCP-INFOS.MD](./docs/adm/MCP-INFOS.MD)

| MCP-Server | Status | Hinweis |
|------------|--------|---------|
| notebooklm-mcp | ✅ Aktiv | v0.5.11, jacob-bd/notebooklm-mcp-cli via pipx |
| context7 | ✅ Aktiv | Framework-Doku |
| firecrawl | ✅ Aktiv | Web-Scraping |
| github | ✅ Aktiv | GitHub-Operationen |
| playwright | ✅ Aktiv | Browser-Automation |
| postgres | ✅ Aktiv | Datenbank-Zugriff |
| sequential-thinking | ✅ Aktiv | Strukturierte Analyse |
| sharp | ✅ Aktiv | Bildverarbeitung |
| tavily | ✅ Aktiv | Websuche/Extraktion |

---

## SKILLS/AGENTS-STATUS

- Skill-Initialchecks: **nicht durchgeführt** (User-Entscheidung 2026-04-12)
- Standard-Agents verfügbar unter `~/.claude/agents/`
- Geprüfte Pfade: `~/.claude`, `<projekt>/.claude`

---

## SSH

→ Details in `docs/adm/SECRETS.MD` (lokal, nicht in git)
Keine projektspezifischen SSH-Verbindungen bekannt. GitHub-Zugriff via `gh` CLI / GitHub MCP.

---

## TOKEN-EFFIZIENZ

- **Antworttiefe:** moderat (Standard) — kurz, entscheidungsrelevant
- **Kontext-Baseline:** ausstehend

---

---

## PROJEKT-DETAILS

### Pass-Daten

| Feld | Wert |
|------|------|
| Kaufdatum | 07.03.2026 |
| Gültig bis | 07.03.2027 |
| Anzahl Pässe | 2 (Anon 1 + Anon 2) |
| Preis/Pass | 129 € |
| Gesamtinvestition | 258 € |
| Break-Even | 258 € Gesamtersparnis |
| Reisende | Anon 1, Anon 2, Kind 1 (älter), Kind 2 (jünger) |
| Heimatbasis | Rheinfelden (Baden), Deutschland |
| GitHub Repo | https://github.com/selfishlars/museumcarddreilaendereck |
| Live-URL | https://museum.hertenbw.de (CNAME → GitHub Pages) |
| GitHub Pages | https://selfishlars.github.io/museumcarddreilaendereck/ |

**Datenschutz:** Echte Namen entfernt. Nie echte Namen in den Code.

---

### Aktuelle Bilanz

| | Wert |
|--|------|
| Bisher gespart | ~90 € |
| Château HK | 28 € (2×14€, Kinder unter 18 frei) |
| Papiermühle Basel | 56 CHF ≈ 62 € (1 CHF = 1,10 EUR) |
| Noch bis Break-Even | ~168 € |
| Besuche | 2 |
| Ø Ersparnis/Besuch | ~45 € |
| Thermometer-Skala | 0–2.500 € (theoretisches Maximum) |

**⚠️ WICHTIG: Thermometer-Berechnung nach JEDEM Besuch überprüfen!**

**Währungsumrechnung:** 1 CHF = 1,10 EUR / 1 EUR = ~0,91 CHF

**Thermometer-Aufbau:**
- Kugel (Bulb) = dekorative Basis (0 €)
- Röhrchen (Tube) = 500px Höhe, Skala 0€ (unten) bis 2500€ (oben)
- Break-Even-Marker = 258€ = 10,32% der Röhrchenhöhe (fest)

**Füllstandsberechnung:**
- `mercury height %` = `Gesamtersparnis / 2500 * 100` (z.B. 90/2500 = 3,60%)
- `mercury height px` = 3,60% * 500px = 18px
- Break-Even-Fortschritt (Header) = `Gesamtersparnis / 258 * 100`

**Farbverlauf (dynamisch via JavaScript):**
- Unter Break-Even: Gradient dunkelrot → rot → orange → hellrot
- Über Break-Even: Gradient hellgrün → grün → dunkelgrün

---

### Besuchsprotokoll

#### Besuch 1: Château du Haut-Kœnigsbourg
- **Datum:** 07.03.2026
- **Ort:** Château du Haut-Kœnigsbourg, 67600 Orschwiller, Elsass, Frankreich
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 14 € / Erw., Kinder unter 18 frei
- **Ersparnis:** 2 × 14 € = **28 €**
- **Homepage:** https://www.haut-koenigsbourg.fr

#### Besuch 2: Basler Papiermühle
- **Datum:** 22.03.2026
- **Ort:** Basler Papiermühle, St. Alban-Tal 37, 4052 Basel, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 2 Erw. + 2 Kinder = 56 CHF ≈ 62 € (1 CHF = 1,10 EUR)
- **Ersparnis:** **56 CHF ≈ 62 €**
- **Homepage:** https://www.papiermuseum.ch

---

### Museum-Liste (Übersicht)

154 Museen gelistet + 2 besucht (von 350+ im Pass):
- 🇨🇭 Schweiz: 40 gelistet (1 besucht: Basler Papiermühle)
- 🇩🇪 Deutschland: 62 gelistet
- 🇫🇷 Frankreich: 52 gelistet (1 besucht: Château HK)

**Sortierung:** Top 5 je Land nach Preis (absteigend), Rest nach Distanz (aufsteigend).

**Top 5 Preise (ca.-Werte, recherchiert 2026-03-28):**
- 🇨🇭 CH: Ballenberg ~103€, Zentrum Paul Klee ~72€, KM Basel ~55€, Tinguely ~38€, Bern. HM ~34€
- 🇩🇪 DE: Fabergé ~44€, Technoseum ~39€, Vogtsbauernhof ~34€, Frieder Burda ~28€, Bad. LM ~24€
- 🇫🇷 FR: Cité Automobile ~48€, Cité du Train ~46€, Saline Royale ~38€, Citadelle Besançon ~36€, Pompidou-Metz ~24€

---

### Neuen Besuch hinzufügen (Checkliste)

1. Neues `<div class="visit-card swiss|france|germany">` in `.visit-log`
2. Ersparnisbetrag in Euro berechnen (CHF × 1,10 = EUR)
3. **JavaScript:** `const savings = XXX;` in `updateThermometer()` aktualisieren
4. Gesamtersparnis im `.stats-grid` aktualisieren
5. Thermometer-Bulb-Label und Info-Panel anpassen
6. `thermo-pct` = `Gesamtersparnis / 258 * 100`
7. Chronik-Eintrag hinzufügen (chronologisch!)
8. Museum in `.museum-grid` als `.visited` markieren
9. **Break-Even-Marker** bleibt bei `bottom: 10,32%` (nie ändern!)
