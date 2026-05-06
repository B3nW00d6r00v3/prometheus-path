---
title: "Reasoning-Modell-Familie Mai 2026"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-08"
---

# Reasoning-Modell-Familie Mai 2026

## Kernidee

Reasoning-Modelle sind kein Nischen-Feature eines einzelnen Anbieters — sie sind eine eigene Modell-Familie, die jeder große Anbieter hat. Wie bei Smartphone-Herstellern: Alle haben Kameras, aber jeder baut sie anders. Das Konzept (Test-Time-Compute) ist dasselbe, die Implementierung variiert stark.

## Im Detail

### Überblick: Wer hat was?

| Anbieter | Modell(e) | Besonderheit | Lizenz |
|----------|-----------|-------------|--------|
| **OpenAI** | o1, o3, o4-mini | Dedizierte Reasoning-Modelle, eigene Modell-Linie neben GPT | Closed Source |
| **Anthropic** | Claude Sonnet 4.6 + Thinking, Claude Opus 4.7 + Adaptive Thinking | Thinking als Feature, nicht eigene Modell-Linie. Sichtbare Thinking-Tokens | Closed Source |
| **DeepSeek** | R1 | Erster großer OSS-Reasoning-Durchbruch. MIT-Lizenz. Sichtbare Chain-of-Thought | MIT (Open Source) |
| **Google** | Gemini 2.5 Reasoning, Gemini 3.1 Thinking | Integriert in Gemini-Produktlinie | Closed Source |
| **Alibaba** | Qwen QwQ | Open-Source-Reasoning, stark bei Mathe und Code | Apache 2.0 (Open Source) |

### Die unterschiedlichen Ansätze

**OpenAI: Eigene Modell-Linie (o-Serie)**

OpenAI hat Reasoning-Modelle als separate Produktlinie etabliert: GPT-5 ist das "Standard"-Modell, o3 ist das "Reasoning"-Modell. Beide existieren parallel. Die o-Serie denkt verborgen (du siehst eine Zusammenfassung, nicht den vollen Denkprozess). Die Namensgebung (o1, o3, o4-mini) ist bewusst von der GPT-Linie getrennt.

Die o-Serie hat eigene API-Endpunkte und eigene Pricing-Modelle. `reasoning_effort` steuert, wie viel Thinking erlaubt ist.

**Anthropic: Thinking als Feature**

Anthropic hat keinen separaten "Reasoning-Modell"-Namen. Stattdessen ist Extended Thinking ein Feature, das auf Sonnet und Opus aktiviert werden kann. Dasselbe Modell (Claude Sonnet 4.6) kann mit oder ohne Thinking laufen — ein API-Parameter schaltet es ein.

Bei Opus 4.7 geht Anthropic noch einen Schritt weiter: **Adaptive Thinking** — das Modell entscheidet pro Anfrage selbst, ob und wie viel Denken nötig ist. Bei einer einfachen Frage denkt es kurz (oder gar nicht), bei einer schweren ausführlich. Du steuerst nur das maximale Budget über `thinking.budget_tokens`.

**DeepSeek R1: Der OSS-Durchbruch**

Im Januar 2025 veröffentlichte DeepSeek R1 — das erste wettbewerbsfähige Open-Source-Reasoning-Modell. R1 demonstrierte, dass Reasoning-Fähigkeiten nicht nur durch proprietäre Methoden erreichbar sind. Die Chain-of-Thought ist vollständig sichtbar und als Teil der regulären Response enthalten.

R1 war ein Wendepunkt: Es zeigte, dass Reasoning-Training (GRPO/RL-basiert) auch mit vergleichsweise bescheidenen Ressourcen möglich ist. DeepSeek R2 ist in Entwicklung.

**Qwen QwQ: Reasoning aus China**

Alibabas QwQ ist ebenfalls ein Open-Source-Reasoning-Modell (Apache 2.0). Es demonstriert, dass die Reasoning-Revolution nicht auf westliche Anbieter beschränkt ist. Stark bei Mathematik und Code.

### Was sie gemeinsam haben

Trotz unterschiedlicher Implementierung teilen alle Reasoning-Modelle:

- **Test-Time-Compute als Kern:** Mehr Denkzeit = bessere Antwort bei schweren Aufgaben
- **Höhere Kosten und Latenz** als klassische Modelle
- **Eigene Prompting-Patterns** (Ask-don't-tell, keine CoT-Prompts, wenige Beispiele)
- **Effort-Parameter** als API-Konvention (wie viel Denken erlaubst du?)

### Bemerkenswert: Reasoning ist nicht mehr nur Closed Source

Mit DeepSeek R1 (MIT) und Qwen QwQ (Apache 2.0) gibt es starke Open-Source-Alternativen. Du kannst Reasoning-Modelle lokal betreiben, fine-tunen und ohne API-Kosten nutzen. Das war vor 2025 undenkbar.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | OpenAI o-Serie |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Claude Adaptive Thinking |
| :book: | [DeepSeek R1 Paper](https://arxiv.org/abs/2401.12954) | OSS-Reasoning-Modell |

## Teste dein Verständnis

- [ ] Kannst du mindestens drei Reasoning-Modelle aus verschiedenen Anbietern nennen?
- [ ] Weißt du, welche Reasoning-Modelle Open-Source sind und unter welcher Lizenz?
- [ ] Kannst du den Unterschied zwischen OpenAIs Ansatz (eigene Modell-Linie) und Anthropics Ansatz (Thinking als Feature) erklären?
- [ ] Verstehst du, warum DeepSeek R1 als Meilenstein gilt?
