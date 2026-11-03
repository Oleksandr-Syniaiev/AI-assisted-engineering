# Источники — Р4.02: Паттерн 4. Спецификации из X последовательных файлов (детерминированные стадии)

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-402"></a>**SRC-402** — [Agentic SDD](https://github.github.com/spec-kit/reference/agentic-sdd.html) | GitHub Spec Kit | Official project documentation | Living project documentation; no publication date displayed; фактический просмотр 2026-11-02 | Command stages, clarify/analyze gates, tasks and converge | Documents the current process and artifact relations. | Commands and behavior belong to Spec Kit; other agents may invoke differently. |
| <a id="src-403"></a>**SRC-403** — [Evolving Specs in Existing Projects](https://github.github.io/spec-kit/guides/evolving-specs.html) | GitHub Spec Kit | Official project documentation | Living project documentation; no publication date displayed; фактический просмотр 2026-11-02 | Brownfield workflow, living/flow-forward choices and reconciliation | Documents two persistence conventions and cross-artifact review. | Does not choose a team’s source-of-truth policy automatically. |
| <a id="src-405"></a>**SRC-405** — [Specs](https://kiro.dev/docs/specs/) | Kiro | Official product documentation | Living product documentation; publication date not displayed; фактический просмотр 2026-11-02 | requirements/design/tasks, feature and bugfix flows, checkpoints and task execution | Documents the Kiro product surface and its spec artifacts. | Vendor documentation; availability, platform and pricing can change; no execution performed. |
| <a id="src-404"></a>**SRC-404** — [OpenSpec documentation](https://github.com/Fission-AI/OpenSpec/tree/main/docs) | Fission-AI | Official project documentation | Living repository documentation; main branch is mutable; фактический просмотр 2026-11-02 | Core concepts, commands, change/spec/delta/archive lifecycle | Project documentation describes OpenSpec workflows. | Branch `main` is mutable; pin a tag/commit before a reproducible product comparison. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Паттерн 4. Спецификации из X последовательных файлов (детерминированные стадии)», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
