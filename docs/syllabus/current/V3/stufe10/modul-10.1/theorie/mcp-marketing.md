---
title: "MCP für Marketing-Integrationen"
module: "10.1"
type: theorie
fast_track: true
effort: "15min"
stability: yellow
---

# MCP für Marketing-Integrationen

## Kernidee

Der moderne 2026-Stack verbindet LLM-Agents via MCP-Server mit echten Marketing-Tools — nicht nur zur Daten-Abfrage, sondern auch zur Aktion: einen Newsletter-Versand triggern, einen CRM-Eintrag anlegen, einen Social-Media-Post veröffentlichen. Agents, die nur Text generieren, sind halb fertig.

## Im Detail

**Der MCP-Marketing-Stack 2026:**
- **Google Analytics 4** — Traffic-Daten, Conversions, Audience-Daten abrufen
- **HubSpot oder Salesforce** — CRM-Einträge lesen und schreiben, Deals anlegen
- **Mailchimp / Brevo** — Newsletter-Versand triggern, Segmente abfragen, Kampagnen anlegen
- **Buffer / Hootsuite** — Social-Media-Posts queuen und veröffentlichen
- **Webflow / WordPress** — Blog-Artikel veröffentlichen, Seiten-Inhalte aktualisieren

**Vorteil gegenüber klassischer API-Integration:**
Dein Agent kann in einer einzigen Konversation Daten aus GA4 holen, einen Brief auf Basis der Daten generieren, ihn in HubSpot als Deal-Note speichern, und einen Brevo-Kampagnen-Draft anlegen — alles über standardisierte MCP-Protokoll-Calls, ohne jeden Provider einzeln zu implementieren.

**Praktischer Einstieg:**
- [Public MCP Servers Repository](https://github.com/modelcontextprotocol/servers) — offizielle und Community-Server
- HubSpot-MCP-Server prüfen: welche Scopes brauche ich? Welche Actions sind verfügbar?

*Verfallsdatum: Nov 2026 — MCP-Server-Ökosystem entwickelt sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Repo | [Public MCP Servers](https://github.com/modelcontextprotocol/servers) | Übersicht verfügbarer MCP-Server |
| 📖 Docs | [HubSpot MCP](https://developers.hubspot.com) | HubSpot-Integration |
| 🔧 Spec | [MCP Specification](https://modelcontextprotocol.io) | Protokoll-Referenz |

## Teste dein Verständnis

- [ ] Welche fünf Marketing-Tool-Kategorien werden im MCP-Stack abgedeckt?
- [ ] Was ist der Unterschied zwischen MCP und direkter REST-API-Integration?
- [ ] Wo findest du öffentliche MCP-Server für Marketing-Tools?
