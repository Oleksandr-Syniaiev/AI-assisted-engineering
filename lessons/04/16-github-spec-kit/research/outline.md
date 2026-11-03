# План урока Р4.16: Методология 2. GitHub Spec Kit

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.15, Р3.07.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.17 compares OpenSpec’s change-delta and archive model.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: GitHub Spec Kit is an open-source toolkit for agent-driven specification workflows, not merely a standard. Official docs describe command sequence such as constitution/specify/clarify/plan/tasks/analyze/implement/converge and evolving-spec policies; templates/invocation may change by version and agent. Analyze author/community, repository release history, artifact persistence, extension surface, adoption cost and limitations separately.
3. Теория/механизм: Documented path: establish project principles, draft user-facing spec, resolve ambiguity, derive plan/tasks, analyze artifact consistency, implement, converge against artifacts. Validate source and commands against a pinned release; distinguish core from extension-contributed behavior.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Prepare document-only walkthrough of change for request closure: show artifact names/links and proposed gate. Do not install or execute CLI in research; report author-doc workflow as documented capability, not actual observed outcome.
6. Production engineering: Brownfield adoption needs import/context and persistence policy; evaluate generated docs burden, hooks/extensions, compatibility, version and repo review. High risk still needs independent tests and gates.
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
| Терминология и механизм | SRC-401; SRC-402; SRC-403 |
| Практический flow и инструмент | SRC-401; SRC-402; SRC-403 |
| Production risk, security, verification | SRC-401; SRC-402; SRC-403 |


## Вопросы проверки знаний
### 1. Кто выпускает Spec Kit?

GitHub project; repository and docs are primary sources for its design and release-specific details. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 2. Какой путь описан в docs?

Current docs enumerate constitution, specify, clarify, plan, checklist, tasks, analyze, implement and converge, though commands are evolving. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 3. Нужно ли выполнять каждый stage для every change?

The tool supports process options; teams should right-size based on impact and verify applicable template/version. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 4. Как Spec Kit treats existing specs?

Docs describe flow-forward vs living spec choices and an analyze step, but team must select and maintain policy. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 5. Что пока неизвестно?

No CLI execution, compatibility matrix, timings or quality comparison conducted here. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Pin GitHub Spec Kit release and agent integration; recheck commands, license, supported platform, security/access and extension effects before lesson drafting.
