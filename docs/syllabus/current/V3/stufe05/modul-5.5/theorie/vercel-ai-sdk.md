---
title: "Vercel AI SDK 5 — Production-Standard"
module: "5.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Vercel AI SDK 5 — Production-Standard

## Kernidee

Das Vercel AI SDK ist 2026 der dominante Stack für Next.js-LLM-Apps in Production. Es bietet Streaming-Hooks, Tool-Use-Rendering, Generative UI und Provider-Agnostik in einem einheitlichen TypeScript-Paket — Production-ready von Tag eins.

## Im Detail

Das Vercel AI SDK (TypeScript) macht es einfach, LLM-Anwendungen mit React/Next.js zu bauen. Es abstrahiert Streaming, Tool-Calling und Provider-Wechsel.

**Installation und Setup:**

```bash
npm install ai @ai-sdk/anthropic
```

**Minimales Chat-Interface mit `useChat`:**

```typescript
// app/page.tsx
'use client'
import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          <strong>{m.role}:</strong> {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} placeholder="Frag mich..." />
        <button type="submit">Senden</button>
      </form>
    </div>
  )
}
```

**API-Route mit Streaming (App Router):**

```typescript
// app/api/chat/route.ts
import { streamText } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const result = await streamText({
    model: anthropic('claude-opus-4-5'),
    messages,
    system: 'Du bist ein hilfreicher Assistent.'
  })

  return result.toDataStreamResponse()
}
```

**Provider-Agnostik:**

```typescript
// Einfacher Provider-Wechsel
import { openai } from '@ai-sdk/openai'
import { google } from '@ai-sdk/google'

// Nur eine Zeile ändert sich:
const model = anthropic('claude-opus-4-5')        // Anthropic
const model = openai('gpt-4o')                    // OpenAI
const model = google('gemini-2.5-pro')            // Google
```

**Stärken:**
- Production-ready von Anfang an: Error-Handling, Reconnect-Logik, Streaming.
- Tool-Use-Rendering: LLM-Tool-Calls sichtbar im UI.
- Generative UI: LLM rendert React-Komponenten.
- Alle großen Provider out-of-the-box.

**Schwächen:**
- TypeScript/JavaScript erforderlich.
- Lernkurve wenn Next.js neu ist.
- Für einfache Demos Overkill gegenüber Streamlit.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Vercel AI SDK](https://sdk.vercel.ai) | Vollständige Dokumentation |
| 📦 Code | [AI SDK Examples](https://github.com/vercel/ai) | Beispiel-Projekte |
| 📖 Docs | [Vercel AI SDK Streaming](https://sdk.vercel.ai/docs/foundations/streaming) | Streaming-Grundlagen |

## Teste dein Verständnis

- [ ] Kannst du erklären, was `useChat` macht und warum es Streaming vereinfacht?
- [ ] Wie würdest du in einem Next.js-Projekt den Provider von Anthropic auf OpenAI wechseln?
- [ ] Wann würdest du Vercel AI SDK statt Streamlit wählen?
