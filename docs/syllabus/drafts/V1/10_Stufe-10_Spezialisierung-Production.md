# Stufe 10: Spezialisierung & Production

**Aufwand gesamt:** 🔧 60-100h · 🧮 80-120h · 💼 30-50h
**Voraussetzungen:** Stufen 1-9, Capstone-Auswahl getroffen
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Diese Stufe schließt alle drei Capstones zur **Production-Reife** ab. Modul 10.1 (Marketing) ist als Branchen-Beispiel gewählt, weil Marketing-KI 2026 die häufigste Praxis-Anwendung ist und du die Pattern (LLM + MCP + Workflow + Eval) auf jede andere Branche übertragen kannst. Modul 10.2 ist Fine-Tuning in der modernen Form (DPO/ORPO/GRPO/DoRA mit Llama 4 / Qwen 3 / Gemma 4), Modul 10.3 ist LLMOps mit Cost-Engineering, Monitoring und Eval-as-CI.

**Ergebnis nach Stufe 10:**
- 🔧: RAG-Agent-System aus 5.1/6.2 ist production-hardened mit Cost-Monitoring, Sandboxing, Eval-as-CI.
- 🧮: nanoGPT aus 7.2 hat Preference-Tuning (DPO oder ORPO) und Eval-Vergleich.
- 💼: Capstone-Pilot ist gebaut und mit echten Stakeholder-Tests validiert.
- Du verstehst KI im Marketing als Branchen-Pattern.
- Du kennst die Fine-Tuning-Landschaft 2026.
- Du beherrschst LLMOps-Production-Patterns.

---

## Modul 10.1: KI im Marketing (Branchen-Pattern)

Marketing ist 2026 die KI-Anwendung mit der höchsten Verbreitung in Mittelstand und Großunternehmen. Dieses Modul behandelt Marketing-KI **als Pattern**, das du auf andere Branchen übertragen kannst: LLM + MCP-Integrationen + Workflow-Automation + Eval. Wer Marketing-KI versteht, versteht 70% der Branchen-spezifischen Anwendungs-Pattern.

**Aufwand:** 🔧 12-18h · 🧮 8-12h · 💼 18-25h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Stufen 5, 6, 9

### Lernziel
Du baust einen Marketing-KI-Workflow mit MCP-Integrationen zu mindestens zwei Marketing-Tools, mit Eval-Methodik. Du verstehst, wie das Pattern auf andere Branchen übertragbar ist.

### Theorie

