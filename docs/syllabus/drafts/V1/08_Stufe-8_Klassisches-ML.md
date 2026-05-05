# Stufe 8: Klassisches ML & Statistik

**Aufwand gesamt:** 🔧 30-50h · 🧮 80-120h · 💼 15-25h
**Voraussetzungen:** Stufe 7 (Math-Foundation aus Querschnitt), optional Stufe 4
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Klassisches ML hat 2026 zwei Funktionen: erstens als didaktischer Rückblick (XGBoost ist konzeptionell einfacher als ein Transformer und trotzdem oft die richtige Wahl für Tabellendaten); zweitens als Praxis-Werkzeug (für Tabellendaten mit klaren Features ist klassisches ML konsistent besser als Deep Learning). Plus: 8.5 (A/B-Testing) liefert die Statistik-Foundation, die du für ehrliche Eval brauchst — sie verbindet sich mit dem Querschnitt-Eval.

**Ergebnis nach Stufe 8:**
- Du verstehst klassische ML-Algorithmen mit ihrer Math.
- Du kennst die Boosting-Familie (XGBoost, LightGBM, CatBoost) und wählst bewusst.
- Du kannst Recommendation-Systems bauen.
- Du verstehst A/B-Testing mit OEC, Sample-Size-Berechnung, Multiple-Testing-Korrektur.
- Du weißt, wann klassisches ML, wann Deep Learning, wann LLM die richtige Wahl ist.

---

## Modul 8.1: Data Exploration & Clustering

Bevor du modellierst, musst du Daten verstehen. EDA (Exploratory Data Analysis) ist 2026 nicht durch KI obsolet — sie wird durch KI **schneller**, aber das menschliche Urteil bleibt zentral. Clustering als unsupervised Lernverfahren ist die natürliche Erweiterung — von "ich sehe meine Daten" zu "ich gruppiere meine Daten ohne Vorgaben".

**Aufwand:** 🔧 6-10h · 🧮 15-25h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 2.7, Querschnitt Math-Foundation (Lineare Algebra konzeptionell)

### Lernziel
Du führst eigenständig EDA auf einem realen Datensatz durch, identifizierst Strukturen, wendest mindestens drei Clustering-Algorithmen an, und bewertest die Ergebnisse mit passenden Metriken.

### Theorie

