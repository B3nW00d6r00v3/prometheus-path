---
title: "Python 3.11+ Setup"
module: "1.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Python 3.11+ Setup

## Kernidee

Python ist die Sprache der KI-Welt — praktisch jede relevante Library (LangChain, Transformers, PyTorch) läuft auf Python. Du brauchst mindestens Version 3.11, weil neuere Libraries ältere Versionen nicht mehr unterstützen. Mit einem Versionsmanager wie `pyenv` kannst du mehrere Python-Versionen nebeneinander haben, ohne dass sie sich in die Quere kommen.

## Im Detail

Die meisten KI-Libraries (`transformers`, `langchain`, `openai`, `anthropic`) setzen Python 3.11 voraus. Version 3.10 funktioniert noch für vieles, 3.9 stößt bereits an Grenzen bei aktuellen Paketen.

**Empfehlung:** Installiere [pyenv](https://github.com/pyenv/pyenv) (Mac/Linux) oder [pyenv-win](https://github.com/pyenv-win/pyenv-win) (Windows) für Versionsmanagement. So kannst du pro Projekt eine andere Python-Version pinnen, ohne dein System-Python anzufassen.

**Schnellstart:**

```bash
# pyenv installieren (Mac/Linux)
curl https://pyenv.run | bash

# Python 3.12 installieren
pyenv install 3.12
pyenv global 3.12

# Prüfen
python --version  # → Python 3.12.x
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Tutorial | [Real Python — Installing Python](https://realpython.com/installing-python/) | Schritt-für-Schritt für alle OS |
| 🛠️ Tool | [pyenv](https://github.com/pyenv/pyenv) | Versionsmanager (Mac/Linux) |
| 🛠️ Tool | [pyenv-win](https://github.com/pyenv-win/pyenv-win) | Versionsmanager (Windows) |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum 3.11+ und nicht 3.9?
- [ ] Weißt du, was `pyenv` anders macht als einfach Python zu installieren?
- [ ] `python3 --version` zeigt 3.11+ auf deinem System?
