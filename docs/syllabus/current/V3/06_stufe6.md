# Stufe 6: Agenten

**Aufwand:** 🔧 72-117h · 🧮 58-93h · 💼 30-55h  
**Voraussetzungen:** Stufen 1-5, Stufe 4 Pflicht für 🔧

| Querschnitte | Capstone-Beitrag | Tools |
|---|---|---|
| Eval (6.2), Production (6.0, 6.5), Safety (6.0, 6.5) | Capstone A erweitert (Multi-Agent) | LangGraph, Claude Agent SDK, OpenAI Agents SDK, Google ADK |

KI-Agenten sind 2026 das wichtigste Anwendungs-Pattern für komplexe Workflows. Diese Stufe baut den Agent **erst from scratch** (Pattern verstehen), dann mit modernen Frameworks (LangGraph, Agent-SDKs), dann mit Theorie-Anker (RL, MDP für 🧮), und schließlich vergleicht die Vendor-spezifischen Patterns (Claude Agent SDK, OpenAI Agents SDK, Google ADK), Schwarm-Patterns und Agentic-OS-Architekturen.

Hier wird dein Capstone-Engineer-Projekt aus Stufe 5 zum **Multi-Agent-System** erweitert. *Capstone-spezifische Anforderungen siehe `17_capstone_a_engineer.md`.*

**Ergebnis nach Stufe 6:**
- **Du verstehst Context Engineering als Disziplin und hast Compaction-Strategie für eigenen Agent implementiert**.
- Du hast einen ReAct-Agent from scratch in <200 Zeilen Python gebaut.
- Du hast ein Multi-Agent-System mit LangGraph oder einem Vendor-SDK gebaut, **mit Trajectory-Eval und Failure-Mode-Reflektion**.
- Du verstehst Cost-Tracking, Sandboxing, Eval für Agenten.
- **Du hast einen Computer-Use-Demo umgesetzt**.
- **Du hast die vier Schwarm-Patterns erklärt und einen Schwarm-vs-Conductor-Vergleich auf eigenem Use-Case gemacht**.
- **Du hast eine minimale Agentic-OS-Schicht über deinem Capstone-Agent gelegt**.
- 🧮: Du verstehst RL und MDP/POMDP konzeptionell.
- 🔧: Capstone hat Multi-Agent-Funktionalität *(siehe `17_capstone_a_engineer.md`)*.

---
## Modul 6.0: Context Engineering

Anthropic hat 2025 Context Engineering als **Nachfolger von Prompt Engineering** proklamiert. Moderne Agents scheitern selten an Prompt-Qualität — sie scheitern an Context-Strategie: zu volle Context-Windows, fehlende Compaction, falsche Memory-Architektur, Sub-Agent-Token-Verschwendung. Dieses Modul lehrt dich, eine Context-Strategie für deine Agents bewusst zu entwerfen, statt zu hoffen, dass es klappt. Pflicht-Vorlauf zu allen anderen Stufe-6-Modulen.

**Aufwand:** 🔧 8-12h · 🧮 8-12h · 💼 4-6h
**Voraussetzungen:** Stufen 2-3, **Stufe 5 inkl. Modul 5.0 Eval-Mini, 5.4 RAG-Eval, idealerweise 5.6 Skills**
**Status:** Pflicht alle Tracks. **Begründung der Pflicht:** ohne Context-Engineering-Disziplin sind Module 6.1-6.5 didaktisch unvollständig — Agents werden an die Wand gebaut, nicht an Prompts.

### Lernziel
Du kannst für einen gegebenen Agent-Use-Case eine Context-Strategie entwerfen, die Token-Budget, Memory-Architektur, Sub-Agent-Delegation und Compaction-Trigger explizit definiert. Du verstehst den Unterschied zwischen Prompt Engineering, Prompt Engineering plus Tools, und Context Engineering als Disziplin der Token-Allokation. Du hast einen Context-Audit auf eigene Stufe-5-Anwendung gemacht.

### Theorie

