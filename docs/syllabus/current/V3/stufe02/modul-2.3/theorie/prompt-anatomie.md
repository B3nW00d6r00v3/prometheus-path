---
title: "Anatomie eines guten Prompts"
module: "2.3"
type: theorie
fast_track: true
effort: "15-20min"
stability: green
expires: null
---

# Anatomie eines guten Prompts: Kontext, Rolle, Aufgabe, Format, Beispiele, Constraints

## Kernidee

Ein guter Prompt ist wie ein Briefing an einen brillanten neuen Mitarbeiter, der deinen Job nicht kennt. Du sagst ihm: Wer bist du (Rolle), was weißt du schon (Kontext), was sollst du tun (Aufgabe), wie soll das Ergebnis aussehen (Format), hier sind Beispiele, und das darfst du auf keinen Fall tun (Constraints). Je klarer das Briefing, desto besser das Ergebnis — bei Menschen wie bei Sprachmodellen.

## Im Detail

### Die sechs Bausteine

Jeder gute Prompt setzt sich aus bis zu sechs Elementen zusammen. Nicht jeder Prompt braucht alle sechs — aber **bewusstes Weglassen** ist besser als unbewusstes Vergessen.

#### 1. Rolle (Wer bist du?)

Du gibst dem Modell eine Identität, die seine Antwort formt. Das ist keine Magie — es aktiviert relevante Muster in den Trainingsdaten.

```
Schwach: "Erkläre mir Machine Learning."
Stark:  "Du bist ein erfahrener ML-Professor, der Konzepte für 
         Erstsemester-Studierende ohne Mathe-Vorkenntnisse erklärt. 
         Erkläre mir Machine Learning."
```

#### 2. Kontext (Was weißt du schon?)

Hintergrundwissen, das das Modell braucht, um sinnvoll zu antworten. Ohne Kontext rät das Modell — und rät oft falsch.

```
Schwach: "Schreib eine E-Mail an den Kunden."
Stark:  "Unser Kunde Müller GmbH hat eine Lieferverzögerung von 
         2 Wochen bei Bestellung #4711. Der Kunde ist seit 10 Jahren 
         Stammkunde und normalerweise geduldig, hat aber schon einmal 
         nachgefragt. Schreib eine E-Mail, die die Verzögerung erklärt 
         und eine Lösung anbietet."
```

#### 3. Aufgabe (Was sollst du tun?)

Die eigentliche Instruktion — klar, spezifisch, mit einem Verb am Anfang. "Analysiere", "Erstelle", "Vergleiche" statt vager Formulierungen.

```
Schwach: "Was denkst du über diesen Code?"
Stark:  "Analysiere diesen Python-Code auf Performance-Probleme. 
         Liste die Top-3-Engpässe mit geschätztem Impact auf."
```

#### 4. Format (Wie soll die Antwort aussehen?)

Du bestimmst die Struktur: Bullet Points, Tabelle, JSON, Fließtext, Länge.

```
Schwach: "Erkläre die Vor- und Nachteile von React."
Stark:  "Erkläre die Vor- und Nachteile von React in einer 
         Markdown-Tabelle mit den Spalten: Aspekt | Vorteil | Nachteil. 
         Maximal 5 Zeilen."
```

#### 5. Beispiele (Zeig mir, was du meinst)

Beispiele schlagen Beschreibungen. Statt lang zu erklären, wie der Output aussehen soll, zeigst du es einfach (→ Few-Shot Prompting, nächste Lektion).

```
"Klassifiziere Kundenfeedback als 'positiv', 'neutral' oder 'negativ'.

Beispiele:
'Tolles Produkt, kaufe ich wieder!' → positiv
'Lieferung war okay, Verpackung beschädigt' → neutral
'Absolut unbrauchbar, Geld verschwendet' → negativ

Jetzt klassifiziere: 'Funktioniert einwandfrei, aber der Preis ist zu hoch'"
```

#### 6. Constraints (Was darfst du nicht?)

Grenzen und Verbote verhindern unerwünschtes Verhalten. Besonders wichtig für Production-Prompts.

