---
title: "Quellen — Stufe 10"
type: quellen
stability: yellow
---

# Quellen für Stufe 10: Spezialisierung & Production

Diese Seite sammelt alle Quellen, die in den Modulen der Stufe 10 referenziert werden. Organisiert nach Modul und Thema.

---

## Modul 10.1: KI im Marketing

### Reports & Studien

| Quelle | Link | Verwendung |
|--------|------|------------|
| HubSpot — State of AI in Marketing | [hubspot.com/state-of-marketing](https://www.hubspot.com/state-of-marketing) | Use-Case-Übersicht, Verbreitungszahlen |
| McKinsey — AI in Marketing | [mckinsey.com](https://www.mckinsey.com) | Strategische Perspektive |

### Dokumentation & Tools

| Quelle | Link | Verwendung |
|--------|------|------------|
| Anthropic — Content Generation Best Practices | [docs.claude.com](https://docs.claude.com) | Content-Pipeline-Methodik |
| Anthropic — Brand Voice Cookbook | [github.com/anthropics/anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook) | Brand-Voice-Implementierung |
| Public MCP Servers | [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | MCP-Integrationen |
| HubSpot MCP | [developers.hubspot.com](https://developers.hubspot.com) | HubSpot-MCP-Server |
| BfDI — DSGVO Marketing | [bfdi.bund.de](https://www.bfdi.bund.de) | DSGVO-Anforderungen |

### SEO & Analytics Tools

| Quelle | Link | Verwendung |
|--------|------|------------|
| SurferSEO | [surferseo.com](https://surferseo.com) | SEO-Optimierung |
| Frase | [frase.io](https://www.frase.io) | Content-Briefing |
| Search Engine Land | [searchengineland.com](https://searchengineland.com) | GEO-Entwicklungen live |
| Aleyda Solis | [aleydasolis.com](https://www.aleydasolis.com) | SEO-Expertise |

### OSS-Marketing-Alternativen

| Quelle | Link | Verwendung |
|--------|------|------------|
| Mautic | [mautic.org](https://www.mautic.org) | OSS Marketing-Automation |
| Plausible Analytics | [plausible.io](https://plausible.io) | DSGVO-freundliche Analytics |
| Umami | [umami.is](https://umami.is) | OSS Web-Analytics |
| Listmonk | [listmonk.app](https://listmonk.app) | OSS Newsletter-Tool |

---

## Modul 10.2: Fine-Tuning modern

### Wissenschaftliche Paper

| Quelle | Link | Verwendung |
|--------|------|------------|
| LoRA Paper (Hu et al., 2021) | [arxiv.org/abs/2106.09685](https://arxiv.org/abs/2106.09685) | LoRA-Grundlage |
| QLoRA Paper (Dettmers et al., 2023) | [arxiv.org/abs/2305.14314](https://arxiv.org/abs/2305.14314) | Quantisiertes LoRA |
| DoRA Paper (Liu et al., 2024) | [arxiv.org/abs/2402.09353](https://arxiv.org/abs/2402.09353) | Weight-Decomposed LoRA |
| DPO Paper (Rafailov et al., 2023) | [arxiv.org/abs/2305.18290](https://arxiv.org/abs/2305.18290) | Direct Preference Optimization |
| ORPO Paper (Hong et al., 2024) | [arxiv.org/abs/2403.07691](https://arxiv.org/abs/2403.07691) | Odds Ratio Preference Optimization |
| DeepSeek R1 Paper (DeepSeek, 2025) | [arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) | GRPO und Reasoning-Tuning |

### Bibliotheken & Frameworks

| Quelle | Link | Verwendung |
|--------|------|------------|
| TRL — Transformer Reinforcement Learning | [huggingface.co/docs/trl](https://huggingface.co/docs/trl) | Standard-Library für Fine-Tuning |
| Hugging Face PEFT Library | [huggingface.co/docs/peft](https://huggingface.co/docs/peft) | Parameter-Efficient Fine-Tuning |
| Hugging Face Evaluate | [huggingface.co/docs/evaluate](https://huggingface.co/docs/evaluate) | Eval-Metriken |
| LM Evaluation Harness | [github.com/EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | MMLU und andere Benchmarks |
| Unsloth | [github.com/unslothai/unsloth](https://github.com/unslothai/unsloth) | Speed-optimiertes Fine-Tuning |
| Axolotl | [github.com/axolotl-ai-cloud/axolotl](https://github.com/axolotl-ai-cloud/axolotl) | Config-getriebenes Fine-Tuning |
| Distilabel | [github.com/argilla-io/distilabel](https://github.com/argilla-io/distilabel) | Synthetic Data Generation |

### Datensätze

| Quelle | Link | Verwendung |
|--------|------|------------|
| LIMA Dataset | [huggingface.co/datasets/GAIR/lima](https://huggingface.co/datasets/GAIR/lima) | SFT-Qualitätsdatensatz |
| UltraFeedback | [huggingface.co/datasets/openbmb/UltraFeedback](https://huggingface.co/datasets/openbmb/UltraFeedback) | Preference-Tuning-Datensatz |
| HF Open LLM Leaderboard | [huggingface.co/spaces/open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) | Modell-Vergleiche |

### Blogs & Artikel

| Quelle | Link | Verwendung |
|--------|------|------------|
| Sebastian Raschka — Fine-tuning vs RAG vs Prompt | [magazine.sebastianraschka.com](https://magazine.sebastianraschka.com) | Decision-Framework-Grundlage |
| Sebastian Raschka — Catastrophic Forgetting | [magazine.sebastianraschka.com](https://magazine.sebastianraschka.com) | Catastrophic Forgetting Mitigation |
| HF Blog — Distillation | [huggingface.co/blog/distillation](https://huggingface.co/blog/distillation) | Distillation als verwandte Technik |

### Cloud-GPU-Plattformen

| Quelle | Link | Verwendung |
|--------|------|------------|
| Lambda Labs | [lambdalabs.com](https://lambdalabs.com) | GPU-Rental für Fine-Tuning |
| RunPod | [runpod.io](https://www.runpod.io) | GPU-Rental |
| Modal | [modal.com](https://modal.com) | Serverless GPU-Compute |
| Together AI | [together.ai](https://www.together.ai) | Managed Fine-Tuning |

---

## Modul 10.3: MLOps + LLMOps Production

### Inferenz & Serving

| Quelle | Link | Verwendung |
|--------|------|------------|
| vLLM Docs | [docs.vllm.ai](https://docs.vllm.ai) | Production Inferenz-Server |
| SGLang GitHub | [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang) | Alternative zu vLLM |

### Observability & Tracing

| Quelle | Link | Verwendung |
|--------|------|------------|
| Langfuse | [langfuse.com](https://langfuse.com) | OSS LLM-Observability |
| LangSmith | [langchain.com/langsmith](https://www.langchain.com/langsmith) | LangChain-Tracing |
| Helicone | [helicone.ai](https://www.helicone.ai) | Proxy-basiertes Tracing |
| Portkey | [portkey.ai](https://portkey.ai) | AI Gateway |

### Routing & Cost

| Quelle | Link | Verwendung |
|--------|------|------------|
| LiteLLM Docs | [docs.litellm.ai](https://docs.litellm.ai) | OSS Multi-Model-Routing |
| OpenRouter | [openrouter.ai](https://openrouter.ai) | Managed Routing-Service |
| Anthropic — Prompt Caching | [docs.claude.com](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) | Cost-Optimierung |

### Eval-as-CI

| Quelle | Link | Verwendung |
|--------|------|------------|
| Promptfoo | [promptfoo.dev](https://www.promptfoo.dev) | Eval-as-CI Framework |
| Promptfoo GitHub Action | [promptfoo.dev/docs/integrations/github-action](https://www.promptfoo.dev/docs/integrations/github-action/) | CI-Integration |
| DeepEval | [confident-ai.com](https://docs.confident-ai.com) | pytest-style Eval |
| RAGAS | [docs.ragas.io](https://docs.ragas.io) | RAG-spezifische Eval-Metriken |

### Sandboxing

| Quelle | Link | Verwendung |
|--------|------|------------|
| E2B | [e2b.dev](https://e2b.dev) | Cloud Code-Sandboxes |
| Daytona | [daytona.io](https://daytona.io) | Dev-Environment-Sandboxes |

### Compliance & Governance

| Quelle | Link | Verwendung |
|--------|------|------------|
| EU AI Act | [artificialintelligenceact.eu](https://artificialintelligenceact.eu) | Rechtliche Grundlage |
| MCP Security Best Practices | [modelcontextprotocol.io/specification](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices) | MCP-Sicherheit |
| Fairlearn | [fairlearn.org](https://fairlearn.org) | Bias-Detection |
| Sebastian Raschka — LLMOps vs MLOps | [magazine.sebastianraschka.com](https://magazine.sebastianraschka.com) | Konzeptueller Überblick |

---

*Alle Links wurden im Mai 2026 geprüft. Für aktuelle Tool-Versionen und Preisänderungen die jeweiligen Dokumentationen direkt konsultieren.*
