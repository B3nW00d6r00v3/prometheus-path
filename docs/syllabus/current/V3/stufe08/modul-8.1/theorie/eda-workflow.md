---
title: "EDA-Workflow"
module: "8.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# EDA-Workflow

## Kernidee

Exploratory Data Analysis (EDA) ist der strukturierte Prozess, einen unbekannten Datensatz zu verstehen, bevor du modellierst. 2026 beschleunigt KI diesen Prozess — sie ersetzt aber nicht das menschliche Urteil über das, was die Daten bedeuten. Der klassische Pfad ist fünfstufig: Übersicht, Verteilungen, Korrelationen, Qualität, Hypothesen.

## Im Detail

Der EDA-Workflow läuft typischerweise in dieser Reihenfolge ab:

**1. Erste Übersicht**
```python
df.shape          # Zeilen und Spalten
df.dtypes         # Datentypen
df.describe()     # Statistische Kennzahlen (mean, std, min, max, Quartile)
df.info()         # Nicht-null-Counts und Speicher
df.head(10)       # Erste Zeilen anschauen
```

**2. Verteilungen pro Variable visualisieren**
- Numerisch: Histogramme, Box-Plots, KDE-Plots
- Kategorisch: Bar-Charts, Value-Counts
- Ziel: Ausreißer, Schiefe, Multi-Modalität erkennen

**3. Korrelationen erkunden**
- Heatmap der Korrelations-Matrix (Pearson für numerische Features)
- Scatter-Plots für interessante Paare
- Vorsicht: Korrelation ≠ Kausalität

**4. Fehlende Werte und Outliers identifizieren**
- `df.isnull().sum()` — wie viele fehlende Werte pro Spalte?
- Muster: sind Werte zufällig fehlend oder systematisch?
- Outliers: Z-Score oder IQR-Methode

**5. Hypothesen formulieren**
- Was vermutest du aus den Daten?
- "Ich vermute, dass Feature X mit dem Target Y korreliert, weil..."
- Hypothesen leiten die spätere Feature-Engineering-Arbeit

**Tools 2026:**
- `pandas` + `matplotlib` / `seaborn` — Standard
- `plotly` — für interaktive Plots
- Claude / ChatGPT Code Interpreter — für schnelle Code-Generierung und erste Interpretations-Vorschläge

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎓 Kurs | [Kaggle — Intermediate ML](https://www.kaggle.com/learn/intermediate-machine-learning) | Praktischer Einstieg |
| 📖 Tutorial | [Real Python — Pandas Tutorials](https://realpython.com/learning-paths/pandas-data-science/) | Pandas tief lernen |
| 📖 Docs | [pandas Docs](https://pandas.pydata.org/docs/) | Referenz |
| 📖 Docs | [seaborn — Example Gallery](https://seaborn.pydata.org/examples/) | Visualisierungs-Inspiration |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum du EDA VOR dem Modellieren durchführst?
- [ ] Was zeigt `df.describe()` und was zeigt es nicht?
- [ ] Warum ist "Korrelation ≠ Kausalität" bei EDA besonders wichtig?
- [ ] Wie erkennst du, ob fehlende Werte zufällig oder systematisch fehlen?
