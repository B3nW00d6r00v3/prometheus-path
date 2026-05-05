# Stufe 4: Programmier-Foundation

**Aufwand gesamt:** 🔧 30-50h · 🧮 30-50h · 💼 0-15h (optional)
**Voraussetzungen:** Stufe 3 abgeschlossen
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Diese Stufe ist eine **optionale Vertiefung** für 🔧 und 🧮, die in Modul 2.7 nicht genug Python gelernt haben oder ihre Skills für Stufe 5 (RAG, Frameworks) auf Production-Niveau bringen wollen. Wer sich in 2.7 sicher fühlt, kann diese Stufe überspringen. Wer 💼-Track ist, braucht sie meist nicht — Konzeptverständnis aus 2.7 reicht.

**Ergebnis nach Stufe 4:**
- Du schreibst sauberen, testbaren Python-Code für KI-Anwendungen.
- Du baust kleine FastAPI-Services für deine eigenen LLM-Funktionen.
- Du verstehst Async, Type Hints, Pydantic, Logging auf Production-Niveau.

---

## Modul 4.1: Python-Vertiefung für KI

Aufbauend auf Modul 2.7 vertiefst du hier die Themen, die für Stufe 5 (RAG-Pipelines, Frameworks) und Stufe 6 (Agenten) Pflicht sind: saubere Datenklassen mit Pydantic, Async-Programmierung für API-Calls, Logging und Error Handling, einfache Web-Services mit FastAPI, Tests für KI-Code. Wer die Outcome-Schwellen in 2.7 nicht erreicht hat, sollte diese Stufe nicht überspringen.

**Aufwand:** 🔧 30-50h · 🧮 30-50h · 💼 0-15h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 2.7

### Lernziel
Du baust einen kleinen FastAPI-Service mit LLM-Funktion, vollständiger Pydantic-Validierung, Async-Pattern, Logging, und mindestens einem Test. Du verstehst, wann KI-Code testbar ist und wann nicht.

### Theorie

