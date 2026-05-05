---
title: "t-Test, Chi-Square, Mann-Whitney"
module: "8.5"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# t-Test, Chi-Square, Mann-Whitney

## Kernidee

Verschiedene Datentypen verlangen verschiedene statistische Tests: t-Test für kontinuierliche Metriken (z.B. Revenue pro User) bei Normalverteilung; Chi-Square für kategorische Anteile (z.B. Conversion Rate); Mann-Whitney als nicht-parametrische Alternative, wenn die Normalverteilungs-Annahme verletzt ist. Die Wahl des falschen Tests gibt zwar ein Ergebnis, aber ein falsches.

## Im Detail

**Übersicht der wichtigsten Tests:**

| Test | Wann | Voraussetzungen |
|------|------|----------------|
| t-Test (unabhängig) | Mittelwert-Vergleich zweier Gruppen | Normalverteilung, unabhängige Samples |
| Chi-Square | Anteile / Kategorien vergleichen | Erwartete Häufigkeit ≥ 5 pro Zelle |
| Mann-Whitney U | Median-Vergleich, nicht-parametrisch | Keine Verteilungsannahme |
| Welch t-Test | t-Test mit ungleichen Varianzen | Normalverteilung (relaxed) |

**t-Test (unabhängige Stichproben):**
```python
from scipy import stats
import numpy as np

# Beispiel: durchschnittlicher Revenue pro User
revenue_A = np.array([12.5, 8.3, 15.2, 9.8, ...])  # Gruppe A
revenue_B = np.array([14.1, 10.2, 16.8, 11.3, ...])  # Gruppe B

# Welch t-Test (empfohlen, da keine gleiche Varianz angenommen)
t_stat, p_value = stats.ttest_ind(revenue_A, revenue_B, equal_var=False)

print(f"t-Statistik: {t_stat:.3f}")
print(f"p-Wert: {p_value:.4f}")
print(f"Mittelwert A: {revenue_A.mean():.2f}")
print(f"Mittelwert B: {revenue_B.mean():.2f}")
```

**Chi-Square für Conversion Rates:**
```python
# Conversion Rate: kategorisch (konvertiert ja/nein)
# A: 1000 User, 85 Conversions
# B: 1000 User, 112 Conversions

observed = np.array([[85, 915], [112, 888]])
chi2_stat, p_value, dof, expected = stats.chi2_contingency(observed)

print(f"Chi²: {chi2_stat:.3f}, p-Wert: {p_value:.4f}")
print(f"Conversion A: {85/1000:.1%}")
print(f"Conversion B: {112/1000:.1%}")

# Prüfe Annahme: alle expected ≥ 5
print(f"Min. erwartete Häufigkeit: {expected.min():.1f}")
```

**Mann-Whitney U (nicht-parametrisch):**
```python
# Wenn Revenue-Verteilung stark schief (z.B. durch Outlier-Käufe)
u_stat, p_value = stats.mannwhitneyu(revenue_A, revenue_B, alternative='two-sided')
print(f"Mann-Whitney U: {u_stat:.0f}, p-Wert: {p_value:.4f}")
```

**Wann welchen Test wählen?**

```
Metrik ist kontinuierlich (Revenue, Zeit)?
  → Normalverteilt? → t-Test (Welch)
  → Stark schief / Outlier? → Mann-Whitney U

Metrik ist binär (Conversion, Klick)?
  → Chi-Square (oder z-Test für Anteile)

Mehr als zwei Gruppen?
  → ANOVA (parametrisch) oder Kruskal-Wallis (nicht-parametrisch)
```

**Normalverteilung prüfen:**
```python
# Shapiro-Wilk (bei n < 5000)
stat, p = stats.shapiro(revenue_A)
print(f"Normal? p={p:.4f} ({'ja' if p > 0.05 else 'nein'})")

# Visuell: Q-Q-Plot
import matplotlib.pyplot as plt
stats.probplot(revenue_A, plot=plt)
plt.title("Q-Q-Plot: Revenue Gruppe A")
plt.show()
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [scipy.stats — Statistical Tests](https://docs.scipy.org/doc/scipy/reference/stats.html) | Vollständige API |
| 🎥 Video | [StatQuest — t-Test](https://www.youtube.com/watch?v=pTmLQvMM-1M) | Intuitive Erklärung |
| 🎥 Video | [StatQuest — Chi-Square](https://www.youtube.com/watch?v=7_cs1YlZoug) | Chi-Square Erklärung |

## Teste dein Verständnis

- [ ] Du testest, ob zwei Prompt-Varianten unterschiedliche Scores erzeugen (1-10 Skala, schief verteilt). Welchen Test nimmst du?
- [ ] Warum nimmst du den Welch t-Test statt des klassischen t-Tests?
- [ ] Was ist die Voraussetzung für Chi-Square und was tust du, wenn sie verletzt ist?
- [ ] Deine Revenue-Daten haben eine starke Rechtsschiefe durch Whale-Kunden. Welcher Test ist robuster?
