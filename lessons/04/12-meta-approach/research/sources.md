# Источники — Р4.12: Паттерн 12. Мета-подход

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-409"></a>**SRC-409** — [Building effective agents](https://www.anthropic.com/research/building-effective-agents) | Anthropic Engineering | Vendor engineering research article | Anthropic article; published 2024-12-19 (verify page metadata at drafting); фактический просмотр 2026-11-02 | Workflow vs agent architectures, tool feedback, stopping conditions and simplicity | Engineering perspective and examples. | Vendor-authored guidance, not comparative independent evidence. |
| <a id="src-411"></a>**SRC-411** — [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Traces, graders, datasets and workflow evaluation | Documents evaluation surfaces for OpenAI agent workflows. | Product-specific surfaces; do not treat a trace grader as an independent oracle. |
| <a id="src-421"></a>**SRC-421** — [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) | NIST | Government risk-management framework | NIST AI RMF 1.0 (2023); core page is maintained; фактический просмотр 2026-11-02 | Govern, Map, Measure, Manage; lifecycle-oriented AI risk management | Normative framework guidance for organizing risk work. | High-level outcomes; not a ready-made software invariant list or compliance certification. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 12. Мета-подход», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
