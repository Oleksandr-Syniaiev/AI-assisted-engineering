# План урока Р4.13: Паттерн 13. Deferred context disclosure

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р3.05, Р4.09.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: После проектирования context boundary обсудить ценности и enforceable controls.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Deferred context disclosure is treated as context progressive loading: keep concise index/entry-point context available and reveal deeper instructions/files only when a task area or retrieval condition matches. It is a design pattern rather than a standardized protocol. Difference from simply omitting information is that the information remains discoverable with explicit activation/provenance.
3. Теория/механизм: Structure index→topic/resource→detail; describe triggers and applicability; let tools search or skill discovery load relevant artifact; cite source path/version into task; track retrieval miss and stale source; enforce data permissions before retrieval. Define fallback when trigger misses and context budget overflows.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Map a request touching DB migration to load README + general invariants first, then migration guide/rollback policy only on migration match; unrelated UI path never loads confidential migration notes. Show expected evidence and retrieval miss fallback, no real token measurement.
6. Production engineering: ACL-aware retrieval, cache invalidation, prompt injection, change propagation, context quality/latency and what can be safely omitted. Do not rely on hidden information to enforce policy; security controls reside outside model context.
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
| Терминология и механизм | SRC-425; SRC-420; SRC-419 |
| Практический flow и инструмент | SRC-425; SRC-420; SRC-419 |
| Production risk, security, verification | SRC-425; SRC-420; SRC-419 |


## Вопросы проверки знаний
### 1. Чем delayed disclosure не является?

Not deleting a document; it preserves a path to load selected data when relevant. Nor does it enforce access restrictions itself. [SRC-425](sources.md#src-425), [SRC-420](sources.md#src-420)
### 2. Какие два главных failure modes?

Relevant context is not discovered; stale or malicious context is loaded and trusted incorrectly. [SRC-425](sources.md#src-425), [SRC-420](sources.md#src-420)
### 3. Как проверять retrieval completeness?

Representative tasks with known required sources; measure source recall, precision, stale hits, answer correctness and latency. [SRC-425](sources.md#src-425), [SRC-420](sources.md#src-420)
### 4. Почему сохранять provenance?

Lets reviewer verify which version/path supported a decision and detect outdated or unauthorized sources. [SRC-425](sources.md#src-425), [SRC-420](sources.md#src-420)
### 5. Нужна ли vector DB?

Only if direct search/navigation is insufficient and scale/quality justify operational cost; not prerequisite to progressive disclosure. [SRC-425](sources.md#src-425), [SRC-420](sources.md#src-420)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Select one harness’s on-demand mechanism and determine context instrumentation; cost claims need measured token baseline.
