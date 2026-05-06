---
title: "Chain-of-Thought (CoT) und Reasoning"
module: "2.3"
type: theorie
fast_track: true
effort: "15-20min"
stability: green
expires: null
---

# Chain-of-Thought (CoT) und Reasoning

## Kernidee

Wenn du einen Schüler bittest, eine Matheaufgabe "im Kopf" zu lösen, macht er mehr Fehler, als wenn er den Rechenweg aufschreibt. Genau so funktioniert Chain-of-Thought: Du sagst dem Modell "Denke Schritt für Schritt" — und es macht weniger Fehler, weil es seine Zwischenergebnisse "aufschreibt" statt direkt zur Antwort zu springen. **Aber Achtung:** Bei modernen Reasoning-Modellen ist dieser Trick eingebaut — dort kann er sogar schaden.

## Im Detail

### Was ist Chain-of-Thought?

Chain-of-Thought (CoT) bedeutet: Das Modell generiert Zwischenschritte, bevor es die Endantwort gibt. Das Original-Paper von Wei et al. (2022) zeigte, dass ein simples "Let's think step by step" die Accuracy bei Mathe- und Logikaufgaben dramatisch verbessert.

**Ohne CoT:**

```
Prompt: "Ein Laden hat 3 Äpfel. Es kommen 2 Lieferungen mit je 
5 Äpfeln. Dann werden 4 Äpfel verkauft. Wie viele sind übrig?"

Antwort: "9 Äpfel." (Modell springt direkt zur Antwort — manchmal falsch)
```

**Mit CoT:**

```
Prompt: "Ein Laden hat 3 Äpfel. Es kommen 2 Lieferungen mit je 
5 Äpfeln. Dann werden 4 Äpfel verkauft. Wie viele sind übrig?
Denke Schritt für Schritt."

Antwort: "Schritt 1: Anfangsbestand = 3 Äpfel
Schritt 2: 2 Lieferungen × 5 Äpfel = 10 Äpfel dazu
Schritt 3: 3 + 10 = 13 Äpfel insgesamt
Schritt 4: 13 - 4 verkaufte = 9 Äpfel übrig.
Antwort: 9 Äpfel."
```

Im einfachen Beispiel kommt dasselbe raus. Bei komplexeren Aufgaben (mehrstufige Logik, Textverständnis mit mehreren Fakten) steigt die Fehlerrate ohne CoT deutlich an.

### Wann hilft CoT?

CoT bringt den größten Vorteil bei Aufgaben, die **mehrere logische Schritte** erfordern:

| Aufgabentyp | CoT-Vorteil | Beispiel |
|-------------|:-----------:|---------|
| Mehrstufige Mathe | ✅ Hoch | Textaufgaben mit mehreren Rechenschritten |
| Logisches Schlussfolgern | ✅ Hoch | "Wenn A → B und B → C, gilt A → C?" |
| Code-Debugging | ✅ Mittel | "Finde den Bug, geh den Code Zeile für Zeile durch" |
| Pro/Contra-Analyse | ✅ Mittel | "Wäge die Argumente systematisch ab" |
| Einfache Fakten | ❌ Keiner | "Was ist die Hauptstadt von Frankreich?" |
| Kreatives Schreiben | ❌ Keiner | "Schreib ein Gedicht über den Herbst" |
| Übersetzung | ❌ Keiner | "Übersetze diesen Satz ins Englische" |

### Verschiedene CoT-Varianten

**1. Zero-Shot CoT** — einfach "Denke Schritt für Schritt" anhängen:

```
"Wie viele Primzahlen gibt es zwischen 20 und 40?
Denke Schritt für Schritt."
```

**2. Few-Shot CoT** — Beispiele mit explizitem Denkprozess zeigen:

```
"Frage: Lisa ist älter als Tom. Tom ist älter als Marie. 
Wer ist am jüngsten?
Denken: Lisa > Tom > Marie. Also ist Marie am jüngsten.
Antwort: Marie

Frage: Max läuft schneller als Jan. Jan läuft schneller 
als Kai. Kai läuft schneller als Leo. 
Wer ist am langsamsten?"
```

