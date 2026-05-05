---
title: "Häufige Eval-Fallen"
module: "5.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Häufige Eval-Fallen

## Kernidee

Die meisten Eval-Fails entstehen nicht durch schlechte Tools, sondern durch schlechtes Eval-Design. Vier Fallen sind besonders verbreitet: Cherry-Picked Examples, Single-Run-Variabilität, Overfitting auf das Eval-Set und ignorierte Edge Cases.

## Im Detail

**Falle 1: Cherry-Picked Examples**

Du wählst die fünf Fälle, bei denen dein System gut aussieht. Das ist keine Evaluation, das ist Marketing.

*Symptom:* "Das System beantwortet alle Test-Fragen korrekt" — weil du nur Fragen gewählt hast, die es korrekt beantwortet.

*Mitigation:* Test-Set enthält bewusst bekannte Failure Modes. Mindestens 15% der Cases sollen schwierig oder gegen bekannte Schwächen sein.

**Falle 2: Single-Run-Variabilität**

LLMs sind stochastisch. Bei Temperature > 0 kann dieselbe Frage unterschiedliche Antworten und Scores produzieren. Ein einzelner Eval-Run ist statistisch kein stabiles Signal.

*Symptom:* Eval-Run 1 zeigt Faithfulness 0.82, Run 2 zeigt 0.76. Welchem vertrauen?

*Mitigation:* 3-5 Eval-Runs pro Test-Bedingung, Median (nicht Mittelwert) nehmen. Oder Temperature auf 0 setzen für Reproduzierbarkeit.

**Falle 3: Overfitting auf das Eval-Set**

Du optimierst so lange auf dein Test-Set, bis die Metriken perfekt sind. Dann schlägt das System in Production spektakulär.

*Symptom:* Faithfulness 0.95 auf Eval-Set, aber Nutzer-Feedback ist katastrophal.

*Mitigation:* Test-Set trennen in Validierungs-Set (für Optimierung) und Hold-Out-Set (nur für finale Bewertung, niemals für Optimierungs-Entscheidungen).

**Falle 4: Ignorierte Edge Cases**

Dein Test-Set besteht zu 95% aus Standard-Inputs. Das System sieht gut aus. Dann schlägt es bei Edge Cases.

*Symptom:* Eval-Score 0.9, aber bei unerwarteten Fragen scheitert das System regelmäßig.

*Mitigation:* Bewusst 25% Edge Cases im Test-Set: unerwartete Formulierungen, fehlende Informationen, mehrdeutige Anfragen, Out-of-Scope-Fragen.

**Bonus-Falle: Metric-Gaming**

Das System lernt, gute Scores bei den Metriken zu erzielen, ohne das eigentliche Problem zu lösen. Beispiel: hohe Faithfulness durch sehr kurze, stark zitierte Antworten, die aber inhaltlich unvollständig sind.

*Mitigation:* Mehrere Metriken kombinieren, keine einzelne Metrik als alleinigen Proxy nutzen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Hamel beschreibt diese Fallen im Detail |

## Teste dein Verständnis

- [ ] Kannst du die Cherry-Picked-Examples-Falle in einem Satz beschreiben?
- [ ] Wie würdest du Single-Run-Variabilität in deinem Eval-Setup adressieren?
- [ ] Hast du in deinem Test-Set aus Modul 5.1 Edge Cases? Wenn nein: welche würdest du hinzufügen?
