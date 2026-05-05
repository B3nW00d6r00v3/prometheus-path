---
title: "Modul 8.1: Data Exploration & Clustering"
module: "8.1"
type: index
fast_track: true
effort: "6-10h"
---

# Modul 8.1: Data Exploration & Clustering

Für 🧮 ist dieses Modul **Pflicht-Vorbedingung für Stufe 7** und sollte bereits absolviert sein. Eval-Querschnitt-Anker: Distance-Metrics als Foundation für Embedding-Vergleiche und Vector-Search.

Bevor du modellierst, musst du Daten verstehen. EDA (Exploratory Data Analysis) ist 2026 nicht durch KI obsolet — sie wird durch KI **schneller**, aber das menschliche Urteil bleibt zentral. Clustering als unsupervised Lernverfahren ist die natürliche Erweiterung — von "ich sehe meine Daten" zu "ich gruppiere meine Daten ohne Vorgaben".

**Aufwand:** 🔧 6-10h · 🧮 15-25h · 💼 4-6h  
**Voraussetzungen:** Modul 2.7, Querschnitt Math-Foundation (Lineare Algebra konzeptionell)

## Lernziel

Du führst eigenständig EDA auf einem realen Datensatz durch, identifizierst Strukturen, wendest mindestens drei Clustering-Algorithmen an, und bewertest die Ergebnisse mit passenden Metriken.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [EDA-Workflow](theorie/eda-workflow.md) | ✅ | 15min |
| 2 | [Distanz-Metriken](theorie/distanz-metriken.md) | ✅ | 15min |
| 3 | [Skalierung vor Clustering](theorie/skalierung.md) | ✅ | 10min |
| 4 | [K-Means](theorie/k-means.md) | ✅ | 20min |
| 5 | [Wahl der Cluster-Anzahl](theorie/cluster-anzahl.md) | ✅ | 15min |
| 6 | [Hierarchical Clustering](theorie/hierarchical-clustering.md) | ⏭️ | 15min |
| 7 | [DBSCAN und HDBSCAN](theorie/dbscan-hdbscan.md) | ⏭️ | 15min |
| 8 | [Gaussian Mixture Models](theorie/gmm.md) | ⏭️ | 15min |
| 9 | [Dimensionsreduktion: PCA](theorie/pca.md) | ✅ | 20min |
| 10 | [t-SNE und UMAP](theorie/tsne-umap.md) | ⏭️ | 15min |
| 11 | [Cluster-Bewertung ohne Ground-Truth](theorie/cluster-bewertung.md) | ✅ | 15min |
| 12 | [EDA mit KI-Augmentation](theorie/eda-ki-augmentation.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — EDA + Clustering auf realem Datensatz

Wähle einen Datensatz mit Substanz (Vorschläge):
- Eigene Daten (Spotify-Listening-Historie, Bookmarks-Export, Health-App-Export)
- Kaggle-Klassiker (Titanic, House Prices, Customer Segmentation)
- Open Data (Berlin Open Data, EU Data, Statista-CSVs)

**Anforderungen:**
- **EDA-Notebook** mit Pandas: erste Übersicht, Verteilungen, Korrelationen, fehlende Werte, mindestens 5 Hypothesen aus den Daten.
- **Visualisierungen**: mindestens 8 Plots (Histogramme, Scatter-Plots, Heatmaps).
- **Clustering**: mindestens drei Algorithmen anwenden (z.B. K-Means + DBSCAN + GMM).
- **Bewertung**: Silhouette-Scores für die K-Means-Wahl, dazu inhaltliche Cluster-Interpretation.
- **Visualisierung mit UMAP oder t-SNE** (mit Hinweis: nur Visualisierung, nicht Cluster-Eingabe).
- Im Portfolio: `stufe-8_klassisches-ml/8-1-eda-clustering/` mit Notebook, Visualisierungen, README.

## 🎁 Mehrwert-Mini-Projekte

- **Persönliche Datenanalyse**: deine eigenen digitalen Spuren (Spotify, Apple Health, Banking-CSV) clustern, was kommt raus?
- **EDA-Template-Notebook** als Ausgangspunkt für jeden neuen Datensatz.

## 🌱 Open-Source-Pfad

- pandas, scikit-learn, matplotlib, plotly — alles OSS.
- [Polars](https://www.pola.rs) als moderne, schnelle pandas-Alternative.
- [DuckDB](https://duckdb.org) für SQL-basierte Daten-Exploration auf großen CSVs.

## Outcome-Check

- [ ] EDA-Notebook mit mindestens 8 Visualisierungen
- [ ] Mindestens 5 Hypothesen aus den Daten formuliert
- [ ] Drei Clustering-Algorithmen verglichen
- [ ] Silhouette-Score-Analyse für K-Wahl
- [ ] UMAP- oder t-SNE-Visualisierung
- [ ] Inhaltliche Interpretation der Cluster
