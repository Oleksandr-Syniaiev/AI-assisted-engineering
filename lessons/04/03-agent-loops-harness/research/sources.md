# Источники — Р4.03: Паттерн 5. Agent Loops / Harness Engineering

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-408"></a>**SRC-408** — [Agents](https://developers.openai.com/api/docs/guides/agents) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Runtime choices, harness/loop ownership, execution and state boundaries | Documents current OpenAI agent runtime options. | Provider-specific API information; not a generic definition of an agent harness. |
| <a id="src-409"></a>**SRC-409** — [Building effective agents](https://www.anthropic.com/research/building-effective-agents) | Anthropic Engineering | Vendor engineering research article | Anthropic article; published 2024-12-19 (verify page metadata at drafting); фактический просмотр 2026-11-02 | Workflow vs agent architectures, tool feedback, stopping conditions and simplicity | Engineering perspective and examples. | Vendor-authored guidance, not comparative independent evidence. |
| <a id="src-410"></a>**SRC-410** — [Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Input/output/tool guardrails, approvals, interruptions and scope boundaries | Documents SDK approval lifecycle and where controls execute. | Behavior is specific to the cited SDK; production controls need local threat modeling. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 5. Agent Loops / Harness Engineering», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
