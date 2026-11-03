# Источники — Р4.10: Паттерн 10. Plugins/Bundles

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-419"></a>**SRC-419** — [Agent plugins in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-plugins) | Microsoft / VS Code | Official product documentation | Living docs; current article page reports publication about five days before access; фактический просмотр 2026-11-02 | Bundled customizations, installation and plugin supply-chain cautions | Documents plugin packaging and trust considerations. | VS Code/Copilot harness-specific; other plugin schemas differ. |
| <a id="src-420"></a>**SRC-420** — [Understand agent customization](https://code.visualstudio.com/docs/agents/concepts/customization) | Microsoft / VS Code | Official product documentation | Living docs; current article page reports publication about five days before access; фактический просмотр 2026-11-02 | Difference between instructions, skills, tools, hooks and plugins | Documents customization roles and model-driven vs runtime-driven behavior. | Taxonomy belongs to VS Code product. |
| <a id="src-417"></a>**SRC-417** — [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) | GitHub Docs | Official security documentation | Living GitHub documentation; publication date not displayed; фактический просмотр 2026-11-02 | Minimum token permissions and workflow hardening | Documents platform security recommendations. | Follow event-specific threat model; permissions are not the only workflow risk. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 10. Plugins/Bundles», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
