---
title: "Streaming-LLM-Responses"
module: "4.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Streaming-LLM-Responses

## Kernidee

Ohne Streaming wartet der Nutzer bis zu 30 Sekunden auf eine leere Seite, dann erscheint alles auf einmal. Mit Streaming fließen Tokens sofort, sobald sie generiert werden — wie beim Live-Tippen. Das ist kein Nice-to-have: bei langen Outputs ist Streaming Pflicht für akzeptable UX. Alle Provider-SDKs unterstützen Streaming nativ.

## Im Detail

**Streaming-Pattern in Python** — async Generator:

```python
import anthropic

async def stream_llm(prompt: str):
    client = anthropic.AsyncAnthropic()
    async with client.messages.stream(
        model="claude-opus-4-5",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}],
    ) as stream:
        async for text in stream.text_stream:
            yield text
```

**Server-Sent Events (SSE) in FastAPI** — der Standard für Streaming-APIs im Web:

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

app = FastAPI()

class StreamRequest(BaseModel):
    prompt: str

@app.post("/process/stream")
async def process_stream(request: StreamRequest):
    async def generate():
        async for chunk in stream_llm(request.prompt):
            # SSE-Format: "data: <inhalt>\n\n"
            yield f"data: {chunk}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",  # Nginx-Buffering deaktivieren
        },
    )
```

**SSE-Format:** Jede Nachricht ist `data: <inhalt>\n\n`. Das `\n\n` am Ende signalisiert das Ende einer Nachricht. `[DONE]` ist Konvention (von OpenAI übernommen) für das Stream-Ende.

**Testen von SSE in der Browser-Konsole:**

```javascript
const source = new EventSource("/process/stream");  // nur GET
// Für POST mit SSE: fetch() mit ReadableStream
const response = await fetch("/process/stream", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({prompt: "Erkläre Quantencomputing"}),
});
const reader = response.body.getReader();
while (true) {
    const {done, value} = await reader.read();
    if (done) break;
    console.log(new TextDecoder().decode(value));
}
```

**Testen mit curl:**

```bash
curl -X POST http://localhost:8000/process/stream \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Erkläre Quantencomputing in 3 Sätzen"}' \
  --no-buffer
```

**OpenAI Streaming** — identisches Pattern, andere SDK-Methode:

```python
from openai import AsyncOpenAI

async def stream_openai(prompt: str):
    client = AsyncOpenAI()
    async with client.chat.completions.stream(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
    ) as stream:
        async for chunk in stream:
            if chunk.choices[0].delta.content:
                yield chunk.choices[0].delta.content
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Anthropic Streaming](https://docs.claude.com/en/api/streaming) | Anthropic-spezifisches Streaming |
| 📖 | [OpenAI Streaming](https://platform.openai.com/docs/api-reference/streaming) | OpenAI-Streaming-Referenz |
| 📖 | [MDN — Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) | SSE-Standard |
| 📖 | [FastAPI — StreamingResponse](https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse) | FastAPI Streaming-Docs |

## Teste dein Verständnis

- [ ] Kannst du einen async-Generator in Python schreiben, der LLM-Tokens streamt?
- [ ] Weißt du, was das SSE-Format ist und wie eine SSE-Nachricht aufgebaut ist?
- [ ] Kannst du einen FastAPI-Endpoint mit `StreamingResponse` implementieren?
- [ ] Weißt du, wie du einen Streaming-Endpoint mit `curl` oder im Browser testen kannst?
