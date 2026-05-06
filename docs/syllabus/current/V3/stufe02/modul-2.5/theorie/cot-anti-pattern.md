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

"Lass uns Schritt für Schritt denken" war der große Prompting-Trick für klassische LLMs — ein einzelner Satz, der die Leistung bei Mathe und Logik dramatisch verbesserte. Bei Reasoning-Modellen ist es wie einem Marathonläufer zu sagen "Vergiss nicht, ein Bein vor das andere zu setzen" — redundant und störend. Das Modell macht das intern bereits, und deine Aufforderung kann es verwirren oder in einen suboptimalen Reasoning-Modus zwingen.

## Im Detail

### Die Geschichte von Chain-of-Thought

2022 veröffentlichten Forscher von Google das Paper "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (Wei et al.). Die Erkenntnis: Wenn man ein LLM bittet, seinen Denkprozess zu zeigen, verbessert sich die Accuracy bei Reasoning-Aufgaben drastisch — teilweise von 20% auf 80%.

"Let's think step by step" wurde zum magischen Satz. Und für klassische LLMs (GPT-4, Claude Sonnet ohne Thinking, Gemini Pro) funktioniert er weiterhin gut.

### Warum es bei Reasoning-Modellen schadet

Reasoning-Modelle wie o3, Claude mit Extended Thinking oder DeepSeek R1 haben Chain-of-Thought **internalisiert**. Sie erzeugen automatisch eine Kette von Reasoning-Tokens, bevor sie antworten. Wenn du jetzt zusätzlich "Denke Schritt für Schritt" promptest, passieren zwei Dinge:

1. **Redundanz:** Das Modell macht es intern bereits. Deine Aufforderung fügt nichts hinzu.
2. **Interferenz:** Das Modell versucht, seiner trainierten Reasoning-Strategie zu folgen **und gleichzeitig** deiner externen Aufforderung zu entsprechen. Diese zwei Signale können kollidieren. Das Modell produziert möglicherweise einen weniger effizienten Reasoning-Pfad, weil es versucht, deiner Vorgabe gerecht zu werden.

### Konkretes Beispiel

**Aufgabe:** "Wie viele Primzahlen gibt es zwischen 100 und 200?"

**Bei klassischem LLM (GPT-4o ohne Thinking):**

- Ohne CoT: "Es gibt 21 Primzahlen." (oft falsch)
- Mit "Denke Schritt für Schritt": Das Modell listet systematisch alle Zahlen auf, prüft Teilbarkeit — und kommt auf die korrekte Antwort (21).

**Bei Reasoning-Modell (o3, Claude Extended Thinking):**

- Ohne CoT: Das Modell durchläuft intern seinen Reasoning-Prozess und gibt die korrekte Antwort.
- Mit "Denke Schritt für Schritt": Das Modell erzeugt einen redundanten, verbose Output, der intern mit seinem eigenen Thinking konkurriert. Die Antwort ist in der Regel korrekt, aber langsamer und teurer — ohne Qualitätsgewinn.

### Die Faustregel

- **Klassisches LLM (ohne Reasoning/Thinking):** "Denke Schritt für Schritt" hilft bei Logik, Mathe und mehrstufigen Aufgaben.
- **Reasoning-Modell (o3, Claude Extended Thinking, DeepSeek R1):** Niemals "Schritt für Schritt" prompten. Formuliere nur die Aufgabe klar und lass das Modell seinen internen Reasoning-Prozess nutzen.

### Was stattdessen hilft bei Reasoning-Modellen

Statt den Denkprozess vorzugeben, hilft es, die **Aufgabe** klar zu formulieren:

- **Klares Ziel:** "Finde alle Primzahlen zwischen 100 und 200."
- **Constraints:** "Prüfe jede Zahl auf Teilbarkeit durch alle Primzahlen bis zur Quadratwurzel."
- **Erwartetes Format:** "Liste sie als kommaseparierte Zahlen auf."

Das sind Aufgaben-Spezifikationen, keine Denkweg-Vorgaben — und das ist der entscheidende Unterschied.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Erklärt, warum CoT-Prompts bei o-Modellen nicht nötig sind |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Internes Reasoning bei Claude |
| :book: | [Wei et al. — Chain-of-Thought Prompting (2022)](https://arxiv.org/abs/2201.11903) | Das Original-Paper |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum "Schritt für Schritt" bei Reasoning-Modellen kontraproduktiv sein kann?
- [ ] Weißt du, wann CoT-Prompting weiterhin sinnvoll ist (Hinweis: bei klassischen LLMs)?
- [ ] Kannst du den Unterschied zwischen Aufgaben-Spezifikation und Denkweg-Vorgabe erklären?
- [ ] Hast du selbst getestet, was bei deinem Reasoning-Modell passiert, wenn du "Schritt für Schritt" hinzufügst?
