---
title: "Strukturierte Outputs vs. Reasoning"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Strukturierte Outputs vs. Reasoning

## Kernidee

Stell dir vor, jemand löst eine komplexe Mathe-Aufgabe — aber du zwingst ihn, die Antwort sofort in eine starre Tabelle zu schreiben. Das engt den Denkprozess ein. Genauso vertragen sich JSON-Schema-Erzwingung und Reasoning schlecht. Die Lösung: Erst denken lassen, dann in einem zweiten Schritt formatieren. Das ist ein Standard-Pattern in Production-Pipelines.

## Im Detail

### Das Spannungsfeld

Moderne LLM-APIs bieten "Structured Outputs" — die Garantie, dass die Antwort exakt einem vorgegebenen JSON-Schema entspricht. Das ist großartig für Daten-Pipelines, API-Responses und automatisierte Verarbeitung.

Aber: Wenn ein Reasoning-Modell gleichzeitig ein schwieriges Problem lösen **und** das Ergebnis in ein starres Schema pressen muss, interferieren diese beiden Aufgaben. Das Modell muss:

1. Den komplexen Reasoning-Prozess durchlaufen
2. Gleichzeitig sicherstellen, dass jedes generierte Token zum JSON-Schema passt

Das ist, als müsstest du eine Differentialgleichung lösen und gleichzeitig das Ergebnis in Haiku-Form aufschreiben. Beides einzeln schaffst du — aber beides gleichzeitig verschlechtert beide Ergebnisse.

### Warum die Qualität leidet

Structured-Output-Enforcement funktioniert, indem die erlaubten nächsten Tokens eingeschränkt werden (constrained decoding). Statt aller 100.000+ Tokens im Vokabular sind nur die Tokens erlaubt, die zum aktuellen Position im JSON-Schema passen. Das beschneidet den Suchraum des Modells — und damit auch seinen Reasoning-Raum.

In der Praxis zeigt sich: Reasoning-Modelle mit JSON-Schema-Erzwingung produzieren bei schwierigen Aufgaben messbar schlechtere Ergebnisse als ohne Schema-Erzwingung.

### Die Lösung: Das Zwei-Schritt-Pattern

```
Schritt 1: Reasoning-Modell (Opus, o3, R1)
   → "Löse das Problem. Antworte in Freitext."
   → Ergebnis: qualitativ hochwertige Analyse in natürlicher Sprache

Schritt 2: Klassisches Modell (Haiku, GPT-4o-mini)
   → "Extrahiere aus diesem Text die Felder X, Y, Z und gib sie als JSON zurück."
   → Ergebnis: sauber strukturierter JSON-Output
```

**Vorteile dieses Patterns:**

- Das Reasoning-Modell kann frei denken, ohne Schema-Einschränkungen
- Das klassische Modell ist günstig und schnell beim Formatieren
- Die Gesamtkosten sind niedriger (Reasoning nur für die schwere Arbeit, günstiges Modell für die Formatierung)
- Die Qualität ist höher als beides in einem Schritt

### Wann Structured Outputs kein Problem sind

Nicht jede Aufgabe mit strukturiertem Output braucht das Zwei-Schritt-Pattern:

- **Einfache Extraktion:** "Extrahiere Name, E-Mail und Telefonnummer aus diesem Text" — kein Reasoning nötig, Structured Output direkt OK
- **Klassifikation:** "Ist diese E-Mail Spam (ja/nein)?" — kein Reasoning nötig
- **Einfache Transformation:** "Konvertiere diese CSV-Zeilen in JSON" — kein Reasoning nötig

Das Zwei-Schritt-Pattern ist nur relevant, wenn die Aufgabe tatsächlich komplexes Reasoning erfordert **und** das Ergebnis strukturiert sein muss.

### In der Praxis

Dieses Pattern — "Reasoning-Modell für die schwere Arbeit, klassisches Modell für die Formatierung" — ist eines der häufigsten Patterns in Production-Pipelines 2026. Du wirst es in Stufe 5-6 selbst implementieren.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) | Structured Outputs als API-Feature |
| :book: | [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Tool Use für strukturierte Ausgaben |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum JSON-Schema-Erzwingung bei Reasoning-Modellen problematisch sein kann?
- [ ] Kennst du das Zwei-Schritt-Pattern (erst denken, dann formatieren)?
- [ ] Weißt du, wann Structured Outputs direkt OK sind (kein Reasoning nötig)?
- [ ] Kannst du erklären, warum das Zwei-Schritt-Pattern auch kosteneffizienter ist?
