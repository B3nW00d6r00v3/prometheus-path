---
title: "STT-Stack 2026"
module: "7.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# STT-Stack 2026

## Kernidee

Speech-to-Text (STT) ist 2026 ein gelöstes Problem für die meisten Sprachen. Whisper (OpenAI, OSS, MIT-Lizenz) ist der Goldstandard für lokale Inferenz. Deepgram und AssemblyAI bieten proprietäre APIs mit Spezialfähigkeiten (Realtime, Diarization).

## Im Detail

**Whisper (OpenAI, MIT-Lizenz, OSS):**
- Multilingual STT (99 Sprachen), sehr gute Deutsch-Qualität.
- Whisper v3 Turbo: 4-8× schneller als v2 bei vergleichbarer Qualität.
- Lokal lauffähig — keine Cloud nötig.
- **whisper.cpp** für Mac/Linux: native Implementierung, nutzt Metal/Core ML, sehr effizient.
- Modell-Größen: tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1.5B).
- **Default-Wahl** für die meisten Anwendungen.

**Deepgram (proprietär, API):**
- Sehr niedrige Latenz (~300ms für Streaming).
- Hohe Diarization-Qualität (Sprecher-Trennung).
- Nova-3-Modell: stark für Business-Audio, Akzente, Hintergrundgeräusche.
- Lohnt für Realtime-Anwendungen mit Latenz-SLA.

**AssemblyAI (proprietär, API):**
- Strukturierte Outputs out-of-the-box: Speaker-Labels, Sentiment, Topics, Entity-Detection.
- Gut für Meeting-Analyse, wo du nicht nur Transkript, sondern Insights willst.
- Höhere Cost als Deepgram/Whisper.

**Vergleich:**

| Kriterium | Whisper (lokal) | Deepgram | AssemblyAI |
|-----------|----------------|----------|-----------|
| Latenz | ~1-10s/Min | ~300ms (Stream) | ~2-5s |
| DSGVO | ✅ lokal | ⚠️ US-Cloud | ⚠️ US-Cloud |
| Cost | Hardware | ~$0.003/Min | ~$0.005/Min |
| Diarization | mittel | sehr gut | gut |
| Offline | ✅ | ❌ | ❌ |

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Code | [Whisper GitHub (OpenAI)](https://github.com/openai/whisper) | OSS, MIT-Lizenz |
| 🛠️ Code | [whisper.cpp](https://github.com/ggerganov/whisper.cpp) | Optimierte lokale Version |
| 🌐 Docs | [Deepgram Docs](https://deepgram.com) | Realtime-STT-API |

## Teste dein Verständnis

- [ ] Was ist die Default-STT-Empfehlung für 2026, und warum?
- [ ] Wann wäre Deepgram besser als Whisper — was ist das Hauptkriterium?
- [ ] Was ist Diarization, und welcher STT-Service ist am stärksten darin?
- [ ] Was ist der Unterschied zwischen whisper.cpp und der Original-Whisper-Library?
