# План урока Р4.20: Методология 6. superpowers

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.15, Р4.08; базовое понятие субагента.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.21 combines evidence and comparison rubric for all six methods.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Superpowers is a community maintained agent-skills framework and self-described software-development methodology. Current repository describes brainstorming, worktree baseline, writing plans, subagent/manual execution, TDD, review and branch finish; harness installs and available features vary. Classify source claims and skill instructions, not as proven universal efficacy.
3. Теория/механизм: Trace skill selection/activation and bootstrap for target harness; map design approval → plan → execution route → review → finishing. Distinguish subagent-driven branch from inline executing-plan mode, and repository skill content from plugin installation/marketplace. Pin release and inspect scripts/hooks/telemetry.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Show documentation-derived sequence for one small request, mark expected output and gate at each stage; illustrate that skills specify a workflow, but execution requires supported integration. No plugin was installed; no tests or triggers run.
6. Production engineering: Run permission review, privacy/telemetry check, baseline tests and external code review; track subagent coordination cost, TDD compliance, false activation, model and integration support. High ceremony may be inefficient for tiny tasks; task duration claims from README are anecdotal.
7. Alternatives matrix with applicability, learning curve, implementation, maintenance, safety, verification and total cost.
8. Пять сценарных вопросов с объяснёнными ответами.
9. Выводы, известные ограничения и связь со следующей темой.

## Практическая демонстрация и evidence
- Вход: сквозной кандидат Engineering Workbench; конкретный scaffold/harness/version to be fixed before drafting.
- Показать happy path и один конфликт/отказ/negative case.
- Ожидаемый результат сформулировать как критерий, не как фактический вывод.
- Фактическое исполнение включать лишь при запуске в описанной среде с версией и необрезанным evidence.
- Проверка должна быть независима от авторского/agent-generated artifact, где возможно.
- Research package не включает команды, которые здесь запускались; некоторые официальные примеры продуктов можно процитировать после повторной проверки.

## Карта evidence
| Часть урока | SRC-ID |
|---|---|
| Терминология и механизм | SRC-407 |
| Практический flow и инструмент | SRC-407 |
| Production risk, security, verification | SRC-407 |


## Вопросы проверки знаний
### 1. Who maintains Superpowers?

Jesse Vincent/Prime Radiant and open-source contributors, per repository; check pinned release for current structure. [SRC-407](sources.md#src-407)
### 2. What are core workflow stages described?

Brainstorming, worktrees, planning, subagent or inline execution, TDD, review and branch finish. [SRC-407](sources.md#src-407)
### 3. Are its skills guaranteed to run?

No. Activation depends on supported harness, descriptions/configuration and session; verify actual invocation. [SRC-407](sources.md#src-407)
### 4. Is TDD equivalently enforced in every IDE?

Not guaranteed by README; implementation relies on instructions/agent adherence unless external test gates enforce results. [SRC-407](sources.md#src-407)
### 5. Have setup, telemetry, license or skill evals been independently tested?

No; research inspected repo docs only. Inspect license, scripts, permissions and current release before production adoption. [SRC-407](sources.md#src-407)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Pin Superpowers version and harness; inspect install mechanism, license, telemetry settings and current skills tests before reproducible walkthrough.
