---
title: "Was ist ein guter KI-Use-Case?"
module: "3.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Was ist ein guter KI-Use-Case?

## Kernidee

Nicht jedes Problem braucht KI, und nicht jedes KI-Projekt löst ein echtes Problem. Ein guter KI-Use-Case erfüllt vier Kriterien: echtes Problem, KI-spezifische Stärke, verfügbare Daten und akzeptable Fehlerrate. Wenn eines fehlt, solltest du nicht bauen — egal wie cool die Technologie ist.

## Im Detail

**Vier Kriterien für einen guten KI-Use-Case:**

**1. Echtes Problem, das nachweislich Frustration / Geld / Zeit kostet.**
Nicht "es wäre cool, wenn..." sondern "X Personen verlieren Y Stunden pro Woche mit Z." Wenn du das Problem nicht quantifizieren kannst, ist es vielleicht keins.

**2. KI-spezifische Stärke.**
KI ist gut bei: natürliche Sprache verstehen/generieren, Muster in großen Datenmengen erkennen, Synthese von Informationen, Klassifikation und Sortierung. Ein einfacher Lookup ("Wie ist die Telefonnummer von X?") ist kein KI-Use-Case — das löst eine Datenbank besser und billiger.

**3. Verfügbare Daten in ausreichender Menge und Qualität.**
Für RAG brauchst du Dokumente. Für Klassifikation brauchst du gelabelte Beispiele. Für Fine-Tuning brauchst du tausende Trainingsbeispiele. Wenn die Daten nicht existieren oder nicht zugänglich sind, scheitert der Use-Case an der Grundlage.

**4. Akzeptable Fehlerrate.**
Jede KI macht Fehler. Die Frage ist: Was passiert, wenn sie falsch liegt?

| Domäne | Akzeptable Fehlerrate | Konsequenz bei Fehler |
|---|---|---|
| E-Mail-Klassifikation | ~10% | Nutzer sortiert manuell nach |
| Code-Vorschläge | ~20% | Entwickler reviewt und korrigiert |
| Medizinische Diagnose | <0.1% | Lebensbedrohlich |
| Finanz-Compliance | <1% | Strafen, Reputationsschaden |

**Schnell-Test für eine Use-Case-Idee:**

1. Ist das Problem echt? (Wer hat es? Wie oft? Was kostet es?)
2. Braucht es wirklich KI? (Geht es auch mit einer Regel, einem Filter, einer Datenbank?)
3. Gibt es Daten? (Wo? Wem gehören sie? Qualität?)
4. Was passiert bei Fehlern? (Akzeptabel oder katastrophal?)

Wenn eine der vier Antworten "nein" oder "unklar" ist — nicht bauen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [a16z — Generative AI Use Cases](https://a16z.com) | Wo GenAI 2025-2026 tatsächlich eingesetzt wird |
| 📖 | [McKinsey — State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | Marktüberblick und Trends |

## Teste dein Verständnis

- [ ] Kannst du die vier Kriterien für einen guten KI-Use-Case benennen?
- [ ] Nenne ein Beispiel für ein Problem, das KI NICHT braucht.
- [ ] Warum ist die Fehlerrate domänenabhängig?
