---
title: "Reasoning-Modell-Familie 2026"
module: "7.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Reasoning-Modell-Familie 2026

## Kernidee

2026 gibt es eine vollständige Reasoning-Modell-Familie über alle großen Anbieter: OpenAI o-Serie, Claude Thinking, DeepSeek R-Serie (OSS), Gemini Thinking, Qwen QwQ (OSS). Jeder Anbieter hat eine eigene Implementierung von Test-Time-Compute.

## Im Detail

**OpenAI o-Serie:**
- o1 (September 2024) — erster öffentlich verfügbarer Reasoning-Assistent.
- o3 — signifikante Verbesserung auf harten Benchmarks (AIME, SWE-bench).
- o3-mini — günstigere, schnellere Variante.
- o4 / o5 — in der Roadmap.
- API-Parameter: `reasoning_effort: "low" | "medium" | "high"`.

**Anthropic Claude Thinking-Varianten:**
- Claude Sonnet 4.6 mit Thinking — Thinking aktivierbar via API.
- Claude Opus 4.7 mit **Adaptive Thinking** — Modell entscheidet selbst, wieviel Thinking nötig. Kein explizites Budget nötig.
- API-Parameter: `thinking: {"type": "enabled", "budget_tokens": N}`.

**DeepSeek R-Serie (OSS, MIT-Lizenz):**
- R1 — erster OSS-Reasoning-Assistent, konkurrenzfähig mit o1 auf vielen Benchmarks.
- R2 — Nachfolger.
- Lokal via Ollama oder vLLM lauffähig. Wirtschaftlich interessant für Volumen.
- Trainiert mit GRPO (Group Relative Policy Optimization).

**Google Gemini Thinking:**
- Gemini 2.5 Reasoning.
- Gemini 3.1 Thinking.
- Gut integriert in Google-Ecosystem (Vertex AI, Google Workspace).

**Alibaba Qwen QwQ (OSS, Apache 2.0):**
- Reasoning-Modell mit guter Mathematik- und Code-Performance.
- Lokal lauffähig, Apache-Lizenz für kommerzielle Nutzung.

**Vergleichs-Orientierung (grob):**

| Kriterium | Best-in-class | OSS-Alternative |
|-----------|--------------|-----------------|
| Beste Qualität | o3-High / Claude Opus 4.7 | DeepSeek R2 |
| Günstigste | o3-mini | Qwen QwQ lokal |
| DSGVO | Claude EU / Gemini EU | DeepSeek lokal |
| Einfachste Integration | Claude API | Ollama lokal |

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948) | Technische Details des OSS-Reasoning-Modells |
| 🌐 Docs | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Claude Thinking API |
| 🌐 Modelle | [Ollama — Reasoning Models](https://ollama.com) | DeepSeek R1, Qwen QwQ lokal |

## Teste dein Verständnis

- [ ] Nenne vier Reasoning-Modell-Familien 2026 — je einen Satz zur Besonderheit.
- [ ] Was ist "Adaptive Thinking" bei Claude Opus 4.7 — was entscheidet das Modell selbst?
- [ ] Warum ist DeepSeek R1 für DSGVO-sensible Anwendungen interessant?
- [ ] Welche zwei OSS-Reasoning-Modelle können lokal via Ollama betrieben werden?
