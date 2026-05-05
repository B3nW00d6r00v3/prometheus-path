---
title: "Embedding-Modelle Mai 2026"
module: "5.1"
type: theorie
fast_track: true
effort: "15min"
stability: live
expires: "2026-08"
---

# Embedding-Modelle Mai 2026

## Kernidee

Das Embedding-Modell bestimmt, wie gut Dokumente und Queries semantisch verglichen werden können — es ist die wichtigste Entscheidung in deiner RAG-Pipeline. `ada-002` ist seit 2024 veraltet. Stand Mai 2026 gibt es mindestens fünf bessere Alternativen, je nach Use-Case.

## Im Detail

**Warum `ada-002` nicht mehr:**
`text-embedding-ada-002` war 2022-2023 der Standard. Seit Anfang 2024 gibt es deutlich bessere Modelle mit höherem MTEB-Score, multilingual und multimodal. Neues Projekt mit `ada-002` starten ist ein Red Flag.

**Aktuelle Top-Optionen (Mai 2026):**

| Modell | Anbieter | Highlights | Lizenz |
|--------|----------|------------|--------|
| `text-embedding-3-large` | OpenAI | Ausgewogen, einfach zu nutzen | Proprietär |
| `embed-v4` | Cohere | Multimodal (Text + Bild), multilingual | Proprietär |
| `BGE-M3` | BAAI | Multilingual, MIT-Lizenz, lokal | Open Source |
| `Voyage-3-large` | Voyage AI | Retrieval-optimiert | Proprietär |
| `Qwen3-Embedding-8B` | Alibaba | Top MTEB-Score, OSS | Open Source |

**Entscheidungshilfe:**
- OSS + lokal + kostenlos → BGE-M3 oder Qwen3-Embedding-8B
- Multimodal (Bilder + Text) → Cohere embed-v4
- Einfachster Einstieg mit API → text-embedding-3-large
- Retrieval-Optimierung → Voyage-3-large

**Live-Vergleich:** Die MTEB-Rangliste (Massive Text Embedding Benchmark) ist die Referenz für aktuelle Modell-Rankings.

*Verfallsdatum: August 2026 — Modell-Landschaft ändert sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📊 Benchmark | [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) | Aktuell, nach MTEB-Score sortiert |
| 📖 Guide | [StackAI — Best Embedding Models 2026](https://www.stackai.com/insights/best-embedding-models-for-rag-in-2026-a-comparison-guide) | Praxis-Vergleich mit RAG-Fokus |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum `ada-002` nicht mehr genutzt werden sollte?
- [ ] Welches Embedding-Modell würdest du für deinen Use-Case wählen — und warum?
- [ ] Hast du den MTEB Leaderboard aufgerufen und die Top-5-Modelle angesehen?
