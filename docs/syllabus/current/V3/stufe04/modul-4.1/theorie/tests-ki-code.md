---
title: "Tests für KI-Code: das harte Problem"
module: "4.1"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Tests für KI-Code: das harte Problem

## Kernidee

LLM-Outputs sind nicht-deterministisch — bei gleicher Eingabe kann die Antwort jedes Mal leicht anders sein. Das macht klassische Snapshot-Tests unmöglich. Aber das bedeutet nicht, dass KI-Code untestbar ist. Du testest das, was *determiniert* ist: Datenstrukturen, Pipelines, Tool-Funktionen, API-Schnittstellen — und mockst den LLM-Teil. Tests für KI-Code sind schwieriger, aber nicht unmöglich.

## Im Detail

**Was funktioniert beim Testen von KI-Code:**

**1. Tests für Nicht-LLM-Logik** — alles, was nicht der LLM-Call selbst ist, ist normal testbar:

```python
# test_pipeline.py
def test_chunk_text():
    chunks = chunk_text("Langer Text...", max_tokens=100)
    assert len(chunks) > 0
    assert all(len(c) <= 100 for c in chunks)

def test_parse_llm_response():
    raw = '{"title": "Test", "items": ["A", "B"]}'
    result = parse_structured_response(raw)
    assert result.title == "Test"
    assert len(result.items) == 2
```

**2. Mocking von LLM-Calls** mit `pytest-mock` oder `respx`:

```python
# Mit respx (für httpx-basierte Calls)
import respx
import httpx
import pytest

@pytest.mark.anyio
async def test_process_endpoint(client: httpx.AsyncClient):
    with respx.mock:
        respx.post("https://api.anthropic.com/v1/messages").mock(
            return_value=httpx.Response(200, json={"content": [{"text": "Zusammenfassung"}]})
        )
        response = await client.post("/process", json={"text": "Langer Text"})
        assert response.status_code == 200
        assert "Zusammenfassung" in response.json()["result"]
```

**3. Schema-Tests** — testest, ob der LLM-Output zur Pydantic-Struktur passt:

```python
def test_llm_output_schema():
    # Echter LLM-Call (nur in Integration-Tests, nicht Unit-Tests)
    result = call_llm_structured("Analysiere: Hello World", schema=AnalysisResult)
    assert isinstance(result, AnalysisResult)
    assert result.sentiment in ["positiv", "neutral", "negativ"]
```

**4. Eval-Tests** — 5-10 Test-Inputs, manueller Schwellenwert:

```python
TEST_CASES = [
    {"input": "Das Wetter ist schön", "expected_sentiment": "positiv"},
    {"input": "Es regnet", "expected_sentiment": "neutral"},
]

def test_sentiment_accuracy():
    correct = 0
    for case in TEST_CASES:
        result = classify_sentiment(case["input"])
        if result == case["expected_sentiment"]:
            correct += 1
    accuracy = correct / len(TEST_CASES)
    assert accuracy >= 0.8  # Mindestens 80% korrekt
```

**Health-Tests** — immer testen:

```python
def test_health_endpoint(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"
```

**pytest-Struktur für FastAPI:**

```python
import pytest
from fastapi.testclient import TestClient
from main import app

@pytest.fixture
def client():
    return TestClient(app)
```

**Hinweis:** Modul 5.0 lehrt die echte Eval-Disziplin mit LLM-as-Judge und systematischen Evals. Hier reichen Schema- und Mock-Tests für den Anfang.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [pytest Docs](https://docs.pytest.org) | Offizielle Dokumentation |
| 📖 | [respx für httpx-Mocks](https://lundberg.github.io/respx/) | HTTP-Mocking für httpx |
| 📖 | [pytest-mock](https://pytest-mock.readthedocs.io) | General-Purpose-Mocking |
| 📖 | [FastAPI Testing](https://fastapi.tiangolo.com/tutorial/testing/) | Testing in FastAPI |
| 📖 | [anyio pytest plugin](https://anyio.readthedocs.io/en/stable/testing.html) | Async-Tests in pytest |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Snapshot-Tests bei LLM-Code nicht funktionieren?
- [ ] Kannst du mindestens drei Arten von Tests nennen, die bei KI-Code sinnvoll sind?
- [ ] Weißt du, wie du mit `respx` einen httpx-basierten LLM-Call mockst?
- [ ] Verstehst du den Unterschied zwischen Unit-Tests, Schema-Tests und Eval-Tests?
