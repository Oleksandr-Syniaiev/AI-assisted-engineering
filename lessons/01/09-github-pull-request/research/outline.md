# Р1.09 — план урока

<!-- curriculum-title -->
GitHub: разместить проект и подготовить изменение к проверке

**Статус:** Research / Outline; готовый урок не написан. **Дата сверки источников:** 02.11.2026.

**Аудитория и время:** начинающий в agentic coding инженер; 75–105 минут. Оценка времени предварительная, без пилота.

**Prerequisites:** [Р1.07](../../07-git-checkpoints-diffs/research/outline.md), [Р1.08](../../08-change-verify-fix/research/outline.md). Требуемые доступы, платформы и версии для демонстрации уточняются перед drafting; исполнение этого плана не предполагается.

**Сквозной проект:** Engineering Workbench остаётся кандидатом. Полный runnable scaffold не утверждён и не блокирует концептуальный план. Подробное исследование: [research.md](research.md); реестр источников: [sources.md](sources.md).

## Результаты обучения

- Разместить учебный проект с осознанной видимостью
- Подготовить PR с правильными head/base и доказательствами проверок
- Объяснить границы демонстрации и отличить ожидаемое наблюдение от реально проверенного результата.

## Структура урока по стандарту AGENTS.md

| № | Обязательная часть | Содержание плана | Evidence |
|---|---|---|---|
| 1 | Цели и prerequisites | Результаты обучения выше; prerequisite ссылки сохранены согласно curriculum и рекомендуемому маршруту. Уточнить платформу и входные данные до публикации команд. | CURRICULUM.md; паспорт [research.md](research.md) |
| 2 | Проблема и мотивация | Локальное исправление ещё не подготовлено для командной проверки: нужны правильные repository, branch, diff и описание. | Вопросы Q1 и Q7; [research.md](research.md) |
| 3 | Теория | Git — VCS; GitHub — сервис совместной работы. Push публикует объекты и refs на remote; PR предлагает интеграцию изменений между ветками. Не считать названия интерфейсов разных продуктов эквивалентными. Общая терминология уточняется перед drafting; отдельного GLOSSARY.md пока нет. | [SRC-021](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github), [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request), [SRC-016](https://git-scm.com/docs/git-diff), [SRC-015](https://git-scm.com/docs/git-status) |
| 4 | Архитектура и механизмы | 1. Локальный commit → выбранный remote → опубликованная ветка → PR head/base → review → решение. 2. Развести authentication к GitHub и author identity локального commit. 3. Показать, как изменение base или новый commit меняют состав review и актуальность тестов. Это план объяснения механизмов на учебном примере, а не утверждение о внутреннем устройстве всех инструментов. Для diagram и demonstrations использовать только наблюдаемые границы и явно обозначенные допущения. | [SRC-021](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github), [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request), [SRC-016](https://git-scm.com/docs/git-diff), [SRC-015](https://git-scm.com/docs/git-status) |
| 5 | Практическая реализация: демонстрация автора | На учебном remote проследите repository, branch, remote, head и base PR. Разберите diff, фактический статус checks и секреты; покажите, почему новый commit может сделать прежние результаты устаревшими. Пройти trace по шагам: входной snapshot → действие → наблюдение → проверка результата → ограничение. Подробный сценарий и expected-vs-actual — раздел 9 [research.md](research.md). | [SRC-021](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github), [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request), [SRC-016](https://git-scm.com/docs/git-diff), [SRC-015](https://git-scm.com/docs/git-status) |
| 6 | Production use cases | В организации учитывать branch rules и обязательные checks, не предполагать одинаковые политики. Не делать auto-merge частью первого урока. PR должен быть обозримым, объяснять миграции и риски, если они есть; приватность репозитория не оправдывает хранение credentials. До приёмки результата сопоставить scope, актуальный snapshot, diff и проверки. Отчёт о действиях не подменяет evidence; стоимость включает человеческую проверку. За технические права отвечает конфигурация среды, за решение о выпуске — назначенный владелец. Добавить разбор существующего кода, командной ответственности, безопасности, тестирования, стоимости, сопровождения и типичного отказа. | [SRC-021](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github), [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request), [SRC-016](https://git-scm.com/docs/git-diff), [SRC-015](https://git-scm.com/docs/git-status) |
| 7 | Trade-offs и альтернативы | Сравнить перечисленные в research.md подходы по применимости, сложности освоения, стоимости внедрения, сопровождению, безопасности, проверяемости и полной стоимости; методика сравнения дана в разделе 5 research.md. | См. матрицу в [research.md](research.md), раздел 5 |
| 8 | Вопросы для проверки знаний с ответами | Семь вопросов ниже — разбор с объяснёнными ориентирами ответов. | Q1–Q7 в [research.md](research.md) |
| 9 | Ключевые выводы и references | Закрепить, что именно объяснено, как проверяется свидетельство и какие ограничения остались. Перейти к следующей теме по маршруту раздела. | [sources.md](sources.md); [README.md](../../README.md); [Р1.10](../../10-model-reasoning-selection/research/outline.md) |

## Сценарий демонстрации и примеры для подготовки

На учебном remote проследите repository, branch, remote, head и base PR. Разберите diff, фактический статус checks и секреты; покажите, почему новый commit может сделать прежние результаты устаревшими.

**Подача:** автор называет snapshot, платформу, prerequisites и границы; показывает наблюдаемые шаги и проверку; маркирует ожидаемые исходы как ожидаемые, а выполненные — только при наличии отчёта. Для команд указать ОС/shell, версии, доступы, prerequisites и статус выполнения.

**Вопрос для разбора:** где заканчивается наблюдаемый факт и начинается инженерная интерпретация? Ответ должен ссылаться на claims-and-evidence в research.md.

## Типичные заблуждения и отказы

- Считать ответ или сообщение «готово» доказательством изменения/корректности.
- Переносить поведение одного продукта или интерфейса на другой без документации.
- Принимать ожидаемый сценарий за фактически исполненный результат.
- Пропускать командный, безопасностный, стоимостный или maintenance trade-off из-за узкого happy path.

## Вопросы для проверки знаний — с ориентирами ответов

### 1. Что выбрать до публикации?

Учебный репозиторий, владельца, видимость, права и отсутствие секретов; это отдельное решение от commit. [SRC-021](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

### 2. Можно ли использовать GUI?

Да: официальный маршрут допускает GitHub Desktop, CLI и Git; важна семантика состояния, а не один интерфейс. [SRC-021](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

### 3. Что такое head и base?

Источник изменений и ветка назначения; перепутанная base меняет состав предлагаемого diff. [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)

### 4. Какие доказательства дать reviewer?

Причина изменения, поведение до/после, scope и фактические проверки на commit; это предлагаемая PR rubric. [SRC-016](https://git-scm.com/docs/git-diff)

### 5. Как продолжить PR?

Новые commits в head branch обновляют предложение; после них результаты старой проверки могут устареть. [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)

### 6. Что не доказывает создание PR?

Что change проверен, одобрен или разрешён к выпуску; это отдельные этапы командного процесса. [SRC-022](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)

### 7. Что проверить при неожиданном diff?

Remote, head/base, baseline и включённые commits; не скрывать лишнее только сокращением описания. [SRC-016](https://git-scm.com/docs/git-diff)

## Ключевые выводы и переход

- Сформулировать механизм и условия, при которых подход применим.
- Отдельно назвать ограничения, альтернативу и способ проверить результат.
- Материалы раздела остаются в статусе **Research / Outline**, пока урок не будет написан и технически проверен.

Далее — сравнивать модель и режим рассуждений на измеряемом сценарии.
