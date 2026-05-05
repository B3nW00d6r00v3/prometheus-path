---
title: "Multimodal-Prompting-Patterns"
module: "7.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Multimodal-Prompting-Patterns

## Kernidee

Multimodales Prompting hat eigene Best Practices. Vier dominante Patterns erzeugen zuverlässig bessere Ergebnisse: Bild zuerst, strukturierter Output, Multiple-Bild-Vergleich, Bild+Text-Kontext.

## Im Detail

**Pattern 1: Bild zuerst, Frage danach**

Klassisches und zuverlässigstes Pattern. Das Modell verarbeitet das Bild, dann wird die Frage gestellt.

```python
# Gut:
messages = [{"role": "user", "content": [
    {"type": "image", "source": {"type": "base64", "data": img_data}},
    {"type": "text", "text": "Welche Produkte sind auf diesem Bild sichtbar?"}
]}]

# Weniger gut: Frage zuerst, dann Bild
```

**Pattern 2: Strukturierten Output erzwingen (JSON-Schema)**

Für Daten-Extraktion immer explizites Format vorgeben.

```
Extrahiere alle Tabellenzeilen als JSON mit folgendem Schema:
{"rows": [{"datum": "...", "betrag": ..., "beschreibung": "..."}]}
```

**Pattern 3: Multiple Bilder vergleichen**

```
Hier sind zwei Bilder: [Bild A] [Bild B]
Was sind die drei größten Unterschiede zwischen diesen Produkten?
```

Funktioniert zuverlässig für: Vor/Nachher-Vergleiche, A/B-Tests, Qualitätskontrolle.

**Pattern 4: Bild + Text-Kontext kombinieren**

```
Hier ist das Bild eines Diagramms: [Bild]
Und hier ist der zugehörige Abschnitt aus dem Paper: [Text]
Erkläre das Diagramm im Kontext des Papers.
```

**Häufige Fehler:**
- Zu vage Prompts ("Was siehst du?") → besser: spezifische Aufgabe geben.
- Kein Format angeben → Output ist schwer zu parsen.
- Bild ohne Kontext → Modell rät, was gemeint ist.
- Zu viele Bilder gleichzeitig → Performance und Cost steigen.

**Cost-Tipp:** Bilder vor dem API-Aufruf auf minimale notwendige Größe skalieren. Ein 4000×3000px-Foto kostet 4-8× mehr als ein 1000×750px-Bild bei vergleichbarer Analyse-Qualität.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Cookbook | [Anthropic Cookbook — Multimodal Patterns](https://github.com/anthropics/anthropic-cookbook) | Praxis-Beispiele |
| 🌐 Docs | [Claude Prompt Engineering Guide](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering) | Best Practices |

## Teste dein Verständnis

- [ ] Warum sollte das Bild vor der Frage im Prompt kommen?
- [ ] Wie erzwingst du strukturierten JSON-Output bei der Extraktion von Tabellen aus Bildern?
- [ ] Was passiert kostenmäßig, wenn du hochauflösende Bilder unreflektiert in die API schickst?
- [ ] Für welche Aufgabe ist das Multiple-Bild-Vergleichs-Pattern besonders nützlich?
