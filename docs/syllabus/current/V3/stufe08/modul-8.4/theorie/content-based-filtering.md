---
title: "Content-Based Filtering"
module: "8.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Content-Based Filtering

## Kernidee

Content-Based Filtering empfiehlt Items basierend auf deren Eigenschaften — nicht auf dem Verhalten anderer User. "Du hast Action-Filme mit Tom Hanks gemocht, hier sind weitere Filme mit ähnlichen Eigenschaften." Das System braucht keine anderen User, aber es kann nicht über das hinausgehen, was du bereits magst.

## Im Detail

**Das Prinzip:**

1. **Item-Profile erstellen:** Repräsentiere jedes Item als Feature-Vektor.
   - Film: Genre, Schauspieler, Regisseur, Jahr, Laufzeit.
   - Artikel: TF-IDF-Vektor des Textes, Kategorie, Tags.
   - Produkt: Preis, Kategorie, Spezifikationen.

2. **User-Profil erstellen:** Aggregiere die Feature-Vektoren der Items, die der User mag.
   - Einfach: Durchschnitt der gemochten Item-Vektoren.
   - Gewichtet: nach Rating oder Interaktionsstärke.

3. **Ähnlichkeit berechnen:** Finde Items, die dem User-Profil ähneln.
   - Cosine Similarity ist der Standard.

**Implementierung mit TF-IDF (Text-basiert):**
```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

# Filme mit Beschreibungen
movies = pd.DataFrame({
    'title': ['Film A', 'Film B', 'Film C'],
    'description': ['Action Adventure Superheld...', 'Romantik Drama Paris...', 'Action Thriller Polizei...']
})

# TF-IDF Vektoren
tfidf = TfidfVectorizer(stop_words='german')
tfidf_matrix = tfidf.fit_transform(movies['description'])

# Cosine Similarity aller Paare
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

def get_recommendations(title, cosine_sim=cosine_sim, df=movies, n=5):
    idx = df[df['title'] == title].index[0]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:n+1]  # Exkludiere den Film selbst
    movie_indices = [i[0] for i in sim_scores]
    return df['title'].iloc[movie_indices].tolist()

print(get_recommendations('Film A'))  # → ['Film C', ...]
```

**Stärken:**
- Kein Cold-Start für neue Items (nur Item-Features nötig).
- Transparent und erklärbar ("weil du X gemocht hast").
- Keine anderen User-Daten nötig — datenschutzfreundlich.
- Kann neue Items sofort empfehlen.

**Schwächen:**
- Filter Bubble: empfiehlt immer ähnliches, keine Überraschungen.
- Feature-Engineering aufwendig: Item-Features müssen definiert und gepflegt werden.
- Kein Benefit aus dem Kollektivwissen anderer User.
- Cold Start für neue User (noch kein User-Profil vorhanden).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Tutorial | [scikit-learn — Text Feature Extraction](https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction) | TF-IDF Grundlage |
| 📖 Tutorial | [Towards Data Science — Content-Based Filtering](https://towardsdatascience.com/how-to-build-a-content-based-movie-recommender-system-with-natural-language-processing-1cbc1942bf02) | Praktisches Beispiel |
| 📖 Docs | [Google RecSys — Content-Based](https://developers.google.com/machine-learning/recommendation/content-based/basics) | Google-Kurs |

## Teste dein Verständnis

- [ ] Wie wird ein User-Profil in Content-Based Filtering repräsentiert?
- [ ] Warum kann Content-Based Filtering keine überraschenden Empfehlungen geben?
- [ ] Was ist der Unterschied zwischen dem Cold-Start-Problem für User vs. Items in Content-Based Filtering?
- [ ] In welchem Szenario ist Content-Based Filtering die einzige sinnvolle Option?
