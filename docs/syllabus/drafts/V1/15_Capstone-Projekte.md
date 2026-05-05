# Capstone-Projekte

**Aufwand gesamt:** track-spezifisch, 80-200h zusätzlich zu den Stufen-Aufwänden
**Wann starten:** Capstone-Idee in Modul 3.3 / 9.1, Capstone-Bau startet je nach Track in Stufe 5/7/9
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Capstone-Projekte sind die **Integration des Gelernten** in einer eigenständigen Arbeit, die du im Portfolio zeigst und im Lebenslauf erklärst. Drei Capstone-Optionen — jeweils mit klarer Track-Zuordnung, aber Cross-Track-Beteiligung möglich. Du wählst **eine** Variante als Haupt-Capstone, kannst aber Elemente der anderen integrieren.

**Wahl-Logik:**
- 🔧 Engineer → **Capstone-Engineer** (Production-RAG-Agent-System)
- 🧮 Foundations → **Capstone-Foundations** (nanoGPT mit Preference-Tuning auf eigenem Korpus)
- 💼 Strategist → **Capstone-Strategist** (KI-Strategie + Pilot-Implementierung für reale Org)

Du kannst auch **mehrere** machen (z.B. 🔧 + 💼 als kombinierter Track), aber das ist nicht zwingend.

---

## Capstone A: Engineer (🔧)

**Working Title:** Production-Ready Multi-Agent-RAG-System

### Konzept
Du baust ein RAG-Agent-System auf einer eigenen Domain (kann persönlich, beruflich, hobby-bezogen sein), das du iterativ über das Curriculum aufbaust. Endprodukt: deployed, evaluiert, hardened, mit echten Stakeholdern getestet.

### Phasen (entlang des Curriculums)

**Phase 1 — Domain-Wahl (Modul 3.3)**
- Wähle eine Domain mit echtem Mehrwert: eigene Notizen, Bookmarks, Fachgebiet, Verein, Hobby.
- Gib dem Projekt einen Namen, lege GitHub-Repo an.
- Definiere Use-Case in 2-3 Sätzen.

**Phase 2 — RAG-Foundation (Modul 5.1)**
- Indexierung der Domain-Dokumente
- Hybrid Search + Re-Ranking
- Erste Eval mit RAGAS

**Phase 3 — Framework-Wahl (Modul 5.2)**
- Begründete Wahl: LangChain, LlamaIndex, PydanticAI, oder direkter SDK-Code
- Refactoring auf gewählte Architektur

**Phase 4 — MCP-Integration (Modul 5.3)**
- Eigener MCP-Server für die Domain
- Optional: 2-3 externe MCP-Server konsumieren

**Phase 5 — Eval-Pipeline (Modul 5.4)**
- Eval-Dataset mit 50-100 Test-Cases
- LLM-as-Judge mit Bias-Mitigations
- Eval-Skript reproduzierbar

**Phase 6 — Frontend (Modul 5.5)**
- Streamlit, Vercel AI SDK, oder Chainlit
- Streaming, Source-Citations, Tool-Use-Visualisierung

**Phase 7 — Multi-Agent (Modul 6.2)**
- Erweiterung zum Multi-Agent-System mit LangGraph oder Vendor-SDK
- Cost-Tracking
- Sandboxed Tool-Execution

**Phase 8 — Production-Hardening (Modul 10.3)**
- Multi-Model-Routing (LiteLLM/OpenRouter)
- Prompt-Caching
- Eval-as-CI in GitHub Actions
- Production-Deployment (Hetzner/Railway/Fly.io)
- Logging und Tracing in Langfuse oder LangSmith
- Health-Check + Uptime-Monitoring

**Phase 9 — Final-Doku und Pitch (Modul 11.2 + Capstone-Abschluss)**
- README mit Architektur-Diagramm
- Demo-Video (5-10 Min)
- Pitch-Slides
- Portfolio-Eintrag

### Outcome-Schwellen (mess- und nachweisbar)

| Metrik | Schwelle | Wie messen |
|---|---|---|
| Faithfulness | ≥0.8 | RAGAS auf Eval-Dataset |
| Latenz P50 | <3s | Production-Logging |
| Cost pro Anfrage | <0.05€ | Helicone / Langfuse |
| Eval-as-CI | grün | GitHub Actions Status |
| Uptime | >99% über 30 Tage | UptimeRobot |
| MCP-Server | mindestens 1 eigener + 1 externer | Code im Repo |
| User-Tests | mindestens 3 echte Nutzer | dokumentiertes Feedback |

