---
title: "LlamaIndex — RAG-fokussiert"
module: "5.2"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-08"
---

# LlamaIndex — RAG-fokussiert

## Kernidee

Wenn deine Anwendung primär RAG ist, ist LlamaIndex oft die bessere Wahl als LangChain. Weniger Bloat, mehr Optimierungen für Document-Loading, Indexing-Strategien und Hybrid-Retrieval.

## Im Detail

**Was LlamaIndex besonders gut macht:**

- **Document-Loaders**: viele eingebaute Loader für PDFs, Notion, Confluence, Slack, GitHub, etc.
- **Index-Typen**: Vector Store Index, Summary Index, Knowledge Graph Index, Tree Index — je nach Use-Case.
- **Advanced Retrieval**: HyDE, Query Decomposition, Step-Back Prompting — eingebaut.
- **Weniger Abstraktion als LangChain**: Code ist oft lesbarer für reine RAG-Use-Cases.
- **LlamaParse**: kommerziell, aber einer der besten PDF-Parser (Layout-aware).

**Wann LlamaIndex:**
- Use-Case ist primär RAG (Dokumenten-Suche, Q&A auf Dokumenten).
- Viele verschiedene Datenquellen einbinden (Document-Loaders).
- Advanced-Retrieval-Patterns ohne viel Custom-Code.

**Wann nicht LlamaIndex:**
- Use-Case geht weit über RAG hinaus (komplexe Multi-Agent-Systeme).
- Breite Integrationen für Nicht-RAG-Tasks benötigt (→ LangChain).

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LlamaIndex Docs](https://docs.llamaindex.ai) | Vollständige Dokumentation |
| 🎓 Tutorial | [LlamaIndex Starter Example](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/) | In 10 Minuten zum ersten RAG |

## Teste dein Verständnis

- [ ] Für welchen Use-Case würdest du LlamaIndex statt LangChain wählen — und umgekehrt?
- [ ] Weißt du, was LlamaParse ist und wann es gegenüber einer einfachen PDF-Extraktion sinnvoll ist?
- [ ] Hast du LlamaIndex in einem Beispiel ausprobiert?
