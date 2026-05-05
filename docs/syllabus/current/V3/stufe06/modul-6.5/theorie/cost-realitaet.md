---
title: "Cost-Realität: Computer Use ist 5-20x teurer"
module: "6.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Cost-Realität: Computer Use ist 5-20x teurer

## Kernidee

Computer Use ist dramatisch teurer als API-Calls, weil jede einzelne Aktion einen Screenshot-Upload plus einen LLM-Call erfordert. Ein 30-Step-Browser-Task kostet schnell $2-5. Im Vergleich: ein äquivalenter API-basierter Task kostet oft unter $0.10. Diese Cost-Realität muss in jede Computer-Use-Entscheidung eingerechnet werden.

## Im Detail

**Warum Computer Use so teuer ist:**

Jeder Aktion-Cycle kostet:
1. Screenshot aufnehmen und senden (Bild-Tokens: 1 Screenshot ≈ 1.000-3.000 Tokens bei 1080p).
2. LLM-Call zur Aktion-Entscheidung.
3. Aktion ausführen (keine Kosten).
4. Neuer Screenshot (zurück zu Schritt 1).

Ein 30-Step-Task × 2.000 Tokens pro Screenshot × Claude Sonnet-Preis ≈ $2-5.

**Vergleich: API-basierter Task:**
Dieselbe Aufgabe via API: direkter Daten-Abruf, keine Screenshots, 1 LLM-Call pro Ergebnis. Kosten: <$0.10.

**Wann die Kosten akzeptabel sind:**
- Der manuelle Task würde 30+ Minuten dauern (Zeitersparnis überwiegt Kosten).
- Der Task kann nicht via API gemacht werden (kein Alternativ-Pfad).
- Der Task ist selten (1x pro Woche statt 100x täglich).

**Wann die Kosten nicht akzeptabel sind:**
- High-Volume: 1.000 Tasks/Tag × $3 = $3.000/Tag. Nicht skalierbar.
- Wenn eine API-Alternative existiert: $0.10 vs. $3 ist eine klare Entscheidung.
- Kostensensitive Projekte ohne klaren ROI.

**Cost-Tracking als Pflicht:**
Für jede Computer-Use-Session: Tokens pro Screenshot, Anzahl Screenshots, gesamte Session-Kosten dokumentieren. Ohne Tracking keine informierte Entscheidung, ob Computer Use sich lohnt.

**Optimierungstricks:**
- Screenshot-Kompression: niedrigere Auflösung = weniger Bild-Tokens.
- Frühe Terminierung: Agent stoppt sobald er das Ziel erreicht, nicht nach fixer Iterations-Zahl.
- Caching: wenn derselbe UI-Zustand mehrfach auftritt, Screenshot-Beschreibung cachen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic Pricing](https://www.anthropic.com/pricing) | Aktuelle Token-Preise |

## Teste dein Verständnis

- [ ] Berechne die ungefähren Kosten für einen 20-Step-Browser-Task mit Claude Sonnet.
- [ ] Unter welchen Bedingungen ist ein $3-Computer-Use-Task trotzdem wirtschaftlich sinnvoll?
- [ ] Nenne zwei Optimierungstricks, die die Cost pro Computer-Use-Run senken.
