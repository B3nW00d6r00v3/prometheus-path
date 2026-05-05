---
title: "Modul 8.4: Recommendation Systems"
module: "8.4"
type: index
fast_track: false
effort: "4-8h"
---

# Modul 8.4: Recommendation Systems

Recommender Systems sind 2026 in vielen Anwendungen unsichtbar präsent — Spotify, Netflix, Amazon, LinkedIn, jedes E-Commerce-System. Klassische Methoden (Collaborative Filtering, Matrix Factorization) sind weiterhin Foundation, moderne Systeme kombinieren sie mit Embeddings und LLMs. Dieses Modul lehrt die Klassiker plus die 2026-Erweiterungen.

**Aufwand:** 🔧 4-8h · 🧮 12-18h · 💼 3-5h
**Voraussetzungen:** Module 8.1–8.3, optional 5.1 (für Embedding-basiertes RecSys)

## Lernziel

Du baust ein Recommender-System auf einem realen Datensatz (z.B. MovieLens), vergleichst klassische und moderne Ansätze, und kennst die typischen Production-Probleme (Cold Start, Diversity).

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Recommendation-Probleme](theorie/recommendation-probleme.md) | ✅ | 10min |
| 2 | [Content-Based Filtering](theorie/content-based-filtering.md) | ✅ | 15min |
| 3 | [Collaborative Filtering](theorie/collaborative-filtering.md) | ✅ | 15min |
| 4 | [Matrix Factorization](theorie/matrix-factorization.md) | ✅ | 20min |
| 5 | [Cold-Start-Problem](theorie/cold-start.md) | ✅ | 15min |
| 6 | [Hybrid Recommender](theorie/hybrid-recommender.md) | ✅ | 10min |
| 7 | [Deep Learning für RecSys](theorie/deep-learning-recsys.md) | ⏭️ | 20min |
| 8 | [LLM-basierte Recommender](theorie/llm-recsys.md) | ⏭️ | 15min |
| 9 | [Sequential Recommendation](theorie/sequential-recommendation.md) | ⏭️ | 15min |
| 10 | [RecSys-Eval-Metriken](theorie/recsys-metriken.md) | ✅ | 15min |
| 11 | [Diversity vs. Relevance Trade-off](theorie/diversity-relevance.md) | ✅ | 10min |
| 12 | [Embedding-basierter Recommender](theorie/embedding-recommender.md) | ✅ | 15min |

## Praxis: Hauptprojekt — Recommender auf MovieLens oder eigenen Daten

Wähle einen Datensatz:
- MovieLens (Klassiker, gut dokumentiert)
- Eigene Daten (Spotify-Listening-History, Bookmark-Klicks, Buch-Bewertungen)

**Anforderungen:**
- **Mindestens drei Approaches** vergleichen: Content-Based, Collaborative Filtering, Matrix Factorization (oder modernes Two-Tower).
- **Cold-Start-Behandlung**: definiere und teste Strategien für neue Items und User.
- **Eval mit Precision@K, Recall@K, NDCG**.
- **Diversity-Analyse**: zeigt dein bestes Modell genug Variation oder bleibt es in Bubbles?
- **Bonus**: ein LLM-basierter Recommender als Vergleich (z.B. mit Claude/GPT, das User-Profil + Item-Liste bekommt und Top-N empfiehlt).
- Im Portfolio: `stufe-8_klassisches-ml/8-4-recommender/` mit Notebook, Vergleichstabelle, Beispiel-Empfehlungen.

## 🎁 Mehrwert-Mini-Projekt

**Eigener Buch-Recommender** für persönliche Lese-Liste — mit eigenen Bewertungen aus Goodreads-Export oder ähnlichem.

## 🌱 Open-Source-Pfad

- [Surprise](https://surpriselib.com) (Klassiker für klassisches RecSys — didaktisch wertvoll).
- [LightFM](https://github.com/lyst/lightfm) (Hybrid Recommender — funktioniert stabil für Lernzwecke).
- [Microsoft Recommenders](https://github.com/microsoft/recommenders) (Best Practices Library — aktiv gepflegt, empfohlen als primäre Referenz).
- [NVIDIA Merlin](https://github.com/NVIDIA-Merlin) (Production-Grade RecSys-Framework — GPU-optimiert).
- pgvector lokal für embedding-basierten Approach.

## Outcome-Check

- [ ] Mindestens drei RecSys-Approaches verglichen
- [ ] Cold-Start-Strategie definiert
- [ ] Eval mit Precision@K, Recall@K, NDCG
- [ ] Diversity-Analyse
- [ ] Beispiel-Empfehlungen für Test-User dokumentiert
