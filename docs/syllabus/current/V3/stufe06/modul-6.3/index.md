---
title: "Modul 6.3: RL & Agent-Theorie"
module: "6.3"
type: index
fast_track: false
effort: "0-50h"
---

# Modul 6.3: RL & Agent-Theorie

Dieses Modul ist **primär für 🧮**. Es liefert das theoretische Fundament für Agenten: Markov Decision Processes, Reinforcement Learning, Belief-States in POMDPs. Wer 🔧 oder 💼 ist, kann das Modul oberflächlich oder gar nicht machen — die Praxis aus 6.1 und 6.2 reicht für die meisten Engineer- und Strategist-Aufgaben.

**Aufwand:** 🔧 0-8h (optional) · 🧮 30-50h · 💼 0-4h (optional, konzeptionell)
**Voraussetzungen:** Modul 6.1, Querschnitt Math-Foundation (mindestens Probability)

## Lernziel

**Für 🧮:** Du verstehst MDPs, Bellman-Gleichungen, Q-Learning, Policy Gradients konzeptionell. Du kannst ein einfaches RL-Beispiel (CartPole, FrozenLake) implementieren.

**Für 🔧:** Du verstehst, was MDP/POMDP konzeptionell sind und wann sie für Agent-Design relevant werden.

**Für 💼:** Du verstehst, dass moderne Agenten oft *nicht* klassisches RL nutzen, sondern LLM-basiertes Reasoning. RL ist Foundations-Wissen, kein Praxis-Pflicht.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Warum Agent-Theorie?](theorie/warum-agent-theorie.md) | ⏭️ | 10min |
| 2 | [Markov Decision Process (MDP)](theorie/mdp.md) | ⏭️ | 15min |
| 3 | [Bellman-Gleichung und Value Functions](theorie/bellman-value-functions.md) | ⏭️ | 15min |
| 4 | [POMDPs — Partial Observability](theorie/pomdp.md) | ⏭️ | 15min |
| 5 | [Q-Learning und Deep Q-Networks](theorie/q-learning-dqn.md) | ⏭️ | 15min |
| 6 | [Policy Gradients (PPO, A2C)](theorie/policy-gradients.md) | ⏭️ | 15min |
| 7 | [RLHF — Reinforcement Learning from Human Feedback](theorie/rlhf.md) | ⏭️ | 10min |
| 8 | [DPO, ORPO, GRPO als RLHF-Alternative](theorie/dpo-orpo-grpo.md) | ⏭️ | 10min |
| 9 | [Spieletheorie und Multi-Agent-Theorie](theorie/spieletheorie.md) | ⏭️ | 10min |
| 10 | [LLM-Agenten vs. klassisches RL](theorie/llm-vs-klassisches-rl.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — nach Track

**Für 🧮: Vollständige RL-Implementation**
- Implementiere Q-Learning auf FrozenLake (Gymnasium-Environment).
- Implementiere DQN auf CartPole oder LunarLander.
- Implementiere einfaches PPO auf einem Gymnasium-Env.
- Vergleiche Konvergenz, Sample-Efficiency, Stabilität.
- Im Portfolio: `stufe-6_agenten/6-3-rl-implementation/`.

**Für 🔧 (optional): MDP-Bewusstsein für Agent-Design**
- Nimm einen Agent aus 6.2 und modelliere ihn formal als MDP/POMDP: was ist der State, die Action, die Transition? Dokumentiere als Markdown.
- Reflektion: wo könnte klassisches RL vs. LLM-Reasoning besser sein?
- Im Portfolio: `stufe-6_agenten/6-3-mdp-modeling/`.

**Für 💼 (optional): Konzeptionelles Briefing**
- Schreibe ein 2-Pager-Briefing für Stakeholder: "Wie funktioniert moderne KI-Agent-Theorie, was ist RL, was ist neu mit LLMs?"

## 🎁 Mehrwert-Mini-Projekte

- **Eigener Mini-Agent für Game** — z.B. Tic-Tac-Toe oder Connect Four mit Q-Learning. Visualisiert Lernprozess.
- **Theorie-Notizen-Cheatsheet** — eigene Markdown-Notizen zu MDP/POMDP/RL-Algorithmen, mit Diagrammen.

## 🌱 Open-Source-Pfad

- [Gymnasium](https://gymnasium.farama.org) (OSS, ehemals OpenAI Gym) — Standard-Environment-Library.
- [CleanRL](https://github.com/vwxyzjn/cleanrl) — referenz-saubere Implementierungen aller wichtigen RL-Algorithmen.
- [Stable-Baselines3](https://stable-baselines3.readthedocs.io) — production-ready RL-Library.

## Outcome-Check

**🧮:**
- [ ] Q-Learning, DQN, PPO implementiert (oder zwei davon)
- [ ] Vergleichs-Studie mit Konvergenz-Plots
- [ ] Theorie-Notizen mit eigenen Worten

**🔧:**
- [ ] Mindestens ein Agent aus 6.2 als MDP modelliert
- [ ] Reflektion zu RL vs. LLM-Reasoning

**💼:**
- [ ] Konzeptionelles 2-Pager-Briefing
- [ ] Verständnis der wichtigsten Begriffe (MDP, RL, RLHF, DPO)
