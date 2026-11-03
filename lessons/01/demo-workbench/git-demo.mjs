// Изолированная проверка примеров Р1.07. Корневой проект не меняется.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'aae-git-'));
const git = (...args) => execFileSync('git', args, { cwd: dir, encoding: 'utf8', windowsHide: true }).trim();
try {
  git('init', '--initial-branch=main');
  git('config', 'user.name', 'Course Demo');
  git('config', 'user.email', 'demo@example.invalid');
  git('config', 'core.autocrlf', 'false');
  fs.writeFileSync(path.join(dir, 'policy.mjs'), '// baseline\n');
  git('add', '--', 'policy.mjs'); git('commit', '-m', 'Save baseline');
  git('switch', '-c', 'fix/title-validation');
  fs.writeFileSync(path.join(dir, 'policy.mjs'), '// corrected\n');
  assert.match(git('diff', '--', 'policy.mjs'), /\+\/\/ corrected/);
  git('add', '--', 'policy.mjs');
  fs.appendFileSync(path.join(dir, 'policy.mjs'), '// later note\n');
  assert.match(git('diff', '--cached', '--', 'policy.mjs'), /\+\/\/ corrected/);
  assert.doesNotMatch(git('diff', '--cached', '--', 'policy.mjs'), /later note/);
  assert.match(git('diff', '--', 'policy.mjs'), /\+\/\/ later note/);
  console.log('status before unstage:', git('status', '--short'));
  git('restore', '--staged', '--', 'policy.mjs');
  assert.equal(git('diff', '--cached'), '');
  assert.match(fs.readFileSync(path.join(dir, 'policy.mjs'), 'utf8'), /later note/);
  git('add', '--', 'policy.mjs'); git('commit', '-m', 'Normalize title');
  git('revert', '--no-edit', 'HEAD');
  assert.equal(fs.readFileSync(path.join(dir, 'policy.mjs'), 'utf8'), '// baseline\n');
  assert.equal(git('rev-list', '--count', 'HEAD'), '3');
  console.log('PASS: unstaged/staged diff, unstage preserves file, revert adds commit');
} finally {
  // dir получен только из mkdtemp; не принимает пользовательского пути.
  fs.rmSync(dir, { recursive: true });
}
