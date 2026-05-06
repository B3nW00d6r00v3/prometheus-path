---
title: "DSGVO & Datenschutz bei KI-Tools"
module: "2.8"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-11"
---

# DSGVO & Datenschutz bei KI-Tools

## Kernidee

Wer Firmendaten, Kundendaten oder personenbezogene Daten in einen ChatGPT-Prompt einfügt, riskiert DSGVO-Verstöße -- weil OpenAI Daten zum Training nutzen kann (Opt-out nötig), Server in den USA stehen und kein Auftragsverarbeitungsvertrag besteht. Enterprise KI-Workspaces lösen genau dieses Problem.

## Im Detail

### Was ist das DSGVO-Problem bei KI-Tools?

Drei Kernrisiken, wenn Mitarbeiter Consumer-KI-Tools mit Firmendaten nutzen:

1. **Daten-Transfer in Drittstaaten (USA):** Die DSGVO verlangt besondere Schutzmaßnahmen, wenn personenbezogene Daten die EU verlassen. Consumer-Accounts bei OpenAI, Anthropic oder Google laufen über US-Server -- das EU-US Data Privacy Framework existiert zwar seit 2023, deckt aber nicht jeden Anwendungsfall sauber ab.

2. **Trainingsdaten-Nutzung:** Bei Consumer-Accounts (ChatGPT Free/Plus, Claude Free) können Eingaben zum Modell-Training verwendet werden. Opt-out ist möglich, aber nicht der Default. Wer Kundennamen, Verträge oder Strategiepapiere in den Chat tippt, riskiert, dass diese Daten in zukünftige Modelle einfließen.

3. **Fehlende Auftragsdatenverarbeitung:** Die DSGVO verlangt bei Verarbeitung personenbezogener Daten durch Dritte einen Auftragsverarbeitungsvertrag (AVV). Consumer-KI-Accounts bieten das nicht. Ohne AVV ist die Nutzung mit personenbezogenen Daten formal rechtswidrig.

### Was bedeutet "DSGVO-konform" bei KI-Tools konkret?

Vier Kriterien, die ein KI-Tool erfüllen muss, um DSGVO-konform einsetzbar zu sein:

| Kriterium | Was es bedeutet |
|-----------|-----------------|
| **Server in der EU** | Daten verlassen nicht den europäischen Wirtschaftsraum |
| **AVV vorhanden** | Auftragsverarbeitungsvertrag zwischen Unternehmen und KI-Anbieter |
| **Zero-Retention-Policy** | Eingaben werden nicht gespeichert und nicht zum Training genutzt |
| **ISO 27001 / SOC 2** | Zertifizierte Informationssicherheits-Standards beim Anbieter |

### Welche Tools sind DSGVO-konform?

| Tool | Server-Standort | ISO 27001 | Zero-Retention | AVV |
|------|----------------|:---------:|:--------------:|:---:|
| **Langdock** | Frankfurt | Ja | Ja | Ja |
| **Beyond the Loop** | EU | Ja (Trust Center) | Ja | Ja |
| **Synaplan** | Self-hosted oder EU-Cloud | Ja | Ja (self-hosted = volle Kontrolle) | Ja |
| **ChatGPT Enterprise** | Dublin-Server möglich | Ja | Ja (Enterprise) | Ja (Enterprise) |
| **Claude for Business** | EU-Server verfügbar | Ja | Ja | Ja |
| **InnoGPT** | Deutsches RZ | Ja | Ja | Ja |
| **Lurus** | Deutschland | Ja | Ja | Ja |

Wichtig: **ChatGPT Plus** und **Claude Pro** (die $20-Consumer-Abos) erfüllen diese Kriterien **nicht** vollständig. Die DSGVO-konformen Varianten sind die Enterprise- bzw. Business-Versionen.

### Praxis-Tipp: Wann ist DSGVO relevant?

- **Freelancer ohne Kundendaten in Prompts:** Oft irrelevant. Solange du nur eigene Texte, allgemeines Wissen oder öffentliche Daten verarbeitest, ist das Risiko gering.
- **B2B-Unternehmen mit Kundendaten:** Kritisch. Sobald Kundennamen, E-Mail-Adressen, Vertragsdaten oder Mitarbeiterdaten in Prompts landen, greift die DSGVO.
- **Gesundheitswesen, Finanzen, Behörden:** Höchste Stufe. Hier kommen zusätzliche Regulierungen (Berufsgeheimnis, Bankgeheimnis) hinzu.

Die Faustregel: Wenn du zögerst, ob die Daten in den Prompt dürfen -- dürfen sie wahrscheinlich nicht (ohne DSGVO-konforme Infrastruktur).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [BfDI -- KI und Datenschutz](https://www.bfdi.bund.de) | Bundesbeauftragter für Datenschutz zu KI |
| :book: | [Langdock Trust Center](https://langdock.com/trust) | Beispiel für Compliance-Dokumentation |
| :book: | [DSGVO-Text Art. 28](https://dsgvo-gesetz.de/art-28-dsgvo/) | Auftragsverarbeitung im Wortlaut |
| :hammer_and_wrench: | [Beyond the Loop Trust Center](https://beyondtheloop.ai/trust) | DSGVO-Infos und Zertifikate |

## Teste dein Verständnis

- [ ] Nenne drei Gründe, warum ein ChatGPT-Plus-Account nicht DSGVO-konform ist, wenn Mitarbeiter Kundendaten eingeben.
- [ ] Was ist ein AVV und warum ist er bei KI-Tools wichtig?
- [ ] In welchen Szenarien ist DSGVO bei KI-Nutzung besonders kritisch -- und wann eher nicht?
