---
title: "Tool-Use im Frontend visualisieren"
module: "5.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Tool-Use im Frontend visualisieren

## Kernidee

Wenn dein LLM Tools aufruft — Web-Suche, DB-Query, RAG-Retrieval — willst du das im UI zeigen. Transparenz über laufende Aktionen ("Suche nach...", "Lade Daten...") verhindert die "Hängt es oder denkt es noch?"-Frustration und schafft Vertrauen.

## Im Detail

**Warum Tool-Use-Visualisierung wichtig ist:**

Bei einem RAG-System mit Hybrid Search und Reranking kann die Antwortzeit 3-8 Sekunden betragen. Ohne Fortschrittsanzeige: Nutzer sieht Spinner oder Nichts. Mit Visualisierung: Nutzer verfolgt, was das System tut.

**Pattern: Schrittweise Visualisierung**

```
User: "Was steht in meinen Dokumenten über pgvector?"

[Schritt 1] 🔍 Vektor-Suche gestartet...  ← sofort sichtbar
[Schritt 2] 📊 BM25-Suche gestartet...     ← nach 500ms
[Schritt 3] 🎯 Reranking von 15 Chunks...  ← nach 1s
[Schritt 4] ✅ 3 relevante Chunks gefunden ← nach 2s
[Antwort]   pgvector ist...                ← Streaming
```

**Implementierung in Chainlit:**

```python
@cl.on_message
async def main(message: cl.Message):
    async with cl.Step(name="Vektor-Suche") as step:
        vector_results = await vector_db.search(message.content)
        step.output = f"{len(vector_results)} Treffer"
    
    async with cl.Step(name="BM25-Suche") as step:
        bm25_results = bm25.search(message.content)
        step.output = f"{len(bm25_results)} Treffer"
    
    async with cl.Step(name="Reranking") as step:
        chunks = reranker.rerank(vector_results + bm25_results, top_k=3)
        step.output = f"Top {len(chunks)} Chunks ausgewählt"
    
    # Antwort streamen
    msg = cl.Message(content="")
    async for token in llm.stream(message.content, chunks):
        await msg.stream_token(token)
    await msg.send()
```

**Implementierung im Vercel AI SDK:**

```typescript
import { streamText, tool } from 'ai'
import { z } from 'zod'

const result = await streamText({
    model: anthropic('claude-opus-4-5'),
    tools: {
        search_documents: tool({
            description: 'Sucht in den Dokumenten',
            parameters: z.object({ query: z.string() }),
            execute: async ({ query }) => {
                // UI sieht automatisch den Tool-Call
                return await ragSystem.retrieve(query)
            }
        })
    },
    messages
})
// Tool-Calls werden automatisch im UI als separate Bubbles gerendert
```

**Minimale Variante in Streamlit:**

```python
status = st.status("RAG-Suche läuft...", expanded=True)
with status:
    st.write("Vektor-Suche...")
    chunks = vector_db.search(query)
    st.write(f"✅ {len(chunks)} Chunks gefunden")
    st.write("Reranking...")
    chunks = reranker.rerank(chunks)
    st.write(f"✅ Top 3 ausgewählt")
status.update(label="Suche abgeschlossen", state="complete")
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Vercel AI SDK Tool UI](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot-tool-usage) | TypeScript-Implementierung |
| 📖 Docs | [Chainlit Steps](https://docs.chainlit.io) | Chainlit Step-Visualisierung |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Tool-Use-Visualisierung die UX verbessert?
- [ ] Wie würdest du in Streamlit die Schritte deiner RAG-Pipeline visualisieren?
- [ ] Was ist der Vorteil von Chainlits `cl.Step` gegenüber einem einfachen `st.write`?
