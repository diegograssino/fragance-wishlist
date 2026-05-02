---
name: git-strategy
description: Git branching model, commit message conventions, and pull request workflows. Use when creating branches, writing commits, or opening PRs.
---

# Git Strategy & Lifecycle

_Golden Rule_: This document serves as the absolute blueprint for our source control flow. It must be strictly followed to ensure clean history and automated CI triggers.

## 1. Branching Model (Simplified GitFlow)

- **`main`**: The immutable production branch. Represents what is currently live.
- **`dev`**: The active staging/development branch.
- **Feature Branches**: All active work must occur on a dedicated branch created off `dev`.

### Branch Naming Convention

Since we do not use tickets, branch names must strictly describe the intent using prefixes:

- `feat/description-of-feature` (e.g., `feat/login-page`)
- `fix/description-of-bug` (e.g., `fix/header-alignment`)
- `chore/description-of-task` (e.g., `chore/update-deps`)

## 2. Pull Request Workflow

- **No Direct Pushes**: Never push directly to `main` or `dev`.
- **Target**: Open PRs from your feature branch targeting `dev`.
- **Merge Strategy**: We strictly enforce **Rebase and Merge**. This preserves your complete commit history without creating messy merge commits, keeping a linear history. Every individual commit in your PR will be added to the base branch.
- **Promotion**: When a release is ready, open a PR from `dev` targeting `main`.

## 3. Commit Messages (Conventional Commits)

Commit messages (and specifically the final squashed PR title) MUST follow the Conventional Commits specification. This ensures automated changelog generation and semantic versioning.

**Format**: `type(scope?): subject`

**Valid Types**:

- `feat:` A new feature OR new repository rule/infrastructure.
- `fix:` A bug fix OR correction to a rule.
- `chore:` Routine tasks, dependency updates, or tool configurations.
- `refactor:` Code/Rule changes that neither fix a bug nor add a feature/behavior (e.g., reformatting).
- `docs:` Documentation only changes.

**Note on Rule Changes**:

- Use `feat:` when introducing a new architectural requirement (e.g., Mandatory ADRs).
- Use `refactor:` only when reorganizing existing rules without changing their intent.

**Examples**:

- `feat: implement google oauth login`
- `fix(ui): correct button padding on mobile`
- `chore: update vite to version 6`
