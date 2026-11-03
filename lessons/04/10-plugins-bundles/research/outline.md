# План урока Р4.10: Паттерн 10. Plugins/Bundles

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.08, Р4.11; supply chain and versioning (GAP-14).
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Narrow API limits what a packaged plugin can do.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: Plugin/bundle groups reusable capabilities (instructions, skills, agents, tool integrations, scripts, hooks, config) for distribution. Formats and execution privileges are product-specific; “installed” does not imply all capabilities execute or are trusted. Research must treat package manifest, dependency resolution, permissions and update channel as attack surface.
3. Теория/механизм: Inspect manifest, files/entrypoints, target harness/versions, activation semantics, required tools/network/secrets, hooks and scripts, update and rollback; verify signatures/provenance where available; stage install in disposable scope; enumerate files/diff; test neutral and malicious inputs.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Author walkthrough reviews a hypothetical testing plugin manifest: identifies a hook command and MCP server; separates static presence from execution; establishes allowlist and test plan. Do not claim installation or compatibility tested.
6. Production engineering: Pin versions/refs, review transitive dependencies, license/data-use policy, disable unneeded hook, least privilege, sandbox and rollback; centralized marketplace policy may constrain installs. Consider update cadence and support owner.
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
| Терминология и механизм | SRC-419; SRC-420; SRC-417 |
| Практический flow и инструмент | SRC-419; SRC-420; SRC-417 |
| Production risk, security, verification | SRC-419; SRC-420; SRC-417 |


## Вопросы проверки знаний
### 1. Что включает bundle?

Зависит от format; could package skills/instructions/agents/tools/hooks/MCP/config. Document manifest and activation. [SRC-419](sources.md#src-419), [SRC-420](sources.md#src-420)
### 2. Нужно ли доверять hook при установке plugin?

Нет. Code/plugin contents need review; installation and trust/approval are separate product states. [SRC-419](sources.md#src-419), [SRC-420](sources.md#src-420)
### 3. Как обновлять безопасно?

Pinned/versioned inputs, changelog review, staged rollout, compatibility tests, rollback and ownership. [SRC-419](sources.md#src-419), [SRC-420](sources.md#src-420)
### 4. Почему plugin portability is limited?

Tool names, file locations, hook event schemas, policy, execution host and model differ across harnesses. [SRC-419](sources.md#src-419), [SRC-420](sources.md#src-420)
### 5. Как оценить maintainability cost?

Count components/versions, test matrix, support surface, required permissions, update frequency, security reviews and rollback burden. [SRC-419](sources.md#src-419), [SRC-420](sources.md#src-420)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Точнее определить whether curriculum means VS Code plugins, Codex plugins, general bundles or all; compare one release-pinned sample in a disposable environment.
