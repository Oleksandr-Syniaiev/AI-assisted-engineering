# План урока Р4.08: Паттерн 8. Переиспользуемый workflow

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.03, Р4.09, Р4.11.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: R4.09 defines artifact contracts that stages share.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Reusable workflow — версионируемый процесс с определёнными входами, стадиями, результатами и условиями отказа, повторно вызываемый на сопоставимых задачах. Отличать agent skill/prompt template, orchestration graph and CI reusable workflow; одинаковый ярлык не делает их execution model одинаковой.
3. Теория/механизм: Определить contract and schema; preconditions; identity/permissions; stage transitions, durable artifacts; timeout/budget and cancellation; idempotency and retries; outputs and validation; observability/version; compatibility and deprecation. State data should be explicit, not hidden in conversation.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Показать flow `spec → plan → implement → checks → review summary`: одна стадия выдаёт versioned artifact, следующий consumer checks schema/hash and predecessor status. Simulate test failure and resume from checkpoint without repeating a side effect. No actual workflow run.
6. Production engineering: Review versioned dependency calls, rollback, secrets, retries, concurrency, data retention and change approval. For GitHub reusable workflows, pin external ref to SHA for stability/security where appropriate; monitor queue and cost.
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
| Терминология и механизм | SRC-408; SRC-416; SRC-420 |
| Практический flow и инструмент | SRC-408; SRC-416; SRC-420 |
| Production risk, security, verification | SRC-408; SRC-416; SRC-420 |


## Вопросы проверки знаний
### 1. Какие поля обязательны в workflow contract?

Inputs/types, output artifact/schema, preconditions, permissions, success criterion, failure/retry and state ownership. [SRC-408](sources.md#src-408), [SRC-416](sources.md#src-416)
### 2. Почему нельзя хранить состояние только в chat history?

Сессия can compact/disappear and replay semantics unknown; durable explicit state enables resumption and audit. [SRC-408](sources.md#src-408), [SRC-416](sources.md#src-416)
### 3. Когда нужен skill vs orchestrator?

Skill packages reusable guidance/resources; orchestrator controls stage/state/transitions and side effects. [SRC-408](sources.md#src-408), [SRC-416](sources.md#src-416)
### 4. Как предотвращать repeated side effects?

Idempotency key, dedup state, transactional/outbox pattern or check-before-write design. [SRC-408](sources.md#src-408), [SRC-416](sources.md#src-416)
### 5. Как доказать workflow improves throughput?

Compare baseline cycle time, quality/rework, cost and failure rate on representative tasks; measure setup and maintenance too. [SRC-408](sources.md#src-408), [SRC-416](sources.md#src-416)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Выбрать workflow runtime and serialization format; examples from API vendor must be version-pinned.
