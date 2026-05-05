---
title: "Das Klassifikations-Grundproblem"
module: "8.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Das Klassifikations-Grundproblem

## Kernidee

Klassifikation bedeutet: gegeben Features, sage eine diskrete Klasse vorher. Das klingt simpel, aber die Varianten sind vielfältig — binär (zwei Klassen), multiclass (viele Klassen, eine pro Sample), multilabel (viele Klassen, mehrere pro Sample). Praktische Use-Cases decken einen enormen Anteil aller ML-Anwendungen ab: Spam-Filter, Churn-Vorhersage, Fraud Detection, medizinische Diagnose.

## Im Detail

**Drei Varianten der Klassifikation**

**Binäre Klassifikation:** ein Sample gehört zu Klasse 0 oder Klasse 1.
- Spam vs. Ham
- Churn vs. Stay
- Kredit-Ausfall vs. kein Ausfall

**Multiclass-Klassifikation:** ein Sample gehört zu genau einer von K Klassen.
- Bildklassifikation: Katze, Hund, Vogel
- Nachrichtenklassifikation: Sport, Politik, Wirtschaft, Kultur
- Diagnose: Krankheit A, B, C oder gesund

**Multilabel-Klassifikation:** ein Sample kann mehrere Labels gleichzeitig haben.
- Bild-Tagging: "Hund UND Strand UND Sommer"
- Artikel-Kategorisierung: "Tech UND Startup UND KI"
- Musik-Genre: "Pop UND Electronic UND Dance"

**Wann ist Klassifikation die richtige Wahl?**

- Output ist eine diskrete Kategorie (nicht eine Zahl) → Klassifikation
- Output ist eine Zahl (Preis, Temperatur) → Regression
- Output ist eine Sequenz (Text, Code) → Generatives Modell oder Seq2Seq

**Input-Typen und typische Algorithmen:**

| Input | Typische Algorithmen |
|---|---|
| Tabellarische Features | Logistic Regression, Random Forest, XGBoost |
| Text | TF-IDF + Logistic Regression, BERT, LLM |
| Bilder | CNNs, Vision Transformers |
| Multimodal | LLM mit Vision |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Classification](https://scikit-learn.org/stable/supervised_learning.html#supervised-learning) | Übersicht aller Klassifikatoren |
| 📖 Tutorial | [Google ML Crash Course — Classification](https://developers.google.com/machine-learning/crash-course/classification) | Gut strukturierter Einstieg |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Multiclass und Multilabel?
- [ ] Nenne drei reale Klassifikations-Use-Cases aus deinem Arbeitskontext.
- [ ] Wann wählst du Klassifikation statt Regression?
- [ ] Welcher Algorithmus ist ein guter erster Schritt für tabellarische Klassifikation?
