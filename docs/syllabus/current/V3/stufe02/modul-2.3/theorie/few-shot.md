---
title: "Few-Shot Prompting: Beispiele zeigen statt erklären"
module: "2.3"
type: theorie
fast_track: true
effort: "15-20min"
stability: green
expires: null
---

# Few-Shot Prompting: Beispiele zeigen statt erklären

## Kernidee

Stell dir vor, du erklärst einem Kind ein Kartenspiel. Du könntest die Regeln vorlesen — oder du spielst einfach drei Runden vor und sagst "so geht's". Genau das ist Few-Shot Prompting: Du zeigst dem Modell 2-5 Beispiele des gewünschten Outputs, statt lang zu beschreiben, was du willst. Das Modell erkennt das Muster und reproduziert es — oft besser, als wenn du versuchst, das Muster in Worte zu fassen.

## Im Detail

### Zero-Shot, Few-Shot, Many-Shot — die Spektrum-Begriffe

Die Begriffe kommen aus dem Machine Learning und beschreiben, wie viele Beispiele du mitgibst:

| Modus | Beispiele | Wann sinnvoll |
|-------|-----------|---------------|
| **Zero-Shot** | 0 | Standardaufgaben, die das Modell "von selbst" kann (Übersetzung, Zusammenfassung) |
| **One-Shot** | 1 | Einfache Formate, bei denen ein Beispiel reicht |
| **Few-Shot** | 2-5 | Spezifische Formate, Stile, Klassifikationen |
| **Many-Shot** | 10+ | Sehr spezifische oder ungewöhnliche Aufgaben |

### Zero-Shot: Wann reicht es ohne Beispiele?

Für Standardaufgaben, die in den Trainingsdaten massenhaft vorkommen, braucht das Modell keine Beispiele:

```
Zero-Shot (funktioniert gut):
"Übersetze ins Englische: 'Der frühe Vogel fängt den Wurm.'"

→ "The early bird catches the worm."
```

Das Modell hat Millionen von Übersetzungspaaren gesehen — es weiß, was zu tun ist.

### Few-Shot: Wann Beispiele den Unterschied machen

Sobald du ein **spezifisches Format, einen bestimmten Stil oder eine ungewöhnliche Aufgabe** brauchst, sind Beispiele Gold wert.

**Beispiel: Sentiment-Klassifikation mit eigenem Schema**

```
Schwach (Zero-Shot):
"Klassifiziere diese Bewertung als positiv oder negativ:
'Lieferung schnell, aber Verpackung war beschädigt.'"

→ Modell antwortet: "Die Bewertung ist gemischt..." 
   (nicht das gewünschte Format)
```

```
Stark (Few-Shot):
"Klassifiziere Kundenbewertungen. Antwortformat: 
KATEGORIE | KONFIDENZ | BEGRÜNDUNG (max. 10 Wörter)

Beispiele:
'Absolut fantastisch, kaufe sofort wieder!' 
→ POSITIV | hoch | Begeisterung und Wiederkaufabsicht

'Naja, geht so. Nichts Besonderes.'
→ NEUTRAL | mittel | Keine klare positive oder negative Aussage

'Totalausfall. Gerät nach 2 Tagen kaputt.'
→ NEGATIV | hoch | Produktdefekt und Frustration

Jetzt klassifiziere:
'Lieferung schnell, aber Verpackung war beschädigt.'"

→ NEUTRAL | mittel | Positiver Aspekt (Lieferung) und negativer (Verpackung)
```

Der Unterschied: Mit Beispielen liefert das Modell exakt das Format, das du brauchst.

### Worauf kommt es bei guten Beispielen an?

**1. Diversität:** Decke verschiedene Fälle ab — nicht drei Mal dasselbe Muster.

```
Schlecht (alle gleich):
Beispiel 1: "Tolles Produkt!" → POSITIV
Beispiel 2: "Super Service!" → POSITIV
Beispiel 3: "Alles perfekt!" → POSITIV

Besser (verschiedene Fälle):
Beispiel 1: "Tolles Produkt!" → POSITIV
Beispiel 2: "Ging so, nichts Besonderes." → NEUTRAL
Beispiel 3: "Nie wieder, totaler Schrott." → NEGATIV
```

