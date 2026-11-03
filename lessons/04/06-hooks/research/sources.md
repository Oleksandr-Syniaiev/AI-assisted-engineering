# Источники — Р4.06: Паттерн 7. Hooks: lifecycle vs git-style

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-414"></a>**SRC-414** — [Configure agent hooks in Visual Studio Code (Preview)](https://code.visualstudio.com/docs/agent-customization/hooks) | Microsoft / VS Code | Official product documentation | Living docs; current article page reports publication about five days before access; фактический просмотр 2026-11-02 | Agent lifecycle events, hook input/output, timeout, failure and trust concerns | Documents current VS Code hook configuration and explicitly marks experience Preview. | Harness-specific; preview state and failure semantics can change. |
| <a id="src-415"></a>**SRC-415** — [githooks](https://git-scm.com/docs/githooks) | Git project | Official Git documentation | Living Git documentation; publication date not displayed; фактический просмотр 2026-11-02 | Git event hooks, cwd, input and bypass behavior | Documents Git hooks lifecycle and semantics. | Client-side Git hooks are local and bypassable in relevant cases; not equivalent to server policy. |
| <a id="src-419"></a>**SRC-419** — [Agent plugins in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-plugins) | Microsoft / VS Code | Official product documentation | Living docs; current article page reports publication about five days before access; фактический просмотр 2026-11-02 | Bundled customizations, installation and plugin supply-chain cautions | Documents plugin packaging and trust considerations. | VS Code/Copilot harness-specific; other plugin schemas differ. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 7. Hooks: lifecycle vs git-style», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
