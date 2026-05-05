---
title: "Failure-Modes von Schwärmen"
module: "6.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Failure-Modes von Schwärmen

## Kernidee

Schwarm-Systeme scheitern auf vier typische Weisen: Drift ohne Ziel-Anker, Race-Conditions auf gemeinsame Ressourcen, Coordination-Overhead der größer wird als der eigentliche Nutzen, und unterschwellige Sub-Task-Konflikte die der Supervisor nicht erkennt. Jeder dieser Failure-Modes ist vorhersehbar und mit entsprechenden Mitigations beherrschbar.

## Im Detail

**Failure-Mode 1: Drift**
- Was passiert: Der Schwarm verliert das ursprüngliche Ziel ohne Conductor-Anker. Agenten optimieren auf lokale Ziele statt auf das Gesamt-Ziel.
- Beispiel: Researcher-Agent optimiert auf "möglichst viele Quellen finden", Writer-Agent optimiert auf "möglichst langen Text", Reviewer-Agent ist überfordert. Keiner prüft: "Haben wir die ursprüngliche Frage beantwortet?"
- Ursache: fehlendes Goal-Checking, fehlende Stop-Bedingungen.
- Signal: Task Success Rate sinkt bei längeren Runs — der Agent "driftet weg".

**Failure-Mode 2: Race-Conditions**
- Was passiert: Zwei Agenten schreiben gleichzeitig auf dieselbe Ressource — Datei, DB-Eintrag, geteilter State. Der "letzte Schreiber gewinnt", die Arbeit des anderen ist verloren.
- Beispiel: Agent A und Agent B schreiben gleichzeitig in `report.md`. A's Abschnitt wird überschrieben.
- Ursache: kein Locking, kein Versionierungsmechanismus.
- Signal: zufällig fehlende Inhalte in aggregierten Outputs.

**Failure-Mode 3: Coordination-Overhead**
- Was passiert: Der Schwarm verbringt mehr Token auf Inter-Agent-Kommunikation als auf eigentliche Arbeit. Der Coordination-Cost übersteigt den Nutzen.
- Metrik: Coordination-Cost = Tokens für Inter-Agent-Messages / Tokens für eigentliche Arbeit. >50% bedeutet Single-Agent oder Conductor wäre besser.
- Ursache: zu viele Agents für zu kleinen Task, zu viel Free-Form-Kommunikation statt strukturierter Outputs.

**Failure-Mode 4: Unterschwellige Sub-Task-Konflikte**
- Was passiert: Zwei Worker liefern widersprüchliche Ergebnisse; der Supervisor aggregiert ohne Widerspruch zu bemerken.
- Beispiel: Agent A empfiehlt "Nutze PostgreSQL", Agent B empfiehlt "Nutze MongoDB". Der Supervisor mischt beide Empfehlungen in einen Bericht — das Ergebnis ist inkohärent.
- Ursache: kein Konflikt-Check im Supervisor, fehlende Konsistenz-Validierung.
- Signal: Endoutput enthält widersprüchliche Aussagen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Fastio — Swarm Orchestration Best Practices](https://fast.io/resources/ai-agent-swarm-orchestration/) | Failure-Mode-Übersicht |

## Teste dein Verständnis

- [ ] Erkläre Drift in einem Schwarm — was ist die technische Ursache?
- [ ] Was ist Coordination-Overhead und wie misst du ihn (Metrik)?
- [ ] Nenne ein Szenario, in dem Sub-Task-Konflikte besonders gefährlich sind.
