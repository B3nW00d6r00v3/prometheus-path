---
title: "Collaborative Filtering"
module: "8.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Collaborative Filtering

## Kernidee

Collaborative Filtering nutzt das Kollektivwissen: "User, die ähnliche Präferenzen wie du hatten, haben auch X gemocht — daher könnte dir X gefallen." Das System braucht keine Item-Beschreibungen, nur Verhaltensdaten. Dafür kann es überraschende, serendipitöse Empfehlungen geben, die rein inhaltsbasierte Systeme nie gefunden hätten.

## Im Detail

**Zwei Varianten:**

**User-Based Collaborative Filtering:**
1. Finde User, die ähnliche Bewertungen wie User A haben (ähnliche Geschmäcker).
2. Empfehle Items, die diese ähnlichen User gemocht haben, aber User A noch nicht kennt.
3. Problem: skaliert schlecht (O(n²) User-Vergleiche).

**Item-Based Collaborative Filtering:**
1. Finde Items, die ähnliche Bewertungsmuster haben wie Items, die User A gut bewertet hat.
2. Empfehle diese ähnlichen Items.
3. Stabiler als User-Based, da Items sich weniger häufig ändern als User-Präferenzen.
4. Besser skalierbar — Item-Ähnlichkeiten werden offline vorberechnet.

**Implementierung mit Surprise:**
```python
from surprise import SVD, Dataset, Reader
from surprise.model_selection import cross_validate
import pandas as pd

# Daten laden (user_id, item_id, rating)
ratings_df = pd.read_csv('ratings.csv')

reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(ratings_df[['user_id', 'item_id', 'rating']], reader)

# SVD ist de-facto Standard für CF
algo = SVD(n_factors=100, random_state=42)
results = cross_validate(algo, data, measures=['RMSE', 'MAE'], cv=5, verbose=True)

print(f"RMSE: {results['test_rmse'].mean():.3f}")

# Prediction für einen User
trainset = data.build_full_trainset()
algo.fit(trainset)

user_id = 'user_123'
item_id = 'item_456'
prediction = algo.predict(user_id, item_id)
print(f"Predicted Rating: {prediction.est:.2f}")
```

**Item-Based ohne externe Library:**
```python
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# User-Item-Matrix (User als Zeilen, Items als Spalten)
user_item_matrix = ratings_df.pivot_table(
    index='user_id', columns='item_id', values='rating'
).fillna(0)

# Item-Ähnlichkeiten
item_sim = cosine_similarity(user_item_matrix.T)
item_sim_df = pd.DataFrame(item_sim,
                           index=user_item_matrix.columns,
                           columns=user_item_matrix.columns)

def get_similar_items(item_id, n=10):
    return item_sim_df[item_id].sort_values(ascending=False)[1:n+1]
```

**Stärken:**
- Findet überraschende, serendipitöse Empfehlungen.
- Keine Item-Features nötig — nur Bewertungsdaten.
- Skaliert gut (Item-Based kann offline vorberechnet werden).

**Schwächen:**
- Cold Start für neue User (keine Historie) und neue Items (keine Bewertungen).
- Sparsitäts-Problem: User-Item-Matrix ist meist >99% leer.
- Popularity Bias: beliebte Items werden überproportional empfohlen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Surprise Library](https://surpriselib.com) | Didaktisch wertvolle CF-Library |
| 📖 Docs | [Microsoft Recommenders](https://github.com/microsoft/recommenders) | Aktiv gepflegte Best-Practices |
| 📖 Tutorial | [Google RecSys — CF](https://developers.google.com/machine-learning/recommendation/collaborative/basics) | Google-Kurs |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen User-Based und Item-Based Collaborative Filtering?
- [ ] Warum skaliert Item-Based CF besser als User-Based CF?
- [ ] Was ist Popularity Bias und wie schadet er der Empfehlungs-Qualität?
- [ ] Warum kann CF überraschende Empfehlungen liefern, die Content-Based nie finden würde?
