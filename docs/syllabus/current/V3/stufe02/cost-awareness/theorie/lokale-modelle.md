---
title: "Lokale Modelle: Strom-Cost statt Token-Cost"
module: "cost-awareness"
type: theorie
fast_track: true
effort: "8min"
stability: green
expires: null
---

# Lokale Modelle: Strom-Cost statt Token-Cost

## Kernidee

Wenn du ein LLM lokal auf deinem Rechner laufst (z.B. via Ollama), bezahlst du keine Tokens -- aber du bezahlst Strom und Hardwareverschleiss. Das ist wie der Unterschied zwischen Taxi (pro Fahrt bezahlen) und eigenem Auto (Anschaffung + Benzin + Wartung). Fuer intensives Lernen und Iterieren ist lokal oft die guenstigere Option.

## Im Detail

Ollama lokal kostet nichts pro Token, aber Strom + Hardware-Verschleiss. Auf Apple Silicon (M1-M4) ist die Power-Efficiency besonders gut -- du kannst stundenlang mit lokalen Modellen arbeiten, ohne dass die Stromrechnung spuerbar steigt.

**Wann lokal guenstiger ist:**
- Intensive Iterationen waehrend des Lernens (hunderte Aufrufe pro Tag)
- Experimentieren mit verschiedenen Prompts
- DSGVO-sensible Daten (kein Cloud-Transfer)
- Immer verfuegbar, auch ohne Internet

**Wann Cloud guenstiger ist:**
- Seltene, aber schwere Aufgaben (Frontier-Modelle)
- Wenn lokale Hardware nicht ausreicht (Modelle > 13B brauchen viel RAM)
- Wenn Geschwindigkeit wichtiger ist als Cost

**Faustregel:** Fuer Stufe 2 ist eine Kombination ideal -- lokal fuer Iteration und Lernen, Cloud-Free-Tier fuer Frontier-Vergleiche.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Ollama](https://ollama.com) | Lokale LLMs einfach installiert |
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Zum Vergleich: Cloud-Kosten |

## Teste dein Verstaendnis

- [ ] Kannst du erklaeren, warum lokale Modelle "kostenlos" und trotzdem nicht gratis sind?
- [ ] Weisst du, wann lokal guenstiger ist als Cloud und umgekehrt?
