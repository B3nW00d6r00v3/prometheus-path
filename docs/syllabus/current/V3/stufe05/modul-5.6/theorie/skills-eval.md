---
title: "Skills-Eval-Pattern"
module: "5.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Skills-Eval-Pattern

## Kernidee

Eine Skill braucht Eval auf zwei Ebenen: Trigger-Eval (wird sie wann geladen?) und Output-Eval (produziert sie wenn geladen das richtige Ergebnis?). Ohne beide Ebenen baut man eine Skill im Blindflug — genau das Antipattern, vor dem Modul 5.0 gewarnt hat.

## Im Detail

**Die zwei Eval-Ebenen:**

**1. Trigger-Eval:**

Misst: Triggert die Skill in den richtigen Fällen — und nicht in den falschen?

Setup:
- 5-10 Input-Cases definieren: ~5 sollen triggern, ~5 sollen nicht triggern.
- Für jede Input-Variante: lädt der Agent die Skill — ja oder nein?
- Confusion-Matrix: True Positives, False Positives, True Negatives, False Negatives.

Mindest-Schwelle: ≥80% korrekte Trigger-Entscheidungen.

**Trigger-Eval-Tabelle (Beispiel):**

| Input | Soll triggern | Tatsächlich | Ergebnis |
|-------|--------------|-------------|----------|
| "Erstelle ein Status-Update" | ✅ | ✅ | TP |
| "Was haben wir diese Woche gemacht?" | ✅ | ✅ | TP |
| "Analysiere diese CSV" | ❌ | ❌ | TN |
| "Erstelle einen Sprint-Plan" | ❌ | ✅ | FP — beschreiben |
| "Was ist der Status von Ticket 42?" | ❌ | ❌ | TN |

*Score: 4/5 = 80% — Mindest-Schwelle erreicht.*

**Was tun bei FP/FN:**
- False Positive: Description schärfen, Abgrenzung zu ähnlichen Use-Cases expliziter machen.
- False Negative: Description breiter formulieren, mehr Trigger-Signale nennen.

**2. Output-Eval:**

Misst: Wenn die Skill geladen wird — produziert sie das gewünschte Ergebnis?

Setup:
- Für die True-Positive-Cases: evaluiere den Output der Skill.
- RAGAS-ähnliche Methodik adaptieren: Faithfulness zur Skill-Anleitung, Answer Relevancy zum Task.
- Oder menschliche Bewertung: entspricht der Output dem erwarteten Format aus den Beispielen?

**Wie oft Eval durchführen:**

| Zeitpunkt | Was prüfen |
|-----------|-----------|
| Nach erstem Schreiben der Skill | Initiale Trigger-Eval + Output-Eval |
| Nach Änderungen an der Description | Trigger-Eval |
| Nach Änderungen am Inhalt | Output-Eval |
| Nach Platform-/Library-Updates | Beide |

**Verbindung zu Modulen 5.0 und 5.4:**

Das Trigger-Eval ist eine spezielle Form des Test-Case-basierten Evals aus 5.0. Die Output-Eval nutzt dieselben Methoden wie 5.4. Skills-Eval ist keine neue Methodik — es ist Eval-Mindset angewendet auf ein neues Pattern.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Hamel evals-skills — validate-evaluator](https://github.com/hamelsmu/evals-skills) | Referenz für Skill-Eval |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Trigger-Eval und Output-Eval?
- [ ] Erkläre in einem Satz, was ein False Positive beim Trigger-Eval bedeutet.
- [ ] Wie würdest du nach einem LangChain-Major-Update sicherstellen, dass deine Skill noch funktioniert?