```
"Beantworte Kundenfragen zum Produkt XY.

Constraints:
- Erfinde keine Produkteigenschaften, die nicht in der Dokumentation stehen
- Antworte nur auf Deutsch
- Bei Fragen zu Preisen verweise auf den Vertrieb
- Maximale Antwortlänge: 3 Sätze"
```

### Vorher/Nachher: Komplett-Beispiel

**Schwacher Prompt:**

```
Schreib was über KI in der Medizin.
```

*Ergebnis: Generischer Aufsatz, zu lang, zu oberflächlich, kein klares Ziel.*

**Starker Prompt mit allen sechs Bausteinen:**

```
[Rolle] Du bist Medizinjournalist für ein Fachmagazin.
[Kontext] Die Zielgruppe sind niedergelassene Ärzte, die KI-Tools 
in ihre Praxis integrieren wollen, aber keine IT-Vorkenntnisse haben.
[Aufgabe] Schreibe einen Überblicksartikel über die drei wichtigsten 
KI-Anwendungen in der hausärztlichen Praxis 2026.
[Format] Struktur: Einleitung (2 Sätze), drei Abschnitte mit je 
Überschrift + 3-4 Sätze + ein konkretes Tool-Beispiel, Fazit (2 Sätze).
[Beispiel] Stil wie im Deutschen Ärzteblatt — sachlich, aber 
praxisnah, kein Marketing-Sprech.
[Constraints] Keine Spekulation über die Zukunft. Nur Tools nennen, 
die in Deutschland zugelassen und verfügbar sind. Maximal 400 Wörter.
```

*Ergebnis: Fokussiert, zielgruppengerecht, sofort verwendbar.*

### Frameworks — hilfreiche Eselsbrücken, kein Dogma

Es gibt verschiedene Akronyme, die an die Bausteine erinnern:

| Framework | Steht für | Kern |
|-----------|-----------|------|
| **COSTAR** | Context, Objective, Style, Tone, Audience, Response | Beliebt, deckt alles ab |
| **RTF** | Role, Task, Format | Minimalistisch, reicht oft |
| **CRAFT** | Context, Role, Action, Format, Target | Guter Mittelweg |

**Wichtig:** Kein Framework ist "das richtige". Sie sind Checklisten, keine Regeln. Benutze sie als Gedächtnisstütze, nicht als Zwangskorsett.

### Anti-Pattern: Häufige Fehler

| Fehler | Problem | Besser |
|--------|---------|--------|
| Zu vage | "Hilf mir mit meinem Projekt" | "Erstelle eine Projektstruktur für eine React-App mit Auth und Dashboard" |
| Zu viele Aufgaben gleichzeitig | "Schreib Code, teste ihn, dokumentiere ihn, und erstelle ein Deployment-Script" | Eine Aufgabe pro Prompt, oder klar nummerierte Schritte |
| Widersprüchliche Constraints | "Sei ausführlich. Maximal 2 Sätze." | Constraints auf Konsistenz prüfen |
| Rolle ohne Relevanz | "Du bist ein Pirat. Erkläre mir SQL." | Rolle nur setzen, wenn sie die Antwort sinnvoll beeinflusst |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Prompt Engineering Overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) | Offizielle Best Practices, umfassend |
| :book: | [OpenAI — Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) | OpenAI-Perspektive, praxisnah |
| :book: | [Prompting Guide — Techniques](https://www.promptingguide.ai/techniques) | Akademische Übersicht aller Techniken |
| :hammer_and_wrench: | [Anthropic Console — Prompt Generator](https://console.anthropic.com/) | Automatisch Prompts verbessern lassen |

## Teste dein Verständnis

- [ ] Nimm einen Prompt, den du kürzlich verwendet hast, und identifiziere: Welche der sechs Bausteine fehlen? Schreibe ihn mit allen relevanten Bausteinen neu und vergleiche die Ergebnisse.
- [ ] Schreibe denselben Prompt einmal mit und einmal ohne Rolle. Wann macht die Rolle einen echten Unterschied, wann ist sie überflüssig?
- [ ] Erkläre einem Freund in eigenen Worten, warum "Schreib was über KI" ein schlechter Prompt ist — ohne Fachbegriffe zu benutzen.
