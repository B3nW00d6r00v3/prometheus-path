---
title: "Data Governance auf operativem Level"
module: "9.0"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Data Governance auf operativem Level

## Kernidee

Data Governance ist kein Papier-Konzept — es sind sieben operative Praxis-Bereiche, die zusammen sicherstellen, dass Daten verlässlich, auffindbar, sauber und DSGVO-konform sind. Ohne Governance verkommt selbst ein modernes Lakehouse zum Datenmüll.

## Im Detail

Die sieben Praxis-Bereiche operativer Data Governance:

1. **Data Ownership** — wer ist für welchen Datensatz verantwortlich? Ohne klare Ownership gibt es keine Rechenschaft.
2. **Data Quality** — gemessen, nicht behauptet. Vier Dimensionen: Completeness (vollständig?), Accuracy (korrekt?), Consistency (konsistent über Systeme?), Timeliness (aktuell?).
3. **Data Lineage** — woher kommen Daten, wie wurden sie transformiert? Ohne Lineage ist Debugging unmöglich und Audits riskant.
4. **Access Control** — wer darf was sehen? Rollenbasiert, dokumentiert, regelmäßig geprüft.
5. **Privacy by Design** — DSGVO-konforme Schemas von Anfang an. Nicht als Nachgedanke.
6. **Retention Policy** — wie lange werden Daten aufbewahrt? Pflicht unter DSGVO (Löschkonzept).
7. **Catalog & Discovery** — wie finden Mitarbeiter relevante Daten? Ohne Katalog ist ein Lakehouse eine Black Box.

**KI-Relevanz:** Jeder dieser Bereiche hat direkte Auswirkung auf KI-Use-Cases:
- Schlechte Data Quality → Modell lernt falsche Muster.
- Fehlende Lineage → Bias-Quellen unerkennbar.
- Kein Katalog → Daten für RAG nicht auffindbar.
- Fehlende Retention Policy → Right-to-be-Forgotten technisch nicht umsetzbar.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Standard | [DAMA-DMBOK](https://www.dama.org/cpages/body-of-knowledge) | Umfassendes Data-Management-Referenzwerk |
| Tool | [Open Data Catalog](https://opendatacatalog.org) | Einstieg in Daten-Katalog-Konzepte |

## Teste dein Verständnis

- [ ] Beschreibe einen konkreten Fall, wie fehlende Data Lineage einen KI-Use-Case gefährden kann.
- [ ] Was bedeutet „Privacy by Design" in der Praxis für ein Daten-Schema, das Kundennamen enthält?
- [ ] Warum ist „Data Quality gemessen, nicht behauptet" eine wichtige Formulierung — was ist der Unterschied?
