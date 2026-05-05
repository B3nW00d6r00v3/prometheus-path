---
title: "LLM-as-Judge in der Tiefe"
module: "5.4"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# LLM-as-Judge in der Tiefe

## Kernidee

LLM-as-Judge ist 2026 Pflicht-Wissen — aber mit drei kritischen Fallen: Position-Bias, Self-Preference und fehlende Kalibrierung. Wer diese Fallen nicht kennt und aktiv mitigt, baut eine Evaluation, die systematisch falsche Ergebnisse produziert.

## Im Detail

**Wie LLM-as-Judge funktioniert:**

Ein stärkeres (oder unabhängiges) LLM bewertet den Output eines anderen Modells gegen Kriterien. Minimal-Pattern aus Modul 5.0 hier erweitert:

```python
judge_prompt = """
Du bist ein objektiver Evaluator für RAG-System-Antworten.

FRAGE: {question}
KONTEXT (aus Dokumenten): {context}
ANTWORT DES SYSTEMS: {answer}

Bewerte die Antwort nach folgenden Kriterien (jeweils 1-5):
1. Faithfulness: Ist die Antwort vollständig durch den Kontext gedeckt?
2. Answer Relevancy: Beantwortet die Antwort die Frage?
3. Sprachqualität: Ist die Antwort klar und auf Deutsch?

Gib deine Bewertung als JSON zurück:
{"faithfulness": 4, "relevancy": 5, "sprachqualitaet": 3, "begruendung": "..."}
"""
```

**Die drei kritischen Fallen:**

**1. Position-Bias:**
Bei paarweisen Vergleichen ("Antwort A oder Antwort B?") tendieren LLMs dazu, die zuerst genannte Antwort zu bevorzugen, unabhängig von der Qualität.

*Mitigation:* Pairs randomisieren — jedes Paar in beiden Reihenfolgen evaluieren, Median nehmen.

**2. Self-Preference:**
Ein LLM-Judge bewertet Outputs desselben Modells systematisch besser als Outputs anderer Modelle.

*Mitigation:* Anderes Modell als Judge als Subject-Modell verwenden. Wenn GPT-5 dein System ist, nimm Claude als Judge — und umgekehrt.

**3. Fehlende Kalibrierung:**
"4/5" bedeutet für verschiedene Judge-Prompts Unterschiedliches. Ohne Kalibrierung sind Schwellenwerte wie "Faithfulness ≥0.8" willkürlich.

*Mitigation:* Kalibriere auf 50-100 menschlich annotierten Beispielen. Zeige dem Judge Anker-Beispiele für jede Score-Stufe ("Eine Faithfulness von 5 sieht so aus: ..., eine von 1 so: ...").

**Strukturiertes Evaluations-Setup:**

```python
results = []
for test_case in eval_dataset:
    # Variante A als erste
    score_a_first = judge(
        question=test_case.input,
        answer_a=response_a,
        answer_b=response_b
    )
    # Variante A als zweite (Position-Bias-Kontrolle)
    score_a_second = judge(
        question=test_case.input,
        answer_a=response_b,
        answer_b=response_a
    )
    # Konsistenz prüfen
    consistent = score_a_first == (not score_a_second)
    results.append({"consistent": consistent, ...})
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Eugene Yan — LLM-as-Judge](https://eugeneyan.com/writing/llm-evaluators/) | Beste Einführung inkl. Bias-Diskussion |
| 📖 Docs | [Anthropic — LLM-as-Judge Best Practices](https://www.anthropic.com) | Anthropic-Perspektive |

## Teste dein Verständnis

- [ ] Kannst du Position-Bias in einem Satz erklären und eine Mitigation nennen?
- [ ] Warum ist es problematisch, dasselbe Modell als Judge und Subject zu nutzen?
- [ ] Wie würdest du deinen Judge-Prompt auf 50 menschlich annotierten Beispielen kalibrieren?
