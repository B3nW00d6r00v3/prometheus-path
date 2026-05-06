---
title: "Type Hints und mypy"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Type Hints und mypy

## Kernidee

Python lässt dich eine Variable "name" mal als String, mal als Zahl, mal als Liste verwenden -- das ist flexibel, aber führt zu Fehlern, die du erst zur Laufzeit findest. Type Hints sind wie Etiketten auf Schubladen: sie sagen dir (und deinem Editor), was wo reingehört. mypy prüft dann, ob du dich an deine eigenen Etiketten hältst. Für KI-Arbeit sind Type Hints Pflicht -- Pydantic, alle SDKs und moderne Python-Libraries bauen darauf auf.

## Im Detail

### Warum Type Hints?

Ohne Type Hints:

```python
def process(data, model, tokens):
    # Was ist data? String? Dict? Liste?
    # Was ist model? Ein Objekt? Ein String?
    # Was gibt die Funktion zurück? Niemand weiß es.
    ...
```

Mit Type Hints:

```python
def process(data: str, model: str, tokens: int) -> dict[str, str]:
    # Sofort klar: String rein, String + Int als Parameter, Dict raus
    ...
```

Drei konkrete Vorteile:

1. **Dein Editor hilft dir:** VS Code zeigt Autocomplete für den Rückgabetyp, warnt bei falschen Argumenten
2. **Fehler vor dem Ausführen finden:** mypy findet Typfehler statisch -- bevor du API-Kosten verursachst
3. **Dokumentation im Code:** Jeder sieht sofort, was eine Funktion erwartet und zurückgibt

### Die wichtigsten Type Hints

```python
# Einfache Typen
name: str = "Claude"
count: int = 42
score: float = 0.95
active: bool = True

# None-Typen (Optional)
result: str | None = None  # kann String oder None sein

# Collections
tags: list[str] = ["python", "ki", "llm"]
config: dict[str, int] = {"max_tokens": 1024, "temperature": 1}
models: tuple[str, ...] = ("haiku", "sonnet", "opus")
unique_tags: set[str] = {"python", "ki"}

# Verschachtelte Typen
messages: list[dict[str, str]] = [
    {"role": "user", "content": "Hallo"},
]

# Union-Typen (mehrere mögliche Typen)
value: str | int = "text"  # kann String oder Int sein
```

### Funktionen mit Type Hints

```python
def summarize(text: str, max_length: int = 200) -> str:
    """Fasst einen Text zusammen."""
    ...

def batch_process(texts: list[str]) -> list[dict[str, str]]:
    """Verarbeitet mehrere Texte und gibt Ergebnisse als Dicts zurück."""
    ...

def find_user(user_id: int) -> dict[str, str] | None:
    """Findet einen User oder gibt None zurück."""
    ...
```

### TypedDict -- Struktur für Dicts

Wenn du weißt, welche Keys ein Dict hat, nutze `TypedDict`:

```python
from typing import TypedDict

class Message(TypedDict):
    role: str
    content: str

class APIResponse(TypedDict):
    summary: str
    sentiment: float
    tags: list[str]

# Jetzt weiß dein Editor, welche Keys existieren
msg: Message = {"role": "user", "content": "Hallo"}
print(msg["role"])  # Autocomplete funktioniert!
```

In der Praxis: für strukturierte Daten ist Pydantic (nächstes Thema) die bessere Wahl -- aber `TypedDict` ist nützlich, wenn du kein Pydantic importieren willst.

### mypy -- Der Typ-Polizist

mypy ist ein statischer Type-Checker: er liest deinen Code und findet Typfehler, ohne ihn auszuführen.

```bash
# Installation
uv add --dev mypy

# Prüfung ausführen
mypy main.py
```

Beispiel -- mypy findet den Fehler:

```python
def greet(name: str) -> str:
    return f"Hallo {name}!"

result: int = greet("Ben")  # mypy: error: Incompatible types
#                              (expression has type "str", variable has type "int")
```

Ohne mypy würde dieser Fehler erst zur Laufzeit auffallen -- möglicherweise nach einem teuren API-Call.

### pyright als Alternative

VS Code nutzt standardmäßig Pyright (den Type-Checker von Microsoft) und zeigt Typfehler direkt im Editor als rote Unterstreichungen. Du brauchst mypy oft gar nicht separat, wenn du VS Code mit der Pylance-Extension nutzt.

```json
// settings.json in VS Code
{
    "python.analysis.typeCheckingMode": "basic"
}
```

### Type Hints in der KI-Praxis

Type Hints sind nicht akademisch -- sie sind praktisch. Beispiel: der Anthropic SDK-Client:

```python
from anthropic import Anthropic

client = Anthropic()

# Dein Editor weiß: message ist ein Message-Objekt
message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hallo"}],
)

# Autocomplete zeigt: message.content, message.model, message.usage, ...
print(message.content[0].text)
```

Ohne Type Hints im SDK wüsstest du nicht, was `message.content` ist. Mit Type Hints zeigt dir dein Editor alle Felder und Methoden -- kein Raten, kein Docs-Lesen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Python Docs -- Typing](https://docs.python.org/3/library/typing.html) | Offizielle Dokumentation |
| :hammer_and_wrench: | [mypy](https://mypy.readthedocs.io) | Statischer Type-Checker |
| :hammer_and_wrench: | [Pyright](https://github.com/microsoft/pyright) | Type-Checker von Microsoft (in VS Code) |
| :book: | [Real Python -- Type Checking](https://realpython.com/python-type-checking/) | Praxis-orientierte Einführung |

## Teste dein Verständnis

- [ ] Schreibe eine Funktion `format_prompt(system: str, user: str, temperature: float = 0.7) -> dict[str, ...]` mit vollständigen Type Hints.
- [ ] Installiere mypy (`uv add --dev mypy`) und führe `mypy` auf einer deiner Python-Dateien aus. Welche Fehler findet es?
- [ ] Warum sind Type Hints für die Arbeit mit LLM-SDKs besonders nützlich?
