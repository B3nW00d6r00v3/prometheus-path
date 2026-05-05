---
title: "Wann Reasoning-Modell, wann Standard?"
module: "7.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann Reasoning-Modell, wann Standard?

## Kernidee

Reasoning-Modelle sind kein Allheilmittel — für einfache Aufgaben sind sie teurer und schlechter als Standard-LLMs. Die Faustregel: wenn du das Ergebnis selbst in 30 Sekunden hingekriegt hättest, brauchst du kein Reasoning-Modell.

## Im Detail

**Für Reasoning-Modelle geeignet:**

- **Komplexe Mathematik** — mehrstufige Beweise, algebraische Umformungen, Wahrscheinlichkeitsrechnung.
- **Code-Debugging bei komplexen Bugs** — Tracing durch tiefen Call-Stack, Race-Conditions, Speicher-Leaks.
- **Multi-Step-Planning** — Projektplanung mit Abhängigkeiten, Optimierungsprobleme.
- **Trade-off-Analysen** — mehrere Optionen systematisch durchdenken, Risiken abwägen.
- **Formale Logik** — Beweise, Syllogismen, Constraint-Satisfaction-Probleme.
- **Schwierige Code-Generierung** — Algorithmen, komplexe Datenstrukturen, Optimierung.

**Für Standard-Modelle besser geeignet:**

- **Klassifikation** — ist dieser Text positiv/negativ? — keine komplexe Logik nötig.
- **Retrieval-Augmented Tasks** — Fakten aus Kontext beantworten — kein tiefes Reasoning nötig.
- **Brand-Voice-Generation** — kreatives Schreiben, Marketing-Texte.
- **Schnelle Antworten** — Latenz <500ms nötig.
- **Zusammenfassungen** — Texte kürzen, Hauptpunkte extrahieren.
- **Übersetzungen** — Sprache übertragen.
- **Einfache Q&A** — direkte Faktenfragen.

**Faustregel:**

> Wenn du das Ergebnis selbst in 30 Sekunden hingekriegt hättest, brauchst du kein Reasoning-Modell.

**Decision-Tree:**

```
Task komplex und mehrstufig? 
  ├─ Ja → Latenz-sensitiv (<1s)?
  │         ├─ Ja → Standard-Modell (Reasoning zu langsam)
  │         └─ Nein → Reasoning-Modell
  └─ Nein → Standard-Modell (günstiger, schneller, oft besser)
```

**Cost-Orientierung:** Reasoning-Modelle kosten typisch 5-30× mehr pro Anfrage als ein vergleichbares Standard-Modell. Die Qualitätsverbesserung auf einfachen Tasks ist gering bis negativ.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [Anthropic — When to use Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Offizielle Empfehlungen von Anthropic |
| 🌐 Docs | [OpenAI — Reasoning vs Chat Models](https://platform.openai.com/docs/guides/reasoning) | OpenAI's Entscheidungshilfe |

## Teste dein Verständnis

- [ ] Nenne drei Aufgaben, für die ein Reasoning-Modell klarer Mehrwert bringt.
- [ ] Nenne drei Aufgaben, bei denen ein Standard-Modell besser ist.
- [ ] Was ist die 30-Sekunden-Faustregel — wie wendest du sie an?
- [ ] Warum kann Reasoning bei einfachen Aufgaben schlechter sein als Standard-Inferenz?
