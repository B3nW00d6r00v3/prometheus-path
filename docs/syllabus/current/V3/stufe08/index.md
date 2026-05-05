---
title: "Stufe 8: Klassisches ML & Statistik"
type: index
fast_track: true
effort: "30-50h"
---

# Stufe 8: Klassisches ML & Statistik

**Aufwand:** 🔧 30-50h · 🧮 80-120h · 💼 15-25h  
**Voraussetzungen:** Stufe 7 (für 🔧/💼) — bzw. Module 8.1+8.2+8.5 schon vor Stufe 7 absolviert für 🧮. Math-Foundation aus Querschnitt, optional Stufe 4

| Querschnitte | Capstone-Beitrag | Tools |
|---|---|---|
| Math, Eval (8.5 Statistik) | Capstone B Vorbedingung (8.1/8.2/8.5 🧮) | scikit-learn, XGBoost, pandas, numpy |

Klassisches ML hat 2026 zwei Funktionen: erstens als didaktischer Rückblick (XGBoost ist konzeptionell einfacher als ein Transformer und trotzdem oft die richtige Wahl für Tabellendaten); zweitens als Praxis-Werkzeug (für Tabellendaten mit klaren Features ist klassisches ML konsistent besser als Deep Learning). Plus: 8.5 (A/B-Testing) liefert die Statistik-Foundation, die du für ehrliche Eval brauchst — sie verbindet sich mit dem Querschnitt-Eval.

Für **🧮** sind Module 8.1, 8.2 und 8.5 **harte Pflicht-Voraussetzung für Stufe 7** (siehe `07_stufe7.md` Voraussetzungs-Block). Wer 🧮-Track ist, hat diese Module also bereits absolviert, bevor er hier ankommt. In Stufe 8 fokussiert sich 🧮 dann auf:
- **Modul 8.3** (Regression & Boosting) — XGBoost-Familie für Tabular-Data-Praxis
- **Modul 8.4** (Recommendation Systems) — Production-Pattern für Empfehlungs-Logik

Für **🔧/💼** ist die Reihenfolge unverändert — alle Module 8.1 bis 8.5 sind sequenziell hier in Stufe 8.

Statistische Eval ist die Foundation für die LLM-Eval aus Modul 5.0/5.4 und den Querschnitt-Eval (`13_querschnitt_eval.md`). Module 8.1, 8.2 und 8.5 sind explizite Anker-Punkte für Eval-Methodik:
- **8.1**: Distance-Metrics als Foundation für Embedding-Eval (Cosine in Vector-Search aus Modul 5.1)
- **8.2**: Confusion Matrix, Precision/Recall/F1 als Foundation für jede Klassifikations-Eval — auch in LLM-Klassifikation
- **8.5**: Hypothesen-Tests, Power Analysis, Multiple-Testing-Korrektur als Foundation für seriöses A/B-Testing (Prompt-A/B in 5.0/5.4, Production-Eval-as-CI im Querschnitt-Production)

## Module

| # | Modul | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 8.1 | [Data Exploration & Clustering](modul-8.1/index.md) | ✅ | 6-10h |
| 8.2 | [Klassifikation & Decision Trees](modul-8.2/index.md) | ✅ | 8-12h |
| 8.3 | [Regression & Boosting](modul-8.3/index.md) | ✅ | 8-12h |
| 8.4 | [Recommendation Systems](modul-8.4/index.md) | ⏭️ | 4-8h |
| 8.5 | [A/B-Testing & Causal Inference](modul-8.5/index.md) | ✅ | 4-8h |

## Ergebnis nach Stufe 8

- [ ] Du verstehst klassische ML-Algorithmen mit ihrer Math.
- [ ] Du kennst die Boosting-Familie (XGBoost, LightGBM, CatBoost) und wählst bewusst.
- [ ] Du kannst Recommendation-Systems bauen.
- [ ] Du verstehst A/B-Testing mit OEC, Sample-Size-Berechnung, Multiple-Testing-Korrektur.
- [ ] Du weißt, wann klassisches ML, wann Deep Learning, wann LLM die richtige Wahl ist.
- [ ] **Statistik-Foundation für ehrliche LLM- und RAG-Eval ist solide.**
- [ ] 🧮: Logistic Regression from scratch implementiert als Brücke zu Stufe 7.

**Du bist bereit für Stufe 9: KI-Strategie & Business — wo das Gelernte in Business-Entscheidungen übergeht.**

---

[Quellen für die gesamte Stufe](quellen.md) · [Optionale Free-Zertifikate](zertifikate.md)
