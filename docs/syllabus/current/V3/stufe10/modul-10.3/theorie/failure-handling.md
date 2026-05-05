---
title: "Failure-Handling-Pattern"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Failure-Handling-Pattern

## Kernidee

Eval-as-CI ist nur so gut wie sein Failure-Handling: Was passiert, wenn eine Regression erkannt wird? Ohne klare Eskalation, Root-Cause-Analyse und Override-Pfad wird Eval-as-CI entweder ignoriert oder umgangen. Das Failure-Handling-Pattern macht Eval-as-CI zur echten Qualitätssicherung.

## Im Detail

**Die vier Schritte bei Eval-Regression:**

**Schritt 1: Detail-Ausgabe**

Der CI-Job zeigt nicht nur "Regression erkannt", sondern:
- Welche Test-Cases haben versagt?
- Was war die erwartete vs. tatsächliche Ausgabe?
- Wie hat sich die Metrik verändert (Vorher: 0.87, Nachher: 0.79)?

Format: Diff-Output pro fehlgeschlagenem Test-Case — lesbar für den PR-Autor.

**Schritt 2: Statistische Signifikanz prüfen**

Nicht jede Regression ist statistisch bedeutsam. Bei 5 Runs pro Test-Case und 30 Test-Cases gibt es eine natürliche Varianz.

- **Signifikantstest**: liegt die Regression außerhalb der 2-Sigma-Bandbreite der historischen Varianz?
- **Praktisch**: wenn Regression knapp über dem Schwellenwert liegt und Standardabweichung hoch ist → Override mit Dokumentation möglich.
- Anti-Pattern: Regression pauschal als "Rauschen" abzutun.

**Schritt 3: Override-Pfad**

Für Fälle, wo eine Regression bewusst akzeptiert wird:
- **Override-Bedingungen**: welcher sachliche Grund rechtfertigt die Verschlechterung? (z.B. "Latenz steigt um 12%, weil neues Feature strukturiertere Antworten liefert — Quality-Score steigt um 18%")
- **Dokumentation im PR**: Override mit Begründung muss in der PR-Beschreibung stehen.
- **Approval**: Override braucht Reviewer-Approval, nicht nur Author-Entscheidung.

**Schritt 4: Trend-Tracking**

Kleine Regressionen in Folge sind gefährlich — jede einzeln innerhalb Schwellenwert, aber kumuliert signifikant.

- **Alert-Logik**: wenn 3 PRs in Folge minimale (aber reale) Regressionen zeigen → automatisches Alert an Team.
- **Trend-Dashboard**: Langzeit-Eval-Metriken visualisieren, nicht nur Pro-PR.
- Tools: Langfuse und LangSmith bieten Trend-Ansichten über Zeit.

**Anti-Pattern: Override-Missbrauch**

Wenn Override zur Norm wird ("jeder PR bekommt Override"), ist Eval-as-CI nutzlos. Override-Rate sollte dokumentiert und reviewt werden — mehr als 1-2 Overrides pro Monat ist ein Warnsignal.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Promptfoo — Eval Results](https://www.promptfoo.dev/docs/usage/output/) | Diff-Output-Format |
| 📖 Docs | [Langfuse — Traces](https://langfuse.com/docs) | Trend-Tracking über Zeit |

## Teste dein Verständnis

- [ ] Welche vier Schritte umfasst das Failure-Handling bei einer erkannten Regression?
- [ ] Wann ist ein Override legitim und welche Bedingungen muss er erfüllen?
- [ ] Was bedeutet Trend-Tracking bei Eval-as-CI und warum ist es wichtig?
