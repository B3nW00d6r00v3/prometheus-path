---
title: "Effort-Parameter als API-Konvention 2026"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-08"
---

# Effort-Parameter als API-Konvention 2026

## Kernidee

Stell dir vor, du koenntest einem Berater sagen: "Denk 5 Minuten nach" oder "Denk eine Stunde nach". Genau das ist der Effort-Parameter -- du steuerst, wie viel Denkzeit (und damit Kosten) du dem Reasoning-Modell erlaubst. Mehr Effort = bessere Antworten bei schweren Fragen, aber auch mehr Kosten und Latenz.

## Im Detail

Der Effort-Parameter ist 2026 eine API-Konvention bei den grossen Anbietern:

- **Claude 4.7:** `thinking.budget_tokens` mit Werten low / medium / high / xhigh. Das Modell bekommt ein Token-Budget fuer seinen Denkprozess.
- **OpenAI:** `reasoning_effort` mit Werten low / medium / high. Steuert, wie ausfuehrlich die o-Modelle reasoning.

**Pflichtwissen fuer API-Aufrufe an Reasoning-Modelle.** Ohne Effort-Parameter laeuft das Modell mit Default-Einstellung, was fuer einfache Aufgaben zu viel und fuer schwere zu wenig sein kann.

Typische Strategie: starte mit "low", upgrade auf "high" nur wenn die Qualitaet nicht reicht. Das spart Kosten bei der Mehrheit der Aufrufe.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | budget_tokens Dokumentation |
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | reasoning_effort Dokumentation |

## Teste dein Verstaendnis

- [ ] Kennst du die Effort-Parameter fuer Claude und OpenAI?
- [ ] Verstehst du, warum "immer auf high" keine gute Strategie ist?
