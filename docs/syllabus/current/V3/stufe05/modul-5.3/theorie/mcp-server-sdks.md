---
title: "Eigenen MCP-Server bauen — die SDKs"
module: "5.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Eigenen MCP-Server bauen — die SDKs

## Kernidee

Offizielle SDKs für Python, TypeScript, Java, Kotlin und C# machen den Bau eines MCP-Servers zur überschaubaren Aufgabe: pro Tool 10-30 Zeilen Code plus Server-Setup. Das Python-SDK ist am ausgereiftesten; FastMCP bietet eine noch kompaktere Alternative.

## Im Detail

**Offizielle SDKs:**

| Sprache | SDK | Reifegrad |
|---------|-----|-----------|
| Python | `mcp` (pip) | Am ausgereiftesten, empfohlen |
| TypeScript | `@modelcontextprotocol/sdk` | Gut für Node.js-Projekte |
| Java/Kotlin | Offizielles SDK | Enterprise-Umgebungen |
| C# | Offizielles SDK | .NET-Umgebungen |

**FastMCP** ist ein inoffizielles, aber beliebtes Python-Framework, das den Boilerplate weiter reduziert. Empfehlung: für Modul 5.3 beginne mit dem offiziellen Python-SDK (lernreicher), nutze FastMCP danach wenn du schnell produktiv sein willst.

**Minimales Python-Beispiel mit offiziellem SDK:**

```python
from mcp.server import Server
import mcp.types as types

server = Server("mein-notizen-server")

@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    return [
        types.Tool(
            name="search_notes",
            description="Sucht in deinen lokalen Notizen nach einem Begriff",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Suchbegriff"}
                },
                "required": ["query"]
            }
        )
    ]

@server.call_tool()
async def handle_call_tool(name: str, arguments: dict) -> list[types.TextContent]:
    if name == "search_notes":
        results = search_my_notes(arguments["query"])
        return [types.TextContent(type="text", text=str(results))]
```

**Pydantic für Tool-Schemas:** Du kannst Pydantic-Modelle für Eingabe-Schemas nutzen — Brücke zu Modul 5.2 (Structured Outputs).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [MCP Python SDK (GitHub)](https://github.com/modelcontextprotocol/python-sdk) | Offiziell, umfassend |
| 📦 Code | [FastMCP](https://github.com/jlowin/fastmcp) | Kompaktere Alternative |

## Teste dein Verständnis

- [ ] Kannst du ein minimales Tool in Python mit dem MCP-SDK implementieren?
- [ ] Weißt du, wie du einen lokalen Server per stdio starten und in Claude Desktop einbinden kannst?
- [ ] Kannst du erklären, was `list_tools` und `call_tool` im SDK bedeuten?
