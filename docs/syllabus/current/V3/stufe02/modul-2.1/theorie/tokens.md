---
title: "Tokens, nicht Wörter"
module: "2.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Tokens, nicht Wörter

## Kernidee

LLMs lesen nicht in ganzen Wörtern, sondern in "Tokens" — Wort-Stücken, die der Tokenizer zerlegt hat. "Hallo" ist ein Token, aber "Außergewöhnlichkeit" wird in 4-5 Teile zerschnitten. Das ist wichtig, weil du pro Token bezahlst und das Context Window in Tokens gemessen wird. Deutsch braucht 30-50% mehr Tokens als Englisch — jeder deutsche Prompt ist also automatisch teurer.

## Überblick

| Aspekt | Fakt |
|--------|------|
| Was ist ein Token? | Ein Sub-Wort-Stück, typischerweise 3-4 Zeichen in Englisch |
| Vokabulargröße | GPT-4o: ~100.000 Tokens, Llama 3: ~128.000 Tokens |
| 1 Token ≈ | 0,75 englische Wörter oder ~4 englische Zeichen |
| Deutsch vs. Englisch | Deutsch braucht 30-50% mehr Tokens für denselben Inhalt |
| 1 DIN-A4-Seite (deutsch) | ca. 400-500 Tokens |
| Warum es zählt | Cost (du bezahlst pro Token) + Context Window (begrenzt) |

## Im Detail

### Wie Tokenisierung funktioniert

Ein Tokenizer zerlegt Text nicht an Wortgrenzen, sondern nach statistischer Häufigkeit. Das Verfahren heißt "Byte Pair Encoding" (BPE): Häufige Zeichenfolgen werden zu einem Token zusammengefasst. "the" ist so häufig, dass es ein einziges Token ist. "Außergewöhnlichkeit" ist selten und wird in mehrere Teile zerlegt — etwa `Außer`, `gewöhn`, `lich`, `keit`.

Konkretes Beispiel (GPT-4o Tokenizer):

- "Hello world" → 2 Tokens
- "Hallo Welt" → 2 Tokens
- "Künstliche Intelligenz" → 4 Tokens
- "Artificial Intelligence" → 2 Tokens
- "Bundesverfassungsgericht" → 5 Tokens
- "Supreme Court" → 2 Tokens

### Warum Deutsch mehr Tokens braucht

Die Tokenizer der großen Modelle wurden überwiegend auf englischen Texten trainiert. Englische Wörter sind häufiger im Trainingsdatensatz und werden daher effizienter in Tokens kodiert. Deutsche Besonderheiten wie Komposita ("Krankenversicherungsbeitragserhöhung"), Umlaute (ä, ö, ü) und die generell längeren Wörter führen zu mehr Tokens.

**Praktische Konsequenz:** Ein deutscher Prompt kostet 30-50% mehr als die englische Übersetzung desselben Inhalts. Bei gelegentlicher Nutzung irrelevant, bei hohem API-Volumen ein echter Kostenfaktor.

### Spezial-Tokens

Neben Text-Tokens gibt es Spezial-Tokens, die das Modell intern nutzt:

- **BOS/EOS:** Begin/End of Sequence — markieren Anfang und Ende einer Nachricht
- **System-Token:** Trennen System-Prompt von User-Input
- **Padding-Token:** Füllen bei Batch-Verarbeitung auf gleiche Länge auf

Diese Spezial-Tokens siehst du als Nutzer nicht, aber sie zählen zum Token-Verbrauch.

### Faustregel für Token-Schätzung

Für schnelle Schätzungen ohne Tokenizer-Tool:

| Text (Deutsch) | Ungefähre Token-Zahl |
|----------------|---------------------|
| Ein Satz (15 Wörter) | ~25 Tokens |
| Ein Absatz (100 Wörter) | ~150 Tokens |
| Eine DIN-A4-Seite (250 Wörter) | ~400 Tokens |
| Ein 5-Seiten-Dokument | ~2.000 Tokens |
| Ein Buch (300 Seiten) | ~120.000 Tokens |
| Ein ganzes Wikipedia (deutsch) | ~2 Milliarden Tokens |

**Faustregel Deutsch:** 1 deutsches Wort ≈ 1,5-2 Tokens. Für Englisch: 1 Wort ≈ 1,3 Tokens.

### Warum Token-Zählung praktisch wichtig ist

1. **Cost:** Du bezahlst pro Token (Input + Output). Ein langer System-Prompt, der bei jedem Call mitgeschickt wird, summiert sich.
2. **Context Window:** Wenn dein Prompt + die gewünschte Antwort zusammen das Context Window überschreiten, wird die Antwort abgeschnitten oder der Anfang "vergessen".
3. **Antwortqualität:** Modelle performen schlechter, wenn das Context Window fast voll ist — die Aufmerksamkeit verteilt sich auf zu viel Text (das "Lost in the Middle"-Problem).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [OpenAI Tokenizer (interaktiv)](https://platform.openai.com/tokenizer) | Texte live in Tokens zerlegen — Pflicht-Tool |
| :hammer_and_wrench: | [Tiktokenizer (mehrere Modelle)](https://tiktokenizer.vercel.app) | Vergleich verschiedener Tokenizer nebeneinander |
| :movie_camera: | [Andrej Karpathy — Let's build the GPT Tokenizer (2h)](https://www.youtube.com/watch?v=zduSFxRajkE) | Tiefer Einblick: einen Tokenizer von Null bauen |
| :book: | [Hugging Face — Tokenizers erklärt](https://huggingface.co/docs/transformers/tokenizer_summary) | BPE, WordPiece, SentencePiece im Vergleich |

## Teste dein Verständnis

- [ ] Gib den Satz "Die Bundesregierung hat heute eine neue Verordnung beschlossen" in den OpenAI Tokenizer ein. Wie viele Tokens sind es? Übersetze ihn ins Englische und vergleiche — wie viel Prozent mehr Tokens braucht Deutsch?
- [ ] Warum ist "Hallo" ein einziges Token, aber "Bundesverfassungsgericht" wird in 5 Tokens zerlegt? Was sagt das über die Trainingsdaten des Tokenizers?
- [ ] Ein System-Prompt hat 500 Tokens und wird bei jedem API-Call mitgeschickt. Du machst 100 Calls am Tag mit Claude Sonnet ($3/1M Input-Tokens). Was kostet der System-Prompt allein pro Tag?
