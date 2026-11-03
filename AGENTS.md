# AI-Assisted Engineering — Agent Instructions

## Project Mission

This repository contains a comprehensive educational course
on AI-Assisted Software Engineering.

The goal is to create technically accurate, research-backed,
production-oriented learning materials for software engineers.

The target audience is Middle, Senior, Staff and Tech Lead
software engineers.

All educational content must be written in Russian.
Technical terms may remain in English.

## Source of Truth

Before beginning a course-related task, read:

1. MASTER\_PROMPT.md — educational standards and methodology.
2. CURRICULUM.md — course structure and lesson dependencies.
3. PROGRESS.md — existing work and current progress.

Read GLOSSARY.md when terminology is relevant.

Do not assume these documents are already in context.
Read the required files explicitly.

## Core Principles

* Prioritize technical accuracy over speed.
* Explain WHY and HOW, not only WHAT.
* Prefer engineering principles over tool-specific advice.
* Distinguish facts, hypotheses, and recommendations.
* Never fabricate sources, benchmarks, APIs or CLI commands.
* Use official documentation and primary sources when possible.
* Verify time-sensitive technical information.
* Explain trade-offs, limitations and failure modes.
* Use real-world software engineering examples.
* Prefer production-grade patterns over toy examples.

## Research Rules

Before writing a lesson:

1. Identify key concepts and terminology.
2. Research the official documentation.
3. Compare alternative approaches.
4. Identify limitations and known failure modes.
5. Collect references with URLs and verification dates.
6. Record unresolved questions.

If web access is unavailable, clearly state that current
information could not be verified.

## Lesson Requirements

Each lesson must include:

1. Learning objectives and prerequisites.
2. Problem statement and motivation.
3. Theoretical foundations.
4. Architecture and internal mechanisms.
5. Practical implementation.
6. Production use cases.
7. Trade-offs and alternatives.
8. Knowledge-check questions with answers.
9. Key takeaways and references.

Use diagrams, code examples, prompts and configurations
when they materially improve understanding.

## Workflow

Use the following workflow:

Research -> Outline -> Draft -> Technical Review -> Finalize

Do not skip the research or technical review stages.

For complex topics, split work into manageable stages.
Do not generate multiple full lessons in a single task
unless explicitly requested.

## Context Management

* Keep AGENTS.md concise.
* Store detailed requirements in MASTER\_PROMPT.md.
* Store the complete curriculum in CURRICULUM.md.
* Store finished lessons in lessons/.
* Maintain PROGRESS.md after completing each lesson.
* Do not depend on previous conversation history.
* Prefer repository artifacts as durable context.

## Editing Rules

* Preserve existing completed materials unless edits are requested.
* Do not silently change the curriculum.
* Keep naming and terminology consistent.
* Do not overwrite unfinished work without inspecting it.
* Review file diffs after making changes.
* Record significant research and content decisions.

## Definition of Done

A lesson is complete when:

* All major concepts are explained.
* Claims are supported by appropriate sources.
* Technical examples are accurate.
* Exercises have verifiable acceptance criteria.
* Trade-offs and limitations are documented.
* The lesson is consistent with the curriculum.
* Technical review has been completed.

If these criteria are not satisfied, mark the lesson as draft.

