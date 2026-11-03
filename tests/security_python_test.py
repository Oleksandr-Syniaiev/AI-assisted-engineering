"""Exercise actual renderers without rebuilding HTML or installing dependencies."""
from pathlib import Path
import runpy
import unittest

ROOT = Path(__file__).resolve().parents[1]


class BuilderSecurityTests(unittest.TestCase):
    def test_all_python_renderers(self):
        for section in ('02', '03', '04', '05'):
            with self.subTest(section=section):
                renderer = runpy.run_path(str(ROOT / 'lessons' / section / 'build.py'))
                inline = renderer['inline']
                for url in ('javascript:alert%281%29', 'JaVaScRiPt:alert', 'data:text/html,hello', 'file:///etc/passwd', '//example.com/x'):
                    with self.subTest(url=url), self.assertRaises(ValueError):
                        inline('[x](' + url + ')')
                self.assertIn('href="references.html"', inline('[x](references.md)'))
                self.assertIn('href="https://example.com/?a=1&amp;b=2"', inline('[x](https://example.com/?a=1&b=2)'))


if __name__ == '__main__':
    unittest.main()
