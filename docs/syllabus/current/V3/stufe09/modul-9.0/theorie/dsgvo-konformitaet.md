---
title: "DSGVO-Konformität als Daten-Strategie-Konstante"
module: "9.0"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# DSGVO-Konformität als Daten-Strategie-Konstante

## Kernidee

DSGVO ist keine einmalige Compliance-Aufgabe, sondern eine Konstante in jeder Datenstrategie. Für deutsche und EU-Organisationen gelten fünf operative Pflichten — von Datenminimierung bis zur technischen Umsetzung des Rechts auf Vergessenwerden auch in Vector-Stores.

## Im Detail

Fünf operative DSGVO-Anforderungen als Daten-Strategie-Konstante:

1. **Datenminimierung als Prinzip** — nur erheben, was für den definierten Zweck notwendig ist. Nicht „wir sammeln alles, irgendwann nützlich".
2. **Privacy by Design in Schemas** — Datenbankschemas müssen von Anfang an so gestaltet sein, dass personenbezogene Daten isoliert, maskiert oder gelöscht werden können.
3. **Right-to-be-Forgotten als technisches Feature** — nicht nur als Policy. Konkret: wenn ein Nutzer Löschung beantragt, müssen Daten auch aus Vector-Stores entfernt werden — kein triviales Problem bei Embeddings.
4. **Auftragsverarbeitungs-Verträge (AVV)** mit allen Cloud-Anbietern, die personenbezogene Daten verarbeiten. Ohne AVV kein DSGVO-konformer Betrieb.
5. **Datenschutz-Folgenabschätzung (DSFA / DPIA)** für KI-Use-Cases mit personenbezogenen Daten, insbesondere wenn automatisierte Entscheidungen (Art. 22 DSGVO) involviert sind.

**KI-spezifisch kritisch:**
- LLM-APIs, die personenbezogene Daten verarbeiten, benötigen AVV mit dem Provider.
- Trainingsdaten dürfen keine personenbezogenen Daten ohne Rechtsgrundlage enthalten.
- Halluzinationen mit personenbezogenen Daten (z.B. erfundene Krankenakten) sind potenzielle DSGVO-Incidents.

*Verfallsdatum: Aug 2026 — Rechtslage und Auslegungen entwickeln sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Behörde | [BfDI — Datenschutz und KI](https://www.bfdi.bund.de) | Offizielle deutsche Datenschutzbehörde |
| Behörde | [HmbBfDI — Diskussionspapier KI](https://datenschutz-hamburg.de) | Hamburger Datenschutzbehörde, oft KI-progressiv |

## Teste dein Verständnis

- [ ] Was bedeutet „Right-to-be-Forgotten" konkret für einen RAG-Vector-Store — welche technischen Schritte sind nötig?
- [ ] Wann ist eine Datenschutz-Folgenabschätzung für einen KI-Use-Case Pflicht?
- [ ] Welche vertragliche Voraussetzung muss erfüllt sein, bevor personenbezogene Daten an einen LLM-API-Provider gesendet werden dürfen?
