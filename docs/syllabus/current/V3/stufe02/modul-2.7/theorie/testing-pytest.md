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

Tests fuer KI-Code sind tricky: LLM-Outputs sind nicht-deterministisch, also kannst du nicht testen "die Antwort ist exakt X". Aber alles *um* das LLM herum -- Daten-Parsing, Pipelines, Tool-Funktionen, Input-Validierung -- ist deterministisch und testbar. Teste das, was du testen kannst, und baue dir Vertrauen in deinen Code auf.

## Im Detail

Tests fuer KI-Code sind anders als klassisch (LLM-Outputs sind nicht-deterministisch). Aber Tests fuer die nicht-KI-Logik sind Standard und wichtig:

**Was du testen kannst:**
- Daten-Parsing (JSON -> Pydantic-Modell)
- Pipeline-Logik (wenn Input X, dann Schritt Y)
- Tool-Funktionen (Datenbank-Queries, File-Handling)
- Input-Validierung (ungueltige Inputs werden abgefangen)
- Error Handling (was passiert bei API-Timeout?)

**pytest Grundmuster:**

```python
# test_parser.py
from my_app.parser import parse_response

def test_parse_valid_json():
    result = parse_response('{"summary": "Test", "score": 0.9}')
    assert result.summary == "Test"
    assert result.score == 0.9

def test_parse_invalid_json():
    with pytest.raises(ValueError):
        parse_response("not json")
```

`pytest` findet und fuehrt automatisch alle Funktionen aus, die mit `test_` beginnen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Real Python — pytest](https://realpython.com/pytest-python-testing/) | Praxis-orientierte Einfuehrung |
| :book: | [pytest Docs](https://docs.pytest.org) | Offizielle Dokumentation |

## Teste dein Verstaendnis

- [ ] Kannst du einen einfachen Test mit pytest schreiben?
- [ ] Verstehst du, welche Teile von KI-Code testbar sind und welche nicht?
