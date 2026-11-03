# План урока Р4.06: Паттерн 7. Hooks: lifecycle vs git-style

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.03, Р4.07.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.07 размещает подходящие checks на PR pipeline.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Lifecycle hooks вызываются событиями agent runtime (например pre-tool/post-tool/session); git-style hooks запускаются событиями Git (pre-commit, commit-msg, receive-side). Это разные event domains, payloads, execution locations, bypass/failure behavior and trust boundaries; shared word «hook» does not imply compatible scripts.
3. Теория/механизм: Для события документировать trigger, sync/async, input schema, output/decision, timeout, cwd/environment, trust, error semantics, whether it can block and observability. Runtime hook may mediate tool invocation, while Git hook cannot ensure GitHub PR checks unless server-side policy/repo CI enforces.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Сравнить два проверки: `preToolUse` blocks destructive shell call versus `pre-commit` checks formatting. Deliberately consider timeout/exit/bypass and server acceptance. Hook JSON/API examples must be copied from chosen harness docs/version, not generalized.
6. Production engineering: Run hooks with least privilege; do not log full prompt/secret/tool args; protect hook code supply chain; test missing dependency, malformed event, timeout, user bypass and remote environment. VS Code docs checked currently label experience Preview. Git pre-commit is bypassable with documented `--no-verify`.
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
| Терминология и механизм | SRC-414; SRC-415; SRC-419 |
| Практический flow и инструмент | SRC-414; SRC-415; SRC-419 |
| Production risk, security, verification | SRC-414; SRC-415; SRC-419 |


## Вопросы проверки знаний
### 1. Чем lifecycle event отличается от Git event?

Первый принадлежит agent session/tool loop, второй операции Git repository; разные payloads and failure semantics. [SRC-414](sources.md#src-414), [SRC-415](sources.md#src-415)
### 2. Можно ли использовать client hook как единственную quality gate?

Нет: hooks may be absent or bypassed. Enforce critical gates on trusted CI/server path. [SRC-414](sources.md#src-414), [SRC-415](sources.md#src-415)
### 3. Что надо тестировать для hook?

Discovery, event payload, nonzero exit, timeout, malformed input, duplicate sources, permissions, bypass and remote host. [SRC-414](sources.md#src-414), [SRC-415](sources.md#src-415)
### 4. Почему hook code сам является риском?

Он исполняет команду с ambient filesystem/network/environment access; plugin or repo hook can become supply-chain code execution. [SRC-414](sources.md#src-414), [SRC-415](sources.md#src-415)
### 5. Поддерживается ли один hook config всеми harness?

Нет. VS Code explicitly says hook formats and runtime compatibility vary; migrate and verify per destination. [SRC-414](sources.md#src-414), [SRC-415](sources.md#src-415)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Выбрать конкретную версию/harness и определить, какие events are preview; не переводить sample config в course command без local repro.
