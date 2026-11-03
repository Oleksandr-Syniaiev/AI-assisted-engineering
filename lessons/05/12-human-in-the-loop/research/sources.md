# Источники — Р5.12: Паттерн 21. Agent-Human separation of responsibilities (HITL)

Дата проверки открытых страниц: 2026-11-02. Просмотрены открываемые страницы первоисточников/официальной документации и исследовательские страницы; это не означает установку, исполнение или функциональную проверку продукта.

## Просмотренные источники

| ID | Источник / организация | URL | Дата публикации / обновления и доступа | Тип | Релевантные разделы | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-516"></a>**SRC-516** — Deployment environments / GitHub Docs | GitHub Docs | https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Environment approvals; branch rules; secrets access | Environment approval, branch policy, secrets gating. | Настройка платформы, не гарантия корректного содержимого workflow. |
| <a id="src-526"></a>**SRC-526** — Human-in-the-loop / OpenAI Agents SDK | OpenAI Agents SDK | https://openai.github.io/openai-agents-python/human_in_the_loop/ | Живая документация; доступ 2026-11-02 | Официальная документация SDK | Approval interruptions; serialize/resume RunState | Pause/resume состояния для approval чувствительных tool calls. | Конкретный SDK behavior; приложение должно само обеспечить identity, UI и enforcement. |
| <a id="src-527"></a>**SRC-527** — Guardrails and human review / OpenAI API | OpenAI API | https://developers.openai.com/api/docs/guides/agents/guardrails-approvals | Живая документация; доступ 2026-11-02 | Официальная документация API | Guardrails versus approvals; approval lifecycle; workflow boundaries | Различие автоматических guardrails и human approval перед side effects. | Использовать локальную модель угроз; docs не включают Auto-review в приложение автоматически. |

## Кандидаты для последующей проверки

- Сравнительные production-исследования на одном и том же репозитории, модели, policy и oracle: в этом пакете не запускались.
- Текущие платные функции, тарифы, команды конкретного выпуска и сведения о безопасности частных сред проверять у поставщика перед подготовкой урока; не выводить их из рекламной страницы.
- Неустановленное curriculum-происхождение термина/паттерна: если авторский источник не найден, сохранить его как рабочее определение, не приписывать стандарту.

## Правило использования

Официальная документация подтверждает только документированное поведение конкретного продукта. Исследовательские статьи подтверждают ограниченные выводы в описанной выборке. Любой вывод о production-эффективности маркировать как интерпретацию, пока нет воспроизводимого локального evidence.
