# Capstone A: Engineer (🔧)

**Working Title:** Production-Ready Multi-Agent-RAG-System
**Aufwand:** 80-200h zusätzlich zu den Stufen-Aufwänden, je nach Domain-Komplexität
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** 🔧-Track, idealerweise Stufen 1-3 absolviert für Capstone-Start in Stufe 5

Du baust ein RAG-Agent-System auf einer eigenen Domain (kann persönlich, beruflich, hobby-bezogen sein), das du iterativ über das Curriculum aufbaust. Endprodukt: deployed, evaluiert, hardened, **mit Operate-Phase im Real-User-Betrieb** *(Goldstandard NEU in v2.1)*, mit echten Stakeholdern getestet.

**Wichtige Strukturänderungen in v2.1:**

Diese Datei ist die **Master-Capstone-Datei** in v2.1. Sie enthält:
1. **Capstone A komplett** (Konzept, 9 Phasen, Outcome-Schwellen, Portfolio-Anforderungen)
2. **Verschobene Update-Blöcke aus Stufen 5+6** (Capstone-Engineer-Update nach 5.5, nach 6.2, nach 6.5 NEU in v2.1, plus Verweis auf 10.3)
3. **Capstone-Abschluss-Master-Sektion** für alle drei Capstones — Demo-Video, Pitch, Lessons-Learned, Portfolio-Struktur (war in v2.0 in Stufe 11, jetzt zentral hier)
4. **Operate-Phase als Goldstandard** (NEU in v2.1) — 4-6 Wochen Real-User-Betrieb nach Production-Hardening

`16_capstone_b_foundations.md` und `17_capstone_c_strategist.md` referenzieren die Master-Sektionen aus dieser Datei.

---

## Konzept

Du baust ein RAG-Agent-System auf einer eigenen Domain mit echtem Mehrwert für dich oder deine Stakeholder. Das System wächst iterativ über das Curriculum:

- **Stufe 5** legt RAG-Foundation und Eval-Pipeline
- **Stufe 6** macht es zum Multi-Agent-System mit Computer Use *(NEU in v2.1)*
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
- *MCP-Sicherheits-Block (NEU in v2.1)*: dein eigener Server hält Best Practices ein (OAuth 2.1, Audit-Logs, Scope-Limitierung)

### Phase 5 — Eval-Pipeline (Modul 5.0 + 5.4)
- *Eval-Mini Hamel-Methodik aus Modul 5.0 (NEU in v2.1)*: erste 20 Test-Cases mit ehrlicher Eval, vor RAGAS
- Eval-Dataset mit 50-100 Test-Cases (Vertiefung in 5.4)
- LLM-as-Judge mit Bias-Mitigations
- Eval-Skript reproduzierbar

### Phase 6 — Frontend (Modul 5.5)
- Streamlit, Vercel AI SDK, oder Chainlit
- Streaming, Source-Citations, Tool-Use-Visualisierung

### Capstone-Engineer-Update nach Stufe 5 *(verschoben aus Stufe 5 in v2.1)*

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
- *Trajectory-Eval-Pflicht-Block (NEU in v2.1)*: 4 Metriken (Task Success Rate, Trajectory Quality, Tool Usage Quality, Cost Efficiency), Failure-Mode-Analyse

### Phase 7b — Computer Use Integration (Modul 6.5, NEU in v2.1, optional)
- Optional: Computer Use für Browser- oder Desktop-Automation als Erweiterung
- Production-Sandboxing besonders wichtig (Daytona, E2B, oder Docker)
- Wenn integriert: dokumentiere Use-Case und Sandboxing-Setup

### Capstone-Engineer-Update nach Stufe 6 *(verschoben aus Stufe 6 in v2.1)*

Nach Stufe 6 ist dein Capstone-Engineer-Projekt erweitert:
- ✅ Multi-Agent-System mit dokumentierten Agent-Rollen
- ✅ Trajectory-Eval mit 4 Pflicht-Metriken durchgeführt *(NEU in v2.1)*
- ✅ Sandboxed Tool-Execution
- ✅ Cost-Tracking pro Agent
- ✅ Optional: Computer Use Integration *(NEU in v2.1, falls gemacht)*

