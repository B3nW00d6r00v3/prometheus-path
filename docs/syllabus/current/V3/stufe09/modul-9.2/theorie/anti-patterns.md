---
title: "Anti-Patterns bei ROI-Berechnungen"
module: "9.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Anti-Patterns bei ROI-Berechnungen

## Kernidee

Falsche ROI-Berechnungen sind keine neutrale Fehlentscheidung — sie führen zu überzogenen Erwartungen, Enttäuschungen und Glaubwürdigkeitsverlust für das gesamte KI-Programm. Fünf Anti-Patterns sind besonders verbreitet.

## Im Detail

Die fünf kritischsten Anti-Patterns bei ROI:

1. **Overoptimistic Projections** — „KI wird 80% Zeitersparnis bringen" ohne empirische Basis. Realistische Ersparnis bei bewährten Use-Cases: 15-40%. Ohne Pilot-Daten: immer drei Szenarien statt einer Zahl.

2. **Ignored Hidden Costs** — nur Lizenz- oder API-Kosten berechnen. Eval, Embedding-Re-Generierung, Change-Management, Schulung fehlen systematisch. Ergebnis: laufende Kosten übersteigen das Budget.

3. **Single Number without Confidence** — „ROI ist 250%" ohne Szenario-Range. Wenn Realität 150% liefert, gilt das als Misserfolg, obwohl es gut ist. Mit Range: „150-400%, Base Case 250%" wird 150% als Erfolg gewertet.

4. **No Pilot — direkt Vollausbau** — Business Case ohne Pilot-Validation. Wenn der Use-Case in der Praxis anders funktioniert als geplant, sind alle Ressourcen investiert ohne Rückzugsmöglichkeit.

5. **Sunk Cost Fallacy im Pilot** — Pilot scheitert, aber wird weitergebaut, weil „wir schon so viel investiert haben". Gates verhindern das explizit.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | [Pilot-Phasen mit klaren Gates](pilot-phasen-gates.md) | Gegenmittel für Sunk-Cost-Falle |

## Teste dein Verständnis

- [ ] Welches dieser Anti-Patterns ist in deinem Kontext am wahrscheinlichsten — und warum?
- [ ] Wie verteidigst du eine konservative ROI-Schätzung gegenüber einem Vorstand, der hohe Zahlen erwartet?
- [ ] Beschreibe ein konkretes Beispiel für Sunk-Cost-Falle bei einem KI-Pilot.
