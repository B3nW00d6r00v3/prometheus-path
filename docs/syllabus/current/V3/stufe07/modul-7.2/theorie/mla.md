---
title: "MLA (Multi-head Latent Attention)"
module: "7.2"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# MLA (Multi-head Latent Attention)

## Kernidee

MLA ist DeepSeeks Innovation aus 2024: statt K/V-Vektoren direkt zu cachen, werden sie in einen niedrig-dimensionalen Latent-Space projiziert und gecacht. 7-14× Kompression des KV-Cache bei weniger als 0.2 Perplexitätspunkten Verlust. Erlaubt 1M-Context auf moderater Hardware.

## Im Detail

**Das Standard-KV-Cache-Problem:** Bei GQA werden K/V-Vektoren gecacht. Selbst mit GQA und FP8 kann ein 8B-Modell mit 128K Context ~8-17GB KV-Cache brauchen.

**MLA-Idee:** Statt K und V direkt zu speichern, wird ein gemeinsamer Latent-Vektor `c` gecacht. K und V werden bei Bedarf aus `c` projiziert:

```
Standard GQA:  Cache K (n_kv_heads × d_head) und V (n_kv_heads × d_head)
MLA:           Cache c (d_latent, deutlich kleiner)
               K = c · W_K_up,  V = c · W_V_up
```

d_latent ist typisch 8-16× kleiner als n_kv_heads × d_head. Daher die 7-14× KV-Cache-Kompression.

**Trade-off:** Mehr Rechenaufwand zur Inferenzzeit (Up-Projection aus Latent). Aber bei Memory-bound Inferenz (GPU-Speicher ist Engpass, nicht Compute) ist das oft ein guter Trade.

**Wer nutzt es 2026:** Nur DeepSeek V2, V3, und wahrscheinlich V4. Das Konzept wurde vom DeepSeek-V2-Paper (Mai 2024) eingeführt. Ob andere Anbieter MLA übernehmen werden, ist 2026 noch offen.

**Warum es trotzdem relevant ist:** MLA zeigt, dass der KV-Cache-Bottleneck lösbar ist ohne dramatischen Quality-Drop. Es ist ein Vorgeschmack auf Long-Context-Skalierbarkeit, die für zukünftige Modell-Generationen entscheidend sein wird.

*Verfallsdatum: Aug 2026 — MLA-Adoption ist im Fluss.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [DeepSeek-V2 Paper](https://arxiv.org/abs/2405.04434) | MLA-Original-Beschreibung (Section 2.1) |
| 📄 Paper | [DeepSeek-V3 Paper](https://arxiv.org/abs/2412.19437) | MLA in der nächsten Generation |

## Teste dein Verständnis

- [ ] Was ist der Kernunterschied zwischen GQA-Cache und MLA-Cache?
- [ ] Wie viel Kompression erreicht MLA gegenüber Standard-KV-Cache?
- [ ] Welche Modell-Familie nutzt MLA 2026?
- [ ] Welchen Trade-off macht MLA (Memory vs. Compute)?
