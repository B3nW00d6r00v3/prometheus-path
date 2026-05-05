---
title: "Eval-as-CI Setup-Walkthrough"
module: "10.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Eval-as-CI Setup-Walkthrough

## Kernidee

Eval-as-CI bedeutet: bei jedem Pull Request läuft automatisch eine Evaluation deines LLM-Systems gegen ein kuriertes Test-Dataset — und das Ergebnis bestimmt, ob der PR gemergt werden darf. Ohne diesen Mechanismus merkt niemand, wenn eine Prompt-Änderung die Qualität heimlich verschlechtert.

## Im Detail

**Warum Eval-as-CI?**

LLM-Anwendungen sind nicht-deterministisch und ihre "Qualität" ist nicht durch Unit-Tests erfassbar. Ein Prompt-Refactoring kann die durchschnittliche Faithfulness von 0.85 auf 0.72 senken — und ohne automatischen Eval-Check fällt das erst in der Produktion auf, wenn User-Beschwerden kommen.

**Der vollständige Eval-as-CI-Flow:**

```
Pull Request erstellt
        ↓
CI-Pipeline triggert Eval-Run
        ↓
Eval läuft auf festes Test-Dataset (30-50+ Test-Cases)
        ↓
5 Runs pro Test-Case (Mittelwert + Standardabweichung)
        ↓
Vergleich gegen Baseline-Performance (main-Branch)
        ↓
Schwellenwert-Logik anwenden (→ nächste Seite)
        ↓
PR-Status setzen: ✅ Grün / ⚠️ Warnung / ❌ Block
        ↓
Bei Verbesserung: Vorher/Nachher-Tabelle in PR-Beschreibung
```

**Das Test-Dataset — kritischer Erfolgs-Faktor:**
- **Mindestgröße**: 30-50 kuratierte Test-Cases für statistische Aussagekraft.
- **Kuration**: manuell ausgewählt, deckt Edge-Cases, typische Anfragen, und bekannte Schwachstellen ab.
- **Aktualisierung**: alle 3-6 Monate erweitern — nie stagnieren lassen.
- **Aufbewahrung**: im Repo versioniert, so dass Baseline-Vergleich reproduzierbar ist.

**5-Runs-Prinzip:**
Stochastische Modelle brauchen mehrere Runs pro Test-Case. Single-Run-Eval ist irreführend. Mittelwert aus 5 Runs gibt statistisch robustere Aussage. Bei günstigen Modellen (Haiku, Flash): 5 Runs kosten cents — keine Ausrede für Single-Run.

**GitHub Actions Integration (konzeptuell):**
```yaml
name: Eval-as-CI
on: [pull_request]
jobs:
  eval:
    steps:
      - uses: actions/checkout@v4
      - name: Run Eval
        run: python eval/run_eval.py --baseline main --pr-branch ${{ github.head_ref }}
      - name: Check Thresholds
        run: python eval/check_thresholds.py --fail-on-regression
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Promptfoo GitHub Actions](https://www.promptfoo.dev/docs/integrations/github-action/) | Einfachste CI-Integration |
| 📖 Docs | [Langfuse](https://langfuse.com) | OSS Eval-Tracking mit CI-Support |
| 📖 Docs | [DeepEval CI Patterns](https://docs.confident-ai.com) | pytest-style Eval-Framework |

## Teste dein Verständnis

- [ ] Beschreibe den vollständigen Eval-as-CI-Flow in 5-6 Schritten.
- [ ] Warum braucht man 5 Runs pro Test-Case statt einem einzigen?
- [ ] Was sollte ein gutes Test-Dataset abdecken und wie oft muss es aktualisiert werden?
