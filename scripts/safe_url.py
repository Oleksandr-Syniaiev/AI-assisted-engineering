"""URL validation shared by the offline Python builders (standard library only)."""
import re
from urllib.parse import urlsplit


def assert_safe_url(value):
    if not value or re.search(r'[\x00-\x20\x7f\\]', value) or value.startswith('//'):
        raise ValueError('Unsupported URL')
    parsed = urlsplit(value)
    if parsed.scheme.lower() not in ('', 'http', 'https'):
        raise ValueError('Unsupported URL scheme')
    if parsed.scheme and not parsed.netloc:
        raise ValueError('Web URL requires a host')
    return value
