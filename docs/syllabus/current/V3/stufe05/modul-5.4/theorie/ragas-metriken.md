---
title: "RAG-spezifische Metriken (RAGAS-Tiefe)"
module: "5.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# RAG-spezifische Metriken (RAGAS-Tiefe)

## Kernidee

RAGAS liefert vier Kern-Metriken für RAG-Evaluation, die zusammen ein vollständiges Bild geben: Faithfulness misst Halluzination, Answer Relevancy die Frage-Antwort-Übereinstimmung, Context Precision und Context Recall die Qualität des Retrievals.

## Im Detail

Du hast in Modul 5.1 RAGAS-Grundlagen kennengelernt. Hier die Tiefe:

**Faithfulness (Primär-Metrik):**
- Misst: Ist die Antwort vollständig durch die gefundenen Chunks gedeckt?
- Methodik: RAGAS zerlegt die Antwort in atomare Aussagen, prüft jede gegen den Kontext.
- Score 1.0: jede Aussage durch Kontext belegt. Score 0.0: keine Aussage belegt (Halluzination).
- **Outcome-Schwelle: ≥0.8** für Production-tauglich (Capstone-Engineer-Anforderung).

**Answer Relevancy:**
- Misst: Beantwortet die Antwort die gestellte Frage?
- Methodik: RAGAS generiert hypothetische Fragen aus der Antwort, vergleicht Embedding-Ähnlichkeit zur Original-Frage.
- Fängt ab: Antworten, die fachlich korrekt aber thematisch vorbei sind.

**Context Precision:**
- Misst: Wie viele der gefundenen Chunks sind tatsächlich relevant?
- Hohe Precision: System findet wenige, aber sehr relevante Chunks.
- Niedrige Precision: System findet viele Chunks, davon viele irrelevant (Rauschen im Kontext).

**Context Recall:**
- Misst: Findet das System alle relevanten Informationen aus dem Corpus?
- Setzt Ground-Truth voraus (du musst wissen, welche Dokumente die Antwort enthalten).
- Hoher Recall: System findet alles. Niedriger Recall: wichtige Informationen fehlen.

**Das Präzisions-Recall-Trade-off bei Retrieval:**

| Strategie | Precision | Recall |
|-----------|-----------|--------|
| Sehr wenige Chunks (Top-3) | Hoch | Niedrig |
| Viele Chunks (Top-20) | Niedrig | Hoch |
| Hybrid Search + Reranking | Ausgewogen | Ausgewogen |

**Context Utilization (zusätzliche Metrik):**
- Misst: Nutzt das LLM den gefundenen Kontext, oder ignoriert es ihn?
- Praktisches Beispiel: System findet perfekte Chunks, antwortet aber aus Vorwissen statt Kontext. Faithfulness: niedrig. Context Utilization: niedrig.

**Custom-Metrik für eigenen Use-Case:**

Neben den Standard-RAGAS-Metriken: definiere eine Custom-Metrik, die für deinen Use-Case relevant ist. Beispiele:
- "Antwortet auf Deutsch" (Sprach-Check)
- "Nennt mindestens eine Quelle" (Quellenangabe-Check)
- "Enthält keine personenbezogenen Daten" (DSGVO-Check)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [RAGAS Metrics](https://docs.ragas.io/en/stable/concepts/metrics/index.html) | Vollständige Metrik-Dokumentation |
| 📖 Docs | [RAGAS Docs](https://docs.ragas.io) | Einstieg und Quickstart |

## Teste dein Verständnis

- [ ] Kannst du Faithfulness und Answer Relevancy in je einem Satz unterscheiden?
- [ ] Was ist der Unterschied zwischen Context Precision und Context Recall?
- [ ] Welche Custom-Metrik würdest du für deinen RAG-Use-Case definieren — und warum?
