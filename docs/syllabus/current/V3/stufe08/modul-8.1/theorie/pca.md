---
title: "Dimensionsreduktion: PCA"
module: "8.1"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Dimensionsreduktion: PCA

## Kernidee

Principal Component Analysis (PCA) reduziert viele Features auf wenige "Hauptkomponenten" — lineare Kombinationen der originalen Features, die möglichst viel Varianz im Datensatz erklären. PCA dient zur Visualisierung in 2D/3D, zur Rauschreduktion und als Vorverarbeitung vor Clustering. Es setzt grundlegendes Verständnis linearer Algebra voraus — Eigenvektoren und Eigenwerte sind die mathematische Basis.

## Im Detail

**Intuition**

Stell dir einen 3D-Datensatz vor, der fast in einer Ebene liegt. PCA findet diese Ebene und projiziert alle Punkte auf sie — von 3D auf 2D, mit minimalem Informationsverlust. Die erste Hauptkomponente (PC1) zeigt in Richtung maximaler Varianz, PC2 senkrecht dazu, usw.

**Der Algorithmus:**
1. Zentriere Daten (Mittelwert abziehen)
2. Berechne Kovarianz-Matrix
3. Berechne Eigenwerte und Eigenvektoren der Kovarianz-Matrix
4. Sortiere Eigenvektoren nach Eigenwert (absteigend)
5. Projiziere Daten auf die K Eigenvektoren mit den größten Eigenwerten

**Implementierung:**
```python
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Skalierung zuerst (PCA ist varianz-sensitiv)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCA auf 2 Komponenten für Visualisierung
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# Erklärte Varianz prüfen
print(pca.explained_variance_ratio_)          # z.B. [0.45, 0.22]
print(pca.explained_variance_ratio_.cumsum())  # z.B. [0.45, 0.67]

# Visualisierung
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=labels, cmap='viridis')
plt.xlabel('PC1')
plt.ylabel('PC2')
plt.show()
```

**Erklärte Varianz** — die wichtigste Diagnose-Metrik:
- `explained_variance_ratio_` zeigt, welcher Anteil der Gesamt-Varianz durch jede Hauptkomponente erklärt wird
- "Elbow" in der erklärten Varianz: wie viele Komponenten sind sinnvoll?
- Ziel: oft 80–95% erklärte Varianz

**Wichtige Einschränkungen:**
- PCA ist **linear** — nicht-lineare Strukturen werden nicht erfasst
- PCA-Komponenten sind schwer interpretierbar (Linearkombinationen aller Features)
- Für Visualisierung: t-SNE und UMAP oft besser (aber verzerren Distanzen!)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — PCA](https://scikit-learn.org/stable/modules/decomposition.html#pca) | Offizielle Dokumentation |
| 🎥 Video | [StatQuest — PCA Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) | Beste visuelle Erklärung |
| 📖 Tutorial | [Making sense of PCA](https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis) | Intuition und Anwendung |

## Teste dein Verständnis

- [ ] Was bedeutet "80% erklärte Varianz" bei PCA?
- [ ] Warum muss PCA auf skalierten Daten laufen?
- [ ] Was ist der Unterschied zwischen PCA und t-SNE für Visualisierung?
- [ ] Kannst du in einem Satz erklären, was Eigenvektoren mit PCA zu tun haben?
