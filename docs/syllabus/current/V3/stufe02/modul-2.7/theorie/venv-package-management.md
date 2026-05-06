---
title: "Virtual Environments & Package Management"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Virtual Environments & Package Management

## Kernidee

Stell dir vor, jedes deiner Projekte hat seinen eigenen Werkzeugkasten -- mit genau den Werkzeugen in genau der Version, die es braucht. Das ist ein Virtual Environment. Ohne es würdest du irgendwann erleben, dass Projekt A kaputt geht, weil du für Projekt B eine Library aktualisiert hast. Pflicht-Skill ab Tag 1.

## Im Detail

### Warum Virtual Environments?

Ohne venv installierst du alles global -- jedes Paket teilt sich denselben Raum. Probleme:

- Projekt A braucht `pydantic==2.5`, Projekt B braucht `pydantic==2.9` -- Konflikt
- Du aktualisierst `anthropic` für ein neues Projekt und dein altes Projekt bricht
- Du weißt nicht mehr, welche Pakete zu welchem Projekt gehören

### uv -- Der moderne Standard (2026)

`uv` ist das Tool der Stunde: von Astral (den Machern von Ruff), in Rust geschrieben, 10-100x schneller als pip. Ersetzt venv + pip + pip-tools in einem einzigen Tool.

```bash
# uv installieren
curl -LsSf https://astral.sh/uv/install.sh | sh
# oder auf Windows:
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# Neues Projekt erstellen (erstellt venv + pyproject.toml automatisch)
uv init mein-ki-projekt
cd mein-ki-projekt

# Pakete installieren (erstellt/aktualisiert venv automatisch)
uv add anthropic
uv add pydantic
uv add python-dotenv

# Script ausführen (nutzt automatisch das venv)
uv run python main.py

# Lock-Datei erstellen (exakte Versionen für Reproduzierbarkeit)
uv lock
```

**Warum uv statt pip?**

| Feature | pip + venv | uv |
|---------|-----------|-----|
| Installation von 50 Paketen | ~30 Sekunden | ~1 Sekunde |
| venv erstellen | Separater Schritt | Automatisch |
| Lock-Datei | Manuell (pip-tools) | `uv lock` |
| Python-Version managen | pyenv separat | `uv python install 3.12` |

### venv -- Pythons Bordmittel

Falls du kein uv nutzen willst oder kannst, funktioniert `venv` weiterhin:

```bash
# Virtual Environment erstellen
python -m venv .venv

# Aktivieren (macOS/Linux)
source .venv/bin/activate

# Aktivieren (Windows)
.venv\Scripts\activate

# Pakete installieren
pip install anthropic pydantic python-dotenv

# Pakete einfrieren
pip freeze > requirements.txt

# In anderem Projekt die gleiche Umgebung herstellen
pip install -r requirements.txt

# Deaktivieren
deactivate
```

### pyproject.toml -- Die moderne Konfiguration

`pyproject.toml` ersetzt `requirements.txt`, `setup.py` und `setup.cfg` in einer einzigen Datei:

```toml
[project]
name = "mein-ki-tool"
version = "0.1.0"
description = "Ein KI-CLI-Tool für tägliche Zusammenfassungen"
requires-python = ">=3.11"
dependencies = [
    "anthropic>=0.40.0",
    "pydantic>=2.9",
    "python-dotenv>=1.0",
    "typer>=0.12",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0",
    "mypy>=1.11",
    "ruff>=0.7",
]
```

Mit uv: `uv add anthropic` fügt den Eintrag automatisch in `pyproject.toml` ein.

### Praxis: Dein erstes KI-Projekt aufsetzen

```bash
# 1. Projekt erstellen
uv init mein-erstes-ki-projekt
cd mein-erstes-ki-projekt

# 2. Abhängigkeiten installieren
uv add anthropic python-dotenv

# 3. .env-Datei anlegen (API-Key)
echo "ANTHROPIC_API_KEY=sk-ant-dein-key-hier" > .env

# 4. .gitignore erstellen
echo ".env" > .gitignore
echo ".venv/" >> .gitignore

# 5. Dein erstes Script
uv run python main.py
```

### Die goldenen Regeln

1. **Nie Pakete global installieren** -- immer in einem venv
2. **Ein venv pro Projekt** -- nicht teilen, nicht recyclen
3. **`.venv/` in `.gitignore`** -- das venv wird nicht committed, sondern per `uv sync` oder `pip install -r requirements.txt` reproduziert
4. **Abhängigkeiten versionieren** -- `pyproject.toml` oder `requirements.txt` gehört ins Repository
5. **uv bevorzugen** -- schneller, einfacher, moderner als pip

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [uv Documentation](https://docs.astral.sh/uv/) | Modernes Package Management |
| :book: | [Real Python -- Virtual Environments](https://realpython.com/python-virtual-environments-a-primer/) | Klassische venv-Erklärung |
| :book: | [pyproject.toml Spec](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/) | Offizielle Dokumentation |

## Teste dein Verständnis

- [ ] Erstelle ein neues Projekt mit `uv init`, installiere `anthropic` und `pydantic`, und führe ein Hello-World-Script aus.
- [ ] Erkläre, warum du nie Pakete global installieren solltest -- was kann schiefgehen?
- [ ] Was ist der Unterschied zwischen `requirements.txt` und `pyproject.toml`?
