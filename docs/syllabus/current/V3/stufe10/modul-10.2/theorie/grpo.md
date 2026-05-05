---
title: "GRPO — Group Relative Policy Optimization"
module: "10.2"
type: theorie
fast_track: false
effort: "10min"
stability: yellow
---

# GRPO — Group Relative Policy Optimization

## Kernidee

GRPO ist DeepSeeks Beitrag zur Preference-Tuning-Landschaft, eingesetzt in DeepSeek R1 für Reasoning-Tuning. Es braucht kein Reward-Modell und ist spezialisiert darauf, Modelle auf komplexes Reasoning zu trainieren — ein Nischenanwendungsfall, aber 2026 zunehmend übernommen.

## Im Detail

**Was GRPO anders macht:**
- Klassisches RLHF und DPO optimieren relative Präferenzen (A ist besser als B)
- GRPO optimiert innerhalb einer Gruppe von Antworten auf denselben Prompt: der Durchschnitt der Gruppe ist die Baseline, individuelle Antworten werden relativ zur Gruppe bewertet
- Kein externes Reward-Modell nötig — die Reward-Funktion ist oft regelbasiert (z.B. "enthält die Antwort die richtige Lösung?")

**Wann GRPO relevant:**
- Reasoning-Tuning: Modell soll schrittweise Denken lernen (Chain-of-Thought, Math, Coding)
- Wenn du eine klare, prüfbare Korrektheitsfunktion hast (z.B. Code kompiliert und Tests bestehen, Mathe-Ergebnis ist richtig)
- Nicht ideal für subjektive Stil-Präferenzen (dafür DPO/ORPO besser)

**DeepSeek R1 als Referenz-Implementierung:**
DeepSeek R1 hat GRPO genutzt, um Reasoning-Fähigkeiten zu tunen — ohne große menschliche Annotation, durch regelbasierte Korrektheitsprüfung. Das ist der wichtigste Praxis-Beweis.

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [DeepSeek R1 Paper](https://arxiv.org/abs/2501.12948) | GRPO im Einsatz |
| 📖 Docs | [TRL GRPO Trainer](https://huggingface.co/docs/trl) | Implementierung |

## Teste dein Verständnis

- [ ] Was unterscheidet GRPO konzeptionell von DPO?
- [ ] Für welchen Anwendungsfall ist GRPO besonders geeignet?
- [ ] In welchem bekannten Modell wurde GRPO erstmalig prominent eingesetzt?
