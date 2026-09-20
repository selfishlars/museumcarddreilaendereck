---
name: ADMIN-BEREICH.MD
description: User-facing administration guide documenting access control, operational admin actions, permission behavior, and constraints relevant to administrative workflows.
beschreibung: Nutzerorientierter Admin-Leitfaden mit Pflegeanleitung, administrativen Arbeitsabläufen und Einschränkungen für den sicheren Betrieb.
---

# ADMIN-BEREICH.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

Pflegeanleitung für den Betrieb der Seite. Wer darf was, wie werden Daten aktualisiert.

---

## AKTUELLER STAND

Stand: 2026-09-20

---

## ZUGRIFF & BERECHTIGUNGEN

| Rolle | Zugriff | Methode |
|-------|---------|---------|
| Inhaber | Vollzugriff | GitHub-Account selfishlars |
| KI-Agent | Lesen + Schreiben per PR/Commit | git + gh CLI |

---

## NEUEN BESUCH HINZUFÜGEN

Vollständige Checkliste (auch in MEMORY.MD). Seit MUSEUM-ISSUE-0023 werden alle Kennzahlen aus **einer** Datenquelle berechnet:

1. **`VISITS`-Eintrag** am **Ende** des Arrays in `index.html` ergänzen (Abschnitt „DATENQUELLE"): `date`, `flag`, `name`, `place`, `cityLabel`, `savings` (ganzzahlig in €; CHF × 1,10 gerundet), `priceLabel`, `dist`, `url`, `lat`/`lng` (offizielle Adresse/GPS prüfen). Daraus entstehen **automatisch**: alle 6 Stat-Karten, Thermometer (Füllhöhe, Bulb, Info-Panel, Prozent, Fußzeile), Header („Letzte Expedition", „Entdeckte Museen"), Footer-Datum, „Bereits besucht"-Eintrag, Leaflet-Pin, Break-Even-Datum.
2. Neues `<div class="visit-card swiss|france|germany">` als **erstes Kind** in `.visit-log` (neueste oben); Datum, Ersparnis-Badge und **`📊 Besucher/Jahr`** (Pflichtfeld, recherchieren) eintragen
3. Museum aus der Ländersektion (🇨🇭/🇩🇪/🇫🇷) **vollständig entfernen** + `museum-count`-Zähler −1 (falls dort gelistet)
4. Eintrittspreise: Familienticket vorziehen wenn verfügbar, Kinder-Freieintritte prüfen (siehe EINTRITTSPREISE-LOGIK)
5. MEMORY.MD (Bilanz + Besuchsprotokoll + Museum-Liste-Zähler), DATABASE.MD (visits-Tabelle **und** `savings_summary`), PERSOENLICHE-NOTIZEN.MD aktualisieren
6. **`node tools/check-consistency.mjs` ausführen — muss grün sein** (prüft Summe/Netto/Ø/Prozent, Kartenanzahl, Zähler, Doppelungen, Doku-Werte)
7. Break-Even-Marker bleibt bei `bottom: 10,32%` (nie ändern!)
8. GitHub Issue mit `ergebnis:erledigt` schließen

---

## MUSEUM ALS UNINTERESSANT MARKIEREN

Wenn ein Museum nach Recherche oder Besuch bewusst als uninteressant eingestuft wird:

1. `class="museum-item"` → `class="museum-item uninteressant"` setzen
2. Darstellung: ausgegraut + Badge "— Uninteressant" oben rechts
3. Signalisiert: bewertet, kein weiterer Handlungsbedarf

> Hinweis: `visited` und `uninteressant` schließen sich aus — nie kombinieren.

---

## NEUES MUSEUM HINZUFÜGEN

1. In `index.html` im richtigen Länder-Abschnitt einfügen
2. Struktur: `<div class="museum-item">` mit Name, Stadt, Preis, Distanz, Web
3. Sortierung beachten: Top 5 nach Preis, Rest nach Distanz
4. `count-badge` im Länder-Header anpassen
5. MEMORY.MD Museum-Liste-Zähler aktualisieren
6. DATABASE.MD ergänzen

---

## DEPLOYMENT

```bash
git add index.html MEMORY.MD
git commit -m "feat: neuer Besuch XY"
git push
```
→ GitHub Pages deployt automatisch (~60 Sekunden)

---

## EINTRITTSPREISE-LOGIK

- Kinder unter 18 oft frei (CH, FR) — vor Eintrag prüfen
- Familienticket wenn verfügbar vorziehen
- CHF → EUR: Betrag × 1,10 (Kurs: 1 CHF = 1,10 EUR / 1 EUR = 0,91 CHF)
- Ersparnis = was ohne Pass bezahlt worden wäre
- ca.-Werte mit `~XX €*` markieren

---

## WICHTIGE KONSTANTEN (nie ändern ohne Prüfung; `258`/`2500` als `PASS_COST`/`THERMO_MAX` in `index.html`)

| Wert | Bedeutung |
|------|-----------|
| `258` | Gesamtinvestition in € (Break-Even-Schwelle) |
| `2500` | Thermometer-Maximum in € |
| `10,32%` | Break-Even-Marker CSS-Position (258/2500*100) |
