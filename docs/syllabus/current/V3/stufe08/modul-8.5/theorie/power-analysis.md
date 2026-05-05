---
title: "Sample-Size-Berechnung (Power Analysis)"
module: "8.5"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Sample-Size-Berechnung (Power Analysis)

## Kernidee

Bevor ein Experiment startet, muss die benötigte Sample-Size berechnet werden. Ohne diese Berechnung ist ein "kein signifikanter Unterschied"-Ergebnis wertlos — das Experiment hatte vielleicht einfach zu wenig Power, um den Effekt zu sehen. Power Analysis bestimmt, wie viele Samples nötig sind, um einen Effekt bestimmter Größe mit bestimmter Wahrscheinlichkeit zu finden.

## Im Detail

**Die vier Parameter:**

| Parameter | Bedeutung | Typischer Wert |
|-----------|-----------|----------------|
| α (alpha) | Signifikanzniveau (false positive Rate) | 0.05 |
| β (beta) | false negative Rate | 0.20 |
| Power (1-β) | Wahrscheinlichkeit, echten Effekt zu finden | 0.80 |
| Effect Size | Größe des erwarteten Effekts | Domänen-spezifisch |

**Die Beziehung:**
```
Power ↑  →  n ↑  (mehr Samples für mehr Power)
α ↓      →  n ↑  (strengerer Test braucht mehr Samples)
Effect ↓ →  n ↑  (kleinere Effekte brauchen mehr Samples)
```

**Berechnung für Conversion Rate:**
```python
from statsmodels.stats.power import TTestIndPower, NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

# Szenario: Conversion A = 10%, erwartete Verbesserung auf 12%
p1 = 0.10  # Baseline Conversion
p2 = 0.12  # Erwartete neue Conversion

# Effect Size (Cohen's h)
effect_size = proportion_effectsize(p2, p1)

# Sample-Size berechnen
analysis = NormalIndPower()
n_per_group = analysis.solve_power(
    effect_size=effect_size,
    alpha=0.05,
    power=0.80,
    alternative='two-sided'
)

print(f"Benötigte Samples pro Gruppe: {int(np.ceil(n_per_group))}")
print(f"Gesamte benötigte Samples: {int(np.ceil(n_per_group)) * 2}")
```

**Berechnung für Mittelwert (Revenue):**
```python
from statsmodels.stats.power import TTestIndPower
import numpy as np

# Szenario: Revenue-Verbesserung von 10€ auf 11€ bei σ=5€
mean_A = 10.0
mean_B = 11.0
std = 5.0

# Cohen's d
d = (mean_B - mean_A) / std

analysis = TTestIndPower()
n_per_group = analysis.solve_power(
    effect_size=d,
    alpha=0.05,
    power=0.80,
    alternative='two-sided'
)

print(f"Cohen's d: {d:.3f}")
print(f"Samples pro Gruppe: {int(np.ceil(n_per_group))}")
```

**Sensitivity Analysis — verschiedene Effect Sizes:**
```python
import matplotlib.pyplot as plt

analysis = TTestIndPower()
effect_sizes = np.arange(0.1, 1.0, 0.05)
sample_sizes = [analysis.solve_power(es, alpha=0.05, power=0.80) for es in effect_sizes]

plt.plot(effect_sizes, sample_sizes)
plt.xlabel("Effect Size (Cohen's d)")
plt.ylabel("Samples pro Gruppe")
plt.title("Power Analysis: Sample-Size vs. Effect Size")
plt.axvline(x=0.2, linestyle='--', label='Kleiner Effekt')
plt.axvline(x=0.5, linestyle='--', label='Mittlerer Effekt')
plt.legend()
plt.show()
```

**Was ist eine realistische Effect Size?**

- Industry-Standard für Online-Experimente: häufig 1-5% Conversion-Verbesserung.
- Bei 10% Baseline und 1% absoluter Verbesserung (10% relativ): braucht ~30.000 Samples.
- Klein rechnen ist besser — lieber einen Monat länger, als einen falschen negativen Befund.

**Eval-Querschnitt-Verbindung:**

"5 Runs pro LLM-Test-Case" basiert auf derselben Logik: du brauchst genug Wiederholungen, um stochastische Varianz zu mitteln. Bei LLM-Eval: Faustregel ist 50-100 Test-Cases pro Eval-Run für stabile Metriken.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [statsmodels — Power Analysis](https://www.statsmodels.org/stable/stats.html#power-and-sample-size-calculations) | Python-Implementierung |
| 🔧 Tool | [G*Power (kostenlos)](https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower) | GUI-Tool für viele Designs |
| 📖 Online | [Evan's A/B Calculator](https://www.evanmiller.org/ab-testing/sample-size.html) | Schneller Online-Rechner |

## Teste dein Verständnis

- [ ] Was passiert, wenn du einen A/B-Test startest, ohne Sample-Size vorauszuberechnen und nichts Signifikantes findest?
- [ ] Du erwartest eine Conversion-Verbesserung von 0.5% (von 5.0% auf 5.5%). Wie viele Samples brauchst du ungefähr? (Rechne grob.)
- [ ] Was ist der Trade-off zwischen α=0.01 und α=0.05 bei gleicher Power?
- [ ] Was bedeutet Power=0.80 in Worten?
