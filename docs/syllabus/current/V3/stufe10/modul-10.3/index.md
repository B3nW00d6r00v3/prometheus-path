---
title: "Modul 10.3: MLOps + LLMOps Production"
module: "10.3"
type: index
fast_track: true
effort: "🔧 30-45h · 🧮 18-25h · 💼 8-12h"
---

# Modul 10.3: MLOps + LLMOps Production

LLMOps (LLM Operations) ist die Disziplin, die LLM-Anwendungen in Production hält. Anders als klassisches MLOps: nicht-deterministische Outputs, Cost als Hauptthema, schnelle Modell-Updates extern, **Eval-as-CI als Pflicht-Praxis**. Dieses Modul lehrt die Production-Patterns 2026 und vollendet **Capstone-Engineer** für 🔧 mit Production-Hardening.

**Aufwand:** 🔧 30-45h · 🧮 18-25h · 💼 8-12h
**Voraussetzungen:** Stufen 5, 6, idealerweise alle vorherigen, Querschnitt Production

## Lernziel

**🔧:** Dein Capstone-Engineer-Projekt ist production-hardened: Cost-Monitoring, Multi-Model-Routing, **Eval-as-CI mit konkreter Schwellenwert-Logik**, Sandboxing, Incident-Response.

**🧮:** Du verstehst Production-Patterns für deine fine-getuneten Modelle (Inferenz mit vLLM/SGLang).

**💼:** Du verstehst LLMOps strategisch — was Production wirklich kostet, welche Risiken existieren.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [MLOps vs. LLMOps — Unterschiede 2026](theorie/mlops-vs-llmops.md) | ✅ | 15min |
| 2 | [Cost-Engineering als Kerndisziplin](theorie/cost-engineering.md) | ✅ | 15min |
| 3 | [Multi-Model-Routing in der Praxis](theorie/multi-model-routing.md) | ✅ | 15min |
| 4 | [Inferenz-Server für selbst-gehostete Modelle](theorie/inferenz-server.md) | ⏭️ | 15min |
| 5 | [Latency-Optimierung](theorie/latency-optimierung.md) | ⏭️ | 15min |
| 6 | [Monitoring & Observability](theorie/monitoring-observability.md) | ✅ | 15min |
| 7 | [Eval-as-CI Setup-Walkthrough](theorie/eval-as-ci-setup.md) | ✅ | 20min |
| 8 | [Schwellenwert-Logik konkret](theorie/schwellenwert-logik.md) | ✅ | 15min |
| 9 | [Failure-Handling-Pattern](theorie/failure-handling.md) | ✅ | 15min |
| 10 | [Tooling für Eval-as-CI](theorie/eval-as-ci-tooling.md) | ✅ | 10min |
| 11 | [Anti-Patterns bei Eval-as-CI](theorie/eval-as-ci-antipatterns.md) | ✅ | 10min |
| 12 | [Prompt-Versionierung](theorie/prompt-versionierung.md) | ✅ | 10min |
| 13 | [Sandboxing für Tool-Execution](theorie/sandboxing.md) | ✅ | 15min |
| 14 | [Idempotenz und Rollback](theorie/idempotenz-rollback.md) | ⏭️ | 10min |
| 15 | [Incident-Response für KI-Apps](theorie/incident-response.md) | ✅ | 15min |
| 16 | [MCP-Sicherheit in Production](theorie/mcp-sicherheit.md) | ✅ | 15min |
| 17 | [Compliance in Production](theorie/compliance-production.md) | ✅ | 10min |

## Praxis: Hauptprojekt — track-spezifisch

**Für 🔧 (Capstone-Engineer-Production-Hardening):**

Nimm dein RAG-Agent-System aus Stufen 5-6 und mache es production-ready:

- **Multi-Model-Routing** mit LiteLLM oder OpenRouter (70% Haiku/Gemini Flash, 25% Sonnet/GPT-5, 5% Opus für komplexe Cases).
- **Cost-Tracking + Alerting** mit Helicone oder Langfuse: pro Request, pro User, pro Tag.
- **Prompt-Caching** für System-Prompts.
- **Eval-as-CI mit konkreter Schwellenwert-Logik**: GitHub Actions Workflow mit:
  - 30+ Test-Cases, 5 Runs pro Case
  - Hard-Block-Metriken (Faithfulness, Answer Relevancy) mit 5%-Schwelle
  - Warning-Metriken (Latenz, Cost) mit 10%-Schwelle
  - Override-Pfad mit Begründungs-Pflicht
  - Trend-Tracking für 3-PR-Folge
