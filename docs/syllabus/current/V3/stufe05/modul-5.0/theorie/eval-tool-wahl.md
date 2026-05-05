---
title: "Erste Eval-Tool-Wahl: Promptfoo oder DeepEval"
module: "5.0"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-11"
---

# Erste Eval-Tool-Wahl: Promptfoo oder DeepEval

## Kernidee

Für den ersten Eval-Run brauchst du ein Tool, das in Stunden läuft — nicht Tage. Promptfoo (CLI) und DeepEval (Python) sind beide Open-Source, einfach zu starten und decken LLM-as-Judge und Reference-Free-Eval ab.

## Im Detail

**Promptfoo (CLI-fokussiert):**

- YAML-Konfigurationsdatei: Provider, Prompts, Test-Cases.
- Einen Befehl (`promptfoo eval`) — fertig.
- HTML/Markdown-Report automatisch generiert.
- Nativ Ollama-Support (für OSS-Pfad ohne Cloud-Kosten).
- Ideal für: Lernende, die in Stunden ihren ersten Eval-Run wollen, ohne Python zu schreiben.

**DeepEval (Python-nativ):**

- Python-Library mit vielen eingebauten Metriken (Faithfulness, Answer Relevancy, Hallucination, etc.).
- Integration in bestehende Python-Projekte einfacher.
- Gut, wenn du später Eval in CI-Pipelines einbauen willst.
- Ideal für: Lernende, die Python-nativ arbeiten.

**Entscheidungshilfe:**

| Kriterium | Promptfoo | DeepEval |
|-----------|-----------|----------|
| Einstieg | YAML, 10min Setup | Python, 15min Setup |
| Ollama-Support | ✅ nativ | ✅ via Adapter |
| CI-Integration | ✅ GitHub Actions Plugin | ✅ Python-nativ |
| Metriken built-in | begrenzt | viele (RAGAS-artig) |
| Für RAG-Eval | ausreichend für 5.0 | besser für 5.4 |

*Hinweis: Tieferer Tool-Vergleich folgt in Modul 5.4.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Promptfoo Quickstart](https://www.promptfoo.dev/docs/getting-started/) | In 10 Minuten zum ersten Eval-Run |
| 🛠️ Tool | [DeepEval Quickstart](https://docs.confident-ai.com) | Python-nativ, mehr Metriken |

## Teste dein Verständnis

- [ ] Welches Tool passt besser zu deinem Workflow — und warum?
- [ ] Kannst du erklären, warum Promptfoo Ollama nativ unterstützt und was das für den OSS-Pfad bedeutet?
- [ ] Hast du das Quickstart-Tutorial des gewählten Tools durchgelesen?
