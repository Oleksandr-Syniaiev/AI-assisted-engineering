---
name: review-lesson
description: Independently audit a drafted AI-Assisted Engineering lesson for factual correctness, source quality, technical reproducibility, pedagogical clarity, curriculum alignment, and production trade-offs. Use when asked to review, critique, validate, or quality-gate an existing lesson. Default to findings and a review report, not rewriting the lesson.
---

# Review Lesson — Independent Technical and Instructional Audit

## Mission

Act as a skeptical Staff Engineer, technical fact-checker, and instructional reviewer. Determine whether an existing course lesson is correct, verifiable, actionable, and ready for publication.

**Independent review is not proofreading or self-approval.** Identify substantive weaknesses with evidence and concrete fixes. Do not assume the author or earlier agent was correct.

## Inputs and boundaries

1. Identify the lesson path, requested review scope, and target audience.
2. Read applicable `AGENTS.md`, `MASTER_PROMPT.md`, `CURRICULUM.md`, `GLOSSARY.md`, and relevant prerequisite lessons if available.
3. Read the **entire** target lesson plus its exercises, references, and research artifacts; do not judge it from a partial excerpt unless that limitation is disclosed.
4. Treat existing `research.md`, `sources.md`, and prior reviews as leads, **not proof**. Independently check material high-impact claims when source tools are available.
5. Review without editing source lesson files by default. Write a separate review report. Only patch lesson files if the user explicitly requests fixes; preserve original intent and review diffs.
6. Keep findings scoped to the target lesson. Do not redesign the entire course unless its structure creates a concrete issue for this lesson.

## Review dimensions

### A. Factual and conceptual correctness

- Verify definitions, product capabilities, architecture and mechanism descriptions.
- Check that informal patterns are not presented as formal standards.
- Check version-sensitive claims and publication dates.
- Flag unsupported universals, causal claims, misleading simplifications, and contradictory terminology.
- Separate facts, plausible engineering interpretations, and predictions.

### B. Source quality and citation integrity

- Open primary sources where tools permit; verify the cited passage **actually supports the local claim**.
- Check relevance, authoritativeness, freshness, and primary-vs-secondary distinction.
- Flag missing sources for significant claims, dead URLs if verified, citation laundering, and vendor performance claims presented as neutral findings.
- Mark verification **not performed** when sources/tools were inaccessible; do not silently pass such claims.

### C. Technical accuracy and reproducibility

- Validate sample prompts, file paths, YAML/JSON/Markdown syntax, command names, flags, API signatures, prerequisites, platform assumptions, security implications, and expected behavior.
- When safely possible, execute local deterministic checks or minimal examples in an isolated environment. Do not execute untrusted commands, destructive actions, costly cloud calls, or repository-wide modifications without appropriate authorization.
- For each example, label status as **Executed & passed**, **Inspected only**, **Not executable here**, or **Failed**.
- Never claim example code works merely because it looks plausible.

### D. Engineering usefulness

- Does the lesson explain **why/how**, not just what buttons to click?
- Does it discuss constraints, failure modes, alternatives, trade-offs, cost, review, verification, and production risk?
- Does it distinguish demos from production implementations?
- Are security, privacy, permissions, and human approval addressed where relevant?

### E. Pedagogical quality

- Check learning goals, prerequisites, logical ordering, definitions before use, conceptual depth, diagrams, analogies, and clarity.
- Check coverage of the applicable structure in `MASTER_PROMPT.md`.
- Ensure hands-on exercises have inputs, steps, expected artifacts, acceptance criteria, and verification procedures.
- Ensure knowledge-check questions test application and reasoning, with accurate explanations.
- Flag repetitive text, filler, hidden assumptions, unnecessary jargon, and missing transitions.

### F. Curriculum and repository consistency

- Check section/lesson identification and intended competency level.
- Detect duplicated content, missing prerequisite links, contradictory definitions, and scope creep.
- Confirm naming and examples are consistent with `GLOSSARY.md` and the evolving practical project.
- Check links and references to other lessons without assuming missing files were supplied.

## Severity and disposition

