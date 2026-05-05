---
title: "Hypothesen-Tests: Null- und Alternativ-Hypothese"
module: "8.5"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Hypothesen-Tests: Null- und Alternativ-Hypothese

## Kernidee

Hypothesen-Tests sind das formale Gerüst, um zu entscheiden, ob ein beobachteter Unterschied zwischen zwei Gruppen zufällig sein könnte oder auf einem echten Effekt beruht. Die Nullhypothese (H0) behauptet: kein Effekt. Der p-Wert sagt: wie wahrscheinlich wäre dieses Ergebnis, wenn H0 wahr wäre? Der p-Wert ist KEIN Maß für die Wahrscheinlichkeit, dass der Effekt real ist.

## Im Detail

**Das Grundgerüst:**

- **H0 (Nullhypothese):** Es gibt keinen Effekt / keinen Unterschied zwischen A und B.
- **H1 (Alternativhypothese):** Es gibt einen Effekt / Variante B ist besser als A.
- **α (Signifikanzniveau):** Wie oft akzeptierst du einen false positive? Typisch: 0.05.
- **p-Wert:** Wahrscheinlichkeit, dieses Ergebnis oder ein extremeres zu sehen, wenn H0 wahr wäre.

**Entscheidungsregeln:**

```
p < α → H0 ablehnen → "statistisch signifikant"
p ≥ α → H0 nicht ablehnen → "kein signifikanter Unterschied"
```

**Fehlertypen:**

| | H0 ist wahr | H0 ist falsch |
|--|--|--|
| H0 ablehnen | **Typ-I-Fehler** (false positive, Rate = α) | Richtige Entscheidung (Power = 1-β) |
| H0 nicht ablehnen | Richtige Entscheidung | **Typ-II-Fehler** (false negative, Rate = β) |

**Was der p-Wert NICHT bedeutet:**

- ❌ "Die Wahrscheinlichkeit, dass H0 wahr ist, beträgt p"
- ❌ "Die Wahrscheinlichkeit, dass das Ergebnis durch Zufall entstand, beträgt p"
- ✅ "Wenn H0 wahr wäre, würden wir dieses Ergebnis in p% der Fälle sehen"

**Einseitiger vs. zweiseitiger Test:**

- **Zweiseitig:** "Ist B anders als A (besser oder schlechter)?" — Standard.
- **Einseitig:** "Ist B besser als A?" — nur wenn du vorab sicher bist, dass ein Schlechterwerden nicht interessiert.
- Achtung: einseitiger Test hat kleineren p-Wert → verlockend, aber meist nicht gerechtfertigt.

**Praktisches Beispiel:**
```python
from scipy import stats
import numpy as np

# Conversion Rates von A/B-Test
# A: 1000 Nutzer, 100 Conversions (10%)
# B: 1000 Nutzer, 120 Conversions (12%)

n_A, conv_A = 1000, 100
n_B, conv_B = 1000, 120

# Chi-Square-Test für Anteile
contingency_table = [[conv_A, n_A - conv_A],
                     [conv_B, n_B - conv_B]]
chi2, p_value, dof, expected = stats.chi2_contingency(contingency_table)

print(f"Chi²: {chi2:.3f}")
print(f"p-Wert: {p_value:.4f}")
print(f"Signifikant bei α=0.05: {p_value < 0.05}")
# Relative Verbesserung
lift = (conv_B/n_B - conv_A/n_A) / (conv_A/n_A) * 100
print(f"Relativer Lift: {lift:.1f}%")
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎥 Video | [StatQuest — Hypothesis Testing](https://www.youtube.com/watch?v=0oc49DyA3hU) | Beste intuitive Erklärung |
| 📖 Artikel | [ASA Statement on p-Values](https://www.tandfonline.com/doi/full/10.1080/00031305.2016.1154108) | Offizielles Statement zur p-Wert-Nutzung |

## Teste dein Verständnis

- [ ] Was ist der Typ-I-Fehler und welchem Parameter entspricht seine Rate?
- [ ] p = 0.03 bei α = 0.05: Was sagst du — in einer Satz?
- [ ] Warum ist "p = 0.05 bedeutet 95% Wahrscheinlichkeit, dass der Effekt real ist" falsch?
- [ ] Wann ist ein einseitiger Test gerechtfertigt und was ist das Risiko dabei?
