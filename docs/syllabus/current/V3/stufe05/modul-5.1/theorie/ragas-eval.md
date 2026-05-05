---
title: "RAG-Eval mit RAGAS"
module: "5.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# RAG-Eval mit RAGAS

## Kernidee

RAGAS (RAG Assessment) ist die Standard-Library für LLM-as-Judge-basierte RAG-Bewertung. Es misst automatisch, ob Antworten durch Quellen gedeckt sind (Faithfulness), ob sie zur Frage passen (Answer Relevancy) und ob die richtigen Chunks gefunden wurden (Context Precision/Recall).

## Im Detail

**Warum RAGAS statt manuellem Review?**

Bei 20-30 Test-Fragen kannst du Antworten noch manuell beurteilen. Bei 100+ ist das nicht mehr möglich. RAGAS automatisiert die Bewertung per LLM-as-Judge.

**Kern-Metriken:**

| Metrik | Fragestellung | Zielwert |
|--------|--------------|----------|
| **Faithfulness** | Ist die Antwort durch die retrievten Chunks gedeckt? | ≥0.8 für Production |
| **Answer Relevancy** | Beantwortet die Antwort die ursprüngliche Frage? | ≥0.7 |
| **Context Precision** | Sind die retrievten Chunks relevant für die Frage? | ≥0.7 |
| **Context Recall** | Wurden alle relevanten Chunks gefunden? | ≥0.6 |

**Faithfulness ≥0.8** ist die Capstone-Engineer-Outcome-Schwelle.

**Setup:**

```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision

# dataset: Liste von {"question": ..., "answer": ..., "contexts": [...], "ground_truth": ...}
result = evaluate(dataset, metrics=[faithfulness, answer_relevancy, context_precision])
print(result)
```

*Hinweis: Dank Modul 5.0 hast du Eval-Mindset bereits — RAGAS ist hier die RAG-spezifische Vertiefung.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [RAGAS Docs](https://docs.ragas.io) | Vollständige Dokumentation |
| 🛠️ Code | [RAGAS GitHub](https://github.com/explodinggradients/ragas) | Source + Beispiele |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen Faithfulness und Answer Relevancy erklären?
- [ ] Weißt du, was ein Faithfulness-Score von 0.6 bedeutet — und warum ≥0.8 als Production-Schwelle gilt?
- [ ] Hast du RAGAS installiert und auf deinen ersten Test-Fragen laufen lassen?
