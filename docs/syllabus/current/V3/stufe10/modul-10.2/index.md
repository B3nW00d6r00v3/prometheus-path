---
title: "Modul 10.2: Fine-Tuning modern"
module: "10.2"
type: index
fast_track: false
effort: "🔧 18-25h · 🧮 50-80h · 💼 4-8h"
---

# Modul 10.2: Fine-Tuning modern

Fine-Tuning ist 2026 nicht mehr "trainiere ein eigenes Modell" — es ist **Preference-Tuning auf bestehenden Foundation-Modellen mit DPO/ORPO/GRPO** plus **PEFT-Methoden wie LoRA und DoRA** für Compute-Effizienz. Dieses Modul lehrt die moderne Landschaft: wann Fine-Tuning, was die Methoden sind, welche Tools (Unsloth, Axolotl, TRL), und welche Modelle (Llama 4, Qwen 3, Gemma 4, DeepSeek V4). **Hier vollendet sich Capstone-Foundations für 🧮**.

**Aufwand:** 🔧 18-25h · 🧮 50-80h · 💼 4-8h
**Voraussetzungen:** Stufen 7 (DL Foundations), Querschnitt Math-Foundation, Querschnitt Eval

## Lernziel

**🧮:** Du hast einen Fine-Tuning-Run mit DPO oder ORPO durchgeführt auf eigenem Korpus oder kleinem Open-Source-Datensatz, mit Eval-Vergleich vorher/nachher (Perplexity oder MMLU-Subset).

**🔧:** Du verstehst die Fine-Tuning-Landschaft, hast einen Fine-Tuning-Run mit LoRA durchgeführt, und kannst beurteilen, wann Fine-Tuning den Aufwand wert ist.

**💼:** Du verstehst konzeptionell, was Fine-Tuning ist, was es kostet, wann es strategisch sinnvoll ist.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Decision-Framework: Fine-Tuning vs. RAG vs. Prompt-Engineering](theorie/decision-framework.md) | ✅ | 20min |
| 2 | [Wann Fine-Tuning?](theorie/wann-fine-tuning.md) | ✅ | 10min |
| 3 | [Fine-Tuning-Stufen](theorie/fine-tuning-stufen.md) | ✅ | 15min |
| 4 | [Supervised Fine-Tuning (SFT)](theorie/sft.md) | ✅ | 15min |
| 5 | [DPO — Direct Preference Optimization](theorie/dpo.md) | ⏭️ | 15min |
| 6 | [ORPO — Odds Ratio Preference Optimization](theorie/orpo.md) | ⏭️ | 15min |
| 7 | [GRPO — Group Relative Policy Optimization](theorie/grpo.md) | ⏭️ | 10min |
| 8 | [PEFT: LoRA, QLoRA, DoRA](theorie/peft.md) | ✅ | 20min |
| 9 | [TRL — die Standard-Library 2026](theorie/trl.md) | ✅ | 10min |
| 10 | [Axolotl — High-Level-Wrapper](theorie/axolotl.md) | ⏭️ | 10min |
| 11 | [Unsloth — Speed-Optimierung](theorie/unsloth.md) | ⏭️ | 10min |
| 12 | [Aktuelle Open-Source-Modelle für Fine-Tuning Mai 2026](theorie/open-source-modelle.md) | ✅ | 15min |
| 13 | [Datensätze für Fine-Tuning](theorie/datensaetze.md) | ✅ | 15min |
| 14 | [Hardware-Realität für Fine-Tuning 2026](theorie/hardware-realitaet.md) | ✅ | 15min |
| 15 | [Eval nach Fine-Tuning](theorie/eval-fine-tuning.md) | ✅ | 15min |
| 16 | [Fine-Tuning-Falle: Catastrophic Forgetting](theorie/catastrophic-forgetting.md) | ✅ | 10min |
| 17 | [Distillation als verwandte Technik](theorie/distillation.md) | ⏭️ | 10min |
| 18 | [Fine-Tuning-Cost realistisch](theorie/cost-uebersicht.md) | ✅ | 10min |

## Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (Capstone-Foundations vollenden):**
- **Decision-Framework anwenden**: dokumentiere für deinen Use-Case, warum Fine-Tuning hier die richtige Wahl ist.
- Nehme dein nanoGPT aus Stufe 7 oder ein kleines Open-Source-Modell (Qwen 3 0.5B oder 1.5B, Gemma 3 2B).
- **Phase 1 SFT**: auf eigenem oder Open-Source-Korpus (LIMA Dataset, eigene Texte).
- **Phase 2 Preference Tuning**: DPO oder ORPO mit UltraFeedback Subset oder selbst kuriertem Preference-Dataset (50-200 Pair-Samples).
- **Eval**: Perplexity Vorher/Nachher, MMLU-Subset (mindestens STEM oder Humanities), LLM-as-Judge auf eigenen Test-Prompts.
- Mit TRL und Unsloth für Speed.
- Im Portfolio: `stufe-10_spezialisierung/10-2-fine-tuning-foundations/` mit Code, Trainings-Logs, Eval-Report, W&B-Run-Logs.

**Für 🔧:**
- **Decision-Framework anwenden**: dokumentiere die Entscheidung Fine-Tuning vs. RAG vs. Prompt-Engineering für deinen Capstone-Use-Case.
- Wähle Open-Source-Foundation-Modell (Qwen 3 7B, Gemma 3 9B, oder Llama 4 8B).
- **LoRA Fine-Tuning** auf eigenem Use-Case (z.B. Domain-spezifische Q&A, Brand-Voice).
- **Eval** mit Vorher-Nachher-Vergleich.
- **Cost-Dokumentation**: was hat es gekostet (Cloud-Stunden + €), wieviel haben Iterationen gespart?
- Im Portfolio: `stufe-10_spezialisierung/10-2-fine-tuning-engineer/`.

**Für 💼:**
- **Decision-Framework als Entscheidungs-Matrix dokumentieren**: für drei Use-Cases der Org klare Empfehlung Prompt / RAG / Fine-Tuning mit Begründung.
- 1-Pager-Briefing: Was ist Fine-Tuning 2026, wann lohnt es sich, was kostet es, was sind Alternativen?
- Optional: einen kleinen LoRA-Run via [Together AI Fine-Tuning](https://www.together.ai) oder OpenAI Fine-Tuning API ohne tiefe Code-Berührung.
- Im Portfolio: `stufe-10_spezialisierung/10-2-fine-tuning-strategist/`.

## 🎁 Mehrwert-Mini-Projekte

- **Brand-Voice-Fine-Tune** auf eigenen Texten — nur falls Decision-Framework-Test dies rechtfertigt.
- **Persönlicher Q&A-Bot** mit Fine-Tuning auf eigenen Notizen — als Vergleich gegen RAG-Variante.

## 🌱 Open-Source-Pfad

Komplett OSS: TRL, PEFT, Unsloth, Axolotl, alle genannten Foundation-Modelle. Cloud-GPU-Rental ist nicht OSS, aber [vast.ai](https://vast.ai) und ähnliche Marketplace-Plattformen sind günstig. Self-hosted Training auf eigener Hardware möglich für kleine Modelle.

## Outcome-Check (track-spezifisch)

**🧮:**
- [ ] **Decision-Framework dokumentiert: warum Fine-Tuning hier die richtige Wahl ist**
- [ ] SFT durchgeführt
- [ ] Preference Tuning (DPO oder ORPO) durchgeführt
- [ ] Eval Vorher/Nachher mit mindestens drei Metriken
- [ ] Catastrophic Forgetting bewertet
- [ ] Capstone-Foundations vollendet

**🔧:**
- [ ] **Decision-Framework dokumentiert**
- [ ] LoRA Fine-Tuning durchgeführt
- [ ] Eval Vorher/Nachher
- [ ] Cost-Dokumentation
- [ ] Reflexion: war es den Aufwand wert vs. besseres Prompting + RAG?

**💼:**
- [ ] **Decision-Framework als Entscheidungs-Matrix für 3 Use-Cases**
- [ ] 1-Pager-Briefing zu Fine-Tuning
- [ ] Optional: einen Click-Click-Fine-Tune
