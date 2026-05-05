---
title: "Hybrid Recommender"
module: "8.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Hybrid Recommender

## Kernidee

Kein einzelner Recommender-Ansatz ist in allen Situationen optimal: Collaborative Filtering versagt bei Cold Start, Content-Based bleibt in Filter Bubbles, Matrix Factorization braucht viele Bewertungen. Hybrid Recommender kombinieren mehrere Ansätze — gewichtet, kaskadiert oder in einem einheitlichen Modell. Das ist 2026 der Standard in jeder ernsthaften Production-Implementierung.

## Im Detail

**Kombinationsstrategien:**

**1. Gewichtete Kombination:**
```python
def hybrid_score(user_id, item_id):
    cf_score  = cf_model.predict(user_id, item_id)    # Collaborative Filtering
    cb_score  = cb_model.predict(user_id, item_id)    # Content-Based
    pop_score = popularity_model.predict(item_id)      # Popularity

    # Gewichte je nach User-Kälte anpassen
    n_ratings = get_user_rating_count(user_id)
    cf_weight  = min(n_ratings / 20, 1.0)   # 0 → 1 mit mehr Ratings
    cb_weight  = 1 - cf_weight
    pop_weight = 0.1  # Immer leicht bevorzuge Populäres

    return cf_weight*cf_score + cb_weight*cb_score + pop_weight*pop_score
```

**2. Kaskadierter Ansatz:**
- Schritt 1: Grob-Filterung durch effizienten Algorithmus (z.B. Popularity oder ANN-Search) → 1000 Kandidaten.
- Schritt 2: Fein-Ranking durch komplexeres Modell (Two-Tower, LightGBM) → Top-20.
- Schritt 3: Re-Ranking mit Business-Regeln (kein Out-of-Stock, Diversity) → finale 10.

Dies ist der Standard bei großen Systems (YouTube, TikTok, Amazon).

**3. Feature-Stacking:**
- CF-Scores und CB-Scores als Features in einem XGBoost/Neural-Net-Modell.
- Das Modell lernt, wann welcher Ansatz vertrauenswürdiger ist.

**4. Two-Tower-Modell (moderner Standard):**
- Zwei separate Neural Networks: User-Tower (User-Features → Embedding) und Item-Tower (Item-Features → Embedding).
- Score = Skalarprodukt beider Embeddings.
- Lernt implizit die beste Kombination von CF und CB.

```python
# Konzeptioneller Two-Tower in Keras
import tensorflow as tf

user_input = tf.keras.Input(shape=(user_feature_dim,))
item_input = tf.keras.Input(shape=(item_feature_dim,))

# User Tower
user_embedding = tf.keras.layers.Dense(64, activation='relu')(user_input)
user_embedding = tf.keras.layers.Dense(32)(user_embedding)

# Item Tower
item_embedding = tf.keras.layers.Dense(64, activation='relu')(item_input)
item_embedding = tf.keras.layers.Dense(32)(item_embedding)

# Score = Dot Product
score = tf.keras.layers.Dot(axes=1, normalize=True)([user_embedding, item_embedding])

model = tf.keras.Model(inputs=[user_input, item_input], outputs=score)
```

**Wann welche Kombination?**

| Szenario | Strategie |
|---------|----------|
| Kleines System, schnell live | Gewichtete Kombination |
| Millionen User+Items | Kaskadiert (Candidate Generation → Ranking) |
| Viele Features verfügbar | Two-Tower |
| Cold Start häufig | Kaskadiert mit CB-Fallback |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Microsoft Recommenders — Hybrid](https://github.com/microsoft/recommenders) | Best Practices |
| 📖 Paper | [YouTube DNN Recommendation](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45530.pdf) | Klassisches Two-Tower Paper |

## Teste dein Verständnis

- [ ] Erkläre den kaskasdierten Ansatz: Candidate Generation → Ranking → Re-Ranking.
- [ ] Was ist ein Two-Tower-Modell und warum kombiniert es CF und CB?
- [ ] Wann würdest du eine gewichtete Kombination gegenüber einem kaskasdierten Ansatz bevorzugen?
- [ ] Wie passt du die Gewichte im Hybrid-Modell dynamisch an den User an?
