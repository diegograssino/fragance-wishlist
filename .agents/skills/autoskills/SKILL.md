---
name: autoskills
description: Global automated AI skills reference. Use when understanding how automated framework rules are pulled into the monorepo.
---

# Automated AI Skills (Global)

This monorepo utilizes an automated standard via `autoskills.sh`.

## 1. How it works

- The script fetches the newest AI rules for frameworks (e.g., Next.js, TypeORM) and creates the global `REFERENCE.md` file in this directory.
- This ensures our AI pair-programmers have the most up-to-date context regarding our technology stack without manual intervention.
- The `sync:skills` script runs globally for the monorepo during `npm install` (via `postinstall`) or via weekly GitHub Actions.

## 2. Usage Rule

- **CRITICAL**: As an AI, you MUST NOT manually rewrite the `REFERENCE.md` file in this directory. Treat it as a read-only automated knowledge graph.
- Custom architectural guidelines inside `.agents/skills/` always take precedence over the automated framework defaults found in the reference.

---

> **See [REFERENCE.md](REFERENCE.md)** for the raw, automated skill definitions (over 200 lines of Next.js and framework rules).
