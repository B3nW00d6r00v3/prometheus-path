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

`print("hier bin ich")` ist das Debugging-Equivalent von Post-its: funktioniert auf dem Schreibtisch, aber nicht in der Fabrik. Logging gibt dir Levels (DEBUG, INFO, WARNING, ERROR), Zeitstempel, und die Moeglichkeit, in Dateien zu schreiben statt nur auf den Bildschirm. In Production ist `print()` verboten, `logging` ist Pflicht.

## Im Detail

`print()` ist zum Debugging okay, in Production verwendet man `logging` mit Levels, Formattern und optional strukturiertem JSON-Output.

**Pythons eingebautes `logging`-Modul:**

```python
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info("Processing started")
logger.warning("Rate limit approaching")
logger.error("API call failed", exc_info=True)
```

**Levels:** DEBUG < INFO < WARNING < ERROR < CRITICAL. Im Development auf DEBUG, in Production auf INFO oder WARNING.

**Moderne Alternative: [Loguru](https://github.com/Delgan/loguru)** -- einfacher als das Standard-Logging, mit schoener Formatierung und weniger Boilerplate:

```python
from loguru import logger
logger.info("Processing {count} items", count=42)
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Python Logging HOWTO](https://docs.python.org/3/howto/logging.html) | Offizielle Anleitung |
| :hammer_and_wrench: | [Loguru — Modern Logging](https://github.com/Delgan/loguru) | Einfacher als Standard-Logging |

## Teste dein Verstaendnis

- [ ] Kennst du die fuenf Logging-Levels und wann du welches verwendest?
- [ ] Kannst du erklaeren, warum `print()` in Production problematisch ist?
