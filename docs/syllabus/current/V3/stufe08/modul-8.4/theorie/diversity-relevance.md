---
title: "Diversity vs. Relevance Trade-off"
module: "8.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Diversity vs. Relevance Trade-off

## Kernidee

Ein perfekt auf Relevanz optimierter Recommender führt in Filter Bubbles: der User sieht immer ähnlicheres vom Gleichen, entdeckt nichts Neues, und der Long Tail bleibt ungesehen. Production-Systeme balancieren Relevance bewusst mit Diversity, Serendipity und Coverage — nicht, weil es das Modell besser macht, sondern weil es die User-Experience und Geschäftsziele besser erfüllt.

## Im Detail

**Das Filter-Bubble-Problem:**

Wenn Empfehlungen zu nah an bestehenden Präferenzen bleiben:
- User, der Krimis liest, sieht nur Krimis → entdeckt keine historischen Romane.
- Spotify-User, der Techno hört, bekommt nie Jazz → verpasst potential neue Lieblingsgenres.
- E-Commerce: User sieht immer Mainstream-Produkte → Long-Tail-Anbieter werden nie entdeckt.

**Formale Definition von Diversity:**

Intra-List Diversity (ILD): durchschnittliche paarweise Unähnlichkeit innerhalb der Empfehlungsliste.

```python
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def intra_list_diversity(item_embeddings: list[np.ndarray]) -> float:
    """Durchschnittliche paarweise Distanz innerhalb der Liste."""
    n = len(item_embeddings)
    if n < 2:
        return 0.0
    total_dist = 0.0
    pairs = 0
    for i in range(n):
        for j in range(i+1, n):
            sim = cosine_similarity(
                item_embeddings[i].reshape(1, -1),
                item_embeddings[j].reshape(1, -1)
            )[0][0]
            total_dist += (1 - sim)  # Distanz = 1 - Ähnlichkeit
            pairs += 1
    return total_dist / pairs
```

**Diversity-Techniken:**

**1. Maximal Marginal Relevance (MMR):**
Iterativ die nächste Empfehlung auswählen, die sowohl relevant als auch verschieden von bereits Ausgewähltem ist.

```python
def mmr(candidates, selected, relevance_scores, item_embeddings, lambda_=0.5, n=10):
    results = []
    candidates = list(candidates)
    for _ in range(n):
        mmr_scores = {}
        for c in candidates:
            rel = relevance_scores[c]
            if selected:
                max_sim = max(
                    cosine_similarity(
                        item_embeddings[c].reshape(1,-1),
                        item_embeddings[s].reshape(1,-1)
                    )[0][0]
                    for s in selected
                )
            else:
                max_sim = 0
            mmr_scores[c] = lambda_ * rel - (1 - lambda_) * max_sim
        best = max(mmr_scores, key=mmr_scores.get)
        results.append(best)
        selected.append(best)
        candidates.remove(best)
    return results
```

**2. Determinantal Point Processes (DPP):**
Mathematisch elegante Methode für diverse Subset-Auswahl. Komplexer, aber oft bessere Ergebnisse.

**3. Business-Rules Re-Ranking:**
- "Mindestens 3 verschiedene Genres in den Top-10"
- "Maximal 2 Items vom selben Anbieter"
- "Mindestens ein neues Item (Long Tail) pro Seite"

**Der Trade-off in der Praxis:**

λ = 0.5 ist oft ein guter Startpunkt — gleich gewichtet zwischen Relevance und Diversity. Je nach Business-Ziel anpassen:
- Entdeckungs-Plattform: λ niedriger (mehr Diversity).
- Productivity-Tool: λ höher (mehr Relevance).

**Messung im A/B-Test:**
- Offline: ILD-Score als Diversity-Proxy.
- Online: Click-Through-Rate (Relevance) + Clicks auf neue Genres/Items (Diversity).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [The Filter Bubble (Pariser)](https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles) | Konzept-Ursprung |
| 📖 Paper | [Maximal Marginal Relevance](https://dl.acm.org/doi/10.1145/290941.291025) | Klassischer Diversity-Algorithmus |

## Teste dein Verständnis

- [ ] Was ist eine Filter Bubble und wie entsteht sie durch Recommender Systems?
- [ ] Erkläre, was Intra-List Diversity (ILD) misst.
- [ ] Wie funktioniert Maximal Marginal Relevance und welches Problem löst es?
- [ ] Wann würdest du λ in MMR erhöhen und wann senken?
