---
title: "Wann LLM, wann klassisches ML?"
module: "8.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Wann LLM, wann klassisches ML für Klassifikation?

## Kernidee

2026 ist LLM nicht immer die beste Wahl für Klassifikation — klassisches ML schlägt LLMs systematisch bei tabellarischen Features, großen gelabelten Datensätzen, Latenz-Anforderungen und niedrigen Kosten. LLMs schlagen klassisches ML bei wenigen gelabelten Samples, unstrukturiertem Text, komplexem Sprachverständnis und schnellen Prototypen. Der Hybrid-Ansatz — LLM-Embeddings + XGBoost-Klassifikator — ist 2026 oft das Best-of-both-Worlds.

## Im Detail

**Wann klassisches ML stärker ist**

- **Viele gelabelte Daten** (>1.000 Samples): klassisches ML lernt direkt aus Daten, kein Transfer-Learning nötig
- **Tabellarische Features**: Alter, Einkommen, Kaufhistorie — XGBoost dominiert hier konsistent
- **Real-time-Anforderung** (<50ms Latenz): XGBoost inferiert in Mikrosekunden, LLM-API braucht 100–2000ms
- **Niedrige Inferenz-Cost**: Cloud-LLM-Inference kostet je nach Volumen; XGBoost läuft kostenlos on-premise
- **Explainability-Pflicht**: SHAP auf XGBoost, LIME auf Logistic Regression — direkt möglich. LLMs: schwieriger
- **Gesetze und Compliance** (z.B. DSGVO): lokales Modell, keine Daten nach extern

**Wann LLMs stärker sind**

- **Wenige gelabelte Daten** (<100 Samples): LLMs als Zero-Shot oder Few-Shot Klassifikatoren
- **Text- oder Multimodal-Input**: LLMs verstehen Semantik, Kontext, Ironie — TF-IDF + Logistic Regression nicht
- **Komplexe Sprachverständnis-Aufgabe**: Sentiment mit Kontext, Klassifikation von Absichten, Entitäten
- **Schneller Prototyp**: ein Prompt statt wochenlangem Labeling und Training
- **Neue Klassen ohne Re-Training**: mit wenigen Beispielen im Prompt (Few-Shot)

**Der Hybrid-Ansatz 2026**

Embedding (von LLM) + klassischer Klassifikator (XGBoost):
```python
import anthropic
from sklearn.ensemble import GradientBoostingClassifier
import numpy as np

# 1. Embeddings generieren
client = anthropic.Anthropic()
# (Anthropic bietet Embeddings via external Modelle — oder OpenAI text-embedding-3-small)

from openai import OpenAI
oai = OpenAI()

def embed(text):
    response = oai.embeddings.create(input=text, model="text-embedding-3-small")
    return response.data[0].embedding

X_embeddings = np.array([embed(text) for text in texts])

# 2. XGBoost auf Embeddings
from xgboost import XGBClassifier
clf = XGBClassifier()
clf.fit(X_embeddings[train_idx], y[train_idx])
```

Stärken: semantisches Sprachverständnis + Tabular-ML-Performance.

*Verfallsdatum: Nov 2026 — der Embedding-Markt ändert sich schnell.*

**Entscheidungs-Framework:**

```
Ist der Input tabellarisch/numerisch?
  → Ja + viele Labels: XGBoost
  → Nein (Text/Image): LLM oder LLM-Embedding

Wie viele gelabelte Samples?
  < 50: LLM Zero-Shot/Few-Shot
  50-1000: LLM-Embedding + XGBoost
  > 1000: XGBoost direkt oder Fine-Tuned-Modell

Latenz < 50ms?
  → Ja: klassisches ML (kein LLM)
  → Nein: LLM möglich
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Kurs | [DLAI — Embeddings + Classification](https://learn.deeplearning.ai) | Praktische Umsetzung |
| 📖 Blog | [Hamel Husain — When to use LLMs](https://hamel.dev) | Praxis-Perspektive |

## Teste dein Verständnis

- [ ] Du hast 50 gelabelte Kunden-Support-Tickets. Welcher Ansatz?
- [ ] Du brauchst Klassifikation mit <20ms Latenz. Was scheidest du aus?
- [ ] Erkläre den Hybrid-Ansatz in einem Satz.
- [ ] Warum schlägt XGBoost LLMs bei tabellarischen Daten?
