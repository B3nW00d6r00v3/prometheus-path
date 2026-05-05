---
title: "OSS-Alternativen 2026"
module: "6.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# OSS-Alternativen 2026

## Kernidee

Du brauchst keine Cloud-API für Computer Use und Browser-Automation. Browser Use, Skyvern und das Anthropic Computer Use Demo (selbst OSS) ermöglichen vollständige lokale oder kostengünstige Setups. Die OSS-Optionen sind 2026 reif genug für Experimente und viele Production-Use-Cases.

## Im Detail

**Browser Use (Python-Library, OSS):**
- Framework-agnostisch: funktioniert mit Anthropic, OpenAI, Gemini, Ollama (lokal).
- Playwright-basiert: nutzt Playwright für Browser-Kontrolle, LLM für Entscheidungen.
- Einfache API: `BrowserSession` + LLM → Agent für Browser-Tasks.
- Aktive Community, schnelle Entwicklung.

```python
from browser_use import BrowserSession
from langchain_anthropic import ChatAnthropic

session = BrowserSession(llm=ChatAnthropic(model="claude-sonnet-4-6"))
result = await session.run("Gehe zu news.ycombinator.com und liste die Top-5-Artikel.")
```

**Skyvern (OSS, Form-Automation-Fokus):**
- Spezialisiert auf Web-Forms und strukturierte Web-Tasks.
- Computer-Vision-basierte Element-Erkennung (nicht nur Screenshots).
- Selbst-hostbar mit Docker.
- Gut für repetitive Form-Filling-Tasks.

**Anthropic Computer Use Demo (OSS, MIT-Lizenz):**
- Das offizielle Anthropic-Quickstart-Repo ist selbst Open Source.
- Nutzbar als Referenz-Implementation und Basis für eigene Container-Setups.
- Ermöglicht lokale Sandboxing ohne Cloud-Abhängigkeit.

**Vollständig lokale Setups (Ollama + Browser Use):**
```
Ollama (qwen2.5-vl:7b) → Browser Use → Playwright → lokaler Chrome
```
- Kein API-Key nötig, kein Cloud-Kosten.
- Schwächer als Cloud-Modelle bei komplexen visuellen Tasks.
- Aber: ausreichend für einfache Browser-Workflows und Experimente.

**Entscheidungshilfe OSS vs. Cloud:**
- Experimentieren und Lernen: OSS + Ollama (kostenfrei).
- Praxis-Projekte und Demos: Browser Use + Cloud-API (günstiger als Anthropic Computer Use direkt).
- Produktionsreife Desktop-Tasks: Anthropic Computer Use + Docker-Sandbox.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 GitHub | [Browser Use](https://github.com/browser-use/browser-use) | Hauptrepo |
| 📖 GitHub | [Skyvern](https://github.com/Skyvern-AI/skyvern) | Form-Automation |
| 📖 GitHub | [Anthropic Computer Use Demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) | OSS-Reference |

## Teste dein Verständnis

- [ ] Was ist der Hauptvorteil von Browser Use gegenüber Anthropic Computer Use für Experimente?
- [ ] Wie kann man Computer Use vollständig lokal (ohne Cloud-API) betreiben — und welche Einschränkungen hat das?
- [ ] Für welchen Use-Case würdest du Skyvern statt Browser Use wählen?
