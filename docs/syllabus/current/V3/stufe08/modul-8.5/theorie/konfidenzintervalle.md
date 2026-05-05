---
title: "Konfidenzintervalle"
module: "8.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Konfidenzintervalle

## Kernidee

Konfidenzintervalle sind aussagekräftiger als p-Werte: statt nur "signifikant ja/nein" geben sie an, wie groß der Effekt wahrscheinlich ist — mit welcher Unsicherheit. Ein 95%-Konfidenzintervall von [+0.5%, +3.2%] für die Conversion-Verbesserung sagt mehr als p=0.03 allein. Immer Konfidenzintervalle neben p-Werten berichten.

## Im Detail

**Was ein 95%-Konfidenzintervall bedeutet:**

> "Wenn wir diesen Prozess 100 Mal wiederholen würden, würde in 95 Fällen das Konfidenzintervall den wahren Effekt enthalten."

Es ist NICHT: "der wahre Effekt liegt mit 95% Wahrscheinlichkeit in diesem Intervall" — das klingt ähnlich, ist aber eine andere (Bayes'sche) Aussage.

**Berechnung für Mittelwert-Differenz:**
```python
from scipy import stats
import numpy as np

# Zwei Gruppen
A = np.array([10.2, 12.5, 9.8, 11.3, 13.1, ...])
B = np.array([12.1, 13.8, 11.2, 13.5, 14.2, ...])

# Konfidenzintervall der Differenz
diff = B.mean() - A.mean()
se = np.sqrt(A.std()**2/len(A) + B.std()**2/len(B))
t_crit = stats.t.ppf(0.975, df=len(A)+len(B)-2)  # 95% CI → 1.96 ≈ t*

ci_lower = diff - t_crit * se
ci_upper = diff + t_crit * se

print(f"Effekt: {diff:.3f}")
print(f"95%-Konfidenzintervall: [{ci_lower:.3f}, {ci_upper:.3f}]")
```

**Für Conversion Rates (Proportionen):**
```python
# Wilson Confidence Interval (robuster als Normal-Approximation)
from statsmodels.stats.proportion import proportion_confint

n_A, conv_A = 1000, 85
n_B, conv_B = 1000, 112

ci_A = proportion_confint(conv_A, n_A, method='wilson')
ci_B = proportion_confint(conv_B, n_B, method='wilson')

print(f"Rate A: {conv_A/n_A:.1%} — 95%-CI: [{ci_A[0]:.1%}, {ci_A[1]:.1%}]")
print(f"Rate B: {conv_B/n_B:.1%} — 95%-CI: [{ci_B[0]:.1%}, {ci_B[1]:.1%}]")
```

**Interpretation anhand des Intervalls:**

| Intervall | Interpretation |
|-----------|---------------|
| [+1.2%, +4.8%] | Klare Verbesserung, minimal +1.2% |
| [-0.5%, +3.2%] | Möglicherweise besser, aber auch kein Effekt möglich |
| [-2.1%, -0.3%] | Klare Verschlechterung |
| [-0.2%, +0.3%] | Kein praktisch bedeutsamer Effekt (auch wenn signifikant) |

**Praktisch bedeutsamer vs. statistisch signifikanter Effekt:**

Ein riesiges Experiment mit 1 Million Usern kann einen Unterschied von 0.01% als hochsignifikant (p=0.0001) ausweisen — aber ist 0.01% mehr Conversion relevant für das Business? Das Konfidenzintervall zeigt die Effektgröße direkt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Online | [Penn State — Confidence Intervals](https://online.stat.psu.edu/stat200) | Statistik-Grundlage |
| 🎥 Video | [StatQuest — Confidence Intervals](https://www.youtube.com/watch?v=TqOeMYtOc1w) | Intuitive Erklärung |
| 📖 Docs | [statsmodels — proportion_confint](https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.proportion_confint.html) | Wilson CI |

## Teste dein Verständnis

- [ ] Was bedeutet "95%-Konfidenzintervall" genau (formuliere es korrekt)?
- [ ] Dein KI hat p=0.001 und das Konfidenzintervall für den Lift ist [0.001%, 0.003%]. Würdest du den Change deployen?
- [ ] Warum solltest du immer Konfidenzintervalle neben p-Werten berichten?
- [ ] Was bedeutet es, wenn ein Konfidenzintervall den Wert null enthält?
