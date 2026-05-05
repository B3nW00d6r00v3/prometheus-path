---
title: "API-Cost realistisch schätzen"
module: "9.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# API-Cost realistisch schätzen

## Kernidee

LLM-API-Kosten werden systematisch unterschätzt, weil Output-Tokens 3-5× teurer sind als Input-Tokens, Reasoning-Modelle und lange Kontexte Kosten stark treiben, und Multi-Model-Routing die Kosten um 60-80% reduzieren kann.

## Im Detail

**Grundformel:**
```
Kosten = Anzahl Anfragen × durchschnittliche Tokens × Preis pro Token
```

**Wichtige Kostentreiber:**

| Faktor | Auswirkung |
|---|---|
| Output vs. Input Tokens | Output 3-5× teurer als Input |
| Reasoning-Modelle | Deutlich teurer als Standard-Modelle |
| Lange Kontexte (>100k Tokens) | Kosten skalieren linear mit Context-Länge |
| Häufigkeit der Anfragen | Volumen × Einzelkosten |

**Schätz-Vorgehen:**
1. Anfrage-Volumen schätzen: Anfragen pro Tag × Arbeitstage.
2. Durchschnittliche Tokens schätzen: Input (System Prompt + User Input) + Output.
3. Pricing aus Provider-Dokumentation: Input-Token-Preis und Output-Token-Preis separat.
4. Summe berechnen, dann +20% Puffer für Ausreißer.

**Kostenreduktion durch Multi-Model-Routing** (Modul 2.5): Einfache Anfragen an günstigere Modelle, komplexe an teurere. Spart in der Praxis 60-80% der API-Kosten.

*Verfallsdatum: Aug 2026 — Pricing ändert sich mit Modell-Generationen.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Tool | [LLM Stats Pricing](https://llm-stats.com) | Aktueller Pricing-Vergleich verschiedener Modelle |

## Teste dein Verständnis

- [ ] Berechne die monatlichen API-Kosten für 1.000 Anfragen täglich mit durchschnittlich 500 Input-Tokens und 200 Output-Tokens.
- [ ] Warum kostet ein Reasoning-Modell bei gleicher Anfrage oft 10× mehr als ein Standard-Modell?
- [ ] Erkläre, wie Multi-Model-Routing die API-Kosten senkt, ohne die Qualität signifikant zu reduzieren.
