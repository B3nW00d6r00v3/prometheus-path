---
title: "Optionale Free-Zertifikate — Stufe 10"
type: zertifikate
stability: yellow
---

# Optionale Free-Zertifikate für Stufe 10

Diese Kurse und Ressourcen vertiefen die Inhalte der Stufe 10. Sie sind optional — der Kerninhalt der Stufe ist in den Modulen selbst abgedeckt. Zertifikate sind im Audit-Modus kostenlos zugänglich.

**Hinweis zum Coursera-Audit-Modus:** DLAI-Kurse sind im Audit-Modus auf Coursera kostenlos zugänglich. Details siehe `99_anhang.md`.

---

## Kurse nach Modul

### Modul 10.1 — KI im Marketing

| Zertifikat | Anbieter | Aufwand | Empfehlung |
|---|---|---|---|
| [Anthropic Cookbook — Production Patterns](https://github.com/anthropics/anthropic-cookbook) | Anthropic | nach Bedarf | Vertiefung 10.1 und 10.3 |

---

### Modul 10.2 — Fine-Tuning modern

| Zertifikat | Anbieter | Aufwand | Empfehlung |
|---|---|---|---|
| [DLAI — Finetuning LLMs](https://learn.deeplearning.ai/courses/finetuning-large-language-models) | DeepLearning.AI / Lamini (Audit-Modus) | ~2h | Vertiefung 10.2 — guter Einstieg |
| [DLAI — Reinforcement Learning from Human Feedback](https://learn.deeplearning.ai) | DeepLearning.AI (Audit-Modus) | ~2h | Vertiefung 10.2 — RLHF-Grundlagen |
| [Hugging Face — LLM Course Chapter 11 (Fine-Tuning)](https://huggingface.co/learn/llm-course/chapter11) | Hugging Face | ~10h | **Pflicht für 🧮 in 10.2** — umfassend und praxisnah |

---

### Modul 10.3 — MLOps + LLMOps Production

| Zertifikat | Anbieter | Aufwand | Empfehlung |
|---|---|---|---|
| [DLAI — LLMOps](https://learn.deeplearning.ai) | DeepLearning.AI (Audit-Modus) | ~2h | Vertiefung 10.3 — Überblick LLMOps |
| [DLAI — Automated Testing for LLMOps](https://learn.deeplearning.ai) | DeepLearning.AI / CircleCI (Audit-Modus) | ~2h | **Pflicht für 🔧 in 10.3** — Eval-as-CI praktisch |
| [DLAI — Building Applications with Vector Databases](https://learn.deeplearning.ai) | DeepLearning.AI (Audit-Modus) | ~2h | Optional — Production-RAG-Vertiefung |
| [Promptfoo Documentation](https://www.promptfoo.dev/docs) | Promptfoo | ~5h | Vertiefung Eval-as-CI |
| [LangSmith Documentation](https://docs.smith.langchain.com) | LangChain | ~5h | Vertiefung 10.3 Observability |
| [Langfuse Documentation](https://langfuse.com/docs) | Langfuse | ~5h | OSS-Alternative zu LangSmith |

---

## Empfehlungs-Matrix nach Track

| Track | Pflicht-Kurse | Empfohlen |
|---|---|---|
| 🔧 Engineer | DLAI Automated Testing for LLMOps | DLAI LLMOps, Promptfoo Docs, Langfuse Docs |
| 🧮 Foundations | HF LLM Course Chapter 11 | DLAI Finetuning LLMs, DLAI RLHF |
| 💼 Strategist | keine Pflicht-Kurse | DLAI LLMOps (Überblick) |

---

## Zeitplanung

Die Kurs-Inhalte können parallel zu den Praxis-Projekten konsumiert werden. Empfohlene Reihenfolge:

1. **Vor Modul 10.2** (🧮): HF LLM Course Chapter 11 starten — gibt technische Basis für Fine-Tuning-Praxis.
2. **Vor Modul 10.2** (🔧): DLAI Finetuning LLMs (~2h) — schneller Konzept-Überblick.
3. **Vor Modul 10.3** (🔧): DLAI Automated Testing for LLMOps — gibt Praxis-Perspektive für Eval-as-CI.
4. **Begleitend zu Modul 10.3**: Langfuse oder LangSmith Docs je nach Tool-Wahl.

---

*Verfallsdatum: Aug 2026 — DLAI erweitert das Kurs-Angebot regelmäßig. Für aktuelle Kurse direkt auf [learn.deeplearning.ai](https://learn.deeplearning.ai) prüfen.*
