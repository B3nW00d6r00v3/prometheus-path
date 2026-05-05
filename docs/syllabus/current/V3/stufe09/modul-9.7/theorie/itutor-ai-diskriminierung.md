---
title: "Case: iTutor-Group AI-Recruiting-Diskriminierung (US, 2023)"
module: "9.7"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Case: iTutor-Group AI-Recruiting-Diskriminierung (US, 2023)

## Kernidee

Die iTutor-Group setzte ein KI-Recruiting-Tool ein, das Bewerber über 55 Jahre systematisch ausschloss. EEOC-Settlement: 365.000 US-Dollar. Der Case ist der wichtigste Bias-Fall im Recruiting und hat direkte Relevanz für deutsches AGG-Recht bei KI-gestütztem Recruiting.

## Im Detail

**Was ist passiert?**

Die iTutor-Group (Online-Tutoring-Plattform) verwendete ein KI-Tool im Recruiting-Prozess, das Bewerber über 55 (Frauen) und 60 (Männer) automatisch aussortierte. Die US Equal Employment Opportunity Commission (EEOC) klagte; iTutor einigte sich auf einen Settlement von 365.000 US-Dollar ohne Schuldeingeständnis.

**Failure-Mode-Klassifikation:**
- **Primär: Daten-Failure** — biased Trainingsdaten, die die Diskriminierung historischer Hiring-Muster reproduzierten.
- **Sekundär: Compliance-Failure** — keine Fairness-Eval, kein Rechtsrahmen-Mapping (US EEOC / Altersschutz-Gesetze), kein Human-Oversight für finale Entscheidungen.

**Lehre für Deutschland:**
- In Deutschland schützt das AGG (Allgemeines Gleichbehandlungsgesetz) vor Diskriminierung nach Alter, Geschlecht, Herkunft, etc.
- KI-Recruiting-Tools fallen unter EU AI Act als High-Risk (Annex III: Beschäftigung).
- Fairness-Eval ist Pflicht, nicht Optional: Demographic-Parity-Check, Equal-Opportunity-Check auf geschützten Merkmalen.

*Verfallsdatum: alle 6 Monate — Rechtslage entwickelt sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Behörde | EEOC Case (2023) | US-Behörden-Dokumente |
| Recht | AGG (Deutschland) | Deutsches Anti-Diskriminierungsgesetz |

## Teste dein Verständnis

- [ ] Welche Fairness-Eval-Metriken hätten den iTutor-Case vor Go-Live erkannt?
- [ ] Welche deutschen Rechtsgrundlagen greifen bei KI-Recruiting-Diskriminierung?
- [ ] Wenn dein Capstone-Use-Case Personalentscheidungen beeinflusst: welche Prüfschritte sind nötig?
