# Changelog

Zentraler Aktualisierungslog des KI-Meisterlehrplans.

---

## v2.2.0 — Mai 2026

**Frontier-Themen-Integration nach zweiter Gremium-Review.**

v2.2 ist eine **inhaltliche Erweiterung** von v2.1 — die Struktur (11 Stufen, 4 Querschnitte, 3 Capstones) bleibt erhalten, aber Frontier-Themen 2026 werden systematisch integriert. Plus: Aufwand-Realismus, Express-Pfade, Track-Sequenzdiagramme.

### Strukturelle Änderungen

- **Aufwand-Schätzungen** mit drei Bandbreiten (optimistisch / realistisch / mit-Pufferung) statt einer optimistischen Spalte.
- **Express-Pfade pro Track** (🔧 ~150-220h, 🧮 ~250-400h, 💼 ~150-220h) mit ehrlich reduzierter Outcome-Rubrik.
- **Track-Sequenzdiagramme** als Mermaid-Visualisierungen.
- **Outcome-Rubrik pro Track auf 7 messbare Kompetenzen erweitert** (von 6 in v2.1).
- **Renumbering**: Querschnitt 16 (Safety) neu eingefügt, Capstones verschoben von 15/16/17 auf 17/18/19.
- **Stanford CS336** als Vergleichs-/Vertiefungs-Referenz für 🧮 ergänzt.

### Neue Module (Welle 3)

- **Modul 2.5.5** — Reasoning-Awareness-Block (Vorlauf zu 7.5)
- **Modul 5.6** — Skills-Pattern (Claude Skills, Codex Skills, Hamel evals-skills)
- **Modul 6.0** — Context Engineering (Token-Budget, Memory, Compaction)
- **Modul 6.6** — Agentenschwärme (Conductor/Hierarchical/Peer-Swarm/Hybrid)
- **Modul 6.7** — Agentic OS (Framework-Pattern, System-Software-Layer)
- **Modul 7.5** — Reasoning-Modelle (Test-Time-Compute, GRPO, PRM/ORM)
- **Modul 7.6** — Distributed Training (DDP, FSDP, ZeRO, Megatron-Style)
- **Modul 9.7** — Failure-Case-Library (DE/EU 2024-2026 Cases)
- **Querschnitt 16** — AI Safety & Red-Teaming
- **Capstone-A Phasen 7c/7d/7e** — Schwarm, Agentic-OS, Red-Team-Pass

### Erweiterungen bestehender Module (Welle 2)

- **Modul 5.1** — RAG-Frontier-Block (HyDE, GraphRAG, ColBERTv2, Reranking-Cascades)
- **Modul 5.2** — Structured Outputs + Claude Agent SDK
- **Modul 6.4** — Claude Agent SDK Tiefe (Sub-Agent-Spawn, Skills, Compaction, Sessions)
- **Modul 7.4** — Audio/Voice-AI + Video-Generation-Awareness

### Bewusst nicht umgesetzt

- Voice-Agent-Capstone als eigene Variante (kommt in v2.3)
- Externe Peer-Review-Pflicht (bleibt Empfehlung)
- Kohorten-Modus
- Multi-Modal-Generation als eigene Stufe
- Ultra-Light-Variante (~60-80h, verschoben in v2.3)

---

## v2.1.0 — Mai 2026

**Iterative Vertiefung von v2.0 nach 5-Rollen-Gremium-Evaluation.**

v2.1 ist keine Strukturrevolution, sondern eine **operative Vertiefung**: das v2.0-Skelett bleibt erhalten, Praxis-Fallen werden systematisch geschlossen.

### Strukturelle Änderungen

- **Curriculum aufgeteilt in 19 Einzeldateien** plus konsolidierte Master-Datei.
- **3 Capstone-Dateien einzeln** mit Master-Sektion für gemeinsame Inhalte.
- **Tier-1-Pflicht-Vorbedingungen für 🧮 verschärft**: Math-Diagnose-Gate vor Stufe 7 + Pflicht-Module 8.1+8.2+8.5.
- **Tier-1-Pflicht-Vorbedingungen für 🔧 verschärft**: Stufe 4 wird Pflicht statt Empfehlung.
- **💼-Track-Aufwand korrigiert** auf 350-500h (von 250-350h).
- **Capstone-Operate-Phase als Goldstandard** für 🔧 und 💼: 4-6 Wochen Real-User-Betrieb.

### Neue Module (Tier 1)

