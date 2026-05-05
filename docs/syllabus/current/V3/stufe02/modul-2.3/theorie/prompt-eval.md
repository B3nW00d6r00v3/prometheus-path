---
title: "Prompt-Eval von Anfang an"
module: "2.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Prompt-Eval von Anfang an: Wie weißt du, ob ein Prompt besser ist?

## Kernidee

"Fühlt sich besser an" ist kein Eval. Echtes Eval bedeutet: Du nimmst zwei Prompt-Versionen, lässt beide auf 5-10 identische Test-Inputs laufen, und vergleichst die Ergebnisse systematisch. Erst dann weißt du, ob Version 2 wirklich besser ist — oder ob du dich nur vom letzten guten Output hast blenden lassen.

## Im Detail

Bei einem einzelnen Prompt fühlt sich "besser" subjektiv an. Echtes Bewusstsein für Eval entsteht erst, wenn du **zwei Prompts auf 5-10 Test-Inputs vergleichst** und die Ergebnisse misst (manuell oder mit LLM-as-Judge). Das ist der erste Schritt zum Querschnitt Eval. Methoden für Stufe 2: (1) Manuelle Bewertung 1-5 pro Output, (2) Vergleich nebeneinander "welcher ist besser für diesen Input?", (3) LLM-as-Judge (ein anderes LLM bewertet die Outputs). Die vollständige Eval-Disziplin lernst du in Modul 5.0.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Warum Evals Pflicht sind |

## Teste dein Verständnis

- [ ] Hast du mindestens einen A/B-Vergleich zwischen zwei Prompt-Versionen durchgeführt?
- [ ] Kannst du erklären, warum ein einzelner guter Output kein Beweis für einen guten Prompt ist?
