# Раздел 5 — уроки и исследовательская основа

Все 18 позиций curriculum представлены пакетами Research / Outline; дата проверки источников — 2026-11-02. Р5.01–Р5.18 написаны и прошли авторский self-review. Практические сценарии — авторские демонстрации без самостоятельных заданий, сдачи и обязательных артефактов читателя.

| ID | Тема | Зависимости | Research | Outline | Sources |
|---|---|---|---|---|---|
| Р5.01 | Мультиагентный режим | Выход Р4; циклы агента, handoff и ограничения контекста | [research](./01-multi-agent-mode/research/research.md) | [outline](./01-multi-agent-mode/research/outline.md) | [sources](./01-multi-agent-mode/research/sources.md) |
| Р5.02 | Метрики и где настоящий bottleneck | Р2.03, Р4.07, Р5.01; GAP-12/GAP-16 | [research](./02-metrics-bottlenecks/research/research.md) | [outline](./02-metrics-bottlenecks/research/outline.md) | [sources](./02-metrics-bottlenecks/research/sources.md) |
| Р5.03 | Verification debt | Р4.05, Р5.02 | [research](./03-verification-debt/research/research.md) | [outline](./03-verification-debt/research/outline.md) | [sources](./03-verification-debt/research/sources.md) |
| Р5.04 | Soft skills — новые hard skills | Р2.04, Р3.06, Р5.03 | [research](./04-soft-skills-hard-skills/research/research.md) | [outline](./04-soft-skills-hard-skills/research/outline.md) | [sources](./04-soft-skills-hard-skills/research/sources.md) |
| Р5.05 | Паттерн 14. Version Every Thing (VET) | Р4.09–Р4.10; определить границы Version Every Thing | [research](./05-version-everything/research/research.md) | [outline](./05-version-everything/research/outline.md) | [sources](./05-version-everything/research/sources.md) |
| Р5.06 | Паттерн 15. Quality gates и blast-radius control | Р4.07, Р5.03, Р5.12 | [research](./06-quality-gates-blast-radius/research/research.md) | [outline](./06-quality-gates-blast-radius/research/outline.md) | [sources](./06-quality-gates-blast-radius/research/sources.md) |
| Р5.07 | Паттерн 16. Архитектурные тесты | Р3.03, Р5.06; определить границы модулей и зависимости | [research](./07-architecture-tests/research/research.md) | [outline](./07-architecture-tests/research/outline.md) | [sources](./07-architecture-tests/research/sources.md) |
| Р5.08 | Паттерн 17. Git worktrees / параллельные субагенты | Р5.05–Р5.07, Р5.12; GAP-10–GAP-11 | [research](./08-git-worktrees-parallel-agents/research/research.md) | [outline](./08-git-worktrees-parallel-agents/research/outline.md) | [sources](./08-git-worktrees-parallel-agents/research/sources.md) |
| Р5.09 | Паттерн 18. Branch-and-merge оркестрация | Р5.08; основы merge и конфликтов | [research](./09-branch-merge-orchestration/research/research.md) | [outline](./09-branch-merge-orchestration/research/outline.md) | [sources](./09-branch-merge-orchestration/research/sources.md) |
| Р5.10 | Паттерн 19. Иерархические команды агентов с общей памятью | Р5.09, Р4.09; GAP-10 | [research](./10-hierarchical-agent-teams-memory/research/research.md) | [outline](./10-hierarchical-agent-teams-memory/research/outline.md) | [sources](./10-hierarchical-agent-teams-memory/research/sources.md) |
| Р5.11 | Паттерн 20. Swarms и оркестрация | Р5.10, Р5.02; GAP-09 | [research](./11-swarms-orchestration/research/research.md) | [outline](./11-swarms-orchestration/research/outline.md) | [sources](./11-swarms-orchestration/research/sources.md) |
| Р5.12 | Паттерн 21. Agent-Human separation of responsibilities (HITL) | Р5.01, Р5.04; permissions ранних разделов | [research](./12-human-in-the-loop/research/research.md) | [outline](./12-human-in-the-loop/research/outline.md) | [sources](./12-human-in-the-loop/research/sources.md) |
| Р5.13 | Паттерн 22. Aspect Oriented Programming (AOP) | Р4.06, Р5.06–Р5.07; уточнить классический AOP и scope паттерна | [research](./13-aop/research/research.md) | [outline](./13-aop/research/outline.md) | [sources](./13-aop/research/sources.md) |
| Р5.14 | Паттерн 23. Reproducibility unit + audit trail | Р5.05, Р5.09, Р5.02; GAP-12 | [research](./14-reproducibility-audit-trail/research/research.md) | [outline](./14-reproducibility-audit-trail/research/outline.md) | [sources](./14-reproducibility-audit-trail/research/sources.md) |
| Р5.15 | Методология 7. Tessl | Р4.21, Р5.14; выбрать компонент и версию | [research](./15-tessl/research/research.md) | [outline](./15-tessl/research/outline.md) | [sources](./15-tessl/research/sources.md) |
| Р5.16 | Методология 8. BMAD-METHOD | Р4.21, Р5.10, Р5.14 | [research](./16-bmad-method/research/research.md) | [outline](./16-bmad-method/research/outline.md) | [sources](./16-bmad-method/research/sources.md) |
| Р5.17 | Методология 9. Augment Cosmos | Р4.21, Р5.11–Р5.14; доступ к продукту | [research](./17-augment-cosmos/research/research.md) | [outline](./17-augment-cosmos/research/outline.md) | [sources](./17-augment-cosmos/research/sources.md) |
| Р5.18 | Методология 10. AI-DLC | Р4.21, Р5.12, Р5.14 | [research](./18-ai-dlc/research/research.md) | [outline](./18-ai-dlc/research/outline.md) | [sources](./18-ai-dlc/research/sources.md) |

