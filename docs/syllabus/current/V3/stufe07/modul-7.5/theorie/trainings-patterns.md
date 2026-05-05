---
title: "Trainings-Patterns: GRPO, PRM, ORM"
module: "7.5"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Trainings-Patterns: GRPO, PRM, ORM

## Kernidee

Reasoning-Modelle werden mit speziellen Reinforcement-Learning-Methoden trainiert, die Reasoning-Qualität belohnen. Die drei wichtigsten Ansätze sind GRPO (gruppenbasiertes RL ohne separaten Critic), PRM (Process Reward Models) und ORM (Outcome Reward Models).

## Im Detail

**RLHF mit Reasoning-Reward (klassisch):**

Klassisches RLHF (Reinforcement Learning from Human Feedback) kann auch für Reasoning genutzt werden: Menschen oder ein Reward-Modell bewertet die Qualität der Reasoning-Chains. PPO (Proximal Policy Optimization) ist der klassische RL-Algorithmus. Problem: PPO braucht einen separaten Critic (Wert-Funktion) — teuer zu trainieren.

**GRPO (Group Relative Policy Optimization):**

DeepSeek's Innovation für R1: RL ohne separaten Critic.
- Für jede Eingabe werden N Outputs sampelt (eine "Gruppe").
- Der Reward für jeden Output wird relativ zur Gruppe normiert (wie gut ist Output i im Vergleich zur Gruppe?).
- Das eliminiert den Critic-Bedarf: die Baseline ist die Gruppen-Average.
- Effizienter als PPO bei großen Modellen.
- TRL (Hugging Face) und Unsloth implementieren GRPOTrainer.

```
Input → Gruppe von N Outputs → Reward je Output → Relativer Reward → Policy-Update
```

**PRM (Process Reward Models):**

Reward wird nicht nur am Ende, sondern **pro Schritt** im Reasoning-Prozess vergeben.
- Vorteil: Modell lernt, jeden Denkschritt korrekt zu machen.
- Aufwand: braucht Schritt-für-Schritt-Annotationen (teurer).
- Wird genutzt für: Mathe-Reasoning, Code-Debugging mit Schritt-Verifikation.

**ORM (Outcome Reward Models):**

Reward wird nur am Ende der Reasoning-Chain vergeben — richtige/falsche Antwort.
- Einfacher zu implementieren (braucht keine Schritt-Annotationen).
- Modell kann zum richtigen Ergebnis durch falschen Weg kommen ("Process Hacking").
- Wird oft kombiniert mit PRM.

**Vergleich:**

| Methode | Aufwand | Qualität | Einsatz |
|---------|---------|----------|---------|
| RLHF + PPO | Hoch (Critic) | Hoch | Allgemein |
| GRPO | Mittel (kein Critic) | Hoch | DeepSeek R1 |
| PRM | Sehr hoch (Schritt-Annotationen) | Sehr hoch | Mathe, Code |
| ORM | Niedrig | Mittel | Baseline |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [DeepSeek-R1 Paper (GRPO-Sektion)](https://arxiv.org/abs/2501.12948) | GRPO-Erklärung im Original-Paper |
| 🛠️ Code | [TRL GRPOTrainer (Hugging Face)](https://huggingface.co/docs/trl/grpo_trainer) | OSS-Implementation für GRPO |
| 📄 Blog | [Let's Verify Step by Step (OAI, PRM)](https://arxiv.org/abs/2305.20050) | OpenAI's PRM-Ansatz |

## Teste dein Verständnis

- [ ] Was ist der Hauptunterschied zwischen GRPO und PPO — welches Bauteil spart GRPO?
- [ ] Wann wird ein PRM bevorzugt gegenüber einem ORM — was ist der Trade-off?
- [ ] Was ist "Process Hacking" bei ORM-Training?
- [ ] Mit welchen Tools kann man GRPO für ein kleines Modell selbst implementieren?
