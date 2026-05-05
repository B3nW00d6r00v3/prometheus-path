---
title: "MCP-Architektur in der Tiefe"
module: "5.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# MCP-Architektur in der Tiefe

## Kernidee

MCP (Model Context Protocol) hat drei Komponenten: Host (der LLM-Client), Client (Verbindung zu Servern, im Host), und Server (exponiert Tools, Resources, Prompts). Kommunikation läuft über JSON-RPC 2.0, entweder lokal (stdio) oder remote (HTTP/SSE).

## Im Detail

**Die drei Komponenten:**

**1. Host:**
- Der LLM-Client: Claude Desktop, Cursor, deine eigene App.
- Der Host verwaltet einen oder mehrere Clients.
- Entscheidet, welche Server verbunden werden.

**2. Client (im Host):**
- Verwaltet eine Verbindung zu einem MCP-Server.
- Handshake, Session-Management, Tool-Aufruf-Protokoll.
- Pro Server ein Client (1:1-Beziehung).

**3. Server:**
- Eigenständiger Prozess (oder Service), der Tools, Resources und Prompts exponiert.
- Implementiert das MCP-Protokoll — dein eigener Server aus Python, TypeScript, etc.
- Beispiele: Filesystem-Server, GitHub-Server, dein eigener Notizen-Server.

**Transports:**

| Transport | Wann | Wie |
|-----------|------|-----|
| **stdio** | Lokal (gleicher Rechner) | Server läuft als Subprocess, stdin/stdout als Kanal |
| **HTTP/SSE** | Remote (anderer Server) | HTTP-Server mit Server-Sent Events |

Für dein erstes Modul 5.3 Projekt: stdio (lokal) reicht vollständig.

**JSON-RPC 2.0:**

MCP nutzt JSON-RPC 2.0 als Kommunikationsprotokoll. Du siehst das als Lernender kaum — die SDKs abstrahieren das. Wichtig: jeder Tool-Call ist eine JSON-RPC-Request, jede Tool-Response eine JSON-RPC-Response.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Spec | [MCP Specification](https://modelcontextprotocol.io/specification) | Technische Spezifikation |
| 📖 Docs | [Anthropic — MCP Architecture](https://docs.claude.com/en/docs/agents-and-tools/mcp) | Einsteiger-freundliche Erklärung |

## Teste dein Verständnis

- [ ] Kannst du die drei MCP-Komponenten (Host, Client, Server) in eigenen Worten erklären?
- [ ] Weißt du, wann stdio und wann HTTP/SSE als Transport sinnvoll ist?
- [ ] Kannst du erklären, was JSON-RPC 2.0 ist — ohne die SDK-Abstraktionsebene?
