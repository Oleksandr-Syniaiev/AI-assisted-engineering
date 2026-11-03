# Источники — Р5.17: Методология 9. Augment Cosmos

Дата проверки открытых страниц: 2026-11-02. Просмотрены открываемые страницы первоисточников/официальной документации и исследовательские страницы; это не означает установку, исполнение или функциональную проверку продукта.

## Просмотренные источники

| ID | Источник / организация | URL | Дата публикации / обновления и доступа | Тип | Релевантные разделы | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-535"></a>**SRC-535** — Cosmos: A Programmable Software Factory / Augment Code | Augment Code | https://www.augmentcode.com/product/cosmos | Живая продуктовая страница; доступ 2026-11-02 | Официальная страница продукта | Обзор продукта; triggers; sandbox; checkpoints | Позиционирование event-triggered agent fleets, sandboxes, experts and checkpoints. | Маркетинговая страница; нет независимых показателей, полного technical reference или учебного доступа. |
| <a id="src-516"></a>**SRC-516** — Deployment environments / GitHub Docs | GitHub Docs | https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Environment approvals; branch rules; secrets access | Environment approval, branch policy, secrets gating. | Настройка платформы, не гарантия корректного содержимого workflow. |
| <a id="src-527"></a>**SRC-527** — Guardrails and human review / OpenAI API | OpenAI API | https://developers.openai.com/api/docs/guides/agents/guardrails-approvals | Живая документация; доступ 2026-11-02 | Официальная документация API | Guardrails versus approvals; approval lifecycle; workflow boundaries | Различие автоматических guardrails и human approval перед side effects. | Использовать локальную модель угроз; docs не включают Auto-review в приложение автоматически. |

## Кандидаты для последующей проверки

- Сравнительные production-исследования на одном и том же репозитории, модели, policy и oracle: в этом пакете не запускались.
- Текущие платные функции, тарифы, команды конкретного выпуска и сведения о безопасности частных сред проверять у поставщика перед подготовкой урока; не выводить их из рекламной страницы.
- Неустановленное curriculum-происхождение термина/паттерна: если авторский источник не найден, сохранить его как рабочее определение, не приписывать стандарту.

## Правило использования

Официальная документация подтверждает только документированное поведение конкретного продукта. Исследовательские статьи подтверждают ограниченные выводы в описанной выборке. Любой вывод о production-эффективности маркировать как интерпретацию, пока нет воспроизводимого локального evidence.
