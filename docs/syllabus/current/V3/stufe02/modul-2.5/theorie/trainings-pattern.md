---
title: "Trainings-Pattern auf hoher Ebene"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Trainings-Pattern auf hoher Ebene

## Kernidee

Reasoning-Modelle entstehen nicht durch "mehr Daten" oder "groesseres Modell". Sie werden mit speziellen Trainingsmethoden beigebracht, den Denkprozess selbst zu optimieren. Es ist wie der Unterschied zwischen einem Schueler, der Fakten auswendig lernt (Standard-LLM), und einem, der lernt, *wie man lernt* (Reasoning-Modell). Vertiefung in Modul 7.5.

## Im Detail

Reasoning-Modelle entstehen durch spezielle Trainings-Patterns:

- **RLHF mit Reasoning-Reward:** Das Modell bekommt nicht nur Belohnung fuer gute Antworten, sondern fuer gute Denkprozesse.
- **GRPO (Group Relative Policy Optimization):** Von DeepSeek R1 bekannt gemacht. Vergleicht Gruppen von Antworten relativ zueinander statt gegen ein festes Reward-Modell.
- **Process-Reward-Models (PRM):** Belohnen jeden einzelnen Reasoning-Schritt, nicht nur das Endergebnis.
- **Outcome-Reward-Models (ORM):** Belohnen nur das Endergebnis -- einfacher, aber weniger granular.

**Hier reicht:** Du weisst, dass es eigene Trainings-Patterns sind, nicht "Standard-LLM mit besserem Prompt". Die technische Tiefe kommt in Modul 7.5.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [DeepSeek R1 Paper](https://arxiv.org/abs/2401.12954) | GRPO im Detail |
| :book: | [OpenAI — Learning to Reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/) | Hintergrund zu Reasoning-Training |

## Teste dein Verstaendnis

- [ ] Kannst du den Unterschied zwischen PRM und ORM in einem Satz erklaeren?
- [ ] Verstehst du, warum Reasoning-Modelle anders trainiert werden als Standard-LLMs?
