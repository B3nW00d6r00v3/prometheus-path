---
title: "Time Horizons und Discount Rate"
module: "9.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Time Horizons und Discount Rate

## Kernidee

KI-Projekte investieren vorne und ernten hinten — erst nach 6-12 Monaten entsteht echter Wert. NPV-Berechnung mit Diskontierungsrate macht diesen zeitlichen Versatz explizit und verhindert zu optimistische ROI-Aussagen.

## Im Detail

**Zeitlicher Verlauf typischer KI-Projekte:**
- Monat 1-3: Initial-Kosten (Analyse, Entwicklung, Integration)
- Monat 4-6: Pilot mit geringer Nutzung, erster Wert entsteht langsam
- Monat 7-12: Adoption wächst (S-Kurve), Wert steigt
- Monat 12+: Stabiler Betrieb, laufende Kosten vs. laufender Wert

**Net Present Value (NPV):**
- NPV berechnet den Barwert aller zukünftigen Cashflows, diskontiert auf heute.
- Diskontierungsrate: typisch 8-15% je nach Branche und Risiko.
- Bei kurzen Horizonten (1-2 Jahre) ist NPV-Effekt oft gering und kann vereinfacht werden.
- Bei Projekten über 3+ Jahre: NPV wichtig, da €1 in Jahr 3 weniger wert ist als €1 heute.

**Payback Period** als intuitivere Alternative: ab wann übersteigt kumulierter Wert die kumulierten Kosten? Für operative Entscheider oft verständlicher als NPV.

**Praxis-Vereinfachung:** Für interne Entscheidungen unter 3 Jahren reicht oft: Kosten-Strom vs. Wert-Strom pro Quartal, ohne formale Diskontierung. Wichtig: Adoption-Kurve (Modul 9.6) einbauen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Klassiker | [Lean Startup](http://theleanstartup.com) | Pilot-basiertes Investitions-Denken |

## Teste dein Verständnis

- [ ] Zeichne den zeitlichen Verlauf von Kosten und Wert für deinen Capstone-Use-Case als einfaches Diagramm.
- [ ] Wann ist die Payback Period ein besseres Kommunikationsinstrument als der NPV?
- [ ] Bei welcher Diskontierungsrate würde ein Use-Case mit 24 Monaten Payback Period negativ werden?
