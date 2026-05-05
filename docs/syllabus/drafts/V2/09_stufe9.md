# Stufe 9: KI-Strategie & Business

**Aufwand gesamt:** 🔧 25-45h · 🧮 18-32h · 💼 80-130h *(in v2.1 substanziell erhöht durch zwei neue Module 9.0 und 9.6, Modul 9.3 verstärkt, S9-Self-Assessment — siehe Abschnitt unten zur Begründung)*
**Voraussetzungen:** Stufen 1-3, Stufe 5 (Praxis-Erfahrung Pflicht für sinnvolle Strategie)
**Last verified:** Mai 2026 · **Re-check by:** Aug 2026 (volatile Module 9.5, 9.0) / Nov 2026 (stabile Inhalte)

Diese Stufe ist absichtlich nach den Praxis-Stufen platziert. **Strategie ohne Substrat ist Theater** — wer noch nie ein RAG-System gebaut hat, kann nicht beurteilen, ob ein KI-Use-Case in 3 Monaten oder 18 Monaten umsetzbar ist. Hier verbindest du Praxis-Erfahrung mit Business-Strategie, ROI-Quantifizierung, Operating-Model, Build-vs-Buy, dem EU AI Act in voller Tiefe — und (NEU in v2.1) Datenstrategie und Change Management als eigenständige Disziplinen.

**Capstone-Strategist (💼) startet hier**: KI-Strategie für eine reale Organisation (Job, Verein, Hobby) plus Pilot-Implementierung. *Capstone-spezifische Anforderungen siehe `17_capstone_c_strategist.md`.*

**Wichtige Strukturänderungen in v2.1:**

- **💼-Aufwand auf 80-130h erhöht** — in v2.0 war Stufe 9 mit 50-80h für 💼 deutlich zu schmal für einen Track, der Business-KI als Hauptdisziplin hat. Bootcamps und Executive-Programme haben hier 100-200h. Die Erhöhung ist der wichtigste Differenzierungs-Faktor gegenüber populären Strategist-Bootcamps.
- **Modul 9.0 Datenstrategie (NEU)** — Datenstrategie war in v2.0 nur ein Sub-Bullet in Modul 9.3 ("Datenstrategie als Voraussetzung"). Das war zu wenig: Daten sind 2026 der wichtigste KI-Wettbewerbsvorteil. Modul 9.0 macht es zur eigenständigen Disziplin **vor** Modul 9.1 — du verstehst Daten-Reife, *bevor* du Use-Cases auswählst, die ohne Daten-Foundation scheitern werden.
- **Modul 9.3 substanziell verstärkt** — Operating Model, KPI-Frameworks für KI, Governance-Tiefe (NIST AI RMF, ISO 42001 als praktische Anleitung statt nur Erwähnung).
- **Modul 9.6 Change Management (NEU)** — eigenständiges Modul am Ende der Stufe. Adoption-Curves, Stakeholder-Mapping, Betriebsrat-Praxis in Deutschland. War in v2.0 als Sub-Bullet in 9.3 eingebettet, was die Wichtigkeit verschleierte.
- **S9-Self-Assessment** — Pflicht-Anker für 💼 vor Stufe 10. Stakeholder-Brief mit ROI + Compliance-Argument für eine reale (oder simulierte) Organisation.
- **Capstone-Strategist-Update-Block** verschoben nach `17_capstone_c_strategist.md` — die Stufen-Datei wird fokussierter.

**Ergebnis nach Stufe 9:**
- **Du hast eine Datenreife-Bewertung deiner Organisation und kennst Lock-in-Risiken bei Datenstrategien** *(NEU in v2.1, Modul 9.0)*.
- Du identifizierst KI-Use-Cases auf strategischer Ebene mit Portfolio-Methodik.
- Du quantifizierst ROI mit dokumentierten Annahmen.
- Du verstehst Operating Models für KI-Skalierung mit KPI-Frameworks und Governance-Praxis *(verstärkt in v2.1)*.
- Du triffst Build-vs-Buy-Entscheidungen mit Total Cost of Ownership.
- Du beherrschst den EU AI Act mit allen Compliance-Anforderungen.
- **Du hast einen Change-Management-Plan mit Stakeholder-Mapping und Adoption-Curve** *(NEU in v2.1, Modul 9.6)*.
- 💼: Capstone-Strategist startet mit vollständiger Strategie + Pilot. **S9-Self-Assessment bestanden** *(NEU in v2.1)*.

---

## Modul 9.0: Datenstrategie *(NEU in v2.1, vor Modul 9.1)*

**Aufwand:** 🔧 4-6h · 🧮 3-5h · 💼 15-22h
**Last verified:** Mai 2026 · **Re-check by:** Aug 2026 *(Daten-Plattform-Landschaft volatil)*
**Voraussetzungen:** Stufe 5 (Praxis-Erfahrung), idealerweise Modul 8.1 (EDA)

### Warum dieses Modul existiert (NEU in v2.1)

Datenstrategie war in v2.0 nur ein einzelner Bullet im Operating-Model-Modul. Das war ein systematischer Fehler: Daten sind 2026 der wichtigste KI-Wettbewerbsvorteil — Modelle sind Commodity, **proprietäre, gut strukturierte, frische Daten sind nicht commoditisierbar**. Wer KI-Strategie macht, ohne Daten-Foundation zu prüfen, wählt Use-Cases aus, die ohne ausreichende Daten scheitern werden.

In v2.1 kommt Datenstrategie **vor** Use-Case-Identifikation: erst verstehen, welche Daten existieren und in welcher Reife — dann Use-Cases priorisieren, die zur Daten-Realität passen.

### Lernziel

Du führst eine **Datenreife-Bewertung** für eine reale Organisation durch, kennst die wichtigsten Daten-Architektur-Patterns (Warehouse, Lakehouse, Mesh), verstehst Data Governance auf operativem Level, und kannst Lock-in-Risiken bei Datenstrategie-Entscheidungen bewerten.

### Theorie

