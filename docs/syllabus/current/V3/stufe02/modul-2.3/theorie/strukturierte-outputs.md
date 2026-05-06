---
title: "Strukturierte Outputs: JSON, XML, Markdown"
module: "2.3"
type: theorie
fast_track: true
effort: "15-20min"
stability: green
expires: null
---

# Strukturierte Outputs: JSON, XML, Markdown

## Kernidee

Ein Chatbot, der in Fließtext antwortet, ist wie ein Kollege, der Berichte als Fließtext-E-Mail schickt — du musst die Infos selbst rausfischen. Strukturierte Outputs sind wie ein ausgefülltes Formular: Jede Info steht an ihrem Platz, und ein Programm kann sie direkt weiterverarbeiten. Das ist die Brücke zwischen "ich chatte mit KI" und "KI ist ein Baustein in meiner Software".

## Im Detail

### Warum Struktur wichtig ist

Sobald du LLM-Outputs **programmatisch weiterverarbeiten** willst — z.B. in einer App, einer Datenbank oder einem automatisierten Workflow — brauchst du vorhersagbare Strukturen statt Fließtext.

**Fließtext (schwer zu parsen):**

```
Der Kunde Max Müller hat am 15. März 2026 eine Beschwerde 
eingereicht. Er ist unzufrieden mit der Lieferzeit (3 Wochen 
statt der versprochenen 5 Tage). Die Stimmung ist negativ. 
Priorität: hoch.
```

**JSON (maschinell verarbeitbar):**

```json
{
  "kunde": "Max Müller",
  "datum": "2026-03-15",
  "typ": "beschwerde",
  "thema": "lieferzeit",
  "details": "3 Wochen statt versprochener 5 Tage",
  "sentiment": "negativ",
  "priorität": "hoch"
}
```

### Drei Ebenen der Strukturierung

#### Ebene 1: Prompt-basiert (einfach, aber unzuverlässig)

Du bittest das Modell im Prompt, strukturiert zu antworten:

```
"Analysiere diese Kundenbewertung und antworte in folgendem 
JSON-Format:
{
  'sentiment': 'positiv' | 'neutral' | 'negativ',
  'themen': ['thema1', 'thema2'],
  'zusammenfassung': 'Ein Satz'
}

Bewertung: 'Lieferung war schnell, aber das Produkt hat einen 
Kratzer. Sonst aber gute Qualität.'"
```

**Vorteil:** Funktioniert in jedem Chat-Interface, keine API nötig.
**Nachteil:** Das Modell kann trotzdem Prosa drum herum schreiben, Felder weglassen oder das Format leicht verändern. Für Hobby-Projekte okay, für Production unzuverlässig.

#### Ebene 2: Markdown-Tabellen und -Templates (visuell + strukturiert)

Für Outputs, die Menschen lesen UND verarbeiten sollen:

```
"Erstelle eine Vergleichstabelle der drei Cloud-Anbieter 
AWS, Azure und GCP.

Format: Markdown-Tabelle mit den Spalten:
| Anbieter | Stärke | Schwäche | Preismodell | Empfehlung für |"
```

Markdown-Tabellen sind besonders nützlich für:

- Reports und Zusammenfassungen
- Vergleiche und Bewertungen
- Inhalte, die in Dokumentation oder Wikis fließen

#### Ebene 3: API-enforced Structured Outputs (Production-Standard)

Moderne APIs können das Output-Format **erzwingen** — das Modell hat gar keine Wahl:

**OpenAI Structured Outputs:**

```python
response = client.responses.create(
    model="gpt-4o",
    input="Analysiere diese Bewertung: 'Tolles Produkt, schnelle Lieferung'",
    text={
        "format": {
            "type": "json_schema",
            "name": "bewertungsanalyse",
            "schema": {
                "type": "object",
                "properties": {
                    "sentiment": {"type": "string", "enum": ["positiv", "neutral", "negativ"]},
                    "themen": {"type": "array", "items": {"type": "string"}},
                    "zusammenfassung": {"type": "string"}
                },
                "required": ["sentiment", "themen", "zusammenfassung"]
            }
        }
    }
)
```

**Anthropic Tool Use (structured output via tools):**

