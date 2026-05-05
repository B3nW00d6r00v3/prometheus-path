---
title: "Skills als neue Disziplin 2025-2026"
module: "5.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Skills als neue Disziplin 2025-2026

## Kernidee

Skills sind eine neue Kategorie zwischen System-Prompt, Prompt, MCP-Tool und RAG: persistierter, versionierter Domain-Kontext, den ein Agent on-demand laden kann. Anthropic Claude Skills, OpenAI Codex Skills und Hamel Husains evals-skills (März 2026) haben das Konzept etabliert.

## Im Detail

**Was neu ist an Skills:**

Bis 2024 hatte der Agent-Bauer zwei Hauptwerkzeuge: den System-Prompt (einmalig, global) und Prompts (per-Request, ad-hoc). Beides ist schlecht für wiederholbare, domänenspezifische Workflows.

Eine Skill löst dieses Problem: sie ist persistiert (in einer Datei), versioniert (in Git), domänenspezifisch (für einen konkreten Workflow), und wird on-demand geladen (nur wenn der Agent diesen Workflow braucht).

**Die Treiber 2025-2026:**

1. **Anthropic Claude Skills** (öffentlich seit 2025): integriert in Claude Desktop und Claude Code, ermöglichen strukturierten Domain-Kontext.

2. **OpenAI Codex Skills**: ähnliches Konzept für GitHub Copilot und Codex-Umgebung.

3. **Hamel Husain's evals-skills** (März 2026): sieben kanonische OSS-Skills für Eval-Workflows, die das Pattern für die Community zugänglich gemacht haben.

**Warum das Timing 2025-2026 stimmt:**

Mit zunehmend langen Kontextfenstern (100k-1M Tokens) und besserer Reasoning-Fähigkeit können Agenten komplexe deklarative Anweisungen zuverlässig ausführen. Das war 2023 noch nicht stabil genug für den Skills-Ansatz.

**Status:** Skills sind noch nicht so etabliert wie Prompts oder RAG — aber das Momentum ist klar. Wer Skills 2026 lernt, ist früh dran.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Hamel Husain — Evals Skills for Coding Agents](https://hamel.dev/blog/posts/evals-skills/) | Einführung in das Konzept |
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | OSS-Referenz-Implementation |

## Teste dein Verständnis

- [ ] Kannst du in einem Satz erklären, was eine Skill ist und was sie von einem Prompt unterscheidet?
- [ ] Nenne die drei Haupttreiber, die das Skills-Konzept 2025-2026 etabliert haben.
- [ ] Warum war das Skills-Pattern 2023 noch nicht praktikabel?
