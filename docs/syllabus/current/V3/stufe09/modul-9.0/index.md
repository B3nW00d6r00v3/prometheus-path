---
title: "Modul 9.0: Datenstrategie"
module: "9.0"
type: modul
fast_track: true
effort: "4-6h"
stability: green
---

# Modul 9.0: Datenstrategie

**Aufwand:** 🔧 4-6h · 🧮 3-5h · 💼 15-22h  
**Voraussetzungen:** Stufe 5 (Praxis-Erfahrung), idealerweise Modul 8.1 (EDA)

## Warum dieses Modul existiert

Datenstrategie war ursprünglich nur ein einzelner Bullet im Operating-Model-Modul. Das war ein systematischer Fehler: Daten sind 2026 der wichtigste KI-Wettbewerbsvorteil — Modelle sind Commodity, **proprietäre, gut strukturierte, frische Daten sind nicht commoditisierbar**. Wer KI-Strategie macht, ohne Daten-Foundation zu prüfen, wählt Use-Cases aus, die ohne ausreichende Daten scheitern werden.

Datenstrategie kommt **vor** Use-Case-Identifikation: erst verstehen, welche Daten existieren und in welcher Reife — dann Use-Cases priorisieren, die zur Daten-Realität passen.

## Lernziel

Du führst eine **Datenreife-Bewertung** für eine reale Organisation durch, kennst die wichtigsten Daten-Architektur-Patterns (Warehouse, Lakehouse, Mesh), verstehst Data Governance auf operativem Level, und kannst Lock-in-Risiken bei Datenstrategie-Entscheidungen bewerten.

## Theorie

| Thema | Seite |
|---|---|
| Daten als Wettbewerbsvorteil 2026 | [theorie/daten-als-wettbewerbsvorteil.md](theorie/daten-als-wettbewerbsvorteil.md) |
| Datenreife-Assessment — die fünf Stufen | [theorie/datenreife-assessment.md](theorie/datenreife-assessment.md) |
| Daten-Architektur-Patterns 2026 | [theorie/daten-architektur-patterns.md](theorie/daten-architektur-patterns.md) |
| Data Governance auf operativem Level | [theorie/data-governance.md](theorie/data-governance.md) |
| KI-spezifische Datenanforderungen | [theorie/ki-spezifische-datenanforderungen.md](theorie/ki-spezifische-datenanforderungen.md) |
| Daten-Lock-in als unterschätztes Risiko | [theorie/daten-lock-in.md](theorie/daten-lock-in.md) |
| Daten-Make-vs-Buy-Entscheidung | [theorie/daten-make-vs-buy.md](theorie/daten-make-vs-buy.md) |
| DSGVO-Konformität als Daten-Strategie-Konstante | [theorie/dsgvo-konformitaet.md](theorie/dsgvo-konformitaet.md) |
| Anti-Patterns in Datenstrategie | [theorie/anti-patterns.md](theorie/anti-patterns.md) |

## Praxis: Hauptprojekt — Datenreife-Assessment für reale Organisation

Wähle die gleiche Organisation, die du in 9.1 weiterverwenden wirst (Job, Verein, Hobby, simulierte Beratung):

- **Datenreife-Bewertung** mit dem 5-stufigen Modell: In welcher Reifestufe ist die Organisation pro Datenbereich (z.B. Finanzdaten, Customer-Daten, Operations-Daten, Marketing-Daten)? Bewertungsraster mit klaren Kriterien.
- **Daten-Inventar**: Top-10-Datenquellen mit Volumen, Qualität (subjektiv 1-5), KI-Tauglichkeit.
- **Daten-Lücken-Analyse**: was fehlt für die wichtigsten KI-Use-Cases (zu identifizieren in 9.1)?
- **Architektur-Bewertung**: Warehouse, Lakehouse, Mesh — was ist da, was wäre passend?
- **Lock-in-Bewertung**: wo bist du in welchem Vendor gebunden? Mitigation-Möglichkeiten?
- **DSGVO-Reifegrad**: Privacy by Design wie weit umgesetzt?
- **Datenstrategie-Roadmap**: 6 / 12 / 24 Monate, was muss passieren, damit Daten-Foundation für KI-Skalierung steht?
- Im Portfolio: `stufe-9_strategie/9-0-datenstrategie/` mit Assessment-Dokument, Inventar, Roadmap, DSFA-Skizze (wenn relevant).

## Mehrwert-Mini-Projekte

- **Datenreife-Self-Assessment-Checkliste** als wiederverwendbares Markdown für künftige Org-Bewertungen.
- **Datenkatalog-Mini-Projekt**: 20-50 Datenquellen einer Org als strukturierter Katalog mit Owner, Volumen, Qualität, Use-Case-Tauglichkeit.

## Open-Source-Pfad

- [Apache Iceberg](https://iceberg.apache.org), [Delta Lake](https://delta.io), [Apache Hudi](https://hudi.apache.org) — offene Lakehouse-Tabellen-Formate.
- [DataHub](https://datahubproject.io) und [OpenMetadata](https://open-metadata.org) als OSS-Daten-Kataloge.
- [Great Expectations](https://greatexpectations.io) für Data-Quality-Tests.
- [Polars](https://www.pola.rs) und [DuckDB](https://duckdb.org) für lokale Daten-Exploration ohne Cloud-Bindung.

## Outcome-Check

- [ ] Datenreife-Bewertung mit klaren Kriterien dokumentiert
- [ ] Top-10-Datenquellen-Inventar
- [ ] Daten-Lücken-Analyse für anstehende Use-Cases
- [ ] Architektur-Bewertung (Warehouse / Lakehouse / Mesh)
- [ ] Lock-in-Bewertung mit Mitigations-Optionen
- [ ] DSGVO-Reifegrad dokumentiert
- [ ] Datenstrategie-Roadmap (6/12/24 Monate)