- **Sandboxing** für Tool-Execution (E2B, Modal, oder Docker).
- **Incident-Response-Plan**: Kill-Switch, Fallback-Provider, Alerting bei Eval-Score-Drop.
- **Logging und Tracing**: jeder LLM-Call mit Cost, Latenz, Eval-Score in Langfuse oder LangSmith.
- **Production-Deployment**: Docker-Container auf kostengünstigem Cloud-Server (Hetzner, Railway, Fly.io, Render).
- **Health Check + Uptime-Monitoring** mit UptimeRobot oder Better Uptime.
- Im Portfolio: `stufe-10_spezialisierung/10-3-production/` mit Architektur-Diagramm, README, Deployment-Doku, Cost-Analyse, Eval-Report.

*Capstone-Engineer-Production-Hardening vollendet: Faithfulness ≥0.8, Latenz P50 <3s, Cost <0.05€/Request.*

**Für 🧮:**
- vLLM oder SGLang lokal aufsetzen, dein fine-getunetes Modell aus 10.2 deployen.
- Latency-Benchmarks: vLLM vs. Ollama, Quantisierte vs. Full-Precision.
- Optional: Inference-Service als FastAPI vor dem Inferenz-Server mit Auth und Rate-Limiting.
- Optional Eval-as-CI für Re-Trains: bei jedem Re-Train automatischer Eval-Run gegen Baseline.
- Im Portfolio: `stufe-10_spezialisierung/10-3-inferenz-foundations/`.

**Für 💼 (Capstone-Strategist-Pilot vollenden):**
- Pilot-Implementation des Use-Cases (No-Code-Workflow, Vibe-Coded MVP, oder Engineer-MVP).
- **Stakeholder-Tests**: mindestens 3-5 echte Nutzer testen den Pilot, dokumentiertes Feedback.
- **Eval mit echten Daten**: tatsächliche Output-Qualität, ROI vs. Erwartung.
- **Compliance-Check**: AI Literacy für Test-Nutzer, DSGVO-Hinweise.
- **Iterations-Plan**: was ändern wir nach Pilot vor Scale?
- Im Portfolio: `stufe-10_spezialisierung/10-3-pilot-strategist/`.

## 🎁 Mehrwert-Mini-Projekte

- **LLMOps-Cheat-Sheet** mit Best-Practices für eigene Referenz.
- **Cost-Monitoring-Dashboard** für eigene Apps mit Streamlit/Gradio + Helicone-API.
- **Eval-CI-Template-Repo** als wiederverwendbare GitHub-Action für künftige Projekte.

## 🌱 Open-Source-Pfad

- Langfuse self-hosted statt LangSmith (komplette OSS-Alternative).
- vLLM oder SGLang OSS für Inferenz.
- Promptfoo OSS für Eval-as-CI.
- Hetzner Dedicated Server statt AWS/GCP für günstiges Hosting.
- Docker statt E2B für Sandboxing wenn DSGVO-relevant.

## Outcome-Check (track-spezifisch)

**🔧 (Capstone-Engineer):**
- [ ] Multi-Model-Routing implementiert
- [ ] Cost-Tracking + Alerting
- [ ] **Eval-as-CI in GitHub Actions mit Schwellenwert-Logik (Hard-Block + Warning + Override)**
- [ ] Sandboxing für Tool-Execution
- [ ] Production-Deployment erreichbar
- [ ] Logging/Tracing in Langfuse oder LangSmith
- [ ] Faithfulness ≥0.8, Latenz P50 <3s, Cost <0.05€/Request
- [ ] Capstone-Engineer-Production-Hardening vollendet

**🧮:**
- [ ] vLLM oder SGLang aufgesetzt
- [ ] Inferenz-Benchmarks dokumentiert
- [ ] Optional: API-Service vor Inferenz-Server
- [ ] Optional: Eval-as-CI für Re-Trains

**💼 (Capstone-Strategist):**
- [ ] Pilot-Implementation lauffähig
- [ ] Stakeholder-Tests mit ≥3 Nutzern
- [ ] Eval mit echten Daten
- [ ] Iterations-Plan
- [ ] Capstone-Strategist-Pilot vollendet
