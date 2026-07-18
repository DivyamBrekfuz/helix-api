# ADR 0001: Cursor-based pagination for /v1/events

## Status
Proposed

## Context
The /v1/events endpoint returns the full result set and times out past ~10k rows
for large workspaces. Offset pagination is O(n) on deep pages and unstable under
concurrent writes.

## Decision
Adopt opaque cursor pagination (limit + after) with stable ordering by
(occurred_at, id). The cursor encodes the last (occurred_at, id) seen. Update the
TypeScript SDK, the OpenAPI spec, and the docs.

## Consequences
- Deep pagination becomes O(log n) via the composite index.
- - Cursors are stable under concurrent inserts.
  - - Closes the p95 timeout on large-workspace exports.
