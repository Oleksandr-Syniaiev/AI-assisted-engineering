# Фактическая проверка примера Р1.01

Дата: 02.11.2026. ОС: Windows. Shell: PowerShell. Runtime, определённый node --version: **v24.22.1**. Рабочая папка — lessons/01/01-agent-basics.

Команды были выполнены локально при подготовке урока:

```shell
node --test practice/baseline.test.mjs
node --test practice/corrected.test.mjs
```

| Запуск | Tests | Passed | Failed | Skipped / todo | Exit code |
|---|---|---|---|---|---|
| baseline.test.mjs | 4 | 3 | 1 | 0 / 0 | 1 |
| corrected.test.mjs | 4 | 4 | 0 | 0 / 0 | 0 |

Единственное baseline-падение — whitespace only. Вход: три пробела. Ожидалось `{ "ok": false }`. Получено `{ "ok": true, "title": "" }`. Проверены также empty string, valid title с пробелами по краям и wrong type — число 7.

Каждый entrypoint использует один и тот же registerChecks из checks.mjs. Следовательно, различие результатов не получено ослаблением oracle. Код тестов и функций находится рядом с отчётом.

Не выполнялись HTTP-запросы, storage checks, агентные API-запуски или измерение продуктивности. Учебный trace в lesson.md смоделирован отдельно и намеренно неполон. Тестовые результаты подтверждают только указанное правило функции на четырёх случаях, а не корректность полного приложения или каждого возможного входа.
