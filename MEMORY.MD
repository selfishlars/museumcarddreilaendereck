---
name: MEMORY.MD
description: Central orchestration and routing hub for the entire project documentation. Defines the active issue-tracking method (GitHub Issues), project goal, document-routing entry points, and mandatory operating rules for AI sessions.
beschreibung: Zentrale Orchestrierungs- und Routing-Datei der gesamten Projektdokumentation. Definiert das aktive Issue-Tracking-Verfahren (GitHub Issues), das Projekt-Zielbild, Doku-Routing-Einstiegspunkte und verbindliche Betriebsregeln für KI-Sessions.
---

# MEMORY.MD — Museums-PASS Dreiländereck Logbuch

> **PFLICHTLEKTÜRE:** Bei Initialisierung, vor/nach größeren Änderungen, vor Commit/Push und wiederholt während längerer Umsetzungsphasen.
> **Konsolidierte Regel:** Vor jedem Commit/Push `DOKU-PROTOKOLL.MD` und `ISSUE-TRACKING-VERFAHREN.MD` lesen und beachten.

---

## INIT-MODUS

`repair` — angewendet: 2026-04-12 (INIT_V4_0)
`reconcile` — angewendet: 2026-04-12 (INIT_V5_0)

---

## PROJEKT-ZIELBILD

Persönliches Logbuch zur Verfolgung der Museums-PASS Musées Nutzung. Zwei anonyme Erwachsene mit zwei Kindern tracken Besuche, Ersparnisse und den Break-Even ihres Museums-PASS. Technisch: eine einzelne statische `index.html`, gehostet via GitHub Pages.

---

## AKTIVES ISSUE-TRACKING-VERFAHREN

**B: GitHub Issues** — Details in [ISSUE-TRACKING-VERFAHREN.MD](./ISSUE-TRACKING-VERFAHREN.MD)

---

## ISSUE-TRACKING

| Feld | Wert |
|------|------|
| Verfahren | GitHub Issues (Verfahren B) |
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
| `ISSUE-TRACKING-VERFAHREN.MD` | Issue-Tracking B (GitHub Issues) — Prozessregeln |
| `AGENTS.MD` | Coding-Conventions und Agent-Ausführungsregeln |
| `docs/adm/ARCHITEKTUR.MD` | Technische Architektur der index.html |
| `docs/adm/INFRASTRUKTUR.MD` | Infrastruktur, Deployment, MCP-Setup |
| `docs/adm/MCP-INFOS.MD` | MCP-Fähigkeitskatalog und Status |
| `docs/adm/SECRETS.MD` | Lokale Secrets — **NICHT in git!** |
| `docs/usr/APP-NAVIGATION.MD` | Nutzerorientierte Navigation und Seitenaufbau |
| `docs/usr/ADMIN-BEREICH.MD` | Admin-Aktionen und Pflegeanleitung |
| `DATABASE.MD` | Strukturierte Datenbasis (Besuche, Museen, Preise, Distanzen) |
| `PERSOENLICHE-NOTIZEN.MD` | Tagebuch-Gedächtnis: persönliche Erlebnisse, Highlights und Erinnerungen je Museumsbesuch |
| `tools/check-consistency.mjs` | Konsistenzprüfung `index.html` ↔ Doku (`node tools/check-consistency.mjs`) — vor jedem Commit |

---

## KERNREGELN

1. **Sprache:** IMMER Deutsch für Ausgaben und Erklärungen. Code-Bezeichner bleiben englisch.
2. **Datenschutz:** Keine echten Namen. Nur: Anon 1, Anon 2, Kind 1, Kind 2.
3. **Secrets:** Keine Credentials in versionierten Dateien.
4. **Dateiformat:** Standard-Dateinamen in GROSSSCHREIBUNG (R-BASE-002).
5. **Single File:** Die gesamte App ist `index.html` — kein Build, kein Framework.
6. **Kennzahlen:** Einzige Quelle ist das `VISITS`-Array in `index.html` — Stat-Karten, Thermometer, Header, Pins werden daraus berechnet (nicht von Hand pflegen). Nach jeder Änderung `node tools/check-consistency.mjs` ausführen.
7. **Break-Even-Marker:** `bottom: 10,32%` (fest, nie ändern!).

