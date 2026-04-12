---
name: MCP-INFOS.MD
description: MCP capability catalog and operational usage guide. Records current MCP availability and always includes the standard MCP stack, setup steps, representative commands, and pointers to deeper command discovery.
beschreibung: MCP-Fähigkeitskatalog und operative Nutzungsanleitung. Dokumentiert den aktuellen MCP-Verfügbarkeitsstatus und enthält den Standard-MCP-Stack mit Setup-Schritten und typischen Befehlen.
---

# MCP-INFOS.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

MCP-Katalog und Betriebsstatus. Referenz für alle MCP-Server im Projekt.

---

## STATUS

- **Aktive MCP-Server im aktuellen Projekt:** Alle Standard-MCPs (siehe unten)
- Hinweis: Auch wenn einzelne MCPs nicht aktiv sind, gilt der folgende Katalog als Referenz.

| MCP-Server | Status | Zweck |
|------------|--------|-------|
| notebooklm-mcp | ✅ Aktiv | Notebook-basierte Recherche/Q&A |
| context7 | ✅ Aktiv | Framework-/Library-Dokumentation |
| firecrawl | ✅ Aktiv | Web-Scraping, Mapping, Crawl |
| github | ✅ Aktiv | GitHub Issues, PRs, Repos |
| playwright | ✅ Aktiv | Browser-Automation, UI-Checks |
| postgres | ✅ Aktiv | PostgreSQL-Zugriff |
| sequential-thinking | ✅ Aktiv | Strukturierte Problemanalyse |
| sharp | ✅ Aktiv | Bildverarbeitung |
| tavily | ✅ Aktiv | Websuche/Extraktion |

---

## STANDARD-MCP-KATALOG

### notebooklm-mcp
- **Kurzbeschreibung:** NotebookLM-Zugriff für notebook-basierte Recherche und Q&A (35+ Tools).
- **Installiert:** v0.5.11 via pipx (`jacob-bd/notebooklm-mcp-cli`)
- **Installation:**
  ```bash
  pipx install notebooklm-mcp-cli
  claude mcp add notebooklm /home/selfish/.local/bin/notebooklm-mcp
  nlm login
  ```
- **Auth:** Cookie-basiert — bei Ablauf `nlm login` erneut ausführen.

### context7
- **Kurzbeschreibung:** Aktuelle Framework-/Library-Dokumentation mit konkreten API-Beispielen.
- **Installation:**
  ```bash
  claude mcp add context7 -s user -- npx -y @upstash/context7-mcp
  ```

### firecrawl
- **Kurzbeschreibung:** Websuche, Scraping, Mapping und Crawl für strukturierte Webrecherche.
- **Installation:**
  ```bash
  FIRECRAWL_API_KEY=<KEY> claude mcp add firecrawl -s user -- npx -y firecrawl-mcp
  ```
- **Secret:** API-Key in `docs/adm/SECRETS.MD`

### github
- **Kurzbeschreibung:** GitHub-Operationen (Issues, PRs, Repos, Dateien) direkt per MCP.
- **Installation:**
  ```bash
  GITHUB_PERSONAL_ACCESS_TOKEN=<TOKEN> claude mcp add github -s user -- npx -y @modelcontextprotocol/server-github
  ```
- **Token-Scope:** `repo`, `read:org`, `workflow`
- **Secret:** Token in `docs/adm/SECRETS.MD`

### playwright
- **Kurzbeschreibung:** Browser-Automation für UI-Checks, Navigation, Formtests und Screenshots.
- **Installation:**
  ```bash
  claude mcp add playwright -s user -- npx -y @playwright/mcp --browser chromium
  ```

### postgres
- **Kurzbeschreibung:** Direkter Zugriff auf PostgreSQL per MCP-Tools.
- **Installation:**
  ```bash
  claude mcp add postgres -s user -- npx -y @modelcontextprotocol/server-postgres postgresql://<user>:<pass>@<host>:<port>/<db>
  ```

### sequential-thinking
- **Kurzbeschreibung:** Strukturierte, schrittweise Problemanalyse für komplexe Entscheidungen.
- **Installation:**
  ```bash
  claude mcp add sequential-thinking -s user -- npx -y @modelcontextprotocol/server-sequential-thinking
  ```

### sharp
- **Kurzbeschreibung:** Bildverarbeitung (Resize, Crop, Kompression, Varianten, Metadaten).
- **Installation:**
  ```bash
  claude mcp add sharp -s user -- npx -y sharp-mcp
  ```

### tavily
- **Kurzbeschreibung:** Websuche/Extraktion/Research mit Fokus auf aktuelle Webquellen.
- **Installation:**
  ```bash
  TAVILY_API_KEY=<KEY> claude mcp add tavily -s user -- npx -y tavily-mcp
  ```
- **Secret:** API-Key in `docs/adm/SECRETS.MD`

---

## SCHNELLCHECKS

```bash
claude mcp list                  # Alle registrierten MCPs anzeigen
opencode mcp list                # (falls OpenCode genutzt)
```

Bei Auth-Servern (GitHub, NotebookLM, Tavily, Firecrawl): Token/Login prüfen, dann erneut testen.
