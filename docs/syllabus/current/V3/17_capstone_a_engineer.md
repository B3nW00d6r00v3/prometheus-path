# Capstone A: Engineer (🔧)

**Working Title:** Production-Ready Multi-Agent-RAG-System  
**Aufwand:** 80-200h zusätzlich zu den Stufen-Aufwänden, je nach Domain-Komplexität  
**Voraussetzungen:** 🔧-Track, idealerweise Stufen 1-3 absolviert für Capstone-Start in Stufe 5

| Stufen-Bezüge | Querschnitte | Tools |
|---|---|---|
| Stufe 3, 5, 6, 10, 11 | Eval, Production, Safety | LangGraph, Claude Agent SDK, Promptfoo, vLLM, Docker |

Du baust ein RAG-Agent-System auf einer eigenen Domain (kann persönlich, beruflich, hobby-bezogen sein), das du iterativ über das Curriculum aufbaust. Endprodukt: deployed, evaluiert, hardened, **mit Operate-Phase im Real-User-Betrieb**, mit echten Stakeholdern getestet.

Diese Datei ist die **Master-Capstone-Datei**. Sie enthält:
1. **Capstone A komplett** (Konzept, 9 Phasen, Outcome-Schwellen, Portfolio-Anforderungen)
2. **Verschobene Update-Blöcke aus Stufen 5+6** (Capstone-Engineer-Update nach 5.5, nach 6.2, nach 6.5, plus Verweis auf 10.3)
3. **Capstone-Abschluss-Master-Sektion** für alle drei Capstones — Demo-Video, Pitch, Lessons-Learned, Portfolio-Struktur
4. **Operate-Phase als Goldstandard** — 4-6 Wochen Real-User-Betrieb nach Production-Hardening

`18_capstone_b_foundations.md` und `19_capstone_c_strategist.md` referenzieren die Master-Sektionen aus dieser Datei.

---

## Konzept

Du baust ein RAG-Agent-System auf einer eigenen Domain mit echtem Mehrwert für dich oder deine Stakeholder. Das System wächst iterativ über das Curriculum:

- **Stufe 5** legt RAG-Foundation und Eval-Pipeline
- **Stufe 6** macht es zum Multi-Agent-System mit Computer Use
- **Stufe 10** macht es Production-hardened mit Eval-as-CI
- **Stufe 11** vollendet mit Operate-Phase, Final-Doku, Demo, Pitch

Wer 🔧 ist, hat hier seine Hauptarbeit. Wer 🧮 oder 💼 mit-macht, kann Elemente integrieren oder als zweiten Capstone wählen.

---

## Phasen entlang des Curriculums

### Phase 1 — Domain-Wahl (Modul 3.3)
- Wähle eine Domain mit echtem Mehrwert: eigene Notizen, Bookmarks, Fachgebiet, Verein, Hobby.
- Gib dem Projekt einen Namen, lege GitHub-Repo an.
- Definiere Use-Case in 2-3 Sätzen.

### Phase 2 — RAG-Foundation (Modul 5.1)
- Indexierung der Domain-Dokumente
- Hybrid Search + Re-Ranking
- Erste Eval mit RAGAS

### Phase 3 — Framework-Wahl (Modul 5.2)
- Begründete Wahl: LangChain, LlamaIndex, PydanticAI, oder direkter SDK-Code
- Refactoring auf gewählte Architektur

### Phase 4 — MCP-Integration (Modul 5.3)
- Eigener MCP-Server für die Domain
- Optional: 2-3 externe MCP-Server konsumieren
- *MCP-Sicherheits-Block*: dein eigener Server hält Best Practices ein (OAuth 2.1, Audit-Logs, Scope-Limitierung)

### Phase 5 — Eval-Pipeline (Modul 5.0 + 5.4)
- *Eval-Mini Hamel-Methodik aus Modul 5.0*: erste 20 Test-Cases mit ehrlicher Eval, vor RAGAS
- Eval-Dataset mit 50-100 Test-Cases (Vertiefung in 5.4)
- LLM-as-Judge mit Bias-Mitigations
- Eval-Skript reproduzierbar

