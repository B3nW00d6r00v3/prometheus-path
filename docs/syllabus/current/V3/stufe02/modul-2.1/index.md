---
title: "Modul 2.1: LLM Foundations LIGHT"
module: "2.1"
type: index
fast_track: true
effort: "1-2h"
---

# Modul 2.1: LLM Foundations LIGHT

Bevor du LLMs nutzt, solltest du in 60-90 Minuten das Grundprinzip verstehen — was ein LLM eigentlich tut, woher es kommt, wo seine Grenzen liegen. Keine Mathematik, keine Architektur-Tiefe (das kommt in 2.5 und Stufe 7). Nur die Konzepte, die du brauchst, um ab Modul 2.2 mit den Tools verantwortungsvoll arbeiten zu können.

**Aufwand:** 1-2h  
**Voraussetzungen:** Keine

## Lernziel

Du kannst in eigenen Worten erklären: was ein LLM tut, was Tokens und Context Window sind, was "Trainingsdaten" und "Knowledge Cutoff" bedeuten, warum LLMs halluzinieren.

## Theorie-Übersicht

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [Was ein LLM grundsätzlich tut](theorie/was-ein-llm-tut.md) | :material-check: | 10min |
| 2 | [Tokens, nicht Wörter](theorie/tokens.md) | :material-check: | 10min |
| 3 | [Context Window](theorie/context-window.md) | :material-check: | 10min |
| 4 | [Trainingsdaten und Knowledge Cutoff](theorie/trainingsdaten-cutoff.md) | :material-check: | 10min |
| 5 | [Halluzinationen](theorie/halluzinationen.md) | :material-check: | 10min |
| 6 | [Stochastik: Temperature und Top-p](theorie/stochastik.md) | :material-check: | 10min |
| 7 | [Frontier vs. Open-Source 2026](theorie/frontier-vs-opensource.md) | :material-minus: | 10min |

## Praxis: Hauptprojekt — Token & Halluzinations-Experiment

- Mit dem [OpenAI Tokenizer](https://platform.openai.com/tokenizer) eigene Texte in Tokens zerlegen (z.B. eine E-Mail, ein deutscher Fachartikel) — wieviele Tokens für was? Vergleichen mit englischer Übersetzung — meist 30-50% mehr Tokens für Deutsch.
- Ein lokales LLM (Ollama, `llama3.2:3b`) mit drei Test-Prompts konfrontieren, wo es halluzinieren *muss* (z.B. "Wer war der Bürgermeister von Frankfurt am 1. April 2026?", oder "Erfinde mir eine wissenschaftliche Studie zu Thema X mit Quellenangabe"). Ergebnisse dokumentieren.
- Kurzes Reflektion-Doku im Portfolio: was ist passiert, wann halluziniert es offensichtlich, wann subtil?

## Mehrwert-Mini-Projekt

**Token-Counter-Bookmarklet** oder **Browser-Lesezeichen für Tiktokenizer** — sodass du bei jedem Prompt schnell die Token-Anzahl prüfen kannst, bevor du Cost-relevante API-Aufrufe machst.

## Open-Source-Pfad

Komplett mit Ollama-Modellen arbeiten — vergleichen, wie verschiedene Modellgrößen (3B, 7B, 13B, 70B falls Hardware reicht) bei Halluzinations-Prompts unterschiedlich performant sind. Größere Modelle halluzinieren weniger, aber auch nicht null.

## Outcome-Check

- [ ] Kannst du in 2-3 Sätzen erklären, was ein LLM tut?
- [ ] Hast du Tokens für eigene Texte gezählt und Deutsch vs. Englisch verglichen?
- [ ] Hast du mindestens 3 Halluzinations-Beispiele dokumentiert?
- [ ] Reflektion-Doku im Portfolio (`stufe-2_grundlagen/2-1-llm-foundations-light/`)?
