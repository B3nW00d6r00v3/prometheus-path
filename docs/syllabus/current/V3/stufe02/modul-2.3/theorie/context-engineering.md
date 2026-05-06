---
title: "Context Engineering — neuer Begriff 2025/2026"
module: "2.3"
type: theorie
fast_track: false
effort: "15-20min"
stability: live
expires: "2026-08"
---

# Context Engineering — neuer Begriff 2025/2026

## Kernidee

Prompt Engineering ist wie den Dialog für eine Filmszene zu schreiben. Context Engineering ist die Arbeit des Regisseurs: Du arrangierst die gesamte Szene — Bühnenbild, Beleuchtung, Requisiten, Hintergrundmusik, vorherige Szenen. Alles, was das Modell "sieht", beeinflusst seine Performance. Der einzelne Prompt ist oft nur 5% des Gesamtkontexts — die anderen 95% (System-Prompt, Konversations-History, abgerufene Dokumente, Tool-Ergebnisse) sind mindestens genauso wichtig.

## Im Detail

### Warum ein neuer Begriff?

Der Begriff "Context Engineering" etablierte sich 2025/2026, als die KI-Community eine wichtige Erkenntnis formulierte: Bei Production-Systemen ist das einzelne Prompt selten das Problem. Das Problem ist meistens, **welche Informationen dem Modell insgesamt zur Verfügung stehen** — und in welcher Reihenfolge und Struktur.

Ein Beispiel:

```
Situation: Ein Kundensupport-Bot antwortet falsch auf 
eine Frage zur Rückgabepolitik.

Prompt-Engineering-Diagnose: "Der Prompt ist nicht klar genug."
Context-Engineering-Diagnose: "Dem Modell fehlt die aktuelle 
Rückgabe-Policy im Kontext. Es halluziniert, weil es die 
richtige Information nicht hat."
```

Die Lösung ist nicht ein besserer Prompt — die Lösung ist, die richtige Information in den Kontext zu bringen.

### Die fünf Bausteine des Kontexts

Wenn du ein LLM aufrufst, sieht es nicht nur deinen letzten Prompt. Es sieht **alles** im Kontext-Fenster:

```
┌─────────────────────────────────────┐
│ 1. SYSTEM-PROMPT                    │ ← Identität, Regeln, Verhalten
│    "Du bist ein Support-Agent..."   │
├─────────────────────────────────────┤
│ 2. ABGERUFENE DOKUMENTE (RAG)      │ ← Relevante Wissensbasis
│    "Rückgabe-Policy v3.2: ..."      │
│    "FAQ-Eintrag #42: ..."           │
├─────────────────────────────────────┤
│ 3. KONVERSATIONS-HISTORY            │ ← Vorherige Nachrichten
│    User: "Ich will zurückgeben"     │
│    Assistant: "Welches Produkt?"    │
│    User: "Den Monitor von letzter   │
│    Woche"                           │
├─────────────────────────────────────┤
│ 4. TOOL-ERGEBNISSE                  │ ← Outputs von Werkzeugen
│    [Datenbank-Query: Bestellung     │
│    #4711, Datum: 28.04.2026]        │
├─────────────────────────────────────┤
│ 5. AKTUELLER USER-PROMPT            │ ← Die eigentliche Frage
│    "Kann ich den noch zurückgeben?" │
└─────────────────────────────────────┘
```

Context Engineering optimiert **alle fünf Bausteine** — nicht nur den letzten.

### Prompt Engineering vs. Context Engineering

| Aspekt | Prompt Engineering | Context Engineering |
|--------|-------------------|-------------------|
| **Fokus** | Der einzelne Prompt-Text | Der gesamte Input-Raum |
| **Frage** | "Wie formuliere ich die Aufgabe?" | "Welche Informationen braucht das Modell?" |
| **Typisches Problem** | "Die Antwort hat das falsche Format" | "Die Antwort basiert auf falschen Fakten" |
| **Lösung** | Bessere Instruktionen | Richtige Dokumente abrufen, History managen, Tools einbinden |
| **Komplexität** | Ein Prompt, ein Aufruf | System aus mehreren Komponenten |

### Konkretes Beispiel: Lernassistent

**Nur Prompt Engineering:**

```
System-Prompt: "Du bist ein Lernassistent für Mathematik."
User: "Erkläre mir Integrale."

→ Generische Erklärung, die nicht zum Wissensstand passt.
```

**Mit Context Engineering:**

