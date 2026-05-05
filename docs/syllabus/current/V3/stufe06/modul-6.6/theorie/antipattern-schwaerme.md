---
title: "Anti-Pattern: Schwarm wo Workflow reicht"
module: "6.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Anti-Pattern: Schwarm wo Workflow reicht

## Kernidee

Das verbreitetste Anti-Pattern 2026 ist, einen Schwarm zu bauen, weil es technisch möglich und beeindruckend ist — obwohl ein einfacher Workflow oder Single-Agent dasselbe günstiger, schneller und robuster lösen würde. Die Hierarchie der Einfachheit ist die wichtigste Entscheidungsregel: Workflow > Single-Agent > Conductor > Schwarm.

## Im Detail

**Die Hierarchie der Einfachheit:**

```
Deterministischer Workflow (Funktion A → B → C)
    ↓ nur wenn nicht ausreichend
Single-Agent mit Tools und gutem System-Prompt
    ↓ nur wenn nicht ausreichend
Multi-Agent mit Conductor (3-5 Agents)
    ↓ nur wenn nicht ausreichend
Hierarchical oder Hybrid-Schwarm
    ↓ nur wenn wirklich nötig (sehr selten in Production)
Peer-Swarm
```

**Warum der Hype 2024-2025:**
Multi-Agent und Schwärme waren das "ChatGPT-Moment" für Agent-Architektur. Fast jede Demo zeigte Schwärme. Konferenzen präsentierten 50-Agent-Systeme. Der Hype hat viele dazu verleitet, zu komplexe Architekturen für einfache Probleme zu bauen.

**Konsequenzen des Anti-Patterns:**
- 5-10x höhere Kosten als Single-Agent.
- 5-10x längere Latenz (sequentielle LLM-Calls).
- Viel mehr Debugging-Aufwand (wo in 10 Agents liegt der Fehler?).
- Fragile Systeme: mehr Agents = mehr Failure-Points.
- Overkill für die tatsächliche Problem-Komplexität.

**Wie du das Anti-Pattern erkennst:**
- "Wir machen alles als Multi-Agent, weil es state-of-the-art ist."
- Der Use-Case hat weniger als 3 klar trennbare Sub-Tasks.
- Ein einzelner Mensch würde die Aufgabe in 5 Minuten erledigen.
- Die Architektur ist komplexer als das Problem.

**Anthropics 2026-Stance:**
"Most agentic workflows benefit from simplicity, not complexity." — Anthropic, Building Effective Agents.

**Wann Schwarm wirklich lohnt:**
Nur wenn der Use-Case explizit verlangen: massive Parallelisierung (100+ parallele Sub-Tasks), explorative Aufgaben mit unbekanntem Lösungsraum, oder heterogene Spezialisierung mit klar nicht-überlappenden Domänen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Pflicht | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Empfehlung für Einfachheit |
| 📖 Modul | [Modul 6.2 — Wann Multi-Agent vermeiden?](../../modul-6.2/theorie/wann-multi-agent-vermeiden.md) | Details |

## Teste dein Verständnis

- [ ] Nenne die fünf Ebenen der Einfachheits-Hierarchie in der richtigen Reihenfolge.
- [ ] Erkläre, warum der Hype um Schwärme 2024-2025 zu vielen falschen Architektur-Entscheidungen geführt hat.
- [ ] Wende die Hierarchie auf deinen Capstone-Use-Case an: auf welcher Ebene bist du wirklich?
