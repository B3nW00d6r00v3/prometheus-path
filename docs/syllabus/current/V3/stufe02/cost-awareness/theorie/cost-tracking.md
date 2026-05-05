---
title: "Cost-Tracking-Tools für Anfänger"
module: "cost"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Cost-Tracking-Tools für Anfänger

## Kernidee

Jeder Cloud-Provider hat ein eingebautes Dashboard, das dir zeigt, was du ausgegeben hast. Setze dort ein Limit, bevor du intensiv testest — wie ein Budget-Alarm auf deiner Kreditkarte. Für Stufe 2 reicht das eingebaute Dashboard; externe Tools wie Helicone sind Overkill.

## Im Detail

Die meisten Provider haben in der Console ein Cost-Dashboard. Setze dir **eine Cost-Limit-Warnung in jeder Provider-Console**, bevor du intensiv testest. Anthropic, OpenAI und Google bieten das in den Einstellungen an. Für Stufe 2 ist das vollkommen ausreichend. Externe Tools wie [Helicone](https://helicone.ai) (OSS verfügbar) bieten detaillierteres Tracking über mehrere Provider hinweg, sind aber für Stufe 2 Overkill — relevant ab Stufe 5+ mit Production-Workloads. Lokale Modelle (Ollama) haben Strom-Cost statt Token-Cost — für intensive Iterationen während des Lernens oft die günstigere Option, besonders auf Apple Silicon mit guter Power-Efficiency.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Helicone](https://helicone.ai) | OSS Cost-Tracking (für später) |
| :book: | [Anthropic Console — Usage](https://console.anthropic.com) | Eingebautes Dashboard |
| :book: | [OpenAI Usage](https://platform.openai.com/usage) | OpenAI-Dashboard |

## Teste dein Verständnis

- [ ] Hast du ein Cost-Limit in mindestens einer Provider-Console gesetzt?
- [ ] Weißt du, wo du deine bisherigen Ausgaben bei jedem Provider einsehen kannst?