---

## MCP-STATUS

→ Details in [docs/adm/MCP-INFOS.MD](./docs/adm/MCP-INFOS.MD)

| MCP-Server | Status | Hinweis |
|------------|--------|---------|
| notebooklm-mcp | ✅ Aktiv | v0.9.6, jacob-bd/notebooklm-mcp-cli via pipx |
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
| Bisher gespart | ~375 € |
| Château HK | 28 € (2×14€, Kinder unter 18 frei) |
| Papiermühle Basel | 56 CHF ≈ 62 € (1 CHF = 1,10 EUR) |
| Museum.BL Liestal | 16 CHF ≈ 18 € (1 CHF = 1,10 EUR) |
| Antikenmuseum Basel | 24 CHF ≈ 26 € (1 CHF = 1,10 EUR) |
| Schloss Lenzburg | 35 CHF ≈ 39 € (Familienticket A, 1 CHF = 1,10 EUR) |
| MUKS Riehen | 28 CHF ≈ 31 € (2×14 CHF, Kinder bis 16 frei) |
| Fondation Beyeler | 50 CHF ≈ 55 € (2×25 CHF, unter 25 J. frei) |
| Zoo Mulhouse | 66 € (Tribu-Ticket für 2 Erw. + 2 Kinder unter 16) |
| Écomusée d'Alsace | 50 € (Familienticket 2 Erw. + 2 Kinder) |
| Noch bis Break-Even | **0 € — BREAK-EVEN ERREICHT am 19.07.2026! (375 € > 258 €)** |
| Netto-Ersparnis | ~117 € (375 € Gesamtersparnis − 258 € Passkosten) |
| Besuche | 9 |
| Ø Ersparnis/Besuch | ~42 € |
| Thermometer-Skala | 0–2.500 € (theoretisches Maximum) |

**⚠️ WICHTIG: Thermometer-Berechnung nach JEDEM Besuch überprüfen!**

**Währungsumrechnung:** 1 CHF = 1,10 EUR / 1 EUR = ~0,91 CHF

**Thermometer-Aufbau:**
- Kugel (Bulb) = Basis (0 €) — wird seit 19.07.2026 via JS dynamisch mit eingefärbt (rot/grün, passend zum Quecksilber)
- Röhrchen (Tube) = 500px Höhe, Skala 0€ (unten) bis 2500€ (oben)
- Break-Even-Marker = 258€ = 10,32% der Röhrchenhöhe (fest)

**Füllstandsberechnung:**
- `mercury height %` = `Gesamtersparnis / 2500 * 100` (z.B. 375/2500 = 15,00%)
- Break-Even-Fortschritt (Header) = `Gesamtersparnis / 258 * 100` (z.B. 375/258 = 145,35%)
- Netto-Ersparnis = `max(0, Gesamtersparnis - 258)` (z.B. 375 - 258 = 117 €)

**Farbverlauf (dynamisch via JavaScript, Bulb + Quecksilber):**
- Unter Break-Even: Bulb dunkelrot; Quecksilber dunkelrot (unten) → orange → hellrot (oben)
- Über Break-Even: Bulb dunkelgrün; Quecksilber dunkelgrün (unten) → hellgrün (oben)
- **Regel:** Quecksilber-Farbe bei 0% == Bulb-Grundton → Bulb und Säule wirken als ein Flüssigkeitskörper

---

### Besuchsprotokoll

