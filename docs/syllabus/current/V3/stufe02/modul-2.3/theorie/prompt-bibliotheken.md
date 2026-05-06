---
title: "Prompt-Bibliotheken als Industriepraxis"
module: "2.3"
type: theorie
fast_track: true
effort: "15-20min"
stability: green
expires: null
---

# Prompt-Bibliotheken als Industriepraxis

## Kernidee

Gute Entwickler schreiben Code nicht jedes Mal von Null — sie haben Bibliotheken, Snippets und Templates. Genauso sammeln professionelle KI-Nutzer ihre besten Prompts: versioniert, getestet, kategorisiert. Microsoft, Anthropic und OpenAI machen es vor mit öffentlichen Cookbooks. Deine eigene Prompt-Library ist kein Hobby-Projekt, sondern der Anfang einer professionellen Arbeitsweise.

## Im Detail

### Warum eine Prompt-Library?

Ohne Library passiert Folgendes: Du schreibst einen brillanten Prompt, er liefert perfekte Ergebnisse — und drei Wochen später weißt du nicht mehr genau, wie er formuliert war. Du schreibst ihn neu, er funktioniert schlechter. Klingt bekannt?

Eine Prompt-Library löst drei Probleme:

| Problem | Ohne Library | Mit Library |
|---------|-------------|-------------|
| **Vergessen** | "Wie war der Prompt nochmal?" | Nachschlagen, sofort nutzen |
| **Inkonsistenz** | Jedes Mal leicht anders formuliert | Getestete Version verwenden |
| **Kein Lernen** | Gleiche Fehler wiederholen | Dokumentierte Verbesserungen (v1 → v2 → v3) |

### Aufbau einer persönlichen Prompt-Library

Jeder Prompt in deiner Library sollte diese Felder haben:

```markdown
## Prompt: [Titel]

**Kategorie:** Schreiben / Coding / Analyse / Lernen / Alltag
**Modell-Empfehlung:** Claude Sonnet / GPT-4o / egal
**Version:** v2 (aktualisiert 2026-04-15)

### Prompt-Text
[Der eigentliche Prompt]

### Beispiel-Input
[Ein konkreter Input, mit dem der Prompt getestet wurde]

### Beispiel-Output
[Der Output, den der Prompt mit diesem Input liefert]

### Notizen
- Funktioniert besser mit Claude als mit GPT-4o
- Bei langen Texten (>2000 Wörter) "Abschnitt für Abschnitt" ergänzen
- v1 hatte das Problem, dass... (deshalb v2)
```

### Kategorisierung: Nach Use Case, nicht nach Technik

**Falsch** (nach Technik sortiert):

```
📁 zero-shot/
📁 few-shot/
📁 chain-of-thought/
📁 structured-output/
```

Das ist wie ein Kochbuch, das nach "Braten", "Kochen", "Backen" sortiert ist statt nach "Vorspeise", "Hauptgericht", "Dessert". Techniken sind Werkzeuge — du suchst nach Use Cases.

**Richtig** (nach Use Case sortiert):

```
📁 schreiben/
  ├── email-geschaeftlich.md
  ├── email-bewerbung.md
  ├── blogpost-entwurf.md
  └── social-media-caption.md
📁 coding/
  ├── code-review.md
  ├── bug-finden.md
  ├── refactoring-vorschlag.md
  └── test-schreiben.md
📁 analyse/
  ├── text-zusammenfassung.md
  ├── pro-contra-abwägung.md
  └── daten-interpretation.md
📁 lernen/
  ├── konzept-erklaerung.md
  ├── quiz-generierung.md
  └── lernplan-erstellen.md
```

### Drei Beispiel-Prompts aus einer realen Library

**1. Geschäfts-E-Mail aus Stichpunkten**

```
Kategorie: Schreiben
Modell: Claude Sonnet / GPT-4o
Version: v3

Prompt:
"Schreibe eine professionelle Geschäfts-E-Mail auf Deutsch.

Regeln:
- Sie-Form, maximal 120 Wörter
- Betreffzeile am Anfang
- Kein Marketing-Sprech, kein Ausrufezeichen im Betreff
- Struktur: Betreff → Anrede → Kern (max. 3 Sätze) → 
  Handlungsaufforderung → Grußformel

Stichpunkte: {eingabe}"

Notizen: v1 war zu lang (kein Wortlimit). v2 vergaß 
manchmal die Betreffzeile. v3 mit expliziter Struktur 
liefert konsistent gute Ergebnisse.
```

**2. Code-Review mit Fokus**

```
Kategorie: Coding
Modell: Claude Sonnet (bevorzugt)
Version: v2

Prompt:
"Reviewe folgenden Code. Fokussiere dich auf:
1. Bugs und logische Fehler
2. Performance-Probleme
3. Lesbarkeit und Wartbarkeit

Für jeden Fund: Zeile angeben, Problem beschreiben, 
konkreten Fix vorschlagen. Kein Lob — nur actionable 
Findings. Wenn der Code gut ist, sage 'Keine Findings.'

Code:
{code}"

Notizen: Ohne "kein Lob" schreibt das Modell 3 Absätze 
"Toller Code!" bevor es zu den Problemen kommt.
```

