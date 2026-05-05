---
title: "OEC — Overall Evaluation Criterion"
module: "8.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# OEC — Overall Evaluation Criterion

## Kernidee

Das Overall Evaluation Criterion (OEC) ist die EINE primäre Metrik, die du im A/B-Test optimierst. Es muss VOR dem Experiment definiert werden — nicht hinterher, wenn du siehst, welche Metrik "zufällig" gut aussieht. Ein schlecht gewähltes OEC führt zu lokaler Optimierung auf Kosten des Gesamtergebnisses: mehr Klicks durch irreführende Headlines, aber weniger echte Käufe.

## Im Detail

**Warum ein OEC?**

Ohne vorab definiertes OEC passiert das:
1. Experiment startet.
2. Nach 3 Tagen schaust du auf alle 20 Metriken.
3. "Toll! Metrik 12 ist signifikant besser."
4. Du deklarierst Erfolg.

Das ist Multiple Testing (Modul 8.5.8) — bei 20 Metriken und α=0.05 erwarte eine zufällig signifikante Metrik selbst ohne echten Effekt.

**Was ist ein gutes OEC?**

| Kriterium | Frage |
|-----------|-------|
| Sensibel | Ändert sich das OEC, wenn echte Verbesserungen passieren? |
| Spezifisch | Reagiert das OEC NUR auf echte Verbesserungen, nicht auf Lärm? |
| Messbar | Ist das OEC technisch zuverlässig messbar? |
| Zeitnah | Zeigt das OEC den Effekt innerhalb der Test-Dauer? |
| Kausal | Verbessert das OEC wirklich das, was wir langfristig wollen? |

**Typische OECs:**

| Kontext | OEC |
|---------|-----|
| E-Commerce | Revenue per User |
| SaaS | 28-Tage-Retention |
| Content-Plattform | Consumed Minutes per User |
| B2B | Qualified Pipeline per Active Account |
| LLM-Eval | Human Preference Rate (Pairwise) |

**Proxy-Metriken vs. echte OEC:**

Oft ist das "echte" OEC zu langsam messbar (z.B. 12-Monats-Retention). Dann braucht man Proxy-Metriken, die mit dem echten OEC korrelieren:
- Echter Wert: Lifetime Value → Proxy: 30-Tage-Retention.
- Echter Wert: User-Zufriedenheit → Proxy: NPS-Score, Task-Completion-Rate.

**Validierung des Proxy-OEC:**

Der Proxy muss historisch mit dem echten OEC korrelieren:
```python
import pandas as pd
from scipy import stats

# Historische Experiment-Daten
proxy_improvements = [...]  # Verbesserung im Proxy-OEC pro Experiment
real_improvements  = [...]  # Langfristige Verbesserung im echten OEC

correlation, p_value = stats.pearsonr(proxy_improvements, real_improvements)
print(f"Korrelation Proxy↔Real: {correlation:.2f} (p={p_value:.4f})")
# Wenn Korrelation hoch (>0.7) und signifikant: Proxy ist valide
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Trustworthy Online Controlled Experiments — Kapitel OEC](https://experimentguide.com) | Kohavi — Standardreferenz |
| 📖 Blog | [Microsoft — OEC Concept](https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/) | Microsoft ExP |

## Teste dein Verständnis

- [ ] Warum muss das OEC VOR dem Experiment definiert werden?
- [ ] Dein OEC ist "Klick-Rate". Welche Gefahr siehst du? Welches bessere OEC würdest du vorschlagen?
- [ ] Was ist eine Proxy-Metrik und wann ist sie notwendig?
- [ ] Dein Experiment verbessert das OEC um 2%, aber die Absprungrate steigt um 15%. Was tust du?
