---
title: "Bayesian A/B-Testing"
module: "8.5"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Bayesian A/B-Testing

## Kernidee

Bayesian A/B-Testing ersetzt p-Werte durch direkte Wahrscheinlichkeits-Aussagen: "Es gibt eine 87% Wahrscheinlichkeit, dass Variante B besser ist als A." Das ist intuitiver als p-Werte, erlaubt Sequential Testing nativ (kein Peeking-Problem), und ist besonders nützlich wenn du Vorwissen über den erwarteten Effekt hast.

## Im Detail

**Das Kernprinzip (Bayes' Theorem):**

```
P(θ|Daten) ∝ P(Daten|θ) × P(θ)
  Posterior   Likelihood    Prior
```

Für A/B-Testing mit Conversion Rates:
- Prior: deine Überzeugung über die Conversion Rate BEVOR das Experiment.
- Likelihood: wie wahrscheinlich sind die beobachteten Daten, gegeben die Conversion Rate?
- Posterior: aktualisierte Überzeugung NACH dem Experiment.

**Beta-Binomial-Modell für Conversion Rates:**

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Vorhergehende Überzeugung: Conversion Rate liegt irgendwo zwischen 0 und 1
# Uninformativer Prior: Beta(1, 1) = Uniform
# Informierter Prior (Baseline = ~10%): Beta(10, 90)

# Experiment-Daten
n_A, conv_A = 1000, 100  # 10% Conversion
n_B, conv_B = 1000, 120  # 12% Conversion

# Prior
alpha_prior, beta_prior = 1, 1  # Uninformativ

# Posterior (Update durch Daten)
alpha_A_post = alpha_prior + conv_A
beta_A_post  = beta_prior + (n_A - conv_A)

alpha_B_post = alpha_prior + conv_B
beta_B_post  = beta_prior + (n_B - conv_B)

# Posterior-Verteilungen
theta = np.linspace(0, 0.25, 1000)
pdf_A = stats.beta.pdf(theta, alpha_A_post, beta_A_post)
pdf_B = stats.beta.pdf(theta, alpha_B_post, beta_B_post)

plt.figure(figsize=(10, 5))
plt.plot(theta, pdf_A, label=f'Variante A: E[θ]={alpha_A_post/(alpha_A_post+beta_A_post):.3f}')
plt.plot(theta, pdf_B, label=f'Variante B: E[θ]={alpha_B_post/(alpha_B_post+beta_B_post):.3f}')
plt.xlabel("Conversion Rate")
plt.ylabel("Posterior Dichte")
plt.legend()
plt.title("Bayesian A/B-Test: Posterior-Verteilungen")
plt.show()
```

**P(B > A) berechnen via Monte Carlo:**

```python
# Ziehe Samples aus beiden Posteriors und vergleiche
n_samples = 100_000
samples_A = np.random.beta(alpha_A_post, beta_A_post, n_samples)
samples_B = np.random.beta(alpha_B_post, beta_B_post, n_samples)

prob_B_better = (samples_B > samples_A).mean()
expected_lift = ((samples_B - samples_A) / samples_A).mean()

print(f"P(B > A) = {prob_B_better:.1%}")
print(f"Erwarteter Lift = {expected_lift:.1%}")

# Credible Interval für den Lift
lift_samples = (samples_B - samples_A) / samples_A
ci_lower, ci_upper = np.percentile(lift_samples, [2.5, 97.5])
print(f"95% Credible Interval Lift: [{ci_lower:.1%}, {ci_upper:.1%}]")
```

**Bayesian vs. Frequentist:**

| | Frequentist | Bayesian |
|--|--|--|
| Output | p-Wert | P(B > A) |
| Intuition | Schwer erklärbar | Direkt verständlich |
| Sequential | Peeking-Problem | Nativ Sequential |
| Prior | Kein Vorwissen | Vorwissen einfließen |
| Software | scipy, statsmodels | PyMC, Stan |

**Mit PyMC (moderner Ansatz):**
```python
import pymc as pm

with pm.Model() as ab_model:
    # Priors
    p_A = pm.Beta('p_A', alpha=1, beta=1)
    p_B = pm.Beta('p_B', alpha=1, beta=1)

    # Likelihood
    obs_A = pm.Binomial('obs_A', n=n_A, p=p_A, observed=conv_A)
    obs_B = pm.Binomial('obs_B', n=n_B, p=p_B, observed=conv_B)

    # Derived quantity
    lift = pm.Deterministic('lift', (p_B - p_A) / p_A)

    trace = pm.sample(10000, return_inferencedata=True)

pm.plot_posterior(trace, var_names=['lift'])
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [PyMC Documentation](https://www.pymc.io) | Modernes Bayesian ML |
| 📖 Artikel | [VWO — Bayesian A/B Testing](https://vwo.com/testing/bayesian) | Business-Perspektive |
| 📖 Buch | [Bayesian Data Analysis (Gelman et al.)](http://www.stat.columbia.edu/~gelman/book/) | Standardreferenz |

## Teste dein Verständnis

- [ ] Was bedeutet "P(B > A) = 87%"? Ist das dasselbe wie p < 0.05?
- [ ] Warum hat Bayesian A/B-Testing kein Peeking-Problem?
- [ ] Was ist ein Prior und wie wählt du ihn für eine Conversion-Rate-Test?
- [ ] Implementiere in 5 Zeilen Python: P(B > A) via Monte Carlo für Beta-Posteriors.
