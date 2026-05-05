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

Alle Provider-SDKs (Anthropic, OpenAI, Google) folgen aehnlichen Patterns:

1. **Client-Init** -- API-Key laden, Client-Objekt erstellen.
2. **Message-Erstellung** -- System-Prompt, User-Messages, optional Conversation-History.
3. **Streaming** -- statt auf die komplette Antwort zu warten, Tokens in Echtzeit empfangen.
4. **Tool-Definitionen** -- dem Modell Tools zur Verfuegung stellen (Function Calling).
5. **Error Handling** -- Rate Limits, Timeout, Authentication-Fehler, Content-Filter.

Beispiel Anthropic SDK:

```python
from anthropic import Anthropic
client = Anthropic()  # liest ANTHROPIC_API_KEY aus Environment

message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Erklaere Pydantic in 3 Saetzen."}]
)
print(message.content[0].text)
```

Die Struktur ist bei OpenAI und Google nahezu identisch -- nur Klassennamen und Parameter-Namen unterscheiden sich.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python) | Anthropic SDK |
| :hammer_and_wrench: | [OpenAI Python SDK](https://github.com/openai/openai-python) | OpenAI SDK |
| :hammer_and_wrench: | [Google Generative AI SDK](https://github.com/google-gemini/generative-ai-python) | Google SDK |

## Teste dein Verständnis

- [ ] Kannst du einen einfachen API-Call mit einem Provider-SDK schreiben?
- [ ] Verstehst du die fuenf Grundpatterns (Client, Message, Streaming, Tools, Errors)?
