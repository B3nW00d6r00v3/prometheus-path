---
title: "Reasoning-Modelle als eigene Klasse"
module: "2.5"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Reasoning-Modelle als eigene Klasse

## Kernidee

Reasoning-Modelle sind wie ein Schachspieler, der Züge im Kopf durchspielt, bevor er zieht. Sie "denken" intern länger (mehr Compute bei der Inferenz) und sind dadurch bei mehrstufigen Problemen deutlich stärker. Der Preis: mehr Latenz und höhere Kosten. Sie sind nicht für jeden Task ideal — einfache Aufgaben erledigt ein Standard-LLM schneller und günstiger.

## Im Detail

OpenAI GPT-o3 / o4 / o5, Anthropic Claude mit Extended Thinking, DeepSeek R1, Google Gemini Thinking. Diese Modelle "denken" intern länger und sind stark bei mehrstufigen Problemen (Mathematik, Coding, komplexe Analysen). Cost und Latenz sind höher — nicht für jeden Task ideal. Wichtig: Reasoning-Modelle sind eine eigene Klasse mit eigenen Prompting-Patterns (siehe folgender Block).

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Offizielle Doku |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Claude-Variante |

## Teste dein Verständnis

- [ ] Kannst du erklären, was Reasoning-Modelle von klassischen LLMs unterscheidet?
- [ ] Weißt du, für welche Task-Typen Reasoning-Modelle sich lohnen?
