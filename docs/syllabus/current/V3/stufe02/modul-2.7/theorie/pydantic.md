---
title: "Pydantic für Datenvalidierung"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Pydantic für Datenvalidierung

## Kernidee

Wenn du eine API aufrufst, bekommst du Daten zurück -- meistens als JSON. Pydantic ist wie ein Zollbeamter für deine Daten: es prueft, ob alles da ist, ob die Typen stimmen, und verwandelt rohes JSON in saubere Python-Objekte mit Autocomplete. Ohne Pydantic arbeitest du mit unsicheren Dicts, mit Pydantic mit sicheren Objekten.

## Im Detail

Pydantic ist die Industrie-Standard-Library für strukturierte Daten in Python. Du definierst ein Schema als Klasse:

```python
from pydantic import BaseModel

class LLMResponse(BaseModel):
    summary: str
    sentiment: float
    tags: list[str]
```

Wenn du Daten gegen dieses Schema validierst, passieren drei Dinge:
1. **Fehlende Felder** werden erkannt.
2. **Falsche Typen** werden entweder konvertiert oder als Fehler gemeldet.
3. **Du bekommst ein Objekt** mit Autocomplete statt ein Dict mit String-Keys.

Pydantic ist Grundlage für:
- **Tool Use / Function Calling** -- LLM-Tool-Definitionen sind Pydantic-Modelle.
- **FastAPI** -- das beliebteste Python-Web-Framework basiert auf Pydantic.
- **Structured Outputs** -- wenn du LLMs zwingst, ein Schema zu befolgen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Pydantic Docs](https://docs.pydantic.dev) | Offizielle Dokumentation |
| :book: | [Pydantic Tutorial](https://docs.pydantic.dev/latest/tutorial/) | Schritt-für-Schritt-Einfuehrung |

## Teste dein Verständnis

- [ ] Kannst du ein einfaches Pydantic-Modell definieren?
- [ ] Verstehst du, warum Pydantic für LLM-Anwendungen wichtig ist?
