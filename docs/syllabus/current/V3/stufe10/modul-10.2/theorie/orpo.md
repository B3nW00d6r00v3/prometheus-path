---
title: "ORPO — Odds Ratio Preference Optimization"
module: "10.2"
type: theorie
fast_track: false
effort: "15min"
stability: yellow
---

# ORPO — Odds Ratio Preference Optimization

## Kernidee

ORPO (2024) geht einen Schritt weiter als DPO: es kombiniert SFT und Preference Tuning in einem einzigen Trainings-Schritt. Weniger Compute, einfachere Pipeline, vergleichbare Qualität zu DPO. Die Wahl zwischen DPO und ORPO ist oft pragmatisch — welche Daten hast du?

## Im Detail

**Der ORPO-Unterschied zu DPO:**
- DPO: erst SFT (separate Phase), dann DPO-Training
- ORPO: SFT und Preference Tuning simultan in einem Loss-Term

**Wie ORPO funktioniert:**
- Loss = SFT-Loss (Cross-Entropy auf `chosen`) + Odds-Ratio-Term (preferred über rejected bevorzugen)
- Der Odds-Ratio-Term misst die relative Wahrscheinlichkeit, `chosen` vs. `rejected` zu generieren
- Kein separates SFT-Training nötig

**Wann ORPO wählen:**
- Du hast Preference-Pairs mit hochwertigen `chosen`-Responses (die gleichzeitig als SFT-Daten taugen)
- Du willst die Pipeline vereinfachen und Compute sparen
- Kein separates SFT-Dataset vorhanden, aber gute Preference-Pairs

**Wann DPO wählen:**
- Du hast separate SFT-Daten (Demonstrations) und Preference-Daten
- Du willst die Fine-Tuning-Stufen klar trennen und unabhängig evaluieren
- Du hast bereits ein SFT-Modell als Ausgangspunkt

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [ORPO Paper (Hong et al. 2024)](https://arxiv.org/abs/2403.07691) | Originalarbeit |
| 📖 Docs | [TRL ORPO Trainer](https://huggingface.co/docs/trl) | Implementierung in TRL |

## Teste dein Verständnis

- [ ] Was ist der strukturelle Unterschied zwischen DPO und ORPO?
- [ ] Wann bevorzugst du ORPO über DPO?
- [ ] Was ist der Odds-Ratio-Term konzeptionell?
