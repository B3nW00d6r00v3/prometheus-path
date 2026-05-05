---
title: "KI-spezifische KPI-Frameworks — die drei Ebenen"
module: "9.3"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# KI-spezifische KPI-Frameworks — die drei Ebenen

## Kernidee

KPIs für KI-Skalierung müssen auf drei Ebenen definiert werden — strategisch, operativ und system-seitig. Wer nur eine Ebene misst, sieht entweder nicht, ob KI strategisch wirkt, oder nicht, ob einzelne Systeme degradieren.

## Im Detail

**Ebene 1: Strategic KPIs** (für CEO/Vorstand):
- KI-Wertbeitrag absolut in Euro
- Anzahl produktiver KI-Use-Cases (in Scale, nicht in Discovery/Pilot)
- Time-to-Value pro Use-Case (Discovery bis produktiver Einsatz)
- AI Maturity Score (kombiniert Daten- und Operating-Model-Reife)
- Wettbewerbs-Position (qualitativ, Benchmark mit Peer-Gruppe)

**Ebene 2: Operational KPIs** (für AI-Governance-Council):
- Use-Case-Pipeline-Health: wie viele in Discovery / Pilot / Scale?
- Pilot-Success-Rate: welcher Prozentsatz der Pilots geht in Scale?
- Cost-per-Outcome: Euro pro KI-generiertem Wert (z.B. pro resolved Support-Ticket)
- Compliance-Status: AI Literacy Coverage (% Mitarbeiter geschult), DSFA-Status pro Use-Case

**Ebene 3: System KPIs** (pro Use-Case, technisch):
- Eval-Metriken: Faithfulness, Task Success Rate (Modul 5.0/5.4)
- Cost pro Anfrage (Inferenz-Kosten)
- Adoption Rate (% aktiver Nutzer der Zielgruppe)
- User Satisfaction (NPS für interne KI-Tools)
- Failure Rate und Incident Count

**Anti-Pattern:** Nur eine Ebene messen. System KPIs ohne Strategic KPIs: man weiß, ob das System funktioniert, aber nicht ob es Wert schafft. Strategic KPIs ohne System KPIs: man sieht Wert, aber nicht, welches System degradiert.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Querschnitt | [Querschnitt Eval (13_querschnitt_eval.md)](../../../../../querschnitte/) | Basis für System-KPI-Methodik |

## Teste dein Verständnis

- [ ] Definiere für deinen Capstone-Use-Case je 3 KPIs auf jeder der drei Ebenen.
- [ ] Warum ist Pilot-Success-Rate ein besserer Operational KPI als die Anzahl gestarteter Pilots?
- [ ] Was ist der Unterschied zwischen einem Vanity-Metric und einem aussagekräftigen KPI — Beispiel geben.
