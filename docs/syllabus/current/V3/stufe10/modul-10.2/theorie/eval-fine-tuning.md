---
title: "Eval nach Fine-Tuning"
module: "10.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Eval nach Fine-Tuning

## Kernidee

Eval nach Fine-Tuning ist kein optionaler Schritt — es ist die einzige Methode, um zu wissen, ob das Fine-Tuning tatsächlich geholfen hat und ob dabei allgemeine Fähigkeiten verloren gegangen sind. Ein Modell, das auf der Zielaufgabe besser wird, aber Math und Coding verliert, ist oft wertlos.

## Im Detail

**Die fünf Pflicht-Metriken nach Fine-Tuning:**

**1. Perplexity auf Held-Out-Test-Set**
- Klassische Metrik: je niedriger, desto besser (Modell ist weniger "überrascht" von echten Daten)
- Basis-Check, ob das Training überhaupt sinnvoll war
- Vergleich: Perplexity Base-Modell vs. Fine-getuntes Modell auf deinem Domain-Datensatz

**2. MMLU-Subset für Capability-Prüfung**
- Hat das Fine-Tuning allgemeine Fähigkeiten beschädigt?
- MMLU: 57 Akademische Disziplinen, von STEM bis Humanities
- Wähle mindestens 2-3 relevante MMLU-Subsets und vergleiche Vorher/Nachher
- Red Flag: >5% Rückgang auf MMLU → Catastrophic Forgetting-Risiko

**3. Domain-spezifische Eval-Sets**
- Selbst kuratiert: 50-200 Test-Cases für deine konkrete Aufgabe
- Gold-Standard: menschliche Bewertung auf einem Sample
- Automatisiert: Structured Output-Prüfung, Keyword-Coverage, Metrik-Tests

**4. LLM-as-Judge für Output-Qualität**
- Frontier-Modell (Claude Opus, GPT-5) als Richter: "Welcher Output ist besser, A oder B?"
- Rubrik-basiert: Brand-Voice, Genauigkeit, Vollständigkeit, Format
- Blindtest: Reihenfolge A/B zufällig wechseln, um Position-Bias zu kontrollieren

**5. Vorher-Nachher-Vergleich mit Foundation-Modell als Baseline**
- Immer: Base-Modell (ohne Fine-Tuning) vs. Fine-getuntes Modell auf denselben Test-Cases
- Nur wenn Fine-getuntes Modell klar besser ist → Fine-Tuning war sinnvoll

*Eval-Querschnitt-Anker: Methodik aus `13_querschnitt_eval.md`.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Hugging Face Evaluate](https://huggingface.co/docs/evaluate) | Metriken-Library |
| 🛠️ Tool | [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) | MMLU und viele weitere Benchmarks |

## Teste dein Verständnis

- [ ] Welche fünf Metriken sollte Eval nach Fine-Tuning umfassen?
- [ ] Warum ist MMLU-Eval nach Fine-Tuning Pflicht, auch wenn du nur auf einer Spezialaufgabe trainiert hast?
- [ ] Was ist LLM-as-Judge — und warum muss die Reihenfolge A/B zufällig sein?
