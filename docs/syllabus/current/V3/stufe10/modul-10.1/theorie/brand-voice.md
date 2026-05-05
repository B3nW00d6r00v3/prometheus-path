---
title: "Brand-Voice und Style-Consistency"
module: "10.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Brand-Voice und Style-Consistency

## Kernidee

Das größte Praxis-Problem bei KI-Content ist, dass alles gleich klingt — generisch, formell, "KI-typisch". Für echte Marken ist das untragbar. Die Lösung liegt in einem gestaffelten Ansatz: erst wenige Beispiele im System-Prompt, dann RAG auf Style-Guides, dann erst Fine-Tuning — wenn die einfacheren Methoden nicht reichen.

## Im Detail

**Fünf Methoden für Brand-Voice-Consistency (in Reihenfolge des Aufwands):**

1. **System-Prompt mit Brand-Voice-Beispielen** — einfachste Methode, sofort wirkend. 5-10 Beispiel-Texte der Marke direkt in den System-Prompt. Wirkung: ~60-70% Brand-Voice-Konsistenz bei guten Modellen.

2. **Few-Shot-Pattern in jedem Prompt** — nicht nur im System-Prompt, sondern im User-Prompt bei jedem Aufruf 2-3 frische Beispiele. Wirkt bei kurzen, spezifischen Texten (Tweets, Ad-Copy) besser als System-Prompt allein.

3. **Style-Guide als RAG-Quelle** — vollständiger Brand-Guide (Ton, Sprache, Tabuwörter, Beispiele) in Vector-Store, wird bei jedem Content-Request abgerufen. Skalierbar und updatebar.

4. **Fine-Tuning auf eigenen Inhalten** — Modul 10.2, aber: *nur nach Decision-Framework-Test*. Fine-Tuning für Brand-Voice ist selten die erste Wahl. Wenn 5-10 Few-Shot-Beispiele auf GPT-5 oder Claude Opus funktionieren, brauchst du kein Fine-Tuning.

5. **Custom GPTs / Claude Projects mit persistentem Style-Kontext** — für nicht-technische Teams die zugänglichste Lösung. Kein Code, direkte Nutzung.

**Anti-Pattern:** Fine-Tuning als erster Versuch für Brand-Voice. Erst einfache Methoden prüfen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🍳 Cookbook | [Anthropic — Brand Voice Cookbook](https://github.com/anthropics/anthropic-cookbook) | Praktische Implementierungsbeispiele |
| 📖 Docs | [Claude System Prompts](https://docs.claude.com) | System-Prompt-Best-Practices |

## Teste dein Verständnis

- [ ] In welcher Reihenfolge solltest du die fünf Brand-Voice-Methoden ausprobieren?
- [ ] Wann ist Fine-Tuning für Brand-Voice gerechtfertigt?
- [ ] Was ist der Vorteil von RAG auf Style-Guides gegenüber festem System-Prompt?
