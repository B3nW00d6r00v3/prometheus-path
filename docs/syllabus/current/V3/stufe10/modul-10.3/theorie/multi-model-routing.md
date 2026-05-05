---
title: "Multi-Model-Routing in der Praxis"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: yellow
---

# Multi-Model-Routing in der Praxis

## Kernidee

Multi-Model-Routing ist die Praxis, verschiedene LLM-Modelle je nach Aufgaben-Komplexität, Cost und Verfügbarkeit zu wählen — automatisch und ohne manuelle Entscheidung im Code. Ein gutes Routing-System ist unsichtbar für Nutzer, aber entscheidend für Wirtschaftlichkeit und Resilienz.

## Im Detail

**Warum Routing?**

Ein Production-System, das jede Anfrage an dasselbe Frontier-Modell schickt, ist wie ein Unternehmen, das jeden Kundenservice-Anruf an den CEO weiterleitet. Ineffizient, teuer, und bei Ausfall des einen Modells ist alles weg.

**Routing-Dimensionen:**

| Dimension | Routing-Logik |
|---|---|
| **Komplexität** | Einfache Klassifikation → Haiku/Flash; komplexes Reasoning → Opus/GPT-5 |
| **Cost** | Budget-Tracking pro User/Session; bei Limit → günstigeres Modell |
| **Latenz** | Zeitkritische Requests → schnellste verfügbare Option |
| **Verfügbarkeit** | Provider-Ausfall → automatischer Fallback auf alternativen Provider |
| **Capability** | Code → Modelle mit Code-Stärke; Multilingual → Modelle mit Sprach-Stärke |

**Tools 2026:**

- **LiteLLM** (OSS): Provider-Abstraktion + Routing-Logik per Code. Einheitliche API für 100+ Modelle. Beliebteste OSS-Lösung.
- **OpenRouter**: Service mit Routing, Fallback, Cost-Optimierung. Kein eigenes Hosting nötig.
- **Helicone**: Proxy mit Caching, Routing, Cost-Tracking. Analytics-fokussiert.
- **Portkey**: AI Gateway mit Routing, Guardrails, Observability. Enterprise-fokussiert.
- **Custom Router**: eigener Router-Layer für spezialisierte Logik (z.B. Modell-Wahl basierend auf Domänen-Klassifikation).

**LiteLLM-Beispiel (Konzept):**
```python
# Routing-Logik: Komplexitäts-Score bestimmt Modell
def route(prompt, complexity_score):
    if complexity_score < 0.3:
        return "claude-haiku-4"   # günstig, schnell
    elif complexity_score < 0.7:
        return "claude-sonnet-4"  # Mittelklasse
    else:
        return "claude-opus-4"    # Frontier, teuer
```

**Fallback-Ketten:** LiteLLM und ähnliche Tools erlauben Fallback-Ketten — wenn Anthropic antwortet nicht, probiere OpenAI, dann Gemini. Kritisch für Production-Resilienz.

*Verfallsdatum: Aug 2026 — Tool-Landschaft entwickelt sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LiteLLM Docs](https://docs.litellm.ai) | Routing-Konfiguration und Provider-Setup |
| 🔗 Service | [OpenRouter](https://openrouter.ai) | Managed Routing ohne eigenes Hosting |
| 📖 Docs | [Helicone](https://www.helicone.ai) | Analytics + Routing |
| 📖 Docs | [Portkey](https://portkey.ai) | Enterprise AI Gateway |

## Teste dein Verständnis

- [ ] Welche fünf Routing-Dimensionen gibt es und wann ist welche relevant?
- [ ] Was ist der Unterschied zwischen LiteLLM als Library und OpenRouter als Service?
- [ ] Wie funktioniert eine Fallback-Kette und warum ist sie für Production-Resilienz wichtig?
