---
title: "Session-Management im Claude Agent SDK"
module: "6.4"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Session-Management im Claude Agent SDK

## Kernidee

Session-Management ermöglicht langlaufende Agenten (Stunden bis Tage) ohne Datenverlust bei Verbindungsabbrüchen. Das SDK speichert Session-State (Konversations-History, Tool-Call-Log, Compaction-Buffer) persistent und stellt ihn bei Reconnect automatisch wieder her.

## Im Detail

**Was Session-Management bedeutet:**
- Jede Agent-Session bekommt eine eindeutige `session_id`.
- State wird regelmäßig gespeichert: nach jedem Turn, oder bei Compaction-Event.
- Bei Reconnect (Netzwerkfehler, Container-Neustart): SDK lädt letzten gespeicherten State.
- Der Agent macht weiter, als wäre nichts passiert.

**Storage-Optionen:**
- **Lokal als File:** einfach, für Development und kleine Deployments. Kein redundantes Storage.
- **Redis:** schnell, gut für Agenten mit vielen kurzen Sessions.
- **Postgres / SQLite:** strukturiert, gut für Long-Running-Sessions mit Query-Bedarf.
- **Remote-Backend:** für verteilte Deployments (mehrere Instanzen desselben Agenten).

**Konversations-History-Pruning:**
Nicht nur Compaction, sondern auch Pruning: alte, irrelevante Turns werden gelöscht statt komprimiert. SDK kann konfiguriert werden, welche Turns immer behalten werden (z.B. Aufgaben-Definition, kritische Constraints).

**Wichtig für Production:**
- Ohne Session-Management: ein Netzwerkfehler nach 2 Stunden Arbeit = kompletter Neustart.
- Mit Session-Management: der Agent weiß, wo er war, und macht weiter.
- Brücke zu Modul 6.7 (Agentic OS): Session-Management ist die technische Grundlage der Memory-Layer.

**Sicherheits-Aspekt:**
- Session-Files können sensible Daten enthalten (Konversation, Tool-Outputs).
- Encryption at Rest für Production empfohlen.
- Session-Expiry: Sessions, die zu lange inaktiv sind, sollten automatisch gelöscht werden.

*Verfallsdatum: Nov 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Claude Agent SDK — Session-Management](https://docs.claude.com/en/api/agent-sdk) | Offizielle Docs |
| 📖 Konzept | [Modul 6.7 — Agentic OS Memory-Layer](../../modul-6.7/index.md) | Brücke |

## Teste dein Verständnis

- [ ] Was passiert ohne Session-Management, wenn ein langlaufender Agent nach 3 Stunden einen Netzwerkfehler hat?
- [ ] Nenne zwei Storage-Optionen und erkläre, für welchen Use-Case jede geeignet ist.
- [ ] Welcher Sicherheits-Aspekt muss bei Session-Storage in Production beachtet werden?
