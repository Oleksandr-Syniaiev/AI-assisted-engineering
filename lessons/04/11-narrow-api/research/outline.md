# План урока Р4.11: Паттерн 11. Narrow API surface

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.03; tool contracts, validation, errors and MCP boundary (GAP-08).
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Следующий мета-подход должен улучшать workflow only when evidence shows friction.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Narrow API surface means exposing the smallest domain-specific capability needed for a task, with explicit input/output schemas and authority, instead of broad shell/database credentials or generic admin operations. It is an engineering principle applied to agent tools, not a special protocol.
3. Теория/механизм: Choose operation by user intent, define strict schema and enums/ranges, validate authz per call/record, return minimal structured output, classify errors/retryability, apply timeout/rate limit/idempotency, audit side effects. Keep policy in trusted code. Tool descriptions aid model selection but are not access control.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Compare `execute_sql(sql)` or unrestricted shell with `close_request(id, reason)` constrained to allowed transitions and tenant ownership. Show invalid payload, unauthorized ID, timeout and duplicate request handling; code illustrative until actual service chosen.
6. Production engineering: Maintain API versioning, backward compatibility, authz/object-level checks, data minimization, telemetry, quotas and review. Narrow interface can still contain privileged unsafe operations; validate boundary independently and do not leak broad tokens to model.
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
| Терминология и механизм | SRC-422; SRC-408; SRC-410 |
| Практический flow и инструмент | SRC-422; SRC-408; SRC-410; SRC-417 |
| Production risk, security, verification | SRC-408; SRC-410; SRC-417 |


## Вопросы проверки знаний
### 1. Почему narrow API важен для agent?

Shrinks capability and decision space; limits damage if request/model/tool routing is wrong. [SRC-422](sources.md#src-422), [SRC-408](sources.md#src-408)
### 2. Является ли JSON schema authorization?

Нет. Schema checks shape; server must enforce identity, tenant/object access and business policy. [SRC-422](sources.md#src-422), [SRC-408](sources.md#src-408)
### 3. Как моделировать retries?

Expose idempotency or dedup for side-effecting calls; classify transient/permanent errors and cap retries. [SRC-422](sources.md#src-422), [SRC-408](sources.md#src-408)
### 4. Когда broad shell is justified?

For developer tasks in isolated, least-privilege sandbox with review; not as default interface to production operations. [SRC-422](sources.md#src-422), [SRC-408](sources.md#src-408)
### 5. Какие evidence полезны при review tool?

Contract/schema, negative authz tests, timeout/retry behaviors, audit logs, permissions and output minimization. [SRC-422](sources.md#src-422), [SRC-408](sources.md#src-408)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Select one tool contract and decide error, approval and idempotency semantics; no generic executable code until chosen API/runtime.
