# Источники — Р4.11: Паттерн 11. Narrow API surface

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-422"></a>**SRC-422** — [OpenAPI Specification: Parameters and Payload of an Operation](https://learn.openapis.org/specification/parameters.html) | OpenAPI Initiative | Official specification learning material | Living OpenAPI learning documentation; publication date not displayed; фактический просмотр 2026-11-02 | Typed and located operation parameters, request payload and schemas | Explains OpenAPI input-interface structures. | A schema describes shape; it does not automatically guarantee authorization or business correctness. |
| <a id="src-408"></a>**SRC-408** — [Agents](https://developers.openai.com/api/docs/guides/agents) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Runtime choices, harness/loop ownership, execution and state boundaries | Documents current OpenAI agent runtime options. | Provider-specific API information; not a generic definition of an agent harness. |
| <a id="src-410"></a>**SRC-410** — [Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Input/output/tool guardrails, approvals, interruptions and scope boundaries | Documents SDK approval lifecycle and where controls execute. | Behavior is specific to the cited SDK; production controls need local threat modeling. |
| <a id="src-417"></a>**SRC-417** — [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) | GitHub Docs | Official security documentation | Living GitHub documentation; publication date not displayed; фактический просмотр 2026-11-02 | Minimum token permissions and workflow hardening | Documents platform security recommendations. | Follow event-specific threat model; permissions are not the only workflow risk. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 11. Narrow API surface», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
