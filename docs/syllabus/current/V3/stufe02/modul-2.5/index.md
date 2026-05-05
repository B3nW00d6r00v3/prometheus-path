---
title: "Modul 2.5: LLM Foundations VERTIEFT + Reasoning"
module: "2.5"
type: index
fast_track: true
effort: "9-13h"
---

# Modul 2.5: LLM Foundations VERTIEFT + Reasoning

Jetzt, mit Praxiserfahrung aus 2.2 und 2.3, kannst du LLM-Theorie sinnvoll vertiefen. Dieses Modul deckt die 2026er-Modell-Landschaft, Multi-Model-Routing, Provider-Abstraktion, MCP als Konzept, Function Calling, Reasoning-Modelle und Cost/Performance-Trade-offs ab. **Hier wird MCP zum ersten Mal eingeführt**, praktisch wird es in Modul 5.3. Reasoning-spezifisches Prompting wird als eigener Block behandelt, weil es bei Reasoning-Modellen substanziell andere Patterns gibt als bei klassischen LLMs.

**Aufwand:** 9-13h  
**Voraussetzungen:** Module 2.1-2.4 plus Cost-Awareness-Mini-Block

## Lernziel

Du verstehst die Modell-Landschaft Mai 2026, kennst MCP konzeptionell, verstehst Function Calling und Multi-Model-Routing, und kannst eine begründete Entscheidung treffen, welches Modell für welchen Use-Case. Du kennst die Anti-Patterns beim Prompten von Reasoning-Modellen.

## Theorie-Übersicht

### Hauptblock

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [Modell-Landschaft 2026 — Frontier Closed-Source](theorie/frontier-closed-source.md) | :material-minus: | 10min |
| 2 | [Modell-Landschaft 2026 — Open-Source](theorie/open-source-2026.md) | :material-minus: | 10min |
| 3 | [Reasoning-Modelle als eigene Klasse](theorie/reasoning-modelle.md) | :material-minus: | 10min |
| 4 | [Function Calling / Tool Use als Standard](theorie/function-calling.md) | :material-check: | 10min |
| 5 | [MCP (Model Context Protocol) — Konzept](theorie/mcp-konzept.md) | :material-minus: | 15min |
| 6 | [Multi-Model-Routing](theorie/multi-model-routing.md) | :material-minus: | 10min |
| 7 | [Provider-Abstraktion als Best Practice](theorie/provider-abstraktion.md) | :material-minus: | 10min |
| 8 | [Cost-Modell: Input vs. Output Tokens](theorie/cost-modell.md) | :material-check: | 10min |
| 9 | [Welches Modell für welchen Task?](theorie/modell-wahl.md) | :material-minus: | 10min |

### Reasoning-spezifisches Prompting

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 10 | ["Ask, don't tell" — Ziel statt Lösungsweg](theorie/ask-dont-tell.md) | :material-minus: | 8min |
| 11 | [Chain-of-Thought-Anti-Pattern](theorie/cot-anti-pattern.md) | :material-minus: | 8min |
| 12 | [Few-Shot-Anti-Pattern bei Reasoning](theorie/few-shot-anti-pattern.md) | :material-minus: | 8min |
| 13 | [Strukturierte Outputs vs. Reasoning](theorie/strukturierte-outputs-reasoning.md) | :material-minus: | 8min |
| 14 | [Cost-Realität: Reasoning kostet 5-15x mehr](theorie/reasoning-cost.md) | :material-minus: | 8min |
| 15 | [Wann Reasoning sich lohnt](theorie/wann-reasoning.md) | :material-minus: | 8min |
| 16 | [Eval-Implikation bei Reasoning](theorie/reasoning-eval.md) | :material-minus: | 8min |

### Block 2.5.5: Reasoning-Modelle als Architektur-Familie

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 17 | [Test-Time-Compute als Skalierungs-Achse](theorie/test-time-compute.md) | :material-check: | 10min |
| 18 | [Reasoning-Modell-Familie Mai 2026](theorie/reasoning-familie-2026.md) | :material-check: | 10min |
| 19 | [Trainings-Pattern auf hoher Ebene](theorie/trainings-pattern.md) | :material-check: | 10min |
| 20 | [Inferenz-Pattern auf hoher Ebene](theorie/inferenz-pattern.md) | :material-check: | 10min |
| 21 | [Effort-Parameter als API-Konvention 2026](theorie/effort-parameter.md) | :material-check: | 10min |
| 22 | [Brücke zu Capstone-Wahl](theorie/Brücke-capstone.md) | :material-check: | 5min |

