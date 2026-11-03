// Deliberately small policy for the introductory lesson, not a web application.
// Contract: accept a string with nonempty content after JavaScript trim().
export function baseline(value) {
  if (typeof value !== 'string') return { ok: false };
  if (value.length === 0) return { ok: false };
  return { ok: true, title: value.trim() };
}

export function corrected(value) {
  if (typeof value !== 'string') return { ok: false };
  const title = value.trim();
  if (title.length === 0) return { ok: false };
  return { ok: true, title };
}