### Phase 6 — Frontend (Modul 5.5)
- Streamlit, Vercel AI SDK, oder Chainlit
- Streaming, Source-Citations, Tool-Use-Visualisierung

### Capstone-Engineer-Update nach Stufe 5

Nach Stufe 5 hast du dein Capstone-Engineer-Projekt im Aufbau:
- ✅ Domain definiert, Repo angelegt (Phase 1)
- ✅ RAG-Foundation lauffähig mit Hybrid Search + Re-Ranking (Phase 2)
- ✅ Framework gewählt und Code dazu refactored (Phase 3)
- ✅ Mindestens ein eigener MCP-Server für die Domain (Phase 4)
- ✅ Eval-Pipeline mit ≥50 Test-Cases (Phase 5)
- ✅ Frontend mit Streaming und Source-Citations (Phase 6)

In Stufe 6 wird daraus ein Multi-Agent-System mit Computer Use, in Stufe 10 wird es Production-hardened mit Operate-Phase.

### Phase 7 — Multi-Agent (Modul 6.2)
- Erweiterung zum Multi-Agent-System mit LangGraph oder Vendor-SDK
- Cost-Tracking
- Sandboxed Tool-Execution
- *Trajectory-Eval-Pflicht-Block*: 4 Metriken (Task Success Rate, Trajectory Quality, Tool Usage Quality, Cost Efficiency), Failure-Mode-Analyse

### Phase 7b — Computer Use Integration (Modul 6.5, optional)
- Optional: Computer Use für Browser- oder Desktop-Automation als Erweiterung
- Production-Sandboxing besonders wichtig (Daytona, E2B, oder Docker)
- Wenn integriert: dokumentiere Use-Case und Sandboxing-Setup

### Phase 7c — Schwarm-/Conductor-Vergleich
- Wenn dein Capstone Multi-Agent-Workflows hat, vergleiche zwei Pattern auf demselben Use-Case:
 - **V1 Conductor**: 1 Master + 3 Workers (z.B. Topic-Research / Quellen-Eval / Synthese).
 - **V2 Hierarchical**: 1 Top-Orchestrator + 2 Team-Leads + je 2 Workers.
- Trajectory-Eval mit den 4 Standard-Metriken aus 6.2 plus den **2 neuen Metriken Coordination-Cost und Time-to-Result**.
- Failure-Mode-Test (Quelle gibt 500 zurück, Inter-Agent-Konflikt) — wie reagiert jede Architektur?
- Begründete Pattern-Wahl für Capstone dokumentieren.
- Im Capstone-Repo: `phase-7c-swarm-comparison/` mit Code beider Varianten + Eval-Report.

### Phase 7d — Agentic-OS-Layer
- Lege im Capstone-Repo eine `AGENT_OS/`-Struktur an (siehe Modul 6.7 Praxis):
 - `context/` (Brücke zu 6.0)
 - `memory/` mit `brand_voice.md`, `glossary.md`, `decisions_log.md`
 - `skills/` mit der SKILL.md aus 5.6 + 2 weiteren
 - `learning/` mit `failure_modes.md` (laufend gepflegt) + `improvement_log.md`
- **Eval-Vergleich**: gleicher Use-Case-Run mit/ohne Agentic-OS-Schicht über 10+ Test-Cases. Quality, Cost, Coherence-über-Sessions vergleichen.
- Reflexion: was hat die persistente Schicht gebracht, wo war sie überflüssig oder pollutionsfördernd?
- Im Capstone-Repo: `phase-7d-agentic-os/` mit Repo-Struktur, Eval-Vergleich, Reflexion.

### Phase 7e — Red-Team-Pass auf Capstone-State

**Ohne Phase 7e ist die Operate-Phase nicht Goldstandard.** Production-Deploy ohne Red-Team-Pass ist 2026 ein Anti-Pattern — siehe Modul 9.7 Failure-Case-Library für Empirie (DPD-Chatbot, Air-Canada-Lawsuit als Beispiele für nicht-gehärtete Production-Anwendungen).

