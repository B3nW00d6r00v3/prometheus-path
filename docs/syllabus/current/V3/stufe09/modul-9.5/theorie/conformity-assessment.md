---
title: "Conformity Assessment für High-Risk-Systeme"
module: "9.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Conformity Assessment für High-Risk-Systeme

## Kernidee

High-Risk-KI-Systeme müssen vor Inverkehrbringen oder Inbetriebnahme einem Conformity Assessment unterzogen werden. Bei den meisten internen Unternehmensanwendungen: Self-Assessment. Nur bei sicherheitskritischen Systemen: externes Notified Body.

## Im Detail

**Wann ist ein Conformity Assessment erforderlich?**
- Wenn das System als High-Risk nach Annex III klassifiziert ist.
- Auch für interne Systeme, die in High-Risk-Kategorien fallen (z.B. KI-Recruiting-Tool).

**Self-Assessment (Regelfall für interne Anwendungen):**
- Dokumentation eines Risiko-Management-Systems.
- Nachweis der Datenqualität (Trainingsdaten, Eval-Daten).
- Technische Dokumentation (Architektur, Modell, Integrationen).
- Logging und Monitoring-Systeme dokumentiert.
- Bias-Testing durchgeführt und dokumentiert.
- Human-Oversight-Mechanismen beschrieben.

**Externes Notified Body (für kritische Systeme):**
- Pflicht bei bestimmten sicherheitskritischen Systemen (z.B. Medical Devices, Safety Components).
- Externe Prüforganisation zertifiziert Konformität.
- Analog zu CE-Kennzeichnung in anderen Produktbereichen.

**Praxis-Empfehlung:** Selbst wenn der Capstone-Use-Case nicht High-Risk ist, das Self-Assessment-Template als Übung durchführen. Es strukturiert die Compliance-Dokumentation für alle zukünftigen Use-Cases.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Leitfaden | [Conformity Assessment Guide (EU Commission)](https://digital-strategy.ec.europa.eu) | Offizieller Leitfaden |

## Teste dein Verständnis

- [ ] Welche sechs Dokumentations-Anforderungen hat ein Self-Assessment für ein High-Risk-System?
- [ ] Für welche Art von System ist ein externes Notified Body zwingend?
- [ ] Erstelle eine Mini-Checkliste für das Conformity-Self-Assessment deines Capstone-Use-Cases.
