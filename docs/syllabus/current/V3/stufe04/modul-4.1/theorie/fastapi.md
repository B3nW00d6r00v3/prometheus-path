---
title: "FastAPI für KI-Services"
module: "4.1"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# FastAPI für KI-Services

## Kernidee

FastAPI ist der moderne Python-Web-Framework für KI-Services: async-native, direkt in Pydantic integriert, und generiert automatisch eine OpenAPI-Dokumentation. Mit ~50 Zeilen Code hast du einen lauffähigen LLM-Service mit API-Doku, Input-Validierung und Streaming. Flask und Django sind für traditionelle Web-Apps — FastAPI ist für Python-APIs gebaut.

## Im Detail

**Minimaler FastAPI-Service mit LLM-Funktion:**

```python
from fastapi import FastAPI
from pydantic import BaseModel
import httpx

app = FastAPI(title="LLM-Service", version="1.0.0")

class ProcessRequest(BaseModel):
    text: str
    instruction: str = "Fasse in 3 Bullet-Points zusammen"

class ProcessResponse(BaseModel):
    result: str
    model: str

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/process", response_model=ProcessResponse)
async def process(request: ProcessRequest):
    result = await call_llm(request.text, request.instruction)
    return ProcessResponse(result=result, model="claude-opus-4-5")
```

**Automatische OpenAPI-Doku** — erreichbar unter `/docs` (Swagger UI) und `/redoc`. Keine Konfiguration nötig — FastAPI generiert alles aus deinen Pydantic-Schemas und Type Hints.

**Pydantic-Integration:** FastAPI validiert Request-Bodies automatisch gegen deine Pydantic-Modelle. Ungültige Inputs werden mit 422 Unprocessable Entity abgelehnt, inkl. Fehlerbeschreibung.

**Dependency Injection für Settings und Services:**

```python
from fastapi import Depends
from functools import lru_cache

@lru_cache
def get_settings() -> Settings:
    return Settings()  # Lädt aus .env

@app.post("/process")
async def process(request: ProcessRequest, settings: Settings = Depends(get_settings)):
    # settings.api_key ist verfügbar, ohne global zu sein
    ...
```

**Server-Sent Events (SSE) für Streaming:**

```python
from fastapi.responses import StreamingResponse

@app.post("/process/stream")
async def process_stream(request: ProcessRequest):
    async def generate():
        async for chunk in stream_llm(request.text):
            yield f"data: {chunk}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")
```

**Starten des Servers:**

```bash
uv run uvicorn main:app --reload  # Entwicklung
uv run uvicorn main:app --host 0.0.0.0 --port 8000  # Production
```

**CORS für Frontend-Integration** — wenn dein React/Vue-Frontend auf einem anderen Port läuft:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"], allow_methods=["*"])
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [FastAPI Docs](https://fastapi.tiangolo.com) | Offizielle Dokumentation |
| 📖 | [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/) | Schritt-für-Schritt-Einstieg |
| 📖 | [FastAPI — Advanced](https://fastapi.tiangolo.com/advanced/) | SSE, WebSockets, Background Tasks |
| 📖 | [uvicorn](https://www.uvicorn.org) | ASGI-Server für FastAPI |

## Teste dein Verständnis

- [ ] Kannst du einen FastAPI-Endpoint mit Pydantic Request/Response-Schema schreiben?
- [ ] Weißt du, wo du die automatische API-Dokumentation findest und was sie zeigt?
- [ ] Kannst du einen SSE-Streaming-Endpoint implementieren?
- [ ] Verstehst du, wie Dependency Injection in FastAPI funktioniert?
