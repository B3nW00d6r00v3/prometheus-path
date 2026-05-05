---
title: "Modul 7.4: Multimodale KI"
module: "7.4"
type: index
fast_track: false
effort: "🔧 14-22h · 🧮 20-30h · 💼 6-10h"
stability: green
---

# Modul 7.4: Multimodale KI

Modern LLMs sind 2026 oft multimodal — sie verarbeiten Text, Bild, Audio, Video, PDFs nativ. Dieses Modul lehrt dich, wann multimodale Modelle die richtige Wahl sind, wie du sie effektiv prompst, und wo ihre Grenzen liegen. Plus: lokale OSS-Multimodal-Modelle wie LLaVA, Qwen-VL, die für viele Use-Cases reichen.

**Aufwand:** 🔧 14-22h · 🧮 20-30h · 💼 6-10h  
**Voraussetzungen:** Modul 5.1, optional 7.1-7.3

## Lernziel

Du hast eine multimodale Anwendung gebaut (z.B. PDF-Analyse mit Tabellen und Bildern, Video-Zusammenfassung) und kannst zwischen Cloud-Multimodal-Modellen (Claude, GPT-5, Gemini) und lokalen OSS-Optionen wählen.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Multimodale Frontier-Modelle Mai 2026](theorie/frontier-modelle.md) | ✅ | 15min |
| 2 | [OSS Multimodale Modelle](theorie/oss-multimodale-modelle.md) | ⏭️ | 15min |
| 3 | [Vision-Use-Cases die 2026 zuverlässig funktionieren](theorie/vision-use-cases.md) | ✅ | 10min |
| 4 | [Vision-Schwächen](theorie/vision-schwaechen.md) | ✅ | 10min |
| 5 | [STT-Stack 2026](theorie/stt-stack.md) | ✅ | 15min |
| 6 | [TTS-Stack 2026](theorie/tts-stack.md) | ✅ | 15min |
| 7 | [Realtime-Voice-APIs](theorie/realtime-voice-apis.md) | ⏭️ | 15min |
| 8 | [Voice-Agent-Patterns](theorie/voice-agent-patterns.md) | ✅ | 15min |
| 9 | [Audio-Anti-Patterns](theorie/audio-anti-patterns.md) | ✅ | 10min |
| 10 | [Video-Generation-Awareness](theorie/video-generation-awareness.md) | ✅ | 20min |
| 11 | [Document AI mit Layout-Verständnis](theorie/document-ai.md) | ✅ | 15min |
| 12 | [Multimodal-Prompting-Patterns](theorie/multimodal-prompting-patterns.md) | ✅ | 15min |
| 13 | [Cost und Performance multimodaler Modelle](theorie/cost-performance-multimodal.md) | ✅ | 10min |

## Praxis: Hauptprojekt — Multimodale Anwendung deiner Wahl

Wähle EINEN Use-Case und baue ihn:

**Option A: PDF-Analyse-Tool** — komplexe PDFs mit Tabellen, Bildern, Charts. Pipeline: PDF-Upload → multimodal-LLM-Aufruf → strukturierter Output (JSON mit extrahierten Daten). Use-Case: Rechnungs-Verarbeitung, Forschungs-Paper-Auswertung, Vertrags-Analyse.

**Option B: Video-Zusammenfassungs-Tool** — Video als Input, KI erzeugt strukturierte Zusammenfassung mit Timestamps. Use-Case: Lecture-Notes aus YouTube, Meeting-Protokoll aus Aufzeichnung. Mit Gemini 3.1 oder lokal mit Whisper + Llama 3.2 Vision (Frame-Sampling).

**Option C: Multimodaler Personal Assistant** — Bild oder Audio als Input, KI antwortet kontextuell. Use-Case: "Was ist auf diesem Schild?", "Übersetze dieses Foto-Menü", "Beschreibe dieses Bild für meine Großeltern".

**Option D: Document AI für Eigenbedarf** — alle eigenen Belege/Verträge automatisch parsen, in Markdown oder Datenbank überführen. DSGVO-relevant, deshalb lokales OSS-Setup empfohlen.

**Option E: Voice-Agent-Mini** — einfacher Voice-Assistant mit STT (Whisper lokal) → LLM (Claude/GPT/lokal) → TTS (Piper oder ElevenLabs). Use-Case: persönlicher Voice-Wissens-Assistent auf eigenem RAG aus 5.1, Lerngesprächs-Begleiter, Sprach-Tagebuch-Assistent. Trade-off-Reflexion klassische Pipeline vs. Realtime-API dokumentieren.

Im Portfolio: `stufe-7_deep-learning/7-4-multimodal/` mit Code, Beispielen, Vergleich Cloud vs. lokal.

## Mehrwert-Mini-Projekte

- **Eigener Foto-zu-Markdown-Converter**: Bild von einer handgeschriebenen Notiz → strukturierte Markdown-Notiz.
- **Audio-Tagebuch-Transkribierer**: tägliche Audio-Memos mit Whisper transkribieren, mit LLM strukturieren.

## Open-Source-Pfad

Komplett OSS-Stack:
- Llama 3.2 Vision oder Qwen 2.5-VL via Ollama für multimodale Inferenz
- Whisper lokal (whisper.cpp für Mac/Linux, Optimized) für Audio
- Piper TTS oder Bark für Speech-Output
- Gradio oder Streamlit für Frontend

## Outcome-Check

- [ ] Multimodale Anwendung lauffähig
- [ ] Mindestens zwei Modelle verglichen (Cloud vs. lokal, oder zwei Cloud-Anbieter)
- [ ] Cost-Analyse pro Aufruf
- [ ] Reflexion: für welche Use-Cases reicht OSS, wo muss Cloud sein?
- [ ] **Audio/Voice-AI-Stack 2026 erklärbar** — STT-Optionen (Whisper / Deepgram / AssemblyAI), TTS-Optionen (ElevenLabs / OpenAI / Piper / Bark), Realtime-API-Pattern
- [ ] **Voice-Agent-Pattern für eigenen Use-Case bewertet** — STT→LLM→TTS-Pipeline vs. Realtime-API-End-to-End vs. Hybrid
- [ ] **Video-Generation-Awareness** — Top-5-Modelle Mai 2026 (Veo 3, Sora, Runway, Pika, Kling) erklärbar, Cost-Bandbreite gemerkt, Use-Case-Limits verstanden