- 🟢 **Marketing-KI 2026: die etablierten Use-Cases** —
 - **Content-Generierung**: Blog-Posts, Newsletter, Social-Media-Posts, Ad-Copy
 - **SEO-Optimierung**: Keyword-Recherche, Meta-Descriptions, Content-Briefs
 - **Personalisierung**: dynamische E-Mail-Inhalte, Product Recommendations, Dynamic Pricing
 - **Customer Segmentation**: Cluster-Analyse aus 8.1 angewendet auf Customer-Daten
 - **Marketing Analytics**: Berichts-Generierung, Attribution-Modelle, Forecasting
 - **Customer Service**: Chatbots, Triage, FAQ-Automation
 - **Lead Qualification**: Scoring, Routing, Outreach-Automation

 [HubSpot — State of AI in Marketing](https://www.hubspot.com/state-of-marketing) · [McKinsey — AI in Marketing](https://www.mckinsey.com)

- 🟢 **Content-Generierung über reine Generation hinaus** — naive Anwendung: "schreibe einen Blog-Post über X". Professionelle Anwendung: Content-Brief-Generierung (mit Keyword-Recherche), Outline-Creation, Draft mit Brand-Voice, Iteration mit Editor, SEO-Optimierung, Versionierung. **Eval pflichtig**: Brand-Voice-Konsistenz, SEO-Tauglichkeit, Faktenrichtigkeit. [Anthropic — Content Generation Best Practices](https://docs.claude.com)

- 🔄 **MCP für Marketing-Integrationen** — moderner 2026-Stack: dein Agent ruft via MCP-Server: Google Analytics 4 (Daten), HubSpot oder Salesforce (CRM), Mailchimp/Brevo (E-Mail), Buffer/Hootsuite (Social Media), Webflow/WordPress (CMS). Vorteil: dein Agent kann Daten holen und Aktionen auslösen, nicht nur Texte generieren. [Public MCP Servers](https://github.com/modelcontextprotocol/servers) · [HubSpot MCP](https://developers.hubspot.com)

- 🟢 **Marketing-Workflow-Automation** — Make.com / n8n / Zapier (siehe Modul 2.6) als Glue zwischen Tools. Beispiel-Workflows: (1) RSS → KI-Zusammenfassung → Newsletter-Draft → Approval → Versand. (2) Lead-Form → KI-Qualifikation → CRM-Eintrag → Slack-Notification → personalisierte E-Mail. (3) Customer-Support-Ticket → KI-Klassifikation → Routing → Auto-Response oder Eskalation.

- 🟢 **Brand-Voice und Style-Consistency** — größtes Praxis-Problem bei KI-Content: alles klingt gleich, alles klingt "KI-typisch". Lösungen: (1) **System-Prompt mit Brand-Voice-Beispielen** (5-10 Beispiele aus eigenen Inhalten). (2) **Few-Shot-Pattern** in jedem Prompt. (3) **Style-Guide als RAG-Quelle**. (4) **Fine-Tuning auf eigenen Inhalten** (Modul 10.2). (5) **Custom GPTs / Claude Projects** mit persistentem Style-Kontext. [Anthropic — Brand Voice Cookbook](https://github.com/anthropics/anthropic-cookbook)

- 🟢 **SEO mit KI 2026** — die Landschaft hat sich verändert: Google's AI Overviews und ChatGPT-Search verändern Search-Behavior. Klassisches SEO ist nicht tot, aber **Generative Engine Optimization (GEO)** wird wichtig: wie wird dein Content in KI-Antworten zitiert? Tools: [SurferSEO](https://surferseo.com), [Frase](https://www.frase.io), [Rank Math](https://rankmath.com) (WordPress, OSS für Basics). Live-Recherche-Quellen: [Search Engine Land](https://searchengineland.com), [Aleyda Solis](https://www.aleydasolis.com).

- 🟢 **Personalisierung: das Spektrum** — von einfach zu komplex:
 - **Segment-basiert**: 5-10 Segmente, pro Segment angepasste Inhalte. Klassisch.
 - **Behavioral**: basiert auf User-Aktionen (Klicks, Käufe). RecSys aus Modul 8.4.
 - **Real-time Dynamic**: zur Render-Zeit individualisierter Content via LLM. Cost-intensiv.
 - **1:1 LLM-personalized**: jedes E-Mail / jeder Page-Visit ist individuell. Production-Hürde, aber 2026 im Premium-Segment Standard.

- 🟢 **DSGVO im Marketing** — besonders wichtig: (1) **Einwilligung für E-Mail-Marketing** (BfDI streng). (2) **Profiling und automatisierte Entscheidungen** (Art. 22 DSGVO). (3) **Opt-Out für KI-Personalisierung**. (4) **Transparenz** über KI-Einsatz in Customer-Communication. Gilt für alle Branchen, in Marketing besonders sichtbar. [BfDI — DSGVO Marketing](https://www.bfdi.bund.de)

- 🟢 **Eval für Marketing-KI** — kritisch und oft schlecht gemacht. Drei Eval-Ebenen:
 - **Output-Qualität**: Brand-Voice, Faktenrichtigkeit, SEO-Tauglichkeit (LLM-as-Judge oder manuell).
 - **Engagement**: Open Rates, Click Rates, Conversion (klassisches A/B-Testing aus 8.5).
 - **Business Impact**: Revenue, Retention, CAC. Brauchen Längsschnitt-Daten.

 Anti-Pattern 2024-2026: KI-Content-Generierung ohne Eval — niemand merkt, dass die Conversion sinkt.

- 🟢 **Marketing-KI-Tool-Landschaft 2026** —
 - **All-in-One**: HubSpot AI, Salesforce Einstein, Adobe Sensei.
 - **Content**: [Jasper](https://www.jasper.ai), [Copy.ai](https://www.copy.ai), [ChatGPT Custom GPTs / Claude Projects].
 - **Visual**: Midjourney, Adobe Firefly, [Recraft](https://www.recraft.ai), Stable Diffusion.
 - **Video**: Runway Gen-4.5, Veo 3.1, [Synthesia](https://www.synthesia.io) (Avatar-Videos).
 - **SEO**: SurferSEO, Frase, [Clearscope](https://www.clearscope.io).
 - **Analytics & Reporting**: GA4 mit Gemini, [Tableau Pulse](https://www.tableau.com), [Looker mit Gemini](https://cloud.google.com/looker).

- 🟢 **Übertragung auf andere Branchen** — das Marketing-Pattern ist generalisierbar:
 - **HR**: LLM + MCP zu Workday/SAP-HR + Eval für Bewerber-Kommunikation.
 - **Sales**: LLM + MCP zu CRM + Eval für Outreach-Wirksamkeit.
 - **Customer Support**: LLM + MCP zu Zendesk/Intercom + Eval für Resolution Rate.
 - **Operations**: LLM + MCP zu ERP-System + Eval für Prozess-Effizienz.
 - **Finance**: LLM + MCP zu Buchhaltung + Eval für Vorhersage-Genauigkeit.

 Pattern: **LLM + Provider-Abstraktion + MCP-Integrationen + Workflow-Engine + Eval**. Das ist 70% jeder Branchen-KI 2026.

### Praxis: Hauptprojekt — Marketing-KI-Workflow mit MCP

Wähle einen konkreten Marketing-Use-Case (für 💼 sollte das den Capstone-Pilot ergeben):

**Vorschlag-Use-Cases:**
- **Newsletter-Workflow**: RSS-Feeds + KI-Synthese + personalisierter Versand mit Segmentierung.
- **Lead-Qualifikations-Workflow**: Form-Submission → KI-Klassifikation → CRM-Eintrag → Personalisierte E-Mail.
- **Content-Generation-Pipeline**: Keyword-Brief → Outline → Draft → SEO-Optimierung → Approval-Workflow.
- **Customer-Support-Triage**: Ticket-Eingang → KI-Klassifikation → Routing oder Auto-Response.

**Anforderungen:**
- **Stack**: Make.com / n8n / oder eigener Code (Python + LangGraph) mit LLM-API.
- **Mindestens zwei MCP-Integrationen** (z.B. Google Drive für Style-Guides + HubSpot/Brevo für Aktion).
- **Brand-Voice** mit Few-Shot-Pattern oder System-Prompt mit Beispielen.
- **Human-in-the-Loop** für kritische Aktionen (z.B. Newsletter-Versand erst nach Approval).
- **Eval**: mindestens Output-Qualität mit LLM-as-Judge oder strukturierter Bewertung. Bei Production-Reife: A/B-Testing-Plan.
- **DSGVO-Check**: dokumentiert wo personenbezogene Daten verarbeitet werden, wie Einwilligung gehandhabt wird.
- Im Portfolio: `stufe-10_spezialisierung/10-1-marketing-workflow/` mit Code/Workflow-Export, README, Eval-Report, DSGVO-Dokumentation.

**Capstone-Update**:
- 🔧/🧮: Übertragung des Patterns auf den eigenen Capstone — z.B. dein RAG-Agent als Marketing-Briefing-Tool.
- 💼: Wenn Capstone-Use-Case Marketing-bezogen ist, ist das hier dein Pilot.

### 🎁 Mehrwert-Mini-Projekte
- **Persönlicher Newsletter-Workflow** für eigene Inhalte oder Themen (siehe yesberlin.rsvp Pattern).
- **Eigene Brand-Voice-Definition** mit 10 Style-Beispielen als RAG-Quelle.
- **Persönlicher Content-Briefing-Generator** für eigene Blog-Posts.

### 🌱 Open-Source-Pfad
- n8n self-hosted statt Make.com.
- Brevo (großzügiger Free-Tier) oder [Mautic](https://www.mautic.org) (OSS) statt HubSpot.
- [Plausible](https://plausible.io) oder [Umami](https://umami.is) statt GA4 (DSGVO-freundlich).
- [Mailcoach](https://mailcoach.app) oder [Listmonk](https://listmonk.app) als OSS-Newsletter-Tools.
- Lokales Ollama als LLM-Backend.

### Outcome-Check
- [ ] Lauffähiger Marketing-KI-Workflow
- [ ] Mindestens zwei MCP-Integrationen
- [ ] Brand-Voice-Mechanismus
- [ ] Human-in-the-Loop für kritische Aktion
- [ ] Eval-Methodik dokumentiert
- [ ] DSGVO-Bewertung
- [ ] Übertragbarkeits-Reflexion: wie würdest du das Pattern auf eine andere Branche anwenden?

---

## Modul 10.2: Fine-Tuning modern

Fine-Tuning ist 2026 nicht mehr "trainiere ein eigenes Modell" — es ist **Preference-Tuning auf bestehenden Foundation-Modellen mit DPO/ORPO/GRPO** plus **PEFT-Methoden wie LoRA und DoRA** für Compute-Effizienz. Dieses Modul lehrt die moderne Landschaft: wann Fine-Tuning, was die Methoden sind, welche Tools (Unsloth, Axolotl, TRL), und welche Modelle (Llama 4, Qwen 3, Gemma 4, DeepSeek V4). **Hier vollendet sich Capstone-Foundations für 🧮.**

**Aufwand:** 🔧 18-25h · 🧮 50-80h · 💼 4-8h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Stufen 7 (DL Foundations), Querschnitt Math-Foundation, Querschnitt Eval

### Lernziel
**🧮**: Du hast einen Fine-Tuning-Run mit DPO oder ORPO durchgeführt auf eigenem Korpus oder kleinem Open-Source-Datensatz, mit Eval-Vergleich vorher/nachher (Perplexity oder MMLU-Subset).

**🔧**: Du verstehst die Fine-Tuning-Landschaft, hast einen Fine-Tuning-Run mit LoRA durchgeführt, und kannst beurteilen, wann Fine-Tuning den Aufwand wert ist.

**💼**: Du verstehst konzeptionell, was Fine-Tuning ist, was es kostet, wann es strategisch sinnvoll ist.

### Theorie

- 🟢 **Wann Fine-Tuning?** — die wichtigste Frage. Faustregeln 2026:
 - **NICHT Fine-Tuning, sondern Prompting + RAG**: bei den meisten Use-Cases. Foundation-Modelle plus gute Prompts plus RAG decken 80% der Bedarfe ab.
 - **Fine-Tuning lohnt sich**: wenn du sehr spezialisierte Sprache hast (medizinisch, juristisch, Brand-spezifisch), wenn du Cost dramatisch senken willst (kleines fine-getuntes Modell statt Frontier-API), wenn du Output-Format streng erzwingen musst, wenn du Preference-Tuning für eigenes Brand-Verhalten brauchst.

 [Hugging Face — When to fine-tune](https://huggingface.co/docs/transformers/training) · [Sebastian Raschka — Fine-tuning vs RAG](https://magazine.sebastianraschka.com)

- 🟢 **Fine-Tuning-Stufen** — vier wichtige Phasen, oft kombiniert:
 - **Pre-Training**: Modell von Grund auf trainieren. Macht heute fast niemand mehr, außer Foundation-Provider.
 - **Continued Pre-Training**: Foundation-Modell auf weiteren Daten weitertrainieren (z.B. domain-spezifischer Korpus). Selten.
 - **Supervised Fine-Tuning (SFT)**: auf Labels-Daten trainieren ("Input X → Output Y"). Klassisch.
 - **Preference Tuning** (RLHF / DPO / ORPO / GRPO): Modell auf menschliche Präferenzen ausrichten. 2026-Standard.

- 🟢 **Supervised Fine-Tuning (SFT)** — klassische Variante. Datensatz aus (Prompt, Completion)-Paaren, Modell lernt Completion vorherzusagen. Pflicht-Vorlauf vor jedem Preference Tuning. [Hugging Face — SFT Trainer](https://huggingface.co/docs/trl/sft_trainer)

- 🔄 **DPO (Direct Preference Optimization)** — 2023-Innovation, 2026 Industriestandard. Statt RLHF mit Reward-Model und PPO (komplex, instabil): direkt aus Pair-Daten ("dieser Output ist besser als jener") optimieren. Einfacher, stabiler, oft bessere Ergebnisse. [DPO Paper](https://arxiv.org/abs/2305.18290) · [TRL DPO Trainer](https://huggingface.co/docs/trl/dpo_trainer)

- 🔄 **ORPO (Odds Ratio Preference Optimization)** — 2024-Innovation, kombiniert SFT und Preference Tuning in einem Schritt. Spart Compute und vereinfacht Pipeline. Konkurrenz zu DPO. [ORPO Paper](https://arxiv.org/abs/2403.07691)

- 🔄 **GRPO (Group Relative Policy Optimization)** — DeepSeek's Innovation 2024, in DeepSeek R1 verwendet. Spezialisiert auf Reasoning-Tuning, kein Reward-Model nötig. Wird 2026 zunehmend übernommen. [DeepSeek R1 Paper](https://arxiv.org/abs/2501.12948)

- 🟢 **PEFT — Parameter-Efficient Fine-Tuning** — Alternative zu Full Fine-Tuning (alle Parameter updaten): nur kleinen Anteil der Parameter trainieren. Spart Memory, Compute, Storage. Mehrere Varianten:
 - **LoRA (Low-Rank Adaptation)**: Klassiker (2021), trainiert kleine "Rank-Decomposition"-Matrizen statt voller Weights. Standard 2024-2025.
 - **QLoRA**: LoRA + Quantisierung. Erlaubt Fine-Tuning auf Consumer-GPUs (24GB VRAM für 7B-Modelle).
 - **DoRA (Weight-Decomposed Low-Rank Adaptation)**: 2024-Innovation, oft besser als LoRA bei vergleichbarem Compute.

 [LoRA Paper](https://arxiv.org/abs/2106.09685) · [QLoRA Paper](https://arxiv.org/abs/2305.14314) · [DoRA Paper](https://arxiv.org/abs/2402.09353) · [Hugging Face PEFT Library](https://huggingface.co/docs/peft)

- 🟢 **TRL — die Standard-Library 2026** — Hugging Face's "Transformer Reinforcement Learning"-Library. Implementiert SFT, DPO, ORPO, GRPO, RLHF/PPO. De-facto Standard für Fine-Tuning-Code. [TRL Docs](https://huggingface.co/docs/trl)

- 🔄 **Axolotl — High-Level-Wrapper** — Config-File-getrieben statt Code-getrieben. Schneller zum Ergebnis, weniger Flexibilität. Beliebt für Standard-Fine-Tuning-Runs. [Axolotl GitHub](https://github.com/axolotl-ai-cloud/axolotl)

- 🔄 **Unsloth — Speed-Optimierung** — 2-5x schneller als Standard TRL bei vergleichbarer Qualität, durch Custom-Kernels. Ideal für Consumer-Hardware und schnelle Iteration. [Unsloth GitHub](https://github.com/unslothai/unsloth) · [Unsloth Docs](https://docs.unsloth.ai)

- 🔄 **Aktuelle Open-Source-Modelle für Fine-Tuning Mai 2026** — die wichtigsten Foundation-Modelle:
 - **Llama 4** (Meta, 8B/70B/405B Varianten, Apache-ähnlich-Lizenz, RoPE+GQA)
 - **Qwen 3** (Alibaba, 0.5B/1.5B/7B/14B/32B/72B, Apache 2.0, sehr stark in Code und Multilingual)
 - **Gemma 3 / Gemma 4** (Google, 2B/9B/27B, Apache 2.0, gute deutsche Sprache)
 - **DeepSeek V4 / V3** (DeepSeek, MoE-Architektur, MIT-License, Reasoning-stark)
 - **Mistral 3** (Mistral AI, kommerzielle und OSS-Varianten)
 - **Phi-4** (Microsoft, klein aber stark, MIT-License)

 [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)

- 🟢 **Datensätze für Fine-Tuning** — drei Quellen:
 - **Eigene Daten**: Brand-Voice-Beispiele, domain-spezifische Q&A-Paare, Stil-Vorbilder. Oft nur Hunderte bis Tausende Samples nötig.
 - **Synthetic Data**: LLM generiert Trainings-Daten. Tools: [Distilabel](https://github.com/argilla-io/distilabel), [Bonito](https://github.com/BatsResearch/bonito).
 - **Open Datasets**: [Hugging Face Datasets](https://huggingface.co/datasets), [LIMA](https://huggingface.co/datasets/GAIR/lima), [UltraFeedback](https://huggingface.co/datasets/openbmb/UltraFeedback).

- 🟢 **Hardware-Realität für Fine-Tuning 2026** —
 - **Cloud-GPU-Rental**: [Lambda Labs](https://lambdalabs.com), [RunPod](https://www.runpod.io), [Modal](https://modal.com). Etwa 1-3 €/Stunde für H100. Ein 7B-LoRA-Run auf 10K Samples dauert 2-4 Stunden.
 - **Consumer-Hardware**: 24GB VRAM (RTX 4090 oder ähnlich) reicht für QLoRA auf 7B-Modellen. 48GB (Apple Silicon Max-Modelle) reicht für 14B.
 - **Cloud-Plattformen mit One-Click-Fine-Tuning**: [Together AI](https://www.together.ai), [Fireworks AI](https://fireworks.ai), [Anyscale](https://www.anyscale.com).

- 🟢 **Eval nach Fine-Tuning** — Pflicht-Schritt. Metriken:
 - **Perplexity** auf Held-Out-Test-Set (klassisch).
 - **MMLU-Subset** für allgemeine Fähigkeiten — wichtig: hat Fine-Tuning Capabilities verloren?
 - **Domain-spezifische Eval-Sets** für deine Use-Case-Aufgabe.
 - **LLM-as-Judge** für Output-Qualität und Brand-Voice-Konsistenz.
 - **Vorher-Nachher-Vergleich** mit Foundation-Modell als Baseline.

 [Hugging Face Evaluate](https://huggingface.co/docs/evaluate) · [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness)

- 🟢 **Fine-Tuning-Falle: Catastrophic Forgetting** — durch zu starkes Fine-Tuning verliert das Modell allgemeine Fähigkeiten. Mitigations: konservative Learning Rates, Mix von General-Daten ins Trainings-Set, Early Stopping basierend auf MMLU-Subset, PEFT statt Full Fine-Tuning. [Sebastian Raschka — Catastrophic Forgetting](https://magazine.sebastianraschka.com)

- 🟢 **Distillation als verwandte Technik** — großes Modell trainiert kleines: kleines wird billiger und schneller. Nicht klassisches Fine-Tuning, aber verwandt. [Distillation Guide](https://huggingface.co/blog/distillation)

- 🟢 **Fine-Tuning-Cost realistisch** — typisch 2026:
 - **LoRA auf 7B-Modell**: ~10-50 € für ersten Run, 1-5 € pro Iteration danach.
 - **QLoRA auf 13B-Modell**: ~30-150 € für ersten Run.
 - **Full Fine-Tuning auf 7B**: 500-2000 € — selten lohnenswert vs. LoRA.
 - **Continued Pre-Training**: 1000+ €. Spezial-Use-Cases.

### Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (Capstone-Foundations vollenden):**
- Nehme dein nanoGPT aus Stufe 7 oder ein kleines Open-Source-Modell (Qwen 3 0.5B oder 1.5B, Gemma 3 2B).
- **Phase 1 SFT**: auf eigenem oder Open-Source-Korpus (LIMA Dataset, eigene Texte).
- **Phase 2 Preference Tuning**: DPO oder ORPO mit UltraFeedback Subset oder selbst kuriertem Preference-Dataset (50-200 Pair-Samples).
- **Eval**: Perplexity Vorher/Nachher, MMLU-Subset (mindestens STEM oder Humanities), LLM-as-Judge auf eigenen Test-Prompts.
- Mit TRL und Unsloth für Speed.
- Im Portfolio: `stufe-10_spezialisierung/10-2-fine-tuning-foundations/` mit Code, Trainings-Logs, Eval-Report, W&B-Run-Logs.

**Capstone-Foundations vollendet**: dein Modell ist von nanoGPT (Stufe 7) zu fine-getuntem Modell mit Preference-Tuning gewachsen. Im Portfolio dokumentieren als komplette Pipeline.

**Für 🔧:**
- Wähle Open-Source-Foundation-Modell (Qwen 3 7B, Gemma 3 9B, oder Llama 4 8B).
- **LoRA Fine-Tuning** auf eigenem Use-Case (z.B. Domain-spezifische Q&A, Brand-Voice).
- **Eval** mit Vorher-Nachher-Vergleich.
- **Cost-Dokumentation**: was hat es gekostet (Cloud-Stunden + €), wieviel haben Iterationen gespart?
- Im Portfolio: `stufe-10_spezialisierung/10-2-fine-tuning-engineer/`.

**Für 💼:**
- 1-Pager-Briefing: Was ist Fine-Tuning 2026, wann lohnt es sich, was kostet es, was sind Alternativen?
- Optional: einen kleinen LoRA-Run via [Together AI Fine-Tuning](https://www.together.ai) oder OpenAI Fine-Tuning API mit Click-Click-Setup, ohne tiefe Code-Berührung.
- Im Portfolio: `stufe-10_spezialisierung/10-2-fine-tuning-strategist/`.

### 🎁 Mehrwert-Mini-Projekte
- **Brand-Voice-Fine-Tune** auf eigenen Texten — Modell schreibt deinen Stil.
- **Persönlicher Q&A-Bot** mit Fine-Tuning auf eigenen Notizen statt RAG.

### 🌱 Open-Source-Pfad
Komplett OSS: TRL, PEFT, Unsloth, Axolotl, alle genannten Foundation-Modelle. Cloud-GPU-Rental ist nicht OSS, aber [vast.ai](https://vast.ai) und ähnliche Marketplace-Plattformen sind günstig. Self-hosted Training auf eigener Hardware möglich für kleine Modelle.

### Outcome-Check (track-spezifisch)
**🧮:**
- [ ] SFT durchgeführt
- [ ] Preference Tuning (DPO oder ORPO) durchgeführt
- [ ] Eval Vorher/Nachher mit mindestens drei Metriken
- [ ] Catastrophic Forgetting bewertet
- [ ] **Capstone-Foundations vollendet**

**🔧:**
- [ ] LoRA Fine-Tuning durchgeführt
- [ ] Eval Vorher/Nachher
- [ ] Cost-Dokumentation
- [ ] Reflexion: war es den Aufwand wert vs. besseres Prompting?

**💼:**
- [ ] 1-Pager-Briefing zu Fine-Tuning
- [ ] Optional: einen Click-Click-Fine-Tune

---

## Modul 10.3: MLOps + LLMOps Production

LLMOps (LLM Operations) ist die Disziplin, die LLM-Anwendungen in Production hält. Anders als klassisches MLOps: nicht-deterministische Outputs, Cost als Hauptthema, schnelle Modell-Updates extern, Eval-as-CI als Standard. Dieses Modul lehrt die Production-Patterns 2026 und vollendet **Capstone-Engineer** für 🔧 mit Production-Hardening.

**Aufwand:** 🔧 30-45h · 🧮 18-25h · 💼 8-12h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Stufen 5, 6, idealerweise alle vorherigen, Querschnitt Production

### Lernziel
**🔧:** Dein Capstone-Engineer-Projekt ist production-hardened: Cost-Monitoring, Multi-Model-Routing, Eval-as-CI, Sandboxing, Incident-Response.

**🧮:** Du verstehst Production-Patterns für deine fine-getuneten Modelle (Inferenz mit vLLM/SGLang).

**💼:** Du verstehst LLMOps strategisch — was Production wirklich kostet, welche Risiken existieren.

### Theorie

- 🟢 **MLOps vs. LLMOps — Unterschiede 2026** —
 - **Klassisches MLOps**: Modell-Training, Deployment, Monitoring von ML-Modellen mit deterministischen Outputs.
 - **LLMOps**: zusätzlich Prompt-Versioning, Eval-as-CI für nicht-deterministische Outputs, Cost-Engineering, Multi-Model-Routing, Streaming-Optimierung, Tool-Use-Sandboxing, Provider-Abstraktion.

 Klassisches MLOps gilt weiter für klassische ML-Modelle (Boosting aus 8.3, Klassifikation aus 8.2). LLMOps ergänzt für LLM-Apps. [Sebastian Raschka — LLMOps vs MLOps](https://magazine.sebastianraschka.com)

- 🔄 **Cost-Engineering als Kerndisziplin** — bei LLM-Apps macht API-Cost oft 50-80% des operativen Budgets aus. Optimierungs-Ebenen:
 - **Modell-Wahl**: nicht alles muss Frontier sein. 70/25/5-Routing aus Modul 2.5.
 - **Prompt-Optimierung**: kürzere Prompts, weniger Few-Shot wenn nicht nötig.
 - **Prompt-Caching** (Anthropic, OpenAI): bei wiederkehrenden System-Prompts bis zu 90% Cost-Reduktion.
 - **Context-Compression**: lange Histories zusammenfassen statt voll mitzuschicken.
 - **Output-Limit**: max_tokens setzen, gegen ungewollt lange Outputs.
 - **Batching**: mehrere Anfragen bündeln wo möglich.

 [Anthropic — Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) · [Helicone Docs — Cost Optimization](https://docs.helicone.ai)

- 🔄 **Multi-Model-Routing in der Praxis** — Tools 2026:
 - **LiteLLM** (OSS): Provider-Abstraktion + Routing-Logik per Code.
 - **OpenRouter**: Service mit Routing, Fallback, Cost-Optimierung.
 - **Helicone**: Proxy mit Caching, Routing, Cost-Tracking.
 - **Portkey**: ähnlich Helicone, AI Gateway-Konzept.
 - **Custom**: eigener Router-Layer für Spezial-Logik.

 [LiteLLM Docs](https://docs.litellm.ai) · [OpenRouter](https://openrouter.ai) · [Helicone](https://www.helicone.ai) · [Portkey](https://portkey.ai)

- 🔄 **Inferenz-Server für selbst-gehostete Modelle** — wenn du fine-getunete Modelle (10.2) oder OSS-Modelle in Production betreibst:
 - **vLLM** (OSS): de-facto Standard 2026, sehr schnell durch PagedAttention, multi-tenant tauglich. [vLLM Docs](https://docs.vllm.ai)
 - **SGLang** (OSS): neuer Konkurrent, optimiert für Reasoning und strukturierte Outputs, schnell wachsend. [SGLang GitHub](https://github.com/sgl-project/sglang)
 - **Ollama**: einfacher für lokale/Single-User-Anwendungen, weniger production-grade.
 - **TGI (Text Generation Inference)** von Hugging Face: production-ready, gut dokumentiert.
 - **Cloud-Managed**: Together AI, Fireworks AI, Anyscale — managed Inferenz für OSS-Modelle.

- 🔄 **Latency-Optimierung** — bei Production wichtig:
 - **Streaming**: erste Tokens schnell zeigen (Modul 5.5).
 - **Speculative Decoding**: kleines Draft-Modell schlägt Tokens vor, großes verifiziert. Bis zu 3x Speedup.
 - **Quantisierung**: FP8/INT8/INT4-Quantisierung für selbst-gehostete Modelle.
 - **Batching strategien**: Continuous Batching in vLLM/SGLang.
 - **Edge-Inference** für Latency-kritische Use-Cases.

- 🔄 **Monitoring & Observability** — drei Layer:
 - **Application Monitoring**: klassisch Sentry/DataDog für Errors und Performance.
 - **LLM-spezifisches Tracing**: jeder LLM-Call mit Prompt, Response, Latenz, Cost. Tools: [LangSmith](https://www.langchain.com/langsmith), [Langfuse](https://langfuse.com) (OSS!), [Helicone](https://www.helicone.ai), [Phoenix/Arize](https://docs.arize.com).
 - **Eval-Metriken in Production**: kontinuierliche Eval auf Sample der echten Anfragen.

- 🟢 **Eval-as-CI: Tests bei jedem Code-Change** — der wichtigste Production-Pattern 2026. Bei jedem Pull Request automatisch:
 - Eval-Run auf Test-Dataset
 - Vergleich gegen Baseline-Performance
 - Bei Regression: Merge blockieren oder Warnung
 - Bei signifikanter Verbesserung: dokumentieren

 Tools: [Promptfoo + GitHub Actions](https://www.promptfoo.dev/docs/integrations/github-action/), [LangSmith CI](https://docs.smith.langchain.com), [DeepEval CI Patterns](https://docs.confident-ai.com), eigene CI mit RAGAS aus Modul 5.4.

- 🟢 **Prompt-Versionierung** — Prompts sind Code 2026. Versionierung via Git, Branching für Experimente, A/B-Test-Framework, Rollback-Pfad. Tools: LangSmith Hub, [LangChain Hub](https://smith.langchain.com/hub), [PromptLayer](https://promptlayer.com), Git als Default. [Promptfoo Versioning](https://www.promptfoo.dev)

- 🟢 **Sandboxing für Tool-Execution** — wenn Agents Code/Shell ausführen: Sandboxing Pflicht.
 - [E2B](https://e2b.dev): Cloud-Sandboxes, Python-Execution as Service.
 - [Modal](https://modal.com): Serverless mit Sandbox-Optionen.
 - [Daytona](https://daytona.io): Dev-Environments, auch für Agent-Sandboxen.
 - **Docker-basiert selbst gebaut**: gut für On-Premise.
 - [WebContainers](https://webcontainers.io): Browser-basierte Node.js-Sandbox.

 [E2B Docs](https://e2b.dev/docs)

- 🟢 **Idempotenz und Rollback** — bei kritischen Aktionen: jede Aktion muss idempotent sein (mehrfache Ausführung gleicher Effekt) oder Rollback-Pfad haben. Pattern: Aktionen in Queue → Validation → Ausführung → State-Update → bei Fehler: Compensation-Aktion. Standard-Patterns aus Distributed Systems.

- 🟢 **Incident-Response für KI-Apps** — was tun, wenn KI versagt? Pattern:
 - **Alerting**: Schwellenwerte für Eval-Metriken in Production.
 - **Kill-Switch**: KI-Feature deaktivieren ohne App-Outage.
 - **Fallback-Modus**: bei API-Outage auf alternativen Provider oder klassische Logik.
 - **Post-Mortem**: was ist passiert, was lernen wir, was ändern wir?
 - **Communication Plan**: User informieren bei sichtbaren Problemen.

- 🟢 **MCP-Sicherheit in Production** — wenn dein Agent MCP-Server konsumiert, die nicht von dir kontrolliert sind: (1) **OAuth 2.1** für Authentifizierung. (2) **Scope-Limitierung**: Server bekommt nur, was er braucht. (3) **Audit-Logs**: jede Tool-Execution geloggt. (4) **Allowlisting** der erlaubten Server. (5) **Sandboxing** für unbekannte Server. [MCP Security Best Practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices)

- 🟢 **Compliance in Production** — Verbindung zu Modul 9.5: AI Literacy als Pflicht-Element, Logging für Audit, Right-to-be-Forgotten in Vector-Stores umsetzen, Bias-Monitoring kontinuierlich.

### Praxis: Hauptprojekt — track-spezifisch

**Für 🔧 (Capstone-Engineer-Production-Hardening):**

Nimm dein RAG-Agent-System aus Stufen 5-6 und mache es production-ready:

- **Multi-Model-Routing** mit LiteLLM oder OpenRouter (70% Haiku/Gemini Flash, 25% Sonnet/GPT-5, 5% Opus für komplexe Cases).
- **Cost-Tracking + Alerting** mit Helicone oder Langfuse: pro Request, pro User, pro Tag.
- **Prompt-Caching** für System-Prompts.
- **Eval-as-CI**: GitHub Actions Workflow, der bei jedem PR Eval-Run auf 30+ Test-Cases ausführt. Bei Regression: PR-Status rot.
- **Sandboxing** für Tool-Execution (E2B, Modal, oder Docker).
- **Incident-Response-Plan**: Kill-Switch, Fallback-Provider, Alerting bei Eval-Score-Drop.
- **Logging und Tracing**: jeder LLM-Call mit Cost, Latenz, Eval-Score in Langfuse oder LangSmith.
- **Production-Deployment**: Docker-Container, mindestens auf einem Cloud-Server (Hetzner, Railway, Fly.io, Render — kostengünstige Optionen).
- **Health Check + Uptime-Monitoring** mit [UptimeRobot](https://uptimerobot.com) oder [Better Uptime](https://betterstack.com).
- Im Portfolio: `stufe-10_spezialisierung/10-3-production/` mit Architektur-Diagramm, README, Deployment-Doku, Cost-Analyse, Eval-Report.

**Capstone-Engineer vollendet**: dein RAG-Agent-System ist von Stufe 5 (Prototyp) zu Stufe 6 (Multi-Agent) zu Stufe 10 (Production-hardened) gewachsen. Outcome-Schwellen aus Master-Skelett: Faithfulness ≥0.8, Latenz P50 <3s, Cost <0.05€/Request.

**Für 🧮:**
- vLLM oder SGLang lokal aufsetzen, dein fine-getunetes Modell aus 10.2 deployen.
- Latency-Benchmarks: vLLM vs. Ollama, Quantisierte vs. Full-Precision.
- Optional: Inference-Service als FastAPI vor dem Inferenz-Server mit Auth und Rate-Limiting.
- Im Portfolio: `stufe-10_spezialisierung/10-3-inferenz-foundations/`.

**Für 💼 (Capstone-Strategist-Pilot vollenden):**
- Pilot-Implementation deines Use-Cases:
 - **Option A**: No-Code-Workflow (siehe Modul 2.6) wenn Use-Case dazu passt. Make.com / n8n mit MCP-Integrationen.
 - **Option B**: Vibe-Coded MVP wenn Use-Case eine Web-App braucht. Bolt/Lovable/v0.
 - **Option C**: Wenn 🔧 oder 🧮 als Capstone-Strategist mitmachen: Engineer-MVP nutzen.
- **Stakeholder-Tests**: mindestens 3-5 echte Nutzer testen den Pilot, dokumentiertes Feedback.
- **Eval mit echten Daten**: was ist die tatsächliche Output-Qualität, ROI vs. Erwartung aus 9.2.
- **Compliance-Check**: AI Literacy für die Test-Nutzer, DSGVO-Hinweise.
- **Iterations-Plan**: was ändern wir nach Pilot vor Scale?
- Im Portfolio: `stufe-10_spezialisierung/10-3-pilot-strategist/` mit Pilot-Code/-Workflow, Test-Protokollen, Stakeholder-Feedback, Iterations-Plan.

**Capstone-Strategist vollendet**: vollständige Strategie + funktionierender Pilot.

### 🎁 Mehrwert-Mini-Projekte
- **LLMOps-Cheat-Sheet** mit Best-Practices für eigene Referenz.
- **Cost-Monitoring-Dashboard** für eigene Apps mit Streamlit/Gradio + Helicone-API.
- **Eval-CI-Template-Repo** als wiederverwendbare GitHub-Action für künftige Projekte.

### 🌱 Open-Source-Pfad
- Langfuse self-hosted statt LangSmith (komplette OSS-Alternative).
- vLLM oder SGLang OSS für Inferenz.
- Promptfoo OSS für Eval-as-CI.
- Hetzner Dedicated Server statt AWS/GCP für günstiges Hosting.
- Docker statt E2B für Sandboxing wenn DSGVO-relevant.

### Outcome-Check (track-spezifisch)
**🔧 (Capstone-Engineer):**
- [ ] Multi-Model-Routing implementiert
- [ ] Cost-Tracking + Alerting
- [ ] Eval-as-CI in GitHub Actions
- [ ] Sandboxing für Tool-Execution
- [ ] Production-Deployment erreichbar
- [ ] Logging/Tracing in Langfuse oder LangSmith
- [ ] Faithfulness ≥0.8, Latenz P50 <3s, Cost <0.05€/Request
- [ ] **Capstone-Engineer vollendet**

**🧮:**
- [ ] vLLM oder SGLang aufgesetzt
- [ ] Inferenz-Benchmarks dokumentiert
- [ ] Optional: API-Service vor Inferenz-Server

**💼 (Capstone-Strategist):**
- [ ] Pilot-Implementation lauffähig
- [ ] Stakeholder-Tests mit ≥3 Nutzern
- [ ] Eval mit echten Daten
- [ ] Iterations-Plan
- [ ] **Capstone-Strategist Pilot vollendet**

---

## Free-Zertifikate für Stufe 10

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [DLAI — Finetuning LLMs](https://learn.deeplearning.ai/courses/finetuning-large-language-models) | DeepLearning.AI / Lamini | ~2h | Vertiefung 10.2 |
| [DLAI — Reinforcement Learning from Human Feedback](https://learn.deeplearning.ai) | DeepLearning.AI | ~2h | Vertiefung 10.2 |
| [Hugging Face — LLM Course Chapter 11 (Fine-Tuning)](https://huggingface.co/learn/llm-course/chapter11) | Hugging Face | ~10h | Pflicht für 🧮 in 10.2 |
| [DLAI — LLMOps](https://learn.deeplearning.ai) | DeepLearning.AI | ~2h | Vertiefung 10.3 |
| [DLAI — Automated Testing for LLMOps](https://learn.deeplearning.ai) | DeepLearning.AI / CircleCI | ~2h | Vertiefung 10.3 |
| [DLAI — Building Applications with Vector Databases](https://learn.deeplearning.ai) | DeepLearning.AI | ~2h | Optional Production-RAG |
| [Anthropic Cookbook — Production Patterns](https://github.com/anthropics/anthropic-cookbook) | Anthropic | nach Bedarf | Vertiefung 10.1, 10.3 |
| [Promptfoo Documentation](https://www.promptfoo.dev/docs) | Promptfoo | ~5h | Vertiefung Eval-as-CI |
| [LangSmith Documentation](https://docs.smith.langchain.com) | LangChain | ~5h | Vertiefung 10.3 |

---

## Stufen-Outcome

Nach Stufe 10 hast du:
- ✅ Marketing-KI-Workflow als Branchen-Pattern (übertragbar)
- ✅ Fine-Tuning-Erfahrung mit modernen Methoden (DPO/ORPO/LoRA)
- ✅ LLMOps-Production-Patterns
- ✅ Eval-as-CI in eigenem Repo
- 🔧: Capstone-Engineer-Projekt production-ready (Outcome-Schwellen erreicht)
- 🧮: Capstone-Foundations-Modell mit Preference-Tuning fine-getuned
- 💼: Capstone-Strategist mit funktionierendem Pilot und Stakeholder-Tests

**Du bist bereit für Stufe 11: Forschung & Cutting-Edge — die finale Stufe.**

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: aktuelle OSS-Foundation-Modelle (Llama 5? Qwen 4?), neue Fine-Tuning-Methoden, LLMOps-Tool-Landschaft (Langfuse, Helicone, Portkey), Inferenz-Server-Performance.