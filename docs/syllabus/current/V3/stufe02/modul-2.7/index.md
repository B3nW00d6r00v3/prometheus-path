---
title: "Modul 2.7: Python fuer KI"
module: "2.7"
type: index
fast_track: true
effort: "30-50h"
---

# Modul 2.7: Python fuer KI

Du hast in 2.6 die Grenzen von No-Code gesehen. Jetzt lernst du Python -- gezielt fuer KI-Anwendungen, nicht als allgemeine Programmiersprache. Wer schon Python kann, kann das Modul stark verkuerzen oder skippen (mit Outcome-Check als Selbsttest). Wer Python neu lernt, sollte hier mindestens 30-50h einplanen -- Python ist die Sprache aller KI-Module ab Stufe 4.

**Aufwand:** 30-50h  
**Voraussetzungen:** Module 2.1-2.6

## Lernziel

Du kannst LLM-APIs aufrufen, Daten strukturiert verarbeiten, mit Async-Patterns arbeiten, Type Hints und Pydantic einsetzen, und einfache CLI-Tools schreiben. Du hast eigene Python-Skripte im Portfolio.

## Theorie-Uebersicht

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [Python-Grundlagen kompakt](theorie/python-grundlagen.md) | :material-check: | 15min |
| 2 | [Virtual Environments & Package Management](theorie/venv-package-management.md) | :material-check: | 10min |
| 3 | [Type Hints und mypy](theorie/type-hints-mypy.md) | :material-check: | 10min |
| 4 | [Pydantic fuer Datenvalidierung](theorie/pydantic.md) | :material-check: | 10min |
| 5 | [Async Programming fuer API-Calls](theorie/async-programming.md) | :material-check: | 15min |
| 6 | [Logging statt print()](theorie/logging.md) | :material-check: | 10min |
| 7 | [LLM-SDK-Patterns](theorie/llm-sdk-patterns.md) | :material-check: | 15min |
| 8 | [CLI-Tools mit Click oder Typer](theorie/cli-tools.md) | :material-check: | 10min |
| 9 | [dotenv fuer Secrets](theorie/dotenv-secrets.md) | :material-check: | 10min |
| 10 | [Testing-Basics: pytest](theorie/testing-pytest.md) | :material-check: | 10min |

## Praxis: Hauptprojekt -- CLI-Tool fuer taegliche Aufgabe

- Waehle eine wiederkehrende Aufgabe aus deinem Alltag (Beispiele: Slack-Nachrichten zusammenfassen, RSS-Feeds curaten, Code-Review-Notizen aus Git-Diff generieren, E-Mails priorisieren).
- Baue ein Python-CLI-Tool mit Typer:
  - Liest Input (Datei, URL, oder von stdin)
  - Ruft LLM-API auf (mit Pydantic-validiertem Schema fuer Output)
  - Schreibt strukturierten Output
  - Hat Type Hints, Logging, Error Handling, `.env`-basierte Secrets
- Bonus: einfache Tests mit pytest fuer die nicht-KI-Logik.
- Code im Portfolio mit README, das Installation und Nutzung erklaert.

## Mehrwert-Mini-Projekte

- **Persoenliches Python-Snippets-Repo** -- Sammlung von wiederverwendbaren Funktionen (`call_claude()`, `load_config()`, `chunk_text()`).
- **Daily-Briefing-CLI** -- taeglicher Cron-Job, der dir morgens deine Top-Tasks aus mehreren Quellen aggregiert.
- **PDF-Bulk-Processor** -- CLI, das einen Ordner voller PDFs durch ein LLM jagt und strukturierte Outputs erzeugt.

## Open-Source-Pfad

- Statt Cloud-API: alle Beispiele mit Ollama lokal ueber `ollama-python` Library oder ueber OpenAI-kompatible Endpoints (Ollama bietet das nativ).
- [LiteLLM lokal](https://docs.litellm.ai) als einheitlicher Endpunkt -- derselbe Code funktioniert fuer Ollama, OpenAI, Anthropic.
- Fuer Vibe-Coding-Workflow: [Aider](https://aider.chat) als Open-Source-Alternative zu Cursor, laeuft im Terminal.

## Outcome-Check

- [ ] CLI-Tool im Portfolio, lauffaehig auf deinem Rechner
- [ ] Code nutzt Type Hints, Pydantic, Logging, dotenv
- [ ] README erklaert Installation und Nutzung
- [ ] Optional: Tests mit pytest
- [ ] Optional: Snippets-Repo fuer wiederverwendbare Code-Bausteine
- [ ] Du kannst LLM-APIs (Cloud oder lokal) aus Python heraus aufrufen
