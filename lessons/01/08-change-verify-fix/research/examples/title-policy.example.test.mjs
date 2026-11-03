import test from 'node:test';
import { validateTitle, validateTitleBaseline } from './title-policy.example.mjs';

const variant = process.env.COURSE_TITLE_POLICY_VARIANT ?? 'corrected';
if (!['baseline', 'corrected'].includes(variant)) throw new Error('Unknown policy variant');
const validate = variant === 'baseline' ? validateTitleBaseline : validateTitle;
const cases = [
  ['missing', undefined, { ok: false, reason: 'type' }],
  ['number is not coerced', 42, { ok: false, reason: 'type' }],
  ['empty', '', { ok: false, reason: 'empty' }],
  ['whitespace only', ' \t\n ', { ok: false, reason: 'empty' }],
  ['valid title', 'Fix CI', { ok: true, normalized: 'Fix CI' }],
  ['trim boundary', ' Fix CI ', { ok: true, normalized: 'Fix CI' }],
  ['80 code units', 'a'.repeat(80), { ok: true, normalized: 'a'.repeat(80) }],
  ['81 code units', 'a'.repeat(81), { ok: false, reason: 'length' }],
  ['40 emoji = 80 UTF-16 units', '😀'.repeat(40), { ok: true, normalized: '😀'.repeat(40) }],
  ['41 emoji = 82 UTF-16 units', '😀'.repeat(41), { ok: false, reason: 'length' }],
];
for (const [name, input, expected] of cases) {
  test(variant + ': ' + name, () => {
    const actual = validate(input);
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(JSON.stringify({ input, expected, actual }));
    }
  });
}

