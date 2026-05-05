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

Stell dir vor, jedes deiner Projekte hat seinen eigenen Werkzeugkasten -- mit genau den Werkzeugen in genau der Version, die es braucht. Das ist ein Virtual Environment. Ohne es wuerdest du irgendwann erleben, dass Projekt A kaputt geht, weil du für Projekt B eine Library aktualisiert hast. Pflicht-Skill ab Tag 1.

## Im Detail

- **`venv`** -- Pythons eingebautes Tool für virtuelle Umgebungen. `python -m venv .venv` erstellt eine isolierte Python-Umgebung im Projektordner. Aktivieren, Pakete installieren, fertig.
- **`uv`** -- moderne, schnelle Alternative (von Astral, den Machern von Ruff). Installiert Pakete 10-100x schneller als pip. 2026 zunehmend Standard. Ersetzt venv + pip in einem Tool.
- **`pip`** -- der klassische Paketmanager. `pip install anthropic` installiert das Anthropic SDK. Immer noch Standard, wird aber zunehmend von uv abgeloest.
- **`requirements.txt`** -- listet alle Abhaengigkeiten mit Versionen. `pip freeze > requirements.txt` erzeugt die Datei, `pip install -r requirements.txt` reproduziert die Umgebung.
- **`pyproject.toml`** -- moderner Nachfolger von requirements.txt, konfiguriert das gesamte Projekt (Dependencies, Build, Tools) in einer Datei.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [uv Documentation](https://docs.astral.sh/uv/) | Modernes Package Management |
| :book: | [Real Python — Virtualenv](https://realpython.com/python-virtual-environments-a-primer/) | Klassische venv-Erklärung |

## Teste dein Verständnis

- [ ] Kannst du ein Virtual Environment erstellen und aktivieren?
- [ ] Weißt du, warum du nie Pakete global installieren solltest?
