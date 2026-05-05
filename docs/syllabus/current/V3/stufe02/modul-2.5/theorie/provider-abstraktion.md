---
title: "Provider-Abstraktion als Best Practice"
module: "2.5"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Provider-Abstraktion als Best Practice

## Kernidee

Wenn du direkt gegen das Anthropic-SDK programmierst, bist du an Anthropic gebunden. Wenn morgen ein besseres/günstigeres Modell bei Google erscheint, musst du Code umschreiben. Provider-Abstraktion (z.B. LiteLLM) macht Modell-Wechsel zur Konfigurations-Frage statt zum Code-Refactoring. Wie ein Universalstecker für verschiedene Steckdosen.

## Im Detail

Wer direkt gegen Anthropic-SDK oder OpenAI-SDK programmiert, ist Vendor-locked. Provider-Abstraktion (LiteLLM, OpenRouter) macht Modell-Wechsel zur Konfigurations-Frage statt Code-Refactoring. Du schreibst `completion(model="claude-3-sonnet")` statt Anthropic-spezifischen Code, und kannst mit einer Zeile auf `model="gpt-5"` wechseln. Besonders wichtig in der schnelllebigen 2026er-Landschaft, wo quartalsweise neue Modelle erscheinen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [LiteLLM Docs](https://docs.litellm.ai) | OSS Provider-Abstraktion |
| :hammer_and_wrench: | [OpenRouter](https://openrouter.ai) | Managed Alternative |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Vendor-Lock-in bei LLMs problematisch ist?
- [ ] Hast du LiteLLM oder OpenRouter mindestens einmal getestet?
