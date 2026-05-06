---
title: "Context Window: das Kurzzeitgedächtnis"
module: "2.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Context Window: das Kurzzeitgedächtnis

## Kernidee

Das Context Window ist wie ein Schreibtisch mit begrenzter Fläche: Alles was draufliegt — dein Prompt, die bisherige Konversation, hochgeladene Dokumente und die Antwort des Modells — kann das Modell "sehen". Was nicht draufpasst, existiert für diesen Aufruf nicht. Es gibt kein heimliches Langzeitgedächtnis: Jeder API-Call startet bei Null.

## Überblick: Context Windows 2026

| Modell | Context Window | Entspricht ungefähr |
|--------|---------------|-------------------|
| Gemini 2.5 Pro | 1.000.000 Tokens | ~2.500 Seiten / 8 Bücher |
| Claude Opus 4.7 | 200.000 Tokens | ~500 Seiten / 1,5 Bücher |
| GPT-4o | 128.000 Tokens | ~320 Seiten / 1 Buch |
| Llama 4 Scout | 512.000 Tokens | ~1.300 Seiten / 4 Bücher |
| Llama 4 Maverick | 256.000 Tokens | ~640 Seiten / 2 Bücher |
| Mistral Large | 128.000 Tokens | ~320 Seiten / 1 Buch |
| Kleine lokale Modelle | 8.000-32.000 Tokens | ~20-80 Seiten |

*"Seiten" = DIN-A4-Seite mit ~250 deutschen Wörtern ≈ 400 Tokens*

## Im Detail

### Wie das Context Window funktioniert

Jeder API-Call besteht aus Input-Tokens + Output-Tokens. Beide zusammen müssen ins Context Window passen. Wenn du einen 100.000-Token-Text hochlädst und das Modell hat ein 128K-Window, bleiben nur 28.000 Tokens für die Antwort. Das Modell "weiß" das und kürzt seine Antwort entsprechend — oder bricht mitten im Satz ab.

**Wichtig:** In Chat-Interfaces (ChatGPT, Claude.ai) wird bei jeder neuen Nachricht die gesamte bisherige Konversation als Input mitgeschickt. Nach 20 langen Nachrichten hin und her kann der Konversations-History allein schon 50.000+ Tokens belegen. Das Modell "vergisst" dann nicht — es hat schlicht keinen Platz mehr für den Anfang der Konversation.

### Groß heißt nicht automatisch besser

Mehr Context Window = mehr Text gleichzeitig verarbeiten. Aber es gibt Einschränkungen:

1. **Lost in the Middle:** Studien zeigen, dass LLMs Informationen am Anfang und Ende des Kontexts besser verarbeiten als in der Mitte. Ein 200-seitiges Dokument wird nicht gleichmäßig gut "gelesen" — Details auf Seite 120 können übersehen werden.

2. **Kosten skalieren linear:** Doppelt so viel Input = doppelte Input-Kosten. Ein 100K-Token-Input bei Claude Opus 4.7 ($15/1M Input) kostet $1,50 — pro Call.

3. **Geschwindigkeit sinkt:** Je länger der Input, desto langsamer die Antwort. Bei 100K+ Tokens kann die "Time to First Token" mehrere Sekunden betragen.

### Effektives Context Window vs. nominales

Das nominale Context Window (z.B. 128K) ist das technische Maximum. Das effektive Context Window — also die Größe, bei der die Antwortqualität noch gut ist — ist oft kleiner. Faustregel: Bei mehr als 70-80% Auslastung sinkt die Qualität merklich.

### Kein Gedächtnis zwischen Aufrufen

Das ist das häufigste Missverständnis: Ein LLM hat kein persistentes Gedächtnis. Wenn du in ChatGPT eine lange Konversation führst und dann einen neuen Chat startest, weiß das Modell nichts vom vorherigen Chat. Die "Memory"-Features in ChatGPT und Claude speichern ausgewählte Fakten als System-Prompt-Zusatz — das ist kein echtes Gedächtnis, sondern ein Workaround.

Bei API-Nutzung ist das noch deutlicher: Jeder Call ist isoliert. Du musst die gesamte Konversationshistorie selbst mitschicken, wenn du möchtest, dass das Modell sich "erinnert".

### Strategien für große Dokumente

Wenn dein Dokument nicht ins Context Window passt:

- **Chunking:** Text in Abschnitte teilen und einzeln verarbeiten
- **Zusammenfassung:** Erst zusammenfassen, dann mit der Zusammenfassung arbeiten
- **RAG (Retrieval-Augmented Generation):** Nur relevante Abschnitte suchen und einfügen (→ ab Stufe 5)
- **Modellwahl:** Gemini 2.5 Pro mit 1M Context statt GPT-4o mit 128K

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Context Windows](https://docs.anthropic.com/en/docs/build-with-claude/context-windows) | Offizielle Dokumentation |
| :book: | [Lost in the Middle (Paper)](https://arxiv.org/abs/2307.03172) | Studie zur Aufmerksamkeitsverteilung in langen Kontexten |
| :movie_camera: | [Andrej Karpathy — Intro to Large Language Models (1h)](https://www.youtube.com/watch?v=zjkBMFhNj_g) | Erklärt Context Window im größeren Zusammenhang |
| :hammer_and_wrench: | [LLM Stats](https://llm-stats.com) | Vergleich aller Modelle inkl. Context Window |

## Teste dein Verständnis

- [ ] Du führst einen Chat mit Claude (200K Context). Nach 50 Nachrichten hin und her funktioniert das Modell plötzlich schlechter. Was passiert technisch — und was kannst du tun?
- [ ] Warum ist ein Modell mit 1M Context Window nicht automatisch "besser" als eins mit 128K? Nenne zwei Gründe.
- [ ] Du willst ein 400-Seiten-PDF analysieren (~160.000 Tokens). Welches Modell wählst du, und welche Strategie nutzt du, wenn das PDF nicht ganz ins Window passt?
