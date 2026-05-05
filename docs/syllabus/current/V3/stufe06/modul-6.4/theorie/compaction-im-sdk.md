---
title: "Compaction-Strategien im Claude Agent SDK"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Compaction-Strategien im Claude Agent SDK

## Kernidee

Das Claude Agent SDK integriert automatische Compaction: wenn das Context-Window eine konfigurierbare Schwelle erreicht, komprimiert das SDK ältere Konversations-History via LLM-Summarization. Das eliminiert den häufigsten Failure-Mode langlaufender Agenten — Context-Overflow — ohne dass du es manuell implementieren musst.

## Im Detail

**Was automatische Compaction leistet:**
- Überwacht Token-Verbrauch pro Agent-Run kontinuierlich.
- Bei Erreichen des Schwellenwerts (konfigurierbar, z.B. 80% des Context-Limits): ältere Turns werden an ein Compaction-Modell gesendet.
- Compaction-Modell (oft ein günstigeres LLM) produziert einen strukturierten Summary-Block.
- Summary ersetzt die alten Turns im Context — der Agent läuft weiter, ohne Context-Overflow.

**Konfigurierbare Parameter:**
```python
agent = ClaudeAgent(
    compaction_trigger=0.8,          # bei 80% Context-Limit
    compaction_model="claude-haiku", # günstigeres Modell für Compaction
    compaction_slots=2000,           # Token-Slots, die nach Compaction reserviert bleiben
    compaction_strategy="summary",   # oder "sliding_window"
)
```

**Verbindung zu Modul 6.0 (Compaction als Pflicht-Pattern):**
Das SDK implementiert im Wesentlichen Strategie (2) aus Modul 6.0: LLM-as-Compactor. Du kannst aber auch eigene Strategien konfigurieren oder die automatische Compaction deaktivieren und selbst steuern.

**Wann selbst steuern sinnvoll ist:**
- Domain-spezifische Compression: du weißt besser als das SDK, was wichtig ist.
- Cost-Optimierung: du kannst einen noch günstigeren Compactor wählen oder regeln, was nie komprimiert wird (z.B. kritische Constraint-Erinnerungen).
- Testing: automatische Compaction kann unerwartetes Verhalten produzieren — manuelle Kontrolle für Eval-Runs bevorzugt.

*Verfallsdatum: Aug 2026 — Compaction-API kann sich ändern.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Konzept | [Modul 6.0 — Compaction als Pflicht-Pattern](../../modul-6.0/theorie/compaction-patterns.md) | Vier Compaction-Strategien |
| 📖 Docs | [Claude Agent SDK Docs](https://docs.claude.com/en/api/agent-sdk) | Compaction-Konfiguration |

## Teste dein Verständnis

- [ ] Erkläre, was automatische Compaction im SDK macht — und welches der vier Compaction-Patterns aus Modul 6.0 sie implementiert.
- [ ] Wann würdest du die automatische Compaction deaktivieren und selbst implementieren?
- [ ] Welche zwei Parameter sind für die Compaction-Konfiguration am wichtigsten?
