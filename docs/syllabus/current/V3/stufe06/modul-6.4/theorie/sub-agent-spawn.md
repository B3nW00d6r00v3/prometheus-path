---
title: "Sub-Agent-Spawn-Pattern"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Sub-Agent-Spawn-Pattern

## Kernidee

Ein Hauptagent spawnt Sub-Agenten mit eigenem Context-Window für parallelisierbare Teilaufgaben. Jeder Sub-Agent startet frisch, erledigt seinen Sub-Task, und gibt nur ein strukturiertes Ergebnis zurück. Das spart Tokens beim Hauptagenten und ermöglicht parallele Verarbeitung — auf Kosten von Koordinations-Overhead.

## Im Detail

**Warum Sub-Agent-Spawning?**
- Context-Window-Wirtschaft: der Hauptagent braucht nicht die gesamte Detail-Arbeit in seinem Context — nur die Ergebnisse.
- Parallelisierung: mehrere Sub-Agenten arbeiten gleichzeitig, wenn die Sub-Tasks unabhängig sind.
- Spezialisierung: Sub-Agent A hat einen anderen System-Prompt und Tool-Set als Sub-Agent B.

**SDK-Pattern (konzeptionell):**
```python
# Hauptagent spawnt Sub-Agent
result = await agent.spawn_subagent(
    system_prompt="Du bist ein Web-Research-Spezialist...",
    tools=["web_search", "web_fetch"],
    task="Recherchiere die drei besten Vector-DBs und gib JSON zurück.",
    context_budget=20_000  # Token-Budget für Sub-Agent
)
# Hauptagent sieht nur das strukturierte Ergebnis
```

**Wann Sub-Agent sinnvoll:**
- Sub-Tasks sind parallelisierbar (Reihenfolge egal).
- Token-Save durch frischen Context überwiegt Koordinations-Overhead.
- Klare Sub-Task-Definitionen — Sub-Agent weiß genau, was er liefern soll.

**Wann Single-Agent mit Compaction besser:**
- Sub-Tasks hängen stark voneinander ab (Output A ist Input B).
- Coherence ist kritisch (alle Informationen müssen zusammenhängen).
- Koordinations-Overhead überwiegt Token-Save (bei sehr kleinen Sub-Tasks).

**Brücke zu Modul 6.0 (Context Engineering):** Sub-Agent-Token-Budget-Verteilung ist eine Context-Engineering-Entscheidung — wie viele Tokens bekommt jeder Sub-Agent? Was wird als Summary zurückgegeben?

**Brücke zu Modul 6.6 (Agentenschwärme):** Sub-Agent-Spawn ist das technische Primitiv hinter dem Conductor-Pattern.

*Verfallsdatum: Nov 2026 — SDK-API kann sich ändern.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Claude Agent SDK — Sub-Agents](https://docs.claude.com/en/api/agent-sdk) | Offizielle Docs |
| 📖 Konzept | [Modul 6.0 — Sub-Agent-Token-Budget](../../modul-6.0/theorie/sub-agent-token-budget.md) | Context Engineering Perspektive |

## Teste dein Verständnis

- [ ] Erkläre den Token-Vorteil von Sub-Agent-Spawning gegenüber einem Single-Agent.
- [ ] Nenne zwei Bedingungen, unter denen Sub-Agent-Spawning sinnvoll ist.
- [ ] Warum ist strukturierter Output (JSON) wichtig für Sub-Agent-Kommunikation?
