---
title: "Realtime-Voice-APIs"
module: "7.4"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Realtime-Voice-APIs

## Kernidee

Realtime-Voice-APIs ermöglichen bidirektionale Audio-Konversation mit Sub-Sekunden-Latenz über einen einzigen API-Endpunkt. OpenAI Realtime API und Gemini Live API sind die wichtigsten Optionen 2026. Sie ersetzen die klassische STT→LLM→TTS-Pipeline für Latenz-sensitive Anwendungen.

## Im Detail

**Was Realtime-APIs anders macht:**
- Kein separates STT + LLM + TTS — alles in einem Modell.
- Bidirektionale Audio-Streams (WebRTC oder WebSocket).
- Sub-Sekunden Time-to-First-Speech (~300-500ms typisch).
- Voice Activity Detection (VAD) eingebaut.
- Unterbrechungen möglich: Nutzer kann mitten im TTS-Output sprechen.

**OpenAI Realtime API (GPT-4o Realtime / GPT-5 Realtime):**
- Erster Realtime-Voice-API für Entwickler (September 2024).
- WebRTC- und WebSocket-Transport.
- Tool-Use während Konversation (Function Calling via Audio).
- Cost höher als klassische Pipeline (~5-10× pro Minute).

**Gemini Live API (Google):**
- Vergleichbarer Realtime-Stack wie OpenAI.
- Besonders stark in Multilingual und Video-Integration.
- In Gemini 2.5+ auch Video-Streaming möglich.

**Anthropic Voice (Status Mai 2026):**
- Standalone Realtime-Voice-API: Verfügbarkeit prüfen.
- Claude-Thinking in Voice-Konversationen ist ein Differenzierungsmerkmal.

**Wann Realtime-API sinnvoll:**
- Latenz-SLA <500ms kritisch (z.B. telefonbasierte Assistenten).
- Conversational AI mit natürlichem Gesprächsfluss.
- Voice-First-Produkterlebnisse.

**Wann Realtime-API nicht sinnvoll:**
- Geringeres Budget (Cost ~5-10× klassische Pipeline).
- Weniger Kontrolle über einzelne Pipeline-Schritte nötig.
- Archivierungs-Anforderungen (Transkript, Diarization separat).

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [OpenAI Realtime API Docs](https://platform.openai.com/docs/guides/realtime) | Offizielle Dokumentation |
| 🌐 Docs | [Gemini Live API](https://ai.google.dev/gemini-api/docs/live) | Google Realtime Audio |

## Teste dein Verständnis

- [ ] Was ist der Hauptvorteil einer Realtime-Voice-API gegenüber einer klassischen STT→LLM→TTS-Pipeline?
- [ ] Welche Transport-Protokolle nutzt die OpenAI Realtime API?
- [ ] Wann ist der Cost-Aufpreis einer Realtime-API gerechtfertigt?
- [ ] Was ist Voice Activity Detection (VAD), und warum ist sie wichtig für Realtime?
