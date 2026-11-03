# План урока Р4.07: Урок 11. CI/CD как loss function

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р1.09, Р4.05; базовые CI и acceptance checks.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Следом описать повторяемый workflow с explicit IO and failure paths.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: «CI/CD как loss function» — педагогическая метафора, не стандартная терминология CI и не обучение весов LLM. CI creates repeatable feedback and gates; workflow-level expected loss could be an explicit cost/risk model (defect probability × impact + rework/review/runtime cost), but only if assumptions are visible. Training loss is a model-optimization quantity and semantically different.
3. Теория/механизм: Map spec criterion → local command → CI job/exit status → branch protection/deploy gate → owner response. Use fast deterministic checks first, tests/build/security as risk warrants; separate flaky/informational from blocking. If defining expected loss, estimate from observed project data, avoid claiming CI optimizes objective automatically.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Walk through pull request: syntax/type check, unit tests, integration service, security scan, required status; deliberately distinguish check failing from model weight update. Demonstration describes GitHub workflow semantics, not executed repo Actions.
6. Production engineering: Production design includes least token permissions, untrusted fork input, pinned actions, secrets, self-hosted runners, cache poisoning, latency and flaky test budgets. CI is regression barrier only for behavior captured by reliable checks; deployment needs approval/rollback.
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
| Терминология и механизм | SRC-416; SRC-417; SRC-423 |
| Практический flow и инструмент | SRC-416; SRC-417; SRC-423 |
| Production risk, security, verification | SRC-416; SRC-417; SRC-423 |


## Вопросы проверки знаний
### 1. Что означает loss function в ML?

Функция ошибки/цели, связанная с оптимизацией модели во время обучения; CI run обычно не меняет параметры foundation model. [SRC-416](sources.md#src-416), [SRC-417](sources.md#src-417)
### 2. Как корректно использовать метафору для CI?

Как систематизированный сигнал о дефекте/несоответствии и стоимость его пропуска, с явными измерениями/assumptions. [SRC-416](sources.md#src-416), [SRC-417](sources.md#src-417)
### 3. Что делает CI gate?

Проверяет заданное событие в заданной среде и публикует status; policy требует, чтобы нужные checks прошли перед merge/deploy. [SRC-416](sources.md#src-416), [SRC-417](sources.md#src-417)
### 4. Почему не все проверки блокируют одинаково?

Различаются impact, confidence, runtime, flakiness and risk acceptance; условия должны быть прозрачны и иметь owner. [SRC-416](sources.md#src-416), [SRC-417](sources.md#src-417)
### 5. Как безопасно обрабатывать PR от fork?

Минимальные permissions и недоступность secrets для недоверенного workflow; раздельные privileged workflows согласно официальным security docs. [SRC-416](sources.md#src-416), [SRC-417](sources.md#src-417)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Зафиксировать математическую метафору автора курса; выбрать CI provider, project commands, baseline, branch protection and policy.
