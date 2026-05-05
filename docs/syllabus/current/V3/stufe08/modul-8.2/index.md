---
title: "Modul 8.2: Klassifikation & Decision Trees"
module: "8.2"
type: index
fast_track: true
effort: "8-12h"
---

# Modul 8.2: Klassifikation & Decision Trees

Für 🧮 ist dieses Modul **Pflicht-Vorbedingung für Stufe 7** und sollte bereits absolviert sein. Eval-Querschnitt-Anker: Logistic Regression als Foundation für Backprop in Modul 7.1. Confusion Matrix, Precision, Recall, F1 sind Foundation für jede Klassifikations-Eval, auch in LLM-Klassifikation (Modul 5.0/5.4).

**Vor** Boosting müssen Decision Trees verstanden sein — sie sind die Bausteine, aus denen XGBoost und LightGBM gebaut sind. Klassifikation ist außerdem der Use-Case, in dem die meisten ML-Anfänger praktisch landen: Spam vs. Ham, Churn vs. Stay, Lead vs. No-Lead. Dieses Modul lehrt klassische Klassifikation plus die wichtige Frage: **wann LLM, wann klassisches ML?**

**Aufwand:** 🔧 8-12h · 🧮 15-22h · 💼 4-6h  
**Voraussetzungen:** Modul 8.1

## Lernziel

Du baust einen Klassifikator auf einem realen Datensatz (mit Class-Imbalance), bewertest mit den richtigen Metriken (nicht nur Accuracy), und kannst begründen, ob klassisches ML oder ein LLM die bessere Wahl ist.

**Zusatz für 🧮:** Du implementierst Logistic Regression from scratch — Forward Pass, Loss-Berechnung, Gradient-Berechnung, Update-Step. Das ist die kleinste Variante von Backprop und Foundation für Modul 7.1.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Das Klassifikations-Grundproblem](theorie/klassifikation-grundproblem.md) | ✅ | 10min |
| 2 | [Logistische Regression](theorie/logistische-regression.md) | ✅ | 20min |
| 3 | [Decision Trees](theorie/decision-trees.md) | ✅ | 20min |
| 4 | [Random Forests](theorie/random-forests.md) | ✅ | 15min |
| 5 | [Naive Bayes](theorie/naive-bayes.md) | ⏭️ | 10min |
| 6 | [Confusion Matrix](theorie/confusion-matrix.md) | ✅ | 15min |
| 7 | [Klassifikations-Metriken](theorie/klassifikations-metriken.md) | ✅ | 20min |
| 8 | [Class Imbalance](theorie/class-imbalance.md) | ✅ | 20min |
| 9 | [Calibration](theorie/calibration.md) | ⏭️ | 15min |
| 10 | [Multiclass vs. Multilabel](theorie/multiclass-multilabel.md) | ⏭️ | 15min |
| 11 | [Cross-Validation](theorie/cross-validation.md) | ✅ | 15min |
| 12 | [Wann LLM, wann klassisches ML?](theorie/llm-vs-klassisches-ml.md) | ✅ | 15min |
| 13 | [Feature Engineering](theorie/feature-engineering.md) | ⏭️ | 15min |
| 14 | [SHAP und LIME](theorie/shap-lime.md) | ✅ | 15min |

## Praxis: Hauptprojekt — Klassifikator mit Class Imbalance

Wähle einen Datensatz mit Class Imbalance (Vorschläge: Credit Card Fraud Detection, Customer Churn, Spam Detection):

- **Baseline** mit Logistic Regression — einfaches Modell, dokumentierte Performance.
- **Decision Tree und Random Forest** als nächste Schritte.
- **Mit Class Imbalance umgehen** — mindestens zwei Techniken vergleichen (Class Weights vs. SMOTE vs. Threshold-Tuning).
- **Mehrere Metriken evaluieren** — nicht nur Accuracy, sondern Precision, Recall, F1, PR-AUC. Confusion Matrix interpretieren.
- **Cross-Validation** mit Stratified k-Fold.
- **SHAP-Analyse** für Feature-Wichtigkeit.
- **LLM-Vergleich**: dieselbe Klassifikations-Aufgabe mit Claude oder GPT-5 als Zero-Shot-Klassifikator. Vergleich: Genauigkeit, Cost, Latenz.
- Im Portfolio: `stufe-8_klassisches-ml/8-2-klassifikation/` mit Notebook, Vergleichs-Tabelle, SHAP-Plots.

**Zusatz-Aufgabe für 🧮 (Pflicht-Vorbedingung für Stufe 7):**

Implementiere **Logistic Regression from scratch** in Python (ohne scikit-learn):
- Forward Pass: σ(Wx + b) mit eigener Sigmoid-Implementierung
- Loss-Berechnung: Binary Cross-Entropy
- Gradient-Berechnung: ∂L/∂W und ∂L/∂b von Hand abgeleitet, dann implementiert
- Update-Step mit Learning Rate
- Trainings-Loop mit Loss-Plot über Epochen
- Vergleich mit scikit-learn-Implementation: gleiche Performance auf gleichem Datensatz?

Im Portfolio: `stufe-8_klassisches-ml/8-2-klassifikation/logistic-regression-scratch/` mit Code, Math-Ableitung als Markdown, Vorher/Nachher-Vergleich.

## 🎁 Mehrwert-Mini-Projekte

- **Eigener Spam-Filter** für E-Mail-Eingang oder Slack-Nachrichten.
- **Klassifikator für deine Bookmarks** (welche Kategorie?).
- **Embeddings-basierte Klassifikation** mit OpenAI/BGE-Embeddings + XGBoost.

## 🌱 Open-Source-Pfad

- scikit-learn, XGBoost, LightGBM, imbalanced-learn — alles OSS.
- [PyCaret](https://pycaret.org) als Low-Code AutoML-Library für schnelle Vergleiche.
- LLM-Vergleich mit lokalem Ollama (`qwen2.5:7b`) statt Cloud.

## Outcome-Check

- [ ] Mindestens drei Klassifikatoren verglichen (Logistic Regression, Decision Tree, Random Forest)
- [ ] Class-Imbalance-Behandlung mit mindestens zwei Techniken
- [ ] Confusion Matrix mit Interpretation
- [ ] Mindestens 4 verschiedene Metriken berechnet
- [ ] SHAP-Analyse mit Feature-Wichtigkeit
- [ ] LLM-Vergleich mit Begründung der Wahl
- [ ] **Für 🧮: Logistic Regression from scratch implementiert (Pflicht-Vorbedingung für Stufe 7)**
