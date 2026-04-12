---
name: ISSUE-TRACKING-VERFAHREN.MD
description: Canonical specification of all supported issue-tracking workflows. Defines markdown-based and GitHub-based tracking modes, decision criteria, migration steps, and strict rules to ensure only one active method at a time.
beschreibung: Kanonische Spezifikation aller unterstützten Issue-Tracking-Verfahren. Definiert den markdown-basierten und GitHub-basierten Tracking-Modus, Entscheidungskriterien, Migrationsschritte und strikte Regeln, damit immer nur ein Verfahren gleichzeitig aktiv ist.
---

# ISSUE-TRACKING-VERFAHREN.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

Spezifikation des aktiven Issue-Tracking-Verfahrens. Nur ein Verfahren ist gleichzeitig aktiv.

---

## AKTUELLER STAND

**Aktives Verfahren: B (GitHub Issues)**
Festgelegt: 2026-04-12

---

## VERFAHREN B — GITHUB ISSUES (AKTIV)

### Zielbild
- Aktive Aufgaben: offene GitHub Issues
- Historie: geschlossene GitHub Issues
- Kein `HISTORY-BACKLOG.MD` verpflichtend
- Optional: lokale `BACKLOG.MD` als lesbarer Spiegel

### ISSUE_PREFIX
`MUSEUM` → Tracking-ID-Schema: `MUSEUM-ISSUE-0001`

### Statuswerte (über Labels + State)

| Status | GitHub State | Label |
|--------|-------------|-------|
| offen | open | `status:offen` |
| in_bearbeitung | open | `status:in_bearbeitung` |
| blockiert | open | `status:blockiert` |
| erledigt | closed | `ergebnis:erledigt` |
| verworfen | closed | `ergebnis:verworfen` |

### Prioritäten (Labels)

| Priorität | Label | Bedeutung |
|-----------|-------|-----------|
| P0 | `prio:P0` | Kritisch / blockiert |
| P1 | `prio:P1` | Hoch / wichtig |
| P2 | `prio:P2` | Normal / sinnvoll |
| P3 | `prio:P3` | Optional / Idee |

### Typ-Labels (optional)
- `type:bug`, `type:feature`, `type:refactor`, `type:chore`

### Pflicht zur Issue-Erfassung
- Jede neue Anfrage/Änderung → neues GitHub Issue
- Ausnahme: bestehendes sehr ähnliches Issue, klein erweiterbar

---

## GITHUB-ISSUE-TEMPLATE

```markdown
## ID
TRACKING_ID: MUSEUM-ISSUE-000X

## TITEL
<Kurz und eindeutig>

## ZIEL / PROBLEM
<Welches Problem soll gelöst werden und warum?>

## AKZEPTANZKRITERIEN
- [ ] <Kriterium 1>
- [ ] <Kriterium 2>

## PRIORITAET
P0 | P1 | P2 | P3

## STATUS
offen | in_bearbeitung | blockiert

## ABHAENGIGKEITEN (optional)
- #<issue-id>

## BETROFFENE DATEIEN/BEREICHE (optional)
- <Pfad oder Modul>

## NOTIZEN
<Freitext>

## ANGELEGT_AM
<YYYY-MM-DD>

## LETZTES_UPDATE
<YYYY-MM-DD>
```

---

## ABSCHLUSS-KOMMENTAR (vor Issue-Schliessen)

```markdown
## ABSCHLUSS

### Ergebnisfelder
- ERGEBNISSTATUS: erledigt | verworfen
- FINALE UMSETZUNG: <Was wurde umgesetzt>
- ABWEICHUNG VOM PLAN: <optional>
- REFERENZEN: Commit ..., PR #...
- ABGESCHLOSSEN_AM: YYYY-MM-DD
```

---

## MINIMALPROZESS

1. Neues Issue per Template erstellen
2. Labels setzen: `status:*` + `prio:*` (+ optional `type:*`)
3. Bearbeiten
4. Abschlusskommentar posten
5. `ergebnis:*` setzen und Issue schließen

---

## VERFAHREN A — MARKDOWN (INAKTIV)

Verfahren A (BACKLOG.MD + HISTORY-BACKLOG.MD) ist **nicht aktiv**.
Bei Bedarf Migration A→B: alle offenen BACKLOG.MD-Einträge als GitHub Issues anlegen.

---

## ENTSCHEIDUNGSHILFE A vs. B

| Kriterium | Verfahren A | Verfahren B |
|-----------|-------------|-------------|
| GitHub vorhanden | Optional | Voraussetzung |
| Collaboration | Nein | Ja |
| Offline-Zugriff | Ja | Eingeschränkt |
| Labels/Filter | Nein | Ja |
| **Dieses Projekt** | — | ✅ Aktiv |
