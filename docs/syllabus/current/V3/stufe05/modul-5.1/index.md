---
title: "Modul 5.1: RAG modern"
module: "5.1"
type: index
fast_track: true
effort: "🔧 23-35h · 🧮 18-30h · 💼 9-14h"
---

# Modul 5.1: RAG modern

Retrieval-Augmented Generation ist 2026 das wichtigste Pattern für LLM-Anwendungen mit eigenen Daten. Aber: das Standard-Tutorial ("ChromaDB + ada-002 + LangChain") ist 2024-Stand. Dieses Modul lehrt dich modernes RAG: aktuelle Embedding-Modelle (Mai 2026), Vector-DB-Auswahl mit pgvector als Production-Default, Chunking-Strategien inklusive Contextual Retrieval, Hybrid Search, Re-Ranking, multimodales RAG. Praxis-Outcome: dein eigenes RAG-System auf eigenen Dokumenten mit messbarer Eval-Schwelle.

**Aufwand:** 🔧 23-35h · 🧮 18-30h · 💼 9-14h  
**Voraussetzungen:** Stufen 2, 3, Modul 5.0 (Eval-Mini-Block), Stufe 4 Pflicht für 🔧

## Lernziel

Du baust ein lauffähiges RAG-System auf eigenen PDFs/Notizen mit RAGAS-Eval, Faithfulness ≥0.8, dokumentierter Embedding-Modell-Wahl und mindestens einer Optimierungs-Iteration.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [RAG-Grundprinzip](theorie/rag-grundprinzip.md) | ✅ | 15min |
| 2 | [Embedding-Modelle Mai 2026](theorie/embedding-modelle.md) | ✅ | 15min |
| 3 | [Vector-DB-Auswahl 2026](theorie/vector-db-auswahl.md) | ✅ | 15min |
| 4 | [Chunking-Strategien](theorie/chunking-strategien.md) | ✅ | 15min |
| 5 | [Contextual Retrieval (Anthropic 2024)](theorie/contextual-retrieval.md) | ⏭️ | 15min |
| 6 | [Hybrid Search: Vektor + Keyword (BM25)](theorie/hybrid-search.md) | ✅ | 10min |
| 7 | [Re-Ranking nach Retrieval](theorie/reranking.md) | ✅ | 10min |
| 8 | [Query-Transformation als Optimierung](theorie/query-transformation.md) | ⏭️ | 10min |
| 9 | [Multimodales RAG](theorie/multimodales-rag.md) | ⏭️ | 10min |
| 10 | [RAG-Frontier 2026](theorie/rag-frontier.md) | ⏭️ | 30min |
| 11 | [RAG-Eval mit RAGAS](theorie/ragas-eval.md) | ✅ | 15min |
| 12 | [DSGVO und RAG](theorie/dsgvo-rag.md) | ⏭️ | 10min |

## Praxis: RAG auf eigenen Dokumenten mit Eval

- **Datensatz:** 20-50 eigene PDFs / Notizen / Bookmarks (alles ohne PII oder mit anonymisierten Daten).
- **Stack:** Python + LangChain oder LlamaIndex + pgvector (lokal mit Docker) oder ChromaDB + ein modernes Embedding-Modell (BGE-M3 lokal über Hugging Face oder text-embedding-3-large).
- **Pipeline:** Indexierung → Retrieval → Generation mit Streaming.
- **Hybrid Search:** mit BM25 + Vektor + RRF.
- **Re-Ranking:** mit Cohere Rerank oder BGE Reranker.
- **Eval:** RAGAS auf 20-30 Test-Fragen, dokumentierte Faithfulness, Answer Relevancy, Context Precision. *Tipp: Du hast aus Modul 5.0 bereits Test-Case-Anatomie — wende sie an.*
- **Iteration:** mindestens eine Optimierungs-Runde (z.B. anderer Chunk-Size, Contextual Retrieval, anderes Embedding) mit Vorher/Nachher-Eval-Tabelle.
- Im Portfolio: `stufe-5_anwendungen/5-1-rag-system/` mit Code, README, Eval-Report, Architektur-Diagramm.

**Capstone-Engineer:** Das ist der **Start des Capstone-Engineer-Projekts**. Wähle eine Domain, an der du wirklich Interesse hast und an der du in den nächsten 6-12 Monaten arbeiten willst. *Capstone-spezifische Anforderungen siehe `17_capstone_a_engineer.md`.*

## 🎁 Mehrwert-Mini-Projekte

- **RAG auf eigene Notizen** (Obsidian-Vault, Notion-Export, Apple-Notes-Export) — sofort nutzbar als persönlicher Wissens-Assistent.
- **RAG auf Bookmarks** — Pocket/Raindrop-Export indexieren, "warum hatte ich nochmal diesen Artikel gespeichert?".
- **RAG auf Curriculum-Module** (selbstreferenziell, aber nützlich) — frage dein eigenes Curriculum nach Themen.

## 🌱 Open-Source-Pfad

Komplett OSS-Stack: Ollama für Generation (z.B. `qwen2.5:7b`) + BGE-M3 lokal für Embedding (über sentence-transformers oder Ollama) + pgvector lokal (via Docker) + LangChain als Framework. Damit komplett kostenfrei und DSGVO-freundlich. Bonus-Schwierigkeit: BGE Reranker lokal.

## Outcome-Check

- [ ] RAG-System läuft auf eigenen Daten
- [ ] Mindestens 30 indexierte Dokumente, mindestens 20 Test-Fragen
- [ ] RAGAS-Eval durchgeführt mit dokumentierten Werten
- [ ] **Faithfulness ≥0.8** erreicht (Outcome-Schwelle Capstone)
- [ ] Hybrid Search + Re-Ranking implementiert
- [ ] Mindestens eine Optimierungs-Iteration mit Vorher/Nachher
- [ ] Architektur-Diagramm im README
- [ ] **Mindestens ein RAG-Frontier-Pattern** erklärbar (HyDE / Reasoning-Augmented Retrieval / GraphRAG / Late-Interaction / Reranking-Cascade) und für eigenen Use-Case begründet ausgewählt oder verworfen
