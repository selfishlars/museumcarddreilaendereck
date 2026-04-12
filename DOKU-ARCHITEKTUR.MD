---
name: DOKU-ARCHITEKTUR.MD
description: Human-readable overview of the documentation architecture, ownership boundaries, and routing model. Explains how all documentation files interact, which file is the canonical source for each topic, and how the system remains consistent across project evolution.
beschreibung: Menschenlesbare Gesamtübersicht der Dokumentationsarchitektur, Zuständigkeitsgrenzen und des Routing-Modells. Erklärt das Zusammenspiel aller Doku-Dateien, welche Datei je Thema die kanonische Quelle ist und wie das System konsistent bleibt.
---

# DOKU-ARCHITEKTUR.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

Übersicht der gesamten Dokumentationsarchitektur. Zeigt welche Datei wofür zuständig ist und wie sie zusammenhängen.

---

## ARCHITEKTURPRINZIP

- **SSOT B (GitHub Issues):** Aktives Issue-Tracking via GitHub Issues. `MEMORY.MD` ist die kanonische Routing-Zentrale.
- **Routing:** Jedes Thema hat genau eine zuständige Datei. Querverweise statt Duplizierung.
- **Sicherheit:** Secrets niemals in git-versionierten Dateien.

---

## DATEI-INVENTAR

### Root-Ebene (Pflicht)

| Datei | Typ | Zweck | In git |
|-------|-----|-------|--------|
| `MEMORY.MD` | SSOT-Hub | Orchestrierung, Routing, Kernregeln, Projektdaten | ✅ |
| `DOKU-ARCHITEKTUR.MD` | Doku | Diese Datei — Doku-Überblick | ✅ |
| `DOKU-PROTOKOLL.MD` | Doku | Update-Protokoll für KI-Agenten | ✅ |
| `SSOT-VERFAHREN.MD` | Doku | SSOT B Prozessregeln | ✅ |
| `AGENTS.MD` | Doku | Coding-Conventions, Agent-Regeln | ✅ |
| `CLAUDE.MD` | Pointer | Verweist auf MEMORY.MD etc. | ✅ |
| `GEMINI.MD` | Pointer | Verweist auf MEMORY.MD etc. | ✅ |
| `Database.md` | Daten | Strukturierte Museen/Preise/Distanzen | ✅ |

### Root-Ebene (App)

| Datei | Typ | Zweck | In git |
|-------|-----|-------|--------|
| `index.html` | App | Gesamte Anwendung (CSS + JS inline) | ✅ |
| `CNAME` | Config | Custom Domain für GitHub Pages | ✅ |

### docs/adm/ (Administration)

| Datei | Typ | Zweck | In git |
|-------|-----|-------|--------|
| `ARCHITEKTUR.MD` | Doku | Technische Architektur der App | ✅ |
| `INFRASTRUKTUR.MD` | Doku | Deployment, Hosting, MCP-Setup | ✅ |
| `MCP-INFOS.MD` | Doku | MCP-Katalog und Betriebsstatus | ✅ |
| `SECRETS.MD` | Secrets | Lokale Zugangsdaten — **NIE committen!** | ❌ |

### docs/usr/ (Nutzer)

| Datei | Typ | Zweck | In git |
|-------|-----|-------|--------|
| `APP-NAVIGATION.MD` | Doku | Seitenaufbau, Nutzer-Journey | ✅ |
| `ADMIN-BEREICH.MD` | Doku | Pflege-Anleitung, Admin-Aktionen | ✅ |

---

## ABHÄNGIGKEITS-/ROUTING-ÜBERSICHT

```
MEMORY.MD (Zentrale)
├── SSOT-VERFAHREN.MD   → GitHub Issues Prozess
├── DOKU-PROTOKOLL.MD   → Wann was updaten
├── AGENTS.MD           → Wie Code schreiben
├── docs/adm/
│   ├── ARCHITEKTUR.MD  → Was ist wie gebaut
│   ├── INFRASTRUKTUR.MD→ Wie deployen / MCP-Setup
│   ├── MCP-INFOS.MD    → MCP-Katalog
│   └── SECRETS.MD      → Lokale Secrets (nicht in git)
└── docs/usr/
    ├── APP-NAVIGATION.MD → Wie die Seite aufgebaut ist
    └── ADMIN-BEREICH.MD  → Wie Daten pflegen
```

---

## SICHERHEITS- UND PFLEGEGRUNDSÄTZE

- `SECRETS.MD` niemals committen (in `.gitignore` eingetragen)
- Keine echten Namen in versionierten Dateien
- Bei jeder größeren Änderung: `DOKU-PROTOKOLL.MD` lesen
- Querverweise statt Inhaltsduplizierung
