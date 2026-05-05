---
title: "CLAUDE.md als minimaler Agentic-OS-Layer"
module: "6.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# CLAUDE.md als minimaler Agentic-OS-Layer

## Kernidee

CLAUDE.md ist die einfachste Form eines Agentic OS: eine strukturierte Markdown-Datei im Repo-Root, die persistenten Kontext, Brand-Voice, Domain-Vokabular und Entscheidungs-Logs enthält. Cross-Session, cross-Agent, versionierbar via Git. Für 80% der Use-Cases reicht das — bevor aufwändigere Systeme gebaut werden.

## Im Detail

**Was CLAUDE.md leistet:**
- **Context-Layer:** System-Prompt-Ergänzungen, die bei jedem Run geladen werden.
- **Memory-Layer (mittelfristig):** Brand-Voice, Domain-Vokabular, Projekt-spezifische Konventionen, Decisions-Log.
- **Skills-Referenz:** Links zu SKILL.md-Dateien oder kurze Skill-Beschreibungen.
- **Self-Learning (minimal):** Reflexions-Abschnitte nach Eval-Runs — was hat funktioniert, was nicht?

**Beispiel-Struktur CLAUDE.md:**
```markdown
# Projekt-Kontext
[Kurze Projektbeschreibung]

## Brand-Voice
- Ton: professionell aber zugänglich
- Zielgruppe: Senior-Entwickler
- Vermeiden: Jargon, übermäßig technische Abkürzungen

## Domain-Vokabular
- "Context-Window": bevorzugt statt "Kontext-Fenster"
- "Agent-Run": bevorzugt statt "Agentenlauf"

## Aktuelle Entscheidungen
- 2026-05-01: PostgreSQL statt MongoDB gewählt (Begründung: ...)
- 2026-04-15: LangGraph statt CrewAI (Begründung: ...)

## Skills
- [RAG-Skill](SKILLS/rag-research.md)
- [Code-Review-Skill](SKILLS/code-review.md)

## Eval-Reflexionen
- 2026-04-30: Compaction bei 70% statt 80% ist besser (weniger Quality-Drop)
```

**Warum Git-Versionierung wertvoll ist:**
- Änderungen an Brand-Voice oder Decisions sind nachvollziehbar (wer, wann, warum).
- Rollback möglich, wenn eine Änderung sich als schlechter erweist.
- Mehrere Agents und Menschen können denselben Stand haben.

**Grenzen des CLAUDE.md-Patterns:**
- Keine automatische Retrieval-Logik: der Agent muss die gesamte CLAUDE.md lesen → Context-Budget-Kosten.
- Kein semantisches Retrieval: wenn die Datei sehr groß wird, ist alles im Context, nicht nur das Relevante.
- Keine automatische Versionierung von Skills-Qualität.
- Skaliert bis ca. 10.000 Tokens CLAUDE.md-Größe — dann besser Vector-Retrieval.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [MindStudio Business Brain](https://www.mindstudio.ai/blog/agentic-os-architecture-claude-code-business-brain) | CLAUDE.md-Pattern |
| 📖 Praxis | Dieses Repo: `CLAUDE.md` | Lebe das Pattern im eigenen Projekt |

## Teste dein Verständnis

- [ ] Welche vier Layers des Agentic OS deckt CLAUDE.md ab — und welche nicht oder nur teilweise?
- [ ] Was ist die Größenlimitation von CLAUDE.md — und was ist die Alternative?
- [ ] Schreibe einen Brand-Voice-Abschnitt für dein Capstone-Projekt als CLAUDE.md-Abschnitt.
