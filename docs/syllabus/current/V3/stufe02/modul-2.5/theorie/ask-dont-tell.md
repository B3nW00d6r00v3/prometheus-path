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

Bei einem klassischen LLM sagst du: "Erst analysiere X, dann vergleiche Y, dann formuliere Z." Bei einem Reasoning-Modell sagst du nur: "Gib mir Z." Das Modell findet den besten Weg selbst — und oft einen besseren, als du vorgegeben hättest. Denk daran wie an den Unterschied zwischen einem Navigationsgerät (du gibst das Ziel, es findet die Route) und einer Wegbeschreibung (du gibst jeden Schritt vor).

## Im Detail

### Das Problem mit Lösungswegen

Bei klassischen LLMs hilft es, den Lösungsweg vorzugeben. "Erst analysiere die Quartalszahlen, dann vergleiche sie mit dem Vorjahr, dann identifiziere die drei größten Abweichungen, dann formuliere eine Handlungsempfehlung." Das gibt dem Modell Struktur und verbessert die Qualität.

Bei Reasoning-Modellen ist genau das oft kontraproduktiv. Warum? Weil diese Modelle gelernt haben, eigene Lösungswege zu finden — und ihre trainierten Strategien sind oft besser als dein vorgegebener Weg. Wenn du den Weg vorschreibst, beschränkst du das Modell auf deinen (möglicherweise suboptimalen) Denkpfad.

### Konkretes Beispiel

**Schlecht (bei Reasoning-Modell):**
> "Analysiere diesen Code. Gehe dabei wie folgt vor: (1) Lies jede Funktion einzeln, (2) prüfe die Typen, (3) überprüfe die Edge Cases, (4) suche nach Performance-Problemen, (5) schreibe eine Zusammenfassung."

Das Modell wird stur deiner Liste folgen und möglicherweise wichtige Patterns übersehen, die nicht in deiner Checkliste stehen.

**Besser (bei Reasoning-Modell):**
> "Finde die drei kritischsten Probleme in diesem Code und schlage Fixes vor."

Das Modell wird selbst entscheiden, wie es den Code analysiert — und es wird möglicherweise ein Concurrency-Problem finden, das du mit deiner Checkliste übersehen hättest.

### Wann "Ask, don't tell" gilt und wann nicht

**Nutze "Ask, don't tell" bei:**

- Komplexen Analyse-Aufgaben: "Was sind die Schwachstellen in diesem Business-Plan?"
- Debugging: "Warum schlägt dieser Test fehl?"
- Forschungsfragen: "Was spricht für und gegen X?"
- Kreativem Problemlösen: "Wie könnte man dieses UX-Problem lösen?"

**Nutze weiterhin strukturierte Anweisungen bei:**

- Format-Anforderungen: "Antworte als Markdown-Tabelle mit den Spalten X, Y, Z" — das ist Output-Format, nicht Lösungsweg
- Constraints: "Berücksichtige nur europäisches Recht" — das sind Rahmenbedingungen, keine Denkschritte
- Klassischen LLMs ohne Reasoning: Hier hilft Struktur weiterhin

### Die Faustregel

**Je komplexer die Aufgabe, desto mehr profitierst du davon, nur das Ziel zu definieren und dem Reasoning-Modell die Strategie zu überlassen.**

Einfach gesagt: Sag dem Modell, *was* du willst, nicht *wie* es dahin kommen soll.

### Warum das kontraintuitiv ist

Wer bereits Erfahrung mit Prompting für klassische LLMs hat, muss hier umlernen. All die sorgfältig ausgearbeiteten Schritt-für-Schritt-Prompts, die bei GPT-4o wunderbar funktioniert haben, können bei o3 oder Claude Extended Thinking die Qualität verschlechtern. Das ist das zentrale Anti-Pattern dieses Blocks: Techniken, die bei einer Modell-Klasse gut sind, können bei einer anderen schaden.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Best Practices](https://platform.openai.com/docs/guides/reasoning-best-practices) | Offizielle Empfehlungen für Reasoning-Prompts |
| :book: | [Anthropic — Extended Thinking Tips](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Claude-spezifische Empfehlungen |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Schritt-für-Schritt-Anweisungen bei Reasoning-Modellen schaden können?
- [ ] Hast du ein eigenes Beispiel, wo du nur das Ziel formulieren würdest statt den Weg?
- [ ] Verstehst du den Unterschied zwischen Lösungsweg (schadet bei Reasoning) und Output-Format (schadet nicht)?
- [ ] Kannst du die Navigationsgerät-Analogie in eigenen Worten erklären?
