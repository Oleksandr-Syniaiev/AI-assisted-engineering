---
name: research-topic
description: Research an AI-Assisted Engineering course topic using authoritative sources, compare engineering approaches, verify claims, and produce structured research artifacts before lesson writing. Use for topic exploration, primary-source research, source validation, methodology comparison, and lesson preparation. Do not use to write or review a finished lesson.
---

# Research Topic — Evidence-Driven Technical Research

## Mission

Build a reliable, traceable research foundation for a single AI-Assisted Engineering lesson or tightly scoped topic. Optimize for **technical correctness, depth, relevance, and reproducibility**, not volume of links or speed of drafting.

**Do not write the final lesson.** This skill creates research inputs for `write-lesson` and later independent review by `review-lesson`.

## Inputs and project context

1. Identify the requested topic, section, lesson ID, and scope from the user's request. If not specified, use `CURRICULUM.md` to select the explicitly referenced topic; otherwise state your best-supported interpretation.
2. Read applicable `AGENTS.md` instructions, then `MASTER_PROMPT.md`, `CURRICULUM.md`, and `PROGRESS.md` if present. Consult `GLOSSARY.md` for terminology and preceding lessons for dependencies. Do not assume absent files exist.
3. Use the user's instructions over project defaults where they do not conflict with higher-priority instructions.
4. Define research questions, expected learning outcomes, prerequisite knowledge, and boundaries **before** collecting sources.
5. Do not silently rewrite the curriculum or extend research into unrelated topics.

## Research workflow

### Phase 1 — Decompose the topic

Produce 5–12 specific research questions, including:
- What engineering problem does this concept solve, and in which circumstances?
- What is its precise definition, and is the term standardized or informal?
- How does it work internally (architecture, lifecycle, data flow, interfaces)?
- What are the alternative approaches, and when does each fail?
- What can be measured, validated, or reproduced?
- What security, privacy, maintainability, cost, and human-oversight issues matter?
- How does it connect to previous and subsequent curriculum topics?

Resolve ambiguous names (such as SDD, AOP, VET, AI-DLC or product names) from primary sources. Label any course-specific definition as a *working definition*.

### Phase 2 — Gather authoritative evidence

When browsing or documentation tools are available, prioritize:
1. Current official documentation and specification texts.
2. Official project repositories, source code, release notes, issues, and examples.
3. Original research papers and published evaluation methodology.
4. Engineering case studies with implementation detail or measured outcomes.
5. Independent technical analyses and community experience for counterexamples.

For each source, record **title, author/organization, URL, publication/update date when available, date actually checked, type, supported claims, and caveats**. Use stable official URLs where possible. Avoid relying on snippets without opening and reading the relevant source. If browsing is unavailable, inventory locally available sources and clearly mark all unverified current claims.

For contested claims, seek independent corroboration, not just duplicate posts repeating one source. Distinguish vendor claims from independently tested results.

### Phase 3 — Evaluate evidence

For every important assertion, classify it as:
- **Verified** — directly supported by an inspected primary source or reproducible evidence.
- **Supported** — supported by credible secondary sources but not independently verified here.
- **Interpretation** — reasoned engineering judgment, explicitly distinguished from fact.
- **Unverified** — evidence unavailable, contradictory, stale, or insufficient.

Record uncertainties and contradictions. Do not fabricate citations, benchmark numbers, command output, URLs, release status, or successful tool execution. An accessible URL alone is not evidence that its content was checked.

### Phase 4 — Technical synthesis

Explain mechanisms in sufficient depth for an experienced engineer:
- Components, architecture, lifecycle, state, execution flow, and interfaces.
- Example file structures, prompts, configuration, APIs, and CLI commands where relevant.
- Context usage, token/cost implications, permissions, sandboxing, and failure modes for agents.
- Production integration: legacy code, team workflows, review, tests, CI/CD, observability.
- Comparison matrix with alternatives on learning curve, implementation cost, maintainability, safety, verification, and applicability.
- Practical measurable criteria instead of vague claims that one methodology is “better.”

Do not present guessed commands as executable instructions. State version/platform prerequisites and the verification status of each example.

### Phase 5 — Design a teachable lesson

Propose an outline aligned with `MASTER_PROMPT.md` including conceptual foundations, implementation, production use, trade-offs, exercise, knowledge checks, and references. Connect the lesson to the course's evolving practical project; if the project is not defined, propose a candidate without claiming it is approved.

Define a reproducible hands-on exercise with inputs, environment, steps, expected artifacts, measurable acceptance criteria, and validation commands. Clearly distinguish **expected results** from **actually executed checks**.

## Deliverables

Unless the user requests another location, write to:

`lessons/<section-id>/<lesson-id>/research/`

Create these three Markdown files:

### `research.md`

Include:
1. Research metadata: topic, scope, date, prerequisites, research limitations.
2. Research questions and concise answers, with source IDs.
3. Definitions and terminology: accepted vs course-specific.
4. Detailed technical mechanisms with architecture notes.
5. Comparative analysis / trade-off matrix.
6. Production considerations and risks.
7. Claims-and-evidence table: **claim | confidence label | source IDs | limitations**.
8. Unresolved questions, contradictions, and recommended verification work.
9. Candidate lab, expected results, and acceptance criteria.

### `sources.md`

Create stable IDs such as `SRC-001`. For each record include the original title, organization, URL, publication/update date if known, access/verification date, source type, relevant sections, supported claims, and limitations. Separate **inspected sources** from **candidates not accessed**. Never invent a citation.

### `outline.md`

Propose learning goals, lesson sections, prerequisite links, diagrams/examples to produce, exercises, common misconceptions, and a mapping from sections to evidence IDs. Mark gaps blocking high-quality drafting.

If repository file access is unavailable, return these artifacts as distinct Markdown sections without claiming they were saved.

## Completion gates

Before finishing, verify:
- All user-requested subtopics were addressed or explicitly left open.
- High-impact claims have traceable citations or are marked unverified.
- At least one viable alternative is considered, when relevant.
- Limitations, failure modes, and trade-offs are explicit.
- Any commands or APIs are sourced or labelled as untested illustrative examples.
- No source is incorrectly described as read or verified.
- The proposed exercise has objective success criteria.
- The lesson outline does not conflict with existing course terminology.

## Handoff

Summarize the research status, strongest sources, critical uncertainties, recommended lesson outline, and exact artifact paths. Update `PROGRESS.md` **only if instructed by repository conventions or the user**, recording research completion without claiming the lesson is finished. Do not modify completed lessons during research.