- **Threat-Model-Skizze** (1-2h): pro Threat-Klasse aus Querschnitt 16 (1-7) prüfen, ob sie auf deinen Capstone zutrifft. Tabelle Wahrscheinlichkeit × Impact × Pflicht-Mitigation.
- **Manueller Red-Team-Pass** (3-5h): mindestens 20 Angriffe verteilt auf die 7 Threat-Klassen. Test-Case-Anatomie pro Angriff. Mindestens 3 echte Findings (sonst nicht hart genug getestet).
- **Automatisierter Red-Team-Pass** (2-3h): Promptfoo Red Team Mode oder Garak gegen Capstone. Findings sammeln.
- **Findings-Report mit Severity-Klassifizierung** (Critical / High / Medium / Low).
- **Mindestens 3 Mitigations für High/Critical-Findings** implementieren. Re-Test: vorher-failing → nachher-passing.
- **Sicherheits-Audit-Dokument** im Capstone-Repo: `phase-7e-red-team-audit/audit-report.md`.
- **Optional aber empfohlen**: Red-Team-as-CI in GitHub Actions als Hard-Block bei Critical/High.

**Outcome-Schwelle Phase 7e (Operate-Goldstandard)**: keine offenen Critical-Findings, keine offenen High-Findings ohne dokumentierten Mitigations-Plan.

### Capstone-Engineer-Update nach Stufe 6

Nach Stufe 6 ist dein Capstone-Engineer-Projekt erweitert:
- ✅ Multi-Agent-System mit dokumentierten Agent-Rollen
- ✅ Trajectory-Eval mit 4 Pflicht-Metriken durchgeführt
- ✅ Sandboxed Tool-Execution
- ✅ Cost-Tracking pro Agent
- ✅ Optional: Computer Use Integration
- ✅ **Optional: Schwarm-/Conductor-Vergleich (Phase 7c)**
- ✅ **Optional: Agentic-OS-Layer (Phase 7d)**
- ✅ **Pflicht für Operate-Goldstandard: Red-Team-Pass abgeschlossen (Phase 7e)**

In Stufe 10 wird daraus die Production-Reife mit Eval-as-CI und Operate-Phase.

### Phase 8 — Production-Hardening (Modul 10.3)
- Multi-Model-Routing (LiteLLM/OpenRouter, 70/25/5-Pattern)
- Prompt-Caching
- *Eval-as-CI mit Schwellenwert-Logik*: Hard-Block / Warning / Tracking, Override-Pfad mit Begründungs-Pflicht, Trend-Tracking
- Sandboxing für Tool-Execution
- Production-Deployment (Hetzner/Railway/Fly.io)
- Logging und Tracing in Langfuse oder LangSmith
- Health-Check + Uptime-Monitoring
- Incident-Response-Plan

### Phase 9 — Operate-Phase als Goldstandard

**Aufwand:** 4-6 Wochen Real-User-Betrieb (parallel zu 11.1/11.2)

Production-Hardening ist nicht der Capstone-Abschluss, sondern **Voraussetzung** für die Operate-Phase. Erst die Operate-Phase macht aus Production-Wissen Production-Erfahrung.

**Pflicht-Aktivitäten:**

1. **Real-User-Betrieb** (4-6 Wochen): mindestens 3-5 echte Nutzer regelmäßig, dokumentierte Anfragen-Statistik (Anzahl, Verteilung über Kategorien, Edge-Cases die auftauchten).

2. **Cost-Optimierungs-Sprints** (mindestens 2 Sprints à 1 Woche): Production-Cost-Daten analysieren, Optimierung identifizieren (z.B. Prompt-Caching aktivieren, kleineres Modell für 70%-Pfad), implementieren, Wirkung messen. Cost-Reduktion von Sprint-Beginn bis -Ende dokumentieren.

