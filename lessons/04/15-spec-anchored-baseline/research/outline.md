# План урока Р4.15: Методология 1. Spec-anchored как основа сравнения

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р3.08, Р4.05, Р4.08.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.16–Р4.20 study individual approaches using same rubric.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Continue the course working model from R3.08: a specification links agreed intent, change plan, implementation and evidence. Here it is a control baseline for later methodology comparisons, not a third-party product or standardized methodology. The baseline should be minimum viable but explicit, so other methods can be assessed against same task/outcome.
3. Теория/механизм: Freeze repository commit, change statement, requirements and acceptance oracle; specify known constraints/non-goals; allocate equal model/access/time if possible; identify which artifact/workflow is baseline vs tool-specific convenience; log deviations and version; compare implementation correctness, traceability, review/rework, setup cost and safety.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Use Workbench close-state change with positive/negative cases; keep baseline branch and rubric; record expected artifacts without running. Later method packages start from same clean baseline and report conditions.
6. Production engineering: Do not leak earlier method artifacts into later run; same harness/model/commit and reviewer where practical, disclose unavoidable changes; estimate operational adoption and maintenance not only generated code quality.
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
| Терминология и механизм | SRC-401; SRC-403; SRC-424 |
| Практический flow и инструмент | SRC-401; SRC-403; SRC-424 |
| Production risk, security, verification | SRC-401; SRC-403; SRC-424 |


## Вопросы проверки знаний
### 1. Что значит spec-anchored в этом сравнительном уроке?

Working course definition, carried from R3.08: requirements/artifact/check link anchors a workflow and common baseline. [SRC-401](sources.md#src-401), [SRC-403](sources.md#src-403)
### 2. Почему фиксировать baseline commit?

It holds application context constant and makes diffs/rework comparable. [SRC-401](sources.md#src-401), [SRC-403](sources.md#src-403)
### 3. Какой результат нельзя обобщать?

A single case’s ranking cannot establish universal superiority across project types, team skills or models. [SRC-401](sources.md#src-401), [SRC-403](sources.md#src-403)
### 4. Как избежать comparison leakage?

Reset to clean branch/copy and exclude outputs/decisions from previous methodology before next run. [SRC-401](sources.md#src-401), [SRC-403](sources.md#src-403)
### 5. Какие расходы учитывать?

Setup, configuration, inference, review, rework, training, maintenance, security and tool license/access. [SRC-401](sources.md#src-401), [SRC-403](sources.md#src-403)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Confirm the intended definition and common case rubric with curriculum owner; choose fixed repo commit/model/runtime before comparative execution.
