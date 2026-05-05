---
title: "Modul 5.6: Skills-Pattern"
module: "5.6"
type: index
fast_track: false
effort: "🔧 4-6h · 🧮 4-6h · 💼 3-4h"
stability: green
---

# Modul 5.6: Skills-Pattern

Skills sind 2025-2026 als eigene Disziplin etabliert worden — eine neue Kategorie zwischen System-Prompt, Prompt, MCP-Tool und RAG. Anthropic Claude Skills, OpenAI Codex Skills, Hamel Husain's evals-skills (März 2026) sind die Treiber. Eine Skill ist **persistierter, versionierter Domain-Kontext**, den ein Agent on-demand laden kann. Pflicht-Modul für 🔧, empfohlen für 🧮/💼.

**Aufwand:** 🔧 4-6h · 🧮 4-6h · 💼 3-4h
**Voraussetzungen:** Module 5.3 (MCP-Praxis), 5.4 (Eval-Methodik), idealerweise 5.5
**Status:** Pflicht 🔧, empfohlen 🧮/💼

## Lernziel

Du kannst eine Skill für Claude oder eine gleichwertige Plattform entwickeln, die strukturiertes Wissen, Vorlagen und ausführbaren Code in einem reproduzierbaren Format verpackt. Du verstehst den Unterschied zwischen Skill, Prompt, MCP-Tool, System-Prompt und RAG — und triffst bewusste Entscheidungen, wann welches Pattern zum Use-Case passt.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Skills als neue Disziplin 2025-2026](theorie/skills-als-disziplin.md) | ✅ | 10min |
| 2 | [Abgrenzung Skill vs. andere Patterns](theorie/skill-abgrenzung.md) | ✅ | 15min |
| 3 | [SKILL.md-Format als Konvention](theorie/skill-md-format.md) | ✅ | 15min |
| 4 | [Auto-Discovery via Description-Matching](theorie/auto-discovery.md) | ✅ | 10min |
| 5 | [Wann Skill, wann Prompt, wann MCP, wann RAG?](theorie/wann-welches-pattern.md) | ✅ | 10min |
| 6 | [Skills-Engineering-Antipatterns](theorie/antipatterns.md) | ✅ | 10min |
| 7 | [Hamel evals-skills als Referenz-Implementation](theorie/hamel-evals-skills.md) | ✅ | 15min |
| 8 | [Anthropic Claude Skills 2025/2026](theorie/claude-skills.md) | ⏭️ | 10min |
| 9 | [Skills-Eval-Pattern](theorie/skills-eval.md) | ✅ | 10min |

## Praxis: Hauptprojekt — Eigene Skill bauen

Wähle einen wiederholbaren Workflow aus deinem Alltag oder deiner Berufspraxis:

**Beispiel-Use-Cases:**
- "Wöchentliches Status-Update aus Jira-Tickets generieren"
- "User-Feedback in Jira-Ticket-Format strukturieren"
- "Datenanalyse-Audit auf eine CSV durchführen mit Standard-Plots und Anomaly-Detection"
- "Brand-Voice-Check auf einen geschriebenen Text"
- "Code-Review-Checkliste für Python-PRs anwenden"
- "Pitch-Deck-Outline generieren aus einer Use-Case-Beschreibung"

**Schritte:**
1. **SKILL.md schreiben** mit klarer Description, Trigger-Heuristik, schrittweiser Anleitung, mindestens einem kanonischen Beispiel und optional einem Code-Snippet.
2. **In Claude Desktop oder gleichwertiger Plattform laden**.
3. **Trigger-Eval**: 5-10 realistische Inputs, davon ~5 die die Skill laden sollten, ~5 die nicht laden sollten. Description-Engineering iterieren bis ≥80% korrektes Trigger-Verhalten.
4. **Output-Eval**: für die geladenen Cases überprüfen, ob die Skill das gewünschte Verhalten produziert.
5. **Reflexion**: warum diese Description-Formulierung? Welche Trigger-Failures gab es?
6. Im Portfolio: `stufe-5_anwendungen/5-6-skills/` mit SKILL.md, Test-Cases, Eval-Output, Reflexion.

## 🎁 Mehrwert-Mini-Projekte

- **Persönliche Skill-Library**: 3-5 Skills für deinen Alltag (Status-Update, Code-Review, Meeting-Summary, Brand-Voice-Check).
- **Skill für deinen Capstone (🔧)**: integriere mindestens eine Skill in deine Capstone-A-Architektur.
- **Hamel evals-skills installieren** und einen davon (z.B. `eval-audit`) auf deine eigene Stufe-5.4-Eval-Suite anwenden.

## 🌱 Open-Source-Pfad

Skills-Pattern ist Plattform-agnostisch — funktioniert mit Claude, OpenAI, lokal mit Open-Source-Agents. Hamel evals-skills selbst ist OSS (MIT-Lizenz). Reine Markdown-Files + optionale Python-Snippets — kein Lock-in.

## Outcome-Check

- [ ] Eigene Skill (mind. eine SKILL.md) erstellt und getestet
- [ ] Description-Engineering-Reflexion ("warum diese Description-Formulierung? Welche Trigger-Failures hatte ich?")
- [ ] Skill vs. Prompt vs. MCP vs. RAG für drei eigene Use-Cases bewusst entschieden und dokumentiert
- [ ] Hamel evals-skills inspiziert (mindestens 2 davon installiert oder gelesen)
- [ ] **Outcome-Schwelle:** Skill triggert in ≥80% der relevanten Fälle korrekt (Trigger-Eval mit 5-10 Cases)
- [ ] Im Portfolio: `stufe-5_anwendungen/5-6-skills/` mit SKILL.md, Test-Cases, Eval-Output, Reflexion
