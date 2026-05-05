---
title: "dotenv für Secrets"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# dotenv für Secrets

## Kernidee

API-Keys im Code sind wie der Haustuer-Schluessel unter der Fussmatte: jeder, der den Code sieht, hat Zugang. Eine `.env`-Datei hält Secrets ausserhalb des Codes, und `.gitignore` sorgt dafür, dass sie nie in Git landen. Einfache Regel: kein Secret darf jemals in einer Code-Datei stehen.

## Im Detail

`.env`-Datei für API-Keys, mit `python-dotenv` ladbar:

```
# .env (diese Datei NICHT in Git committen!)
ANTHROPIC_API_KEY=sk-ant-xxx
OPENAI_API_KEY=sk-xxx
```

```python
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("ANTHROPIC_API_KEY")
```

**Pflichtregeln:**

1. `.env` in `.gitignore` eintragen -- **immer, sofort, ohne Ausnahme**.
2. `.env.example` mit Dummy-Werten committen, damit andere wissen, welche Variablen nötig sind.
3. Niemals Secrets in Code, Notebooks, oder Commit-Messages.
4. In Production: Environment-Variablen direkt setzen (Docker, Cloud-Plattform), nicht `.env`-Dateien.

Die meisten Provider-SDKs (Anthropic, OpenAI) lesen API-Keys automatisch aus Environment-Variablen -- du musst sie oft nicht einmal explizit übergeben.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [python-dotenv](https://github.com/theskumar/python-dotenv) | Standard-Library für .env-Dateien |

## Teste dein Verständnis

- [ ] Hast du `.env` in deiner `.gitignore`?
- [ ] Kannst du erklären, warum Secrets nie in Code gehoeren?
