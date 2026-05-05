---
title: "Reference-Based vs. Reference-Free Eval"
module: "5.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Reference-Based vs. Reference-Free Eval

## Kernidee

Es gibt zwei grundlegende Eval-Strategien: Reference-Based vergleicht den Output gegen eine bekannte Ground-Truth-Antwort. Reference-Free bewertet den Output ohne Ground-Truth — durch ein anderes LLM oder einen Menschen. Die meisten echten LLM-Anwendungen sind reference-free, weil es selten eine eindeutige richtige Antwort gibt.

## Im Detail

**Reference-Based Eval:**

- Du hast die Ground-Truth-Antwort (die "richtige" Antwort).
- Der Eval vergleicht die generierte Antwort mit der Ground-Truth.
- Typische Metriken: BLEU, ROUGE, Exact Match, F1-Score.
- Funktioniert nur bei Tasks mit **eindeutigen Antworten**: Klassifikation (Label A oder B), Fakten-Extraktion ("Geburtsjahr von Albert Einstein: 1879"), mathematische Ergebnisse.
- Nachteil: Die meisten realen LLM-Tasks haben keine eindeutige Antwort — Zusammenfassungen, Erklärungen, kreative Texte.

**Reference-Free Eval:**

- Es gibt keine Ground-Truth.
- Ein anderes LLM oder ein Mensch bewertet **Eigenschaften** des Outputs: Sachlichkeit, Vollständigkeit, Sprache, Ton.
- Typische Metriken: LLM-as-Judge-Scores, Human-Ratings.
- Funktioniert für: RAG-Anwendungen, Chat-Systeme, kreative Tasks, die meisten Real-World-LLM-Apps.
- Nachteil: teurer, langsamer, und der Judge-LLM hat eigene Biases.

**Faustregel für die Wahl:**

| Aufgabe | Eval-Typ |
|---------|----------|
| Klassifikation | Reference-Based |
| Fakten-Extraktion | Reference-Based |
| RAG-Antworten | Reference-Free (RAGAS) |
| Chat-Qualität | Reference-Free |
| Kreatives Schreiben | Reference-Free |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Eugene Yan — LLM-as-Judge](https://eugeneyan.com/writing/llm-evaluators/) | Vertiefung Reference-Free-Eval |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum RAG-Eval meist reference-free ist?
- [ ] Weißt du, wann BLEU und ROUGE sinnvoll sind — und wann nicht?
- [ ] Für deinen Use-Case aus 2.3 oder 4.1: welcher Eval-Typ passt?
