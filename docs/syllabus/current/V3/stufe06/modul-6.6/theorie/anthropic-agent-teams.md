---
title: "Anthropic Agent Teams (Februar 2026)"
module: "6.6"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Anthropic Agent Teams (Februar 2026)

## Kernidee

Anthropic Agent Teams ist ein produktiver Schwarm für Code-Workflows, der mit Claude Opus 4.6 im Februar 2026 eingeführt wurde. Es implementiert das Conductor-Pattern mit spezialisierten Sub-Agents für Explore, Plan und Execute — und ist damit ein reales Produktionsbeispiel für die Pattern-Klasse aus diesem Modul.

## Im Detail

**Architektur von Agent Teams:**
- **Hauptagent (Conductor):** empfängt die Aufgabe, koordiniert die Sub-Agents, liefert das finale Ergebnis.
- **Explore-Sub-Agent:** durchsucht den Codebase, liest relevante Dateien, versteht den Kontext.
- **Plan-Sub-Agent:** erstellt einen strukturierten Plan für die Umsetzung.
- **Execute-Sub-Agent:** führt den Plan aus, schreibt/modifiziert Code.

**Warum dieses Pattern:**
- Code-Workflows haben klare Phasen (Verstehen → Planen → Umsetzen) — ideal für Conductor.
- Jede Phase benötigt unterschiedliche Context-Fokusse: Explore braucht breites Lesen, Execute braucht engen Fokus auf spezifische Dateien.
- Sub-Agent-Context-Windows bleiben klein (klare Aufgabe), Hauptagent koordiniert ohne jede Detail-Information im Context.

**Bezug zu Modul 6.0 (Context Engineering):**
Agent Teams ist ein praktisches Beispiel für Sub-Agent-Token-Budget-Verteilung: jeder Sub-Agent hat einen frischen, aufgabenspezifischen Context. Der Hauptagent sieht nur strukturierte Zusammenfassungen, nicht die vollständigen Sub-Task-Details.

**Learnings für eigene Implementierung:**
- Klare Phasengrenzen machen Sub-Agent-Übergaben robuster.
- Strukturierter Output (JSON oder Markdown-Schema) zwischen Sub-Agents verhindert Missverständnisse.
- Hauptagent braucht Stop-Kriterien für jeden Sub-Task — nicht nur für den Gesamt-Run.

*Verfallsdatum: Aug 2026 — Weiterentwicklung erwartet.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Konzept | [Claude Agent SDK Docs](https://docs.claude.com/en/api/agent-sdk) | SDK-Dokumentation |
| 📖 Konzept | [Modul 6.0 — Sub-Agent-Token-Budget](../../../modul-6.0/theorie/sub-agent-token-budget.md) | Context Engineering Perspektive |

## Teste dein Verständnis

- [ ] Welches der vier Schwarm-Pattern implementiert Agent Teams — und warum ist es für Code-Workflows geeignet?
- [ ] Erkläre, wie Context Engineering (Modul 6.0) in der Agent Teams Architektur angewendet wird.
- [ ] Was könntest du von der Agent Teams Architektur für deinen eigenen Multi-Agent-Use-Case übernehmen?
