# Источники — Р4.09: Паттерн 9. Shared artifacts

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-418"></a>**SRC-418** — [Workflow artifacts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts) | GitHub Docs | Official platform documentation | Living GitHub documentation; publication date not displayed; фактический просмотр 2026-11-02 | Persisting and sharing files between jobs/run records | Documents GitHub workflow artifact function. | Lifecycle/retention and limits depend on platform policy; not a general agent shared-memory protocol. |
| <a id="src-416"></a>**SRC-416** — [Workflows and actions](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows) | GitHub Docs | Official platform documentation | Living GitHub documentation; publication date not displayed; фактический просмотр 2026-11-02 | CI workflow event/job/step model | Documents GitHub Actions execution structure. | GitHub-specific; hosted runner, pricing and policy vary. |
| <a id="src-408"></a>**SRC-408** — [Agents](https://developers.openai.com/api/docs/guides/agents) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Runtime choices, harness/loop ownership, execution and state boundaries | Documents current OpenAI agent runtime options. | Provider-specific API information; not a generic definition of an agent harness. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 9. Shared artifacts», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
