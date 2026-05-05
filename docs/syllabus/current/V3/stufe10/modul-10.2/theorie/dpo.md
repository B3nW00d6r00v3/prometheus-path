---
title: "DPO — Direct Preference Optimization"
module: "10.2"
type: theorie
fast_track: false
effort: "15min"
stability: yellow
---

# DPO — Direct Preference Optimization

## Kernidee

DPO (2023) hat RLHF als Standard für Preference Tuning abgelöst, weil es denselben Effekt ohne ein separates Reward-Modell und ohne instabiles PPO-Training erreicht. Statt eines komplexen, dreistufigen RLHF-Prozesses optimiert DPO direkt aus Präferenz-Paaren — einfacher, stabiler, oft bessere Ergebnisse.

## Im Detail

**Das Problem mit klassischem RLHF:**
1. SFT auf Demonstrations-Daten
2. Trainiere ein separates Reward-Modell auf Präferenz-Pairs
3. RL-Training mit PPO, bis Modell das Reward-Modell maximiert

Probleme: PPO ist instabil, Reward-Modell kann "gamed" werden (Reward Hacking), sehr viel Compute.

**Wie DPO funktioniert:**
- Datensatz: `(Prompt, Chosen Response, Rejected Response)` — Paare mit Gewinner und Verlierer
- DPO reformuliert das RLHF-Optimierungsproblem mathematisch so um, dass kein separates Reward-Modell nötig ist
- Training direkt auf dem Policy-Modell mit einem einzigen Loss-Term
- Ergebnis: Modell bevorzugt `chosen` über `rejected` — ohne Reward-Modell

**Wann DPO vs. ORPO:**
- DPO braucht vorher SFT (separate Phase)
- ORPO kombiniert SFT und Preference Tuning in einem Schritt (Modul ORPO)
- DPO ist besser wenn SFT-Daten und Preference-Daten klar getrennt sind

*Verfallsdatum: Aug 2026 — weitere Preference-Methoden könnten DPO ablösen.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [DPO Paper (Rafailov et al. 2023)](https://arxiv.org/abs/2305.18290) | Originalarbeit |
| 📖 Docs | [TRL DPO Trainer](https://huggingface.co/docs/trl/dpo_trainer) | Implementierung |
| 📊 Dataset | [UltraFeedback](https://huggingface.co/datasets/openbmb/UltraFeedback) | Standard-DPO-Datensatz |

## Teste dein Verständnis

- [ ] Warum wurde DPO entwickelt — was sind die Probleme von klassischem RLHF?
- [ ] Welches Daten-Format braucht DPO?
- [ ] Wann bevorzugst du DPO, wann ORPO?
