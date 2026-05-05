---
title: "TTS-Stack 2026"
module: "7.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# TTS-Stack 2026

## Kernidee

Text-to-Speech (TTS) hat 2026 eine klare Hierarchie: ElevenLabs für beste expressiv-menschliche Qualität, OpenAI Voice für API-Integration, Piper TTS für lokale DSGVO-freundliche Lösung. Neue OSS-Voice-Cloning-Modelle (F5-TTS, OpenVoice) ermöglichen lokales Voice-Cloning.

## Im Detail

**ElevenLabs (proprietär):**
- Beste Qualität für emotional/expressiv klingende Stimmen.
- Breite Sprachen-Unterstützung (inkl. sehr gutes Deutsch).
- Voice-Cloning: eigene Stimme mit wenigen Minuten Audio klonen.
- Cost-intensiv für hohe Volumina (ab ~$0.08 per 1000 Zeichen).
- Wahl für: Hörbücher, Marketing-Inhalte, Creator-Content.

**OpenAI Voice / Anthropic Voice:**
- Solide Standard-Qualität, direkt in die API-Pipeline integrierbar.
- Niedrigere Cost als ElevenLabs.
- Weniger expressiv, aber ausreichend für die meisten Assistenten-Anwendungen.

**Piper TTS (OSS):**
- Lokal lauffähig, kein Cloud-Aufruf nötig.
- Ausreichende Qualität für die meisten Anwendungen (nicht ElevenLabs-Niveau, aber gut).
- DSGVO-freundlich — keine Audio-Daten in Cloud.
- Viele Stimmen für verschiedene Sprachen.

**Bark (Suno AI, OSS):**
- Expressivere Audio-Generierung als Piper — kann auch Lachen, Seufzen, Stimmungen.
- Langsamer als Piper (Diffusion-basiert).
- Gut für kreative Anwendungen.

**F5-TTS / OpenVoice (OSS, neu):**
- Voice-Cloning lokal mit wenigen Audio-Samples.
- F5-TTS: Flow-Matching-basiert, sehr natürlich klingend.
- OpenVoice: cross-lingual Voice-Cloning.

**Entscheidungs-Heuristik:**
- Beste Qualität + Voice-Cloning → ElevenLabs
- API-Integration Standard-Qualität → OpenAI Voice
- DSGVO + kein Cloud → Piper TTS
- Expressiv + lokal → Bark
- Voice-Cloning + lokal → F5-TTS

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [ElevenLabs Docs](https://elevenlabs.io/docs) | Proprietär, beste Qualität |
| 🛠️ Code | [Piper TTS GitHub](https://github.com/rhasspy/piper) | OSS, lokal, schnell |
| 🛠️ Code | [Bark GitHub (Suno AI)](https://github.com/suno-ai/bark) | OSS, expressiv |

## Teste dein Verständnis

- [ ] Welchen TTS-Service wählst du für eine DSGVO-konforme Voice-Anwendung ohne Cloud?
- [ ] Was ist der Hauptunterschied zwischen Piper und Bark — wofür jeweils?
- [ ] Welche Metrik unterscheidet ElevenLabs von Piper in der Praxis?
- [ ] Was ist Voice-Cloning, und welche OSS-Option bietet das lokal?
