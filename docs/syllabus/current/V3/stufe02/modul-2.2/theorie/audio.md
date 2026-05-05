---
title: "Audio: Speech-to-Text und Text-to-Speech"
module: "2.2"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Audio: Speech-to-Text und Text-to-Speech

## Kernidee

KI kann gesprochene Sprache in Text umwandeln (Speech-to-Text, z.B. Whisper) und Text in natürlich klingende Sprache verwandeln (Text-to-Speech, z.B. ElevenLabs). Für deutschsprachige Inhalte ist die Modellwahl besonders wichtig, da viele Modelle primär auf Englisch trainiert sind.

## Im Detail

Whisper (OpenAI, OSS, lokal lauffähig) ist der Standard für Speech-to-Text, ElevenLabs (proprietär) bietet höchste TTS-Qualität, Piper TTS (OSS, lokal) ist eine gute kostenlose Alternative, Speechmatics (kommerziell) ist stark bei europäischen Sprachen. Für deutschsprachige Inhalte besonders wichtig: viele Modelle sind primär englisch trainiert. Whisper ist für Deutsch sehr gut; bei TTS variiert die Qualität je nach Modell deutlich.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Whisper](https://github.com/openai/whisper) | OSS Speech-to-Text |
| :hammer_and_wrench: | [ElevenLabs](https://elevenlabs.io) | Proprietäre TTS, hohe Qualität |
| :hammer_and_wrench: | [Piper TTS](https://github.com/rhasspy/piper) | OSS TTS, lokal lauffähig |
| :book: | [Speechmatics](https://www.speechmatics.com) | Kommerziell, gut für EU-Sprachen |

## Teste dein Verständnis

- [ ] Hast du Whisper oder ein anderes STT-Tool mit deutschem Audio getestet?
- [ ] Kennst du den Unterschied zwischen lokalen und Cloud-basierten Audio-Tools?