```python
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    messages=[{"role": "user", "content": "Analysiere: 'Tolles Produkt'"}],
    tools=[{
        "name": "bewertungsanalyse",
        "description": "Analysiere eine Kundenbewertung",
        "input_schema": {
            "type": "object",
            "properties": {
                "sentiment": {"type": "string", "enum": ["positiv", "neutral", "negativ"]},
                "themen": {"type": "array", "items": {"type": "string"}}
            },
            "required": ["sentiment", "themen"]
        }
    }]
)
```

**Vorteil:** 100% Schema-Validität garantiert — kein Parsen, kein Hoffen.
**Nachteil:** Erfordert API-Zugang und Code-Kenntnisse.

### Wann welches Format?

| Format | Wann nutzen | Beispiel |
|--------|-------------|---------|
| **JSON** | Daten für Apps/APIs, automatisierte Pipelines | Kundendaten extrahieren, API-Responses |
| **XML** | Strukturierte Dokumente, verschachtelte Daten, Anthropic-Prompts | Prompt-Segmente mit Tags markieren |
| **Markdown** | Menschenlesbare Reports, Dokumentation | Vergleichstabellen, Zusammenfassungen |
| **YAML** | Konfigurationsdateien, leicht lesbare Daten | Prompt-Templates, Metadaten |
| **CSV** | Tabellarische Daten, Import in Spreadsheets | Listen, Rankings, Kataloge |

### XML-Tags: Anthropics Geheimwaffe

Anthropic empfiehlt XML-Tags, um Prompt-Abschnitte klar zu trennen — das funktioniert besonders gut mit Claude:

```
<kontext>
Du bist Kundensupport-Agent für TechShop.de. 
Unser Rückgaberecht: 30 Tage, originalverpackt.
</kontext>

<aufgabe>
Beantworte die folgende Kundenanfrage freundlich und 
lösungsorientiert.
</aufgabe>

<kundenanfrage>
Ich habe vor 3 Wochen einen Monitor gekauft und möchte 
ihn zurückgeben. Die Originalverpackung habe ich leider 
nicht mehr.
</kundenanfrage>

<ausgabeformat>
Antworte in diesem JSON-Format:
{
  "antwort_text": "...",
  "rückgabe_möglich": true/false,
  "begründung": "...",
  "nächster_schritt": "..."
}
</ausgabeformat>
```

### Anti-Pattern: Häufige Fehler bei strukturierten Outputs

| Fehler | Problem | Besser |
|--------|---------|--------|
| "Antworte in JSON" ohne Schema | Modell erfindet Feldnamen | Konkretes Schema mit Beispiel vorgeben |
| Zu tief verschachtelte Strukturen | Modell verliert sich in der Verschachtelung | Maximal 2-3 Ebenen tief, bei Bedarf aufteilen |
| Prompt-basiert für Production | Outputs sind manchmal leicht falsch formatiert | API-enforced Structured Outputs nutzen |
| Kein Beispiel-Output gezeigt | Modell rät, wie der Output aussehen soll | Immer ein vollständiges Beispiel mitgeben |

### Praxis-Tipp: Schrittweise Strukturierung

Für den Einstieg empfiehlt sich ein schrittweiser Weg:

1. **Starte prompt-basiert:** Schreib ins Chatfenster "Antworte als JSON mit diesen Feldern: ..."
2. **Teste die Konsistenz:** Schicke den gleichen Prompt 5 Mal — kommt immer dasselbe Format?
3. **Wenn nötig, upgrade auf API:** Sobald du automatisierst, wechsle zu Structured Outputs via API

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) | Schema-erzwungene JSON-Antworten |
| :book: | [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Strukturierte Outputs via Tools |
| :book: | [Anthropic — Use XML Tags](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags) | XML-Tags für Prompt-Strukturierung |
| :book: | [Pydantic — JSON Schema](https://docs.pydantic.dev/latest/concepts/json_schema/) | Python-Schema-Validierung |

## Teste dein Verständnis

- [ ] Schreibe einen Prompt, der eine Stellenanzeige analysiert und die Infos als JSON zurückgibt (Titel, Firma, Gehalt, Anforderungen als Array). Teste mit 3 verschiedenen Stellenanzeigen — kommt immer valides JSON?
- [ ] Erkläre den Unterschied zwischen prompt-basierter und API-enforced Strukturierung. Wann ist welche Variante die bessere Wahl?
- [ ] Du baust eine App, die Kundenbeschwerden automatisch kategorisiert. Welche Ebene der Strukturierung wählst du und warum?
