---
title: "Pydantic für Datenvalidierung"
module: "2.7"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Pydantic für Datenvalidierung

## Kernidee

Wenn du eine API aufrufst, bekommst du Daten zurück -- meistens als JSON. Pydantic ist wie ein Zollbeamter für deine Daten: es prüft, ob alles da ist, ob die Typen stimmen, und verwandelt rohes JSON in saubere Python-Objekte mit Autocomplete. Ohne Pydantic arbeitest du mit unsicheren Dicts, mit Pydantic mit sicheren, validierten Objekten. Pydantic ist DAS Tool für strukturierte LLM-Outputs.

## Im Detail

### Das Problem ohne Pydantic

```python
# API gibt JSON zurück
data = {"summary": "Python ist super", "score": "0.95", "tags": "python,ki"}

# Ohne Pydantic: unsicheres Dict-Handling
summary = data["summary"]         # KeyError wenn "summary" fehlt
score = float(data["score"])      # ValueError wenn kein Float
tags = data["tags"].split(",")    # AttributeError wenn None

# Jeder Zugriff kann explodieren. Kein Autocomplete. Keine Sicherheit.
```

### Die Lösung: Pydantic BaseModel

```python
from pydantic import BaseModel

class ArticleSummary(BaseModel):
    summary: str
    score: float
    tags: list[str]

# Validierung passiert automatisch beim Erstellen
result = ArticleSummary(
    summary="Python ist super",
    score="0.95",           # String wird automatisch zu float konvertiert!
    tags=["python", "ki"],
)

print(result.summary)   # "Python ist super" -- mit Autocomplete!
print(result.score)      # 0.95 (als float, nicht str)
print(result.tags)       # ["python", "ki"]
```

Drei Dinge passieren automatisch:

1. **Fehlende Felder** werden erkannt → `ValidationError`
2. **Falsche Typen** werden konvertiert (wenn möglich) oder als Fehler gemeldet
3. **Du bekommst ein Objekt** mit Autocomplete statt ein unsicheres Dict

### Validierung in Aktion

```python
from pydantic import BaseModel, Field, field_validator

class LLMConfig(BaseModel):
    model: str
    max_tokens: int = Field(default=1024, ge=1, le=100000)
    temperature: float = Field(default=0.7, ge=0.0, le=2.0)
    system_prompt: str = "Du bist ein hilfreicher Assistent."

# Funktioniert
config = LLMConfig(model="claude-sonnet-4-6-20250514")

# Fehler: temperature zu hoch
try:
    bad_config = LLMConfig(model="test", temperature=5.0)
except Exception as e:
    print(e)  # "Input should be less than or equal to 2"

# Fehler: model fehlt
try:
    no_model = LLMConfig()
except Exception as e:
    print(e)  # "Field required: model"
```

### Verschachtelte Modelle

```python
from pydantic import BaseModel

class Source(BaseModel):
    url: str
    title: str
    relevance: float

class ResearchResult(BaseModel):
    query: str
    summary: str
    sources: list[Source]
    confidence: float

# Verschachtelte Validierung
result = ResearchResult(
    query="Was ist Pydantic?",
    summary="Pydantic ist eine Validierungs-Library...",
    sources=[
        {"url": "https://docs.pydantic.dev", "title": "Pydantic Docs", "relevance": 0.95},
        {"url": "https://realpython.com", "title": "Real Python", "relevance": 0.8},
    ],
    confidence=0.9,
)

# Zugriff auf verschachtelte Daten -- mit Autocomplete
print(result.sources[0].title)  # "Pydantic Docs"
```

### Pydantic für strukturierte LLM-Outputs

Das Killer-Feature: du kannst LLMs zwingen, in einem bestimmten Schema zu antworten.

```python
from pydantic import BaseModel
from anthropic import Anthropic
import json

class Sentiment(BaseModel):
    text: str
    score: float        # -1.0 (negativ) bis 1.0 (positiv)
    label: str          # "positiv", "neutral", "negativ"
    confidence: float   # 0.0 bis 1.0

client = Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=256,
    messages=[{
        "role": "user",
        "content": f"""Analysiere das Sentiment dieses Textes.
Antworte ausschließlich als JSON im folgenden Format:
{Sentiment.model_json_schema()}

Text: "Das neue Update ist fantastisch, aber die Installation war nervig."
""",
    }],
)

# JSON-Output parsen und validieren
raw = message.content[0].text
sentiment = Sentiment.model_validate_json(raw)
print(f"Label: {sentiment.label}, Score: {sentiment.score}")
```

### Pydantic + Tool Use (Function Calling)

LLM-Tool-Definitionen sind Pydantic-Modelle. Das Modell "ruft" eine Funktion auf, und Pydantic validiert die Argumente:

```python
from pydantic import BaseModel

class WeatherQuery(BaseModel):
    """Abfrage der aktuellen Wetterdaten für eine Stadt."""
    city: str
    country: str = "DE"
    unit: str = "celsius"

# Das JSON-Schema, das du dem LLM als Tool-Definition gibst
print(WeatherQuery.model_json_schema())
# {"properties": {"city": {"type": "string"}, ...}, "required": ["city"]}
```

### model_validate vs. model_validate_json

```python
# Aus einem Python-Dict
data = {"summary": "Test", "score": 0.9, "tags": ["python"]}
result = ArticleSummary.model_validate(data)

# Aus einem JSON-String (häufig bei API-Responses)
json_str = '{"summary": "Test", "score": 0.9, "tags": ["python"]}'
result = ArticleSummary.model_validate_json(json_str)

# Zurück zu Dict oder JSON
result.model_dump()        # -> dict
result.model_dump_json()   # -> JSON-String
```

### Warum Pydantic Pflicht ist

Pydantic ist Grundlage für:

- **Structured Outputs** -- LLMs in ein Schema zwingen
- **Tool Use / Function Calling** -- Tool-Definitionen als Pydantic-Modelle
- **FastAPI** -- das beliebteste Python-Web-Framework basiert auf Pydantic
- **LangChain / LlamaIndex** -- nutzen Pydantic für Konfiguration und Outputs
- **Instructor** -- Library speziell für Pydantic + LLM-Structured-Outputs

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Pydantic Docs](https://docs.pydantic.dev) | Offizielle Dokumentation |
| :book: | [Pydantic Tutorial](https://docs.pydantic.dev/latest/tutorial/) | Schritt-für-Schritt-Einführung |
| :hammer_and_wrench: | [Instructor](https://python.useinstructor.com) | Pydantic + LLM Structured Outputs |
| :book: | [Anthropic -- Structured Outputs](https://docs.anthropic.com/en/docs/build-with-claude/structured-outputs) | Claude + Pydantic |

## Teste dein Verständnis

- [ ] Definiere ein Pydantic-Modell `BookSummary` mit Feldern: `title` (str), `author` (str), `rating` (float, 1-5), `genres` (list[str]).
- [ ] Was passiert, wenn du `BookSummary(title="Test", author="Ben", rating="abc", genres=[])` aufrufst?
- [ ] Erkläre, warum Pydantic für LLM-Anwendungen wichtiger ist als für "normale" Python-Apps.
