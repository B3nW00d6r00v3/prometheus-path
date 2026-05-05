---
title: "Query-Transformation als Optimierung"
module: "5.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
expires: null
---

# Query-Transformation als Optimierung

## Kernidee

Statt die User-Query direkt zu embedden, wird sie zuerst transformiert — erweitert, umformuliert oder in Sub-Queries zerlegt. Damit überbrückt man den sprachlichen Abstand zwischen Fragen und Antworten in Dokumenten.

## Im Detail

**Das Problem:**

Fragen und Antworten klingen oft unterschiedlich. "Wie schnell ist ein Gepard?" klingt anders als "Geparden können bis zu 120 km/h erreichen." Direktes Embedding der Frage findet möglicherweise nicht den besten Chunk.

**Drei Transformations-Methoden:**

**1. HyDE (Hypothetical Document Embeddings):**
- Das LLM generiert eine hypothetische Antwort auf die Frage.
- Die hypothetische Antwort wird embedded (nicht die Frage).
- Antworten klingen sprachlich näher an Dokumenten als Fragen.
- Vertiefung im [RAG-Frontier-Pattern](rag-frontier.md).

**2. Query-Expansion:**
- Aus einer Query werden 3-5 Variationen generiert.
- Alle Variationen werden embedded und retrieven.
- Ergebnisse werden per RRF fusioniert.
- Vorteil: mehr Recall, mehr Noise.

**3. Query-Decomposition:**
- Komplexe Multi-Hop-Query wird in einfachere Sub-Queries zerlegt.
- "Welche Entscheidungen von Unternehmen X im Jahr 2024 hatten Auswirkungen auf Markt Y?" → zwei Sub-Queries.
- Brücke zu Agenten in Stufe 6.

**Wann sinnvoll:**
- HyDE: wenn Query und Dokument-Sprache sehr verschieden sind.
- Expansion: wenn Recall niedrig ist.
- Decomposition: bei komplexen Multi-Hop-Fragen.
- Achtung: jede Transformation kostet einen extra LLM-Aufruf.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LlamaIndex — Advanced Retrieval](https://docs.llamaindex.ai/en/stable/optimizing/advanced_retrieval/advanced_retrieval/) | HyDE, Decomposition, Step-Back |
| 📖 Docs | [LangChain — Query Transformation](https://python.langchain.com/docs/how_to/query_constructor/) | LangChain-Implementierungen |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum HyDE die Query-Document-Lücke schließt?
- [ ] Weißt du, wann Query-Expansion hilft und wann sie schadet (erhöhter Noise)?
- [ ] Für deinen Use-Case: welche Query-Transformation wäre relevant?
