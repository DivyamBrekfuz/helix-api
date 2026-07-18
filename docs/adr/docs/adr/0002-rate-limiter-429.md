# ADR 0002: Return 429 (not 500) under burst

## Context
The token-bucket limiter throws on an empty bucket, so SDK clients get a 500 and hard-fail instead of backing off.

## Decision
Return 429 with a Retry-After header; add jittered client-side backoff to the SDK.

## Consequences
Clients degrade gracefully under burst; no more spurious 5xx alerts.
