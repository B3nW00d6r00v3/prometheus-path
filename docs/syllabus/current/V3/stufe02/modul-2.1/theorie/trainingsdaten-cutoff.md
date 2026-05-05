---
title: "Trainingsdaten und Knowledge Cutoff"
module: "2.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Trainingsdaten und Knowledge Cutoff

## Kernidee

Ein LLM ist wie ein Buch, das zu einem bestimmten Datum gedruckt wurde: Es "kennt" nur die Welt bis zum Zeitpunkt seiner Trainingsdaten. Was danach passiert ist, weiß es nicht — es sei denn, du gibst ihm diese Information im Prompt mit oder es hat Zugang zu Web-Suche.

## Im Detail

Ein LLM "kennt" nur die Daten, mit denen es trainiert wurde. Das Cutoff-Datum ist meist mehrere Monate vor dem Release des Modells. Was danach passierte, ist dem Modell unbekannt — außer es bekommt diese Information per Prompt oder Tool (z.B. Web-Suche, Dokument-Upload). Deshalb ist es kritisch, bei aktuellen Themen immer zu verifizieren: Liegt dieses Wissen im Trainings-Zeitraum des Modells?

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Simon Willison — LLM Cheatsheet](https://simonwillison.net/series/llms/) | Praxisnahe LLM-Übersicht |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum ein LLM bei Fragen zu aktuellen Ereignissen unzuverlässig sein kann?
- [ ] Weißt du, wie du herausfindest, was das Cutoff-Datum eines Modells ist?
