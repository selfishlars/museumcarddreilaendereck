---
name: APP-NAVIGATION.MD
description: User-facing navigation and flow documentation. Explains how users move through the application, key journey paths, route-level responsibilities, and practical interaction logic from a product perspective.
beschreibung: Nutzerorientierte Dokumentation von Navigation und Anwendungsfluss. Erklärt Seitenaufbau, Kern-Journeys und Interaktionslogik aus Produktsicht.
---

# APP-NAVIGATION.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

Nutzerorientierter Überblick: Wie ist die Seite aufgebaut, was sieht der Nutzer wo?

---

## AKTUELLER STAND

Stand: 2026-04-12 — Single-Page App (index.html)

---

## SEITENSTRUKTUR (von oben nach unten)

| Abschnitt | CSS-Klasse | Was ist hier |
|-----------|-----------|--------------|
| Header | `.page-header` | Titel, Pass-Metadaten, Countdown |
| Pass-Karten | `.pass-holders` | Anon 1 & Anon 2 |
| Bilanz-Dashboard | `.stats-grid` | Gesamtersparnis, Besuche, Break-Even-% |
| Karte | `.map-section` | SVG-Karte Dreiländereck |
| Thermometer | `.thermo-section` | Break-Even-Fortschritts-Anzeige (0–2500€) |
| Besuchslogbuch | `.visit-log` | Karten je Besuch (Farbe nach Land) |
| Chronik | `.timeline` | Zeitstrahl aller Ereignisse |
| Pass-Infos | `.info-grid` | 4 Info-Karten zum Museums-PASS |
| Museum-Liste | `.museum-grid` | Alle 154+ Museen nach Land sortiert |
| Footer | `<footer>` | Impressum-ähnlich, Links |

---

## NUTZER-JOURNEY

1. **Überblick** → Header + Stats-Grid zeigt aktuellen Stand auf einen Blick
2. **Fortschritt** → Thermometer zeigt visuell wie weit bis Break-Even
3. **Vergangene Besuche** → Visit-Log mit Details je Besuch
4. **Planung** → Museum-Grid nach Distanz und Preis sortiert

---

## THERMOMETER-ANZEIGE

- Kugel unten = 0 € gespart
- Rote Füllung = unter Break-Even (258 €)
- Grüne Füllung = über Break-Even
- Marker bei 10,32% = Break-Even-Linie

---

## MUSEUM-GRID NUTZER-LOGIK

- Besuchte Museen: goldener Rahmen (`.visited`)
- Preis = was 2 Erw. + 2 Kinder ohne Pass zahlen würden
- `~XX €*` = ca.-Wert (vor Besuch prüfen)
- Sortierung je Land: Top 5 teuerste zuerst, dann nach Distanz
