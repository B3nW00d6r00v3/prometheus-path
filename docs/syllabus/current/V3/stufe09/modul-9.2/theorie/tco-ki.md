---
title: "Total Cost of Ownership für KI"
module: "9.2"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Total Cost of Ownership für KI

## Kernidee

Der häufigste ROI-Fehler: nur Lizenz-Kosten rechnen. Die echten Kosten einer KI-Initiative teilen sich in Initial-Kosten (einmalig), laufende Kosten (monatlich/jährlich) und versteckte Kosten (oft vergessen). Laufende Kosten betragen typisch 30-50% der Initial-Kosten pro Jahr.

## Im Detail

### Initial-Kosten

- **Use-Case-Analyse und Konzeption**: Berater oder interner Aufwand (Personentage × Tagessatz).
- **Datenaufbereitung**: oft der größte Posten — Cleaning, Labeling, Pipeline-Aufbau.
- **Modell-Auswahl/Training/Fine-Tuning**: bei Fine-Tuning GPU-Kosten.
- **Integration**: API-Entwicklung, System-Verbindungen, UI.
- **Testing und Eval**: QA, User-Acceptance-Testing, Eval-Framework-Aufbau.

### Laufende Kosten

- **Inferenz-Kosten**: API-Calls × Tokens × Preis pro Token (Output teurer als Input).
- **Daten-Pflege**: Vector-Store aktuell halten, Daten-Pipelines warten.
- **Monitoring und Alerting**: wer überwacht die Outputs?
- **Eval-Zyklen**: regelmäßige Qualitätsprüfung, besonders nach Modell-Updates.
- **Modell-Updates**: wenn Anbieter Modell deprecated, Migration nötig.
- **Support**: Incident-Handling, User-Support.

### Versteckte Kosten (oft vergessen)

- **Schulung**: alle Mitarbeiter, die mit dem System arbeiten.
- **Change-Management**: Modul 9.6 hat Kosten.
- **Opportunitätskosten**: was hätte das Team stattdessen gebaut?
- **Risiko-Puffer**: für Overruns (typisch 20-30% auf Initial).
- **Compliance-Overhead**: DSGVO, EU AI Act — insbesondere DSFA, Dokumentation.

**Faustregel**: Laufende Kosten = 30-50% der Initial-Kosten pro Jahr.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Gartner — TCO for AI](https://www.gartner.com) | Framework für vollständige Kostenerfassung |

## Teste dein Verständnis

- [ ] Erstelle eine vollständige TCO-Tabelle für deinen Capstone-Use-Case. Welcher Posten überrascht dich?
- [ ] Wie hoch sind die laufenden Kosten im Verhältnis zu den Initial-Kosten in deiner Schätzung?
- [ ] Welche versteckten Kosten hatte dein Team bisher typischerweise nicht auf dem Radar?
