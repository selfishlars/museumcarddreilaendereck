---
name: ARCHITEKTUR.MD
description: Technical architecture and data model reference for implementation work. Contains schemas, service boundaries, workflow logic, core hooks/APIs, and major technical constraints for safe and consistent changes.
beschreibung: Technische Architektur- und Datenmodell-Referenz für die Implementierung. Enthält Schemata, Workflow-Logik, zentrale Hooks/APIs und wesentliche technische Randbedingungen.
---

# ARCHITEKTUR.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

Technische Referenz für die Implementierung der `index.html`. Enthält Aufbau, CSS-System, JS-Logik und Datenmodell.

---

## AKTUELLER STAND

Stand: 2026-04-12 — Single-File App, kein Build-System, kein Framework.

---

## TECH-STACK

| Komponente | Detail |
|------------|--------|
| App-Datei | `index.html` (alle CSS + JS inline) |
| Hosting | GitHub Pages (CNAME: museum.hertenbw.de) |
| Schriftarten | Google Fonts (Playfair Display, Crimson Text, Special Elite) |
| Framework | keines |
| Build | keines |
| Dependencies | keine (außer Google Fonts via CDN) |

---

## SEITEN-AUFBAU (Reihenfolge)

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
11. `<script>` — Countdown-Timer, Thermometer, Top20

---

## CSS DESIGN-SYSTEM (`:root` Custom Properties)

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

Kommentar-Separatoren im CSS:
```css
/* ═══════════════════════════════════
   SECTION NAME
   ═══════════════════════════════════ */
```

---

## MUSEUM-KARTEN-DATENMODELL

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

- `.visited` = goldener Rahmen (bereits besucht)
- `.museum-price` = Preis für 2 Erw. + 2 Kinder; `~` + `*` = ca.-Wert
- `.museum-dist` = Straßendistanz von Rheinfelden (Baden), 47.555°N, 7.767°E

---

## LÄNDER-ABSCHNITTE

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

**Sortierung innerhalb jedes Landes:**
1. Top 5 mit recherchierten Preisen → absteigend nach Preis
2. Restliche Museen → aufsteigend nach Distanz

---

## JAVASCRIPT-FUNKTIONEN

| Funktion | Zweck |
|----------|-------|
| `updateThermometer()` | Füllhöhe + Farbverlauf dynamisch berechnen |
| `updateCountdown()` | Verbleibende Tage bis Pass-Ablauf anzeigen |
| `renderTop20()` | Nächste 20 Ziele rendern |

**Thermometer-Konstante (nach jedem Besuch anpassen):**
```javascript
const savings = 87;  // Gesamtersparnis in EUR
```

**Berechnungslogik:**
- Füllhöhe: `savings / 2500 * 100` %
- Farbverlauf: rot (unter 258€) / grün (über 258€)
- Break-Even-Marker: `bottom: 10,32%` (fest, 258/2500*100)

---

## BESUCHS-KARTEN-DATENMODELL

```html
<div class="visit-card swiss|france|germany">
  <!-- Inhalt je Besuch -->
</div>
```

---

## TECHNISCHE CONSTRAINTS

- Keine ES Modules — alles inline
- Google Fonts können offline fehlen
- SVG-Decorators inline als data-URI
- CSS-Zeilen ca. 7–2615, JS-Zeilen ca. 2617–2739 (Stand März 2026)
- CHF → EUR: Betrag ÷ 0,95 (AGENTS.MD nennt × 1,10 — bitte vereinheitlichen)
