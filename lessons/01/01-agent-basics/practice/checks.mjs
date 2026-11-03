import test from 'node:test';

// Same oracle for both versions. The whitespace case must expose the baseline bug.
export function registerChecks(validate) {
  const cases = [
    ['empty string', '', { ok: false }],
    ['whitespace only', '   ', { ok: false }],
    ['valid title', ' Fix CI ', { ok: true, title: 'Fix CI' }],
    ['wrong type', 7, { ok: false }],
  ];
  for (const [name, input, expected] of cases) {
    test(name, () => {
      const actual = validate(input);
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(JSON.stringify({ input, expected, actual }));
      }
    });
  }
}
