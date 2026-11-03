# Р1.01 — источники и границы проверки

Дата проверки: **02.11.2026**. Публикационные даты документации не установлены, если отдельно не указаны. Ссылки проверены чтением соответствующих разделов, а не только поисковых snippets.

## Первичные источники

| ID | Оригинальное название / автор | Прочитанные разделы | Что поддерживает в уроке | Ограничения |
|---|---|---|---|---|
| SRC-001 | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works), Anthropic | The agentic loop; Models; Tools; The context window | Модель, инструменты, harness и feedback loop | Устройство конкретного продукта; не универсальная спецификация всех агентов |
| SRC-004 | [Build with AI in VS Code](https://code.visualstudio.com/docs/agents/overview), Microsoft | Choose how you work; agent/model/tools | Реальная интеграция агентной работы с редактором, поиском, изменениями и checks | Не означает доступность всех функций на аккаунте читателя; в уроке нет инструкции установки |
| SRC-023 | [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices), Anthropic | Deterministic and non-deterministic instructions; Give Claude a check to run | Отличие текстового указания от enforcement; запускаемые checks как feedback | Советы поставщика не доказывают продуктивность; конкретные hooks/flags в урок не переносились |
| SRC-024 | [Understand context in AI agents](https://code.visualstudio.com/docs/agents/concepts/context), Microsoft | Context; How VS Code assembles context | Различие доступных ресурсов и содержания текущего запроса | Точные правила загрузки относятся к конкретному harness |
| SRC-014 | [Test runner](https://nodejs.org/api/test.html), Node.js contributors | node:test; синхронные tests; failing exit code | Формат локального примера и код завершения тестового runner | Открытая текущая страница относится к Node.js 26; фактический пример отдельно проверен на Node.js v24.22.1 |

## Что является инженерным синтезом

Рабочее определение агента, диаграмма цикла, разделение четырёх видов записей trace, правила контракта, матрица выбора подхода и рекомендации для production — авторская модель обучения. Она опирается на описанные механизмы, но не объявляется индустриальным стандартом или результатом сравнительного исследования.

Правило title и ожидаемые cases — явный контракт упражнения. Источники по HTTP или конкретному продукту не используются для доказательства придуманного бизнес-правила. Код и тесты находятся в practice; это отдельный маленький модуль, а не реализованный Engineering Workbench.

## Локальные первичные доказательства

- [Исходник двух функций](practice/title-policy.mjs).
- [Единый test oracle](practice/checks.mjs).
- [Baseline entry](practice/baseline.test.mjs) и [corrected entry](practice/corrected.test.mjs).
- [Фактический отчёт](practice/verification.md): Node.js v24.22.1, baseline 3/4 и exit 1, corrected 4/4 и exit 0.

Учебный trace не является журналом реальной AI-сессии. Он специально содержит неподтверждённые выводы для задания на review. Источники подтверждают механизмы; они не подтверждают действия вымышленного исполнителя.

## Не проверялось

Установка клиентов, аккаунты и тарифы, работа с внешним репозиторием, API/storage/UI полного приложения, вызовы моделей, эффективность или ускорение разработки. Для целей вводного урока они не требуются. Независимый редакционный review другим автором в этой задаче не проводился; технический self-review описан в review.md.
