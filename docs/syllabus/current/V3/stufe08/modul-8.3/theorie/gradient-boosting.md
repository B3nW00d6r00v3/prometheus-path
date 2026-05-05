---
title: "Gradient Boosting konzeptionell"
module: "8.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Gradient Boosting konzeptionell

## Kernidee

Gradient Boosting baut schwache Modelle (shallow Decision Trees) sequenziell auf: jeder neue Tree lernt die Fehler (Residuen) der vorherigen Trees zu korrigieren. Das ist im Wesentlichen Gradient Descent im Funktionsraum — statt Gewichte zu aktualisieren, fügt man dem Ensemble einen neuen Schätzer hinzu. Am Ende addieren sich viele schwache Modelle zu einem starken.

## Im Detail

**Die Intuition — Schritt für Schritt:**

Angenommen, wir wollen ein Hauspreismodell bauen:

1. **Initialisierung:** Starte mit dem Mittelwert aller Hauspreise als Vorhersage.
   - Vorhersage₀ = Ø(y) für alle Häuser

2. **Erste Iteration:** Berechne Residuen (Fehler): `r₁ = y - Vorhersage₀`
   - Trainiere einen kleinen Tree auf diese Residuen.
   - Füge dessen Vorhersage (mit Learning Rate η) zur Gesamtvorhersage hinzu.
   - Vorhersage₁ = Vorhersage₀ + η × Tree₁(X)

3. **Nächste Iteration:** Berechne neue Residuen auf Vorhersage₁, trainiere Tree₂ darauf.

4. **Wiederholen** für N Trees.

**Finale Vorhersage:**
```
ŷ = F₀ + η×Tree₁(x) + η×Tree₂(x) + ... + η×TreeN(x)
```

**Gradient-Descent-Analogie:**

In klassischem Gradient Descent minimierst du die Loss-Funktion, indem du Parameter in Richtung des negativen Gradienten änderst:
```
θ := θ - η × ∂L/∂θ
```

Im Gradient Boosting minimierst du im Funktionsraum: der neue Tree approximiert den negativen Gradienten der Loss-Funktion bzgl. der aktuellen Vorhersagen — daher "Gradient" Boosting.

**Warum funktioniert das so gut?**

- Jeder Tree ist "schwach" (wenige Knoten) — wenig Overfitting pro Tree.
- Viele schwache Schätzer kombiniert → starkes Ensemble.
- Durch Learning Rate η wird jeder Tree klein gewichtet → langsames, stabiles Lernen.
- Flexibel: durch Wahl der Loss-Funktion passt sich Boosting an verschiedene Probleme an (Regression, Klassifikation, Ranking).

**Unterschied zu Random Forests:**

| | Random Forest | Gradient Boosting |
|--|--|--|
| Trees | Parallel, unabhängig | Sequenziell, abhängig |
| Jeder Tree | Full-sized | Shallow (klein) |
| Stärke | Robust, parallel | Oft besser Performance |
| Trainingszeit | Parallelisierbar | Sequenziell |
| Tuning | Wenig nötig | Mehr Hyperparameter |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Gradient Boost Part 1](https://www.youtube.com/watch?v=3CC4N4z3GJc) | Beste intuitive Erklärung |
| 🎥 Video | [StatQuest — Gradient Boost Part 2](https://www.youtube.com/watch?v=2xudPOBz-vs) | Math dahinter |
| 📖 Artikel | [Towards Data Science — GBM Explained](https://towardsdatascience.com/understanding-gradient-boosting-machines-9be756fe76ab) | Detailliertere Darstellung |

## Teste dein Verständnis

- [ ] Was lernt jeder neue Tree im Gradient Boosting?
- [ ] Warum sollen die einzelnen Trees "schwach" sein (wenige Knoten)?
- [ ] Was passiert, wenn du die Learning Rate η sehr hoch setzt?
- [ ] Erkläre in eigenen Worten, warum es "Gradient" Boosting heißt.
