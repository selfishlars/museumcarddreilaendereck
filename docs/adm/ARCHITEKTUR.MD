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

Stand: 2026-05-01 — Single-File App, kein Build-System, kein Framework. Leaflet.js via CDN für interaktive Karte.

---

## TECH-STACK

| Komponente | Detail |
|------------|--------|
| App-Datei | `index.html` (CSS + JS inline, Leaflet extern) |
| Hosting | GitHub Pages (CNAME: museum.hertenbw.de) |
| Schriftarten | Google Fonts (Playfair Display, Crimson Text, Special Elite) via CDN |
| Karte | Leaflet.js 1.9.4 via unpkg CDN + CartoDB Voyager Tiles (kein API-Key) |
| Framework | keines |
| Build | keines |
| Externe Dependencies | Leaflet CSS + JS (unpkg.com), Google Fonts |

---

## SEITEN-AUFBAU (Reihenfolge)

1. `<header class="page-header">` — Titel, Pass-Metadaten, Kompassrosen-SVG
2. `.pass-holders` — Zwei Pass-Karten (Anon 1, Anon 2)
3. `.stats-grid` — Expeditions-Bilanz Dashboard (5 Stat-Cards)
4. `.map-section` — **Leaflet/OpenStreetMap-Karte** (interaktiv, klickbare Pins)
5. `.thermo-section` — Break-Even Thermometer (0–2.500 €)
6. `.visit-log` — Besuchs-Tagebuch (`.visit-card.swiss/.france/.germany`, neueste zuerst)
7. `.info-grid` — Pass-Informationen (4 Karten)
8. `.museum-grid` — Alle Museums-PASS Museen (Besucht + Länder sortiert)
9. `#top20-section` — Top 20 nächste Ziele (JS-generiert aus DOM)
10. `<footer>`
11. `<script>` (inline) — `buildTop20()`, `renderTop20()`, `updateThermometer()`, `updateCountdown()`
12. `<script src="leaflet.js">` + Leaflet-Init (IIFE, nach inline-script)

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

| Funktion/Block | Zweck | Datei-Position |
|----------------|-------|----------------|
| `buildTop20()` | Alle `.museum-item:not(.visited)` aus DOM lesen, sortieren | inline `<script>` |
| `renderTop20()` | Top-20-Liste ins DOM schreiben | inline `<script>` |
| `updateThermometer()` | Füllhöhe + Farbverlauf dynamisch berechnen | inline `<script>` |
| `updateCountdown()` | Verbleibende Tage bis Pass-Ablauf anzeigen | inline `<script>` |
| Leaflet-IIFE | Karte initialisieren, Pins setzen | externer `<script src="leaflet.js">` danach |

**Thermometer-Konstante (nach jedem Besuch anpassen):**
```javascript
const savings = 134;  // Gesamtersparnis in EUR — Stand: 26.04.2026
```

**Berechnungslogik:**
- Füllhöhe: `savings / 2500 * 100` %
- Farbverlauf: rot (unter 258€) / grün (über 258€)
- Break-Even-Marker: `bottom: 10,32%` (fest, 258/2500*100)

---

## LEAFLET-KARTE (seit 2026-05-01)

Die SVG-Schematikkarte wurde durch eine interaktive Leaflet-Karte ersetzt.

**Implementierung:**
```html
<!-- Im <head> -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>

<!-- Im <body> (map-section) -->
<div id="expedition-map" style="height:420px; border-radius:4px; border:2px solid var(--leather); overflow:hidden;"></div>

<!-- Nach inline <script>, vor </body> -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
(function () {
  var map = L.map('expedition-map', { center: [47.95, 7.45], zoom: 9, scrollWheelZoom: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { ... }).addTo(map);
  // Pins via L.divIcon (custom HTML-Div) + L.marker(...).bindPopup(...)
})();
</script>
```

**Tile-Layer:** CartoDB Voyager — kein API-Key, kostenlos für nicht-kommerzielle Nutzung.  
**Marker-Typen:**
- Rote Kreise (`border-radius:50%`, `background:#c0392b`) = besuchte Museen
- Goldene Raute (`transform:rotate(45deg)`, `background:#b8860b`) = Heimatbasis Rheinfelden

**Koordinaten der Pins (WGS84):**
| Museum | lat | lng |
|--------|-----|-----|
| Château du Haut-Kœnigsbourg | 48.2497 | 7.3430 |
| Basler Papiermühle | 47.5502 | 7.6063 |
| Museum.BL (Liestal) | 47.4842 | 7.7340 |
| Antikenmuseum Basel | 47.5538 | 7.5917 |
| Heimatbasis Rheinfelden (DE) | 47.5597 | 7.7959 |

**`scrollWheelZoom: false`** — verhindert, dass die Karte beim Seiten-Scrollen den Zoom übernimmt.

---

## BESUCHS-KARTEN-DATENMODELL

```html
<div class="visit-card swiss|france|germany">
  <!-- Inhalt je Besuch -->
</div>
```

---

## TECHNISCHE CONSTRAINTS

- Keine ES Modules — alles inline (außer Leaflet)
- Google Fonts können offline fehlen (Design-Approximation)
- SVG-Decorators (Kompassrose im Header) inline als data-URI im CSS-Hintergrund
- **Leaflet.js + CartoDB Tiles**: Karte benötigt Internetzugang — offline nicht verfügbar
- **CHF → EUR:** Einheitlich `Betrag × 1,10` (1 CHF = 1,10 EUR) überall im Projekt
