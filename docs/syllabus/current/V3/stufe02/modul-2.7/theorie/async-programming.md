---
title: "Async Programming für API-Calls"
module: "2.7"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Async Programming für API-Calls

## Kernidee

LLM-API-Calls dauern Sekunden -- während du auf eine Antwort wartest, könnte dein Programm schon die nächste Anfrage losschicken. Async Programming ist wie ein Kellner, der mehrere Tische gleichzeitig bedient: er wartet nicht, bis Tisch 1 gegessen hat, bevor er Tisch 2 die Karte bringt. Für LLM-Apps mit mehreren Aufrufen ist Async der Unterschied zwischen Minuten und Sekunden.

## Im Detail

### Das Problem: Synchrone API-Calls

```python
from anthropic import Anthropic
import time

client = Anthropic()

def summarize(text: str) -> str:
    response = client.messages.create(
        model="claude-haiku-4-5-20250514",
        max_tokens=256,
        messages=[{"role": "user", "content": f"Fasse zusammen: {text}"}],
    )
    return response.content[0].text

# 10 Artikel zusammenfassen -- synchron (sequentiell)
articles = [f"Artikel {i} mit langem Inhalt..." for i in range(10)]

start = time.time()
results = []
for article in articles:
    result = summarize(article)  # ~2 Sekunden pro Call
    results.append(result)
print(f"Dauer: {time.time() - start:.1f}s")  # ~20 Sekunden!
```

Jeder Call wartet auf den vorherigen. 10 Calls mit je 2 Sekunden = 20 Sekunden. Das skaliert nicht.

### Die Lösung: Async -- alle gleichzeitig

```python
import asyncio
import time
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

async def summarize(text: str) -> str:
    response = await client.messages.create(
        model="claude-haiku-4-5-20250514",
        max_tokens=256,
        messages=[{"role": "user", "content": f"Fasse zusammen: {text}"}],
    )
    return response.content[0].text

async def main():
    articles = [f"Artikel {i} mit langem Inhalt..." for i in range(10)]

    start = time.time()
    # Alle 10 Calls gleichzeitig starten
    tasks = [summarize(article) for article in articles]
    results = await asyncio.gather(*tasks)
    print(f"Dauer: {time.time() - start:.1f}s")  # ~2-3 Sekunden!

asyncio.run(main())
```

Statt 20 Sekunden nur 2-3 Sekunden -- alle Calls laufen parallel.

### Die drei Schlüsselwörter

```python
# 1. async def -- definiert eine asynchrone Funktion (Coroutine)
async def fetch_data() -> str:
    ...

# 2. await -- wartet auf das Ergebnis eines async Aufrufs
result = await fetch_data()

# 3. asyncio.run() -- startet die async Event Loop
asyncio.run(main())
```

**Wichtige Regel:** `await` funktioniert nur innerhalb von `async def`. Du kannst nicht in einer normalen Funktion `await` nutzen.

### asyncio.gather -- Mehrere Tasks parallel

```python
import asyncio

async def task_a() -> str:
    await asyncio.sleep(2)  # Simuliert API-Call
    return "Ergebnis A"

async def task_b() -> str:
    await asyncio.sleep(2)  # Simuliert API-Call
    return "Ergebnis B"

async def main():
    # Sequentiell: 4 Sekunden
    a = await task_a()
    b = await task_b()

    # Parallel: 2 Sekunden (beide gleichzeitig)
    a, b = await asyncio.gather(task_a(), task_b())

asyncio.run(main())
```

### Praxis: Batch-Verarbeitung mit Rate Limiting

In der Realität darfst du nicht unbegrenzt viele Calls gleichzeitig schicken -- APIs haben Rate Limits. Lösung: Semaphore.

```python
import asyncio
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

# Maximal 5 gleichzeitige Anfragen
semaphore = asyncio.Semaphore(5)

async def summarize_with_limit(text: str) -> str:
    async with semaphore:  # Wartet, wenn schon 5 Calls laufen
        response = await client.messages.create(
            model="claude-haiku-4-5-20250514",
            max_tokens=256,
            messages=[{"role": "user", "content": f"Fasse zusammen: {text}"}],
        )
        return response.content[0].text

async def main():
    articles = [f"Artikel {i}..." for i in range(50)]

    # 50 Artikel, aber maximal 5 gleichzeitig
    tasks = [summarize_with_limit(a) for a in articles]
    results = await asyncio.gather(*tasks)
    print(f"{len(results)} Zusammenfassungen erstellt")

asyncio.run(main())
```

### Async Streaming

Für Echtzeit-Ausgabe (wie in ChatGPT) brauchst du Async Streaming:

```python
import asyncio
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

async def stream_response(prompt: str):
    async with client.messages.stream(
        model="claude-sonnet-4-6-20250514",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}],
    ) as stream:
        async for text in stream.text_stream:
            print(text, end="", flush=True)
    print()  # Neue Zeile am Ende

asyncio.run(stream_response("Erkläre asyncio in 3 Sätzen."))
```

### Error Handling in Async

```python
import asyncio
from anthropic import AsyncAnthropic, APIError, RateLimitError

client = AsyncAnthropic()

async def safe_call(prompt: str, retries: int = 3) -> str | None:
    for attempt in range(retries):
        try:
            response = await client.messages.create(
                model="claude-haiku-4-5-20250514",
                max_tokens=256,
                messages=[{"role": "user", "content": prompt}],
            )
            return response.content[0].text
        except RateLimitError:
            wait = 2 ** attempt  # Exponential Backoff: 1s, 2s, 4s
            print(f"Rate Limit -- warte {wait}s...")
            await asyncio.sleep(wait)
        except APIError as e:
            print(f"API-Fehler: {e}")
            return None
    return None
```

### Wann Async, wann Sync?

| Szenario | Empfehlung |
|----------|-----------|
| Ein einzelner API-Call | Sync reicht |
| 2-5 API-Calls | Sync ist okay, Async optional |
| 10+ API-Calls | Async dringend empfohlen |
| Streaming-Output | Async bevorzugt |
| CLI-Tool mit einem Call | Sync (einfacher) |
| Web-Server (FastAPI) | Async Pflicht |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Real Python -- Async IO](https://realpython.com/async-io-python/) | Ausführliche Einführung |
| :book: | [Anthropic SDK -- Async Usage](https://github.com/anthropics/anthropic-sdk-python#async-usage) | Async mit dem Anthropic SDK |
| :book: | [Python Docs -- asyncio](https://docs.python.org/3/library/asyncio.html) | Offizielle Dokumentation |

## Teste dein Verständnis

- [ ] Schreibe ein async Script, das 5 verschiedene Prompts parallel an ein LLM schickt und die Ergebnisse sammelt.
- [ ] Erkläre den Unterschied zwischen `await asyncio.gather(a(), b())` und `await a(); await b()` -- wie lange dauert jeweils ein Durchlauf?
- [ ] Warum brauchst du ein Semaphore bei Batch-Verarbeitung?
