---
title: "Engineering-Patterns für Reasoning-Modelle"
module: "7.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Engineering-Patterns für Reasoning-Modelle

## Kernidee

Reasoning-Modelle haben spezifische API-Parameter und Engineering-Anforderungen, die sich von Standard-LLMs unterscheiden. Ask-don't-Tell, Effort-Parameter, Cost-Awareness und Latenz-Management sind die vier wichtigsten Patterns.

## Im Detail

**Ask-don't-Tell (Anti-Pattern: explizites CoT-Prompting):**

Bei Reasoning-Modellen ist es ein Anti-Pattern, Chain-of-Thought per Prompt zu erzwingen ("Denke Schritt für Schritt"). Das Modell macht das eingebaut. Explizites CoT kann die Qualität verschlechtern — das Modell wird durch den Prompt-CoT abgelenkt von seinem internen Reasoning. Brücke zu Modul 2.5: bei Reasoning-Modellen einfach die Aufgabe stellen.

**Effort-Parameter:**

**Claude API:**
```python
response = client.messages.create(
    model="claude-opus-4-7",
    thinking={"type": "enabled", "budget_tokens": 10000},
    # budget_tokens: klein=schnell/günstig, groß=langsam/teuer
)
```

**OpenAI API:**
```python
response = client.chat.completions.create(
    model="o3",
    reasoning_effort="high",  # "low" | "medium" | "high"
)
```

**Cost-Awareness:**

Thinking-Tokens werden abgerechnet — oft 5-30× mehr Token als Standard-Output.

Beispiel: Eine Anfrage mit "high" Reasoning:
- Standard-Output: 500 Token → ~$0.003
- Thinking-Tokens: 8.000 Token + Output 500 Token → ~$0.045

**Budget-Empfehlungen:**
- `budget_tokens: 1000` für einfache Tasks (Schreiben, Zusammenfassen).
- `budget_tokens: 8000-16000` für mittlere Tasks (Code-Review, Analyse).
- `budget_tokens: 32000+` für sehr harte Tasks (Beweise, komplexe Planung).

**Latenz-Management:**

Reasoning-Modelle haben Sekunden bis Minuten Time-to-First-Token. Strategien:
- **Streaming verwenden** — zeige Thinking-Tokens als "Arbeitet..."-Indikator.
- **Asynchrone Jobs** — für nicht-interaktive Anwendungen.
- **Progressive Enhancement** — zuerst Standard-Antwort, dann Reasoning als Follow-up.

**Stop-Bedingungen:**

Bei Reasoning-Modellen kein Timeout-Limit vergessen. Ein `o3-High`-Request kann 5+ Minuten dauern. API-Timeouts entsprechend konfigurieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [Anthropic — Extended Thinking API](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Vollständige API-Dokumentation |
| 🌐 Docs | [OpenAI — Reasoning Models Guide](https://platform.openai.com/docs/guides/reasoning) | o3-Serie API-Dokumentation |

## Teste dein Verständnis

- [ ] Warum ist "Denke Schritt für Schritt" ein Anti-Pattern bei Reasoning-Modellen?
- [ ] Wie setzt du in der Claude API das Thinking-Budget?
- [ ] Welche Cost hat ein "high"-Reasoning-Request verglichen mit einem Standard-Request grob?
- [ ] Wie gehst du mit der hohen Latenz von Reasoning-Modellen in einer User-facing-App um?
