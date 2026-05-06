---
title: "Stochastik: dasselbe Prompt — unterschiedliche Antworten"
module: "2.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Stochastik: dasselbe Prompt — unterschiedliche Antworten

## Kernidee

Stell dir einen Würfel mit gewichteten Seiten vor: Die wahrscheinlichste Seite kommt am häufigsten, aber nicht immer. "Temperature" ist ein Regler, der den Würfel "fairer" oder "unfairer" macht. Temperature=0 nimmt fast immer die wahrscheinlichste Seite. Temperature=1 lässt auch ungewöhnlichere Ergebnisse zu — das macht Antworten kreativer, aber weniger vorhersagbar. Dieser Zufall ist kein Bug, sondern ein zentrales Design-Feature.

## Überblick: Die Steuerungsparameter

| Parameter | Was er tut | Niedrig (0-0.3) | Hoch (0.7-1.0+) |
|-----------|-----------|-----------------|-----------------|
| Temperature | Regelt die "Kreativität" der Token-Auswahl | Deterministisch, fokussiert, wiederholbar | Kreativ, variabel, überraschend |
| Top-p (Nucleus Sampling) | Begrenzt die Auswahl auf die wahrscheinlichsten Tokens | Nur die Top-Kandidaten werden berücksichtigt | Breiteres Spektrum an möglichen Tokens |
| Top-k | Begrenzt auf die k wahrscheinlichsten Tokens | z.B. nur die Top 10 Tokens | z.B. die Top 100 Tokens |
| Frequency Penalty | Bestraft Wiederholungen | Kein Effekt | Weniger Wort-Wiederholungen |
| Presence Penalty | Bestraft bereits verwendete Tokens | Kein Effekt | Mehr thematische Vielfalt |

## Im Detail

### Wie Temperature funktioniert — technisch

Bei jedem Schritt berechnet das LLM Wahrscheinlichkeiten für alle möglichen nächsten Tokens. Nehmen wir an, für die Lücke in "Die Hauptstadt von Frankreich ist ___" berechnet das Modell:

- "Paris": 85%
- "eine": 5%
- "die": 3%
- "bekannt": 2%
- Tausende weitere Tokens: jeweils <1%

**Temperature=0:** Das Modell nimmt fast immer "Paris" (85%). Ergebnis: Deterministisch, vorhersagbar.

**Temperature=0.7:** Die Wahrscheinlichkeiten werden "weicher". "Paris" hat jetzt vielleicht 60%, "eine" hat 12%, "die" hat 8%. Das Modell wählt immer noch meistens "Paris", aber manchmal auch andere Tokens. Das führt zu variableren, kreativeren Texten.

**Temperature=1.5+:** Die Verteilung wird fast gleichmäßig. Auch unwahrscheinliche Tokens haben eine reale Chance. Das Ergebnis wird chaotisch, kreativ bis unsinnig.

### Top-p: Die Alternative zu Temperature

Top-p (auch "Nucleus Sampling") funktioniert anders: Statt die gesamte Verteilung zu skalieren, wählt es die kleinste Menge an Tokens, deren kumulierte Wahrscheinlichkeit den Wert p überschreitet.

- **Top-p=0.1:** Nur die allerobersten Tokens (die zusammen 10% Wahrscheinlichkeit haben) kommen in Frage → sehr fokussiert
- **Top-p=0.9:** Alle Tokens, die zusammen 90% der Wahrscheinlichkeit ausmachen → breiter, kreativer

**Praxis-Tipp:** Die meisten Anbieter empfehlen, entweder Temperature oder Top-p anzupassen, nicht beides gleichzeitig.

### Wann welche Einstellung?

| Aufgabe | Empfohlene Temperature | Warum |
|---------|----------------------|-------|
| Code-Generierung | 0 - 0.2 | Determinismus wichtig, Kreativität gefährlich |
| Datenextraktion / Klassifikation | 0 | Konsistenz und Wiederholbarkeit |
| Geschäfts-E-Mails | 0.3 - 0.5 | Leicht variabel, aber professionell |
| Kreatives Schreiben | 0.7 - 1.0 | Vielfalt und Überraschung erwünscht |
| Brainstorming | 0.8 - 1.2 | Maximale Kreativität, ungewöhnliche Ideen |
| Zusammenfassung | 0.1 - 0.3 | Treu zum Original, wenig Interpretation |

### Konsequenzen für Evaluierung

Stochastik macht Evaluierung schwierig: Wenn du denselben Prompt zweimal sendest und unterschiedliche Antworten bekommst, welche bewertest du? Das ist kein theoretisches Problem — in der Praxis bedeutet es:

- **Tests brauchen Temperature=0** oder mehrfache Durchläufe mit Aggregation
- **"Das Modell hat bei mir funktioniert"** ist kein Beweis — vielleicht hattest du Glück mit der Sampling-Variante
- **Benchmarks** laufen deshalb mit Temperature=0 oder über Dutzende Durchläufe

### Seeds: Reproduzierbarkeit erzwingen

Einige Anbieter (OpenAI, Anthropic) bieten einen `seed`-Parameter: Mit demselben Seed und Temperature=0 bekommst du (fast) identische Antworten. Das ist nützlich für:

- Debugging: Denselben Output reproduzieren
- A/B-Tests: Nur eine Variable ändern (z.B. System-Prompt), Rest konstant halten
- Compliance: Nachweisbare Reproduzierbarkeit

**Aber:** Selbst mit Seed ist 100% Determinismus nicht garantiert — Server-seitige Änderungen (z.B. Modell-Updates) können den Output verändern.

### Temperature in Chat-Interfaces

In ChatGPT, Claude und Gemini kannst du die Temperature normalerweise nicht direkt einstellen — die Interfaces verwenden sinnvolle Defaults (typisch: 0.7-1.0). Temperature ist ein API-Parameter: Wenn du über die API arbeitest, hast du volle Kontrolle. Das ist einer der praktischen Unterschiede zwischen Chat-Interface und API-Zugang.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Temperature and Top-p](https://platform.openai.com/docs/guides/text-generation) | Offizielle Erklärung der Sampling-Parameter |
| :book: | [Cohere — Temperature Explained](https://docs.cohere.com/docs/temperature) | Gute visuelle Erklärung |
| :movie_camera: | [Jay Alammar — Sampling in LLMs](https://jalammar.github.io/how-gpt3-works-visualizations-animations/) | Animierte Erklärung des Sampling-Prozesses |
| :hammer_and_wrench: | [OpenAI Playground](https://platform.openai.com/playground) | Temperature und Top-p live ausprobieren |

## Teste dein Verständnis

- [ ] Du baust einen Chatbot für Kunden-Support, der auf häufige Fragen immer dieselbe Antwort geben soll. Welche Temperature wählst du — und warum?
- [ ] Erkläre den Unterschied zwischen Temperature und Top-p in eigenen Worten. Warum empfehlen die meisten Anbieter, nur einen der beiden Parameter zu ändern?
- [ ] Du sendest denselben Prompt 10 Mal an ein Modell mit Temperature=0.8 und bekommst 10 verschiedene Antworten. Drei davon sind faktisch falsch. Ist das Modell "schlecht" — oder ist etwas anderes der Grund?
