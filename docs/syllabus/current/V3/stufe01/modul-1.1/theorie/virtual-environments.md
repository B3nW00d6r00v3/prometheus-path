---
title: "Virtual Environments"
module: "1.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Virtual Environments

## Kernidee

Stell dir vor, du hast zwei Projekte: eines braucht LangChain 0.2, das andere LangChain 0.3. Ohne Virtual Environments kollidieren sie — ein Projekt geht kaputt. Ein Virtual Environment ist wie ein eigener Raum pro Projekt: jedes hat seine eigenen Libraries in der richtigen Version, komplett isoliert vom Rest.

## Im Detail

Virtual Environments sind Pflicht — sonst kollidieren Library-Versionen über Projekte hinweg. Zwei Optionen:

**`venv` (Standard, in Python integriert):**

```bash
python -m venv .venv
source .venv/bin/activate    # Mac/Linux
.venv\Scripts\activate       # Windows
pip install langchain anthropic
```

**`uv` (modern, deutlich schneller):**

```bash
pip install uv
uv venv
source .venv/bin/activate
uv pip install langchain anthropic
```

`uv` ist 10-100x schneller als `pip` und wird zunehmend Standard in der Python-KI-Community. Für Einsteiger funktioniert `venv` genauso — `uv` ist ein Komfort-Upgrade.

**Faustregel:** Jedes neue Projekt → neues Virtual Environment. Nie global installieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Tutorial | [Real Python — Virtual Environments](https://realpython.com/python-virtual-environments-a-primer/) | Umfassende Erklärung |
| 📖 Docs | [uv Documentation](https://docs.astral.sh/uv/) | Moderner Paketmanager |
| 📺 Video | [Fireship — Python Virtual Environments](https://www.youtube.com/results?search_query=fireship+python+virtual+environments) | Schnelle Übersicht |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum man nicht einfach global `pip install` macht?
- [ ] Weißt du, wie du ein venv aktivierst und deaktivierst?
- [ ] Verstehst du den Unterschied zwischen `venv` und `uv`?
