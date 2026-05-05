---
title: "Eval von Reasoning-Modellen"
module: "7.5"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Eval von Reasoning-Modellen

## Kernidee

Eval von Reasoning-Modellen unterscheidet sich von Standard-LLM-Eval: nicht nur der finale Output zählt, sondern auch die Trajectory der Thinking-Tokens. Verifier-basierte Eval (PRM/ORM) ist der State-of-the-Art für automatisierte Reasoning-Eval.

## Im Detail

**Warum Standard-LLM-Eval nicht ausreicht:**

Bei Standard-LLMs wird typisch bewertet: ist die Antwort korrekt? Bei Reasoning-Modellen gibt es zusätzliche Dimensionen:
- **Process Quality:** War der Weg zur Antwort korrekt?
- **Efficiency:** Wie viele Thinking-Tokens für wie viel Qualität?
- **Robustheit:** Ist die Antwort konsistent über verschiedene Runs?

**Benchmark-Eval für Reasoning-Modelle:**

- **AIME (American Invitational Mathematics Examination)** — Standardbenchmark für mathematisches Reasoning.
- **MATH (Hendrycks)** — 12.500 Mathematikaufgaben, 5 Schwierigkeitsstufen.
- **GSM8K** — 8.500 Grundschul-Mathematik-Aufgaben (einfacher, guter Einstieg).
- **SWE-Bench** — Software-Engineering-Aufgaben (Bug Fixes in realen Repos).
- **GPQA Diamond** — PhD-Niveau Wissenschaftsfragen.

**Verifier-basierte Eval (ORM/PRM):**

```
Input → Reasoning-Modell → Output + Thinking-Tokens
                                ↓
                         Verifier (ORM/PRM) → Qualitäts-Score
```

- **ORM** — bewertet nur die finale Antwort (richtig/falsch, Faktentreue).
- **PRM** — bewertet jeden Reasoning-Schritt. Aufwändiger, aber genauer bei komplexen Tasks.

**Trajectory-Eval (für 🧮 + 🔧):**

Analyse der Thinking-Tokens selbst:
1. Anteil Wiederholungen (Overthinking-Proxy).
2. Korrektheit der Zwischenschlüsse.
3. Kritische Schritt-Identifikation: Wo war der entscheidende Fehler/Erfolg?

**Praktische Eval-Pipeline (Mini):**

```python
results = []
for test_case in eval_set:
    response = client.messages.create(
        model="claude-opus-4-7",
        thinking={"type": "enabled", "budget_tokens": 8000},
        ...
    )
    thinking_tokens = sum(1 for b in response.content if b.type == "thinking")
    answer_correct = verify_answer(response.content, test_case.expected)
    results.append({"correct": answer_correct, "thinking_tokens": thinking_tokens})
```

**Brücke zu Modul 6.2 (Trajectory-Eval) und Querschnitt 13.**

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Let's Verify Step by Step (PRM, OpenAI)](https://arxiv.org/abs/2305.20050) | PRM-Eval für Reasoning |
| 🌐 Benchmark | [MATH Benchmark](https://github.com/hendrycks/math) | Standard-Reasoning-Benchmark |
| 🌐 Benchmark | [SWE-Bench](https://www.swebench.com) | Code-Reasoning-Benchmark |

## Teste dein Verständnis

- [ ] Warum reicht "Antwort richtig oder falsch?" als Eval für Reasoning-Modelle nicht aus?
- [ ] Was ist der Unterschied zwischen ORM- und PRM-Eval?
- [ ] Welche zwei Standard-Benchmarks nutzt du für mathematisches Reasoning?
- [ ] Wie implementierst du eine einfache Eval-Pipeline, die Thinking-Token-Count erfasst?
