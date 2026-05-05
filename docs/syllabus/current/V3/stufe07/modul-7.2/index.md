---
title: "Modul 7.2: Transformer-Architektur modern"
module: "7.2"
type: index
fast_track: false
effort: "🔧 15-25h · 🧮 60-90h · 💼 0-3h"
---

# Modul 7.2: Transformer-Architektur modern

Das Original "Attention is All You Need" Paper von 2017 ist Foundation-Lektüre — aber wer 2026 LLMs versteht, muss die **modernen Komponenten** kennen, die 2024-2026 Standard wurden: **RoPE** (Rotary Position Embeddings), **GQA** (Grouped Query Attention), **KV-Cache**, **MLA** (Multi-head Latent Attention bei DeepSeek). Dieses Modul ergänzt das Original-Transformer-Wissen um diese modernen Bausteine. Karpathys "Let's build GPT from scratch"-Lecture ist die didaktische Brücke.

**Aufwand:** 🔧 15-25h · 🧮 60-90h · 💼 0-3h (skip für 💼)  
**Voraussetzungen:** Modul 7.1

## Lernziel

**🧮:** Du hast nanoGPT von Grund auf nachgebaut, mindestens eine moderne Komponente (RoPE oder GQA) eingebaut, und auf deinem eigenen Korpus trainiert.

**🔧:** Du verstehst die moderne Transformer-Architektur ausreichend, um Modell-Konfigurations-Files zu lesen und Architektur-Entscheidungen zu bewerten.

**💼:** Skip oder oberflächlich — das ist Theorie, die du als Strategist nicht direkt brauchst.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Original Transformer (2017)](theorie/original-transformer.md) | ✅ | 20min |
| 2 | [Self-Attention: Q, K, V](theorie/self-attention-qkv.md) | ✅ | 20min |
| 3 | [Multi-Head Attention](theorie/multi-head-attention.md) | ✅ | 15min |
| 4 | [Decoder-only Architektur (GPT-Stil)](theorie/decoder-only.md) | ✅ | 15min |
| 5 | [Pre-Norm vs. Post-Norm](theorie/pre-norm-post-norm.md) | ⏭️ | 10min |
| 6 | [RoPE (Rotary Position Embeddings)](theorie/rope.md) | ⏭️ | 20min |
| 7 | [GQA (Grouped Query Attention)](theorie/gqa.md) | ⏭️ | 20min |
| 8 | [KV-Cache](theorie/kv-cache.md) | ✅ | 15min |
| 9 | [MLA (Multi-head Latent Attention)](theorie/mla.md) | ⏭️ | 15min |
| 10 | [Mixture of Experts (MoE)](theorie/mixture-of-experts.md) | ⏭️ | 15min |
| 11 | [Tokenizer 2026](theorie/tokenizer.md) | ✅ | 15min |
| 12 | [State Space Models / Mamba](theorie/mamba.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (Capstone-Foundations-Vertiefung):**
- Karpathy "Let's build GPT from scratch" (Lecture 7) komplett nachimplementieren.
- nanoGPT-Codebase verstehen, kommentieren.
- **Mindestens eine moderne Komponente einbauen**: RoPE oder GQA. Dokumentieren mit Vorher/Nachher-Vergleich (Performance, Memory).
- Auf eigenem Korpus trainieren (aus 7.1).
- Im Portfolio: `stufe-7_deep-learning/7-2-modern-transformer/` mit Code, Architektur-Diagramm, Trainings-Logs, Reflektion.

**Capstone-Foundations**: Dein Modell ist jetzt ein moderner Transformer auf eigenem Korpus. In 10.2 wird darauf Fine-Tuning angewendet. *Capstone-spezifische Anforderungen siehe `18_capstone_b_foundations.md`.*

**Für 🔧:**
- Karpathy "Let's build GPT from scratch" schauen (nicht zwingend selbst implementieren).
- Llama-Code von Hugging Face lesen und verstehen: wo ist RoPE? wo ist GQA? wie groß sind die Heads?
- Modell-Konfigurations-Files (z.B. `config.json` von Llama 3) lesen und alle Felder erklären können.
- Mini-Projekt: zwei kleine Modelle vergleichen (z.B. Llama-3.2-3B vs. Qwen-2.5-3B), Architektur-Unterschiede dokumentieren.
- Im Portfolio: `stufe-7_deep-learning/7-2-architektur-vergleich/`.

**Für 💼:**
- Optional: ein kurzer Überblick (1h) über die Innovationen ohne Praxis. Reicht oft.

## 🎁 Mehrwert-Mini-Projekte

- **Eigene Architektur-Visualisierungen** für Blog/LinkedIn — gut zum Verständnis vertiefen.
- **Modell-Pricing-Calculator** der Token-Cost basierend auf Context-Length und KV-Cache schätzt.

## 🌱 Open-Source-Pfad

- Alle Quellen sind OSS.
- Bonus: Implementiere eigene Modelle in JAX/Flax statt PyTorch — funktional, anders strukturiert.
- Hugging Face Transformers-Library als Referenz für moderne Implementierungen.

## Outcome-Check (track-spezifisch)

**🧮:**
- [ ] nanoGPT komplett nachgebaut und dokumentiert
- [ ] Mindestens eine moderne Komponente (RoPE oder GQA) selbst eingebaut
- [ ] Auf eigenem Korpus trainiert mit dokumentierten Loss-Curves

**🔧:**
- [ ] Karpathy GPT-Lecture geschaut
- [ ] Modell-Configs lesen können
- [ ] Architektur-Vergleich zweier kleiner Modelle

**💼:**
- [ ] Konzeptionelles Verständnis der wichtigsten Innovationen
