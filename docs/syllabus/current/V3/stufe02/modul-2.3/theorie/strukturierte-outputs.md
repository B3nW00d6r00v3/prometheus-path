---
title: "Strukturierte Outputs: JSON, XML, Markdown"
module: "2.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Strukturierte Outputs: JSON, XML, Markdown

## Kernidee

Wenn du den Output eines LLMs programmatisch weiterverarbeiten willst (z.B. in einer App oder Pipeline), brauchst du strukturierte Antworten statt Fließtext. Moderne APIs können JSON-Schema-Validität erzwingen — das Modell antwortet garantiert im richtigen Format. Das ist die Brücke zwischen "Chatbot" und "Baustein in Software".

## Im Detail

Wenn du den Output programmatisch weiterverarbeiten willst, fordere strukturierte Form an (JSON, XML, Markdown-Tabellen). Modern: "Structured Outputs" als API-Feature (OpenAI, Anthropic) erzwingen Schema-Validität — das Modell kann gar nicht anders als im definierten Schema zu antworten. Das ist deutlich zuverlässiger als "Bitte antworte in JSON" im Prompt-Text. Für einfache Fälle reicht Prompt-basierte Formatierung; für Production-Code nutze das API-Feature.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) | Schema-erzwungene Antworten |
| :book: | [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Strukturierte Outputs via Tools |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum API-enforced Structured Outputs besser sind als Prompt-basierte?
- [ ] Hast du einen Prompt geschrieben, der konsistent JSON produziert?
