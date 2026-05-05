---
title: "System-Software-Beispiele (Lesart b)"
module: "6.7"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# System-Software-Beispiele (Lesart b)

## Kernidee

Die System-Software-Lesart von Agentic OS ist noch in der Forschungs- und Frühprodukt-Phase (Mai 2026). Cowork (Anthropic), AIOS-Foundation und Open Interpreter sind die bekanntesten Vertreter. Das Wissen darüber ist für Awareness wichtig — diese Systeme sind aber noch nicht für Production-Use geeignet.

## Im Detail

**Cowork (Anthropic, beta)**
- Lokale Linux-VM auf der User-Maschine, sandboxtes Filesystem für Agenten.
- Agenten können Dateien lesen/schreiben in der VM, aber nicht auf den Host-Rechner zugreifen.
- Anthropics Ansatz für sicheres lokales Agent-Computing.
- Status: Beta, begrenzte Verfügbarkeit Mai 2026.

**AIOS-Foundation (OSS, ICLR 2025)**
- Semantisches Filesystem: Agenten adressieren Wissen nicht durch Dateipfade, sondern durch semantische Queries.
- LLM-basierter OS-Kernel: Scheduling, Memory-Management, Tool-Integration.
- Open-Source, wachsende Community.
- Status: Forschungs-Framework, nicht Production-ready.

**Open Interpreter / OpenClaw**
- Lokale Agent-Runtimes mit Shell-, File- und Browser-Zugriff.
- Weniger "Agentic OS" und mehr "lokale Agent-Ausführungsumgebung".
- Open Interpreter ist weit verbreitet (100k+ GitHub-Sterne).

**PubMatic AgenticOS (domänenspezifisch)**
- Spezialisiert für Programmatic Advertising.
- Agent-Layer für DSP/SSP-Koordination, Bidding-Automatisierung.
- Launch Januar 2026.
- Zeigt: "Agentic OS" wird auch als domänen-spezifischer Begriff genutzt.

**Was diese Systeme gemeinsam haben:**
- Explizite Isolation: Agent A sieht nicht den State von Agent B.
- Resource-Management: API-Quota-Limits, Memory-Limits pro Agent.
- Audit-Logging: was hat welcher Agent wann getan?

**Warum noch nicht Production-ready:**
- Alle genannten Systeme ändern sich schnell — Migrations-Aufwand hoch.
- Performance-Overhead von OS-Layer nicht immer gerechtfertigt.
- Dokumentation und Community noch dünn im Vergleich zu etablierten Tools.

*Verfallsdatum: Aug 2026 — Konsolidierung erwartet.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Workshop | [AgenticOS Workshop ASPLOS 2026](https://os-for-agent.github.io/) | Akademischer Überblick |
| 📖 GitHub | [AIOS-Foundation](https://github.com/aios-labs/aios) | OSS-Projekt |

## Teste dein Verständnis

- [ ] Nenne zwei System-Software-Beispiele für Agentic OS (Lesart b) und erkläre je in einem Satz, was sie tun.
- [ ] Warum sind diese Systeme Mai 2026 noch nicht Production-ready?
- [ ] Welches dieser Systeme würdest du für ein Experiment ausprobieren — und warum?
