---
title: "RAG-Grundprinzip"
module: "5.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# RAG-Grundprinzip

## Kernidee

RAG (Retrieval-Augmented Generation) ergänzt ein LLM um externe Dokumente in Echtzeit: Dokumente werden einmalig indexiert, bei jeder Anfrage werden relevante Chunks abgerufen und dem LLM als Kontext mitgegeben. So kann das LLM auf eigene Daten antworten, ohne nachtrainiert zu werden.

## Im Detail

RAG funktioniert in drei Schritten:

**Schritt 1 — Indexierung (einmalig):**
- Dokumente in Chunks aufteilen (z.B. 500 Tokens pro Chunk).
- Jeden Chunk in einen Vektor umwandeln (Embedding-Modell).
- Vektoren in einer Vector-Datenbank speichern (pgvector, ChromaDB, etc.).

**Schritt 2 — Retrieval (pro Anfrage):**
- Die User-Query in einen Vektor umwandeln.
- Die k ähnlichsten Chunks in der Vector-DB suchen (Cosine Similarity oder ANN-Algorithmus).
- Die Top-K-Chunks zurückgeben.

**Schritt 3 — Generation (pro Anfrage):**
- LLM bekommt: die originale Query + die Top-K-Chunks als Kontext.
- LLM generiert eine Antwort, die auf den Chunks basiert.
- Optionale Quelle-Zitation: welche Chunks haben die Antwort gestützt?

**Warum RAG statt Fine-Tuning?**
- Fine-Tuning ist teuer (Zeit, Compute, Daten) und veraltet schnell.
- RAG ist dynamisch: neue Dokumente werden einfach indexiert.
- RAG ist transparent: Quellen können angegeben werden.

**Die ca. 10 Stellschrauben:**
Embedding-Modell, Chunk-Größe, Chunk-Overlap, Vector-DB-Wahl, Retrieval-k, Similarity-Threshold, Hybrid-Search, Re-Ranking, Query-Transformation, und Prompt-Design um die Chunks.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Guide | [Pinecone Learning Hub — RAG](https://www.pinecone.io/learn/retrieval-augmented-generation/) | Umfassende Einführung mit Diagrammen |
| 🛠️ Code | [Anthropic — RAG Cookbook](https://github.com/anthropics/anthropic-cookbook) | Praktische Implementierungen mit Claude |

## Teste dein Verständnis

- [ ] Kannst du die drei RAG-Schritte (Indexierung, Retrieval, Generation) in eigenen Worten erklären?
- [ ] Weißt du, warum RAG oft besser als Fine-Tuning für eigene Dokumente ist?
- [ ] Kannst du mindestens drei der ~10 Stellschrauben nennen?
