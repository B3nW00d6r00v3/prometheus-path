---
title: "Daten-Lock-in als unterschätztes Risiko"
module: "9.0"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Daten-Lock-in als unterschätztes Risiko

## Kernidee

Wer alle Daten in Snowflake oder Databricks speichert, ohne Migrierbarkeit zu testen, ist vendor-locked. Daten-Lock-in ist oft schwerwiegender als Tool-Lock-in, weil Daten nicht einfach kopiert werden können — und weil der Wechsel Monate dauern kann.

## Im Detail

Daten-Lock-in entsteht, wenn:
- Daten in proprietären Formaten gespeichert sind.
- Der Export zwar technisch möglich, aber prohibitiv teuer (Zeit, Bandbreite, Kosten) ist.
- Abhängige Pipelines, Integrations und Schemas migriert werden müssten.

**Vier Mitigations-Strategien:**

1. **Open-Format-Speicherung** — Parquet, Apache Iceberg, Delta Lake, Apache Hudi. Alle drei sind offen und von mehreren Engines lesbar. Keine proprietären Binärformate für primäre Daten.
2. **Catalog-Layer mit Multi-Engine-Support** — ein Datenkatalog, der nicht von einem einzigen Cloud-Provider abhängt, ermöglicht parallele Nutzung.
3. **Daten-Export-Tests alle 6 Monate** — aktiv prüfen: „Kann ich meine Daten in akzeptabler Zeit zu einem anderen Provider migrieren?" Wenn die Antwort unklar ist, ist das ein Signal.
4. **Multi-Cloud-Strategie für kritische Datenbestände** — zumindest kritische Daten über mehrere Provider verteilen oder auf portable Formate setzen.

*Verfallsdatum: Aug 2026 — Marktlage bei Cloud-Anbietern entwickelt sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Framework | [Apache Iceberg](https://iceberg.apache.org) | Offenes Tabellen-Format als Lock-in-Mitigation |
| Framework | [Delta Lake](https://delta.io) | Offenes Lakehouse-Format |

## Teste dein Verständnis

- [ ] Warum ist Daten-Lock-in oft schwerer zu lösen als Software-Lock-in?
- [ ] Was ist der Vorteil von Apache Iceberg gegenüber einem proprietären Cloud-Format?
- [ ] Beschreibe einen konkreten Test, den du alle 6 Monate durchführen würdest, um Daten-Lock-in zu prüfen.
