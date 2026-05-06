---
title: "Logging statt print()"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Logging statt print()

## Kernidee

`print("hier bin ich")` ist das Debugging-Äquivalent von Post-its: funktioniert auf dem Schreibtisch, aber nicht in der Fabrik. Logging gibt dir Levels (DEBUG, INFO, WARNING, ERROR), Zeitstempel und die Möglichkeit, in Dateien zu schreiben statt nur auf den Bildschirm. In Production ist `print()` verboten, `logging` ist Pflicht.

## Im Detail

### Warum print() nicht reicht

```python
# Das typische Anfänger-Muster
print("Starting...")
print(f"Processing {len(items)} items")
print("API call successful")
print(f"Result: {result}")
print("ERROR: Something went wrong!")
print("Done!")
```

Probleme:

- **Kein Level:** Du siehst nicht, ob es ein Fehler oder eine Info ist
- **Kein Zeitstempel:** Wann ist der Fehler passiert?
- **Kein Kontext:** Welche Funktion, welche Datei?
- **Nicht abschaltbar:** In Production willst du keine Debug-Ausgaben
- **Nur stdout:** Logs in Dateien schreiben? Nicht mit print()

### Pythons eingebautes logging-Modul

```python
import logging

# Grundkonfiguration
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger(__name__)

# Verschiedene Levels nutzen
logger.debug("Variable x = %s", x)           # Nur in Development sichtbar
logger.info("Verarbeite %d Artikel", count)   # Normale Operationen
logger.warning("Rate Limit bei 80%%")          # Potentielle Probleme
logger.error("API-Call fehlgeschlagen: %s", e) # Fehler, die behandelt werden
logger.critical("Datenbank nicht erreichbar")  # Schwere Fehler
```

### Die fünf Logging-Levels

| Level | Wert | Wann verwenden |
|-------|------|----------------|
| **DEBUG** | 10 | Detaillierte Debugging-Infos (Variablenwerte, Zwischenschritte) |
| **INFO** | 20 | Normale Operationen ("Verarbeite 42 Artikel", "Server gestartet") |
| **WARNING** | 30 | Potentielle Probleme ("Rate Limit nähert sich", "Fallback aktiv") |
| **ERROR** | 40 | Fehler, die behandelt werden ("API-Timeout", "Ungültige Response") |
| **CRITICAL** | 50 | Schwere Fehler, App kann nicht weiterlaufen ("DB down") |

**Faustregel:** Development auf DEBUG, Production auf INFO oder WARNING.

### Praxis: Logging in einer LLM-App

```python
import logging
import time
from anthropic import Anthropic, APIError, RateLimitError

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger = logging.getLogger("llm_app")

client = Anthropic()

def call_llm(prompt: str, model: str = "claude-haiku-4-5-20250514") -> str | None:
    logger.info("LLM-Call gestartet: model=%s, prompt_length=%d", model, len(prompt))
    start = time.time()

    try:
        response = client.messages.create(
            model=model,
            max_tokens=256,
            messages=[{"role": "user", "content": prompt}],
        )
        duration = time.time() - start
        tokens = response.usage.output_tokens
        logger.info(
            "LLM-Call erfolgreich: %d Tokens in %.2fs",
            tokens, duration,
        )
        return response.content[0].text

    except RateLimitError:
        logger.warning("Rate Limit erreicht -- warte 60s")
        time.sleep(60)
        return call_llm(prompt, model)  # Retry

    except APIError as e:
        logger.error("API-Fehler: %s (Status: %d)", e.message, e.status_code)
        return None

    except Exception as e:
        logger.critical("Unerwarteter Fehler: %s", e, exc_info=True)
        return None
```

**Output:**

```
2026-05-06 10:30:15 [INFO] LLM-Call gestartet: model=claude-haiku-4-5-20250514, prompt_length=142
2026-05-06 10:30:17 [INFO] LLM-Call erfolgreich: 89 Tokens in 1.84s
```

### Loguru -- Die moderne Alternative

[Loguru](https://github.com/Delgan/loguru) ist einfacher als das Standard-Logging: weniger Boilerplate, schönere Formatierung, sinnvolle Defaults.

```python
from loguru import logger

# Kein Setup nötig -- funktioniert sofort
logger.info("Verarbeite {} Artikel", 42)
logger.warning("Rate Limit bei {}%", 80)
logger.error("API-Call fehlgeschlagen")

# In Datei loggen -- eine Zeile
logger.add("app.log", rotation="10 MB", retention="7 days")

# Structured Logging (JSON)
logger.add("app.json", serialize=True)

# Dekorator für automatisches Exception-Logging
@logger.catch
def risky_function():
    return 1 / 0  # Wird automatisch als ERROR geloggt
```

### structlog -- Für Production-Systeme

Wenn du JSON-Logs für Production brauchst (z.B. für Datadog, Grafana oder ELK-Stack):

```python
import structlog

logger = structlog.get_logger()

logger.info(
    "llm_call_complete",
    model="claude-haiku-4-5-20250514",
    tokens=89,
    duration_ms=1840,
    prompt_length=142,
)

# Output als JSON:
# {"event": "llm_call_complete", "model": "claude-haiku-4-5-20250514",
#  "tokens": 89, "duration_ms": 1840, "prompt_length": 142,
#  "timestamp": "2026-05-06T10:30:17Z"}
```

### Welches Logging-Tool wann?

| Tool | Wann verwenden |
|------|---------------|
| **logging** (Standard) | Für Libraries und wenn keine Extra-Dependencies gewünscht |
| **Loguru** | Für persönliche Projekte und CLI-Tools -- einfachster Einstieg |
| **structlog** | Für Production-Services, die JSON-Logs an Monitoring-Tools senden |

Für Stufe 2 empfohlen: **Loguru** für den Anfang, später bei Bedarf zu structlog wechseln.

### Was du loggen solltest

In LLM-Anwendungen sind diese Informationen Gold wert:

- **Modell und Parameter:** Welches Modell, welche Temperature, welche Max-Tokens?
- **Token-Verbrauch:** Input-Tokens, Output-Tokens, Kosten pro Call
- **Latenz:** Wie lange dauert jeder API-Call?
- **Fehler:** Welche Fehler treten auf? Rate Limits? Timeouts?
- **Prompt-Länge:** Wie lang sind deine Prompts? Nähern sie sich dem Limit?

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Python Logging HOWTO](https://docs.python.org/3/howto/logging.html) | Offizielle Anleitung |
| :hammer_and_wrench: | [Loguru](https://github.com/Delgan/loguru) | Einfacher als Standard-Logging |
| :hammer_and_wrench: | [structlog](https://www.structlog.org) | Structured Logging für Production |

## Teste dein Verständnis

- [ ] Ersetze alle `print()`-Statements in einem deiner Skripte durch `logging` oder `loguru` -- mit passenden Levels.
- [ ] Erkläre den Unterschied zwischen INFO und WARNING -- wann verwendest du welches?
- [ ] Warum ist es sinnvoll, Token-Verbrauch und Latenz in LLM-Apps zu loggen?
