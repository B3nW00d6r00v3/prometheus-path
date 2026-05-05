---
title: "Modul 7.5: Reasoning-Modelle als Architektur-Familie"
module: "7.5"
type: index
fast_track: false
effort: "🔧 4-6h · 🧮 12-18h · 💼 3-5h"
stability: green
---

# Modul 7.5: Reasoning-Modelle als Architektur-Familie

In Modul 2.5.5 hast du Reasoning-Modelle als Architektur-Familie auf Awareness-Niveau kennengelernt. Modul 7.5 vertieft das mit Trainings- und Inferenz-Tiefe — für 🧮 mit eigenem GRPO-Mini-Run, für 🔧 mit Production-Engineering-Patterns, für 💼 als 1-2-Pager mit Cost-Awareness und strategischer Implikation.

**Aufwand:** 🔧 4-6h · 🧮 12-18h · 💼 3-5h  
**Voraussetzungen:** Module 7.1 (NN/Backprop), 7.2 (Modern Transformer); für 🧮 zusätzlich Stufe 8 (RL-Awareness in 6.3)  
**Status:** **Pflicht 🧮**, optional 🔧, Awareness 💼

## Lernziel

- **🧮**: Du verstehst Test-Time-Compute als eigene Architektur-Familie. Du kannst die Trainings- und Inferenz-Patterns von o1/o3, Claude Thinking, DeepSeek R1 mathematisch und mechanistisch einordnen. Du hast einen Mini-GRPO-Run auf einem 1B-Modell durchgeführt.
- **🔧**: Du kannst Reasoning-Modelle in Production angemessen einsetzen (Cost-Awareness, Latenz, Stop-Bedingungen) und ihre Failure-Modes erkennen. Du hast einen Standard-vs-Reasoning-Vergleich auf eigenem Capstone-Use-Case mit 10-20 Test-Cases gemacht.
- **💼**: Du verstehst, was Reasoning-Modelle sind, was sie kosten (5-30× Standard-LLM), wann sie strategisch sinnvoll sind und wann nicht.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Test-Time-Compute als Skalierungs-Achse](theorie/test-time-compute.md) | ✅ | 15min |
| 2 | [Reasoning-Modell-Familie 2026](theorie/reasoning-familie.md) | ✅ | 15min |
| 3 | [Trainings-Patterns: GRPO, PRM, ORM](theorie/trainings-patterns.md) | ⏭️ | 20min |
| 4 | [Inferenz-Patterns: CoT, Self-Consistency, Tree-Search](theorie/inferenz-patterns.md) | ⏭️ | 20min |
| 5 | [Engineering-Patterns für Reasoning](theorie/engineering-patterns.md) | ✅ | 15min |
| 6 | [Wann Reasoning-Modell, wann Standard?](theorie/wann-reasoning.md) | ✅ | 10min |
| 7 | [Failure-Modes von Reasoning-Modellen](theorie/failure-modes.md) | ✅ | 10min |
| 8 | [Eval von Reasoning-Modellen](theorie/eval-reasoning.md) | ⏭️ | 15min |

## Praxis (track-spezifisch)

**🧮 — Hauptprojekt: Mini-GRPO-Run auf 1B-Modell**

- **Theorie-Lektüre**: DeepSeek-R1 Paper (Abstract + Method-Sektion) + GRPO-Block (Brücke zu Modul 10.2 Fine-Tuning).
- **Praxis**: Mini-GRPO-Run auf einem 1B-Open-Source-Modell (z.B. Qwen 2.5 0.5B oder TinyLlama) mit kleinem Reasoning-Datensatz (GSM8K-Subset oder MATH-Subset, 100-300 Samples).
- **Tools**: TRL (`GRPOTrainer`) oder Unsloth, auf Cloud-GPU (Lambda/RunPod, 1-3h Compute, <30€).
- **Eval**: Vorher-Nachher-Vergleich auf Held-Out-Set des Reasoning-Benchmarks (10-20 Test-Cases).
- **Reflexion**: Wo skaliert Reasoning-Training auf 1B-Modell, wo nicht? Was würde 7B/13B ändern?
- Im Portfolio: `stufe-7_deep-learning/7-5-reasoning-architecture/` mit Code, Eval-Report, Reflexion.

**🔧 — Hauptprojekt: Standard-vs-Reasoning-Vergleich auf Capstone**

- **Use-Case wählen**: 10-20 Test-Cases aus deinem Capstone (Mix aus einfach + komplex).
- **Vergleich**: Standard-Modell (z.B. Sonnet 4.6 ohne Thinking) vs. Reasoning-Modell (z.B. Opus 4.7 mit High-Effort) auf allen Test-Cases.
- **Messen**: Cost-Tracking pro Run, Latenz-Messung, Quality-Eval (Faithfulness oder Task Success Rate).
- **Decision-Framework**: für welche Capstone-Pfade Reasoning, für welche Standard? Tabelle mit Begründung.
- Im Portfolio: `stufe-7_deep-learning/7-5-reasoning-engineer/` mit Vergleichs-Tabelle, Decision-Framework, Reflexion.

**💼 — 1-2-Pager**

- Was sind Reasoning-Modelle? (Test-Time-Compute, Familie 2026)
- Was kosten sie? (5-30× Standard-LLM, Latenz-Aufschlag)
- Welche strategische Implikation für dein Use-Case-Portfolio (Modul 9.1)?
- Wann lohnt der Cost-Aufpreis, wann nicht?
- Im Portfolio: `stufe-7_deep-learning/7-5-reasoning-strategist.md`.

## Open-Source-Pfad

- **DeepSeek R1** (MIT-Lizenz) für lokale Reasoning-Inferenz via Ollama oder vLLM.
- **Qwen QwQ** (Apache 2.0) als zweite OSS-Reasoning-Option.
- **GRPO** via TRL (Hugging Face) oder Unsloth — beide OSS.

## Outcome-Check (track-spezifisch)

**🧮:**
- [ ] DeepSeek-R1-Paper-Lektüre dokumentiert (Abstract + Method)
- [ ] Mini-GRPO-Run dokumentiert (Code, Logs, Cost)
- [ ] Eval-Vergleich Vorher-Nachher
- [ ] Reflexion zu Skalierungs-Grenzen auf 1B vs. größer

**🔧:**
- [ ] Standard-vs-Reasoning-Vergleich auf Capstone dokumentiert (10-20 Test-Cases)
- [ ] Cost+Latenz+Quality-Tabelle
- [ ] Decision-Framework für Capstone-Pfade
- [ ] Anti-Pattern bewusst getestet (Reasoning auf simple Aufgabe → Cost-Spike beobachtet)

**💼:**
- [ ] 1-2-Pager im Portfolio
- [ ] Cost-Bandbreite mit konkreten Zahlen
- [ ] Strategische Implikation für eigenes Use-Case-Portfolio dokumentiert