- 🟢 **EDA-Workflow** — der klassische Pfad: (1) Erste Übersicht (`df.describe()`, `df.info()`), (2) Verteilungen pro Variable visualisieren, (3) Korrelationen erkunden, (4) Fehlende Werte und Outliers, (5) Hypothesen formulieren. Pandas + matplotlib/seaborn als Standard. Plotly für interaktive Plots. [Kaggle — Intermediate ML](https://www.kaggle.com/learn/intermediate-machine-learning) · [Real Python — Pandas Tutorials](https://realpython.com/learning-paths/pandas-data-science/)

- 🟢 **Distanz-Metriken sind Voraussetzung** — Clustering bedeutet "Punkte gruppieren, die nahe zusammen sind". Was "nah" heißt, hängt von der Distanz-Metrik ab: Euklidisch (Standard), Manhattan (robust gegen Outliers), Cosine (für hochdimensionale Daten wie Embeddings), Mahalanobis (berücksichtigt Korrelationen). Die Wahl der Metrik prägt das Ergebnis. [scikit-learn — Distance Metrics](https://scikit-learn.org/stable/modules/metrics.html)

- 🟢 **Skalierung ist Pflicht vor Distanz-basiertem Clustering** — wenn eine Variable Werte 0-1 hat und eine andere 0-1.000.000, dominiert die zweite jede Distanz-Berechnung. Standardisierung (StandardScaler), Min-Max-Skalierung (MinMaxScaler), oder robuste Skalierung (RobustScaler bei Outliers). [scikit-learn — Preprocessing](https://scikit-learn.org/stable/modules/preprocessing.html)

- 🟢 **K-Means** — der Klassiker: K Cluster-Zentren werden iterativ verschoben, bis Punkte stabilen Clustern zugeordnet sind. Schnell und einfach. Schwächen: K muss vorgegeben werden, geht nur bei konvexen Clustern, sensibel gegen Outliers. [scikit-learn — K-Means](https://scikit-learn.org/stable/modules/clustering.html#k-means) · [StatQuest — K-Means (Video)](https://www.youtube.com/watch?v=4b5d3muPQmA)

- 🟢 **Wahl der Cluster-Anzahl** — Elbow Method (Within-Cluster-Sum-of-Squares plotten und Knick suchen), Silhouette Score (zwischen -1 und 1, höher ist besser), Gap Statistic. Keine perfekte Methode — Domäne und Visualisierung mitsprechen lassen. [scikit-learn — Silhouette Analysis](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html)

- 🟢 **Hierarchical Clustering** — baumartige Struktur, kein vorgegebenes K. Agglomerative (bottom-up) oder Divisive (top-down). Visualisierung als Dendrogramm. Gut für kleine Datasets oder wenn Cluster-Hierarchie inhaltlich Sinn macht. [scikit-learn — Hierarchical Clustering](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)

- 🟢 **DBSCAN und HDBSCAN** — dichtebasiert, findet beliebig geformte Cluster, identifiziert Outliers als "Noise". HDBSCAN ist robustere Variante. Stark wenn Cluster nicht-konvex sind. [HDBSCAN Library](https://hdbscan.readthedocs.io)

- 🟢 **Gaussian Mixture Models (GMM)** — probabilistisches Clustering: jeder Punkt gehört mit einer Wahrscheinlichkeit zu jedem Cluster. Passend wenn Cluster überlappen oder weiche Zugehörigkeit gefragt ist. [scikit-learn — GMM](https://scikit-learn.org/stable/modules/mixture.html)

- 🟢 **Dimensionsreduktion: PCA** — Principal Component Analysis: lineare Reduktion auf wichtigste Achsen. Gut zum Verstehen, oft Vorbereitung für Clustering oder Visualisierung. Setzt Lineare Algebra voraus (Eigenvektoren, Eigenwerte). [scikit-learn — PCA](https://scikit-learn.org/stable/modules/decomposition.html#pca) · [StatQuest — PCA (Video)](https://www.youtube.com/watch?v=FgakZw6K1QQ)

- 🔄 **t-SNE und UMAP** — nicht-lineare Dimensionsreduktion, primär für Visualisierung in 2D/3D. UMAP (2018) ist 2026 oft Standard, schneller als t-SNE und mit besserer globaler Struktur. **Wichtig:** beide sind Visualisierungs-Tools, nicht für nachgelagertes Clustering oder ML — sie verzerren Distanzen. [UMAP Library](https://umap-learn.readthedocs.io) · [t-SNE Tutorial (Distill)](https://distill.pub/2016/misread-tsne/)

- 🟢 **Cluster-Bewertung ohne Ground-Truth** — Silhouette, Davies-Bouldin Index, Calinski-Harabasz. Mit Ground-Truth (selten in Praxis): Adjusted Rand Index, Mutual Information. [scikit-learn — Clustering Performance Evaluation](https://scikit-learn.org/stable/modules/clustering.html#clustering-performance-evaluation)

- 🟢 **EDA mit KI-Augmentation** — moderne Pattern: pandas-Code generieren mit Claude/GPT, Code Interpreter / Data Analyst Mode in ChatGPT/Claude, Plotly-Code-Generierung, [pandasai](https://github.com/sinaptik-ai/pandas-ai) als Library. Schneller, aber Mensch muss Outputs prüfen — KI generiert auch fehlerhafte Aggregationen.

### Praxis: Hauptprojekt — EDA + Clustering auf realem Datensatz

Wähle einen Datensatz mit Substanz (Vorschläge):
- Eigene Daten (Spotify-Listening-Historie, Bookmarks-Export, Health-App-Export)
- Kaggle-Klassiker (Titanic, House Prices, Customer Segmentation)
- Open Data (Berlin Open Data, EU Data, Statista-CSVs)

**Anforderungen:**
- **EDA-Notebook** mit Pandas: erste Übersicht, Verteilungen, Korrelationen, fehlende Werte, mindestens 5 Hypothesen aus den Daten.
- **Visualisierungen**: mindestens 8 Plots (Histogramme, Scatter-Plots, Heatmaps).
- **Clustering**: mindestens drei Algorithmen anwenden (z.B. K-Means + DBSCAN + GMM).
- **Bewertung**: Silhouette-Scores für die K-Means-Wahl, dazu inhaltliche Cluster-Interpretation.
- **Visualisierung mit UMAP oder t-SNE** (mit Hinweis: nur Visualisierung, nicht Cluster-Eingabe).
- Im Portfolio: `stufe-8_klassisches-ml/8-1-eda-clustering/` mit Notebook, Visualisierungen, README.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliche Datenanalyse**: deine eigenen digitalen Spuren (Spotify, Apple Health, Banking-CSV) clustern, was kommt raus?
- **EDA-Template-Notebook** als Ausgangspunkt für jeden neuen Datensatz.

### 🌱 Open-Source-Pfad
- pandas, scikit-learn, matplotlib, plotly — alles OSS.
- [Polars](https://www.pola.rs) als moderne, schnelle pandas-Alternative.
- [DuckDB](https://duckdb.org) für SQL-basierte Daten-Exploration auf großen CSVs.

### Outcome-Check
- [ ] EDA-Notebook mit mindestens 8 Visualisierungen
- [ ] Mindestens 5 Hypothesen aus den Daten formuliert
- [ ] Drei Clustering-Algorithmen verglichen
- [ ] Silhouette-Score-Analyse für K-Wahl
- [ ] UMAP- oder t-SNE-Visualisierung
- [ ] Inhaltliche Interpretation der Cluster

---

## Modul 8.2: Klassifikation & Decision Trees

**Vor** Boosting müssen Decision Trees verstanden sein — sie sind die Bausteine, aus denen XGBoost und LightGBM gebaut sind. Klassifikation ist außerdem der Use-Case, in dem die meisten ML-Anfänger praktisch landen: Spam vs. Ham, Churn vs. Stay, Lead vs. No-Lead. Dieses Modul lehrt klassische Klassifikation plus die wichtige Frage: **wann LLM, wann klassisches ML?**

**Aufwand:** 🔧 8-12h · 🧮 15-22h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 8.1

### Lernziel
Du baust einen Klassifikator auf einem realen Datensatz (mit Class-Imbalance), bewertest mit den richtigen Metriken (nicht nur Accuracy), und kannst begründen, ob klassisches ML oder ein LLM die bessere Wahl ist.

### Theorie

- 🟢 **Klassifikation: das Grundproblem** — gegeben Features, sage Klasse vorher (binär: Spam/Ham; multiclass: Cat/Dog/Bird; multilabel: ein Bild kann mehrere Labels haben). Use-Cases: Churn-Vorhersage, Fraud Detection, Medical Diagnosis, E-Mail-Klassifikation. [scikit-learn — Classification](https://scikit-learn.org/stable/supervised_learning.html#supervised-learning)

- 🟢 **Logistische Regression** — der einfachste Klassifikator. Eigentlich Regression auf Wahrscheinlichkeit (zwischen 0 und 1). Linear, interpretierbar, schnell. Solide Baseline. [StatQuest — Logistic Regression (Video)](https://www.youtube.com/watch?v=yIYKR4sgzI8) · [scikit-learn — Logistic Regression](https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression)

- 🟢 **Decision Trees** — baumartige Struktur, an jedem Knoten wird eine Feature-Frage gestellt. Sehr interpretierbar, kann auch nicht-lineare Beziehungen lernen. Schwäche: einzelne Trees sind instabil und neigen zu Overfitting. Lösung: Ensemble (Random Forests, Boosting). [StatQuest — Decision Trees (Video)](https://www.youtube.com/watch?v=7VeUPuFGJHk) · [scikit-learn — Decision Trees](https://scikit-learn.org/stable/modules/tree.html)

- 🟢 **Random Forests** — viele Decision Trees auf Bootstrap-Samples, gemittelt. Robuster als einzelner Tree. Klassische Baseline 2026 immer noch oft genutzt. [scikit-learn — Random Forests](https://scikit-learn.org/stable/modules/ensemble.html#forests-of-randomized-trees)

- 🟢 **Naive Bayes** — wahrscheinlichkeitsbasiert, "naiv", weil unabhängige Features angenommen werden. Schnell, gut bei Text-Klassifikation. Nicht state-of-the-art, aber schöne Baseline. [scikit-learn — Naive Bayes](https://scikit-learn.org/stable/modules/naive_bayes.html)

- 🟢 **Confusion Matrix als Grundlage aller Metriken** — 4 Quadranten: True Positive, False Positive, True Negative, False Negative. Alle Klassifikations-Metriken leiten sich davon ab. Pflicht-Verstehen. [Wikipedia — Confusion Matrix](https://en.wikipedia.org/wiki/Confusion_matrix)

- 🟢 **Klassifikations-Metriken** — Accuracy ist oft irreführend (siehe Class Imbalance unten). Wichtigere Metriken:
 - **Precision**: von allen Vorhersagen "positiv", wieviele waren wirklich positiv?
 - **Recall (Sensitivity)**: von allen wirklich positiven, wieviele wurden gefunden?
 - **F1-Score**: harmonisches Mittel von Precision und Recall.
 - **ROC-AUC**: Area under Receiver Operating Characteristic Curve, gut für balancierte Probleme.
 - **PR-AUC**: Precision-Recall-AUC, besser bei Imbalance.

 [Google — Classification Metrics](https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall) · [scikit-learn — Classification Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics)

- 🟢 **Class Imbalance — der häufigste Praxis-Fall** — Beispiele: 99% E-Mails sind Ham, 1% Spam. Naïver Klassifikator "alles ist Ham" hat 99% Accuracy. Lösungen: (1) **Class Weights** in Loss-Function. (2) **SMOTE** (synthetic Minority Oversampling). (3) **Threshold-Tuning** (Default 0.5 anpassen). (4) **Anomaly-Detection-Approaches** statt Klassifikation. [imbalanced-learn Library](https://imbalanced-learn.org)

- 🟢 **Calibration** — sagt das Modell 0.8 Wahrscheinlichkeit, ist es dann zu 80% richtig? Oft nicht. Lösungen: Platt Scaling, Isotonic Regression. Wichtig wenn Wahrscheinlichkeiten in nachgelagerte Entscheidungen eingehen. [scikit-learn — Calibration](https://scikit-learn.org/stable/modules/calibration.html)

- 🟢 **Multiclass vs. Multilabel** — Multiclass: ein Sample, eine Klasse von vielen (One-vs-Rest oder One-vs-One). Multilabel: ein Sample, mehrere Labels (Bild kann "Hund" UND "Strand" sein). Verschiedene Loss-Functions und Metriken. [scikit-learn — Multiclass and Multilabel](https://scikit-learn.org/stable/modules/multiclass.html)

- 🟢 **Cross-Validation** — k-Fold (typ. k=5 oder 10) statt einfachem Train/Test-Split, gibt robustere Performance-Schätzung. Stratified k-Fold bei Imbalance. [scikit-learn — Cross-Validation](https://scikit-learn.org/stable/modules/cross_validation.html)

- 🔄 **Wann LLM, wann klassisches ML für Klassifikation?**
 - **Klassisches ML stärker wenn:** viele gelabelte Daten (>1000), tabellarische Features, Real-time-Anforderung, niedrige Inferenz-Cost gewünscht, Explainability wichtig.
 - **LLM stärker wenn:** wenige gelabelte Daten (<100), Text- oder Multimodal-Input, komplexe Sprachverständnis nötig, schneller Prototyp, schnelle Anpassung an neue Klassen.
 - **Hybrid 2026:** Embedding (von LLM) + klassischer Klassifikator (XGBoost auf Embeddings) — oft Best-of-both-Worlds. [DLAI — Embeddings + Classification](https://learn.deeplearning.ai)

- 🟢 **Feature Engineering bleibt relevant** — auch in 2026: gut gewählte Features schlagen oft mehr Daten oder größere Modelle. Klassische Techniken: One-Hot Encoding, Target Encoding, Polynomial Features, Interaction Features, Domain-spezifische Features. [Kaggle — Feature Engineering](https://www.kaggle.com/learn/feature-engineering)

- 🟢 **Interpretierbarkeit: SHAP und LIME** — bei Production-Modellen oft Pflicht zu erklären, warum Modell so entschieden hat. SHAP (SHapley Additive exPlanations) ist 2026 Industriestandard. [SHAP Library](https://shap.readthedocs.io) · [Christoph Molnar — Interpretable ML Book (kostenlos)](https://christophm.github.io/interpretable-ml-book/)

### Praxis: Hauptprojekt — Klassifikator mit Class Imbalance

Wähle einen Datensatz mit Class Imbalance (Vorschläge: Credit Card Fraud Detection, Customer Churn, Spam Detection):

- **Baseline** mit Logistic Regression — einfaches Modell, dokumentierte Performance.
- **Decision Tree und Random Forest** als nächste Schritte.
- **Mit Class Imbalance umgehen** — mindestens zwei Techniken vergleichen (Class Weights vs. SMOTE vs. Threshold-Tuning).
- **Mehrere Metriken evaluieren** — nicht nur Accuracy, sondern Precision, Recall, F1, PR-AUC. Confusion Matrix interpretieren.
- **Cross-Validation** mit Stratified k-Fold.
- **SHAP-Analyse** für Feature-Wichtigkeit.
- **LLM-Vergleich**: dieselbe Klassifikations-Aufgabe mit Claude oder GPT-5 als Zero-Shot-Klassifikator. Vergleich: Genauigkeit, Cost, Latenz.
- Im Portfolio: `stufe-8_klassisches-ml/8-2-klassifikation/` mit Notebook, Vergleichs-Tabelle, SHAP-Plots.

### 🎁 Mehrwert-Mini-Projekte
- **Eigener Spam-Filter** für E-Mail-Eingang oder Slack-Nachrichten.
- **Klassifikator für deine Bookmarks** (welche Kategorie?).
- **Embeddings-basierte Klassifikation** mit OpenAI/BGE-Embeddings + XGBoost.

### 🌱 Open-Source-Pfad
- scikit-learn, XGBoost, LightGBM, imbalanced-learn — alles OSS.
- [PyCaret](https://pycaret.org) als Low-Code AutoML-Library für schnelle Vergleiche.
- LLM-Vergleich mit lokalem Ollama (`qwen2.5:7b`) statt Cloud.

### Outcome-Check
- [ ] Mindestens drei Klassifikatoren verglichen (Logistic Regression, Decision Tree, Random Forest)
- [ ] Class-Imbalance-Behandlung mit mindestens zwei Techniken
- [ ] Confusion Matrix mit Interpretation
- [ ] Mindestens 4 verschiedene Metriken berechnet
- [ ] SHAP-Analyse mit Feature-Wichtigkeit
- [ ] LLM-Vergleich mit Begründung der Wahl

---

## Modul 8.3: Regression & Boosting

XGBoost, LightGBM und CatBoost dominieren 2026 die Tabular-Data-Welt. Bei strukturierten Daten schlagen sie konsistent Deep Learning. Dieses Modul vermittelt Regression-Foundations (Linear, Polynomial, Regularisiert) und vertieft die Boosting-Familie. Plus: TabPFN als 2024-2026-Innovation für Foundation Models auf Tabellendaten.

**Aufwand:** 🔧 8-12h · 🧮 18-25h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 8.2

### Lernziel
Du baust ein Regressions-Modell (Vorhersage einer kontinuierlichen Variable) mit Boosting auf einem realen Datensatz, vergleichst XGBoost / LightGBM / CatBoost, und tunst Hyperparameter systematisch.

### Theorie

- 🟢 **Lineare Regression** — die einfachste Vorhersage: gewichtete Summe von Features. Mathematisch: Lösung über Normal-Equation oder Gradient Descent. Foundations für alles, was darauf aufbaut. [StatQuest — Linear Regression (Video)](https://www.youtube.com/watch?v=nk2CQITm_eo) · [scikit-learn — Linear Regression](https://scikit-learn.org/stable/modules/linear_model.html)

- 🟢 **Statistische Annahmen prüfen** — lineare Regression hat Annahmen: Linearität, Normalverteilung der Residuen, Homoskedastizität, keine Multikollinearität. Verstöße führen zu falschen Konfidenzintervallen. Diagnostische Plots. [Penn State — Regression Diagnostics](https://online.stat.psu.edu/stat462/node/117/)

- 🟢 **Regularisierung: Ridge, Lasso, Elastic Net** — bei vielen Features oder Multikollinearität: Regularisierungs-Term im Loss verhindert Overfitting. **Ridge (L2)**: schrumpft alle Koeffizienten. **Lasso (L1)**: setzt manche auf 0 (Feature-Selection). **Elastic Net**: Mischung. [scikit-learn — Regularization](https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification)

- 🟢 **Polynomial und Interaction Features** — wenn lineare Regression zu starr ist, Features höherer Ordnung erzeugen. Aber Vorsicht vor Overfitting. [scikit-learn — Polynomial Features](https://scikit-learn.org/stable/modules/preprocessing.html#polynomial-features)

- 🟢 **Regressions-Metriken** — RMSE (Root Mean Squared Error), MAE (Mean Absolute Error), MAPE (Mean Absolute Percentage Error), R² (Bestimmtheitsmaß). Verschiedene Stärken: RMSE bestraft große Fehler stärker, MAE robust gegen Outliers, MAPE skalenunabhängig (aber Probleme bei kleinen Werten). [scikit-learn — Regression Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics)

- 🟢 **Gradient Boosting konzeptionell** — Decision Trees werden sequentiell gebaut, jeder Tree korrigiert die Fehler der vorherigen. Anders als Random Forest (parallel und unabhängig). Mathematisch: Gradient Descent im Funktionsraum. [StatQuest — Gradient Boost (Video)](https://www.youtube.com/watch?v=3CC4N4z3GJc)

- 🔄 **XGBoost** — der Klassiker (2014), gewann hunderte Kaggle-Wettbewerbe. Stärken: ausgezeichnete Performance, viele Features (Regularization, Missing-Value-Handling, Sparse-Aware). Aktive Entwicklung 2026. [XGBoost Docs](https://xgboost.readthedocs.io)

- 🔄 **LightGBM** — Microsoft 2017, schneller als XGBoost dank "leaf-wise" Tree Growing. Bei großen Datasets oft Vorteil. [LightGBM Docs](https://lightgbm.readthedocs.io)

- 🔄 **CatBoost** — Yandex 2017, beste Native-Handling von kategorischen Features (ohne Pre-Encoding). Häufig in Production für mixed numeric+categorical Daten. [CatBoost Docs](https://catboost.ai)

- 🔄 **XGBoost vs. LightGBM vs. CatBoost — wann welches?**
 - **XGBoost**: solide Default-Wahl, breite Library-Unterstützung, gute Stabilität.
 - **LightGBM**: bei großen Datasets schneller, gut bei vielen Numerischen Features.
 - **CatBoost**: bei vielen kategorischen Features, weniger Hyperparameter-Tuning nötig.

 [PythonDataBench — XGBoost vs LightGBM vs CatBoost 2026](https://pythondatabench.com/article/gradient-boosting-python-xgboost-lightgbm-catboost-2026)

- 🟢 **Hyperparameter-Tuning systematisch** — Grid Search, Random Search, Bayesian Optimization (mit [Optuna](https://optuna.org) oder Scikit-Optimize). Wichtige Hyperparameter: Learning Rate, Max Depth, Min Child Weight, Regularization. [Optuna Tutorial](https://optuna.readthedocs.io/en/stable/tutorial/)

- 🟢 **Early Stopping als Regularisierung** — Training stoppen, wenn Validation-Loss nicht mehr besser wird. Verhindert Overfitting, spart Trainings-Cost. Standard bei Boosting.

- 🔄 **TabPFN — Foundation Model für Tabellendaten** — 2023-2024 Innovation: ein einziges pre-trained Transformer-Model, das auf neuen Tabellendaten ohne Training arbeitet. Nur für kleine Datasets (<10K samples), aber dort kompetitiv mit XGBoost. Spannender Trend. [TabPFN Paper](https://arxiv.org/abs/2207.01848) · [TabPFN GitHub](https://github.com/automl/TabPFN)

- 🟢 **AutoML als Tool** — wenn du nicht alle Modelle manuell vergleichen willst: AutoML automatisiert Modell-Wahl + Hyperparameter-Tuning. [AutoGluon](https://auto.gluon.ai) (Amazon, OSS), [FLAML](https://github.com/microsoft/FLAML) (Microsoft, OSS), [PyCaret](https://pycaret.org). 2026 oft Default für Baseline.

- 🟢 **Time Series Regression** — für Zeitreihen-Daten: zeitliche Abhängigkeiten berücksichtigen. Klassisch: ARIMA, Exponential Smoothing. Modern: LightGBM mit zeitlichen Features, [Prophet](https://facebook.github.io/prophet/) (Facebook), [NeuralProphet](https://neuralprophet.com), [Darts](https://unit8co.github.io/darts/). [Kaggle — Time Series](https://www.kaggle.com/learn/time-series)

### Praxis: Hauptprojekt — Boosting auf realem Datensatz

Wähle einen Regressions-Datensatz (Vorschläge: House Prices, Bike Sharing Demand, Energy Consumption, Stock Returns):

- **Lineare Regression** als Baseline.
- **Lasso oder Ridge** für Vergleich mit Regularisierung.
- **XGBoost, LightGBM, CatBoost** vergleichen.
- **Hyperparameter-Tuning** mit Optuna für mindestens ein Modell.
- **SHAP-Analyse** zur Feature-Interpretation.
- **Bonus**: TabPFN auf einem kleineren Subset ausprobieren — wie schlägt es sich gegen XGBoost?
- **Bonus**: AutoML mit AutoGluon vergleichen.
- Im Portfolio: `stufe-8_klassisches-ml/8-3-regression-boosting/` mit Notebook, Modell-Vergleichs-Tabelle, SHAP-Plots.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliches Vorhersage-Tool** — z.B. "wieviele Stunden Schlaf brauche ich morgen?" basierend auf Health-Daten.
- **Eigene Kaggle-Submission** zu einem aktuellen Wettbewerb.
- **Energie-Verbrauchs-Vorhersage** für deinen Haushalt mit Smart-Meter-Daten.

### 🌱 Open-Source-Pfad
- XGBoost, LightGBM, CatBoost, Optuna, AutoGluon, FLAML, TabPFN — alles OSS.
- [Polars](https://www.pola.rs) für schnelle Datenverarbeitung statt pandas.

### Outcome-Check
- [ ] Mindestens 4 Modelle verglichen (Linear, Regularisiert, mindestens 2 Boosting-Varianten)
- [ ] Hyperparameter-Tuning mit Optuna durchgeführt
- [ ] SHAP-Analyse mit Feature-Wichtigkeit
- [ ] Cross-Validation mit dokumentierter Metrik (RMSE oder MAE)
- [ ] Reflexion: warum hat das beste Modell gewonnen?

---

## Modul 8.4: Recommendation Systems

Recommender Systems sind 2026 in vielen Anwendungen unsichtbar präsent — Spotify, Netflix, Amazon, LinkedIn, jedes E-Commerce-System. Klassische Methoden (Collaborative Filtering, Matrix Factorization) sind weiterhin Foundation, moderne Systems kombinieren sie mit Embeddings und LLMs. Dieses Modul lehrt die Klassiker plus die 2026-Erweiterungen.

**Aufwand:** 🔧 4-8h · 🧮 12-18h · 💼 3-5h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 8.1-8.3, optional 5.1 (für Embedding-basiertes RecSys)

### Lernziel
Du baust ein Recommender-System auf einem realen Datensatz (z.B. MovieLens), vergleichst klassische und moderne Ansätze, und kennst die typischen Production-Probleme (Cold Start, Diversity).

### Theorie

- 🟢 **Recommendation-Probleme** — drei Kern-Aufgaben: (1) **Top-N Recommendation** ("welche 10 Filme könnten dem User gefallen?"). (2) **Rating Prediction** ("wie würde der User diesen Film bewerten?"). (3) **Personalized Ranking** ("ordne diese Liste für den User"). [RecSys Conference Resources](https://recsys.acm.org)

- 🟢 **Content-Based Filtering** — Empfehlung basiert auf Item-Eigenschaften: "der User hat Filme mit Genre X gemocht, hier sind weitere Filme mit Genre X". Stärken: kein Cold-Start für Items, transparent. Schwäche: bleibt in Filter-Bubble. [scikit-learn — Content-Based Filtering Tutorial](https://scikit-learn.org)

- 🟢 **Collaborative Filtering** — "User mit ähnlichen Bewertungen wie du haben auch X gemocht". User-based oder Item-based. Klassiker. Stärken: findet überraschende Empfehlungen. Schwäche: Cold-Start bei neuen Usern oder Items. [Microsoft — Recommenders Library](https://github.com/microsoft/recommenders)

- 🟢 **Matrix Factorization** — User-Item-Bewertungs-Matrix wird in zwei niedrig-dimensionale Matrizen zerlegt (Latent Factors). SVD, ALS (Alternating Least Squares). Mathematisch saubere Variante von Collaborative Filtering. Bekannt durch Netflix Prize 2009. [Surprise Library](https://surpriselib.com)

- 🟢 **Cold-Start-Problem** — neuer User oder neues Item, keine historischen Daten. Lösungen: (1) **Content-Based Fallback** für neue Items. (2) **Popularity-Based Defaults** für neue User. (3) **Onboarding-Fragen** ("welche Filme magst du?"). (4) **Hybrid Approaches** kombinieren mehrere Strategien.

- 🟢 **Hybrid Recommender** — Kombination mehrerer Approaches: Content-Based + Collaborative, gewichtet oder kaskadiert. 2026 fast immer der Praxis-Stand bei Production-Systems.

- 🔄 **Deep Learning für RecSys** — Neural Collaborative Filtering, Two-Tower-Models (User-Tower und Item-Tower, beide produzieren Embeddings, Skalarprodukt = Score), Transformers für Sequential Recommendation. [Papers with Code — Recommendation Systems](https://paperswithcode.com/area/recommendation-systems)

- 🔄 **LLM-basierte Recommender 2024-2026** — neuer Trend: LLMs werden direkt für Recommendation eingesetzt. Item-Beschreibungen werden zu Embeddings, semantische Suche, oder LLM bekommt User-Profil als Prompt und generiert Empfehlungen. Stärke: Cold-Start verbessert, Erklärbarkeit gut. Schwäche: Cost und Latenz. [arxiv: LLM-Based Recommender Systems Survey](https://arxiv.org)

- 🔄 **Sequential Recommendation** — User-Verhalten als Sequenz (heute Film A, dann B, dann C — was als nächstes?). Klassisch: Markov Chains. Modern: Transformers (BERT4Rec, SASRec). Spotify und ähnliche Streaming-Dienste nutzen das stark.

- 🟢 **RecSys-Eval-Metriken** — Precision@K, Recall@K, NDCG (Normalized Discounted Cumulative Gain), MAP (Mean Average Precision), Hit Rate. Plus: Diversity, Coverage, Novelty als wichtige sekundäre Metriken. [scikit-learn — Ranking Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#ranking-metrics)

- 🟢 **Diversity vs. Relevance Trade-off** — perfekte Relevance führt zu Filter-Bubbles. Production-Systems balancieren Relevance mit Diversity, Serendipity (Überraschung), Coverage (alle Items werden empfohlen).

- 🟢 **Embedding-basierter Recommender (2026-Pattern)** — Items in Vector-Database, User-Profil als Query-Embedding, Vector-Search für Top-N. Verbindung zu RAG aus 5.1 — selber Stack, anderer Use-Case. Skalierbar, schnell, gut für Real-time. [pgvector für Recommendations](https://github.com/pgvector/pgvector)

### Praxis: Hauptprojekt — Recommender auf MovieLens oder eigenen Daten

Wähle einen Datensatz:
- MovieLens (Klassiker, gut dokumentiert)
- Eigene Daten (Spotify-Listening-History, Bookmark-Klicks, Buch-Bewertungen)

**Anforderungen:**
- **Mindestens drei Approaches** vergleichen: Content-Based, Collaborative Filtering, Matrix Factorization (oder modernes Two-Tower).
- **Cold-Start-Behandlung**: definiere und teste Strategien für neue Items und User.
- **Eval mit Precision@K, Recall@K, NDCG**.
- **Diversity-Analyse**: zeigt dein bestes Modell genug Variation oder bleibt es in Bubbles?
- **Bonus**: ein LLM-basierter Recommender als Vergleich (z.B. mit Claude/GPT, das User-Profil + Item-Liste bekommt und Top-N empfiehlt).
- Im Portfolio: `stufe-8_klassisches-ml/8-4-recommender/` mit Notebook, Vergleichstabelle, Beispiel-Empfehlungen.

### 🎁 Mehrwert-Mini-Projekt
**Eigener Buch-Recommender** für persönliche Lese-Liste — mit eigenen Bewertungen aus Goodreads-Export oder ähnlichem.

### 🌱 Open-Source-Pfad
- [Surprise](https://surpriselib.com) (Klassiker für klassisches RecSys, OSS).
- [LightFM](https://github.com/lyst/lightfm) (Hybrid Recommender, OSS).
- [Microsoft Recommenders](https://github.com/microsoft/recommenders) (Best Practices Library, OSS).
- pgvector lokal für embedding-basierten Approach.

### Outcome-Check
- [ ] Mindestens drei RecSys-Approaches verglichen
- [ ] Cold-Start-Strategie definiert
- [ ] Eval mit Precision@K, Recall@K, NDCG
- [ ] Diversity-Analyse
- [ ] Beispiel-Empfehlungen für Test-User dokumentiert

---

## Modul 8.5: A/B-Testing & Causal Inference

Statistik ist 2026 nicht obsolet — sie ist die Foundation für ehrliche Eval. Ohne Statistik weißt du nicht, ob deine "Verbesserung" wirklich besser ist oder nur Rauschen. Dieses Modul ist die wichtigste Verbindung zum Querschnitt-Eval. **Wer LLMs und Modelle ohne Statistik bewertet, betreibt Theater.**

**Aufwand:** 🔧 4-8h · 🧮 18-25h · 💼 4-8h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Querschnitt Math-Foundation (Probability + Statistik), Querschnitt Eval

### Lernziel
Du verstehst Hypothesen-Tests, Sample-Size-Berechnung, Multiple-Testing-Korrektur und kannst einen A/B-Test sauber durchführen — auch in einem KI-Kontext (z.B. Prompt-A/B-Test mit LLM-Outputs).

### Theorie

- 🟢 **Wann ist Experimentation der richtige Ansatz?** — A/B-Tests sind die Goldstandard-Methode für kausale Aussagen ("Variante A führt zu X% mehr Conversion"). Aber: nicht für jede Frage geeignet. Bei kleinen Samples, langen Experimentier-Zyklen, ethisch problematischen Treatments — andere Methoden (Causal Inference) besser. [Kohavi, Tang, Xu — Trustworthy Online Controlled Experiments (Buch)](https://experimentguide.com) (Standard-Referenz)

- 🟢 **Hypothesen-Tests: Null- und Alternativ-Hypothese** — H0: kein Effekt. H1: es gibt einen Effekt. Test berechnet p-Wert: wie wahrscheinlich wäre dieses Ergebnis, wenn H0 wahr wäre? p < α (typ. 0.05) → H0 ablehnen. [StatQuest — Hypothesis Testing (Video)](https://www.youtube.com/watch?v=0oc49DyA3hU)

- 🟢 **t-Test, Chi-Square, Mann-Whitney** — die wichtigsten Tests: **t-Test** für Mittelwert-Vergleich bei normalverteilten Daten. **Chi-Square** für kategorische Daten (z.B. Conversion Rates). **Mann-Whitney** als nicht-parametrische Alternative bei nicht-normalen Verteilungen. [scipy.stats Library](https://docs.scipy.org/doc/scipy/reference/stats.html)

- 🟢 **Konfidenzintervalle** — wichtiger als p-Werte: wie groß ist der Effekt mit welcher Unsicherheit? Ein 95%-Konfidenzintervall sagt: "der wahre Effekt liegt mit 95% Wahrscheinlichkeit in diesem Bereich". Erlaubt qualitative Bewertung, nicht nur "signifikant ja/nein". [Penn State — Confidence Intervals](https://online.stat.psu.edu/stat200)

- 🟢 **Sample-Size-Berechnung (Power Analysis)** — wieviele Samples brauche ich, um einen Effekt von X% mit Power 80% und α=5% zu erkennen? Pflicht-Übung VOR dem Experiment. Ohne Power-Analysis ist ein "kein signifikanter Unterschied"-Ergebnis aussagelos. [Statsmodels Power Analysis](https://www.statsmodels.org) · [G*Power Software (kostenlos)](https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower)

- 🟢 **OEC (Overall Evaluation Criterion)** — die EINE Hauptmetrik, die du testest. Bei Online-Experimenten oft Conversion Rate, Revenue per User, Retention. Wichtig: vor dem Test definieren, nicht hinterher cherry-picken. [Microsoft — OEC Concept](https://www.microsoft.com)

- 🟢 **Guardrail-Metriken** — Metriken, die nicht schlechter werden dürfen, auch wenn OEC besser wird. Beispiel: Conversion steigt um 5%, aber Page-Load-Time auch um 2s — das ist meist Netto-Verlust. [Kohavi — Guardrails](https://exp-platform.com)

- 🟢 **Multiple-Testing-Problem** — wenn du 20 Metriken gleichzeitig testest, ist mindestens eine "signifikant" mit p<0.05 nur zufällig. Korrekturen: **Bonferroni** (konservativ, einfach), **Holm**, **FDR (False Discovery Rate)**. Pflicht bei jedem ernsthaften A/B-Test mit mehreren Metriken. [Wikipedia — Multiple Comparisons Problem](https://en.wikipedia.org/wiki/Multiple_comparisons_problem)

- 🟢 **Sequential Testing und Stopping Rules** — wann darf ich einen Test früh stoppen? Standard-Antwort: nicht. Peeking auf Daten und Stoppen, wenn p<0.05 erreicht ist, inflatiert false-positive Rate dramatisch. Lösungen: **Bayesian A/B-Testing**, **Always-Valid p-Values**, vorab definierte Sequential Test Rules. [Optimizely — Sequential Testing Explained](https://www.optimizely.com/optimization-glossary/sequential-testing/)

- 🟢 **Bayesian A/B-Testing als Alternative** — statt p-Werten direkte Wahrscheinlichkeits-Aussagen ("80% Wahrscheinlichkeit, dass Variante B besser ist"). Erlaubt Sequential Testing nativ. Zunehmend in Tech-Companies Standard. [VWO — Bayesian Methods](https://vwo.com)

- 🟢 **Segment-Analyse** — wirkt der Effekt überall gleich? Oder nur in bestimmten Segmenten (z.B. Mobile vs. Desktop, Neue vs. Bestehende User)? Pflicht-Analyse vor Roll-Out. Achtung: bei vielen Segmenten droht Multiple-Testing.

- 🟢 **A/B-Testing für KI-Outputs (LLM-Outputs)** — anders als klassisches A/B-Testing: LLM-Outputs sind nicht-deterministisch, Output-Qualität ist subjektiv, Single-User-Tests reichen oft nicht. Lösungen: (1) **LLM-as-Judge** auf identischen Test-Inputs. (2) **Pairwise Human Eval** mit randomisierten Pairs. (3) **Online-A/B** auf User-Engagement-Metriken. Verbindung zu Querschnitt-Eval und Modul 5.4. [Hamel Husain — Eval Methodology](https://hamel.dev)

- 🟢 **Causal Inference jenseits A/B-Testing** — wenn A/B nicht möglich (Ethik, zu langsam, zu klein): Difference-in-Differences, Synthetic Control, Instrumental Variables, Regression Discontinuity. Standard-Buch: [Mostly Harmless Econometrics (Angrist/Pischke)](https://www.mostlyharmlesseconometrics.com). Für Tech-Praxis: [Causal Inference: The Mixtape (kostenlos)](https://mixtape.scunning.com).

- 🟢 **Häufige A/B-Test-Fallen** — Cherry-Picking, Peeking, Sample-Size zu klein, ignorierte Guardrail-Metriken, Confounders nicht kontrolliert, Multiple-Testing nicht korrigiert. Eine schlechte A/B-Eval ist schlimmer als gar keine, weil sie falsche Sicherheit gibt.

### Praxis: Hauptprojekt — A/B-Test designen, durchführen, analysieren

Wähle einen Use-Case:

**Option A: Prompt-A/B-Test** — zwei Versionen eines Prompts (z.B. für deine Prompt-Library aus 2.3) auf 50-100 Test-Inputs vergleichen. LLM-as-Judge oder eigene Bewertung. Statistische Signifikanz testen.

**Option B: RAG-Modul-A/B-Test** — zwei Varianten deines RAG-Systems aus 5.1 (z.B. unterschiedliche Embedding-Modelle oder Chunk-Sizes). RAGAS-Eval-Scores vergleichen mit statistischer Signifikanz.

**Option C: Klassisches Online-A/B** — wenn du eigene Web-App hast (aus 2.6 oder 5.5): UI-Variante A vs. B, mit Metrik (z.B. Click Rate). Wenn nicht: simulierter Datensatz.

**Anforderungen für alle:**
- **OEC und Guardrail-Metriken** vorab definieren.
- **Sample-Size berechnen** mit Power Analysis (mindestens 80% Power, α=5%, definierter Effect Size).
- **Test durchführen** und Daten erheben.
- **Statistische Tests** mit korrigiertem α bei Multiple Testing.
- **Konfidenzintervalle** statt nur p-Werte.
- **Reflexion über Limitationen**: was hast du nicht kontrolliert?
- Im Portfolio: `stufe-8_klassisches-ml/8-5-ab-test/` mit Notebook, Power-Analysis, Test-Report.

### 🎁 Mehrwert-Mini-Projekte
- **A/B-Test-Cheat-Sheet** als persönliche Referenz für Sample-Size, Tests, Korrekturen.
- **Bayesian A/B-Testing-Notebook** als Alternative zur Frequentist-Methode.

### 🌱 Open-Source-Pfad
- [scipy.stats](https://docs.scipy.org/doc/scipy/reference/stats.html) für statistische Tests.
- [statsmodels](https://www.statsmodels.org) für Regression und Power Analysis.
- [G*Power](https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower) für Power Analysis.
- [PyMC](https://www.pymc.io) für Bayesian A/B-Testing.

### Outcome-Check
- [ ] OEC und Guardrail-Metriken definiert vor Test
- [ ] Sample-Size-Berechnung mit Power Analysis
- [ ] Statistischer Test mit korrigiertem α
- [ ] Konfidenzintervalle für Effect Size
- [ ] Reflexion über Multiple Testing und Confounders

---

## Free-Zertifikate für Stufe 8

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [DLAI Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction) | Andrew Ng | ~80h | Vertiefung 8.1-8.3 (Pflicht für 🧮) |
| [Kaggle — Intermediate ML](https://www.kaggle.com/learn/intermediate-machine-learning) | Kaggle Learn | ~7h | Vertiefung 8.2, 8.3 |
| [Kaggle — Feature Engineering](https://www.kaggle.com/learn/feature-engineering) | Kaggle Learn | ~5h | Vertiefung 8.2, 8.3 |
| [Kaggle — Time Series](https://www.kaggle.com/learn/time-series) | Kaggle Learn | ~5h | Vertiefung 8.3 |
| [MIT 6.036 Introduction to ML](https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.036+1T2019/about) | MIT | 60-80h | Vertiefung für 🧮 |
| [Khan Academy Statistics & Probability](https://www.khanacademy.org/math/statistics-probability) | Khan Academy | 20-40h | Pflicht-Vorlauf für 8.5 |
| [Coursera — Google A/B Testing](https://www.coursera.org/learn/google-ab-testing) | Google | ~10h | Vertiefung 8.5 |
| [Causal Inference: The Mixtape](https://mixtape.scunning.com) | Scott Cunningham | als Buch | Vertiefung 8.5 |

---

## Stufen-Outcome

Nach Stufe 8 hast du:
- ✅ EDA, Clustering, Dimensionsreduktion sicher
- ✅ Klassifikation mit Class-Imbalance-Behandlung
- ✅ Boosting-Familie verstanden, XGBoost/LightGBM/CatBoost gewählt nach Use-Case
- ✅ Recommender-System gebaut
- ✅ A/B-Testing mit Power Analysis, Multiple Testing, Causal Inference
- ✅ Statistik-Foundation für ehrliche Eval

**Du bist bereit für Stufe 9: KI-Strategie & Business — wo das Gelernte in Business-Entscheidungen übergeht.**

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: TabPFN-Entwicklung, AutoML-Landschaft, LLM-basierte RecSys, Bayesian A/B-Testing-Tools.