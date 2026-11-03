# Источники — Р5.13: Паттерн 22. Aspect Oriented Programming (AOP)

Дата проверки открытых страниц: 2026-11-02. Просмотрены открываемые страницы первоисточников/официальной документации и исследовательские страницы; это не означает установку, исполнение или функциональную проверку продукта.

## Просмотренные источники

| ID | Источник / организация | URL | Дата публикации / обновления и доступа | Тип | Релевантные разделы | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-528"></a>**SRC-528** — The AspectJ Programming Guide / Eclipse Foundation / AspectJ project | Eclipse Foundation / AspectJ project | https://eclipse.dev/aspectj/doc/latest/progguide/progguide.html | Живая версия документа; доступ 2026-11-02 | Официальное руководство языка | Join points; pointcuts; advice; aspects | Aspect, pointcuts, advice и crosscutting declarations. | Языковая реализация Java AOP; не относится непосредственно к агентным hooks. |
| <a id="src-529"></a>**SRC-529** — Hooks / Visual Studio Code | Visual Studio Code | https://code.visualstudio.com/docs/agent-customization/hooks | Preview docs; доступ 2026-11-02 | Официальная документация продукта | Hook events and lifecycle behavior (Preview) | Lifecycle hooks и продуктовые event interfaces. | Preview и VS Code-specific; проверить версию перед уроком. |
| <a id="src-530"></a>**SRC-530** — Orchestration / OpenAI Agents SDK | OpenAI Agents SDK | https://developers.openai.com/tracks/building-agents | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Orchestration primitives; traces and handoffs | Агенты, handoffs, tools, guardrails, trace. | Поставщик документации; не универсальная схема агентного рантайма. |

## Кандидаты для последующей проверки

- Сравнительные production-исследования на одном и том же репозитории, модели, policy и oracle: в этом пакете не запускались.
- Текущие платные функции, тарифы, команды конкретного выпуска и сведения о безопасности частных сред проверять у поставщика перед подготовкой урока; не выводить их из рекламной страницы.
- Неустановленное curriculum-происхождение термина/паттерна: если авторский источник не найден, сохранить его как рабочее определение, не приписывать стандарту.

## Правило использования

Официальная документация подтверждает только документированное поведение конкретного продукта. Исследовательские статьи подтверждают ограниченные выводы в описанной выборке. Любой вывод о production-эффективности маркировать как интерпретацию, пока нет воспроизводимого локального evidence.
