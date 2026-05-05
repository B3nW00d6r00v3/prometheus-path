---
title: "Übertragung auf andere Branchen"
module: "10.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Übertragung auf andere Branchen

## Kernidee

Das Marketing-KI-Pattern ist eine direkt übertragbare Blaupause: **LLM + Provider-Abstraktion + MCP-Integrationen + Workflow-Engine + Eval**. Wer dieses Pattern in Marketing verstanden hat, kann es innerhalb weniger Tage auf HR, Sales, Customer Support, Operations oder Finance adaptieren — die Bausteine sind identisch, nur die konkreten Tools und Eval-Metriken ändern sich.

## Im Detail

**Die Branchen-Übertragungsmatrix:**

| Branche | LLM-Aufgabe | MCP-Integrationen | Eval-Metrik |
|---|---|---|---|
| **HR** | Bewerber-Kommunikation, JD-Generierung | Workday, SAP-HR | Bewerber-Zufriedenheit, Time-to-Hire |
| **Sales** | Outreach-E-Mails, Deal-Briefs, CRM-Updates | Salesforce, HubSpot, LinkedIn | Outreach-Response-Rate, Deal-Conversion |
| **Customer Support** | Triage, Auto-Response, FAQ | Zendesk, Intercom, Jira | Resolution Rate, CSAT, First Contact Resolution |
| **Operations** | Prozess-Dokumentation, ERP-Befehle | SAP, Microsoft Dynamics | Prozess-Effizienz, Fehlerrate |
| **Finance** | Report-Generierung, Forecasting-Narrative | Quickbooks, Datev, Excel | Vorhersage-Genauigkeit, Report-Qualität |

**Der Transfer-Prozess:**
1. **Use-Case-Analyse**: was ist die Kernanforderung? (Kommunikation / Analyse / Aktion / Entscheidungs-Unterstützung)
2. **Tool-Mapping**: welche Tools sind in der Branche Standard? → MCP-Server suchen oder bauen
3. **Eval-Design**: was ist die branchenspezifische Erfolgsmetrik?
4. **DSGVO-Anpassung**: was sind die Besonderheiten in dieser Branche? (z.B. Bewerberdaten in HR, Finanzdaten in Finance)

**Der Wiederverwendbare Kern bleibt immer:**
LLM (via LiteLLM/Provider-Abstraktion) + Workflow-Engine (n8n/Make.com) + Eval-Pipeline (Promptfoo/Langfuse)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Verweis | Modul 10.3 — LLMOps | Production-Hardening des Patterns |
| 📖 Verweis | Modul 5.x — Agents | Agent-Architektur als Basis |

## Teste dein Verständnis

- [ ] Welche fünf Branchen werden in der Übertragungsmatrix abgedeckt?
- [ ] Beschreibe den vier-stufigen Transfer-Prozess auf eine neue Branche.
- [ ] Welche drei Kernkomponenten bleiben bei jeder Branchenanwendung konstant?