In Stufe 10 wird daraus die Production-Reife mit Eval-as-CI und Operate-Phase.

### Phase 8 — Production-Hardening (Modul 10.3)
- Multi-Model-Routing (LiteLLM/OpenRouter, 70/25/5-Pattern)
- Prompt-Caching
- *Eval-as-CI mit Schwellenwert-Logik (verstärkt in v2.1)*: Hard-Block / Warning / Tracking, Override-Pfad mit Begründungs-Pflicht, Trend-Tracking
- Sandboxing für Tool-Execution
- Production-Deployment (Hetzner/Railway/Fly.io)
- Logging und Tracing in Langfuse oder LangSmith
- Health-Check + Uptime-Monitoring
- Incident-Response-Plan

### Phase 9 — Operate-Phase als Goldstandard *(NEU in v2.1)*

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
| Eval-as-CI | grün **mit Schwellenwert-Logik (Hard-Block/Warning/Tracking)** *(NEU in v2.1)* | GitHub Actions Status |
| Uptime | >99% über 30 Tage | UptimeRobot |
| MCP-Server | mindestens 1 eigener + 1 externer | Code im Repo |
| User-Tests | mindestens 3 echte Nutzer | dokumentiertes Feedback |
| Trajectory-Eval | 4 Pflicht-Metriken dokumentiert *(NEU in v2.1)* | Eval-Report |
| **Operate-Phase** *(NEU in v2.1, Goldstandard)* | **4-6 Wochen Real-User-Betrieb mit allen 6 Pflicht-Aktivitäten** | Operate-Phase-Doku im Portfolio |

---

## Portfolio-Anforderungen für Capstone A

Im Portfolio-Repo unter `00_capstone/`:
- `README.md` mit: Track, Use-Case, Stack, Architektur-Diagramm, Demo-Video-Link, Outcome-Metriken
- Link zum eigentlichen Capstone-Repo
- `pitch-slides.pdf` (5 Slides)
- `eval-report.md` mit Vorher/Nachher-Tabellen
- `lessons-learned.md` mit Reflektion
- `operate-phase/` *(NEU in v2.1)* — Operate-Phase-Doku
 - `real-user-logs.md` (anonymisiert)
 - `cost-sprints.md`
 - `post-mortems.md`
 - `drift-analysis.md`
 - `final-lessons-learned.md`

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

# Capstone-Abschluss — Master-Sektion für alle drei Capstones *(verschoben aus Stufe 11 in v2.1)*

Nach Stufe 11 schließt du deinen Capstone offiziell ab. Diese Sektion gilt für **alle drei Capstones** (A Engineer, B Foundations, C Strategist) — die Capstone-spezifischen Dateien `16_capstone_b_foundations.md` und `17_capstone_c_strategist.md` referenzieren diese Master-Sektion.

In v2.0 stand dieser Block in Stufe 11 selbst — was die Stufe gegenüber den track-spezifischen Capstone-Dateien fragmentierte. In v2.1 ist alles Capstone-Inhalt zentral in den Capstone-Dateien (15/16/17), die Stufen-Dateien sind frei für Modul-Inhalte.

## Capstone-Final-Doku

Pflicht für alle drei Capstones:

