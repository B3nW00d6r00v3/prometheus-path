---
title: "Prompt-Versionierung"
module: "10.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Prompt-Versionierung

## Kernidee

Prompts sind Code 2026 — und müssen wie Code behandelt werden: Versionierung in Git, Branching für Experimente, A/B-Test-Framework, Rollback-Pfad. Ein System ohne Prompt-Versionierung kann keine Regression orten und kein Rollback durchführen.

## Im Detail

**Warum Prompt-Versionierung?**

Stell dir vor, du änderst deinen System-Prompt und drei Tage später stellen User-Beschwerden ein. Ohne Versionierung: unklar was sich geändert hat, kein Rollback möglich, keine Debugging-Basis.

Mit Versionierung: Git-Diff zeigt exakt was sich geändert hat. Rollback in 60 Sekunden.

**Git als Default — die einfachste Lösung:**

```
prompts/
  system_v1.txt    ← aktive Version
  system_v1.1.txt  ← Experiment-Branch
  user_template.txt
```

Prompts als eigene Dateien im Repo. Änderungen via Pull Request → Eval-as-CI läuft automatisch. Rollback = `git revert`.

**Branching-Strategie für Prompt-Experimente:**

```
main
  ↳ prompt/experiment-shorter-system
  ↳ prompt/experiment-json-output
  ↳ prompt/experiment-new-persona
```

Jeder Prompt-Experiment-Branch läuft Eval gegen main. Merge nur wenn Eval-as-CI grün.

**Spezialisierte Prompt-Management-Tools:**

| Tool | Besonderheit |
|---|---|
| **LangSmith Hub** | Prompts in LangSmith versioniert, sharebar im Team |
| **PromptLayer** | Versionierung + Analytics, A/B-Testing eingebaut |
| **Promptfoo** | Eval + Versionierung kombiniert |
| **Git (default)** | Kein Vendor-Lock-in, funktioniert immer |

**A/B-Testing für Prompts:**

```python
import random

def get_prompt(user_id: str) -> str:
    # 50/50 Split für A/B-Test
    if hash(user_id) % 2 == 0:
        return PROMPT_V1
    else:
        return PROMPT_V2
```

Ergebnis pro Variante tracken (Eval-Score, Engagement, Conversion) — dann datenbasiert entscheiden.

**Rollback-Pfad:**

1. Incident erkannt (Eval-Score fällt in Production)
2. Git-Log prüfen: welcher Prompt-Commit korreliert mit Incident?
3. `git revert <commit>` → PR → Eval läuft → Merge
4. Post-Mortem: warum hat der Prompt-Change diesen Effekt gehabt?

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [LangSmith Hub](https://smith.langchain.com/hub) | Team-Prompt-Management |
| 🛠️ Tool | [PromptLayer](https://promptlayer.com) | Versionierung + Analytics |
| 📖 Docs | [Promptfoo Versioning](https://www.promptfoo.dev) | Eval + Versionierung |

## Teste dein Verständnis

- [ ] Warum reicht es nicht, Prompts direkt im Code als Strings zu haben?
- [ ] Erkläre einen vollständigen Rollback-Pfad bei Prompt-bedingtem Incident.
- [ ] Was ist der Vorteil von Git als Prompt-Versionierungs-Tool gegenüber spezialisierten Tools?
