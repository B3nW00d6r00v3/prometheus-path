---
title: "Hamel evals-skills als Referenz-Implementation"
module: "5.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Hamel evals-skills als Referenz-Implementation

## Kernidee

Hamel Husains evals-skills (März 2026) sind sieben kanonische OSS-Skills für Eval-Workflows — der bisher umfassendste öffentliche Beweis, dass das Skills-Pattern in der Praxis funktioniert. Mindestens zwei davon installieren oder lesen ist Pflicht für 🔧.

## Im Detail

**Die sieben kanonischen evals-skills:**

| Skill | Was sie tut | Brücke zu |
|-------|------------|-----------|
| `eval-audit` | Führt Audit auf bestehende Eval-Suite durch | Modul 5.4 |
| `error-analysis` | Strukturierte Error-Analyse auf Eval-Failure-Cases | Modul 5.4 |
| `generate-synthetic-data` | Erzeugt synthetische Test-Cases für Eval-Datasets | Modul 5.4 |
| `write-judge-prompt` | Hilft beim Schreiben eines LLM-as-Judge-Prompts | Modul 5.4 |
| `validate-evaluator` | Validiert Judge-Bias auf Calibration-Set | Modul 5.4 |
| `evaluate-rag` | RAG-spezifische Eval-Routine | Modul 5.1 + 5.4 |
| `build-review-interface` | Baut Annotation-UI für Human-Eval | Modul 5.4 |

**Empfehlung für Modul 5.6:** Mindestens `eval-audit` und `evaluate-rag` installieren oder lesen. Beide direkt anwendbar auf deine Stufe-5.4-Eval-Suite.

**Was man beim Lesen lernt:**

1. **Wie eine Description aufgebaut ist**, die korrekt triggert.
2. **Wie Schritt-für-Schritt-Anleitungen** in einer Skill strukturiert werden.
3. **Wie kanonische Beispiele** mit Input/Output dokumentiert werden.
4. **Wie Trigger-Heuristiken** konkret formuliert werden.

**`eval-audit` als konkretes Lernbeispiel:**

```markdown
# eval-audit

## Beschreibung
Diese Skill führt einen strukturierten Audit auf eine bestehende Eval-Suite durch.
Verwenden wenn: Nutzer hat eine Eval-Suite und möchte wissen, ob sie vollständig,
ausgewogen und frei von bekannten Antipatterns ist.
NICHT verwenden für: erstmaligen Aufbau eines Eval-Datasets (→ generate-synthetic-data).

## Audit-Checkliste
1. Größe: mindestens 50 Test-Cases?
2. Mischung: Standard / Edge Cases / bekannte Failure Modes im Verhältnis?
3. Ground-Truth-Qualität: sind Erwartungen klar formuliert?
4. Bias-Check: überrepräsentiert ein Thema oder eine Formulierungs-Art?
5. Aktualität: spiegelt das Dataset aktuelle Production-Inputs wider?
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Hamel Husain — Evals Skills for Coding Agents](https://hamel.dev/blog/posts/evals-skills/) | Hintergrund zum Projekt |
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | Alle sieben Skills zum Lesen und Installieren |

## Teste dein Verständnis

- [ ] Kannst du die sieben evals-skills in je einem Satz beschreiben?
- [ ] Welche zwei Skills aus dem Hamel-Repo sind am direktesten auf deine Stufe-5.4-Eval-Suite anwendbar?
- [ ] Was kannst du über das SKILL.md-Format lernen, wenn du die Hamel-Skills liest?
