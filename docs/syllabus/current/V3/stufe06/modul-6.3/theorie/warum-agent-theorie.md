---
title: "Warum Agent-Theorie?"
module: "6.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Warum Agent-Theorie?

## Kernidee

Die Frage "wie sollte ein rationaler Agent handeln?" wird seit den 1950ern formal untersucht. Wer die theoretischen Fundamente kennt — MDP, Decision Theory, RL — baut robustere Agenten, auch wenn der Praxis-Code in LangGraph kaum "klassische" Theorie explizit nutzt. Theorie ist das Modell, das hilft zu verstehen, warum ein Agent scheitert.

## Im Detail

**Historische Entwicklung:**
- 1950er: Bellman entwickelt Dynamic Programming und die Bellman-Gleichung als formales Werkzeug für sequentielle Entscheidungen.
- 1980er-2000er: Russell & Norvig formalisieren Agenten-Theorie in "Artificial Intelligence: A Modern Approach" — bis heute der Standard-Lehrbuch.
- 2013-2015: Deep Q-Networks (DQN) verbinden Neural Networks mit RL — Atari-Durchbruch.
- 2017: PPO wird RL-Workhorse, auch für RLHF.
- 2022+: LLM-Agenten (ReAct, AutoGen) ersetzen klassisches RL in vielen Anwendungsfeldern — aber RLHF-Training der LLMs selbst ist weiterhin RL.

**Warum Theorie trotzdem relevant bleibt:**
- MDP-Denken hilft beim Design: wenn du einen Agent modellierst, ist das implizit ein MDP. Explizites Modellieren macht Schwächen sichtbar.
- RLHF ist RL — wer verstehen will, wie ChatGPT und Claude trainiert wurden, muss Reinforcement Learning verstehen.
- Robotik, autonomes Fahren, Games: klassisches RL dominiert dort, wo LLM-Reasoning zu langsam oder zu unzuverlässig ist.
- Reasoning-LLMs (DeepSeek R1, o1) nutzen RL-Trainingsanteile (GRPO) — der Begriff verschmilzt.

**Für 🔧 und 💼:** Ein konzeptionelles Verständnis reicht. Ihr müsst keine RL-Algorithmen implementieren, aber ihr sollt wissen, was MDP bedeutet, wenn jemand danach fragt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Russell & Norvig — Artificial Intelligence: A Modern Approach](https://aima.cs.berkeley.edu) | Standard-Referenz (Buch) |
| 📖 Buch | [Sutton & Barto — Reinforcement Learning (kostenlos online)](http://incompleteideas.net/book/the-book.html) | Pflicht für 🧮 |

## Teste dein Verständnis

- [ ] Nenne zwei Bereiche, in denen klassisches RL LLM-Reasoning überlegen ist.
- [ ] Was ist der Unterschied zwischen einem MDP und einem POMDP in einem Satz?
- [ ] Warum ist RLHF trotz LLM-Revolution relevant?
