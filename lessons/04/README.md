# Раздел 4 — уроки и исследовательская основа

Все 21 позиции исходного curriculum представлены пакетами Research / Outline (дата проверки источников: 2026-11-02); уроки написаны и прошли авторский self-review. В пакетах практические сценарии — авторские demonstrations, без самостоятельных заданий, обязательной сдачи или артефактов читателя.

| ID | Тема | Research | Outline | Sources |
|---|---|---|---|---|
| Р4.01 | SDD и три уровня зрелости спецификации | [research](./01-sdd-maturity/research/research.md) | [outline](./01-sdd-maturity/research/outline.md) | [sources](./01-sdd-maturity/research/sources.md) |
| Р4.02 | Паттерн 4. Спецификации из X последовательных файлов (детерминированные стадии) | [research](./02-sequential-spec-files/research/research.md) | [outline](./02-sequential-spec-files/research/outline.md) | [sources](./02-sequential-spec-files/research/sources.md) |
| Р4.03 | Паттерн 5. Agent Loops / Harness Engineering | [research](./03-agent-loops-harness/research/research.md) | [outline](./03-agent-loops-harness/research/outline.md) | [sources](./03-agent-loops-harness/research/sources.md) |
| Р4.04 | Паттерн 3. Ask-before-writing на уровне спеки | [research](./04-ask-before-writing-spec/research/research.md) | [outline](./04-ask-before-writing-spec/research/outline.md) | [sources](./04-ask-before-writing-spec/research/sources.md) |
| Р4.05 | Паттерн 6. Spec self/auto-evals (чек-лист + прогон агентом) | [research](./05-spec-evals/research/research.md) | [outline](./05-spec-evals/research/outline.md) | [sources](./05-spec-evals/research/sources.md) |
| Р4.06 | Паттерн 7. Hooks: lifecycle vs git-style | [research](./06-hooks/research/research.md) | [outline](./06-hooks/research/outline.md) | [sources](./06-hooks/research/sources.md) |
| Р4.07 | Урок 11. CI/CD как loss function | [research](./07-ci-loss-function/research/research.md) | [outline](./07-ci-loss-function/research/outline.md) | [sources](./07-ci-loss-function/research/sources.md) |
| Р4.08 | Паттерн 8. Переиспользуемый workflow | [research](./08-reusable-workflow/research/research.md) | [outline](./08-reusable-workflow/research/outline.md) | [sources](./08-reusable-workflow/research/sources.md) |
| Р4.09 | Паттерн 9. Shared artifacts | [research](./09-shared-artifacts/research/research.md) | [outline](./09-shared-artifacts/research/outline.md) | [sources](./09-shared-artifacts/research/sources.md) |
| Р4.10 | Паттерн 10. Plugins/Bundles | [research](./10-plugins-bundles/research/research.md) | [outline](./10-plugins-bundles/research/outline.md) | [sources](./10-plugins-bundles/research/sources.md) |
| Р4.11 | Паттерн 11. Narrow API surface | [research](./11-narrow-api/research/research.md) | [outline](./11-narrow-api/research/outline.md) | [sources](./11-narrow-api/research/sources.md) |
| Р4.12 | Паттерн 12. Мета-подход | [research](./12-meta-approach/research/research.md) | [outline](./12-meta-approach/research/outline.md) | [sources](./12-meta-approach/research/sources.md) |
| Р4.13 | Паттерн 13. Deferred context disclosure | [research](./13-deferred-context/research/research.md) | [outline](./13-deferred-context/research/outline.md) | [sources](./13-deferred-context/research/sources.md) |
| Р4.14 | Моральные принципы как инварианты | [research](./14-values-as-invariants/research/research.md) | [outline](./14-values-as-invariants/research/outline.md) | [sources](./14-values-as-invariants/research/sources.md) |
| Р4.15 | Методология 1. Spec-anchored как основа сравнения | [research](./15-spec-anchored-baseline/research/research.md) | [outline](./15-spec-anchored-baseline/research/outline.md) | [sources](./15-spec-anchored-baseline/research/sources.md) |
| Р4.16 | Методология 2. GitHub Spec Kit | [research](./16-github-spec-kit/research/research.md) | [outline](./16-github-spec-kit/research/outline.md) | [sources](./16-github-spec-kit/research/sources.md) |
| Р4.17 | Методология 3. OpenSpec | [research](./17-openspec/research/research.md) | [outline](./17-openspec/research/outline.md) | [sources](./17-openspec/research/sources.md) |
| Р4.18 | Методология 4. Kiro (AWS) | [research](./18-kiro-specs/research/research.md) | [outline](./18-kiro-specs/research/outline.md) | [sources](./18-kiro-specs/research/sources.md) |
| Р4.19 | Методология 5. specs.md | [research](./19-specs-md/research/research.md) | [outline](./19-specs-md/research/outline.md) | [sources](./19-specs-md/research/sources.md) |
| Р4.20 | Методология 6. superpowers | [research](./20-superpowers/research/research.md) | [outline](./20-superpowers/research/outline.md) | [sources](./20-superpowers/research/sources.md) |
| Р4.21 | Как читать и сравнивать методологии | [research](./21-compare-methodologies/research/research.md) | [outline](./21-compare-methodologies/research/outline.md) | [sources](./21-compare-methodologies/research/sources.md) |

