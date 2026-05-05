---
title: "Sensitivity Analysis für KI-Business-Cases"
module: "9.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Sensitivity Analysis für KI-Business-Cases

## Kernidee

Ein Business Case basiert auf Annahmen — und Annahmen können falsch sein. Sensitivity Analysis zeigt, welche Annahme den ROI am stärksten beeinflusst, und macht den Business Case ehrlicher und debattierbarer.

## Im Detail

**Vorgehen:**

1. Die 3-5 wichtigsten Annahmen identifizieren (z.B. Zeit-Ersparnis pro Mitarbeiter, Adoption-Rate nach 6 Monaten, API-Kosten pro Anfrage).

2. Für jede Annahme: +/- 20% Variation simulieren (oder realistischere Szenarien wie -50%, +100%).

3. Auswirkung auf ROI, NPV, Payback Period berechnen.

4. Die Annahme mit der größten ROI-Sensitivität identifizieren — das ist die Annahme, auf die sich Validierungsaufwand konzentrieren sollte.

**Beispiel:**
- Annahme A: Zeitersparnis 2h/Woche/Mitarbeiter. Bei -20% (1,6h) sinkt ROI von 250% auf 190%.
- Annahme B: API-Kosten 0,01€/Anfrage. Bei +100% (0,02€) sinkt ROI von 250% auf 230%.
- Schluss: Annahme A ist sensitiver — ihr muss mehr Aufmerksamkeit in der Pilot-Eval geschenkt werden.

**Kommunikations-Wert:** Sensitivity Analysis zeigt dem Stakeholder, dass der Business Case nicht naiv ist, sondern reale Unsicherheiten explizit macht.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Buch | [Strategyzer — Testing Business Ideas](https://www.strategyzer.com/library/testing-business-ideas) | Annahmen-Tests in Business-Cases |

## Teste dein Verständnis

- [ ] Führe eine Sensitivity Analysis für deinen Capstone-Use-Case durch — welche Annahme ist am kritischsten?
- [ ] Erkläre einem CFO in zwei Sätzen, warum eine Sensitivity Analysis den Business Case stärkt, nicht schwächt.
- [ ] Was tust du, wenn die wichtigste Annahme nicht valide messbar ist?
