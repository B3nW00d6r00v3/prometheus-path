---
title: "Datenschutz bei No-Code mit KI"
module: "2.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Datenschutz bei No-Code mit KI

## Kernidee

Cloud-No-Code + Cloud-LLM = deine Daten reisen um die Welt. Wenn du personenbezogene Daten verarbeitest (Namen, E-Mails, Gesundheitsdaten), musst du wissen, wohin sie gehen. Die DSGVO-freundlichste Option: n8n self-hosted plus lokales Ollama. Daten verlassen nie deinen Rechner.

## Im Detail

Cloud-No-Code-Tools schicken Daten an Cloud-LLM-APIs. Das bedeutet: deine Daten gehen an Make.com-Server, von dort an OpenAI/Anthropic-Server. für oeffentliche Daten kein Problem. für DSGVO-relevante Daten (personenbezogen, vertraulich) gibt es drei Strategien:

1. **n8n self-hosted plus lokales Ollama** als KI-Backend -- Daten bleiben auf deinem Server. Maximale Datensouveraenitaet.
2. **Bewusst nur nicht-personenbezogene Daten verarbeiten** -- Zusammenfassungen statt Rohdaten, anonymisierte Texte, oeffentliche Informationen.
3. **Auftragsverarbeitungs-Vertraege** (AVV) mit Cloud-Anbietern prüfen -- Make, n8n Cloud und Zapier bieten Enterprise-Plaene mit AVV.

für Stufe 2 ist die wichtigste Erkenntnis: sei dir bewusst, welche Daten durch deinen Workflow fliessen, und waehle die Plattform entsprechend.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [BfDI — KI und Datenschutz](https://www.bfdi.bund.de) | Deutsche Datenschutz-Behörde zu KI |
| :hammer_and_wrench: | [n8n Docker Compose](https://docs.n8n.io/hosting/installation/docker/) | Self-Hosting-Anleitung |

## Teste dein Verständnis

- [ ] Weißt du, welche Daten in einem Cloud-No-Code-Workflow wohin fliessen?
- [ ] Kennst du die DSGVO-freundlichste Option für No-Code + KI?
