# Querschnitt: Eval

**Aufwand:** 🔧 30-50h · 🧮 30-50h · 💼 15-25h
**Wann nötig:** ab Modul 5.4 — vorher Anker in Modul 2.3 und 8.5
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Dieser Querschnitt ist die wichtigste **Disziplin** im modernen KI-Stack. Wer LLM-Anwendungen ohne Eval baut, baut blind. Eval ist 2026 das Differenzierungsmerkmal zwischen Hobby-Bauer und Professional. Diese Datei vertieft, was in Stufen 2.3 (Prompt-Eval), 5.4 (RAG-Eval), 8.5 (Statistik-Foundation), 6.2 (Agent-Eval) angerissen wurde.

**Hamel Husain's "Your AI Product Needs Evals" ist Pflicht-Lektüre 2026** — wenn du nichts anderes liest, lies das. [https://hamel.dev/blog/posts/evals/](https://hamel.dev/blog/posts/evals/)

## Warum Eval die Kern-Disziplin ist

- 🟢 **Eval ist der Boden, auf dem Optimierung steht** — ohne Eval weißt du nicht, ob Änderung X besser oder schlechter macht. Jede "Verbesserung" ohne Eval ist gefühlte Verbesserung.

- 🟢 **Eval-Driven Development** — Pattern: schreibe Eval *bevor* du das Feature baust. Dann ist klar, was "fertig" heißt. Verbindung zu TDD aus Software Engineering. [Eugene Yan — Eval-Driven Development](https://eugeneyan.com/writing/evals/)

- 🟢 **Eval ist nicht ein Schritt, sondern ein Lifecycle** — Offline-Eval (vor Deploy) + Online-Eval (in Production) + Continuous Eval (im CI) + Periodic Reviews (Quartalsweise mit menschlicher Inspektion).

## Eval-Dataset aufbauen

Der wichtigste und am meisten unterschätzte Schritt. Ein gutes Eval-Dataset ist wertvoller als ein gutes Modell.

- 🟢 **Drei Quellen für Eval-Daten**:
 - **Real-World-Inputs**: echte User-Anfragen, anonymisiert. Goldene Quelle, aber nur in Production verfügbar.
 - **Synthetic Data**: LLM generiert Test-Cases. Gut für Cold-Start, aber bias-anfällig.
 - **Edge Cases**: gezielt konstruierte Fälle, wo das System wahrscheinlich kippt.

- 🟢 **Größenordnungen**: Mindestens 50-100 Test-Cases für ernsthafte Eval, 200-500 für Production-Pilot, 1000+ für mature Systems. [Hamel Husain — Eval Dataset Size](https://hamel.dev)

- 🟢 **Test-Case-Anatomy**: jeder Test-Case hat (1) Input (Query/Prompt), (2) Ground-Truth oder Reference (wenn vorhanden), (3) Metadata (Kategorie, Schwierigkeit, Domain), (4) Expected Behavior (auch ohne Ground-Truth: was sind No-Gos?).

- 🟢 **Stratification**: Test-Set gleichmäßig über Use-Case-Kategorien, Schwierigkeits-Level, Edge-Case-Typen verteilen. Wer nur Easy-Cases testet, sieht keine Probleme.

- 🟢 **Synthetic Data Generation Tools**: [Distilabel](https://github.com/argilla-io/distilabel), [Bonito](https://github.com/BatsResearch/bonito), [LangSmith Synthetic Data](https://docs.smith.langchain.com), [Anthropic Cookbook — Synthetic Eval Data](https://github.com/anthropics/anthropic-cookbook).

## Eval-Methoden im Detail

### Reference-Based Eval

Wenn Ground-Truth-Antworten existieren:

- **String-Matching**: Exact Match, partial match. Reicht selten.
- **N-Gram-Metriken**: BLEU (Übersetzung), ROUGE (Zusammenfassung). Klassisch, aber schwach bei semantischen Variationen.
- **Embedding-Similarity**: Cosine-Similarity zwischen Embedding der Antwort und Ground-Truth. Besser als N-Gram, aber misst Ähnlichkeit, nicht Korrektheit.
- **LLM-as-Judge mit Reference**: stärker als reine Metriken (siehe unten).

### Reference-Free Eval

Häufigster Fall in der Praxis. Ohne Ground-Truth wird ein anderes Modell zum Bewerten genutzt.

### LLM-as-Judge in der Tiefe

Pflicht-Wissen 2026, aber mit kritischen Fallen:

- 🟢 **Position-Bias**: in Pairwise-Vergleichen bevorzugt LLM systematisch das erste Argument. Mitigations: Pairs randomisieren, Ergebnisse mit umgekehrter Reihenfolge gegenprüfen. [Anthropic — LLM-as-Judge Best Practices](https://www.anthropic.com/research)

- 🟢 **Self-Preference**: Modelle bevorzugen Outputs, die ihrem eigenen Stil ähneln. Mitigation: anderes Modell als Judge nutzen als das, was du evaluierst (z.B. wenn du Claude evaluierst, lass GPT-5 judgen).

- 🟢 **Calibration-Drift**: was ein Modell als "gut" bewertet, ändert sich zwischen Versionen. Mitigation: regelmäßige Human-Calibration auf 50-100 Beispielen, periodische Re-Calibration.

- 🟢 **Bias gegen lange / kurze Outputs**: oft bevorzugen Judges längere Antworten als "ausführlicher". Mitigation: Length-Normalization oder explizit prompten "Bewerte unabhängig von Länge".

- 🟢 **Pointwise vs. Pairwise**: Pointwise (gib jedem Output Score 1-5) ist einfacher, aber rauschiger. Pairwise (welcher von beiden ist besser) ist robuster für Vergleiche, aber teurer (n²-Skalierung). 2026-Trend: hybrid mit Score plus Pairwise für Top-K-Kandidaten.

- 🟢 **Rubric-basierte LLM-as-Judge**: statt "ist das gut?" → strukturierte Rubric mit mehreren Kriterien (Faithfulness 1-5, Completeness 1-5, Style 1-5). Gibt strukturierten Output, ist transparenter, leichter debugbar. [Eugene Yan — LLM-as-Judge Patterns](https://eugeneyan.com/writing/llm-evaluators/)

- 🟢 **Pflicht-Lektüre**: [Hamel Husain — LLM-as-Judge Patterns](https://hamel.dev/blog/posts/llm-judge/), [Eugene Yan — LLM Evaluators](https://eugeneyan.com/writing/llm-evaluators/), [Anthropic — On Bias in LLM-as-Judge](https://www.anthropic.com/research).

### Human Eval (immer noch nötig)

- 🟢 **Wann Human Eval pflicht ist**: bei kritischen Entscheidungen (Medical, Legal), bei initialer Calibration, bei Verdacht auf systematischen Bias, bei kreativen Aufgaben (Brand-Voice, Style).

- 🟢 **Pattern: Human Eval als Anker für LLM-Eval** — typisch: 50-100 Beispiele human-bewertet als Calibration-Set, dann LLM-as-Judge auf den Rest, regelmäßig Stichprobe gegen-gechecked.

- 🟢 **Annotation-Tools**: [Argilla](https://argilla.io) (OSS, sehr gut), [Label Studio](https://labelstud.io) (OSS), [Prolific](https://www.prolific.com) (für externe Annotatoren).

## Online-Eval und Continuous Eval

- 🟢 **Online-Metriken** in Production:
 - **Engagement-Metriken**: Click-Through-Rate, Session-Duration, Conversion (klassisch).
 - **Implicit Feedback**: User korrigiert Output, gibt Daumen runter, regeneriert (LLM-spezifisch wertvoll).
 - **Explicit Feedback**: 👍/👎-Buttons, Sterne-Rating, Free-Text-Feedback.

- 🟢 **A/B-Testing für LLM-Outputs** — siehe Modul 8.5 für Statistik-Foundation. Spezifika für LLMs: Stochastik (mehrere Runs pro Test-Case), Cost-pro-Anfrage (kann Sample-Size limitieren), Output-Varianz (höhere Varianz als klassische Metriken).

- 🟢 **Continuous Eval auf Production-Stichproben**: jede 100. echte Anfrage durch LLM-as-Judge laufen lassen, Trends beobachten. Frühwarnsystem für Degradation.

## Eval-as-CI (der wichtigste Production-Pattern 2026)

- 🟢 **Pattern**: bei jedem Pull Request automatisch Eval-Run, bei Regression Merge blockieren oder warnen.

- 🟢 **Tools**:
 - [Promptfoo](https://www.promptfoo.dev): CLI-fokussiert, GitHub-Actions-Integration, gut für lightweight Setup
 - [LangSmith](https://docs.smith.langchain.com/old/cookbook/testing-examples): wenn LangChain-Stack
 - [DeepEval](https://github.com/confident-ai/deepeval): pytest-integriert, fühlt sich vertraut an
 - [Anthropic Inspect](https://inspect.aisi.org.uk): von UK AI Safety Institute, viele Eval-Patterns
 - Eigene CI mit RAGAS aus 5.4

- 🟢 **GitHub Actions Beispiel-Workflow**: bei jedem PR auf `main`-Branch:
 1. Setup Python + Dependencies
 2. Run Eval-Script auf Test-Dataset
 3. Vergleich Aggregat-Metriken gegen Baseline (im Repo gespeichert)
 4. Bei Regression > Schwellenwert: Job fails → PR-Merge blockiert
 5. Bei Erfolg: neue Baseline committen oder als PR-Comment posten

- 🟢 **Schwellenwert-Strategien**: hartes Threshold ("Faithfulness muss ≥0.8 sein"), relatives Threshold ("nicht schlechter als 5% unter Baseline"), per-Category-Thresholds.

## Tool-Übersicht 2026

| Tool | OSS? | Stärken | Wann nutzen |
|---|---|---|---|
| [RAGAS](https://docs.ragas.io) | OSS | RAG-spezifische Metriken, einfach | RAG-Apps, Standard-Wahl |
| [Promptfoo](https://www.promptfoo.dev) | OSS | CLI, CI-Integration, Multi-Provider | Eval-as-CI, Prompt-A/B-Tests |
| [LangSmith](https://www.langchain.com/langsmith) | proprietär | LangChain-Integration, Production-Tracing + Eval | LangChain-Stack |
| [DeepEval](https://github.com/confident-ai/deepeval) | OSS | pytest-Integration, viele Metriken | Engineer mit Test-Disziplin |
| [Braintrust](https://www.braintrust.dev) | proprietär | sehr ausgereift, Production-Eval | Enterprise mit Budget |
| [OpenAI Evals](https://github.com/openai/evals) | OSS | generisch, gut dokumentiert | Custom Eval Frameworks |
| [Anthropic Inspect](https://inspect.aisi.org.uk) | OSS | viele Eval-Patterns, AI Safety-fokussiert | strukturierte Evals, Safety-Tests |
| [Phoenix / Arize](https://docs.arize.com/phoenix) | OSS Phoenix, proprietär Arize | Production-Monitoring + Eval | mature Production-Apps |
| [Langfuse](https://langfuse.com) | OSS, self-hostable | Tracing + Eval kombiniert, DSGVO-freundlich | OSS-Stack, EU-Hosting |
| [Argilla](https://argilla.io) | OSS | Human-Annotation für Eval-Datasets | Eval-Dataset-Aufbau |

## Statistik-Foundation für Eval

Verbindung zu Modul 8.5 (A/B-Testing & Causal Inference). Pflicht für ernsthafte Eval:

- Sample-Size-Berechnung mit Power-Analyse
- Konfidenzintervalle statt nur Punktschätzungen
- Multiple-Testing-Korrektur
- Effect-Size-Berechnung
- Bayesian A/B-Testing als moderne Alternative

## Eval für unterschiedliche Anwendungs-Klassen

### RAG-Eval (Modul 5.1, 5.4)
- RAGAS-Metriken: Faithfulness, Answer Relevancy, Context Precision/Recall
- Custom Metrics: Citation Quality, Hallucination Rate
- Outcome-Schwellen: Faithfulness ≥0.8 als Capstone-Engineer-Standard

### Agent-Eval (Modul 6.2)
- Task Success Rate
- Trajectory Quality (war der Lösungsweg sinnvoll?)
- Tool Usage Quality (richtige Tools? richtige Reihenfolge?)
- Cost Efficiency
- [SWE-bench](https://www.swebench.com) als Beispiel-Benchmark für Coding-Agents

### Klassifikations-Eval (Modul 8.2)
- Confusion Matrix
- Precision, Recall, F1, ROC-AUC, PR-AUC
- Calibration

### Generation-Eval
- Faithfulness (kein Halluzinieren)
- Coherence (passt der Output zusammen?)
- Style (Brand-Voice-Konsistenz)
- Safety (keine schädlichen Outputs)

## Anti-Pattern bei Eval

- 🟢 **Cherry-Picked Examples**: nur 5 Erfolgs-Fälle zeigen, keine echte Eval.
- 🟢 **Single-Run Eval**: LLMs sind stochastisch, ein einzelner Run ist Glück. Pflicht: mindestens 5 Runs pro Test-Case bei Temperature > 0, Median oder Mean nehmen.
- 🟢 **Overfitting auf Eval-Set**: System wird auf Test-Set optimiert, scheitert in Production. Mitigation: Held-Out-Validation-Set, periodisch neue Eval-Sets.
- 🟢 **Ignorierter Cost im Eval**: nur Quality optimiert, Cost explodiert. Eval muss Quality + Cost + Latenz gemeinsam betrachten.
- 🟢 **Eval-Set zu klein**: 10 Test-Cases sind kein Eval, sondern Vorab-Test. Mindestens 50, besser 100+.
- 🟢 **Eval-Set wird nicht gepflegt**: Edge Cases, die in Production auftauchen, gehören ins Eval-Set. Eval-Datasets sind lebende Artefakte.

## Praxis: Eval-Pipeline für eigenen Capstone

Wenn du diesen Querschnitt durcharbeitest, baue eine **Eval-Pipeline für deinen Capstone**:

- Eval-Dataset mit mindestens 50 Test-Cases (über die in Modul 5.4 erstellten hinaus, falls Capstone-Engineer)
- LLM-as-Judge mit Bias-Mitigations
- Eval-Skript reproduzierbar als CLI
- Eval-as-CI im GitHub-Actions-Workflow
- Periodischer Review-Plan (monatlich Eval-Set ergänzen)

Im Portfolio: `querschnitte/eval-pipeline/` als wiederverwendbarer Code.

## Free-Zertifikate

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [DLAI — Evaluating and Debugging Generative AI](https://learn.deeplearning.ai) | DLAI / W&B | ~2h | Vertiefung Methodik |
| [DLAI — Quality and Safety for LLM Applications](https://learn.deeplearning.ai) | DLAI / WhyLabs | ~2h | Production-Eval |
| [DLAI — LLMOps mit Vertex AI](https://learn.deeplearning.ai) | DLAI / Google | ~2h | Production-CI |
| [Promptfoo Documentation](https://www.promptfoo.dev/docs) | Promptfoo | ~5h | Eval-as-CI |
| [Hamel Husain — Eval Posts (gesamt)](https://hamel.dev) | Hamel Husain | ~10h | Pflicht-Lektüre |
| [Eugene Yan — Eval Posts](https://eugeneyan.com/writing/) | Eugene Yan | ~5h | Vertiefung |

## Outcome-Check

- [ ] Eval-Dataset mit mindestens 50 strukturierten Test-Cases
- [ ] LLM-as-Judge implementiert mit Bias-Mitigations
- [ ] Eval-Skript reproduzierbar als CLI
- [ ] Eval-as-CI in GitHub-Actions
- [ ] Statistische Signifikanz für Vergleiche (Konfidenzintervalle)
- [ ] Anti-Pattern bewusst vermieden (Cherry-Picking, Single-Run, Overfitting)

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: neue Eval-Tools, neue LLM-as-Judge-Bias-Forschung, Eval-as-CI-Patterns.