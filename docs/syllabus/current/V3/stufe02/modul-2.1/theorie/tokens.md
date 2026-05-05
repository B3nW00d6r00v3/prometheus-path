---
title: "Tokens, nicht Wörter"
module: "2.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Tokens, nicht Wörter

## Kernidee

LLMs lesen nicht in ganzen Wörtern, sondern in "Tokens" — Wort-Stücken. "Hallo" ist ein Token, aber "Außergewöhnlichkeit" wird in mehrere Teile zerlegt. Das ist wichtig, weil du pro Token bezahlst und das Context Window in Tokens gemessen wird — nicht in Wörtern.

## Im Detail

LLMs arbeiten mit Tokens (Sub-Wort-Einheiten). "Hallo Welt" ist 2 Tokens, "Außergewöhnlichkeit" eventuell 4. Deutsche Texte brauchen typischerweise 30-50% mehr Tokens als englische Texte gleichen Inhalts, weil die Tokenizer primär auf Englisch trainiert wurden. Tokens sind wichtig für zwei Dinge: Cost (du bezahlst pro Token) und Context Window (die maximale Anzahl Tokens, die ein Modell gleichzeitig verarbeiten kann).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [OpenAI Tokenizer (interaktiv)](https://platform.openai.com/tokenizer) | Texte live in Tokens zerlegen |
| :hammer_and_wrench: | [Tiktokenizer (für mehrere Modelle)](https://tiktokenizer.vercel.app) | Vergleich verschiedener Tokenizer |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum deutsche Texte mehr Tokens brauchen als englische?
- [ ] Weißt du, warum Token-Zählung für Cost und Context Window relevant ist?
