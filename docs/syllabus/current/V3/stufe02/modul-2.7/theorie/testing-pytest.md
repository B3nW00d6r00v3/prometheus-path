---
title: "Testing-Basics: pytest"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Testing-Basics: pytest

## Kernidee

Tests für KI-Code sind tricky: LLM-Outputs sind nicht-deterministisch, also kannst du nicht testen "die Antwort ist exakt X". Aber alles *um* das LLM herum -- Daten-Parsing, Pipelines, Tool-Funktionen, Input-Validierung -- ist deterministisch und testbar. Teste das, was du testen kannst, und baue dir Vertrauen in deinen Code auf.

## Im Detail

### Was du testen kannst (und was nicht)

**Testbar (deterministisch):**

- Daten-Parsing: JSON → Pydantic-Modell
- Prompt-Formatierung: Werden Prompts korrekt zusammengebaut?
- Pipeline-Logik: Wenn Input X, dann Schritt Y
- Input-Validierung: Werden ungültige Inputs abgefangen?
- Error Handling: Was passiert bei API-Timeout?
- Datenbank-Queries und File-Handling
- Config-Loading und Environment-Setup

**Nicht deterministisch testbar:**

- LLM-Output-Qualität: "Ist die Zusammenfassung gut?"
- Kreative Outputs: "Klingt das natürlich?"
- Exakte Wortlaut-Matches: LLMs antworten nie zweimal identisch

### pytest Grundmuster

```python
# test_parser.py
import pytest
from my_app.parser import parse_response
from my_app.models import ArticleSummary

def test_parse_valid_json():
    """Gültiges JSON wird korrekt geparst."""
    raw = '{"summary": "Python ist toll", "score": 0.9, "tags": ["python"]}'
    result = parse_response(raw)
    assert result.summary == "Python ist toll"
    assert result.score == 0.9
    assert "python" in result.tags

def test_parse_invalid_json():
    """Ungültiges JSON wirft einen Fehler."""
    with pytest.raises(ValueError):
        parse_response("das ist kein JSON")

def test_parse_missing_field():
    """Fehlendes Pflichtfeld wirft ValidationError."""
    from pydantic import ValidationError
    with pytest.raises(ValidationError):
        ArticleSummary(summary="Test")  # score und tags fehlen
```

```bash
# Tests ausführen
pytest                    # Alle Tests im Projekt
pytest test_parser.py     # Nur eine Datei
pytest -v                 # Verbose: zeigt jeden Test einzeln
pytest -x                 # Stoppt beim ersten Fehler
```

### Fixtures -- Setup für Tests

```python
# conftest.py (wird automatisch von pytest geladen)
import pytest
from pathlib import Path

@pytest.fixture
def sample_article() -> str:
    """Ein Beispiel-Artikel zum Testen."""
    return "Python ist eine Programmiersprache, die 1991 von Guido van Rossum..."

@pytest.fixture
def sample_config() -> dict:
    """Eine Beispiel-Konfiguration."""
    return {
        "model": "claude-haiku-4-5-20250514",
        "max_tokens": 256,
        "temperature": 0.0,
    }

@pytest.fixture
def tmp_env(tmp_path: Path) -> Path:
    """Erstellt eine temporäre .env-Datei."""
    env_file = tmp_path / ".env"
    env_file.write_text("ANTHROPIC_API_KEY=test-key\nDEFAULT_MODEL=haiku\n")
    return env_file
```

```python
# test_app.py
def test_format_prompt(sample_article: str):
    """Prompt wird korrekt formatiert."""
    prompt = format_prompt(sample_article, task="summarize")
    assert "Fasse zusammen" in prompt
    assert sample_article in prompt

def test_load_config(tmp_env: Path):
    """Config wird korrekt aus .env geladen."""
    config = load_config(tmp_env)
    assert config["model"] == "haiku"
```

### Parametrisierte Tests

Wenn du dieselbe Logik mit verschiedenen Inputs testen willst:

```python
import pytest

@pytest.mark.parametrize("input_text,expected_lang", [
    ("Hello World", "en"),
    ("Hallo Welt", "de"),
    ("Bonjour le monde", "fr"),
    ("", "unknown"),
])
def test_detect_language(input_text: str, expected_lang: str):
    result = detect_language(input_text)
    assert result == expected_lang
```

### Mocking -- LLM-Calls in Tests ersetzen

Du willst in Tests keine echten API-Calls machen (teuer, langsam, nicht deterministisch). Lösung: Mocking.

```python
from unittest.mock import patch, MagicMock

def test_summarize_article():
    """Zusammenfassung ruft LLM auf und gibt Ergebnis zurück."""
    # Mock-Response erstellen
    mock_message = MagicMock()
    mock_message.content = [MagicMock(text="Das ist die Zusammenfassung.")]
    mock_message.usage.input_tokens = 100
    mock_message.usage.output_tokens = 20

    # Anthropic-Client mocken
    with patch("my_app.summarizer.client") as mock_client:
        mock_client.messages.create.return_value = mock_message

        result = summarize("Ein langer Artikel...")

        assert result == "Das ist die Zusammenfassung."
        # Prüfen, dass der Client korrekt aufgerufen wurde
        mock_client.messages.create.assert_called_once()
```

### Projektstruktur mit Tests

```
mein-ki-tool/
├── my_app/
│   ├── __init__.py
│   ├── main.py
│   ├── parser.py
│   └── models.py
├── tests/
│   ├── conftest.py       # Gemeinsame Fixtures
│   ├── test_parser.py
│   ├── test_models.py
│   └── test_main.py
├── pyproject.toml
└── .env
```

### Minimale pytest-Konfiguration

In `pyproject.toml`:

```toml
[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = "test_*.py"
python_functions = "test_*"
```

### Was du als Minimum testen solltest

Für ein KI-CLI-Tool in Stufe 2 reicht:

1. **Pydantic-Modelle:** Validierung mit gültigen und ungültigen Daten
2. **Prompt-Formatierung:** Werden Prompts korrekt zusammengebaut?
3. **Config-Loading:** Werden .env-Werte korrekt geladen?
4. **Edge Cases:** Leerer Input, sehr langer Input, ungültige Dateien

Das sind ~10-20 Tests und geben dir 80% des Vertrauens in deinen Code.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Real Python -- pytest](https://realpython.com/pytest-python-testing/) | Praxis-orientierte Einführung |
| :book: | [pytest Docs](https://docs.pytest.org) | Offizielle Dokumentation |
| :book: | [Python Mocking Guide](https://realpython.com/python-mock-library/) | Mocking für API-Calls |

## Teste dein Verständnis

- [ ] Schreibe einen Test für ein Pydantic-Modell: gültiger Input soll akzeptiert, ungültiger Input abgelehnt werden.
- [ ] Erkläre, warum du LLM-API-Calls in Tests mocken solltest statt echte Calls zu machen.
- [ ] Führe `pytest -v` auf deinem Projekt aus. Wie viele Tests laufen durch?
