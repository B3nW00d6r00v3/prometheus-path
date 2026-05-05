---
title: "Inferenz-Pattern auf hoher Ebene"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Inferenz-Pattern auf hoher Ebene

## Kernidee

Reasoning-Modelle haben verschiedene Strategien, wie sie "denken". Manche denken einfach laenger (Chain-of-Thought intern), manche probieren mehrere Wege und waehlen den besten (Self-Consistency), manche durchsuchen einen Baum von Moeglichkeiten (Tree-Search). Claude Opus 4.7 hat eine Sonderform: es entscheidet selbst, ob und wie viel Denken noetig ist.

## Im Detail

Die wichtigsten Inferenz-Patterns bei Reasoning-Modellen:

- **Chain-of-Thought intern:** Das Modell fuehrt CoT automatisch aus, ohne dass du es prompten musst. Die Thinking-Tokens sind der sichtbare (oder unsichtbare) Denkprozess.
- **Self-Consistency-Sampling:** Mehrere Reasoning-Pfade werden generiert, das Ergebnis ist das Mehrheits-Votum. Erhoeht Accuracy auf Kosten von Compute.
- **Best-of-N mit Verifier:** N Antworten generieren, ein separates Modell (Verifier) waehlt die beste aus.
- **Tree-Search-Inference:** Systematisches Durchsuchen eines Baums von Reasoning-Schritten, aehnlich wie Schach-Engines.
- **Adaptive Thinking (Claude Opus 4.7):** Sonderform -- das Modell entscheidet pro Anfrage, ob und wieviel Reasoning sinnvoll ist. Bei einfachen Fragen denkt es kurz, bei schweren ausfuehrlich.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Inferenz bei o-Modellen |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Adaptive Thinking bei Claude |

## Teste dein Verstaendnis

- [ ] Kannst du drei verschiedene Inferenz-Patterns nennen und kurz beschreiben?
- [ ] Was ist das Besondere an Adaptive Thinking bei Claude Opus 4.7?
