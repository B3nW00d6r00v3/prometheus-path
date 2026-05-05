# Stufe 5: Anwendungen bauen

**Aufwand gesamt:** 🔧 60-100h · 🧮 50-80h · 💼 25-40h
**Voraussetzungen:** Stufen 1-3, optional Stufe 4
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Stufe 5 ist die erste Production-relevante Stufe. Hier baust du **echte KI-Anwendungen**: RAG-Systeme mit modernen Embedding-Modellen, LLM-Frameworks im Vergleich, MCP in der Praxis, Anwendungs-Eval mit Schwellen-werten, Frontend für LLM-Apps. Hier startet auch der **Capstone für Track A (Engineer)** — alles was du in 5.1 baust, wird in Stufen 6, 10 erweitert und gehärtet.

**Ergebnis nach Stufe 5:**
- Lauffähiges RAG-System auf eigenen Daten mit RAGAS-Eval (Schwelle ≥0.8 Faithfulness).
- Eigener MCP-Server, mindestens einer in Production-tauglichem Zustand.
- Frontend für deine LLM-App (Streamlit oder Vercel AI SDK).
- 🔧: Capstone-Engineer-Projekt gestartet, mit GitHub-Repo und ersten Commits.

---

## Modul 5.1: RAG modern

Retrieval-Augmented Generation ist 2026 das wichtigste Pattern für LLM-Anwendungen mit eigenen Daten. Aber: das Standard-Tutorial ("ChromaDB + ada-002 + LangChain") ist 2024-Stand. Dieses Modul lehrt dich modernes RAG: aktuelle Embedding-Modelle (Mai 2026), Vector-DB-Auswahl mit pgvector als Production-Default, Chunking-Strategien inklusive Contextual Retrieval, Hybrid Search, Re-Ranking, multimodales RAG. Praxis-Outcome: dein eigenes RAG-System auf eigenen Dokumenten mit messbarer Eval-Schwelle.

**Aufwand:** 🔧 20-30h · 🧮 15-25h · 💼 8-12h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Stufen 2, 3, optional 4

### Lernziel
Du baust ein lauffähiges RAG-System auf eigenen PDFs/Notizen mit RAGAS-Eval, Faithfulness ≥0.8, dokumentierter Embedding-Modell-Wahl und mindestens einer Optimierungs-Iteration.

### Theorie

