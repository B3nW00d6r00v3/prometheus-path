---
title: "LLM-basierte Recommender 2024-2026"
module: "8.4"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# LLM-basierte Recommender 2024-2026

## Kernidee

LLMs ermöglichen eine neue Klasse von Recommender Systems: statt nur auf Bewertungshistorien zu setzen, nutzen sie das Weltwissen des LLMs über Items — Beschreibungen, Genres, Stil, Zusammenhänge. Das verbessert Cold-Start drastisch, macht Empfehlungen erklärbarer, aber erkauft sich Cost und Latenz. 2026 sind LLM-Recommender meist Ergänzung, nicht Ersatz klassischer Systeme.

## Im Detail

**Drei LLM-RecSys-Patterns:**

**1. Embedding-basierter Recommender (empfohlen als Einstieg):**
- Item-Beschreibungen → LLM-Embeddings → Vector Database.
- User-Profil als Text zusammenfassen → Query-Embedding.
- ANN-Suche für Top-N.

```python
from openai import OpenAI
import numpy as np

client = OpenAI()

def get_embedding(text: str, model="text-embedding-3-small") -> list[float]:
    response = client.embeddings.create(input=text, model=model)
    return response.data[0].embedding

# Item-Embeddings vorberechnen
item_descriptions = {
    "item_1": "Krimiroman, spielt in Wien, komplexe Charaktere, historischer Hintergrund",
    "item_2": "Science-Fiction, Weltraum-Exploration, Hard-SF, technische Details",
}

item_embeddings = {
    item_id: get_embedding(desc)
    for item_id, desc in item_descriptions.items()
}

# User-Präferenz als Text
user_profile = "Mag historische Krimis mit Atmosphäre, bevorzugt europäische Settings"
user_embedding = get_embedding(user_profile)

# Cosine Similarity
def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

scores = {item: cosine_sim(user_embedding, emb) for item, emb in item_embeddings.items()}
top_items = sorted(scores.items(), key=lambda x: x[1], reverse=True)[:5]
```

**2. LLM als Ranking-Modell:**
- Kandidaten-Liste durch klassisches CF generieren.
- LLM re-rankt basierend auf User-Kontext und Item-Beschreibungen.
- Gut wenn Erklärbarkeit gefragt ist.

```python
def llm_rerank(user_history: list, candidate_items: list, llm_client) -> list:
    prompt = f"""
    User-Historie: {', '.join(user_history)}
    
    Ranke diese Items nach wahrscheinlicher Relevanz für den User:
    {chr(10).join(f'{i+1}. {item}' for i, item in enumerate(candidate_items))}
    
    Gib die Nummern in Reihenfolge an und begründe die Top-3.
    """
    response = llm_client.messages.create(
        model="claude-opus-4-5",
        max_tokens=500,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.content[0].text
```

**3. Vollständig LLM-generierte Empfehlungen:**
- User-Profil + verfügbare Items im Prompt.
- LLM generiert direkt Empfehlungen mit Begründungen.
- Gut für Cold Start und Erklärbarkeit; schlecht für Skalierung.

**Stärken vs. Schwächen:**

| | LLM-RecSys | Klassisches RecSys |
|--|--|--|
| Cold Start | Gut (Weltwissen) | Schlecht |
| Skalierung | Teuer | Günstig |
| Erklärbarkeit | Sehr gut | Mittelmäßig |
| Latenz | Hoch | Niedrig |
| Personalisierung | Limitiert ohne Finetuning | Sehr gut |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [LLM-based Recommendation Survey](https://arxiv.org/abs/2305.19860) | Übersicht 2023-2024 |
| 📖 Docs | [pgvector für Recommendations](https://github.com/pgvector/pgvector) | Production-Grade Vector Search |

## Teste dein Verständnis

- [ ] Wie löst ein Embedding-basierter LLM-Recommender das Cold-Start-Problem?
- [ ] Wann ist ein LLM-Re-Ranker sinnvoll statt eines vollständigen LLM-Recommenders?
- [ ] Warum sind LLM-Recommender in Production meist Ergänzung statt Ersatz klassischer Systeme?
- [ ] Was ist der Unterschied zwischen einem LLM als Embedding-Provider und einem LLM als Generator?
