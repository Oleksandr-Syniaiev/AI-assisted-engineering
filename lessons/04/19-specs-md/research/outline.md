# План урока Р4.19: Методология 5. specs.md

**Статус: Research / Outline. Урок не написан.**

## Результат обучения
Читатель объясняет границы концепции, связывает её с проверяемым инженерным workflow, разбирает production failure mode и обосновывает выбор альтернативы по evidence.

## Предпосылки и переходы
- Prerequisites: Р4.15, Р3.07; confirm project identity.
- Curriculum ID, название и исходный порядок сохранены.
- Предыдущие темы: see prerequisite links; следующий мостик: Р4.20 анализирует skills-centric Superpowers framework.

## План разделов урока
1. Результат обучения, prerequisites, терминология и scope.
2. Production problem and motivation: The curriculum label corresponds provisionally to `fabriqaai/specs.md`, an AI-native framework with multiple named flows (Ideation, Simple, FIRE, AI-DLC), but authorial intent is not confirmed from the title alone. Its README claims broad tool compatibility and adjustable rigor; treat those as claims to verify, not independent outcome evidence.
3. Теория/механизм: Identify repository owner/tag/manifest; separate flow artifacts and agent integrations; inspect installer and generated files in disposable project; trace flow stages/checkpoints/state; compare framework core with user-selected prompts and IDE add-on. Freeze version because main README evolves.
4. Mermaid diagram для data/state flow, owners и enforcement boundaries.
5. Практическая авторская demonstration: Use document-only comparison of Simple vs AI-DLC artifact tree from README and record intended scope. Do not run `npx`, install extension, or claim cross-tool portability verified. Commands in the repo can be cited but remain untested.
6. Production engineering: Install scripts, CLI dependency, marketplace extension, remote access, file writes, telemetry, updates and generated policy are supply-chain/control concerns. Test brownfield changes, monorepo boundaries, upgrade/flow switching, repo portability and source license.
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
| Терминология и механизм | SRC-406 |
| Практический flow и инструмент | SRC-406 |
| Production risk, security, verification | SRC-406 |


## Вопросы проверки знаний
### 1. Какой проект подразумевает curriculum?

Provisional match is `fabriqaai/specs.md`, already noted as candidate in COURSE_OVERVIEW; title alone cannot confirm intent. [SRC-406](sources.md#src-406)
### 2. Чем отличаются named flows?

Repository README frames them for ideation, lightweight specs, adaptive execution and full AI-DLC; these are author claims/product taxonomy. [SRC-406](sources.md#src-406)
### 3. Проверена portability across harnesses?

No. A support table in README is not cross-platform execution evidence. [SRC-406](sources.md#src-406)
### 4. What does install command imply?

Only documented install steps; this research did not install dependencies or evaluate file/network side effects. [SRC-406](sources.md#src-406)
### 5. Как сравнить feature claims?

Pin commit/tag; run documented test tasks across supported harnesses and report failures, human effort, security and support separately. [SRC-406](sources.md#src-406)

## Common misconceptions
- Термин curriculum не гарантирует стандартизованное определение или установленное авторство.
- Официальная capability matrix не является независимым сравнением качества.
- Документация, generated artifact и самооценка модели не заменяют run-time evidence.
- Security policy нельзя обеспечить одним prompt; tool boundaries и CI permissions важны.
- Качественная матрица не является измерением производительности/TCO.

## Практическая форма
Использовать только авторскую разобранную демонстрацию; не назначать самостоятельную работу, домашнее задание, сдачу или обязательный артефакт читателя. Вопросы снабдить полными ответами.

## Блокирующее уточнение
Confirm identity with course author; pin commit, validate license, packages, compatibility, installer writes and active flows before hands-on lesson.
