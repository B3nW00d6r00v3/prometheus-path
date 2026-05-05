---
title: "Chain-of-Thought (CoT) und Reasoning"
module: "2.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Chain-of-Thought (CoT) und Reasoning

## Kernidee

"Denke Schritt für Schritt" klingt trivial, verbessert aber bei klassischen LLMs die Ergebnisse bei Reasoning-Aufgaben dramatisch. Das Modell macht weniger Fehler, wenn es seine Gedanken "ausspricht". Achtung: Bei modernen Reasoning-Modellen (Claude Extended Thinking, GPT-o) ist CoT-Prompting oft kontraproduktiv — die machen das intern bereits.

## Im Detail

"Denke Schritt für Schritt" und ähnliche Hinweise verbessern bei Reasoning-Aufgaben bei klassischen LLMs deutlich die Qualität. Das Modell "zeigt seine Arbeit", was zu weniger logischen Fehlern führt. Bei modernen Reasoning-Modellen (Claude mit Extended Thinking, GPT-o-Modelle, DeepSeek R1) übernimmt das Modell das selbst und CoT-Prompts sind teilweise kontraproduktiv — Vertiefung in Modul 2.5. Faustregel: Bei klassischen Modellen (Claude Sonnet ohne Thinking, GPT-5 Standard) hilft CoT; bei Reasoning-Modellen schadet es oder ist redundant.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Promptingguide.ai — CoT](https://www.promptingguide.ai/techniques/cot) | Grundlagen und Beispiele |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Wann CoT automatisch passiert |

## Teste dein Verständnis

- [ ] Kannst du erklären, wann CoT-Prompting hilft und wann es schadet?
- [ ] Weißt du, welche Modelle "eingebautes" Reasoning haben?
