---
title: "MCP (Model Context Protocol) — Konzept"
module: "2.5"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-08"
---

# MCP (Model Context Protocol) — Konzept

## Kernidee

Stell dir USB-C für KI-Tools vor: Vor USB-C brauchte jedes Gerät ein eigenes Kabel — ein Stecker für das Handy, ein anderer für die Kamera, ein dritter für den Laptop. MCP ist der universelle Standard, der es ermöglicht, dass jeder MCP-Server (z.B. "Zugriff auf Datenbank", "GitHub-Integration", "Slack-Anbindung") mit jedem MCP-Client (Claude, ChatGPT, Cursor, VS Code) funktioniert. Statt M x N Custom-Integrationen brauchst du nur M + N standardisierte Verbindungen.

## Im Detail

### Das Problem, das MCP löst

Ohne MCP muss jede KI-Anwendung ihre eigenen Integrationen bauen:

- Claude Desktop will auf dein Dateisystem zugreifen? Custom-Integration.
- ChatGPT will deine Datenbank abfragen? Andere Custom-Integration.
- Cursor will dein Jira lesen? Noch eine Custom-Integration.

Bei 10 KI-Clients und 20 Tools brauchst du 200 Custom-Integrationen. Mit MCP brauchst du 30: 10 Clients, die MCP sprechen, und 20 Server, die MCP sprechen. Jeder Client kann mit jedem Server kommunizieren.

### Wie MCP konzeptionell funktioniert

MCP definiert drei Dinge:

1. **Server:** Ein Programm, das bestimmte Fähigkeiten bereitstellt (z.B. "Dateisystem lesen", "GitHub-Repos durchsuchen", "Slack-Nachrichten senden"). Der Server beschreibt seine Fähigkeiten in einem standardisierten Format.

2. **Client:** Die KI-Anwendung, die einen MCP-Server nutzen will (z.B. Claude Desktop, Cursor, ein selbstgebauter Agent). Der Client verbindet sich mit einem oder mehreren Servern.

3. **Protokoll:** Die Sprache, in der Client und Server kommunizieren. Basiert auf JSON-RPC, transportiert über stdio (lokal) oder SSE/HTTP (remote).

### MCP ist eine Schicht über Function Calling

Function Calling (vorherige Seite) definiert, wie ein einzelnes Modell Tools aufruft. MCP definiert, wie Tools **standardisiert bereitgestellt** werden, sodass sie mit jedem Modell und jedem Client funktionieren. MCP baut auf Function Calling auf — es ersetzt es nicht.

Analogie: Function Calling ist wie "ein Gerät hat einen Ladeanschluss". MCP ist wie "alle Geräte benutzen denselben USB-C-Standard für den Ladeanschluss".

### Die Erfolgsgeschichte: Von Null auf Industriestandard

- **November 2024:** Anthropic veröffentlicht MCP als offenes Protokoll
- **2025:** Adoption explodiert — SDK-Downloads steigen von 100k auf zweistellige Millionen monatlich
- **Dezember 2025:** Donation an die Linux Foundation — MCP wird zum Industrie-Standard, nicht mehr nur Anthropic-getrieben
- **Mai 2026:** Laut Analysten-Aggregaten ca. 78% Adoption in Enterprise-KI-Stacks. OpenAI, Google, Microsoft haben MCP-Support angekündigt oder integriert

### Praxis-Beispiele für MCP-Server

- **Dateisystem-Server:** Lässt KI-Anwendungen Dateien lesen und schreiben
- **GitHub-Server:** Repos durchsuchen, Issues erstellen, PRs reviewen
- **Datenbank-Server:** SQL-Abfragen auf PostgreSQL, MySQL etc.
- **Slack-Server:** Nachrichten lesen und senden
- **Web-Search-Server:** Brave Search, Google Search als Tool

Du kannst auch eigene MCP-Server schreiben — für jede API, jeden Dienst, jede Datenquelle. Praktische Umsetzung folgt in Modul 5.3.

### Was MCP nicht ist

- MCP ist **kein KI-Modell** — es ist ein Kommunikationsprotokoll
- MCP macht Tools nicht **intelligenter** — es macht sie nur **universell zugänglich**
- MCP ersetzt nicht die **Sicherheits-Überlegungen** — ein MCP-Server mit Dateisystem-Zugriff ist genauso riskant wie jeder andere Dateisystem-Zugriff

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Model Context Protocol Docs](https://modelcontextprotocol.io) | Offizielle Spezifikation |
| :book: | [Anthropic — MCP Introduction](https://www.anthropic.com/news/model-context-protocol) | Einführungs-Post |
| :hammer_and_wrench: | [MCP Server Registry](https://github.com/modelcontextprotocol/servers) | Offizielle Server-Sammlung |

## Teste dein Verständnis

- [ ] Kannst du MCP in 3 Sätzen erklären (was es ist, was es löst, wie es funktioniert)?
- [ ] Verstehst du den Unterschied zwischen MCP und raw Function Calling?
- [ ] Kannst du die USB-C-Analogie nachvollziehen (M x N vs. M + N)?
- [ ] Weißt du, warum MCP ein offener Standard ist und nicht nur ein Anthropic-Feature?
