---
title: "Trainingsdaten und Knowledge Cutoff"
module: "2.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Trainingsdaten und Knowledge Cutoff

## Kernidee

Ein LLM ist wie ein Buch, das zu einem bestimmten Datum gedruckt wurde: Es "kennt" nur die Welt bis zum Zeitpunkt seiner Trainingsdaten. Alles was danach passiert ist, weiß es nicht — es sei denn, du gibst ihm diese Information im Prompt mit oder es hat Zugang zu Web-Suche. Das Cutoff-Datum ist deshalb die erste Frage, die du dir bei jedem Fakten-Check stellen solltest.

## Überblick: Cutoff-Daten der großen Modelle

| Modell | Anbieter | Knowledge Cutoff | Trainings-Datenumfang |
|--------|----------|------------------|----------------------|
| GPT-4o | OpenAI | Oktober 2023 | Geschätzt >13 Billionen Tokens |
| Claude Opus 4.7 | Anthropic | Anfang 2025 | Nicht veröffentlicht |
| Claude Sonnet 4.6 | Anthropic | Anfang 2025 | Nicht veröffentlicht |
| Gemini 2.5 Pro | Google | Anfang 2025 | Nicht veröffentlicht |
| Llama 4 | Meta | Dezember 2024 | 30+ Billionen Tokens |
| DeepSeek V3 | DeepSeek | Ende 2024 | 14,8 Billionen Tokens |

*Die Cutoff-Daten liegen immer Monate vor dem Release. Ein Modell, das im Mai 2026 erscheint, hat typischerweise Trainingsdaten bis Ende 2025.*

## Im Detail

### Was in den Trainingsdaten steckt

LLMs werden auf riesigen Textmengen trainiert — im Wesentlichen große Teile des öffentlich zugänglichen Internets plus lizenzierte Datenquellen:

- **Web-Crawls:** CommonCrawl, Wikipedia, Foren, Blogs, News-Seiten
- **Bücher und Publikationen:** Teils urheberrechtlich umstritten
- **Code:** GitHub, Stack Overflow, Dokumentationen
- **Wissenschaftliche Papers:** arXiv, PubMed, Semantic Scholar
- **Kuratierte Datensätze:** Speziell aufbereitete Trainingskorpora

GPT-4 wurde auf geschätzten 13 Billionen Tokens trainiert. Llama 3 auf 15 Billionen. Das entspricht — sehr grob geschätzt — dem Inhalt von mehreren Millionen Büchern.

### Warum der Cutoff wichtig ist

Alles nach dem Cutoff-Datum ist für das Modell "unsichtbar". Konkretes Beispiel: Wenn du ein Modell mit Cutoff Oktober 2023 fragst "Wer hat die Bundestagswahl 2025 gewonnen?", kann es nur raten oder halluzinieren. Es hat diese Information schlicht nicht.

**Tückisch:** Das Modell sagt nicht "Ich weiß es nicht" — es generiert eine plausibel klingende Antwort, die falsch sein kann. Deshalb ist es Pflicht, bei aktuellen Themen das Cutoff-Datum zu kennen und zu berücksichtigen.

### Wie du das Cutoff-Datum herausfindest

1. **Direkt fragen:** "Was ist dein Knowledge Cutoff?" — die meisten Modelle antworten ehrlich
2. **Dokumentation prüfen:** Jeder Anbieter dokumentiert das Cutoff-Datum in seinen Model Cards
3. **Test-Frage stellen:** Frag nach einem Ereignis, dessen Datum du kennst und das knapp am vermuteten Cutoff liegt

### Workarounds für aktuelles Wissen

Wenn du aktuelle Informationen brauchst, gibt es mehrere Wege:

- **Web-Suche:** ChatGPT, Gemini und Perplexity können live im Web suchen
- **Dokument-Upload:** Lade aktuelle PDFs, Artikel oder Daten direkt in den Chat
- **RAG (Retrieval-Augmented Generation):** Das Modell greift auf eine externe Wissensdatenbank zu (→ Stufe 5)
- **Prompt-Kontext:** Gib dem Modell die relevanten aktuellen Informationen direkt im Prompt mit

### Bias in Trainingsdaten

Die Trainingsdaten sind nicht neutral. Das Internet ist überproportional englischsprachig, westlich geprägt und bildet bestimmte Perspektiven ab. Konsequenzen:

- **Sprachbias:** Englische Antworten sind oft differenzierter als deutsche
- **Kulturbias:** Westliche Perspektiven und Werte sind überrepräsentiert
- **Zeitbias:** Neuere Texte sind stärker gewichtet als ältere
- **Selektionsbias:** Was online veröffentlicht wird, ist nicht repräsentativ für die gesamte Gesellschaft

Das macht LLMs nicht unbrauchbar, aber es erfordert kritisches Denken — besonders bei kulturellen, politischen oder historischen Themen.

### RLHF: Die zweite Trainingsphase

Nach dem Basis-Training auf Texten folgt Reinforcement Learning from Human Feedback (RLHF): Menschliche Bewerter bewerten Antworten als gut/schlecht, hilfreich/unhilfreich, sicher/unsicher. Das Modell wird dann so angepasst, dass es bevorzugt die "guten" Antworten gibt. Dadurch wird das Modell konversationsfähig, aber auch konservativer — es lehnt mehr ab und gibt mehr Disclamer als das Base Model.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Simon Willison — Understanding LLMs](https://simonwillison.net/series/llms/) | Praxisnahe LLM-Übersicht vom Experten |
| :movie_camera: | [3Blue1Brown — GPT-Reihe](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) | Visuelle Erklärung von Training und Inferenz |
| :book: | [Anthropic — Model Card Claude](https://docs.anthropic.com/en/docs/about-claude/models) | Offizielle Spezifikationen inkl. Cutoff |
| :book: | [Stanford — Foundation Models Report](https://crfm.stanford.edu/fmti/) | Transparenz-Index für Trainingsdaten |

## Teste dein Verständnis

- [ ] Du fragst Claude nach dem aktuellen Aktienkurs von Apple. Warum ist die Antwort wahrscheinlich falsch — und was wäre der bessere Ansatz?
- [ ] Warum liefern LLMs bei Fragen über Nigeria oder Indonesien oft weniger differenzierte Antworten als bei Fragen über die USA? Was hat das mit den Trainingsdaten zu tun?
- [ ] Erkläre den Unterschied zwischen dem Basis-Training (Pre-Training) und RLHF. Warum braucht es beide Schritte?
