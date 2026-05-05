---
title: "Modul 8.5: A/B-Testing & Causal Inference"
module: "8.5"
type: index
fast_track: true
effort: "4-8h"
---

# Modul 8.5: A/B-Testing & Causal Inference

Für 🧮 ist dieses Modul **Pflicht-Vorbedingung für Stufe 7** und sollte bereits absolviert sein. Eval-Querschnitt-Anker: Hypothesen-Tests, Power Analysis und Multiple-Testing-Korrektur sind Foundation für seriöses A/B-Testing in jedem KI-Kontext — Prompt-A/B (Modul 5.0/5.4), Production-Eval-as-CI (Querschnitt Production), Online-Experimentation auf User-Engagement.

Statistik ist 2026 nicht obsolet — sie ist die Foundation für ehrliche Eval. Ohne Statistik weißt du nicht, ob deine "Verbesserung" wirklich besser ist oder nur Rauschen. **Wer LLMs und Modelle ohne Statistik bewertet, betreibt Theater.**

**Aufwand:** 🔧 4-8h · 🧮 18-25h · 💼 4-8h
**Voraussetzungen:** Querschnitt Math-Foundation (Probability + Statistik), Querschnitt Eval

## Lernziel

Du verstehst Hypothesen-Tests, Sample-Size-Berechnung, Multiple-Testing-Korrektur und kannst einen A/B-Test sauber durchführen — auch in einem KI-Kontext (z.B. Prompt-A/B-Test mit LLM-Outputs).

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Wann ist Experimentation sinnvoll?](theorie/experimentation-wann.md) | ✅ | 10min |
| 2 | [Hypothesen-Tests: Null- und Alternativ-Hypothese](theorie/hypothesen-tests.md) | ✅ | 20min |
| 3 | [t-Test, Chi-Square, Mann-Whitney](theorie/statistische-tests.md) | ✅ | 20min |
| 4 | [Konfidenzintervalle](theorie/konfidenzintervalle.md) | ✅ | 15min |
| 5 | [Sample-Size-Berechnung (Power Analysis)](theorie/power-analysis.md) | ✅ | 20min |
| 6 | [OEC — Overall Evaluation Criterion](theorie/oec.md) | ✅ | 10min |
| 7 | [Guardrail-Metriken](theorie/guardrails.md) | ✅ | 10min |
| 8 | [Multiple-Testing-Problem](theorie/multiple-testing.md) | ✅ | 15min |
| 9 | [Sequential Testing und Stopping Rules](theorie/sequential-testing.md) | ⏭️ | 15min |
| 10 | [Bayesian A/B-Testing](theorie/bayesian-ab-testing.md) | ⏭️ | 20min |
| 11 | [Segment-Analyse](theorie/segment-analyse.md) | ✅ | 10min |
| 12 | [A/B-Testing für LLM-Outputs](theorie/llm-ab-testing.md) | ✅ | 15min |
| 13 | [Causal Inference jenseits A/B](theorie/causal-inference.md) | ⏭️ | 20min |
| 14 | [Häufige A/B-Test-Fallen](theorie/ab-test-fallen.md) | ✅ | 15min |

## Praxis: Hauptprojekt — A/B-Test designen, durchführen, analysieren

Wähle einen Use-Case:

**Option A: Prompt-A/B-Test** — zwei Versionen eines Prompts (z.B. für deine Prompt-Library aus 2.3 oder Modul 5.0) auf 50-100 Test-Inputs vergleichen. LLM-as-Judge oder eigene Bewertung. Statistische Signifikanz testen.

**Option B: RAG-Modul-A/B-Test** — zwei Varianten deines RAG-Systems aus 5.1 (z.B. unterschiedliche Embedding-Modelle oder Chunk-Sizes). RAGAS-Eval-Scores vergleichen mit statistischer Signifikanz.

**Option C: Klassisches Online-A/B** — wenn du eigene Web-App hast (aus 2.6 oder 5.5): UI-Variante A vs. B, mit Metrik (z.B. Click Rate). Wenn nicht: simulierter Datensatz.

**Anforderungen für alle:**
- **OEC und Guardrail-Metriken** vorab definieren.
- **Sample-Size berechnen** mit Power Analysis (mindestens 80% Power, α=5%, definierter Effect Size).
- **Test durchführen** und Daten erheben.
- **Statistische Tests** mit korrigiertem α bei Multiple Testing.
- **Konfidenzintervalle** statt nur p-Werte.
- **Reflexion über Limitationen**: was hast du nicht kontrolliert?
- Im Portfolio: `stufe-8_klassisches-ml/8-5-ab-test/` mit Notebook, Power-Analysis, Test-Report.

## 🎁 Mehrwert-Mini-Projekte

- **A/B-Test-Cheat-Sheet** als persönliche Referenz für Sample-Size, Tests, Korrekturen.
- **Bayesian A/B-Testing-Notebook** als Alternative zur Frequentist-Methode.

## 🌱 Open-Source-Pfad

- [scipy.stats](https://docs.scipy.org/doc/scipy/reference/stats.html) für statistische Tests.
- [statsmodels](https://www.statsmodels.org) für Regression und Power Analysis.
- [G*Power](https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower) für Power Analysis.
- [PyMC](https://www.pymc.io) für Bayesian A/B-Testing.

## Outcome-Check

- [ ] OEC und Guardrail-Metriken definiert vor Test
- [ ] Sample-Size-Berechnung mit Power Analysis
- [ ] Statistischer Test mit korrigiertem α
- [ ] Konfidenzintervalle für Effect Size
- [ ] Reflexion über Multiple Testing und Confounders
