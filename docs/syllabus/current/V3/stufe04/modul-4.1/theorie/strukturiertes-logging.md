---
title: "Strukturiertes Logging"
module: "4.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Strukturiertes Logging

## Kernidee

`print()` ist für Debugging. Logging ist für Production. Der Unterschied: Logs haben Level (DEBUG, INFO, WARNING, ERROR), Zeitstempel, Kontext — und können maschinell ausgewertet werden. Strukturiertes Logging bedeutet: Logs als JSON, nicht als Freitext. Dann kann Elasticsearch, Datadog oder ein einfaches `grep` sie auswerten. **Niemals API-Keys oder personenbezogene Daten ins Log** — das ist keine Empfehlung, das ist Pflicht.

## Im Detail

**Loguru** ist 2026 der Standard für einfaches, modernes Logging in Python-Projekten:

```python
from loguru import logger

logger.info("Request erhalten", extra={"user_id": "u123", "model": "claude-opus-4-5"})
logger.warning("Rate limit approaching", extra={"remaining": 10})
logger.error("API-Call fehlgeschlagen", extra={"status_code": 429})
```

Loguru konfiguriert sich selbst — kein `BasicConfig`, kein Handler-Setup. Für JSON-Output:

```python
import sys
from loguru import logger

logger.remove()  # Standard-Handler entfernen
logger.add(sys.stdout, format="{time} {level} {message}", serialize=True)  # JSON
```

**Standard `logging`-Modul** — wenn du Bibliotheks-kompatiblen Code brauchst:

```python
import logging
import json

class JSONFormatter(logging.Formatter):
    def format(self, record: logging.LogRecord) -> str:
        return json.dumps({
            "time": self.formatTime(record),
            "level": record.levelname,
            "message": record.getMessage(),
        })

handler = logging.StreamHandler()
handler.setFormatter(JSONFormatter())
logging.getLogger().addHandler(handler)
logging.getLogger().setLevel(logging.INFO)
```

**Log-Levels sinnvoll einsetzen:**

| Level | Wann |
|-------|------|
| DEBUG | Entwicklung, sehr detailliert — in Production ausgeschaltet |
| INFO | Normaler Betrieb: Request empfangen, Response gesendet |
| WARNING | Ungewöhnlich, aber kein Fehler: Rate Limit nähert sich |
| ERROR | Fehler, der behandelt wurde: API-Call fehlgeschlagen, Retry gestartet |
| CRITICAL | System kann nicht weiterarbeiten: DB-Verbindung verloren |

**PII und API-Keys schützen:**

```python
# FALSCH — niemals so:
logger.info(f"API-Call mit Key {api_key}")
logger.info(f"User {user.email} hat folgendes eingegeben: {user_input}")

# RICHTIG:
logger.info("API-Call gestartet", extra={"key_prefix": api_key[:8] + "..."})
logger.info("User-Anfrage erhalten", extra={"user_id": user.id, "input_length": len(user_input)})
```

**FastAPI-Integration** — Middleware für Request-Logging:

```python
from fastapi import Request
import time

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    logger.info("Request", extra={
        "method": request.method,
        "path": request.url.path,
        "status": response.status_code,
        "duration_ms": round((time.time() - start) * 1000),
    })
    return response
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Loguru](https://github.com/Delgan/loguru) | Empfohlene Logging-Library |
| 📖 | [Python Logging HOWTO](https://docs.python.org/3/howto/logging.html) | Standard-Logging-Modul |
| 📖 | [Loguru — Dokumentation](https://loguru.readthedocs.io) | Vollständige API-Referenz |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum `print()` kein Ersatz für Logging in Production-Code ist?
- [ ] Weißt du, welche Log-Levels es gibt und wann du welches einsetzt?
- [ ] Kannst du drei Beispiele für PII nennen, die niemals ins Log dürfen?
- [ ] Verstehst du, wie du mit Loguru JSON-strukturierte Logs erzeugst?
