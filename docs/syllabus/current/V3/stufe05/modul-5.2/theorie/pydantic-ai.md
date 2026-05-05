---
title: "PydanticAI — Type-Safe Agents"
module: "5.2"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# PydanticAI — Type-Safe Agents

## Kernidee

PydanticAI ist eine neue Library (2024, vom Pydantic-Team), die Type Safety und klare Abstraktionen in den Vordergrund stellt. Ideal für Engineers, die Production-Code schreiben und Pydantic bereits kennen.

## Im Detail

**Was PydanticAI anders macht:**

- **Pydantic-native Tool-Definitionen**: Tools werden als Python-Funktionen mit Pydantic-Typen definiert — keine separate Schema-Definition, kein manuelles JSON-Schema.
- **Type Safety durchgehend**: Input/Output von Agents und Tools sind vollständig typisiert.
- **Klare Abstraktionen**: weniger "Magie" als LangChain, mehr expliziter Code.
- **Testing-freundlich**: einfacher zu testen als LangChain-Chains.

**Beispiel:**

```python
from pydantic_ai import Agent
from pydantic import BaseModel

class WeatherResult(BaseModel):
    temperature: float
    condition: str

agent = Agent(
    "anthropic:claude-3-5-sonnet-latest",
    result_type=WeatherResult,
)

result = await agent.run("What's the weather in Berlin?")
print(result.data.temperature)  # vollständig typisiert
```

**Wann PydanticAI:**
- 🔧 Engineer mit Pydantic-Erfahrung.
- Production-Code mit Type Safety.
- Agents mit klar definierten Tool-Schemas.

**Wann nicht PydanticAI:**
- Viele Integrationen aus der Box benötigt (→ LangChain).
- Primär RAG (→ LlamaIndex).

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PydanticAI Docs](https://ai.pydantic.dev) | Vollständige Dokumentation |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum "Type-Safe Agents" für Production-Code relevant ist?
- [ ] Weißt du, wie PydanticAI Tool-Definitionen anders macht als LangChain?
- [ ] Für welchen deiner Use-Cases wäre PydanticAI die beste Wahl?
