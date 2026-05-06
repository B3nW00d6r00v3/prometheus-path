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

Bei klassischen LLMs sind Beispiele Gold wert — zeig dem Modell fünf Beispiele und es versteht das Muster. Bei Reasoning-Modellen ist das wie einem Detektiv fünf gelöste Fälle zu zeigen und dann zu erwarten, dass er den sechsten genauso löst: Er kopiert die Lösung statt eigenständig zu ermitteln. Weniger Beispiele = mehr Freiheit zum Denken.

## Im Detail

### Warum Few-Shot bei klassischen LLMs funktioniert

Few-Shot-Prompting (2-5 Beispiele im Prompt) ist eine der wirksamsten Techniken für klassische LLMs. Beispiele zeigen dem Modell:

- Welches Format die Antwort haben soll
- Welchen Stil die Antwort haben soll
- Wie komplex die Antwort sein soll
- Welche Art von Reasoning erwartet wird

Für klassische Modelle ist das ein enormer Qualitätssprung — sie lernen "in-context" aus den Beispielen.

### Warum zu viele Beispiele bei Reasoning-Modellen schaden

Reasoning-Modelle haben das Muster-Matching bereits internalisiert — sie brauchen keine Beispiele, um zu verstehen, was gefragt ist. Wenn du trotzdem viele Beispiele gibst, passiert etwas Kontraproduktives:

**Das Modell überoptimiert auf die Beispiele statt eigenständig zu reasonen.**

Es sucht nach Mustern in deinen Beispielen (Oberflächenmerkmale, Lösungsstrukturen, sprachliche Muster) und versucht, diese zu replizieren — anstatt das Problem von Grund auf zu durchdenken. Das Ergebnis: Das Modell kopiert statt zu denken.

### Konkretes Beispiel

**Aufgabe:** Klassifiziere die Schwere von Kundenbeschwerden (1-5).

**Schlecht (bei Reasoning-Modell) — 5 Beispiele:**
> Beschwerde: "Die Lieferung kam 2 Tage zu spät" → 2
> Beschwerde: "Das Produkt war kaputt bei Ankunft" → 4
> Beschwerde: "Die Farbe war leicht anders als im Bild" → 1
> Beschwerde: "Ich warte seit 3 Wochen auf meine Erstattung" → 4
> Beschwerde: "Der Kundenservice war unfreundlich" → 3
>
> Klassifiziere: "Mein Kind hat sich an dem Produkt verletzt"

Das Reasoning-Modell sucht nach Ähnlichkeiten mit deinen Beispielen und ordnet möglicherweise eine 4 zu — weil "kaputtes Produkt" auch eine 4 war. Aber ein Sicherheitsvorfall mit Verletzung ist eine klare 5.

**Besser (bei Reasoning-Modell) — nur Kriterien:**
> Klassifiziere die Schwere dieser Kundenbeschwerde auf einer Skala 1-5, wobei: 1=Kosmetisch, 2=Unannehmlichkeit, 3=Service-Versagen, 4=Produktfehler, 5=Sicherheitsrisiko/Verletzung.
>
> Beschwerde: "Mein Kind hat sich an dem Produkt verletzt"

Das Reasoning-Modell durchdenkt die Beschwerde eigenständig, erkennt den Sicherheitsaspekt und ordnet korrekt 5 zu.

### Die goldene Regel: 0-2 Beispiele

- **0 Beispiele** (Zero-Shot): Ideal für Reasoning-Modelle bei den meisten Aufgaben. Gib klare Kriterien statt Beispiele.
- **1 Beispiel:** Wenn du ein spezifisches Output-Format demonstrieren willst (z.B. eine bestimmte JSON-Struktur oder ein Report-Layout).
- **2 Beispiele:** Maximum. Nur wenn das Format wirklich komplex ist und ohne Beispiel nicht verständlich.
- **5+ Beispiele:** Kontraproduktiv bei Reasoning-Modellen. Reserviere das für klassische LLMs.

### Beispiele für Format ja, Beispiele für Denken nein

Der Unterschied ist subtil, aber wichtig:

- **Format-Beispiel (OK):** "Die Antwort sollte so aussehen: `{ severity: 5, reason: '...', action: '...' }`" — Du zeigst die Struktur.
- **Denk-Beispiel (problematisch):** "Hier sind fünf gelöste Fälle als Referenz..." — Du zeigst den Denkprozess.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI Reasoning Guide](https://platform.openai.com/docs/guides/reasoning) | Best Practices für Few-Shot bei Reasoning |
| :book: | [Anthropic — Prompt Engineering](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) | Wann Beispiele helfen, wann nicht |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum viele Beispiele bei Reasoning-Modellen schaden können?
- [ ] Weißt du, wann 1-2 Beispiele trotzdem sinnvoll sind (Hinweis: Output-Format)?
- [ ] Kannst du den Unterschied zwischen Format-Beispiel und Denk-Beispiel erklären?
- [ ] Hast du die 0-2-Beispiel-Regel bei einem Reasoning-Modell selbst getestet?
