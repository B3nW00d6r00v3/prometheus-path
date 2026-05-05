# Stufe 6: Agenten

**Aufwand gesamt:** 🔧 40-70h · 🧮 30-50h · 💼 15-30h
**Voraussetzungen:** Stufen 1-3, optional 4, Stufe 5
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

KI-Agenten sind 2026 das wichtigste Anwendungs-Pattern für komplexe Workflows. Diese Stufe baut den Agent **erst from scratch** (Pattern verstehen), dann mit modernen Frameworks (LangGraph, Agent-SDKs), dann mit Theorie-Anker (RL, MDP für 🧮), und schließlich vergleicht die Vendor-spezifischen Patterns (Claude Agent SDK, OpenAI Agents SDK, Google ADK).

Hier wird dein Capstone-Engineer-Projekt aus Stufe 5 zum **Multi-Agent-System** erweitert.

**Ergebnis nach Stufe 6:**
- Du hast einen ReAct-Agent from scratch in <200 Zeilen Python gebaut.
- Du hast ein Multi-Agent-System mit LangGraph oder einem Vendor-SDK gebaut.
- Du verstehst Cost-Tracking, Sandboxing, Eval für Agenten.
- 🧮: Du verstehst RL und MDP/POMDP konzeptionell.
- 🔧: Capstone hat Multi-Agent-Funktionalität.

---

## Modul 6.1: Agent-Patterns

Der wichtigste Schritt zum Agent-Verständnis: **du baust einen ReAct-Agent from scratch**, ohne Framework. In 100-200 Zeilen Python sieht ein Agent — Tool-Definition, Loop, Observation, Action — sehr klar aus. Wenn du das einmal selbst geschrieben hast, ist jedes Framework danach nur noch Abstraktion über bekannten Patterns. Hier kommt auch MCP wieder ins Spiel: deine selbstgebauten Tools können MCP-konform sein.

**Aufwand:** 🔧 12-18h · 🧮 12-18h · 💼 6-10h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
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

