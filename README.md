# helix-api

Helix event-analytics platform — public REST/GraphQL API, SDKs, and OpenAPI spec.

## Endpoints
- `GET /v1/events` — query events (cursor pagination: limit + after).
- - `POST /v1/events` — ingest a batch of events.
  - - `GET /v1/metrics` — aggregated metrics for dashboards.
   
    - ## Auth
    - SAML SSO with IdP group-to-role mapping. Service accounts use scoped API tokens.
   
    - ## Owners
    - Platform team. See docs/adr for architecture decisions.
