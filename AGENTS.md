# AGENTS.md

**WICHTIG: LIES ZUERST [Memory.md](./Memory.md)!**

Memory.md ist der Informationshub dieses Projekts. Dort findest du: Kernregeln, Tech-Stack, Routing-Tabelle, offene Tasks, Pass-Daten und Thermometer-Berechnung.

---

## Projekt-Übersicht

- **Single File:** `index.html` — kein Build, kein Framework, keine Dependencies
- **Live:** https://museum.hertenbw.de (CNAME → GitHub Pages)
- **GitHub Pages:** https://selfishlars.github.io/museumcarddreilaendereck/
- **Deploy:** `git push` → GitHub Pages (~60s Verzögerung)
- **Sprache:** Deutsch für UI/Labels, Englisch für Code

---

## Build / Lint / Test Commands

**Es gibt KEIN Build-System, KEIN npm, KEINE Tests.**

```bash
# Lokal testen (einfach öffnen)
open index.html

# Validieren (optional)
npx html-validate index.html   # via npm
```

- Keine Linting-Regeln konfiguriert
- Keine automatisierten Tests
- Manuell im Browser testen

---

## Code Style Guidelines

### Allgemein

- **Kein Framework** — reines HTML/CSS/JS in einer Datei
- **CSS inline** im `<style>` Block (Zeilen ~7-2615)
- **JavaScript inline** im `<script>` Block (Zeilen ~2617-2739)
- **Keine externen JS-Dependencies**
- **Google Fonts** via `@import` in CSS

### CSS Konventionen

**Variablen (`:root`):**
```css
:root {
  --parchment: #f4e8c1;
  --parchment-dark: #e8d5a3;
  --ink: #2c1810;
  --gold: #b8860b;
  --rust: #8b3a2a;
  --forest: #2d4a2d;
  --leather: #6b3a2a;
}
```

**Kommentar-Separatoren:**
```css
/* ═══════════════════════════════════
   SECTION NAME
   ═══════════════════════════════════ */
```

**BEM-artige Klassen:**
- `.section`, `.section-title`, `.section-title .icon`
- `.museum-item`, `.museum-grid`, `.museum-name`, `.museum-price`
- `.visit-card`, `.visit-card.swiss`, `.visit-card.france`
- `.stats-grid`, `.stats-item`, `.stats-value`, `.stats-label`

### HTML Konventionen

**Museum-Karten-Struktur:**
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

**Besuchs-Karten:**
```html
<div class="visit-card swiss|france|germany">
  <!-- visit content -->
</div>
```

**Länder-Abschnitte:**
```html
<div class="country-section">
  <div class="country-header">
    <span class="country-flag">🇨🇭</span>
    <h3>Schweiz</h3>
    <span class="count-badge">40 gelistet</span>
  </div>
  <p class="museum-price-note">* Angaben ca., Stand Trainingsdaten.</p>
  <!-- museum-item Karten -->
</div>
```

### JavaScript Konventionen

**Funktionen:**
- PascalCase für Funktionsnamen: `function buildTop20()`, `function updateCountdown()`
- Keine Arrow-Functions im globalen Scope
- `const` für unveränderliche Werte, `let` für mutable

**Strings:**
- Template Literals für HTML-Generierung
- Einfache Quotes für Strings: `'text'`

**DOM-Zugriff:**
- `document.getElementById()` für einzelne Elemente
- `document.querySelectorAll()` für Listen
- Immer auf `null` prüfen: `if (el) { ... }`

**Escape-Funktion:**
```javascript
function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
```

### Datenschutz

- **KEINE echten Namen** im Code
- Anonymisierte Bezeichner: `Anon 1`, `Anon 2`, `Kind 1`, `Kind 2`
- Keine Adressen, Telefonnummern oder persönliche Daten

---

## Typische Änderungen

### Neuen Besuch hinzufügen

1. Neues `<div class="visit-card swiss|france|germany">` in `.visit-log`
2. Gesamtersparnis in `.stats-grid` aktualisieren
3. Thermometer: `height: X%` = `ersparnis/2500*100`
4. Chronik-Eintrag hinzufügen (chronologisch!)
5. Museum in `.museum-grid` als `.visited` markieren

### Preise

- Kinder unter 18 oft frei (CH, FR)
- CHF → EUR: Betrag × 1,10
-ca.-Werte mit `~XX €*` markieren
- Ersparnis = was ohne Pass bezahlt worden wäre

---

## Dateien

| Datei | Zweck | In git? |
|-------|-------|---------|
| `index.html` | Die gesamte App | ✅ |
| `Memory.md` | KI-Dokumentation | ✅ |
| `Database.md` | Strukturierte Daten | ✅ |
| `CLAUDE.md` | Claude Code Regeln | ❌ (gitignored) |
| `.claude/` | Claude Code Config | ❌ (gitignored) |

---

## Gotchas

- **Keine ES Modules** — alles inline
- **Google Fonts** können offline fehlen (Design-Approximation nötig)
- **SVG-Decorators** inline als data-URI (keine externen Dateien)
- **Break-Even Marker**: `258/2500*100` = 10.32% (fest)
- **CHF-Wechselkurs**: ~0.95 CHF/EUR (in Memory.md dokumentiert)