- 🔄 **MCP-Tools statt Custom-Tools** — 2026-Best-Practice: definiere deine Tools als MCP-Server (siehe 5.3). Damit funktionieren sie mit Claude, OpenAI, Gemini, Cursor — nicht nur deinem eigenen Agent. Backwards-kompatibel: dein Agent kann MCP-Tools nutzen wie normale Function-Calls. [MCP Tools](https://modelcontextprotocol.io/docs/concepts/tools)

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

**Bonus (🔧 für Capstone)**: Erweitere deinen Capstone-RAG aus Stufe 5 zu einem ReAct-Agent — der Agent kann jetzt deine RAG-Tools nutzen plus Web-Search.

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
- [ ] Bonus 🔧: Capstone als Agent erweitert

---

## Modul 6.2: Multi-Agent & LangGraph

Single-Agent reicht für viele Use-Cases — aber komplexe Workflows brauchen Multi-Agent-Architekturen: ein Coordinator-Agent, mehrere Spezialisten-Agents, klare Verantwortungs-Trennung. Dieses Modul lehrt dich Multi-Agent-Patterns mit **LangGraph** (Industriestandard 2026), behandelt aber auch die wichtigsten Alternativen (CrewAI, AutoGen). Plus die Production-Aspekte: **Cost-Tracking**, **Sandboxing**, **Agent-Eval**.

**Aufwand:** 🔧 15-22h · 🧮 8-12h · 💼 5-8h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 6.1, optional 4.1

### Lernziel
Du hast ein Multi-Agent-System mit LangGraph (oder einer Alternative) gebaut, mit Cost-Tracking, mindestens einem sandboxed Tool, und einer Eval-Methodik für Agent-Trajectories.

### Theorie

- 🔄 **Multi-Agent-Patterns 2026** — vier wichtige Architekturen:
 - **Supervisor / Coordinator**: ein Master-Agent delegiert an Spezialisten. Klassisch und robust.
 - **Hierarchical**: mehrere Coordinator-Levels, sinnvoll für sehr komplexe Workflows.
 - **Sequential Pipeline**: Agents in fester Reihenfolge (Researcher → Writer → Reviewer).
 - **Parallel / Concurrent**: mehrere Agents arbeiten gleichzeitig, Ergebnisse aggregiert.

 [LangGraph — Multi-Agent Concepts](https://langchain-ai.github.io/langgraph/concepts/multi_agent/) · [Anthropic — Building Effective Agents (Patterns)](https://www.anthropic.com/research/building-effective-agents)

- 🔄 **LangGraph als Industrie-Default 2026** — von LangChain, aber eigenständig nutzbar. Stark: explizite State-Maschine (du siehst, was passiert), Persistenz (Workflows können pausieren/fortsetzen), Streaming pro Node, Human-in-the-Loop. Schwach: Lernkurve steiler als CrewAI. [LangGraph Docs](https://langchain-ai.github.io/langgraph/) · [LangChain Academy — LangGraph Course (kostenlos)](https://academy.langchain.com/courses/intro-to-langgraph)

- 🔄 **CrewAI — schnelles Multi-Agent-Prototyping** — höhere Abstraktion: du definierst Agents (mit Rolle, Goal, Backstory) und Tasks, CrewAI orchestriert. Schneller zum Ergebnis, weniger Kontrolle als LangGraph. [CrewAI Docs](https://docs.crewai.com)

- 🔄 **AutoGen v0.4+ — Microsoft-Stack** — kompletter Refactor 2024-2025, jetzt Event-Driven, gute Multi-Agent-Conversation-Patterns. Beliebt im Microsoft-Ökosystem. [AutoGen Docs](https://microsoft.github.io/autogen/)

- 🔄 **Vendor-Agent-SDKs als ernstzunehmende Alternative** — Claude Agent SDK, OpenAI Agents SDK, Google ADK sind 2025/2026 production-grade. Stärken: schlanker als Frameworks, native Provider-Features (z.B. Claude Computer Use, OpenAI Realtime), MCP-nativ. Schwächen: Vendor-Lock-in. Wird in 6.4 vertieft.

- 🟢 **State-Management in Multi-Agent** — wer wem was kommuniziert, wer welchen Context behält, wann State gespeichert wird. LangGraph macht das explizit, andere Frameworks implizit. State-Modelle: Shared State (alle sehen alles), Message-Passing (Agents sehen nur, was ihnen gesendet wird), Hybrid.

- 🟢 **Cost-Tracking als Pflicht** — Multi-Agent-Runs können dramatisch teuer werden (10 Agents × 5 Iterations × 2000 Tokens = schnell mehrere Dollar pro Run). Cost-Tracking pro Agent-Run, pro Agent, pro Tool. Tools 2026: [LangSmith](https://www.langchain.com/langsmith), [Helicone](https://www.helicone.ai), [Langfuse](https://langfuse.com) (OSS). [Helicone Docs](https://docs.helicone.ai) · [Langfuse Docs](https://langfuse.com/docs)

- 🟢 **Sandboxing für gefährliche Tools** — wenn dein Agent Code ausführen kann (Python REPL, Shell-Commands), brauchst du Sandboxing — sonst kann ein verirrter Agent dein System beschädigen. 2026-Optionen: [E2B](https://e2b.dev) (cloud sandboxes), [Modal](https://modal.com) (serverless mit Sandbox), [Daytona](https://daytona.io) (Dev Environments), Docker-basierte Sandboxes selbst. [E2B Docs](https://e2b.dev/docs)

- 🟢 **Agent-Eval ist anders als RAG-Eval** — Metriken: **Task Success Rate** (wurde Aufgabe gelöst?), **Trajectory Quality** (war der Lösungsweg sinnvoll?), **Tool Usage** (richtige Tools? richtige Reihenfolge?), **Cost Efficiency** (waren die Schritte effizient?). [LangSmith — Agent Evaluation](https://docs.smith.langchain.com/old/cookbook/testing-examples/agent-evaluation) · [Anthropic — Agent Evals](https://www.anthropic.com/research/swe-bench-sonnet)

- 🟢 **Human-in-the-Loop als Sicherheits-Mechanismus** — kritische Aktionen (Email senden, DB-Write, Geld-Transaktion) brauchen Mensch-Bestätigung. LangGraph hat HITL nativ. Pattern: Agent stoppt, präsentiert geplante Aktion, wartet auf "approve"/"reject"/"modify". [LangGraph — Human-in-the-Loop](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)

- 🟢 **Agent-Anti-Patterns** — (1) **Endless Loop ohne Stop-Bedingungen**. (2) **Tool-Spam** (Agent ruft dasselbe Tool 20x). (3) **Cost Explosion** (kein Budget-Limit). (4) **Hallucinated Tool Calls** (Agent erfindet Tools, die nicht existieren). (5) **No Logging** (Black-Box-Verhalten ohne Debugging-Möglichkeit). Alle vermeidbar mit guten Defaults und Eval.

### Praxis: Hauptprojekt — Multi-Agent-System mit Cost-Tracking + Sandbox

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
- **Eval-Run** auf 10-20 Test-Cases: Task Success Rate, durchschnittliche Cost, durchschnittliche Iterations.
- Im Portfolio: `stufe-6_agenten/6-2-multi-agent-system/` mit Code, Architektur-Diagramm, Eval-Report, Demo-Video.

**Capstone-Update (🔧):** Falls dein Capstone-RAG-System aus 5.1 zum Use-Case passt, baue es zum Multi-Agent-System aus. Sonst halte das hier separat.

### 🎁 Mehrwert-Mini-Projekte
- **Persönlicher Recherche-Crew**: CrewAI-basierter Multi-Agent für Themen-Recherchen, die du regelmäßig brauchst (Markt-Trends, Produkt-Updates, Lern-Materialien).
- **Agent-Cost-Dashboard**: Streamlit-Dashboard, das deine Agent-Runs aus LangSmith/Langfuse visualisiert.

### 🌱 Open-Source-Pfad
Vollständig OSS:
- LangGraph oder CrewAI (beide OSS)
- Ollama für LLM-Backend (z.B. `qwen2.5:14b` für komplexe Multi-Agent-Tasks)
- Langfuse self-hosted für Tracing
- Docker Compose statt E2B/Modal für Sandbox
- SearXNG (OSS) für Web-Search

### Outcome-Check
- [ ] Multi-Agent-System mit mindestens 3 Agents
- [ ] Cost-Tracking pro Run dokumentiert
- [ ] Sandboxed Tool implementiert
- [ ] Human-in-the-Loop für kritische Aktion
- [ ] Eval auf 10-20 Test-Cases mit Task Success Rate
- [ ] Architektur-Diagramm im Portfolio

---

## Modul 6.3: RL & Agent-Theorie

Dieses Modul ist **primär für 🧮**. Es liefert das theoretische Fundament für Agenten: Markov Decision Processes, Reinforcement Learning, Belief-States in POMDPs. Wer 🔧 oder 💼 ist, kann das Modul oberflächlich oder gar nicht machen — die Praxis aus 6.1 und 6.2 reicht für die meisten Engineer- und Strategist-Aufgaben.

**Aufwand:** 🔧 0-8h (optional) · 🧮 30-50h · 💼 0-4h (optional, konzeptionell)
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
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

**Aufwand:** 🔧 8-12h · 🧮 4-6h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 6.1, 6.2

### Lernziel
Du hast denselben einfachen Agent in mindestens zwei Vendor-SDKs implementiert (z.B. Claude Agent SDK + OpenAI Agents SDK) und kannst Stärken/Schwächen begründet vergleichen.

### Theorie

- 🔄 **Warum Vendor-SDKs?** — drei Gründe, warum Provider eigene SDKs gebaut haben: (1) Native Support für eigene Features (Computer Use, Realtime, Reasoning Modes). (2) Schlankerer Code als Frameworks. (3) Bessere Performance (weniger Overhead). Trade-off: Vendor-Lock-in.

- 🔄 **Claude Agent SDK** — Anthropic's Agent-Framework, MCP-nativ, starker Focus auf Tool Use und langlaufende Agents. Stärken: Computer Use Integration, Extended Thinking nativ, MCP first-class. [Claude Agent SDK Docs](https://docs.claude.com/en/api/agent-sdk) · [Anthropic Cookbook — Agents](https://github.com/anthropics/anthropic-cookbook)

- 🔄 **OpenAI Agents SDK** — OpenAI's eigene Agent-Library, 2024-2025 entwickelt, ersetzt Assistants API. Stärken: nahtlose Integration mit OpenAI-Features (Realtime, Voice), Multi-Agent-Patterns built-in, Handoffs zwischen Agents. [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) · [OpenAI — Agents Guide](https://platform.openai.com/docs/guides/agents)

- 🔄 **Google ADK (Agent Development Kit)** — neuer als die anderen, integriert mit Vertex AI, gute Multi-Agent-Patterns, MCP-Support seit 2026. [Google ADK Docs](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder)

- 🔄 **Anthropic Claude Computer Use als Sonderpattern** — Claude kann seit 2024 direkt mit Computern interagieren (Maus, Tastatur, Screenshot-Reading). Anwendung: Browser-Automation, Desktop-Tasks, Form-Filling. Erfordert Sandbox. [Anthropic — Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use)

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
- **Computer-Use-Demo** mit Claude: ein einfacher Browser-Automation-Task (z.B. "fülle das Formular aus, lade die PDF herunter").

### 🌱 Open-Source-Pfad
Vendor-SDKs sind per definition nicht OSS. Aber:
- LangGraph (OSS) als dritte Variante in deinem Vergleich.
- [smolagents](https://github.com/huggingface/smolagents) von Hugging Face als minimalistisches OSS-Agent-Framework als vierte Variante.

### Outcome-Check
- [ ] Mindestens zwei Vendor-SDK-Implementierungen desselben Agents
- [ ] Vergleichs-Tabelle mit konkreten Metriken
- [ ] Decision-Matrix für Vendor-Wahl
- [ ] Migrations-Reflektion: wie austauschbar sind die SDKs?

---

## Capstone-Update für Track A (Engineer)

Nach Stufe 6 hat dein Capstone-Engineer-Projekt Multi-Agent-Funktionalität:
- ✅ RAG (5.1)
- ✅ Framework-Wahl (5.2)
- ✅ MCP (5.3)
- ✅ Eval (5.4)
- ✅ Frontend (5.5)
- ✅ Multi-Agent (6.2)
- ✅ Cost-Tracking + Sandboxing (6.2)

In Stufe 10.2 (Fine-Tuning) und 10.3 (Production) wird dein Capstone vervollständigt.

---

## Free-Zertifikate für Stufe 6

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) | Hugging Face | 30-50h | Vertiefung 6.1, 6.2 — mit Zertifikat + Leaderboard |
| [LangChain Academy — Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph) | LangChain | ~10h | Vertiefung 6.2 |
| [DLAI — Multi AI Agent Systems with crewAI](https://learn.deeplearning.ai) | DeepLearning.AI / CrewAI | ~2h | Vertiefung 6.2 |
| [DLAI — AI Agents in LangGraph](https://learn.deeplearning.ai) | DeepLearning.AI / LangChain | ~2h | Vertiefung 6.2 |
| [Hugging Face Deep RL Course](https://huggingface.co/learn/deep-rl-course/) | Hugging Face | 30-50h | Pflicht für 🧮 in 6.3, mit Zertifikat |
| [David Silver — RL Lectures](https://www.davidsilver.uk/teaching/) | DeepMind / UCL | 20-30h | Vertiefung 6.3 für 🧮 |

---

## Stufen-Outcome

Nach Stufe 6 hast du:
- ✅ ReAct-Agent from scratch in <200 Zeilen Python
- ✅ Multi-Agent-System mit Cost-Tracking, Sandboxing, Eval
- ✅ Vendor-SDK-Vergleich mit eigener Decision-Matrix
- 🧮: RL und Agent-Theorie verstanden, eigene RL-Implementations
- 🔧: Capstone hat Multi-Agent-Funktionalität
- 💼: Konzeptionelles Verständnis von Agent-Theorie

**Du bist bereit für Stufe 7: Deep Learning Foundations — die Stufe mit den größten Track-Tiefen-Unterschieden.**

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: Vendor-SDK-Updates (Claude Agent SDK, OpenAI Agents SDK), MCP-Server-Registry-Wachstum, neue Multi-Agent-Patterns, RLHF-Alternativen.