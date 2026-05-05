---
title: "Generative UI als 2026-Pattern"
module: "5.5"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Generative UI als 2026-Pattern

## Kernidee

Generative UI bedeutet: Das LLM entscheidet nicht nur *was* es antwortet, sondern *wie* die Antwort gerendert wird. Statt Plain-Text gibt das LLM eine strukturierte Antwort zurück, die das Frontend als interaktive Komponente rendert — Chart, Karte, Button, Formular.

## Im Detail

**Traditionell:** LLM → Text → Frontend rendert Text als Bubble.

**Generative UI:** LLM → ruft Tool auf → Tool gibt Daten zurück → Frontend rendert passende Komponente.

**Beispiel:**

```
User: "Zeig mir den Verlauf meiner Eval-Scores"

Traditionell: "Deine Faithfulness-Scores waren: 0.72, 0.78, 0.83, 0.86..."

Generative UI: LLM ruft Tool `show_eval_chart` auf → Frontend rendert
               interaktiven Line-Chart mit Hover-Tooltips
```

**Implementierung mit Vercel AI SDK (Generative UI):**

```typescript
// app/api/chat/route.ts
import { streamText, tool } from 'ai'
import { z } from 'zod'

export async function POST(req: Request) {
    const { messages } = await req.json()
    
    const result = await streamText({
        model: anthropic('claude-opus-4-5'),
        tools: {
            show_eval_chart: tool({
                description: 'Zeigt einen Chart mit Eval-Score-Verlauf',
                parameters: z.object({
                    scores: z.array(z.number()),
                    metric: z.string()
                }),
                // Tool-Result wird als Komponenten-Daten behandelt
                execute: async ({ scores, metric }) => ({ scores, metric })
            })
        },
        messages
    })
    
    return result.toDataStreamResponse()
}
```

```typescript
// app/page.tsx — Client-seitig
import { useChat } from 'ai/react'
import { EvalChart } from '@/components/EvalChart'

export default function Chat() {
    const { messages } = useChat({
        // Tool-Results als Komponenten rendern
        onToolCall: ({ toolCall }) => {
            if (toolCall.toolName === 'show_eval_chart') {
                return <EvalChart data={toolCall.args} />
            }
        }
    })
    // ...
}
```

**Wann Generative UI sinnvoll ist:**

- Daten-Visualisierung (Charts, Tabellen) auf Nutzer-Anfrage.
- Interaktive Formulare, die das LLM vorausfüllt.
- Karten und Location-basierte Antworten.
- Produktkarten mit "Kaufen"-Button aus einer Datenbank.

**Wann Generative UI nicht sinnvoll ist:**

- Reine Text-Antworten.
- Einfache Informations-Abrufe ohne Visualisierungsbedarf.
- Prototypen, bei denen die Entwicklungszeit nicht gerechtfertigt ist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Vercel AI SDK — Generative UI](https://sdk.vercel.ai/docs/ai-sdk-rsc/generative-user-interfaces) | Vollständige Implementierung |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen traditionellem LLM-Output und Generative UI in einem Satz erklären?
- [ ] Welcher Use-Case in deinem RAG-Projekt würde von Generative UI profitieren?
- [ ] Was sind zwei Szenarien, in denen Generative UI *nicht* sinnvoll ist?