## Praxis: Hauptprojekt — Modell-Vergleichs-Notebook

- Drei Test-Prompts aus deinem Alltag wählen (z.B. eine Übersetzung, eine Code-Review, eine kreative Aufgabe).
- Diese Prompts gegen 5-7 Modelle laufen lassen: Claude Sonnet, GPT-5 (oder Mini), Gemini, plus 2-3 lokale OSS via Ollama. **Plus mindestens ein Reasoning-Modell**.
- Ergebnisse dokumentieren: Qualität (subjektiv 1-5), Latenz, Cost (falls Cloud), eigene Bewertung. **Plus Reasoning-Anti-Pattern-Test.**
- Konsolidierter Bericht im Portfolio: welches Modell für welche Aufgabe?
- Bonus: Notebook in Python schreiben und LiteLLM zur Provider-Abstraktion nutzen.

**Praxis-Mini Reasoning-Patterns:** Wähle eines deiner 20 Prompts aus Modul 2.3 (idealerweise eine Analyse- oder Coding-Aufgabe) und teste es gegen ein klassisches Modell *und* ein Reasoning-Modell — beide einmal mit "Schritt für Schritt"-Prompt, beide einmal ohne. Was passiert? Dokumentiere im Portfolio.

**Praxis-Mini Block 2.5.5:** Lies einen der drei Quellen-Texte: (a) OpenAI o1 Announcement-Post, (b) DeepSeek R1 Paper Abstract + Intro, (c) Anthropic-Post zu Adaptive Thinking in Opus 4.7. Schreibe einen 200-Wörter-Brief an dich selbst: "Was ist Test-Time-Compute, warum ist es eine eigene Skalierungs-Achse, und für welche Tasks lohnt sich das in meinem aktuellen Use-Case?" Dokumentiere im Portfolio unter `stufe-2_grundlagen/2-5-5-reasoning-awareness/`.

## Mehrwert-Mini-Projekte

- **Eigener "Modell-Wahl-Cheat-Sheet"** — 1-Pager mit deiner persönlichen Modell-Empfehlung pro Use-Case-Kategorie, getrennt nach klassischen LLMs und Reasoning-Modellen.
- **Cost-Tracker-Bookmark** — Lesezeichen zu [LLM Stats Pricing-Tabelle](https://llm-stats.com) für schnelle Cost-Schätzungen.

## Open-Source-Pfad

- Komplett mit Ollama: vergleiche `llama3.2:3b`, `qwen2.5:7b`, `gemma3:4b`, `deepseek-r1:7b`, `phi-4` lokal — gleiche Test-Prompts. *Tipp: `deepseek-r1:7b` ist OSS-Reasoning-Modell, eignet sich gut für den Reasoning-Anti-Pattern-Test.*
- [LiteLLM lokal](https://docs.litellm.ai) als einheitlicher Endpunkt für Ollama-Modelle.
- [Open WebUI](https://openwebui.com) für komfortablen Vergleich im Browser.

## Outcome-Check

- [ ] Modell-Vergleichs-Notebook im Portfolio mit dokumentierten Ergebnissen
- [ ] Persönlicher Modell-Wahl-Cheat-Sheet
- [ ] MCP konzeptionell verstanden (kannst du in 3 Sätzen erklären?)
- [ ] Mindestens einmal mit LiteLLM oder OpenRouter Provider-Abstraktion getestet
- [ ] Bewusstsein für Cost-Trade-offs und Multi-Model-Routing
- [ ] Reasoning-Anti-Pattern verstanden — du weißt, wann du Reasoning-Modelle einsetzt und wann nicht
- [ ] Eines deiner Prompts mit/ohne "Schritt für Schritt" gegen Reasoning-Modell getestet

**Outcome-Check Block 2.5.5:**

- [ ] Test-Time-Compute als eigene Skalierungs-Achse erklärbar
- [ ] Mindestens drei Reasoning-Modelle aus der Familie genannt (mit korrektem Anbieter-Mapping)
- [ ] Effort-Parameter (Anthropic / OpenAI) als API-Konvention bekannt
- [ ] 200-Wörter-Reflexion zu eigenem Use-Case im Portfolio
