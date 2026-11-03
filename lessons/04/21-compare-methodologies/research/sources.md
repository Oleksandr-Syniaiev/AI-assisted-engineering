# Источники — Р4.21: Как читать и сравнивать методологии

Дата фактического просмотра: 2026-11-02. Источники ниже открывались и проверялись в релевантных разделах. Ссылки на `main`/living docs изменяемы: для воспроизводимого lesson pin release/commit. Даты публикации/редакции включены в примечание источника, если явно доступны; где нет — это обозначено как живая документация/дата страницы не указана.

## Просмотренные первоисточники
| ID / источник | Организация | Тип | Дата публикации/проверки | Релевантные разделы | Поддерживаемые тезисы | Ограничения |
|---|---|---|---|---|---|---|
| <a id="src-401"></a>**SRC-401** — [GitHub Spec Kit](https://github.github.io/spec-kit/) | GitHub | Official project documentation | Living project documentation; no publication date displayed; фактический просмотр 2026-11-02 | Overview, install and process selection | Documents Spec Kit as a toolkit and its available agent-driven processes; not evidence that SDD improves outcomes. | Living docs; current commands and templates must be checked against a pinned release. |
| <a id="src-404"></a>**SRC-404** — [OpenSpec documentation](https://github.com/Fission-AI/OpenSpec/tree/main/docs) | Fission-AI | Official project documentation | Living repository documentation; main branch is mutable; фактический просмотр 2026-11-02 | Core concepts, commands, change/spec/delta/archive lifecycle | Project documentation describes OpenSpec workflows. | Branch `main` is mutable; pin a tag/commit before a reproducible product comparison. |
| <a id="src-405"></a>**SRC-405** — [Specs](https://kiro.dev/docs/specs/) | Kiro | Official product documentation | Living product documentation; publication date not displayed; фактический просмотр 2026-11-02 | requirements/design/tasks, feature and bugfix flows, checkpoints and task execution | Documents the Kiro product surface and its spec artifacts. | Vendor documentation; availability, platform and pricing can change; no execution performed. |
| <a id="src-406"></a>**SRC-406** — [specs.md](https://github.com/fabriqaai/specs.md) | fabriqaai | Official project repository | Repository README; current revision accessed, no publication date stated; фактический просмотр 2026-11-02 | Ideation, Simple, FIRE and AI-DLC flows; integration and artifact layout | Project README/repo presents the framework’s own workflow and claims. | Repository claims are author claims; flows, commands and compatibility were not executed. |
| <a id="src-407"></a>**SRC-407** — [Superpowers](https://github.com/obra/superpowers) | obra | Official project repository | Repository README; current revision accessed, no publication date stated; фактический просмотр 2026-11-02 | Composable skills, planning, TDD, worktrees, reviews and finishing workflow | Project repository documents its own skills and expected behavior. | Community project; instructions/auto-trigger behavior depends on harness and version. |
| <a id="src-413"></a>**SRC-413** — [Judging LLM-as-a-Judge](https://arxiv.org/abs/2306.05685) | Lianmin Zheng et al. | Research paper / preprint | arXiv preprint submitted 2023-06-09; фактический просмотр 2026-11-02 | LLM-as-judge evaluation and known bias/limitations | Original empirical study of judging LLM outputs. | Research setting and benchmark-specific; not proof every judge fails equally. |


## Кандидаты, не использованные как evidence
- Полная hands-on установка и прогон перечисленных методологий: не выполнялись; нужны заранее выбранные версии, модели, инструменты и изолированное окружение.
- Независимые продольные сравнительные исследования Spec Kit, OpenSpec, Kiro, specs.md и Superpowers в одинаковой production среде: в этой задаче не обнаружены/не анализировались; не делать вывод о превосходстве.
- Курсовой исходный материал, определяющий «Как читать и сравнивать методологии», если он есть: в доступных curriculum/overview для этого ID не обнаружен.

## Как использовать
Стабильные SRC-ID в `research.md` и `outline.md` ведут к этим записям. Документы продукта являются первоисточником его документированной поверхности, но заявления о пользе остаются заявлениями автора. Research document does not claim execution.
