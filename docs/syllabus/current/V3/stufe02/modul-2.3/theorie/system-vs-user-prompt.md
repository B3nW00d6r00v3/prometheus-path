---
title: "System-Prompt vs. User-Prompt"
module: "2.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# System-Prompt vs. User-Prompt

## Kernidee

Der System-Prompt ist wie die Job-Beschreibung eines Mitarbeiters — er setzt grundlegendes Verhalten, Persönlichkeit und Regeln. Der User-Prompt ist die konkrete Aufgabe, die du ihm gibst. Trennung ist wichtig: Der System-Prompt bleibt gleich über viele Anfragen, der User-Prompt ändert sich jedes Mal.

## Im Detail

Der System-Prompt setzt Kontext und Verhalten (z.B. "Du bist ein hilfreicher Assistent für deutsche Geschäfts-E-Mails"), der User-Prompt enthält die konkrete Aufgabe (z.B. "Schreibe eine Antwort auf folgende E-Mail..."). Trennung ist wichtig für Wartbarkeit von KI-Apps: Du kannst den System-Prompt einmal sorgfältig schreiben und dann tausende verschiedene User-Prompts dagegen laufen lassen. Bei Prompt Caching ist diese Trennung auch cost-relevant: Der stabile System-Prompt wird gecacht, die variablen User-Prompts nicht.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — System Prompts](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts) | Best Practices |
| :book: | [OpenAI — Chat Completions](https://platform.openai.com/docs/guides/text-generation) | Role-Parameter erklärt |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum System- und User-Prompt getrennt sein sollten?
- [ ] Hast du einen System-Prompt geschrieben, der ein spezifisches Verhalten zuverlässig erzeugt?
