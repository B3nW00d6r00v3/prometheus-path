---
title: '"Ask, don''t tell" — Ziel statt Lösungsweg'
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# "Ask, don't tell" — Ziel statt Lösungsweg

## Kernidee

Bei einem klassischen LLM sagst du: "Erst analysiere X, dann vergleiche Y, dann formuliere Z." Bei einem Reasoning-Modell sagst du nur: "Gib mir Z." Das Modell findet den besten Weg selbst -- und oft einen besseren, als du vorgegeben haettest. Denk daran wie an den Unterschied zwischen einem Navigationsgeraet (du gibst das Ziel, es findet die Route) und einer Wegbeschreibung (du gibst jeden Schritt vor).

## Im Detail

Bei klassischen LLMs hilft es, den Loesungsweg vorzugeben ("Erst analysiere X, dann schliesse Y, dann formuliere Z"). Bei Reasoning-Modellen ist das oft kontraproduktiv -- sie denken effizienter, wenn du das Ziel klar formulierst und ihnen den Weg ueberlaesst. Reasoning-Modelle wie Claude Extended Thinking, GPT-o-Serie und DeepSeek R1 haben gelernt, eigene Loesungswege zu finden. Wenn du den Weg vorschreibst, beschraenkst du das Modell auf deinen (moeglicherweise suboptimalen) Denkpfad.

**Faustregel:** Je komplexer die Aufgabe, desto mehr profitierst du davon, nur das Ziel zu definieren und dem Reasoning-Modell die Strategie zu ueberlassen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Best Practices](https://platform.openai.com/docs/guides/reasoning-best-practices) | Offizielle Empfehlungen fuer Reasoning-Prompts |

## Teste dein Verstaendnis

- [ ] Kannst du erklaeren, warum Schritt-fuer-Schritt-Anweisungen bei Reasoning-Modellen schaden koennen?
- [ ] Hast du ein eigenes Beispiel, wo du nur das Ziel formulieren wuerdest statt den Weg?
