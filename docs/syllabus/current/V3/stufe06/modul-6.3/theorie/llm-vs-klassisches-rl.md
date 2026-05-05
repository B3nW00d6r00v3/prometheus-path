---
title: "LLM-Agenten vs. klassisches RL"
module: "6.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# LLM-Agenten vs. klassisches RL

## Kernidee

LLM-Agenten (ReAct, AutoGen, LangGraph) nutzen kein klassisches RL zur Laufzeit — das LLM selbst ist die "Policy", die durch Sprachverarbeitung entscheidet. Klassisches RL bleibt stark für Robotik, Games und kontinuierliche Steuerung. 2026 verschmilzt die Grenze: Reasoning-LLMs wie DeepSeek R1 nutzen RL-Training für besseres Reasoning.

## Im Detail

**LLM-Agenten — wie sie sich von klassischem RL unterscheiden:**

| Eigenschaft | Klassisches RL | LLM-Agent |
|---|---|---|
| Policy | Neural Network (Q-Net, Actor) | LLM-Reasoning in Sprache |
| Training | Online, durch Interaktion | Offline, durch RLHF/DPO |
| State-Repr. | Vektoren, Bilder | Text, Tool-Outputs |
| Aktionsraum | Diskret/kontinuierlich, klein | Sprache, Tool-Calls (groß) |
| Sample-Eff. | Braucht millionen Schritte | Few-Shot generalisierbar |
| Erklärbarkeit | Schwach | Besser (Chain-of-Thought) |

**Wann klassisches RL besser ist:**
- **Robotik:** kontinuierliche Aktionsräume (Gelenkwinkel), schnelle Feedback-Loops (Millisekunden), physikalische Simulation.
- **Games mit vollständiger Information:** Go, Chess, Atari — bekannte Regeln, verifizierbarer Reward.
- **Optimierungsprobleme mit klarem Reward:** z.B. Chip-Design (Google AlphaChip), Protein-Faltung-Sampling.
- **Latenz-kritische Systeme:** LLM-Inference ist zu langsam für Echtzeit-Robotersteuerung.

**Wann LLM-Agenten besser sind:**
- **Offene, sprach-intensive Aufgaben:** Recherche, Coding, Dokument-Verarbeitung.
- **Few-Shot-Generalisierung:** ein LLM-Agent braucht keine Millionen Trainings-Interaktionen für neue Aufgaben.
- **Erklärbarkeit erwartet:** Chain-of-Thought macht den Entscheidungsprozess nachvollziehbar.

**2026 — die Verschmelzung:**
- DeepSeek R1 und ähnliche Modelle nutzen GRPO (RL-Training) auf verifizierbaren Aufgaben (Mathematik, Code), um Reasoning-Fähigkeiten zu verbessern. Das LLM wird durch RL besser — aber läuft zur Inferenz-Zeit nicht als RL-Agent.
- RL und LLM sind kein Widerspruch, sondern ergänzende Ebenen: RL im Training, LLM-Reasoning zur Laufzeit.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Latent Space — RL in 2026](https://www.latent.space) | Kontext-starke Einordnung |
| 📖 Paper | [DeepSeek R1](https://arxiv.org/abs/2501.12948) | GRPO für Reasoning |

## Teste dein Verständnis

- [ ] Nenne zwei Use-Cases, bei denen klassisches RL einem LLM-Agenten klar überlegen ist.
- [ ] Erkläre, wie DeepSeek R1 RL und LLM-Reasoning kombiniert.
- [ ] Was versteht man unter "RL im Training, LLM-Reasoning zur Laufzeit"?
