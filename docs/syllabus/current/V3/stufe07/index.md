---
title: "Stufe 7: Deep Learning Foundations"
type: index
fast_track: false
effort: "70-116h (🔧) · 245-413h (🧮) · 13-25h (💼)"
---

# Stufe 7: Deep Learning Foundations

**Aufwand:** 🔧 70-116h · 🧮 245-413h · 💼 13-25h  
**Voraussetzungen:** 🔧/💼: Stufen 1-6 · 🧮: Module 8.1+8.2+8.5 + Math-Diagnose + Stufen 1-6

| Querschnitte | Capstone-Beitrag | Tools |
|---|---|---|
| Math (Pflicht-Gate 🧮) | **Capstone B Start** (nanoGPT) | PyTorch, nanoGPT, Hugging Face Transformers, fast.ai |

Diese Stufe ist das mathematische und konzeptionelle Fundament moderner KI. Wer 🧮 ist, lebt hier — Karpathys Zero-to-Hero und fast.ai sind die Welt für mehrere Monate. Wer 🔧 ist, holt sich gezielt das, was für bewusste Modell-Auswahl und Fine-Tuning nötig ist. Wer 💼 ist, lernt die Größenordnungen und Konzepte, um Stakeholder-Gespräche führen zu können.

Hier startet das Capstone-Foundations-Projekt (🧮): nanoGPT-Vertiefung mit eigenem Korpus. *Capstone-spezifische Anforderungen siehe `18_capstone_b_foundations.md`.*

## Voraussetzungs-Block für 🧮

In v2.0 war Stufe 7 (Deep Learning) **vor** Stufe 8 (Klassisches ML) sequenziert — als didaktischer Rückblick. Das war der größte strukturelle Schwachpunkt der v2.0: Karpathy selbst empfiehlt klassisches ML als Foundation, jedes etablierte Curriculum (DeepLearning.AI Specialization, Stanford CS229 → CS231n) sequenziert klassisches ML *vor* Deep Learning. Backpropagation ist Spezialfall von Gradient Descent — den lernt man im Logistic-Regression-Kontext zuerst sauber.

Für 🧮 ist die Reihenfolge in v2.1 **harte Pflicht-Voraussetzung**, weil sonst Foundations-Lücken entstehen, die später nicht selbst geschlossen werden:

1. **Modul 8.1 (Data Exploration & Clustering)** — saubere EDA-Pipelines, Distance-Metrics. Wichtig für späteres Embedding-Verständnis.
2. **Modul 8.2 (Klassifikation & Decision Trees)** — **Logistic Regression from scratch implementiert** (Forward, Backward, Gradient Descent). Das ist die Foundation für Backprop in 7.1.
3. **Modul 8.5 (A/B-Testing & Causal Inference)** — Statistik-Foundation für Eval.
4. **Math-Diagnose-Test bestanden** — siehe `12_querschnitt_math.md`.

Für 🔧 und 💼 ist die Reihenfolge weniger kritisch — ihre Stufen-7-Tiefe ist konzeptionell.

## Module

| # | Modul | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 7.1 | [Neural Networks & Backpropagation](modul-7.1/index.md) | ⏭️ | 🔧 30-50h · 🧮 80-120h · 💼 5-10h |
| 7.2 | [Transformer-Architektur modern](modul-7.2/index.md) | ⏭️ | 🔧 15-25h · 🧮 60-90h · 💼 0-3h |
| 7.3 | [Computer Vision](modul-7.3/index.md) | ⏭️ | 🔧 8-15h · 🧮 30-50h · 💼 3-5h |
| 7.4 | [Multimodale KI](modul-7.4/index.md) | ⏭️ | 🔧 14-22h · 🧮 20-30h · 💼 6-10h |
| 7.5 | [Reasoning-Modelle als Architektur-Familie](modul-7.5/index.md) | ⏭️ | 🔧 4-6h · 🧮 12-18h · 💼 3-5h |
| 7.6 | [Distributed Training systematisch](modul-7.6/index.md) | ⏭️ | 🔧 4-6h · 🧮 18-30h · 💼 0h |

## Ergebnis nach Stufe 7

- [ ] Backpropagation verstanden (track-spezifisch tief)
- [ ] Moderne Transformer-Architektur verstanden (RoPE, GQA, KV-Cache, MLA)
- [ ] Computer Vision: CNNs, ViT, Vision Foundation Models
- [ ] Multimodale Anwendung gebaut
- [ ] Audio/Voice-AI-Stack erklärbar + Voice-Agent-Pattern für eigenen Use-Case bewertet
- [ ] Video-Generation-Awareness — Top-5-Modelle Mai 2026 erklärbar, Cost-Bandbreite, Use-Case-Limits verstanden
- [ ] Reasoning-Modelle als Architektur-Familie verstanden (track-spezifisch)
- [ ] Distributed Training-Patterns (track-spezifisch)
- [ ] 🧮: nanoGPT auf eigenem Korpus trainiert (Capstone-Foundations Start)
- [ ] 🧮: Voraussetzungs-Block bestanden (8.1+8.2+8.5 + Math-Diagnose)
- [ ] 🧮: S7-Self-Assessment bestanden — Backprop auf Papier + eigene nanoGPT-Variante
- [ ] 🔧: Modell-Configs lesen, Architektur-Entscheidungen treffen
- [ ] 💼: Konzeptionelles Verständnis für Stakeholder-Gespräche, plus 1-2-Pager zu Reasoning-Modellen

**Du bist bereit für Stufe 8: Klassisches ML & Statistik.**

---

[Quellen für die gesamte Stufe](quellen.md) · [Optionale Free-Zertifikate](zertifikate.md)
