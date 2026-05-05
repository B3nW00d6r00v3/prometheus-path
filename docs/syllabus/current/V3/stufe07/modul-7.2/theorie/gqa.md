---
title: "GQA (Grouped Query Attention)"
module: "7.2"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# GQA (Grouped Query Attention)

## Kernidee

GQA reduziert die Anzahl der K/V-Heads gegenüber Q-Heads. Statt für jeden der N Query-Heads eigene Key- und Value-Matrizen zu haben, teilen sich Gruppen von Q-Heads ein K/V-Paar. Das reduziert den KV-Cache um den Faktor der Gruppen bei minimalem Quality-Drop. Standard in Llama 3.x, Qwen 2/3, Mistral.

## Im Detail

**Das KV-Cache-Problem:** Bei Inferenz werden Keys und Values aller bisherigen Tokens gespeichert (KV-Cache). Bei Standard Multi-Head Attention: für jeden der N Heads einen K- und V-Cache. Das ist teuer in Memory, besonders bei langen Contexts.

**GQA-Varianten:**

| Variante | Q-Heads | K/V-Heads | Cache-Faktor |
|----------|---------|-----------|--------------|
| MHA (Multi-Head) | H | H | 1× (Referenz) |
| GQA (Grouped Query) | H | H/G | G× weniger |
| MQA (Multi-Query) | H | 1 | H× weniger |

**Beispiel Llama 3.1 8B:** 32 Q-Heads, 8 K/V-Heads (G=4). Je 4 Q-Heads teilen sich ein K/V-Paar. KV-Cache ist 4× kleiner als bei Standard MHA.

**Quality-Trade-off:** GQA verliert typisch <0.5 Perplexitätspunkte gegenüber MHA. MQA verliert mehr. Der Sweet Spot für die meisten Modelle ist G=4 oder G=8.

**Implementierung in PyTorch:**

```python
# GQA: n_kv_heads < n_heads
class GroupedQueryAttention(nn.Module):
    def __init__(self, d_model, n_heads, n_kv_heads):
        self.n_heads = n_heads
        self.n_kv_heads = n_kv_heads
        self.n_rep = n_heads // n_kv_heads  # Wie oft K/V wiederholt wird

        self.wq = nn.Linear(d_model, n_heads * d_head)
        self.wk = nn.Linear(d_model, n_kv_heads * d_head)
        self.wv = nn.Linear(d_model, n_kv_heads * d_head)

    def forward(self, x):
        q = self.wq(x).view(batch, seq, self.n_heads, d_head)
        k = self.wk(x).view(batch, seq, self.n_kv_heads, d_head)
        v = self.wv(x).view(batch, seq, self.n_kv_heads, d_head)
        # K und V wiederholen für alle Q-Heads in der Gruppe
        k = k.repeat_interleave(self.n_rep, dim=2)
        v = v.repeat_interleave(self.n_rep, dim=2)
        # Standard Attention ...
```

*Verfallsdatum: Aug 2026 — GQA ist der aktuelle Standard, aber Weiterentwicklungen (MLA, etc.) möglich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [GQA: Training Generalized Multi-Query Transformer Models](https://arxiv.org/abs/2305.13245) | Original GQA Paper |
| 🌐 Blog | [DigitalApplied — KV Cache Optimization 2026](https://www.digitalapplied.com/blog/kv-cache-optimization-techniques-2026) | Praktischer Überblick |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen GQA und MHA in einem Satz?
- [ ] Wie viele K/V-Heads hat Llama 3.1 8B, und um wie viel wird der KV-Cache reduziert?
- [ ] Warum ist MQA weniger beliebt als GQA (Tipp: Quality-Trade-off)?
- [ ] 🧮: Kannst du GQA in nanoGPT einbauen als Alternative zu Standard MHA?
