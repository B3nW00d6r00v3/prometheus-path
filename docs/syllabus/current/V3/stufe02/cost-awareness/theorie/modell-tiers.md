---
title: "Modell-Tiers haben Faktor-10-Spreads"
module: "cost"
type: theorie
fast_track: true
effort: "8min"
stability: green
expires: null
---

# Modell-Tiers haben Faktor-10-Spreads

## Kernidee

Innerhalb eines Anbieters gibt es günstige und teure Modelle — der Preisunterschied ist oft Faktor 10-20. Das günstigste Modell von Anthropic kostet einen Bruchteil von Opus. Erste Cost-Heuristik: Probiere Tasks immer zuerst mit dem günstigeren Modell und upgrade nur, wenn die Qualität nicht reicht.

## Im Detail

Innerhalb eines Anbieters kostet das günstigste Modell oft 1/10 bis 1/20 des Frontier-Modells. Beispiel: Claude Haiku ist deutlich günstiger als Opus, GPT-5-mini ist deutlich günstiger als GPT-5.5. **Erste Cost-Heuristik: probiere Tasks immer zuerst mit dem günstigeren Modell** und upgrade nur, wenn die Qualität nicht reicht. Für viele Standard-Aufgaben (Zusammenfassungen, einfache Übersetzungen, Klassifikation) reicht ein günstiges Modell völlig aus. Die teure Frontier-Klasse brauchst du für komplexes Reasoning, kreative Aufgaben oder lange Dokumente.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [LLM Stats](https://llm-stats.com) | Preisvergleich aller Modelle |
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Tier-Überblick Haiku/Sonnet/Opus |

## Teste dein Verständnis

- [ ] Kannst du die "Cheap-First"-Heuristik erklären?
- [ ] Weißt du, für welche Aufgaben ein günstiges Modell ausreicht und wann du upgraden solltest?
