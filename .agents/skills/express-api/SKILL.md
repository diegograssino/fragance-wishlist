---
name: express-ts-api
description: Architecture and database rules for Node.js Express APIs. Use when writing backend routes, controllers, services, or modifying fw-api.
---

# Express (fw-api) Rules

## Architecture

- **Framework**: Node.js, Express, TypeScript.
- **Pattern**: Controller-Service architecture. Maintain isolated logic per module.
- **Dependency Injection**: Use DI principles where applicable to ensure testability.
- **Data Transfer Objects**: Use explicit DTOs for incoming and outgoing data mapping.
- **Error Handling**: Centralize error parsing in middleware or distinct base classes (avoid repetitive try/catch across all services). Do not use `console.log`; use domain-specific structured logging.

## Database

- **Database**: SQLite or PostgreSQL (generic).
- **ORM**: TypeORM.
- **Rule**: Do not use in-memory mock endpoints. Always implement via repositories. Keep Models normalized and manage entity relationships rigorously.

## Gold Standard Reference

- Use `users.services.ts` and `users.controller.ts` as the standard for DTO mapping and database interactions using TypeORM.
- Do not use raw logic in controllers. Instead, delegate to Service classes.
