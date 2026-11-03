# Источники — Р5.06: Паттерн 15. Quality gates и blast-radius control

Дата проверки открытых страниц: 2026-11-02. Просмотрены открываемые страницы первоисточников/официальной документации и исследовательские страницы; это не означает установку, исполнение или функциональную проверку продукта.

## Просмотренные источники

| ID | Источник / организация | URL | Дата публикации / обновления и доступа | Тип | Релевантные разделы | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-515"></a>**SRC-515** — About protected branches / GitHub Docs | GitHub Docs | https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Required status checks; merge queue; bypass controls | Required reviews/checks, rules и merge queue behavior. | Поведение/доступность зависят от конфигурации, repository type и тарифа. |
| <a id="src-516"></a>**SRC-516** — Deployment environments / GitHub Docs | GitHub Docs | https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Environment approvals; branch rules; secrets access | Environment approval, branch policy, secrets gating. | Настройка платформы, не гарантия корректного содержимого workflow. |
| <a id="src-517"></a>**SRC-517** — LLM01:2025 Prompt Injection / OWASP GenAI Security Project | OWASP GenAI Security Project | https://genai.owasp.org/llmrisk/llm01-prompt-injection/ | 2025 edition; доступ 2026-11-02 | Таксономия риска / рекомендации безопасности | Prompt injection; least privilege; human approval | Недоверенные инструкции, последствия injection, least privilege и human approval. | Рекомендации по threat mitigation не доказывают эффективность отдельного контроля. |

## Кандидаты для последующей проверки

- Сравнительные production-исследования на одном и том же репозитории, модели, policy и oracle: в этом пакете не запускались.
- Текущие платные функции, тарифы, команды конкретного выпуска и сведения о безопасности частных сред проверять у поставщика перед подготовкой урока; не выводить их из рекламной страницы.
- Неустановленное curriculum-происхождение термина/паттерна: если авторский источник не найден, сохранить его как рабочее определение, не приписывать стандарту.

## Правило использования

Официальная документация подтверждает только документированное поведение конкретного продукта. Исследовательские статьи подтверждают ограниченные выводы в описанной выборке. Любой вывод о production-эффективности маркировать как интерпретацию, пока нет воспроизводимого локального evidence.
