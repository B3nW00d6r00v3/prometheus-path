---
title: "Code-Stil und Linting"
module: "4.1"
type: theorie
fast_track: true
effort: "10min"
stability: live
---

# Code-Stil und Linting

## Kernidee

Einheitlicher Code-Stil ist kein Ästhetik-Problem — er macht Diff-Reviews lesbar, verhindert sinnlose Diskussionen, und sorgt dafür, dass du deinen eigenen Code in 6 Monaten noch verstehst. `ruff` ersetzt 2026 `black`, `isort`, und `flake8` in einem einzigen ultraschnellen Tool. `mypy` findet Typ-Fehler, bevor Python sie findet. Automatisiert über pre-commit Hooks, damit niemand formatieren oder prüfen muss.

## Im Detail

**`ruff`** — moderner Linter und Formatter in einem (in Rust geschrieben, deutlich schneller als black/flake8):

```bash
uv add --dev ruff

# Linting
uv run ruff check .

# Linting + Auto-Fix
uv run ruff check --fix .

# Formatting (ersetzt black)
uv run ruff format .
```

Konfiguration in `pyproject.toml`:

```toml
[tool.ruff]
line-length = 88
target-version = "py311"

[tool.ruff.lint]
select = ["E", "F", "I", "UP"]  # pycodestyle, pyflakes, isort, pyupgrade
ignore = ["E501"]  # Zeilenlänge — wird von Formatter gehandelt
```

**`mypy`** für statische Typ-Checks:

```bash
uv add --dev mypy

uv run mypy src/
```

Konfiguration in `pyproject.toml`:

```toml
[tool.mypy]
python_version = "3.11"
strict = true
ignore_missing_imports = true
```

`strict = true` aktiviert alle strikten Checks — für neue Projekte empfohlen, für bestehende Projekte schrittweise einführen.

**pre-commit Hooks** — automatische Ausführung vor jedem Commit:

```bash
uv add --dev pre-commit
```

`.pre-commit-config.yaml`:

```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.4.0
    hooks:
      - id: ruff
        args: [--fix]
      - id: ruff-format
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.10.0
    hooks:
      - id: mypy
        additional_dependencies: [pydantic]
```

```bash
pre-commit install  # Hooks einrichten
pre-commit run --all-files  # Manuell auf allen Dateien ausführen
```

**CI-Integration** — in GitHub Actions:

```yaml
- name: Lint
  run: uv run ruff check . && uv run ruff format --check .

- name: Type Check
  run: uv run mypy src/
```

**Was ruff ersetzt:**
- `black` → `ruff format`
- `isort` → `ruff check --select I`
- `flake8` → `ruff check`
- `pyupgrade` → `ruff check --select UP`

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [ruff](https://docs.astral.sh/ruff/) | Offizielle Dokumentation |
| 📖 | [mypy](https://mypy.readthedocs.io) | Statische Typ-Prüfung |
| 📖 | [pre-commit](https://pre-commit.com) | Git-Hook-Automatisierung |
| 📖 | [ruff — Rules](https://docs.astral.sh/ruff/rules/) | Alle Lint-Regeln erklärt |

## Teste dein Verständnis

- [ ] Weißt du, welche Tools `ruff` ersetzt und warum es schneller ist?
- [ ] Kannst du `ruff` und `mypy` in `pyproject.toml` konfigurieren?
- [ ] Verstehst du, was pre-commit Hooks sind und wie sie eingerichtet werden?
- [ ] Kannst du erklären, was `mypy --strict` bedeutet und welche Checks es aktiviert?
