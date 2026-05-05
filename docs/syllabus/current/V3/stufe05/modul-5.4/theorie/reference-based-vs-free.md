---
title: "Reference-based vs. Reference-free Eval"
module: "5.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Reference-based vs. Reference-free Eval

## Kernidee

Reference-based Eval vergleicht mit einer Ground-Truth-Antwort — gut bei eindeutigen Aufgaben. Reference-free Eval bewertet Output-Eigenschaften ohne Vergleich — notwendig für die meisten RAG-Anwendungen, bei denen es keine einzige richtige Antwort gibt.

## Im Detail

**Reference-based Eval:**

- Du hast eine Ground-Truth-Antwort für jeden Test-Case.
- Metriken: BLEU, ROUGE, exact match, F1.
- Gut geeignet für: Klassifikation, Extraktion mit eindeutigen Antworten, Übersetzung.
- **Problem bei RAG:** Auf "Was steht in Kapitel 3 über Chunking?" gibt es viele korrekte Formulierungen. BLEU/ROUGE würden alle außer der exakten Formulierung bestrafen.

**Reference-free Eval:**

- Keine Ground-Truth-Antwort vorhanden.
- Ein anderes Modell (LLM-as-Judge) oder ein Mensch bewertet Output-Eigenschaften.
- Gut geeignet für: Open-ended Generation, RAG, Chat, kreative Tasks.
- **Der Normalfall für Real-World-LLM-Apps.**

**Eigenschaften, die Reference-free bewertet werden:**

- Faithfulness: Ist die Antwort durch die Quellen gedeckt?
- Answer Relevancy: Beantwortet die Antwort die gestellte Frage?
- Sprachqualität: Ist die Antwort auf Deutsch? Grammatikalisch korrekt?
- Sicherheit: Enthält die Antwort keine halluzinierten Fakten?
- Format: Folgt die Antwort dem gewünschten Format?

**Faustregel für dein RAG-System:**

- Wenn du Ground-Truth-Antworten für mindestens 20-30% deiner Test-Cases hast: kombiniere beide Ansätze.
- Wenn du keine Ground-Truth hast: Reference-free mit LLM-as-Judge + RAGAS-Metriken.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Eugene Yan — Eval-Driven Development](https://eugeneyan.com/writing/evals/) | Klare Einführung |
| 📖 Docs | [RAGAS Docs](https://docs.ragas.io) | Reference-free RAG-Metriken |

## Teste dein Verständnis

- [ ] Kannst du in einem Satz erklären, warum BLEU für RAG-Eval ungeeignet ist?
- [ ] Welche Eval-Art (reference-based oder reference-free) passt zu deinem RAG-Anwendungsfall?
- [ ] Nenne drei konkrete Output-Eigenschaften, die du für dein System reference-free evaluieren würdest.
