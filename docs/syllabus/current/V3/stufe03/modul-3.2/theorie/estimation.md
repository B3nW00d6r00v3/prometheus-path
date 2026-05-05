---
title: "Story-Estimation mit KI"
module: "3.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Story-Estimation mit KI-Hilfe

## Kernidee

Story-Estimation (Aufwandschätzung) ist bewusst ungenau — Story Points oder T-Shirt-Sizes drücken relative Komplexität aus, nicht Stunden. KI kann historische Vergleiche liefern ("ähnliche Stories wurden mit 5 Punkten bewertet"), aber die finale Schätzung muss im Team bleiben. Der Wert der Estimation liegt in der Diskussion, nicht in der Zahl.

## Im Detail

**Warum relative Schätzung?**

Absolute Zeitschätzungen ("das dauert 3 Tage") sind notorisch ungenau. Story Points drücken relative Komplexität aus: "Diese Story ist doppelt so komplex wie jene." Das ist leichter zu schätzen und konsistenter.

**Gängige Skalen:**

- **Fibonacci:** 1, 2, 3, 5, 8, 13, 21 (Lücken erzwingen Entscheidungen)
- **T-Shirt-Sizes:** XS, S, M, L, XL (einfacher für Anfänger)
- **Planning Poker:** Team-Mitglieder schätzen gleichzeitig, Unterschiede werden diskutiert

**KI-Augmentation bei Estimation:**

- **Comparable Stories:** KI durchsucht das Backlog und findet ähnliche, bereits geschätzte Stories ("Diese Story ähnelt Story #42, die mit 5 Punkten bewertet wurde").
- **Complexity-Analyse:** KI analysiert die Story-Beschreibung und markiert Komplexitätsfaktoren (externe Abhängigkeiten, unklare Anforderungen, technische Risiken).
- **Historische Accuracy:** KI vergleicht Schätzungen mit tatsächlichem Aufwand und zeigt Bias-Muster ("Ihr unterschätzt Backend-Stories systematisch um 40%").

**Aber: KI darf nicht die finale Schätzung treffen.** Der Wert von Planning Poker liegt nicht in der Zahl, sondern in der Team-Diskussion. Wenn zwei Team-Mitglieder unterschiedlich schätzen, offenbart die Diskussion Missverständnisse. Das kann keine KI ersetzen.

**Typischer Fehler:** KI-generierte Schätzung blind übernehmen, weil sie "objektiver" wirkt. Sie ist nicht objektiver — sie basiert auf Pattern-Matching in Trainingsdaten, nicht auf Kenntnis deines Projekts.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Mike Cohn — Estimating with Story Points](https://www.mountaingoatsoftware.com/agile/scrum/scrum-tools/planning-poker) | Klassische Referenz |
| 📖 | [Atlassian — Story Points](https://www.atlassian.com/agile/project-management/estimation) | Praxis-Guide |

## Teste dein Verständnis

- [ ] Warum sind relative Schätzungen (Story Points) besser als absolute Zeitangaben?
- [ ] Wo kann KI bei der Estimation helfen, und wo muss der Mensch entscheiden?
- [ ] Was ist der eigentliche Wert von Planning Poker?
