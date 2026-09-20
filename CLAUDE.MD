# CLAUDE.MD — Pointer

**Schritt 0:** `git fetch` und den lokalen Stand mit `origin/main` vergleichen (`git status -sb`); bei Rückstand zuerst `git pull --ff-only`. Der Arbeitsstand war schon einmal veraltet.

Lies dann diese Dateien (in dieser Reihenfolge):

1. [MEMORY.MD](./MEMORY.MD) — Orchestrierung, Routing, Kernregeln, Projektdaten
2. [DOKU-PROTOKOLL.MD](./DOKU-PROTOKOLL.MD) — Wann und wie Dokumentation aktualisieren
3. [DOKU-ARCHITEKTUR.MD](./DOKU-ARCHITEKTUR.MD) — Welche Datei wofür zuständig ist
4. [AGENTS.MD](./AGENTS.MD) — Coding-Standards und Agent-Ausführungsregeln

Aktives Issue-Tracking: **B (GitHub Issues)** — Details in [ISSUE-TRACKING-VERFAHREN.MD](./ISSUE-TRACKING-VERFAHREN.MD)

ISSUE_PREFIX: `MUSEUM` → `MUSEUM-ISSUE-0001`

Vor jedem Commit: `node tools/check-consistency.mjs` (muss grün sein).
