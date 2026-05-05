---
title: "Sequential Testing und Stopping Rules"
module: "8.5"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Sequential Testing und Stopping Rules

## Kernidee

"Peeking" — zwischendurch auf p-Werte schauen und den Test stoppen, wenn p < 0.05 erreicht ist — inflatiert die false-positive Rate dramatisch. Wer täglich auf seine A/B-Test-Daten schaut und bei Signifikanz stoppt, wird sehr viel öfter falsch-positiv als α=5% vermuten lässt. Sequential Testing-Methoden erlauben kontinuierliche Überwachung ohne Inflation des Fehlers.

## Im Detail

**Das Peeking-Problem quantifiziert:**

```python
import numpy as np

# Simulation: 10.000 A/A-Tests (kein echter Effekt)
n_simulations = 10000
n_max_samples = 1000
alpha = 0.05

false_positives_peeking = 0
false_positives_fixed = 0

for _ in range(n_simulations):
    A = np.random.normal(0, 1, n_max_samples)
    B = np.random.normal(0, 1, n_max_samples)  # Kein echter Unterschied

    # Fixed-Sample: nur einmal am Ende testen
    from scipy.stats import ttest_ind
    t, p = ttest_ind(A, B)
    if p < alpha:
        false_positives_fixed += 1

    # Peeking: täglich prüfen, stoppe bei Signifikanz
    for n in range(10, n_max_samples+1, 10):
        t, p = ttest_ind(A[:n], B[:n])
        if p < alpha:
            false_positives_peeking += 1
            break

print(f"Fixed-Sample false-positive Rate: {false_positives_fixed/n_simulations:.1%}")  # ~5%
print(f"Peeking false-positive Rate: {false_positives_peeking/n_simulations:.1%}")     # ~30%+
```

**Lösungen:**

**1. Pre-Registration:** Sample-Size vorausberechnen und erst am Ende auswerten. Keine Zwischenergebnisse beachten.

**2. Group Sequential Tests:** erlauben spezifische Zwischenlooks zu vorab definierten Zeitpunkten mit angepassten α-Grenzen (Pocock, O'Brien-Fleming).

**3. Always-Valid p-Values / mSPRT:**

```python
# Mixture Sequential Probability Ratio Test
# Erlaubt kontinuierliche Überwachung ohne Type-I-Inflation
# Implementiert in: Sequential.jl, R-Package 'gsDesign'
```

**4. Bayesian A/B-Testing:** (siehe nächste Seite) — Sequential Testing ist bei Bayes natürlich eingebaut.

**5. CUPED (Variance Reduction):**
Nicht direkt für Sequential Testing, aber reduziert benötigte Sample-Size durch Kovarianz-Kontrolle.

```python
# CUPED: Reduziere Varianz durch Pre-Experiment-Kovariable (z.B. letzter Monat Revenue)
def apply_cuped(Y, X_pre):
    """
    Y: Post-Experiment-Metrik
    X_pre: Pre-Experiment-Metrik (gleiche User, vor dem Experiment)
    """
    theta = np.cov(Y, X_pre)[0,1] / np.var(X_pre)
    Y_cuped = Y - theta * (X_pre - X_pre.mean())
    return Y_cuped

# CUPED reduziert Varianz oft um 30-70% → kleinere Sample-Size nötig
```

**Praktische Empfehlung:**

Für die meisten Teams: vorab Sample-Size berechnen, Test bis zum Ende laufen lassen, Zwischenergebnisse nicht für Entscheidungen nutzen. Wenn Flexibilität nötig: Bayesian A/B-Testing als Alternative.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Optimizely — Sequential Testing](https://www.optimizely.com/optimization-glossary/sequential-testing/) | Praktische Erklärung |
| 📖 Paper | [Always-Valid Inference](https://arxiv.org/abs/1512.04922) | Ramdaset al. |
| 📖 Blog | [Netflix — CUPED Explained](https://netflixtechblog.com) | Netflix-Ansatz |

## Teste dein Verständnis

- [ ] Simuliere in Python: wie hoch ist die false-positive Rate, wenn du 10× peekst mit α=0.05 pro Look?
- [ ] Was ist CUPED und welches Problem löst es (nicht Sequential Testing, sondern?)?
- [ ] Was sind vorab definierte Interim-Analysen und wie unterscheiden sie sich von Peeking?
- [ ] Wann ist es in Ordnung, einen A/B-Test früh zu stoppen?
