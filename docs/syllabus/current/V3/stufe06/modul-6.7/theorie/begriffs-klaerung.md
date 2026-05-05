---
title: "Begriffs-Klärung: Agentic OS — zwei Bedeutungen"
module: "6.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Begriffs-Klärung: Agentic OS — zwei Bedeutungen

## Kernidee

"Agentic OS" bezeichnet 2026 zwei verschiedene Dinge, die du auseinanderhalten musst: erstens eine Framework-Pattern-Klasse (Layer-Architektur aus Context, Memory, Skills und Self-Learning), und zweitens echte System-Software für Agenten (analog zu einem Betriebssystem mit Prozess-Scheduling und Isolation). Beide sind relevant, aber auf sehr unterschiedlichem Reifegrad.

## Im Detail

**Lesart (a): Framework-Pattern (dominante Bedeutung 2026)**

Anbieter wie MindStudio, Agno und Reshape nutzen "Agentic OS" für eine Layer-Architektur über Agenten:
- **Context-Layer:** frischer Kontext pro Run.
- **Memory-Layer:** persistentes Wissen über Sessions hinweg.
- **Skills-Layer:** wiederholbare Domain-Workflows.
- **Self-Learning-Layer:** Feedback-Schleife, die Memory und Skills verbessert.

Das ist keine neue technische Infrastruktur — es ist eine Architekturentscheidung, wie man Agenten mit persistenter Wissensschicht ausstattet. CLAUDE.md in einem Repo ist die einfachste Form.

**Lesart (b): System-Software-Ebene (Forschungs-/Frühprodukt-Phase)**

Einige Projekte und Akademiker nutzen "Agentic OS" für tatsächliche OS-Infrastruktur für Agenten:
- Process-Scheduling: welcher Agent läuft wann?
- Isolation: Agent A kann Agent B nicht ungewollt beeinflussen.
- Resource-Management: CPU, Memory, API-Quota-Limits pro Agent.
- Filesystem-Abstraktion: semantisches Filesystem (Wissen statt Dateipfade).

Beispiele: AIOS-Foundation (ICLR 2025), Cowork (Anthropic, beta), AgenticOS-Workshop ASPLOS 2026.

**Wichtig: Reifegrad unterscheidet sich massiv:**
- Lesart (a): heute produktiv einsetzbar, Pattern gut verstanden.
- Lesart (b): Forschungs- und Frühprodukt-Phase Mai 2026. Nicht für Production-Use.

**Warum beide Bedeutungen kennen:**
Wenn jemand sagt "wir bauen ein Agentic OS", frage: meinen sie (a) eine Memory/Skills-Architektur oder (b) echte OS-Infrastruktur? Die Antwort bestimmt, welche Erwartungen angemessen sind.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [MindStudio — Agentic OS Architecture](https://www.mindstudio.ai/blog/agentic-os-architecture-four-patterns-claude-code) | Lesart (a) |
| 📖 Workshop | [AgenticOS Workshop ASPLOS 2026](https://os-for-agent.github.io/) | Lesart (b) |

## Teste dein Verständnis

- [ ] Erkläre die zwei Bedeutungen von "Agentic OS" in je einem Satz.
- [ ] Welche Bedeutung ist heute production-ready — und welche nicht?
- [ ] Warum ist es wichtig, zwischen den zwei Bedeutungen zu unterscheiden, wenn du über Agentic OS sprichst?
