---
title: "Error Handling für LLM-APIs"
module: "4.1"
type: theorie
fast_track: true
effort: "20min"
stability: live
---

# Error Handling für LLM-APIs

## Kernidee

LLM-APIs sind externe Dienste — sie werden ausfallen, überlasten, langsam sein. Guter Error-Handling-Code macht den Unterschied zwischen einem Service, der bei Fehlern abstürzt, und einem, der sich selbst heilt. Das wichtigste Pattern: **Retry mit Exponential Backoff** — warte nach dem ersten Fehler kurz, nach dem zweiten etwas länger, dann immer länger. So entlastest du auch den API-Provider.

## Im Detail

**Typische Fehler bei LLM-API-Calls:**

| Fehler | HTTP-Code | Ursache | Behandlung |
|--------|-----------|---------|------------|
| Rate Limit | 429 | Zu viele Requests | Retry mit Backoff |
| Server Error | 500, 503 | Provider-Problem | Retry mit Backoff |
| Timeout | — | Netzwerk/Provider langsam | Retry mit kürzerem Timeout |
| Token-Limit | 400 | Input zu lang | Input kürzen, Fehler an User |
| Content-Policy | 400 | Inhalt abgelehnt | Fehler loggen, an User melden |
| Auth-Error | 401 | Falscher API-Key | Keine Retry, sofort abbrechen |

**`tenacity` für Retry-Logik** — die Standard-Library für Production-Retry:

```python
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
import httpx

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=10),
    retry=retry_if_exception_type(httpx.HTTPStatusError),
)
async def call_llm_with_retry(prompt: str) -> str:
    async with httpx.AsyncClient() as client:
        response = await client.post("https://api.anthropic.com/v1/messages", ...)
        response.raise_for_status()  # Wirft HTTPStatusError bei 4xx/5xx
        return response.json()["content"][0]["text"]
```

**Nur bei retriable Fehlern retrien** — 429 und 5xx sind retriable, 401 und 400 nicht:

```python
def is_retriable(exc: Exception) -> bool:
    if isinstance(exc, httpx.HTTPStatusError):
        return exc.response.status_code in {429, 500, 502, 503, 504}
    return isinstance(exc, (httpx.TimeoutException, httpx.NetworkError))

@retry(retry=retry_if_exception(is_retriable), ...)
async def call_llm(prompt: str) -> str: ...
```

**Circuit-Breaker für persistente Ausfälle** — wenn der Provider seit 5 Minuten down ist, muss dein Service nicht weiter versuchen. Library: `pybreaker` oder manuell mit Redis-Counter implementiert.

**Sinnvolle HTTP-Statuscodes in FastAPI zurückgeben:**

```python
from fastapi import HTTPException

@app.post("/process")
async def process(request: LLMRequest):
    try:
        result = await call_llm_with_retry(request.prompt)
        return {"result": result}
    except tenacity.RetryError:
        raise HTTPException(status_code=503, detail="LLM-Service vorübergehend nicht verfügbar")
    except httpx.HTTPStatusError as e:
        if e.response.status_code == 400:
            raise HTTPException(status_code=422, detail="Ungültige Anfrage an LLM-Provider")
        raise HTTPException(status_code=502, detail="Upstream-Fehler")
```

**Anthropic-spezifische Fehler:** Die [Anthropic Error Reference](https://docs.claude.com/en/api/errors) listet alle Fehlercodes mit empfohlener Behandlung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [tenacity](https://github.com/jd/tenacity) | Retry-Library mit Decorator-API |
| 📖 | [tenacity Docs](https://tenacity.readthedocs.io) | Vollständige Dokumentation |
| 📖 | [Anthropic — Error Handling](https://docs.claude.com/en/api/errors) | Provider-spezifische Fehlercodes |
| 📖 | [OpenAI — Error Codes](https://platform.openai.com/docs/guides/error-codes) | OpenAI-spezifische Fehlercodes |

## Teste dein Verständnis

- [ ] Kannst du die fünf häufigsten LLM-API-Fehler benennen und erklären, welche retriable sind?
- [ ] Weißt du, was Exponential Backoff bedeutet und warum er besser ist als feste Wartezeiten?
- [ ] Kannst du `tenacity` so konfigurieren, dass nur bei 429 und 5xx retried wird?
- [ ] Verstehst du, wann ein Circuit-Breaker sinnvoll ist und wann Retry ausreicht?
