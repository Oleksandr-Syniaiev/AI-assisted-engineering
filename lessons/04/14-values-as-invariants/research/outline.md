# План урока Р4.14: Моральные принципы как инварианты

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р3.03, Р4.11; AI risk governance and control design.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Далее зафиксировать spec-anchored baseline used in later comparisons.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: The title is a normative design exercise, not claim that ethics principles can be proven like program invariants. Translate value statements into context-specific policy, measurable constraints, observable tests and human decision authority, while preserving limitations and stakeholder conflicts. NIST AI RMF describes Govern/Map/Measure/Manage risk functions, not a universal moral code.
3. Теория/механизм: For principle (e.g., privacy) identify impacted actors, harm model, data flows, policy/threshold, technical control, audit evidence, exceptions/appeal and accountable owner. Use threat model, access minimization, retention/redaction test, reviewer check and incident process. Distinguish aspirational principle from verifiable claim.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Take principle «do not reveal another tenant’s request». Convert to identity-bound object authorization, negative integration cases, audit review, synthetic fixtures and incident escalation. Explain why instruction alone is insufficient and how residual risk is recorded.
6. Production engineering: Stakeholder participation, jurisdiction/data protections, accessibility/fairness, audit and policy updates; beware checklist theater, proxy fairness metrics, hidden exclusions and unreviewable overrides. Human-in-loop authority and appeals need operation design.
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
| Терминология и механизм | SRC-421; SRC-417; SRC-410 |
| Практический flow и инструмент | SRC-421; SRC-417; SRC-410 |
| Production risk, security, verification | SRC-421; SRC-417; SRC-410 |


## Вопросы проверки знаний
### 1. Можно ли превратить моральное правило в invariant?

Only a scoped, observable operational consequence can be invariant; value itself may be plural, contested and context-dependent. [SRC-421](sources.md#src-421), [SRC-417](sources.md#src-417)
### 2. Что даёт NIST AI RMF?

Risk lifecycle framing: govern, map, measure, manage; it does not certify a product as ethical or provide one universal test. [SRC-421](sources.md#src-421), [SRC-417](sources.md#src-417)
### 3. Как проверить privacy principle?

Trace actual data access, authz, retention/redaction and adversarial cases; a prompt sentence is insufficient. [SRC-421](sources.md#src-421), [SRC-417](sources.md#src-417)
### 4. Кто разрешает исключение?

Named accountable owner under transparent policy, with audit and review/appeal mechanism. [SRC-421](sources.md#src-421), [SRC-417](sources.md#src-417)
### 5. Почему metrics can mislead?

Proxy may omit affected groups or encode tradeoffs; document population, uncertainty, disaggregated results and human review. [SRC-421](sources.md#src-421), [SRC-417](sources.md#src-417)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Choose project principle, stakeholders and applicable legal policy before detailed lesson; no legal compliance claim from this outline.
