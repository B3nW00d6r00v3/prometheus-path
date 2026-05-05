---
title: "Modul 5.5: Frontend für LLM-Apps"
module: "5.5"
type: index
fast_track: false
effort: "🔧 8-12h · 🧮 5-8h · 💼 4-6h"
stability: green
---

# Modul 5.5: Frontend für LLM-Apps

Eine LLM-Funktion ohne Frontend ist eine Funktion in der Kommandozeile. Für echte Nutzbarkeit brauchst du eine UI — sei es eine schnelle Streamlit-Demo, ein Chainlit-Chatbot, oder eine produktive Next.js-App mit Vercel AI SDK. Dieses Modul lehrt dich die wichtigsten Optionen Mai 2026, mit Schwerpunkt auf Streaming, Tool-Use-Visualisierung und Generative UI.

**Aufwand:** 🔧 8-12h · 🧮 5-8h · 💼 4-6h
**Voraussetzungen:** Modul 5.1, optional 4.1

## Lernziel

Du hast deine RAG-App aus 5.1 mit einem Frontend versehen, das Streaming unterstützt und Tool-Calls visualisiert.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Frontend-Optionen 2026 — Übersicht](theorie/frontend-optionen.md) | ✅ | 10min |
| 2 | [Streamlit für schnelle Prototypen](theorie/streamlit.md) | ✅ | 10min |
| 3 | [Vercel AI SDK 5 — Production-Standard](theorie/vercel-ai-sdk.md) | ✅ | 15min |
| 4 | [Chainlit — Conversational UIs](theorie/chainlit.md) | ⏭️ | 10min |
| 5 | [Open WebUI als lokale ChatGPT-Alternative](theorie/open-webui.md) | ⏭️ | 10min |
| 6 | [Streaming als UX-Pflicht](theorie/streaming.md) | ✅ | 10min |
| 7 | [Tool-Use im Frontend visualisieren](theorie/tool-use-visualisierung.md) | ✅ | 10min |
| 8 | [Generative UI als 2026-Pattern](theorie/generative-ui.md) | ⏭️ | 10min |
| 9 | [Authentication für LLM-Apps](theorie/auth.md) | ⏭️ | 10min |
| 10 | [Rate Limiting per User](theorie/rate-limiting.md) | ⏭️ | 5min |

## Praxis: Frontend für deine RAG-App

Wähle EINE der folgenden Varianten:

**Variante A: Streamlit (schnell, Python-only)**
- Streamlit-App mit Chat-Interface für deine 5.1-RAG.
- Streaming aktiviert.
- Source-Citations werden angezeigt (welche Chunks die Antwort gestützt haben).
- Eval-Run-Trigger als Sidebar-Button.

**Variante B: Next.js + Vercel AI SDK (production-tauglich, TypeScript)**
- Next.js-App, die deine 5.1-RAG-Python-API als Backend nutzt (oder direkt LangChain.js).
- `useChat`-Hook für Streaming.
- Tool-Use-Rendering für Hybrid-Search-Schritte.
- Bonus: Generative UI (z.B. Statistik-Visualisierung im Chat).

**Variante C: Chainlit (Conversational UI, Python)**
- Chainlit-App mit Source-Citations native.
- Schritte des RAG-Pipelines visualisieren.

Im Portfolio: `stufe-5_anwendungen/5-5-frontend/` mit Code, Screenshots, Demo-Video.

## 🎁 Mehrwert-Mini-Projekte

- **Persönliche Chat-UI** lokal auf deinem Rechner mit Open WebUI + Ollama: deine eigene ChatGPT-Alternative.
- **Streamlit-Dashboard** für Prompt-A/B-Tests.

## 🌱 Open-Source-Pfad

**Open WebUI als komplette OSS-Alternative** — kein Code nötig, hochgradig anpassbar via Functions und Pipelines. Kann deinen RAG-Stack als Backend einbinden. Damit hast du eine ChatGPT-ähnliche Oberfläche, komplett lokal, mit deinen eigenen Tools.

## Outcome-Check

- [ ] Frontend lauffähig auf `localhost`
- [ ] Streaming funktioniert (User sieht Text während Generation)
- [ ] Tool-Use oder RAG-Pipeline-Schritte werden visualisiert
- [ ] Source-Citations werden angezeigt
- [ ] Demo-Video oder Screenshots im Portfolio
