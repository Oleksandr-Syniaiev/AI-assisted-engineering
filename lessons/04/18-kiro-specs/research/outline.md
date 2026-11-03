# План урока Р4.18: Методология 4. Kiro (AWS)

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.15, Р3.07; access to product before hands-on evaluation.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.19 treats specs.md as a source project and checks its broad framework claims.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Kiro is a vendor product/agentic IDE with a documented spec workflow, not a vendor-neutral method. Docs describe requirements/user stories + acceptance criteria, design artifacts, tasks and execution/review, with feature/bugfix and variants. Analyze product surface and method concept separately; feature matrix/pricing/platform are volatile.
3. Теория/механизм: Capture feature vs bugfix decision; choose requirements-first/design-first or quick path as documented; review requirements/design, derive tasks and dependencies; execute tasks and inspect code/spec diffs. Distinguish capability claims from a measured effect such as speed.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Create paper walkthrough with request state transition: list expected requirements/design/tasks; label docs-specified output vs unknown produced files in actual current runtime. No Kiro session/account or execution available in research.
6. Production engineering: Evaluate IDE/platform access, cloud/data boundary, enterprise controls, pricing, version compatibility, generated artifact ownership, existing repo conventions and validation quality; managed product limits reproducibility.
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
| Терминология и механизм | SRC-405 |
| Практический flow и инструмент | SRC-405 |
| Production risk, security, verification | SRC-405 |


## Вопросы проверки знаний
### 1. Кто автор методологии Kiro?

AWS builds Kiro product; the spec flow is documented vendor capability rather than independent standard. [SRC-405](sources.md#src-405)
### 2. Каковы core spec artifacts in docs?

Requirements/bug analysis, design, tasks; exact format and workflow options depend on current product docs. [SRC-405](sources.md#src-405)
### 3. Does task execution prove delivery quality?

No. Need independent checks and review of final code against acceptance criteria. [SRC-405](sources.md#src-405)
### 4. Что нужно для fair comparison?

Record IDE/CLI/web surface, version, account/access, model, plan and actual gates; compare same clean case. [SRC-405](sources.md#src-405)
### 5. Урок hands-on ready?

Not yet: no live access or tool execution took place; source documentation only. [SRC-405](sources.md#src-405)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Determine accessible Kiro surface/account, version/pricing/access and export/repo semantics before drafting actual instructions.
