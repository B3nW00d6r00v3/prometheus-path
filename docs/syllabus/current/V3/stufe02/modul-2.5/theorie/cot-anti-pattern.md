---
title: "Chain-of-Thought-Anti-Pattern"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Chain-of-Thought-Anti-Pattern

## Kernidee

"Lass uns Schritt für Schritt denken" war der grosse Prompting-Trick für klassische LLMs. Bei Reasoning-Modellen ist es wie einem Marathonlaeufer zu sagen "Vergiss nicht, ein Bein vor das andere zu setzen" -- redundant und stoerend. Das Modell macht das intern bereits, und deine Aufforderung kann es verwirren.

## Im Detail

Die klassische "Lass uns Schritt für Schritt denken"-Aufforderung ist bei Reasoning-Modellen redundant oder schaedlich. Sie machen das intern. Wenn du es trotzdem forderst, verwirrst du das Modell und kannst die Qualität verschlechtern. Das Reasoning-Modell hat eigene, trainierte Strategien für schrittweises Denken. Dein Prompt überlagert diese mit einer generischen Anweisung, die weniger effektiv ist als der interne Reasoning-Prozess.

**Faustregel:** Bei Reasoning-Modellen niemals "Schritt für Schritt" prompten.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Erklärt, warum CoT-Prompts bei o-Modellen nicht nötig sind |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Internes Reasoning bei Claude |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum "Schritt für Schritt" bei Reasoning-Modellen kontraproduktiv sein kann?
- [ ] Weißt du, wann CoT-Prompting weiterhin sinnvoll ist (Hinweis: bei klassischen LLMs)?
