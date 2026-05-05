---
title: "Re-Ranking nach Retrieval"
module: "5.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Re-Ranking nach Retrieval

## Kernidee

Retrieval gibt die Top-K-Chunks zurück — aber nicht immer in der besten Reihenfolge. Ein Cross-Encoder-Reranker sortiert die Kandidaten neu, indem er Query und Chunk gemeinsam betrachtet. Deutlich bessere Qualität, ein zusätzlicher Modell-Aufruf.

## Im Detail

**Warum Retrieval allein nicht reicht:**

Bi-Encoder-Embeddings (Standard-RAG) encoden Query und Chunk getrennt und vergleichen die Vektoren. Das ist schnell, aber ungenau. Ein Cross-Encoder kann Query und Chunk zusammen sehen und feinere semantische Relationen erkennen.

**Re-Ranking-Pattern:**

1. **Retrieval:** Top-50 Chunks per Bi-Encoder (schnell, breit).
2. **Re-Ranking:** Cross-Encoder bewertet jeden der Top-50 neu gegen die Query.
3. **Ergebnis:** Top-5 nach Re-Ranking für den LLM-Kontext.

**Optionen für den Reranker:**

| Modell | Typ | Stärke |
|--------|-----|--------|
| Cohere Rerank 3 | API | Einfach, sehr gut, multilingual |
| BGE Reranker Large | OSS | Lokal, kostenlos, HuggingFace |
| Flashrank | OSS | Sehr klein, schnell |

**Cost-Trade-off:**

- Zusätzlicher API-Aufruf oder lokaler Modell-Aufruf pro Query.
- Für die meisten Use-Cases lohnt es sich: bessere Qualität bei moderaten Kosten.
- BGE Reranker lokal = kein API-Cost.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Cohere Rerank](https://cohere.com/rerank) | API-basiert, einfach zu integrieren |
| 🛠️ Modell | [BGE Reranker auf Hugging Face](https://huggingface.co/BAAI/bge-reranker-large) | OSS, lokal laufbar |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen Bi-Encoder (für Retrieval) und Cross-Encoder (für Re-Ranking) erklären?
- [ ] Weißt du, warum man erst Top-50 retrievet und dann auf Top-5 re-rankt — statt direkt Top-5 zu retrieven?
- [ ] Welchen Reranker würdest du für deinen OSS-Pfad wählen?
