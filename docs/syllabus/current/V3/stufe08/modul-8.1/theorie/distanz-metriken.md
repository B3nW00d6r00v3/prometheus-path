---
title: "Distanz-Metriken"
module: "8.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Distanz-Metriken

## Kernidee

Clustering bedeutet "Punkte gruppieren, die nah zusammen liegen". Was "nah" heißt, hängt vollständig von der gewählten Distanz-Metrik ab — und diese Wahl prägt das Ergebnis fundamental. Die vier wichtigsten Metriken decken unterschiedliche Datencharakteristika ab: Euklidisch für Standard, Manhattan für Robustheit, Cosine für hochdimensionale Daten, Mahalanobis für korrelierte Features.

## Im Detail

**Euklidische Distanz (L2)**
Die geometrische Distanz im n-dimensionalen Raum. Standard-Wahl für die meisten Clustering-Algorithmen.
```
d(a, b) = √(Σ(aᵢ - bᵢ)²)
```
Schwäche: sensitiv gegenüber Skalierung und Ausreißern.

**Manhattan-Distanz (L1)**
Summe der absoluten Differenzen — wie ein Taxi in einem Straßennetz.
```
d(a, b) = Σ|aᵢ - bᵢ|
```
Stärke: robuster gegenüber Ausreißern als L2.

**Cosine-Distanz**
Misst den Winkel zwischen zwei Vektoren, nicht ihre Länge. Cosine-Similarität liegt zwischen -1 und 1 (1 = identisch, 0 = orthogonal, -1 = entgegengesetzt).
```
cos(a, b) = (a · b) / (|a| × |b|)
Distanz = 1 - cos(a, b)
```
Stärke: für hochdimensionale Daten (Text-Embeddings, TF-IDF-Vektoren). Die Länge des Vektors spielt keine Rolle — nur die Richtung zählt.

*Eval-Querschnitt-Anker: Cosine ist die dominante Metrik für Embedding-Vergleiche in Modul 5.1 (RAG-Vector-Search). Wer Cosine hier versteht, versteht den Retrieval-Schritt in RAG mathematisch.*

**Mahalanobis-Distanz**
Berücksichtigt die Kovarianz-Struktur der Daten — Korrelationen zwischen Features fließen ein.
Stärke: skalierungsinvariant, berücksichtigt Korrelationen. Schwäche: berechnet aufwändig, braucht invertierbare Kovarianz-Matrix.

**Wahl der richtigen Metrik:**
- Tabellarische numerische Daten, skaliert → Euklidisch
- Tabellarische Daten mit Ausreißern → Manhattan
- Text-Embeddings, hochdimensional → Cosine
- Stark korrelierte Features → Mahalanobis

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Distance Metrics](https://scikit-learn.org/stable/modules/metrics.html) | Vollständige Übersicht |
| 📖 Wikipedia | [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity) | Mathematische Herleitung |
| 📖 Wikipedia | [Mahalanobis Distance](https://en.wikipedia.org/wiki/Mahalanobis_distance) | Mit Visualisierungen |

## Teste dein Verständnis

- [ ] Warum dominiert Cosine bei Embeddings und nicht Euklidisch?
- [ ] Was passiert bei Euklidischer Distanz, wenn eine Variable Werte 0–1 und eine andere 0–1.000.000 hat?
- [ ] Welche Metrik wählst du für Kunden-Clustering auf Transaktionsdaten (numerisch, mit Ausreißern)?
- [ ] Kannst du Cosine-Similarität von Grund auf erklären?
