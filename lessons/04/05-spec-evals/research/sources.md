# Источники — Р4.05: Паттерн 6. Spec self/auto-evals (чек-лист + прогон агентом)

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-411"></a>**SRC-411** — [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Traces, graders, datasets and workflow evaluation | Documents evaluation surfaces for OpenAI agent workflows. | Product-specific surfaces; do not treat a trace grader as an independent oracle. |
| <a id="src-412"></a>**SRC-412** — [Working with evals](https://developers.openai.com/api/docs/guides/evals) | OpenAI Developers | Official API documentation | Living API documentation; deprecation schedule displayed at access date; фактический просмотр 2026-11-02 | Datasets, test cases, graders and evaluation lifecycle | Documents Evals API and deprecation timeline. | As checked 2026-11-02, docs say Evals became read-only 2026-10-31 and scheduled to shut down 2026-11-30; future use must be rechecked. |
| <a id="src-413"></a>**SRC-413** — [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) | Lianmin Zheng et al. | Research paper / preprint | arXiv preprint submitted 2023-06-09; фактический просмотр 2026-11-02 | LLM-as-judge evaluation and known bias/limitations | Original empirical study of judging LLM outputs. | Research setting and benchmark-specific; not proof every judge fails equally. |
| <a id="src-402"></a>**SRC-402** — [Agentic SDD](https://github.github.com/spec-kit/reference/agentic-sdd.html) | GitHub Spec Kit | Official project documentation | Living project documentation; no publication date displayed; фактический просмотр 2026-11-02 | Command stages, clarify/analyze gates, tasks and converge | Documents the current process and artifact relations. | Commands and behavior belong to Spec Kit; other agents may invoke differently. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 6. Spec self/auto-evals (чек-лист + прогон агентом)», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
