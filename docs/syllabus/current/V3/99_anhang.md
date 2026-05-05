# Anhang

**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Dieser Anhang enthält:
1. **Vollständiger Aktualisierungslog** (v2.0, v2.1, v2.2 integriert)
2. **Aktualisierungs-Mechanik** — 3-Monats-Audit-Schema für volatile A-Tiefe-Module
3. **Repo-Veröffentlichungs-Härtung** — README-Vorlage, CC-BY-SA-4.0-Lizenz, Contribution-Guide, Issue-Templates
4. **Coursera-Audit-Modus-Dokumentation**
5. **Capstone-Timeline** (orientativ)
6. **Cross-Track-Capstone-Hinweis**
7. **Optionales Glossar**

> **Inventar-Dateien:** Für strukturiertes Migrations-Mapping siehe `00_inventar_v2_0_zu_v2_1.md` (v2.0→v2.1) und `00_inventar_v2_1_zu_v2_2.md` (v2.1→v2.2).

---

# 1. Aktualisierungslog (zentral)

Zentraler Log aller Änderungen am Curriculum. Dezentraler Log pro Datei am Ende jeder Stufe/Querschnitt/Capstone.

## v2.2.0 — Mai 2026

**Frontier-Themen-Integration nach zweiter Gremium-Review.**

v2.2 ist eine **inhaltliche Erweiterung** von v2.1 — die Struktur (11 Stufen, 3 Querschnitte → jetzt 4, 3 Capstones) bleibt erhalten, aber die in v2.1 fehlenden Frontier-Themen 2026 werden systematisch integriert. Plus: Aufwand-Realismus, Express-Pfade, Track-Sequenzdiagramme.

### Strukturelle Änderungen v2.2

- **Aufwand-Schätzungen ehrlich mit drei Bandbreiten** (optimistisch / realistisch / mit-Pufferung) statt einer optimistischen Spalte. Erwartete-Dauer-Tabelle entsprechend kalibriert.
- **Express-Pfade pro Track** (🔧 ~150-220h, 🧮 ~250-400h, 💼 ~150-220h) mit ehrlich reduzierter Outcome-Rubrik — explizit besser als Vollvariante mit Abbruch.
- **Track-Sequenzdiagramme** als Mermaid-Visualisierungen in `000_master.md` für 🔧 / 🧮 / 💼.
- **Outcome-Rubrik pro Track auf 7 messbare Kompetenzen erweitert** (von 6 in v2.1) — Frontier-Punkt 7 pro Track.
- **Renumbering**: Querschnitt 16 (Safety) NEU eingefügt, Capstones verschoben von 15/16/17 auf **17/18/19**. File-Index 15 absichtlich freigehalten für künftige Erweiterung.
- **Stanford CS336** (Language Modeling from Scratch, Spring 2024) als Vergleichs-/Vertiefungs-Referenz für 🧮 ergänzt.

### Inhaltliche Aktualisierungen v2.2 — Welle 2 (Erweiterungen bestehender Module)

- **Modul 5.1 RAG-Frontier-Block** — HyDE, Reasoning-Augmented Retrieval, GraphRAG, ColBERTv2/Late-Interaction, Reranking-Cascades.
- **Modul 5.2 Structured Outputs** — Pydantic-Schemas, Outlines/Instructor, Function-Calling-Strict-Modes; plus **Claude Agent SDK** als prominentes Vergleichs-Framework.
- **Modul 6.4 Claude Agent SDK Tiefe** — Sub-Agent-Spawn, Skills-Integration, Compaction, Session-Mgmt.
- **Modul 7.4 Audio + Video** — Audio/Voice-AI-Block (Whisper, ElevenLabs, OpenAI Realtime API) plus Video-Generation-Awareness (Veo 3, Sora, Runway Gen-4, Pika).

### Inhaltliche Aktualisierungen v2.2 — Welle 3 (neue Pflicht-Module)

