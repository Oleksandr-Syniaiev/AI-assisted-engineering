// Only web URLs and local document references belong in generated links.
export function assertSafeUrl(value) {
  if (typeof value !== 'string' || !value || /[\u0000-\u0020\u007f\\]/.test(value) || value.startsWith('//')) {
    throw new Error('Unsupported URL');
  }
  const parsed = new URL(value, 'https://course.invalid/');
  if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Unsupported URL scheme');
  return value;
}
