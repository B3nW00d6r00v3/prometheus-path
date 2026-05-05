---
title: "Modul 1.1: Tools-Setup & Lernumgebung"
module: "1.1"
type: index
fast_track: true
effort: "2-3h"
---

# Modul 1.1: Tools-Setup & Lernumgebung

Bevor du KI lernst, muss sie auf deinem Rechner laufen. Dieses Modul richtet die lokale Umgebung ein: Python, IDE, Ollama für lokale LLMs, plus optional einen Cloud-API-Key für State-of-the-Art-Vergleiche. Open-Source-First heißt nicht Open-Source-Only — beides ist nötig, weil Frontier-Modelle (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Ultra) nicht lokal lauffähig sind.

**Aufwand:** 🔧 2-3h · 🧮 2-3h · 💼 2-3h  
**Voraussetzungen:** Keine

## Lernziel

Lokale Umgebung läuft. Ein Python-Skript ruft erfolgreich *ein lokales LLM* (via Ollama) und *eine Cloud-API* auf.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Python 3.11+ Setup](theorie/python-setup.md) | ✅ | 10 min |
| 2 | [Virtual Environments](theorie/virtual-environments.md) | ✅ | 10 min |
| 3 | [IDE: Cursor oder VS Code](theorie/ide-setup.md) | ✅ | 10 min |
| 4 | [Git & GitHub](theorie/git-github.md) | ✅ | 15 min |
| 5 | [Ollama für lokale LLMs](theorie/ollama-lokal.md) | ⏭️ | 15 min |
| 6 | [Cloud-API-Keys](theorie/cloud-api-keys.md) | ✅ | 10 min |
| 7 | [Secrets Management](theorie/secrets-management.md) | ⏭️ | 10 min |

## Praxis: Hello-World mit lokalem + Cloud-LLM

- Virtual Environment einrichten, alle Tools installieren (`ollama`, `anthropic`, `openai`, `google-genai`, `python-dotenv`).
- Skript `hello_world.py` schreiben: ruft *einmal* Ollama lokal auf, *einmal* Cloud-API.
- Beide Antworten erfolgreich → Setup steht.
- Code ins Portfolio-Repo committen (Stufe-1-Ordner).

**Tutorial-Walkthroughs:**

- [Anthropic Quickstart Guide](https://docs.claude.com/en/docs/get-started)
- [OpenAI Quickstart](https://platform.openai.com/docs/quickstart)
- [Google AI Studio Quickstart](https://ai.google.dev/gemini-api/docs/quickstart)
- [Ollama Python Library](https://github.com/ollama/ollama-python)

## 🎁 Mehrwert-Mini-Projekt

**Persönliches Setup-Cheat-Sheet** als Markdown im Portfolio-Repo: dein OS, Python-Version, IDE, installierte Modelle, eingerichtete API-Keys, eigene Anpassungen. Wert: in 6 Monaten beim nächsten Setup oder neuem Rechner sparst du Stunden.

## 🌱 Open-Source-Pfad

Komplett ohne Cloud-API arbeiten: nur Ollama nutzen, mehrere Modelle parallel installieren (`llama3.2:3b`, `qwen2.5:7b`, `gemma3:4b`), selbst vergleichen. Spätere Module (5.x ff.) setzen Cloud-Vergleiche voraus — kann nachgeholt werden, wenn du willst.

## Outcome-Check

- [ ] `python3 --version` zeigt 3.11+
- [ ] Virtual Environment aktivierbar
- [ ] Git + GitHub funktionieren (Test mit `git clone`)
- [ ] `ollama run llama3.2:3b` antwortet
- [ ] Optional: Cloud-API-Key eingerichtet
- [ ] `hello_world.py` läuft mit beiden Quellen
- [ ] `.gitignore` blockiert `.env`
- [ ] `setup-cheatsheet.md` im Portfolio
