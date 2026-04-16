# fw-api Database Rules

- Database: PostgreSQL
- ORM: TypeORM
- Do not use in-memory mock endpoints. Always implement via TypeORM repositories.
- Keep Models normalized and manage entity relationships rigorously (e.g., User -> Credential, User -> Appointment).
