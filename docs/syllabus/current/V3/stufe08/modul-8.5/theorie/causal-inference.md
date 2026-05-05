---
title: "Causal Inference jenseits A/B-Testing"
module: "8.5"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Causal Inference jenseits A/B-Testing

## Kernidee

A/B-Tests sind der Goldstandard für kausale Schlüsse, aber nicht immer möglich. Wenn Randomisierung ausscheidet — ethische Gründe, zu kleines Sample, historische Daten — greifen Quasi-Experimental Designs: Difference-in-Differences nutzt natürliche Experimente, Synthetic Control konstruiert künstliche Kontrollgruppen, Regression Discontinuity nutzt scharfe Cutoffs.

## Im Detail

**Warum Observational Studies täuschen:**

```
User, die FAQ besuchen, kaufen 3× mehr.
→ "FAQ hilft beim Kaufen!" → FAQ ausbauen.

Wahr: kaufwillige User suchen aktiv nach Informationen.
Die FAQ ist Indikator, nicht Ursache.
```

Das ist **Konfundierung (Confounding)**: eine dritt Variable (Kaufabsicht) beeinflusst sowohl Treatment (FAQ-Besuch) als auch Outcome (Kauf).

**Methode 1: Difference-in-Differences (DiD)**

Wenn eine Gruppe "natürlich" das Treatment bekommt (z.B. ein Feature-Rollout in einer Region), vergleiche Vorher-Nachher-Unterschiede zwischen Treatment- und Kontrollgruppe.

```
Effekt = (Treatment_nach - Treatment_vor) - (Control_nach - Control_vor)
```

Voraussetzung: **Parallel Trends** — ohne Treatment hätten beide Gruppen ähnliche Trends gezeigt.

```python
import pandas as pd
import statsmodels.formula.api as smf

# Daten
df = pd.DataFrame({
    'outcome': [...],
    'treatment_group': [...],  # 0 oder 1
    'post_period': [...],      # 0 (vor Treatment) oder 1 (nach Treatment)
    'covariates': [...]
})

# DiD via Regression
model = smf.ols(
    'outcome ~ treatment_group + post_period + treatment_group:post_period + covariates',
    data=df
).fit()

# Der Interaktionsterm ist der DiD-Schätzer
print(model.summary())
did_estimate = model.params['treatment_group:post_period']
print(f"DiD-Schätzer: {did_estimate:.3f}")
```

**Methode 2: Synthetic Control**

Konstruiere eine "synthetische" Kontrollgruppe als gewichtete Kombination mehrerer Kontroll-Einheiten, die den Pre-Treatment-Trend der Treatment-Gruppe optimal abbildet.

Typische Anwendung: eine Stadt, ein Land, ein Unternehmen als Treatment, andere als Vergleich.

```python
# Simplified: linear optimization
from scipy.optimize import minimize

def synthetic_control_weights(pre_treatment, control_units):
    """Finde Gewichte für Kontrolleinheiten."""
    def objective(weights):
        synthetic = control_units @ weights
        return ((pre_treatment - synthetic)**2).sum()

    n = control_units.shape[1]
    constraints = [{'type': 'eq', 'fun': lambda w: w.sum() - 1}]
    bounds = [(0, 1)] * n
    result = minimize(objective, x0=np.ones(n)/n,
                     constraints=constraints, bounds=bounds)
    return result.x
```

**Methode 3: Regression Discontinuity (RDD)**

Nutze einen scharfen Schwellenwert: User mit Score ≥ 70 bekommen Feature X, User mit Score < 70 nicht. Knapp unter und knapp über dem Cutoff sind User ansonsten ähnlich → lokales kausales Experiment.

```python
import pandas as pd

def rdd_analysis(df, cutoff, bandwidth=5):
    """Analysiert kausalen Effekt an einem Cutoff."""
    local_df = df[abs(df['score'] - cutoff) <= bandwidth]
    local_df = local_df.copy()
    local_df['above_cutoff'] = (local_df['score'] >= cutoff).astype(int)

    import statsmodels.formula.api as smf
    model = smf.ols(
        'outcome ~ above_cutoff + score + above_cutoff:score',
        data=local_df
    ).fit()

    rdd_effect = model.params['above_cutoff']
    print(f"RDD-Schätzer (kausaler Effekt am Cutoff): {rdd_effect:.3f}")
    return model
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Causal Inference: The Mixtape (kostenlos)](https://mixtape.scunning.com) | Beste kostenlose Einführung |
| 📖 Buch | [Mostly Harmless Econometrics](https://www.mostlyharmlesseconometrics.com) | Angrist/Pischke — Standardwerk |
| 🔧 Library | [CausalPy](https://causalpy.readthedocs.io) | Bayesian Causal Inference in Python |

## Teste dein Verständnis

- [ ] Was ist Konfundierung und nenne ein konkretes Beispiel aus dem KI-Bereich.
- [ ] Was ist die "Parallel Trends"-Annahme bei Difference-in-Differences?
- [ ] Wann ist Regression Discontinuity anwendbar? Nenne ein konkretes Beispiel.
- [ ] Warum ist Synthetic Control besonders nützlich bei N=1 Treatment-Einheiten?
