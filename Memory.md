# Memory.md — Museums-PASS Dreiländereck Expedition

Dieses Dokument enthält alle projektrelevanten Informationen für KI-Assistenten (Gemini, Codex, Claude etc.), die an diesem Projekt weiterarbeiten.

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
| Live-URL | https://selfishlars.github.io/museumcarddreilaendereck/ |

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
- **Jährliche Besucher:** ~400.000

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
- CHF → EUR: Betrag ÷ 0,95 (1 EUR ≈ 0,95 CHF)
- Ersparnis = was wir ohne Pass bezahlt hätten

---

## Museum-Liste

Aktuell ~130 Museen gelistet (von 350+ im Pass enthalten):
- 🇨🇭 Schweiz: 40 gelistet
- 🇩🇪 Deutschland: 62 gelistet
- 🇫🇷 Frankreich: 26 gelistet (ausbaufähig, sollten ~52 sein)

**Sortierung gewünscht:** Innerhalb jedes Landes nach Höhe der Ersparnis (teuerste/größte Ersparnis für 2 Erw. + 2 Kinder zuerst). Derzeit noch nicht umgesetzt.

**Homepages & Preise:** Noch nicht für alle Häuser eingetragen. Hohe Priorität für Museen in der Nähe von Rheinfelden.

**Distanz-Berechnung:** Von Heimatbasis Rheinfelden, Eggbergstr. 52, 79618 Rheinfelden (Baden) zur Zieldestination. Noch nicht für alle Einträge eingetragen.

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

- [ ] Frankreich Museum-Liste auf ~52 Einträge erweitern
- [ ] Homepages für alle Museum-Einträge ergänzen
- [ ] Eintrittspreise (2 Erw. + 2 Kinder 7&9 J.) für alle Museen
- [ ] Distanz von Rheinfelden für jedes Museum
- [ ] Museen nach Ersparnis sortieren (teuerste zuerst)
- [ ] Details für weitere besuchte Museen wie für Château HK & Papiermühle
- [ ] Reguläre Eintrittspreise in den visit-cards vollständig erfassen
