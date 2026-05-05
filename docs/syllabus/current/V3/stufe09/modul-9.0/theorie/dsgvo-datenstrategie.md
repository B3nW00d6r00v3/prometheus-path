---
title: "DSGVO-Konformität als Datenstrategie-Konstante"
module: "9.0"
type: theorie
fast_track: false
effort: "15min"
stability: yellow
---

# DSGVO-Konformität als Datenstrategie-Konstante

## Kernidee

Bei einer deutschen oder EU-Organisation gilt die DSGVO als Dauerrandbedingung — nicht als einmaliges Compliance-Projekt. Fünf Prinzipien müssen in jede Datenstrategie-Entscheidung eingebaut sein, nicht nachträglich angeklebt werden.

## Im Detail

**1. Datenminimierung als Prinzip**: Nur erheben, was für den definierten Zweck wirklich nötig ist. "Wir könnten die Daten später brauchen" ist keine DSGVO-konforme Begründung.

**2. Privacy by Design in Schemas**: Personenbezogene Felder von Anfang an separat halten, Pseudonymisierung wo möglich, keine Zusammenführung ohne Rechtsgrundlage. Das ist eine Schema-Entscheidung — sie muss beim ersten Datenbankdesign getroffen werden, nicht beim Audit drei Jahre später.

**3. Right-to-be-Forgotten als technisches Feature**: Nicht nur als Policy, sondern als implementiertes Feature. Besonders kritisch bei Vector-Stores: wenn ein Dokument gelöscht wird, muss auch das Embedding aus dem Index entfernt werden — sonst ist das Dokument de facto noch im System.

**4. Auftragsverarbeitungs-Verträge (AVV)**: Mit allen Cloud-Anbietern, die personenbezogene Daten verarbeiten. AWS, Azure, Google Cloud, Anthropic, OpenAI — alle brauchen einen AVV, bevor personenbezogene Daten übertragen werden.

**5. Datenschutz-Folgenabschätzung (DSFA/DPIA)**: Für KI-Use-Cases mit personenbezogenen Daten und hohem Risiko verpflichtend. Muss vor dem Go-Live, nicht danach, durchgeführt werden.

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Behörde | [BfDI — Datenschutz und KI](https://www.bfdi.bund.de) | Bundesbeauftragte für Datenschutz — offizielle Hinweise |
| 📖 Behörde | [HmbBfDI — Diskussionspapier KI](https://datenschutz-hamburg.de) | Hamburger Datenschutz — praxisnahes KI-Papier |

## Teste dein Verständnis

- [ ] Für welche deiner KI-Use-Cases ist eine DSFA verpflichtend?
- [ ] Hast du AVVs mit allen Cloud-Anbietern, die ihr aktuell nutzt?
- [ ] Wie implementiert ihr Right-to-be-Forgotten in eurem bestehenden oder geplanten Vector-Store?
