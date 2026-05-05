---
title: "Q-Learning und Deep Q-Networks (DQN)"
module: "6.3"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Q-Learning und Deep Q-Networks (DQN)

## Kernidee

Q-Learning ist ein model-freier RL-Algorithmus: der Agent lernt Q-Werte (wie gut ist Aktion `a` in Zustand `s`) durch Trial-and-Error, ohne die Transition-Funktion zu kennen. DQN erweitert das mit einem Neural Network als Q-Funktion-Approximator — das ermöglicht RL auf hochdimensionalen Inputs wie Bildpixeln.

## Im Detail

**Q-Learning — der Kern-Algorithmus:**

```python
# Q-Tabelle: Q[s][a] → geschätzter Wert
Q[s][a] += alpha * (reward + gamma * max(Q[s_next]) - Q[s][a])
```

- `alpha` (Lernrate): wie schnell überschreibt neue Information alte Schätzung.
- `reward`: erhaltene Belohnung nach Aktion `a`.
- `gamma * max(Q[s_next])`: abgezinster bester Wert des Folgezustands.
- Das Update minimiert den "Temporal Difference Error" — Differenz zwischen geschätztem und tatsächlichem Wert.

**Exploration vs. Exploitation (ε-greedy):**
- Mit Wahrscheinlichkeit ε: zufällige Aktion wählen (Exploration).
- Sonst: beste bekannte Aktion wählen (Exploitation).
- ε beginnt hoch (viel Exploration), sinkt über Zeit.

**Problem mit großem State Space:** Q-Learning braucht eine Tabelle der Größe |S| × |A|. Bei Bildern als Input: Millionen von Zuständen — nicht tabellarisch darstellbar.

**Deep Q-Network (DQN) — Lösung:**
- Neural Network approximiert Q(s, a) für alle Aktionen gleichzeitig.
- Input: State (z.B. 4 Atari-Screenshots als Stack).
- Output: Q-Wert für jede mögliche Aktion.
- Training: Minimize MSE zwischen Predicted Q und Target Q.

**DQN Tricks (DeepMind 2015):**
1. **Experience Replay:** Erfahrungen in Buffer speichern, zufällig samplen → bricht Korrelation zwischen aufeinanderfolgenden Samples.
2. **Target Network:** separates "stabiles" Netz für Target-Berechnung, aktualisiert alle N Steps → stabileres Training.

**Atari-Durchbruch 2013-2015:** DQN lernte >40 Atari-Spiele auf Menschenniveau von rohen Pixeln — Meilenstein in KI-Geschichte.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [DQN Paper (Nature 2015)](https://www.nature.com/articles/nature14236) | Original |
| 🎓 Kurs | [Hugging Face — Q-Learning Unit 2](https://huggingface.co/learn/deep-rl-course/unit2/introduction) | Hands-on mit FrozenLake |

## Teste dein Verständnis

- [ ] Erkläre den Q-Learning Update-Schritt in eigenen Worten.
- [ ] Warum braucht DQN ein Target Network — was wäre das Problem ohne?
- [ ] Implementiere Q-Learning auf FrozenLake in 50 Zeilen Python.
