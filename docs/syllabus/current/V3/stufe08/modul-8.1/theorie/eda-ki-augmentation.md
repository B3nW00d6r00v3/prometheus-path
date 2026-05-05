---
title: "EDA mit KI-Augmentation"
module: "8.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# EDA mit KI-Augmentation

## Kernidee

2026 ist KI-augmentierte EDA der neue Standard: statt jede Pandas-Zeile selbst zu schreiben, generierst du Code per Prompt, lässt KI erste Interpretations-Vorschläge liefern und nutzt Code Interpreter-Modi für interaktive Analyse. Die kritische Einschränkung: KI generiert auch fehlerhafte Aggregationen — das menschliche Urteil bleibt beim Interpretieren der Outputs unverzichtbar.

## Im Detail

**Pattern 1: Code-Generierung per Prompt**

```
Prompt: "Schreib mir Python-Code für eine vollständige EDA auf diesem Datensatz:
[paste df.head() und df.dtypes]
Ich möchte: Verteilungen aller numerischen Features, Korrelationsheatmap,
fehlende Werte als Tabelle, und Top-5 auffällige Beobachtungen."
```

Claude, GPT-4o und Gemini 1.5 Pro liefern hier brauchbaren Code — muss aber geprüft werden (besonders bei Aggregationen mit GroupBy und bei Zeitreihen).

**Pattern 2: Code Interpreter / Data Analyst Mode**

ChatGPT Data Analyst und Claude (mit Datei-Upload) können CSVs direkt analysieren:
- CSV hochladen → KI führt EDA durch
- Iterativ nachfragen: "Schau dir Outlier in Spalte X genauer an"
- Gut für ersten Überblick, schlecht für reproduzierbare Analyse

**Pattern 3: pandasai**

Library, die natürlichsprachige Anfragen direkt in Pandas-Code übersetzt:

```python
from pandasai import SmartDataframe

sdf = SmartDataframe(df)
sdf.chat("Was sind die Top-5 Kunden nach Umsatz in Berlin?")
```

Nützlich für explorative Fragen ohne Code-Kenntnisse. Für Production nicht geeignet.

**Pattern 4: Plotly-Code-Generierung**

Interaktive Plots per Prompt generieren lassen:
```
"Erstell mir ein interaktives Plotly-Scatter-Plot von Feature X vs. Y,
eingefärbt nach Kategorie Z, mit Hover-Info und Zoom."
```

**Kritische Warnung:**

KI-generierte EDA hat bekannte Schwachstellen:
- Falsche GroupBy-Aggregationen (z.B. sum statt mean)
- Ignorierende fehlende Werte in Berechnungen
- Halluzinierte statistische Interpretationen
- Datum/Zeit-Parsing-Fehler

**Regel:** Prüfe jede KI-generierte Berechnung gegen einen Sanity-Check (z.B. manuelle Stichprobe).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [pandasai](https://github.com/sinaptik-ai/pandas-ai) | Natural Language Pandas |
| 🛠️ Tool | [Claude — Upload & Analyze](https://claude.ai) | Code Interpreter |
| 🛠️ Tool | [ChatGPT Data Analyst](https://chat.openai.com) | Guter Einstieg |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen KI-generiertem Code und Code Interpreter?
- [ ] Nenne zwei typische Fehler bei KI-generierter EDA.
- [ ] Wofür eignet sich pandasai — und wofür nicht?
- [ ] Wie prüfst du, ob eine KI-generierte Aggregation korrekt ist?
