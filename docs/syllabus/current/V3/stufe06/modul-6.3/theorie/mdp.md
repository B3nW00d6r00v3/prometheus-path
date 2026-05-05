---
title: "Markov Decision Process (MDP)"
module: "6.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Markov Decision Process (MDP)

## Kernidee

Ein MDP ist das formale Modell für sequentielle Entscheidungen unter Unsicherheit. Es beschreibt, was ein Agent in einer Welt tut: er beobachtet einen Zustand, wählt eine Aktion, erhält eine Belohnung, und landet in einem neuen Zustand. Dieses einfache Modell ist die mathematische Grundlage aller RL-Algorithmen.

## Im Detail

**Die fünf Komponenten eines MDP:**

1. **S — State Space:** Menge aller möglichen Zustände der Welt. In FrozenLake: die 16 Felder des Gitters. In einem LLM-Agent: der gesamte Context-Window-Inhalt (sehr hochdimensional).

2. **A — Action Space:** Menge aller möglichen Aktionen pro Zustand. In FrozenLake: {links, rechts, oben, unten}. In einem LLM-Agent: {Tool-Call, Text-Antwort, Abschluss}.

3. **P(s'|s,a) — Transition Function:** Wahrscheinlichkeit, nach Aktion `a` in Zustand `s` in Zustand `s'` zu landen. Stochastisch (nicht deterministisch) in realistischen Umgebungen.

4. **R(s,a) — Reward Function:** Belohnung für das Ausführen von Aktion `a` in Zustand `s`. Definiert, was "gut" bedeutet. Dies ist eine der schwierigsten Design-Entscheidungen.

5. **γ — Discount Factor (0 < γ ≤ 1):** Wie stark werden zukünftige Belohnungen abgezinst? γ = 1 bedeutet gleichwertig, γ = 0 bedeutet nur unmittelbare Belohnung zählt.

**Die Markov-Eigenschaft:** Der nächste Zustand hängt nur vom aktuellen Zustand ab, nicht von der gesamten Vergangenheit. Das vereinfacht die Mathematik erheblich — und ist eine Vereinfachungsannahme, die in echten Systemen oft verletzt wird.

**Bezug zu LLM-Agenten:** LLM-Agenten erfüllen die Markov-Eigenschaft formal nicht (der Context-Window ist sehr groß und enthält "Geschichte"). Aber MDP-Denken hilft trotzdem: wenn du einen Agent-Use-Case modellierst, frage: Was ist der State? Was sind die Actions? Was ist der Reward?

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Wikipedia — MDP](https://en.wikipedia.org/wiki/Markov_decision_process) | Guter Überblick |
| 📖 Buch | [Sutton & Barto — Kapitel 3](http://incompleteideas.net/book/the-book.html) | Formale Herleitung |

## Teste dein Verständnis

- [ ] Nenne die fünf Komponenten eines MDP und erkläre jede in einem Satz.
- [ ] Modelliere FrozenLake formal: was ist S, A, P, R, γ?
- [ ] Warum verletzt ein LLM-Agent formal die Markov-Eigenschaft — und warum ist MDP-Denken trotzdem nützlich?
