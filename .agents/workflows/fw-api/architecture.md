# fw-api Architecture Rules

- Framework: Node.js / TypeScript / NestJS structure (Controllers, Services)
- Ensure proper Dependency Injection.
- Maintain isolated logic per module.

## Gold Standard Reference
Whenever building a new feature, use recently refactored components as the standard template.
- Use `users.services.ts` and `users.controller.ts` as the standard for DTO mapping and database interactions using TypeORM.

## Explicit Anti-Patterns vs Best Practices
**Wrong Way (Anti-pattern):**
```typescript
// Don't use in-memory mock data or raw logic in controllers.
async getUser(id: string) {
  return users.find(u => u.id === id);
}
```

**Right Way (Gold standard):**
```typescript
// Do use Dependency Injection, TypeORM repositories, and centralized error handling DTOs.
async getUserByIdService(id: string) {
  const user = await this.userRepository.findOne({ where: { id } });
  if (!user) throw new NotFoundException('User not found');
  return user;
}
```

## Exceptions and Logging
- Agents must fail gracefully. 
- Use domain-specific structured logging rather than global or ad-hoc `console.log`.
- Centralize error handling parsing in middleware or distinct base classes (avoid repetitive try/catch across all services).
