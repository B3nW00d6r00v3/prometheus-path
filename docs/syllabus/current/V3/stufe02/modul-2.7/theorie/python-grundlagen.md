---
title: "Python-Grundlagen kompakt"
module: "2.7"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Python-Grundlagen kompakt

## Kernidee

Python ist die Lingua Franca der KI-Welt -- nicht weil es die schnellste oder eleganteste Sprache ist, sondern weil jede KI-Library, jedes SDK, jedes Tutorial Python spricht. Du brauchst keine Python-Meisterschaft, aber du musst die Basics sicher beherrschen: Variablen, Listen, Dicts, Funktionen, Klassen-Basics. Der Rest kommt durchs Bauen.

## Im Detail

Die Python-Grundlagen, die du für KI-Arbeit brauchst:

- **Variablen und Datentypen** -- `str`, `int`, `float`, `bool`, `None`. Python ist dynamisch typisiert (eine Variable kann ihren Typ ändern), aber mit Type Hints kannst du Typen dokumentieren.
- **Listen und Dicts** -- Listen (`[1, 2, 3]`) für geordnete Sammlungen, Dicts (`{"key": "value"}`) für Schluessel-Wert-Paare. Beide sind fundamental für Datenverarbeitung und API-Responses.
- **Schleifen und Comprehensions** -- `for`-Schleifen für Iteration, List Comprehensions (`[x*2 for x in range(10)]`) für kompakten Code.
- **Funktionen** -- `def foo(x: int) -> str:` -- wiederverwendbare Code-Bloecke. Parameter, Return-Werte, Default-Argumente.
- **Klassen-Basics** -- `class MyClass:` -- nicht alles muss OOP sein, aber du musst Klassen lesen und einfache definieren können (Pydantic-Modelle sind Klassen).

Wer komplett neu ist: 20-30h mit dem Helsinki MOOC oder Real Python einplanen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Helsinki Mooc.fi — Python Programming MOOC](https://programming-25.mooc.fi) | Kostenlos, hochqualitativ |
| :book: | [Real Python — Python Basics](https://realpython.com/learning-paths/python-basics/) | Gut strukturierte Lernpfade |

## Teste dein Verständnis

- [ ] Kannst du eine Funktion mit Type Hints schreiben?
- [ ] Kannst du ein Dict in eine Liste von Werten umwandeln?
