---
title: "Chunking-Strategien"
module: "5.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Chunking-Strategien

## Kernidee

Wie du ein Dokument in Chunks aufteilst, beeinflusst direkt die Retrieval-Qualität. Zu groß: der Chunk enthält zu viel Rauschen. Zu klein: der Chunk verliert Kontext. Vier gängige Strategien — von naiv bis intelligent.

## Im Detail

**Strategie 1 — Fixed-Size (naiv):**
- Dokument wird in Chunks fester Token-Zahl aufgeteilt (z.B. 500 Tokens).
- Einfach zu implementieren, ignoriert Dokumentstruktur.
- Problem: Sätze werden mittendrin abgeschnitten.
- Chunk-Overlap (z.B. 50 Tokens) kann das lindern.

**Strategie 2 — Recursive Character Splitting (LangChain-Standard):**
- Versucht, an semantisch sinnvollen Stellen zu trennen: zuerst doppelte Leerzeilen, dann Absätze, dann Sätze, dann Zeichen.
- Besser als Fixed-Size, aber immer noch text-strukturbasiert.
- Standard in LangChain `RecursiveCharacterTextSplitter`.

**Strategie 3 — Semantic Chunking (LLM-basiert):**
- LLM oder Embedding-Modell entscheidet, wo Chunks semantisch enden.
- Aufeinander folgende Sätze werden zu einem Chunk, wenn ihre Embeddings ähnlich sind — Grenze, wenn Ähnlichkeit fällt.
- Langsamer und teurer, aber bessere semantische Grenzen.

**Strategie 4 — Document-Aware Chunking:**
- Berücksichtigt das Layout des Dokuments: Kapitel, Überschriften, Tabellen, Listen.
- Für PDFs mit komplexem Layout (z.B. wissenschaftliche Paper, Verträge) wichtig.
- Tools: Unstructured.io, PyMuPDF, LlamaParse.

**Empfehlung für den Start:**
- Prototyp: Recursive Character Splitting mit 512-1024 Tokens, 10% Overlap.
- Vertiefung nach erstem Eval: Semantic Chunking oder Document-Aware je nach Dokument-Typ.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangChain — Text Splitters](https://python.langchain.com/docs/concepts/text_splitters/) | Alle Splitting-Strategien mit Code |
| 📖 Docs | [LlamaIndex — Chunking](https://docs.llamaindex.ai) | LlamaIndex-Varianten |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Fixed-Size-Chunking problematisch ist?
- [ ] Weißt du, was Chunk-Overlap ist und warum es hilft?
- [ ] Für deinen Use-Case: welche Chunking-Strategie würdest du wählen?
