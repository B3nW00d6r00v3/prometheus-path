---
title: "Policy Gradients (PPO, A2C)"
module: "6.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Policy Gradients (PPO, A2C)

## Kernidee

Policy Gradients lernen die Policy direkt — also die Abbildung von Zustand auf Aktion — statt den Wert von Zuständen. Der Gradient des erwarteten Returns bezüglich der Policy-Parameter wird berechnet und die Policy direkt optimiert. PPO ist seit 2017 das RL-Workhorse und wird auch in RLHF für LLM-Training eingesetzt.

## Im Detail

**Warum Policy Gradients statt Q-Learning?**
- Q-Learning ist für diskrete Aktionen gut — für kontinuierliche Aktionsräume (Robotergelenk-Winkel) ist Q-Learning schwierig.
- Policy Gradients können direkt kontinuierliche Aktionen lernen.
- Q-Learning lernt deterministisch; Policy Gradients können stochastische Policies lernen (sinnvoll in Partial-Observable-Settings).

**REINFORCE — der einfachste Policy Gradient Algorithmus:**
```
∇J(θ) = E[∇_θ log π_θ(a|s) · G_t]
```
- `π_θ(a|s)`: Wahrscheinlichkeit der Policy θ, Aktion `a` in Zustand `s` zu wählen.
- `G_t`: kumulative Belohnung ab Zeitpunkt t (Return).
- Intuition: mache Aktionen wahrscheinlicher, die zu hohen Returns geführt haben.

**Problem: hohe Varianz.** REINFORCE ist instabil, weil ein einzelner Return-Wert sehr rauschen kann.

**Lösung: Actor-Critic (A2C):**
- **Actor:** lernende Policy (wie REINFORCE).
- **Critic:** lernende Value Function, die den "Baseline-Return" schätzt.
- Advantage: `A(s,a) = Q(s,a) - V(s)` — wie viel besser ist Aktion `a` als der Durchschnitt?
- A2C reduziert Varianz erheblich durch Baseline-Subtraktion.

**PPO — Proximal Policy Optimization (2017):**
- Erweitert A2C mit einem "Clip"-Mechanismus, der zu große Policy-Updates verhindert.
- Sicher: verhindert, dass die Policy in eine schlechte Region springt.
- Einfach und robust: deshalb seit 2017 Standard.
- Einsatz in RLHF: SFT-Modell → Reward-Model-Training → PPO-Finetuning gegen Reward-Model.

**A2C vs. PPO in der Praxis:**
- A2C: gut für parallele Environments (synchrone Worker).
- PPO: robuster, stabiler, für die meisten Anwendungen bevorzugt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [PPO Paper (2017)](https://arxiv.org/abs/1707.06347) | Original von OpenAI |
| 🎓 Kurs | [OpenAI Spinning Up](https://spinningup.openai.com) | Hervorragende PPO-Erklärung |
| 🎓 Kurs | [Hugging Face — Deep RL Course](https://huggingface.co/learn/deep-rl-course/) | Hands-on PPO |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Policy Gradient und Q-Learning auf einem Niveau?
- [ ] Erkläre den Advantage A(s,a) in eigenen Worten.
- [ ] Warum braucht PPO den Clip-Mechanismus?
