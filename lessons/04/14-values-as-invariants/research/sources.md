# Источники — Р4.14: Моральные принципы как инварианты

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-421"></a>**SRC-421** — [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) | NIST | Government risk-management framework | NIST AI RMF 1.0 (2023); core page is maintained; фактический просмотр 2026-11-02 | Govern, Map, Measure, Manage; lifecycle-oriented AI risk management | Normative framework guidance for organizing risk work. | High-level outcomes; not a ready-made software invariant list or compliance certification. |
| <a id="src-417"></a>**SRC-417** — [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) | GitHub Docs | Official security documentation | Living GitHub documentation; publication date not displayed; фактический просмотр 2026-11-02 | Minimum token permissions and workflow hardening | Documents platform security recommendations. | Follow event-specific threat model; permissions are not the only workflow risk. |
| <a id="src-410"></a>**SRC-410** — [Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) | OpenAI Developers | Official API documentation | Living API documentation; publication date not displayed; фактический просмотр 2026-11-02 | Input/output/tool guardrails, approvals, interruptions and scope boundaries | Documents SDK approval lifecycle and where controls execute. | Behavior is specific to the cited SDK; production controls need local threat modeling. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Моральные принципы как инварианты», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
