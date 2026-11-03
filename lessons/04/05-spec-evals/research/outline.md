# План урока Р4.05: Паттерн 6. Spec self/auto-evals (чек-лист + прогон агентом)

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.02; тестовый oracle и ограничения evaluator (GAP-04–06).
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: После спецификации evaluation идёт CI-гейт; loop позже использует evidence.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Spec self-eval — review checklist, применённый к спецификации её автором/агентом; auto-eval — автоматическая проверка по фиксированным критериям. Это не синоним независимого quality assurance. Оценивать нужно spec coverage and consistency, а implementation correctness — отдельными oracle/test/evidence.
3. Теория/механизм: Разложить criterion → deterministic check / LLM-graded rubric / human review. Validate identifiers, required sections, links, contradictions and testability deterministically where possible; LLM can propose missing cases; reviewer accepts findings; implementation runs independent unit/integration/security checks. Version rubric/data and track false positives/negatives.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Проверить spec перехода `submitted → closed`: checklist finds no owner for unauthorized transition; validator catches missing test link only if schema defines it; model reviewer suggests concurrent duplicate close; human confirms domain relevance. Expected analysis, not a completed execution.
6. Production engineering: Использовать holdout cases, mutation/negative examples, inter-rater audit and reviewer independence. Beware author/judge shared assumptions, test leakage, flaky judge and false assurance. API operational note: OpenAI Evals docs say platform is read-only since 2026-10-31 and scheduled shutdown 2026-11-30; design examples vendor-neutral.
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
| Терминология и механизм | SRC-411; SRC-412; SRC-413 |
| Практический flow и инструмент | SRC-411; SRC-412; SRC-413; SRC-402 |
| Production risk, security, verification | SRC-412; SRC-413; SRC-402 |


## Вопросы проверки знаний
### 1. Что может auto-eval спецификации проверить надёжно?

Структурные инварианты, ссылки, обязательные поля; semantic judgment needs validated rubric and human audit. [SRC-411](sources.md#src-411), [SRC-412](sources.md#src-412)
### 2. Почему авторская самопроверка слаба?

Автор и evaluator могут разделять исходную неверную assumption; независимый oracle lowers correlated error. [SRC-411](sources.md#src-411), [SRC-412](sources.md#src-412)
### 3. Должен ли reviewer-агент блокировать PR сам?

Только если его decision policy, false-positive handling, override owner and audit are explicitly engineered; typically it advises, CI tests gate. [SRC-411](sources.md#src-411), [SRC-412](sources.md#src-412)
### 4. Как снизить evaluator bias?

Explicit criteria, blind/position controls for pairwise scoring, held-out examples, human calibration and repeatability checks; no method guarantees unbiasedness. [SRC-411](sources.md#src-411), [SRC-412](sources.md#src-412)
### 5. Какое текущее ограничение OpenAI Evals API?

Официальная документация сообщает read-only с 31 Oct 2026 и план shutdown 30 Nov 2026. Recheck before lesson; do not teach as stable future dependency. [SRC-411](sources.md#src-411), [SRC-412](sources.md#src-412)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Для hands-on выбрать maintained eval/test tooling; переоценить статус OpenAI Evals и собрать baseline false positive/negative.
