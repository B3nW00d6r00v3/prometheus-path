---
title: "Tokenizer 2026: BPE, SentencePiece, Tiktoken"
module: "7.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Tokenizer 2026: BPE, SentencePiece, Tiktoken

## Kernidee

Bevor Text in ein Modell geht, muss er in Tokens zerlegt werden. Tokenizer entscheiden diese Zerlegung. BPE und seine Varianten dominieren. Tiktoken ist OpenAIs Implementierung, SentencePiece bei Llama. Deutsch braucht typisch 30-50% mehr Tokens als Englisch — direkte Cost-Auswirkung.

## Im Detail

**Was ist ein Token?** Kein einzelnes Zeichen, kein ganzes Wort — etwas dazwischen. Tokenizer lernen aus Daten, welche Zeichenfolgen häufig genug sind, um einen eigenen Token zu bekommen. "Tokenization" selbst ist meist 4 Tokens ("Token", "ization"). "ChatGPT" ist 1 Token.

**BPE (Byte Pair Encoding):** Baut Vokabular durch iteratives Mergen häufiger Byte-Paare. Start: jedes Byte ist ein Token. Merge: häufigste Paare zu neuen Tokens zusammenfassen. Wiederholen bis Vokabular-Größe erreicht. Ergebnis: häufige Wörter werden ein Token, seltene werden in Subwords aufgeteilt.

**Varianten:**
- **Tiktoken** (OpenAI): Schnelle BPE-Implementierung in Rust. Wird von GPT-3.5, GPT-4, GPT-5 genutzt. cl100k_base-Tokenizer hat 100.277 Tokens.
- **SentencePiece** (Google): Language-agnostisches BPE. Wird von Llama 2/3, Gemma, T5 genutzt. Llama 3 Tokenizer: 128.256 Tokens.
- **Hugging Face Tokenizers**: Wrapper mit vielen Varianten, sehr schnell, wird von fast allen HF-Modellen genutzt.

**Deutsch-Problem:**
- Englisch: "unbelievable" → 1-2 Tokens.
- Deutsch: "unglaublich" → 2-3 Tokens. "Kraftfahrzeughaftpflichtversicherung" → 6-12 Tokens.
- Konsequenz: Deutsche Texte sind 30-50% teurer in API-Cost und Latenz als englische.
- Langfristig: Modelle mit mehr deutschen Trainings-Daten haben bessere deutsche Tokenisierung (z.B. Llama 3 besser als Llama 2 für Deutsch).

**Karpathy's Tokenizer-Lecture:** Karpathy hat 2024 eine eigene Lecture nur über Tokenizer gebaut — "Let's build the GPT Tokenizer". Empfehlung: für 🧮 ansehen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📺 Video | [Karpathy — Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) | Tokenizer von Grund auf |
| 📖 Docs | [Hugging Face — Tokenizers](https://huggingface.co/docs/tokenizers/index) | Hugging Face Tokenizer-Doku |
| 🔧 Tool | [OpenAI Tokenizer Visualizer](https://platform.openai.com/tokenizer) | Visualisiert Tokenisierung |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen einem Zeichen, einem Token und einem Wort?
- [ ] Wie lernt BPE sein Vokabular (Schritt für Schritt erklärt)?
- [ ] Warum ist Deutsch teurer als Englisch in LLM-APIs?
- [ ] Welchen Tokenizer nutzt Llama 3, welchen GPT-4?