- 🟢 **RAG-Grundprinzip** — drei Schritte: (1) Indexierung (Dokumente chunken, embedden, in Vector-DB speichern). (2) Retrieval (Query embedden, ähnlichste Chunks finden). (3) Generation (LLM bekommt Query + Chunks als Kontext, generiert Antwort). Klingt einfach, hat in der Praxis ~10 Stellschrauben. [Pinecone Learning Hub — RAG](https://www.pinecone.io/learn/retrieval-augmented-generation/) · [Anthropic — RAG Cookbook](https://github.com/anthropics/anthropic-cookbook)

- 🔄 **Embedding-Modelle Mai 2026** — der Klassiker `ada-002` ist seit Anfang 2024 abgelöst und sollte nicht mehr genutzt werden. Aktuelle Top-Optionen: `text-embedding-3-large` (OpenAI, ausgewogen), Cohere `embed-v4` (multimodal, multilingual), `BGE-M3` (Open-Source, multilingual, MIT-Lizenz), `Voyage-3-large` (retrieval-optimiert), `Qwen3-Embedding-8B` (top MTEB-Score, OSS). Live-Quelle: [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) · [StackAI — Best Embedding Models 2026](https://www.stackai.com/insights/best-embedding-models-for-rag-in-2026-a-comparison-guide)

- 🔄 **Vector-DB-Auswahl 2026** — kein Pinecone-Default mehr. Faustregel: für <5M Vektoren mit existierender Postgres-Infra ist **pgvector der pragmatischste Weg**. Andere Optionen: ChromaDB (Prototyping, lokal), Qdrant (Performance, OSS), Weaviate (Hybrid Search nativ), Pinecone (managed, schnell zu Production), Milvus/Zilliz (massive scale). [pgvector](https://github.com/pgvector/pgvector) · [Cloudmagazin — pgvector vs Alternativen 2026](https://www.cloudmagazin.com)

- 🟢 **Chunking-Strategien** — naive Fixed-Size (z.B. 500 Tokens), Recursive Character Splitting (LangChain-Standard), Semantic Chunking (LLM-basiert, langsamer aber besser), Document-aware Chunking (PDF-Layout berücksichtigen). [LangChain — Text Splitters](https://python.langchain.com/docs/concepts/text_splitters/) · [LlamaIndex — Chunking](https://docs.llamaindex.ai)

- 🔄 **Contextual Retrieval (Anthropic 2024)** — vor dem Embedding wird jeder Chunk um eine kurze KI-generierte Kontext-Beschreibung ergänzt ("Dieser Chunk ist Teil von Dokument X, Kapitel Y, behandelt Z"). Verbessert Retrieval-Qualität um 35-49%. Cost-Trade-off: KI-Aufruf pro Chunk bei Indexierung. Mit Prompt Caching günstig. [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval)

- 🟢 **Hybrid Search: Vektor + Keyword (BM25)** — reine Vektor-Suche scheitert bei exakten Begriffen (Produktnamen, Codes, Eigennamen). BM25 (Keyword-Index) ergänzt das. Kombinationsalgorithmus: Reciprocal Rank Fusion (RRF). Standard 2026. [Weaviate — Hybrid Search Explained](https://weaviate.io/blog/hybrid-search-explained) · [Milvus — Hybrid Search](https://milvus.io/docs/multi-vector-search.md)

- 🟢 **Re-Ranking nach Retrieval** — die Top-K-Ergebnisse aus Vector-Search werden mit einem Cross-Encoder (z.B. Cohere Rerank, BGE Reranker) neu sortiert. Cost-Trade-off: zusätzlicher Modell-Aufruf, aber deutlich bessere Qualität. [Cohere Rerank](https://cohere.com/rerank) · [BGE Reranker auf Hugging Face](https://huggingface.co/BAAI/bge-reranker-large)

- 🟢 **Query-Transformation als Optimierung** — HyDE (Hypothetical Document Embeddings: LLM generiert hypothetische Antwort, die dann embedded wird), Query-Expansion (mehrere Variationen der Query), Query-Decomposition (komplexe Query in Subqueries zerlegen). Für anspruchsvolle Use-Cases. [LlamaIndex — Advanced Retrieval](https://docs.llamaindex.ai/en/stable/optimizing/advanced_retrieval/advanced_retrieval/) · [LangChain — Query Transformation](https://python.langchain.com/docs/how_to/query_constructor/)

- 🔄 **Multimodales RAG** — moderne Dokumente enthalten Tabellen, Bilder, Charts. Klassisches Text-RAG ignoriert das. Optionen 2026: ColPali (Vision-Embeddings für PDF-Pages), Cohere Embed v4 (multimodal: Text + Bild im selben Embedding-Raum), Document-AI mit Layout-Verständnis. [Anthropic — Vision Cookbook](https://github.com/anthropics/anthropic-cookbook) · [Cohere Embed v4](https://cohere.com/blog/embed-v4)

- 🟢 **RAG-Eval mit RAGAS** — RAGAS (RAG Assessment) ist die Standard-Library für LLM-as-Judge-basierte RAG-Bewertung. Kern-Metriken: **Faithfulness** (ist Antwort durch Quellen gedeckt?), **Answer Relevancy** (passt Antwort zur Frage?), **Context Precision/Recall** (sind die richtigen Chunks gefunden worden?). Outcome-Schwellen: produktiv-tauglich ab Faithfulness ≥0.8. [RAGAS Docs](https://docs.ragas.io) · [RAGAS GitHub](https://github.com/explodinggradients/ragas)

- 🟢 **DSGVO und RAG** — wenn deine Dokumente personenbezogene Daten enthalten: (1) Auftragsverarbeitungs-Vertrag mit Embedding-Provider oder OSS-Embedding lokal. (2) Right-to-be-Forgotten: Lösch-Pfad für Embeddings — pgvector erlaubt einfaches DELETE per WHERE-Klausel, ChromaDB/Pinecone schwieriger. (3) Audit-Trail welche Quellen welche Antwort generierten. [BfDI — KI und Datenschutz](https://www.bfdi.bund.de)

### Praxis: Hauptprojekt — RAG auf eigenen Dokumenten mit Eval

- **Datensatz:** 20-50 eigene PDFs / Notizen / Bookmarks (alles ohne PII oder mit anonymisierten Daten).
- **Stack:** Python + LangChain oder LlamaIndex + pgvector (lokal mit Docker) oder ChromaDB + ein modernes Embedding-Modell (BGE-M3 lokal über Hugging Face oder text-embedding-3-large).
- **Pipeline:** Indexierung → Retrieval → Generation mit Streaming.
- **Hybrid Search:** mit BM25 + Vektor + RRF.
- **Re-Ranking:** mit Cohere Rerank oder BGE Reranker.
- **Eval:** RAGAS auf 20-30 Test-Fragen, dokumentierte Faithfulness, Answer Relevancy, Context Precision.
- **Iteration:** mindestens eine Optimierungs-Runde (z.B. anderer Chunk-Size, Contextual Retrieval, anderes Embedding) mit Vorher/Nachher-Eval-Tabelle.
- Im Portfolio: `stufe-5_anwendungen/5-1-rag-system/` mit Code, README, Eval-Report, Architektur-Diagramm.

**Capstone-Engineer:** Das ist der **Start des Capstone-Engineer-Projekts**. Wähle eine Domain, an der du wirklich Interesse hast und an der du in den nächsten 6-12 Monaten arbeiten willst.

### 🎁 Mehrwert-Mini-Projekte
- **RAG auf eigene Notizen** (Obsidian-Vault, Notion-Export, Apple-Notes-Export) — sofort nutzbar als persönlicher Wissens-Assistent.
- **RAG auf Bookmarks** — Pocket/Raindrop-Export indexieren, "warum hatte ich nochmal diesen Artikel gespeichert?".
- **RAG auf Curriculum-Module** (selbstreferenziell, aber nützlich) — frage dein eigenes Curriculum nach Themen.

### 🌱 Open-Source-Pfad
Komplett OSS-Stack: Ollama für Generation (z.B. `qwen2.5:7b`) + BGE-M3 lokal für Embedding (über sentence-transformers oder Ollama) + pgvector lokal (via Docker) + LangChain als Framework. Damit komplett kostenfrei und DSGVO-freundlich. Bonus-Schwierigkeit: BGE Reranker lokal.

### Outcome-Check
- [ ] RAG-System läuft auf eigenen Daten
- [ ] Mindestens 30 indexierte Dokumente, mindestens 20 Test-Fragen
- [ ] RAGAS-Eval durchgeführt mit dokumentierten Werten
- [ ] **Faithfulness ≥0.8** erreicht (Outcome-Schwelle Capstone)
- [ ] Hybrid Search + Re-Ranking implementiert
- [ ] Mindestens eine Optimierungs-Iteration mit Vorher/Nachher
- [ ] Architektur-Diagramm im README

---

## Modul 5.2: LLM-Frameworks im Vergleich

LangChain ist 2026 nicht mehr der unumstrittene Standard. Die Framework-Landschaft hat sich fragmentiert: LangChain für breite Orchestrierung, LlamaIndex für RAG-Spezial, PydanticAI für Type-Safe-Agents, DSPy für programmatisches Prompt-Optimieren. Dieses Modul lehrt dich, **bewusst zu wählen** statt blind LangChain zu nehmen — und Pattern *unter* den Frameworks zu verstehen, damit du nicht Vendor-locked bist.

**Aufwand:** 🔧 12-18h · 🧮 8-12h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.5, 2.7, 5.1

### Lernziel
Du hast dasselbe RAG- oder Chain-Beispiel in mindestens zwei Frameworks implementiert und kannst Stärken/Schwächen begründet vergleichen. Du verstehst Pattern, die unter allen Frameworks gleich sind.

### Theorie

- 🟢 **Frameworks vs. SDKs vs. Pattern** — drei Abstraktions-Ebenen: (1) **SDK** (anthropic-sdk, openai-sdk) ist nah am API. (2) **Framework** (LangChain, LlamaIndex) bietet Orchestrierung, Memory, Chains, Agents. (3) **Pattern** sind die Konzepte (Prompt-Composition, Chain-of-Thought, ReAct, Tool Use). Wer nur Frameworks lernt, ist Vendor-locked. Wer nur SDKs, baut viel selbst neu.

- 🔄 **LangChain — Stärken und Schwächen 2026** — größte Bibliothek, viele Integrationen (alle Vector-DBs, Frameworks, Provider), aber: viele Breaking Changes 2024-2025, hohe Abstraktions-Komplexität, Production-Stabilität ist 2026-Kontroverse-Thema. Stark wenn: viele Integrationen aus der Box, schnelle Prototypen. Schwach wenn: Stabilität, Code-Wartbarkeit, kleine Apps mit wenig Komplexität. [LangChain Docs](https://python.langchain.com) · [LangChain Academy (kostenlos)](https://academy.langchain.com)

- 🔄 **LlamaIndex — RAG-fokussiert** — wenn deine App primär RAG ist, ist LlamaIndex oft die bessere Wahl. Mehr Optimierungen für Document-Loading, Indexing-Strategien, Hybrid-Retrieval. Weniger Bloat als LangChain. [LlamaIndex Docs](https://docs.llamaindex.ai) · [LlamaIndex Tutorials](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/)

- 🔄 **PydanticAI — Type-Safe Agents** — neuere Library (2024 von Pydantic-Team), Schwerpunkt auf Type Safety, Pydantic-native Tool-Definitionen, klare Abstraktionen. Ideal für 🔧, die Production-Code schreiben. [PydanticAI Docs](https://ai.pydantic.dev)

- 🔄 **DSPy — Programmatisches Prompt-Optimieren** — von Stanford, ungewöhnlicher Ansatz: statt Prompts manuell zu schreiben, definierst du Signaturen ("Input X → Output Y"), DSPy optimiert die Prompts automatisch gegen Eval-Metriken. Lernkurve steiler, aber 🧮 finden es wertvoll. [DSPy Docs](https://dspy.ai)

- 🔄 **Haystack — Enterprise-Fokus** — von deepset, älter als LangChain, sehr stabil, Pipeline-First-Ansatz, gute deutschsprachige Community. Beliebt im Enterprise-Kontext. [Haystack Docs](https://docs.haystack.deepset.ai)

- 🔄 **Provider-Abstraktion: LiteLLM und OpenRouter** — orthogonal zu Frameworks: vereinheitlichen den API-Call gegen verschiedene LLM-Provider. LiteLLM für Code-Integration, OpenRouter als Service mit Cost-Optimierung und einer einzigen Rechnung. Beide unverzichtbar für Multi-Model-Routing aus 2.5. [LiteLLM Docs](https://docs.litellm.ai) · [OpenRouter](https://openrouter.ai)

- 🔄 **Vendor-SDKs als ernstzunehmende Alternative 2026** — Claude Agent SDK, OpenAI Agents SDK, Google ADK sind 2025/2026 stark gewachsen. Statt Framework + Provider-SDK kannst du Vendor-SDK nutzen. Trade-off: weniger Abstraktion, dafür Vendor-Lock-in und schlankerer Code. [Anthropic Agent SDK](https://docs.claude.com/en/api/agent-sdk) · [OpenAI Agents SDK](https://github.com/openai/openai-agents-python)

- 🟢 **Pattern, die unter allen Frameworks gleich sind** — Chain-Composition (mehrere Schritte verketten), Memory (Conversation-State zwischen Turns), Streaming, Tool/Function Calling, Structured Outputs. Wer diese Pattern versteht, kann zwischen Frameworks wechseln ohne von Null anzufangen.

- 🟢 **Wann brauchst du überhaupt ein Framework?** — Faustregel: für einzelne Prompts und einfache Chains reichen Provider-SDKs + ein paar Helper-Funktionen. Framework lohnt sich ab: mehrstufige Workflows, Memory-Management, Tool-Use-Orchestrierung, Multi-Model-Routing in komplexen Apps. Viele 2024-Apps wären 2026 schlanker als reine SDK-Implementierung.

### Praxis: Hauptprojekt — Dasselbe Beispiel in zwei Frameworks

- Wähle einen konkreten Use-Case (z.B. "Dokument-Q&A mit Memory", oder Erweiterung deines RAG-Systems aus 5.1).
- Implementiere ihn **zwei Mal** in unterschiedlichen Frameworks:
 - Variante A: LangChain
 - Variante B: LlamaIndex *oder* PydanticAI *oder* direkter SDK-Code mit LiteLLM
- Vergleiche: Lines of Code, Lesbarkeit, Performance (Token-Verbrauch, Latenz), Wartbarkeit (was passiert, wenn ein Anforderungs-Wechsel kommt?).
- Schreibe einen kurzen Vergleichs-Bericht: welches Framework für welchen Use-Case?
- Im Portfolio: `stufe-5_anwendungen/5-2-framework-vergleich/`.

### 🎁 Mehrwert-Mini-Projekt
**Persönliche Framework-Decision-Matrix** als Markdown: für welche Use-Case-Kategorie nimmst du welches Framework? Mit Begründung. Wert: bei jedem neuen Projekt eine Minute statt eine Stunde Recherche.

### 🌱 Open-Source-Pfad
Alle genannten Frameworks sind OSS — kein zusätzlicher OSS-Pfad nötig. Bonus: Implementiere die Variante B als reines SDK-Code mit Ollama (kein Framework), um zu sehen wie viel "magisch" das Framework macht.

### Outcome-Check
- [ ] Zwei Implementierungen desselben Use-Cases in zwei Frameworks
- [ ] Beide lauffähig mit vergleichbarem Output
- [ ] Vergleichs-Tabelle: Lines of Code, Latenz, Token-Verbrauch
- [ ] Framework-Decision-Matrix für eigene Zwecke

---

## Modul 5.3: MCP in der Praxis

In Modul 2.5 hast du MCP konzeptionell verstanden. Hier baust du jetzt einen **eigenen MCP-Server** und konsumierst MCP-Server, die andere bereitstellen. MCP ist 2026 Industriestandard mit über 9.400 Servern in der öffentlichen Registry — wer Agents oder LLM-Apps baut, muss MCP können. Diese Praxis-Erfahrung ist die Grundlage für Stufe 6 (Agenten).

**Aufwand:** 🔧 10-15h · 🧮 8-12h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 2.5, 2.7, 5.1

### Lernziel
Du hast einen funktionierenden MCP-Server gebaut (z.B. für eigene Datenquelle), und du hast in deiner LLM-App mindestens drei MCP-Server konsumiert (z.B. Filesystem, Postgres, GitHub).

### Theorie

- 🔄 **MCP-Architektur in der Tiefe** — drei Komponenten: (1) **Host** (z.B. Claude Desktop, Cursor, deine eigene App) — der LLM-Client. (2) **Client** im Host für Verbindung zu Servern. (3) **Server** — exponieren Tools, Resources, Prompts. Kommunikation über JSON-RPC 2.0, Transports: stdio (lokal) oder HTTP/SSE (remote). [MCP Specification](https://modelcontextprotocol.io/specification) · [Anthropic — MCP Architecture](https://docs.claude.com/en/docs/agents-and-tools/mcp)

- 🟢 **MCP-Primitives: Tools, Resources, Prompts** — drei Konzepte: **Tools** sind ausführbare Funktionen (z.B. `query_database`, `send_email`). **Resources** sind Daten zum Lesen (z.B. Dateien, DB-Records). **Prompts** sind wiederverwendbare Prompt-Templates, die Server bereitstellen. [MCP Concepts](https://modelcontextprotocol.io/docs/concepts/architecture)

- 🔄 **Public MCP Registry und Ecosystem 2026** — über 9.400 Server in der öffentlichen Registry, monatlich +18% Wachstum. Wichtige Server: GitHub, Postgres, Filesystem, Slack, Notion, Stripe, AWS, Brave Search, Puppeteer. [Public MCP Servers](https://github.com/modelcontextprotocol/servers) · [MCP Server-Übersicht](https://modelcontextprotocol.io/examples)

- 🔄 **MCP-Clients 2026** — Claude Desktop (nativ), Cursor (nativ seit 2024), Windsurf, Zed, JetBrains AI Assistant, Vercel AI SDK, OpenAI Agents SDK. Praktisch jedes ernstzunehmende Agent-Framework hat MCP-Support. [Cursor MCP Docs](https://docs.cursor.com)

- 🟢 **Eigenen MCP-Server bauen — die SDKs** — offizielle SDKs für Python, TypeScript, Java, Kotlin, C#. Python-SDK ist am ausgereiftesten und hat mehrere Frameworks (offizielles SDK, FastMCP). Pro Tool 10-30 Zeilen Code, plus Server-Setup. [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) · [FastMCP](https://github.com/jlowin/fastmcp)

- 🟢 **MCP-Sicherheit** — wichtig: Tools können beliebige Aktionen ausführen, also: (1) Auth (OAuth 2.1 für remote Server). (2) Read-only by default, Write-Aktionen nur mit Mensch-Bestätigung. (3) Audit-Logs aller Aufrufe. (4) Sandboxing für gefährliche Tools (Code-Execution, Filesystem-Schreiben). Vertiefung im Querschnitt Production. [MCP Security Best Practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices)

- 🔄 **MCP vs. Function Calling vs. Plugin-Frameworks** — vier verschiedene Ansätze, dieselbe Idee:
 - **Function Calling** (per-Provider, OpenAI/Anthropic/Google jeweils unterschiedliches Format) — vendor-locked.
 - **MCP** — protokoll-standardisiert, vendor-unabhängig, Industriestandard 2026.
 - **OpenAI Plugins / GPTs Actions** — proprietär, ChatGPT-only.
 - **LangChain Tools** — framework-locked.

 Wer 2026 baut, sollte MCP als Default wählen, mit Function-Calling-Fallback wo nötig.

### Praxis: Hauptprojekt — Eigener MCP-Server + Konsum von dreien

**Eigener MCP-Server bauen** — wähle eine Datenquelle aus deinem Alltag:
- Eigene Notizen (Obsidian, Markdown-Files in einem Ordner)
- Eigene Bookmarks-DB
- Eigene Time-Tracking-Daten
- Eigener Kalender-Export
- Eigene Workout-Logs

Der Server soll mindestens:
- 2-3 Tools exposen (z.B. `search_notes`, `get_note_by_id`, `summarize_recent_notes`)
- 1-2 Resources (z.B. statische Liste aller Notizen-Titel)
- Saubere Tool-Beschreibungen mit Pydantic-Schemas
- Logging der Aufrufe

**Drei MCP-Server konsumieren** in deiner LLM-App oder in Claude Desktop / Cursor:
- Filesystem-MCP-Server
- GitHub-MCP-Server
- Einen Server deiner Wahl aus der Public Registry

Im Portfolio: `stufe-5_anwendungen/5-3-mcp/` mit:
- Code des eigenen Servers
- README mit Installation und Nutzung
- Screenshots des Servers im Einsatz (Claude Desktop oder Cursor)
- Reflexion: was war einfach, was schwierig?

### 🎁 Mehrwert-Mini-Projekt
**Persönlicher Productivity-MCP-Stack** für Claude Desktop oder Cursor: dein eigener Notizen-Server + Filesystem + GitHub + Time-Tracking. Damit hat dein KI-Assistent Zugriff auf alles, was du täglich brauchst.

### 🌱 Open-Source-Pfad
- MCP ist von Anfang an Open-Source.
- Verbinde deinen MCP-Server mit lokalem Ollama-Setup über [Open WebUI](https://openwebui.com), das MCP-Support hat (oder über Cline-Extension in VS Code).
- Damit hast du lokales LLM + lokale Datenquellen + lokale Tools — komplett OSS-Stack.

### Outcome-Check
- [ ] Eigener MCP-Server lauffähig mit mindestens 2 Tools
- [ ] Server-Code im Portfolio mit README
- [ ] Drei externe MCP-Server in eigener App oder Claude Desktop konsumiert
- [ ] Reflexion: was hat MCP einfacher gemacht?

---

## Modul 5.4: GenAI-Anwendungs-Eval

In Modul 2.3 hast du Prompt-Eval als Konzept eingeführt. Jetzt vertiefst du Eval als Disziplin — denn Eval ist 2026 das Kern-Differenzierungsmerkmal zwischen Hobby-Bauer und Professional. Wer ein RAG-System ohne Eval baut, baut blind. Dieses Modul ist die **erste tiefere Berührung mit dem Querschnitt-Eval** — aber wenn du tiefer einsteigen willst, wechsle in den Querschnitt.

**Aufwand:** 🔧 12-18h · 🧮 10-15h · 💼 5-8h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.3, 5.1, 5.2

### Lernziel
Du hast für dein RAG-System aus 5.1 einen vollständigen Eval-Workflow: Eval-Dataset, mehrere Metriken, automatisierte Eval-Runs. Du kennst LLM-as-Judge in der Tiefe und vermeidest die typischen Fallen.

### Theorie

- 🟢 **Warum Eval? Was passiert ohne?** — ohne Eval merkst du nicht, wenn deine Änderung das System verschlechtert. Eval ist die Grundlage für Optimierung. Ohne Eval ist jede "Verbesserung" gefühlte Verbesserung. [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) (Pflicht-Lektüre 2026)

- 🟢 **Offline vs. Online Eval** — **Offline** (vor Deployment): Test-Dataset, automatische Metriken, schnell, reproduzierbar. **Online** (in Production): User-Feedback, A/B-Tests, langsamer, aber realistischer. Beide nötig. [Eugene Yan — Eval-Driven Development](https://eugeneyan.com/writing/evals/)

- 🟢 **Eval-Dataset aufbauen** — der wichtigste und am häufigsten unterschätzte Schritt. Strategien: (1) **Real-World-Inputs** (echte User-Anfragen, anonymisiert). (2) **Synthetic Data** (LLM generiert Test-Cases). (3) **Edge Cases** (gezielt die Fälle, wo das System kippt). 50-200 Test-Cases sind oft Minimum. [Hamel Husain — Eval-Dataset](https://hamel.dev) · [LangSmith — Building Datasets](https://docs.smith.langchain.com)

- 🟢 **Reference-based vs. Reference-free Eval** — **Reference-based**: du hast Ground-Truth-Antwort, Metriken vergleichen Generation gegen Truth (BLEU, ROUGE, exact match). **Reference-free**: keine Ground-Truth, andere Modelle bewerten. RAG-Eval ist meistens reference-free.

- 🟢 **LLM-as-Judge in der Tiefe** — du nutzt ein anderes (oft stärkeres) LLM, um Outputs zu bewerten. Pflicht-Wissen 2026, aber mit Fallen: (1) **Position-Bias** (LLM bevorzugt erstes Argument). (2) **Self-Preference** (LLM bevorzugt eigene Outputs). (3) **Calibration** (Schwellen für "gut" vs. "schlecht" sind nicht universell). Mitigations: Pairs randomisieren, anderes Modell als Judge, Human-Calibration auf 50-100 Beispielen. [Anthropic — LLM-as-Judge Best Practices](https://www.anthropic.com) · [Eugene Yan — LLM-as-Judge](https://eugeneyan.com/writing/llm-evaluators/)

- 🟢 **RAG-spezifische Metriken (RAGAS-Tiefe)** — über die Basics aus 5.1 hinaus: **Context Utilization** (wird der gefundene Kontext genutzt oder ignoriert?), **Answer Correctness** (mit Ground-Truth abgeglichen, wenn vorhanden), **Faithfulness** vs. **Answer Relevancy** Trade-off. [RAGAS Metrics](https://docs.ragas.io/en/stable/concepts/metrics/index.html)

- 🟢 **Eval-Tools 2026 — die Optionen** — **RAGAS** (Open-Source, RAG-fokussiert), **Braintrust** (kommerziell, sehr ausgereift), **LangSmith Evals** (LangChain-Ökosystem), **OpenAI Evals** (OSS, generisch), **Anthropic Inspect** (OSS, viele Eval-Patterns), **DeepEval** (OSS, viele Metriken built-in), **Promptfoo** (CLI-fokussiert, ideal für CI), **Phoenix/Arize** (Production-Monitoring + Eval). [DeepEval](https://github.com/confident-ai/deepeval) · [Promptfoo](https://www.promptfoo.dev) · [Anthropic Inspect](https://inspect.aisi.org.uk)

- 🟢 **Eval-as-CI: automatisierte Eval bei jedem Code-Change** — der nächste Schritt: Eval-Runs in GitHub Actions, bei jedem Pull Request automatisch ausgeführt, Schwellenwert-Verletzungen blockieren Merge. Vertiefung im Querschnitt Production. [Promptfoo CI Setup](https://www.promptfoo.dev/docs/integrations/github-action/) · [LangSmith CI Patterns](https://docs.smith.langchain.com)

- 🟢 **Häufige Eval-Fallen** — (1) **Cherry-Picked Examples** (nur 5 Erfolgs-Beispiele zeigen, keine echte Eval). (2) **Single-Run-Variability** (LLMs sind stochastisch — 5 Runs pro Test, Median nehmen). (3) **Overfitting auf Eval-Set** (System wird auf Test-Set optimiert, scheitert in Production). (4) **Ignored Edge Cases** (System sieht gut aus auf Standard-Cases, kippt bei Edge Cases).

### Praxis: Hauptprojekt — Vollständiger Eval-Workflow für 5.1-RAG

- **Eval-Dataset erweitern**: aus den 20 Test-Fragen in 5.1 mindestens 50-100 machen. Methoden: (1) Selber 30 weitere schreiben. (2) LLM 30 weitere generieren lassen aus deinen Dokumenten. (3) Mindestens 10 Edge Cases bewusst konstruieren.
- **Mehrere Metriken parallel**: RAGAS-Suite (Faithfulness, Answer Relevancy, Context Precision, Context Recall) plus eine Custom-Metrik für deinen Use-Case (z.B. "deutsche Sprachqualität").
- **LLM-as-Judge mit Bias-Awareness**: Setup mit randomisierten Pairs, Position-Bias-Test (gleiche Antwort zweimal in unterschiedlicher Position).
- **Eval-Run automatisieren**: ein einziges Skript `run_eval.py`, das alle Metriken auf allen Test-Cases laufen lässt und einen Markdown-Report generiert.
- **Vorher/Nachher**: dokumentiere mindestens zwei Eval-Runs (vor und nach einer Optimierung), zeige Verbesserung quantitativ.
- Im Portfolio: `stufe-5_anwendungen/5-4-eval-workflow/` mit Code, Reports, Dataset.

### 🎁 Mehrwert-Mini-Projekte
- **Eval-Dataset-Builder-CLI** — kleines Tool, das aus deinen Dokumenten automatisch Test-Fragen generiert (mit menschlicher Validierung).
- **Eval-Dashboard** in Streamlit oder Gradio: zeigt Metriken über die Zeit, wenn du mehrere Eval-Runs gemacht hast.

### 🌱 Open-Source-Pfad
Alle empfohlenen Eval-Tools sind OSS oder haben OSS-Variante. RAGAS, DeepEval, Promptfoo, Anthropic Inspect — komplett ohne Cloud-Cost laufbar. LLM-as-Judge mit lokalem Ollama-Modell (z.B. `qwen2.5:7b`) statt GPT-5 als Judge.

### Outcome-Check
- [ ] Eval-Dataset mit mindestens 50 Test-Cases inkl. Edge Cases
- [ ] Mindestens drei Metriken parallel evaluiert
- [ ] LLM-as-Judge mit Bias-Mitigations
- [ ] Eval-Skript reproduzierbar
- [ ] Vorher/Nachher-Report mit messbarer Verbesserung
- [ ] Capstone-Engineer-Outcome-Schwelle: Faithfulness ≥0.8

---

## Modul 5.5: Frontend für LLM-Apps

Eine LLM-Funktion ohne Frontend ist eine Funktion in der Kommandozeile. Für echte Nutzbarkeit brauchst du eine UI — sei es eine schnelle Streamlit-Demo, ein Chainlit-Chatbot, oder eine produktive Next.js-App mit Vercel AI SDK. Dieses Modul lehrt dich die wichtigsten Optionen Mai 2026, mit Schwerpunkt auf Streaming, Tool-Use-Visualisierung und Generative UI.

**Aufwand:** 🔧 8-12h · 🧮 5-8h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 5.1, optional 4.1

### Lernziel
Du hast deine RAG-App aus 5.1 mit einem Frontend versehen, das Streaming unterstützt und Tool-Calls visualisiert.

### Theorie

- 🔄 **Frontend-Optionen 2026 — Übersicht** — vier Stile:
 - **Streamlit** — Python-only, in Stunden zur Demo, perfekt für Prototypen und interne Tools.
 - **Gradio** — ähnlich wie Streamlit, oft für ML-Demos, gut integriert mit Hugging Face Spaces.
 - **Chainlit** — Chatbot-fokussiert, "Conversational UI" out-of-the-box.
 - **Next.js + Vercel AI SDK** — Production-Frontend in TypeScript/React, vollkommen flexibel.
 - **Open WebUI** — fertige UI für lokale LLMs, hochgradig anpassbar.

- 🟢 **Streamlit für schnelle Prototypen** — Python-Skript wird zur Web-App, Streaming-Support, einfaches Multi-Page. Ideal für: interne Tools, Demos, Stakeholder-Reviews. Nicht ideal für: produktive Multi-User-Apps mit komplexer UI. [Streamlit Docs](https://docs.streamlit.io) · [Streamlit LLM Tutorials](https://docs.streamlit.io/develop/tutorials/llms)

- 🔄 **Vercel AI SDK 5 (TypeScript) — Production-Standard** — Vercel AI SDK ist 2026 der dominante Stack für Next.js-LLM-Apps. Features: Streaming-Hooks (`useChat`, `useCompletion`), Tool-Use-Rendering, Generative UI (LLM rendert React-Komponenten dynamisch), Provider-Agnostik (Anthropic, OpenAI, Google in einem Code). [Vercel AI SDK](https://sdk.vercel.ai) · [AI SDK Examples](https://github.com/vercel/ai)

- 🟢 **Chainlit — Conversational UIs** — Python, fokussiert auf Chat-UI mit Streaming, Source-Citations, Tool-Visualisierung. Ähnlich wie Streamlit für die Chat-spezifische Domain. [Chainlit Docs](https://docs.chainlit.io)

- 🔄 **Open WebUI als lokale ChatGPT-Alternative** — komplette UI für lokale LLMs (Ollama-kompatibel), MCP-Support, RAG-Integration eingebaut. Self-hostbar. [Open WebUI](https://openwebui.com)

- 🟢 **Streaming als UX-Pflicht** — moderne LLMs brauchen Sekunden für lange Outputs. Ohne Streaming wartet der Nutzer 10s auf einen Block — fühlt sich kaputt an. Mit Streaming: erste Worte nach 500ms, Lesen während Generation. Server-Sent Events (SSE) als Standard-Pattern. [MDN — Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) · [Vercel AI SDK Streaming](https://sdk.vercel.ai/docs/foundations/streaming)

- 🟢 **Tool-Use im Frontend visualisieren** — wenn dein LLM Tools aufruft (z.B. Web-Search), willst du das im UI zeigen ("🔍 Suche nach...", dann "📊 Lade Daten...", dann Antwort). Das macht den Prozess transparent und vermeidet "Wartet er noch oder hängt es?"-Konfusion. [Vercel AI SDK Tool UI](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot-tool-usage)

- 🔄 **Generative UI als 2026-Pattern** — LLM generiert nicht nur Text, sondern entscheidet, welche React-Komponente angezeigt wird. Beispiel: "Zeig mir den Aktienkurs von TSLA" → LLM ruft Tool, Tool gibt Daten zurück, Frontend rendert Chart-Komponente statt Plain-Text. [Vercel AI SDK — Generative UI](https://sdk.vercel.ai/docs/ai-sdk-rsc/generative-user-interfaces)

- 🟢 **Authentication für LLM-Apps** — sobald Multi-User: Auth ist Pflicht. Optionen: Auth0, Clerk, Supabase Auth, BetterAuth (OSS). Pro User: Rate-Limit für Cost-Kontrolle. [Clerk](https://clerk.com) · [BetterAuth](https://www.better-auth.com)

- 🟢 **Rate Limiting per User** — pro User Token-Budget pro Tag/Monat, sonst frisst ein Power-User dein gesamtes API-Budget. Tools: [Upstash Rate Limit](https://github.com/upstash/ratelimit), [Helicone](https://www.helicone.ai). Vertiefung im Querschnitt Production.

### Praxis: Hauptprojekt — Frontend für deine RAG-App

Wähle EINE der folgenden Varianten:

**Variante A: Streamlit (schnell, Python-only)**
- Streamlit-App mit Chat-Interface für deine 5.1-RAG.
- Streaming aktiviert.
- Source-Citations werden angezeigt (welche Chunks die Antwort gestützt haben).
- Eval-Run-Trigger als Sidebar-Button.

**Variante B: Next.js + Vercel AI SDK (production-tauglich, TypeScript)**
- Next.js-App, die deine 5.1-RAG-Python-API als Backend nutzt (oder direkt LangChain.js).
- `useChat`-Hook für Streaming.
- Tool-Use-Rendering für Hybrid-Search-Schritte.
- Bonus: Generative UI (z.B. Statistik-Visualisierung im Chat).

**Variante C: Chainlit (Conversational UI, Python)**
- Chainlit-App mit Source-Citations native.
- Schritte des RAG-Pipelines visualisieren.

Im Portfolio: `stufe-5_anwendungen/5-5-frontend/` mit Code, Screenshots, Demo-Video.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliche Chat-UI** lokal auf deinem Rechner mit Open WebUI + Ollama: deine eigene ChatGPT-Alternative.
- **Streamlit-Dashboard** für Prompt-A/B-Tests.

### 🌱 Open-Source-Pfad
**Open WebUI als komplette OSS-Alternative** — kein Code nötig, hochgradig anpassbar via Functions und Pipelines. Kann deinen RAG-Stack als Backend einbinden. Damit hast du eine ChatGPT-ähnliche Oberfläche, komplett lokal, mit deinen eigenen Tools.

### Outcome-Check
- [ ] Frontend lauffähig auf `localhost`
- [ ] Streaming funktioniert (User sieht Text während Generation)
- [ ] Tool-Use oder RAG-Pipeline-Schritte werden visualisiert
- [ ] Source-Citations werden angezeigt
- [ ] Demo-Video oder Screenshots im Portfolio

---

## Capstone-Update für Track A (Engineer)

Nach Stufe 5 hast du **alle Bausteine** für dein Capstone-Engineer-Projekt:
- ✅ RAG-System (5.1)
- ✅ Framework-Wahl (5.2)
- ✅ MCP-Integration (5.3)
- ✅ Eval-Workflow (5.4)
- ✅ Frontend (5.5)

Dein Capstone-Repo sollte jetzt:
- Eigenständiges GitHub-Repo (separat vom Portfolio-Repo, oder als Submodul)
- Klare Domain-Definition
- Production-relevante Outcome-Schwellen aus dem Master-Skelett

In Stufe 6 (Agenten) erweiterst du es um Multi-Agent-Funktionalität. In Stufe 10 härtest du es zu Production.

---

## Free-Zertifikate für Stufe 5

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [DLAI — Building and Evaluating Advanced RAG](https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag) | DeepLearning.AI / LlamaIndex | ~2h | Vertiefung 5.1 |
| [DLAI — Knowledge Graphs for RAG](https://learn.deeplearning.ai) | DeepLearning.AI | ~2h | Optional 5.1 |
| [LangChain Academy — LangChain Mastery](https://academy.langchain.com) | LangChain | ~10-15h | Vertiefung 5.2 |
| [DLAI — Evaluating and Debugging Generative AI](https://learn.deeplearning.ai) | DeepLearning.AI / W&B | ~2h | Vertiefung 5.4 |
| [HF — LLM Course Chapter 8 (RAG)](https://huggingface.co/learn/llm-course) | Hugging Face | ~5h | Alternative zu 5.1 |
| [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs) | Vercel | ~5h | Vertiefung 5.5 |

---

## Stufen-Outcome

Nach Stufe 5 hast du:
- ✅ Lauffähiges RAG-System mit moderner Stack-Wahl (Mai 2026)
- ✅ RAGAS-Eval mit Faithfulness ≥0.8 (Capstone-Engineer-Outcome-Schwelle)
- ✅ Eigenen MCP-Server gebaut, drei externe konsumiert
- ✅ Framework-Vergleich mit eigener Decision-Matrix
- ✅ Vollständigen Eval-Workflow mit Bias-Awareness
- ✅ Frontend für deine LLM-App
- 🔧: Capstone-Engineer-Projekt aktiv mit ersten Production-Bausteinen

**Du bist bereit für Stufe 6: Agenten — wo dein RAG-System zum agentischen System wird.**

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: Embedding-Modell-Empfehlungen (5.1), Vector-DB-Landschaft, MCP-Server-Registry-Wachstum (5.3), Vercel AI SDK Versionen (5.5). 