- 🟢 **Daten als Wettbewerbsvorteil 2026** — die zentrale These: Modelle sind Commodity, Daten sind Differenziator. **Was zählt:** proprietäre Daten (nur deine Organisation hat sie), Frische (aktuell statt historisch), Struktur (saubere Schemas statt PDF-Wildwuchs), Volumen (genug Statistik), Coverage (alle relevanten Use-Cases abgedeckt). Wer eines davon nicht hat, hat eine Daten-Lücke. [a16z — The Data Moat](https://a16z.com) · [HBR — Data as Competitive Advantage](https://hbr.org)

- 🟢 **Datenreife-Assessment — die fünf Stufen** — modifiziertes CMMI-Modell für Daten:
 - **Initial**: Daten in Silos, viele Excel-Files, keine konsistenten Schemas.
 - **Repeatable**: erste zentrale DBs, einzelne Reports etabliert, aber inkonsistent.
 - **Defined**: Data Warehouse / Lakehouse als Single Source of Truth, dokumentierte Schemas.
 - **Managed**: Data Governance institutionalisiert, Datenqualität gemessen, Daten-Lineage transparent.
 - **Optimizing**: Daten-Strategie als Wettbewerbsvorteil, kontinuierliche Verbesserung, ML/LLM-ready.

 [Gartner Data Maturity Model](https://www.gartner.com) · [DAMA-DMBOK](https://www.dama.org)

- 🟢 **Daten-Architektur-Patterns 2026** — drei dominante Modelle:
 - **Data Warehouse** (klassisch, strukturiert): Snowflake, BigQuery, Redshift. Stark für strukturierte Analytics, schwächer für KI mit unstrukturierten Daten.
 - **Data Lakehouse** (modern, hybrid): Databricks, Microsoft Fabric. Vereint Warehouse-Struktur und Lake-Flexibilität. 2026 oft Default für KI-relevante Architekturen.
 - **Data Mesh** (organisatorisch, dezentral): Daten gehören Domänen, nicht zentralem IT-Team. Pattern statt Tool. Sinnvoll bei großen Organisationen mit autonomen Geschäftsbereichen.

 *Verfallsdatum: Aug 2026.* [Data Mesh Principles](https://martinfowler.com/articles/data-mesh-principles.html) · [Databricks — Data Lakehouse](https://www.databricks.com)

- 🟢 **Data Governance auf operativem Level** — sieben Praxis-Bereiche: (1) **Data Ownership** (wer ist verantwortlich?). (2) **Data Quality** (gemessen, nicht behauptet — Completeness, Accuracy, Consistency, Timeliness). (3) **Data Lineage** (woher kommen Daten, wie wurden sie transformiert?). (4) **Access Control** (wer darf was sehen?). (5) **Privacy by Design** (DSGVO-konforme Schemas). (6) **Retention Policy** (wie lange aufbewahren?). (7) **Catalog & Discovery** (wie finden Mitarbeiter relevante Daten?). [DAMA-DMBOK](https://www.dama.org/cpages/body-of-knowledge) · [Open Data Catalog](https://opendatacatalog.org)

- 🟢 **KI-spezifische Datenanforderungen** — über klassische BI-Anforderungen hinaus: (1) **Trainingsdaten-Qualität** (Labeling, Bias-Awareness). (2) **Vector-Stores** (Modul 5.1). (3) **Embedding-Pipeline-Stabilität** (was passiert, wenn Embedding-Modell wechselt? Re-Embedding aller Dokumente?). (4) **Synthetic Data** als Augmentation. (5) **Data-for-Eval** (Test-Sets, die nicht im Training waren). [BCG — Data for AI](https://www.bcg.com)

- 🟢 **Daten-Lock-in als unterschätztes Risiko** — wer alle Daten in Snowflake oder Databricks hat, ist vendor-locked. Mitigations: (1) **Open-Format-Speicherung** (Parquet, Iceberg, Delta Lake — alle drei sind offen). (2) **Catalog-Layer**, der mehrere Engines unterstützt. (3) **Daten-Export-Tests** alle 6 Monate (kann ich meine Daten in akzeptabler Zeit zu einem anderen Provider migrieren?). (4) **Multi-Cloud-Strategie** für kritische Datenbestände. *Verfallsdatum: Aug 2026.*

- 🟢 **Daten-Make-vs-Buy-Entscheidung** — wo bekommen Daten her? (1) **Eigene generieren** (Web-Tracking, IoT, Customer-Interaction). (2) **Kaufen** (Datenmarktplätze, Branchen-Reports). (3) **Synthesieren** (synthetisch generierte Daten für Augmentation). (4) **Public/Open** (öffentliche Datensätze). 2026: Mix ist Default. Eigene Daten als Moat, gekauft als Augmentation, synthetisch als Lücken-Füller.

- 🔄 **DSGVO-Konformität als Daten-Strategie-Konstante** — bei deutscher/EU-Org gilt durchgehend: (1) **Datenminimierung** als Prinzip. (2) **Privacy by Design** in Schemas. (3) **Right-to-be-Forgotten** als technisches Feature (nicht nur als Policy — auch in Vector-Stores). (4) **Auftragsverarbeitungs-Verträge** mit allen Cloud-Anbietern. (5) **DSFA** für KI-Use-Cases mit personenbezogenen Daten. *Verfallsdatum: Aug 2026.* [BfDI — Datenschutz und KI](https://www.bfdi.bund.de) · [HmbBfDI — Diskussionspapier KI](https://datenschutz-hamburg.de)

- 🟢 **Anti-Patterns in Datenstrategie** — (1) **"Wir haben viele Daten"** ohne Qualitätsprüfung — Volumen ohne Qualität ist Müll. (2) **KI-Use-Case ohne Daten-Audit** — Use-Case scheitert nach 6 Monaten, weil Daten zu schlecht waren. (3) **Vendor-Tunnelvision** — alle Daten in einem Cloud-Anbieter ohne Lock-in-Awareness. (4) **Data-Lake-as-Trash-Can** — alles reinkippen, niemand findet was. (5) **Synthetic-Data-Wishful-Thinking** — synthetisch ersetzt nicht echte Daten in jeder Domäne.

### Praxis: Hauptprojekt — Datenreife-Assessment für reale Organisation

Wähle die gleiche Organisation, die du in 9.1 weiterverwenden wirst (Job, Verein, Hobby, simulierte Beratung):

- **Datenreife-Bewertung** mit dem 5-stufigen Modell:
 - In welcher Reifestufe ist die Organisation pro Datenbereich (z.B. Finanzdaten, Customer-Daten, Operations-Daten, Marketing-Daten)?
 - Bewertungsraster mit klaren Kriterien.
- **Daten-Inventar**: Top-10-Datenquellen mit Volumen, Qualität (subjektiv 1-5), KI-Tauglichkeit.
- **Daten-Lücken-Analyse**: was fehlt für die wichtigsten KI-Use-Cases (zu identifizieren in 9.1)?
- **Architektur-Bewertung**: Warehouse, Lakehouse, Mesh — was ist da, was wäre passend?
- **Lock-in-Bewertung**: wo bist du in welchem Vendor gebunden? Mitigation-Möglichkeiten?
- **DSGVO-Reifegrad**: Privacy by Design wie weit umgesetzt?
- **Datenstrategie-Roadmap**: 6 / 12 / 24 Monate, was muss passieren, damit Daten-Foundation für KI-Skalierung steht?
- Im Portfolio: `stufe-9_strategie/9-0-datenstrategie/` mit Assessment-Dokument, Inventar, Roadmap, DSFA-Skizze (wenn relevant).

### 🎁 Mehrwert-Mini-Projekte

- **Datenreife-Self-Assessment-Checkliste** als wiederverwendbares Markdown für künftige Org-Bewertungen.
- **Datenkatalog-Mini-Projekt**: 20-50 Datenquellen einer Org als strukturierter Katalog mit Owner, Volumen, Qualität, Use-Case-Tauglichkeit.

### 🌱 Open-Source-Pfad

- [Apache Iceberg](https://iceberg.apache.org), [Delta Lake](https://delta.io), [Apache Hudi](https://hudi.apache.org) — offene Lakehouse-Tabellen-Formate.
- [DataHub](https://datahubproject.io) und [OpenMetadata](https://open-metadata.org) als OSS-Daten-Kataloge.
- [Great Expectations](https://greatexpectations.io) für Data-Quality-Tests.
- [Polars](https://www.pola.rs) und [DuckDB](https://duckdb.org) für lokale Daten-Exploration ohne Cloud-Bindung.

### Outcome-Check

- [ ] Datenreife-Bewertung mit klaren Kriterien dokumentiert
- [ ] Top-10-Datenquellen-Inventar
- [ ] Daten-Lücken-Analyse für anstehende Use-Cases
- [ ] Architektur-Bewertung (Warehouse / Lakehouse / Mesh)
- [ ] Lock-in-Bewertung mit Mitigations-Optionen
- [ ] DSGVO-Reifegrad dokumentiert
- [ ] Datenstrategie-Roadmap (6/12/24 Monate)

---

## Modul 9.1: KI-Use-Cases identifizieren (strategisch)

In Modul 3.3 hast du Use-Case-Methodik für einzelne Ideen gelernt. Hier geht es um die **Portfolio-Ebene**: wie identifiziert eine Organisation systematisch ihre besten KI-Use-Cases? Welche Frameworks helfen, aus 50 Ideen die richtigen 3-5 auszuwählen? Wie verbindet man strategische Ziele mit operativen Use-Cases? **Hinweis v2.1:** Use-Case-Auswahl ohne Datenreife-Bewertung (Modul 9.0) ist Wunschdenken — dieses Modul setzt 9.0 voraus.

**Aufwand:** 🔧 4-6h · 🧮 3-5h · 💼 15-22h *(in v2.1 leicht erhöht durch tiefere Verzahnung mit 9.0 Datenstrategie)*
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 3.3, **Modul 9.0 (NEU in v2.1)**, Praxis-Erfahrung aus Stufen 5-6 (für 💼)

### Lernziel
Du führst eine vollständige Use-Case-Identifikation für eine reale Organisation durch: 20+ Ideen sammeln, mit Framework priorisieren, Top-5 vertiefen mit Use-Case-Canvas, **mit Datenreife-Bewertung pro Use-Case** *(NEU in v2.1)*. Mindestens ein Use-Case wird Capstone-Pilot.

### Theorie

- 🟢 **Strategy-First vs. Use-Case-First** — zwei Ansätze: (1) **Strategy-First**: von strategischen Zielen ableiten, welche KI-Use-Cases unterstützen ("wir wollen Customer Retention um 10% steigern, wo hilft KI?"). (2) **Use-Case-First**: bottom-up Ideen sammeln, dann strategisch bewerten. Beide haben Berechtigung — kombinieren ist oft am stärksten. [McKinsey — The State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)

- 🟢 **Wertschöpfungsketten-Analyse** — wo in deiner Organisation entsteht Wert? Wo wird Zeit verbraucht? Wo entstehen Fehler? Jeder Schritt der Wertschöpfungskette ist potenzieller KI-Use-Case-Kandidat. Klassische Frameworks: Porter's Value Chain, Business Model Canvas. [Strategyzer — Value Proposition Canvas](https://www.strategyzer.com/library/value-proposition-canvas)

- 🟢 **Use-Case-Quellen systematisch erschließen** — Methoden, um Ideen zu sammeln: (1) Mitarbeiter-Befragung ("welche manuelle Arbeit nervt dich?"). (2) Customer-Journey-Analyse. (3) Wettbewerbs-Beobachtung. (4) Branchen-Reports (BCG, McKinsey, Gartner). (5) Internal Hackathons. (6) Pain-Point-Workshops. [BCG — How to identify AI use cases](https://www.bcg.com)

- 🟢 **2026-Reality-Check: Was funktioniert heute zuverlässig?** — fünf Pattern, die in der Praxis konsistent Wert liefern (siehe auch Modul 3.3): Texterstellung/-bearbeitung, Wissensarbeit-Augmentation (Recherche, Synthese), Klassifikation und Triage, Suche und Retrieval (RAG), Analyse und Reporting. Was 2026 noch *nicht* zuverlässig: vollautonome Agents in komplexen Domänen, Kreativarbeit ohne Mensch, hochpräzise Faktenarbeit ohne Verifikation. *Verfallsdatum: Nov 2026.* [a16z — Production AI Use Cases](https://a16z.com/2024/11/13/the-state-of-generative-ai-in-the-enterprise/)

- 🟢 **Priorisierungs-Frameworks** — beyond Impact-Effort-Matrix aus 3.3:
 - **RICE Score** (Reach × Impact × Confidence / Effort) — von Intercom, gut für Produkt-Backlogs.
 - **Value vs. Complexity Matrix** — 2x2-Matrix mit Quick-Wins, Big Bets, Fill-Ins, Money-Pits.
 - **Weighted Scoring** — multiple Kriterien mit Gewichten (z.B. Strategic Fit 30%, ROI 25%, Feasibility 20%, Time-to-Market 15%, Risk 10%).
 - **MoSCoW** (Must / Should / Could / Won't have) für Roadmap-Prioritäten.

 [ProductPlan — RICE Framework](https://www.productplan.com/glossary/rice-scoring-model/)

- 🟢 **AI Use Case Portfolio** — statt einer einzelnen Initiative: ein Portfolio aus Use-Cases mit unterschiedlichen Risiko-Profilen. Klassisch: 70% Quick Wins (incrementell, geringe Risiko), 20% Strategische Initiativen (mittleres Risiko), 10% Moonshots (hohes Risiko, transformatives Potenzial). McKinsey's "Three Horizons of Growth" als Adaption für KI. [McKinsey — Three Horizons](https://www.mckinsey.com)

- 🟢 **Use-Case-Reifegrad bewerten** — nicht jeder Use-Case ist sofort umsetzbar. Reifegrad-Kategorien: (1) **Proven** — Standard-Anwendung mit etablierten Tools. (2) **Emerging** — möglich, aber Pilot nötig. (3) **Frontier** — Forschungs-nahe Ideen, hohes Risiko. Für Mittelstand 2026: 80% Proven, 15% Emerging, 5% Frontier ist realistische Mischung.

- 🟢 **Datenreife pro Use-Case bewerten** *(NEU in v2.1, verzahnt mit 9.0)* — der häufigste Use-Case-Killer 2024-2026 ist nicht die Technik, sondern fehlende oder schlechte Daten. Pro Use-Case bewerten: (1) **Welche Daten sind nötig?** (Eingangsdaten, Trainingsdaten, Ground-Truth für Eval). (2) **Sind sie vorhanden?** (intern, extern, gekauft, synthetisch). (3) **In welcher Qualität?** (Modul 9.0 Reifestufen). (4) **DSGVO-Status?** (5) **Refresh-Cycle?** (täglich vs. monatlich vs. einmalig). Use-Cases ohne ausreichende Datenreife: in Roadmap nach hinten verschieben oder Daten-Foundation-Projekt davor.

- 🟢 **Stakeholder-Buy-In als Use-Case-Kriterium** — der beste Use-Case scheitert, wenn niemand ihn will. Stakeholder-Mapping (siehe 3.3 und vertiefend in 9.6) plus konkrete Champion-Identifikation: wer in der Organisation **will** den Use-Case? Wer wird ihn **blockieren**? Beides muss vor Start klar sein.

- 🟢 **Branchen-spezifische Use-Case-Cluster** — Mai 2026 etablierte Pattern pro Branche:
 - **Mittelstand allgemein**: Wissensmanagement (RAG auf Firmen-Dokumente), Marketing-Automation, Support-Triage.
 - **B2B Services**: Lead-Qualifizierung, Proposal-Generierung, Onboarding-Automation.
 - **E-Commerce**: Product Recommendations, Customer Service, Content Personalization.
 - **Manufacturing**: Predictive Maintenance, Quality Control mit Computer Vision.
 - **Healthcare**: Documentation-Automation (nicht: Diagnose ohne Arzt!), Triage-Support.
 - **Legal**: Vertragsanalyse, Recherche-Synthese.

 *Verfallsdatum: Nov 2026.* [BCG Industry-Specific AI](https://www.bcg.com) · [Branchen-Vertiefung in Modul 11.2](#)

- 🟢 **Anti-Patterns bei Use-Case-Auswahl** — (1) **CEO-Pet-Project**: Use-Case wegen Vorstands-Buzzword statt Problem. (2) **Tech-Push**: "wir haben jetzt KI, was machen wir damit?" statt "wir haben Problem X". (3) **Boil-the-Ocean**: 50 Use-Cases gleichzeitig statt 3-5 fokussiert. (4) **Compliance-Blindness**: rechtliche Aspekte erst nach Pilot prüfen. (5) **Build-Bias**: alles selbst bauen statt Off-the-Shelf nutzen. (6) **Data-Blindness** *(NEU in v2.1)*: Use-Case wählen, ohne Datenreife zu prüfen — siehe Modul 9.0.

### Praxis: Hauptprojekt — Use-Case-Portfolio für reale Organisation

Wähle eine Organisation (eigene Firma, Verein, Hobby, fiktive Beratung) — **dieselbe wie in Modul 9.0**:

- **20+ Use-Case-Ideen sammeln** mit mindestens drei Sammlungs-Methoden (z.B. Stakeholder-Interviews, Wertschöpfungsketten-Analyse, Branchen-Recherche).
- **Priorisierung** mit zwei verschiedenen Frameworks (z.B. RICE + Weighted Scoring), Vergleich der Ergebnisse.
- **Top-5-Use-Cases vertiefen** mit AI Use Case Canvas aus 3.3.
- **Datenreife pro Top-5-Use-Case bewerten** *(NEU in v2.1)*: welche Daten sind nötig, sind sie vorhanden, in welcher Qualität, Roadmap-Anpassung wenn Daten fehlen.
- **Portfolio-Mix** dokumentieren: Anteil Quick Wins / Strategische Initiativen / Moonshots, Anteil Proven / Emerging / Frontier.
- **Reifegrad-Roadmap**: was kommt in 0-3 Monaten, 3-12 Monaten, 12+ Monaten?
- **Stakeholder-Map** für Top-3-Use-Cases (Champions, Blocker — Vertiefung in 9.6).
- Im Portfolio: `stufe-9_strategie/9-1-use-case-portfolio/` mit allen Canvases, Priorisierung, Roadmap, Datenreife-Bewertung.

**Capstone-Strategist (💼) Start**: einer der Top-3 Use-Cases wird dein Capstone — du wirst ihn in 9.2 (ROI), 9.4 (Build-vs-Buy), 9.5 (Compliance), 9.6 (Change Management) tiefer analysieren und in Stufe 10/11 piloten. *Capstone-spezifische Anforderungen siehe `17_capstone_c_strategist.md`.*

### 🎁 Mehrwert-Mini-Projekte
- **Persönliche Use-Case-Backlog-Datei** in Notion oder Markdown — laufende Liste, die du über Monate pflegst.
- **Branchen-Briefing** für deine Branche: 1-Pager mit den 5 wichtigsten KI-Use-Cases 2026 (mit Quellen).

### 🌱 Open-Source-Pfad

Use-Case-Methodik ist tool-unabhängig. Wer die Canvases als interaktives Tool will: [Excalidraw](https://excalidraw.com) oder [draw.io](https://draw.io).

### Outcome-Check

- [ ] 20+ Use-Case-Ideen aus 3+ Sammlungs-Methoden
- [ ] Priorisierung mit zwei Frameworks
- [ ] Top-5-Canvases vollständig
- [ ] **Datenreife-Bewertung pro Top-5-Use-Case** *(NEU in v2.1)*
- [ ] Portfolio-Mix dokumentiert
- [ ] Reifegrad-Roadmap
- [ ] Capstone-Use-Case identifiziert

---

## Modul 9.2: ROI & Business Case

In Modul 3.3 hast du ROI auf einer einzelnen Use-Case-Ebene angerissen. Hier ist die Business-Case-Tiefe: TCO über mehrere Jahre, Sensitivity Analysis, Szenarien, Stakeholder-spezifische Kommunikation. Dieses Modul ist der Aufbau für realistische Capstone-Bewertung — und die wichtigste Disziplin, um KI-Projekte intern zu verkaufen.

**Aufwand:** 🔧 4-6h · 🧮 3-5h · 💼 12-18h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 9.1, idealerweise 9.0

### Lernziel
Du erstellst einen vollständigen Business Case für deinen Capstone-Use-Case mit TCO über 3 Jahre, Sensitivity Analysis, drei Szenarien (pessimistisch / realistisch / optimistisch), Pilot-Gate-Plan und Stakeholder-spezifischen Slide-Versionen.

### Theorie

- 🟢 **Wert-Kategorien systematisieren** — drei Hauptkategorien für ROI:
 - **Cost Reduction**: weniger manuelle Arbeit (Stunden × Stundensatz × Anzahl Mitarbeiter), weniger Fehler, weniger Eskalationen.
 - **Revenue Increase**: höhere Conversion, mehr Sales, schnellere Time-to-Market, neue Produkte.
 - **Risk Reduction**: weniger Compliance-Strafen, weniger Bugs, bessere Entscheidungen, geringere Cyber-Risiken.

 Praxis: oft Mischung — Cost Reduction ist am leichtesten zu quantifizieren, Revenue Increase am wertvollsten, Risk Reduction am unsichersten. [HBR — How to Calculate the ROI of AI Projects](https://hbr.org)

- 🟢 **Total Cost of Ownership (TCO) für KI** — der häufigste Fehler: nur Lizenz-Cost rechnen. Echte Kostenposten:
 - **Initial**: Use-Case-Analysis, Datenaufbereitung, Modell-Auswahl/Training, Integration, Testing.
 - **Laufend**: Inferenz-Cost (API-Calls oder Compute), Daten-Pflege, Monitoring, Eval, Modell-Updates, Support.
 - **Versteckt**: Schulung, Change-Management, Opportunitätskosten, Risiko-Puffer, Compliance-Overhead.

 Faustregel: laufende Cost ist oft 30-50% der Initial-Cost pro Jahr. [Gartner — TCO for AI](https://www.gartner.com)

- 🟢 **API-Cost realistisch schätzen** — bei LLM-basierten Use-Cases: Cost = Anzahl Anfragen × durchschnittliche Tokens × Preis pro Token. Wichtig: Output-Tokens sind 3-5× teurer als Input. Lange Contexts und Reasoning-Modelle treiben Cost stark hoch. Multi-Model-Routing (siehe Modul 2.5) reduziert Cost um 60-80%. *Verfallsdatum: Aug 2026.* [LLM Stats Pricing](https://llm-stats.com)

- 🟢 **Hidden Costs of LLMs** — oft unterschätzt: (1) **Eval-Kosten**: bei jedem Modell-Wechsel/Prompt-Change muss evaluiert werden. (2) **Embedding-Re-Generation** bei RAG (wenn Embedding-Modell wechselt: alle Dokumente neu embedden). (3) **Context-Caching-Setup** (lohnt sich erst ab gewisser Volumen). (4) **Fallback-Cost** wenn Primär-Provider Outage hat.

- 🟢 **Sensitivity Analysis** — Annahmen sind oft unsicher. Sensitivity-Analyse zeigt, welche Annahme den ROI am stärksten beeinflusst. Beispiel: wenn Cost-Reduktion-Schätzung von 30% auf 20% sinkt, was passiert mit ROI? Wenn API-Cost sich verdoppelt, ist ROI noch positiv? [Strategyzer — Testing Business Ideas](https://www.strategyzer.com/library/testing-business-ideas)

- 🟢 **Time Horizons und Discount Rate** — KI-Projekte haben Initial-Cost vorne, Wert oft erst ab Monat 6-12. NPV (Net Present Value) berechnet diskontiert. Diskontierungsrate: typisch 8-15% je nach Branche. Bei kurzen Horizonten oft vernachlässigbar.

- 🟢 **Adoption-Kurve realistisch annehmen** — neue Tools werden nicht von 0 auf 100% am Tag 1 genutzt. Realistische Adoption-Kurven: 6 Monate, 12 Monate, oft S-Kurve. Der Wert pro Monat steigt also langsam, was den initial-ROI senkt. *Hinweis v2.1: Vertiefung der Adoption-Curves in Modul 9.6.* [Crossing the Chasm (Geoffrey Moore, klassisch)](https://en.wikipedia.org/wiki/Crossing_the_Chasm)

- 🟢 **Confidence Levels für ROI-Aussagen** — drei Szenarien: **Pessimistisch** (Worst Case), **Realistisch** (Base Case), **Optimistisch** (Best Case). Statt "ROI ist 250%" → "ROI liegt zwischen 80% (pessimistisch) und 400% (optimistisch), Base Case 250%". Ehrlicher und debattierbarer.

- 🟢 **Stakeholder-spezifische Kommunikation** — derselbe Business Case wird unterschiedlich präsentiert: **CFO** will TCO, NPV, Payback Period. **CEO** will Strategic Fit und Wettbewerbsvorteil. **CTO** will Technical Feasibility und Migration-Pfad. **Mitarbeiter-Vertretung** will Auswirkung auf Arbeit und Schulung.

- 🟢 **Pilot-Phasen mit klaren Gates** — statt "wir bauen 18 Monate" → "wir bauen 8 Wochen Pilot, mit definierten Erfolgs-Kriterien für nächste Phase". Klassisches Pilot-Modell: Discovery (2-4 Wochen) → Pilot (8-12 Wochen) → Scale (3-12 Monate). Jede Phase mit Go/No-Go-Decision. [Lean Startup](http://theleanstartup.com)

- 🟢 **Anti-Patterns bei ROI** — (1) **Overoptimistic Projections** ("KI wird 80% Zeitersparnis bringen"). (2) **Ignored Hidden Costs** (nur Lizenz, nicht Eval/Maintenance). (3) **Single Number** ohne Konfidenzintervall. (4) **No Pilot** — direkt Vollausbau ohne Validation. (5) **Sunk Cost Fallacy** im Pilot — auch wenn Pilot scheitert, wird weitergebaut.

### Praxis: Hauptprojekt — Vollständiger Business Case für Capstone

Wähle deinen Capstone-Use-Case aus 9.1 und erstelle einen **vollständigen Business Case**:

- **Wert-Quantifizierung** mit allen drei Kategorien (Cost / Revenue / Risk), wo anwendbar. Annahmen explizit dokumentiert.
- **TCO-Berechnung** für 3 Jahre: Initial + Laufend + Versteckt. Mit Detail-Aufschlüsselung.
- **Sensitivity Analysis**: was passiert bei +/- 20% in den drei wichtigsten Annahmen?
- **Drei Szenarien** (Pessimistisch / Base / Optimistisch) mit ROI, NPV, Payback Period.
- **Adoption-Kurve** mit Begründung *(Vertiefung in 9.6)*.
- **Pilot-Gate-Plan**: was muss nach Pilot erfüllt sein, damit Scale-Phase startet?
- **Stakeholder-spezifische Slides** (3 Versionen: CFO, CEO, CTO/Engineering, Mitarbeiter-Vertretung).
- Im Portfolio: `stufe-9_strategie/9-2-business-case/` mit Excel/Numbers-Datei (oder OSS-Alternative), Slides, Annahmen-Dokumentation.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliches ROI-Template** für zukünftige Capstone-Bewertungen — wiederverwendbar.
- **Cost-Tracker für API-Nutzung** — eigene Tabelle für aktuelle Pricing der Provider, monatlich aktualisiert.

### 🌱 Open-Source-Pfad
- [LibreOffice Calc](https://www.libreoffice.org) statt Excel.
- [draw.io](https://draw.io) für Diagramme.
- [Marp](https://marp.app) für Markdown-basierte Slides als OSS-Alternative zu PowerPoint.

### Outcome-Check
- [ ] Wert in mindestens zwei Kategorien quantifiziert
- [ ] TCO über 3 Jahre vollständig berechnet
- [ ] Sensitivity Analysis mit Top-3-Annahmen
- [ ] Drei Szenarien dokumentiert
- [ ] Pilot-Gate-Plan definiert
- [ ] Mindestens zwei Stakeholder-spezifische Slide-Versionen

---

## Modul 9.3: KI-Skalierung & Operating Model *(verstärkt in v2.1)*

Eine erfolgreiche Pilot-Implementierung ist nicht das Ziel — Skalierung über die Organisation ist es. Dieses Modul lehrt das Operating Model für KI: AI Factory vs. Center of Excellence, Governance-Strukturen, Talent-Strategie. **Verstärkt in v2.1:** KPI-Frameworks für KI-Skalierung, NIST AI RMF und ISO 42001 als praktische Anleitung statt nur Erwähnung. Wer KI nur in einem Team einsetzt, verschenkt 80% des Werts.

**Aufwand:** 🔧 4-6h · 🧮 3-5h · 💼 14-20h *(in v2.1 substanziell erhöht durch KPI-Frameworks und Governance-Praxis)*
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 9.1, 9.2, idealerweise 9.0

### Lernziel
Du verstehst die wichtigsten Operating-Models für KI-Skalierung, kennst die typischen Governance-Strukturen, kannst **KI-spezifische KPIs definieren und tracken**, und entwirfst einen Skalierungs-Plan für deinen Capstone-Use-Case mit konkreter Governance-Implementierung.

### Theorie

- 🟢 **AI Factory vs. Center of Excellence (CoE) vs. Decentralized vs. Federated** — vier dominante Modelle 2026:
 - **AI Factory** (zentralisiert, MIT/Karim Lakhani-Konzept): zentrales Team baut AI-Plattform, Geschäftsbereiche nutzen sie. Stark wenn: Effizienz-Skalierung wichtig, hohe technische Komplexität.
 - **Center of Excellence**: zentrales Team setzt Standards, schult, unterstützt — aber Geschäftsbereiche bauen selbst. Stark wenn: domain-spezifische Use-Cases vorherrschen.
 - **Decentralized**: jeder Geschäftsbereich macht eigenes KI-Programm. Stark bei: stark autonomen Geschäftsbereichen, völlig unterschiedlichen Use-Cases.
 - **Federated** (Hybrid): zentrales Team plus dezentrale Teams. Pragmatisch, am häufigsten in der Realität.

 *Verfallsdatum: Nov 2026.* [Karim Lakhani — Competing in the Age of AI (Buch)](https://www.competingintheageofai.com) · [BCG — Building the AI-Powered Organization](https://www.bcg.com)

- 🟢 **AI Governance — was muss reguliert sein?** — sieben Bereiche: (1) **Use-Case-Approval-Prozess**. (2) **Datenschutz und DSGVO**. (3) **Modell-Risiko-Bewertung** (kritisch / hoch / niedrig). (4) **Ethik-Prüfung** für sensitive Use-Cases. (5) **Vendor-Management** (welche externen LLMs darf wer nutzen?). (6) **Monitoring und Audit**. (7) **AI Literacy** (siehe Modul 9.5). [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) · [ISO 42001 (AI Management Systems)](https://www.iso.org/standard/81230.html)

#### KI-spezifische KPI-Frameworks *(NEU in v2.1)*

In v2.0 endete Operating-Model-Diskussion bei "wir brauchen Governance". Das war zu vage. Hier die konkrete Anleitung: **was misst eine Organisation, um KI-Skalierung zu steuern?**

- 🟢 **Drei KPI-Ebenen** — strukturierte Hierarchie:
 1. **Strategic KPIs** (für CEO/Vorstand): KI-Wertbeitrag absolut (€), Anzahl produktiver KI-Use-Cases, Time-to-Value pro Use-Case, AI Maturity Score (siehe weiter unten), Wettbewerbs-Position.
 2. **Operational KPIs** (für AI-Governance-Council): Use-Case-Pipeline-Health (wieviele in Discovery/Pilot/Scale?), Pilot-Success-Rate (wieviel % der Pilots gehen in Scale?), Cost-per-Outcome (€ pro KI-generiertem Wert), Compliance-Status (AI Literacy Coverage, DSFA-Status pro Use-Case).
 3. **System KPIs** (pro Use-Case): Eval-Metriken (Faithfulness, Task Success Rate — siehe Modul 5.0/5.4), Cost pro Anfrage, Adoption Rate, User Satisfaction (NPS für interne KI-Tools), Failure Rate, Incident Count.

- 🟢 **AI-Maturity-Score als Zusammenfassungs-KPI** — die fünf Stufen aus Modul 9.0 (Datenstrategie) plus Operating-Model-Reife (siehe weiter unten in diesem Modul). Eine Organisation kann auf jeder Stufe sein. Self-Assessment alle 6 Monate, dokumentiert in Strategy-Review.

- 🟢 **Eval-Querschnitt-Anker** *(NEU in v2.1)* — System-KPIs auf Use-Case-Ebene basieren auf dem Eval-Querschnitt (`13_querschnitt_eval.md`). Wer in 9.3 KPIs definiert, sollte den Querschnitt-Eval als Methodik-Foundation nutzen — nicht eigene Metriken erfinden.

- 🟢 **Anti-Patterns bei KPI-Definition** — (1) **Vanity Metrics**: "wie viele Mitarbeiter haben KI-Tools genutzt?" sagt nichts über Wert. (2) **Single-Number-Tyranny**: ein einziger ROI-Wert ohne Konfidenzintervall. (3) **Output statt Outcome**: "1000 KI-generierte E-Mails" statt "Open-Rate +5%". (4) **Tracking-ohne-Action**: KPIs werden gemessen, aber niemand reagiert auf Veränderungen.

#### Governance-Praxis: NIST AI RMF und ISO 42001 *(NEU in v2.1)*

In v2.0 wurden NIST AI RMF und ISO 42001 nur erwähnt. Hier die operative Anleitung — was bedeutet es konkret, sie umzusetzen?

- 🟢 **NIST AI RMF — die vier Funktionen praktisch** —
 - **Govern**: AI Council etablieren, Use-Case-Approval-Prozess dokumentieren, Verantwortlichkeiten klären (RACI-Matrix).
 - **Map**: KI-Inventar pflegen (alle Use-Cases mit Metadaten), Risiko-Klassifikation pro Use-Case (siehe Modul 9.5), Stakeholder-Map pro Use-Case (siehe Modul 9.6).
 - **Measure**: KPIs aus dem Block oben, Monitoring-Frequenz pro KPI, Schwellenwerte für Eskalation.
 - **Manage**: Incident-Response-Plan, regelmäßige Risiko-Re-Bewertung (alle 6-12 Monate), Continuous-Improvement-Process.

 [NIST AI RMF Playbook](https://www.nist.gov/itl/ai-risk-management-framework) (Pflicht-Lektüre für 💼 in v2.1)

- 🟢 **ISO 42001 als Audit-Vorbereitung** — Internationaler Standard für AI Management Systems. Zertifizierung möglich (analog zu ISO 9001/27001), zunehmend nachgefragt. Praxis: 12-18 Monate Vorlauf für Zertifizierung. Kern-Elemente: Policy, Roles, Risk Assessment, Operational Controls, Performance Evaluation, Continual Improvement. Auch für nicht-zertifizierende Organisationen als Strukturierungs-Hilfe nützlich. [ISO 42001 Overview](https://www.iso.org/standard/81230.html)

- 🟢 **AI Governance Council / AI Ethics Board** — viele größere Organisationen 2026 haben dedizierte Gremien für: Use-Case-Approval, Risiko-Bewertung, Eskalation bei kritischen Fragen. Cross-funktional besetzt: IT, Legal, Compliance, Datenschutz, Ethik, Business. [Microsoft Responsible AI Council](https://www.microsoft.com/en-us/ai/our-approach)

- 🟢 **Talent-Strategie für KI** — drei Dimensionen: (1) **Build vs. Buy vs. Partner** für Talent (eigenes Team aufbauen, externe Beratung, Off-the-Shelf-Tools mit minimalem Talent). (2) **Up-Skilling vs. New Hires**: bestehende Mitarbeiter qualifizieren oder neue einstellen? Beides nötig. (3) **AI-Native vs. AI-Augmented Teams**: brauchst du Spezialisten oder reicht es, alle zu schulen? [LinkedIn Workforce Report — AI Skills](https://www.linkedin.com)

- 🟢 **AI Platform vs. Tool Sprawl** — Anti-Pattern 2024-2026: jedes Team baut eigene KI-Tools, jeder nutzt einen anderen LLM-Provider, niemand teilt. Lösung: AI Platform als interne Service-Schicht. Komponenten: gemeinsamer LLM-Gateway (LiteLLM, OpenRouter), gemeinsames RAG-Backend, gemeinsames Eval-Framework, gemeinsames Monitoring. [Anyscale — Building AI Platforms](https://www.anyscale.com)

- 🟢 **Operating-Model-Reife — fünf Stufen** *(NEU in v2.1, ergänzend zu Datenreife aus 9.0)*:
 - **Initial**: Einzelne KI-Pilots, keine Plattform, kein Governance.
 - **Repeatable**: Pilots erfolgreich, erste Standards (Modell-Wahl, Eval), aber keine zentrale Plattform.
 - **Defined**: AI Platform existiert, Governance-Council aktiv, KPIs etabliert.
 - **Managed**: NIST AI RMF / ISO 42001 umgesetzt, Continuous-Improvement, mehrere Use-Cases produktiv.
 - **Optimizing**: AI als Differenziator, kontinuierliche Skalierung, Cross-Org-Wissen-Transfer institutionalisiert.

 Dies ergänzt das Datenreife-Modell aus 9.0. Eine Organisation kann auf der Datenreife-Achse weiter sein als auf der Operating-Model-Achse oder umgekehrt.

- 🟢 **Operating Model anpassen über die Zeit** — frühe Phase oft zentralisiert (AI Factory), reife Phase oft federiert. Operating Model ist nicht statisch.

### Praxis: Hauptprojekt — Operating Model + Skalierungs-Plan + KPI-System

Für deine Organisation aus 9.1/9.2:

- **Aktuelle Reife bewerten** auf BEIDEN Achsen: Datenreife (aus 9.0) und Operating-Model-Reife.
- **Operating Model entscheiden**: zentral / dezentral / hybrid? Begründung.
- **Governance-Struktur entwerfen** *(verstärkt in v2.1)*: AI Council / Ethics Board, Use-Case-Approval-Prozess, Risiko-Klassifikation, RACI-Matrix für Verantwortlichkeiten. NIST AI RMF als Strukturierungs-Hilfe.
- **KPI-System entwickeln** *(NEU in v2.1)*: Strategic / Operational / System KPIs auf den drei Ebenen. Mindestens 5 KPIs pro Ebene, mit Datenquelle, Frequenz, Schwellenwerten für Eskalation.
- **Talent-Plan**: welche Rollen brauchst du in 6 / 12 / 24 Monaten?
- **AI-Platform-Skizze**: was muss als zentrale Service-Schicht existieren? Was bleibt dezentral?
- **ISO 42001-Bereitschafts-Bewertung**: Selbst-Einschätzung der 7 Kern-Elemente. Was fehlt für Zertifizierung in 12-18 Monaten?
- **Skalierungs-Roadmap**: vom Pilot (Capstone) zu 5+ Use-Cases in 24 Monaten.
- Im Portfolio: `stufe-9_strategie/9-3-operating-model/` mit Strategy-Dokumenten, KPI-Tabellen, RACI-Matrix, Roadmap.

### 🎁 Mehrwert-Mini-Projekte
- **KI-Maturity-Self-Assessment-Checkliste** (Daten + Operating Model) als wiederverwendbares Markdown.
- **KPI-Dashboard-Skizze** in Notion oder Airtable für deine Org.

### 🌱 Open-Source-Pfad
Strategie-Modelle sind tool-unabhängig. KPI-Tracking: [Apache Superset](https://superset.apache.org), [Metabase](https://www.metabase.com) als OSS-BI.

### Outcome-Check
- [ ] AI-Maturity-Bewertung (Daten + Operating Model)
- [ ] Operating Model gewählt mit Begründung
- [ ] Governance-Struktur mit RACI-Matrix entworfen
- [ ] **KPI-System auf 3 Ebenen mit mindestens 15 KPIs** *(NEU in v2.1)*
- [ ] **NIST AI RMF Map auf eigene Org angewendet** *(NEU in v2.1)*
- [ ] Talent-Roadmap (6/12/24 Monate)
- [ ] AI-Platform-Skizze
- [ ] Skalierungs-Roadmap

---

## Modul 9.4: Build-vs-Buy & Wettbewerbsvorteile

Sollst du das KI-System selbst bauen oder Off-the-Shelf-Tools kaufen? Die Antwort ist nicht "immer Build" — und nicht "immer Buy". Dieses Modul lehrt strukturierte Build-vs-Buy-Entscheidungen mit Total-Cost-of-Ownership, Strategic Fit und Vendor-Lock-in-Bewertung. Plus: wann KI tatsächlich Wettbewerbsvorteil schafft und wann sie Commodity wird.

**Aufwand:** 🔧 4-6h · 🧮 3-4h · 💼 10-15h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 9.0, 9.2, 9.3

### Lernziel
Du triffst eine begründete Build-vs-Buy-Entscheidung für deinen Capstone-Use-Case mit dokumentiertem TCO-Vergleich, Strategic-Fit-Bewertung und Vendor-Lock-in-Analyse.

### Theorie

- 🟢 **Build-vs-Buy-Decision-Framework** — fünf Dimensionen:
 - **Strategic Fit**: ist das KI-System Kerngeschäft (Build) oder Hygiene-Faktor (Buy)?
 - **Available Solutions**: gibt es etablierte Off-the-Shelf-Tools? Wie reif sind sie?
 - **TCO-Vergleich**: Build vs. Buy auf 3-5 Jahre.
 - **Time-to-Market**: wie schnell brauchst du die Lösung?
 - **Vendor-Lock-in-Risk**: wie stark machst du dich abhängig?

 [a16z — Build vs. Buy in AI](https://a16z.com) · [Gartner — Build vs Buy Framework](https://www.gartner.com)

- 🟢 **Build-Stärken** — wenn Build die richtige Wahl ist: (1) **Wettbewerbsvorteil** entsteht durch das System (z.B. proprietäre Daten + maßgeschneidertes Modell). (2) **Kerngeschäft** betroffen, niemand sonst hat dieselben Anforderungen. (3) **Keine Off-the-Shelf-Lösung** mit ausreichender Reife. (4) **Stark spezialisierte Domäne**. (5) **Daten-Sensitivität** zu hoch für Cloud-Vendoren.

- 🟢 **Buy-Stärken** — wenn Buy die richtige Wahl ist: (1) **Standard-Use-Case** (z.B. Customer Support Bot, Marketing-Copy-Generierung). (2) **Time-to-Market entscheidend**. (3) **Kein internes Talent für Build**. (4) **Etablierte Vendoren** mit guter Roadmap. (5) **Cost-effizient** bei kleinen Volumes.

- 🟢 **Hybrid-Strategien als 2026-Realität** — selten ist es schwarz-weiß. Pattern:
 - **Buy + Customize**: kommerzielles Tool (z.B. Salesforce Agentforce) mit eigener Konfiguration und Daten.
 - **Build on Buy**: eigene App auf fremder LLM-API (z.B. dein RAG-System auf Anthropic-API).
 - **Hybrid Stack**: Standard-Aufgaben mit Buy, Differenzierungs-Aufgaben mit Build.

- 🟢 **Total Cost of Ownership detailliert für Build-vs-Buy**:
 - **Build TCO**: Entwicklung (3-12 Monate × Team-Size × Cost), Initial Infrastructure (GPUs, Cloud), Maintenance (oft 30-50% Initial pro Jahr), Updates und Modell-Replacement, internes Support-Team.
 - **Buy TCO**: Lizenz pro Jahr, Implementation Services, Customization, Integration mit eigenen Systemen, Schulung, Vendor Management.

- 🟢 **Vendor-Lock-in bewerten** — Fragen vor Buy: (1) Wie aufwändig ist die Migration zu Alternative? (2) Sind Daten exportierbar? (3) Sind Standards (OpenAPI, MCP) supportet? (4) Wie ist die Vendor-Stabilität (Funding, Marktanteil)? (5) Was passiert bei Insolvenz oder Akquisition? *Verbindung zu Modul 9.0: Daten-Lock-in als verwandtes Risiko.* [Vendor Risk Management Frameworks](https://www.gartner.com)

- 🔄 **MCP als Vendor-Lock-in-Mitigations-Faktor** — siehe Modul 5.3: MCP entkoppelt Tool-Definition von LLM-Provider. Wer Tools als MCP-Server baut, kann Provider wechseln ohne Tool-Refactoring. Wichtige strategische Entscheidung. *Verfallsdatum: Nov 2026.*

- 🟢 **Wann ist KI Wettbewerbsvorteil, wann Commodity?** — kontroverse Frage 2026. Argumente:
 - **KI als Commodity**: alle haben Zugang zu Frontier-Modellen, Differenzierung wird schwer.
 - **KI als Wettbewerbsvorteil**: proprietäre Daten + spezialisierte Anwendung + Process-Integration sind nicht commoditisierbar.

 Wahrheit liegt dazwischen: **Modelle sind Commodity, Anwendung mit eigenen Daten ist Differenziator**. *Direkter Bezug zu Modul 9.0: Daten als Moat.* [HBR — Why AI Won't Be a Strategic Differentiator (kontrovers)](https://hbr.org) · [Andrew Ng — AI Strategy](https://www.deeplearning.ai)

- 🟢 **Daten als Moat** — der wichtigste Wettbewerbsvorteil 2026 sind nicht KI-Modelle, sondern **Daten**: proprietäre, gut strukturierte, frische Daten. Modelle kann jeder nutzen, deine Daten kann nur deine Organisation nutzen. Daten-Strategie ist KI-Strategie. *Vertiefung in Modul 9.0.* [a16z — The Data Moat](https://a16z.com)

- 🟢 **First-Mover vs. Fast-Follower** — typische Frage: wann zuschlagen, wann abwarten? In KI 2026:
 - **First-Mover-Vorteil**: wenn Use-Case Lerneffekte hat (Datenkraft), Markt-Standards setzt, oder schnelle Adoption Lock-in schafft.
 - **Fast-Follower-Vorteil**: wenn Tools/Modelle schnell besser werden, frühe Investitionen schnell veraltet, Standardisierung hilft.

 In den meisten KI-Use-Cases 2026: **Fast-Follower mit eigenen Daten** ist die robustere Strategie. First-Mover oft vor allem für Spezial-Player.

- 🟢 **Anti-Patterns** — (1) **Build-Bias**: alles selbst bauen weil "wir können das auch". (2) **NIH-Syndrome** ("Not Invented Here"). (3) **Buy-Naivität**: nur Lizenz-Cost rechnen. (4) **Wettbewerbsvorteils-Theater**: Standard-Use-Case als "strategischer Differenziator" verkauft. (5) **Premature Scaling**: Build vor Validation.

### Praxis: Hauptprojekt — Build-vs-Buy für Capstone

Für deinen Capstone-Use-Case:

- **Marktanalyse**: welche Off-the-Shelf-Lösungen gibt es? Mindestens 5 Vendoren oder OSS-Tools recherchieren.
- **TCO-Vergleich** über 3 Jahre: Build vs. Buy vs. Hybrid. Mit detaillierter Aufschlüsselung.
- **Strategic-Fit-Bewertung**: ist das Kerngeschäft? Differenziator?
- **Vendor-Lock-in-Analyse** für die Top-2-Buy-Optionen.
- **Daten-Moat-Bewertung**: hast du proprietäre Daten, die Build rechtfertigen? *(Verzahnung mit 9.0)*
- **Empfehlung mit Begründung**: Build / Buy / Hybrid? Warum?
- **Risiko-Plan**: was ist das schlimmste Szenario der gewählten Option, wie mitigierst du?
- Im Portfolio: `stufe-9_strategie/9-4-build-vs-buy/` mit Marktanalyse, TCO-Spreadsheet, Empfehlungs-Dokument.

### 🎁 Mehrwert-Mini-Projekt
**Vendor-Comparison-Sheet** als wiederverwendbares Template für künftige Build-vs-Buy-Entscheidungen.

### 🌱 Open-Source-Pfad
Build-vs-Buy ist tool-unabhängig. Für OSS als Alternative zu kommerziellen Tools: bei jeder Buy-Option auch OSS-Alternative recherchieren (z.B. Ollama-Stack statt Anthropic-API für DSGVO-sensible Use-Cases).

### Outcome-Check
- [ ] Mindestens 5 Vendoren / OSS-Tools recherchiert
- [ ] TCO-Vergleich über 3 Jahre dokumentiert
- [ ] Strategic-Fit-Bewertung
- [ ] Vendor-Lock-in-Analyse
- [ ] Daten-Moat-Bewertung *(Verbindung zu 9.0)*
- [ ] Empfehlung mit Begründung
- [ ] Risiko-Plan

---

## Modul 9.5: EU AI Act & Compliance vertieft

In Modul 2.4 hast du DSGVO-Basics und einen AI-Literacy-Hinweis bekommen. Hier ist die **Tiefe**: EU AI Act Risikoklassen, Conformity Assessment, NIST AI RMF, ISO 42001, AI Literacy als formale Schulungsverantwortung. Das ist 2026 nicht mehr optional — es ist Pflicht für jede Organisation, die in der EU KI einsetzt. **Wer das ignoriert, riskiert Strafen bis 35 Millionen Euro oder 7% des globalen Umsatzes.**

**Aufwand:** 🔧 5-8h · 🧮 4-6h · 💼 14-20h *(in v2.1 leicht erhöht durch Praxis-Tiefe)*
**Last verified:** Mai 2026 · **Re-check by:** Aug 2026 *(volatile Compliance-Auslegung)*
**Voraussetzungen:** Modul 2.4, ideal alle vorherigen Stufen, Modul 9.3

### Lernziel
Du verstehst den EU AI Act in seinen wichtigen Komponenten, kannst eine Risikoklassifizierung für KI-Use-Cases durchführen, und entwirfst einen Compliance-Plan für deinen Capstone-Use-Case.

### Theorie

- 🔄 **EU AI Act — Status Mai 2026** — Verordnung 2024/1689, gestaffelt eingeführt:
 - **2.2.2025**: Verbote (Social Scoring, Emotion Recognition am Arbeitsplatz/Schule, etc.) und AI Literacy (Art. 4) gelten.
 - **2.8.2025**: GPAI-Provider (General-Purpose AI Models) Pflichten gelten.
 - **2.8.2026**: Hauptanwendung — Hochrisiko-Pflichten gelten weitgehend.
 - **2.8.2027**: Hochrisiko-Pflichten für integrierte Sicherheits-Komponenten.

 Mögliche Verschiebungen via Digital Omnibus diskutiert. *Verfallsdatum: Aug 2026.* Live-Quelle für Status: [AI Act Service Desk Timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline) · [EU Commission AI Act Page](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)

- 🟢 **Risikoklassen des AI Act** —
 - **Unacceptable Risk (verboten)**: Social Scoring durch Behörden, Emotion Recognition am Arbeitsplatz, Biometrische Massenüberwachung (mit Ausnahmen). Verboten seit 2.2.2025.
 - **High Risk**: KI in kritischen Infrastrukturen, Bildung, Beschäftigung, Strafverfolgung, etc. Aufgelistet in Annex III. Strenge Pflichten: Risiko-Management, Datenqualität, Doku, Monitoring, Human Oversight, Genauigkeit, Robustheit.
 - **Limited Risk**: KI mit Transparenz-Pflichten (Chatbots, Deepfakes — User muss erkennen, dass KI im Spiel ist).
 - **Minimal Risk**: Spam-Filter, KI in Spielen — kaum reguliert, freiwillige Codes of Conduct.

 [AI Act Annex III](https://artificialintelligenceact.eu/annex/3/) · [AI Act Explorer](https://artificialintelligenceact.eu)

- 🟢 **AI Literacy nach Art. 4 — die wichtigste Pflicht für die meisten Organisationen** — gilt seit 2.2.2025: **Jede Organisation, die KI in der EU einsetzt, muss sicherstellen, dass die mit KI arbeitenden Mitarbeiter:innen ausreichende KI-Kompetenz haben.** Konkret heißt das: Schulungs-Programme entwickeln, Schulungen dokumentieren, Auffrischung sicherstellen. Was "ausreichend" heißt, ist nicht im Detail definiert — angemessen für Aufgabe und Risiko. Pflicht für jeden, der mit KI arbeitet, nicht nur Entwickler. [EU AI Act Service Desk — AI Literacy Q&A](https://ai-act-service-desk.ec.europa.eu/en/topics/ai-literacy-questions-related-to-article-4) · [Algorithm Watch — AI Literacy Guide](https://algorithmwatch.org)

- 🟢 **Conformity Assessment für High-Risk-Systeme** — vor Inverkehrbringen muss High-Risk-System geprüft werden. Bei meisten internen Anwendungen: **Self-Assessment**. Bei sicherheits-kritischen Systemen: **Externes Notified Body**. Dokumentations-Anforderungen: Risiko-Management-System, Datenqualitäts-Doku, Technische Doku, Logging, Bias-Testing. [Conformity Assessment Guide](https://digital-strategy.ec.europa.eu)

- 🟢 **GPAI-Pflichten (General-Purpose AI Models)** — gilt für Foundation-Modell-Provider (OpenAI, Anthropic, Google, Meta, etc.): Transparenz über Trainings-Daten, Copyright-Compliance, Energie-Verbrauch dokumentieren. Bei "Systemic Risk"-Modellen (sehr großen): zusätzlich Adversarial Testing, Cyber-Sicherheit, Incident Reporting. Du als Anwender bist meistens nicht direkt betroffen — aber wenn du Foundation-Models fine-tunest und vertreibst, schon. [GPAI Code of Practice](https://digital-strategy.ec.europa.eu)

- 🟢 **DSGVO-Schnittmenge mit AI Act** — beide gelten parallel. Wichtige Schnittstellen: (1) Personenbezogene Daten in Trainings-Daten. (2) Automated Decision-Making (Art. 22 DSGVO). (3) Recht auf Erklärung. (4) Right to be Forgotten in Vector-Stores. Bei Konflikten: oft strengeres Recht. [DSGVO und AI](https://www.bfdi.bund.de) · [HmbBfDI — AI und Datenschutz](https://datenschutz-hamburg.de)

- 🟢 **NIST AI Risk Management Framework (RMF)** — US-Standard, aber auch in EU oft als Best Practice genutzt. *Verbindung zu Modul 9.3: dort wird NIST AI RMF als Strukturierungs-Hilfe für Operating Model praktisch angewendet.* Vier Kern-Funktionen: **Govern**, **Map**, **Measure**, **Manage**. Anwendbar auch für nicht-regulierte KI als interner Standard. [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)

- 🟢 **ISO/IEC 42001 — AI Management Systems Standard** — internationaler Standard für Management-Systeme spezifisch für KI. *Verbindung zu Modul 9.3: dort wird ISO 42001 als Audit-Vorbereitungs-Rahmen praktisch angewendet.* Ähnlich wie ISO 9001 (Qualität) oder ISO 27001 (Informations-Sicherheit), aber für KI. Zertifizierung möglich, zunehmend nachgefragt. [ISO 42001 Overview](https://www.iso.org/standard/81230.html)

- 🟢 **Risikoklassifizierung-Checkliste für eigene Use-Cases** — 5 Fragen: (1) Beeinflusst der Use-Case Beschäftigung, Bildung, Strafverfolgung, kritische Infrastruktur? (2) Werden personenbezogene Daten verarbeitet? (3) Trifft die KI Entscheidungen mit signifikanten Auswirkungen auf Personen? (4) Ist Transparenz nötig (User muss wissen, dass KI im Spiel ist)? (5) Welche AI-Literacy-Anforderungen gelten für die Mitarbeiter?

- 🟢 **Strafen** — bei Verstoß gegen verbotene Praktiken: bis **35 Millionen Euro oder 7% des globalen Jahresumsatzes** (was höher ist). Bei Verstoß gegen Hochrisiko-Pflichten: bis **15 Millionen Euro oder 3%**. Bei falschen Angaben gegenüber Behörden: bis **7,5 Millionen Euro oder 1%**. [AI Act Article 99](https://artificialintelligenceact.eu/article/99/)

- 🟢 **Praktischer Compliance-Workflow für Organisationen** —
 1. **Inventory**: alle KI-Systeme im Einsatz auflisten.
 2. **Classify**: jeden Use-Case in Risikoklassen einordnen.
 3. **Gap Analysis**: was fehlt zur Compliance pro Use-Case?
 4. **AI Literacy Plan**: Schulungs-Programm aufsetzen.
 5. **Documentation**: Risiko-Management-System, Datenqualitäts-Doku, Logging.
 6. **Governance**: Approval-Prozess, AI Council (siehe 9.3).
 7. **Monitoring**: laufende Eval und Risiko-Re-Bewertung.
 8. **Incident Response**: Plan für KI-Incidents (Halluzinationen mit Schaden, Bias-Vorfälle, etc.).

- 🔄 **Live-Quellen für aktuelle Compliance-Praxis** — Recht ändert sich, Auslegungen reifen. Empfehlung: [AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu) (offizielle EU-Quelle), [DLA Piper AI Act Tracker](https://knowledge.dlapiper.com), [Heise — Recht & KI](https://www.heise.de/thema/kuenstliche-intelligenz), [Algorithm Watch](https://algorithmwatch.org) für deutsche/EU-Perspektive. *Verfallsdatum: Aug 2026.*

### Praxis: Hauptprojekt — Compliance-Plan für Capstone

Für deinen Capstone-Use-Case:

- **Risikoklassifizierung** mit der 5-Fragen-Checkliste plus AI Act Annex III.
- **Compliance-Gap-Analyse**: was ist erfüllt, was fehlt?
- **Datenschutz-Folgenabschätzung (DSFA / DPIA)** wenn personenbezogene Daten relevant sind. [BfDI — DSFA Templates](https://www.bfdi.bund.de)
- **AI-Literacy-Plan** für die Org/Team: welche Rollen brauchen welches KI-Wissen, wie schulst du, wie dokumentierst du?
- **Risiko-Management-System** dokumentieren: identifizierte Risiken, Mitigations, Monitoring-Plan.
- **Conformity-Self-Assessment** falls High-Risk (auch wenn dein Use-Case low-risk ist, mache es als Übung).
- **Incident-Response-Plan**: was tun, wenn KI versagt und Schaden entsteht?
- Im Portfolio: `stufe-9_strategie/9-5-compliance/` mit allen Dokumenten.

### 🎁 Mehrwert-Mini-Projekte
- **AI-Literacy-Curriculum-Entwurf** für eine Organisation (kann später als Grundlage für reale Schulungen dienen).
- **Compliance-Cheat-Sheet** mit den 10 wichtigsten EU-AI-Act-Punkten als Markdown im Portfolio.

### 🌱 Open-Source-Pfad
- Für DSGVO-konforme KI-Stacks: lokales Ollama, lokale Vector-DBs, lokale Eval — siehe alle vorherigen OSS-Pfade.
- Datenschutz-Folgenabschätzung-Tools: [PIA Tool der CNIL (Frankreich, OSS)](https://www.cnil.fr/en/pia-data-protection-impact-assessment-software).

### Outcome-Check
- [ ] Risikoklassifizierung dokumentiert
- [ ] Compliance-Gap-Analyse
- [ ] DSFA (wenn anwendbar)
- [ ] AI-Literacy-Plan
- [ ] Risiko-Management-System
- [ ] Incident-Response-Plan

---

## Modul 9.6: Change Management *(NEU in v2.1)*

**Aufwand:** 🔧 3-5h · 🧮 2-4h · 💼 12-18h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 9.1-9.5

### Warum dieses Modul existiert (NEU in v2.1)

Change Management war in v2.0 als kurzer Sub-Bullet in Modul 9.3 versteckt. Das war systematisch falsch: **mehr KI-Initiativen scheitern an Change Management als an Technik**. Adoption-Curves sind realer Wertvernichter, Stakeholder-Resistance kann ROI um Jahre verzögern, Betriebsrat-Praxis in Deutschland ist nicht optional. Modul 9.6 macht Change Management zur eigenständigen Disziplin am Ende der Strategie-Stufe — direkt vor dem Capstone-Pilot, wo es sofort gebraucht wird.

### Lernziel

Du erstellst einen vollständigen Change-Management-Plan für deinen Capstone-Use-Case mit Stakeholder-Mapping, Adoption-Curve-Modellierung, Kommunikations-Plan, Schulungs-Konzept und (für deutsche Org) Betriebsrat-Einbindungs-Plan.

### Theorie

- 🟢 **Warum scheitern KI-Projekte? Pareto-Verteilung 2026** — empirische Daten aus McKinsey, BCG, Gartner: ca. 60-70% der KI-Projekte erreichen ihre ursprünglichen Geschäftsziele nicht. Die häufigsten Gründe: (1) **Adoption zu niedrig** — Tool wird gebaut, niemand nutzt es. (2) **Stakeholder-Widerstand** — Mitarbeiter sehen KI als Bedrohung. (3) **Schlechte Integration in Arbeitsprozesse** — KI ist da, aber Workflow ist nicht angepasst. (4) **Fehlende Schulung** — Mitarbeiter wissen nicht, wie sie KI sinnvoll nutzen sollen. **Nur ein kleiner Anteil scheitert an Technik.** [BCG — How AI Programs Succeed](https://www.bcg.com) · [McKinsey — State of AI](https://www.mckinsey.com)

- 🟢 **Stakeholder-Mapping vertieft** — über das aus Modul 3.3 hinaus: pro Stakeholder dokumentieren: (1) **Power** (Einfluss auf Entscheidung). (2) **Interest** (wieviel betroffen?). (3) **Stance** (Champion / Neutral / Skeptiker / Blocker). (4) **Specific Concerns** (was sind die Sorgen genau?). (5) **Engagement-Strategie** (wie kommunizieren? wie einbinden?). Power-Interest-Grid plus Stance-Achse als 3D-Bild. [Mendelow's Matrix](https://www.tutor2u.net) · [Prosci ADKAR Stakeholder Tools](https://www.prosci.com)

- 🟢 **Adoption-Kurven verstehen — Crossing the Chasm** — Geoffrey Moore's Klassiker, weiter aktuell 2026: Innovation diffundiert nicht linear, sondern in Wellen. Innovators (2.5%) → Early Adopters (13.5%) → **Chasm** → Early Majority (34%) → Late Majority (34%) → Laggards (16%). Der "Chasm" zwischen Early Adopters und Early Majority ist der Killer — Tools, die nicht den Sprung schaffen, sterben. KI-spezifische Pattern 2026: viele Pilots erreichen Innovators, scheitern am Chasm. [Crossing the Chasm — Wikipedia](https://en.wikipedia.org/wiki/Crossing_the_Chasm)

- 🟢 **Realistische Adoption-Curve modellieren** — für jeden KI-Use-Case eine konkrete Kurve. Variablen: Time to first 10% adoption, Time to 50%, Plateau-Level (oft <100%, weil Power-User vs. Casual User). Eingangs-Faktoren: Komplexität der Veränderung, Wahrgenommener Nutzen, Schulungs-Verfügbarkeit, Champion-Network-Stärke. Anti-Pattern: lineare Kurve "wir gehen von 0 auf 100% in 6 Monaten" — das ist Wunschdenken. Realistisch: S-Kurve mit langem Tail.

- 🟢 **Kotter's 8 Steps für KI-Einführung** — Klassiker, weiter aktuell:
 1. **Create Urgency** — warum müssen wir jetzt handeln? (Wettbewerb, Kosten, Stakeholder-Druck)
 2. **Build Coalition** — Champions identifizieren, Cross-funktional einbinden.
 3. **Form Strategic Vision** — wo wollen wir hin? Klar formulieren.
 4. **Enlist Volunteer Army** — wer mitmacht, wer mitmacht-möglich-ist.
 5. **Enable Action by Removing Barriers** — Schulung, Tools, Prozesse anpassen.
 6. **Generate Short-Term Wins** — sichtbare Pilot-Erfolge zeigen.
 7. **Sustain Acceleration** — auf Wins aufbauen, nicht ausruhen.
 8. **Institute Change** — neue Arbeitsweise als Standard verankern.

 [Kotter — Leading Change](https://www.kotterinc.com)

- 🟢 **ADKAR als Alternative** — Prosci's individual-Change-Modell: **Awareness** → **Desire** → **Knowledge** → **Ability** → **Reinforcement**. Auf Mitarbeiter-Ebene anwendbar (Kotter's auf Org-Ebene). Komplementär — beide nutzen ist common Practice. [Prosci ADKAR](https://www.prosci.com/methodology/adkar)

- 🟢 **KI-spezifische Change-Management-Aspekte** — was bei KI besonders ist: (1) **Existenz-Angst** ("ersetzt KI meinen Job?"). (2) **Vertrauen-Defizit** ("ich vertraue der KI nicht"). (3) **Skill-Gap-Schmerz** ("ich kann das nicht"). (4) **Black-Box-Skepsis** ("ich verstehe nicht, wie KI entscheidet"). (5) **Identitäts-Bedrohung** für Wissensarbeiter ("mein Wissen war mein Wert"). Spezifische Mitigations: transparente Kommunikation über Job-Auswirkung, AI-Literacy-Schulung (siehe 9.5), Hands-on-Erfahrung statt nur Theorie, Champion-Stories als Vorbilder.

- 🟢 **Mitbestimmung in Deutschland — operative Anleitung** — bei KI-Einführung ist der **Betriebsrat** zwingend zu beteiligen, wenn KI Mitarbeiter betrifft. **§ 87 BetrVG** gibt Mitbestimmungsrechte bei Ordnung des Betriebs, Arbeitszeit, Verhaltens- und Leistungskontrolle. **§ 80 BetrVG** (allgemeine Aufgaben), **§ 90 BetrVG** (Unterrichtung bei technischen Änderungen). KI-spezifische Praxis 2026:
 - **Frühzeitige Information** vor Entscheidung (nicht erst bei Roll-Out).
 - **Beteiligungs-Vereinbarung** für KI-spezifische Themen aushandeln.
 - **KI-Spezifische Betriebsvereinbarung** als 2026-Standard etabliert (Datenschutz, Performance-Tracking, Schulung).
 - **Datenschutz-Beauftragter** zwingend einbinden.

 [DGB — KI und Mitbestimmung](https://www.dgb.de) · [Hans-Böckler-Stiftung — KI-Betriebsvereinbarungen](https://www.boeckler.de)

- 🟢 **Kommunikations-Plan für KI-Roll-Out** — sieben Bausteine: (1) **Awareness-Phase**: was kommt, warum, was bedeutet es für mich? (2) **Education-Phase**: AI-Literacy-Schulung (siehe 9.5). (3) **Pilot-Communication**: Erfolge sichtbar machen, Failures auch (transparente Kultur). (4) **Champion-Network**: 5-10% der Belegschaft als Multiplikatoren. (5) **Feedback-Channels**: wie kommen Sorgen und Verbesserungs-Vorschläge zurück? (6) **Regular Updates**: monatlich, nicht ad-hoc. (7) **Townhalls / Q&A**: für offene Fragen.

- 🟢 **Schulungs-Konzept für KI-Roll-Out** — drei Niveaus: (1) **Awareness-Schulung** für alle Mitarbeiter (1-2h, Pflicht nach AI Act Art. 4 — siehe 9.5). (2) **Tool-Spezifische Schulung** für direkte Nutzer (4-8h pro Tool, hands-on). (3) **Power-User-Schulung** für Champions (8-16h, mit Best Practices, Prompting, Eval). Auffrischung alle 6-12 Monate, dokumentiert für Compliance.

- 🟢 **Fehler-Kultur und Psychological Safety** — KI-Pilots scheitern oft. Damit Lernen passiert: psychologisch sichere Umgebung, in der Failure offen kommuniziert werden kann. Anti-Pattern: Pilot-Failure als Karriere-Risiko — dann werden Failures versteckt, kein Lernen, weiter falsche Entscheidungen. [Amy Edmondson — The Fearless Organization](https://www.amazon.com/Fearless-Organization-Psychological-Workplace-Innovation/dp/1119477247)

- 🟢 **Anti-Patterns im Change Management** — (1) **"Build it and they will come"** — Tool wird fertig, Adoption wird sich schon einstellen. Funktioniert nie. (2) **Top-Down-Mandate ohne Buy-In** — "ihr nutzt jetzt KI" als Anweisung. Bringt Compliance, keine Adoption. (3) **Tech-First-Communication** — über Architektur und Tokens reden, nicht über Wert für den Mitarbeiter. (4) **Schulung als Einmal-Event** — eine Stunde Webinar, dann nichts mehr. (5) **Champion-Burnout** — die wenigen Champions werden überlastet, brennen aus, niemand übernimmt.

### Praxis: Hauptprojekt — Change-Management-Plan für Capstone

Für deinen Capstone-Use-Case:

- **Stakeholder-Mapping** vertieft: alle Stakeholder mit Power / Interest / Stance / Concerns / Engagement-Strategie. Mindestens 8-12 Stakeholder dokumentiert.
- **Adoption-Curve-Modellierung**: realistische S-Kurve über 18-24 Monate mit Begründung der Eingangs-Faktoren.
- **Kotter's 8 Steps oder ADKAR auf Capstone angewendet**: was tust du in welchem Schritt konkret?
- **Kommunikations-Plan** für 12 Monate: Wer kommuniziert was wann an wen?
- **Schulungs-Konzept** auf den drei Niveaus mit Aufwand-Schätzung.
- **Champion-Network-Plan**: wer wird Champion? Wie aktivieren? Wie gegen Burnout schützen?
- **Für deutsche Org**: Betriebsrat-Einbindungs-Plan mit konkreten Touchpoints und Vorlagen für Betriebsvereinbarung.
- **Failure-Kultur-Konzept**: wie wird Pilot-Failure kommuniziert und für Lernen genutzt?
- **Risiko-Plan für Adoption**: was sind die Top-3-Adoption-Risiken, was ist die Mitigation pro Risiko?
- Im Portfolio: `stufe-9_strategie/9-6-change-management/` mit Stakeholder-Map, Adoption-Curve, Kommunikations-Plan, Schulungs-Konzept, Betriebsrat-Plan.

### 🎁 Mehrwert-Mini-Projekte
- **Stakeholder-Map-Template** als wiederverwendbares Markdown.
- **Betriebsvereinbarung-KI-Template** als Vorlage (Vorsicht: rechtliche Beratung nötig vor echter Anwendung).
- **AI-Literacy-Schulungs-Curriculum** als zusammenhängendes Konzept (verzahnt mit Modul 9.5).

### 🌱 Open-Source-Pfad
Change Management ist tool-unabhängig. Tools die helfen können: [Notion](https://notion.so) für Stakeholder-Tracking, [Miro](https://miro.com) oder [Excalidraw](https://excalidraw.com) (OSS) für Visualisierungen.

### Outcome-Check
- [ ] Stakeholder-Mapping mit 8-12 Stakeholdern, vollständig dokumentiert
- [ ] Adoption-Curve-Modellierung mit realistischer S-Kurve
- [ ] Kotter's 8 Steps oder ADKAR konkret angewendet
- [ ] Kommunikations-Plan für 12 Monate
- [ ] Schulungs-Konzept auf 3 Niveaus
- [ ] Champion-Network-Plan
- [ ] Betriebsrat-Plan (für deutsche Org)
- [ ] Failure-Kultur-Konzept
- [ ] Top-3-Adoption-Risiken mit Mitigations

---

## S9-Self-Assessment *(NEU in v2.1, primär für 💼)*

**Aufwand:** 12-18h *(primär 💼 — für andere Tracks optional)*
**Wann:** Am Ende der Stufe 9, vor Beginn Stufe 10
**Voraussetzungen:** Module 9.0 bis 9.6

### Warum dieses Self-Assessment

In v2.0 trug der Capstone-C (Strategist) allein die Last der Stufen-9-Outcome-Validierung. Das war zu spät: 💼-Lernende absolvierten Module-Outcomes (Checkboxen), waren aber nicht wirklich Strategy-kompetent. S9-Self-Assessment fängt das ab — bevor du in den Capstone-Pilot gehst (Stufe 10).

Für 🔧/🧮 ist S9 optional — sie haben in dieser Stufe weniger Tiefe und entsprechend weniger Validierungs-Bedarf.

### Aufgabe für 💼 (Pflicht)

**Stakeholder-Brief mit ROI + Compliance-Argument für reale (oder simulierte) Organisation**

Schreibe einen 8-12-seitigen Stakeholder-Brief an einen fiktiven (oder echten) CEO/Vorstand für die Org, die du in 9.0-9.6 durchgearbeitet hast. Der Brief soll überzeugend für deinen Capstone-Use-Case argumentieren und alle Strategie-Disziplinen integrieren.

**Pflicht-Inhalte:**

1. **Executive Summary** (1 Seite): Was ist das Use-Case, warum jetzt, was ist die Empfehlung, was ist der erwartete Impact?
2. **Strategischer Kontext** (1-2 Seiten): Wettbewerbs-Position, Datenreife (aus 9.0), Fit zu Unternehmens-Zielen.
3. **Use-Case-Definition** (1-2 Seiten): Was wird gebaut, für wen, mit welchem Wert?
4. **Business Case** (1-2 Seiten): TCO über 3 Jahre, drei Szenarien, Sensitivity Analysis (aus 9.2).
5. **Operating Model & Governance** (1 Seite): Wie wird es betrieben, KPIs, Risk Management (aus 9.3).
6. **Build-vs-Buy** (1 Seite): Empfehlung mit Begründung (aus 9.4).
7. **Compliance-Plan** (1 Seite): Risikoklassifizierung, AI-Literacy-Pflicht, DSFA-Status (aus 9.5).
8. **Change Management** (1 Seite): Stakeholder-Strategie, Adoption-Curve, Schulungs-Plan, Betriebsrat-Einbindung (aus 9.6).
9. **Empfehlung mit Pilot-Plan** (0,5-1 Seite): Was ist der konkrete Next-Step? Welche Gates?
10. **Anhang**: Detail-Daten und Berechnungen.

**Stilistische Anforderungen:**

- **Adressaten-gerecht**: ein CEO liest 5-10 Min, kein 20-Seiten-Akademiker-Text. Executive Summary präzise, dann Verteil-Lesepfad.
- **Quantifiziert**: jede Behauptung mit Zahl belegt. "Adoption wird etwa 6 Monate dauern" statt "Adoption braucht Zeit".
- **Risiken explizit**: nicht nur Pro-Argumente, auch Risiken und Counterfactuals.
- **Stakeholder-spezifisch im Anhang**: drei Versionen Anhang (CFO-View, CTO-View, Mitarbeiter-Vertretung-View) als 1-Seite-Briefings.

**Im Portfolio:** `self-assessments/s9/` mit:
- Hauptbrief als PDF oder Markdown
- Drei Stakeholder-Anhänge
- Reflektion: was war schwierig? Was würdest du anders machen?

### Self-Assessment-Schwellen — wann hast du bestanden?

- [ ] Brief ist **adressaten-gerecht** geschrieben (kein Akademiker-Text).
- [ ] Alle 9 Pflicht-Inhalte enthalten.
- [ ] Jede Behauptung **quantifiziert** mit Zahl belegt.
- [ ] **Risiken explizit** dokumentiert, nicht nur Pro-Argumente.
- [ ] **Drei Stakeholder-Versionen** vorhanden.
- [ ] Reflektion ehrlich (mindestens 2 Schwächen / Erkenntnisse).

**Wenn du diese Schwellen nicht erreichst:** Zurück zu den schwächsten Stellen in 9.0-9.6 — bevor du den Capstone-Pilot startest. Strategie-Lücken werden im Pilot deutlich, dann ist es teurer zu reparieren.

### Optional für 🔧/🧮

🔧 kann als Bonus eine "Tech-Lead-Briefing-Variante" schreiben: technische Architektur-Empfehlung an Engineering-VP für denselben Use-Case (3-5 Seiten).

🧮 kann als Bonus eine "Researcher-Variante" schreiben: Methodik-Briefing für Research-Lead über Eval-Methodik und Foundation-Wahl (3-5 Seiten).

---

## Free-Zertifikate für Stufe 9

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [DLAI — AI for Everyone](https://www.coursera.org/learn/ai-for-everyone) | Andrew Ng (Coursera Audit-Modus) | ~10h | Pflicht-Foundation für 💼 |
| [IBM — Generative AI for Executives](https://www.coursera.org/specializations/generative-ai-for-executives-and-business-leaders) | IBM (Coursera Audit-Modus) | ~30h | Vertiefung 9.1-9.4 |
| [Vanderbilt — Generative AI Leadership & Strategy](https://www.coursera.org) | Vanderbilt (Coursera Audit-Modus) | ~10h | Vertiefung 9.1-9.3 |
| [Stanford d.school — Bootcamp Bootleg](https://dschool.stanford.edu/resources/the-bootcamp-bootleg) | Stanford (kostenlos) | ~5h | Vorlauf für Use-Case-Discovery |
| [EU AI Act Service Desk Resources](https://ai-act-service-desk.ec.europa.eu) | EU Commission | nach Bedarf | Pflicht für 9.5 |
| [NIST AI RMF Playbook](https://www.nist.gov/itl/ai-risk-management-framework) | NIST | ~10h | Pflicht für 9.3 + 9.5 *(verstärkt in v2.1)* |
| [Strategyzer — Free Resources](https://www.strategyzer.com/library) | Strategyzer | nach Bedarf | Vertiefung Business-Modelle |
| [Causal Inference: The Mixtape](https://mixtape.scunning.com) | Scott Cunningham | als Buch | Optional für 9.2 |
| [Prosci — Free Change Management Resources](https://www.prosci.com/resources) | Prosci | nach Bedarf | Vertiefung 9.6 *(NEU in v2.1)* |
| [Hans-Böckler-Stiftung — KI-Betriebsvereinbarungen](https://www.boeckler.de) | Hans-Böckler-Stiftung | nach Bedarf | Pflicht für 9.6 deutsche Org *(NEU in v2.1)* |

**Coursera-Audit-Modus-Hinweis (NEU in v2.1):** Coursera-Kurse sind im Audit-Modus kostenlos zugänglich (Materialien ja, Zertifikat nein). Details siehe `99_anhang.md`.

---

## Stufen-Outcome

Nach Stufe 9 hast du:
- ✅ **Datenreife-Bewertung mit Architektur- und Lock-in-Analyse** *(NEU in v2.1, Modul 9.0)*
- ✅ Use-Case-Portfolio mit 20+ Ideen, priorisiert, mit Datenreife pro Use-Case
- ✅ Vollständigen Business Case mit ROI für Capstone
- ✅ Operating Model und Skalierungs-Roadmap **mit KPI-System auf 3 Ebenen** *(verstärkt in v2.1)*
- ✅ Build-vs-Buy-Entscheidung mit TCO und Vendor-Analyse
- ✅ EU-AI-Act-Compliance-Plan
- ✅ **Change-Management-Plan mit Stakeholder-Mapping, Adoption-Curve, Betriebsrat-Plan** *(NEU in v2.1, Modul 9.6)*
- 💼: Capstone-Strategist mit allen strategischen Bausteinen *(Capstone-Update siehe `17_capstone_c_strategist.md`)*
- 💼: ✅ **S9-Self-Assessment bestanden** — Stakeholder-Brief mit allen 9 Disziplinen integriert *(NEU in v2.1)*

**Du bist bereit für Stufe 10: Spezialisierung & Production — wo Capstones zur Production-Reife kommen.**

---

## Aktualisierungslog

- **2026-05-04:** Version v2.1.0 — **Modul 9.0 Datenstrategie als NEUES Modul vor 9.1** (Datenreife-Assessment, Architektur-Patterns, Data Governance, Lock-in-Risiken — war in v2.0 nur Sub-Bullet); **💼-Aufwand auf 80-130h erhöht** (war 50-80h, zu schmal für Strategist-Track-Differenzierung); **Modul 9.3 substanziell verstärkt** (KI-spezifisches KPI-Framework auf 3 Ebenen, NIST AI RMF und ISO 42001 als praktische Anleitung, Operating-Model-Reife-Modell, RACI-Matrix); **Modul 9.6 Change Management als NEUES Modul** (Stakeholder-Mapping vertieft, Adoption-Curves, Kotter/ADKAR, KI-spezifische Aspekte, Betriebsrat-Praxis Deutschland, Schulungs-Konzept, Failure-Kultur — war in v2.0 als Sub-Bullet versteckt); **S9-Self-Assessment am Ende der Stufe** als Pflicht-Anker für 💼: 8-12-seitiger Stakeholder-Brief, der alle 9 Strategie-Disziplinen integriert; **Capstone-Strategist-Update-Block** verschoben nach `17_capstone_c_strategist.md`; Verfallsdatum-Stempel pro 🔄-Bullet eingeführt; Coursera-Audit-Modus-Hinweis ergänzt; Eval-Querschnitt-Anker in 9.3 KPI-System ergänzt.
- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** **Aug 2026 (3-Monats-Audit)** für Module 9.0 (Daten-Plattform-Landschaft volatil) und 9.5 (EU AI Act Auslegungs-Praxis, Digital Omnibus Status). Nov 2026 für Module 9.1, 9.2, 9.3, 9.4, 9.6 — primär: Operating-Model-Patterns, AI-Maturity-Models, Change-Management-Tools.
