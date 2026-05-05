---
title: "DPO, ORPO, GRPO als RLHF-Alternative"
module: "6.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# DPO, ORPO, GRPO als RLHF-Alternative

## Kernidee

RLHF ist aufwändig: Reward-Model-Training, PPO-Instabilität, KL-Penalty-Tuning. DPO (2023) zeigte, dass man Preference-Optimization direkt als Supervised-Learning formulieren kann — ohne separates Reward-Modell, ohne RL. DPO ist 2026 oft Default für Alignment-Finetuning; GRPO ist die Methode hinter DeepSeek R1's Reasoning-Fähigkeiten.

## Im Detail

**DPO — Direct Preference Optimization (2023):**
- Kernidee: das Reward-Modell kann analytisch in das LLM-Training eingebettet werden.
- Statt zwei separate Modelle (LLM + Reward-Model) trainiert DPO nur das LLM direkt auf Präferenz-Paaren.
- Loss-Funktion: erhöhe Log-Likelihood gewählter Antwort, senke Log-Likelihood abgelehnter Antwort — relativ zur Reference-Policy (SFT-Modell).
- Vorteile: einfacher zu implementieren, stabiler als PPO, kein Reward-Model-Training.
- Nachteile: schlechter bei sehr komplexen Reward-Strukturen (wo RLHF noch Vorteile hat).

**ORPO — Odds Ratio Policy Optimization (2024):**
- Vereinfacht DPO weiter: kein separates Reference-Model nötig.
- Loss: kombiniert SFT-Loss mit Preference-Ratio-Loss in einem Schritt.
- 2024-2025 populär für effizientes, ressourcenschonendes Alignment.

**GRPO — Group Relative Policy Optimization (DeepSeek, 2025):**
- Hinter DeepSeek R1 und ähnlichen Reasoning-Modellen.
- Kern: vergleiche mehrere Modell-Outputs auf denselben Prompt miteinander (Gruppe), nutze relative Rewards statt absoluter.
- Ermöglicht RL-Training auf verifizierbaren Aufgaben (Mathematik, Code) ohne menschliche Annotationen.
- Warum wichtig: zeigt, dass LLMs Reasoning durch RL lernen können, wenn die Reward-Funktion verifizierbar ist.

**Zusammenfassung 2026:**
- SFT → DPO: Standard für die meisten Alignment-Tasks.
- SFT → RLHF mit PPO: weiterhin bei komplexen, subjektiven Reward-Strukturen.
- GRPO: für Reasoning-Fähigkeiten auf verifizierbaren Aufgaben.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [DPO Paper (2023)](https://arxiv.org/abs/2305.18290) | Original DPO |
| 📖 Paper | [DeepSeek R1 Paper](https://arxiv.org/abs/2501.12948) | GRPO in der Praxis |

## Teste dein Verständnis

- [ ] Was spart DPO gegenüber RLHF — und was gibt es auf?
- [ ] Warum eignet sich GRPO besonders für Mathematik- und Code-Aufgaben?
- [ ] Wann würdest du 2026 RLHF mit PPO statt DPO wählen?
