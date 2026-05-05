# Querschnitt: Production & LLMOps

**Aufwand:** 🔧 40-70h · 🧮 20-35h · 💼 15-25h
**Wann nötig:** ab Stufe 5 als Bewusstsein, vertieft in Stufe 10
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Dieser Querschnitt vertieft, was in Modul 10.3 angerissen wurde, plus die Production-Pattern, die du quer durch das Curriculum brauchst. **LLMOps ist nicht klassisches MLOps** — die Disziplinen überlappen, aber LLM-Apps haben eigene Production-Patterns.

## Cost-Engineering

Bei produktiven LLM-Apps ist API-Cost oft der größte operative Kostenpunkt — 50-80% des Budgets. Cost-Engineering ist eine eigene Disziplin 2026.

### Multi-Model-Routing als Standard

- 🔄 **70/25/5-Pattern** — die wichtigste Heuristik:
 - 70% der Anfragen → günstiges Modell (Haiku, Gemini Flash, GPT-5 Mini, Llama 4 lokal)
 - 25% → Standard (Sonnet, GPT-5, Qwen 3 lokal)
 - 5% → Frontier (Opus, GPT-5.5)

 Cost-Reduktion: 60-80% bei vergleichbarer Quality. Voraussetzung: Routing-Logik die entscheidet, welches Modell für welche Anfrage. [LiteLLM Routing Patterns](https://docs.litellm.ai/docs/routing)

- 🔄 **Routing-Strategien**:
 - **Static Routing**: feste Zuordnung Use-Case → Modell.
 - **Confidence-Based Routing**: LLM Cascading — kleines Modell antwortet, bei niedriger Confidence eskaliert zu größerem.
 - **Cost-Aware Routing**: bei hohem User-Volumen Throttling auf günstigeres Modell.
 - **Dynamic Routing**: ML-basiert, basierend auf Anfrage-Komplexität.

- 🔄 **Tools für Multi-Model-Routing**:
 - **LiteLLM** (OSS): Code-Library, sehr flexibel
 - **OpenRouter**: Service mit eigener Pricing, vereinheitlichte Rechnung
 - **Helicone**: Proxy mit Caching plus Routing
 - **Portkey**: AI Gateway mit Routing, Fallback, Observability

### Prompt-Caching

- 🔄 **Prompt-Caching ist 2026 Pflicht** für Production-Apps mit wiederkehrenden Prefixen — Anthropic Prompt Caching, OpenAI Prompt Caching, Google Vertex AI Caching. Cost-Reduktion bis zu 90% bei System-Prompts und langen Contexts.

- 🟢 **Wann lohnt es sich**: System-Prompts >1024 Tokens, RAG mit konstanten Anweisungen, Multi-Turn-Conversations, Few-Shot-Prompts mit vielen Beispielen.

- 🟢 **Wann nicht**: kurze Prompts, Prompts die jedes Mal anders sind, sehr seltene Aufrufe.

- [Anthropic Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) · [OpenAI Prompt Caching](https://platform.openai.com/docs/guides/prompt-caching)

### Context-Optimierung

- 🟢 **Context Compression**: lange Conversation-Histories zusammenfassen statt voll mitzuschicken. Tools: LangChain Memory-Klassen, eigene Implementierungen mit kleinem Modell als Summarizer.

- 🟢 **Output-Limit**: `max_tokens` setzen, gegen ungewollt lange Outputs.

- 🟢 **Token-Budget per User**: Rate-Limiting nicht nur per Request sondern per User pro Tag/Monat.

### Cost-Tracking-Tools

- **Helicone** (proprietär, generöser Free-Tier): Proxy mit nativem Cost-Tracking, Caching, Routing. [https://www.helicone.ai](https://www.helicone.ai)
- **Langfuse** (OSS, self-hostable): Tracing + Eval + Cost-Tracking integriert, EU-hostbar. [https://langfuse.com](https://langfuse.com)
- **LangSmith** (proprietär): integriert mit LangChain. [https://www.langchain.com/langsmith](https://www.langchain.com/langsmith)
- **Phoenix** (OSS) und **Arize** (proprietär): Production-Monitoring inklusive Cost. [https://docs.arize.com/phoenix](https://docs.arize.com/phoenix)
- **OpenAI Usage Dashboard**, **Anthropic Console**: Native Provider-Dashboards für Basis-Übersicht.

## Latency-Optimierung

- 🟢 **Streaming als UX-Pflicht**: erste Tokens nach 500ms statt 10s Block. Server-Sent-Events (SSE) Standard. Siehe Modul 5.5.

- 🟢 **Speculative Decoding**: kleines Draft-Modell schlägt Tokens vor, großes verifiziert. Bis zu 3x Speedup bei selbst-gehosteten Modellen. Standard in vLLM 2026.

- 🟢 **Quantisierung**: FP8/INT8/INT4 für selbst-gehostete Modelle. FP8 ist 2026 oft Default für Production — kaum Quality-Drop, halbe Memory.

- 🟢 **Batching**: Continuous Batching in vLLM/SGLang gruppiert Anfragen automatisch.

- 🟢 **Edge-Inference** für Latency-kritische Use-Cases (z.B. lokales Modell auf User-Device, dann Cloud-Eskalation bei Komplexität).

- 🟢 **CDN-Caching für statische Antworten**: bei häufig gestellten Fragen mit identischen Antworten — klassischer HTTP-Cache vor LLM-Aufruf.

## Inferenz-Server für selbst-gehostete Modelle

Wenn du fine-getunete Modelle (Modul 10.2) oder OSS-Modelle in Production betreibst:

- **vLLM** (OSS): de-facto Standard 2026, sehr schnell durch PagedAttention, multi-tenant tauglich. Production-grade. [vLLM Docs](https://docs.vllm.ai)

- **SGLang** (OSS): neuer Konkurrent zu vLLM, optimiert für Reasoning und strukturierte Outputs. [SGLang GitHub](https://github.com/sgl-project/sglang)

- **Ollama**: einfacher Setup, gut für lokale/Single-User-Anwendungen, weniger production-grade für hohe Last.

- **TGI (Text Generation Inference)** von Hugging Face: production-ready, Hugging-Face-integriert.

- **Cloud-Managed-Inferenz**: Together AI, Fireworks AI, Anyscale, Modal — keine eigene Hardware nötig, dafür Pricing pro Token.

## Monitoring und Observability

Drei Layer:

- 🟢 **Application Monitoring**: klassisch [Sentry](https://sentry.io), [DataDog](https://www.datadoghq.com), [Grafana](https://grafana.com) für Errors und Performance.

- 🟢 **LLM-spezifisches Tracing**: jeder LLM-Call mit Prompt, Response, Latenz, Cost, Model, Tokens. Tools: Langfuse, LangSmith, Helicone, Phoenix.

- 🟢 **Production-Eval-Metriken**: kontinuierliche Eval auf Stichprobe der echten Anfragen (siehe Querschnitt Eval).

## Eval-as-CI Pattern

Bereits im Querschnitt Eval behandelt — hier nur die Production-Verzahnung:

- Eval-Run bei jedem Pull Request (GitHub Actions, GitLab CI, Jenkins)
- Bei Regression: Merge blockiert oder Warnung
- Baseline-Metrics versioniert im Repo
- Regelmäßige Re-Calibration der Baselines

## Sandboxing für Tool-Execution

Bei Agents mit Code-Execution oder Shell-Commands ist Sandboxing pflicht:

- **E2B** (kommerziell): Cloud-Sandboxes, Python-Execution as Service. [E2B Docs](https://e2b.dev/docs)
- **Modal** (kommerziell): Serverless mit Sandbox-Optionen. [Modal Docs](https://modal.com)
- **Daytona** (OSS): Dev-Environments, auch für Agent-Sandboxen. [Daytona](https://daytona.io)
- **Docker-basiert selbst gebaut**: gut für On-Premise und DSGVO-sensible Anwendungen.
- **WebContainers**: Browser-basierte Node.js-Sandbox. [WebContainers](https://webcontainers.io)
- **Firecracker MicroVMs** (OSS): von AWS für Lambda entwickelt, sehr schneller Start, gute Isolation. [Firecracker](https://firecracker-microvm.github.io)

## MCP-Sicherheit in Production

Wenn dein Agent MCP-Server konsumiert, die nicht von dir kontrolliert sind:

- 🟢 **Authentication**: OAuth 2.1 als 2026-Standard für MCP. Keine API-Keys in Plain Text.
- 🟢 **Scope-Limitierung**: Server bekommt nur Permissions, die er braucht.
- 🟢 **Audit-Logs**: jede Tool-Execution geloggt — wer, was, wann, mit welchem Argument, mit welchem Outcome.
- 🟢 **Allowlisting**: nur explizit erlaubte MCP-Server, keine dynamische Server-Discovery aus User-Input.
- 🟢 **Sandboxing für unbekannte Server**: wenn ein Server externe Resources holt oder Code ausführt, in Sandbox.
- 🟢 **Rate-Limiting per Tool**: gegen Tool-Spam von Agents.

[MCP Security Best Practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices)

## Idempotenz und Rollback

Bei kritischen Aktionen, die Agents ausführen:

- 🟢 **Idempotente Aktionen**: mehrfache Ausführung führt zum gleichen Ergebnis (z.B. "setze Email-Status auf 'gesendet'" — wenn schon gesendet, kein zweites Senden).

- 🟢 **Compensation-Pattern**: für nicht-idempotente Aktionen ein Rollback-Pfad ("undo send email" via "send recall email" — funktioniert nicht immer, aber Pattern ist explizit).

- 🟢 **Saga-Pattern**: bei mehrstufigen Aktionen Compensations für jede Stufe definieren.

- 🟢 **Human-in-the-Loop für irreversible Aktionen**: bevor Agent Geld überweist, E-Mails sendet, etc. — Mensch bestätigt.

## Prompt-Versionierung

Prompts sind Code 2026:

- 🟢 **Git** als Default — Prompts in Files, versioniert mit Code.
- 🟢 **Prompt-Hub-Pattern**: dedizierter Repo oder Tool ([LangSmith Hub](https://smith.langchain.com/hub), [PromptLayer](https://promptlayer.com)) für nicht-technische Teams.
- 🟢 **A/B-Test-Framework für Prompts**: Promptfoo, eigene Skripte.
- 🟢 **Rollback-Pfad**: bei schlechter Performance schneller Rollback zu vorheriger Version.

## Incident-Response für KI-Apps

Was tun, wenn KI versagt:

- 🟢 **Alerting**: Schwellenwerte für Eval-Metriken, Cost, Latenz, Error-Rate. Bei Verletzung: PagerDuty, Slack, E-Mail.

- 🟢 **Kill-Switch**: KI-Feature deaktivieren ohne App-Outage. Pattern: Feature-Flag, das KI-Pfad bypasst.

- 🟢 **Fallback-Modus**: bei API-Outage auf alternativen Provider (LiteLLM Fallback) oder klassische Logik (z.B. statisches FAQ statt RAG).

- 🟢 **Post-Mortem-Pattern** ohne Schuldzuweisung: was passierte, was lernen wir, was ändern wir? Kultur wichtig: KI-Incidents werden öfter passieren als klassische Software-Incidents, weil KI nicht-deterministisch ist.

- 🟢 **User-Communication-Plan**: bei sichtbaren Problemen User informieren, nicht verstecken.

## Compliance in Production

Verbindung zu Modul 9.5:

- 🟢 **AI Literacy als Pflicht-Element**: alle Mitarbeiter, die mit der KI-App arbeiten, müssen geschult werden.
- 🟢 **Logging für Audit**: jede signifikante KI-Entscheidung logbar — mindestens Input, Output, Modell, Zeit.
- 🟢 **Right-to-be-Forgotten**: bei DSGVO-Anfragen müssen User-Daten aus allen Stores gelöscht werden — auch aus Vector-DBs!
- 🟢 **Bias-Monitoring kontinuierlich**: Eval-Datasets mit Fairness-Test-Cases, regelmäßige Reviews.
- 🟢 **DSFA bei High-Risk-Anwendungen**: Datenschutz-Folgenabschätzung dokumentiert und aktualisiert.

## Deployment-Patterns

- 🟢 **Containerisierung**: Docker als Standard. Image-Größe minimieren (multi-stage builds).

- 🟢 **Hosting-Optionen kostengünstig**:
 - [Hetzner Dedicated](https://www.hetzner.com): sehr günstig, EU-DSGVO-freundlich, eigene Hardware
 - [Railway](https://railway.app), [Fly.io](https://fly.io), [Render](https://render.com): einfach Setup, gut für Startups
 - AWS/GCP/Azure: für Enterprise und wenn andere Services bereits dort
 - **Self-hosted on-premise**: für DSGVO-kritische und Cost-empfindliche Use-Cases

- 🟢 **Health-Check-Endpoints**: `/health` und `/ready` als Standard-Pattern. Liveness vs. Readiness Probes (Kubernetes-Pattern, auch außerhalb K8s sinnvoll).

- 🟢 **Uptime-Monitoring**: [UptimeRobot](https://uptimerobot.com) (kostenlos für Basics), [Better Uptime](https://betterstack.com), [Statuspage](https://www.atlassian.com/software/statuspage).

## Klassisches MLOps für klassisches ML

Wenn du klassische ML-Modelle (Boosting aus 8.3, Klassifikation aus 8.2) in Production betreibst, gilt klassisches MLOps:

- **Modell-Versionierung**: [MLflow](https://mlflow.org), [DVC](https://dvc.org), [Weights & Biases](https://wandb.ai)
- **Modell-Registry**: zentrale Speicherung versionierter Modelle
- **Pipeline-Orchestrierung**: [Airflow](https://airflow.apache.org), [Prefect](https://www.prefect.io), [Dagster](https://dagster.io)
- **Feature Stores**: [Feast](https://feast.dev) (OSS) für konsistente Feature-Berechnung Train/Serve
- **Modell-Monitoring**: Drift Detection, Performance Degradation, Data Quality

[DLAI — MLOps Specialization (Audit kostenlos)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)

## Anti-Pattern in Production

- 🟢 **No Cost Tracking**: API-Cost wird zur Überraschung am Monatsende.
- 🟢 **Single-Provider Lock-in**: bei API-Outage komplette App down.
- 🟢 **No Eval in CI**: Regressions werden erst in Production entdeckt.
- 🟢 **Tool-Execution ohne Sandbox**: Agent macht Schaden auf Production-System.
- 🟢 **No Logging**: bei Problemen keine Möglichkeit zur Diagnose.
- 🟢 **Hardcoded Prompts**: Prompts im Code statt in versionierten Files.
- 🟢 **No Rate Limiting per User**: ein Power-User frisst gesamtes API-Budget.
- 🟢 **Streaming nicht implementiert**: User wartet 10s ohne Feedback.

## Praxis: Production-Hardening für eigenen Capstone

Wenn du diesen Querschnitt durcharbeitest und 🔧 bist, ist dies die Stelle, an der dein Capstone-Engineer-Projekt zu Production-Reife kommt — siehe Modul 10.3.

Wenn du 🧮 oder 💼 bist, ist dies vor allem als Bewusstsein wichtig:

- 🧮: Inferenz-Server-Wahl für eigenes Modell aus Stufe 7+10.
- 💼: bei Build-vs-Buy-Entscheidungen (Modul 9.4) realistisch einschätzen, was Production wirklich kostet und welche Risiken existieren.

## Free-Zertifikate

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [DLAI — LLMOps](https://learn.deeplearning.ai) | DLAI | ~2h | Production-Foundation |
| [DLAI — Automated Testing for LLMOps](https://learn.deeplearning.ai) | DLAI / CircleCI | ~2h | Eval-as-CI |
| [DLAI — Efficiently Serving LLMs](https://learn.deeplearning.ai) | DLAI / Predibase | ~2h | Inferenz-Optimierung |
| [DLAI — Quality and Safety for LLM Applications](https://learn.deeplearning.ai) | DLAI / WhyLabs | ~2h | Production-Eval |
| [Coursera — MLOps Specialization](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops) | Andrew Ng / Coursera | ~80h Audit | klassisches MLOps |
| [Anthropic Cookbook — Production Patterns](https://github.com/anthropics/anthropic-cookbook) | Anthropic | nach Bedarf | Praxis-Beispiele |

## Outcome-Check

**🔧:**
- [ ] Multi-Model-Routing implementiert (LiteLLM oder OpenRouter)
- [ ] Cost-Tracking + Alerting (Helicone, Langfuse, oder LangSmith)
- [ ] Prompt-Caching wo sinnvoll
- [ ] Sandboxing für Tool-Execution
- [ ] Eval-as-CI in GitHub Actions
- [ ] Production-Logging mit LLM-Tracing
- [ ] Health-Check + Uptime-Monitoring
- [ ] Incident-Response-Plan dokumentiert

**🧮:**
- [ ] Inferenz-Server-Wahl mit Begründung (vLLM, SGLang, oder Ollama)
- [ ] Quantisierung als Option getestet
- [ ] Latency-Benchmarks dokumentiert

**💼:**
- [ ] Production-Cost-Realität konzeptionell verstanden
- [ ] Build-vs-Buy-Entscheidung berücksichtigt LLMOps-Aufwand
- [ ] Compliance-Anforderungen Production-relevant gedacht

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: Inferenz-Server-Performance-Updates, neue Quantisierungs-Methoden, Multi-Model-Routing-Tools, MCP-Sicherheits-Patterns.