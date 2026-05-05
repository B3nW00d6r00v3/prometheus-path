---
title: "CLI-Tools mit Click oder Typer"
module: "2.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# CLI-Tools mit Click oder Typer

## Kernidee

Ein Python-Skript mit hardcodierten Werten ist wie ein Werkzeug, das nur eine Sache kann. Ein CLI-Tool mit Argumenten und Optionen ist wie ein Schweizer Taschenmesser: `python my_tool.py --input bericht.pdf --model haiku --output summary.md`. Typer macht aus deinen Funktionen automatisch CLI-Befehle -- basierend auf den Type Hints, die du sowieso schon schreibst.

## Im Detail

Fuer persoenliche Skripte ist ein CLI-Interface 100x praktischer als hardcoded Argumente. Zwei Libraries:

**Typer** (empfohlen) -- moderner, basiert auf Type Hints:

```python
import typer

def summarize(
    input_file: str,
    model: str = "haiku",
    verbose: bool = False
):
    """Summarize a document using an LLM."""
    ...

if __name__ == "__main__":
    typer.run(summarize)
```

Typer generiert automatisch `--help`, Argument-Parsing, Tab-Completion und Fehlerbehandlung aus deinen Type Hints.

**Click** -- aelter, aber maechtig und weit verbreitet. Typer baut intern auf Click auf.

Fuer KI-CLI-Tools typische Argumente: `--input` (Datei/URL), `--model` (Modellauswahl), `--output` (Ausgabedatei), `--verbose` (Debug-Logging), `--max-tokens` (Cost-Kontrolle).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Typer Docs](https://typer.tiangolo.com) | Moderne CLI-Library |
| :book: | [Click Docs](https://click.palletsprojects.com) | Klassiker, maechtig |

## Teste dein Verstaendnis

- [ ] Kannst du ein einfaches CLI-Tool mit Typer erstellen?
- [ ] Verstehst du, warum CLI-Tools praktischer sind als hardcodierte Skripte?
