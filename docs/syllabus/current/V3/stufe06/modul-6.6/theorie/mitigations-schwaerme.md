---
title: "Mitigations als Production-Pflicht"
module: "6.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Mitigations als Production-Pflicht

## Kernidee

Jeder der vier Schwarm-Failure-Modes hat eine direkte Mitigation. Diese sechs Mitigations sind keine optionalen Verbesserungen, sondern Production-Pflicht für jeden Schwarm-Einsatz. Ein Schwarm ohne diese Mitigations ist ein Experiment, kein Production-System.

## Im Detail

**Mitigation 1: Exit-Kriterien explizit pro Schritt (gegen Drift)**
- Jeder Sub-Task hat eine klare Stop-Bedingung: "Ergebnis ist geliefert" oder "3 valide Quellen gefunden" oder "Zeitlimit erreicht".
- Kein Sub-Agent läuft ohne definiertes Ende.
- Supervisor prüft nach jedem Sub-Task: "Wurde das Ziel des Sub-Tasks erreicht?"

**Mitigation 2: Strukturierter Output (JSON) zwischen Agenten (gegen Drift + Konflikte)**
- Keine Free-Form-Konversation zwischen Agenten ("Ich habe X gefunden, was meinst du?").
- Stattdessen: definiertes JSON-Schema für jeden Sub-Task-Output.
- Supervisor kann maschinenlesbar prüfen, ob alle erforderlichen Felder vorhanden und konsistent sind.

**Mitigation 3: Locking / Versionierung auf gemeinsame Ressourcen (gegen Race-Conditions)**
- Shared Files: File-Lock oder Append-Only-Pattern (nie überschreiben, nur anhängen).
- Shared DB: optimistic concurrency control (check-before-write) oder pessimistic locking.
- Alternative: Supervisor aggregiert alle Worker-Outputs, kein direkter Worker-zu-Worker-Write.

**Mitigation 4: Hard-Limits auf Turns / API-Calls (gegen Coordination-Overhead + Cost-Explosion)**
- Jeder Sub-Agent: max N API-Calls, max M Tokens.
- Gesamter Run: max Token-Budget, max €-Budget.
- Bei Überschreitung: Sub-Agent stoppt, meldet "Budget exhausted" an Supervisor.

**Mitigation 5: Supervisor-Watchdog gegen Repetition (gegen Drift)**
- Supervisor prüft: macht ein Sub-Agent denselben Tool-Call zweimal hintereinander?
- Wenn ja: Interrupt, Redirect, oder Notbremse.
- Pattern: "If last 3 actions are identical, stop and report to supervisor."

**Mitigation 6: Human-in-the-Loop für High-Stakes (gegen alle Failure-Modes)**
- Für kritische Aktionen (Deploy, E-Mail, Finanz-Transaktion): immer Human-Confirmation.
- Insbesondere in Swarm-Setups, wo Supervisor Fehler eines Workers übersehen kann.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Fastio — Swarm Orchestration Best Practices](https://fast.io/resources/ai-agent-swarm-orchestration/) | Mitigations-Überblick |
| 📖 Modul | [Modul 6.2 — Human-in-the-Loop](../../modul-6.2/theorie/human-in-the-loop.md) | HITL-Details |

## Teste dein Verständnis

- [ ] Ordne die sechs Mitigations den vier Failure-Modes zu.
- [ ] Warum ist strukturierter JSON-Output zwischen Agenten besser als Free-Form-Konversation?
- [ ] Implementiere einen Supervisor-Watchdog in Pseudocode.
