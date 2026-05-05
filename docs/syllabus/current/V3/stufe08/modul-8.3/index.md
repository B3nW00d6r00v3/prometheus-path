---
title: "Modul 8.3: Regression & Boosting"
module: "8.3"
type: index
fast_track: true
effort: "8-12h"
---

# Modul 8.3: Regression & Boosting

XGBoost, LightGBM und CatBoost dominieren 2026 die Tabular-Data-Welt. Bei strukturierten Daten schlagen sie konsistent Deep Learning. Dieses Modul vermittelt Regression-Foundations (Linear, Polynomial, Regularisiert) und vertieft die Boosting-Familie. Plus: TabPFN als 2024–2026-Innovation für Foundation Models auf Tabellendaten.

**Aufwand:** 🔧 8-12h · 🧮 18-25h · 💼 4-6h  
**Voraussetzungen:** Modul 8.2

## Lernziel

Du baust ein Regressions-Modell (Vorhersage einer kontinuierlichen Variable) mit Boosting auf einem realen Datensatz, vergleichst XGBoost / LightGBM / CatBoost, und tunst Hyperparameter systematisch.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Lineare Regression](theorie/lineare-regression.md) | ✅ | 15min |
| 2 | [Statistische Annahmen](theorie/statistische-annahmen.md) | ⏭️ | 15min |
| 3 | [Regularisierung: Ridge, Lasso, Elastic Net](theorie/regularisierung.md) | ✅ | 20min |
| 4 | [Polynomial und Interaction Features](theorie/polynomial-features.md) | ⏭️ | 10min |
| 5 | [Regressions-Metriken](theorie/regressions-metriken.md) | ✅ | 15min |
| 6 | [Gradient Boosting konzeptionell](theorie/gradient-boosting.md) | ✅ | 20min |
| 7 | [XGBoost](theorie/xgboost.md) | ✅ | 20min |
| 8 | [LightGBM](theorie/lightgbm.md) | ✅ | 15min |
| 9 | [CatBoost](theorie/catboost.md) | ✅ | 15min |
| 10 | [XGBoost vs. LightGBM vs. CatBoost](theorie/boosting-vergleich.md) | ✅ | 15min |
| 11 | [Hyperparameter-Tuning](theorie/hyperparameter-tuning.md) | ✅ | 20min |
| 12 | [Early Stopping](theorie/early-stopping.md) | ✅ | 10min |
| 13 | [TabPFN](theorie/tabpfn.md) | ⏭️ | 15min |
| 14 | [AutoML](theorie/automl.md) | ⏭️ | 15min |
| 15 | [Time Series Regression](theorie/time-series-regression.md) | ⏭️ | 20min |

## Praxis: Hauptprojekt — Boosting auf realem Datensatz

Wähle einen Regressions-Datensatz (Vorschläge: House Prices, Bike Sharing Demand, Energy Consumption, Stock Returns):

- **Lineare Regression** als Baseline.
- **Lasso oder Ridge** für Vergleich mit Regularisierung.
- **XGBoost, LightGBM, CatBoost** vergleichen.
- **Hyperparameter-Tuning** mit Optuna für mindestens ein Modell.
- **SHAP-Analyse** zur Feature-Interpretation.
- **Bonus**: TabPFN auf einem kleineren Subset ausprobieren — wie schlägt es sich gegen XGBoost?
- **Bonus**: AutoML mit AutoGluon vergleichen.
- Im Portfolio: `stufe-8_klassisches-ml/8-3-regression-boosting/` mit Notebook, Modell-Vergleichs-Tabelle, SHAP-Plots.

## 🎁 Mehrwert-Mini-Projekte

- **Persönliches Vorhersage-Tool** — z.B. "wieviele Stunden Schlaf brauche ich morgen?" basierend auf Health-Daten.
- **Eigene Kaggle-Submission** zu einem aktuellen Wettbewerb.
- **Energie-Verbrauchs-Vorhersage** für deinen Haushalt mit Smart-Meter-Daten.

## 🌱 Open-Source-Pfad

- XGBoost, LightGBM, CatBoost, Optuna, AutoGluon, FLAML, TabPFN — alles OSS.
- [Polars](https://www.pola.rs) für schnelle Datenverarbeitung statt pandas.

## Outcome-Check

- [ ] Mindestens 4 Modelle verglichen (Linear, Regularisiert, mindestens 2 Boosting-Varianten)
- [ ] Hyperparameter-Tuning mit Optuna durchgeführt
- [ ] SHAP-Analyse mit Feature-Wichtigkeit
- [ ] Cross-Validation mit dokumentierter Metrik (RMSE oder MAE)
- [ ] Reflexion: warum hat das beste Modell gewonnen?