## Читать уроки

- [Р5.01 — Мультиагентный режим](./01-multi-agent-mode/index.html)
- [Р5.02 — Метрики и где настоящий bottleneck](./02-metrics-bottlenecks/index.html)
- [Р5.03 — Verification debt](./03-verification-debt/index.html)
- [Р5.04 — Soft skills — новые hard skills](./04-soft-skills-hard-skills/index.html)
- [Р5.05 — Паттерн 14. Version Every Thing (VET)](./05-version-everything/index.html)
- [Р5.06 — Паттерн 15. Quality gates и blast-radius control](./06-quality-gates-blast-radius/index.html)
- [Р5.07 — Паттерн 16. Архитектурные тесты](./07-architecture-tests/index.html)
- [Р5.08 — Паттерн 17. Git worktrees / параллельные субагенты](./08-git-worktrees-parallel-agents/index.html)
- [Р5.09 — Паттерн 18. Branch-and-merge оркестрация](./09-branch-merge-orchestration/index.html)
- [Р5.10 — Паттерн 19. Иерархические команды агентов с общей памятью](./10-hierarchical-agent-teams-memory/index.html)
- [Р5.11 — Паттерн 20. Swarms и оркестрация](./11-swarms-orchestration/index.html)
- [Р5.12 — Паттерн 21. Agent-Human separation of responsibilities (HITL)](./12-human-in-the-loop/index.html)
- [Р5.13 — Паттерн 22. Aspect Oriented Programming (AOP)](./13-aop/index.html)
- [Р5.14 — Паттерн 23. Reproducibility unit + audit trail](./14-reproducibility-audit-trail/index.html)
- [Р5.15 — Методология 7. Tessl](./15-tessl/index.html)
- [Р5.16 — Методология 8. BMAD-METHOD](./16-bmad-method/index.html)
- [Р5.17 — Методология 9. Augment Cosmos](./17-augment-cosmos/index.html)
- [Р5.18 — Методология 10. AI-DLC](./18-ai-dlc/index.html)

HTML автономный, без CDN и сетевых скриптов. Пересборка: `python lessons/05/build.py` (Python 3). Research сохранён как история подготовки.
