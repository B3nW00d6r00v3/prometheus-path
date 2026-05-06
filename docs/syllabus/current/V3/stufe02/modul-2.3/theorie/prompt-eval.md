---
title: "Prompt-Eval von Anfang an"
module: "2.3"
type: theorie
fast_track: true
effort: "15-20min"
stability: green
expires: null
---

# Prompt-Eval von Anfang an: Wie weißt du, ob ein Prompt besser ist?

## Kernidee

"Der Output sieht gut aus" ist kein Eval — das ist Bauchgefühl. Echtes Eval funktioniert wie ein Medikamenten-Test: Du nimmst zwei Prompt-Versionen (Version A und B), gibst beiden dieselben 5-10 Test-Inputs, und vergleichst die Ergebnisse systematisch. Erst dann weißt du, ob Version B wirklich besser ist — oder ob du dich vom zufällig guten letzten Output hast blenden lassen.

## Im Detail

### Warum reicht ein einzelner Test nicht?

LLMs sind **nicht-deterministisch** — derselbe Prompt kann bei jedem Aufruf leicht unterschiedliche Outputs liefern (selbst bei Temperature 0 gibt es minimale Varianz). Ein einzelner guter Output beweist nichts:

```
Prompt V1: "Fasse diesen Artikel zusammen."
→ Test 1: Gute Zusammenfassung ✅
→ Das beweist... gar nichts.

Warum? Vielleicht war der Artikel besonders einfach. 
Vielleicht hattest du Glück. Vielleicht funktioniert der 
Prompt bei einem anderen Artikel gar nicht.
```

Stell dir vor, du würdest ein Medikament nach einem einzigen Patienten zulassen: "Der eine Patient wurde gesund, also wirkt es!" — absurd. Genauso absurd ist es, einen Prompt nach einem einzigen Output zu bewerten.

### Die Minimal-Methode: A/B-Vergleich mit Test-Inputs

**Schritt 1:** Erstelle 5-10 Test-Inputs, die verschiedene Fälle abdecken.

```
Aufgabe: Kundenbewertungen zusammenfassen

Test-Inputs:
1. Kurze positive Bewertung (1 Satz)
2. Lange negative Bewertung (5 Absätze)  
3. Gemischte Bewertung (positiv UND negativ)
4. Bewertung mit Sarkasmus
5. Bewertung in Umgangssprache mit Tippfehlern
```

**Schritt 2:** Lasse beide Prompt-Versionen auf alle Test-Inputs laufen.

```
Prompt V1: "Fasse diese Kundenbewertung in einem Satz zusammen."

Prompt V2: "Fasse diese Kundenbewertung zusammen. 
Nenne: Sentiment (positiv/neutral/negativ), Hauptthema, 
und den Kern in einem Satz. Ignoriere Tippfehler."
```

**Schritt 3:** Vergleiche die Ergebnisse systematisch.

| Test-Input | V1 Ergebnis | V2 Ergebnis | Besser |
|------------|-------------|-------------|--------|
| Kurz positiv | "Kunde ist zufrieden" | "POSITIV, Produktqualität: Kunde lobt Verarbeitung" | V2 |
| Lang negativ | Zusammenfassung, aber Sentiment unklar | "NEGATIV, Lieferzeit: Kunde wartet 4 Wochen" | V2 |
| Sarkasmus | Nimmt Sarkasmus wörtlich | Erkennt Sarkasmus korrekt | V2 |
| Tippfehler | Stolpert über Fehler | Ignoriert Fehler, fasst korrekt zusammen | V2 |

**Ergebnis:** V2 gewinnt 4 von 5 Fällen → V2 ist der bessere Prompt.

### Drei Eval-Methoden für Stufe 2

#### 1. Manuelle Bewertung (1-5 Skala)

Die einfachste Methode: Du bewertest jeden Output selbst.

```
Bewertungskriterien für Zusammenfassungen:
- Korrektheit (1-5): Stimmen die Fakten?
- Vollständigkeit (1-5): Fehlt etwas Wichtiges?  
- Klarheit (1-5): Sofort verständlich?
- Formatierung (1-5): Wie gewünscht strukturiert?
```

**Vorteil:** Schnell, braucht keine Tools.
**Nachteil:** Subjektiv, skaliert nicht.

#### 2. Side-by-Side-Vergleich (welcher ist besser?)

Statt Noten vergibst du nur: "A ist besser", "B ist besser", "gleich".

```
Test-Input: [Kundenbewertung einfügen]

Output A: [Output von Prompt V1]
Output B: [Output von Prompt V2]

Frage: Welcher Output ist hilfreicher für einen 
Kundensupport-Mitarbeiter? A, B oder gleich?
```

