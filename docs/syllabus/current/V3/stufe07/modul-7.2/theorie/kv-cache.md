---
title: "KV-Cache"
module: "7.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# KV-Cache

## Kernidee

Bei Inferenz werden Keys und Values für alle bisherigen Tokens gespeichert, damit jedes neue Token nicht alle Vorgänger neu berechnen muss. Ohne KV-Cache wächst die Inferenz-Zeit quadratisch mit der Sequenz-Länge. Mit KV-Cache ist die Berechnung pro Token nahezu konstant — auf Kosten von Memory.

## Im Detail

**Das Problem ohne KV-Cache:** Autoregressive Generierung bedeutet: für Token t müssen Q, K, V für alle Tokens 0..t berechnet werden. Token t+1: erneut für alle 0..t+1. Das ist quadratisch in der Sequenz-Länge — bei 100K-Token-Context nicht mehr bezahlbar.

**KV-Cache-Lösung:** Keys und Values für Token 0..t-1 werden nach jeder Generierungs-Schritt gecacht. Token t berechnet nur seine eigenen Q, K, V — die historischen K/V werden aus dem Cache geladen. Attention wird dann mit dem neuen Q gegen alle cached K/V berechnet. Lineare Komplexität in der Generierung.

**Speicher-Bedarf des KV-Cache:**

```
KV-Cache-Größe = 2 (K und V) × n_kv_heads × d_head × n_layers × seq_length × dtype_bytes
```

Beispiel Llama 3.1 8B bei 128K Context in BF16:
`2 × 8 × 128 × 32 × 131072 × 2 Bytes ≈ 17 GB KV-Cache`

Das ist fast so groß wie die Modell-Weights selbst (16GB in BF16). Daher ist GQA (weniger K/V-Heads) so wichtig für lange Contexts.

**Optimierungen 2026:**
- **KV-Cache Quantisierung:** FP8 statt BF16 — halbiert KV-Cache-Größe bei <1% Quality-Drop. vLLM und SGLang machen das automatisch.
- **Paged Attention (vLLM):** Wie virtueller Speicher für KV-Cache — keine Fragmentierung, effizientere Auslastung.
- **MLA (DeepSeek):** Komprimiert K/V in niedrig-dimensionalen Latent-Space statt vollen Vektoren (Modul-Theorie MLA).

**Praktische Konsequenz:** Als Nutzer: du zahlst für KV-Cache-Speicher bei Long-Context-Inferenz — das ist warum sehr lange Contexts teurer sind. Als Entwickler: vLLM oder SGLang nutzen, die KV-Cache automatisch optimieren.

*Verfallsdatum: Aug 2026 — KV-Cache-Optimierungen entwickeln sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Hugging Face — LLM Inference Optimization](https://huggingface.co/docs/transformers/main/llm_tutorial_optimization) | KV-Cache Erklärung |
| 🌐 Blog | [vLLM — Paged Attention](https://blog.vllm.ai/2023/06/20/vllm.html) | Wie vLLM KV-Cache verwaltet |

## Teste dein Verständnis

- [ ] Warum ist Inferenz ohne KV-Cache quadratisch in der Sequenz-Länge?
- [ ] Wie groß ist der KV-Cache für ein 8B-Modell bei 128K Context (ungefähre Schätzung)?
- [ ] Warum ist GQA besonders wichtig für Long-Context-Inferenz?
- [ ] Was ist Paged Attention und welches Problem löst es?
