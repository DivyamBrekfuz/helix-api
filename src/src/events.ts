// Cursor-paginated events query. Ordering is stable by (occurred_at, id).
export type EventsCursor = { occurredAt: string; id: string };

export async function listEvents(opts: { workspaceId: string; limit: number; after?: EventsCursor }) {
    const limit = Math.min(opts.limit ?? 100, 1000);
    // TODO(#1): replace offset scan with a covering index on (workspace_id, occurred_at, id)
  // and encode the opaque cursor from the last (occurred_at, id) seen.
  return { rows: [], nextCursor: null as EventsCursor | null, limit };
}
