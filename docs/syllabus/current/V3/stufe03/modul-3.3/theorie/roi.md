---
title: "ROI-Schätzung für KI-Use-Cases"
module: "3.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# ROI-Schätzung für KI-Use-Cases

## Kernidee

ROI (Return on Investment) beantwortet eine simple Frage: Bringt das, was du baust, mehr Wert als es kostet? Bei KI-Projekten ist das schwieriger als bei klassischer Software, weil der Wert oft indirekt ist (weniger Fehler, schnellere Prozesse) und die Kosten laufend anfallen (API-Calls, Monitoring). Trotzdem: Eine grobe ROI-Schätzung zwingt dich, ehrlich zu rechnen — und sortiert die Hälfte aller "coolen Ideen" aus.

## Im Detail

**Drei Wert-Kategorien:**

1. **Cost Reduction** — weniger manuelle Arbeit. Formel: X Stunden × Y €/Stunde × Anzahl Mitarbeitende. Beispiel: 5 Mitarbeitende sparen je 2h/Woche durch KI-gestützte E-Mail-Triage → 10h × 50€ × 52 Wochen = 26.000€/Jahr.

2. **Revenue Increase** — mehr Umsatz. Beispiel: höhere Conversion durch personalisierte Empfehlungen, mehr Sales durch schnellere Lead-Qualifizierung.

3. **Risk Reduction** — weniger Schaden. Beispiel: weniger Compliance-Strafen, weniger Bugs in Produktion, schnellere Incident-Erkennung. Schwer zu beziffern, aber real.

**Kosten-Seite:**

| Kostenfaktor | Einmalig / Laufend |
|---|---|
| Entwicklung (Team, Zeit) | Einmalig |
| API-Kosten (Token-basiert) | Laufend |
| Hosting / Infrastruktur | Laufend |
| Monitoring & Wartung | Laufend |
| Re-Training / Prompt-Optimierung | Periodisch |

**ROI-Formel (vereinfacht):**

```
ROI = (Jährlicher Wert - Jährliche Kosten) / Gesamtinvestition
```

**Wichtig:** Eine grobe Schätzung mit dokumentierten Annahmen ist besser als keine Schätzung. Die Annahmen machen die Schätzung diskutierbar — und genau das ist der Punkt.

Vertiefung der ROI-Methodik in Modul 9.2 (KI-Strategie).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [McKinsey — State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | Branchenübergreifende ROI-Daten |
| 📖 | [Strategyzer — Testing Business Ideas](https://www.strategyzer.com/library/testing-business-ideas) | MVP + Business Case Methodik |

## Teste dein Verständnis

- [ ] Kannst du die drei Wert-Kategorien (Cost Reduction, Revenue Increase, Risk Reduction) mit je einem Beispiel erklären?
- [ ] Warum sind laufende Kosten bei KI-Projekten oft höher als bei klassischer Software?
- [ ] Was macht eine ROI-Schätzung "diskutierbar"?