**3. Strukturiertes CoT** — explizites Format vorgeben:

```
"Analysiere diese Geschäftsentscheidung.

Nutze folgende Struktur:
1. FAKTEN: Was wissen wir sicher?
2. ANNAHMEN: Was nehmen wir an?
3. ARGUMENTE DAFÜR: Was spricht dafür?
4. ARGUMENTE DAGEGEN: Was spricht dagegen?
5. SCHLUSSFOLGERUNG: Was empfiehlst du?"
```

### Die große Ausnahme: Reasoning-Modelle

Seit 2024/2025 gibt es eine neue Klasse von Modellen, die **CoT intern eingebaut haben**:

- **Claude mit Extended Thinking** (Anthropic)
- **GPT-o-Modelle** (OpenAI: o3, o4-mini)
- **DeepSeek R1**
- **Gemini 2.5 Pro/Flash mit Thinking**

Diese Modelle "denken" automatisch in einem internen Scratchpad nach, bevor sie antworten. Bei diesen Modellen ist manuelles CoT-Prompting **oft kontraproduktiv**:

```
❌ Anti-Pattern bei Reasoning-Modellen:
"Denke Schritt für Schritt und erkläre dein Reasoning."

Problem: Das Modell denkt bereits intern Schritt für Schritt. 
Dein Prompt zwingt es, den Denkprozess ein zweites Mal zu 
generieren — das verdoppelt die Kosten und kann die Qualität 
sogar verschlechtern.
```

```
✅ Besser bei Reasoning-Modellen:
"Wie viele Primzahlen gibt es zwischen 20 und 40?"

Das Modell denkt intern nach und liefert die richtige Antwort — 
ohne dass du es explizit auffordern musst.
```

### Faustregel: Wann welcher Ansatz?

```
Klassisches Modell (Claude Sonnet ohne Thinking, GPT-4o, etc.):
→ CoT bei Reasoning-Aufgaben explizit anfordern

Reasoning-Modell (Claude Extended Thinking, o3, R1, etc.):
→ Kein CoT-Prompt nötig — das Modell macht es automatisch
→ Stattdessen: klare Aufgabe formulieren, dem Modell vertrauen
```

### Anti-Pattern: Häufige CoT-Fehler

| Fehler | Warum problematisch | Besser |
|--------|-------------------|--------|
| CoT bei trivialen Aufgaben | "Denke Schritt für Schritt: Was ist 2+2?" — verschwendet Tokens | CoT nur bei mehrstufigen Aufgaben |
| CoT bei Reasoning-Modellen erzwingen | Doppeltes Reasoning, höhere Kosten, nicht besser | Aufgabe direkt stellen |
| Keinen CoT bei komplexer Logik (klassisches Modell) | Modell springt zur Antwort und macht Fehler | "Denke Schritt für Schritt" anhängen |
| CoT-Output nicht prüfen | Modell "zeigt Arbeit" — aber die Schritte können trotzdem falsch sein | Zwischenschritte auf Logikfehler prüfen |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Promptingguide.ai — Chain-of-Thought](https://www.promptingguide.ai/techniques/cot) | Grundlagen, Varianten und Beispiele |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Wann CoT automatisch passiert |
| :book: | [Wei et al. — Chain-of-Thought Paper (2022)](https://arxiv.org/abs/2201.11903) | Das Original-Paper |
| :book: | [Kojima et al. — Zero-Shot CoT (2022)](https://arxiv.org/abs/2205.11916) | "Let's think step by step" |

## Teste dein Verständnis

- [ ] Teste denselben Logik-Prompt mit und ohne "Denke Schritt für Schritt" in einem klassischen Modell (z.B. Claude Sonnet ohne Thinking). Wann macht CoT einen messbaren Unterschied?
- [ ] Erkläre einem Freund, warum CoT bei Reasoning-Modellen überflüssig oder sogar schädlich sein kann — in zwei Sätzen.
- [ ] Du hast eine komplexe Analyse-Aufgabe: einen Geschäftsbericht mit 5 KPIs vergleichen. Schreibe einen strukturierten CoT-Prompt mit explizitem Denk-Framework (nicht nur "denke Schritt für Schritt").