## Решения и открытые определения

- Авторская последовательность curriculum не меняется. Рекомендуемый маршрут COURSE_OVERVIEW: Р4.01 → Р4.04 → Р4.02 → Р4.05 → Р4.07 → Р4.03 → Р4.06 → Р4.09 → Р4.11 → Р4.08 → Р4.10 → Р4.13 → Р4.14 → Р4.12 → Р4.15–Р4.21.
- «Три уровня зрелости SDD», значение X в последовательных файлах, «Мета-подход», exact product identity for specs.md and intended meaning of course’s patterns remain open where source is not established. Packages label any working model as such.
- Six methodology entries are not the same kind of object: Spec-anchored is a course working model; Spec Kit/OpenSpec/specs.md/Superpowers are repositories/frameworks; Kiro is a vendor product. Compare their documented workflows without claiming a universal ranking.
- Dynamic note: official OpenAI Evals documentation states its platform became read-only 2026-10-31 and is scheduled to shut down 2026-11-30. Recheck before drafting; research does not depend on it as a future service.
- No products installed or workflows executed. Sources establish documented behavior, not hands-on verification.

## Читать уроки

- [Р4.01 — SDD и три уровня зрелости спецификации](./01-sdd-maturity/index.html)
- [Р4.02 — Паттерн 4. Спецификации из X последовательных файлов (детерминированные стадии)](./02-sequential-spec-files/index.html)
- [Р4.03 — Паттерн 5. Agent Loops / Harness Engineering](./03-agent-loops-harness/index.html)
- [Р4.04 — Паттерн 3. Ask-before-writing на уровне спеки](./04-ask-before-writing-spec/index.html)
- [Р4.05 — Паттерн 6. Spec self/auto-evals (чек-лист + прогон агентом)](./05-spec-evals/index.html)
- [Р4.06 — Паттерн 7. Hooks: lifecycle vs git-style](./06-hooks/index.html)
- [Р4.07 — Урок 11. CI/CD как loss function](./07-ci-loss-function/index.html)
- [Р4.08 — Паттерн 8. Переиспользуемый workflow](./08-reusable-workflow/index.html)
- [Р4.09 — Паттерн 9. Shared artifacts](./09-shared-artifacts/index.html)
- [Р4.10 — Паттерн 10. Plugins/Bundles](./10-plugins-bundles/index.html)
- [Р4.11 — Паттерн 11. Narrow API surface](./11-narrow-api/index.html)
- [Р4.12 — Паттерн 12. Мета-подход](./12-meta-approach/index.html)
- [Р4.13 — Паттерн 13. Deferred context disclosure](./13-deferred-context/index.html)
- [Р4.14 — Моральные принципы как инварианты](./14-values-as-invariants/index.html)
- [Р4.15 — Методология 1. Spec-anchored как основа сравнения](./15-spec-anchored-baseline/index.html)
- [Р4.16 — Методология 2. GitHub Spec Kit](./16-github-spec-kit/index.html)
- [Р4.17 — Методология 3. OpenSpec](./17-openspec/index.html)
- [Р4.18 — Методология 4. Kiro (AWS)](./18-kiro-specs/index.html)
- [Р4.19 — Методология 5. specs.md](./19-specs-md/index.html)
- [Р4.20 — Методология 6. superpowers](./20-superpowers/index.html)
- [Р4.21 — Как читать и сравнивать методологии](./21-compare-methodologies/index.html)

HTML автономный, без CDN и сетевых скриптов. Пересборка: `python lessons/04/build.py` (Python 3). Research сохранён как история подготовки; его англоязычные рабочие заметки не заменяют русский текст lesson.md.