```
System-Prompt: "Du bist ein Lernassistent für Mathematik.
Passe deine Erklärungen an den Wissensstand des Nutzers an."

[RAG: Lernprofil des Nutzers]
"Wissensstand: Abitur-Niveau, Ableitungen verstanden, 
Integrale noch nicht behandelt. Bevorzugt Beispiele 
aus der Physik."

[Konversations-History]
User: "Ich hab Ableitungen verstanden, aber Integrale 
kapier ich gar nicht."
Assistant: "Okay, lass uns da ansetzen. Was genau 
verstehst du bei Ableitungen?"
User: "Dass die Ableitung die Steigung an einem Punkt ist."

[Aktueller Prompt]
User: "Und was sind jetzt Integrale?"

→ Erklärt Integrale als "Umkehrung der Ableitung", 
   nutzt Physik-Beispiele, passt zum Niveau.
```

Der Unterschied ist dramatisch — und er kommt nicht vom besseren Prompt, sondern vom besseren Kontext.

### Die häufigsten Context-Engineering-Probleme

#### 1. Lost in the Middle

LLMs gewichten Informationen am Anfang und Ende des Kontexts stärker als in der Mitte. Bei langen Kontexten kann wichtige Information "verloren gehen":

```
Problem: 50 Seiten Dokumentation im Kontext, die 
relevante Stelle ist auf Seite 27.
→ Modell ignoriert sie möglicherweise.

Lösung: Relevante Abschnitte an den Anfang oder das 
Ende des Kontexts verschieben. Oder: nur die relevanten 
Abschnitte per RAG abrufen, statt alles reinzuwerfen.
```

#### 2. Kontext-Verschmutzung

Irrelevante Informationen im Kontext lenken das Modell ab:

```
Problem: Du fragst nach der Rückgabe-Policy, aber im 
Kontext stehen auch 20 Seiten Versand-Bedingungen.
→ Modell vermischt Rückgabe und Versand.

Lösung: Nur relevante Dokumente in den Kontext laden.
Weniger ist oft mehr.
```

#### 3. Veraltete History

In langen Konversationen sammelt sich Geschichte an, die nicht mehr relevant ist:

```
Problem: Vor 50 Nachrichten hat der User über Thema A 
gesprochen, jetzt geht es um Thema B.
→ Modell referenziert plötzlich Thema A.

Lösung: Konversations-History zusammenfassen oder 
irrelevante Teile entfernen (History Compression).
```

### Context Engineering in der Praxis

| Wo du es schon nutzt | Was du tust |
|---------------------|-------------|
| **ChatGPT Projects** | Du lädst Dokumente hoch, die als Kontext dienen |
| **Claude Projects** | System-Prompt + hochgeladene Wissensquellen |
| **RAG-Anwendungen** | Relevante Dokumente werden automatisch abgerufen |
| **MCP (Model Context Protocol)** | Tools liefern dynamisch Kontext (Dateien, APIs, Datenbanken) |
| **Agentic Workflows** | Tool-Ergebnisse fließen als Kontext in den nächsten Schritt |

### Warum das für dich jetzt relevant ist

Auch wenn du noch keine Production-Systeme baust — Context Engineering erklärt, warum dieselbe Frage in verschiedenen Situationen verschiedene Antworten bekommt:

- **Neuer Chat vs. langer Chat:** Im neuen Chat fehlt die History → andere Antwort
- **Mit vs. ohne hochgeladenes Dokument:** Der Kontext bestimmt, ob das Modell halluziniert oder korrekt antwortet
- **Verschiedene System-Prompts:** Das "Verhalten" ändert sich, selbst bei identischer Frage

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Latent Space — Context Engineering](https://www.latent.space/p/context-engineering) | Der Podcast/Blog, der den Begriff populär machte |
| :book: | [Anthropic — Long Context Tips](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips) | Tipps für große Kontextfenster |
| :book: | [Simon Willison — Context Engineering](https://simonwillison.net/tags/context-engineering/) | Praktische Perspektive eines erfahrenen Entwicklers |
| :book: | [Anthropic — MCP (Model Context Protocol)](https://modelcontextprotocol.io/) | Das Protokoll für dynamischen Kontext |

## Teste dein Verständnis

- [ ] Öffne einen neuen Chat und stelle eine Frage. Öffne dann einen Chat mit relevantem Kontext (z.B. ein hochgeladenes Dokument) und stelle dieselbe Frage. Wie unterscheiden sich die Antworten — und warum?
- [ ] Erkläre den Unterschied zwischen Prompt Engineering und Context Engineering mit der Film-Analogie (Dialog vs. Regie). Warum reicht es nicht, nur den Dialog zu optimieren?
- [ ] Du baust einen FAQ-Bot für eine Firma. Der Bot antwortet manchmal falsch. Was sind drei Context-Engineering-Maßnahmen, die du ergreifen könntest, bevor du den Prompt änderst?
