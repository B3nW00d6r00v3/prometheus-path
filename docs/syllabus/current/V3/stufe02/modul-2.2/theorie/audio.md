---
title: "Audio: Speech-to-Text und Text-to-Speech"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# Audio: Speech-to-Text und Text-to-Speech

## Kernidee

KI-Audio-Tools zerfallen in zwei Richtungen: Speech-to-Text (STT) wandelt gesprochene Sprache in Text um -- zum Beispiel Meeting-Aufnahmen transkribieren. Text-to-Speech (TTS) macht das Gegenteil: aus Text wird natuerlich klingende Sprache -- zum Beispiel fuer Podcasts, Voice-Assistenten oder Barrierefreiheit. Fuer deutschsprachige Nutzung ist die Modellwahl besonders wichtig, weil viele Modelle primaer auf Englisch trainiert sind.

## Im Detail

### Ueberblick: Die wichtigsten Tools

**Text-to-Speech (TTS):**

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| ElevenLabs | ElevenLabs | Hoechste Qualitaet, Voice-Cloning, 30+ Sprachen | Free (10min/Monat) / $5-$22/Monat | Professionelle Voice-Produktion |
| OpenAI TTS | OpenAI | API, 6 Stimmen, guenstig, gute Qualitaet | API: $15/1M Zeichen | API-Integration, guenstiges Volumen |
| Piper TTS | Rhasspy/Community | OSS, lokal lauffaehig, DSGVO-freundlich | Kostenlos | Lokale Nutzung, Datenschutz |
| Bark | Suno | OSS, generativ, expressiv (Lachen, Musik, Effekte) | Kostenlos | Kreative Audio-Inhalte |

**Speech-to-Text (STT):**

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| Whisper | OpenAI | OSS-Goldstandard, multilingual, lokal lauffaehig | Kostenlos (lokal) / API $0.006/Min | Standard-Transkription |
| Deepgram | Deepgram | Niedrige Latenz, Diarization, Streaming | Pay-per-use (ab $0.0043/Min) | Echtzeit-Transkription |
| AssemblyAI | AssemblyAI | Speaker-Labels, Sentiment, Topic-Detection | Pay-per-use (ab $0.01/Min) | Analyse-reiche Transkription |

### ElevenLabs -- Professionelle Stimmen

**Was es kann:**

- Hoechste TTS-Qualitaet am Markt (2026) -- kaum von echten Sprechern unterscheidbar
- Voice-Cloning: eigene Stimme mit wenigen Minuten Audio klonen
- 30+ Sprachen mit natuerlicher Intonation, darunter gutes Deutsch
- Voice Library: tausende Community-Stimmen nutzbar
- Projekte: lange Texte (Buecher, Artikel) in Audio umwandeln
- API fuer Integration in eigene Anwendungen
- Speech-to-Speech: Stimme in Echtzeit transformieren

**Use Cases:**

- Podcasts und Audiobooks produzieren
- Voice-Over fuer Videos und Praesentationen
- Voice Agents und Chatbots mit natuerlicher Stimme
- Content in mehreren Sprachen vertonen

**Limitation:** Nicht kostenlos fuer ernsthafte Nutzung (Free-Tier: 10 Minuten/Monat). Ethische Bedenken bei Voice-Cloning (Missbrauchspotenzial). Cloud-only -- keine lokale Ausfuehrung.

### Piper TTS -- Lokale OSS-Alternative

**Was es kann:**

- Open Source, komplett lokal lauffaehig (keine Cloud, keine API)
- Gute Qualitaet fuer ein OSS-Modell, besonders auf Englisch
- DSGVO-freundlich: keine Daten verlassen den Rechner
- Leichtgewichtig, laeuft auf Raspberry Pi
- Viele vortrainierte Stimmen in verschiedenen Sprachen

**Use Cases:**

- Barrierefreiheit: Screenreader und Vorlese-Anwendungen
- Smart-Home-Integrationen (Home Assistant)
- Anwendungen mit strengen Datenschutz-Anforderungen

**Limitation:** Qualitaet hinter ElevenLabs, besonders bei Deutsch. Weniger natuerliche Intonation, eingeschraenkte Sprachvielfalt.

### Bark -- Das Kreative Audiomodell

**Was es kann:**

- Generatives Audio: erzeugt nicht nur Sprache, sondern auch Lachen, Seufzen, Musik-Snippets
- Open Source (Suno), lokal lauffaehig
- Expressiver Output: Emotion und Stil steuerbar
- Multilingual mit verschiedenen Sprechern

**Use Cases:**

- Kreative Audio-Projekte (Hoerspiele, Sound-Design)
- Experimentelle Sprach-Generierung mit Emotionen
- Prototyping fuer Audio-Anwendungen

**Limitation:** Qualitaet inkonsistent. Fuer professionelle TTS nicht zuverlaessig genug. GPU-hungrig.

### OpenAI TTS -- Die API-Loesung

**Was es kann:**

