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

Reasoning-Modelle sind wie ein Schachspieler, der Züge im Kopf durchspielt, bevor er zieht. Während klassische LLMs sofort antworten ("System 1" — schnell, intuitiv), "denken" Reasoning-Modelle intern länger ("System 2" — langsam, analytisch). Sie investieren mehr Compute bei der Inferenz und sind dadurch bei mehrstufigen Problemen deutlich stärker. Der Preis: mehr Latenz, höhere Kosten. Sie sind nicht für jeden Task ideal — einfache Aufgaben erledigt ein Standard-LLM schneller und günstiger.

## Im Detail

### Was macht ein Reasoning-Modell anders?

Ein klassisches LLM generiert Token für Token von links nach rechts — es gibt keine "Denkpause". Die Antwort auf "Was ist 847 x 293?" wird genauso schnell generiert wie die Antwort auf "Was ist die Hauptstadt von Frankreich?".

Reasoning-Modelle brechen dieses Muster: Sie generieren intern eine Kette von Reasoning-Tokens (Thinking Tokens), bevor sie die eigentliche Antwort produzieren. Bei Claude Extended Thinking siehst du diesen Denkprozess; bei OpenAIs o-Modellen ist er teilweise verborgen. Diese internen Tokens sind echte Rechenarbeit — das Modell "überlegt" tatsächlich, probiert Ansätze durch, verwirft falsche Wege und konvergiert auf eine Lösung.

### Die Reasoning-Modelle der großen Anbieter

| Anbieter | Modell | Besonderheit |
|----------|--------|-------------|
| OpenAI | o3, o4-mini | Dedizierte Reasoning-Modelle, Thinking teilweise verborgen |
| Anthropic | Claude Sonnet 4.6 + Thinking, Opus 4.7 + Adaptive Thinking | Sichtbare Thinking-Tokens, Adaptive Thinking bei Opus |
| DeepSeek | R1 | Open Source (MIT), sichtbare Chain-of-Thought |
| Google | Gemini 2.5 Reasoning, 3.1 Thinking | Integriert in Gemini-Familie |
| Alibaba | Qwen QwQ | Open Source, Reasoning-fokussiert |

### Wann Reasoning-Modelle glänzen

- **Mathematik und formale Logik:** Mehrstufige Beweise, Gleichungssysteme, Optimierung
- **Komplexes Coding:** Debugging, Architektur-Entscheidungen, Code-Review mit Begründung
- **Analyse mit Abwägung:** Pro/Contra, Vergleiche, Entscheidungsmatrizen
- **Aufgaben mit versteckter Komplexität:** Fragen, die einfach klingen, aber tiefes Nachdenken erfordern
- **Faustregel:** Wenn du selbst länger als 30 Sekunden über die Aufgabe nachdenken müsstest, lohnt sich ein Reasoning-Modell

### Wann Reasoning-Modelle overkill sind

- Einfache Zusammenfassungen und Übersetzungen
- Kreatives Schreiben (hier kann Reasoning sogar schaden — zu analytisch)
- Einfache Klassifikation und Extraktion
- Routine-Aufgaben mit klarem Muster

### Die eigenen Prompting-Patterns

Reasoning-Modelle brauchen fundamental andere Prompting-Strategien als klassische LLMs. Die Techniken, die bei GPT-4o oder Claude Sonnet ohne Thinking funktionieren ("Denke Schritt für Schritt", viele Few-Shot-Beispiele, detaillierte Lösungswege vorgeben), sind bei Reasoning-Modellen oft kontraproduktiv. Der folgende Block behandelt diese Anti-Patterns im Detail.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Offizielle Doku |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Claude-Variante |
| :book: | [DeepSeek R1 Paper](https://arxiv.org/abs/2401.12954) | OSS-Reasoning-Durchbruch |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen klassischen LLMs und Reasoning-Modellen in eigenen Worten erklären?
- [ ] Weißt du, für welche Task-Typen Reasoning-Modelle sich lohnen und für welche nicht?
- [ ] Kannst du die System-1/System-2-Analogie auf LLMs übertragen?
- [ ] Warum brauchen Reasoning-Modelle andere Prompting-Strategien?
