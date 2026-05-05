---
title: "Guardrail-Metriken"
module: "8.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Guardrail-Metriken

## Kernidee

Guardrail-Metriken sind Nebenbedingungen im A/B-Test: Metriken, die sich nicht verschlechtern dürfen, selbst wenn das OEC besser wird. Ohne Guardrails kann lokale Optimierung des OEC globalen Schaden anrichten — mehr Klicks durch nervige Pop-ups, aber gleichzeitig schlechtere User-Retention und Markenschäden. Guardrails definieren den Spielraum, innerhalb dessen Optimierung erlaubt ist.

## Im Detail

**Das Problem ohne Guardrails:**

- OEC ist "Revenue per User" → Experiment zeigt +3% Verbesserung.
- Page Load Time steigt um 2 Sekunden (wegen zusätzlicher Elemente).
- Customer Support Tickets steigen um 15%.
- Langfristig verlieren wir mehr durch schlechte UX als wir kurzfristig gewinnen.

**Kategorien von Guardrail-Metriken:**

| Kategorie | Beispiele |
|-----------|----------|
| **Performance** | Page Load Time, API Response Time, Error Rate |
| **User Experience** | Bounce Rate, Session Duration, Support Tickets |
| **Business Health** | Churn Rate, NPS, Revenue pro Account |
| **Technisch** | Server Cost, Cache Hit Rate, Infrastructure Load |
| **Compliance** | Privacy Violations, GDPR Incidents |

**Praktische Implementierung:**

```python
# Experiment-Auswertungs-Framework mit OEC + Guardrails
def evaluate_experiment(control_data, treatment_data, oec, guardrails):
    """
    oec: Name der primären Metrik
    guardrails: Dict {metrik_name: max_verschlechterung}
    """
    from scipy import stats
    import numpy as np

    results = {
        'oec': {},
        'guardrails': {},
        'recommendation': 'unclear'
    }

    # OEC testen
    t_stat, p_val = stats.ttest_ind(
        treatment_data[oec], control_data[oec], equal_var=False
    )
    lift = (treatment_data[oec].mean() - control_data[oec].mean()) / control_data[oec].mean()
    results['oec'] = {'lift': lift, 'p_value': p_val, 'significant': p_val < 0.05}

    # Guardrails prüfen
    guardrail_violations = []
    for metric, max_degradation in guardrails.items():
        degradation = (treatment_data[metric].mean() - control_data[metric].mean()) / control_data[metric].mean()
        violated = degradation < -max_degradation
        results['guardrails'][metric] = {
            'degradation': degradation,
            'threshold': max_degradation,
            'violated': violated
        }
        if violated:
            guardrail_violations.append(metric)

    # Empfehlung
    if results['oec']['significant'] and results['oec']['lift'] > 0 and not guardrail_violations:
        results['recommendation'] = 'deploy'
    elif guardrail_violations:
        results['recommendation'] = f"reject — Guardrail-Verletzung: {guardrail_violations}"
    else:
        results['recommendation'] = 'reject — OEC nicht signifikant besser'

    return results

# Beispiel
guardrails = {
    'page_load_time': 0.05,  # Max 5% Verschlechterung
    'error_rate': 0.01,      # Max 1% Verschlechterung
    'support_tickets': 0.10  # Max 10% Anstieg
}
```

**Statistisches Testing für Guardrails:**

Guardrails werden typischerweise mit umgekehrter Logik getestet:
- Normaltest: "Ist B signifikant besser?" → Suche nach positiver Wirkung.
- Guardrail: "Ist B signifikant schlechter?" → Suche nach negativer Wirkung.
- Äquivalenz-Tests oder einseitige Tests mit umgekehrter Hypothese.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Trustworthy Online Controlled Experiments — Guardrails Kapitel](https://experimentguide.com) | Kohavi |
| 📖 Blog | [Kohavi — Guardrails](https://exp-platform.com) | Online-Artikel |

## Teste dein Verständnis

- [ ] Dein OEC verbessert sich um 2%, aber die Page Load Time steigt um 3 Sekunden. Was entscheidest du?
- [ ] Nenne drei Guardrail-Kategorien und je ein konkretes Beispiel.
- [ ] Wie unterscheidet sich der statistische Test für eine Guardrail-Metrik vom Test des OEC?
- [ ] Warum sind Guardrails wichtiger als das OEC für die langfristige Gesundheit eines Produkts?
