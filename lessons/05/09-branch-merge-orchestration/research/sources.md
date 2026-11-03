# Источники — Р5.09: Паттерн 18. Branch-and-merge оркестрация

Дата проверки открытых страниц: 2026-11-02. Просмотрены открываемые страницы первоисточников/официальной документации и исследовательские страницы; это не означает установку, исполнение или функциональную проверку продукта.

## Просмотренные источники

| ID | Источник / организация | URL | Дата публикации / обновления и доступа | Тип | Релевантные разделы | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-523"></a>**SRC-523** — Managing protected branches / merge queue / GitHub Docs | GitHub Docs | https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Required checks; strict/loose status; merge queue | Required status checks, review и merge queue на актуальной базе. | Не гарантирует, что checks сами верно тестируют business intent. |
| <a id="src-524"></a>**SRC-524** — Deployment environments / GitHub Docs | GitHub Docs | https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Deployment environments; gate and secret timing | Release gating и доступ к secrets после прохождения protection rules. | Availability зависит от плана/настроек. |
| <a id="src-515"></a>**SRC-515** — About protected branches / GitHub Docs | GitHub Docs | https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches | Живая документация; доступ 2026-11-02 | Официальная документация платформы | Required status checks; merge queue; bypass controls | Required reviews/checks, rules и merge queue behavior. | Поведение/доступность зависят от конфигурации, repository type и тарифа. |

## Кандидаты для последующей проверки

- Сравнительные production-исследования на одном и том же репозитории, модели, policy и oracle: в этом пакете не запускались.
- Текущие платные функции, тарифы, команды конкретного выпуска и сведения о безопасности частных сред проверять у поставщика перед подготовкой урока; не выводить их из рекламной страницы.
- Неустановленное curriculum-происхождение термина/паттерна: если авторский источник не найден, сохранить его как рабочее определение, не приписывать стандарту.

## Правило использования

Официальная документация подтверждает только документированное поведение конкретного продукта. Исследовательские статьи подтверждают ограниченные выводы в описанной выборке. Любой вывод о production-эффективности маркировать как интерпретацию, пока нет воспроизводимого локального evidence.
