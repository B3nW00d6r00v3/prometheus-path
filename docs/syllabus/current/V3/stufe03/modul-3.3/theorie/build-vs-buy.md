---
title: "Build-vs-Buy-Entscheidung"
module: "3.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Build-vs-Buy-Entscheidung

## Kernidee

Bevor du anfängst, ein KI-System zu bauen, stell eine unbequeme Frage: Gibt es das schon? Die meisten KI-Use-Cases sind keine Snowflakes — für viele existieren Off-the-Shelf-Lösungen, die schneller, billiger und besser gewartet sind als dein Custom-Build. Build nur, wenn es dir einen echten Wettbewerbsvorteil bringt.

## Im Detail

**Die Faustregel:**

| Faktor | → Build | → Buy |
|---|---|---|
| Wettbewerbsvorteil | Kerngeschäft, Differenzierung | Standard-Aufgabe, kein Differenzierungspotenzial |
| Time-to-Market | Nicht kritisch, langfristige Investition | Dringend, Lösung muss schnell stehen |
| Datenhoheit | Eigene Daten dürfen System nicht verlassen | Standard-Daten, keine Geheimhaltung |
| Verfügbarkeit | Keine Off-the-Shelf-Lösung existiert | Gute Lösungen am Markt |
| Team-Kompetenz | KI-Engineering-Team vorhanden | Kein internes KI-Team |

**Häufige Fehler:**

- **"Not Invented Here"-Syndrom:** Team will bauen, weil Bauen spannender ist als Evaluieren.
- **Unterschätzung der Wartung:** Ein Custom-Build kostet nicht nur Entwicklung, sondern laufend Monitoring, Updates, Modell-Re-Training.
- **Überschätzung der Einzigartigkeit:** "Unser Use-Case ist so speziell, dass nichts Fertiges passt" — stimmt seltener als man denkt.

**Build-vs-Buy ist ein Spektrum:**

Oft ist die Antwort weder reines Build noch reines Buy, sondern ein Hybrid: Off-the-Shelf-Lösung als Basis, Custom-Anpassung darauf (Fine-Tuning, eigene Prompts, Workflow-Integration). Vertiefung in Modul 9.4.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Thoughtworks — Build vs Buy](https://www.thoughtworks.com/insights/articles/build-vs-buy) | Klassischer Rahmen für die Entscheidung |

## Teste dein Verständnis

- [ ] Kannst du die drei Kriterien nennen, wann Build sinnvoller ist als Buy?
- [ ] Warum ist die Wartung eines Custom-Builds oft der teuerste Faktor?
- [ ] Was ist ein Hybrid-Ansatz zwischen Build und Buy?
