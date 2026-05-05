---
title: "MCP-Primitives: Tools, Resources, Prompts"
module: "5.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# MCP-Primitives: Tools, Resources, Prompts

## Kernidee

MCP kennt drei Primitives: Tools (ausführbare Funktionen mit Seiteneffekten), Resources (Daten zum Lesen ohne Seiteneffekt) und Prompts (wiederverwendbare Prompt-Templates). Die Unterscheidung ist wichtig für den Sicherheits-Block.

## Im Detail

**Tools:**
- Ausführbare Funktionen, die Aktionen durchführen.
- Können Seiteneffekte haben: DB schreiben, E-Mail senden, Datei löschen, API aufrufen.
- Der LLM entscheidet, wann ein Tool aufgerufen wird.
- Beispiele: `query_database`, `send_email`, `search_notes`, `create_github_issue`.
- **Sicherheits-Relevanz:** hoch — Tools können destruktive Aktionen ausführen.

**Resources:**
- Daten zum Lesen, ohne Seiteneffekte.
- Der Host/Client entscheidet, wann Resources gelesen werden (nicht das LLM allein).
- Beispiele: Liste aller Notiz-Titel, Inhalt einer Konfigurationsdatei, aktuelle DB-Statistiken.
- **Sicherheits-Relevanz:** geringer — kein Schreibzugriff.

**Prompts:**
- Wiederverwendbare Prompt-Templates, die ein Server bereitstellt.
- Beispiele: "Zusammenfasse diesen Code-Review-Kommentar nach unserem Standard", "Erstelle eine Jira-Ticket-Beschreibung aus diesem Bug-Report".
- Werden vom LLM auf Anfrage aufgerufen.

**Unterschied Tool vs. Resource:**

| Aspekt | Tool | Resource |
|--------|------|----------|
| Aufruf | LLM entscheidet | Host/User entscheidet |
| Seiteneffekte | möglich | nein |
| Beispiel | `send_email(...)` | `list_all_notes()` |
| Sicherheits-Risiko | höher | niedriger |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [MCP Concepts](https://modelcontextprotocol.io/docs/concepts/architecture) | Primitive im Detail |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen Tool und Resource in einem Satz erklären?
- [ ] Warum ist der Sicherheits-Block für Tools relevanter als für Resources?
- [ ] Welche Tools und Resources würde dein geplanter MCP-Server (Notizen, Bookmarks, etc.) haben?