- **Komplette README** im Capstone-Repo: Was, Warum, Wie, Wer, Wann, Outcome.
- **Architektur-Diagramm** der finalen Lösung. Tools: [draw.io](https://draw.io), [Excalidraw](https://excalidraw.com), [Mermaid](https://mermaid.js.org) für Code-as-Diagram.
- **Eval-Report** mit allen Outcome-Schwellen und Vorher/Nachher.
- **Reflektion**: was hat funktioniert, was nicht, was würdest du anders machen?
- **Operate-Phase-Doku** *(NEU in v2.1)* — track-spezifisch:
 - 🔧 (A): Pflicht (siehe Phase 9 oben)
 - 💼 (C): Pflicht mit Stakeholdern (siehe `17_capstone_c_strategist.md`)
 - 🧮 (B): Optional, weniger relevant für Forschungs-Capstone

## Capstone-Demo-Video (5-10 Min)

- **Zielgruppe wählen**: technisch (für 🔧🧮) oder nicht-technisch (für 💼).
- **Story-Struktur**: Problem → Ansatz → Demo → Outcome → Lessons Learned.
- **Hosting**: YouTube (privat oder unlisted), Loom, oder Vimeo.

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
- Eval-as-CI grün **mit Schwellenwert-Logik** *(verstärkt in v2.1)*
- **Operate-Phase 4-6 Wochen mit allen 6 Pflicht-Aktivitäten** *(NEU in v2.1)*

**🧮 Foundations:**
- Modell trainiert mit dokumentierten Loss-Curves
- Preference Tuning (DPO oder ORPO) durchgeführt
- Eval Vorher/Nachher mit Verbesserung
- **Decision-Framework dokumentiert** (Fine-Tuning vs. RAG vs. Prompt-Engineering — *NEU in v2.1*)
- **S7-Self-Assessment bestanden** (Backprop auf Papier + nanoGPT-Variante — *NEU in v2.1*)

**💼 Strategist:**
- Vollständige Strategie-Dokumentation (Module 9.0-9.6)
- Funktionierender Pilot
- Stakeholder-Tests mit ≥3 Nutzern
- **Operate-Phase 4-6 Wochen mit ≥5 Nutzern/Woche** *(NEU in v2.1)*
- **S9-Self-Assessment bestanden** (Stakeholder-Brief mit allen 9 Disziplinen — *NEU in v2.1*)

## Im Portfolio: `00_capstone/` als oberster Ordner mit:

- `README.md` mit Track, Use-Case, Outcomes
- `demo-video-link.md` (Link plus Beschreibung)
- `pitch-slides.pdf` (5 Slides)
- Link zum eigentlichen Capstone-Repo (falls separat)
- `final-lessons-learned.md` mit Reflektion zum gesamten Curriculum-Weg
- `operate-phase/` *(NEU in v2.1, track-spezifisch)*

## Empfohlener Ablauf für Capstone-Abschluss

1. **Woche 1**: Final-Doku im Capstone-Repo abschließen, README polieren, Architektur-Diagramm finalisieren.
2. **Woche 2**: Eval-Report erstellen mit Vorher/Nachher-Tabellen.
3. **Woche 3**: Demo-Video aufnehmen (mehrere Takes okay, gut schneiden).
4. **Woche 4**: Pitch-Slides erstellen, Lessons-Learned schreiben.
5. **Woche 5+**: Operate-Phase parallel weiterführen (für 🔧/💼).

**Wichtig:** der Capstone-Abschluss ist nicht der Lehrplan-Abschluss. Mit Stufe 11 hast du eine laufende Information-Routine etabliert — Capstone-Abschluss ist nur der formale Markstein.

---

## Aktualisierungslog

- **2026-05-04:** Version v2.1.0 — **Master-Capstone-Datei aufgesetzt**: Capstone A komplett + verschobene Update-Blöcke aus Stufen 5+6 (mit v2.1-Anker-Punkten) + neue Phase 7b (Computer Use, Modul 6.5 NEU in v2.1) + **Operate-Phase als Goldstandard NEU** (4-6 Wochen Real-User-Betrieb mit 6 Pflicht-Aktivitäten: Cost-Sprints, Incident-Response, Eval-Drift, User-Feedback-Integration, Lessons-Learned, Eval-Set-Wachstum); **Capstone-Abschluss-Master-Sektion** für alle drei Capstones aus Stufe 11 hierher verschoben (Final-Doku, Demo-Video, Pitch, Outcome-Schwellen, Portfolio-Struktur — track-spezifisch); Outcome-Schwellen erweitert um Trajectory-Eval-4-Metriken und Operate-Phase; Portfolio-Anforderungen erweitert um operate-phase/-Ordner; Capstone-Outcome-Schwellen-Check track-spezifisch erweitert um S7/S9-Self-Assessments und Decision-Framework.
- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: Operate-Phase-Erfahrungen aus echten Capstones (welche Pflicht-Aktivitäten haben sich bewährt, welche brauchen Anpassung), Capstone-Outcome-Schwellen-Kalibrierung.
