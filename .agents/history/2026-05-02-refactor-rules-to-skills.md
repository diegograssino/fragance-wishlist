# ADR: Refactor Repository Rules into Tool-Agnostic Skills

**Date**: 2026-05-02
**Status**: Accepted

## Context

The repository rules were previously stored in a fragmented structure (`.agents/workflows/`, root `TESTING.md`, etc.). This was tool-specific and didn't scale well across multiple AI agents (Claude, Cursor, Antigravity) or different IDEs.

## Decision

Migrate all repository rules and architectural guidelines into a standardized, tool-agnostic structure based on the `write-a-skill` pattern.

1. **Location**: All rules now reside in `.agents/skills/`.
2. **Format**: Each skill has a `SKILL.md` (< 100 lines) with YAML frontmatter (`name`, `description`).
3. **Structure**: Tech-stack based (`nextjs-web`, `express-api`) rather than app-based.
4. **Communication**: Global enforcement of "Caveman" style and "Grill-Me" protocol.
5. **Agnosticism**: Root-level `CLAUDE.md`, `.cursorrules`, and `.vscode/rules.md` act as barrel imports pointing to `.agents/skills/`.

## Consequences

- **Positive**: Single source of truth for all agents. Bite-sized, token-efficient documentation. Clearer architecture for new agents/devs.
- **Negative**: Requires discipline to keep `SKILL.md` files under 100 lines and use `REFERENCE.md` for overflow.
- **Requirement**: Mandatory ADR update/creation for every branch/significant change.
- **Commit Standards**: Explicitly defined `feat:` for new rules and `refactor:` for reorganization in `git-strategy/SKILL.md`.
- **Visibility**: Implemented **Immutable Alignment Rule** in `repo-behavior/SKILL.md`. Unified all root barrel imports (`CLAUDE.md`, `.cursorrules`, `.vscode/rules.md`) to be bit-for-bit identical and mandatory to synchronize. Added `settings.json` instructions for VS Code Copilot compatibility.
