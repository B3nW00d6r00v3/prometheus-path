---
title: "Modul 6.0: Context Engineering"
module: "6.0"
type: index
fast_track: true
effort: "8-12h"
---

# Modul 6.0: Context Engineering

Anthropic hat 2025 Context Engineering als **Nachfolger von Prompt Engineering** proklamiert. Moderne Agents scheitern selten an Prompt-Qualität — sie scheitern an Context-Strategie: zu volle Context-Windows, fehlende Compaction, falsche Memory-Architektur, Sub-Agent-Token-Verschwendung. Dieses Modul lehrt dich, eine Context-Strategie für deine Agents bewusst zu entwerfen, statt zu hoffen, dass es klappt. Pflicht-Vorlauf zu allen anderen Stufe-6-Modulen.

**Aufwand:** 🔧 8-12h · 🧮 8-12h · 💼 4-6h  
**Voraussetzungen:** Stufen 2-3, **Stufe 5 inkl. Modul 5.0 Eval-Mini, 5.4 RAG-Eval, idealerweise 5.6 Skills**  
**Status:** Pflicht alle Tracks. **Begründung der Pflicht:** ohne Context-Engineering-Disziplin sind Module 6.1-6.5 didaktisch unvollständig — Agents werden an die Wand gebaut, nicht an Prompts.

## Lernziel

Du kannst für einen gegebenen Agent-Use-Case eine Context-Strategie entwerfen, die Token-Budget, Memory-Architektur, Sub-Agent-Delegation und Compaction-Trigger explizit definiert. Du verstehst den Unterschied zwischen Prompt Engineering, Prompt Engineering plus Tools, und Context Engineering als Disziplin der Token-Allokation. Du hast einen Context-Audit auf eigene Stufe-5-Anwendung gemacht.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Prompt → Context Engineering: die Disziplin-Verschiebung](theorie/disziplin-verschiebung.md) | ✅ | 10min |
| 2 | [Context-Bestandteile — was ist im Window?](theorie/context-bestandteile.md) | ✅ | 10min |
| 3 | [Token-Budget-Allokation als Engineering-Entscheidung](theorie/token-budget-allokation.md) | ✅ | 10min |
| 4 | [Compaction als Pflicht-Pattern](theorie/compaction-patterns.md) | ✅ | 15min |
| 5 | [Memory-Architekturen](theorie/memory-architekturen.md) | ✅ | 10min |
| 6 | [Sub-Agent-Token-Budget-Verteilung](theorie/sub-agent-token-budget.md) | ⏭️ | 10min |
| 7 | [Context-Pollution-Antipatterns](theorie/context-pollution-antipatterns.md) | ✅ | 10min |
| 8 | [Claude Skills als Context-Engineering-Pattern](theorie/claude-skills-context.md) | ⏭️ | 10min |
| 9 | [Tools für Observability](theorie/observability-tools.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — Context-Audit auf bestehende Anwendung

1. **Wähle eine deiner Stufe-5-Anwendungen** — die RAG-App aus 5.1, der MCP-Server-Konsument aus 5.3, oder das Eval-Setup aus 5.4.
2. **Token-Bilanz erstellen** — pro typischem Run: was ist im Context-Window in welcher Reihenfolge, wieviel Prozent? Mit Langfuse, LangSmith oder manuellen Logs (`tiktoken` für Token-Counting).
3. **Compaction-Trigger definieren** — Token-Schwelle (z.B. 80% von Context-Limit), bei Erreichen → welche Strategie aus den vier oben?
4. **Compaction-Strategie implementieren** — mindestens eine der vier (Sliding Window mit Summary, LLM-Compactor, Sub-Agent-Delegation, External Memory).
5. **Vorher-Nachher-Vergleich** — Test-Set aus 5.0 Eval-Mini durchlaufen, mit und ohne Compaction. Quality-Drop, Cost-Save messen.
6. **Memory-Architektur einordnen** — welche Zeitskala (kurzfristig/mittelfristig/langfristig) ist für deine App relevant? Skizze.

Im Portfolio: `stufe-6_agenten/6-0-context-engineering/` mit Token-Bilanz, Compaction-Code, Eval-Vergleich, Memory-Architektur-Skizze, Reflexion.

## 🎁 Mehrwert-Mini-Projekte

- **Eigenes Context-Audit-Template** als Markdown — wiederverwendbar für jede zukünftige Anwendung. Wert: pro neuer App eine Stunde gespart.
- **CLAUDE.md im eigenen Capstone-Repo** als minimales mittelfristiges Memory — Brand-Voice, Domain-Vokabular, Decisions-Log. Brücke zu Modul 6.7 Agentic OS.

## 🌱 Open-Source-Pfad

Alle vier Compaction-Strategien lassen sich rein OSS umsetzen:
- **Letta** (vormals MemGPT) als OSS-Memory-Framework mit eingebauter Compaction.
- **Langfuse** (OSS, self-hostable) für Token-Bilanz-Tracking.
- **Sliding Window mit Summary** als 50-Zeilen-Python ohne externe Library.

## Outcome-Check

- [ ] Token-Bilanz für eigene Stufe-5-Anwendung erstellt (mit konkreten Prozent-Werten)
- [ ] Compaction-Strategie implementiert (mindestens eine der vier)
- [ ] Vorher-Nachher-Eval-Vergleich dokumentiert (Quality + Cost)
- [ ] Memory-Architektur eingeordnet (kurz/mittel/lang) für eigene App
- [ ] Anthropic "Effective Context Engineering" gelesen (mindestens Abstract + 2 Sektionen)
- [ ] Sub-Agent vs. Single-Agent-mit-Compaction-Entscheidung für eigenen Use-Case begründet
- [ ] Mindestens drei der fünf Context-Pollution-Antipatterns auf eigene App geprüft
