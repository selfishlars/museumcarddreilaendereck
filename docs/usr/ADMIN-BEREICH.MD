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

Stand: 2026-04-12

---

## ZUGRIFF & BERECHTIGUNGEN

| Rolle | Zugriff | Methode |
|-------|---------|---------|
| Inhaber | Vollzugriff | GitHub-Account selfishlars |
| KI-Agent | Lesen + Schreiben per PR/Commit | git + gh CLI |

---

## NEUEN BESUCH HINZUFÜGEN

Vollständige Checkliste (auch in MEMORY.MD):

1. Neues `<div class="visit-card swiss|france|germany">` in `.visit-log`
2. Ersparnisbetrag berechnen (CHF ÷ 0,95 = EUR)
3. `const savings = XXX;` in `updateThermometer()` anpassen
4. Gesamtersparnis im `.stats-grid` aktualisieren
5. Thermometer-Bulb-Label und Info-Panel anpassen
6. `thermo-pct` = `Gesamtersparnis / 258 * 100`
7. Chronik-Eintrag hinzufügen (chronologisch!)
8. Museum in `.museum-grid` als `.visited` markieren
9. Break-Even-Marker bleibt bei `bottom: 10,32%` (nie ändern!)
10. GitHub Issue mit `ergebnis:erledigt` schließen

---

## NEUES MUSEUM HINZUFÜGEN

1. In `index.html` im richtigen Länder-Abschnitt einfügen
2. Struktur: `<div class="museum-item">` mit Name, Stadt, Preis, Distanz, Web
3. Sortierung beachten: Top 5 nach Preis, Rest nach Distanz
4. `count-badge` im Länder-Header anpassen
5. MEMORY.MD Museum-Liste-Zähler aktualisieren
6. Database.md ergänzen

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
- CHF → EUR: Betrag ÷ 0,95
- Ersparnis = was ohne Pass bezahlt worden wäre
- ca.-Werte mit `~XX €*` markieren

---

## WICHTIGE KONSTANTEN (nie ändern ohne Prüfung)

| Wert | Bedeutung |
|------|-----------|
| `258` | Gesamtinvestition in € (Break-Even-Schwelle) |
| `2500` | Thermometer-Maximum in € |
| `10,32%` | Break-Even-Marker CSS-Position (258/2500*100) |