**Vorteil:** Einfacher als Noten, weniger kognitive Belastung.
**Nachteil:** Keine feine Differenzierung.

#### 3. LLM-as-Judge (ein anderes LLM bewertet)

Du lässt ein LLM die Outputs bewerten — das skaliert besser als manuelle Bewertung:

```
"Du bist ein Qualitätsprüfer für Textzusammenfassungen. 
Bewerte die folgende Zusammenfassung auf einer Skala von 
1-5 in den Kategorien: Korrektheit, Vollständigkeit, Klarheit.

Original-Text: [Text einfügen]
Zusammenfassung: [Output einfügen]

Antworte als JSON:
{
  'korrektheit': 1-5,
  'vollständigkeit': 1-5,
  'klarheit': 1-5,
  'begründung': 'kurze Begründung'
}"
```

**Vorteil:** Skalierbar, reproduzierbar, konsistent.
**Nachteil:** Das LLM-Urteil ist selbst nicht perfekt — bei kritischen Aufgaben immer manuell gegenchecken.

### Praxis-Beispiel: E-Mail-Prompt optimieren

```
Aufgabe: Prompt für Business-E-Mails verbessern

Prompt V1 (Entwurf):
"Schreib eine professionelle E-Mail basierend auf 
diesen Stichpunkten: {stichpunkte}"

Prompt V2 (verbessert):
"Schreibe eine Business-E-Mail auf Deutsch. 
Stil: professionell, Sie-Form, maximal 100 Wörter.
Struktur: Betreffzeile, Anrede, Kern (max. 3 Sätze), 
Handlungsaufforderung, Grußformel.
Stichpunkte: {stichpunkte}"
```

Test-Inputs:

1. Terminverschiebung (einfach)
2. Reklamation beantworten (emotional)
3. Angebot nachfassen (subtil)
4. Absage formulieren (heikel)
5. Projektupdate mit schlechten Nachrichten (komplex)

Beobachtung: V1 schreibt oft zu lang und vergisst die Betreffzeile. V2 ist konsistent im Format. Bei der Reklamation (Test 2) ist V2 deutlich besser, weil "professionell" und "maximal 100 Wörter" verhindern, dass das Modell sich in Entschuldigungen verliert.

### Häufige Eval-Fehler

| Fehler | Warum problematisch | Besser |
|--------|-------------------|--------|
| Nur einen Test-Input verwenden | Ein guter Output beweist nichts | Mindestens 5 verschiedene Inputs |
| Nur einfache Fälle testen | Der Prompt funktioniert beim Standardfall, versagt bei Grenzfällen | Bewusst schwierige Fälle einbauen |
| Prompt und Eval gleichzeitig ändern | Du weißt nicht, was die Verbesserung bewirkt hat | Eine Änderung pro Iteration |
| Kein Bewertungskriterium festlegen | "Fühlt sich besser an" ist kein Kriterium | Vorher definieren: Was ist "gut"? |

### Vorausblick: Von Eval-Bewusstsein zu Eval-Disziplin

In Modul 2.3 geht es um **Eval-Bewusstsein**: Du verstehst, warum systematisches Vergleichen wichtig ist, und kannst einfache A/B-Tests durchführen. Die vollständige Eval-Disziplin — automatisierte Test-Suites, statistische Signifikanz, Eval-Frameworks wie `promptfoo` — lernst du in Modul 5.0 (Eval-Mini-Block).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Pflichtlektüre: Warum Evals alles sind |
| :book: | [Anthropic — Empirical Performance Evaluation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/evaluate-and-iterate) | Anthropics Eval-Empfehlungen |
| :hammer_and_wrench: | [promptfoo](https://www.promptfoo.dev/) | Open-Source Prompt-Testing-Framework |
| :book: | [OpenAI — Eval Guide](https://cookbook.openai.com/articles/evals) | OpenAIs Perspektive auf Evals |

## Teste dein Verständnis

- [ ] Nimm einen Prompt, den du regelmäßig verwendest. Erstelle 5 Test-Inputs (davon mindestens 2 Grenzfälle). Schreibe eine verbesserte Version des Prompts und vergleiche V1 vs. V2 systematisch — welche Version gewinnt öfter?
- [ ] Erkläre einem Freund, warum "der letzte Output war gut" kein Beweis ist, dass ein Prompt gut ist. Nutze die Medikamenten-Analogie.
- [ ] Probiere LLM-as-Judge aus: Lass ein Modell die Outputs eines anderen Modells bewerten. Wie überzeugend findest du die Urteile? Wo siehst du Grenzen?
