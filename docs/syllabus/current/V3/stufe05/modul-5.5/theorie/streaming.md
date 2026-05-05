---
title: "Streaming als UX-Pflicht"
module: "5.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Streaming als UX-Pflicht

## Kernidee

Ohne Streaming wartet der Nutzer 10-30 Sekunden auf einen Block Text — fühlt sich kaputt an. Mit Streaming erscheinen die ersten Wörter nach 500ms, der Nutzer liest während das Modell generiert. Streaming ist 2026 keine optionale Funktion, sondern UX-Grundvoraussetzung.

## Im Detail

**Warum Streaming so wichtig ist:**

LLMs brauchen 10-30 Sekunden für lange Antworten. Ohne Streaming:
- Nutzer sieht leere Seite oder Spinner für 10-30s.
- Empfindung: "Ist es abgestürzt?"
- Frustration, Abbruch, schlechtes Feedback.

Mit Streaming:
- Erste Wörter nach ~500ms.
- Nutzer liest aktiv mit, während der Rest generiert wird.
- Empfindung: "Es denkt gerade nach und schreibt."

**Technisches Konzept: Server-Sent Events (SSE)**

```
Client → HTTP POST → Server
Server → SSE-Stream → Client
  "data: Hello\n\n"
  "data:  World\n\n"
  "data: [DONE]\n\n"
```

Das LLM generiert Token für Token, der Server sendet jeden Token sofort als SSE-Event, der Browser rendert ihn sofort.

**Streaming mit Anthropic SDK (Python):**

```python
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-opus-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Erkläre RAG in drei Sätzen."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

**Streaming mit Vercel AI SDK (TypeScript):**

```typescript
import { streamText } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'

const result = await streamText({
    model: anthropic('claude-opus-4-5'),
    prompt: 'Erkläre RAG in drei Sätzen.'
})

// Als HTTP-Response streamen
return result.toDataStreamResponse()
```

**Streaming in Streamlit:**

```python
import streamlit as st

response_placeholder = st.empty()
full_response = ""

with client.messages.stream(...) as stream:
    for text in stream.text_stream:
        full_response += text
        response_placeholder.markdown(full_response + "▌")

response_placeholder.markdown(full_response)
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [MDN — Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) | Technisches Konzept |
| 📖 Docs | [Vercel AI SDK Streaming](https://sdk.vercel.ai/docs/foundations/streaming) | TypeScript-Implementierung |

## Teste dein Verständnis

- [ ] Kannst du erklären, wie Server-Sent Events technisch funktionieren?
- [ ] Wie aktivierst du Streaming mit dem Anthropic-Python-SDK?
- [ ] Warum ist Streaming besonders bei RAG-Anwendungen mit langen Antworten wichtig?
