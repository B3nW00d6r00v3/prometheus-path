---
title: "Async/await in der Praxis"
module: "4.1"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Async/await in der Praxis

## Kernidee

Async-Programmierung bedeutet: während du auf eine Antwort wartest (z.B. auf eine LLM-API), kann dein Programm gleichzeitig andere Aufgaben erledigen. Statt 10 API-Calls nacheinander (10x Wartezeit) rufst du sie parallel auf (1x Wartezeit). Das mentale Modell: ein Kellner, der mehrere Tische gleichzeitig bedient, statt bei einem Tisch zu warten, bis die Küche fertig ist.

## Im Detail

**Grundstruktur:**

```python
import asyncio
import httpx

async def fetch_llm_response(prompt: str) -> str:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://api.anthropic.com/v1/messages",
            json={"prompt": prompt},
            headers={"x-api-key": "..."},
        )
        return response.json()["content"]
```

**`asyncio.gather()` für parallele API-Calls** — das wichtigste Pattern für KI-Anwendungen:

```python
async def process_batch(prompts: list[str]) -> list[str]:
    tasks = [fetch_llm_response(p) for p in prompts]
    results = await asyncio.gather(*tasks)
    return list(results)
```

Ohne `gather()`: 10 Calls × 2s = 20s. Mit `gather()`: alle 10 gleichzeitig ≈ 2s.

**`aiohttp` vs. `httpx`:** `httpx` ist der moderne Standard — synchrone und async API identisch, Pydantic-kompatibel, HTTP/2-Support. `aiohttp` ist älter und nur async. Für neue Projekte: `httpx`.

**Async-Context-Manager für Ressourcen-Cleanup:**

```python
async with httpx.AsyncClient(timeout=30.0) as client:
    # Client wird automatisch geschlossen, auch bei Exceptions
    result = await client.get("...")
```

**Häufige Fallen:**

1. **Blocking-Calls in async-Funktionen** — z.B. `requests.get()` statt `httpx.AsyncClient`, oder `time.sleep()` statt `asyncio.sleep()`. Blockiert den gesamten Event-Loop.

2. **Vergessen auf `await`** — `result = fetch_llm_response(prompt)` gibt ein Coroutine-Objekt zurück, kein Ergebnis. Immer `await`.

3. **Pydantic-Methoden blockieren** — bei großen Payloads: `await asyncio.to_thread(model.model_dump)`.

4. **`asyncio.run()` vs. `await`** — `asyncio.run()` nur im Einstiegspunkt (main), überall sonst `await`.

**FastAPI macht async transparent:** FastAPI-Endpoints als `async def` deklarieren, dann ist alles automatisch.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Real Python — Async IO](https://realpython.com/async-io-python/) | Bester Einstieg ins Thema |
| 📖 | [httpx Docs](https://www.python-httpx.org) | Async HTTP-Client |
| 📖 | [asyncio — Python Docs](https://docs.python.org/3/library/asyncio.html) | Offizielle Referenz |
| 📖 | [FastAPI — Concurrency](https://fastapi.tiangolo.com/async/) | Async in FastAPI-Kontext |

## Teste dein Verständnis

- [ ] Kannst du erklären, was `asyncio.gather()` macht und warum es schneller ist als sequenzielle Calls?
- [ ] Weißt du, was passiert, wenn du `requests.get()` in einer async-Funktion aufrufst?
- [ ] Kannst du den Unterschied zwischen `httpx.AsyncClient` und `httpx.Client` erklären?
- [ ] Verstehst du, warum `await` vergessen werden kann und wie man es erkennt?