3. **Incident-Response-Übungen** (mindestens 2): simulierten Incident herbeiführen (z.B. API-Outage simulieren, Eval-Score-Drop forcieren), Kill-Switch testen, Fallback-Pfad nutzen, Post-Mortem schreiben (5 Whys, Korrektiv-Maßnahmen).

4. **Eval-Drift-Beobachtung**: Production-Eval-Sample (jede 100. Anfrage durch LLM-as-Judge) über die Operate-Phase tracken. Calibration-Drift detektieren, gegebenenfalls Re-Calibration durchführen.

5. **User-Feedback-Integration**: Feedback aus Production fließt in Eval-Dataset zurück. Eval-Set wächst um 20-50% über die Operate-Phase. Dokumentiere mindestens 10 neue Edge-Cases, die durch echte Nutzer aufgetaucht sind.

6. **Lessons-Learned-Dokumentation**: was hat in der Realität anders funktioniert als im Hardening-Plan vorausgesagt? Mindestens 5 spezifische Erkenntnisse mit Korrektiv-Maßnahmen.

**Operate-Phase-Outcome:**
- ✅ Real-User-Anfragen-Log über 4-6 Wochen
- ✅ Cost-Optimierungs-Sprint-Ergebnisse mit konkreten Reduktionen
- ✅ Incident-Response-Post-Mortems
- ✅ Eval-Drift-Trend-Analyse
- ✅ Eval-Set um ≥20% gewachsen
- ✅ Lessons-Learned mit ≥5 spezifischen Erkenntnissen

**Im Portfolio:** `00_capstone/operate-phase/` mit Real-User-Logs (anonymisiert), Cost-Sprint-Reports, Post-Mortems, Drift-Analysen, Lessons-Learned.

### Phase 10 — Final-Doku und Pitch (Modul 11.2 + Master-Sektion unten)
Siehe **Capstone-Abschluss-Master-Sektion** weiter unten — gilt für alle drei Capstones.

---

## Outcome-Schwellen (mess- und nachweisbar)

| Metrik | Schwelle | Wie messen |
|---|---|---|
| Faithfulness | ≥0.8 | RAGAS auf Eval-Dataset |
| Latenz P50 | <3s | Production-Logging |
| Cost pro Anfrage | <0.05€ | Helicone / Langfuse |
| Eval-as-CI | grün **mit Schwellenwert-Logik (Hard-Block/Warning/Tracking)** | GitHub Actions Status |
| Uptime | >99% über 30 Tage | UptimeRobot |
| MCP-Server | mindestens 1 eigener + 1 externer | Code im Repo |
| User-Tests | mindestens 3 echte Nutzer | dokumentiertes Feedback |
| Trajectory-Eval | 4 Pflicht-Metriken dokumentiert | Eval-Report |
| **Phase 7c Schwarm-Vergleich** | Trajectory-Eval mit 4+2 Metriken (Coordination-Cost, Time-to-Result), Pattern-Wahl-Begründung | Eval-Report `phase-7c-swarm-comparison/` |
| **Phase 7d Agentic-OS-Layer** | `AGENT_OS/`-Struktur mit ≥3 Memory-Files + ≥3 Skill-Files, Eval-Vergleich vor/nach | Repo + Eval-Report |
| **Phase 7e Red-Team-Pass** | ≥20 manuelle Angriffe + automatisierter Pass (Promptfoo/Garak), keine offenen Critical, kein offenes High ohne Mitigations-Plan | `phase-7e-red-team-audit/audit-report.md` |
| **Operate-Phase** | **4-6 Wochen Real-User-Betrieb mit allen 6 Pflicht-Aktivitäten + Phase 7e abgeschlossen** | Operate-Phase-Doku im Portfolio |

---

## Portfolio-Anforderungen für Capstone A

Im Portfolio-Repo unter `00_capstone/`:
- `README.md` mit: Track, Use-Case, Stack, Architektur-Diagramm, Demo-Video-Link, Outcome-Metriken
- Link zum eigentlichen Capstone-Repo
- `pitch-slides.pdf` (5 Slides)
- `eval-report.md` mit Vorher/Nachher-Tabellen
- `lessons-learned.md` mit Reflektion
- `operate-phase/` — Operate-Phase-Doku
 - `real-user-logs.md` (anonymisiert)
 - `cost-sprints.md`
 - `post-mortems.md`
 - `drift-analysis.md`
 - `final-lessons-learned.md`
