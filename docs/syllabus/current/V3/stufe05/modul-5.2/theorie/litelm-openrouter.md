---
title: "Provider-Abstraktion: LiteLLM und OpenRouter"
module: "5.2"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-08"
---

# Provider-Abstraktion: LiteLLM und OpenRouter

## Kernidee

LiteLLM und OpenRouter sind orthogonal zu den Frameworks — sie abstrahieren den API-Call gegen verschiedene LLM-Provider. Damit kannst du mit einem einheitlichen Interface OpenAI, Anthropic, Cohere, Ollama und andere ansprechen, ohne den Code anzufassen.

## Im Detail

**LiteLLM (Code-Integration):**

Einheitliche Python-API für alle Provider:

```python
import litellm

# OpenAI
response = litellm.completion("openai/gpt-4o", messages=[...])

# Anthropic
response = litellm.completion("anthropic/claude-3-5-sonnet", messages=[...])

# Ollama lokal
response = litellm.completion("ollama/qwen2.5:7b", messages=[...])
```

Gleicher Code, verschiedene Provider — ideal für Multi-Model-Routing.

**OpenRouter (Service):**

- Einzelne Rechnung für alle Provider (kein separater API-Key pro Provider).
- Cost-Optimierung: automatisch günstigstes Modell für eine Qualitätsstufe wählen.
- Fallback-Routing: wenn Provider A ausfällt, springt Provider B ein.
- Kommt aus Modul 2.5 (Multi-Model-Routing).

**Wann LiteLLM:**
- Du willst in Python flexibel zwischen Providern wechseln.
- Testing mit verschiedenen Modellen (Eval-Vergleiche).

**Wann OpenRouter:**
- Einfache Rechnung, viele Provider.
- Cost-Optimierung und Fallback-Routing.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LiteLLM Docs](https://docs.litellm.ai) | Vollständige Dokumentation |
| 🛠️ Service | [OpenRouter](https://openrouter.ai) | Multi-Provider-Gateway |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum LiteLLM und LangChain keine Konkurrenten sind (orthogonale Ebene)?
- [ ] Wann würdest du OpenRouter statt direkten Provider-API-Keys nutzen?
- [ ] Hast du LiteLLM installiert und einen Test-Call gegen zwei verschiedene Provider gemacht?