**3. Konzept-Erklärung (Feynman-Methode)**

```
Kategorie: Lernen
Modell: egal
Version: v1

Prompt:
"Erkläre mir {konzept} so, dass ich es einem 12-Jährigen 
erklären könnte. 

Struktur:
1. Analogie aus dem Alltag (ein Satz)
2. Einfache Erklärung (3-4 Sätze)
3. Warum das wichtig ist (1-2 Sätze)
4. Ein häufiges Missverständnis und warum es falsch ist

Keine Fachbegriffe ohne Erklärung."

Notizen: Funktioniert überraschend gut für komplexe 
Themen. Die "Missverständnis"-Sektion ist besonders 
wertvoll.
```

### Öffentliche Prompt-Libraries als Inspiration

| Quelle | Was du findest | Link |
|--------|---------------|------|
| **Anthropic Cookbook** | Offizielle Prompt-Beispiele, Patterns, Code-Samples | [github.com/anthropics/anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook) |
| **OpenAI Cookbook** | Production-Patterns, Embeddings, Function Calling | [cookbook.openai.com](https://cookbook.openai.com) |
| **Anthropic Prompt Library** | Kuratierte Prompts für häufige Aufgaben | [docs.anthropic.com/en/prompt-library](https://docs.anthropic.com/en/prompt-library) |
| **LangChain Hub** | Community-Prompts, durchsuchbar | [smith.langchain.com/hub](https://smith.langchain.com/hub) |
| **awesome-chatgpt-prompts** | Community-gesammelte Prompts (Qualität variiert) | [github.com/f/awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) |

**Wichtig:** Öffentliche Prompts sind Ausgangspunkte, keine fertigen Lösungen. Adaptiere sie an deinen Use Case, teste sie mit deinen Inputs, und verbessere sie.

### Versionierung: Warum v1 → v2 → v3 wichtig ist

Prompts entwickeln sich weiter. Dokumentiere, **was** du geändert hast und **warum**:

```
## E-Mail-Prompt — Versionshistorie

v1 (2026-03-01): Basis-Prompt "Schreibe eine E-Mail..."
→ Problem: Oft >200 Wörter, kein konsistenter Aufbau

v2 (2026-03-10): Wortlimit (120) und Strukturvorgabe ergänzt
→ Problem: Betreffzeile wird manchmal vergessen

v3 (2026-03-15): "Betreffzeile am Anfang" explizit als 
erste Formatregel
→ Funktioniert konsistent bei allen 5 Test-Inputs ✅
```

Das ist kein Overhead — das ist der Unterschied zwischen "ich prompte rum" und "ich optimiere systematisch".

### Team-Praxis: Shared Prompt Repos

In professionellen Teams sind Prompt-Libraries geteilt — wie Code-Repositories:

- **Versioniert** in Git (jede Änderung nachvollziehbar)
- **Reviewed** im Team (Prompt Reviews wie Code Reviews)
- **Getestet** mit definierten Test-Inputs (siehe Prompt-Eval)
- **Dokumentiert** mit Use Case und Modell-Empfehlung
- **Regelmäßig aktualisiert** (Modelle ändern sich, Prompts müssen mitwachsen)

Das ist Industriepraxis bei Teams, die ernsthaft mit LLMs arbeiten — von Startups bis Konzerne.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook) | Offizielle Code-Beispiele und Patterns |
| :hammer_and_wrench: | [OpenAI Cookbook](https://cookbook.openai.com) | OpenAI-Beispiele für Production |
| :hammer_and_wrench: | [Anthropic Prompt Library](https://docs.anthropic.com/en/prompt-library) | Kuratierte Prompts für häufige Aufgaben |
| :hammer_and_wrench: | [LangChain Hub](https://smith.langchain.com/hub) | Community-Prompts, durchsuchbar |

## Teste dein Verständnis

- [ ] Starte deine eigene Prompt-Library mit mindestens 5 Prompts aus verschiedenen Kategorien. Nutze das Template aus dieser Lektion (Titel, Kategorie, Modell, Prompt-Text, Beispiel-Input/Output, Notizen).
- [ ] Nimm einen Prompt aus einer öffentlichen Library (z.B. Anthropic Prompt Library), teste ihn mit deinen eigenen Inputs, und passe ihn an — dokumentiere, was du geändert hast und warum.
- [ ] Erkläre einem Freund, warum Prompt-Versionierung (v1 → v2 → v3) wichtig ist, obwohl ein Prompt "nur ein Textblock" ist. Wo liegt die Parallele zu Code-Versionierung?
