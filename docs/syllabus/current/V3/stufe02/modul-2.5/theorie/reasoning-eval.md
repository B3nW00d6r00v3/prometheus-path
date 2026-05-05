---
title: "Eval-Implikation bei Reasoning"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Eval-Implikation bei Reasoning

## Kernidee

Bei einem klassischen LLM bewertest du nur die Antwort. Bei einem Reasoning-Modell gibt es eine zweite Ebene: den Denkprozess selbst. Stell dir vor, ein Schueler bekommt die richtige Antwort -- hat er den Loesungsweg verstanden, oder geraten? Eval auf Trajectory-Ebene (was wurde gedacht, nicht nur was wurde gesagt) wird bei Reasoning-Modellen wichtig.

## Im Detail

Reasoning-Modelle haben sichtbare oder unsichtbare Reasoning-Chains. Das eroeffnet eine neue Eval-Dimension: nicht nur "ist die Antwort korrekt?", sondern auch "ist der Denkprozess korrekt?" Bei Claude Extended Thinking sind die Thinking-Tokens sichtbar, bei manchen OpenAI o-Modellen nur teilweise.

Eval auf Trajectory-Ebene wird in Stufe 6.2 wichtig -- dort lernst du, wie du den Reasoning-Prozess selbst evaluierst. Hier reicht das Bewusstsein: Reasoning-Modelle brauchen andere Eval-Strategien als klassische LLMs.

Verbindung zum Querschnitt Eval: die erste Beruehrung mit Eval war in Modul 2.3 (A/B-Vergleiche), die volle Eval-Disziplin kommt in Modul 5.0 und 6.2.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Grundlagen-Artikel zu Evals |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Sichtbare Thinking-Tokens bei Claude |

## Teste dein Verstaendnis

- [ ] Kannst du erklaeren, warum "richtige Antwort" bei Reasoning-Modellen nicht ausreicht fuer Eval?
- [ ] Verstehst du den Unterschied zwischen Output-Eval und Trajectory-Eval?
