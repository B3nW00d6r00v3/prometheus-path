---
title: "Tool-Definitionen mit Schemas"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Tool-Definitionen mit Schemas

## Kernidee

Moderne LLMs erwarten strukturierte Tool-Beschreibungen — und die Description ist wichtiger als der Code dahinter. Ein schlecht beschriebenes Tool wird vom Agent nicht oder falsch aufgerufen, egal wie gut die Implementierung ist. Tool-Description-Engineering ist eigene Disziplin.

## Im Detail

**Bestandteile einer Tool-Definition:**

```python
{
    "name": "web_search",
    "description": "Führt eine Web-Suche durch und gibt die Top-Ergebnisse zurück. "
                   "Nutze dieses Tool, wenn du aktuelle Informationen oder "
                   "Fakten brauchst, die du nicht aus dem Training kennst.",
    "parameters": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Die Suchanfrage. Formuliere sie präzise "
                               "wie eine Google-Suche."
            }
        },
        "required": ["query"]
    }
}
```

**Was macht eine gute Description?**
- **Erklärt den Anwendungsfall**, nicht die Implementierung: „Nutze dieses Tool, wenn..." statt „Dieses Tool ruft die Tavily API auf..."
- **Klärt Grenzen**: wann soll es *nicht* verwendet werden?
- **Gibt Hinweise auf die Inputs**: Formatvorgaben, Einschränkungen.

**Warum Pydantic?**  
Pydantic-Schemas erzeugen automatisch JSON Schema — typsicher, validiert, mit guten Error-Messages. Empfehlung: Tool-Parameter als Pydantic-Models definieren, dann `.model_json_schema()` verwenden.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Tool Use Best Practices](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Offizielle Empfehlungen |
| 📖 Docs | [OpenAI — Function Calling](https://platform.openai.com/docs/guides/function-calling) | Vergleichsperspektive |
| 🛠️ Library | [Pydantic](https://docs.pydantic.dev) | Schema-Generierung |

## Teste dein Verständnis

- [ ] Nenne die drei Pflicht-Felder einer Tool-Definition (Name, Description, Parameters).
- [ ] Was unterscheidet eine gute von einer schlechten Tool-Description?
- [ ] Wie generierst du mit Pydantic ein JSON-Schema für Tool-Parameter?
