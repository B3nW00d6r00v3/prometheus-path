---
title: "Eval-Tools 2026"
module: "5.4"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Eval-Tools 2026

## Kernidee

Das Eval-Tool-Ökosystem ist 2026 fragmentiert: RAGAS und DeepEval für RAG-spezifische Metriken, Promptfoo für CLI-fokussierte CI-Integration, Braintrust für kommerzielle Teams, Anthropic Inspect für Agent-Eval. Die Wahl hängt vom Use-Case und Ökosystem ab — nicht vom Hype.

## Im Detail

**Überblick der wichtigsten Tools:**

| Tool | Typ | Schwerpunkt | Wann wählen |
|------|-----|-------------|-------------|
| **RAGAS** | OSS | RAG-Metriken | RAG-Projekte, Python-nativ |
| **DeepEval** | OSS | Viele Metriken built-in | Python-first, umfassende Metrik-Bibliothek |
| **Promptfoo** | OSS | CLI, CI-Integration | Schnelle Eval-Runs, CI/CD-Pipelines |
| **Braintrust** | Kommerziell | Ausgereiftes Dashboard | Teams mit Budget |
| **LangSmith Evals** | Kommerziell | LangChain-Ökosystem | Wenn du LangChain einsetzt |
| **OpenAI Evals** | OSS | Generisch | Multi-Modell-Eval |
| **Anthropic Inspect** | OSS | Agent-Eval, viele Patterns | Agent-Systeme |
| **Phoenix/Arize** | Kommerziell | Production-Monitoring + Eval | Production-Phase |

**Empfehlung für Modul 5.4:**

- Primär: **RAGAS** für RAG-spezifische Metriken (Faithfulness, Context Precision, etc.)
- Optional: **DeepEval** für erweiterte Metriken (G-Eval, Summarization, etc.)
- Für CI: **Promptfoo** (einfache YAML-Konfiguration, GitHub Actions-Support)

**Promptfoo für schnellen Start:**

```yaml
# promptfooconfig.yaml
providers:
  - anthropic:claude-3-5-sonnet-20241022
prompts:
  - file://prompts/rag-query.txt
tests:
  - vars:
      query: "Was ist die Rückgaberichtlinie?"
    assert:
      - type: llm-rubric
        value: "Antwort nennt die 30-Tage-Frist"
```

**DeepEval für Python-Workflows:**

```python
from deepeval import evaluate
from deepeval.metrics import FaithfulnessMetric, AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase

test_case = LLMTestCase(
    input="Was ist pgvector?",
    actual_output=your_rag_system.query("Was ist pgvector?"),
    retrieval_context=["pgvector ist eine Postgres-Extension..."]
)

evaluate([test_case], [FaithfulnessMetric(), AnswerRelevancyMetric()])
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠 Tool | [DeepEval](https://github.com/confident-ai/deepeval) | OSS, Python-nativ |
| 🛠 Tool | [Promptfoo](https://www.promptfoo.dev) | CLI-fokussiert |
| 🛠 Tool | [Anthropic Inspect](https://inspect.aisi.org.uk) | Agent-Eval |
| 📖 Docs | [RAGAS Docs](https://docs.ragas.io) | RAG-spezifisch |

## Teste dein Verständnis

- [ ] Welches Eval-Tool würdest du für dein RAG-Projekt aus Modul 5.1 wählen — und warum?
- [ ] Was ist der Unterschied zwischen RAGAS und Promptfoo in Bezug auf Anwendungsbereich?
- [ ] Für welchen Use-Case würdest du Anthropic Inspect gegenüber RAGAS bevorzugen?
