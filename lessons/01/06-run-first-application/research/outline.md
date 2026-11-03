# Р1.06 — план урока

<!-- curriculum-title -->
Запустить первое приложение и понять результат

**Статус:** Research / Outline; готовый урок не написан. **Дата сверки источников:** 02.11.2026.

**Аудитория и время:** начинающий в agentic coding инженер; 90–120 минут. Оценка времени предварительная, без пилота.

**Prerequisites:** [Р1.03](../../03-first-agent-run/research/outline.md), [Р1.04](../../04-files-editor-terminal/research/outline.md), [Р1.05](../../05-application-components/research/outline.md). Требуемые доступы, платформы и версии для демонстрации уточняются перед drafting; исполнение этого плана не предполагается.

**Сквозной проект:** Engineering Workbench остаётся кандидатом. Полный runnable scaffold не утверждён и не блокирует концептуальный план. Подробное исследование: [research.md](research.md); реестр источников: [sources.md](sources.md).

## Результаты обучения

- Запустить приложение по проверяемому runbook
- Выполнить позитивный и негативный smoke-сценарии, сохранив доказательства
- Объяснить границы демонстрации и отличить ожидаемое наблюдение от реально проверенного результата.

## Структура урока по стандарту AGENTS.md

| № | Обязательная часть | Содержание плана | Evidence |
|---|---|---|---|
| 1 | Цели и prerequisites | Результаты обучения выше; prerequisite ссылки сохранены согласно curriculum и рекомендуемому маршруту. Уточнить платформу и входные данные до публикации команд. | CURRICULUM.md; паспорт [research.md](research.md) |
| 2 | Проблема и мотивация | Нужно получить первый вертикальный результат и научиться диагностировать setup, API и persistence по наблюдениям. | Вопросы Q1 и Q7; [research.md](research.md) |
| 3 | Теория | Smoke check проверяет основную работоспособность выбранного пути; это не полное regression testing. Reproducible setup включает версии, зависимости и исходные данные. Не считать названия интерфейсов разных продуктов эквивалентными. Общая терминология уточняется перед drafting; отдельного GLOSSARY.md пока нет. | [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview), [SRC-011](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works), [SRC-014](https://nodejs.org/api/test.html), [SRC-015](https://git-scm.com/docs/git-status) |
| 4 | Архитектура и механизмы | 1. Runbook: prerequisites → dependencies → env → storage/fixtures → server/client → readiness → smoke → stop. 2. Для сбоя сохранять точную команду, cwd, версию, exit code и релевантный log без credentials. 3. Проверять одинаковую операцию через UI и напрямую через согласованный API, затем readback; не подменять backend моками без пометки. Это план объяснения механизмов на учебном примере, а не утверждение о внутреннем устройстве всех инструментов. Для diagram и demonstrations использовать только наблюдаемые границы и явно обозначенные допущения. | [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview), [SRC-011](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works), [SRC-014](https://nodejs.org/api/test.html), [SRC-015](https://git-scm.com/docs/git-status) |
| 5 | Практическая реализация: демонстрация автора | Разберите запуск от README и lockfile до health/smoke request; на трёх трассах локализуйте сбой зависимости/окружения, API и хранилища. Отдельно покажите, почему открывшаяся страница не подтверждает persistence. Пройти trace по шагам: входной snapshot → действие → наблюдение → проверка результата → ограничение. Подробный сценарий и expected-vs-actual — раздел 9 [research.md](research.md). | [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview), [SRC-011](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works), [SRC-014](https://nodejs.org/api/test.html), [SRC-015](https://git-scm.com/docs/git-status) |
| 6 | Production use cases | Для production не переносить dev server и учебные credentials. В legacy сохранять lockfile и documented baseline; в CI воспроизводить тот же check. Изменение окружения во время диагностики фиксировать отдельно от изменения приложения. До приёмки результата сопоставить scope, актуальный snapshot, diff и проверки. Отчёт о действиях не подменяет evidence; стоимость включает человеческую проверку. За технические права отвечает конфигурация среды, за решение о выпуске — назначенный владелец. Добавить разбор существующего кода, командной ответственности, безопасности, тестирования, стоимости, сопровождения и типичного отказа. | [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview), [SRC-011](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works), [SRC-014](https://nodejs.org/api/test.html), [SRC-015](https://git-scm.com/docs/git-status) |
| 7 | Trade-offs и альтернативы | Сравнить перечисленные в research.md подходы по применимости, сложности освоения, стоимости внедрения, сопровождению, безопасности, проверяемости и полной стоимости; методика сравнения дана в разделе 5 research.md. | См. матрицу в [research.md](research.md), раздел 5 |
| 8 | Вопросы для проверки знаний с ответами | Семь вопросов ниже — разбор с объяснёнными ориентирами ответов. | Q1–Q7 в [research.md](research.md) |
| 9 | Ключевые выводы и references | Закрепить, что именно объяснено, как проверяется свидетельство и какие ограничения остались. Перейти к следующей теме по маршруту раздела. | [sources.md](sources.md); [README.md](../../README.md); [Р1.07](../../07-git-checkpoints-diffs/research/outline.md) |

## Сценарий демонстрации и примеры для подготовки

Разберите запуск от README и lockfile до health/smoke request; на трёх трассах локализуйте сбой зависимости/окружения, API и хранилища. Отдельно покажите, почему открывшаяся страница не подтверждает persistence.

**Подача:** автор называет snapshot, платформу, prerequisites и границы; показывает наблюдаемые шаги и проверку; маркирует ожидаемые исходы как ожидаемые, а выполненные — только при наличии отчёта. Для команд указать ОС/shell, версии, доступы, prerequisites и статус выполнения.

**Вопрос для разбора:** где заканчивается наблюдаемый факт и начинается инженерная интерпретация? Ответ должен ссылаться на claims-and-evidence в research.md.

## Типичные заблуждения и отказы

- Считать ответ или сообщение «готово» доказательством изменения/корректности.
- Переносить поведение одного продукта или интерфейса на другой без документации.
- Принимать ожидаемый сценарий за фактически исполненный результат.
- Пропускать командный, безопасностный, стоимостный или maintenance trade-off из-за узкого happy path.

## Вопросы для проверки знаний — с ориентирами ответов

### 1. Что требуется до запуска?

Предоставленный baseline, README, версии runtime/package manager, lockfile, тестовые данные и ограниченный доступ. [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/)

### 2. Почему не устанавливать всё наугад?

Команды установки зависят от manifest; npm ci применим только к совместимому npm-проекту с lockfile. [SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/)

### 3. Что проверяет HTTP smoke?

Оговорённый контракт запроса/ответа и observable effect; просто открытая страница недостаточна. [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)

### 4. Как проверить persistence?

Создать запись, прочитать заново и повторить после оговорённого перезапуска; reset fixtures не должен скрывать результат. [SRC-011](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)

### 5. Как разделять классы ошибок?

Сопоставлять фазу сбоя: установка, старт, HTTP, business rule, storage. Гипотезу подтверждать наблюдением. [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)

### 6. Почему зелёного отчёта мало?

Проверить, что нужные тесты реально исполнялись, не были пропущены и завершились в нужном snapshot. [SRC-014](https://nodejs.org/api/test.html)

### 7. Что передавать в Git-урок?

Состояние файлов, run manifest, известные ошибки и реально исполненные checks; генерацию кода не считать проверкой. [SRC-015](https://git-scm.com/docs/git-status)

## Ключевые выводы и переход

- Сформулировать механизм и условия, при которых подход применим.
- Отдельно назвать ограничения, альтернативу и способ проверить результат.
- Материалы раздела остаются в статусе **Research / Outline**, пока урок не будет написан и технически проверен.

Далее — закрепить исходное состояние и прочитать diff средствами Git.
