---
title: "Token-Pricing-Grundlogik"
module: "cost"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Token-Pricing-Grundlogik

## Kernidee

Cloud-LLMs kosten Geld pro Nutzung, und die Währung ist "Tokens". Du bezahlst pro Million verarbeiteter Tokens, getrennt nach Input (was du dem Modell gibst) und Output (was es antwortet). Das ist wie Telefonieren: du zahlst für die Minuten, die du sprichst — nur hier sind es Wort-Stücke statt Minuten. Die gute Nachricht: Für normales Lernen und Experimentieren reden wir von Cent-Beträgen, nicht von Euro.

## Überblick: Preisstruktur Mai 2026

| Modell | Anbieter | Input / 1M Tokens | Output / 1M Tokens | Tier |
|--------|----------|-------------------|-------------------|------|
| GPT-4o | OpenAI | $2,50 | $10,00 | Frontier |
| GPT-4o-mini | OpenAI | $0,15 | $0,60 | Budget |
| Claude Sonnet 4.6 | Anthropic | $3,00 | $15,00 | Frontier |
| Claude Haiku 3.5 | Anthropic | $0,80 | $4,00 | Budget |
| Claude Opus 4.7 | Anthropic | $15,00 | $75,00 | Premium |
| Gemini 2.5 Pro | Google | $1,25 | $10,00 | Frontier |
| Gemini 2.5 Flash | Google | $0,15 | $0,60 | Budget |
| DeepSeek V3 | DeepSeek | $0,27 | $1,10 | Budget |
| Llama 4 (via API) | Diverse | $0,10-$0,50 | $0,40-$2,00 | Open Source |

*Preise Stand Mai 2026. Trend: Preise fallen alle 6-12 Monate deutlich.*

## Im Detail

### Was "pro Million Tokens" in der Praxis bedeutet

"$3 pro 1 Million Input-Tokens" klingt abstrakt. Hier die Übersetzung:

| Was du tust | Ungefähre Tokens | Cost bei Claude Sonnet ($3/1M) |
|-------------|-----------------|-------------------------------|
| Ein kurzer Prompt (2 Sätze) | ~50 Tokens | $0,00015 (≈ 0,015 Cent) |
| Eine E-Mail zusammenfassen lassen | ~500 Tokens | $0,0015 (≈ 0,15 Cent) |
| Ein 5-Seiten-PDF hochladen | ~2.000 Tokens | $0,006 (≈ 0,6 Cent) |
| Ein 50-Seiten-Report analysieren | ~20.000 Tokens | $0,06 (≈ 6 Cent) |
| Ein ganzes Buch (300 Seiten) | ~120.000 Tokens | $0,36 (≈ 36 Cent) |

**Fazit:** Einzelne Anfragen kosten fast nichts. Erst bei hohem Volumen (hunderte Calls pro Tag) oder bei teuren Modellen (Opus) wird es relevant.

### Input + Output = Gesamtkosten

Jeder API-Call hat zwei Kostenkomponenten:

1. **Input-Tokens:** Dein Prompt + System-Prompt + Konversationshistorie + hochgeladene Dokumente
2. **Output-Tokens:** Die Antwort des Modells

**Rechenbeispiel:** Du schickst ein 5-Seiten-PDF (2.000 Input-Tokens) an Claude Sonnet und bittest um eine 500-Wort-Zusammenfassung (≈750 Output-Tokens):

- Input: 2.000 / 1.000.000 × $3,00 = $0,006
- Output: 750 / 1.000.000 × $15,00 = $0,011
- **Gesamt: $0,017 ≈ 1,7 Cent**

### Die versteckten Input-Tokens

Was viele übersehen: Bei jedem Call in einem Chat werden alle bisherigen Nachrichten als Input mitgeschickt. In einer Konversation mit 20 Nachrichten schickst du bei der 21. Nachricht die gesamte History als Input mit. Das summiert sich:

| Nachricht Nr. | Kumulierte Input-Tokens (geschätzt) | Input-Cost bei Sonnet |
|---------------|-------------------------------------|----------------------|
| 1 | 100 | $0,0003 |
| 5 | 2.000 | $0,006 |
| 10 | 5.000 | $0,015 |
| 20 | 15.000 | $0,045 |
| 50 | 50.000 | $0,15 |

**Tipp:** Lange Konversationen werden exponentiell teurer. Starte einen neuen Chat, wenn das Thema wechselt.

### Preistrend: Es wird billiger

Die Preise fallen mit jeder Modellgeneration. Grobe Orientierung:

- **2023:** GPT-4 Input: $30/1M Tokens
- **2024:** GPT-4o Input: $5/1M Tokens (6x günstiger)
- **2025:** GPT-4o Input: $2,50/1M Tokens (nochmal halbiert)
- **2026:** Budget-Modelle unter $0,20/1M Tokens

**Faustregel:** Alle 12 Monate halbiert sich der Preis für vergleichbare Qualität. Was heute teuer ist, ist in einem Jahr günstig.

### Abo vs. API: Zwei Welten

| Aspekt | Abo ($20/Monat) | API (Pay-per-Token) |
|--------|-----------------|---------------------|
| Zugang | Chat-Interface (ChatGPT Plus, Claude Pro) | Programmatischer Zugang |
| Kosten | Fix $20/Monat | Variabel, je nach Nutzung |
| Limit | Rate Limits (Messages/Stunde) | Budget-Limit selbst setzen |
| Besser für | Gelegenheitsnutzer, Lerner | Entwickler, Automatisierung |
| Break-Even | Bei normaler Chat-Nutzung günstiger | Bei wenig Nutzung günstiger |

**Für Stufe 2:** Das $20-Abo oder Free-Tier reicht völlig. API-Kosten werden erst ab Stufe 4-5 relevant, wenn du programmierst.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Aktuelle Claude-Preise |
| :book: | [OpenAI Pricing](https://openai.com/pricing) | Aktuelle GPT-Preise |
| :book: | [Google AI Pricing](https://ai.google.dev/pricing) | Aktuelle Gemini-Preise |
| :hammer_and_wrench: | [LLM Stats](https://llm-stats.com) | Preisvergleich aller Modelle auf einen Blick |
| :hammer_and_wrench: | [LLM Price Check](https://llmpricecheck.com) | Cost-Rechner für verschiedene Szenarien |

## Teste dein Verständnis

- [ ] Berechne: Du schickst täglich 20 Prompts à 500 Input-Tokens und bekommst je 300 Output-Tokens Antwort. Was kostet das pro Monat bei Claude Sonnet vs. GPT-4o-mini?
- [ ] Warum werden Chat-Konversationen mit zunehmender Länge teurer — auch wenn deine eigenen Nachrichten kurz bleiben?
- [ ] Ab welcher Nutzungsintensität lohnt sich ein $20-Abo gegenüber Pay-per-Token? Schätze grob.
