# План урока Р4.03: Паттерн 5. Agent Loops / Harness Engineering

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.05, Р4.07; контракты tools, bounded execution и recovery (GAP-08/GAP-09).
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.06 добавляет автоматические действия по lifecycle, Р4.05 и Р4.07 — проверки.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Agent loop — итерация модели, tool/action, наблюдения результата и следующего решения до условия остановки. Harness engineering — практическое проектирование control plane вокруг модели: tools, state, permissions, validation, budgets, checkpoints, observability. Термин используется в индустрии, но охват «harness engineering» зависит от автора.
3. Теория/механизм: Определить initial state/input; получать модельное решение; валидировать аргумент; вызывать ограниченный tool; приводить результат в компактный observation; обновлять state; оценивать done/blocked/continue; enforce max turns/time/cost; сериализовать checkpoint; обеспечивать cancellation/retry/idempotency; emit trace. Разделять harness и execution sandbox.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: На псевдокоде разрешить закрытие request через один tool: validate schema/permission, approval перед side effect, выполнить идемпотентно, записать result, stop при success/error/budget. Показать timeout и duplicate retry. Код намеренно иллюстративный до выбора SDK.
6. Production engineering: Модель: восстановление и replay; секреты остаются в trusted control plane; sandbox runtime отделён от orchestration; retries ограничены, error classes различены. Метрики: completion/correctness, tool errors, retries, unsafe calls, latency, token/cost и human interruption.
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
| Терминология и механизм | SRC-408; SRC-409; SRC-410 |
| Практический flow и инструмент | SRC-408; SRC-409; SRC-410 |
| Production risk, security, verification | SRC-408; SRC-409; SRC-410 |


## Вопросы проверки знаний
### 1. Какие части принадлежат harness?

Зависит от системы; типично loop/state/tool routing/control/permissions/observability, но документировать надо конкретную реализацию. [SRC-408](sources.md#src-408), [SRC-409](sources.md#src-409)
### 2. Почему нужны stop conditions?

Иначе цикл может бесконечно повторять ошибку, наращивая latency, cost и side effects. [SRC-408](sources.md#src-408), [SRC-409](sources.md#src-409)
### 3. Когда retry безопасен?

Если операция идемпотентна или ключ/состояние предотвращает дублирование, а ошибка классифицирована как transient. [SRC-408](sources.md#src-408), [SRC-409](sources.md#src-409)
### 4. Нужна ли approval перед каждым tool call?

Нет; approval привязывают к риску и побочным эффектам. Validation стоит ставить у границы tool, где происходит действие. [SRC-408](sources.md#src-408), [SRC-409](sources.md#src-409)
### 5. Что измерять кроме успешного ответа?

Корректность, evidence, вызовы/retries, safety, отказоустойчивость, latency, затраты и вмешательства. [SRC-408](sources.md#src-408), [SRC-409](sources.md#src-409)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Выбрать SDK/runtime, storage, sandbox, observability backend и failure semantics перед runnable tutorial; product behavior must be rechecked.
