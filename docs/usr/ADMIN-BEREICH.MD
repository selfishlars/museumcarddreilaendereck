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

Stand: 2026-08-08

---

## ZUGRIFF & BERECHTIGUNGEN

| Rolle | Zugriff | Methode |
|-------|---------|---------|
| Inhaber | Vollzugriff | GitHub-Account selfishlars |
| KI-Agent | Lesen + Schreiben per PR/Commit | git + gh CLI |

---

## NEUEN BESUCH HINZUFÜGEN

Vollständige Checkliste (auch in MEMORY.MD):

1. Neues `<div class="visit-card swiss|france|germany">` als **erstes Kind** in `.visit-log` einfügen (neueste Einträge oben)
2. Ersparnisbetrag berechnen (CHF × 1,10 = EUR)
3. **`📊 Besucher/Jahr` recherchieren** und im visit-detail `<span class="detail-icon">📊</span>` eintragen (Pflichtfeld!)
4. `const savings = XXX;` in `updateThermometer()` anpassen (aktueller Wert: 325)
5. Alle 6 Stat-Cards im `.stats-grid` aktualisieren: Bisher gespart, Break-Even, Netto-Ersparnis (`max(0, Gesamtersparnis − 258)`), Museen besucht, verbleibende Tage, Ø Ersparnis/Besuch inkl. Sub-Text
6. Thermometer-Bulb-Label und Info-Panel anpassen — **alle 5 variablen Zeilen:** 🏛️ Gespart, 💰 Netto-Ersparnis, 📈 Noch nötig, 🗺️ **Besuche (!)**, ⏱️ Ø/Besuch — plus Fußzeile unter dem Thermometer (Break-Even-Prozent)
7. `thermo-pct` = `Gesamtersparnis / 258 * 100`
8. Museum in **„Bereits besucht"**-Sektion eintragen (Struktur wie bestehende Einträge)
9. Museum aus der Ländersektion (🇨🇭/🇩🇪/🇫🇷) **vollständig entfernen** + Sektions-Zähler −1
10. **Header:** `Entdeckte Museen/Ausflugsziele` Zähler erhöhen (`X von 350+`)
11. **Header:** `Letzte Expedition` auf das aktuelle Besuchsdatum setzen
12. Break-Even-Marker bleibt bei `bottom: 10,32%` (nie ändern!)
13. **Leaflet-Karte:** Neuen Pin in der Leaflet-IIFE am Ende der HTML-Datei eintragen (lat/lng + Popup-Text)
14. MEMORY.MD Bilanz + Besuchsprotokoll, DATABASE.MD visits-Tabelle **und** `savings_summary`-Tabelle (total_savings, net_savings, break_even_remaining, visits_count, avg_savings_per_visit, thermometer_pct, break_even_pct), PERSOENLICHE-NOTIZEN.MD aktualisieren
15. GitHub Issue mit `ergebnis:erledigt` schließen

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

## WICHTIGE KONSTANTEN (nie ändern ohne Prüfung)

| Wert | Bedeutung |
|------|-----------|
| `258` | Gesamtinvestition in € (Break-Even-Schwelle) |
| `2500` | Thermometer-Maximum in € |
| `10,32%` | Break-Even-Marker CSS-Position (258/2500*100) |
