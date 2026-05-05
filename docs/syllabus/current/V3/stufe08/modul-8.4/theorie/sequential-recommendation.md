---
title: "Sequential Recommendation"
module: "8.4"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Sequential Recommendation

## Kernidee

Viele Empfehlungs-Szenarien haben eine wichtige temporale Komponente: was ein User als nächstes sehen möchte, hängt von dem ab, was er gerade gesehen hat — nicht von seiner gesamten Lebenshistorie. Sequential Recommendation modelliert User-Verhalten als geordnete Sequenz und nutzt Transformers oder RNNs, um das nächste wahrscheinliche Item vorherzusagen.

## Im Detail

**Warum Sequenz wichtig ist:**

User-Verhalten ist kontextabhängig:
- Spotify: nach 3 Techno-Songs ist die nächste Empfehlung wahrscheinlich auch Techno, nicht plötzlich Klassik.
- Netflix: nach zwei Folgen einer Serie kommt die dritte — nicht ein zufälliger Film.
- E-Commerce: User schaut Laptops an → Empfehle Laptop-Zubehör, nicht Kühlschränke.

Klassische CF/MF ignorieren diese Reihenfolge — alle historischen Interaktionen werden gleichbehandelt.

**Klassisch: Markov Chains:**

Das nächste Item hängt nur vom letzten Item ab (Markov-Annahme):
```python
from collections import defaultdict

# Transition-Probabilities aus Trainings-Sequenzen lernen
transitions = defaultdict(lambda: defaultdict(int))
for sequence in training_sequences:
    for i in range(len(sequence) - 1):
        transitions[sequence[i]][sequence[i+1]] += 1

def next_item_markov(current_item, n=5):
    counts = transitions[current_item]
    total = sum(counts.values())
    probs = {item: count/total for item, count in counts.items()}
    return sorted(probs.items(), key=lambda x: x[1], reverse=True)[:n]
```

**Modern: GRU4Rec (2015):**
- Gated Recurrent Units verarbeiten die Session-Sequenz.
- Output: Wahrscheinlichkeit über alle Items.
- Besser als Markov für längere Abhängigkeiten.

**State-of-the-Art: SASRec (2018):**
```python
# Konzeptionelle Idee: Self-Attention über Item-Sequenz
# Input:  [item_1_emb, item_2_emb, ..., item_n-1_emb]
# Output: [item_2_emb, item_3_emb, ..., item_n_emb] (nächstes Item)

# Der Transformer lernt, welche früheren Items am relevantesten
# für die Vorhersage des nächsten Items sind
```

SASRec ist oft besser als RNN-basierte Ansätze und schneller zu trainieren.

**Session-Based vs. Long-Term:**

| | Session-Based | Long-Term |
|--|--|--|
| Scope | Aktuelle Session (letzte Stunde) | Gesamte User-Historie |
| Beispiel | Was schaut der User gerade? | Was mag der User generell? |
| Herausforderung | Kurze Sequenzen | Sehr lange Sequenzen |
| Modell | GRU4Rec, SASRec | BERT4Rec, LightGBM mit Lag-Features |

**In Production:**

Spotify und ähnliche Dienste kombinieren:
- Short-term: was wurde in den letzten 30 Minuten gehört?
- Long-term: was hört der User generell?
- Beide als Features ins finale Ranking-Modell.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [SASRec: Self-Attentive Sequential Recommendation](https://arxiv.org/abs/1808.09781) | Originalpaper |
| 📖 Paper | [BERT4Rec](https://arxiv.org/abs/1904.06690) | BERT für Sequential RecSys |
| 📖 Docs | [RecBole Library](https://recbole.io) | Framework mit vielen Sequential-Modellen |

## Teste dein Verständnis

- [ ] Was ist der fundamentale Unterschied zwischen Matrix Factorization und Sequential Recommendation?
- [ ] Warum ist Markov-Chain-Recommendation für kurze Sessions oft schlechter als Transformers?
- [ ] Nenne zwei konkrete Anwendungsbeispiele für Session-Based Recommendation.
- [ ] Wie kombiniert man Short-Term und Long-Term Signale in einem Production-System?
