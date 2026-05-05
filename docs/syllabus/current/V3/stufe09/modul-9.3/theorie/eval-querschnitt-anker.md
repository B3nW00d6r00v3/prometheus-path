---
title: "Eval-Querschnitt-Anker für System-KPIs"
module: "9.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Eval-Querschnitt-Anker für System-KPIs

## Kernidee

System-KPIs auf Use-Case-Ebene sind keine selbst erfundenen Metriken — sie basieren auf dem Eval-Querschnitt als Methodik-Foundation. Wer eigene Metriken erfindet, erzeugt Inkonsistenz und Vergleichsprobleme.

## Im Detail

**Der Eval-Querschnitt** (`13_querschnitt_eval.md`) definiert:
- Welche Metriken für welche Use-Case-Typen relevant sind (Faithfulness, Relevance, Task Success Rate, etc.).
- Wie Eval-Testsets aufgebaut werden sollten.
- Wie Monitoring-Frequenz festgelegt wird.

**Verbindung zu System-KPIs:**
- Faithfulness → Halluzinations-Rate pro Use-Case.
- Task Success Rate → primäre Erfolgskennzahl für agentic Use-Cases.
- Relevance/Context Precision → Qualität des Retrievals bei RAG-Use-Cases.

**Praxis-Empfehlung:**
- Vor Definition der System-KPIs: Eval-Querschnitt lesen und Metriken für den spezifischen Use-Case-Typ auswählen.
- Nicht eigene Metriken erfinden, ohne Begründung warum Standard-Metriken nicht ausreichen.
- Metriken konsistent über alle Use-Cases einer Organisation halten → Vergleichbarkeit.

**Warum wichtig für 9.3:** Wer das Operating Model aufbaut, muss die KPI-Foundation auf dem Eval-Standard aufbauen — sonst hat jedes Team eigene Definitionen, die sich nicht aggregieren lassen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Querschnitt | 13_querschnitt_eval.md | Methodik-Foundation für System-KPIs |

## Teste dein Verständnis

- [ ] Welche drei Eval-Metriken aus dem Querschnitt passen am besten zu einem Support-Triage-Use-Case?
- [ ] Was passiert, wenn verschiedene Teams unterschiedliche Metriken für ähnliche Use-Cases nutzen?
- [ ] Wie integrierst du Eval-Metriken in ein monatliches Governance-Reporting?