- **Modul 2.5.5 Reasoning-Awareness-Block (NEU)** — Vorlauf zu 7.5, alle Tracks.
- **Modul 5.6 Skills-Pattern (NEU)** — Claude Skills, Codex Skills, Hamel evals-skills als eigene Disziplin zwischen Prompt, MCP-Tool und System-Prompt. Pflicht 🔧.
- **Modul 6.0 Context Engineering (NEU)** — **Pflicht-Vorlauf zu Stufe 6 für alle Tracks**. Token-Budget, Memory-Architekturen, Compaction-Patterns, Sub-Agent-Delegation.
- **Modul 6.6 Agentenschwärme (NEU)** — Conductor / Hierarchical / Peer-Swarm / Hybrid mit Failure-Modes und Mitigations.
- **Modul 6.7 Agentic OS (NEU)** — Framework-Pattern (Context + Memory + Skills + Self-Learning Layers) und System-Software-Layer-Awareness (AIOS, Cowork).
- **Modul 7.5 Reasoning-Modelle (NEU)** — Test-Time-Compute als eigene Skalierungs-Achse, Trainings-Patterns (GRPO, PRM/ORM), Inferenz-Patterns. Pflicht 🧮.
- **Modul 7.6 Distributed Training (NEU)** — DDP, FSDP, ZeRO 1/2/3, Megatron-Style Tensor+Pipeline-Parallelism. Pflicht 🧮.
- **Modul 9.7 Failure-Case-Library (NEU)** — DE/EU 2024-2026 Cases (McDonald's, Klarna, DPD, Air Canada, etc.) als Empirie-Anker für 💼.
- **Querschnitt 16 AI Safety / Red-Teaming (NEU)** — OWASP Top 10 LLM, Threat-Models, Defense-Patterns, Red-Team-as-CI. Pflicht 🔧 vor Capstone-Operate.
- **Capstone-A Phasen 7c/7d/7e** — Schwarm-vs-Conductor-Vergleich (optional), Agentic-OS-Layer (optional), Red-Team-Pass (Pflicht für Operate-Goldstandard).

### Bewusst NICHT in v2.2 umgesetzt

- **Voice-Agent-Capstone als eigene Variante** — zu früh für stabile Production-Patterns Mai 2026, kommt in v2.3.
- **Externe Peer-Review-Pflicht** — bleibt Empfehlung (für Open-Repo nicht durchsetzbar). Pattern dokumentiert in v2.3-Roadmap.
- **Kohorten-Modus** — nicht realistisch ohne Plattform.
- **Multi-Modal-Generation als eigene Stufe** — in 7.4 als Awareness reicht für Mai 2026.
- **Ultra-Light-Variante (~60-80h)** — verschoben in v2.3, weil Express-Pfade in v2.2 die akute Lücke schon adressieren.

### Migration v2.1 → v2.2

Wer v2.1 angefangen hat oder beendet hat, holt v2.2 selektiv nach:
- **Stufe 5 abgeschlossen:** RAG-Frontier-Block in 5.1, Structured Outputs + Claude Agent SDK in 5.2 retrofitten (~3-5h). Modul 5.6 Skills nachholen (4-6h).
- **Stufe 6 abgeschlossen:** **Pflicht-Nachholung 6.0 Context Engineering** (8-12h) — sonst sind Frontier-Outcomes nicht erreichbar. Empfohlen: 6.6 Schwärme + 6.7 Agentic OS (14-22h).
- **Stufe 7 abgeschlossen:** Audio-Block in 7.4 nachholen, 7.5 Reasoning + 7.6 Distributed (für 🧮) nachholen.
- **Stufe 9 abgeschlossen:** 9.7 Failure-Case-Library nachholen (8-12h für 💼).
- **Capstone in Arbeit:** Phase 7c+7d (Schwarm + Agentic-OS) als optionale Erweiterung, Phase 7e Red-Team-Pass als Pflicht für Operate-Goldstandard.
- **Querverweise auf alte Capstone-File-Pfade** in eigenen Notizen aktualisieren: `15_capstone_a_engineer.md` → `17_…`, `16_capstone_b_…` → `18_…`, `17_capstone_c_…` → `19_…`. Vollständiges Mapping siehe `00_inventar_v2_1_zu_v2_2.md`.

---

## v2.1.0 — Mai 2026

**Iterative Vertiefung von v2.0 nach 5-Rollen-Gremium-Evaluation.**

v2.1 ist keine Strukturrevolution gegenüber v2.0, sondern eine **operative Vertiefung**: das v2.0-Skelett wird beibehalten, aber an mehreren Stellen werden die häufigsten Praxis-Fallen systematisch geschlossen.

### Strukturelle Änderungen v2.1

- **Curriculum aufgeteilt in 19 Einzeldateien** plus eine konsolidierte Master-Datei (Konkatenation für Lese-Komfort).
- **3 Capstone-Dateien einzeln** (17/18/19, ab v2.2 renumbered von 15/16/17) statt zusammen, mit Master-Sektion in `17_capstone_a_engineer.md` für gemeinsame Inhalte (Demo-Video, Pitch, Lessons-Learned).
- **Tier-1-Pflicht-Vorbedingungen für 🧮 verschärft**: Math-Diagnose-Gate vor Stufe 7 + Pflicht-Module 8.1+8.2+8.5 vor Stufe 7.
- **Tier-1-Pflicht-Vorbedingungen für 🔧 verschärft**: Stufe 4 (klassische Programmier-Foundation) wird Pflicht statt Empfehlung.
- **💼-Track-Aufwand korrigiert** auf 350-500h (von 250-350h) — 80-130h davon in Stufe 9 (verstärkt).
- **Capstone-Operate-Phase als Goldstandard** für 🔧 und 💼: 4-6 Wochen Real-User-Betrieb nach Production-Hardening / Pilot-Tests.

### Inhaltliche Aktualisierungen v2.1 — Tier 1 (Strukturelles Rework)

- **Modul 5.0 Eval-Mini (NEU)** — Hamel-Husain-Methodik als Pflicht-Hands-On vor 5.1, mit API + Ollama-Variante. Schließt die "Eval kommt erst spät"-Lücke.
- **Modul 6.5 Computer Use (NEU)** — Browser- und Desktop-Automation via Vision-LLMs als eigenständiges Modul.
- **Modul 9.0 Datenstrategie (NEU)** — Datenreife-Bewertung, Inventar, Architektur, Lock-in, DSGVO als Pflicht-Vorbedingung in Stufe 9.
- **Modul 9.6 Change Management (NEU)** — Stakeholder-Mapping, Adoption-Curve, Schulungs-Konzept, Betriebsrat-Plan als eigenständiges Modul.
- **Modul 9.3 Operating Model verstärkt** — KPI-System auf 3 Ebenen (Strategic / Operational / System), NIST AI RMF Map auf eigene Org, ISO 42001-Bereitschafts-Bewertung, AI-Platform-Skizze.
- **Math-Diagnose-Test als Gate-Sektion (NEU)** — 15 Aufgaben in drei Kategorien (Lineare Algebra / Calculus / Wahrscheinlichkeit), Selbstkorrektur, Pflicht-Gate für 🧮 vor Stufe 7.
- **Outcome-Rubrik pro Track** in `000_master.md` für Curriculum-Abschluss.
- **Self-Assessments S5/S7/S9** als Pflicht-Anker — siehe Stufen-Dateien.

### Inhaltliche Aktualisierungen v2.1 — Tier 2 (Inhalts-Vertiefung)

- **Modul 1.3 Vorgeschmack-Demo** — generische RAG+MCP+Eval-Mini-Demo (kein yesberlin) als Frühanker.
- **Modul 2.5 Reasoning-Block** — Reasoning-Modelle (o3, Claude Sonnet 4.6 mit Thinking) und Reasoning-Prompting konzeptionell.
- **Modul 2.5 vor 2.2: Cost-Awareness-Mini-Block** — Token-Counting, 70/25/5-Pattern, Prompt-Caching als frühe Awareness.
- **Modul 5.3 MCP-Sicherheits-Block** — OAuth 2.1, Audit-Logs, Scope-Limitierung, Allowlisting.
- **Modul 5.3 A2A-Awareness** — Agent2Agent / ACP-Protokoll als Awareness-Bullet.
- **Modul 6.2 Trajectory-Eval-Pflicht-Block** — 4 Pflicht-Metriken (Task Success Rate, Trajectory Quality, Tool Usage Quality, Cost Efficiency), Failure-Mode-Analyse, "Wann Multi-Agent vermeiden".
- **Modul 8.2 Logistic Regression from scratch** — Pflicht-Aufgabe für 🧮 als direkte Brücke zu Backprop in 7.1.
- **Modul 10.2 Decision-Framework Fine-Tuning vs. RAG vs. Prompt-Engineering** — drei-stufige Hierarchie mit konkreten Beispielen, 80%-Faustregel.
- **Modul 10.3 Eval-as-CI verstärkt** — Setup-Walkthrough, Schwellenwert-Logik (Hard-Block / Warning / Tracking), Failure-Handling-Pattern, Anti-Patterns.
- **Eval-Querschnitt-Anker** in mehreren Modulen explizit referenziert (S6, S8, S10, Capstone, Querschnitt-Eval-Header).

### Inhaltliche Aktualisierungen v2.1 — Tier 3 (Pflege-Mechanik)

- **3-Monats-Audit-Schema** für A-Tiefe-volatile-Module (siehe Sektion 2 unten).
- **Verfallsdatum-Stempel pro 🔄-Bullet** an mehreren Stellen quer durch Curriculum.
- **Repo-Veröffentlichungs-Härtung** (siehe Sektion 3 unten): CC-BY-SA-4.0-Lizenz, README-Vorlage, Contribution-Guide, Issue-Templates.
- **Coursera-Audit-Modus-Dokumentation** (siehe Sektion 4 unten).

### Bewusst NICHT in v2.1 umgesetzt

Aus der 5-Rollen-Gremium-Evaluation wurden mehrere Vorschläge bewusst zurückgestellt:

- **Reinforcement Learning als eigenständiges Modul** — bleibt im RL-Awareness-Block in Modul 6.3, weil RL als eigenständige Disziplin den 🧮-Track massiv verlängert hätte ohne klaren Praxis-Wert für 2026.
- **Audio als eigenständiges Modul** — bleibt in Modul 7.4 (multimodal), weil Audio-spezifische Anwendungen 2026 für die meisten Lernenden Nische sind.
- **NLP-Foundations vor LLMs** — der klassische "tokenization, embeddings, RNNs, LSTMs, Attention"-Pfad — wurde nicht hinzugefügt, weil 2026 LLMs die Praxis dominieren und der Pfad oft entmotiviert. Wer das will: optional über Stanford CS224N, Hugging Face NLP Course.
- **Externe Capstone-Reviewer-Pflicht** — als zu hohe Eintrittshürde verworfen. Bleibt empfohlen, nicht Pflicht.
- **Kohorten-Modus** — bleibt selbst-gepactes Format, weil Kohorten-Logistik nicht in eine Curriculum-Datei gehört.

### Migration v2.0 → v2.1

Wer v2.0 angefangen hat, kann v2.1 selektiv adoptieren:
- Wenn du 🔧 bist und in Stufe 5-6 stehst: schaue dir Modul 5.0 (Eval-Mini) und 6.5 (Computer Use) an, evtl. 6.2 Trajectory-Eval-Block nachholen.
- Wenn du 🧮 bist und vor Stufe 7 stehst: Math-Diagnose-Test machen, dann ggf. Lücken schließen. Module 8.1+8.2+8.5 vor 7.1 absolvieren.
- Wenn du 💼 bist und in Stufe 9 stehst: Module 9.0 und 9.6 ergänzen, Phase 1.5 und 3.5 in Capstone-C nachziehen, S9-Self-Assessment durchlaufen.
- Wenn du in Stufe 10+ bist: Decision-Framework in 10.2 nachholen, Eval-as-CI mit Schwellenwert-Logik in 10.3 verstärken.
- Wenn du Capstone-Phase erreichst: Operate-Phase als Goldstandard übernehmen (4-6 Wochen Real-User-Betrieb).

---

## v2.0.0 — Mai 2026 (initiale Version)

**Vollständiger Rebuild von v1.0 nach Phase-1-bis-4-Evaluation.**

### Strukturelle Änderungen v2.0
- Track-Logik: von Forking auf einheitlichen Hauptpfad mit Tiefen-Markierungen pro Modul (🔧/🧮/💼/🥇)
- Selbst-gepactes Format: Aufwand pro Modul, keine "X Monate"-Versprechen
- 11 Stufen statt 8 (Onboarding als Stufe 1, ehemals integrierte Stufen aufgeteilt)
- 3 Querschnitte hinzugefügt (Math, Eval, Production) statt isolierter Module
- 3 Capstone-Optionen statt einem End-Projekt
- Capstone startet in Stufe 5/7/9, nicht am Ende

### Inhaltliche Aktualisierungen v2.0 (Mai 2026)
- **Embedding-Modelle**: ada-002 entfernt (seit 2024 obsolet), text-embedding-3-large, BGE-M3, Cohere Embed v4, Voyage-3-large, Qwen3-Embedding-8B
- **MCP** als verpflichtender roter Faden eingeführt (Modul 2.5 konzeptionell, 5.3 Praxis, 10.3 Production)
- **Vector-DBs**: pgvector als pragmatischer Default, Pinecone als eine Option statt Default
- **Moderne Transformer-Komponenten**: RoPE, GQA, KV-Cache, MLA als Pflicht-Inhalt in Modul 7.2
- **Fine-Tuning modernisiert**: DPO, ORPO, GRPO, DoRA als 2026-Standard, RLHF/PPO als Foundation
- **Aktuelle OSS-Modelle**: Llama 4, Qwen 3, Gemma 4, DeepSeek V4, Mistral 3, Phi-4
- **Fine-Tuning-Tools**: Unsloth, Axolotl, TRL als Standard-Stack
- **Inferenz-Server**: vLLM als de-facto Standard, SGLang als Konkurrenz
- **LLMOps-Tools**: Helicone, Langfuse, LangSmith, Promptfoo, Phoenix/Arize
- **Eval-Methodik**: LLM-as-Judge mit Bias-Awareness (Position-Bias, Self-Preference, Calibration-Drift)
- **Eval-as-CI**: GitHub Actions + Promptfoo als Standard-Pattern
- **EU AI Act**: vollständige Vertiefung in Modul 9.5, AI Literacy Art. 4 als Pflicht-Element
- **Multi-Model-Routing**: 70/25/5-Pattern als Production-Standard
- **Prompt-Caching**: bis zu 90% Cost-Reduktion, als Pflicht für Production
- **Computer Vision modernisiert**: ViT, SAM2, DINOv2, Vision-LLMs als Alternative zu Custom-CV
- **Multimodale KI**: Claude/GPT-5/Gemini 3.1 plus OSS-Optionen LLaVA/Qwen-VL
- **Statistik-Foundation**: Modul 8.5 als ehrliche Eval-Grundlage, A/B-Testing mit Power-Analyse, Multiple-Testing, Bayesian Methods
- **Branchen-Vertiefung**: 1-2 Branchen tief statt 6 oberflächlich (Modul 11.2)
- **Information-Routine**: methodisch (Modul 11.1) statt veraltbarer Tool-Listen

### Sequenz-Korrekturen v2.0
- Klassisches ML (Stufe 8) nach Deep Learning (Stufe 7) — DL ist mathematische Foundation
- Decision Trees (8.2) vor Boosting (8.3) — XGBoost = Boosted Decision Trees
- Strategie (Stufe 9) nach Praxis-Stufen (5-6) — Strategie ohne Substrat ist Theater
- Math als Just-in-Time-Querschnitt statt Pre-Stufe — motivierender mit Praxis-Anker

### Open-Source-Konsistenz v2.0
- Jedes Modul mit dediziertem 🌱 Open-Source-Pfad
- Keine Bezahl-Kurse als Pflicht (nur als Option, mit Free-Audit-Hinweis wo möglich)
- Free-Zertifikate-Tabelle pro Stufe
- Curriculum-interne Outcome-Schwellen mit messbaren Kriterien

### Eval-Kultur v2.0
- Eval als Querschnitt mit eigenem Dokument
- Outcome-Schwellen pro Modul wo sinnvoll
- Capstone-Outcome-Schwellen messbar definiert
- Anti-Pattern bei Eval explizit dokumentiert

---

# 2. Aktualisierungs-Mechanik

Das Curriculum ist ein lebendes Artefakt. Die Aktualisierungs-Mechanik in v2.1 differenziert nach Volatilität:

## A-Tiefe-Module (3-Monats-Audit)

Diese Module enthalten die volatilsten Inhalte (Modell-Empfehlungen, Tool-Landschaft, neue Pattern). Audit alle 3 Monate, nicht alle 6:

- **Modul 5.x** (RAG, Frameworks, MCP, Eval, UX) — Tool-Landschaft volatil
- **Modul 6.x** (Agents, Computer Use, Vendor-SDKs) — Vendor-SDKs ändern sich monatlich
- **Modul 7.1, 7.2** (Neural Network Foundations, Modern Transformer) — moderate Volatilität, Architektur-Updates
- **Modul 7.4** (Multimodal) — sehr volatil, Frontier-Multimodal-Modelle ändern sich monatlich
- **Modul 9.5** (Compliance) — EU AI Act Auslegungs-Praxis und Digital Omnibus
- **Modul 9.0** (Datenstrategie) — Daten-Plattformen-Landschaft
- **Modul 10.1, 10.2, 10.3** (Marketing, Fine-Tuning, LLMOps) — gesamte Stufe 10 ist A-Tiefe-volatil
- **Querschnitt Eval** — Tools, LLM-as-Judge-Bias-Forschung
- **Querschnitt Production** — Inferenz-Server, Cost-Tools, Sandboxing

**Audit-Schema pro 3-Monats-Audit:**

1. Pro 🔄-Bullet: ist das Verfallsdatum erreicht? Wenn ja: aktualisieren oder durch ✅ markieren als "noch gültig".
2. Tool-Listen prüfen: gibt es neue Standard-Tools? Sind alte obsolet?
3. Modell-Empfehlungen prüfen: Frontier-Models, OSS-Models, Embedding-Models.
4. Bei Compliance (9.5): EU-AI-Act-Service-Desk-Updates, BfDI-Stellungnahmen, BSI-Empfehlungen.
5. Aktualisierungslog pro Datei updaten mit Datum + Änderungs-Liste.

## B-Tiefe-Module (Halbjahres-Audit)

Diese Module sind weniger volatil — strukturelles Wissen, das sich langsam ändert:

- **Stufen 1-4** (Onboarding, KI-Foundation, Coding, Web-Foundations) — primär Tool-Updates
- **Modul 7.3** (Computer Vision Awareness)
- **Module 8.1-8.5** (Klassisches ML) — sehr stabil, Tool-Updates
- **Module 9.1-9.4, 9.6** (Use-Case-Discovery, Business Case, Operating Model, Build-vs-Buy, Change Management) — methodisch stabil
- **Querschnitt Math** — sehr stabil, primär neue Online-Kurse
- **Stufe 11** (Forschung) — methodisch stabil, primär Newsletter/Podcasts/Blogs-Landschaft

**Audit-Schema halbjährlich:** standard wie Modul-Re-check-by-Datum.

## Jahres-Audit (Major-Update)

Einmal jährlich (typisch Mai/Juni):
- Strukturelle Anpassungen falls nötig (z.B. neue Querschnitte für aufkommende Disziplinen).
- Versions-Major-Update (v2.1 → v3.0 oder ähnlich).
- Vollständiges Re-View aller Stufen-Outcome-Schwellen.

## Geplante Re-Checks

**Aug 2026 (3-Monats-Audit für v2.1, geplant):**
- Alle A-Tiefe-Module (Module 5.x, 6.x, 7.4, 9.0, 9.5, 10.x, Querschnitte Eval+Production)
- Capstone-Outcome-Schwellen erste Kalibrierung mit Real-Org-Erfahrungen

**November 2026 (Halbjahres-Audit, geplant):**
- B-Tiefe-Module (Stufen 1-4, 7.3, 8.x, 9.x außer 9.0+9.5, Querschnitt Math, Stufe 11)
- Vendor-SDK-Updates (6.4)
- Branchen-Reports aktualisieren (11.2)
- MCP-Server-Registry-Wachstum (5.3)

**Mai 2027 (Jahres-Audit, vorgemerkt):**
- Generelle Aktualitätsprüfung aller Module
- Strukturelle Anpassungen falls nötig
- v2.2 oder v3.0 je nach Umfang

---

# 3. Repo-Veröffentlichungs-Härtung *(NEU in v2.1)*

Wenn du dieses Curriculum als eigenes öffentliches Repo veröffentlichst, sind folgende Elemente Pflicht für solide Open-Source-Praxis. Im Rahmen der `99_anhang.md` werden hier Vorlagen bereitgestellt.

## README.md-Vorlage

```markdown
# KI-Meisterlehrplan v2.2

Selbst-gepactes Curriculum für KI-Engineering, Foundations und Strategy. Drei Tracks mit klaren Tiefen-Markierungen pro Modul, 11 Stufen plus 4 Querschnitte plus 3 Capstones.

## Schnellstart

1. Lies `000_master.md` für Track-Wahl und Outcome-Rubriken.
2. Wähle einen Track: 🔧 Engineer / 🧮 Foundations / 💼 Strategist.
3. Folge den Stufen-Dateien `01_stufe1.md` bis `11_stufe11.md`.
4. Vertiefe mit Querschnitten `12_querschnitt_math.md`, `13_querschnitt_eval.md`, `14_querschnitt_production.md`, `16_querschnitt_safety.md` (Just-in-Time).
5. Capstone in `17_capstone_a_engineer.md`, `18_capstone_b_foundations.md`, `19_capstone_c_strategist.md`.

## Track-Aufwände (orientativ, realistische Bandbreite — siehe `000_master.md` für volle drei-Bandbreiten-Tabelle)

- 🔧 Engineer: 390-620h *(Express-Variante: ~150-220h)*
- 🧮 Foundations: 870-1440h *(Express-Variante: ~250-400h)*
- 💼 Strategist: 490-700h *(Express-Variante: ~150-220h)*

## Lizenz

Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). Siehe `LICENSE.md`.

## Beitragen

Siehe `CONTRIBUTING.md`. Issues und Pull Requests willkommen.

## Versionierung

Siehe `99_anhang.md` für Aktualisierungslog und Aktualisierungs-Mechanik.

## Aktuelle Version

v2.2.0 (Mai 2026). Nächste Aktualisierung: Aug 2026 (3-Monats-Audit für A-Tiefe-Module).
```

## LICENSE.md (CC BY-SA 4.0)

```
Dieses Werk ist lizenziert unter einer
Creative Commons Attribution-ShareAlike 4.0 International License.

Du darfst:
- Teilen — das Material in jedwedem Format oder Medium vervielfältigen und weiterverbreiten
- Bearbeiten — das Material remixen, verändern und darauf aufbauen, und zwar für beliebige Zwecke, auch kommerziell

Unter folgenden Bedingungen:
- Namensnennung — Du musst angemessene Urheber- und Rechteangaben machen, einen Link zur Lizenz beifügen und angeben, ob Änderungen vorgenommen wurden.
- Weitergabe unter gleichen Bedingungen — Wenn du das Material remixt, veränderst oder anderweitig direkt darauf aufbaust, darfst du deine Beiträge nur unter derselben Lizenz wie das Original verbreiten.

Vollständiger Lizenztext:
https://creativecommons.org/licenses/by-sa/4.0/legalcode.de
```

**Begründung der Lizenzwahl:** CC BY-SA 4.0 ist Standard für Bildungsmaterial. Es erlaubt kommerzielle Nutzung (z.B. wenn ein Trainer das Curriculum als Basis für bezahlte Kurse nutzt), zwingt aber zur Weitergabe unter gleicher Lizenz — verhindert "Wissen-Enclosure" durch große Plattformen.

## CONTRIBUTING.md-Vorlage

```markdown
# Contributing

Danke fürs Vorbeischauen! Beiträge sind willkommen.

## Wie beitragen

### Issues

Issues sind willkommen für:
- Inhaltliche Fehler oder Ungenauigkeiten
- Veraltete Tool-Empfehlungen
- Missing Resources
- Strukturelle Verbesserungs-Vorschläge

Bitte nutze die passenden Issue-Templates.

### Pull Requests

Pull Requests sind willkommen für:
- Tippfehler-Korrekturen
- Veraltete Tools/Modelle aktualisieren
- Neue Free-Resources hinzufügen
- Neue Open-Source-Pfad-Optionen

Größere strukturelle Änderungen bitte erst als Issue diskutieren.

## Format-Konventionen

- Markdown mit Header-Hierarchie (siehe bestehende Dateien)
- 🔧/🧮/💼/🥇 Tiefen-Markierungen
- 🟢 (stabil) / 🔄 (volatil mit Verfallsdatum) / 🌱 (Open-Source-Pfad) / 🎁 (Mini-Projekt)
- Last verified + Re-check by im Datei-Header
- Aktualisierungslog am Datei-Ende mit Datum

## Pull-Request-Prozess

1. Fork → Branch → Änderung → PR
2. PR-Description: was geändert, warum
3. Review wird typisch innerhalb 2-4 Wochen erfolgen
4. Bei A-Tiefe-Modulen: Quellen für Aktualisierungen verlinken

## Verhaltens-Kodex

Konstruktiv, respektvoll, faktenbasiert. Keine Werbung für eigene Bezahl-Produkte als "Pflicht-Empfehlung".
```

## Issue-Templates

### `.github/ISSUE_TEMPLATE/inhaltlicher-fehler.md`

```markdown
---
name: Inhaltlicher Fehler
about: Faktischer Fehler oder Ungenauigkeit gefunden
title: "[FEHLER] "
labels: bug, content
---

## Datei

Welche Datei? (z.B. `05_stufe5.md`)

## Stelle

Welche Sektion / welcher Bullet?

## Was ist falsch?

Beschreibe den Fehler.

## Was wäre richtig?

Begründung mit Quelle wenn möglich.
```

### `.github/ISSUE_TEMPLATE/veraltete-information.md`

```markdown
---
name: Veraltete Information
about: Tool, Modell, Pattern ist veraltet
title: "[VERALTET] "
labels: outdated, content
---

## Datei und Stelle

## Was ist veraltet?

## Was ist der aktuelle Stand?

Mit Quelle.

## Verfallsdatum-Stempel?

Ist es bereits als 🔄 mit Verfallsdatum markiert? Wenn ja: das Verfallsdatum ist erreicht und Update fällig.
```

### `.github/ISSUE_TEMPLATE/strukturelle-verbesserung.md`

```markdown
---
name: Strukturelle Verbesserung
about: Vorschlag für Architektur- oder Sequenz-Änderung
title: "[STRUKTUR] "
labels: enhancement, structure
---

## Vorschlag

Was soll geändert werden?

## Begründung

Welches Problem in v2.1 wird damit gelöst?

## Track-Auswirkung

Welcher Track ist betroffen? (🔧/🧮/💼/alle)

## Aufwand-Auswirkung

Erhöht / verringert / unverändert?

## Diskussions-Punkte

Was sind die offenen Fragen?
```

### `.github/ISSUE_TEMPLATE/neue-resource.md`

```markdown
---
name: Neue Resource vorschlagen
about: Neuer Kurs / Buch / Tool / Blog
title: "[RESOURCE] "
labels: resource, content
---

## Resource

URL und Bezeichnung.

## Welche Stelle im Curriculum?

Wo passt es? (Stufe, Modul)

## Free / Bezahl?

Bezahl-Resourcen werden nur als Optional aufgenommen.

## Warum ist es besser als bestehende?

```

## Versionierungs-Prozess

- **Patch-Version** (v2.1.x): kleine Korrekturen, neue Resources, Tool-Updates ohne strukturelle Änderung.
- **Minor-Version** (v2.x.0): inhaltliche Vertiefung, neue Module, neue Querschnitte ohne Skelett-Bruch.
- **Major-Version** (vx.0.0): strukturelle Änderungen, Sequenz-Reformen, Track-Änderungen.

---

# 4. Coursera-Audit-Modus-Dokumentation *(NEU in v2.1)*

Mehrere im Curriculum referenzierte Kurse sind auf Coursera oder DeepLearning.AI gehostet. Im **Audit-Modus** sind diese kostenlos zugänglich — ohne Zertifikat, aber mit vollständigem Inhalts-Zugriff.

## Wie funktioniert der Audit-Modus auf Coursera?

1. Auf [coursera.org](https://www.coursera.org) den gewünschten Kurs aufrufen.
2. Auf "Enroll for free" klicken.
3. Pop-up: "Audit the Course" wählen (oft als kleinerer Link unter dem prominenten "Start Free Trial"-Button).
4. Du bekommst Zugriff auf alle Videos und Reading-Materialien.
5. **Nicht zugänglich** im Audit-Modus: Quizze, graded Assignments, Peer Reviews, Zertifikat. Wenn du diese willst, musst du upgraden.

## Wie funktioniert es bei DeepLearning.AI Short Courses?

DeepLearning.AI Short Courses (~2h) sind direkt auf [learn.deeplearning.ai](https://learn.deeplearning.ai) ohne Coursera-Account kostenlos zugänglich. Kein Audit-Modus nötig.

## Wann lohnt sich der Audit-Modus für dieses Curriculum?

**Pflicht-Audit-Kurse (in v2.1 referenziert):**
- DLAI Short Courses (in Stufen 5, 6, 7, 8, 10, Querschnitt Eval, Querschnitt Production)
- Mathematics for Machine Learning Specialization (Imperial College, in `12_querschnitt_math.md`)
- Bayesian Methods for Machine Learning (Querschnitt Math)
- MLOps Specialization (Andrew Ng, in `14_querschnitt_production.md`)

**Wann zertifizieren statt nur auditieren?**

Zertifikate von Coursera/DLAI sind 2026 in den meisten KI-Job-Kontexten **nicht entscheidend**. Wer ein Portfolio mit Capstone hat, hat den besseren Beleg. Zertifikat lohnt sich nur:
- Wenn Arbeitgeber explizit fragt
- Wenn Bildungsgutschein das übernimmt (in Deutschland: BAMF, Arbeitsagentur)
- Wenn die Quiz-Struktur didaktisch hilft (Sebastian Raschka empfiehlt das für Math-Kurse)

## Hinweis zur kommerziellen Nutzung

Wenn dieses Curriculum als Basis für bezahlte Kurse genutzt wird (CC BY-SA 4.0 erlaubt das), sollten die Kursleiter prüfen, ob die referenzierten Coursera-Audit-Kurse weiter im Curriculum bleiben oder durch eigene Inhalte ersetzt werden. Coursera-Audit-Modus-Verweise sind keine Pflicht-Bestandteile, sondern Empfehlungen.

---

# 5. Capstone-Timeline (orientativ)

Grobe Zeit-Verteilung über das Curriculum, nur Capstone-Anteil (zusätzlich zu regulären Stufen-Aufwänden):

| Phase | 🔧 Engineer | 🧮 Foundations | 💼 Strategist |
|---|---|---|---|
| Idee + Setup | Stufe 3-5 (~10h) | Stufe 7 (~5h) | Stufe 9 (~10h) |
| Foundation | Stufe 5 (~30h) | Stufe 7 (~80-120h) | Stufe 9 (~30h) |
| Vertiefung | Stufe 6 (~25h) | Stufe 10.2 (~40-60h) | Stufe 10 Pilot (~40h) |
| Production | Stufe 10.3 (~40h) | Stufe 10.3 (~15h) | Stufe 10.1 (~20h) |
| **Operate-Phase** *(NEU in v2.1)* | **Stufe 10/11 (~30-50h für 4-6 Wochen Real-User-Betrieb)** | optional (~15h) | **Stufe 10/11 (~40-60h für 4-6 Wochen Operate mit Stakeholdern)** |
| Final | Stufe 11 (~15h) | Stufe 11 (~10h) | Stufe 11 (~15h) |
| **Total** | **~150-170h** | **~165-225h** | **~155-175h** |

Plus die regulären Stufen-Aufwände — das oben ist nur der Capstone-Anteil.

**v2.1-Korrektur:** in v2.0 lag Capstone-A bei ~120h, Capstone-B bei ~150-220h, Capstone-C bei ~115h. v2.1 erweitert um Operate-Phase (4-6 Wochen Real-User-Betrieb) für Capstone-A und Capstone-C als Goldstandard.

---

# 6. Cross-Track-Capstone (optional, ambitioniert)

Wer Zeit und Energie hat, kann ein Capstone-Projekt machen, das alle drei Tracks integriert:

**Beispiel**: Eigene SaaS-Plattform aufbauen
- 💼 Strategie + Business Case + Pilot mit echten Kunden
- 🔧 Production-Stack: RAG, Agents, Eval-as-CI, MCP, Multi-Model-Routing
- 🧮 Optional: fine-getunetes Modell für Spezialaufgabe als Differenziator

Das ist ambitioniert, oft 200-400h zusätzlich zu den drei Track-Aufwänden. Aber: das Ergebnis ist ein launchable Product. Manche Curriculum-Absolventen 2026 starten so ihr eigenes Startup.

**v2.1-Hinweis**: Cross-Track-Capstone ist mit Operate-Phase noch ambitionierter — 4-6 Wochen Real-User-Betrieb plus Stakeholder-Operate plus Production-Hardening parallel. Realistisch nur, wenn du das in echtem Geschäfts-Kontext machst (eigene Org, eigenes Produkt).

---

# 7. Optionales Glossar

Begriffe, die quer durchs Curriculum vorkommen — kompakt erklärt für Schnell-Referenz:

**A-Tiefe-Module:** Module mit besonders volatilen Inhalten, brauchen 3-Monats-Audit.

**Adoption-Curve:** S-Kurve, die Übernahme einer Innovation in einer Org modelliert (Innovators → Early Adopters → Early Majority → Late Majority → Laggards).

**Audit-Modus:** Kostenloser Lese-Zugriff auf Coursera-Kurse ohne Zertifikat und Quiz-Zugriff.

**Backprop:** Backpropagation, Algorithmus zum Trainieren neuronaler Netze via Kettenregel.

**Capstone:** Integrations-Projekt am Ende des Curriculums.

**Cross-Entropy:** Standard-Loss-Funktion für Klassifikation.

**Catastrophic Forgetting:** Verlust allgemeiner Fähigkeiten durch zu starkes Fine-Tuning.

**DPO/ORPO/GRPO:** Moderne Preference-Tuning-Methoden (ohne RLHF-Komplexität).

**EU AI Act:** EU-Regulierung für KI, gestuft nach Risiko-Klassen.

**Eval-as-CI:** Eval-Run bei jedem Pull Request, automatisierte Qualitäts-Sicherung.

**Faithfulness:** RAG-Eval-Metrik: stimmt die Antwort mit dem Kontext überein?

**Foundation-Modell:** Vortrainiertes Sprachmodell als Basis für Fine-Tuning.

**Goldstandard:** v2.1-Begriff für Capstone-Operate-Phase als höchste Lern-Tiefe.

**LLM-as-Judge:** Eval-Methode, bei der ein LLM Outputs anderer Modelle bewertet.

**LoRA / QLoRA / DoRA:** Parameter-effiziente Fine-Tuning-Methoden.

**MCP (Model Context Protocol):** Anthropic-Standard für Tool-Integration in LLMs.

**MMLU:** Standard-Benchmark für allgemeine Sprachmodell-Fähigkeiten.

**Agentic OS (NEU in v2.2):** Software-Schicht für Multi-Agent-Koordination. Zwei Bedeutungen — (a) Framework-Pattern (Context + Memory + Skills + Self-Learning Layers), (b) System-Software-Layer (Process-Scheduling, Isolation für Agenten).

**Agentenschwarm (NEU in v2.2):** Multi-Agent-Architektur mit dezentraler oder hybrider Koordination. Patterns: Conductor / Hierarchical / Peer-Swarm / Hybrid.

**Context Engineering (NEU in v2.2):** Disziplin der Token-Budget-Allokation, Memory-Architektur, Compaction-Strategien für LLM-Agents. Anthropic 2025 als Nachfolger von Prompt Engineering proklamiert.

**Distributed Training (NEU in v2.2):** Multi-GPU-Training-Strategien: DDP (Data-Parallel), FSDP (Fully Sharded Data Parallel), ZeRO 1/2/3, Megatron-Style Tensor+Pipeline-Parallelism.

**GraphRAG (NEU in v2.2):** RAG-Variante mit Knowledge-Graph-Aufbau aus Korpus, dann LLM-Synthese über Graph-Struktur. Microsoft Research 2024.

**HyDE (NEU in v2.2):** Hypothetical Document Embeddings — LLM generiert hypothetische Antwort, deren Embedding zur Retrieval genutzt wird. RAG-Frontier-Pattern.

**Late-Interaction Retrieval (NEU in v2.2):** Token-Level-Matching statt Single-Vector-Embedding (z.B. ColBERTv2). Höhere Qualität, höhere Cost.

**Operate-Phase (NEU in v2.1):** 4-6 Wochen Real-User-Betrieb nach Production-Hardening / Pilot-Tests.

**PEFT:** Parameter-Efficient Fine-Tuning (Sammelbegriff für LoRA und Verwandte).

**RAG:** Retrieval-Augmented Generation — LLM mit externem Wissens-Retrieval.

**Reasoning-Modelle (NEU in v2.2):** Architektur-Familie mit Test-Time-Compute als Skalierungs-Achse (o3, Claude Thinking, R1). Trainings-Patterns: GRPO, PRM/ORM.

**Red-Team-as-CI (NEU in v2.2):** Automatisierte Red-Team-Tests in CI/CD-Pipeline (analog zu Eval-as-CI). Querschnitt 16.

**RLHF:** Reinforcement Learning from Human Feedback — klassische Preference-Tuning-Variante.

**Self-Assessment:** Strukturierte Selbst-Bewertung am Ende einer Stufe (S5/S7/S9 in v2.1).

**Skill / SKILL.md (NEU in v2.2):** Persistierter, versionierter Domain-Kontext für Agents (Markdown + Templates + Code). Anthropic Claude Skills, OpenAI Codex Skills, Hamel evals-skills.

**Structured Outputs (NEU in v2.2):** Constrained Generation mit Pydantic-Schemas, JSON-Mode, Function-Calling-Strict-Modes. Pflicht-Block in Modul 5.2.

**TCO:** Total Cost of Ownership — alle Kosten über Lebenszyklus.

**Test-Time-Compute (NEU in v2.2):** Skalierungs-Achse: mehr Inferenz-Rechenzeit für bessere Antworten (Reasoning-Modelle). Eigene Familie neben Training-Compute-Skalierung.

**Trajectory-Eval (NEU in v2.1):** Agent-Eval-Pflicht-Block mit 4 Metriken.

**vLLM / SGLang:** Open-Source Inferenz-Server für LLMs.

---

## Aktualisierungslog dieser Datei

- **2026-05-04:** Version v2.2.0 — **v2.2-Eintrag im zentralen Aktualisierungslog ergänzt** mit Welle-1/2/3-Struktur, neuen Modulen (5.6, 6.0, 6.6, 6.7, 7.5, 7.6, 9.7, Querschnitt 16), Capstone-Renumbering 15/16/17 → 17/18/19, Aufwand-Realismus-Bandbreiten, Express-Pfade, Track-Sequenzdiagramme, Stanford CS336 als Vergleichsreferenz. Anhang-Header um v2.2-Inventar-Hinweis erweitert. README-Vorlage Schnellstart auf v2.2-Numbering aktualisiert (neuer Querschnitt 16, Capstones 17/18/19). Track-Aufwände-Sektion ehrlich auf realistische Bandbreite + Express-Variante kalibriert. Bewusst nicht aktualisiert: historische v2.0/v2.1-Einträge (sind Historie). Aktualisierungs-Mechanik-Sektion (3-Monats-Audit) bleibt unverändert — Mechanik ist robust gegenüber Modul-Erweiterung.
- **2026-05-04:** Version v2.1.0 — **Anhang als zentrale Referenz-Datei aufgesetzt**: vollständiger Aktualisierungslog (v2.0 erhalten + v2.1 ergänzt mit Tier-1/2/3-Struktur + bewusst-nicht-umgesetzt + Migration v2.0→v2.1); **Aktualisierungs-Mechanik NEU** (3-Monats-Audit-Schema für A-Tiefe-Module, Halbjahres-Audit für B-Tiefe-Module, Jahres-Audit für Major-Updates, geplante Re-Checks Aug 2026 / Nov 2026 / Mai 2027); **Repo-Veröffentlichungs-Härtung NEU** (README-Vorlage, CC-BY-SA-4.0-Lizenz mit Begründung, CONTRIBUTING-Vorlage, vier Issue-Templates, Versionierungs-Prozess); **Coursera-Audit-Modus-Dokumentation NEU** (Wie-funktioniert-es, Pflicht-Audit-Kurse-Liste, Wann-zertifizieren-Hinweis, kommerzielle-Nutzung-Hinweis); Capstone-Timeline aus v2.0 übernommen und um Operate-Phase erweitert (Total-Stunden korrigiert); Cross-Track-Capstone aus v2.0 übernommen und um Operate-Phase-Hinweis erweitert; **Optionales Glossar NEU** (~25 Begriffe).
- **2026-05-02:** Initiale Version v2.0.0 (war damals integriert in Capstone-Datei am Ende, jetzt eigenständige Datei).
- **Re-check geplant:** November 2026 — primär: Repo-Härtung-Vorlagen aktualisieren falls Github Issue-Template-Format ändert, Coursera-Audit-Modus prüfen falls Coursera UI ändert.
