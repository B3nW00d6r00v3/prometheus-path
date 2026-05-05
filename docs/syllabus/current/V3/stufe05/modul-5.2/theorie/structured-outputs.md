---
title: "Structured Outputs / Constrained Generation"
module: "5.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
expires: null
---

# Structured Outputs / Constrained Generation

## Kernidee

LLM-Outputs als unstrukturierter Text sind fragil — JSON parsen, Validation, Retries kostet Zeit und Tokens. Structured Outputs zwingen das LLM, direkt valide JSON-Strukturen zu produzieren, die einer Pydantic-Schema entsprechen. In 2026 Standard-Praxis.

## Im Detail

**Was sind Structured Outputs?**

Der Provider zwingt das LLM, Output zu produzieren, der einer vorgegebenen JSON-Schema folgt. Im Hintergrund: Constrained-Decoding (Beam-Search auf Schema-konformem Subset) oder Schema-aware Sampling.

- OpenAI: "Strict Mode" / "Structured Outputs"
- Anthropic: "Tool Use mit JSON Schema"
- Google: "Controlled Generation"

**Pydantic als Brücke zwischen Code und Schema:**

```python
from pydantic import BaseModel
from anthropic import Anthropic

class SentimentResult(BaseModel):
    sentiment: str  # "positiv" | "neutral" | "negativ"
    confidence: float  # 0.0 bis 1.0
    begründung: str

client = Anthropic()
# Tool Use als Structured-Output-Pattern
# Output kommt als validiertes SentimentResult zurück — kein manuelles Parsing
```

**Outlines / Instructor als Provider-agnostische Alternativen:**

- **Instructor**: Wrapper über OpenAI/Anthropic/Cohere/Ollama — einheitliche API für Structured Outputs. Mit Pydantic.
- **Outlines**: für OSS-Modelle und API-Modelle gleich, Constrained Decoding.

**Wann welches Pattern?**

| Use-Case | Pattern |
|----------|---------|
| Klassifikation, Extraktion, strukturiertes Ergebnis | **Structured Outputs** (90% der Production-Cases) |
| DB-Query, API-Call, File-Schreiben | **Tool Use / Function Calling** |
| Chat-Response, kreatives Schreiben | **Free-Form** |

**Validation-Pipeline als Defense-in-Depth:**

Auch mit Structured Outputs: validiere zusätzlich auf Business-Logik-Ebene. Schema deckt nur Typ/Format — nicht "Datum darf nicht in der Zukunft liegen" oder "Score zwischen 0 und 100".

**Anti-Pattern:** Structured Outputs für Free-Form-Antworten erzwingen. Erzwungene Struktur kann Generationsqualität reduzieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [OpenAI Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) | Referenz-Implementierung |
| 📖 Docs | [Anthropic Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Anthropic-Variante |
| 🛠️ Tool | [Instructor Docs](https://python.useinstructor.com) | Provider-agnostisch mit Pydantic |
| 🛠️ Tool | [Outlines GitHub](https://github.com/dottxt-ai/outlines) | OSS-Modelle + API |

## Teste dein Verständnis

- [ ] Kannst du ein Beispiel nennen, wo Structured Outputs unbedingt sinnvoll sind?
- [ ] Weißt du, was Constrained Decoding ist und warum es Structured Outputs ermöglicht?
- [ ] Hast du mindestens ein Use-Case mit Pydantic-Schema → validiertem Output umgesetzt?
