---
title: "Few-Shot-Anti-Pattern bei Reasoning"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Few-Shot-Anti-Pattern bei Reasoning

## Kernidee

Bei klassischen LLMs sind Beispiele Gold wert -- zeig dem Modell fuenf Beispiele und es versteht das Muster. Bei Reasoning-Modellen ist das wie einem Detektiv fuenf geloeste Faelle zu zeigen und dann zu erwarten, dass er den sechsten genauso loest: Er kopiert die Loesung statt eigenstaendig zu ermitteln. Weniger Beispiele = mehr Freiheit zum Denken.

## Im Detail

Viele Beispiele im Prompt sind bei Reasoning-Modellen oft schaedlich. Das Modell ueberoptimiert auf die Beispiele statt eigenstaendig zu reasonen. Es sucht nach Mustern in deinen Beispielen, anstatt das Problem von Grund auf zu durchdenken. **1-2 Beispiele maximum**, oder gar keine. Nutze Beispiele nur, um das gewuenschte Output-Format zu zeigen, nicht um den Denkprozess vorzugeben.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI Reasoning Guide](https://platform.openai.com/docs/guides/reasoning) | Best Practices fuer Few-Shot bei Reasoning |

## Teste dein Verstaendnis

- [ ] Kannst du erklaeren, warum viele Beispiele bei Reasoning-Modellen schaden koennen?
- [ ] Weisst du, wann 1-2 Beispiele trotzdem sinnvoll sind (Hinweis: Output-Format)?
