---
title: "Konfigurations-Management mit Pydantic Settings"
module: "4.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Konfigurations-Management mit Pydantic Settings

## Kernidee

Code und Konfiguration gehören strikt getrennt. API-Keys, Datenbankverbindungen, Timeouts — all das gehört in Umgebungsvariablen oder `.env`-Dateien, niemals in den Code. Pydantic Settings liest diese Konfiguration automatisch ein, validiert sie, und gibt dir ein typisiertes Objekt zurück. Kein manuelles `os.environ.get()`, kein vergessener Default-Wert, keine unvalidierten Strings.

## Im Detail

**Installation:**

```bash
uv add pydantic-settings
```

**Basis-Setup:**

```python
from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    # Pflichtfelder — Fehler wenn nicht gesetzt
    anthropic_api_key: str = Field(..., alias="ANTHROPIC_API_KEY")

    # Felder mit Defaults
    model: str = "claude-opus-4-5"
    max_tokens: int = 2048
    timeout_seconds: float = 30.0
    log_level: str = "INFO"

    # .env-Datei automatisch laden
    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}
```

**`.env`-Datei:**

```bash
ANTHROPIC_API_KEY=sk-ant-...
MODEL=claude-haiku-3-5
LOG_LEVEL=DEBUG
```

**Kein `.env` im Git-Repo.** Immer in `.gitignore`:

```bash
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
```

**In FastAPI mit `lru_cache` einbinden** — Settings werden nur einmal geladen:

```python
from functools import lru_cache
from fastapi import Depends

@lru_cache
def get_settings() -> Settings:
    return Settings()

@app.get("/model")
async def get_model(settings: Settings = Depends(get_settings)):
    return {"model": settings.model}
```

**Verschiedene Umgebungen** (Dev, Staging, Prod):

```python
class Settings(BaseSettings):
    env: str = "development"
    model_config = {
        "env_file": ".env",
        "env_nested_delimiter": "__",
    }

# In Tests: Settings(anthropic_api_key="test-key", env="test")
```

**Secret-Validierung** — sicherstellen, dass der API-Key das richtige Format hat:

```python
from pydantic import field_validator

@field_validator("anthropic_api_key")
@classmethod
def validate_api_key(cls, v: str) -> str:
    if not v.startswith("sk-ant-"):
        raise ValueError("Kein gültiger Anthropic API-Key")
    return v
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Pydantic Settings Docs](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) | Offizielle Dokumentation |
| 📖 | [python-dotenv](https://github.com/theskumar/python-dotenv) | Alternative für einfachere Projekte |
| 📖 | [12factor App — Config](https://12factor.net/config) | Prinzip hinter Env-Var-Konfiguration |

## Teste dein Verständnis

- [ ] Kannst du eine `Settings`-Klasse schreiben, die API-Key und Model aus `.env` lädt?
- [ ] Weißt du, warum `.env`-Dateien niemals ins Git-Repo gehören?
- [ ] Kannst du erklären, warum `lru_cache` bei Settings sinnvoll ist?
- [ ] Verstehst du, wie du Settings in FastAPI per Dependency Injection einbindest?
