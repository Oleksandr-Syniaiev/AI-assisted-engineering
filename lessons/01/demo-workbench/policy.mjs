// Учебный контракт из Р1.01. Не изменяет исходный пример первого урока.
export function validateTitle(value) {
  if (typeof value !== 'string') return { ok: false };
  const title = value.trim();
  return title.length ? { ok: true, title } : { ok: false };
}
