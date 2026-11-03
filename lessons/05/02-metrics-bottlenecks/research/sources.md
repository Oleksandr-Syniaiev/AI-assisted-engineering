# Источники — Р5.02: Метрики и где настоящий bottleneck

Дата проверки открытых страниц: 2026-11-02. Просмотрены открываемые страницы первоисточников/официальной документации и исследовательские страницы; это не означает установку, исполнение или функциональную проверку продукта.

## Просмотренные источники

| ID | Источник / организация | URL | Дата публикации / обновления и доступа | Тип | Релевантные разделы | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-504"></a>**SRC-504** — State of AI-assisted Software Development 2025 / DORA / Google Cloud | DORA / Google Cloud | https://dora.dev/research/2025/dora-report/ | 2025; доступ 2026-11-02 | Исследовательский отчёт | 2025 report overview; AI as amplifier | Организационные условия и интерпретация AI как amplifier. | Опросное/организационное исследование; не causal гарантия для отдельного инструмента. |
| <a id="src-505"></a>**SRC-505** — The SPACE of Developer Productivity: There's more to it than you think / Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Tom Zimmermann, Brian Houck, Jenna Butler; ACM Queue / Microsoft Research | Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Tom Zimmermann, Brian Houck, Jenna Butler; ACM Queue / Microsoft Research | https://www.microsoft.com/en-us/research/publication/the-space-of-developer-productivity-theres-more-to-it-than-you-think/ | Февраль 2021; доступ 2026-11-02 | Исследовательская публикация | Измерения SPACE; рекомендации по метрикам | Многомерное измерение продуктивности; одна метрика не достаточна. | Концептуальная рамка; команда должна определить релевантные показатели. |
| <a id="src-506"></a>**SRC-506** — OpenTelemetry GenAI events / OpenTelemetry Semantic Conventions | OpenTelemetry Semantic Conventions | https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-events.md | Статус Development; доступ 2026-11-02 | Развивающаяся спецификация телеметрии | События; конфиденциальность данных; статус реализации | События для LLM вызовов, возможный сбор content only when enabled, privacy caveats. | Спецификация меняется; поддержка языков и SDK неодинакова. |

## Кандидаты для последующей проверки

- Сравнительные production-исследования на одном и том же репозитории, модели, policy и oracle: в этом пакете не запускались.
- Текущие платные функции, тарифы, команды конкретного выпуска и сведения о безопасности частных сред проверять у поставщика перед подготовкой урока; не выводить их из рекламной страницы.
- Неустановленное curriculum-происхождение термина/паттерна: если авторский источник не найден, сохранить его как рабочее определение, не приписывать стандарту.

## Правило использования

Официальная документация подтверждает только документированное поведение конкретного продукта. Исследовательские статьи подтверждают ограниченные выводы в описанной выборке. Любой вывод о production-эффективности маркировать как интерпретацию, пока нет воспроизводимого локального evidence.
