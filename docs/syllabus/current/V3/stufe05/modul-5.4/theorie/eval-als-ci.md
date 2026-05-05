---
title: "Eval-as-CI"
module: "5.4"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Eval-as-CI

## Kernidee

Eval-as-CI bedeutet: Eval-Runs werden automatisch bei jedem Code-Change ausgelöst, genau wie Unit-Tests. Schwellenwert-Verletzungen blockieren den Merge. Das macht Eval vom manuellen Prozess zur Absicherung — und verhindert stille Regressionen.

## Im Detail

Das Ziel: Eval läuft bei jedem Pull Request. Wenn Faithfulness unter 0.8 fällt, wird der PR blockiert. Kein manuelles "Ich schaue mal kurz drüber" mehr.

**Minimal-Setup mit Promptfoo und GitHub Actions:**

```yaml
# .github/workflows/eval.yml
name: LLM Eval
on: [pull_request]

jobs:
  eval:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Promptfoo Eval
        uses: promptfoo/promptfoo-action@v2
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
          config: promptfooconfig.yaml
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

**Eval-as-CI mit RAGAS und Python:**

```python
# run_eval.py
import sys
from ragas import evaluate
from datasets import Dataset

results = evaluate(eval_dataset, metrics=[faithfulness, answer_relevancy])
faithfulness_score = results["faithfulness"]

THRESHOLD = 0.8
if faithfulness_score < THRESHOLD:
    print(f"FAIL: Faithfulness {faithfulness_score:.2f} < {THRESHOLD}")
    sys.exit(1)

print(f"PASS: Faithfulness {faithfulness_score:.2f} >= {THRESHOLD}")
sys.exit(0)
```

**Worauf achten bei Eval-in-CI:**

1. **Kosten:** Eval-Runs verursachen API-Kosten. Entweder Budget festlegen, oder für einfache CI-Checks ein kleineres Subset (z.B. 20 kritische Test-Cases statt 100).

2. **Laufzeit:** Eval auf 100 Test-Cases kann 5-10 Minuten dauern. Für schnelle Feedback-Zyklen: separater "Quick-Eval" (20 Cases, <2min) und "Full-Eval" (100 Cases, nightly).

3. **Flaky Tests:** LLMs sind stochastisch. 3-5 Runs pro Test-Case, Median nehmen, um flaky Failures zu reduzieren.

4. **Secrets Management:** API-Keys sicher in GitHub Actions Secrets — nie in der YAML oder im Code.

**Reifegradmodell für Eval-Integration:**

| Stufe | Beschreibung |
|-------|-------------|
| 0 | Kein Eval — manuelles Ausprobieren |
| 1 | Manueller Eval-Run vor großen Changes |
| 2 | Eval-Skript im Repo, manuell auslösen |
| 3 | **Eval-as-CI — bei jedem PR automatisch** |
| 4 | Online-Eval in Production + automatische Alerts |

Modul 5.4 zielt auf Stufe 2-3. Stufe 4 ist Production-Querschnitt-Thema.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Promptfoo CI Setup](https://www.promptfoo.dev/docs/integrations/github-action/) | GitHub Actions Integration |
| 📖 Docs | [LangSmith CI Patterns](https://docs.smith.langchain.com) | LangChain-Ökosystem |

## Teste dein Verständnis

- [ ] Kannst du erklären, wie ein Eval-Run einen GitHub-PR blockieren kann?
- [ ] Warum ist es wichtig, Eval-Kosten bei CI-Integration zu berücksichtigen?
- [ ] Auf welcher Reifegradsstufe (0-4) ist dein aktuelles RAG-Projekt aus Modul 5.1?
