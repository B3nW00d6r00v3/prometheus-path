---
title: "Hierarchical Clustering"
module: "8.1"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Hierarchical Clustering

## Kernidee

Hierarchisches Clustering baut eine baumartige Struktur über alle Datenpunkte auf — ohne dass K vorab festgelegt werden muss. Die Visualisierung als Dendrogramm zeigt, auf welcher Ähnlichkeitsstufe Punkte und Gruppen zusammenwachsen. Es ist die Methode der Wahl für kleine Datensätze oder wenn die Cluster-Hierarchie selbst inhaltlich bedeutsam ist.

## Im Detail

**Agglomerative (Bottom-Up)**
Startet mit jedem Punkt als eigenem Cluster. Führt iterativ die zwei ähnlichsten Cluster zusammen, bis alle in einem einzigen Cluster sind. Das ist der praktische Standard.

**Divisive (Top-Down)**
Startet mit allen Punkten in einem Cluster und teilt iterativ. Selten verwendet, rechenintensiver.

**Linkage-Kriterien** — wie wird "ähnlichste" gemessen?
- **Single Linkage**: Distanz der nächsten Punkte zweier Cluster. Neigt zu langen, kettenförmigen Clustern.
- **Complete Linkage**: Distanz der entferntesten Punkte. Erzeugt kompakte, ähnlich große Cluster.
- **Average Linkage**: Durchschnittliche Distanz aller Punkte-Paare. Kompromiss.
- **Ward Linkage**: Minimiert die Zunahme der WCSS — ähnlich wie K-Means-Logik, oft bestes Ergebnis.

**Implementierung:**
```python
from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt

# Dendrogramm zeichnen
Z = linkage(X_scaled, method='ward')
plt.figure(figsize=(12, 6))
dendrogram(Z, truncate_mode='level', p=5)
plt.title('Dendrogramm')
plt.ylabel('Distanz')
plt.show()

# Cluster-Labels für K Cluster
clustering = AgglomerativeClustering(n_clusters=4, linkage='ward')
labels = clustering.fit_predict(X_scaled)
```

**Stärken gegenüber K-Means:**
- Kein K vorab nötig — Schnittlinie im Dendrogramm wählen
- Sieht hierarchische Struktur der Daten
- Deterministisch (kein Zufalls-Initialisierungs-Problem)

**Schwächen:**
- Skaliert schlecht: O(n²) Speicher, O(n³) Zeit für naive Implementierung
- Für Datensätze >10.000 Punkte unpraktisch

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Hierarchical Clustering](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering) | Offizielle Dokumentation |
| 📖 Tutorial | [scipy Dendrogram](https://docs.scipy.org/doc/scipy/reference/cluster.hierarchy.html) | Dendrogramm-Visualisierung |
| 🎥 Video | [StatQuest — Hierarchical Clustering](https://www.youtube.com/watch?v=7xHsRkOdVwo) | Mit Dendrogramm-Erklärung |

## Teste dein Verständnis

- [ ] Was zeigt die Y-Achse in einem Dendrogramm?
- [ ] Warum wählst du Ward-Linkage öfter als Single-Linkage?
- [ ] Ab welcher Datensatzgröße wird hierarchisches Clustering unpraktisch?
- [ ] Wie bestimmst du K aus einem Dendrogramm, ohne K vorab festzulegen?
