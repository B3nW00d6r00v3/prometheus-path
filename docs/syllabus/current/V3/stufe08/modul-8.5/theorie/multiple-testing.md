---
title: "Multiple-Testing-Problem"
module: "8.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Multiple-Testing-Problem

## Kernidee

Wenn du 20 unabhängige Tests mit α=0.05 durchführst, ist die Wahrscheinlichkeit, mindestens ein false positive zu erhalten, ca. 64% — auch wenn gar kein Effekt existiert. Das Multiple-Testing-Problem tritt immer auf, wenn mehrere Metriken gleichzeitig getestet oder mehrere Segmente analysiert werden. Lösungen: Bonferroni-Korrektur (konservativ, einfach) oder FDR-Kontrolle (moderater, empfohlen bei vielen Tests).

## Im Detail

**Das Mathematische Problem:**

```
P(mindestens ein false positive bei k Tests) = 1 - (1-α)^k

k=1:   1 - 0.95^1  = 5.0%
k=5:   1 - 0.95^5  = 22.6%
k=10:  1 - 0.95^10 = 40.1%
k=20:  1 - 0.95^20 = 64.2%
```

**Korrektur-Methoden:**

**1. Bonferroni (konservativste):**
```
α_korrigiert = α / k
```
Für k=10 Tests und α=0.05: jedes Einzel-α muss < 0.005 sein.

```python
from statsmodels.stats.multitest import multipletests
import numpy as np

# Beispiel: 10 Metriken gleichzeitig getestet
p_values = [0.01, 0.04, 0.001, 0.08, 0.03, 0.15, 0.02, 0.07, 0.06, 0.04]

# Bonferroni
reject_bonferroni, p_corrected_bonf, _, _ = multipletests(p_values, method='bonferroni', alpha=0.05)

# Holm (weniger konservativ als Bonferroni)
reject_holm, p_corrected_holm, _, _ = multipletests(p_values, method='holm', alpha=0.05)

# Benjamini-Hochberg (FDR-Kontrolle, empfohlen bei vielen Tests)
reject_bh, p_corrected_bh, _, _ = multipletests(p_values, method='fdr_bh', alpha=0.05)

for i, p in enumerate(p_values):
    print(f"Metrik {i+1}: p={p:.3f} | "
          f"Bonf: {'✅' if reject_bonferroni[i] else '❌'} | "
          f"BH:   {'✅' if reject_bh[i] else '❌'}")
```

**2. Holm (schrittweise, weniger konservativ als Bonferroni):**
Sortiere p-Werte, korrigiere schrittweise. Empfohlen über Bonferroni.

**3. Benjamini-Hochberg FDR (False Discovery Rate):**
Kontrolliert den Anteil falsch entdeckter Hypothesen, nicht die familywise error rate.
```
FDR = E[false positives / total positives]
```
Bei vielen Tests (>20) oft die beste Wahl — weniger konservativ, mehr Power.

**Wann ist Multiple Testing relevant?**

| Szenario | Multiple Testing Problem? |
|---------|--------------------------|
| Einzelnes OEC, einmalig getestet | Nein |
| 10 Metriken gleichzeitig analysiert | Ja |
| Mehrere Segmente (Mobile, Desktop, Neu, Alt) | Ja |
| Mehrere Varianten (A, B, C, D) | Ja |
| Hypothesen vorab definiert und fest | Reduziert (aber vorab dokumentieren!) |

**Eval-Querschnitt:**
Dieselbe Logik gilt für LLM-Eval: wenn du 10 verschiedene Metriken (Faithfulness, Relevance, Coverage, ...) auf demselben Eval-Set testest, und eine davon "verbessert sich", kann das Zufall sein.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Wikipedia | [Multiple Comparisons Problem](https://en.wikipedia.org/wiki/Multiple_comparisons_problem) | Übersicht |
| 📖 Docs | [statsmodels — multipletests](https://www.statsmodels.org/stable/generated/statsmodels.stats.multitest.multipletests.html) | Python-Implementierung |
| 🎥 Video | [StatQuest — FDR](https://www.youtube.com/watch?v=K8LQSvtjcEo) | FDR erklärt |

## Teste dein Verständnis

- [ ] Du testest 15 Metriken mit α=0.05. Wie hoch ist die Wahrscheinlichkeit mindestens eines false positives?
- [ ] Was ist der Unterschied zwischen Bonferroni und Benjamini-Hochberg FDR?
- [ ] Wann würdest du FDR gegenüber Bonferroni bevorzugen?
- [ ] Du hast dein Experiment mit 5 Metriken geplant und 4 davon vorab als primär definiert. Gilt das Multiple-Testing-Problem trotzdem?
