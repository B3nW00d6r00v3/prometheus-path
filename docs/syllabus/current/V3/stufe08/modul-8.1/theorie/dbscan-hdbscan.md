---
title: "DBSCAN und HDBSCAN"
module: "8.1"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# DBSCAN und HDBSCAN

## Kernidee

DBSCAN ist dichtebasiertes Clustering: statt Zentren zu suchen, findet es Regionen hoher Punktdichte und verbindet sie zu Clustern — beliebig geformt, auch halbmondförmig oder L-förmig. Punkte in dünnen Regionen werden als "Noise" (Ausreißer) markiert, nicht dem nächsten Cluster zugeschlagen. HDBSCAN ist die robustere Weiterentwicklung, die mit variierender Dichte umgeht.

## Im Detail

**DBSCAN — Grundprinzip**

Zwei Parameter steuern alles:
- `eps` (ε): maximale Distanz, innerhalb derer zwei Punkte als "Nachbarn" gelten
- `min_samples`: Mindestanzahl Nachbarn, damit ein Punkt als Core-Point gilt

Punkt-Typen:
- **Core-Point**: hat ≥ `min_samples` Nachbarn in Radius ε
- **Border-Point**: im Radius eines Core-Points, aber selbst weniger Nachbarn
- **Noise**: weder Core noch Border — wird als Ausreißer markiert (Label = -1)

```python
from sklearn.cluster import DBSCAN

dbscan = DBSCAN(eps=0.5, min_samples=5)
labels = dbscan.fit_predict(X_scaled)

# Noise-Punkte erkennen
noise_mask = labels == -1
print(f"Noise-Punkte: {noise_mask.sum()}")
print(f"Gefundene Cluster: {len(set(labels)) - (1 if -1 in labels else 0)}")
```

**Stärken:**
- Kein K vorab nötig
- Findet beliebig geformte Cluster
- Identifiziert Ausreißer automatisch (Label -1)

**Schwächen:**
- `eps` und `min_samples` schwer zu wählen bei unbekannten Daten
- Funktioniert schlecht bei sehr variierender Dichte (manche Cluster dicht, andere dünn)

**HDBSCAN — Hierarchische Erweiterung**

Löst das Dichte-Problem: HDBSCAN baut einen hierarchischen Baum über verschiedene Dichte-Level und extrahiert stabile Cluster automatisch. Robuster, weniger Parameter-sensitiv.

```python
import hdbscan

clusterer = hdbscan.HDBSCAN(min_cluster_size=10)
labels = clusterer.fit_predict(X_scaled)
```

HDBSCAN ist 2026 oft die bevorzugte Wahl gegenüber DBSCAN.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — DBSCAN](https://scikit-learn.org/stable/modules/clustering.html#dbscan) | DBSCAN-Implementierung |
| 📖 Docs | [HDBSCAN Library](https://hdbscan.readthedocs.io) | HDBSCAN-Dokumentation |
| 🎥 Video | [StatQuest — DBSCAN](https://www.youtube.com/results?search_query=statquest+dbscan) | Visuelle Erklärung |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Core-Point, Border-Point und Noise in DBSCAN?
- [ ] Warum findet DBSCAN Mond-förmige Cluster, K-Means aber nicht?
- [ ] Wann würdest du HDBSCAN statt DBSCAN wählen?
- [ ] Was bedeutet Label -1 im DBSCAN-Output?
