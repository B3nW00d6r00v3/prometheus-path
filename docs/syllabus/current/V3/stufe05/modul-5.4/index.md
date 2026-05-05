---
title: "Modul 5.4: GenAI-Anwendungs-Eval"
module: "5.4"
type: index
fast_track: false
effort: "🔧 12-18h · 🧮 10-15h · 💼 5-8h"
stability: green
---

# Modul 5.4: GenAI-Anwendungs-Eval

In Modul 2.3 hast du Prompt-Eval als Konzept eingeführt, in **Modul 5.0** das Eval-Mindset und Reference-Free-Eval praktisch geübt. Jetzt vertiefst du Eval als Disziplin — denn Eval ist 2026 das Kern-Differenzierungsmerkmal zwischen Hobby-Bauer und Professional. Wer ein RAG-System ohne Eval baut, baut blind.

**Aufwand:** 🔧 12-18h · 🧮 10-15h · 💼 5-8h
**Voraussetzungen:** Module 2.3, 5.0, 5.1, 5.2

## Lernziel

Du hast für dein RAG-System aus 5.1 einen vollständigen Eval-Workflow: Eval-Dataset, mehrere Metriken, automatisierte Eval-Runs. Du kennst LLM-as-Judge in der Tiefe und vermeidest die typischen Fallen. *Hinweis: Modul 5.0 hat dir das Eval-Mindset gegeben — hier ist die RAG-spezifische Vertiefung.*

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Warum Eval? Was passiert ohne?](theorie/warum-eval.md) | ✅ | 10min |
| 2 | [Offline vs. Online Eval](theorie/offline-vs-online-eval.md) | ✅ | 10min |
| 3 | [Eval-Dataset aufbauen](theorie/eval-dataset.md) | ✅ | 15min |
| 4 | [Reference-based vs. Reference-free Eval](theorie/reference-based-vs-free.md) | ✅ | 10min |
| 5 | [LLM-as-Judge in der Tiefe](theorie/llm-as-judge-tiefe.md) | ✅ | 20min |
| 6 | [RAG-spezifische Metriken (RAGAS-Tiefe)](theorie/ragas-metriken.md) | ✅ | 15min |
| 7 | [Eval-Tools 2026](theorie/eval-tools.md) | ⏭️ | 10min |
| 8 | [Eval-as-CI](theorie/eval-als-ci.md) | ⏭️ | 10min |
| 9 | [Häufige Eval-Fallen](theorie/eval-fallen.md) | ✅ | 10min |

## Praxis: Vollständiger Eval-Workflow für 5.1-RAG

- **Eval-Dataset erweitern**: aus den 20 Test-Fragen in 5.1 mindestens 50-100 machen. Methoden: (1) Selber 30 weitere schreiben. (2) LLM 30 weitere generieren lassen aus deinen Dokumenten. (3) Mindestens 10 Edge Cases bewusst konstruieren.
- **Mehrere Metriken parallel**: RAGAS-Suite (Faithfulness, Answer Relevancy, Context Precision, Context Recall) plus eine Custom-Metrik für deinen Use-Case (z.B. "deutsche Sprachqualität").
- **LLM-as-Judge mit Bias-Awareness**: Setup mit randomisierten Pairs, Position-Bias-Test (gleiche Antwort zweimal in unterschiedlicher Position).
- **Eval-Run automatisieren**: ein einziges Skript `run_eval.py`, das alle Metriken auf allen Test-Cases laufen lässt und einen Markdown-Report generiert.
- **Vorher/Nachher**: dokumentiere mindestens zwei Eval-Runs (vor und nach einer Optimierung), zeige Verbesserung quantitativ.
- Im Portfolio: `stufe-5_anwendungen/5-4-eval-workflow/` mit Code, Reports, Dataset.

## 🎁 Mehrwert-Mini-Projekte

- **Eval-Dataset-Builder-CLI** — kleines Tool, das aus deinen Dokumenten automatisch Test-Fragen generiert (mit menschlicher Validierung).
- **Eval-Dashboard** in Streamlit oder Gradio: zeigt Metriken über die Zeit, wenn du mehrere Eval-Runs gemacht hast.

## 🌱 Open-Source-Pfad

Alle empfohlenen Eval-Tools sind OSS oder haben OSS-Variante. RAGAS, DeepEval, Promptfoo, Anthropic Inspect — komplett ohne Cloud-Cost laufbar. LLM-as-Judge mit lokalem Ollama-Modell (z.B. `qwen2.5:7b`) statt GPT-5 als Judge.

## Outcome-Check

- [ ] Eval-Dataset mit mindestens 50 Test-Cases inkl. Edge Cases
- [ ] Mindestens drei Metriken parallel evaluiert
- [ ] LLM-as-Judge mit Bias-Mitigations
- [ ] Eval-Skript reproduzierbar
- [ ] Vorher/Nachher-Report mit messbarer Verbesserung
- [ ] Capstone-Engineer-Outcome-Schwelle: Faithfulness ≥0.8
