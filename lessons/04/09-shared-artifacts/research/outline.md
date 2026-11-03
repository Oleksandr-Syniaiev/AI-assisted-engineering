# План урока Р4.09: Паттерн 9. Shared artifacts

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.02, Р4.05.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Пакетирование reusable workflow требует ясных артефактов и зависимостей.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Shared artifacts are durable, typed outputs used across stages, agents, CI jobs or people: spec, test report, trace, patch or decision record. A shared folder or conversation is not a contract. Distinguish immutable handoff from mutable shared state; ownership/version/concurrency semantics must be explicit.
3. Теория/механизм: Define artifact ID/type/schema/version/producer/consumer/lineage, creation time, parent run/commit, sensitivity/ACL, retention, state/ownership and supersession. Prefer append-only or immutable handoffs; mutable shared artifacts need locking/merge strategy and conflict resolution. Validate schema and provenance at boundary.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Two independent stages write `review.json`: show collision risk; instead write unique attempt IDs and aggregate immutable reports keyed by change+commit+stage. A CI build artifact transfers test output from one job to another but is not shared agent memory.
6. Production engineering: Production include access control, retention/deletion, signed provenance, data classification, stale artifact detection, cross-tenant isolation, storage cost and trace-to-commit linkage. Never put secrets/raw PII in reusable reports without policy.
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
| Терминология и механизм | SRC-418; SRC-416; SRC-408 |
| Практический flow и инструмент | SRC-418; SRC-416; SRC-408 |
| Production risk, security, verification | SRC-418; SRC-416; SRC-408 |


## Вопросы проверки знаний
### 1. Что делает artifact shared?

Несколько well-defined consumers use it across a boundary; its metadata and ownership govern what it means. [SRC-418](sources.md#src-418), [SRC-416](sources.md#src-416)
### 2. Почему immutable handoff обычно проще?

Avoids invisible overwrite and enables history/replay; explicit supersession makes the new truth visible. [SRC-418](sources.md#src-418), [SRC-416](sources.md#src-416)
### 3. Как решать два concurrent writes?

Separate writer namespaces or a single owner/merge step; define conflict semantics, do not rely on last-writer-wins blindly. [SRC-418](sources.md#src-418), [SRC-416](sources.md#src-416)
### 4. Что важнее для safety?

ACL, data minimization, provenance, retention and redaction; do not publish secrets to logs/artifacts. [SRC-418](sources.md#src-418), [SRC-416](sources.md#src-416)
### 5. Зачем нужен commit/run identity?

It links evidence to exact source and environment; without identity a stale report may be mistaken for current validation. [SRC-418](sources.md#src-418), [SRC-416](sources.md#src-416)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Set artifact schema, sensitivity class, retention and run identity for the course scaffold.
