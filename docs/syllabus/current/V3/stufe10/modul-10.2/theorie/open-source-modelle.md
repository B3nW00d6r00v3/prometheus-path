---
title: "Aktuelle Open-Source-Modelle für Fine-Tuning Mai 2026"
module: "10.2"
type: theorie
fast_track: true
effort: "15min"
stability: yellow
---

# Aktuelle Open-Source-Modelle für Fine-Tuning Mai 2026

## Kernidee

Die Landschaft der Open-Source-Foundation-Modelle hat sich 2025/2026 dramatisch verbessert: kleinere Modelle (7B-14B) erreichen die Qualität von GPT-4 vor einem Jahr. Für Fine-Tuning ist Modell-Wahl Strategie: Größe vs. Qualität vs. Lizenz vs. Sprach-Unterstützung.

## Im Detail

**Die wichtigsten Open-Source-Modelle für Fine-Tuning Mai 2026:**

| Modell | Größen | Lizenz | Stärken |
|---|---|---|---|
| **Llama 4** (Meta) | 8B / 70B / 405B | Apache-ähnlich | Generalistisch, große Community |
| **Qwen 3** (Alibaba) | 0.5B / 1.5B / 7B / 14B / 32B / 72B | Apache 2.0 | Code, Multilingual, Deutsch |
| **Gemma 3 / Gemma 4** (Google) | 2B / 9B / 27B | Apache 2.0 | Gute deutsche Sprache, effizient |
| **DeepSeek V4 / V3** (DeepSeek) | MoE-Varianten | MIT | Reasoning, Effizienz durch MoE |
| **Mistral 3** (Mistral AI) | 7B + | Kommerziell/OSS | Europäisch, Compliance-freundlich |
| **Phi-4** (Microsoft) | Klein (3.8B) | MIT | Sehr stark trotz kleiner Größe |

**Empfehlungen nach Track:**
- **🧮 (Foundations-Capstone)**: Qwen 3 0.5B oder 1.5B (schnelles Experimentieren auf Consumer-Hardware), danach Gemma 3 2B oder Qwen 3 7B
- **🔧 (Engineer)**: Qwen 3 7B oder Gemma 3 9B — gute Balance Qualität/Compute
- **💼 (Strategist)**: Llama 4 8B über Together AI oder Fireworks AI (Managed Fine-Tuning)

**Für deutschsprachige Use-Cases:** Qwen 3 und Gemma 3/4 haben deutlich stärkere deutsche Sprachkompetenz als Llama 4.

*Verfallsdatum: Aug 2026 — neue Modelle erscheinen schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📊 Leaderboard | [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) | Aktuelle Benchmark-Vergleiche |
| 🤗 Hub | [Hugging Face Models](https://huggingface.co/models) | Modell-Suche und Download |

## Teste dein Verständnis

- [ ] Welches Modell würdest du für einen deutschsprachigen Fine-Tuning-Use-Case wählen — und warum?
- [ ] Was unterscheidet DeepSeek V4 von Llama 4 in der Architektur?
- [ ] Welche Modell-Größe empfiehlst du für erste Fine-Tuning-Experimente auf Consumer-Hardware?
