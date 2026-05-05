---
title: "Backpropagation: das Herzstück"
module: "7.1"
type: theorie
fast_track: true
effort: "30min"
stability: green
---

# Backpropagation: das Herzstück

## Kernidee

Backpropagation berechnet den Gradienten des Loss nach jedem Weight im Netz — rückwärts durch alle Schichten via Chain Rule. Dieser Gradient zeigt, in welche Richtung das Weight angepasst werden muss, damit der Loss sinkt. Für 🧮: das ist Gradient Descent aus Modul 8.2, jetzt mehrschichtig.

## Im Detail

**Das Problem:** Nach dem Forward Pass haben wir einen Loss (z.B. wie falsch war die Vorhersage?). Jetzt müssen wir wissen: welches Weight hat wie viel zu diesem Fehler beigetragen? Das ist die Aufgabe von Backprop.

**Chain Rule ist der Kern:** Der Loss hängt von der letzten Schicht ab, die von der vorletzten abhängt, die von der davor — eine Kette. Die partielle Ableitung des Loss nach einem frühen Weight ergibt sich aus der Multiplikation aller partiellen Ableitungen entlang dieses Weges. Das ist die Chain Rule aus der Calculus.

**Konkret — für eine einfache MLP:**

```
Forward:  x → [Layer1] → a1 → [Layer2] → output → Loss
Backward: ∂Loss/∂W2 direkt.
          ∂Loss/∂W1 = (∂Loss/∂a1) · (∂a1/∂W1) — Chain Rule
```

**Warum Karpathy das besser erklärt als jedes Lehrbuch:** In [micrograd](https://github.com/karpathy/micrograd) (~100 Zeilen Python) implementiert Karpathy Backprop für skalare Werte von Grund auf. Jeder Knoten in einem Graphen kennt seinen Wert und seinen Gradienten. `backward()` traversiert den Graphen rückwärts und akkumuliert Gradienten via Chain Rule. Das demystifiziert, was PyTorch's Autograd intern tut.

**Für 🧮 — Pflicht:** Verstehe Backprop so gut, dass du Forward und Backward für ein 2-Layer-Netz von Hand auf Papier rechnen kannst. Das ist die Grenze zwischen "weiß, dass es existiert" und "versteht Deep Learning".

**PyTorch macht es automatisch:**

```python
loss = criterion(output, target)
loss.backward()  # Backprop — PyTorch berechnet alle Gradienten
optimizer.step() # Weights anpassen
optimizer.zero_grad() # Gradienten zurücksetzen
```

**Intuition:** Stell dir vor, du stehst auf einem Hügel (= hoher Loss) und willst ins Tal (= niedriger Loss). Der Gradient zeigt bergauf. Du gehst in die entgegengesetzte Richtung — das ist Gradient Descent. Backprop berechnet für jeden Weight genau diese Bergauf-Richtung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📺 Video | [Karpathy — The spelled-out intro to neural networks (micrograd)](https://www.youtube.com/watch?v=VMj-3S1tku0) | Lecture 1, Pflicht für 🧮 |
| 💻 Code | [GitHub: micrograd](https://github.com/karpathy/micrograd) | ~100 Zeilen Backprop von Grund auf |
| 📖 Klassiker | [Karpathy — A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/) | Praxis-Weisheiten, zeitlos |

## Teste dein Verständnis

- [ ] Was ist die Chain Rule und warum braucht Backprop sie?
- [ ] Was bedeutet "∂Loss/∂W" — in Worten erklärt?
- [ ] Warum müssen Gradienten nach jedem Step mit `zero_grad()` zurückgesetzt werden?
- [ ] 🧮: Kannst du Backprop für ein 2-Layer-Netz von Hand durchrechnen (konkrete Zahlen)?
