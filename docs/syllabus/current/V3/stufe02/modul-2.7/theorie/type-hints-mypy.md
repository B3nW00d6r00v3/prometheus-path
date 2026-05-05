---
title: "Type Hints und mypy"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Type Hints und mypy

## Kernidee

Python laesst dich eine Variable "name" mal als String, mal als Zahl, mal als Liste verwenden -- das ist flexibel, aber fuehrt zu Fehlern, die du erst zur Laufzeit findest. Type Hints sind wie Etiketten auf Schubladen: sie sagen dir (und deinem Editor), was wo reingehoert. mypy prueft dann, ob du dich an deine eigenen Etiketten haeltst.

## Im Detail

Python ist dynamisch typisiert, aber Type Hints (`def foo(x: int) -> str`) verbessern:

- **Lesbarkeit** -- jeder sieht sofort, welche Typen eine Funktion erwartet und zurueckgibt.
- **Tooling-Support** -- IDEs wie VS Code und PyCharm nutzen Type Hints fuer Autocomplete und Fehlerhervorhebung.
- **Fruehe Fehlererkennung** -- `mypy` ist ein statischer Type-Checker, der Typfehler findet, bevor du den Code ausfuehrst.

Type Hints sind 2026 Pflicht fuer Production-Code. Die wichtigsten:

```python
def greet(name: str) -> str: ...
def process(items: list[str]) -> dict[str, int]: ...
def maybe_find(id: int) -> str | None: ...
```

Pydantic (naechstes Thema) baut auf Type Hints auf -- ohne Type-Hint-Verstaendnis kein Pydantic.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Python Docs — Type Hints](https://docs.python.org/3/library/typing.html) | Offizielle Dokumentation |
| :hammer_and_wrench: | [mypy](https://mypy.readthedocs.io) | Statischer Type-Checker |

## Teste dein Verstaendnis

- [ ] Kannst du eine Funktion mit Type Hints fuer Parameter und Rueckgabewert schreiben?
- [ ] Weisst du, was `mypy` tut und warum es nuetzlich ist?
