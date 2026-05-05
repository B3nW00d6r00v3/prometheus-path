---
title: "Total Cost of Ownership (TCO) für KI"
module: "9.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Total Cost of Ownership (TCO) für KI

## Kernidee

Der häufigste Fehler bei KI-Business-Cases: nur Lizenz- oder API-Kosten berechnen. Echte TCO umfasst Initial-Kosten, laufende Kosten und versteckte Kosten — und die laufenden Kosten betragen oft 30-50% der Initial-Kosten pro Jahr.

## Im Detail

**Initial-Kosten (einmalig):**
- Use-Case-Analyse und Definition
- Datenaufbereitung und -qualifizierung
- Modell-Auswahl, ggf. Fine-Tuning
- Integration in bestehende Systeme
- Testing und Qualitätssicherung

**Laufende Kosten (jährlich):**
- Inferenz-Kosten (API-Calls oder eigene Compute-Kosten)
- Datenpflege und -aktualisierung
- Monitoring und Alerting
- Regelmäßige Evaluation (nach Modell-Updates, Drift)
- Modell-Updates und Re-Training
- Support und Incident Response

**Versteckte Kosten (oft vergessen):**
- Schulung der Nutzer (einmalig + Auffrischung)
- Change-Management-Aufwand
- Opportunitätskosten der Mitarbeiter, die Daten aufbereiten
- Risiko-Puffer (20-30% Aufschlag für Unvorhergesehenes)
- Compliance-Overhead (DSFA, AVV, Dokumentation)

**Faustregel:** Laufende Kosten sind oft 30-50% der Initial-Kosten pro Jahr. Ein System mit 100.000 € Initial-Kosten kostet 30.000-50.000 € pro Jahr im laufenden Betrieb.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Studie | [Gartner — TCO for AI](https://www.gartner.com) | Referenz für AI-Kostenmodelle |

## Teste dein Verständnis

- [ ] Erstelle eine TCO-Übersicht für einen einfachen RAG-Use-Case über 3 Jahre.
- [ ] Welche versteckten Kosten werden in einem Erstgespräch mit einem Softwareanbieter typischerweise nicht erwähnt?
- [ ] Warum unterschätzen viele Organisationen die laufenden Kosten systematisch?
