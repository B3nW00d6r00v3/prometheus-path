---
title: "Project-Layout und Packaging"
module: "4.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Project-Layout und Packaging

## Kernidee

Ein sauberes Projekt-Layout ist die Basis für testbaren, wartbaren Code. Das `src/`-Layout verhindert Import-Probleme, `pyproject.toml` ersetzt `setup.py` und `requirements.txt`, und `uv` macht Dependency-Management schnell und reproduzierbar. Wer nach diesem Standard aufbaut, vermeidet 80% der "bei mir funktioniert's"-Probleme im Team.

## Im Detail

**Empfohlenes Projekt-Layout für KI-Services:**

```
mein-llm-service/
├── src/
│   └── mein_service/
│       ├── __init__.py
│       ├── main.py          # FastAPI app
│       ├── models.py        # Pydantic-Schemas
│       ├── services/
│       │   ├── __init__.py
│       │   └── llm.py       # LLM-Call-Logik
│       └── config.py        # Pydantic Settings
├── tests/
│   ├── conftest.py          # pytest-Fixtures
│   ├── test_api.py
│   └── test_services.py
├── pyproject.toml
├── .env.example             # Vorlage (kein echter Key!)
├── .gitignore
└── README.md
```

**`pyproject.toml`** — der moderne Standard (ersetzt `setup.py` + `requirements.txt`):

```toml
[project]
name = "mein-llm-service"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
    "fastapi>=0.115",
    "pydantic>=2.0",
    "pydantic-settings>=2.0",
    "httpx>=0.27",
    "loguru>=0.7",
    "tenacity>=8.0",
    "uvicorn[standard]>=0.30",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0",
    "pytest-anyio>=0.0.0",
    "respx>=0.21",
    "ruff>=0.4",
    "mypy>=1.10",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.ruff]
line-length = 88
target-version = "py311"

[tool.mypy]
python_version = "3.11"
strict = true
```

**`uv` als Build-Tool** — 2026 der Standard, weil es viel schneller ist als pip:

```bash
# Neues Projekt anlegen
uv init mein-llm-service
cd mein-llm-service

# Abhängigkeiten installieren
uv add fastapi pydantic httpx loguru tenacity uvicorn
uv add --dev pytest ruff mypy

# Service starten
uv run uvicorn src.mein_service.main:app --reload

# Tests ausführen
uv run pytest

# Linting
uv run ruff check .
```

**Warum `src/`-Layout?** Ohne `src/` kann `import mein_service` sowohl das installierte Paket als auch den lokalen Ordner meinen — das führt zu schwer nachvollziehbaren Bugs. Mit `src/` ist der Import immer eindeutig.

**`poetry` als Alternative** zu `uv` — älterer Standard, weiter verbreitet in bestehenden Projekten, aber langsamer. Für neue Projekte: `uv`.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Real Python — pyproject.toml](https://realpython.com/python-pyproject-toml/) | Modernes Python-Packaging erklärt |
| 📖 | [uv](https://docs.astral.sh/uv/) | Offizielle Dokumentation |
| 📖 | [Poetry](https://python-poetry.org) | Alternative zu uv |
| 📖 | [Hatch — src Layout](https://hatch.pypa.io/latest/build/#src-layout) | Warum src/-Layout |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum das `src/`-Layout Import-Probleme verhindert?
- [ ] Weißt du, welche Felder in `pyproject.toml` Pflicht sind?
- [ ] Kannst du den Unterschied zwischen `dependencies` und `optional-dependencies` erklären?
- [ ] Weißt du, wie du mit `uv` eine neue Abhängigkeit zu einem Projekt hinzufügst?
