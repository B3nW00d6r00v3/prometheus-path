---
title: "Cloud-API-Keys"
module: "1.1"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-08"
---

# Cloud-API-Keys

## Kernidee

Cloud-APIs geben dir Zugang zu den stärksten KI-Modellen der Welt (Claude, GPT, Gemini) — Modelle, die zu groß sind, um lokal zu laufen. Du bekommst einen "Schlüssel" (API-Key), mit dem dein Code diese Modelle über das Internet aufrufen kann. Die meisten Anbieter haben einen Free-Tier oder Startguthaben zum Experimentieren.

## Im Detail

Für Frontier-Modell-Vergleiche brauchst du mindestens einen Cloud-API-Key — oder du triffst die bewusste Entscheidung, vorerst nur lokal zu arbeiten (OSS-Pfad).

**Empfehlung (Mai 2026):**

| Anbieter | Free-Tier | Stärke |
|----------|-----------|--------|
| Google AI Studio | Großzügigster Free-Tier | Gemini-Modelle, gut zum Starten |
| Anthropic | $5 Test-Credit | Claude-Modelle, stark bei Reasoning |
| OpenAI | Pay-as-you-go | GPT-Modelle, breites Ökosystem |

**Wichtigste Regel:** API-Keys NIE ins Git committen. Standard-Workflow:

```bash
# .env Datei erstellen (wird nicht committed)
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env

# .gitignore sicherstellen
echo ".env" >> .gitignore
```

```python
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("ANTHROPIC_API_KEY")
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Console | [Anthropic Console](https://console.anthropic.com) | API-Key erstellen |
| 🛠️ Console | [OpenAI Platform](https://platform.openai.com) | API-Key erstellen |
| 🛠️ Console | [Google AI Studio](https://aistudio.google.com) | Free-Tier, sofort starten |
| 📖 Library | [python-dotenv](https://pypi.org/project/python-dotenv/) | .env-Dateien laden |

## Teste dein Verständnis

- [ ] Weißt du, warum API-Keys nie in Git landen dürfen?
- [ ] Hast du mindestens einen API-Key eingerichtet (oder bewusst dagegen entschieden)?
- [ ] Kannst du erklären, was `python-dotenv` macht?
