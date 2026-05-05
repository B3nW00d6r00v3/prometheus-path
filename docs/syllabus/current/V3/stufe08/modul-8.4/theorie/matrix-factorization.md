---
title: "Matrix Factorization"
module: "8.4"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Matrix Factorization

## Kernidee

Matrix Factorization zerlegt die User-Item-Bewertungsmatrix in zwei kleinere Matrizen: eine User-Matrix und eine Item-Matrix mit latenten Faktoren. Das Skalarprodukt eines User-Vektors und eines Item-Vektors ergibt die vorhergesagte Bewertung. Latente Faktoren lernen automatisch abstrakte Eigenschaften — z.B. "wie sehr mag dieser User Action-Filme?" ohne das jemals explizit zu definieren.

## Im Detail

**Das Konzept:**

Gegeben die User-Item-Bewertungsmatrix R (n_users × n_items, sehr sparse):

```
R ≈ P × Q^T

P: User-Matrix (n_users × k) — k latente Faktoren pro User
Q: Item-Matrix (n_items × k) — k latente Faktoren pro Item
```

Das Rating von User u für Item i wird approximiert durch:
```
r̂ᵤᵢ = pᵤ · qᵢ = Σₖ pᵤₖ × qᵢₖ
```

**Was lernen die latenten Faktoren?**

Bei Filmen könnten die Faktoren (nicht interpretiert, aber anschaulich) repräsentieren:
- Faktor 1: "Wie sehr mag dieser User Action?" ↔ "Wie viel Action hat dieser Film?"
- Faktor 2: "Mag der User internationale Filme?" ↔ "Ist dieser Film international?"
- Usw.

Diese Faktoren werden nie explizit benannt — das Modell lernt sie aus den Bewertungsmustern.

**SVD (Singular Value Decomposition):**

Klassische Methode: R = U × Σ × V^T. Problem: funktioniert nur bei vollständigen Matrizen, aber RecSys-Matrizen sind meist >99% leer.

**Lösung: Matrix Factorization mit SGD oder ALS:**

Minimiere den Fehler nur auf den beobachteten Ratings:
```
min_{P,Q} Σ_{(u,i) beobachtet} (rᵤᵢ - pᵤ·qᵢ)² + λ(||P||² + ||Q||²)
```

```python
from surprise import SVD, Dataset, Reader
from surprise.model_selection import GridSearchCV
import pandas as pd

ratings_df = pd.read_csv('ratings.csv')
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(ratings_df[['user_id', 'item_id', 'rating']], reader)

# Hyperparameter-Tuning
param_grid = {
    'n_factors': [50, 100, 150],
    'lr_all': [0.002, 0.005, 0.01],
    'reg_all': [0.02, 0.1, 0.5]
}

gs = GridSearchCV(SVD, param_grid, measures=['rmse'], cv=3)
gs.fit(data)

print(f"Best RMSE: {gs.best_score['rmse']:.3f}")
print(f"Best Params: {gs.best_params['rmse']}")

# Finales Modell
best_algo = gs.best_estimator['rmse']
trainset = data.build_full_trainset()
best_algo.fit(trainset)
```

**ALS (Alternating Least Squares):**

Alternative Optimierungsmethode: fixiere Q, optimiere P analytisch; dann fixiere P, optimiere Q. Gut parallelisierbar — wird bei Spark für große Datensätze genutzt.

**Verbindung zu Embeddings:**

Matrix Factorization ist konzeptionell identisch mit Embedding-basierten Ansätzen: User- und Item-IDs werden in dichte Vektoren (Embeddings) eingebettet, deren Skalarprodukt den Score ergibt. Zwei-Tower-Modelle in Neural RecSys sind die natürliche Erweiterung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Surprise — SVD](https://surprise.readthedocs.io/en/stable/matrix_factorization.html) | Implementierung |
| 📖 Paper | [Matrix Factorization Techniques for Recommender Systems](https://ieeexplore.ieee.org/document/5197422) | Netflix-Prize-Paper von Koren |
| 🎥 Video | [StatQuest — Matrix Factorization](https://www.youtube.com/watch?v=ZspR5PZemcs) | Intuitive Erklärung |

## Teste dein Verständnis

- [ ] Was repräsentieren die latenten Faktoren in Matrix Factorization?
- [ ] Warum funktioniert Standard-SVD nicht für RecSys und wie wird das Problem gelöst?
- [ ] Was ist der konzeptionelle Zusammenhang zwischen Matrix Factorization und Embeddings?
- [ ] Wie berechnet man die vorhergesagte Bewertung aus User- und Item-Vektor?
