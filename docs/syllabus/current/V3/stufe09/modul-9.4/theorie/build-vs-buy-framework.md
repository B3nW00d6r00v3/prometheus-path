---
title: "Build-vs-Buy-Decision-Framework"
module: "9.4"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Build-vs-Buy-Decision-Framework

## Kernidee

Build-vs-Buy ist keine binäre Frage, sondern eine strukturierte Entscheidung entlang fünf Dimensionen. Wer nur eine Dimension betrachtet (z.B. nur TCO), trifft systematisch falsche Entscheidungen.

## Im Detail

**Fünf Dimensionen der Build-vs-Buy-Entscheidung:**

1. **Strategic Fit** — ist das KI-System Kerngeschäft oder Hygiene-Faktor?
   - Kerngeschäft (Differenziator): eher Build.
   - Hygiene-Faktor (jeder hat es, niemand differenziert damit): eher Buy.

2. **Available Solutions** — gibt es etablierte Off-the-Shelf-Tools?
   - Reife, etablierte Tools: eher Buy.
   - Kein Tool erfüllt Anforderungen: eher Build.

3. **TCO-Vergleich** — Build vs. Buy über 3-5 Jahre.
   - Vertiefung in [theorie/tco-build-vs-buy.md](tco-build-vs-buy.md).

4. **Time-to-Market** — wie schnell wird die Lösung gebraucht?
   - Schnell nötig: eher Buy (kürzere Time-to-Value).
   - Zeit vorhanden: Build möglicher.

5. **Vendor-Lock-in-Risk** — wie stark macht man sich abhängig?
   - Hoher Lock-in: eher Build oder Open-Source-Buy.
   - Niedriger Lock-in (offene Standards, portierbare Daten): Buy akzeptabler.

**Entscheidungslogik:** Alle fünf Dimensionen bewerten, dann abwägen. Keine Dimension allein entscheidet — aber Strategic Fit hat Veto-Recht: ein Use-Case, der echter Wettbewerbsvorteil sein soll, sollte nicht auf einem generischen SaaS-Tool aufgebaut werden.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Artikel | [a16z — Build vs. Buy in AI](https://a16z.com) | Investoren-Perspektive auf Build-vs-Buy |
| Analyst | [Gartner — Build vs Buy Framework](https://www.gartner.com) | Enterprise-Perspektive |

## Teste dein Verständnis

- [ ] Bewerte deinen Capstone-Use-Case auf allen fünf Dimensionen — was ergibt sich?
- [ ] Nenne ein Beispiel, wo Strategic Fit klar für Build spricht, obwohl TCO für Buy sprechen würde.
- [ ] Warum ist Time-to-Market eine eigene Dimension und nicht Teil von TCO?
