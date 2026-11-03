// Loopback binding is necessary but does not validate a browser's Host/Origin.
export function isLocalRequest(req) {
  const host = req.headers.host;
  if (typeof host !== 'string' || !/^(?:localhost|127\.0\.0\.1)(?::[0-9]{1,5})?$/i.test(host)) return false;
  const origin = req.headers.origin;
  if (origin === undefined) return true;
  if (typeof origin !== 'string') return false;
  try {
    const parsed = new URL(origin);
    return parsed.origin === origin && parsed.protocol === 'http:' && parsed.host.toLowerCase() === host.toLowerCase();
  } catch { return false; }
}
