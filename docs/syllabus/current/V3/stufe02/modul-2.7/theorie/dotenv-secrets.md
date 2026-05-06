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

API-Keys im Code sind wie der Haustürschlüssel unter der Fußmatte: jeder, der den Code sieht, hat Zugang. Eine `.env`-Datei hält Secrets außerhalb des Codes, und `.gitignore` sorgt dafür, dass sie nie in Git landen. Einfache Regel: kein Secret darf jemals in einer Code-Datei stehen.

## Im Detail

### Das Problem: Secrets im Code

```python
# NIEMALS SO!
client = Anthropic(api_key="sk-ant-api03-ECHTES-SECRET-12345")
```

Was passiert, wenn du das committest:

1. **Secret auf GitHub:** Bots scannen GitHub nach API-Keys -- innerhalb von Minuten wird dein Key gefunden und missbraucht
2. **Kosten:** Jemand nutzt deinen Key für Millionen Token -- du zahlst die Rechnung
3. **Nicht rückgängig:** Auch wenn du den Commit löschst, bleibt er in der Git-Historie

### Die Lösung: .env + python-dotenv

**Schritt 1: .env-Datei erstellen**

```bash
# .env (diese Datei NICHT in Git committen!)
ANTHROPIC_API_KEY=sk-ant-api03-xxx
OPENAI_API_KEY=sk-xxx
DEFAULT_MODEL=claude-sonnet-4-6-20250514
MAX_TOKENS=1024
```

**Schritt 2: .gitignore aktualisieren**

```bash
# .gitignore
.env
.env.local
.env.*.local
```

**Schritt 3: .env.example committen**

```bash
# .env.example (diese Datei wird committed -- mit Dummy-Werten)
ANTHROPIC_API_KEY=sk-ant-api03-dein-key-hier
OPENAI_API_KEY=sk-dein-key-hier
DEFAULT_MODEL=claude-sonnet-4-6-20250514
MAX_TOKENS=1024
```

**Schritt 4: In Python laden**

```python
from dotenv import load_dotenv
import os

# .env-Datei laden
load_dotenv()

# Secrets auslesen
api_key = os.getenv("ANTHROPIC_API_KEY")
model = os.getenv("DEFAULT_MODEL", "claude-haiku-4-5-20250514")  # mit Default
max_tokens = int(os.getenv("MAX_TOKENS", "1024"))
```

### Automatisches Laden durch SDKs

Die meisten KI-SDKs lesen API-Keys automatisch aus Environment-Variablen:

```python
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()  # Lädt .env in die Umgebungsvariablen

# Anthropic SDK liest ANTHROPIC_API_KEY automatisch
client = Anthropic()  # Kein api_key= Parameter nötig!

# OpenAI SDK liest OPENAI_API_KEY automatisch
from openai import OpenAI
client = OpenAI()  # Kein api_key= Parameter nötig!
```

Du brauchst also oft nur `load_dotenv()` am Anfang deines Scripts -- den Rest erledigen die SDKs.

### Pydantic Settings -- Der professionelle Weg

Für Projekte mit vielen Config-Werten ist `pydantic-settings` die bessere Alternative zu manuellen `os.getenv()`-Aufrufen:

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    anthropic_api_key: str
    openai_api_key: str = ""
    default_model: str = "claude-sonnet-4-6-20250514"
    max_tokens: int = 1024
    verbose: bool = False

    class Config:
        env_file = ".env"

# Automatisch validiert und typisiert
settings = Settings()
print(settings.default_model)   # "claude-sonnet-4-6-20250514"
print(settings.max_tokens)      # 1024 (als int, nicht str!)

# Fehler, wenn ANTHROPIC_API_KEY fehlt:
# ValidationError: anthropic_api_key field required
```

Vorteile gegenüber `os.getenv()`:

- **Typ-Validierung:** `max_tokens` ist automatisch ein `int`, nicht ein `str`
- **Pflichtfelder:** Fehlt ein Pflichtfeld, gibt es sofort einen Fehler (statt `None` zur Laufzeit)
- **Defaults:** Sinnvolle Standardwerte direkt im Modell
- **Autocomplete:** Dein Editor kennt alle Settings-Felder

### Die Pflichtregeln

1. **`.env` in `.gitignore`** -- immer, sofort, ohne Ausnahme. Vor dem ersten Commit.
2. **`.env.example` committen** -- damit andere wissen, welche Variablen nötig sind
3. **Nie Secrets in Code, Notebooks oder Commit-Messages** -- auch nicht "nur kurz zum Testen"
4. **In Production: direkte Environment-Variablen** -- Docker `ENV`, Cloud-Plattform Secrets, CI/CD Variables. Keine `.env`-Dateien auf Production-Servern.
5. **Key rotieren, wenn kompromittiert** -- wenn ein Key versehentlich committed wurde: sofort neuen Key generieren, alten invalidieren

### Häufige Fehler

```python
# FEHLER 1: load_dotenv() vergessen
api_key = os.getenv("ANTHROPIC_API_KEY")  # None, weil .env nicht geladen

# FEHLER 2: .env nicht in .gitignore
# -> Secret landet auf GitHub

# FEHLER 3: Falscher Variablenname
api_key = os.getenv("ANTRHOPIC_API_KEY")  # Typo! -> None

# FEHLER 4: .env in einem Subdirectory
# load_dotenv() sucht standardmäßig im aktuellen Verzeichnis
# Lösung: load_dotenv(Path(__file__).parent / ".env")
```

### Vollständiges Beispiel

```python
"""Mein KI-CLI-Tool mit sauberer Secret-Verwaltung."""

from pathlib import Path
from dotenv import load_dotenv
from anthropic import Anthropic
import typer

# .env laden (relativ zum Script)
load_dotenv(Path(__file__).parent / ".env")

client = Anthropic()  # API-Key kommt aus Environment
app = typer.Typer()

@app.command()
def ask(question: str, model: str = "claude-haiku-4-5-20250514"):
    """Stelle eine Frage an Claude."""
    message = client.messages.create(
        model=model,
        max_tokens=512,
        messages=[{"role": "user", "content": question}],
    )
    typer.echo(message.content[0].text)

if __name__ == "__main__":
    app()
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [python-dotenv](https://github.com/theskumar/python-dotenv) | Standard-Library für .env-Dateien |
| :hammer_and_wrench: | [pydantic-settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) | Typisierte Settings mit .env-Support |
| :book: | [GitHub -- Removing Sensitive Data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) | Was tun, wenn ein Secret committed wurde |

## Teste dein Verständnis

- [ ] Erstelle eine `.env`-Datei mit deinem API-Key, eine `.env.example` mit Dummy-Werten, und stelle sicher, dass `.env` in deiner `.gitignore` steht.
- [ ] Schreibe ein Script, das `load_dotenv()` nutzt und einen API-Call macht, ohne den Key im Code zu haben.
- [ ] Was passiert, wenn du versehentlich einen API-Key auf GitHub pushst? Welche Schritte musst du sofort unternehmen?