- 🟢 **Pydantic v2 in der Tiefe** — BaseModel, Field-Validators, computed fields, Config-Optionen, JSON-Schema-Generierung. Pydantic ist 2026 Standard für jede Datenstruktur in KI-Code: API-Inputs, LLM-Outputs (Structured Outputs), Tool-Definitionen, Settings. [Pydantic Docs](https://docs.pydantic.dev) · [Pydantic v2 Migration Guide](https://docs.pydantic.dev/latest/migration/)

- 🟢 **Async/await in der Praxis** — `asyncio.gather()` für parallele API-Calls, `aiohttp` und `httpx` als async-fähige HTTP-Clients, async-context-manager für Ressourcen-Cleanup. Häufige Falle: vergessen, dass Pydantic-Methoden synchron sind und in async-Funktionen blocking werden. [Real Python — Async IO](https://realpython.com/async-io-python/) · [httpx Docs](https://www.python-httpx.org)

- 🟢 **Strukturiertes Logging** — `logging` mit JSON-Formatter für maschinen-lesbare Logs, oder Loguru für simpler Setup. Log-Levels (DEBUG, INFO, WARNING, ERROR) sinnvoll setzen. **Niemals API-Keys oder personenbezogene Daten ins Log**. [Loguru](https://github.com/Delgan/loguru) · [Python Logging HOWTO](https://docs.python.org/3/howto/logging.html)

- 🟢 **Error Handling für LLM-APIs** — typische Fehler: Rate Limits (429), Server-Fehler (5xx), Timeouts, Token-Limit-Überschreitungen, Content-Policy-Verstöße. Retry-Logik mit Exponential Backoff (Library: `tenacity`), Circuit-Breaker für persistente Ausfälle. [tenacity](https://github.com/jd/tenacity) · [Anthropic — Error Handling](https://docs.claude.com/en/api/errors)

- 🟢 **FastAPI für KI-Services** — moderner Python-Web-Framework, async-native, Pydantic-integriert, automatische OpenAPI-Doku. Mit ~50 Zeilen Code hast du einen lauffähigen LLM-Service mit API-Doku. [FastAPI Docs](https://fastapi.tiangolo.com) · [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/)

- 🟢 **Konfigurations-Management mit Pydantic Settings** — Settings aus `.env`, Environment Variables, Defaults, alles mit Validierung. Saubere Trennung zwischen Code und Config. [Pydantic Settings Docs](https://docs.pydantic.dev/latest/concepts/pydantic_settings/)

- 🟢 **Tests für KI-Code: das harte Problem** — LLM-Outputs sind nicht-deterministisch, also keine Snapshot-Tests. Was funktioniert: (1) Tests für Nicht-LLM-Logik (Parsing, Pipelines, Tool-Funktionen). (2) Mocking von LLM-Calls mit `pytest-mock` oder `respx`. (3) Schema-Tests (LLM-Output passt zur Pydantic-Struktur). (4) Eval-Tests (5-10 Test-Inputs, manueller Schwellenwert). [pytest Docs](https://docs.pytest.org) · [respx für httpx-Mocks](https://lundberg.github.io/respx/)

- 🟢 **Project-Layout und Packaging** — `src/`-Layout, `pyproject.toml` (modern), `__init__.py`, Imports, Module-Struktur. Mit `uv` oder `poetry` als Build-Tool 2026 Standard. [Real Python — pyproject.toml](https://realpython.com/python-pyproject-toml/) · [uv](https://docs.astral.sh/uv/) · [Poetry](https://python-poetry.org)

- 🟢 **Streaming-LLM-Responses** — bei langen Outputs ist Streaming Pflicht für UX. Async-Generator-Pattern in Python, Server-Sent-Events (SSE) für Web-APIs. Alle Provider-SDKs unterstützen Streaming nativ. [OpenAI Streaming](https://platform.openai.com/docs/api-reference/streaming) · [Anthropic Streaming](https://docs.claude.com/en/api/streaming)

- 🟢 **Code-Stil und Linting** — `ruff` als moderner ultraschnel­ler Linter+Formatter (ersetzt black, isort, flake8 in einem Tool), `mypy` für Type-Checks. Automatisierung in pre-commit Hooks. [ruff](https://docs.astral.sh/ruff/) · [pre-commit](https://pre-commit.com)

### Praxis: Hauptprojekt — FastAPI-Service mit LLM-Funktion

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

### 🎁 Mehrwert-Mini-Projekte
- **Persönlicher Python-Toolbox-Repo** mit wiederverwendbaren Funktionen: `call_llm()`, `chunk_text()`, `with_retry()`, `load_settings()`.
- **Eigenes Cookbook** im Stil des Anthropic Cookbook — eigene Notebooks mit Code-Snippets für gelöste Probleme.
- **Pre-commit Setup-Skript** für alle deine Python-Repos: `ruff`, `mypy`, `pre-commit` — automatischer Code-Quality-Check.

### 🌱 Open-Source-Pfad
Komplett mit Ollama als LLM-Backend: deine FastAPI nutzt LiteLLM, das gegen Ollama-Endpoint zeigt. Damit ist dein Service 100% lokal und kostenfrei. Container mit Docker Compose: FastAPI + Ollama in einem Stack — als kompletter OSS-Stack auch self-hostbar auf Raspberry Pi 5 oder kleinem VPS.

### Outcome-Check
- [ ] FastAPI-Service lauffähig auf `localhost`
- [ ] OpenAPI-Doku unter `/docs` automatisch generiert
- [ ] Streaming funktioniert (mit SSE-Test in Browser oder curl)
- [ ] Mindestens 3 pytest-Tests grün
- [ ] Logging strukturiert, keine PII-Lecks
- [ ] README mit `uv`-Installation und Run-Anleitung

---

## Free-Zertifikate für Stufe 4

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/) | FastAPI | ~10h | Während 4.1 |
| [DLAI — Building Generative AI Apps with Gradio](https://learn.deeplearning.ai) | DeepLearning.AI | ~2h | Alternative für UI |
| [Pydantic Tutorial](https://docs.pydantic.dev/latest/tutorial/) | Pydantic | ~3h | Wenn Pydantic neu |

---

## Stufen-Outcome

Nach Stufe 4 hast du:
- ✅ Lauffähigen FastAPI-Service mit LLM-Funktion
- ✅ Sauberen Python-Code mit Type Hints, Pydantic, Async, Logging
- ✅ Tests für KI-Code (so weit testbar)
- ✅ Verständnis für Production-Patterns (Retry, Error Handling, Streaming)

**Du bist bereit für Stufe 5: Anwendungen bauen — wo all das angewendet wird.**

---