### Portfolio-Anforderungen

Im Portfolio-Repo unter `00_capstone/`:
- `README.md` mit: Track, Use-Case, Stack, Architektur-Diagramm, Demo-Video-Link, Outcome-Metriken
- Link zum eigentlichen Capstone-Repo
- `pitch-slides.pdf` (5 Slides)
- `eval-report.md` mit Vorher/Nachher-Tabellen
- `lessons-learned.md` mit Reflektion

### Mögliche Domain-Beispiele

- Persönlicher Wissens-Assistent auf eigenen Notizen (Obsidian-Vault, Notion-Export)
- Domain-spezifischer Fach-Bot (z.B. Steuerrecht für Selbstständige, Vereinsrecht, Förderprogramme)
- Code-Review-Assistent für eigenes/Team-Repo
- Recherche-Agent für eine Branche (mit deinen Top-Quellen aus Modul 11.1)
- DSGVO-konformer Mittelstands-Wissens-Bot
- Newsletter/Content-Pipeline (Verbindung zu Modul 10.1)

### Ressourcen

- [Anthropic Cookbook — RAG Beispiele](https://github.com/anthropics/anthropic-cookbook)
- [LangChain Templates](https://github.com/langchain-ai/langchain/tree/master/templates)
- [LlamaIndex Examples](https://github.com/run-llama/llama_index/tree/main/docs/examples)
- [Hamel Husain — Eval als Pflicht-Lektüre](https://hamel.dev/blog/posts/evals/)

---

## Capstone B: Foundations (🧮)

**Working Title:** nanoGPT-Vertiefung mit Preference-Tuning auf eigenem Korpus

### Konzept
Du baust ein eigenes Sprachmodell von Grund auf, integrierst mindestens eine moderne Architektur-Komponente (RoPE oder GQA), trainierst auf einem eigenen Korpus und vollendest mit Preference-Tuning. Endprodukt: dokumentierte Trainings-Pipeline, fine-getunetes Modell, Eval-Vergleich gegen Baseline-Modelle.

### Phasen

**Phase 1 — Korpus-Wahl (Modul 7.1)**
- Wähle einen Korpus mit Substanz und persönlichem Bezug: eigene Texte, Tweet-Archiv, Branchen-Korpus (Open-Source), kreative Schreibproben.
- Mindestens 5-50 MB Text für sinnvolles Training auf Consumer-Hardware.

**Phase 2 — Karpathy Zero-to-Hero (Modul 7.1)**
- Alle 7 Lectures durcharbeiten
- micrograd, makemore, nanoGPT alle drei selbst nachimplementieren
- Erstes Char-Modell auf eigenem Korpus

**Phase 3 — Modern Transformer (Modul 7.2)**
- nanoGPT-Codebase verstehen und kommentieren
- **Mindestens eine moderne Komponente einbauen**: RoPE, GQA, oder beide
- Training auf eigenem Korpus mit dokumentierten Loss-Curves

**Phase 4 — Wandb / TensorBoard Tracking**
- [Weights & Biases](https://wandb.ai) (kostenlos für Open-Source) oder [TensorBoard](https://www.tensorflow.org/tensorboard) für Experiment-Tracking
- Hyperparameter-Sweeps

**Phase 5 — SFT (Supervised Fine-Tuning) (Modul 10.2)**
- Aufbauend auf eigenem Foundation-Modell oder einem kleinen Open-Source-Modell (Qwen 3 0.5B/1.5B oder Gemma 3 2B)
- Instruction-Tuning auf kuratiertem Datensatz

**Phase 6 — Preference Tuning (DPO oder ORPO)**
- Datensatz mit 50-200 Pair-Samples (eigene Curation oder UltraFeedback Subset)
- Training mit TRL und Unsloth

**Phase 7 — Eval (Modul 10.2)**
- Perplexity Vorher/Nachher
- MMLU-Subset (mindestens STEM oder Humanities)
- LLM-as-Judge auf eigenem Test-Prompt-Set
- Catastrophic-Forgetting-Bewertung

**Phase 8 — Inferenz-Setup (Modul 10.3)**
- Modell mit vLLM oder SGLang deployen
- Latency-Benchmarks
- Optional: API-Service mit FastAPI

**Phase 9 — Final-Doku und Pitch (Capstone-Abschluss)**
- README mit Architektur und Trainings-Pipeline
- Demo-Video (5-10 Min) mit Modell-Outputs
- Pitch-Slides für technisches Publikum
- Portfolio-Eintrag

### Outcome-Schwellen

| Metrik | Schwelle | Wie messen |
|---|---|---|
| Loss-Konvergenz | dokumentierte Loss-Curves, plausible Konvergenz | W&B / TensorBoard |
| Moderne Komponente | mindestens RoPE oder GQA selbst eingebaut | Code-Review |
| SFT durchgeführt | ja | Trainings-Logs |
| Preference Tuning | DPO oder ORPO mit ≥50 Pair-Samples | Trainings-Logs |
| Eval Vorher/Nachher | mindestens drei Metriken | Eval-Report |
| Catastrophic Forgetting | bewertet (Drop in MMLU-Subset <10%) | Eval-Report |
| Inferenz-Setup | vLLM oder SGLang lauffähig | Setup-Doku |

### Portfolio-Anforderungen

Im Portfolio-Repo unter `00_capstone/`:
- `README.md` mit: Track, Korpus, Architektur, Trainings-Pipeline, Eval-Outcomes
- Link zum Capstone-Repo
- `architecture.md` mit detaillierter Architektur-Beschreibung
- `training-logs/` mit W&B-Screenshots oder TensorBoard-Exports
- `eval-report.md` mit Vorher/Nachher
- `pitch-slides.pdf`
- `model-outputs/` mit Beispiel-Generierungen vor und nach Training/Tuning
- `lessons-learned.md`

### Mögliche Korpus-Beispiele

- Eigene Tweets / Blog-Posts / Newsletter-Archiv
- Persönliche Tagebücher / Notizen (DSGVO: privat, nicht veröffentlichen)
- Branchen-Korpus aus Open-Data-Quellen
- Kreatives Schreiben (eigene Kurzgeschichten, Gedichte)
- Wissenschaftliche Paper aus eigenem Forschungsbereich
- Code-Korpus aus eigenen Repos (Code-Modell)

### Hardware-Realität

- **Minimal**: 24GB VRAM (RTX 4090) oder Apple Silicon Max-Modelle (32-128GB unified memory) — reicht für QLoRA auf 7B-Modellen
- **Cloud-GPU-Rental**: Lambda Labs, RunPod, Modal — H100 für 1-3 €/h
- **Foundation-Pre-Training**: nicht zu Hause, kleine nanoGPT-Char-Models gehen
- **Cost-Schätzung**: ein vollständiger Capstone-Run mit SFT + DPO auf 7B-Modell: 50-200€ in Cloud-Kosten realistisch

### Ressourcen

- [Karpathy Zero to Hero](https://karpathy.ai/zero-to-hero.html)
- [Hugging Face TRL](https://huggingface.co/docs/trl)
- [Unsloth Docs](https://docs.unsloth.ai)
- [Sebastian Raschka — Build a Large Language Model From Scratch (Buch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)

---

## Capstone C: Strategist (💼)

**Working Title:** KI-Strategie + Pilot für reale Organisation

### Konzept
Du erstellst eine vollständige KI-Strategie für eine reale Organisation (eigene Firma, Verein, Hobby-Projekt, Beratungs-Auftrag) und implementierst einen funktionierenden Pilot. Endprodukt: vollständige Strategie-Dokumentation plus lauffähiger Pilot mit Stakeholder-Tests.

### Phasen

**Phase 1 — Organisation und Use-Case-Wahl (Modul 9.1)**
- Wähle eine reale Organisation (eigene Firma, Verein, Hobby-Verbund)
- Use-Case-Portfolio mit 20+ Ideen
- Priorisierung mit RICE oder Weighted Scoring
- Top-5 mit Use-Case-Canvas
- Wähle einen Use-Case als Pilot-Kandidat

**Phase 2 — Business Case (Modul 9.2)**
- Vollständige ROI-Quantifizierung mit dokumentierten Annahmen
- TCO über 3 Jahre
- Sensitivity Analysis
- Drei Szenarien (Pessimistisch / Base / Optimistisch)
- Pilot-Gate-Plan

**Phase 3 — Operating Model (Modul 9.3)**
- AI-Maturity-Bewertung der Organisation
- Operating Model gewählt mit Begründung
- Governance-Struktur
- Talent-Roadmap (6/12/24 Monate)
- Change-Management-Plan
- Mitbestimmung-Plan (für deutsche Org)
- Skalierungs-Roadmap

**Phase 4 — Build-vs-Buy (Modul 9.4)**
- Marktanalyse mindestens 5 Vendoren
- TCO-Vergleich Build vs. Buy
- Vendor-Lock-in-Analyse
- Empfehlung mit Begründung

**Phase 5 — Compliance (Modul 9.5)**
- Risikoklassifizierung nach EU AI Act
- DSFA wenn personenbezogene Daten relevant
- AI-Literacy-Plan
- Risiko-Management-System
- Incident-Response-Plan

**Phase 6 — Pilot-Implementation (Modul 10.1 + 10.3)**

Du wählst basierend auf Use-Case und eigenen Skills:
- **Option A** (No-Code): Make.com / n8n mit MCP-Integrationen — gut wenn Use-Case ein Workflow ist und du wenig Code schreiben willst
- **Option B** (Vibe-Coded MVP): Bolt / Lovable / v0 — gut wenn Use-Case eine Web-App braucht
- **Option C** (Engineer-MVP): wenn du auch 🔧 mitmachst, eigener RAG-Agent
- **Option D** (Off-the-Shelf-Konfiguration): vorhandene Tools (HubSpot AI, Salesforce Einstein, Notion AI) konfigurieren

**Phase 7 — Stakeholder-Tests**
- Mindestens 3-5 echte Nutzer testen den Pilot
- Strukturiertes Feedback erheben (Interviews, Survey)
- Eval mit echten Daten gegen Erwartungen aus Phase 2
- Iterations-Plan

**Phase 8 — Final-Doku und Pitch (Capstone-Abschluss)**
- Vollständige Strategie-Dokumentation
- Pilot-Bericht mit echten Daten
- Demo-Video des Pilot
- Pitch-Slides für Executive-Audience (CEO/CFO)
- Roadmap-Vorschlag für Scale-Phase

### Outcome-Schwellen

| Metrik | Schwelle | Wie messen |
|---|---|---|
| Use-Case-Portfolio | mindestens 20 Ideen, Top-5 mit Canvas | Portfolio-Doku |
| Business Case | drei Szenarien mit dokumentierten Annahmen | Excel/Spreadsheet |
| Operating Model | gewählt, begründet, mit Roadmap | Strategie-Doku |
| Build-vs-Buy | mindestens 5 Vendoren analysiert | Vendor-Comparison |
| Compliance | Risikoklassifizierung + AI-Literacy-Plan | Compliance-Doku |
| Pilot | lauffähig, von ≥3 Stakeholdern getestet | Demo-Video + Test-Protokolle |
| ROI-Validierung | Pilot-Daten gegen Phase-2-Annahmen | Pilot-Bericht |
| Iterations-Plan | konkrete Next-Steps mit Owner und Timeline | Roadmap-Doku |

### Portfolio-Anforderungen

Im Portfolio-Repo unter `00_capstone/`:
- `README.md` mit: Track, Organisation, Use-Case, Outcomes, Demo-Video-Link
- `01_use-case-portfolio.md` mit allen Canvases
- `02_business-case.xlsx` (oder ODS) mit ROI-Berechnung und Sensitivity
- `03_operating-model.md` mit Strategie-Dokumenten
- `04_build-vs-buy.md` mit Vendor-Comparison
- `05_compliance.md` mit Risikoklassifizierung und AI-Literacy-Plan
- `06_pilot/` mit Pilot-Code/Workflow-Export, Screenshots, Doku
- `07_pilot-bericht.md` mit Stakeholder-Feedback und ROI-Validierung
- `pitch-slides.pdf` (Executive-Audience)
- `lessons-learned.md`

### Mögliche Organisations-Beispiele

- **Eigene Firma / Selbstständigkeit**: KI-Strategie für eigenes Geschäft, Pilot z.B. Marketing-Workflow
- **Aktuelle Arbeitgeber-Org**: KI-Strategie für eigene Abteilung (mit Erlaubnis)
- **Verein / NPO**: KI-Strategie für administratives Verein-Management, Newsletter, Mitglieder-Kommunikation
- **Beratungs-Auftrag**: bezahlter oder pro-bono Auftrag mit echtem Kunden
- **Fiktive Organisation mit realistischen Annahmen**: für Lern-Zwecke ok, weniger wertvoll für Portfolio

### Mögliche Pilot-Beispiele

- Marketing-Newsletter-Workflow mit RSS + KI-Synthese + Personalisierung
- Internes Wissens-Management (RAG auf Firmen-Dokumente, Confluence-Replacement)
- Customer-Support-Triage
- Lead-Qualifikation und -Routing
- Bewerbungs-Pre-Screening (mit Compliance-Beachtung Art. 22 DSGVO)
- Vertrags-Analyse (mit Anwalt-Validierung)

### Compliance-Tipp

Wenn dein Pilot mit echten Personen-Daten arbeitet: AVV mit Cloud-Provider, DSFA, AI-Literacy-Schulung der Test-Nutzer dokumentieren. Der Pilot ist deine Chance, Compliance-Theorie aus Modul 9.5 in Praxis zu üben.

### Ressourcen

- [Strategyzer — Free Resources](https://www.strategyzer.com/library)
- [Anthropic Cookbook — Production Patterns](https://github.com/anthropics/anthropic-cookbook)
- [BCG — How AI Pioneers Are Reinventing Their Operating Models](https://www.bcg.com)
- [EU AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu)

---

## Cross-Track-Capstone (optional, ambitioniert)

Wer Zeit und Energie hat, kann ein Capstone-Projekt machen, das alle drei Tracks integriert:

- **Beispiel**: Eigene SaaS-Plattform aufbauen
 - 💼 Strategie + Business Case + Pilot mit echten Kunden
 - 🔧 Production-Stack: RAG, Agents, Eval-as-CI, MCP, Multi-Model-Routing
 - 🧮 Optional: fine-getunetes Modell für Spezialaufgabe als Differenziator

Das ist ambitioniert, oft 200-400h zusätzlich. Aber: das Ergebnis ist ein launchable Product. Manche Curriculum-Absolventen 2026 starten so ihr eigenes Startup.

---

## Capstone-Abschluss (alle Tracks)

### Demo-Video-Anforderungen
- 5-10 Minuten
- Klare Story-Struktur: Problem → Ansatz → Demo → Outcome → Lessons Learned
- Hosting: YouTube (privat oder unlisted), Loom, oder Vimeo
- Optional: Untertitel für Barrierefreiheit

### Pitch-Slides-Anforderungen
- 5-7 Slides maximal
- Track-spezifische Audience: technisch (🔧🧮) oder Executive (💼)
- Format: PDF im Portfolio
- Tools: Marp (Markdown OSS), Pitch.com (Free), Google Slides, Keynote

### Lessons-Learned-Reflektion
- Was hat funktioniert?
- Was hat nicht funktioniert?
- Was würdest du anders machen?
- Was lernst du über dich selbst?
- Was sind deine nächsten Schritte?

### Portfolio-Veröffentlichung
- GitHub-Repo öffentlich (oder zumindest Capstone-Subset)
- LinkedIn-Post mit Capstone-Highlight
- Optional: Blog-Post oder Substack-Artikel
- Optional: Talk auf lokalem Meetup

---

## Capstone-Timeline (orientativ)

Grob geschätzt:

| Phase | 🔧 Engineer | 🧮 Foundations | 💼 Strategist |
|---|---|---|---|
| Idee + Setup | Stufe 3-5 (~10h) | Stufe 7 (~5h) | Stufe 9 (~10h) |
| Foundation | Stufe 5 (~30h) | Stufe 7 (~80-120h) | Stufe 9 (~30h) |
| Vertiefung | Stufe 6 (~25h) | Stufe 10.2 (~40-60h) | Stufe 10 Pilot (~40h) |
| Production | Stufe 10.3 (~40h) | Stufe 10.3 (~15h) | Stufe 10.1 (~20h) |
| Final | Stufe 11 (~15h) | Stufe 11 (~10h) | Stufe 11 (~15h) |
| **Total** | **~120h** | **~150-220h** | **~115h** |

Plus die regulären Stufen-Aufwände — das oben ist nur der Capstone-Anteil.

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: Outcome-Schwellen kalibrieren, neue Hardware-Realität, neue Pilot-Pattern.