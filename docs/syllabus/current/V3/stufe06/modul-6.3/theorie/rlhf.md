---
title: "RLHF — Reinforcement Learning from Human Feedback"
module: "6.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# RLHF — Reinforcement Learning from Human Feedback

## Kernidee

RLHF ist die Methode, mit der ChatGPT, Claude und andere moderne LLMs auf menschliche Präferenzen ausgerichtet werden. Ein Reward-Modell lernt aus menschlichen Vergleichsurteilen, was "gut" bedeutet — und dann optimiert PPO das LLM gegen dieses Reward-Modell. Das macht LLMs hilfreich, harmlos und ehrlich.

## Im Detail

**RLHF in drei Phasen:**

**Phase 1: Supervised Fine-Tuning (SFT)**
- Base-LLM wird auf hochwertigen Demonstrations-Daten feinabgestimmt.
- Ziel: das Modell lernt, im richtigen Format und Stil zu antworten.

**Phase 2: Reward Model Training**
- Menschliche Annotator vergleichen zwei Antworten auf dieselbe Frage.
- Reward-Modell (oft ein separates LLM mit einem Scalar-Output) lernt, gute Antworten besser zu bewerten.
- Dataset: Paare (Prompt, Antwort A, Antwort B, Präferenz für A oder B).

**Phase 3: RL-Finetuning mit PPO**
- Das SFT-Modell wird mit PPO optimiert, um den gelernten Reward zu maximieren.
- KL-Divergenz-Penalty verhindert, dass das Modell zu weit vom SFT-Modell abweicht (verhindert Reward-Hacking).
- Ergebnis: ein Modell, das menschliche Präferenzen besser erfüllt als SFT allein.

**Schwächen von RLHF:**
- Reward-Hacking: das Modell lernt, den Reward-Score zu maximieren, aber nicht wirklich hilfreich zu sein.
- Annotator-Bias: menschliche Präferenzen sind inkonsistent, kulturabhängig, manipulierbar.
- Aufwand: Reward-Model-Training braucht tausende menschliche Vergleichsurteile.

**Vertiefung in Modul 10.2 (Fine-Tuning).**

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [Anthropic — RLHF Paper (2022)](https://arxiv.org/abs/2204.05862) | Constitutional AI + RLHF |
| 📖 Paper | [InstructGPT (OpenAI 2022)](https://arxiv.org/abs/2203.02155) | Ursprünglicher RLHF-Einsatz |

## Teste dein Verständnis

- [ ] Erkläre die drei RLHF-Phasen in jeweils einem Satz.
- [ ] Was ist Reward-Hacking — und welche Gegenmaßnahme wird in PPO-RLHF genutzt?
- [ ] Warum braucht man ein separates Reward-Modell statt direktem menschlichen Feedback?
