---
title: "Bellman-Gleichung und Value Functions"
module: "6.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Bellman-Gleichung und Value Functions

## Kernidee

Der "Wert" eines Zustands ist die erwartete kumulative Belohnung, die ein Agent ab diesem Zustand erhalten kann. Die Bellman-Gleichung macht diesen Wert rekursiv berechenbar: der Wert von jetzt ist Belohnung jetzt plus abgezinster Wert des besten nächsten Zustands. Aus dieser Gleichung leiten sich alle klassischen RL-Algorithmen ab.

## Im Detail

**Value Function V(s):** Wie gut ist es, in Zustand `s` zu sein? Formal:

```
V(s) = E[R_t + γ·R_{t+1} + γ²·R_{t+2} + ... | S_t = s]
```

Der Agent will V(s) für alle Zustände lernen, um die beste Policy zu finden.

**Bellman-Gleichung (Optimalitäts-Gleichung):**

```
V*(s) = max_a [ R(s,a) + γ · Σ_{s'} P(s'|s,a) · V*(s') ]
```

Interpretation: der optimale Wert eines Zustands ist die maximale Belohnung über alle möglichen Aktionen, jeweils plus der abgezinste optimale Wert des Folgezustands.

**Q-Function Q(s,a):** Wie gut ist es, in Zustand `s` Aktion `a` auszuführen? Stärker als V(s), weil der Agent direkt Aktionen vergleichen kann:

```
Q*(s,a) = R(s,a) + γ · Σ_{s'} P(s'|s,a) · max_{a'} Q*(s',a')
```

**Value Iteration:** Wiederhole die Bellman-Gleichung iterativ, bis die Werte konvergieren. Voraussetzung: bekannte Transition-Funktion (Model-based).

**Policy Iteration:** Wechsle zwischen Policy Evaluation (Werte für fixe Policy berechnen) und Policy Improvement (Wähle greedy beste Aktion) — konvergiert schneller als Value Iteration.

**Praktische Relevanz:** In echten Umgebungen ist die Transition-Funktion P(s'|s,a) unbekannt — daher modell-freie Methoden wie Q-Learning (nächste Seite).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Sutton & Barto — Kapitel 3-4](http://incompleteideas.net/book/the-book.html) | Bellman formal |
| 🎥 Video | [David Silver — RL Lecture 2 (MDPs)](https://www.davidsilver.uk/teaching/) | Beste Video-Erklärung |

## Teste dein Verständnis

- [ ] Erkläre den Discount-Factor γ: was passiert, wenn γ = 0? Was wenn γ = 1?
- [ ] Was ist der Unterschied zwischen V(s) und Q(s,a)?
- [ ] Warum ist die Bellman-Gleichung rekursiv — und warum ist das nützlich?
