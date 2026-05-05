---
title: "Modul 6.7: Agentic OS"
module: "6.7"
type: index
fast_track: false
effort: "6-10h"
---

# Modul 6.7: Agentic OS

"Agentic OS" ist 2026 ein Begriff mit zwei Bedeutungen. **(a) Framework-Pattern:** Layer-Architektur über Context, Memory, Skills, Self-Learning (MindStudio, Agno, Reshape). **(b) System-Software-Ebene:** tatsächliches OS-Layer für Agenten mit Process-Scheduling, Isolation, Resource-Management (AIOS-Foundation, AgenticOS-Workshop ASPLOS 2026, Cowork). Modul behandelt beide Lesarten und legt eine minimale Agentic-OS-Schicht über deinen Capstone-Agent.

**Aufwand:** 🔧 6-10h · 🧮 4-6h · 💼 4-6h
**Voraussetzungen:** Module **6.0 Context Engineering**, **5.6 Skills-Pattern**, **6.6 Agentenschwärme**
**Status:** Pflicht 🔧, Awareness 🧮/💼

## Lernziel

Du verstehst, was "Agentic OS" als Begriff bezeichnet — sowohl als Framework-Pattern als auch als System-Software-Ebene. Du kannst eine minimale Agentic-OS-Schicht über deinen Capstone-Agent legen und ihren Nutzen empirisch einordnen (Eval-Vergleich vor/nach).

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Begriffs-Klärung: zwei Bedeutungen](theorie/begriffs-klaerung.md) | ✅ | 10min |
| 2 | [Was ein Agentic OS leistet](theorie/was-agentic-os-leistet.md) | ✅ | 10min |
| 3 | [Pattern-Architektur: vier Layers](theorie/pattern-architektur.md) | ✅ | 15min |
| 4 | [CLAUDE.md als minimaler Agentic-OS-Layer](theorie/claude-md-pattern.md) | ✅ | 10min |
| 5 | [System-Software-Beispiele (Lesart b)](theorie/system-software-beispiele.md) | ⏭️ | 10min |
| 6 | [Antipatterns im Agentic OS](theorie/antipatterns-agentic-os.md) | ✅ | 10min |
| 7 | [Brücke zu Operating Model (9.3)](theorie/bruecke-operating-model.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — Minimaler Agentic-OS-Layer für eigenen Capstone (🔧)

Lege im Capstone-Repo eine `AGENT_OS/`-Struktur an:

```
AGENT_OS/
├── context/        # Kontextfragmente (Context-Layer aus 6.0)
├── memory/
│   ├── brand_voice.md
│   ├── glossary.md
│   └── decisions_log.md
├── skills/         # SKILL.md-Files aus Modul 5.6 + mind. zwei weitere
└── learning/
    ├── failure_modes.md  # laufend gepflegt aus Eval-Runs
    └── improvement_log.md
```

**Eval-Vergleich:** gleicher Use-Case-Run mit/ohne Agentic-OS-Schicht über mindestens 10 Test-Cases (aus Modul 5.0). Quality, Cost, Coherence-über-Sessions vergleichen.

**Reflexion:** Was hat die persistente Schicht gebracht? Wo war sie überflüssig? Wo hat sie geholfen, wo geschadet (Context-Pollution)? Brücke-Notiz zu 9.3 Operating Model bei 💼.

Im Portfolio: `stufe-6_agenten/6-7-agentic-os/` mit Repo-Struktur, Eval-Vergleich, Reflexion.

## Awareness-Variante für 🧮 / 💼

Nicht selbst bauen, sondern eines der existierenden Systeme inspizieren (Cowork, MindStudio Business Brain, Agno) und 1-2-Pager-Brief schreiben:
- "Was ist die Architektur?"
- "Was sind die Trade-offs?"
- "Wann lohnt sich das für meinen Use-Case?"

Im Portfolio: `stufe-6_agenten/6-7-agentic-os/awareness-brief.md`.

## 🎁 Mehrwert-Mini-Projekte

- **CLAUDE.md-Audit** auf existierende Open-Source-Projekte: inspiziere 3-5 Repos und identifiziere die vier Layers (Context / Memory / Skills / Self-Learning).
- **Capstone-Phase-7d-Vorbereitung** — wenn dein Capstone-A in Phase 7d einen Agentic-OS-Layer baut, ist diese Praxis die direkte Umsetzung.

## 🌱 Open-Source-Pfad

AGENT_OS-Pattern als reines Markdown-File-System ist plattform-unabhängig. Optional: **Agno** (OSS, Apache 2.0) oder **Letta** (vormals MemGPT, OSS) für strukturierte Memory-Frameworks. Pure-Markdown-Variante reicht für die meisten Capstones.

## Outcome-Check

- [ ] Beide Lesarten (Framework-Pattern vs. System-Software) erklärbar mit je einem Beispiel
- [ ] (🔧) Eigene `AGENT_OS/`-Struktur im Capstone-Repo angelegt
- [ ] (🔧) Mindestens 3 Memory-Files + 3 Skill-Files
- [ ] (🔧) Eval-Vergleich vor/nach Agentic-OS-Layer auf 10+ Test-Cases
- [ ] (🧮/💼) 1-2-Pager-Awareness-Brief auf existierendes System
- [ ] Brücke zu 9.3 Operating Model für 💼 als Awareness-Notiz
- [ ] Reflexion: war's den Aufwand wert? Welche Antipatterns vermieden?
