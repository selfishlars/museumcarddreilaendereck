---
name: DOKU-PROTOKOLL.MD
description: Operational documentation maintenance protocol for AI agents. Defines exactly when and where documentation must be updated, with decision matrices and pre-commit safeguards to prevent drift between implementation and documentation.
beschreibung: Operatives Wartungsprotokoll für KI-Agenten. Legt fest wann und wo Dokumentation aktualisiert werden muss, inklusive Update-Matrix und Pre-Commit-Sicherungen.
---

# DOKU-PROTOKOLL.MD — Museums-PASS Dreiländereck

> **PFLICHTLEKTÜRE vor jedem Commit/Push und bei jeder größeren Änderung.**

## ZWECK UND BESCHREIBUNG DIESER DATEI

Operative Wartungsregeln für KI-Agenten. Verhindert Abweichungen zwischen Implementierung und Dokumentation.

---

## AKTUELLER STAND

Erstellt: 2026-04-12 (INIT_V4_0 repair)

---

## DATEI-INVENTAR MIT UPDATEPFLICHTEN

| Datei | Update-Pflicht | Trigger |
|-------|---------------|---------|
| `MEMORY.MD` | IMMER bei größeren Änderungen | Neuer Besuch, Bilanz-Update, SSOT-Änderung |
| `AGENTS.MD` | Bei Änderung von Coding-Konventionen | Tech-Stack-Änderung, neue Regeln |
| `docs/adm/ARCHITEKTUR.MD` | Bei Architektur-Änderungen | Neue Sektionen in index.html, JS-Änderungen |
| `docs/adm/INFRASTRUKTUR.MD` | Bei Infra-/MCP-Änderungen | Neuer MCP-Server, Deploy-Änderung |
| `docs/adm/MCP-INFOS.MD` | Bei MCP-Status-Änderungen | Install/Remove/Update eines MCP |
| `docs/usr/APP-NAVIGATION.MD` | Bei UI-Änderungen | Neue Sektion, Layout-Änderung |
| `docs/usr/ADMIN-BEREICH.MD` | Bei Pflege-Prozess-Änderungen | Neue Checklisten-Schritte |
| `Database.md` | Bei neuen Museen/Preisen | Recherche, neue Einträge |
| `SSOT-VERFAHREN.MD` | Nur bei SSOT-Modell-Änderung | Wechsel A↔B (selten) |
| `DOKU-ARCHITEKTUR.MD` | Bei Struktur-Änderungen | Neue Dateien hinzugefügt |

---

## UPDATE-MATRIX

| Wenn X geändert wird… | …dann diese Dateien aktualisieren |
|-----------------------|----------------------------------|
| Neuer Museum-Besuch | MEMORY.MD (Bilanz, Protokoll), index.html, Database.md |
| Neues Museum zur Liste | index.html, Database.md |
| Thermometer-Wert | index.html (savings = XXX), MEMORY.MD (Bilanz) |
| MCP-Server | docs/adm/INFRASTRUKTUR.MD, docs/adm/MCP-INFOS.MD, MEMORY.MD (MCP-Status) |
| Neue Doku-Datei | DOKU-ARCHITEKTUR.MD, MEMORY.MD (Routing-Tabelle) |
| SSOT-Wechsel | MEMORY.MD, SSOT-VERFAHREN.MD, DOKU-ARCHITEKTUR.MD |

---

## PRE-COMMIT/PRE-PUSH CHECKLISTE

Vor jedem `git commit` bzw. `git push`:

- [ ] MEMORY.MD ist aktuell (Bilanz, Routing, Kernregeln)
- [ ] Keine echten Namen in geänderten Dateien
- [ ] Keine Secrets / Credentials in versionierten Dateien
- [ ] `docs/adm/SECRETS.MD` ist in `.gitignore` (nie committen)
- [ ] Geänderte Doku-Dateien sind in DOKU-ARCHITEKTUR.MD referenziert
- [ ] Issue in GitHub mit `ergebnis:erledigt` geschlossen (bei SSOT B)

---

## GROSSE vs. KLEINE ÄNDERUNG

**Groß** (SSOT-Verfahren, Pflichtstruktur, Sicherheitsregeln, Infra-Prozess ändern sich):
→ MEMORY.MD + DOKU-PROTOKOLL.MD lesen, danach alle betroffenen Dateien updaten.

**Klein** (einzelner Besuch, Preis, Museum):
→ Index-Checkliste in MEMORY.MD abarbeiten reicht.
