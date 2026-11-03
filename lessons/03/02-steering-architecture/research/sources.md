# Источники — Р3.02: 4-слойная steering-архитектура (обзор)

Дата проверки перечисленных ниже страниц: 2026-11-02. Просмотрены страницы первоисточников, а не только поисковые фрагменты. Даты публикации приводятся на самих страницах там, где они указаны; дата доступа не заменяет дату публикации.

## Просмотренные источники

| Источник / стабильный ID | Организация | URL | Дата публикации / обновления | Тип | Дата проверки | Поддерживает | Ограничения |
|---|---|---|---|---|---|---|---|
| <a id="src-201"></a>**SRC-201** — Custom instructions with AGENTS.md | OpenAI / Codex documentation | https://learn.chatgpt.com/docs/agent-configuration/agents-md | Publication/update date not stated on inspected page | Official product documentation | Проверено 2026-11-02 | Codex discovery, scope and instruction handling | The page documents Codex behavior; it does not define cross-harness semantics. |
| <a id="src-202"></a>**SRC-202** — Use custom instructions in VS Code | Microsoft / Visual Studio Code | https://code.visualstudio.com/docs/agent-customization/custom-instructions | Living documentation; publication/update date not stated on inspected page | Official product documentation | Проверено 2026-11-02 | Instruction files, scopes, additive sources, conflict resolution and diagnostics | Behavior depends on selected harness and VS Code version; no universal precedence order. |
| <a id="src-203"></a>**SRC-203** — Understand agent customization | Microsoft / Visual Studio Code | https://code.visualstudio.com/docs/agents/concepts/customization | Living documentation; page says published 5 days before access | Official product documentation | Проверено 2026-11-02 | Distinction among instructions, skills, prompt files, agents, MCP and hooks | Describes VS Code product concepts and activation, not a vendor-neutral taxonomy. |
| <a id="src-204"></a>**SRC-204** — LLM01:2025 Prompt Injection | OWASP GenAI Security Project | https://genai.owasp.org/llmrisk/llm01-prompt-injection/ | 2025 edition (LLM01:2025) | Security risk taxonomy / guidance | Проверено 2026-11-02 | Direct and indirect injection, impact, least privilege, human approval, adversarial testing | Guidance and threat taxonomy; not proof that any single mitigation prevents injection. |


## Кандидаты, не проверенные в этом пакете

- ISO/IEC/IEEE 29148 — системные и программные требования; не открывался для этой темы, поэтому стандарт не цитируется как подтверждение формулы или паттерна.
- Исследовательские сравнительные эксперименты с агентными instruction files / context selection на конкретном репозитории — отдельный поиск нужен до любых количественных заявлений.
- Внутренний/авторский материал, из которого взяты «4-слойная steering-архитектура (обзор)», если он существует. В curriculum и COURSE_OVERVIEW происхождение не указано.

## Правило использования

Официальная документация подтверждает описанные возможности конкретного продукта. Нормативные свойства методологии, универсальные преимущества и количественные эффекты из неё автоматически не следуют. Неисполненные примеры не являются результатом тестирования.
