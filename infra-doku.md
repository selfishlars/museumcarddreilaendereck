# Infrastruktur-Dokumentation — Museums-PASS Projekt

Dokumentiert alle externen Dienste, MCP-Server und Automatisierungs-Infrastruktur für dieses Projekt.

---

## Google-Konto für Automation

| Feld | Wert |
|------|------|
| Zweck | Dediziertes Konto für KI-Automation & MCP-Dienste |
| Account | `***ver315@gmail.com` |
| Genutzt für | NotebookLM MCP |
| Hinweis | Nie echte Adresse in git-versionierte Dateien schreiben |

---

## MCP-Server: NotebookLM

### Implementierung

**`jacob-bd/notebooklm-mcp-cli`** (v0.5.11, Stand März 2026)

| Eigenschaft | Detail |
|-------------|--------|
| GitHub | https://github.com/jacob-bd/notebooklm-mcp-cli |
| Ansatz | Interne NotebookLM-API + Browser-Cookie-Extraktion |
| Tools | 35+ Tools (Notebook-Management, Sources, RAG-Queries) |
| Binaries | `nlm` (CLI), `notebooklm-mcp` (MCP-Server-Prozess) |
| Installiert unter | `~/.local/share/pipx/venvs/notebooklm-mcp-cli/` |

### Installation (einmalig, bereits erledigt ✅)

```bash
# 1. Paket installieren
pipx install notebooklm-mcp-cli

# 2. MCP-Server in Claude Code registrieren
claude mcp add notebooklm /home/selfish/.local/bin/notebooklm-mcp

# 3. Google-Login (öffnet Browser)
nlm login
# → Mit ***ver315@gmail.com einloggen
# → Cookies werden gespeichert unter: ~/.notebooklm-mcp-cli/profiles/default
```

### Status ✅ Vollständig eingerichtet

- [x] `notebooklm-mcp-cli` v0.5.11 via pipx installiert
- [x] MCP-Server in Claude Code registriert (`~/.claude.json`)
- [x] Browser-Login mit `***ver315@gmail.com` durchgeführt (44 Cookies extrahiert)
- [x] Verbindungstest erfolgreich (notebook_list antwortet)

### Auth-Wartung

```bash
# Login erneuern falls Cookies abgelaufen
nlm login

# Account-Status prüfen
nlm login
```

Cookies ablaufen typischerweise nach einigen Wochen. Bei Auth-Fehler einfach `nlm login` erneut ausführen.

### MCP-Konfiguration in Claude Code

Eingetragen in `~/.claude.json` (projektlokal):
```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "/home/selfish/.local/bin/notebooklm-mcp"
    }
  }
}
```

### Rückbau falls nötig

```bash
pipx uninstall notebooklm-mcp-cli
claude mcp remove notebooklm
```

### Risiken

| Risiko | Mitigation |
|--------|-----------|
| Google bricht interne API | Repo beobachten, ggf. `pipx install notebooklm-mcp-cli --force` für Update |
| Cookies laufen ab | `nlm login` erneut ausführen |
| Account-Sperrung | Dediziertes Konto (✅ bereits so) |

---

## Geplante Erweiterungen (offen)

| Komponente | Zweck | Status |
|------------|-------|--------|
| Google Drive MCP | Dokumente aus Drive als NotebookLM-Sources | Offen |
| Brave Search / Tavily | Fallback-Webrecherche | Offen |