**2. Grenzfälle einschließen:** Zeige dem Modell, wie es mit schwierigen Fällen umgehen soll.

```
"Lieferung okay, aber das Produkt ist nicht wie beschrieben." 
→ NEGATIV | mittel | Erwartung nicht erfüllt trotz guter Lieferung
```

**3. Format konsistent halten:** Wenn deine Beispiele verschiedene Formate haben, wird das Modell auch inkonsistent.

### Wie viele Beispiele brauche ich?

- **2-3 Beispiele:** Reichen für einfache Klassifikationen und Formate
- **4-5 Beispiele:** Besser für komplexe Aufgaben oder wenn Grenzfälle wichtig sind
- **Mehr als 5:** Selten nötig und füllt das Context-Fenster unnötig

**Faustregel:** Starte mit 3 Beispielen. Wenn das Ergebnis nicht stimmt, füge Grenzfall-Beispiele hinzu. Wenn es mit 5 Beispielen immer noch nicht klappt, liegt das Problem wahrscheinlich woanders (z.B. unklare Aufgabe).

### Praxis-Beispiel: Produktbeschreibungen im eigenen Stil

```
"Schreibe Produktbeschreibungen für einen Online-Shop. 
Zielgruppe: technikaffine 25-35-Jährige. Stil: locker, 
informativ, kein Marketing-Blabla.

Beispiele:

Produkt: Bluetooth-Kopfhörer XY-500
→ 'Noise Cancelling, das tatsächlich funktioniert — auch in 
   der vollen S-Bahn. 30h Akku, USB-C, und ja: sie drücken 
   auch nach 4 Stunden nicht. 89€.'

Produkt: USB-C Hub mit 7 Ports
→ 'Ein Hub für alles: HDMI, 3x USB-A, SD-Karte, Ethernet, 
   USB-C Passthrough. Kein Treiber-Gedöns, kein Dongle-Dongle. 
   Funktioniert einfach. 45€.'

Jetzt schreibe für:
Produkt: Mechanische Tastatur MK-Pro"
```

Das Modell übernimmt den lockeren Ton, die Struktur und die Preisangabe am Ende — ohne dass du das alles explizit beschreiben musstest.

### Anti-Pattern: Wann Few-Shot schadet

| Problem | Beispiel | Lösung |
|---------|----------|--------|
| **Widersprüchliche Beispiele** | Gleiche Eingabe, verschiedene Outputs | Beispiele auf Konsistenz prüfen |
| **Zu ähnliche Beispiele** | Alle Beispiele sind triviale Fälle | Diversität und Grenzfälle einbauen |
| **Zu viele Beispiele** | 20 Beispiele für eine einfache Aufgabe | Context-Fenster wird verschwendet, 3-5 reichen |
| **Beispiele widersprechen der Instruktion** | Instruktion sagt "formal", Beispiele sind umgangssprachlich | Beispiele müssen zur Instruktion passen |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Promptingguide.ai — Few-Shot Prompting](https://www.promptingguide.ai/techniques/fewshot) | Technik-Übersicht mit Beispielen |
| :book: | [Anthropic — Give Claude examples](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-examples) | Anthropics Best Practices für Beispiele |
| :book: | [OpenAI Cookbook — Techniques to improve reliability](https://cookbook.openai.com/articles/techniques_to_improve_reliability) | Praxisnahe Techniken inkl. Few-Shot |

## Teste dein Verständnis

- [ ] Nimm eine Aufgabe, die du bisher Zero-Shot promptest (z.B. E-Mail schreiben). Formuliere sie als Few-Shot mit 3 Beispielen und vergleiche die Ergebnisse: Wo ist der Unterschied am größten?
- [ ] Erkläre einem Freund den Unterschied zwischen Zero-Shot und Few-Shot mit einer Alltagsanalogie — ohne die Fachbegriffe zu benutzen.
- [ ] Du bekommst inkonsistente Outputs trotz Few-Shot. Nenne drei mögliche Ursachen und wie du sie behebst.