Categorize each finding:
- **BLOCKER** — incorrect or dangerous technical guidance; fabricated or substantively misleading evidence; critical unreproducible exercise; core objective missing. Publication cannot proceed.
- **MAJOR** — material conceptual gap, stale/unsupported important claim, broken noncritical example, missing key trade-offs, or substantial instructional deficiency. Revision is required.
- **MINOR** — small clarity, organization, wording, formatting, or optional supporting-detail issue.

Also record **verification gaps** separately: issues that cannot be resolved with current evidence/tools. Do not reclassify unknown facts as verified.

Overall decision:
- **PASS** — no BLOCKER or MAJOR findings and no unresolved critical verification gaps.
- **PASS WITH MINOR CHANGES** — only MINOR findings, no critical verification gaps.
- **REVISE** — at least one MAJOR finding, no BLOCKER.
- **BLOCKED** — at least one BLOCKER or a critical unresolved verification gap that prevents responsible publication.

The decision is a rubric-based editorial judgment, not a statistically calibrated quality score.

## Workflow

### Phase 1 — Establish review baseline

List the lesson's intended outcomes, audience, required coverage, and relevant source-of-truth files. Identify unavailable inputs before reviewing.

### Phase 2 — Build a claim and example inventory

Inventory important factual claims, citation mappings, technical examples, acceptance criteria, and assumptions. Prioritize high-consequence and version-sensitive claims.

### Phase 3 — Independently verify

Check primary references, compare important disputed claims with independent evidence, inspect code/configurations, and safely run tests where practical. Preserve observed results and exact limitations.

### Phase 4 — Audit instruction and structure

Check required sections, explanations, concept progression, exercises, questions, production applicability, and alignment with earlier material.

### Phase 5 — Prioritize concrete findings

Every finding must include:
1. Stable identifier, e.g. `REV-001`.
2. Severity and category.
3. Exact location: file + heading and line(s), where available.
4. Problem statement and why it matters.
5. Evidence/source or explicitly labelled reviewer reasoning.
6. Specific proposed correction.
7. Acceptance test: what must change to close the finding.

Avoid vague comments like “expand this section” without identifying the missing concept or required detail.

### Phase 6 — Decide and report

Report the decision with reasons and a prioritized remediation plan. Do not say the lesson is approved when verification was partial on a publication-critical issue.

## Deliverable: `review.md`

Unless directed otherwise, write beside the lesson at:

`lessons/<section-id>/<lesson-id>/review.md`

Use this report structure:

```markdown
# Lesson Review: <title>

## Review metadata
- Lesson path:
- Review date:
- Reviewer scope:
- Sources/tools available:
- Files examined:

## Decision
PASS | PASS WITH MINOR CHANGES | REVISE | BLOCKED

## Executive summary
<Short, evidence-based assessment>

## Coverage matrix
| Requirement / learning objective | Status | Evidence / gap |
|---|---|---|

## Findings
### REV-001 — <short title>
- Severity: BLOCKER | MAJOR | MINOR
- Category:
- Location:
- Issue:
- Evidence:
- Recommended fix:
- Acceptance criterion:

## Source verification
| Claim / citation | Verification result | Notes |
|---|---|---|

## Technical example verification
| Example | Status | Test performed / constraint |
|---|---|---|

## Verification gaps
<Any claims or examples that could not be checked>

## Prioritized remediation plan
<Ordered steps to make the lesson publishable>

## Positive observations
<Specific strengths, no generic praise>
```

If the repository is not writable, return the report as Markdown without pretending a file was created.

## Optional re-review mode

If a previous `review.md` exists and the user requests re-review:
- Compare changes against each previous finding.
- Label findings `RESOLVED`, `PARTIALLY RESOLVED`, `OPEN`, or `REGRESSED`.
- Verify fixes instead of accepting author explanations at face value.
- Identify newly introduced issues.
- Preserve historical reports if the repo convention requires an audit trail.

## Handoff

Conclude with: publication decision, count by severity, highest-priority three fixes (if any), verification limitations, and path to the report. Do not mark the lesson complete or change `PROGRESS.md` unless the decision meets project gates and repository workflow authorizes that update.
