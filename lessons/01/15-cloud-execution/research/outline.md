# Р1.15 — план урока

<!-- curriculum-title -->
Передать задачу на выполнение в облако (дополнительно)

**Статус:** Research / Outline; готовый урок не написан. **Дата сверки источников:** 02.11.2026.

**Аудитория и время:** начинающий в agentic coding инженер; 75–105 минут; дополнительно. Оценка времени предварительная, без пилота.

**Prerequisites:** [Р1.09](../../09-github-pull-request/research/outline.md), [Р1.14](../../14-agent-handoff-review/research/outline.md). Требуемые доступы, платформы и версии для демонстрации уточняются перед drafting; исполнение этого плана не предполагается.

**Сквозной проект:** Engineering Workbench остаётся кандидатом. Полный runnable scaffold не утверждён и не блокирует концептуальный план. Подробное исследование: [research.md](research.md); реестр источников: [sources.md](sources.md).

## Результаты обучения

- Составить контракт облачного окружения и ограниченной задачи
- Проверить облачный результат локально и описать расхождения среды
- Объяснить границы демонстрации и отличить ожидаемое наблюдение от реально проверенного результата.

## Структура урока по стандарту AGENTS.md

| № | Обязательная часть | Содержание плана | Evidence |
|---|---|---|---|
| 1 | Цели и prerequisites | Результаты обучения выше; prerequisite ссылки сохранены согласно curriculum и рекомендуемому маршруту. Уточнить платформу и входные данные до публикации команд. | CURRICULUM.md; паспорт [research.md](research.md) |
| 2 | Проблема и мотивация | Облачный исполнитель не наследует локальные незакоммиченные файлы, процессы, env и доступ к данным; successful setup ещё не доказывает change. | Вопросы Q1 и Q7; [research.md](research.md) |
| 3 | Теория | Cloud task, client и execution environment — разные сущности. Облачное выполнение не обязательно multi-agent и не равнозначно переносу локального процесса. Не считать названия интерфейсов разных продуктов эквивалентными. Общая терминология уточняется перед drafting; отдельного GLOSSARY.md пока нет. | [SRC-028](https://learn.chatgpt.com/docs/cloud), [SRC-029](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github), [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-003](https://learn.chatgpt.com/docs/agent-approvals-security), [SRC-006](https://learn.chatgpt.com/docs/pricing) |
| 4 | Архитектура и механизмы | 1. Выбранный snapshot → подготовка environment → setup/readiness → ограниченный task → artifact/diff → локальная повторная проверка. 2. Подготовить список различий: cwd, OS, runtime, network, env, storage, uncommitted files и доступные инструменты. 3. Обработать setup fail отдельно от implementation fail; повторный запуск не должен дублировать записи или внешние действия. Это план объяснения механизмов на учебном примере, а не утверждение о внутреннем устройстве всех инструментов. Для diagram и demonstrations использовать только наблюдаемые границы и явно обозначенные допущения. | [SRC-028](https://learn.chatgpt.com/docs/cloud), [SRC-029](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github), [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-003](https://learn.chatgpt.com/docs/agent-approvals-security), [SRC-006](https://learn.chatgpt.com/docs/pricing) |
| 5 | Практическая реализация: демонстрация автора | Разберите manifest cloud task: snapshot, bootstrap, runtime, lockfile, secrets-by-reference, network, permissions, checks и возвращаемый patch. Сравните локальное и облачное окружения и завершите сценарий локальной проверкой того же commit. Облачный запуск не заявляется. Пройти trace по шагам: входной snapshot → действие → наблюдение → проверка результата → ограничение. Подробный сценарий и expected-vs-actual — раздел 9 [research.md](research.md). | [SRC-028](https://learn.chatgpt.com/docs/cloud), [SRC-029](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github), [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-003](https://learn.chatgpt.com/docs/agent-approvals-security), [SRC-006](https://learn.chatgpt.com/docs/pricing) |
| 6 | Production use cases | Не передавать production credentials для простого bugfix. Ограничить repository/network, подготовить synthetic fixtures и сохранять provenance результата. В legacy проверить setup и private dependencies, в monorepo — нужные packages. Cloud success не отменяет branch rules, CI и review. До приёмки результата сопоставить scope, актуальный snapshot, diff и проверки. Отчёт о действиях не подменяет evidence; стоимость включает человеческую проверку. За технические права отвечает конфигурация среды, за решение о выпуске — назначенный владелец. Добавить разбор существующего кода, командной ответственности, безопасности, тестирования, стоимости, сопровождения и типичного отказа. | [SRC-028](https://learn.chatgpt.com/docs/cloud), [SRC-029](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github), [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-003](https://learn.chatgpt.com/docs/agent-approvals-security), [SRC-006](https://learn.chatgpt.com/docs/pricing) |
| 7 | Trade-offs и альтернативы | Сравнить перечисленные в research.md подходы по применимости, сложности освоения, стоимости внедрения, сопровождению, безопасности, проверяемости и полной стоимости; методика сравнения дана в разделе 5 research.md. | См. матрицу в [research.md](research.md), раздел 5 |
| 8 | Вопросы для проверки знаний с ответами | Семь вопросов ниже — разбор с объяснёнными ориентирами ответов. | Q1–Q7 в [research.md](research.md) |
| 9 | Ключевые выводы и references | Закрепить, что именно объяснено, как проверяется свидетельство и какие ограничения остались. Перейти к следующей теме по маршруту раздела. | [sources.md](sources.md); [README.md](../../README.md); [COURSE_OVERVIEW.md](../../../../COURSE_OVERVIEW.md) — переход к разделу 2 |

## Сценарий демонстрации и примеры для подготовки

Разберите manifest cloud task: snapshot, bootstrap, runtime, lockfile, secrets-by-reference, network, permissions, checks и возвращаемый patch. Сравните локальное и облачное окружения и завершите сценарий локальной проверкой того же commit. Облачный запуск не заявляется.

**Подача:** автор называет snapshot, платформу, prerequisites и границы; показывает наблюдаемые шаги и проверку; маркирует ожидаемые исходы как ожидаемые, а выполненные — только при наличии отчёта. Для команд указать ОС/shell, версии, доступы, prerequisites и статус выполнения.

**Вопрос для разбора:** где заканчивается наблюдаемый факт и начинается инженерная интерпретация? Ответ должен ссылаться на claims-and-evidence в research.md.

## Типичные заблуждения и отказы

- Считать ответ или сообщение «готово» доказательством изменения/корректности.
- Переносить поведение одного продукта или интерфейса на другой без документации.
- Принимать ожидаемый сценарий за фактически исполненный результат.
- Пропускать командный, безопасностный, стоимостный или maintenance trade-off из-за узкого happy path.

## Вопросы для проверки знаний — с ориентирами ответов

### 1. Что переносится в облако?

Репозиторий/выбранный snapshot и настроенное окружение; конкретный механизм определяет платформа, не локальный чат. [SRC-028](https://learn.chatgpt.com/docs/cloud)

### 2. Почему важно выбрать тип среды?

Например, GitHub описывает различные environment modes с разными свойствами; нельзя смешивать их setup и billing. [SRC-029](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github)

### 3. Какие prerequisites зафиксировать?

Runtime, lockfile, commands, fixtures, env names, network needs и ограничения данных; значения секретов не помещаются в manifest. [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/)

### 4. Как проверить доступ?

Проверить права repository, разрешённые действия и сеть именно облачной задачи; локальный approval не переносится автоматически. [SRC-003](https://learn.chatgpt.com/docs/agent-approvals-security)

### 5. Сколько стоит запуск?

Зависит от доступного режима оплаты и среды; cloud compute и model usage могут учитываться по-разному. [SRC-006](https://learn.chatgpt.com/docs/pricing)

### 6. Что принять как результат?

Patch/PR, фактические checks и logs с привязкой к snapshot, затем повторная локальная проверка. [SRC-028](https://learn.chatgpt.com/docs/cloud)

### 7. Что делать без cloud access?

Выполнить полный dry-run manifest и разобрать failure modes; явно указать, что облачного запуска не было. [SRC-029](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github)

## Ключевые выводы и переход

- Сформулировать механизм и условия, при которых подход применим.
- Отдельно назвать ограничения, альтернативу и способ проверить результат.
- Материалы раздела остаются в статусе **Research / Outline**, пока урок не будет написан и технически проверен.

Дополнительная тема завершает маршрут раздела; следующие методологические понятия относятся к разделу 2.
