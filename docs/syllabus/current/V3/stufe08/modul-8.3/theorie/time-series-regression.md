---
title: "Time Series Regression"
module: "8.3"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Time Series Regression

## Kernidee

Zeitreihen-Daten verletzen eine grundlegende Annahme der meisten ML-Modelle: Beobachtungen sind nicht unabhängig voneinander. Der Wert von gestern beeinflusst den Wert von heute. Klassische Methoden wie ARIMA modellieren diese Abhängigkeit explizit; moderne Ansätze wie LightGBM mit Time-Features oder Prophet behandeln Zeitreihen als Feature-Engineering-Problem.

## Im Detail

**Das Kernproblem: Temporal Leakage**

Bei Zeitreihen-Daten darfst du NICHT zufällig in Train/Test aufteilen — zukünftige Daten würden ins Training laufen. Stattdessen: **TimeSeriesSplit**.

```python
from sklearn.model_selection import TimeSeriesSplit
import numpy as np

tscv = TimeSeriesSplit(n_splits=5)
for fold, (train_idx, val_idx) in enumerate(tscv.split(X)):
    X_train_fold, X_val_fold = X.iloc[train_idx], X.iloc[val_idx]
    y_train_fold, y_val_fold = y.iloc[train_idx], y.iloc[val_idx]
    # Training...
```

**Klassische Methoden:**

**ARIMA (AutoRegressive Integrated Moving Average):**
- Modelliert Zeitreihe als Funktion ihrer vergangenen Werte (AR) und vergangener Fehler (MA).
- I = Differenzierung, um Stationarität herzustellen.
- Gut für univariate Zeitreihen ohne externe Features.
```python
from statsmodels.tsa.arima.model import ARIMA
model = ARIMA(y_train, order=(1, 1, 1)).fit()
forecast = model.forecast(steps=30)
```

**Prophet (Facebook/Meta):**
- Zerlegt Zeitreihe in Trend + Saisonalität + Holidays.
- Sehr robust bei fehlenden Daten und Outliers.
- Einfache API, gut für Business-Nutzer.
```python
from prophet import Prophet
df = pd.DataFrame({'ds': dates, 'y': values})
model = Prophet(yearly_seasonality=True)
model.fit(df)
future = model.make_future_dataframe(periods=90)
forecast = model.predict(future)
model.plot(forecast)
```

**Modernes Approach: LightGBM mit Time-Features:**

Statt explizite Zeitreihen-Modellierung: zeitliche Informationen als Features extrahieren und mit Boosting modellieren.

```python
import pandas as pd
import lightgbm as lgb

def create_time_features(df, date_col='date'):
    df = df.copy()
    df['year']          = df[date_col].dt.year
    df['month']         = df[date_col].dt.month
    df['day_of_week']   = df[date_col].dt.dayofweek
    df['day_of_year']   = df[date_col].dt.dayofyear
    df['week_of_year']  = df[date_col].dt.isocalendar().week.astype(int)
    df['quarter']       = df[date_col].dt.quarter
    df['is_weekend']    = (df[date_col].dt.dayofweek >= 5).astype(int)
    return df

def create_lag_features(df, target_col, lags=[1, 7, 14, 28]):
    for lag in lags:
        df[f'lag_{lag}'] = df[target_col].shift(lag)
    return df

def create_rolling_features(df, target_col, windows=[7, 14, 28]):
    for window in windows:
        df[f'rolling_mean_{window}'] = df[target_col].rolling(window).mean()
        df[f'rolling_std_{window}']  = df[target_col].rolling(window).std()
    return df
```

**Neuere Libraries (2024-2026):**

- **NeuralProphet:** Prophet + Neural Networks, für komplexere Patterns.
- **Darts:** einheitliche API für viele Time-Series-Modelle (ARIMA, Prophet, Transformers).
- **Nixtla/TimeGPT:** Foundation Model für Zeitreihen-Vorhersage (ähnlich wie TabPFN).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎓 Kurs | [Kaggle — Time Series](https://www.kaggle.com/learn/time-series) | Praktischer Einstieg |
| 📖 Docs | [Prophet Documentation](https://facebook.github.io/prophet/) | Meta-Bibliothek |
| 📖 Docs | [Darts Library](https://unit8co.github.io/darts/) | Einheitliche API |
| 📖 Docs | [statsmodels ARIMA](https://www.statsmodels.org/stable/tsa.html) | Klassische Methoden |

## Teste dein Verständnis

- [ ] Warum darf man Zeitreihen-Daten nicht zufällig in Train/Test aufteilen?
- [ ] Was ist ein Lag-Feature und warum ist es nützlich für Zeitreihen-Vorhersage?
- [ ] Wann nimmst du Prophet statt LightGBM für Zeitreihen?
- [ ] Was bedeutet "Stationarität" und warum ist sie wichtig für ARIMA?
