---
title: "Fine-Tuning-Stufen"
module: "10.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Fine-Tuning-Stufen

## Kernidee

"Fine-Tuning" ist ein Überbegriff für vier verschiedene Trainings-Phasen, die aufeinander aufbauen. Pre-Training macht heute fast niemand mehr selbst. SFT und Preference Tuning sind der 2026-Standard. Wer die Stufen kennt, versteht, wo er in der Fine-Tuning-Pipeline ansetzt.

## Im Detail

**Die vier Fine-Tuning-Stufen:**

**1. Pre-Training**
- Modell von Grund auf auf riesigem Textkorpus trainieren.
- Macht heute fast ausschließlich Foundation-Provider (Meta, Google, Anthropic, Mistral).
- Kosten: Millionen Euro/Dollar. Für Einzelpersonen und die meisten Unternehmen nicht relevant.

**2. Continued Pre-Training**
- Foundation-Modell auf weiteren, domain-spezifischen Daten weitertrainieren.
- Beispiel: Llama 4 auf 100GB medizinischen Texten weitertrainieren, um Domänen-Vokabular zu stärken.
- Selten notwendig — SFT + Preference Tuning reichen für die meisten Use-Cases.

**3. Supervised Fine-Tuning (SFT)**
- Auf (Prompt, Completion)-Paaren trainieren — Modell lernt "bei dieser Eingabe soll das die Ausgabe sein".
- Klassische Fine-Tuning-Variante, Pflicht-Vorlauf vor Preference Tuning.
- Datenmenge: 500-10.000 Pairs typisch; Qualität wichtiger als Quantität.

**4. Preference Tuning** (RLHF / DPO / ORPO / GRPO)
- Modell auf menschliche Präferenzen ausrichten: "dieser Output ist besser als jener".
- 2026-Standard: DPO oder ORPO statt klassischem RLHF (komplexer, instabiler).
- Datenmenge: 200-5.000 Preference-Pairs typisch.

**Typischer Ablauf 2026:** SFT auf Task-spezifischen Daten → Preference Tuning mit DPO/ORPO auf Qualitäts-Pairs.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Hugging Face — TRL SFT Trainer](https://huggingface.co/docs/trl/sft_trainer) | Implementierungs-Referenz |

## Teste dein Verständnis

- [ ] Welche vier Fine-Tuning-Stufen gibt es?
- [ ] Welche Stufe ist für Einzelpersonen/Unternehmen praktisch nie relevant?
- [ ] In welcher Reihenfolge werden SFT und Preference Tuning typischerweise kombiniert?
