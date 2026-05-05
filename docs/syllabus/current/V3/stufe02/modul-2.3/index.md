---
title: "Modul 2.3: Prompt Engineering"
module: "2.3"
type: index
fast_track: true
effort: "8-12h"
---

# Modul 2.3: Prompt Engineering

Prompt Engineering ist 2026 nicht mehr "Geheim-Technik" — es ist Standard-Skill. In diesem Modul lernst du systematisches Prompting, **mit Eval-Bewusstsein von Anfang an**. Das bedeutet: nicht nur "wie schreibe ich einen Prompt", sondern auch "wie weiß ich, ob mein Prompt besser ist als der vorherige?" Damit baust du den ersten Anker zum Querschnitt-Eval auf, ohne dass du dort schon tief eintauchen musst. *Hinweis: Die echte Eval-Disziplin lernst du in Modul 5.0 (Eval-Mini-Block) vor Modul 5.1 — hier in 2.3 baust du nur das Bewusstsein.*

**Aufwand:** 8-12h  
**Voraussetzungen:** Module 2.1, 2.2

## Lernziel

Du kannst Prompts systematisch entwickeln, mit Standard-Frameworks arbeiten, und einfache A/B-Vergleiche zwischen Prompts durchführen. Du hast eine eigene Prompt-Library mit mindestens 20 kategorisierten, getesteten Prompts.

## Theorie-Übersicht

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [Anatomie eines guten Prompts](theorie/prompt-anatomie.md) | :material-check: | 15min |
| 2 | [Few-Shot Prompting](theorie/few-shot.md) | :material-check: | 10min |
| 3 | [Chain-of-Thought und Reasoning](theorie/chain-of-thought.md) | :material-check: | 10min |
| 4 | [Strukturierte Outputs: JSON, XML, Markdown](theorie/strukturierte-outputs.md) | :material-check: | 10min |
| 5 | [System-Prompt vs. User-Prompt](theorie/system-vs-user-prompt.md) | :material-check: | 10min |
| 6 | [Prompt-Eval von Anfang an](theorie/prompt-eval.md) | :material-check: | 15min |
| 7 | [Context Engineering](theorie/context-engineering.md) | :material-minus: | 10min |
| 8 | [Prompt-Bibliotheken als Industriepraxis](theorie/prompt-bibliotheken.md) | :material-check: | 10min |

## Praxis: Hauptprojekt — Persönliche Prompt-Library

- GitHub-Unter-Repo oder Ordner `meine-prompt-library/` im Portfolio.
- Mindestens 20 Prompts kategorisiert (z.B. Schreiben/Coding/Lernen/Analyse/Alltag).
- Pro Prompt: Titel, Use-Case, der Prompt-Text, Beispiel-Input und Beispiel-Output, Modell-Empfehlung, Notizen zur Optimierung.
- Mindestens 3 Prompts in zwei Versionen (v1 und v2) mit dokumentiertem A/B-Vergleich auf 5 Test-Inputs — welcher ist besser, warum?

## Mehrwert-Mini-Projekt

**Custom GPT / Claude Project / Gemini Gem für deinen Top-Use-Case** — z.B. "E-Mail-Antwort-Assistent in meinem Stil". System-Prompt + Beispiele + Constraints. Sofort nutzbar, spart minutenweise pro Tag.

## Open-Source-Pfad

- [Open WebUI](https://openwebui.com) als lokales Chat-Interface mit Ollama, eigene "Modelfile"-Definitionen (Ollama-eigenes Format für System-Prompts).
- [LangChain Hub](https://smith.langchain.com/hub) durchsuchen, OSS-Prompts als Vorlage nehmen und anpassen.

## Outcome-Check

- [ ] Prompt-Library mit mindestens 20 kategorisierten Prompts
- [ ] Mindestens 3 A/B-Vergleiche mit Test-Inputs dokumentiert
- [ ] Mindestens ein Custom GPT / Claude Project / Gem oder OSS-Äquivalent gebaut
- [ ] README erklärt die Library-Struktur
