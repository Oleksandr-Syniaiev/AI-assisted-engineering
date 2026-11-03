// Candidate lab policy, not a production application. Contract: see R1.06 lab-contract.md.
export function validateTitle(value) {
  if (typeof value !== 'string') return { ok: false, reason: 'type' };
  const normalized = value.trim();
  if (normalized.length === 0) return { ok: false, reason: 'empty' };
  if (normalized.length > 80) return { ok: false, reason: 'length' };
  return { ok: true, normalized };
}

// Intentional regression: the empty check happens before normalization.
export function validateTitleBaseline(value) {
  if (typeof value !== 'string') return { ok: false, reason: 'type' };
  if (value.length === 0) return { ok: false, reason: 'empty' };
  const normalized = value.trim();
  if (normalized.length > 80) return { ok: false, reason: 'length' };
  return { ok: true, normalized };
}

