# План урока Р4.12: Паттерн 12. Мета-подход

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.08–Р4.10; значение термина не уточнено.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: После оценки вариантов подготовки курс сравнивает конкретные spec methodologies.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: The curriculum offers no author or precise definition for «Мета-подход». A bounded working interpretation for outline: improve the development workflow itself using observed bottleneck/failure evidence, make one controlled process change, and evaluate it against baseline. Do not equate with self-modifying agents or automatic prompt optimization without source.
3. Теория/механизм: Observe traces, failure/rework/latency, classify root cause, create a hypothesis, change one variable (artifact, gate, tool, context or ownership), freeze comparison conditions, evaluate quality/cost/safety, accept/revert, version policy. Separate run-time adaptation from human-led workflow redesign.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Baseline a repeated request workflow, identify that review repeatedly lacks migration plan, add one explicit checklist field; compare on held-out similar changes and track missed issue rate, review time and false positives. Example is design, not measured result.
6. Production engineering: Limit meta-process budget to cadence; preserve rollback and human approval. Guard against optimizing proxy metrics (shorter prompt, lower CI time) while defects/rework increase; multi-team process changes need ownership and governance.
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
| Терминология и механизм | SRC-409; SRC-411; SRC-421 |
| Практический flow и инструмент | SRC-409; SRC-411; SRC-421 |
| Production risk, security, verification | SRC-409; SRC-411; SRC-421 |


## Вопросы проверки знаний
### 1. Что в curriculum определено как Meta-подход?

Definition and source are open. The lesson uses a proposed evidence-led workflow-improvement loop only if author confirms or accepts it. [SRC-409](sources.md#src-409), [SRC-411](sources.md#src-411)
### 2. Что отличает его от обычного debugging?

Target may be process/tool/context configuration rather than application defect; still requires evidence and causal caution. [SRC-409](sources.md#src-409), [SRC-411](sources.md#src-411)
### 3. Почему менять одну переменную?

Чтобы reduce confounding; if multiple settings change, observed delta cannot be attributed cleanly. [SRC-409](sources.md#src-409), [SRC-411](sources.md#src-411)
### 4. Что нельзя оптимизировать отдельно?

Proxy like tokens, number of files or cycle time without correctness, security, review/rework and user impact. [SRC-409](sources.md#src-409), [SRC-411](sources.md#src-411)
### 5. Когда rollback is necessary?

Quality/safety regression, unexplained variance, high support burden, or failure to meet agreed improvement bar. [SRC-409](sources.md#src-409), [SRC-411](sources.md#src-411)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Ask curriculum author for intended method, author, mechanism and link to other named patterns; proposed loop is not industry standard.
