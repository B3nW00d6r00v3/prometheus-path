---
title: "Effort-Parameter als API-Konvention 2026"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: live
expires: "2026-08"
---

# Effort-Parameter als API-Konvention 2026

## Kernidee

Stell dir vor, du könntest einem Berater sagen: "Denk 5 Minuten nach" oder "Denk eine Stunde nach." Genau das ist der Effort-Parameter — du steuerst, wie viel Denkzeit (und damit Kosten) du dem Reasoning-Modell erlaubst. Mehr Effort = bessere Antworten bei schweren Fragen, aber auch mehr Kosten und Latenz. Der Effort-Parameter ist der Drehknopf für Test-Time-Compute.

## Im Detail

### Was der Effort-Parameter macht

Der Effort-Parameter begrenzt (oder erlaubt) die Menge an internen Thinking-Tokens, die ein Reasoning-Modell generieren darf. Weniger Tokens = schneller und günstiger, aber weniger gründlich. Mehr Tokens = langsamer und teurer, aber gründlicher.

Ohne Effort-Parameter läuft das Modell mit der Default-Einstellung — was für einfache Aufgaben zu viel (teuer) und für schwere Aufgaben zu wenig (schlecht) sein kann.

### Anthropic: `thinking.budget_tokens`

Bei Claude Sonnet 4.6 und Opus 4.7 steuerst du Thinking über den `thinking`-Parameter in der API:

```json
{
  "model": "claude-opus-4-20250918",
  "max_tokens": 16000,
  "thinking": {
    "type": "enabled",
    "budget_tokens": 10000
  },
  "messages": [...]
}
```

- **`budget_tokens`:** Maximale Anzahl an Thinking-Tokens. Das Modell darf bis zu diesem Budget denken, muss es aber nicht ausschöpfen.
- **Typische Werte:** 1.024 (low), 5.000 (medium), 10.000 (high), 50.000+ (xhigh)
- **Bei Opus 4.7 (Adaptive Thinking):** Das Modell entscheidet selbst, wie viel des Budgets es nutzt. Bei einfachen Fragen verbraucht es wenig, bei schweren das volle Budget.

### OpenAI: `reasoning_effort`

Bei den o-Modellen (o3, o4-mini) steuert `reasoning_effort` die Denktiefe:

```json
{
  "model": "o3",
  "reasoning_effort": "medium",
  "messages": [...]
}
```

- **Werte:** `low`, `medium`, `high`
- **Unterschied zu Anthropic:** Bei OpenAI ist es ein abstraktes Level, nicht eine Token-Zahl. Das Modell entscheidet intern, wie viele Tokens "medium" bedeutet.

### Die richtige Effort-Strategie

**Start Small, Scale Up:**

1. Starte mit `low` Effort für jede neue Aufgabe
2. Prüfe die Qualität der Antwort
3. Wenn die Qualität nicht reicht: Erhöhe auf `medium`
4. Nur wenn `medium` nicht reicht: Gehe auf `high`
5. `xhigh` nur für nachweislich schwere Probleme (Theoreme beweisen, komplexes Debugging)

**Warum nicht einfach immer `high`?**

- **Kosten:** `high` kostet 5-10x mehr als `low`
- **Latenz:** `high` dauert 5-30 Sekunden, `low` unter 2 Sekunden
- **Qualität:** Bei einfachen Aufgaben ist `high` nicht besser als `low` — das Modell "überdenkt" und produziert manchmal schlechtere Ergebnisse

### Typische Effort-Empfehlungen nach Task

| Task | Empfohlener Effort |
|------|-------------------|
| Einfache Frage-Antwort | Kein Thinking / `low` |
| Zusammenfassung | Kein Thinking / `low` |
| Standard-Code-Generierung | `low` bis `medium` |
| Code-Review mit Reasoning | `medium` |
| Komplexes Debugging | `medium` bis `high` |
| Mathematische Beweise | `high` |
| Architektur-Entscheidung mit Trade-offs | `high` |
| Forschungsfragen mit Synthese | `high` |

### Effort-Parameter vs. Kein Thinking

Wichtig zu verstehen: Der Effort-Parameter steuert die *Menge* des Thinkings, nicht ob überhaupt gedacht wird. Du kannst auch komplett ohne Thinking arbeiten (z.B. Claude Sonnet ohne `thinking`-Parameter). Das ist dann ein klassisches LLM — schnell, günstig, aber ohne internes Reasoning.

Die Entscheidung ist also dreigestuft:

1. **Kein Thinking:** Klassisches LLM. Für Aufgaben ohne Reasoning-Bedarf.
2. **Low/Medium Thinking:** Moderates Reasoning. Für die meisten Aufgaben mit Denkbedarf.
3. **High/XHigh Thinking:** Maximales Reasoning. Nur für genuinely schwere Probleme.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | `budget_tokens` Dokumentation |
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | `reasoning_effort` Dokumentation |

## Teste dein Verständnis

- [ ] Kennst du die Effort-Parameter für Claude (`budget_tokens`) und OpenAI (`reasoning_effort`)?
- [ ] Verstehst du, warum "immer auf high" keine gute Strategie ist?
- [ ] Kannst du die "Start Small, Scale Up"-Strategie erklären?
- [ ] Weißt du, für welche Task-Typen welcher Effort-Level empfohlen ist?
