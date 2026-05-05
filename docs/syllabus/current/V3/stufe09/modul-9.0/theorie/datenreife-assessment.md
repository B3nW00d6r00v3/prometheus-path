---
title: "Datenreife-Assessment — die fünf Stufen"
module: "9.0"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Datenreife-Assessment — die fünf Stufen

## Kernidee

Nicht jede Organisation ist gleich weit in ihrer Fähigkeit, Daten für KI zu nutzen. Das modifizierte CMMI-Modell für Daten beschreibt fünf Stufen — von Excel-Silos bis zum strategischen Differenziator. Erst wer die eigene Stufe kennt, kann realistische Use-Cases auswählen.

## Im Detail

Das Modell basiert auf dem CMMI-Reifemodell, adaptiert für Daten-Infrastruktur und KI-Bereitschaft:

| Stufe | Name | Kennzeichen |
|---|---|---|
| 1 | **Initial** | Daten in Silos, viele Excel-Files, keine konsistenten Schemas |
| 2 | **Repeatable** | Erste zentrale Datenbanken, einzelne Reports etabliert, aber inkonsistent |
| 3 | **Defined** | Data Warehouse / Lakehouse als Single Source of Truth, dokumentierte Schemas |
| 4 | **Managed** | Data Governance institutionalisiert, Datenqualität gemessen, Data Lineage transparent |
| 5 | **Optimizing** | Datenstrategie als Wettbewerbsvorteil, kontinuierliche Verbesserung, ML/LLM-ready |

**Praxis-Anwendung:**

- Bewerte jede Daten-Domäne separat (Finanzdaten, Customer-Daten, Operations-Daten, Marketing-Daten).
- Eine Organisation kann in verschiedenen Domänen unterschiedliche Stufen haben.
- KI-Use-Cases, die Stufe 4-5 voraussetzen, aber auf Stufe 1-2 basieren, scheitern zuverlässig.

**Typischer Fehler:** Stufe 2-3 mit Stufe 4-5 verwechseln, weil ein Data Warehouse existiert, aber Governance fehlt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Framework | [Gartner Data Maturity Model](https://www.gartner.com) | Referenz-Modell |
| Standard | [DAMA-DMBOK](https://www.dama.org) | Data Management Body of Knowledge |

## Teste dein Verständnis

- [ ] Ordne eine dir bekannte Organisation einer der fünf Reifestufen zu — mit konkreter Begründung anhand der Kennzeichen.
- [ ] Warum sollte ein KI-Use-Case, der tägliche Daten-Frische benötigt, nicht auf Stufe-2-Infrastruktur implementiert werden?
- [ ] Was ist der konkrete Unterschied zwischen Stufe 3 (Defined) und Stufe 4 (Managed)?
