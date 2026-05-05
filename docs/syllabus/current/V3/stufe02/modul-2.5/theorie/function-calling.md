---
title: "Function Calling / Tool Use als Standard"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Function Calling / Tool Use als Standard

## Kernidee

Moderne LLMs können nicht nur Text generieren — sie können auch "Werkzeuge benutzen". Du definierst Funktionen (z.B. "suche im Web", "frage die Datenbank"), und das Modell entscheidet selbst, wann es welche Funktion aufrufen will. Dein Code führt dann die Funktion aus und gibt das Ergebnis zurück. Das ist die Brücke zwischen "Chatbot" und "autonomer Agent".

## Im Detail

Moderne LLMs können nicht nur Text generieren, sondern strukturierte "Tool Calls" produzieren, die dein Code dann ausführt (z.B. Datenbank-Anfrage, Web-Suche, API-Call). Du definierst die verfügbaren Tools mit Schema (Name, Parameter, Beschreibung), das Modell entscheidet eigenständig, welches Tool es nutzen will, und produziert einen strukturierten Aufruf. Dein Code führt den Aufruf aus und gibt das Ergebnis ans Modell zurück. Pflicht-Konzept für jeden, der Anwendungen baut.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Claude Tool Use |
| :book: | [OpenAI — Function Calling](https://platform.openai.com/docs/guides/function-calling) | OpenAI-Variante |

## Teste dein Verständnis

- [ ] Kannst du erklären, wie der Function-Calling-Workflow abläuft (definieren → Modell ruft auf → Code führt aus → Ergebnis zurück)?
- [ ] Verstehst du, warum Function Calling die Basis für Agenten-Systeme ist?
