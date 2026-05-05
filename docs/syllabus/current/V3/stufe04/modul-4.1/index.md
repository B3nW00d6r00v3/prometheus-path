---
title: "Modul 4.1: Python-Vertiefung für KI"
module: "4.1"
type: index
fast_track: true
effort: "30-50h"
---

# Modul 4.1: Python-Vertiefung für KI

Aufbauend auf Modul 2.7 vertiefst du hier die Themen, die für Stufe 5 (RAG-Pipelines, Frameworks) und Stufe 6 (Agenten) Pflicht sind: saubere Datenklassen mit Pydantic, Async-Programmierung für API-Calls, Logging und Error Handling, einfache Web-Services mit FastAPI, Tests für KI-Code. Wer die Outcome-Schwellen in 2.7 nicht erreicht hat, sollte diese Stufe nicht überspringen — und für 🔧 ist sie Pflicht.

**Aufwand:** 🔧 30-50h *(Pflicht vor Stufe 5)* · 🧮 30-50h · 💼 0-15h  
**Voraussetzungen:** Modul 2.7

## Lernziel

Du baust einen kleinen FastAPI-Service mit LLM-Funktion, vollständiger Pydantic-Validierung, Async-Pattern, Logging, und mindestens einem Test. Du verstehst, wann KI-Code testbar ist und wann nicht.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Pydantic v2 in der Tiefe](theorie/pydantic-v2.md) | ✅ | 20min |
| 2 | [Async/await in der Praxis](theorie/async-await.md) | ✅ | 20min |
| 3 | [Strukturiertes Logging](theorie/strukturiertes-logging.md) | ✅ | 15min |
| 4 | [Error Handling für LLM-APIs](theorie/error-handling.md) | ✅ | 20min |
| 5 | [FastAPI für KI-Services](theorie/fastapi.md) | ✅ | 20min |
| 6 | [Konfigurations-Management mit Pydantic Settings](theorie/pydantic-settings.md) | ✅ | 10min |
| 7 | [Tests für KI-Code: das harte Problem](theorie/tests-ki-code.md) | ✅ | 20min |
| 8 | [Project-Layout und Packaging](theorie/project-layout.md) | ✅ | 15min |
| 9 | [Streaming-LLM-Responses](theorie/streaming.md) | ✅ | 15min |
| 10 | [Code-Stil und Linting](theorie/code-stil-linting.md) | ✅ | 10min |

## Praxis: Hauptprojekt — FastAPI-Service mit LLM-Funktion

Baue einen kleinen API-Service, der eine konkrete Aufgabe löst (z.B. "Text zu Bullet-Points zusammenfassen", "PDF-Inhalt strukturieren", "E-Mail-Klassifikation"):

- **Stack:** FastAPI + Pydantic + httpx (async) + LiteLLM (Provider-Abstraktion) oder direkt Anthropic/OpenAI SDK + Loguru.
- **Endpoints:** mindestens `/process` (POST) und `/health` (GET).
- **Pydantic-Schemas:** sauber für Request, Response, Settings.
- **Async-Pattern:** parallel mehrere Items verarbeiten falls Liste empfangen.
- **Streaming:** mindestens ein Endpoint mit SSE-Streaming.
- **Logging:** strukturiert, alle Anfragen geloggt (ohne PII).
- **Error Handling:** Retry mit Tenacity, sinnvolle HTTP-Statuscodes.
- **Tests:** mindestens drei pytest-Tests (Schema, Mock-LLM-Call, Health).
- **README:** Installation (mit uv), Local-Run, Docker-Optional.
- Im Portfolio: `stufe-4_programmier-foundation/4-1-fastapi-llm-service/`.

## 🎁 Mehrwert-Mini-Projekte

- **Persönlicher Python-Toolbox-Repo** mit wiederverwendbaren Funktionen: `call_llm()`, `chunk_text()`, `with_retry()`, `load_settings()`.
- **Eigenes Cookbook** im Stil des Anthropic Cookbook — eigene Notebooks mit Code-Snippets für gelöste Probleme.
- **Pre-commit Setup-Skript** für alle deine Python-Repos: `ruff`, `mypy`, `pre-commit` — automatischer Code-Quality-Check.

## 🌱 Open-Source-Pfad

Komplett mit Ollama als LLM-Backend: deine FastAPI nutzt LiteLLM, das gegen Ollama-Endpoint zeigt. Damit ist dein Service 100% lokal und kostenfrei. Container mit Docker Compose: FastAPI + Ollama in einem Stack — als kompletter OSS-Stack auch self-hostbar auf Raspberry Pi 5 oder kleinem VPS.

## Outcome-Check

- [ ] FastAPI-Service lauffähig auf `localhost`
- [ ] OpenAPI-Doku unter `/docs` automatisch generiert
- [ ] Streaming funktioniert (mit SSE-Test in Browser oder curl)
- [ ] Mindestens 3 pytest-Tests grün
- [ ] Logging strukturiert, keine PII-Lecks
- [ ] README mit `uv`-Installation und Run-Anleitung
- [ ] **Für 🔧:** Du beantwortest alle Self-Check-Fragen aus der Stufen-Übersicht jetzt mit "ja" (harte Voraussetzung für Stufe 5)