#### Besuch 9: Écomusée d'Alsace
- **Datum:** 20.09.2026
- **Ort:** Écomusée d'Alsace, Chemin du Grosswald, 68190 Ungersheim, Haut-Rhin, Elsass, Frankreich
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt (Saison 2026):** Familienticket 2 Erw. + 2 Kinder = 50 € (einzeln: Erw. 16,50 €, Kind 4–17 J. 11 € = 55 €)
- **Ersparnis:** **50 €** (günstigste reguläre Variante)
- **Besucherzahl:** 190.858 im Jahr 2024 (L'Alsace)
- **Highlights:** Leckere Picknick-Pause; Burgturm (Kind 2 und das Plumpsklo); botanische Gestaltung der Anlage; Tierhaltung
- **Homepage:** https://www.ecomusee.alsace

#### Besuch 8: Parc Zoologique & Botanique de Mulhouse
- **Datum:** 08.08.2026
- **Ort:** 111 avenue de la 1ère Division Blindée, 68100 Mulhouse, Elsass, Frankreich
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2; zusätzliche Begleitung: Oma und Opa
- **Regulärer Eintritt:** Tribu-Ticket für 2 Erwachsene + 2 Kinder unter 16 = 66 €; Begleitung nicht in die Ersparnis eingerechnet
- **Ersparnis:** **66 €**
- **Besucherzahl:** 326.560 im Jahr 2025 (Mulhouse Alsace Agglomération)
- **Highlights:** Tolles gemeinsames Picknick mit Oma und Opa; Streichelzoo für die Kinder; die beiden Wölfe aus nächster Nähe für Anon 1 und Anon 2
- **Homepage:** https://www.zoo-mulhouse.com

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

#### Besuch 3: Museum.BL
- **Datum:** 12.04.2026
- **Ort:** Museum.BL, Zeughausplatz 28, 4410 Liestal, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 2 Erw. = 16 CHF, Kinder frei
- **Ersparnis:** **16 CHF ≈ 18 €**
- **Homepage:** https://museum.bl.ch

#### Besuch 4: Antikenmuseum Basel und Sammlung Ludwig
- **Datum:** 26.04.2026
- **Ort:** St. Alban-Graben 5, 4051 Basel, Kanton Basel-Stadt, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 2 Erw. = 24 CHF, Kinder unter 13 frei
- **Ersparnis:** **24 CHF ≈ 26 €**
- **Highlight:** Ägypten-Ausstellung (Mumien, Sarkophage)
- **Einschätzung:** Wenig kindergerecht, kaum Interaktivität — eher für Erwachsene
- **Homepage:** https://www.antikenmuseumbasel.ch

#### Besuch 7: Fondation Beyeler 🏆 BREAK-EVEN
- **Datum:** 19.07.2026 (2. Museum am selben Tag, direkt nach dem MUKS)
- **Ort:** Fondation Beyeler, Baselstrasse 101, 4125 Riehen, Kanton Basel-Stadt, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 2 Erw. = 50 CHF (25 CHF/Erw.), unter 25 J. frei
- **Ersparnis:** **50 CHF ≈ 55 €**
- **Highlight:** Vorgarten, Monet-Bilder, moderne Kunstinstallationen (Kinder!), die hohen ästhetischen Räume
- **Meilenstein:** 🏆 **Break-Even erreicht — 259 € Gesamtersparnis übersteigt die 258 € Pass-Investition!**
- **Homepage:** https://www.fondationbeyeler.ch

#### Besuch 6: MUKS — Museum Kultur & Spiel Riehen
- **Datum:** 19.07.2026
- **Ort:** MUKS, Baselstrasse 34, 4125 Riehen, Kanton Basel-Stadt, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2
- **Regulärer Eintritt:** 2 Erw. = 28 CHF (14 CHF/Erw.), Kinder bis 16 frei — Preis vor Ort bestätigt (recherchierte museums.ch-Angabe von 10 CHF war veraltet)
- **Ersparnis:** **28 CHF ≈ 31 €**
- **Highlight:** Kamelreiten mit wechselndem Hintergrund, Schatten-Theater-Installation
- **Einschätzung:** Klein aber fein, sehr interaktiv; schattiger Innenhof ideal für Picknick
- **Homepage:** https://www.muks.ch

#### Besuch 5: Schloss Lenzburg
- **Datum:** 21.06.2026
- **Ort:** Schloss Lenzburg, 5600 Lenzburg, Kanton Aargau, Schweiz
- **Besucher:** Anon 1, Anon 2, Kind 1, Kind 2 + 2 Gastkinder (befreundete Familie, gratis dank Pässen)
- **Regulärer Eintritt:** Erw. CHF 14, Kind (4–16 J.) CHF 8, Familienticket A (2 Erw. + max. 5 Kinder) CHF 35
- **Ersparnis:** **35 CHF ≈ 39 €** (nur eigene Familie gerechnet, Familienticket A)
- **Highlight:** Wunderschöner Ausblick, tolle Schlossanlage, interaktive Anlage
- **Einschätzung:** Sehr familienfreundlich; Ärgernis: penible Mitarbeiterin verbot Wasserspritzpistolen am superheißen Sommertag
- **Homepage:** https://www.schloss-lenzburg.ch

---

### Museum-Liste (Übersicht)

151 Museen gelistet + 9 besucht (von 350+ im Pass):
- 🇨🇭 Schweiz: 37 gelistet (6 besucht: Basler Papiermühle, Museum.BL, Antikenmuseum Basel, Schloss Lenzburg, MUKS Riehen, Fondation Beyeler)
- 🇩🇪 Deutschland: 62 gelistet
- 🇫🇷 Frankreich: 52 gelistet (3 besucht: Château HK, Zoo Mulhouse, Écomusée d'Alsace)

**Sortierung:** Top 5 je Land nach Preis (absteigend), Rest nach Distanz (aufsteigend).

**Top 5 Preise der noch nicht besuchten Ziele (ca.-Werte, recherchiert 2026-03-28, FR aktualisiert 2026-08-08):**
- 🇨🇭 CH: Ballenberg ~103€, Zentrum Paul Klee ~72€, KM Basel ~55€, Tinguely ~38€, Bern. HM ~34€
- 🇩🇪 DE: Fabergé ~44€, Technoseum ~39€, Vogtsbauernhof ~34€, Frieder Burda ~28€, Bad. LM ~24€
- 🇫🇷 FR: Cité Automobile ~48€, Cité du Train ~46€, Saline Royale ~38€, Citadelle Besançon ~36€, Centre Pompidou-Metz ~24€

---

### Neuen Besuch hinzufügen (Checkliste)

0. **Arbeitsstand prüfen:** `git fetch` und mit `origin/main` vergleichen (ggf. `git pull --ff-only`), bevor irgendetwas geändert wird
1. **`VISITS`-Eintrag** am **Ende** des Arrays in `index.html` (Abschnitt „DATENQUELLE"): `date`, `flag`, `name`, `place`, `cityLabel`, `savings` (ganzzahlig €, CHF × 1,10 gerundet), `priceLabel`, `dist`, `url`, `lat`/`lng`. Daraus werden **automatisch** erzeugt: alle 6 Stat-Karten, Thermometer (Füllhöhe, Bulb-Label, Info-Panel inkl. Besuche, Prozent, Fußzeile), Header („Letzte Expedition", „Entdeckte Museen"), Footer-Datum, „Bereits besucht"-Eintrag, Leaflet-Pin
2. Neues `<div class="visit-card swiss|france|germany">` als **erstes** Kind in `.visit-log` (neueste Einträge oben)
3. **`📊 Besucher/Jahr` recherchieren** und im visit-detail eintragen (Pflichtfeld!)
4. Museum aus der Ländersektion (🇨🇭/🇩🇪/🇫🇷) **entfernen** + Sektions-Zähler −1 (falls dort gelistet)
5. **Break-Even-Marker** bleibt bei `bottom: 10,32%` (nie ändern!)
6. MEMORY.MD (Bilanz-Tabelle, Besuchsprotokoll, Museum-Liste-Zähler), DATABASE.MD (visits-Tabelle **und** `savings_summary`-Tabelle!) und PERSOENLICHE-NOTIZEN.MD aktualisieren
7. **`node tools/check-consistency.mjs` ausführen — muss grün sein**
8. GitHub Issue mit `ergebnis:erledigt` schließen
