# fw-web API Layer

- Fetching: Use a centralized Axios client.
- Data Access Layer (DAL): All API calls for a specific domain/vertical slice must be contained in its own DA layer directory.
- Use explicit Data Transfer Objects (DTOs) for incoming and outgoing data mapping.
