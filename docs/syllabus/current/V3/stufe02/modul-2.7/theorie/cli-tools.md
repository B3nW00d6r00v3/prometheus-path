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

### Warum CLI-Tools?

```python
# VORHER: hardcodierte Werte
input_file = "bericht.pdf"
model = "claude-sonnet-4-6-20250514"
output_file = "summary.md"
```

Jedes Mal den Code ändern, wenn du eine andere Datei verarbeiten willst? Das skaliert nicht.

```bash
# NACHHER: flexibles CLI-Tool
python summarize.py --input bericht.pdf --model haiku --output summary.md
python summarize.py --input report.pdf --model sonnet --verbose
python summarize.py --help  # Zeigt alle Optionen
```

### Typer -- Der moderne Standard

Typer generiert CLI-Interfaces automatisch aus deinen Funktionssignaturen und Type Hints:

```python
# summarize.py
import typer
from anthropic import Anthropic
from pathlib import Path

app = typer.Typer()
client = Anthropic()

@app.command()
def summarize(
    input_file: Path,
    model: str = "claude-haiku-4-5-20250514",
    max_tokens: int = 512,
    output: Path | None = None,
    verbose: bool = False,
):
    """Fasst ein Dokument mit einem LLM zusammen."""
    # Datei lesen
    text = input_file.read_text(encoding="utf-8")

    if verbose:
        typer.echo(f"Verarbeite {input_file} ({len(text)} Zeichen)")
        typer.echo(f"Modell: {model}")

    # LLM aufrufen
    message = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        messages=[{"role": "user", "content": f"Fasse zusammen:\n\n{text}"}],
    )
    summary = message.content[0].text

    # Ausgabe
    if output:
        output.write_text(summary, encoding="utf-8")
        typer.echo(f"Zusammenfassung gespeichert: {output}")
    else:
        typer.echo(summary)

if __name__ == "__main__":
    app()
```

**Was Typer automatisch macht:**

- `--help` generieren mit Beschreibungen
- Argument-Parsing und Typ-Validierung
- Fehlermeldungen bei falschen Argumenten
- Tab-Completion (optional installierbar)

```bash
# Nutzung
python summarize.py bericht.pdf
python summarize.py bericht.pdf --model claude-sonnet-4-6-20250514 --verbose
python summarize.py bericht.pdf --output zusammenfassung.md
python summarize.py --help
```

### Mehrere Befehle (Sub-Commands)

Für Tools mit mehreren Funktionen:

```python
import typer

app = typer.Typer(help="KI-Werkzeugkasten für den Alltag")

@app.command()
def summarize(input_file: str, model: str = "haiku"):
    """Fasst ein Dokument zusammen."""
    typer.echo(f"Zusammenfassung von {input_file}...")

@app.command()
def translate(input_file: str, target_lang: str = "en"):
    """Übersetzt ein Dokument."""
    typer.echo(f"Übersetze {input_file} nach {target_lang}...")

@app.command()
def classify(input_file: str):
    """Klassifiziert ein Dokument nach Kategorie."""
    typer.echo(f"Klassifiziere {input_file}...")

if __name__ == "__main__":
    app()
```

```bash
python tool.py summarize bericht.pdf
python tool.py translate bericht.pdf --target-lang fr
python tool.py classify bericht.pdf
python tool.py --help  # Zeigt alle verfügbaren Befehle
```

### Rich-Output mit Typer

Typer integriert sich mit [Rich](https://rich.readthedocs.io) für schöne Terminal-Ausgabe:

```python
import typer
from rich.console import Console
from rich.progress import track
from rich.table import Table

console = Console()

@app.command()
def batch(input_dir: str):
    """Verarbeitet alle Dateien in einem Verzeichnis."""
    files = list(Path(input_dir).glob("*.txt"))

    # Fortschrittsbalken
    results = []
    for file in track(files, description="Verarbeite..."):
        result = process_file(file)
        results.append(result)

    # Schöne Tabelle
    table = Table(title="Ergebnisse")
    table.add_column("Datei")
    table.add_column("Status")
    table.add_column("Tokens")

    for r in results:
        table.add_row(r["file"], r["status"], str(r["tokens"]))

    console.print(table)
```

### Click -- Die Alternative

Click ist älter, aber mächtiger für komplexe CLI-Apps. Typer baut intern auf Click auf.

```python
import click

@click.command()
@click.argument("input_file")
@click.option("--model", default="haiku", help="LLM-Modell")
@click.option("--verbose", is_flag=True, help="Ausführliche Ausgabe")
def summarize(input_file: str, model: str, verbose: bool):
    """Fasst ein Dokument zusammen."""
    if verbose:
        click.echo(f"Verarbeite {input_file} mit {model}")

if __name__ == "__main__":
    summarize()
```

**Typer vs. Click:**

| Feature | Typer | Click |
|---------|-------|-------|
| Type-Hint-basiert | Ja | Nein (Decorators) |
| Boilerplate | Wenig | Mehr |
| Autocomplete | Built-in | Plugin |
| Lernkurve | Flach | Mittel |
| Empfehlung | Für neue Projekte | Für Legacy-Code |

### Typische Argumente für KI-CLI-Tools

| Argument | Typ | Beschreibung |
|----------|-----|-------------|
| `--input` / `-i` | Path | Eingabedatei oder -verzeichnis |
| `--output` / `-o` | Path | Ausgabedatei |
| `--model` / `-m` | str | Modellauswahl (haiku, sonnet, opus) |
| `--max-tokens` | int | Maximale Ausgabelänge |
| `--temperature` | float | Kreativität (0.0 = deterministisch) |
| `--verbose` / `-v` | bool | Debug-Ausgabe |
| `--format` | str | Ausgabeformat (text, json, markdown) |
| `--dry-run` | bool | Zeige was passieren würde, ohne API-Call |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Typer Docs](https://typer.tiangolo.com) | Moderne CLI-Library |
| :book: | [Click Docs](https://click.palletsprojects.com) | Klassiker, mächtig |
| :hammer_and_wrench: | [Rich](https://rich.readthedocs.io) | Schöne Terminal-Ausgabe |

## Teste dein Verständnis

- [ ] Baue ein einfaches CLI-Tool mit Typer, das eine Textdatei einliest und durch ein LLM zusammenfassen lässt. Nutze `--model` und `--verbose` als Optionen.
- [ ] Erkläre, warum ein CLI-Interface besser ist als hardcodierte Werte im Code.
- [ ] Was ist der Unterschied zwischen einem Argument (positional) und einer Option (`--flag`) in Typer?
