---
title: "Audio-Anti-Patterns"
module: "7.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Audio-Anti-Patterns

## Kernidee

Fünf häufige Fehler in Audio/Voice-AI-Systemen führen zu schlechter Nutzererfahrung, unerwarteten Kosten oder Datenschutz-Problemen. Diese Anti-Patterns zu kennen spart Zeit in Production.

## Im Detail

**Anti-Pattern 1: STT ohne Punctuation-Model**

Whisper und andere STT-Systeme können ohne explizites Punctuation-Modell Transkripte ohne Satzzeichen ausgeben ("das war heute ein langer tag ich habe viel gelernt"). Der LLM-Folgeschritt bekommt eine Wortwand und strukturiert schlechter. Lösung: Whisper v3 hat integrierte Interpunktion, alternativ Punctuation-Modell nachschalten.

**Anti-Pattern 2: TTS ohne SSML-Markup**

Text-to-Speech ohne SSML (Speech Synthesis Markup Language) klingt oft roboterhaft — keine Pausen nach Sätzen, keine Betonung bei Fragen, kein "Atemholen". SSML ermöglicht `<break time="500ms"/>`, `<emphasis>` und andere prosodische Hinweise. ElevenLabs hat eigene Steuerungszeichen, OpenAI Voice versteht SSML-ähnliche Hints.

**Anti-Pattern 3: Realtime-API ohne Hangup-Detection**

Eine Realtime-API-Session offen zu lassen, weil der Nutzer einfach weggegangen ist oder der Browser-Tab geschlossen wurde, ohne expliziten Hangup, kostet weiter. Bei $0.06/Minute sind 8 Stunden unbemerkt offene Sessions teuer. Lösung: WebSocket-Timeout, VAD-basierter Silence-Timeout (keine Sprache für 30s → Session beenden).

**Anti-Pattern 4: Keine Diarization bei Multi-Speaker-Aufnahmen**

Meeting-Transkripte ohne Sprecher-Trennung sind kaum lesbar ("A: Ich denke B: Ich auch A: Wirklich?"). Wenn mehrere Sprecher vorhanden sind, muss Diarization explizit aktiviert werden (Deepgram, AssemblyAI bieten das out-of-the-box, Whisper braucht pyannote.audio zusätzlich).

**Anti-Pattern 5: Audio-Daten ohne PII-Filterung in Logs**

Audio-Transkripte enthalten oft Namen, Adressen, Telefonnummern, IBAN. Diese in Plain-Text zu loggen ohne PII-Filterung verstößt gegen DSGVO und kann zu Datenschutzvorfällen führen. Lösung: PII-Redaktion via LLM oder Regex vor dem Logging, Audio-Retention-Policy dokumentieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [pyannote.audio](https://github.com/pyannote/pyannote-audio) | Diarization für Whisper |
| 🌐 Docs | [ElevenLabs SSML Guide](https://elevenlabs.io/docs/speech-synthesis/prompting) | Prosodische Kontrolle |

## Teste dein Verständnis

- [ ] Was ist das Punctuation-Problem bei STT — wie wirkt es sich auf den LLM-Folgeschritt aus?
- [ ] Was ist Diarization, und wann ist es zwingend notwendig?
- [ ] Was kann bei einer Realtime-API-Session ohne Hangup-Detection finanziell passieren?
- [ ] Welche PII-Daten findet man typischerweise in Meeting-Transkripten?
