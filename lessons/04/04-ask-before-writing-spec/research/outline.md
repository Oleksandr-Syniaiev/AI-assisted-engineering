# План урока Р4.04: Паттерн 3. Ask-before-writing на уровне спеки

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р3.06, Р4.01.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Уточнённая спецификация становится входом для self/auto-evaluation.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Здесь ask-before-writing означает проверку неопределённостей внутри уже оформленной спецификации до кодирования: найти двусмысленность, конфликт, незаданную границу/исключение или критерий без oracle, затем передать вопрос владельцу решения. Продолжает Р3.06: объект проверки меняется с краткого task request на взаимосвязанный набор требований.
3. Теория/механизм: Сканировать actors, states, transitions, error/negative paths, permissions, data constraints, timing, migration/compatibility and NFR; проверять consistency/completeness/testability; связывать finding с requirement ID, severity, decision owner and dependent artifacts. Нельзя превращать LLM-generated checklist в подтверждение корректности.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Разобрать черновик «auto-close old requests»: `old`, часовое смещение, tenant scope, race, повторное событие и audit не определены. Пройти вопрос → конкретное принятое решение → позитивный и негативный criteria, не переписывая код.
6. Production engineering: Управлять approval и протоколом решений, сохранять PII вне промпта; для API/schema/migration conflict эскалировать domain owner. Issue template или schema validation может выявить часть пробелов, но semantic review остаётся.
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
| Терминология и механизм | SRC-402; SRC-424; SRC-426 |
| Практический flow и инструмент | SRC-402; SRC-424; SRC-426 |
| Production risk, security, verification | SRC-402; SRC-424; SRC-426 |


## Вопросы проверки знаний
### 1. Чем Р4.04 отличается от Р3.06?

Р3 уточняет intent задачи; Р4 проверяет согласованность и тестируемость многочастной спецификации и связи между требованиями. [SRC-402](sources.md#src-402), [SRC-424](sources.md#src-424)
### 2. Что является блокирующей неоднозначностью?

Та, что меняет scope, бизнес-контракт, разрешения, данные/миграцию, NFR или приемочный oracle. [SRC-402](sources.md#src-402), [SRC-424](sources.md#src-424)
### 3. Кто отвечает за ответ?

Указанный product/domain/technical owner; агент может обнаружить вопрос, но не принимать скрыто бизнес-решение. [SRC-402](sources.md#src-402), [SRC-424](sources.md#src-424)
### 4. Может ли AI найти все противоречия?

Нет гарантии полноты. Checklist/tool и модель помогают, но независимый review и последующие проверки необходимы. [SRC-402](sources.md#src-402), [SRC-424](sources.md#src-424)
### 5. Как фиксировать результат?

Requirement ID, вопрос, решение/допущение, владелец, затронутые артефакты и обновлённый acceptance evidence. [SRC-402](sources.md#src-402), [SRC-424](sources.md#src-424)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Закрепить понятие «writing» как до реализации, не до создания любых spec-файлов. Установить severity rubric и decision ownership.
