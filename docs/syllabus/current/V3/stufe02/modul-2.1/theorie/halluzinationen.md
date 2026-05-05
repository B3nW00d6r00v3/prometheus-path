---
title: "Halluzinationen — kein Bug, sondern Feature"
module: "2.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Halluzinationen — kein Bug, sondern Feature

## Kernidee

Weil ein LLM immer das "wahrscheinlichste nächste Wort" vorhersagt, erzeugt es auch dann überzeugend klingende Texte, wenn es keine echte Information hat. Es "erfindet" mit Überzeugung — wie ein Redner, der nie "Ich weiß es nicht" sagt. Mit Halluzinationen umzugehen ist Pflicht-Skill jedes KI-Profis.

## Im Detail

Weil LLMs Wahrscheinlichkeiten vorhersagen, generieren sie auch dann plausible Texte, wenn sie keine Information haben. Sie "erfinden" sicher klingende Antworten — erfundene Quellen, falsche Statistiken, nicht-existente Funktionen in Code. Das ist kein Softwarefehler, sondern eine direkte Konsequenz der Architektur: Das Modell ist darauf trainiert, immer eine Antwort zu produzieren, nicht "Ich weiß es nicht" zu sagen. Halluzinationen sind bei wenig dokumentierten Themen besonders häufig.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [IBM — What are AI hallucinations?](https://www.ibm.com/topics/ai-hallucinations) | Grundlagen-Erklärung |
| :book: | [Anthropic — Reducing Hallucinations](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations) | Praktische Gegenmaßnahmen |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Halluzinationen eine Konsequenz der LLM-Architektur sind?
- [ ] Kennst du mindestens drei Strategien, um Halluzinationen zu erkennen?
