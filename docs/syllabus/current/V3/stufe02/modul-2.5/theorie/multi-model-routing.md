---
title: "Multi-Model-Routing als Production-Pattern 2026"
module: "2.5"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Multi-Model-Routing als Production-Pattern 2026

## Kernidee

Kein ernsthaftes Production-System nutzt nur ein einziges Modell. Stattdessen: 70% der einfachen Anfragen gehen an das günstige Modell, 25% an das mittlere, nur 5% an das teure Frontier-Modell. Wie in einem Restaurant: Die Küchenhilfe macht den Salat, der Sous-Chef das Hauptgericht, der Sternekoch nur das Dessert-Meisterwerk. Cost-Reduktion: 60-80% bei vergleichbarer Gesamtqualität.

## Im Detail

### Warum ein einzelnes Modell nicht reicht

Stell dir vor, du baust einen Kundenservice-Bot. 70% der Anfragen sind Routine: "Was sind eure Öffnungszeiten?", "Wo ist meine Bestellung?", "Wie kann ich zurückgeben?" Für diese braucht man kein Opus 4.7 — Haiku erledigt das genauso gut, 20x günstiger und 5x schneller.

Aber 5% der Anfragen sind komplex: "Ich habe drei Bestellungen, eine wurde falsch geliefert, eine ist beschädigt, und die dritte will ich umtauschen, aber mit der Gutschrift der ersten verrechnen." Hier brauchst du ein starkes Modell.

### Die typische 70/25/5-Verteilung

| Tier | Modell-Typ | Typische Modelle | Anteil | Use Case |
|------|-----------|-----------------|--------|----------|
| Tier 1 (günstig) | Schnell & billig | Haiku 3.5, Gemini Flash, GPT-4o-mini | ~70% | Einfache Fragen, Klassifikation, Routing |
| Tier 2 (standard) | Allrounder | Sonnet 4.6, GPT-5, Gemini 2.5 Pro | ~25% | Standard-Aufgaben, moderate Komplexität |
| Tier 3 (premium) | Frontier | Opus 4.7, GPT-5.5, o3 | ~5% | Komplexes Reasoning, kritische Entscheidungen |

### Routing-Strategien

**Regelbasiert (einfach):**

- Nach Thema: FAQ-Fragen → Tier 1, Beschwerden → Tier 2, Eskalationen → Tier 3
- Nach Token-Länge: Kurze Anfragen → Tier 1, lange → Tier 2
- Nach Schlüsselwörtern: "Rechnung", "Vertrag", "Kündigung" → höheres Tier

**KI-gestütztes Routing (fortgeschritten):**

Ein kleines, schnelles Modell (selbst Tier 1) analysiert die Anfrage und entscheidet, welches Tier zuständig ist. Das kostet wenige Cents pro Routing-Entscheidung und spart Hunderte Euro an fehlgeleitetem Frontier-Compute.

**Kaskaden-Routing:**

Starte immer mit Tier 1. Wenn das Ergebnis eine niedrige Confidence hat oder der Nutzer unzufrieden ist, eskaliere automatisch zu Tier 2, dann Tier 3. Nachteil: höhere Latenz bei Eskalation.

### Die Kostenrechnung

Beispiel bei 100.000 API-Aufrufen pro Monat:

- **Ohne Routing (alles Opus):** ~$3.000-5.000/Monat
- **Mit 70/25/5-Routing:** ~$400-800/Monat
- **Ersparnis:** 60-85%

Bei gleichwertiger Gesamtqualität, weil die einfachen Aufgaben auch vom günstigen Modell perfekt gelöst werden.

### Tools für Multi-Model-Routing

- **LiteLLM:** Open-Source-Proxy, der als einheitlicher Endpunkt vor beliebig vielen Modellen sitzt. Du konfigurierst Routing-Regeln, LiteLLM leitet die Anfragen.
- **OpenRouter:** Managed API, die Zugang zu 100+ Modellen über eine einzelne API bietet. Inkl. automatischem Routing und Fallback.

Vertiefung im Querschnitt Production (Stufe 5+).

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [LiteLLM](https://github.com/BerriAI/litellm) | OSS Multi-Model-Proxy |
| :hammer_and_wrench: | [OpenRouter](https://openrouter.ai) | Managed Multi-Model-API |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Multi-Model-Routing Kosten spart, ohne die Qualität zu senken?
- [ ] Verstehst du die typische 70/25/5-Verteilung und welche Modelle in welches Tier gehören?
- [ ] Kannst du drei verschiedene Routing-Strategien beschreiben?
- [ ] Weißt du, welche Tools dir beim Multi-Model-Routing helfen?
