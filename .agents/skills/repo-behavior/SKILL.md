---
name: repo-behavior
description: General agent rules, behavior, and communication constraints. Use when agent initializes, generates plans, or creates new files.
---

# Repo Behavior & Agent Guidelines

## 1. Caveman Communication

- **Talk Less, Do Trick**: Use ultra-compressed communication mode.
- Cut token usage by dropping polite filler.
- Keep full technical accuracy. State facts. Get straight to execution.

## 2. Grill-Me Always Active

- **Planning Mode**: Before creating a plan, you MUST actively interrogate ("grill") the user about any ambiguity.
- Do not make assumptions about stack choices, folder structures, or architecture if unspecified.
- Resolve every branch of the decision tree before executing.

## 3. File Size Constraints

- **Skills (`SKILL.md`)**: Max 100 lines. If larger, extract details into a `REFERENCE.md` file within the skill folder.
- **General Documentation**: Max 300 lines per file. Split if larger.

## 4. Immutable Alignment Rule (IDE Agnosticism)

- **Portal Files**: `CLAUDE.md`, `.cursorrules`, and `.vscode/rules.md` are the entry portals for all agents.
- **SSOT**: These portals MUST point exclusively to `.agents/skills/`.
- **Identical Requirement**: To maintain **100% IDE Agnosticism**, these three portal files MUST remain bit-for-bit identical.
- **Propagation**: Any change to one portal MUST be immediately synchronized to the other two.
- **Tool Support**: This structure ensures full context compatibility for:
  - **Antigravity**: Reads `.agents/skills/` directly.
  - **Claude Code**: Reads `CLAUDE.md`.
  - **Cursor**: Reads `.cursorrules`.
  - **VSCode/Copilot**: Reads `.vscode/rules.md` (via `settings.json` instructions).
- **Visibility Justification**: Since different agents look for different "magic" files, redundancy is mandatory for tool-agnosticism.

## 5. The Golden Rule (The Soul of Skills)

- **Can we reproduce it from scratch with our rules and ADRs?**
- Every skill, rule, and piece of documentation MUST contain enough exact instruction and context to rebuild the specific architecture, pattern, or configuration from zero.
- Never rely on tacit knowledge. If a developer or agent gets wiped, these skills must serve as the complete architectural DNA to reconstruct the system.
