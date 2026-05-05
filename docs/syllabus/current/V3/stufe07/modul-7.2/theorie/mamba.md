---
title: "State Space Models / Mamba als Alternative"
module: "7.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# State Space Models / Mamba als Alternative

## Kernidee

State Space Models (SSMs) wie Mamba sind eine nicht-Transformer-Architektur für Sequenzmodellierung. Lineare Komplexität in der Context-Länge statt quadratischer Attention. 2026: noch nicht dominant, aber aktiv erforscht und für bestimmte Anwendungen relevant.

## Im Detail

**Das Attention-Skalierungsproblem:** Self-Attention hat quadratische Komplexität in der Sequenzlänge: O(n²). Bei 1M-Token-Context bedeutet das astronomischen Compute-Aufwand. KV-Cache-Optimierungen helfen bei Inferenz, aber das Trainings-Problem bleibt.

**State Space Models (SSMs):** Lineare Komplexität in der Sequenzlänge. Mathematischer Ursprung in Control Theory. Verarbeiten Sequenzen durch einen latenten "State", der kontinuierlich aktualisiert wird — ähnlich wie RNNs, aber mit besseren Eigenschaften.

**Mamba (2023, Gu & Dao):** Führt "Selective" State Spaces ein — der State wird input-abhängig aktualisiert. Lineare Inferenz-Komplexität, keine quadratische Attention. 2023-2024 viel diskutiert als Transformer-Alternative.

**Stand 2026:**
- Mamba 2, Mamba-2.8B, 790M sind OSS.
- **Hybride Modelle**: Jamba (AI21 Labs), Zamba (Zyphra) — kombinieren Transformer-Blocks und SSM-Blocks. Möglicher Sweet Spot.
- **Limitation**: Mamba-Modelle sind noch nicht klar besser als Transformers bei denselben Compute-Budgets auf Standard-Benchmarks.
- **Spezialisierung**: SSMs können besser sein für sehr lange Sequenzen (genomische Daten, lange Audio) wo quadratische Attention unpraktikabel ist.

**Warum Awareness-Wissen:** Für die meisten 2026-Anwendungen sind Transformers die sichere Wahl. SSMs sind ein aktives Forschungsgebiet — es lohnt sich, auf dem Laufenden zu bleiben, ohne jetzt tief einzusteigen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Mamba: Linear-Time Sequence Modeling with Selective State Spaces](https://arxiv.org/abs/2312.00752) | Original-Paper |
| 💻 Code | [Mamba GitHub](https://github.com/state-spaces/mamba) | OSS-Implementierung |
| 🌐 Blog | [Hugging Face — Mamba](https://huggingface.co/blog/mamba) | Zugängliche Erklärung |

## Teste dein Verständnis

- [ ] Was ist der Komplexitäts-Unterschied zwischen Attention und SSMs für lange Sequenzen?
- [ ] Für welche Anwendungen könnte Mamba gegenüber Transformers vorteilhaft sein?
- [ ] Was ist ein hybrides Modell (Transformer + SSM)?
- [ ] Warum sind Transformer trotzdem 2026 noch der Standard?
