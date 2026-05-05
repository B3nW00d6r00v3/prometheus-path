---
title: "Ollama für lokale LLMs"
module: "1.1"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-08"
---

# Ollama für lokale LLMs

## Kernidee

Ollama ist wie ein lokaler App-Store für KI-Modelle — du lädst ein Modell herunter und kannst es sofort auf deinem eigenen Rechner befragen, ohne Internet, ohne API-Kosten, ohne Datenschutz-Bedenken. Die Modelle sind kleiner als die Cloud-Giganten, aber für Lernen und Experimentieren perfekt.

## Im Detail

Ollama läuft auf Mac, Linux und Windows und ermöglicht OSS-First-Workflows. Du kannst mehrere Modelle gleichzeitig installiert haben und per Kommandozeile oder Python-API ansprechen.

**Empfohlene Einsteiger-Modelle (Mai 2026):**

| Modell | RAM | Stärke |
|--------|-----|--------|
| `llama3.2:3b` | 4 GB | Klein, schnell, für schwache Hardware |
| `qwen2.5:7b` | 16 GB | Stärker, guter Allrounder |
| `gemma3:4b` | 8 GB | Gute deutsche Sprache |

**Schnellstart:**

```bash
# Installieren
curl -fsSL https://ollama.com/install.sh | sh

# Modell laden und chatten
ollama run llama3.2:3b

# In Python nutzen
pip install ollama
```

```python
import ollama
response = ollama.chat(model='llama3.2:3b', messages=[
    {'role': 'user', 'content': 'Was ist Machine Learning in einem Satz?'}
])
print(response['message']['content'])
```

**Hinweis:** Aktuelle Modell-Empfehlungen ändern sich schnell — prüfe die Library vor dem Download.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Ollama](https://ollama.com) | Download & Installation |
| 📖 Library | [Ollama Modell-Library](https://ollama.com/library) | Aktuelle Modelle durchstöbern |
| 🛠️ Python | [ollama-python](https://github.com/ollama/ollama-python) | Python-Integration |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum lokale Modelle trotz geringerer Qualität nützlich sind?
- [ ] Läuft `ollama run llama3.2:3b` auf deinem Rechner?
- [ ] Weißt du, wie viel RAM dein gewähltes Modell braucht?
