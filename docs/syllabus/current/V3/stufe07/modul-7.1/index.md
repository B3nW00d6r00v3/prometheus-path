---
title: "Modul 7.1: Neural Networks & Backpropagation"
module: "7.1"
type: index
fast_track: false
effort: "🔧 30-50h · 🧮 80-120h · 💼 5-10h"
---

# Modul 7.1: Neural Networks & Backpropagation

Die Grundlage allen Deep Learnings. Karpathys "Zero to Hero"-Serie ist 2026 der Goldstandard für dieses Material — sechs Stunden Video, Wochen Hands-on. Es gibt keine bessere Quelle. Dieses Modul lehrt **wann du was davon brauchst** und wie du es track-spezifisch durcharbeitest. Wer 🧮 ist, geht durch alle sieben Karpathy-Lectures. Wer 🔧 ist, geht durch die ersten drei (bis zur Tiny GPT-Implementation). Wer 💼 ist, schaut den ersten Lecture und liest die Zusammenfassungen.

**Aufwand:** 🔧 30-50h · 🧮 80-120h · 💼 5-10h  
**Voraussetzungen:**
- **🧮: Voraussetzungs-Block (8.1+8.2+8.5 + Math-Diagnose) Pflicht**
- 🔧/💼: Math-Querschnitt (Lineare Algebra + Calculus mindestens konzeptionell)

## Lernziel

**🧮:** Du hast micrograd nachimplementiert und makemore von Grund auf gebaut. Du verstehst Backprop mathematisch und kannst Forward/Backward für eine einfache MLP per Hand auf Papier rechnen.

**🔧:** Du verstehst Neural Networks konzeptionell genug, um Architekturen zu lesen, Hyperparameter sinnvoll zu wählen, und Fine-Tuning-Entscheidungen zu treffen.

**💼:** Du verstehst, was ein Neural Network ist, was Training bedeutet (Cost! Compute!), und kannst Größenordnungen einordnen ("8B Parameter — wie viel ist das?").

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Was ist ein Neural Network?](theorie/was-ist-ein-neural-network.md) | ✅ | 15min |
| 2 | [Forward Pass: Inferenz](theorie/forward-pass.md) | ✅ | 15min |
| 3 | [Backpropagation: das Herzstück](theorie/backpropagation.md) | ✅ | 30min |
| 4 | [Karpathys Zero to Hero-Serie](theorie/zero-to-hero.md) | ⏭️ | variabel |
| 5 | [Activation Functions](theorie/activation-functions.md) | ✅ | 15min |
| 6 | [Optimierer: SGD, Adam, AdamW, Lion](theorie/optimierer.md) | ✅ | 15min |
| 7 | [Loss Functions](theorie/loss-functions.md) | ✅ | 10min |
| 8 | [Regularisierung](theorie/regularisierung.md) | ✅ | 15min |
| 9 | [Initialisierung: Xavier, He, Kaiming](theorie/initialisierung.md) | ⏭️ | 10min |
| 10 | [Vanishing/Exploding Gradients](theorie/vanishing-exploding-gradients.md) | ✅ | 15min |
| 11 | [GPU-Training-Basics](theorie/gpu-training-basics.md) | ✅ | 15min |
| 12 | [Mixed Precision Training](theorie/mixed-precision.md) | ⏭️ | 10min |
| 13 | [Distributed Training: DDP, FSDP](theorie/distributed-training-basics.md) | ⏭️ | 15min |
| 14 | [Compute-Cost-Realität](theorie/compute-cost-realitaet.md) | ✅ | 10min |

## Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (vollständige Karpathy-Serie):**
- Alle 7 Karpathy-Lectures durcharbeiten, Code von Grund auf nachimplementieren.
- micrograd: ~100 Zeilen Python, Backprop von Grund auf, dokumentiert.
- makemore: Char-Level-Language-Model in Bigram, dann MLP, dann WaveNet-Stil.
- Eigenes kleines Char-Model auf eigenem Korpus (z.B. eigene Tweets, eigene Texte) trainieren.
- Im Portfolio: `stufe-7_deep-learning/7-1-zero-to-hero/` mit allen Implementierungen, Reflektionen, Korpus-Wahl-Begründung.

**Capstone-Foundations (🧮)**: Hier startet dein Capstone. Wähle einen eigenen Korpus (kann persönlich, kreativ, technisch sein), trainiere darauf zunehmend bessere Models. In 7.2 wird daraus ein moderner Transformer. *Capstone-spezifische Anforderungen siehe `18_capstone_b_foundations.md`.*

**Für 🔧 (selektiv):**
- Karpathy Lecture 1 (micrograd) und Lecture 2 (makemore Bigram) bearbeiten, dokumentieren.
- d2l.ai Chapter 4 (MLPs) und Chapter 5 (Builders Guide) durcharbeiten.
- Praktisches Mini-Projekt: einfaches Klassifikations-Modell auf MNIST oder eigenem Datensatz mit PyTorch, mit Type Hints, mit Logging.
- Im Portfolio: `stufe-7_deep-learning/7-1-foundations-engineer/`.

**Für 💼 (konzeptionell):**
- 3Blue1Brown Neural Networks Series schauen (4 Videos, ~1h).
- Karpathy Lecture 1 schauen (nicht nachimplementieren).
- 1-Pager schreiben: "Was ist ein Neural Network, was ist Training, was kostet es?" — als Briefing für Stakeholder.
- Im Portfolio: `stufe-7_deep-learning/7-1-neural-networks-strategist/`.

## 🎁 Mehrwert-Mini-Projekte

- **Eigene Visualisierungs-Notebooks** für Backprop, Gradient Descent — verständnis-vertiefend, auch lehrbar.
- **PyTorch-Cheat-Sheet** mit eigenen Code-Snippets für die häufigsten Operationen.

## 🌱 Open-Source-Pfad

PyTorch und alle Karpathy-Materialien sind OSS. Bonus: Implementierungen mit JAX (Google's Alternative zu PyTorch) statt PyTorch — anders strukturiert, lehrt funktionalen Stil.

## Outcome-Check (track-spezifisch)

**🧮:**
- [ ] Voraussetzungs-Block bestanden (8.1+8.2+8.5 + Math-Diagnose)
- [ ] micrograd selbst implementiert
- [ ] makemore in mindestens drei Stufen (Bigram, MLP, WaveNet)
- [ ] Eigenes Char-Model auf eigenem Korpus trainiert
- [ ] Backprop mit Stift und Papier durchgerechnet (für eine kleine MLP)

**🔧:**
- [ ] Mindestens micrograd und Bigram-makemore selbst implementiert
- [ ] Eigenes PyTorch-Klassifikations-Modell mit Best Practices
- [ ] Verständnis für Hyperparameter und ihre Wirkung

**💼:**
- [ ] 3Blue1Brown Series und Karpathy Lecture 1 geschaut
- [ ] Stakeholder-Briefing geschrieben
