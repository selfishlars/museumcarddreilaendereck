---
name: INFRASTRUKTUR.MD
description: Infrastructure and operations runbook for deployment, hosting, networking, and service operations. Documents deployment flow, health checks, operational commands, and recovery procedures without exposing secrets.
beschreibung: Infrastruktur- und Betriebs-Runbook für Deployment, Hosting, Netzwerk und Service-Betrieb. Dokumentiert Deploy-Fluss, Health-Checks, operative Befehle und Recovery-Abläufe ohne sensible Zugangsdaten.
---

# INFRASTRUKTUR.MD — Museums-PASS Dreiländereck

## ZWECK UND BESCHREIBUNG DIESER DATEI

Betriebsdokumentation für Deployment, Hosting und externe Dienste.

---

## AKTUELLER STAND

Stand: 2026-04-12 (migriert aus infra-doku.md)

---

## HOSTING & DEPLOYMENT

| Feld | Wert |
|------|------|
| Hosting | GitHub Pages |
| Repo | selfishlars/museumcarddreilaendereck |
| Live-URL | https://museum.hertenbw.de |
| Fallback-URL | https://selfishlars.github.io/museumcarddreilaendereck/ |
| CNAME-Datei | `/CNAME` im Repo |
| DNS-Problem? | Repo → Settings → Pages → Custom Domain prüfen |

**Deploy-Fluss:**
```bash
git add index.html MEMORY.MD   # (+ ggf. weitere)
git commit -m "feat: ..."
git push
# → GitHub Pages deployt automatisch (~30–90 Sekunden)
```

---

## MCP-SERVER: NOTEBOOKLM

→ Details in [MCP-INFOS.MD](./MCP-INFOS.MD)

| Eigenschaft | Detail |
|-------------|--------|
| Implementierung | `jacob-bd/notebooklm-mcp-cli` v0.5.11 |
| Installiert | via pipx |
| Status | ✅ Vollständig eingerichtet |

**Auth-Wartung:**
```bash
nlm login          # Login erneuern falls Cookies abgelaufen
```
Cookies typischerweise nach einigen Wochen ablaufen.

**MCP-Konfiguration:** Eingetragen in `~/.claude.json` (global, nicht projektlokal).

**Rückbau falls nötig:**
```bash
pipx uninstall notebooklm-mcp-cli
claude mcp remove notebooklm
```

---

## GOOGLE-KONTO FÜR AUTOMATION

Zweck: Dediziertes Konto für KI-Automation & MCP-Dienste (NotebookLM).
→ Account-Details in `docs/adm/SECRETS.MD` (lokal, nicht in git).

---

## RISIKEN & MITIGATIONEN

| Risiko | Mitigation |
|--------|-----------|
| Google bricht NotebookLM-API | Repo beobachten, ggf. `pipx install notebooklm-mcp-cli --force` |
| NotebookLM-Cookies ablaufen | `nlm login` erneut ausführen |
| Account-Sperrung | Dediziertes Konto (bereits so) |
| GitHub Pages DNS-Problem | Repo → Settings → Pages → Custom Domain prüfen |

---

## GEPLANTE ERWEITERUNGEN

| Komponente | Zweck | Status |
|------------|-------|--------|
| Google Drive MCP | Dokumente aus Drive als NotebookLM-Sources | Offen |
| Brave Search / Tavily | Fallback-Webrecherche | Offen |
