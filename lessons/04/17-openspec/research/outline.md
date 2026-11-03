# План урока Р4.17: Методология 3. OpenSpec

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.15, Р3.07.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.18 examines product-bound Kiro specifications.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: OpenSpec is a project/toolkit for spec-driven change workflows. Its docs describe per-change proposal/spec delta/design/tasks and archive/sync lifecycle, plus commands and profiles that vary. Treat maintainers’ documentation as intended design; confirm exact current profile before lesson. Distinguish the long-lived capability specs from temporary change artifacts.
3. Теория/механизм: Inspect global/spec baseline; explore optional; propose a named change; generate/modify delta artifacts; review; apply; verify; archive/sync according to chosen workflow. Determine which steps mutate code vs spec and how archive changes canonical spec. Use Git as audit and rollback.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Document-based change `requests.status transition`: compare persistent state with one change’s delta; follow current documented commands only as source illustration, not claim of installation or execution. Expected artifacts listed; no CLI run performed.
6. Production engineering: Multiple maintainers need branch/merge conflict policy, spec ownership, update-on-archive checks, stale specs, cross-repo workflow and migration of legacy docs. New/expanded profiles and commands require pinning.
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
| Терминология и механизм | SRC-404; SRC-426 |
| Практический flow и инструмент | SRC-404; SRC-426 |
| Production risk, security, verification | SRC-404; SRC-426 |


## Вопросы проверки знаний
### 1. Что такое delta spec?

A per-change description of added/modified/removed behavior intended to merge into longer-lived capability specs at completion. [SRC-404](sources.md#src-404), [SRC-426](sources.md#src-426)
### 2. Что обычно делает archive?

Current documented workflow reconciles completed change records into canonical state/history; exact behavior must be checked for profile/version. [SRC-404](sources.md#src-404), [SRC-426](sources.md#src-426)
### 3. Почему есть стоимость архивирования?

It introduces a consistency boundary; skipped sync/archive can leave baseline specs stale. [SRC-404](sources.md#src-404), [SRC-426](sources.md#src-426)
### 4. Можно ли сразу утверждать все docs commands?

No, repository main changes; pin tag/commit and installed tool compatibility before lesson. [SRC-404](sources.md#src-404), [SRC-426](sources.md#src-426)
### 5. OpenSpec был запущен?

Нет. Research read official repository/docs only; no install or workflow results reported. [SRC-404](sources.md#src-404), [SRC-426](sources.md#src-426)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Pin OpenSpec release/profile, inspect current command contract, migration guide and licensing; no hands-on claims until executed.
