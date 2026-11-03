# План урока Р4.21: Как читать и сравнивать методологии

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.15–Р4.20, Р3.07.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Переход к разделу 5: evaluate multiple agents, verification debt, isolation and orchestration.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: This is the synthesis lesson: compare defined workflow instances, not labels. The set is heterogeneous—open-source toolkits/frameworks, hosted IDE products and course working models—so first classify unit under comparison. No universal winner follows from feature tables or vendor marketing.
3. Теория/механизм: Create dossier: author/org, source and version/date, intended user, artifacts, state transitions, human gates, agent/runtime/tool support, installer/permissions, output persistence, checks, change reconciliation, price/access. For controlled case fix baseline commit, task, acceptance oracle, model/runtime as feasible, reviewer and timebox; record deviations and repeat where warranted.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Use one Workbench requirement and common rubric; compare documentation only for all candidates first. Limit hands-on rows to approaches that can be installed/accessed and truly executed. Record each claim status (documented, observed, independently measured, unknown) and no fabricated ranking.
6. Production engineering: Report false-positive/negative check behavior, security/data, accessibility/platform availability, license, maintenance support, hidden human effort, cost and legacy fit. Do not conflate documented function with effectiveness or code correctness.
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
| Терминология и механизм | SRC-401; SRC-404; SRC-405 |
| Практический flow и инструмент | SRC-401; SRC-404; SRC-405; SRC-406; SRC-407; SRC-413 |
| Production risk, security, verification | SRC-406; SRC-407; SRC-413 |


## Вопросы проверки знаний
### 1. Why compare on one case?

It controls task and oracle better than unrelated demos; still a single case limits generalization. [SRC-401](sources.md#src-401), [SRC-404](sources.md#src-404)
### 2. Which claims require live execution?

Install behavior, trigger support, generated files, actual workflow gates, compatibility and latency/quality outcomes. [SRC-401](sources.md#src-401), [SRC-404](sources.md#src-404)
### 3. How distinguish vendor documentation from independent measurement?

Label evidence source and method; docs describe intended capability, benchmark records observed outcomes with conditions. [SRC-401](sources.md#src-401), [SRC-404](sources.md#src-404)
### 4. What common criteria matter?

Intent/traceability, brownfield fit, verification, security, setup/maintenance, human effort, TCO, accessibility and failure recovery. [SRC-401](sources.md#src-401), [SRC-404](sources.md#src-404)
### 5. How should inaccessible products appear?

Mark document-only or not assessed; do not equate absent access with failure or docs with verified behavior. [SRC-401](sources.md#src-401), [SRC-404](sources.md#src-404)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Before comparative study, approve common case, freeze revisions/environment and plan sample/repeat count. Section 4 research itself performed only source-based review.
