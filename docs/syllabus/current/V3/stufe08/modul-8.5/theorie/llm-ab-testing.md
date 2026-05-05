---
title: "A/B-Testing für LLM-Outputs"
module: "8.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# A/B-Testing für LLM-Outputs

## Kernidee

LLM-Outputs sind nicht-deterministisch, Output-Qualität ist oft subjektiv, und kleine Test-Sets reichen kaum für statistische Aussagen. Trotzdem brauchen wir Methoden, um seriös zu entscheiden, ob Prompt-Variante A oder B besser ist. Die drei Hauptansätze: LLM-as-Judge auf identischen Test-Inputs, Pairwise Human Eval mit Randomisierung, und Online-A/B auf User-Engagement-Metriken.

## Im Detail

**Das Kernproblem:**

LLM-Outputs unterscheiden sich von klassischen A/B-Test-Szenarien:
- Stochastisch: gleicher Prompt → anderer Output bei temperature > 0.
- Subjektiv: "Qualität" ist keine objektive Zahl.
- Teuer: viele Outputs zu generieren kostet Geld und Zeit.
- Klein: typische Eval-Sets haben 50-200 Items, nicht 10.000.

**Ansatz 1: Offline-Eval mit LLM-as-Judge**

```python
import anthropic
import json
from scipy import stats

client = anthropic.Anthropic()

def llm_judge_pairwise(test_input: str, output_A: str, output_B: str) -> int:
    """Gibt 1 zurück wenn A besser, -1 wenn B besser, 0 wenn gleich."""
    prompt = f"""
    Aufgabe: Bewerte, welcher der folgenden Outputs besser auf die Anfrage antwortet.

    Anfrage: {test_input}

    Output A: {output_A}

    Output B: {output_B}

    Antworte NUR mit einem JSON-Objekt:
    {{"winner": "A" | "B" | "tie", "reason": "kurze Begründung"}}
    """
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}]
    )
    result = json.loads(response.content[0].text)
    return 1 if result['winner'] == 'A' else (-1 if result['winner'] == 'B' else 0)

# Auf vielen Test-Inputs evaluieren
test_inputs = [...]  # 50-100 Test-Cases
results = [llm_judge_pairwise(inp, gen_output_A(inp), gen_output_B(inp))
           for inp in test_inputs]

wins_A = sum(1 for r in results if r == 1)
wins_B = sum(1 for r in results if r == -1)
ties   = sum(1 for r in results if r == 0)

print(f"A gewinnt: {wins_A}/{len(test_inputs)} ({wins_A/len(test_inputs):.1%})")
print(f"B gewinnt: {wins_B}/{len(test_inputs)} ({wins_B/len(test_inputs):.1%})")

# Statistischer Test: ist A signifikant besser als B? (ohne Ties)
decisive = [r for r in results if r != 0]
from scipy.stats import binom_test
p_value = binom_test(wins_A, n=len(decisive), p=0.5, alternative='greater')
print(f"p-Wert (A > B): {p_value:.4f}")
```

**Wichtig: Bias-Kontrolle bei LLM-as-Judge**

- **Positionsbias:** LLM-Judges bevorzugen oft den ersten oder zweiten Output — randomisiere die Reihenfolge.
- **Verbositätsbias:** längere Outputs werden oft bevorzugt — prüfe und kontrolliere.
- **Self-Enhancement-Bias:** Claude bewertet Claude-Outputs oft besser — verwende verschiedene Judge-Modelle.

```python
import random

def judge_with_debiasing(inp, output_A, output_B):
    # Randomisiere Reihenfolge
    if random.random() < 0.5:
        raw = llm_judge_pairwise(inp, output_A, output_B)
        return raw
    else:
        raw = llm_judge_pairwise(inp, output_B, output_A)
        return -raw  # Invertiere, da wir getauscht haben
```

**Ansatz 2: Online-A/B auf User-Engagement**

Wenn das System in Production ist: klassischer A/B-Test auf User-Verhalten.
- OEC: User-Rating (Daumen hoch/runter), Folge-Engagement, Time-on-Task.
- Vorteil: echter User-Feedback.
- Nachteil: braucht Traffic und dauert länger.

**Mindest-Sample-Size für LLM-Eval:**

Faustregel:
- Pairwise Eval: mindestens 50-100 Test-Cases für stabile Ergebnisse.
- Mit 30 Test-Cases: Power ~50% für einen Effekt von 15% Verbesserung.
- Wiederhole jeden Test-Case mehrfach (3-5×) um LLM-Stochastizität zu mitteln.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Hamel Husain — LLM Eval Methodology](https://hamel.dev) | Praxis-Empfehlungen |
| 📖 Docs | [RAGAS — LLM Eval Framework](https://docs.ragas.io) | RAG-spezifische Eval |
| 📖 Artikel | [Chatbot Arena](https://arena.lmsys.org) | Pairwise Human Eval |

## Teste dein Verständnis

- [ ] Warum reicht ein einziger LLM-Output pro Test-Case nicht für statistische Aussagen?
- [ ] Was ist Positionsbias bei LLM-as-Judge und wie eliminierst du ihn?
- [ ] Nenne zwei Situationen, wo Online-A/B auf User-Engagement besser ist als Offline LLM-as-Judge.
- [ ] Was ist die minimale Anzahl von Test-Cases für eine halbwegs verlässliche Eval?
