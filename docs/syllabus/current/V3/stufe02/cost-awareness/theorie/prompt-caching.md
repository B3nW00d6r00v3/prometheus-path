---
title: "Prompt Caching halbiert Cost bei wiederholten Prefixen"
module: "cost"
type: theorie
fast_track: true
effort: "8min"
stability: green
expires: null
---

# Prompt Caching halbiert Cost bei wiederholten Prefixen

## Kernidee

Wenn du denselben System-Prompt oder dasselbe Dokument immer wieder mit verschiedenen Fragen an ein LLM sendest, bezahlst du normalerweise jedes Mal den vollen Input-Preis. Prompt Caching merkt sich den wiederkehrenden Teil und berechnet ihn beim zweiten Mal mit bis zu 90% Rabatt. Wie ein Bibliotheks-Ausweis: Einmal registrieren, dann immer wieder günstig ausleihen.

## Im Detail

Wenn du dieselbe Anweisung oder dasselbe Dokument mehrfach in Prompts verwendest, halbiert (oder mehr) Prompt Caching die Cost. Beide großen Anbieter (Anthropic und OpenAI) bieten das Feature. Das Konzept: Der Provider speichert den Prefix deines Prompts serverseitig. Bei wiederholten Aufrufen mit demselben Prefix wird nur der neue Teil voll berechnet. Besonders relevant für: RAG-Systeme, Chatbots mit langem System-Prompt, iteratives Arbeiten an einem Dokument. Praxis kommt in Modul 5.x.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) | Feature-Dokumentation |
| :book: | [OpenAI Prompt Caching](https://platform.openai.com/docs/guides/prompt-caching) | OpenAI-Variante |

## Teste dein Verständnis

- [ ] Kannst du erklären, in welchen Szenarien Prompt Caching besonders viel spart?
- [ ] Verstehst du, warum der "Prefix" identisch sein muss, damit Caching greift?
