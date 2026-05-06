---
title: "LLM-SDK-Patterns"
module: "2.7"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# LLM-SDK-Patterns

## Kernidee

Ob Anthropic, OpenAI oder Google -- alle Provider-SDKs folgen demselben Grundmuster: Client erstellen, Nachricht senden, Antwort empfangen. Wie Autovermietungen: verschiedene Marken, aber Lenkrad, Gas und Bremse sind immer am selben Platz. Wenn du ein SDK kennst, findest du dich in allen zurecht.

## Im Detail

### Pattern 1: Client erstellen

Alle SDKs beginnen gleich: API-Key laden, Client-Objekt erstellen.

```python
# Anthropic
from anthropic import Anthropic
client = Anthropic()  # liest ANTHROPIC_API_KEY aus Environment

# OpenAI
from openai import OpenAI
client = OpenAI()  # liest OPENAI_API_KEY aus Environment

# Beide lesen den API-Key automatisch aus der Umgebungsvariable.
# Du kannst ihn auch explizit übergeben:
client = Anthropic(api_key="sk-ant-...")
# Aber: API-Key im Code = Sicherheitsrisiko. Nutze .env (siehe dotenv-Seite).
```

### Pattern 2: Einfacher Message-Call

Das Grundmuster: System-Prompt + User-Message senden, Antwort empfangen.

```python
# Anthropic
from anthropic import Anthropic

client = Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    system="Du bist ein hilfreicher Python-Tutor.",
    messages=[
        {"role": "user", "content": "Erkläre List Comprehensions."},
    ],
)
print(message.content[0].text)
```

```python
# OpenAI -- fast identisch
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    max_tokens=1024,
    messages=[
        {"role": "system", "content": "Du bist ein hilfreicher Python-Tutor."},
        {"role": "user", "content": "Erkläre List Comprehensions."},
    ],
)
print(response.choices[0].message.content)
```

**Unterschied:** Bei Anthropic ist der System-Prompt ein separater Parameter, bei OpenAI ist er eine Message mit `role: "system"`. Die Antwort kommt bei Anthropic aus `message.content[0].text`, bei OpenAI aus `response.choices[0].message.content`.

### Pattern 3: Conversation History

Für Multi-Turn-Gespräche schickst du die gesamte Historie mit:

```python
from anthropic import Anthropic

client = Anthropic()

# Gesprächs-Historie aufbauen
history: list[dict] = []

def chat(user_message: str) -> str:
    history.append({"role": "user", "content": user_message})

    message = client.messages.create(
        model="claude-sonnet-4-6-20250514",
        max_tokens=1024,
        system="Du bist ein Python-Tutor. Erkläre mit Beispielen.",
        messages=history,
    )

    assistant_reply = message.content[0].text
    history.append({"role": "assistant", "content": assistant_reply})
    return assistant_reply

# Multi-Turn-Gespräch
print(chat("Was ist eine List Comprehension?"))
print(chat("Zeige ein Beispiel mit Filtern."))
print(chat("Wie performant ist das im Vergleich zu einer for-Schleife?"))
```

### Pattern 4: Streaming

Statt auf die komplette Antwort zu warten, empfängst du Tokens in Echtzeit:

```python
from anthropic import Anthropic

client = Anthropic()

# Streaming -- Tokens in Echtzeit
with client.messages.stream(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Schreibe ein Haiku über Python."}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
print()
```

```python
# OpenAI Streaming
from openai import OpenAI

client = OpenAI()

stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Schreibe ein Haiku über Python."}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
print()
```

### Pattern 5: Tool Use / Function Calling

Du gibst dem Modell Tools (Funktionen), die es "aufrufen" kann:

```python
from anthropic import Anthropic
import json

client = Anthropic()

# Tool-Definition
tools = [
    {
        "name": "get_weather",
        "description": "Gibt das aktuelle Wetter für eine Stadt zurück.",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "Name der Stadt"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": ["city"],
        },
    }
]

message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "Wie ist das Wetter in Berlin?"}],
)

# Modell entscheidet sich, das Tool aufzurufen
for block in message.content:
    if block.type == "tool_use":
        print(f"Tool: {block.name}")
        print(f"Input: {json.dumps(block.input, indent=2)}")
        # -> Tool: get_weather
        # -> Input: {"city": "Berlin", "unit": "celsius"}
```

### Pattern 6: Error Handling

Alle SDKs werfen spezifische Exceptions für häufige Fehler:

```python
from anthropic import (
    Anthropic,
    APIError,
    AuthenticationError,
    RateLimitError,
    APITimeoutError,
)

client = Anthropic()

def safe_call(prompt: str) -> str | None:
    try:
        message = client.messages.create(
            model="claude-sonnet-4-6-20250514",
            max_tokens=1024,
            messages=[{"role": "user", "content": prompt}],
        )
        return message.content[0].text

    except AuthenticationError:
        print("Ungültiger API-Key! Prüfe deine .env-Datei.")
        return None

    except RateLimitError:
        print("Rate Limit erreicht. Warte und versuche erneut.")
        return None

    except APITimeoutError:
        print("API-Timeout. Server antwortet nicht.")
        return None

    except APIError as e:
        print(f"API-Fehler: {e.status_code} -- {e.message}")
        return None
```

### Pattern 7: Token-Verbrauch tracken

Kosten im Blick behalten:

```python
from anthropic import Anthropic

client = Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Erkläre Pydantic."}],
)

# Usage-Informationen
print(f"Input-Tokens:  {message.usage.input_tokens}")
print(f"Output-Tokens: {message.usage.output_tokens}")

# Kosten berechnen (Sonnet-Preise, Stand Mai 2026)
input_cost = message.usage.input_tokens * 0.003 / 1000
output_cost = message.usage.output_tokens * 0.015 / 1000
print(f"Kosten: ${input_cost + output_cost:.4f}")
```

### SDK-Vergleich auf einen Blick

| Feature | Anthropic SDK | OpenAI SDK |
|---------|--------------|------------|
| Client | `Anthropic()` | `OpenAI()` |
| Call | `client.messages.create()` | `client.chat.completions.create()` |
| System-Prompt | `system="..."` (Parameter) | `{"role": "system", ...}` (Message) |
| Antwort-Text | `message.content[0].text` | `response.choices[0].message.content` |
| Streaming | `client.messages.stream()` | `stream=True` Parameter |
| Async | `AsyncAnthropic()` | `AsyncOpenAI()` |
| Tools | `tools=[...]` Parameter | `tools=[...]` Parameter |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python) | Anthropic SDK mit Beispielen |
| :hammer_and_wrench: | [OpenAI Python SDK](https://github.com/openai/openai-python) | OpenAI SDK mit Beispielen |
| :book: | [Anthropic API Docs](https://docs.anthropic.com) | Offizielle API-Dokumentation |
| :book: | [OpenAI API Docs](https://platform.openai.com/docs) | Offizielle API-Dokumentation |

## Teste dein Verständnis

- [ ] Schreibe einen einfachen API-Call mit dem Anthropic oder OpenAI SDK, der eine Frage beantwortet und die Token-Usage ausgibt.
- [ ] Implementiere eine `chat()`-Funktion mit Conversation History, die mehrere Turns unterstützt.
- [ ] Erkläre: Was passiert, wenn dein API-Key ungültig ist? Welche Exception wird geworfen?
