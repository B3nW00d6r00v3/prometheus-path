---
title: "Segment-Analyse"
module: "8.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Segment-Analyse

## Kernidee

Ein Gesamtergebnis kann täuschen: ein Experiment zeigt +2% Conversion im Durchschnitt, aber für Mobile-User -5% und für Desktop-User +8%. Ohne Segment-Analyse rollst du eine Änderung aus, die für die Hälfte deiner User schlechter ist. Segment-Analyse ist Pflicht vor jedem Roll-out — aber sie birgt auch Multiple-Testing-Risiken, wenn viele Segmente ohne Korrektur analysiert werden.

## Im Detail

**Typische Analyse-Segmente:**

| Dimension | Beispiel-Segmente |
|-----------|-------------------|
| Gerät | Mobile vs. Desktop vs. Tablet |
| User-Reife | Neue User (<7 Tage) vs. Bestehende |
| Region | DE vs. AT vs. CH (oder kontinental) |
| Nutzungsintensität | Heavy Users vs. Light Users |
| Acquisition Channel | Organisch vs. Paid vs. Direct |
| Feature-Nutzung | Nutzt Feature X vs. nutzt es nicht |

**Implementierung:**
```python
import pandas as pd
from scipy import stats

def segment_analysis(df, treatment_col, outcome_col, segment_col, alpha=0.05):
    """
    Analysiert Experiment-Ergebnis pro Segment.
    df: DataFrame mit Treatment, Outcome und Segment-Spalten.
    """
    results = []
    segments = df[segment_col].unique()

    for segment in segments:
        seg_df = df[df[segment_col] == segment]
        control = seg_df[seg_df[treatment_col] == 0][outcome_col]
        treatment = seg_df[seg_df[treatment_col] == 1][outcome_col]

        t_stat, p_val = stats.ttest_ind(control, treatment, equal_var=False)
        lift = (treatment.mean() - control.mean()) / control.mean()

        results.append({
            'Segment': segment,
            'n_Control': len(control),
            'n_Treatment': len(treatment),
            'Lift': f"{lift:.1%}",
            'p-Wert': f"{p_val:.4f}",
            'Signifikant': '✅' if p_val < alpha else '❌'
        })

    results_df = pd.DataFrame(results)
    print(results_df.to_string(index=False))
    return results_df

# Aufruf
segment_analysis(experiment_df, 'treatment', 'revenue', 'device_type')
```

**Multiple-Testing bei Segmenten:**

5 Segmente + 3 Metriken = 15 Tests → Bonferroni oder Holm-Korrektur notwendig.

```python
from statsmodels.stats.multitest import multipletests

p_values = [...]  # p-Werte aller Segment-Metriken-Kombinationen
reject, p_corrected, _, _ = multipletests(p_values, method='holm', alpha=0.05)
```

**Wichtig: Hypothesengetriebene Segmentierung:**

Definiere VOR dem Experiment, welche Segmente relevant sind und warum — nicht hinterher, wenn du die Daten siehst.

- Zulässig: "Wir erwarten, dass Mobile-User anders reagieren, weil das UI hauptsächlich für Desktop optimiert ist."
- Nicht zulässig: alle 50 möglichen Segmente nach dem Test durchschauen und das signifikante verkünden.

**Interaction Effects (Heterogeneous Treatment Effects):**

```python
# Teste, ob der Effekt sich signifikant zwischen Segmenten unterscheidet
# via Interaktionsterm in Regression
import statsmodels.formula.api as smf

model = smf.ols(
    'outcome ~ treatment + device_type + treatment:device_type',
    data=experiment_df
).fit()

print(model.summary())
# Signifikanter Interaktionsterm → Effekt unterscheidet sich zwischen Segmenten
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Trustworthy Online Controlled Experiments — Segmentation Kapitel](https://experimentguide.com) | Kohavi |
| 📖 Blog | [Airbnb — Segment Analysis at Scale](https://medium.com/airbnb-engineering) | Praxis-Beispiel |

## Teste dein Verständnis

- [ ] Dein Test zeigt +3% Gesamt-Lift. Nenne zwei Gründe, warum du trotzdem Segment-Analyse machst.
- [ ] Was ist das Risiko bei post-hoc Segment-Analyse ohne Korrektur?
- [ ] Wie testest du, ob der Effekt sich signifikant zwischen Mobile und Desktop unterscheidet?
- [ ] Welche Segmente würdest du bei einem E-Commerce-Experiment vorab definieren?
