---
title: "Naive Bayes"
module: "8.2"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Naive Bayes

## Kernidee

Naive Bayes ist ein wahrscheinlichkeitsbasierter Klassifikator, der Bayes' Theorem anwendet — mit der "naiven" Annahme, dass alle Features unabhängig voneinander sind. In der Praxis ist diese Annahme fast immer falsch, trotzdem funktioniert Naive Bayes erstaunlich gut für Text-Klassifikation. Es ist nicht state-of-the-art, aber eine nützliche Baseline und konzeptionell wertvoll.

## Im Detail

**Bayes' Theorem für Klassifikation**

```
P(Klasse | Features) ∝ P(Features | Klasse) × P(Klasse)
```

- `P(Klasse)`: Prior — wie häufig ist die Klasse insgesamt?
- `P(Features | Klasse)`: Likelihood — wie wahrscheinlich sind diese Features gegeben die Klasse?
- `P(Klasse | Features)`: Posterior — was wir wollen

Die "naive" Annahme: `P(Features | Klasse) = P(f₁|Klasse) × P(f₂|Klasse) × ...`

**Varianten:**

**GaussianNB**: für kontinuierliche Features, nimmt Normalverteilung an
```python
from sklearn.naive_bayes import GaussianNB
nb = GaussianNB()
```

**MultinomialNB**: für Häufigkeits-Features (z.B. Word-Counts in Text)
```python
from sklearn.naive_bayes import MultinomialNB
nb = MultinomialNB(alpha=1.0)  # Laplace Smoothing
```

**BernoulliNB**: für binäre Features (Feature vorhanden ja/nein)
```python
from sklearn.naive_bayes import BernoulliNB
nb = BernoulliNB()
```

**Stärken:**
- Sehr schnell — auch bei großen Datensätzen
- Gut bei Text-Klassifikation (trotz naiver Annahme)
- Wenig Trainingsdaten nötig
- Natürliche Wahrscheinlichkeits-Ausgabe

**Schwächen:**
- Unabhängigkeits-Annahme verletzt bei korrelierten Features
- Performance unter XGBoost oder Random Forest bei tabellarischen Daten
- Sensibel gegen Null-Häufigkeiten (Lösung: Laplace Smoothing, `alpha`)

**Praktische Verwendung 2026:** Naive Bayes ist nützlich als schnelle Baseline und für Text-Klassifikation bei sehr begrenzten Ressourcen. Für Production-Systeme fast immer von moderneren Ansätzen überholt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scikit-learn — Naive Bayes](https://scikit-learn.org/stable/modules/naive_bayes.html) | Alle Varianten erklärt |
| 🎥 Video | [StatQuest — Naive Bayes](https://www.youtube.com/watch?v=O2L2Uv9pdDA) | Intuitive Erklärung |

## Teste dein Verständnis

- [ ] Was bedeutet "naiv" bei Naive Bayes?
- [ ] Welche Variante wählst du für Word-Count-Features?
- [ ] Was ist Laplace Smoothing und warum braucht man es?
- [ ] Warum funktioniert Naive Bayes bei Text trotz verletzter Unabhängigkeits-Annahme?
