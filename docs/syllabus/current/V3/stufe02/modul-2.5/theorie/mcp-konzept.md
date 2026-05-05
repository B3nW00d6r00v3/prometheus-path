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

Stell dir USB-C für KI-Tools vor: Vor USB-C brauchte jedes Gerät ein eigenes Kabel. MCP ist der universelle Standard, der es ermöglicht, dass jeder MCP-Server (z.B. "Zugriff auf Datenbank") mit jedem MCP-Client (Claude, ChatGPT, Cursor) funktioniert. Statt M x N Custom-Integrationen baust du M + N standardisierte Verbindungen.

## Im Detail

Von Anthropic Ende 2024 vorgestellt, 2026 Industriestandard mit hoher Enterprise-Adoption (laut Analysten-Aggregaten ca. 78% Adoption in Enterprise-KI-Stacks; SDK-Downloads stiegen von 100k im November 2024 auf zweistellige Millionen monatlich Anfang 2026; Linux-Foundation-Donation Dezember 2025). MCP ist eine **Protokoll-Schicht über Function Calling**: derselbe MCP-Server funktioniert mit Claude, ChatGPT, Gemini, Cursor und allen modernen Agent-Frameworks. Statt M x N Custom-Integrationen baust du M+N standardisierte Server. Praktische Anwendung folgt in Modul 5.3.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Model Context Protocol Docs](https://modelcontextprotocol.io) | Offizielle Spezifikation |
| :book: | [Anthropic — MCP Introduction](https://www.anthropic.com/news/model-context-protocol) | Einführungs-Post |

## Teste dein Verständnis

- [ ] Kannst du MCP in 3 Sätzen erklären?
- [ ] Verstehst du den Unterschied zwischen MCP und raw Function Calling?
