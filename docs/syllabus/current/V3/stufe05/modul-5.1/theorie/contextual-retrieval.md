---
title: "Contextual Retrieval (Anthropic 2024)"
module: "5.1"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-08"
---

# Contextual Retrieval (Anthropic 2024)

## Kernidee

Vor dem Embedding wird jeder Chunk um eine kurze, KI-generierte Kontext-Beschreibung ergänzt — z.B. "Dieser Chunk stammt aus Kapitel 3 von Dokument X und beschreibt den Unterschied zwischen RAG und Fine-Tuning." Das verbessert die Retrieval-Qualität um 35-49%, weil Chunks im Kontext ihres Dokuments besser gefunden werden.

## Im Detail

**Das Problem:**

Chunks verlieren beim Indexieren ihren Dokumentkontext. Ein Chunk, der nur "Es gibt drei Methoden: A, B und C." enthält, ist ohne Wissen des umgebenden Texts schwer zu retrieven.

**Die Lösung — Contextual Retrieval:**

Vor der Indexierung wird für jeden Chunk ein LLM-Aufruf gemacht, der eine kurze Kontext-Beschreibung generiert:

```
Dokument-Kontext: [Vollständiger Dokument-Text oder Zusammenfassung]

Chunk: [Text des Chunks]

Aufgabe: Schreibe in 2-3 Sätzen, worum es in diesem Chunk geht und wie er sich in das Gesamtdokument einfügt. 
Sei so präzise und wiedererkennbar wie möglich.
```

Der generierte Kontext wird dem Chunk vorangestellt: `{kontext}\n\n{chunk}`. Dann wird der kombinierte Text embedded.

**Ergebnis:** 35-49% bessere Retrieval-Qualität laut Anthropic-Benchmark.

**Cost-Trade-off:**

- Ein LLM-Aufruf pro Chunk bei der Indexierung.
- Mit Prompt Caching (Dokument-Kontext wird gecacht) drastisch günstiger.
- Einmalige Indexierungs-Kosten — kein Runtime-Overhead.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) | Original-Ankündigung mit Benchmark-Zahlen |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Chunks ohne Kontext schwerer zu retrieven sind?
- [ ] Weißt du, wie Prompt Caching die Kosten von Contextual Retrieval senkt?
- [ ] Hast du den Anthropic-Artikel gelesen und die Benchmark-Zahlen verstanden?
