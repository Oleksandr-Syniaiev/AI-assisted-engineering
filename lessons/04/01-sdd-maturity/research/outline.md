# План урока Р4.01: SDD и три уровня зрелости спецификации

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р3.08; требования, тесты и acceptance criteria (GAP-04/GAP-05).
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.04 проясняет противоречия до разложения спеки на стадии.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: SDD is used for several workflows, not one universally fixed standard. The three named maturity levels have no established definition or source in the curriculum. Preserve the title; propose a teaching ladder only as a working model: task contract → feature specification linked to checks → maintained executable/traceable specification lifecycle.
3. Теория/механизм: Trace the chain need → requirement → acceptance criterion → design decision → code/test evidence. Classify what is normative intent, derived plan, implementation and verification. The maturity ladder should be rated by evidence coverage and lifecycle ownership, not number of markdown files.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Use one Workbench status transition; compare a terse ticket, acceptance criteria and a linked spec/test map. Show a missing negative case as a gap. Do not claim that writing a spec alone proves implementation correctness.
6. Production engineering: Legacy behavior needs characterization tests before redefining intent. Define owners, traceability, change history and criteria for obsolete specs. Manage duplicate documentation and review cost.
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
| Терминология и механизм | SRC-401; SRC-402; SRC-424 |
| Практический flow и инструмент | SRC-401; SRC-402; SRC-424 |
| Production risk, security, verification | SRC-401; SRC-402; SRC-424 |


## Вопросы проверки знаний
### 1. Что подтверждено о трёх уровнях?

Ничего кроме названия: источник и определения не установлены. В outline предлагается лестница только как рабочая модель курса. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 2. Чем требование отличается от дизайна?

Требование задаёт нужное поведение/ограничение; дизайн описывает выбранный способ реализации. Смешение связывает намерение с одной архитектурой преждевременно. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 3. Что означает spec-driven здесь?

Спецификация участвует в формировании задач, реализации и проверке; степень формализации зависит от конкретного workflow. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 4. Как измерить зрелость?

Проверять однозначность и тестируемость требований, traceability, контроль изменений, долю подтверждённых критериев и стоимость сопровождения; не использовать непривязанный балл. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)
### 5. Когда spec избыточна?

Для локальной обратимой правки с очевидным acceptance oracle; достаточно краткого task contract и проверки. [SRC-401](sources.md#src-401), [SRC-402](sources.md#src-402)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Найти владельца модели «три уровня», оригинальный источник и intended definitions. До ответа не публиковать proposed ladder как факт.
