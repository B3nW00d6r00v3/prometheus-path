---
title: "Logistische Regression"
module: "8.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Logistische Regression

## Kernidee

Logistische Regression ist der einfachste Klassifikator und trotzdem unverzichtbar: sie transformiert die lineare Regression-Ausgabe mit der Sigmoid-Funktion auf einen Wahrscheinlichkeitswert zwischen 0 und 1. Was sie besonders wertvoll macht: sie ist die konzeptionell einfachste Form von Backprop — ein einziger Layer mit Gradient-Descent-Update. Wer Logistic Regression mathematisch versteht, hat die Foundation für neuronale Netze.

## Im Detail

**Das Modell**

Lineare Regression berechnet: `z = Wx + b`

Logistische Regression wendet Sigmoid an: `ŷ = σ(z) = 1 / (1 + e^(-z))`

Sigmoid mappt jeden reellen Wert auf [0, 1] — die Ausgabe ist eine Wahrscheinlichkeit für Klasse 1.

**Loss: Binary Cross-Entropy**
```
L = -[y·log(ŷ) + (1-y)·log(1-ŷ)]
```
Wenn y=1 und ŷ nahe 1: Loss klein. Wenn y=1 und ŷ nahe 0: Loss groß (Strafe für Fehlklassifikation).

**Implementierung mit scikit-learn:**
```python
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

lr = LogisticRegression(max_iter=1000, random_state=42)
lr.fit(X_train_scaled, y_train)

# Wahrscheinlichkeiten
probs = lr.predict_proba(X_test_scaled)  # Shape: (n_samples, 2)

# Labels mit Standard-Threshold 0.5
labels = lr.predict(X_test_scaled)
```

**Wichtige Parameter:**
- `C`: inverse Regularisierungs-Stärke (kleiner C = stärker regularisiert)
- `penalty`: `'l2'` (Standard) oder `'l1'` (sparse Lösung)
- `max_iter`: erhöhen wenn "did not converge" Warning

**Für 🧮: From-Scratch-Implementierung**

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def forward(X, W, b):
    z = X @ W + b
    return sigmoid(z)

def loss(y_hat, y):
    return -np.mean(y * np.log(y_hat + 1e-8) + (1 - y) * np.log(1 - y_hat + 1e-8))

def gradients(X, y_hat, y):
    diff = y_hat - y
    dW = X.T @ diff / len(y)
    db = diff.mean()
    return dW, db

# Trainings-Loop
W = np.zeros(X_train.shape[1])
b = 0.0
lr_rate = 0.01

for epoch in range(100):
    y_hat = forward(X_train, W, b)
    L = loss(y_hat, y_train)
    dW, db = gradients(X_train, y_hat, y_train)
    W -= lr_rate * dW
    b -= lr_rate * db
```

*Wichtig für die Brücke zu Stufe 7: behalte diese Implementierung. In Modul 7.1 erweiterst du sie konzeptionell zu Backprop in einem 2-Layer-Netz.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) | Beste visuelle Erklärung |
| 📖 Docs | [scikit-learn — Logistic Regression](https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression) | Parameter-Referenz |
| 📖 Tutorial | [Towards Data Science — Logistic Regression from Scratch](https://towardsdatascience.com/logistic-regression-from-scratch) | Detaillierte Math-Ableitung |

## Teste dein Verständnis

- [ ] Was gibt `predict_proba` zurück und wie unterscheidet es sich von `predict`?
- [ ] Erkläre Sigmoid in einem Satz — warum ist sie perfekt für Wahrscheinlichkeiten?
- [ ] Warum ist Logistic Regression konzeptionell "Backprop mit einem Layer"?
- [ ] Was passiert bei `C=0.001` vs. `C=100`?
