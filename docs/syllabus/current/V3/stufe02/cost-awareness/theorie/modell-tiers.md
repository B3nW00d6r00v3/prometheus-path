---
title: "Modell-Tiers haben Faktor-10-Spreads"
module: "cost"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Modell-Tiers haben Faktor-10-Spreads

## Kernidee

Innerhalb eines Anbieters gibt es günstige und teure Modelle — der Preisunterschied beträgt oft Faktor 10-100. Claude Haiku kostet einen Bruchteil von Claude Opus. GPT-4o-mini kostet einen Bruchteil von GPT-4o. Die wichtigste Cost-Heuristik: Probiere jede Aufgabe zuerst mit dem günstigsten Modell und upgrade nur, wenn die Qualität nicht reicht. Für 80% der Alltagsaufgaben reicht das günstigste Tier.

## Überblick: Die Modell-Tiers

| Tier | Anthropic | OpenAI | Google | Preisniveau (Output/1M) |
|------|-----------|--------|--------|------------------------|
| **Premium** | Opus 4.7 | o3 | Gemini Ultra | $25-$75 |
| **Frontier** | Sonnet 4.6 | GPT-4o | Gemini 2.5 Pro | $10-$15 |
| **Budget** | Haiku 3.5 | GPT-4o-mini | Gemini 2.5 Flash | $0,40-$4 |
| **Micro** | — | o4-mini | Flash Lite | $0,10-$0,60 |

## Im Detail

### Der Spread in Zahlen

Am Beispiel Anthropic (Mai 2026):

| Modell | Input/1M | Output/1M | Relativ zu Haiku |
|--------|---------|----------|-----------------|
| Haiku 3.5 | $0,80 | $4,00 | 1x (Baseline) |
| Sonnet 4.6 | $3,00 | $15,00 | 3,75x |
| Opus 4.7 | $15,00 | $75,00 | 18,75x |

**Opus kostet fast 19x so viel wie Haiku.** Wenn Haiku die Aufgabe gut löst, sparst du 95% der Kosten.

Am Beispiel OpenAI:

| Modell | Input/1M | Output/1M | Relativ zu Mini |
|--------|---------|----------|----------------|
| GPT-4o-mini | $0,15 | $0,60 | 1x (Baseline) |
| GPT-4o | $2,50 | $10,00 | 16,7x |
| o3 | $10,00 | $40,00 | 66,7x |

**o3 kostet fast 67x so viel wie GPT-4o-mini.** Für einfache Übersetzungen ist o3 wie mit einem Ferrari zum Bäcker fahren.

### Die "Cheap-First"-Heuristik

Die wichtigste Kosten-Regel für LLM-Nutzung:

1. **Starte mit dem günstigsten Modell** (Haiku, Flash, GPT-4o-mini)
2. **Bewerte die Qualität** der Antwort
3. **Upgrade nur, wenn nötig** — und nur für die spezifische Aufgabe

Das gilt für API-Nutzung genauso wie für Chat-Interfaces: Wenn Claude Haiku deine Frage gut beantwortet, warum Opus bezahlen?

### Wann welches Tier?

| Aufgabe | Empfohlenes Tier | Warum |
|---------|-----------------|-------|
| Einfache Übersetzungen | Budget | Sprachqualität ist bei allen Tiers ähnlich |
| E-Mail schreiben | Budget | Standardtexte brauchen kein Frontier-Modell |
| Zusammenfassungen | Budget/Frontier | Budget reicht oft, Frontier bei komplexen Texten |
| Code-Review | Frontier | Fehler-Erkennung profitiert von besserem Reasoning |
| Komplexe Analyse (100+ Seiten) | Frontier/Premium | Langer Kontext + tiefes Verständnis nötig |
| Mathematische Beweise | Premium | Nur Reasoning-Modelle (o3, Opus mit Extended Thinking) |
| Klassifikation / Routing | Micro/Budget | Einfache Entscheidungen, hohe Stückzahl |
| Kreatives Schreiben | Frontier | Stilistisch bessere Ergebnisse |

### Fallstudie: 1.000 Zusammenfassungen

Du willst 1.000 Blogartikel (je ~2.000 Tokens) zusammenfassen lassen (je ~300 Tokens Output):

| Modell | Input-Cost | Output-Cost | Gesamt | Relativ |
|--------|-----------|------------|--------|---------|
| Haiku 3.5 | $1,60 | $1,20 | **$2,80** | 1x |
| Sonnet 4.6 | $6,00 | $4,50 | **$10,50** | 3,75x |
| Opus 4.7 | $30,00 | $22,50 | **$52,50** | 18,75x |
| GPT-4o-mini | $0,30 | $0,18 | **$0,48** | 0,17x |

GPT-4o-mini kostet für dieselbe Aufgabe über **100x weniger** als Opus. Wenn die Zusammenfassungs-Qualität ausreicht — und sie reicht für einfache Texte fast immer — ist die Wahl klar.

### Modell-Routing: Das Profi-Pattern

In Production-Systemen (ab Stufe 5+) wird oft ein "Router" vorgeschaltet:

1. Einfache Anfragen → Budget-Modell
2. Komplexe Anfragen → Frontier-Modell
3. Hochkritische Anfragen → Premium-Modell

Das nennt man **Modell-Routing** oder **Cascading**. Für Stufe 2 ist es Overkill, aber gut zu wissen: Die Profis nutzen nicht ein Modell für alles.

### Qualität vs. Kosten: Wo ist der Sweet Spot?

Die Qualitätsunterschiede zwischen den Tiers sind aufgabenabhängig:

- **Einfache Aufgaben (Formatierung, Übersetzung, Extraktion):** Kaum Unterschied zwischen Budget und Frontier → Budget nutzen
- **Mittelschwere Aufgaben (Zusammenfassung, Code-Generierung):** Spürbarer Unterschied, aber Budget oft "gut genug" → Budget testen, bei Bedarf Frontier
- **Schwere Aufgaben (komplexes Reasoning, Multi-Step-Analyse):** Deutlicher Qualitätssprung bei Frontier/Premium → Frontier oder Premium nötig

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [LLM Stats](https://llm-stats.com) | Preisvergleich aller Modelle mit Benchmarks |
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Haiku/Sonnet/Opus-Vergleich |
| :book: | [OpenAI Pricing](https://openai.com/pricing) | Mini/GPT-4o/o3-Vergleich |
| :hammer_and_wrench: | [LMSYS Chatbot Arena](https://lmarena.ai) | Qualitätsvergleich unabhängig vom Preis |

## Teste dein Verständnis

- [ ] Du hast ein Budget von $10/Monat und willst täglich ~50 API-Calls machen (je 500 Input + 500 Output Tokens). Welches Modell passt in dein Budget? Rechne nach.
- [ ] Erkläre die "Cheap-First"-Heuristik in eigenen Worten. Warum ist sie rational — und wann ist sie kontraproduktiv?
- [ ] Du sollst 10.000 Kundenbewertungen klassifizieren (positiv/negativ/neutral). Jede Bewertung hat ~100 Tokens, die Antwort ist 1 Token (p/n/u). Was kostet das bei GPT-4o-mini vs. Claude Opus? Welches Modell wählst du?
