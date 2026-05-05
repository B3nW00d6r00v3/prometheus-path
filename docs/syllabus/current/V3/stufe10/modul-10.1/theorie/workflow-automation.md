---
title: "Marketing-Workflow-Automation"
module: "10.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Marketing-Workflow-Automation

## Kernidee

Workflow-Automation-Tools (Make.com, n8n, Zapier) sind der Kleber, der LLMs mit Marketing-Tools verbindet — ohne Code, oder mit minimalem Code. Drei konkrete Workflow-Pattern decken 80% der Marketing-Anwendungsfälle ab und lassen sich als Vorlage für andere Branchen nutzen.

## Im Detail

**Tools als Glue-Layer** (Verbindung zu Modul 2.6):
- **Make.com** — visueller Workflow-Builder, günstiger als Zapier, MCP-Adapter verfügbar
- **n8n** — OSS, self-hostable, Code-Nodes für komplexe Logik
- **Zapier** — am weitesten verbreitet, teuerster der drei

**Drei Beispiel-Workflows als Referenz-Pattern:**

1. **Content-Aggregation → Draft → Approval:**
   RSS-Feeds → KI-Zusammenfassung → Newsletter-Draft → Slack-Approval → Brevo-Versand. Wichtig: Human-in-the-Loop vor dem Versand ist Pflicht.

2. **Lead-Qualifikation → CRM → Personalisierung:**
   Lead-Form-Submission → KI-Klassifikation (Hot/Warm/Cold) → HubSpot-CRM-Eintrag → Slack-Notification → personalisierte E-Mail an Lead.

3. **Support-Triage → Routing → Auto-Response:**
   Ticket-Eingang (Zendesk/Intercom) → KI-Klassifikation nach Kategorie und Dringlichkeit → Routing an richtiges Team oder Auto-Response für FAQ-Fragen.

**Key Design-Entscheidungen:**
- Welche Schritte haben Human-in-the-Loop? (Pflicht bei offiziellen Kommunikations-Aktionen)
- Wo werden Errors behandelt? (Retry-Logik, Fallback-Pfad)
- Wie wird Audit-Trail geführt? (DSGVO-relevant)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Make.com](https://www.make.com) | Visueller Workflow-Builder |
| 🛠️ Tool | [n8n](https://n8n.io) | OSS-Alternative, self-hostable |
| 📖 Docs | [n8n Docs](https://docs.n8n.io) | Gut dokumentiert |

## Teste dein Verständnis

- [ ] Nenne die drei Referenz-Workflow-Pattern und ihre Trigger-Ereignisse.
- [ ] Wann ist Human-in-the-Loop in einem Marketing-Workflow Pflicht?
- [ ] Was ist der Unterschied zwischen Make.com und n8n in Bezug auf Hosting?
