---
title: "Was ein LLM grundsätzlich tut: Wahrscheinlichkeits-Vorhersage"
module: "2.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Was ein LLM grundsätzlich tut: Wahrscheinlichkeits-Vorhersage

## Kernidee

Stell dir eine extrem gute Autovervollständigung vor: Du tippst den Anfang eines Satzes, und das System sagt das wahrscheinlichste nächste Wort vorher. Ein LLM macht genau das — nur mit Milliarden Parametern und über ganze Absätze hinweg. Es "versteht" nichts, es berechnet Wahrscheinlichkeiten.

## Im Detail

Gegeben einen Text, sagt das Modell das wahrscheinlichste nächste Token vorher. Ein LLM ist ein stochastisches Werkzeug, kein deterministischer Algorithmus. Es wurde auf riesigen Textmengen trainiert, um statistische Muster zu lernen — welche Wörter typischerweise auf welche folgen, in welchem Kontext. Daraus ergibt sich emergentes Verhalten, das wie "Verstehen" aussieht, aber fundamental eine Wahrscheinlichkeitsberechnung ist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :movie_camera: | [3Blue1Brown — Was ist ein GPT? (Video, 25 Min)](https://www.youtube.com/watch?v=wjZofJX0v4M) | Visuelle Erklärung der Grundmechanik |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum ein LLM auf dieselbe Frage unterschiedliche Antworten geben kann?
- [ ] Verstehst du den Unterschied zwischen "Wahrscheinlichkeits-Vorhersage" und "Verstehen"?
