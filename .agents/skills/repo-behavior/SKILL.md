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

## 4. Multi-IDE / Multi-Tool Agnosticism

- **Single Source of Truth**: `.agents/` is the infrastructure root for ALL tools (Antigravity, Claude Code, Cursor, Windsurf).
- `CLAUDE.md` and `.cursorrules` at the repo root act solely as "barrel imports" pointing to `.agents/`.
- Do not invent tool-specific rules outside of this folder.

## 5. Agent Visibility Rule (Justification for Duplication)

- **Why Barrel Imports?**: Different AI agents (Claude Code, Cursor, Windsurf) look for specific "magic" files at the repository root to load context.
- **Redundancy is Required**: To remain IDE-agnostic, we maintain identical barrel imports (`CLAUDE.md`, `.cursorrules`, `.vscode/rules.md`).
- **Function**: These files MUST only contain pointers to `.agents/skills/` and high-level behavioral overrides (e.g., Commits, Caveman) to ensure they are the first things an agent reads upon initialization.
- **SSOT**: The "Soul" of the rules remains in `.agents/skills/`. The root files are merely the "eyes" through which different agents see those skills.

## 5. The Golden Rule (The Soul of Skills)

- **Can we reproduce it from scratch with our rules and ADRs?**
- Every skill, rule, and piece of documentation MUST contain enough exact instruction and context to rebuild the specific architecture, pattern, or configuration from zero.
- Never rely on tacit knowledge. If a developer or agent gets wiped, these skills must serve as the complete architectural DNA to reconstruct the system.
