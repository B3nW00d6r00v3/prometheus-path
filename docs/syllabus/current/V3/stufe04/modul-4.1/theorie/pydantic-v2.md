---
title: "Pydantic v2 in der Tiefe"
module: "4.1"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Pydantic v2 in der Tiefe

## Kernidee

Pydantic ist dein Vertrag zwischen dem, was du erwartest, und dem, was tatsächlich ankommt. Du schreibst eine Python-Klasse mit Type Hints — Pydantic validiert, konvertiert und serialisiert Daten automatisch. 2026 ist Pydantic Standard für jede Datenstruktur in KI-Code: API-Inputs, LLM-Outputs (Structured Outputs), Tool-Definitionen, Settings.

## Im Detail

Pydantic v2 wurde komplett in Rust neu geschrieben — es ist 5-50x schneller als v1 und hat eine sauberere API.

**Kernkonzepte:**

**BaseModel** ist die Basis für alle Datenklassen:

```python
from pydantic import BaseModel, Field

class LLMRequest(BaseModel):
    prompt: str = Field(..., min_length=1, max_length=10000)
    temperature: float = Field(default=0.7, ge=0.0, le=2.0)
    model: str = "claude-opus-4-5"
```

**Field-Validators** für komplexe Validierung:

```python
from pydantic import field_validator

class UserInput(BaseModel):
    email: str

    @field_validator("email")
    @classmethod
    def validate_email(cls, v: str) -> str:
        if "@" not in v:
            raise ValueError("Keine gültige E-Mail-Adresse")
        return v.lower()
```

**Computed Fields** für abgeleitete Werte:

```python
from pydantic import computed_field

class TextChunk(BaseModel):
    text: str

    @computed_field
    @property
    def word_count(self) -> int:
        return len(self.text.split())
```

**JSON-Schema-Generierung** — besonders relevant für LLM Tool Definitions:

```python
schema = LLMRequest.model_json_schema()
# Direkt verwendbar als JSON-Schema für OpenAI Function Calling
```

**Config-Optionen** (v2-Stil):

```python
class Settings(BaseModel):
    model_config = {"str_strip_whitespace": True, "validate_assignment": True}
    api_key: str
```

**Migration von v1 zu v2:** `.dict()` → `.model_dump()`, `.json()` → `.model_dump_json()`, `@validator` → `@field_validator`. Der [Migration Guide](https://docs.pydantic.dev/latest/migration/) deckt alle Breaking Changes ab.

**Wichtige Falle:** Pydantic-Methoden sind synchron. In async-Funktionen blockieren sie den Event-Loop, wenn sie auf großen Datenmengen laufen. Bei sehr großen Payloads: Validierung in einem Thread-Pool ausführen mit `asyncio.to_thread()`.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Pydantic Docs](https://docs.pydantic.dev) | Offizielle Dokumentation |
| 📖 | [Pydantic v2 Migration Guide](https://docs.pydantic.dev/latest/migration/) | Breaking Changes v1 → v2 |
| 📖 | [Pydantic — Validators](https://docs.pydantic.dev/latest/concepts/validators/) | Field- und Model-Validators |
| 📖 | [Pydantic — JSON Schema](https://docs.pydantic.dev/latest/concepts/json_schema/) | Für Tool Definitions |

## Teste dein Verständnis

- [ ] Kannst du ein `BaseModel` mit mindestens zwei Feldern und einem `Field`-Validator schreiben?
- [ ] Weißt du, was `model_dump()` und `model_dump_json()` zurückgeben und wann du welches nutzt?
- [ ] Kannst du erklären, warum `@validator` in v2 durch `@field_validator` ersetzt wurde?
- [ ] Verstehst du die Falle mit synchronen Pydantic-Methoden in async-Kontext?
