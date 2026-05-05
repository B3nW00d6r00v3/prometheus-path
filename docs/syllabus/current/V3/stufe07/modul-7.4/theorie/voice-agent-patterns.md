---
title: "Voice-Agent-Patterns"
module: "7.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Voice-Agent-Patterns

## Kernidee

2026 gibt es drei dominante Architektur-Patterns für Voice-Agents: die klassische STT→LLM→TTS-Pipeline, Realtime-API-End-to-End, und ein Hybrid-Ansatz. Die Wahl hängt von Latenz-Anforderungen, Cost und Kontroll-Bedarf ab.

## Im Detail

**Pattern 1: STT → LLM → TTS-Pipeline (klassisch)**

```
Mikrofon → STT (Whisper/Deepgram) → LLM (Claude/GPT) → TTS (Piper/ElevenLabs) → Lautsprecher
```

- **Latenz:** 1-3 Sekunden (STT ~0.5s + LLM ~0.5-1s + TTS ~0.3s + Netzwerk).
- **Kontrolle:** Maximale Kontrolle über jeden Schritt. Transkript archivierbar. Diarization möglich.
- **Cost:** Günstigste Option wenn alle Teile optimiert.
- **Wahl wenn:** Latenz >1s akzeptabel, volle Kontrolle nötig, DSGVO (lokales STT/TTS).

**Pattern 2: Realtime-API-End-to-End**

```
Mikrofon → Realtime-API (OpenAI/Gemini) → Lautsprecher
```

- **Latenz:** 300-500ms (Sub-Sekunde möglich).
- **Kontrolle:** Weniger — alles im Modell, schwarze Box.
- **Cost:** 5-10× höher als klassische Pipeline.
- **Wahl wenn:** Latenz <500ms kritisch, konversationales Erlebnis wichtig.

**Pattern 3: Hybrid**

```
Realtime-API (Konversation) + klassische Pipeline (Spezial-Tasks wie Archivierungs-Transkript)
```

- Realtime für die User-Konversation (niedrige Latenz).
- Klassische Pipeline im Hintergrund für Diarization, Archivierung, Analyse.
- Komplexer, aber oft der beste Trade-off.

**Faustregel:**
- Latenz <500ms kritisch? → Realtime-API.
- Latenz 1-3s akzeptabel? → Klassische Pipeline.
- Beides nötig? → Hybrid.

**Wichtig für Production:**
- Hangup-Detection (User beendet Gespräch → API-Verbindung schließen → Cost stoppen).
- PII-Filterung vor Logging.
- Fallback bei API-Ausfall.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) | End-to-End Realtime-Pattern |
| 🛠️ Code | [LiveKit (OSS Voice-Pipeline)](https://github.com/livekit/agents) | OSS-Framework für Voice-Agents |

## Teste dein Verständnis

- [ ] Skizziere die drei Voice-Agent-Patterns — welche Komponenten hat jedes?
- [ ] Was ist die wichtigste Entscheidungs-Variable zwischen Pattern 1 und Pattern 2?
- [ ] Welches Pattern empfiehlst du für einen Telefon-basierten Kundenservice-Agenten?
- [ ] Was passiert, wenn Hangup-Detection fehlt — was ist die Cost-Konsequenz?
