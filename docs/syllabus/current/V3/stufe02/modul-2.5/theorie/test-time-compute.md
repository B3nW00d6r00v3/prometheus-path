---
title: "Test-Time-Compute als Skalierungs-Achse"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Test-Time-Compute als Skalierungs-Achse

## Kernidee

Bisher galt: willst du ein besseres Modell, trainiere laenger mit mehr Daten und mehr GPUs. Das ist Training-Compute. Seit 2024 gibt es eine zweite Achse: lass das Modell bei der Antwort laenger nachdenken (mehr Inferenz-Compute). Wie ein Schachspieler, der mehr Zuege vorausberechnet -- nicht schlauer trainiert, sondern laenger ueberlegt. Das ist Test-Time-Compute.

## Im Detail

Bisher (2018-2024): mehr Training-Compute = bessere Modelle. Dieses Scaling Law (Chinchilla, Kaplan et al.) war die dominante Achse. Neu seit OpenAI o1 (September 2024): mehr **Inferenz-Compute** (Thinking-Tokens) = bessere Antworten bei harten Tasks. Das ist eine eigene Skalierungs-Achse neben Training-Compute.

Die Implikation ist fundamental: du kannst dasselbe Modell "schlauer" machen, indem du es laenger denken laesst -- ohne Retraining. Das erklaert, warum Effort-Parameter (wie viel Thinking erlaubst du?) eine zentrale API-Konvention geworden sind.

**Pflichtkonzept fuer 2026er Modell-Verstaendnis.** Vertiefung in Modul 7.5.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Learning to Reason with LLMs (Sept 2024)](https://openai.com/index/learning-to-reason-with-llms/) | Der Ursprungs-Post zu Test-Time-Compute |

## Teste dein Verstaendnis

- [ ] Kannst du den Unterschied zwischen Training-Compute und Test-Time-Compute erklaeren?
- [ ] Verstehst du, warum Test-Time-Compute eine eigene Skalierungs-Achse ist?
