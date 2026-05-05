---
title: "Welches Modell für welchen Task?"
module: "2.5"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Welches Modell für welchen Task?

## Kernidee

Es gibt keine universelle Antwort, aber klare Heuristiken: Schnelle einfache Tasks brauchen ein kleines, günstiges Modell. Komplexes Reasoning braucht ein Frontier-Modell. Lange Dokumente brauchen großen Context. Privatsphäre-kritische Daten brauchen ein lokales Modell. Wie bei Werkzeug: Du nimmst nicht den Vorschlaghammer für einen Nagel.

## Im Detail

Keine universelle Antwort, aber Heuristiken:

- Schnelle einfache Tasks → Haiku, Gemini Flash, Llama 3.2 lokal
- Standard-Coding-Aufgaben → Sonnet 4.6, GPT-5, Qwen 3 Coder OSS
- Komplexes Reasoning → Opus 4.7, GPT-o-Serie, DeepSeek R1
- Lange Dokumente → Gemini 3.1 (2M Context)
- Privatsphäre-kritisch → lokale OSS-Modelle via Ollama
- Deutsche Sprache → Mistral 3, Gemma 4, Claude (alle gut)

Die richtige Modell-Wahl ist eine der wichtigsten Entscheidungen in jedem KI-Projekt und beeinflusst Cost, Qualität, Latenz und Compliance.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [LLM Stats](https://llm-stats.com) | Preise + Benchmarks im Vergleich |
| :hammer_and_wrench: | [LMSYS Chatbot Arena](https://lmarena.ai) | Praxis-basierter Vergleich |

## Teste dein Verständnis

- [ ] Hast du deinen eigenen Modell-Wahl-Cheat-Sheet erstellt?
- [ ] Kannst du für jeden deiner drei häufigsten Use-Cases das passende Modell benennen?
