---
title: "Cost-Awareness-Mini-Block"
module: "cost"
type: index
fast_track: true
effort: "1-2h"
---

# Cost-Awareness-Mini-Block *(vor Modul 2.2)*

**Aufwand:** 1-2h  
**Voraussetzungen:** Modul 2.1

## Warum dieser Block existiert

In v2.0 war Cost-Engineering im Production-Querschnitt verankert — also im hinteren Teil des Curriculums. Das ist zu spät: Wer in Stufe 2 anfängt, viele Cloud-Tools intensiv zu testen, kann ohne Cost-Bewusstsein schnell überraschend hohe Rechnungen produzieren. Dieser Mini-Block gibt dir das Mindest-Bewusstsein, **bevor** du in Modul 2.2 die Tools-Landschaft durchprobierst.

## Lernziel

Du kannst grob abschätzen, was eine API-Anfrage kostet, bevor du sie machst. Du kennst das Verhältnis Input-zu-Output-Pricing. Du weißt, welche Heuristiken die Cost in Stufen 2-4 niedrig halten.

## Theorie-Übersicht

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [Token-Pricing-Grundlogik](theorie/token-pricing.md) | :material-check: | 15min |
| 2 | [Output ist 3-5x teurer als Input](theorie/output-teurer.md) | :material-check: | 15min |
| 3 | [Modell-Tiers haben Faktor-10-Spreads](theorie/modell-tiers.md) | :material-check: | 15min |
| 4 | [Prompt Caching](theorie/prompt-caching.md) | :material-check: | 15min |
| 5 | [Free-Tier-Realität Mai 2026](theorie/free-tier.md) | :material-check: | 15min |
| 6 | [Cost-Tracking-Tools für Anfänger](theorie/cost-tracking.md) | :material-minus: | 15min |
| 7 | [Lokale Modelle: Strom-Cost statt Token-Cost](theorie/lokale-modelle.md) | :material-check: | 15min |

## Praxis: Hauptprojekt — Persönliches Cost-Verständnis

- **Berechne**: Wie teuer wäre es, eine 5-Seiten-PDF (~5000 Tokens Input) durch jedes der drei Frontier-Modelle (Claude Opus, GPT-5, Gemini 3.1) zu schicken und 1000 Tokens Antwort zu bekommen? Schreib die Zahlen in `cost-awareness.md` im Portfolio.
- **Cost-Limit setzen**: In allen Provider-Consoles, die du nutzt, ein hartes monatliches Limit setzen (z.B. $5 oder $10 für Stufe 2). Screenshot der Setting-Seite ins Portfolio.
- **Cheap-First-Routine etablieren**: deine drei meistgenutzten Prompts aus Modul 2.1 nochmal mit dem **günstigsten Modell** durchlaufen lassen — wann reicht es, wann nicht?

## Mehrwert-Mini-Projekt

**Cost-Cheat-Sheet** als 1-Pager im Portfolio: Pricing der drei Provider, Faustregel-Umrechnung "1 deutsche Buchseite ≈ X Tokens ≈ Y Cent bei Modell Z". Update halbjährlich.

## Open-Source-Pfad

Komplett mit Ollama lokal arbeiten. Cost-Bewusstsein bleibt trotzdem nützlich — sobald du mit anderen über deine Architektur sprichst (Stufe 9, 10), brauchst du Cloud-Cost-Realität für ehrliche Build-vs-Buy-Diskussionen.

## Outcome-Check

- [ ] Cost für 5-Seiten-PDF durch drei Modelle berechnet und dokumentiert
- [ ] Cost-Limit in mindestens einer Provider-Console gesetzt (Screenshot)
- [ ] Cheap-First-Routine bewusst angewendet, Notizen wann ausreichend
- [ ] Optional: Cost-Cheat-Sheet im Portfolio
