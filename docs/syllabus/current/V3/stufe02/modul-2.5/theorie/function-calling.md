---
title: "Function Calling / Tool Use als Standard"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Function Calling / Tool Use als Standard

## Kernidee

Moderne LLMs können nicht nur Text generieren — sie können auch "Werkzeuge benutzen". Du definierst Funktionen (z.B. "suche im Web", "frage die Datenbank", "sende eine E-Mail"), und das Modell entscheidet selbst, wann es welche Funktion aufrufen will. Dein Code führt dann die Funktion aus und gibt das Ergebnis zurück. Das ist die Brücke zwischen "Chatbot" und "autonomer Agent" — und ein Pflichtkonzept für jeden, der KI-Anwendungen baut.

## Im Detail

### Wie Function Calling funktioniert

Der Workflow hat vier Schritte — immer in derselben Reihenfolge:

**Schritt 1: Tools definieren**

Du beschreibst dem Modell via API, welche Funktionen verfügbar sind. Das passiert als JSON-Schema mit Name, Beschreibung und Parametern:

```json
{
  "name": "get_weather",
  "description": "Gibt das aktuelle Wetter für eine Stadt zurück",
  "parameters": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "Name der Stadt, z.B. Berlin"
      }
    },
    "required": ["city"]
  }
}
```

**Schritt 2: Modell entscheidet**

Du sendest die User-Nachricht zusammen mit den Tool-Definitionen an die API. Das Modell entscheidet eigenständig, ob und welches Tool es aufrufen will. Bei der Nachricht "Wie ist das Wetter in Berlin?" wird es `get_weather` mit `city: "Berlin"` aufrufen.

**Schritt 3: Dein Code führt aus**

Das Modell generiert nur den Aufruf — es führt nichts selbst aus. Dein Code empfängt den Tool-Call, führt die echte Funktion aus (z.B. eine Wetter-API anfragen) und bekommt das Ergebnis.

**Schritt 4: Ergebnis zurück ans Modell**

Du sendest das Ergebnis der Funktion zurück ans Modell. Es formuliert jetzt eine natürliche Antwort: "In Berlin sind es aktuell 18°C bei leichter Bewölkung."

### Warum ist das so wichtig?

Function Calling löst die drei größten Limitationen von LLMs:

1. **Kein Echtzeit-Wissen:** Das Modell hat einen Training-Cutoff. Aber mit einem `web_search`-Tool kann es aktuelle Informationen abrufen.
2. **Keine Aktionen in der echten Welt:** Ein LLM kann keinen Kalendertermin erstellen — aber es kann ein `create_calendar_event`-Tool aufrufen, das es für es tut.
3. **Keine exakten Berechnungen:** LLMs halluzinieren bei Mathematik. Aber ein `calculator`-Tool gibt exakte Ergebnisse.

### Function Calling als Basis für Agenten

Ein LLM-Agent ist nichts anderes als ein LLM mit Function Calling in einer Schleife: Das Modell ruft Tools auf, bekommt Ergebnisse, denkt nach, ruft weitere Tools auf — bis die Aufgabe erledigt ist. Ohne Function Calling sind keine Agenten möglich.

Beispiel-Kette für einen Reise-Agenten:
1. `search_flights(from="Berlin", to="Rom", date="2026-07-15")` → Ergebnisse
2. `search_hotels(city="Rom", checkin="2026-07-15", nights=3)` → Ergebnisse
3. `check_calendar(date="2026-07-15", days=3)` → "Frei"
4. `book_flight(flight_id="LH1234")` → Bestätigung

### Alle großen Anbieter unterstützen es

Function Calling ist 2026 ein Standard-Feature jeder großen LLM-API:

- **Anthropic:** "Tool Use" — Unterstützung in der Messages API
- **OpenAI:** "Function Calling" — in der Chat Completions API
- **Google:** "Function Calling" — in der Gemini API
- **Mistral:** "Tool Use" — in der Chat API

Die Syntax unterscheidet sich leicht, aber das Konzept ist identisch. Provider-Abstraktions-Tools wie LiteLLM vereinheitlichen die Syntax.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Claude Tool Use |
| :book: | [OpenAI — Function Calling](https://platform.openai.com/docs/guides/function-calling) | OpenAI-Variante |
| :book: | [Google — Function Calling](https://ai.google.dev/gemini-api/docs/function-calling) | Gemini-Variante |

## Teste dein Verständnis

- [ ] Kannst du den vierstufigen Function-Calling-Workflow erklären (definieren, Modell entscheidet, Code führt aus, Ergebnis zurück)?
- [ ] Verstehst du, warum Function Calling die Basis für Agenten-Systeme ist?
- [ ] Kannst du erklären, welche drei LLM-Limitationen Function Calling löst?
- [ ] Weißt du, warum das Modell die Funktion nicht selbst ausführt, sondern nur den Aufruf generiert?
