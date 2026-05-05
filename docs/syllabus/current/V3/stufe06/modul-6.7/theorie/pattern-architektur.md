---
title: "Pattern-Architektur: vier Layers"
module: "6.7"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Pattern-Architektur: vier Layers

## Kernidee

Die Framework-Pattern-Lesart (a) von Agentic OS definiert vier Layers über einem Agent: Context-Layer (frischer Lauf-Kontext), Memory-Layer (persistentes Wissen), Skills/Collaboration-Layer (wiederholbare Workflows) und Self-Learning-Layer (Feedback-Schleife). Diese vier Layers zusammen machen aus einem zustandslosen Agent ein lernendes, persistentes System.

## Im Detail

**Layer 1: Context-Layer**
- Was: frischer Kontext pro Run — System-Prompt, aktueller Task, Run-spezifische Informationen.
- Verbindung zu Modul 6.0: das ist der Context-Engineering-Layer. Jede Token-Allokations-Entscheidung findet hier statt.
- Minimal-Implementation: einfacher System-Prompt + Task-Input.
- Erweiterte Implementation: dynamisch zusammengesetzt aus Memory-Fragmenten + Skills + frischem Context.

**Layer 2: Memory-Layer**
- Was: persistentes Wissen über Sessions und Agents hinweg.
- Drei Zeitskalen (aus Modul 6.0):
  - Kurzfristig: Session-Kompaction-Buffer.
  - Mittelfristig: User-Profil, Domain-Vokabular, Brand-Voice, Decisions-Log.
  - Langfristig: organisationsweites geteiltes Wissen.
- Minimal-Implementation: `memory/brand_voice.md` + `memory/decisions_log.md`.
- Erweiterte Implementation: Vector-Datenbank mit semantischem Retrieval.

**Layer 3: Skills / Collaboration-Layer**
- Was: wiederholbare, versionierte Domain-Workflows (SKILL.md-Pattern aus Modul 5.6).
- Verbindung zu Modul 5.6: Skills sind im Kontext von Agentic OS der Collaboration-Layer — mehrere Agenten teilen dieselben Skills.
- Minimal-Implementation: `skills/`-Verzeichnis mit SKILL.md-Dateien.
- Erweiterte Implementation: Skills-Registry mit Versionierung und Discovery-API.

**Layer 4: Self-Learning-Layer**
- Was: Feedback-Schleife, die Memory und Skills basierend auf Eval-Ergebnissen anpasst.
- Verbindung zu Modul 5.0/5.4 (Eval): ohne Eval-Basis kein Self-Learning — du weißt nicht, was sich verbessert hat.
- Minimal-Implementation: `learning/failure_modes.md` + `learning/improvement_log.md` manuell gepflegt.
- Erweiterte Implementation: automatisches Update von Skills nach Eval-Cycle (LLM-basierte Skill-Verbesserung).

**Zusammenspiel der Layer:**
```
Eingehender Task
    ↓
Context-Layer: Task + Memory-Fragmente + relevante Skills zusammenstellen
    ↓
Agent führt Task aus (Loop aus Modul 6.1/6.2)
    ↓
Memory-Layer: relevantes Wissen aus Run speichern
    ↓
Self-Learning-Layer: wenn Eval negativ → Skills/Memory anpassen
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [MindStudio — Agentic OS Architecture Four Patterns](https://www.mindstudio.ai/blog/agentic-os-architecture-four-patterns-claude-code) | Layer-Erklärung |

## Teste dein Verständnis

- [ ] Erkläre die vier Layers in je einem Satz.
- [ ] Welcher Layer verbindet Agentic OS mit Modul 6.0 (Context Engineering)?
- [ ] Skizziere für dein Capstone: welche Informationen gehen in welchen Layer?