- **Modul 5.0** — Eval-Mini (Hamel-Husain-Methodik als Pflicht vor 5.1)
- **Modul 6.5** — Computer Use (Browser-/Desktop-Automation via Vision-LLMs)
- **Modul 9.0** — Datenstrategie (Datenreife, Inventar, Architektur, DSGVO)
- **Modul 9.6** — Change Management (Stakeholder, Adoption-Curve, Betriebsrat)
- **Math-Diagnose-Test** als Gate-Sektion vor Stufe 7

### Inhalts-Vertiefung (Tier 2)

- **Modul 1.3** — Vorgeschmack-Demo (RAG+MCP+Eval als "Wow-Effekt")
- **Modul 2.5** — Reasoning-Block + Cost-Awareness-Mini-Block
- **Modul 5.3** — MCP-Sicherheits-Block (OAuth 2.1, Audit-Logs) + A2A-Awareness
- **Modul 6.2** — Trajectory-Eval-Pflicht-Block (4 Metriken, Failure-Mode-Analyse)
- **Modul 8.2** — Logistic Regression from scratch (Brücke zu Backprop)
- **Modul 9.3** — Operating Model verstärkt (KPI 3 Ebenen, NIST AI RMF, ISO 42001)
- **Modul 10.2** — Decision-Framework Fine-Tuning vs. RAG vs. Prompt-Engineering
- **Modul 10.3** — Eval-as-CI verstärkt (Schwellenwert-Logik, Anti-Patterns)
- **Outcome-Rubrik pro Track** in Master-Übersicht
- **Self-Assessments S5/S7/S9** als Pflicht-Anker

### Pflege-Mechanik (Tier 3)

- 3-Monats-Audit-Schema für A-Tiefe-Module
- Verfallsdatum-Stempel pro 🔄-Bullet
- Repo-Veröffentlichungs-Härtung (CC-BY-SA-4.0, README, CONTRIBUTING, Issue-Templates)
- Coursera-Audit-Modus-Dokumentation

### Bewusst nicht umgesetzt

- Reinforcement Learning als eigenständiges Modul (bleibt in 6.3)
- Audio als eigenständiges Modul (bleibt in 7.4)
- NLP-Foundations vor LLMs (optional über CS224N)
- Externe Capstone-Reviewer-Pflicht (zu hohe Hürde)
- Kohorten-Modus (Format-Frage, nicht Curriculum)

---

## v2.0.0 — Mai 2026 (initiale Version)

**Vollständiger Rebuild von v1.0 nach Phase-1-bis-4-Evaluation.**

### Strukturelle Änderungen

- Track-Logik: von Forking auf einheitlichen Hauptpfad mit Tiefen-Markierungen (🔧/🧮/💼/🥇)
- Selbst-gepactes Format: Aufwand pro Modul, keine "X Monate"-Versprechen
- 11 Stufen statt 8 (Onboarding als Stufe 1, ehemals integrierte Stufen aufgeteilt)
- 3 Querschnitte hinzugefügt (Math, Eval, Production)
- 3 Capstone-Optionen statt einem End-Projekt
- Capstone startet in Stufe 5/7/9, nicht am Ende

### Sequenz-Korrekturen

- Klassisches ML (Stufe 8) nach Deep Learning (Stufe 7) — DL ist mathematische Foundation
- Decision Trees (8.2) vor Boosting (8.3) — XGBoost = Boosted Decision Trees
- Strategie (Stufe 9) nach Praxis-Stufen (5-6) — Strategie ohne Substrat ist Theater
- Math als Just-in-Time-Querschnitt statt Pre-Stufe

### Inhaltliche Aktualisierungen

- Moderne Embedding-Modelle (text-embedding-3-large, BGE-M3, Cohere Embed v4)
- MCP als verpflichtender roter Faden
- pgvector als pragmatischer Default (statt Pinecone)
- Moderne Transformer-Komponenten (RoPE, GQA, KV-Cache, MLA)
- Fine-Tuning modernisiert (DPO, ORPO, GRPO, DoRA)
- Aktuelle OSS-Modelle (Llama 4, Qwen 3, Gemma 4, DeepSeek V4)
- LLMOps-Tools (Helicone, Langfuse, LangSmith, Promptfoo)
- EU AI Act vollständige Vertiefung
- Multi-Model-Routing 70/25/5-Pattern
- Prompt-Caching als Production-Standard

### Open-Source-Konsistenz

- Jedes Modul mit dediziertem 🌱 Open-Source-Pfad
- Keine Bezahl-Kurse als Pflicht (nur als Option)
- Free-Zertifikate-Tabelle pro Stufe
- Curriculum-interne Outcome-Schwellen messbar

---

*Letzte Aktualisierung: Mai 2026*
