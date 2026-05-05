---
title: "POMDPs — Partial Observability"
module: "6.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# POMDPs — Partial Observability

## Kernidee

In der realen Welt sieht ein Agent nie den vollen Zustand der Welt — er sieht Beobachtungen, die den Zustand unvollständig widerspiegeln. Ein POMDP (Partially Observable MDP) erweitert das MDP-Modell um diese Realität: der Agent verwaltet einen Belief-State, eine Wahrscheinlichkeitsverteilung über mögliche Zustände, und handelt auf Basis dieser Schätzung.

## Im Detail

**Das Problem mit vollständiger Beobachtbarkeit:**
Standard-MDPs nehmen an, dass der Agent den aktuellen Zustand `s` direkt kennt. In der Praxis ist das selten: ein autonomes Fahrzeug sieht Sensor-Daten, nicht den "wahren" Zustand der Welt. Ein LLM-Agent sieht Tool-Outputs und User-Nachrichten, nicht den vollen Kontext der Anfrage.

**POMDP — die fünf Erweiterungen:**
1. **O — Observation Space:** was der Agent tatsächlich wahrnimmt.
2. **Z(o|s',a) — Observation Function:** Wahrscheinlichkeit, Beobachtung `o` zu erhalten, wenn der wahre Zustand `s'` ist nach Aktion `a`.
3. **b(s) — Belief State:** Verteilung über mögliche aktuelle Zustände.
4. **Belief Update:** nach jeder Beobachtung aktualisiert der Agent seinen Belief-State mit Bayes-Update.
5. **Policy über Belief-States:** die Policy bildet nicht Zustände auf Aktionen ab, sondern Belief-States.

**Computational Schwierigkeit:** POMDPs sind PSPACE-hart — exakte Lösung ist für realistische Probleme nicht berechenbar. Approximationen sind der Forschungsstand.

**Bezug zu LLM-Agenten:** LLM-Agenten operieren implizit auf einem Belief-State: sie wissen nicht sicher, was der User meint, was der Zustand der Datenbank ist, ob ein Tool-Output korrekt ist. Statt expliziter Bayes-Updates nutzen sie LLM-Reasoning als Approximation des Belief-State-Updates.

**Wann explizites POMDP relevant wird:** Robotik (Sensorrauschen), autonomes Fahren, medizinische Diagnose (unvollständige Tests), Sicherheits-kritische Agents mit expliziter Unsicherheits-Modellierung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Tutorial | [POMDP Tutorial](https://www.pomdp.org/tutorial/) | Einführung |
| 📖 Buch | [Russell & Norvig — Kapitel 4 (Teilweise Beobachtbarkeit)](https://aima.cs.berkeley.edu) | Konzeptionell |

## Teste dein Verständnis

- [ ] Was ist ein Belief-State — und warum braucht man ihn in einem POMDP?
- [ ] Nenne ein reales Szenario, in dem ein POMDP besser als ein MDP modelliert.
- [ ] Wie approximieren LLM-Agenten implizit Belief-State-Updates?
