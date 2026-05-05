---
title: "Multimodales RAG"
module: "5.1"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Multimodales RAG

## Kernidee

Klassisches Text-RAG ignoriert Tabellen, Bilder und Charts in Dokumenten. Multimodales RAG überbrückt das: entweder durch Vision-Embeddings (PDF-Seiten direkt als Bild embedden) oder durch multimodale Embedding-Modelle, die Text und Bild im selben Vektor-Raum verankern.

## Im Detail

**Das Problem:**

PDFs, Präsentationen und technische Dokumente enthalten Bilder, Tabellen, Diagramme. Text-RAG ignoriert diese Elemente komplett. Eine Frage zu einem Chart wird nie beantwortet, weil der Chart nicht indexiert ist.

**Lösungsansätze 2026:**

**1. ColPali (Vision-Embeddings für PDF-Pages):**
- PDF-Seiten werden als Bilder embedded (nicht als Text).
- ColPali ist ein Vision-Language-Modell, das Page-Images direkt embeddet.
- Retrieval: die visuell ähnlichste Seite wird zurückgegeben.
- Vorteil: Layout wird preserviert.

**2. Cohere Embed v4 (multimodal):**
- Text und Bilder landen im selben Embedding-Raum.
- Eine Query kann Text-Chunks und Bild-Chunks gemeinsam retrieven.
- Praktisch für Dokumente mit gemischtem Content.

**3. Document-AI mit Layout-Verständnis:**
- Tools wie Unstructured.io, LlamaParse, Azure Document Intelligence.
- Extraktion von Tabellen als strukturierten Text, Charts als Beschreibungen.
- Dann normales Text-RAG auf dem extrahierten Inhalt.

**Wann multimodales RAG?**
- Deine Dokumente haben viele Bilder, Charts, Tabellen (>20% des Informationsgehalts).
- Standard-Text-RAG gibt schlechte Antworten auf Bild-bezogene Fragen.
- Für die meisten Einsteiger-Use-Cases reicht Text-RAG + Document-AI für Tabellen.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Code | [Anthropic — Vision Cookbook](https://github.com/anthropics/anthropic-cookbook) | Vision-RAG-Beispiele |
| 📖 Artikel | [Cohere Embed v4](https://cohere.com/blog/embed-v4) | Multimodales Embedding-Modell |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Text-RAG bei Chart-Fragen scheitert?
- [ ] Kennst du den Unterschied zwischen ColPali (Page-Level-Embedding) und Cohere Embed v4 (Text+Bild-Raum)?
- [ ] Für deinen Use-Case: enthält dein Datensatz multimodale Inhalte, die du berücksichtigen musst?
