---
title: "Tooling für Eval-as-CI"
module: "10.3"
type: theorie
fast_track: true
effort: "10min"
stability: yellow
---

# Tooling für Eval-as-CI

## Kernidee

Die Tool-Wahl für Eval-as-CI hängt vom Stack ab — es gibt keine universell beste Lösung. Promptfoo + GitHub Actions ist der häufigste Einstieg; LangSmith CI für LangChain-Teams; Langfuse für OSS-First-Teams. Wichtig: das Tool ist sekundär gegenüber dem Prozess.

## Im Detail

**Tool-Überblick 2026:**

| Tool | Integration | Stärke | Lizenz |
|---|---|---|---|
| **Promptfoo + GitHub Actions** | GitHub Actions native | Einfachstes Setup, framework-unabhängig, deklarative Config | Open Source |
| **LangSmith CI** | LangChain-Stack | Tighte Integration wenn LangChain genutzt wird | Proprietär |
| **DeepEval** | pytest-basiert | Bekannte Test-Syntax für Python-Entwickler | Open Source |
| **RAGAS + eigene CI** | Custom | Maximale Kontrolle, kein Vendor-Lock-in | Open Source |
| **Langfuse** | API-basiert | OSS, self-hosted, vollständiges Observability | Open Source |

**Promptfoo als Einstiegsempfehlung:**

Promptfoo erlaubt deklarative Eval-Konfiguration in YAML:

```yaml
# promptfooconfig.yaml
providers:
  - id: anthropic:claude-sonnet-4
prompts:
  - file://prompts/system.txt
tests:
  - vars:
      question: "Was ist RAG?"
    assert:
      - type: llm-rubric
        value: "Antwort erklärt Retrieval-Augmented Generation korrekt"
      - type: latency
        threshold: 3000  # max 3 Sekunden
```

GitHub Action dafür: offiziell unterstützt, Ergebnis wird als PR-Check angezeigt.

**DeepEval für pytest-Enthusiasten:**

```python
# test_eval.py
from deepeval import assert_test
from deepeval.metrics import FaithfulnessMetric

def test_rag_faithfulness():
    metric = FaithfulnessMetric(threshold=0.8)
    assert_test(test_case, [metric])
```

Läuft in jedem CI-System als normaler `pytest`-Run.

**Langfuse für OSS + DSGVO:**
- Komplettes Eval-Tracking inkl. CI-Integration
- Self-hosted auf eigener Infrastruktur → keine Daten an externe Services
- Ideal für produktive Systeme mit Nutzerdaten

**Empfehlung nach Use-Case:**
- **Einstieg / kleines Projekt**: Promptfoo + GitHub Actions — 30 Minuten Setup
- **LangChain-Stack**: LangSmith CI
- **DSGVO-kritisch / OSS-First**: Langfuse self-hosted
- **Python-Team mit pytest-Kultur**: DeepEval

*Verfallsdatum: Aug 2026 — Tool-Ökosystem in starkem Wandel.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Promptfoo GitHub Action](https://www.promptfoo.dev/docs/integrations/github-action/) | Schnellster Einstieg |
| 📖 Docs | [LangSmith CI](https://docs.smith.langchain.com) | LangChain-Integration |
| 📖 Docs | [DeepEval CI](https://docs.confident-ai.com) | pytest-style Eval |
| 📖 Docs | [Langfuse](https://langfuse.com) | OSS-Alternative, self-hostable |

## Teste dein Verständnis

- [ ] Welches Tool empfiehlst du für ein Team, das Langfuse wegen DSGVO self-hostet?
- [ ] Wie sieht eine einfache Promptfoo-Konfiguration für einen Faithfulness-Test aus?
- [ ] Was ist der Hauptvorteil von DeepEval gegenüber Promptfoo?