- 🟢 **Prompt → Context Engineering: die Disziplin-Verschiebung 2025-2026** — der Begriff "Prompt Engineering" wurde zu eng, als LLMs in Loops mit Tools, Memory, Sub-Agents, Skills, MCP-Servern liefen. Context Engineering umfasst alle Token-Allokations-Entscheidungen pro Agent-Run, nicht nur den Prompt. [Anthropic — Effective Context Engineering for AI Agents (2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

- 🟢 **Context-Bestandteile — was ist im Window?** — pro Agent-Run gibt es typischerweise: System-Prompt, User-Message, Tool-Definitions (oft 30-50% des Budgets!), Tool-Results, Retrieved Documents (RAG), Memory-Snapshots, Agent-Trajectory bisher (was hat der Agent vorher getan?), Konversations-History. **Pflicht-Übung:** für deine RAG-App aus Modul 5.1 eine Token-Bilanz erstellen — wieviel Prozent jedes Bestandteils?

- 🟢 **Token-Budget-Allokation als Engineering-Entscheidung** — bei 200k bis 1M Context-Window ist die Frage nicht "passt es rein?", sondern "wie verteile ich es?". Heuristik 2026 (kalibrieren je Use-Case): 5-10% System-Prompt + Skills, 20-40% Tool-Definitions, 20-40% Retrieval (RAG), Rest für Generation + Buffer. *Verfallsdatum: Aug 2026.* [AWS re:Invent 2025 AIM277 — Anthropic-Talk zu Context Engineering](https://dev.to/kazuya_dev/aws-reinvent-2025-what-anthropic-learned-building-ai-agents-in-2025-aim277-16lc)

- 🟢 **Compaction als Pflicht-Pattern** — was passiert, wenn der Context voll wird? Vier Strategien:
 - **(1) Sliding Window mit Summary** — alte Messages werden komprimiert und am Anfang als Summary aufbewahrt.
 - **(2) LLM-as-Compactor** — anderes (oft günstigeres) LLM komprimiert Trajectory-History zu strukturiertem Snapshot.
 - **(3) Sub-Agent-Delegation** — frischer Context-Window pro Sub-Agent, parent-Agent bekommt nur Summary zurück.
 - **(4) External Memory** — File/DB statt Window, Agent retrieved on-demand.
 - **Pflicht-Implementierung im Hauptprojekt:** mindestens eine der vier auf eigene Anwendung anwenden.

- 🟢 **Memory-Architekturen** — drei Zeitskalen:
 - **Kurzfristig (Session-Memory)**: aktuelle Konversation, Compaction-Buffer.
 - **Mittelfristig (User-/Projekt-Profil)**: persistente Präferenzen, Domain-Vokabular, Brand-Voice — typischerweise als File (CLAUDE.md-Pattern) oder als Memory-Framework (Letta vormals MemGPT).
 - **Langfristig (organisationsweit)**: geteiltes Wissen, geteilte Skills, geteilte Decisions-Logs.
 - Brücke zu Modul 6.7 (Agentic OS): persistente Memory-Schicht ist Kern eines Agentic OS.

- 🟢 **Sub-Agent-Token-Budget-Verteilung** — wenn ein Hauptagent Sub-Agents spawnt: jeder Sub-Agent hat eigenen Context-Window. Strategische Frage:
 - **Sub-Agent sinnvoll, wenn**: parallelisierbare Sub-Tasks, Token-Save durch Frische, klare Sub-Task-Definitionen.
 - **Single-Agent mit Compaction sinnvoll, wenn**: Coherence kritisch, Sub-Tasks stark voneinander abhängig, Coordination-Overhead höher als Token-Save.
 - Brücke zu Modul 6.6 (Schwärme: Conductor-vs-Hierarchical-Pattern).

- 🟢 **Context-Pollution-Antipatterns** — fünf häufige Fehler:
 - **(1) Zu viele Tool-Definitions** ("alles könnte nützlich sein") → Modell wird verwirrt, wählt schlecht, Tool-Definitions fressen 30-50% des Budgets.
 - **(2) Zu lange Tool-Results ohne Filter** → ein einziger Tool-Call kann den Context für die nächsten 20 Schritte vergiften.
 - **(3) Konversations-History ohne Summary** → ab Turn 30 wird's eng.
 - **(4) RAG-Retrieval zu aggressiv** → Top-50 statt Top-5 mit Reranker (Brücke zu Modul 5.1 RAG-Frontier-Block: Reranking-Cascade).
 - **(5) Skills naive geladen** → alle Skills in jeden Run, statt on-demand-Discovery (Brücke zu Modul 5.6).

- 🟢 **Anthropic Claude Skills als Context-Engineering-Pattern** — Skills laden bei Bedarf zusätzlichen Context (Markdown + Code + Templates), nicht permanent. Description-Engineering steuert, wann eine Skill geladen wird. Brücke zu Modul 5.6.

- 🔄 **Tools für Observability** — Langfuse, LangSmith, Phoenix (Arize), Braintrust messen Context-Nutzung pro Run. Pflicht für ernsthaftes Context Engineering. *Verfallsdatum: Aug 2026.* [Langfuse](https://langfuse.com) · [LangSmith](https://docs.smith.langchain.com) · [Phoenix](https://docs.arize.com/phoenix)

### Praxis: Hauptprojekt — Context-Audit auf bestehende Anwendung

1. **Wähle eine deiner Stufe-5-Anwendungen** — die RAG-App aus 5.1, der MCP-Server-Konsument aus 5.3, oder das Eval-Setup aus 5.4.
2. **Token-Bilanz erstellen** — pro typischem Run: was ist im Context-Window in welcher Reihenfolge, wieviel Prozent? Mit Langfuse, LangSmith oder manuellen Logs (`tiktoken` für Token-Counting).
3. **Compaction-Trigger definieren** — Token-Schwelle (z.B. 80% von Context-Limit), bei Erreichen → welche Strategie aus den vier oben?
4. **Compaction-Strategie implementieren** — mindestens eine der vier (Sliding Window mit Summary, LLM-Compactor, Sub-Agent-Delegation, External Memory).
5. **Vorher-Nachher-Vergleich** — Test-Set aus 5.0 Eval-Mini durchlaufen, mit und ohne Compaction. Quality-Drop, Cost-Save messen.
6. **Memory-Architektur einordnen** — welche Zeitskala (kurzfristig/mittelfristig/langfristig) ist für deine App relevant? Skizze.

Im Portfolio: `stufe-6_agenten/6-0-context-engineering/` mit Token-Bilanz, Compaction-Code, Eval-Vergleich, Memory-Architektur-Skizze, Reflexion.

### 🎁 Mehrwert-Mini-Projekte
- **Eigenes Context-Audit-Template** als Markdown — wiederverwendbar für jede zukünftige Anwendung. Wert: pro neuer App eine Stunde gespart.
- **CLAUDE.md im eigenen Capstone-Repo** als minimales mittelfristiges Memory — Brand-Voice, Domain-Vokabular, Decisions-Log. Brücke zu Modul 6.7 Agentic OS.

### 🌱 Open-Source-Pfad
Alle vier Compaction-Strategien lassen sich rein OSS umsetzen:
- **Letta** (vormals MemGPT) als OSS-Memory-Framework mit eingebauter Compaction.
- **Langfuse** (OSS, self-hostable) für Token-Bilanz-Tracking.
- **Sliding Window mit Summary** als 50-Zeilen-Python ohne externe Library.

### Outcome-Check
- [ ] Token-Bilanz für eigene Stufe-5-Anwendung erstellt (mit konkreten Prozent-Werten)
- [ ] Compaction-Strategie implementiert (mindestens eine der vier)
- [ ] Vorher-Nachher-Eval-Vergleich dokumentiert (Quality + Cost)
- [ ] Memory-Architektur eingeordnet (kurz/mittel/lang) für eigene App
- [ ] Anthropic "Effective Context Engineering" gelesen (mindestens Abstract + 2 Sektionen)
- [ ] Sub-Agent vs. Single-Agent-mit-Compaction-Entscheidung für eigenen Use-Case begründet
- [ ] Mindestens drei der fünf Context-Pollution-Antipatterns auf eigene App geprüft

---

## Modul 6.1: Agent-Patterns

Der wichtigste Schritt zum Agent-Verständnis: **du baust einen ReAct-Agent from scratch**, ohne Framework. In 100-200 Zeilen Python sieht ein Agent — Tool-Definition, Loop, Observation, Action — sehr klar aus. Wenn du das einmal selbst geschrieben hast, ist jedes Framework danach nur noch Abstraktion über bekannten Patterns. Hier kommt auch MCP wieder ins Spiel: deine selbstgebauten Tools können MCP-konform sein.

**Aufwand:** 🔧 12-18h · 🧮 12-18h · 💼 6-10h
**Voraussetzungen:** Module 2.5 (Function Calling), 5.3 (MCP)

### Lernziel
Du hast einen funktionierenden ReAct-Agent from scratch in Python gebaut, der mindestens drei Tools nutzt (z.B. Web-Search, Rechner, Datei-Read). Der Agent läuft in einem Loop mit Observation/Reasoning/Action und hat Stop-Bedingungen.

### Theorie

- 🟢 **Was ist ein Agent?** — die übliche Definition 2026: ein LLM-System, das (1) **Tools nutzt** (Funktionen ausführt), (2) **iterativ entscheidet** (Loop statt einzelner Aufruf), (3) **Ziele verfolgt** (mehrstufige Aufgaben). Wer kein Loop hat, hat einen Tool-Use-Aufruf, keinen Agent. [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) (Pflicht-Lektüre 2026)

- 🟢 **ReAct-Pattern (2022)** — der Klassiker: **Reason** (LLM denkt nach), **Act** (LLM ruft Tool), **Observe** (Tool-Output kommt zurück), wiederhole bis fertig. Stark, weil mit jedem LLM und jeder Tool-API funktioniert. [ReAct Paper](https://arxiv.org/abs/2210.03629) · [Promptingguide.ai — ReAct](https://www.promptingguide.ai/techniques/react)

- 🟢 **Tool-Definitionen mit Schemas** — moderne LLMs erwarten strukturierte Tool-Beschreibungen (JSON Schema oder Pydantic). Pro Tool: Name, Description (was macht es?), Parameters (mit Typen). Tool-Description ist wichtiger als Tool-Code — schlechte Description → Agent ruft Tool nicht oder falsch. [Anthropic — Tool Use Best Practices](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) · [OpenAI — Function Calling](https://platform.openai.com/docs/guides/function-calling)

- 🟢 **Loop-Steuerung: Stop-Bedingungen** — kritisch: Agent darf nicht endlos laufen. Stop-Bedingungen: (1) **Max Iterations** (typ. 10-20). (2) **Final Answer detektiert** (LLM signalisiert Abschluss). (3) **Cost Limit** (max Tokens oder max € pro Run). (4) **Time Limit**. Jeder Production-Agent braucht alle vier.

- 🟢 **System-Prompt für Agenten** — das System-Prompt definiert: wer der Agent ist, welche Tools er hat, wie er denken soll (z.B. "Denke Schritt für Schritt, nutze Tools wenn nötig"), Stop-Kriterien, Output-Format. Sehr wichtig für Agent-Qualität. [Anthropic Cookbook — Agents](https://github.com/anthropics/anthropic-cookbook/tree/main/tool_use)

- 🟢 **Tool-Auswahl: was wird ein Tool?** — Faustregel: Tools sind **deterministische, gut definierte Operationen** (Web-Search, DB-Query, Rechner, File-Read, API-Call). NICHT als Tools eignen sich: kreative Aufgaben, Reasoning (das macht der Agent selbst), zu komplexe Multi-Step-Operationen (lieber als eigenen Sub-Agent).

- 🔄 **MCP-Tools statt Custom-Tools** — 2026-Best-Practice: definiere deine Tools als MCP-Server (siehe 5.3). Damit funktionieren sie mit Claude, OpenAI, Gemini, Cursor — nicht nur deinem eigenen Agent. Backwards-kompatibel: dein Agent kann MCP-Tools nutzen wie normale Function-Calls. *Hinweis: dein Agent muss den MCP-Sicherheits-Block aus 5.3 anwenden — Read-Only-Default, Rate-Limits, Audit-Logs gelten auch für deinen Agent.* [MCP Tools](https://modelcontextprotocol.io/docs/concepts/tools)

- 🟢 **Reflection-Pattern als Erweiterung von ReAct** — der Agent prüft seinen eigenen Output ("habe ich die Aufgabe wirklich gelöst?") und korrigiert sich selbst. Bessere Qualität, höhere Kosten. [LangChain — Self-Reflection Patterns](https://blog.langchain.dev/reflection-agents/)

- 🟢 **Plan-then-Execute vs. Iterativ** — alternative zu ReAct: erst einen vollständigen Plan generieren, dann Steps abarbeiten. Stärker bei klar strukturierten Aufgaben, schwächer bei explorativen.

- 🟢 **Cost und Latenz von Agenten** — ein Agent-Run mit 10 Iterations × 1000 Tokens ist 10x teurer als ein Single-Call. Plus Latenz: 10 sequentielle LLM-Aufrufe = 30-60s Wartezeit. Optimierungen: parallele Tool-Calls (wenn unabhängig), kleineres Modell für einfache Iterations, Caching wiederkehrender Tool-Outputs.

### Praxis: Hauptprojekt — ReAct-Agent from scratch

Baue einen Python-Agent ohne Framework (kein LangChain, kein LangGraph), nur mit dem Provider-SDK (Anthropic, OpenAI oder LiteLLM):

- **3-5 Tools definieren**, mit Pydantic-Schemas:
 - `web_search(query)` — z.B. via [Tavily](https://tavily.com), [Brave Search API](https://brave.com/search/api/), oder [SerpAPI](https://serpapi.com)
 - `calculator(expression)` — z.B. mit `sympy` für sichere Auswertung
 - `read_file(path)` — Filesystem-Read mit Sandbox
 - `web_fetch(url)` — eine Webseite abrufen
- **Agent-Loop** in <200 Zeilen Code:
 - System-Prompt mit Tool-Beschreibungen
 - Iteration: LLM call → Tool-Detection → Tool-Execute → zurück in Context
 - Stop-Bedingungen: max 10 Iterations, Final-Answer detektiert, Cost-Limit
- **3 Test-Aufgaben**:
 - "Was ist die Hauptstadt der Region, in der ich gerade wohne, und wie ist das aktuelle Wetter dort?"
 - "Berechne den Compound-Interest auf 10.000€ über 10 Jahre bei 5%, vergleiche mit aktueller Inflation."
 - "Lies die README in meinem Portfolio-Repo und fasse die Capstone-Idee zusammen."
- **Logging**: jeder Schritt mit Reasoning, Tool-Call, Observation, Cost.
- Im Portfolio: `stufe-6_agenten/6-1-react-agent-scratch/` mit Code, README, Demo-Run-Log.

**Bonus (🔧 für Capstone)**: Erweitere deinen Capstone-RAG aus Stufe 5 zu einem ReAct-Agent — der Agent kann jetzt deine RAG-Tools nutzen plus Web-Search. *Capstone-spezifische Anforderungen siehe `17_capstone_a_engineer.md`.*

### 🎁 Mehrwert-Mini-Projekte
- **Persönlicher Research-Agent** als CLI-Tool: gib eine Frage ein, der Agent recherchiert (Web-Search + RAG) und gibt eine zusammengefasste Antwort mit Quellen.
- **Code-Review-Agent** für eigene Repos: liest geänderte Files, ruft Linters und Tests, fasst Findings zusammen.
- **Daily-Briefing-Agent** als Cronjob: liest News, Slack, E-Mails, fasst zusammen.

### 🌱 Open-Source-Pfad
- Komplett mit Ollama (`qwen2.5:7b` ist gut für Tool-Use) und SearXNG (OSS-Suchmaschine) statt Tavily.
- Bonus: dein Agent definiert Tools als MCP-Server (siehe 5.3), läuft also auch in Claude Desktop.

### Outcome-Check
- [ ] ReAct-Agent in <200 Zeilen Python ohne Framework
- [ ] Mindestens 3 Tools mit Pydantic-Schemas
- [ ] Stop-Bedingungen (Max-Iterations, Final-Answer, Cost-Limit)
- [ ] Drei Test-Aufgaben erfolgreich gelöst
- [ ] Logging mit Reasoning-Trail
- [ ] Bonus 🔧: Capstone als Agent erweitert *(siehe `17_capstone_a_engineer.md`)*

---

## Modul 6.2: Multi-Agent & LangGraph

Single-Agent reicht für viele Use-Cases — aber komplexe Workflows brauchen Multi-Agent-Architekturen: ein Coordinator-Agent, mehrere Spezialisten-Agents, klare Verantwortungs-Trennung. Dieses Modul lehrt dich Multi-Agent-Patterns mit **LangGraph** (Industriestandard 2026), behandelt aber auch die wichtigsten Alternativen (CrewAI, AutoGen). Plus die Production-Aspekte: **Cost-Tracking**, **Sandboxing**, **Agent-Eval mit Trajectory-Methoden**.

**Wichtig:** Multi-Agent-Systeme sind 2026 immer noch fragil. Anthropic selbst rät zu "schwachen" Multi-Agent-Setups. Dieses Modul ist daher mit Trajectory-Eval-Pflicht und expliziter Failure-Mode-Reflektion ausgestattet — Hello-World-Multi-Agent ohne Failure-Mode-Verständnis ist die häufigste Falle.

**Aufwand:** 🔧 18-26h · 🧮 11-15h · 💼 7-10h
**Voraussetzungen:** Modul 6.1, Modul 5.4 (GenAI-Eval), optional 4.1

### Lernziel
Du hast ein Multi-Agent-System mit LangGraph (oder einer Alternative) gebaut, mit Cost-Tracking, mindestens einem sandboxed Tool, und einer **vollständigen Trajectory-Eval-Methodik mit Failure-Mode-Analyse**. Du weißt, wann Multi-Agent die richtige Wahl ist und wann nicht.

### Theorie

- 🔄 **Multi-Agent-Patterns 2026** — vier wichtige Architekturen:
 - **Supervisor / Coordinator**: ein Master-Agent delegiert an Spezialisten. Klassisch und robust.
 - **Hierarchical**: mehrere Coordinator-Levels, sinnvoll für sehr komplexe Workflows.
 - **Sequential Pipeline**: Agents in fester Reihenfolge (Researcher → Writer → Reviewer).
 - **Parallel / Concurrent**: mehrere Agents arbeiten gleichzeitig, Ergebnisse aggregiert.

 *Verfallsdatum: Aug 2026.* [LangGraph — Multi-Agent Concepts](https://langchain-ai.github.io/langgraph/concepts/multi_agent/) · [Anthropic — Building Effective Agents (Patterns)](https://www.anthropic.com/research/building-effective-agents)

- 🔄 **Wann Multi-Agent vermeiden?** — bevor du Multi-Agent baust, prüfe Anti-Indikatoren: (1) **Wenn ein Single-Agent mit gutem System-Prompt es kann** — dann ist Multi-Agent Overhead. (2) **Wenn Latenz kritisch ist** — Multi-Agent kostet 5-10x mehr Zeit. (3) **Wenn Cost ein Faktor ist** — Multi-Agent kann 5-15x teurer sein. (4) **Wenn das Eval-Setup nicht steht** — Multi-Agent ohne Eval ist Production-Roulette. Anthropic 2026: "Most agentic workflows benefit from simplicity, not complexity." [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

- 🔄 **LangGraph als Industrie-Default 2026** — von LangChain, aber eigenständig nutzbar. Stark: explizite State-Maschine (du siehst, was passiert), Persistenz (Workflows können pausieren/fortsetzen), Streaming pro Node, Human-in-the-Loop. Schwach: Lernkurve steiler als CrewAI. *Verfallsdatum: Aug 2026.* [LangGraph Docs](https://langchain-ai.github.io/langgraph/) · [LangChain Academy — LangGraph Course (kostenlos)](https://academy.langchain.com/courses/intro-to-langgraph)

- 🔄 **CrewAI — schnelles Multi-Agent-Prototyping** — höhere Abstraktion: du definierst Agents (mit Rolle, Goal, Backstory) und Tasks, CrewAI orchestriert. Schneller zum Ergebnis, weniger Kontrolle als LangGraph. [CrewAI Docs](https://docs.crewai.com)

- 🔄 **AutoGen v0.4+ — Microsoft-Stack** — kompletter Refactor 2024-2025, jetzt Event-Driven, gute Multi-Agent-Conversation-Patterns. Beliebt im Microsoft-Ökosystem. [AutoGen Docs](https://microsoft.github.io/autogen/)

- 🔄 **Vendor-Agent-SDKs als ernstzunehmende Alternative** — Claude Agent SDK, OpenAI Agents SDK, Google ADK sind 2025/2026 production-grade. Stärken: schlanker als Frameworks, native Provider-Features (z.B. Claude Computer Use, OpenAI Realtime), MCP-nativ. Schwächen: Vendor-Lock-in. Wird in 6.4 vertieft.

- 🟢 **State-Management in Multi-Agent** — wer wem was kommuniziert, wer welchen Context behält, wann State gespeichert wird. LangGraph macht das explizit, andere Frameworks implizit. State-Modelle: Shared State (alle sehen alles), Message-Passing (Agents sehen nur, was ihnen gesendet wird), Hybrid.

- 🟢 **Cost-Tracking als Pflicht** — Multi-Agent-Runs können dramatisch teuer werden (10 Agents × 5 Iterations × 2000 Tokens = schnell mehrere Dollar pro Run). Cost-Tracking pro Agent-Run, pro Agent, pro Tool. Tools 2026: [LangSmith](https://www.langchain.com/langsmith), [Helicone](https://www.helicone.ai), [Langfuse](https://langfuse.com) (OSS). [Helicone Docs](https://docs.helicone.ai) · [Langfuse Docs](https://langfuse.com/docs)

- 🟢 **Sandboxing für gefährliche Tools** — wenn dein Agent Code ausführen kann (Python REPL, Shell-Commands), brauchst du Sandboxing — sonst kann ein verirrter Agent dein System beschädigen. 2026-Optionen: [E2B](https://e2b.dev) (cloud sandboxes), [Modal](https://modal.com) (serverless mit Sandbox), [Daytona](https://daytona.io) (Dev Environments), Docker-basierte Sandboxes selbst. [E2B Docs](https://e2b.dev/docs)

- 🟢 **Human-in-the-Loop als Sicherheits-Mechanismus** — kritische Aktionen (Email senden, DB-Write, Geld-Transaktion) brauchen Mensch-Bestätigung. LangGraph hat HITL nativ. Pattern: Agent stoppt, präsentiert geplante Aktion, wartet auf "approve"/"reject"/"modify". [LangGraph — Human-in-the-Loop](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)

- 🟢 **Agent-Anti-Patterns** — (1) **Endless Loop ohne Stop-Bedingungen**. (2) **Tool-Spam** (Agent ruft dasselbe Tool 20x). (3) **Cost Explosion** (kein Budget-Limit). (4) **Hallucinated Tool Calls** (Agent erfindet Tools, die nicht existieren). (5) **No Logging** (Black-Box-Verhalten ohne Debugging-Möglichkeit). (6) **Hello-World-Multi-Agent ohne Failure-Mode-Eval** — Lernende halten sich nach einem laufenden Demo für Agent-Builder. Alle vermeidbar mit guten Defaults und Eval.

#### Trajectory-Eval als Pflicht-Block
Multi-Agent-Eval ist eigene Disziplin und unterscheidet sich substanziell von RAG-Eval (Modul 5.4). Dieser Block macht Trajectory-Eval zur Pflicht für jedes Multi-Agent-System.

- 🟢 **Was ist Trajectory-Eval?** — anders als bei Single-Output-Eval (RAG: ist die Antwort gut?) bewertet Trajectory-Eval den **Lösungsweg**: welche Tools wurden gerufen, in welcher Reihenfolge, mit welchen Argumenten, mit welchem Outcome pro Step? Ein Multi-Agent-System kann die richtige Endantwort geben, aber auf einem völlig falschen Weg dahin kommen — und das ist nicht reproduzierbar oder verlässlich. **Eval-Querschnitt-Anker:** siehe `13_querschnitt_eval.md`, Abschnitt "Eval für unterschiedliche Anwendungs-Klassen — Agent-Eval".

- 🟢 **Trajectory-Metriken** — vier Kern-Metriken:
 - **Task Success Rate** (Boolean: Aufgabe gelöst, ja/nein) — die Basis-Metrik. Allein reicht sie nicht.
 - **Tool-Call Quality**: wurde das richtige Tool gerufen? Mit den richtigen Argumenten? Hier nutzt du LLM-as-Judge oder eine pattern-matching-Heuristik.
 - **Trajectory Efficiency**: wie viele Steps hat es gedauert? Wie nah am Ideal-Pfad? (Ideal-Pfad: kürzester Weg zur Lösung mit minimalem Tool-Spam.)
 - **Cost Efficiency**: wie viele Tokens, wie viel € pro erfolgreichem Run? Median über mehrere Runs (LLMs sind stochastisch).
 [LangSmith — Agent Evaluation](https://docs.smith.langchain.com/old/cookbook/testing-examples/agent-evaluation) · [Anthropic — Agent Evals](https://www.anthropic.com/research/swe-bench-sonnet)

- 🟢 **Failure-Mode-Analyse als Pflicht** — bevor du dein Multi-Agent als "fertig" deklarierst: schreibe explizit, **wo und wie es scheitert**. Häufigste Failure-Modes 2026: (1) Agent verliert sich in Sub-Tasks ohne Final Answer, (2) Tool-Spam in Schleife, (3) ein Sub-Agent halluziniert und Coordinator übernimmt die Halluzination, (4) Cost-Explosion bei einer Edge-Case-Eingabe, (5) HITL wird umgangen, weil Confidence-Threshold falsch gesetzt. Dokumentiere für deinen Use-Case.

- 🟢 **Eval-Tooling für Trajectories** — **Langfuse** (OSS, tracing-zentrisch, gut für Trajectories), **LangSmith** (kommerziell, native Trajectory-Eval), **Phoenix/Arize** (Production-Monitoring + Eval), **Anthropic Inspect** (OSS, eigene Eval-Patterns mit Trajectory-Support). LLM-as-Judge mit Trajectory-Awareness: dem Judge wird der gesamte Tool-Call-Verlauf gezeigt, nicht nur die Endantwort. [Langfuse Trajectory Tracing](https://langfuse.com/docs/observability/features/agent-graphs)

- 🟢 **Test-Case-Set für Trajectory-Eval** — anders als RAG-Test-Cases (Frage + erwartete Antwort) bestehen Trajectory-Test-Cases aus: (1) Input/Aufgabe, (2) erwarteter Endzustand, (3) **erlaubte/erwartete Tool-Sequenzen** (mehrere valide Pfade möglich), (4) **Anti-Pfade** (was *nicht* passieren darf). Mindestens 10-20 Cases für ein Production-Multi-Agent-System.

- 🟢 **Abgrenzung zu RAG-Eval (Modul 5.4)** — RAG-Eval bewertet Output-Qualität gegen Quellen. Trajectory-Eval bewertet den Prozess. Ein gutes Multi-Agent-System hat **beide** Eval-Layer: Trajectory + Endoutput. Dein Multi-Agent-Eval-Setup soll deshalb beides parallel laufen lassen.

### Praxis: Hauptprojekt — Multi-Agent-System mit Cost-Tracking, Sandbox und Trajectory-Eval

Baue ein Multi-Agent-System für einen konkreten Use-Case (Vorschläge):
- **Research-Pipeline**: Researcher-Agent (Web-Search + RAG aus 5.1), Writer-Agent (strukturiert die Findings), Reviewer-Agent (prüft Faktizität).
- **Sales-Lead-Pipeline**: Lead-Researcher, Qualifier, Email-Drafter, Reviewer.
- **Code-Maintenance**: Code-Analyzer, Refactor-Suggester, Test-Writer.

**Anforderungen:**
- **Stack:** LangGraph (oder Alternative deiner Wahl, mit Begründung) + LiteLLM + LangSmith oder Langfuse (OSS) für Tracing.
- **Mindestens 3 Agents** mit klar getrennten Verantwortungen.
- **Cost-Tracking**: pro Run wird Token-Verbrauch und €-Cost dokumentiert.
- **Mindestens ein sandboxed Tool**: Code-Execution oder Shell-Command in E2B/Modal/Docker.
- **Human-in-the-Loop** für eine kritische Aktion (z.B. "Email senden").
- **Trajectory-Eval-Setup** (Pflicht):
 - 10-20 Test-Cases mit Input + erwartetem Endzustand + erlaubten Tool-Sequenzen + Anti-Pfaden
 - Vier Trajectory-Metriken: Task Success Rate, Tool-Call Quality, Trajectory Efficiency, Cost Efficiency
 - Mindestens 5 Runs pro Test-Case (Stochastik), Median-Werte als Hauptergebnis
 - **Failure-Mode-Analyse-Doku**: 3-5 explizit dokumentierte Failure-Modes deines Systems mit Reproduktions-Schritten
- **Eval-Querschnitt-Anker**: dein Eval-Setup soll auf dem `13_querschnitt_eval.md` aufbauen — nicht eigene Methodik erfinden.
- Im Portfolio: `stufe-6_agenten/6-2-multi-agent-system/` mit Code, Architektur-Diagramm, Eval-Report, **Failure-Mode-Doku**, Demo-Video.

**Capstone-Update (🔧):** Falls dein Capstone-RAG-System aus 5.1 zum Use-Case passt, baue es zum Multi-Agent-System aus. Sonst halte das hier separat. *Capstone-spezifische Anforderungen siehe `17_capstone_a_engineer.md`.*

### 🎁 Mehrwert-Mini-Projekte
- **Persönlicher Recherche-Crew**: CrewAI-basierter Multi-Agent für Themen-Recherchen, die du regelmäßig brauchst (Markt-Trends, Produkt-Updates, Lern-Materialien).
- **Agent-Cost-Dashboard**: Streamlit-Dashboard, das deine Agent-Runs aus LangSmith/Langfuse visualisiert.
- **Failure-Mode-Cheatsheet**: deine persönliche Liste der 5-10 häufigsten Failure-Modes, die du in deinen Agent-Experimenten gesehen hast — wertvolle Lernkurve.

### 🌱 Open-Source-Pfad
Vollständig OSS:
- LangGraph oder CrewAI (beide OSS)
- Ollama für LLM-Backend (z.B. `qwen2.5:14b` für komplexe Multi-Agent-Tasks)
- Langfuse self-hosted für Tracing und Trajectory-Eval
- Docker Compose statt E2B/Modal für Sandbox
- SearXNG (OSS) für Web-Search

### Outcome-Check
- [ ] Multi-Agent-System mit mindestens 3 Agents
- [ ] Cost-Tracking pro Run dokumentiert
- [ ] Sandboxed Tool implementiert
- [ ] Human-in-the-Loop für kritische Aktion
- [ ] **Trajectory-Eval mit 10-20 Test-Cases und 4 Metriken**
- [ ] **5 Runs pro Test-Case (Stochastik), Median dokumentiert**
- [ ] **Failure-Mode-Doku mit 3-5 explizit dokumentierten Modes**
- [ ] Architektur-Diagramm im Portfolio
- [ ] Eval-Querschnitt-Anker (`13_querschnitt_eval.md`) genutzt, nicht eigene Methodik erfunden
---

## Modul 6.3: RL & Agent-Theorie

Dieses Modul ist **primär für 🧮**. Es liefert das theoretische Fundament für Agenten: Markov Decision Processes, Reinforcement Learning, Belief-States in POMDPs. Wer 🔧 oder 💼 ist, kann das Modul oberflächlich oder gar nicht machen — die Praxis aus 6.1 und 6.2 reicht für die meisten Engineer- und Strategist-Aufgaben.

**Aufwand:** 🔧 0-8h (optional) · 🧮 30-50h · 💼 0-4h (optional, konzeptionell)
**Voraussetzungen:** Modul 6.1, Querschnitt Math-Foundation (mindestens Probability)

### Lernziel
Für 🧮: Du verstehst MDPs, Bellman-Gleichungen, Q-Learning, Policy Gradients konzeptionell. Du kannst ein einfaches RL-Beispiel (CartPole, FrozenLake) implementieren.

Für 🔧: Du verstehst, was MDP/POMDP konzeptionell sind und wann sie für Agent-Design relevant werden.

Für 💼: Du verstehst, dass moderne Agenten oft *nicht* klassisches RL nutzen, sondern LLM-basiertes Reasoning. RL ist Foundations-Wissen, kein Praxis-Pflicht.

### Theorie

- 🟢 **Warum Agent-Theorie?** — die Frage "wie sollte ein rationaler Agent handeln?" wird seit den 1950ern formal untersucht (Bellman, Russell/Norvig). Modern: Agenten kombinieren klassische Theorie (MDP, Decision Theory) mit LLM-Reasoning. Wer Theorie versteht, baut robustere Agenten — auch wenn der Praxis-Code in 6.1/6.2 wenig "klassische" Theorie braucht. [Russell & Norvig — Artificial Intelligence: A Modern Approach (Buch)](https://aima.cs.berkeley.edu) (Standard-Referenz)

- 🟢 **Markov Decision Process (MDP)** — formales Modell für Sequential Decision Making: States, Actions, Transition-Probabilities, Rewards, Discount-Factor. Ein MDP ist die mathematische Beschreibung dessen, was ein Agent in einer Welt tut. [Wikipedia — MDP](https://en.wikipedia.org/wiki/Markov_decision_process) · [Sutton & Barto Buch (kostenlos online)](http://incompleteideas.net/book/the-book.html)

- 🟢 **Bellman-Equation und Value Functions** — Kern-Mathematik: der "Wert" eines States ist die erwartete kumulative Rückwirkung. Bellman-Equation rekursiv: V(s) = R(s) + γ·max_a Σ P(s'|s,a)·V(s'). Daraus leiten sich Value Iteration und Policy Iteration ab. [David Silver — RL Lectures (kostenlos)](https://www.davidsilver.uk/teaching/) · [Hugging Face — Deep RL Course](https://huggingface.co/learn/deep-rl-course/)

- 🟢 **POMDPs (Partially Observable MDPs)** — wenn der Agent den State nicht direkt beobachten kann (typisch in Real World): Belief-State, Update-Equations, Filtering. Computationally schwer, aber konzeptionell wichtig. [POMDP Tutorial](https://www.pomdp.org/tutorial/)

- 🟢 **Q-Learning und Deep Q-Networks (DQN)** — model-free RL: Agent lernt Q-Function (Value von State-Action-Paaren) durch Trial-and-Error. DQN: Q-Function als Neural Network. Klassiker, der 2013-2015 das Atari-Game-Playing revolutionierte. [DQN Paper (Nature 2015)](https://www.nature.com/articles/nature14236) · [Hugging Face — Q-Learning](https://huggingface.co/learn/deep-rl-course/unit2/introduction)

- 🟢 **Policy Gradients (PPO, A2C)** — direkt die Policy lernen, nicht den Wert. PPO (Proximal Policy Optimization) ist seit 2017 RL-Workhorse, auch in RLHF (Reinforcement Learning from Human Feedback) verwendet. [PPO Paper](https://arxiv.org/abs/1707.06347) · [OpenAI Spinning Up (kostenlos)](https://spinningup.openai.com)

- 🟢 **RLHF (Reinforcement Learning from Human Feedback)** — wie ChatGPT trainiert wird: Reward-Model lernt menschliche Präferenzen, dann PPO optimiert LLM gegen Reward. Vertiefung in Modul 10.2 (Fine-Tuning). [Anthropic — RLHF Paper](https://arxiv.org/abs/2204.05862)

- 🟢 **DPO, ORPO, GRPO als Alternative zu RLHF** — neuere Preference-Optimization-Methoden, die ohne Reward-Model und ohne RL auskommen. DPO (2023) ist 2026 oft Default für Preference Tuning. Vertiefung in Modul 10.2. [DPO Paper](https://arxiv.org/abs/2305.18290)

- 🟢 **Spieletheorie und Multi-Agent-Theorie** — wenn mehrere Agents interagieren: Nash-Equilibrium, Cooperative vs. Competitive Games, Mechanism Design. Für Multi-Agent-Systeme aus 6.2 manchmal relevant. [Stanford CS234 — Reinforcement Learning](https://web.stanford.edu/class/cs234/) · [Stanford CS221 — AI: Principles](https://stanford-cs221.github.io)

- 🟢 **LLM-basierte Agenten vs. klassisches RL** — wichtige Beobachtung 2026: moderne LLM-Agenten (ReAct, AutoGen-Stil) nutzen *kein* klassisches RL. Stattdessen: LLM ist die "Policy", die durch Sprache reasoning macht. Klassisches RL bleibt relevant für: Robotik, Games, kontinuierliche Steuerung, RLHF-Training. Reasoning-LLMs sind eine eigene Klasse mit RL-Trainingsanteil (z.B. GRPO bei DeepSeek R1). [Latent Space — RL in 2026](https://www.latent.space)

### Praxis: Hauptprojekt — Wähle nach Track

**Für 🧮: Vollständige RL-Implementation**
- Implementiere Q-Learning auf FrozenLake (Gymnasium-Environment).
- Implementiere DQN auf CartPole oder LunarLander.
- Implementiere einfaches PPO auf einem Gymnasium-Env.
- Vergleiche Konvergenz, Sample-Efficiency, Stabilität.
- Im Portfolio: `stufe-6_agenten/6-3-rl-implementation/`.

**Für 🔧 (optional): MDP-Bewusstsein für Agent-Design**
- Nimm einen Agent aus 6.2 und modelliere ihn formal als MDP/POMDP: was ist der State, die Action, die Transition? Dokumentiere als Markdown.
- Reflektion: wo könnte klassisches RL vs. LLM-Reasoning besser sein?
- Im Portfolio: `stufe-6_agenten/6-3-mdp-modeling/`.

**Für 💼 (optional): Konzeptionelles Briefing**
- Schreibe ein 2-Pager-Briefing für deine Stakeholder: "Wie funktioniert moderne KI-Agent-Theorie, was ist RL, was ist neu mit LLMs?"
- Als Übung im Strategist-Track: komplexe Theorie für Nicht-Techniker erklären.

### 🎁 Mehrwert-Mini-Projekte
- **Eigener Mini-Agent für Game** — z.B. Tic-Tac-Toe oder Connect Four mit Q-Learning. Visualisiert Lernprozess.
- **Theorie-Notizen-Cheatsheet** — eigene Markdown-Notizen zu MDP/POMDP/RL-Algorithmen, mit Diagrammen.

### 🌱 Open-Source-Pfad
- [Gymnasium](https://gymnasium.farama.org) (OSS, ehemals OpenAI Gym) — Standard-Environment-Library.
- [CleanRL](https://github.com/vwxyzjn/cleanrl) — referenz-saubere Implementierungen aller wichtigen RL-Algorithmen.
- [Stable-Baselines3](https://stable-baselines3.readthedocs.io) — production-ready RL-Library.

### Outcome-Check (track-spezifisch)
**🧮:**
- [ ] Q-Learning, DQN, PPO implementiert (oder zwei davon)
- [ ] Vergleichs-Studie mit Konvergenz-Plots
- [ ] Theorie-Notizen mit eigenen Worten

**🔧:**
- [ ] Mindestens ein Agent aus 6.2 als MDP modelliert
- [ ] Reflektion zu RL vs. LLM-Reasoning

**💼:**
- [ ] Konzeptionelles 2-Pager-Briefing
- [ ] Verständnis der wichtigsten Begriffe (MDP, RL, RLHF, DPO)

---

## Modul 6.4: Vendor-Patterns im Vergleich

LangGraph ist nicht der einzige Multi-Agent-Stack 2026. Die großen Provider (Anthropic, OpenAI, Google) haben eigene Agent-SDKs entwickelt, die produktionsreif sind. Dieses Modul vergleicht **Claude Agent SDK**, **OpenAI Agents SDK**, **Google ADK** — und zeigt, wann Vendor-SDKs den Frameworks vorzuziehen sind und wann nicht. Wichtig: das ist Vergleich, nicht Empfehlung — du entscheidest am Ende, was zu deinem Use-Case passt.

**Aufwand:** 🔧 9-14h · 🧮 4-6h · 💼 4-6h
**Voraussetzungen:** Module 6.1, 6.2, 6.0 Context Engineering, idealerweise 5.6 Skills

### Lernziel
Du hast denselben einfachen Agent in mindestens zwei Vendor-SDKs implementiert (z.B. Claude Agent SDK + OpenAI Agents SDK) und kannst Stärken/Schwächen begründet vergleichen.

### Theorie

- 🔄 **Warum Vendor-SDKs?** — drei Gründe, warum Provider eigene SDKs gebaut haben: (1) Native Support für eigene Features (Computer Use, Realtime, Reasoning Modes). (2) Schlankerer Code als Frameworks. (3) Bessere Performance (weniger Overhead). Trade-off: Vendor-Lock-in.

- 🔄 **Claude Agent SDK** — Anthropic's Agent-Framework, MCP-nativ, starker Focus auf Tool Use und langlaufende Agents. Stärken: Computer Use Integration, Extended Thinking nativ, MCP first-class. *Verfallsdatum: Nov 2026.* [Claude Agent SDK Docs](https://docs.claude.com/en/api/agent-sdk) · [Anthropic Cookbook — Agents](https://github.com/anthropics/anthropic-cookbook)

#### Claude Agent SDK Tiefe

In 5.2 hast du Claude Agent SDK als Vergleichs-Framework kennengelernt. Hier vertiefst du die vier Production-relevanten Patterns, die das SDK von einem reinen API-Wrapper unterscheiden.

- 🔄 **Sub-Agent-Spawn-Pattern** — Hauptagent kann Sub-Agents spawnen, jeder mit eigenem Context-Window. Verwendung: parallel Recherche aufteilen, oder ein Sub-Agent nur für Tool-Use, ein anderer nur für Synthese. SDK-Pattern: `Agent.spawn_subagent()` mit eigenem System-Prompt + Tool-Set. Brücke zu Modul 6.0 (Context Engineering: Sub-Agent-Token-Budget-Verteilung) und Modul 6.6 (Agentenschwärme: Conductor-Pattern). *Verfallsdatum: Nov 2026.*

- 🔄 **Skills-Integration** — SDK lädt Claude Skills automatisch on-demand basierend auf Description-Matching. Du legst SKILL.md-Files in einem Verzeichnis an, das SDK lädt sie zur Laufzeit. Brücke zu Modul 5.6 (Skills-Pattern). Keine eigene Tool-Registrierung nötig — SDK übernimmt Discovery. *Verfallsdatum: Nov 2026.*

- 🔄 **Compaction-Strategien aus der Box** — wenn Context-Window voll wird, komprimiert SDK automatisch ältere Konversation via LLM-Summarization. Konfigurierbar: Trigger-Schwelle, Compaction-Modell (oft anderes als Hauptmodell aus Cost-Gründen), beibehaltene Token-Slots. Brücke zu Modul 6.0 (Context Engineering: Compaction als Pflicht-Pattern). *Verfallsdatum: Aug 2026.*

- 🔄 **Session-Management** — persistente Session-IDs, automatische State-Wiederherstellung bei Reconnects, Konversations-History-Pruning. Wichtig für langlaufende Agents (Stunden bis Tage Laufzeit). Lokale State-Speicherung als File oder Remote-Backend (Redis, Postgres). *Verfallsdatum: Nov 2026.*

**Wann lohnt Claude Agent SDK über Framework + Provider-SDK?** — Faustregel: bei Claude-Commitment für Production, bei Sub-Agent-Heavy-Architekturen, bei langen Sessions mit Compaction-Bedarf. Bei Multi-Provider-Routing oder kurzen Prompts: bleib bei Framework + LiteLLM.

- 🔄 **OpenAI Agents SDK** — OpenAI's eigene Agent-Library, 2024-2025 entwickelt, ersetzt Assistants API. Stärken: nahtlose Integration mit OpenAI-Features (Realtime, Voice), Multi-Agent-Patterns built-in, Handoffs zwischen Agents. *Verfallsdatum: Nov 2026.* [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) · [OpenAI — Agents Guide](https://platform.openai.com/docs/guides/agents)

- 🔄 **Google ADK (Agent Development Kit)** — neuer als die anderen, integriert mit Vertex AI, gute Multi-Agent-Patterns, MCP-Support seit 2026. *Verfallsdatum: Nov 2026.* [Google ADK Docs](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder)

- 🔄 **Anthropic Claude Computer Use als Sonderpattern** — Claude kann seit 2024 direkt mit Computern interagieren (Maus, Tastatur, Screenshot-Reading). Anwendung: Browser-Automation, Desktop-Tasks, Form-Filling. Erfordert Sandbox. *Vertiefung in Modul 6.5.* [Anthropic — Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use)

- 🟢 **Wann Vendor-SDK, wann Framework?** — Faustregel:
 - **Vendor-SDK**, wenn du primär ein Modell nutzt und Provider-spezifische Features brauchst (Computer Use, Realtime).
 - **Framework (LangGraph, CrewAI)**, wenn du Multi-Provider-Flexibilität brauchst, oder komplexe State-Maschinen oder fortgeschrittene Patterns.
 - **Direkt SDK** (anthropic-sdk, openai-sdk + LiteLLM), wenn du minimalen Overhead willst und die Patterns aus 6.1 selbst implementieren willst.

- 🟢 **Migrations-Schmerz** — wer vor zwei Jahren auf LangChain Agents gesetzt hat, hatte Migrationen zu LangChain Expression Language, dann zu LangGraph. Wer auf Vendor-SDK setzt, hat Migrationspfad bei Vendor-Wechsel. Beides ist Realität — wähle bewusst und plane für Migration.

- 🔄 **MCP als Brücke zwischen den Welten** — alle drei Vendor-SDKs unterstützen MCP nativ 2026. Das heißt: deine MCP-Tools aus 5.3 funktionieren in jedem SDK. MCP entkoppelt Tool-Definition von Vendor-Wahl. Damit ist MCP der wichtigste Lock-in-Mitigations-Faktor 2026.

### Praxis: Hauptprojekt — Vendor-Vergleich

Wähle zwei Vendor-SDKs und implementiere denselben Agent in beiden:

- **Use-Case**: einfacher Research-Agent mit 2-3 Tools (Web-Search, Calculator, RAG aus 5.1).
- **Implementation A**: z.B. Claude Agent SDK
- **Implementation B**: z.B. OpenAI Agents SDK
- **Bonus**: zusätzliche Implementation in LangGraph als dritte Variante (siehe 6.2).

**Vergleich auf konkreten Dimensionen**:
- Lines of Code
- Setup-Aufwand
- Streaming, Logging, Error Handling
- Native Features (z.B. Reasoning Mode, Realtime)
- Cost und Performance auf 5 Test-Aufgaben
- Migration: wenn du das SDK wechseln müsstest, was wäre der Aufwand?

Schreibe einen kurzen Vergleichs-Report mit Empfehlungen für verschiedene Use-Cases.

Im Portfolio: `stufe-6_agenten/6-4-vendor-vergleich/` mit beiden Code-Versionen, Test-Aufgaben, Vergleichs-Report.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliche Vendor-SDK-Decision-Tree** als Markdown: für welche Use-Case-Klasse welches SDK?
- **Computer-Use-Demo** mit Claude: ein einfacher Browser-Automation-Task — *wird in Modul 6.5 vertieft*.

### 🌱 Open-Source-Pfad
Vendor-SDKs sind per definition nicht OSS. Aber:
- LangGraph (OSS) als dritte Variante in deinem Vergleich.
- [smolagents](https://github.com/huggingface/smolagents) von Hugging Face als minimalistisches OSS-Agent-Framework als vierte Variante.

### Outcome-Check
- [ ] Mindestens zwei Vendor-SDK-Implementierungen desselben Agents
- [ ] Vergleichs-Tabelle mit konkreten Metriken
- [ ] Decision-Matrix für Vendor-Wahl
- [ ] Migrations-Reflektion: wie austauschbar sind die SDKs?
- [ ] **Mindestens eines der vier Claude-Agent-SDK-Tiefen-Patterns** erklärbar (Sub-Agent-Spawn / Skills-Integration / Compaction / Session-Management) und für eigenen Capstone-Use-Case bewertet

---

## Modul 6.5: Computer Use & Agentic Browsing
**Aufwand:** 🔧 10-15h · 🧮 6-10h · 💼 4-6h
**Voraussetzungen:** Module 6.1, 6.2

### Warum dieses Modul existiert

Anthropic Computer Use, OpenAI Operator, Google Project Mariner sind eigene Pattern-Klassen mit spezifischen Sicherheits-, Eval- und Praxis-Aspekten. Wer 2026 Agent-Systeme baut und Computer Use ignoriert, übergeht eines der wichtigsten neuen Pattern-Klassen. Modul 6.5 macht es zur eigenständigen Disziplin.

### Lernziel

Du hast einen Computer-Use-Agent zumindest **einmal selbst zum Laufen gebracht** (Anthropic Computer Use, OpenAI Operator, oder ein OSS-Äquivalent), kennst die spezifischen Sicherheits-Aspekte (Sandbox-Pflicht!), und verstehst, wann Computer Use die richtige Wahl ist und wann nicht.

### Theorie

- 🔄 **Was ist Computer Use?** — eine Pattern-Klasse, in der ein LLM nicht nur Tools (definierte Funktionen) aufruft, sondern **direkt mit einer Computer-Umgebung interagiert** — Maus-Klicks, Tastatur-Eingaben, Screenshot-Lesen, Browser-Navigation. Anthropic Computer Use (Oktober 2024) war Pionier, OpenAI Operator und Google Project Mariner folgten 2025/2026. *Verfallsdatum: Aug 2026.* [Anthropic — Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use) · [Anthropic — Computer Use Demo Repo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo)

- 🔄 **Anthropic Computer Use** — Claude bekommt Screenshots als Input und gibt strukturierte Aktionen zurück (`mouse_click(x, y)`, `type("text")`, `screenshot()`, `scroll()`). Anthropic stellt einen Reference-Docker-Container bereit, der die Umgebung sandboxt. Stärken: gut dokumentiert, native MCP-Integration, robuste Pattern. Schwächen: noch beta, Kosten pro Action hoch (mehrere Screenshots pro Iteration). *Verfallsdatum: Aug 2026.*

- 🔄 **OpenAI Operator** — OpenAI's Computer-Use-Pendant, fokussiert auf Browser-Tasks (im Gegensatz zu Anthropic, das auch Desktop-Tasks erlaubt). Stärken: spezialisierte Browser-Optimierungen, gute Integration mit OpenAI-Stack. *Verfallsdatum: Aug 2026.* [OpenAI Operator](https://openai.com/index/introducing-operator/)

- 🔄 **Google Project Mariner** — Google's Browser-Agent, Chrome-Extension-basiert, eingebunden in Gemini. Stärken: nativ in Chrome, gute Search-/Web-Integration. *Verfallsdatum: Aug 2026.* [Google Project Mariner](https://deepmind.google/technologies/project-mariner/)

- 🔄 **OSS-Alternativen 2026** — [Anthropic Computer Use Demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) ist OSS und nutzbar als Referenz. [Browser Use](https://github.com/browser-use/browser-use) ist eine Open-Source-Library, die Browser-Automation für beliebige LLMs ermöglicht (nicht nur Claude). [Skyvern](https://github.com/Skyvern-AI/skyvern) als weitere OSS-Option mit Schwerpunkt auf Form-Automation. *Verfallsdatum: Aug 2026.*

- 🟢 **Sandboxing ist nicht optional, sondern Pflicht** — ein Computer-Use-Agent kann beliebige Aktionen ausführen: Dateien löschen, E-Mails senden, Käufe tätigen, Passwörter eingeben. **Niemals auf einem Production-Rechner laufen lassen, niemals mit Zugriff auf echte Accounts ohne explizite Beschränkung.** Mindestens: Docker-Container mit eigenem User, eingeschränkter Filesystem-Sicht, kein Network-Access auf interne Netze. Bevorzugt: VM oder Cloud-Sandbox (E2B, Modal, Browserbase). [Anthropic — Computer Use Safety](https://docs.claude.com/en/docs/build-with-claude/computer-use#safety-considerations)

- 🟢 **Confirmation-Pattern für destruktive Aktionen** — wenn dein Computer-Use-Agent E-Mails senden, Dateien löschen, oder Käufe tätigen kann: Confirmation-Step ist Pflicht. Pattern: Agent stoppt vor der destruktiven Aktion, zeigt Screenshot + Aktions-Beschreibung, wartet auf User-Approval. Im Beta-Stadium 2026 oft manuelles Confirmation, in Production automatisierte Policy-Engine.

- 🟢 **Wann Computer Use lohnt sich** — nicht für jeden Use-Case. Lohnenswert wenn: (1) Es gibt **keine API** für die Ziel-Anwendung (Legacy-Software, exotische Web-Apps). (2) **Multi-Step-Workflow** über mehrere UIs hinweg (z.B. "kopiere Daten aus System A in System B"). (3) **Visuelle Erkennung** ist Teil des Tasks (Charts lesen, Screenshots interpretieren). Nicht lohnenswert wenn: API-basierter Pfad existiert (immer schneller, billiger, robuster), repetitive deterministische Workflows (klassische RPA-Tools sind besser), Production-Stabilität gefordert ist (Computer Use ist 2026 noch Beta-Niveau).

- 🟢 **Cost-Realität: Computer Use ist 5-20x teurer als API-Calls** — pro Action: Screenshot + LLM-Call + Aktion. Bei einem 30-Step-Browser-Task schnell mehrere Dollar pro Run. Vergleich: API-basierte Lösung kostet meist <$0.10. Computer Use als letzten Ausweg, nicht als Default.

- 🔄 **Eval für Computer-Use-Agents** — eigene Disziplin: (1) **Task Success Rate** auf realistischen Web-/Desktop-Tasks. (2) **Robustness gegen UI-Änderungen** — wie verhält sich der Agent, wenn ein Button einen Pixel verschoben ist? (3) **Safety Rate** — wie oft führt der Agent eine destruktive Aktion ohne Confirmation aus? **Eval-Querschnitt-Anker:** siehe `13_querschnitt_eval.md`. *Hinweis: Computer-Use-Eval ist 2026 noch nicht standardisiert — Anthropic veröffentlicht eigene Benchmarks (OSWorld, WebArena). [OSWorld](https://os-world.github.io) · [WebArena](https://webarena.dev)*

- 🔄 **Praxis-Awareness: Computer Use ist Beta** — die Tools entwickeln sich rasant. Was Mai 2026 funktioniert, kann August 2026 anders sein. Halte dich an offizielle Reference-Implementierungen, baue keine Production-kritischen Workflows auf Computer Use, plane für Migrations-Aufwand.

### Praxis: Hauptprojekt — Computer-Use-Demo

Wähle EINE der folgenden Optionen:

**Option A: Anthropic Computer Use Demo (empfohlen für 🔧)**
- Klone [Anthropic Computer Use Demo Repo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo).
- Folge dem Quickstart: Docker-Container starten, Anthropic-API-Key eintragen, Demo-Task laufen lassen ("Buche mir ein Hotel in Berlin für nächste Woche" o.ä.).
- **Erweitere** den Demo um einen eigenen Task aus deinem Alltag — Form ausfüllen, Daten extrahieren, Multi-Schritt-Workflow.
- **Beobachte** das Verhalten: Wo macht der Agent Fehler? Wie geht er mit unerwarteten UI-Zuständen um?
- **Cost-Tracking**: dokumentiere Cost pro Task.

**Option B: OSS-Browser-Automation (für 🌱-Pfad)**
- Setup mit [Browser Use](https://github.com/browser-use/browser-use) gegen Ollama (lokales LLM) oder Cloud-API.
- Implementiere einen Browser-Workflow deiner Wahl (z.B. "lade Wetter-Daten aus drei verschiedenen Quellen, vergleiche").

**Option C: Computer-Use-Awareness ohne eigenen Build (für 💼)**
- Schaue Anthropic Computer Use Demo Video oder OpenAI Operator Demo.
- Schreibe ein 2-Pager-Briefing für Stakeholder: Was ist Computer Use, wann lohnt sich es, wann nicht, was sind die Risiken?
- Im Portfolio: `stufe-6_agenten/6-5-computer-use-briefing/`.

### Im Portfolio

`stufe-6_agenten/6-5-computer-use/` mit:
- Code (für Optionen A und B) oder Briefing (für Option C)
- README mit Setup und Demo-Run-Ergebnissen
- **Sicherheits-Audit**: welche Aktionen sind destruktiv? Wie ist Confirmation gelöst? Welche Sandbox?
- Cost-Pro-Task-Dokumentation
- Reflektion: wann würdest du Computer Use einsetzen, wann nicht?

### 🎁 Mehrwert-Mini-Projekte

- **Persönlicher Browser-Helfer-Agent** für eine wiederkehrende Browser-Aufgabe (z.B. "checke jeden Montag drei Newsletter-Webseiten auf neue Posts"). Mit klaren Sicherheits-Beschränkungen.
- **Computer-Use-Failure-Mode-Sammlung** — Liste der Situationen, in denen dein Agent überraschend gescheitert ist. Wertvoll für späteren Re-Use.

### 🌱 Open-Source-Pfad

- [Browser Use](https://github.com/browser-use/browser-use) gegen Ollama lokal — komplett kostenfrei, lokal lauffähig.
- [Anthropic Computer Use Demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) ist selbst OSS — nutzbar als Referenz auch ohne Anthropic-API.
- Sandboxing mit Docker statt E2B: Container mit eingeschränktem User, eigenem Display via VNC.

### Outcome-Check

- [ ] Computer-Use-Agent mindestens einmal lauffähig erlebt (Option A, B oder Briefing nach C)
- [ ] Sicherheits-Audit dokumentiert: welche Sandbox, welche destruktiven Aktionen, welche Confirmation-Steps
- [ ] Cost-Pro-Task dokumentiert
- [ ] Reflektion zu "wann lohnt es sich, wann nicht?"
- [ ] Mindestens ein Failure-Mode dokumentiert (was hast du gesehen, das nicht funktionierte?)

---

## Modul 6.6: Agentenschwärme
Multi-Agent-Architekturen sind 2026 dominantes Industrie-Thema. Vier Pattern-Familien etabliert: Conductor, Hierarchical, Peer-Swarm, Hybrid. Industrie-Konsens 2026: **Hierarchical wins over Swarm in production almost every time** — aber Awareness der Pattern-Familie ist Pflicht. Modul baut auf Modul 6.2 (Multi-Agent + Trajectory-Eval) auf und erweitert um die strategische Pattern-Wahl.

**Aufwand:** 🔧 8-12h · 🧮 6-10h · 💼 3-5h
**Voraussetzungen:** Module **6.0 Context Engineering**, 6.2 (Multi-Agent + Trajectory-Eval), 6.4 (Vendor-Patterns)
**Status:** Pflicht 🔧, empfohlen 🧮/💼

### Lernziel
Du kannst zwischen Conductor-, Hierarchical-, Peer-Swarm- und Hybrid-Patterns informiert wählen für einen gegebenen Use-Case. Du verstehst die Failure-Modes von Schwärmen (Drift, Race-Conditions, Coordination-Overhead, unterschwellige Sub-Task-Konflikte) und ihre Mitigations. Du kannst einen kleinen Hybrid-Schwarm implementieren und gegen ein Conductor-Pattern empirisch vergleichen.

### Theorie

- 🟢 **Pattern-Familie 2026 — vier dominante Architekturen:**
 - **Conductor** (zentral): Master-Agent delegiert an spezialisierte Workers, sammelt Ergebnisse, entscheidet Fortgang. Klar, debuggable, Bottleneck am Master.
 - **Hierarchical**: Top-Orchestrator → Team-Leads → Spezialisten. Skaliert besser als pur zentral, lokale Entscheidungen ohne Master-Bottleneck.
 - **Peer-Swarm** (dezentral): Agenten kommunizieren direkt, kein zentraler Master. Schnell parallel, schwer steuerbar, hohes Drift-Risiko.
 - **Hybrid (Guided Autonomy)**: Conductor-Layer für Mission-Planning, Swarm-Layer für parallelisierbare Execution. Industrie-Pragmatik 2026 für Production-Systeme. [Agix Technologies — Conductor vs. Swarm](https://agixtech.com/insights/conductor-vs-swarm-multi-agent-ai-orchestration/) · [DigitalApplied — Agent Architecture Patterns 2026](https://www.digitalapplied.com/blog/agent-architecture-patterns-taxonomy-2026)

- 🟢 **Wann welches Pattern? Faustregel 2026:**
 - Compliance, Audit-Pflicht, klare Sub-Tasks → **Conductor**.
 - Große Org mit autonomen Domänen, klar abgegrenzte Sub-Bereiche → **Hierarchical**.
 - Exploratory, Forschungs-Modus, parallel scrapeable → **Peer-Swarm** (Vorsicht: Drift).
 - Production mit Mix von Strukturiertem und Parallelem → **Hybrid**.
 - Industrie-Konsens: "Hierarchical wins over swarm in production almost every time. The supervisor anchors goal alignment; swarms drift without it."

- 🔄 **Anthropic Agent Teams (Februar 2026, Claude Opus 4.6)** — produktiver Schwarm-System für Code-Workflows. Sub-Agents für Explore / Plan / Execute mit Hauptagent als Conductor. *Verfallsdatum: Aug 2026.*

- 🟢 **Failure-Modes von Schwärmen** — vier dominante Failure-Klassen:
 - (1) **Drift** — Schwarm verliert Ziel ohne Conductor-Anker. Problem: keine Stop-Bedingung, kein Goal-Check.
 - (2) **Race-Conditions** — zwei Agenten schreiben gleiche Ressource (File, DB-Eintrag), letzter gewinnt, andere Arbeit verloren.
 - (3) **Coordination-Overhead** — mehr Tokens für Inter-Agent-Messages als für eigentliche Arbeit. Schwarm wird langsamer und teurer als Single-Agent.
 - (4) **Sub-Task-Konflikte unterschwellig** — Worker liefern widersprüchliche Ergebnisse, Supervisor merkt es nicht (z.B. zwei Agenten geben gegensätzliche Empfehlung, aggregierter Output ist Mischmasch).

- 🟢 **Mitigations als Production-Pflicht:**
 - (1) **Exit-Kriterien explizit pro Schritt** — jeder Sub-Task hat Stop-Bedingung.
 - (2) **Strukturierter Output (JSON) zwischen Agenten** — keine Free-Form-Konversation als Inter-Agent-Kommunikation.
 - (3) **Locking/Versionierung auf gemeinsame Ressourcen** — File-Lock, optimistic concurrency control auf DB.
 - (4) **Hard-Limits auf Turns/API-Calls** — Cost-Spike vermeiden.
 - (5) **Supervisor-Watchdog gegen Repetition** — wenn zwei Agenten in Schleife driften, Notbremse.
 - (6) **Human-in-the-Loop für High-Stakes** — bestätigte Schritte vor Deploy/Publish/Send.
 - [Fastio — Swarm Orchestration Best Practices](https://fast.io/resources/ai-agent-swarm-orchestration/)

- 🟢 **Anker zu Trajectory-Eval (Modul 6.2)** — Schwarm-Eval ist Trajectory-Eval pro Agent + **Inter-Agent-Communication-Eval**. Neue Metrik: **Coordination-Cost** (Tokens für Inter-Agent-Messages / Tokens für eigentliche Arbeit) — Production-Schwelle: <30% bedeutet Pattern lohnt sich, >50% bedeutet Single-Agent oder Conductor wäre besser.

- 🔄 **Framework-Mapping 2026:**
 - **LangGraph**: stark in Graph-Pattern + Supervisor-Worker (Hierarchical), schwach in Peer-Swarm.
 - **AutoGen** (Microsoft): stark in Group-Chat (Peer-Swarm-Variante), Debate-Pattern, Supervisor-Worker.
 - **CrewAI**: rollenbasiert, stark in Supervisor-Worker (Crew/Task-Metapher).
 - **OpenAI Agents SDK**: native Multi-Agent-Primitive, Handoff-Pattern.
 - **Claude Agent SDK** (Anthropic): Sub-Agent-Spawn, Skills-Integration. *Verfallsdatum: Aug 2026.*

- 🟢 **Anti-Pattern: Schwarm wo Workflow reicht** — "Wir machen alles als Multi-Agent, weil cool" ist 2024er-Hype. 2026 ist die Default-Empfehlung: **Workflow > Agent, Single-Agent > Multi-Agent, Conductor > Schwarm — außer der Use-Case verlangt das Gegenteil.** Brücke zu Modul 6.2 "Wann Multi-Agent vermeiden".

### Praxis: Hauptprojekt — Schwarm vs. Conductor-Vergleich auf eigenem Use-Case

Nimm einen Use-Case aus deinem Capstone (z.B. RAG-Agent aus 5.1, der jetzt auf Multi-Source-Recherche erweitert werden soll).

**Implementiere zwei Varianten:**
- **V1 Conductor**: Master-Agent mit 3 Workers (Topic-Research / Quellen-Eval / Synthese).
- **V2 Hierarchical**: Team-Lead "Recherche" und Team-Lead "Validierung", je 2 Workers.

**Eval-Vergleich (Anschluss an Modul 6.2 Trajectory-Eval):**
- Task Success Rate
- Trajectory Quality
- Tool Usage Quality
- Cost Efficiency
- **Coordination-Cost** *(neu in 6.6)*: Tokens für Inter-Agent-Messages / Tokens für eigentliche Arbeit
- **Time-to-Result** *(neu in 6.6)*: Wall-Clock-Time von Eingabe bis fertiges Ergebnis

**Failure-Mode-Test:** einen Fehler einbauen (z.B. eine Quelle gibt 500 zurück) — wie reagiert jede Architektur? Drift, Race-Condition, Coordination-Overhead-Spike?

**Reflexion:** welches Pattern für welchen Use-Case-Typ in deinem Capstone? Begründete Entscheidung dokumentieren.

Im Portfolio: `stufe-6_agenten/6-6-schwaerme/` mit Code beider Varianten, Eval-Report, Failure-Mode-Test, Reflexion.

### 🎁 Mehrwert-Mini-Projekte
- **Pattern-Decision-Tree** als 1-Pager: für welche Use-Case-Charakteristika welches Pattern?
- **Capstone-Phase-7c-Vorbereitung** — wenn dein Capstone-A in Phase 7c den Schwarm-vs-Conductor-Vergleich macht, kannst du diese Praxis-Übung direkt einbinden.

### 🌱 Open-Source-Pfad
AutoGen + CrewAI + LangGraph alle OSS. Für Peer-Swarm: AutoGen Group-Chat. Für Conductor: LangGraph Supervisor-Worker oder CrewAI Crew/Task. Beide Varianten gut auf Ollama mit lokalen Modellen lauffähig (etwas langsamer, aber komplett kostenfrei und DSGVO-konform).

### Outcome-Check
- [ ] Vier Pattern (Conductor / Hierarchical / Peer-Swarm / Hybrid) erklärbar mit Stärken/Schwächen
- [ ] Zwei Varianten implementiert + verglichen
- [ ] Trajectory-Eval auf beide Varianten mit allen 4 + 2 neuen Metriken
- [ ] Failure-Mode-Test dokumentiert mit beobachteten Drift- oder Race-Condition-Cases
- [ ] Pattern-Wahl für eigenen Capstone begründet
- [ ] Anthropic Agent Teams oder analoges Produkt gelesen/inspiziert

---

## Modul 6.7: Agentic OS
"Agentic OS" ist 2026 ein Begriff mit zwei Bedeutungen, die du beide kennen solltest. (a) **Framework-Pattern**: Layer-Architektur über Context, Memory, Skills, Self-Learning (MindStudio, Agno, Reshape). (b) **System-Software-Ebene**: tatsächliches OS-Layer für Agenten mit Process-Scheduling, Isolation, Resource-Management (AIOS-Foundation, AgenticOS-Workshop ASPLOS 2026, Cowork). Modul behandelt beide Lesarten und legt eine minimale Agentic-OS-Schicht über deinen Capstone-Agent.

**Aufwand:** 🔧 6-10h · 🧮 4-6h · 💼 4-6h
**Voraussetzungen:** Module **6.0 Context Engineering**, **5.6 Skills-Pattern**, **6.6 Agentenschwärme**
**Status:** Pflicht 🔧, Awareness 🧮/💼

### Lernziel
Du verstehst, was "Agentic OS" als Begriff bezeichnet — sowohl als Framework-Pattern (Layer-Architektur über Context, Memory, Skills, Self-Learning) als auch als System-Software-Ebene (Prozess-Scheduling, Isolation, Resource-Mgmt für Agenten). Du kannst eine minimale Agentic-OS-Schicht über deinen Capstone-Agent legen und ihren Nutzen empirisch einordnen (Eval-Vergleich vor/nach).

### Theorie

- 🟢 **Begriffs-Klärung: Agentic OS hat zwei Bedeutungen 2026:**
 - **(a) Framework-Pattern** (MindStudio, Agno, Reshape): Layer-Architektur — Context-Layer + Memory-Layer + Skills/Collaboration-Layer + Self-Learning-Layer. Persistente, versionierte Wissens-Schicht über mehreren Agenten/Sessions. [MindStudio — Agentic OS Architecture](https://www.mindstudio.ai/blog/agentic-os-architecture-four-patterns-claude-code) · [MindStudio — Business Brain mit Claude Code](https://www.mindstudio.ai/blog/agentic-os-architecture-claude-code-business-brain)
 - **(b) System-Software-Ebene** (AIOS-Foundation, AgenticOS-Workshop ASPLOS 2026, Cowork): tatsächliches OS-Layer mit Process-Scheduling, Isolation, Filesystem-Abstraktion, Network-Policies für Agenten. Forschungs- und Frühprodukt-Phase Mai 2026. [AgenticOS Workshop ASPLOS 2026](https://os-for-agent.github.io/)

- 🟢 **Was ein Agentic OS leistet (beide Lesarten):**
 - (1) **Persistenz** — Agent merkt sich über Sessions hinweg.
 - (2) **Konsistenz** — mehrere Agenten teilen Wissen ohne Inkonsistenzen.
 - (3) **Versionierung** — Wissen evolviert nachvollziehbar (Git-artig).
 - (4) **Isolation** — Agent A kann Agent B nicht ungewollt beeinflussen.
 - (5) **Governance** — Policies und Audit zentral, nicht pro Agent.

- 🟢 **Pattern-Architektur (Lesart a) — vier Layers:**
 - **Context-Layer**: frischer Kontext pro Run (Modul 6.0).
 - **Memory-Layer**: persistentes organisations- oder user-spezifisches Wissen (Brand-Memory, Konversations-History, Decision-Logs).
 - **Skills/Collaboration-Layer**: wiederholbare Domain-Workflows (Modul 5.6).
 - **Self-Learning-Layer**: Feedback-Schleife, die Skills/Memory anpasst basierend auf Eval-Ergebnissen.

- 🟢 **CLAUDE.md-Pattern als minimaler Agentic-OS-Layer** — strukturierte Markdown-Datei im Repo-Root, die persistenten Kontext + Brand-Voice + Workflows enthält. Cross-Session, cross-Agent, versionierbar via Git. Frühform eines Agentic OS für die meisten Praktiker — ausreichend für 80% der Use-Cases. [MindStudio Business Brain](https://www.mindstudio.ai/blog/agentic-os-architecture-claude-code-business-brain)

- 🔄 **System-Software-Beispiele (Lesart b, Awareness Mai 2026):**
 - **Cowork** (Anthropic, beta) — Lokale Linux-VM auf User-Maschine, sandboxed Filesystem für Agenten.
 - **AIOS-Foundation** — OSS-Framework mit semantischem Filesystem (ICLR 2025-Paper), wachsende Community (tausende GitHub-Sterne).
 - **OpenClaw / Open Interpreter** — lokale Agent-Runtimes mit Shell+File+Browser-Zugriff.
 - **PubMatic AgenticOS** — domänenspezifischer Agent-Layer für Programmatic Advertising (Januar 2026 launch).
 - *Verfallsdatum: Aug 2026 — Frühprodukt-Phase, Konsolidierung erwartet.*

- 🟢 **Antipatterns:**
 - (1) **"Agentic OS" als reines Buzzword** für Multi-Agent-Setup ohne persistente Schicht.
 - (2) **Memory-Layer ohne Versionierung** → Wissen-Drift, niemand merkt's.
 - (3) **Skills-Layer ohne Eval** → Skills werden schlechter, niemand merkt's.
 - (4) **Self-Learning ohne Eval-Anker** → Modell lernt das Falsche, optimiert auf falsche Metrik.
 - (5) **System-Software-Layer (Lesart b) für einfachen Use-Case** → Kanonen auf Spatzen.

- 🟢 **Brücke zu Modul 9.3 Operating Model** — Agentic OS auf Org-Ebene ist organisatorisches Operating Model. Die zwei Begriffe konvergieren 2026: technisches Agentic OS und organisatorisches Operating Model sind zwei Seiten derselben Medaille (Wer-darf-was, Wie-läuft-Eskalation, Wie-bleibt-Wissen-konsistent).

### Praxis: Hauptprojekt — Minimaler Agentic-OS-Layer für eigenen Capstone (🔧)

Lege im Capstone-Repo eine `AGENT_OS/`-Struktur an mit:
```
AGENT_OS/
├── context/        # Kontextfragmente (kann minimal sein, primär Context-Layer aus 6.0)
├── memory/
│   ├── brand_voice.md
│   ├── glossary.md
│   └── decisions_log.md
├── skills/         # SKILL.md-Files aus Modul 5.6 + mind. zwei weitere
└── learning/
    ├── failure_modes.md  # laufend gepflegt aus Eval-Runs
    └── improvement_log.md
```

**Eval-Vergleich**: gleicher Use-Case-Run mit/ohne Agentic-OS-Schicht über mindestens 10 Test-Cases (aus Modul 5.0). Quality, Cost, Coherence-über-Sessions vergleichen.

**Reflexion**: Was hat die persistente Schicht gebracht? Wo war sie überflüssig? Wo hat sie geholfen, wo geschadet (Context-Pollution)? Brücke-Notiz zu 9.3 Operating Model bei 💼.

Im Portfolio: `stufe-6_agenten/6-7-agentic-os/` mit Repo-Struktur, Eval-Vergleich, Reflexion.

### Awareness-Variante für 🧮 / 💼

Nicht selbst bauen, sondern eines der existierenden Systeme inspizieren (Cowork, MindStudio Business Brain, Agno) und 1-2-Pager-Brief schreiben:
- "Was ist die Architektur?"
- "Was sind die Trade-offs?"
- "Wann lohnt sich das für meinen Use-Case?"

Im Portfolio: `stufe-6_agenten/6-7-agentic-os/awareness-brief.md`.

### 🎁 Mehrwert-Mini-Projekte
- **CLAUDE.md-Audit** auf existierende Open-Source-Projekte: viele Repositories haben schon CLAUDE.md oder vergleichbare Files. Inspiziere 3-5 davon und identifiziere die vier Layers (Context / Memory / Skills / Self-Learning).
- **Capstone-Phase-7d-Vorbereitung** — wenn dein Capstone-A in Phase 7d einen Agentic-OS-Layer baut, ist diese Praxis die direkte Umsetzung.

### 🌱 Open-Source-Pfad
AGENT_OS-Pattern als reines Markdown-File-System ist plattform-unabhängig. Optional: **Agno** (OSS, Apache 2.0) oder **Letta** (vormals MemGPT, OSS) für strukturierte Memory-Frameworks. Pure-Markdown-Variante reicht für die meisten Capstones.

### Outcome-Check
- [ ] Beide Lesarten (Framework-Pattern vs. System-Software) erklärbar mit je einem Beispiel
- [ ] (🔧) Eigene `AGENT_OS/`-Struktur im Capstone-Repo angelegt
- [ ] (🔧) Mindestens 3 Memory-Files + 3 Skill-Files
- [ ] (🔧) Eval-Vergleich vor/nach Agentic-OS-Layer auf 10+ Test-Cases
- [ ] (🧮/💼) 1-2-Pager-Awareness-Brief auf existierendes System
- [ ] Brücke zu 9.3 Operating Model für 💼 als Awareness-Notiz
- [ ] Reflexion: war's den Aufwand wert? Welche Antipatterns vermieden?

---

## Free-Zertifikate für Stufe 6

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) | Hugging Face | 30-50h | Vertiefung 6.1, 6.2 — mit Zertifikat + Leaderboard |
| [LangChain Academy — Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph) | LangChain | ~10h | Vertiefung 6.2 |
| [DLAI — Multi AI Agent Systems with crewAI](https://learn.deeplearning.ai) | DeepLearning.AI / CrewAI (Audit-Modus) | ~2h | Vertiefung 6.2 |
| [DLAI — AI Agents in LangGraph](https://learn.deeplearning.ai) | DeepLearning.AI / LangChain (Audit-Modus) | ~2h | Vertiefung 6.2 |
| [Hugging Face Deep RL Course](https://huggingface.co/learn/deep-rl-course/) | Hugging Face | 30-50h | Pflicht für 🧮 in 6.3, mit Zertifikat |
| [David Silver — RL Lectures](https://www.davidsilver.uk/teaching/) | DeepMind / UCL | 20-30h | Vertiefung 6.3 für 🧮 |

**Coursera-Audit-Modus-Hinweis:** DLAI-Materialien sind im Audit-Modus auf learn.deeplearning.ai kostenlos zugänglich. Details siehe `99_anhang.md`.

---

## Stufen-Outcome

Nach Stufe 6 hast du:
- ✅ **Context-Engineering-Disziplin verstanden, Token-Bilanz erstellt, Compaction-Strategie implementiert**
- ✅ ReAct-Agent from scratch in <200 Zeilen Python
- ✅ Multi-Agent-System mit Cost-Tracking, Sandboxing, Eval
- ✅ **Trajectory-Eval mit 4 Metriken und Failure-Mode-Doku**
- ✅ **Computer-Use-Agent mindestens einmal erlebt + Sicherheits-Audit**
- ✅ Vendor-SDK-Vergleich mit eigener Decision-Matrix
- ✅ **Mindestens eines der vier Claude-Agent-SDK-Tiefen-Patterns** erklärbar (Sub-Agent-Spawn / Skills-Integration / Compaction / Session-Management) und für eigenen Use-Case bewertet
- ✅ **Eval-Querschnitt-Anker durchgehend genutzt** statt eigene Methodik
- ✅ **Vier Schwarm-Patterns erklärt + Schwarm-vs-Conductor-Vergleich auf eigenem Use-Case mit Trajectory-Eval + Coordination-Cost**
- ✅ **Minimale Agentic-OS-Schicht über eigenem Capstone-Agent (🔧) oder 1-2-Pager-Awareness-Brief (🧮/💼)**
- 🧮: RL und Agent-Theorie verstanden, eigene RL-Implementations
- 🔧: Capstone hat Multi-Agent-Funktionalität, Frontier-Patterns (Schwarm/Agentic OS) auf Capstone evaluiert *(Capstone-Update siehe `17_capstone_a_engineer.md`)*
- 💼: Konzeptionelles Verständnis von Agent-Theorie, Computer-Use-Patterns, Schwarm-Patterns und Agentic-OS-Trade-offs

**Du bist bereit für Stufe 7: Deep Learning Foundations — die Stufe mit den größten Track-Tiefen-Unterschieden.**

