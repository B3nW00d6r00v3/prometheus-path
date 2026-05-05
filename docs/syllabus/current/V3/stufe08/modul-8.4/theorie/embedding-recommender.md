---
title: "Embedding-basierter Recommender (2026-Pattern)"
module: "8.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Embedding-basierter Recommender (2026-Pattern)

## Kernidee

Der Embedding-basierte Recommender ist 2026 der modernste und skalierbarste Ansatz für viele Anwendungsfälle: Items werden als dichte Vektoren in einer Vector-Database gespeichert, User-Profile werden ebenfalls als Vektoren repräsentiert, und Nearest-Neighbor-Suche liefert Top-N-Empfehlungen in Millisekunden. Das verbindet das Konzept aus RAG (Modul 5.1) mit RecSys.

## Im Detail

**Die drei Komponenten:**

1. **Item-Embeddings:** Jedes Item wird als Vektor repräsentiert.
   - Mit einem Embedding-Modell (z.B. `text-embedding-3-small` für textuelle Beschreibungen).
   - Oder gelernt durch Matrix Factorization / Two-Tower-Training.

2. **User-Profil als Vektor:**
   - Durchschnitt der Embeddings von Items, die der User gemocht hat.
   - Oder Produkt eines User-Towers (aus Two-Tower-Modell).

3. **Approximate Nearest Neighbor (ANN) Suche:**
   - Über Millionen von Item-Embeddings effizient ähnliche finden.
   - Bibliotheken: FAISS, ScaNN, pgvector.

**Komplette Implementierung mit pgvector:**

```python
import psycopg2
import numpy as np
from openai import OpenAI

client = OpenAI()

def get_embedding(text: str) -> list[float]:
    return client.embeddings.create(
        input=text, model="text-embedding-3-small"
    ).data[0].embedding

# pgvector Setup (einmalig)
conn = psycopg2.connect("postgresql://localhost/recsys")
cur = conn.cursor()
cur.execute("CREATE EXTENSION IF NOT EXISTS vector")
cur.execute("""
    CREATE TABLE IF NOT EXISTS items (
        id TEXT PRIMARY KEY,
        description TEXT,
        embedding vector(1536)
    )
""")
conn.commit()

# Items einfügen
def index_item(item_id: str, description: str):
    embedding = get_embedding(description)
    cur.execute(
        "INSERT INTO items (id, description, embedding) VALUES (%s, %s, %s::vector) ON CONFLICT DO NOTHING",
        (item_id, description, embedding)
    )
    conn.commit()

# Empfehlungen für einen User
def get_recommendations(user_liked_items: list[str], n: int = 10) -> list[str]:
    # User-Profil = Durchschnitt der gemochten Item-Embeddings
    liked_embeddings = []
    for item_id in user_liked_items:
        cur.execute("SELECT embedding FROM items WHERE id = %s", (item_id,))
        row = cur.fetchone()
        if row:
            liked_embeddings.append(np.array(row[0]))

    if not liked_embeddings:
        return []

    user_embedding = np.mean(liked_embeddings, axis=0)

    # ANN-Suche mit pgvector
    cur.execute(
        """
        SELECT id, description, 1 - (embedding <=> %s::vector) AS similarity
        FROM items
        WHERE id != ALL(%s)  -- Bereits bekannte Items ausschließen
        ORDER BY embedding <=> %s::vector
        LIMIT %s
        """,
        (user_embedding.tolist(), user_liked_items,
         user_embedding.tolist(), n)
    )
    return [row[0] for row in cur.fetchall()]
```

**Verbindung zu RAG (Modul 5.1):**

Der Stack ist identisch:
- RAG: `Query-Embedding → Vector Search → relevante Dokumente`
- RecSys: `User-Profil-Embedding → Vector Search → relevante Items`

Wer RAG versteht, versteht den Embedding-Recommender konzeptionell — nur die Semantik der Query ändert sich.

**FAISS für skalierbare ANN-Suche:**
```python
import faiss
import numpy as np

# Index aufbauen
dimension = 1536  # text-embedding-3-small
index = faiss.IndexFlatIP(dimension)  # Inner Product = Cosine bei normierten Vektoren

# Alle Item-Embeddings normieren und indexieren
item_embeddings = np.array([...])  # shape: (n_items, 1536)
faiss.normalize_L2(item_embeddings)
index.add(item_embeddings)

# Query
user_embedding = np.array([...]).reshape(1, -1)
faiss.normalize_L2(user_embedding)
scores, indices = index.search(user_embedding, k=10)
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [pgvector GitHub](https://github.com/pgvector/pgvector) | PostgreSQL Vector Search |
| 📖 Docs | [FAISS Documentation](https://faiss.ai) | Meta's ANN-Library |
| 📖 Tutorial | [Embedding-based Recommendation with pgvector](https://supabase.com/blog/building-a-recommendation-system) | Praxis-Beispiel |

## Teste dein Verständnis

- [ ] Was ist der konzeptionelle Unterschied zwischen einem Embedding-Recommender und RAG?
- [ ] Wie repräsentiert man ein User-Profil als Vektor, wenn man nur Bewertungshistorien hat?
- [ ] Warum ist Approximate Nearest Neighbor (ANN) statt exakter Suche nötig?
- [ ] Wann würdest du FAISS statt pgvector verwenden?
