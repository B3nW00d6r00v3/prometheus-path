---
title: "t-SNE und UMAP"
module: "8.1"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# t-SNE und UMAP

## Kernidee

t-SNE und UMAP sind nicht-lineare Dimensionsreduktions-Methoden — primär für Visualisierung in 2D oder 3D. Sie bewahren lokale Nachbarschafts-Strukturen, verzerren aber globale Distanzen. Die kritische Warnung: beide sind Visualisierungs-Tools und dürfen nicht als Eingabe für nachgelagertes Clustering oder ML verwendet werden, weil ihre Distanzen keine verlässliche Grundlage dafür bieten.

## Im Detail

**t-SNE (t-distributed Stochastic Neighbor Embedding)**

Entwickelt 2008 von Laurens van der Maaten. Minimiert die Kullback-Leibler-Divergenz zwischen Wahrscheinlichkeitsverteilungen im Original- und niedrig-dimensionalen Raum.

```python
from sklearn.manifold import TSNE

tsne = TSNE(n_components=2, random_state=42, perplexity=30)
X_tsne = tsne.fit_transform(X_scaled)
```

Wichtige Parameter:
- `perplexity`: Balance zwischen lokaler und globaler Struktur (typisch: 5–50)
- Jeder Run mit verschiedenem `random_state` liefert andere Visualisierung!

**UMAP (Uniform Manifold Approximation and Projection)**

Entwickelt 2018, basiert auf Riemannscher Geometrie und topologischer Datenanalyse. 2026 oft Standard-Wahl statt t-SNE.

```python
import umap

reducer = umap.UMAP(n_components=2, random_state=42)
X_umap = reducer.fit_transform(X_scaled)
```

**UMAP vs. t-SNE:**

| Eigenschaft | t-SNE | UMAP |
|---|---|---|
| Geschwindigkeit | Langsam | Schnell |
| Globale Struktur | Schlecht | Besser |
| Reproduzierbarkeit | Variabel | Stabiler |
| Parameter-Sensitivität | Hoch (perplexity) | Mittel |
| 2026-Status | Noch verwendet | Zunehmend Standard |

**Die wichtigste Warnung**

> Beides sind Visualisierungs-Tools — keine Eingabe für ML oder Clustering.

Warum: t-SNE und UMAP verzerren Abstände, besonders auf globaler Ebene. Was nahe beieinander aussieht, muss im Original-Raum nicht nah sein — und umgekehrt. Das t-SNE-Distill-Tutorial zeigt eindrücklich, wie sehr das Ergebnis von `perplexity` abhängt.

**Richtige Verwendung:**
```python
# ✅ Richtig: nur für Visualisierung
X_umap_2d = reducer.fit_transform(X_scaled)
plt.scatter(X_umap_2d[:, 0], X_umap_2d[:, 1], c=kmeans_labels)

# ❌ Falsch: UMAP-Output als Clustering-Input
kmeans = KMeans(n_clusters=4).fit(X_umap_2d)  # Nicht machen!
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [UMAP Library](https://umap-learn.readthedocs.io) | Offizielle UMAP-Dokumentation |
| 📖 Interaktiv | [t-SNE Tutorial (Distill)](https://distill.pub/2016/misread-tsne/) | Pflichtlektüre — zeigt Fallstricke visuell |
| 🎥 Video | [StatQuest — UMAP](https://www.youtube.com/watch?v=eN0wFzBA4Sc) | Intuitive Einführung |

## Teste dein Verständnis

- [ ] Warum darf UMAP-Output nicht als K-Means-Input dienen?
- [ ] Was ist `perplexity` in t-SNE und wie beeinflusst es das Ergebnis?
- [ ] Nenne zwei Vorteile von UMAP gegenüber t-SNE.
- [ ] Hast du das Distill t-SNE Tutorial interaktiv durchgespielt?
