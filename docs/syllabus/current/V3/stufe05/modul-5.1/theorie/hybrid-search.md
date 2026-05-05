---
title: "Hybrid Search: Vektor + Keyword (BM25)"
module: "5.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Hybrid Search: Vektor + Keyword (BM25)

## Kernidee

Reine Vektor-Suche scheitert bei exakten Begriffen wie Produktnamen, Codes oder Eigennamen — weil Embeddings semantisch suchen, nicht lexikalisch. BM25 (klassischer Keyword-Index) ergänzt das. Die Kombination beider über Reciprocal Rank Fusion ist 2026 Standard.

## Im Detail

**Das Problem mit reiner Vektor-Suche:**

Query "Was ist LangChain 0.3?" findet möglicherweise semantisch ähnliche Chunks über "Python Frameworks" — aber nicht den Chunk, der "LangChain 0.3" exakt als Begriff enthält, wenn das Embedding semantisch weit entfernt ist.

**BM25 als Ergänzung:**

BM25 ist ein klassischer Information-Retrieval-Algorithmus (Bag-of-Words + TF-IDF). Er findet Chunks, in denen die Query-Wörter direkt vorkommen. Gut für: Produktnamen, API-Namen, Codes, Eigennamen, Abkürzungen.

**Reciprocal Rank Fusion (RRF) als Kombinations-Algorithmus:**

Beide Rankings (Vektor und BM25) werden fusioniert. Für jedes Dokument:

```
score_rrf = 1/(k + rank_vektor) + 1/(k + rank_bm25)
```

Typischer k-Wert: 60. Das Dokument auf Rang 1 in beiden Rankings bekommt den höchsten kombinierten Score.

**Implementierung:**

- LangChain: `EnsembleRetriever` mit `BM25Retriever` + `VectorStoreRetriever`
- Weaviate: Hybrid Search nativ eingebaut
- Qdrant: Sparse + Dense Hybrid nativ
- pgvector: BM25 über PostgreSQL Full-Text-Search (`tsvector`) kombiniert

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Weaviate — Hybrid Search Explained](https://weaviate.io/blog/hybrid-search-explained) | Gründliche Erklärung mit Visualisierungen |
| 📖 Docs | [Milvus — Hybrid Search](https://milvus.io/docs/multi-vector-search.md) | Implementierungsbeispiele |

## Teste dein Verständnis

- [ ] Kannst du an einem Beispiel erklären, warum Vektor-Suche bei exakten Begriffen versagt?
- [ ] Weißt du, wie RRF die Ergebnisse aus Vektor- und Keyword-Suche kombiniert?
- [ ] Hast du Hybrid Search in deiner RAG-Implementierung vorgesehen?