- 6 vortrainierte Stimmen mit guter Qualitaet
- Einfache API-Integration (ein API-Call)
- Guenstig bei hohem Volumen ($15/1M Zeichen)
- HD-Modus fuer hoehere Qualitaet verfuegbar

**Use Cases:**

- Integration in eigene Anwendungen (Chatbots, Apps)
- Batch-Vertonung grosser Textmengen
- Schnelle Prototypen fuer Voice-Features

**Limitation:** Keine Voice-Cloning-Funktion. Begrenzte Stimmen-Auswahl. Cloud-only.

### Whisper -- Der STT-Goldstandard

**Was es kann:**

- Open Source von OpenAI, lokal lauffaehig
- Multilingual: unterstuetzt 99 Sprachen, Deutsch sehr gut
- Verschiedene Modell-Groessen (tiny bis large) fuer unterschiedliche Hardware
- Timestamps und Segmentierung
- whisper.cpp: C++-Port, 4-8x schneller auf CPU
- Kann als API ueber OpenAI genutzt werden ($0.006/Minute)

**Use Cases:**

- Meeting-Aufnahmen transkribieren
- Podcast-Transkripte erstellen
- Untertitel fuer Videos generieren
- Voice-Memos in Text umwandeln

**Limitation:** Keine Echtzeit-Faehigkeit (batch processing). Keine Speaker-Diarization out of the box (braucht Zusatztools wie pyannote).

### Deepgram -- Echtzeit-Transkription

**Was es kann:**

- Sehr niedrige Latenz: Echtzeit-Streaming-Transkription
- Speaker-Diarization: erkennt und labelt verschiedene Sprecher
- Keyword-Boosting: verbessert Erkennung von Fachbegriffen
- Summarization und Topic-Detection
- WebSocket-API fuer Live-Streams

**Use Cases:**

- Live-Untertitelung bei Meetings und Events
- Call-Center-Transkription in Echtzeit
- Voice Agents mit Sub-Sekunden-Latenz
- Streaming-Anwendungen (Twitch, YouTube Live)

**Limitation:** Cloud-only, nicht lokal lauffaehig. Kosten skalieren linear mit Audio-Minuten. Deutsch-Qualitaet gut, aber hinter Whisper bei voraufgezeichnetem Audio.

### AssemblyAI -- Transkription mit Analyse

**Was es kann:**

- Hochwertige Transkription mit Speaker-Labels
- Sentiment-Analyse: erkennt Stimmung pro Abschnitt
- Topic-Detection: identifiziert Themen automatisch
- PII-Redaction: personenbezogene Daten automatisch schwaerzen
- Entity-Detection und Content-Moderation
- LeMUR: LLM-basierte Zusammenfassungen und Fragen an Transkripte

**Use Cases:**

- Meeting-Analyse mit Stimmungs-Tracking
- Compliance-Monitoring (PII erkennen und schwaerzen)
- Content-Analyse grosser Audio-Archive
- Automatische Meeting-Zusammenfassungen

**Limitation:** Cloud-only API. Teurer als Whisper fuer einfache Transkription. Fuer reine STT-Aufgaben ueber-engineered.

### Wann welches Tool?

- **Beste TTS-Qualitaet:** ElevenLabs -- kaum von echten Stimmen zu unterscheiden
- **TTS lokal und kostenlos:** Piper TTS -- DSGVO-konform, luft ueberall
- **TTS in eigener App:** OpenAI TTS API -- einfach, guenstig, zuverlaessig
- **STT-Standard:** Whisper -- lokal, kostenlos, bestes Preis-Leistungs-Verhaeltnis
- **STT in Echtzeit:** Deepgram -- niedrigste Latenz am Markt
- **STT mit Analyse:** AssemblyAI -- Sentiment, Topics, Speaker-Labels inklusive

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [ElevenLabs](https://elevenlabs.io) | Professionelle TTS + Voice-Cloning |
| 🛠️ | [Whisper](https://github.com/openai/whisper) | OSS STT-Goldstandard |
| 🛠️ | [Piper TTS](https://github.com/rhasspy/piper) | OSS TTS, lokal lauffaehig |
| 🛠️ | [Bark](https://github.com/suno-ai/bark) | Generatives Audio-Modell |
| 🛠️ | [Deepgram](https://deepgram.com) | Echtzeit-STT API |
| 🛠️ | [AssemblyAI](https://assemblyai.com) | STT mit Analyse-Features |
| 🛠️ | [whisper.cpp](https://github.com/ggerganov/whisper.cpp) | Schneller Whisper-Port fuer CPU |

## Teste dein Verstaendnis

- [ ] Transkribiere eine deutschsprachige Audio-Datei (z.B. ein Podcast-Ausschnitt) mit Whisper. Wie gut ist die Qualitaet im Vergleich zu einer manuellen Transkription?
- [ ] Teste ElevenLabs (Free-Tier) und Piper TTS mit demselben deutschen Text. Wie gross ist der Qualitaets-Unterschied?
- [ ] Ueberlege: Fuer welchen deiner Use Cases wuerdest du ein lokales Tool (Whisper, Piper) einem Cloud-Dienst vorziehen -- und warum?
