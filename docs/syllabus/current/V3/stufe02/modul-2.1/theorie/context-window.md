---
title: "Context Window: das Kurzzeitgedächtnis"
module: "2.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Context Window: das Kurzzeitgedächtnis

## Kernidee

Das Context Window ist wie ein Schreibtisch mit begrenzter Fläche: Alles was draufliegt (dein Prompt + die bisherige Konversation + die Antwort), kann das Modell "sehen". Was nicht draufpasst, existiert für diesen Aufruf nicht. Je größer der Schreibtisch, desto mehr Kontext kann das Modell gleichzeitig berücksichtigen.

## Im Detail

Das Context Window ist die maximale Token-Anzahl, die ein Modell pro Anfrage berücksichtigt (Input + Output zusammen). Stand 2026: Claude Opus 4.7 hat 1M Tokens, Gemini 3.1 Ultra 2M, kleinere Modelle typischerweise 32K-128K. Was außerhalb des Context Windows liegt, "weiß" das Modell für diesen Aufruf nicht. Es gibt kein persistentes Gedächtnis zwischen Aufrufen — jeder API-Call startet bei Null, mit dem was du ihm mitgibst.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Context Windows Explained](https://docs.claude.com/en/docs/build-with-claude/context-windows) | Offizielle Dokumentation |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum ein LLM in einem langen Chat irgendwann "vergisst", was am Anfang gesagt wurde?
- [ ] Weißt du, wie groß das Context Window der gängigen Modelle 2026 ist?