- `phase-7c-swarm-comparison/` — Code beider Schwarm-Varianten + Eval-Report
- `phase-7d-agentic-os/` — `AGENT_OS/`-Struktur + Eval-Vergleich
- `phase-7e-red-team-audit/` — `audit-report.md` + Mitigations-Code + optional CI-Setup

---

## Mögliche Domain-Beispiele

- Persönlicher Wissens-Assistent auf eigenen Notizen (Obsidian-Vault, Notion-Export)
- Domain-spezifischer Fach-Bot (z.B. Steuerrecht für Selbstständige, Vereinsrecht, Förderprogramme)
- Code-Review-Assistent für eigenes/Team-Repo
- Recherche-Agent für eine Branche (mit deinen Top-Quellen aus Modul 11.1)
- DSGVO-konformer Mittelstands-Wissens-Bot
- Newsletter/Content-Pipeline (Verbindung zu Modul 10.1)
- Research-Agent für KI-News mit RSS-Aggregation und LLM-Synthese
- Bildungs-Bot auf eigenem Lehrplan-Korpus
- Onboarding-Assistent für neue Team-Mitglieder

---

## Ressourcen

- [Anthropic Cookbook — RAG Beispiele](https://github.com/anthropics/anthropic-cookbook)
- [LangChain Templates](https://github.com/langchain-ai/langchain/tree/master/templates)
- [LlamaIndex Examples](https://github.com/run-llama/llama_index/tree/main/docs/examples)
- [Hamel Husain — Eval als Pflicht-Lektüre](https://hamel.dev/blog/posts/evals/)

---

# Capstone-Abschluss — Master-Sektion für alle drei Capstones

Nach Stufe 11 schließt du deinen Capstone offiziell ab. Diese Sektion gilt für **alle drei Capstones** (A Engineer, B Foundations, C Strategist) — die Capstone-spezifischen Dateien `18_capstone_b_foundations.md` und `19_capstone_c_strategist.md` referenzieren diese Master-Sektion.

In v2.0 stand dieser Block in Stufe 11 selbst — was die Stufe gegenüber den track-spezifischen Capstone-Dateien fragmentierte. In v2.1 ist alles Capstone-Inhalt zentral in den Capstone-Dateien (15/16/17), die Stufen-Dateien sind frei für Modul-Inhalte.

## Capstone-Final-Doku

Pflicht für alle drei Capstones:

- **Komplette README** im Capstone-Repo: Was, Warum, Wie, Wer, Wann, Outcome.
- **Architektur-Diagramm** der finalen Lösung. Tools: [draw.io](https://draw.io), [Excalidraw](https://excalidraw.com), [Mermaid](https://mermaid.js.org) für Code-as-Diagram.
- **Eval-Report** mit allen Outcome-Schwellen und Vorher/Nachher.
- **Reflektion**: was hat funktioniert, was nicht, was würdest du anders machen? Was lernst du über dich selbst? Was sind deine nächsten Schritte?
- **Operate-Phase-Doku** — track-spezifisch:
 - 🔧 (A): Pflicht (siehe Phase 9 oben)
 - 💼 (C): Pflicht mit Stakeholdern (siehe `19_capstone_c_strategist.md`)
 - 🧮 (B): Optional, weniger relevant für Forschungs-Capstone

## Capstone-Demo-Video (5-10 Min)

- **Zielgruppe wählen**: technisch (für 🔧🧮) oder nicht-technisch (für 💼).
- **Story-Struktur**: Problem → Ansatz → Demo → Outcome → Lessons Learned.
- **Hosting**: YouTube (privat oder unlisted), Loom, oder Vimeo.
- **Optional**: Untertitel für Barrierefreiheit.

**Track-spezifische Hinweise:**
- 🔧: Live-Demo des Systems mit echten Anfragen, Eval-Metriken zeigen, Architektur-Diagramm einblenden.
- 🧮: Trainings-Loss-Curves zeigen, Sample-Outputs vor/nach Fine-Tuning, Eval-Vergleich.
- 💼: Stakeholder-Interview-Ausschnitte (mit Einverständnis), Pilot-Demo, ROI-Slide, Operate-Phase-Erkenntnisse.

## Capstone-Pitch (5 Slides oder 1-Pager)

- **Slide 1**: Problem
- **Slide 2**: Lösungsansatz
- **Slide 3**: Demo-Screenshot oder Architektur
- **Slide 4**: Outcome (Eval, ROI, Stakeholder-Feedback je nach Track)
- **Slide 5**: Was kommt als nächstes? (Hosting, Skalierung, Iteration)

**Track-spezifische Hinweise:**
- 🔧: Outcome-Slide zeigt Faithfulness, Latenz, Cost, Operate-Phase-Cost-Reduktion.
- 🧮: Outcome-Slide zeigt Perplexity Vorher/Nachher, MMLU-Subset-Score, Sample-Outputs.
- 💼: Outcome-Slide zeigt Stakeholder-Feedback-Zitate (anonymisiert), Pilot-ROI-Daten, Adoption-Curve.

## Capstone-Outcome-Schwellen-Check

**🔧 Engineer:**
- Faithfulness ≥0.8
- Latenz P50 <3s
- Cost <0.05€/Request
- Eval-as-CI grün **mit Schwellenwert-Logik**
- **Operate-Phase 4-6 Wochen mit allen 6 Pflicht-Aktivitäten**

**🧮 Foundations:**
- Modell trainiert mit dokumentierten Loss-Curves
- Preference Tuning (DPO oder ORPO) durchgeführt
- Eval Vorher/Nachher mit Verbesserung
- **Decision-Framework dokumentiert** (Fine-Tuning vs. RAG vs. Prompt-Engineering)
- **S7-Self-Assessment bestanden** (Backprop auf Papier + nanoGPT-Variante)

**💼 Strategist:**
- Vollständige Strategie-Dokumentation (Module 9.0-9.6)
- Funktionierender Pilot
- Stakeholder-Tests mit ≥3 Nutzern
- **Operate-Phase 4-6 Wochen mit ≥5 Nutzern/Woche**
- **S9-Self-Assessment bestanden** (Stakeholder-Brief mit allen 9 Disziplinen)

## Im Portfolio: `00_capstone/` als oberster Ordner mit:

- `README.md` mit Track, Use-Case, Outcomes
- `demo-video-link.md` (Link plus Beschreibung)
- `pitch-slides.pdf` (5 Slides)
- Link zum eigentlichen Capstone-Repo (falls separat)
- `final-lessons-learned.md` mit Reflektion zum gesamten Curriculum-Weg
- `operate-phase/`

## Empfohlener Ablauf für Capstone-Abschluss

1. **Woche 1**: Final-Doku im Capstone-Repo abschließen, README polieren, Architektur-Diagramm finalisieren.
2. **Woche 2**: Eval-Report erstellen mit Vorher/Nachher-Tabellen.
3. **Woche 3**: Demo-Video aufnehmen (mehrere Takes okay, gut schneiden).
4. **Woche 4**: Pitch-Slides erstellen, Lessons-Learned schreiben.
5. **Woche 5+**: Operate-Phase parallel weiterführen (für 🔧/💼).

**Wichtig:** der Capstone-Abschluss ist nicht der Lehrplan-Abschluss. Mit Stufe 11 hast du eine laufende Information-Routine etabliert — Capstone-Abschluss ist nur der formale Markstein.

## Portfolio-Veröffentlichung

- GitHub-Repo öffentlich (oder zumindest Capstone-Subset)
- LinkedIn-Post mit Capstone-Highlight
- Optional: Blog-Post oder Substack-Artikel
- Optional: Talk auf lokalem Meetup

