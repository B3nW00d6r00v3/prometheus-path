---
title: "Modul 9.2: ROI & Business Case"
module: "9.2"
type: modul
fast_track: true
effort: "4-6h"
stability: green
---

# Modul 9.2: ROI & Business Case

**Aufwand:** 🔧 4-6h · 🧮 3-5h · 💼 12-18h  
**Voraussetzungen:** Modul 9.1, idealerweise 9.0

In Modul 3.3 hast du ROI auf einer einzelnen Use-Case-Ebene angerissen. Hier ist die Business-Case-Tiefe: TCO über mehrere Jahre, Sensitivity Analysis, Szenarien, Stakeholder-spezifische Kommunikation. Dieses Modul ist der Aufbau für realistische Capstone-Bewertung — und die wichtigste Disziplin, um KI-Projekte intern zu verkaufen.

## Lernziel

Du erstellst einen vollständigen Business Case für deinen Capstone-Use-Case mit TCO über 3 Jahre, Sensitivity Analysis, drei Szenarien (pessimistisch / realistisch / optimistisch), Pilot-Gate-Plan und Stakeholder-spezifischen Slide-Versionen.

## Theorie

| Thema | Seite |
|---|---|
| Wert-Kategorien systematisieren | [theorie/wert-kategorien.md](theorie/wert-kategorien.md) |
| Total Cost of Ownership (TCO) für KI | [theorie/tco-fuer-ki.md](theorie/tco-fuer-ki.md) |
| API-Cost realistisch schätzen | [theorie/api-cost-schaetzen.md](theorie/api-cost-schaetzen.md) |
| Hidden Costs of LLMs | [theorie/hidden-costs-llms.md](theorie/hidden-costs-llms.md) |
| Sensitivity Analysis | [theorie/sensitivity-analysis.md](theorie/sensitivity-analysis.md) |
| Time Horizons und Discount Rate | [theorie/time-horizons-discount-rate.md](theorie/time-horizons-discount-rate.md) |
| Adoption-Kurve realistisch annehmen | [theorie/adoption-kurve.md](theorie/adoption-kurve.md) |
| Confidence Levels — drei Szenarien | [theorie/confidence-levels-szenarien.md](theorie/confidence-levels-szenarien.md) |
| Stakeholder-spezifische Kommunikation | [theorie/stakeholder-kommunikation.md](theorie/stakeholder-kommunikation.md) |
| Pilot-Phasen mit klaren Gates | [theorie/pilot-phasen-gates.md](theorie/pilot-phasen-gates.md) |
| Anti-Patterns bei ROI | [theorie/anti-patterns.md](theorie/anti-patterns.md) |

## Praxis: Hauptprojekt — Vollständiger Business Case für Capstone

Wähle deinen Capstone-Use-Case aus 9.1 und erstelle einen **vollständigen Business Case**:

- **Wert-Quantifizierung** mit allen drei Kategorien (Cost / Revenue / Risk), wo anwendbar. Annahmen explizit dokumentiert.
- **TCO-Berechnung** für 3 Jahre: Initial + Laufend + Versteckt. Mit Detail-Aufschlüsselung.
- **Sensitivity Analysis**: was passiert bei +/- 20% in den drei wichtigsten Annahmen?
- **Drei Szenarien** (Pessimistisch / Base / Optimistisch) mit ROI, NPV, Payback Period.
- **Adoption-Kurve** mit Begründung *(Vertiefung in 9.6)*.
- **Pilot-Gate-Plan**: was muss nach Pilot erfüllt sein, damit Scale-Phase startet?
- **Stakeholder-spezifische Slides** (3 Versionen: CFO, CEO, CTO/Engineering, Mitarbeiter-Vertretung).
- Im Portfolio: `stufe-9_strategie/9-2-business-case/` mit Excel/Numbers-Datei (oder OSS-Alternative), Slides, Annahmen-Dokumentation.

## Mehrwert-Mini-Projekte

- **Persönliches ROI-Template** für zukünftige Capstone-Bewertungen — wiederverwendbar.
- **Cost-Tracker für API-Nutzung** — eigene Tabelle für aktuelle Pricing der Provider, monatlich aktualisiert.

## Open-Source-Pfad

- [LibreOffice Calc](https://www.libreoffice.org) statt Excel.
- [draw.io](https://draw.io) für Diagramme.
- [Marp](https://marp.app) für Markdown-basierte Slides als OSS-Alternative zu PowerPoint.

## Outcome-Check

- [ ] Wert in mindestens zwei Kategorien quantifiziert
- [ ] TCO über 3 Jahre vollständig berechnet
- [ ] Sensitivity Analysis mit Top-3-Annahmen
- [ ] Drei Szenarien dokumentiert
- [ ] Pilot-Gate-Plan definiert
- [ ] Mindestens zwei Stakeholder-spezifische Slide-Versionen
