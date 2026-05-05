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

LLM-API-Calls dauern Sekunden -- während du auf eine Antwort wartest, könnte dein Programm schon die nächste Anfrage losschicken. Async Programming ist wie ein Kellner, der mehrere Tische gleichzeitig bedient: er wartet nicht, bis Tisch 1 gegessen hat, bevor er Tisch 2 die Karte bringt. für LLM-Apps mit mehreren Aufrufen ist Async der Unterschied zwischen Minuten und Sekunden.

## Im Detail

LLM-APIs sind langsam (1-30 Sekunden pro Aufruf, je nach Modell und Input-Laenge). Ohne Async wartet dein Programm bei jedem Aufruf blockierend. Mit `asyncio` schickst du mehrere Anfragen gleichzeitig ab:

```python
import asyncio
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

async def process_batch(prompts: list[str]):
    tasks = [client.messages.create(...) for p in prompts]
    results = await asyncio.gather(*tasks)
    return results
```

Wichtige Konzepte:
- **`async def`** -- definiert eine asynchrone Funktion (Coroutine).
- **`await`** -- wartet auf das Ergebnis eines async Aufrufs.
- **`asyncio.gather()`** -- fuehrt mehrere Coroutines parallel aus.

Pflicht-Wissen für jede LLM-App mit mehr als einem API-Aufruf. Alle grossen SDKs (Anthropic, OpenAI, Google) bieten Async-Clients.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Real Python — Async IO](https://realpython.com/async-io-python/) | Ausfuehrliche Einfuehrung |
| :book: | [Anthropic — Async Examples](https://github.com/anthropics/anthropic-sdk-python#async-usage) | Async mit dem Anthropic SDK |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen synchronem und asynchronem Code erklären?
- [ ] Verstehst du, warum Async bei LLM-API-Calls besonders nuetzlich ist?
