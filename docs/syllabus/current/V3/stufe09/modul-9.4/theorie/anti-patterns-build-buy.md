---
title: "Anti-Patterns bei Build-vs-Buy"
module: "9.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Anti-Patterns bei Build-vs-Buy

## Kernidee

Fünf Anti-Patterns führen systematisch zu falschen Build-vs-Buy-Entscheidungen. Das häufigste: Build-Bias in Tech-Organisationen, weil Eigenentwicklung spannender ist als die ehrliche Frage, ob ein Off-the-Shelf-Tool reicht.

## Im Detail

**1. Build-Bias:**
- „Wir können das auch" — ohne zu rechnen, ob es schneller, günstiger und besser wäre, es zu kaufen.
- Besonders häufig in Engineering-getriebenen Organisationen.
- Gegenstrategie: TCO-Vergleich als Pflicht vor jeder Build-Entscheidung.

**2. NIH-Syndrom (Not Invented Here):**
- Ablehnung externer Lösungen aus kulturellen Gründen, nicht aus rationalen.
- „Wir vertrauen fremdem Code nicht" — obwohl der eigene Code schlechter ist.
- Gegenstrategie: explizites Kriterium für NIH-Erkennung in der Entscheidungs-Checkliste.

**3. Buy-Naivität:**
- Nur Lizenzkosten berechnen, Implementation, Customization und Integration vergessen.
- Buy kann am Ende teurer sein als erwartet.
- Gegenstrategie: vollständiger TCO-Vergleich, nicht nur Lizenz-Vergleich.

**4. Wettbewerbsvorteils-Theater:**
- Standard-Use-Case (z.B. allgemeiner Chatbot) als „strategischer Differenziator" verkauft.
- Rechtfertigt Build-Aufwand mit falschen Differenzierungs-Argumenten.
- Gegenstrategie: Differenzierungs-Prüfung: „Was macht das für Wettbewerber nicht replizierbar?"

**5. Premature Scaling:**
- Direkt Vollausbau bauen, bevor der Use-Case validiert ist.
- Wenn Pilot scheitert: alles investiert, kein Rückzug möglich.
- Gegenstrategie: Pilot-Gates aus Modul 9.2.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | [Build-vs-Buy-Framework](build-vs-buy-framework.md) | Strukturierte Gegenstrategie |

## Teste dein Verständnis

- [ ] Welches dieser Anti-Patterns ist in deiner Organisation oder deinem Kontext am häufigsten?
- [ ] Wie erkennst du Build-Bias früh in einem Entscheidungsprozess?
- [ ] Beschreibe ein Beispiel für Wettbewerbsvorteils-Theater bei einem KI-Use-Case.
