---
title: "MCP als Vendor-Lock-in-Mitigations-Faktor"
module: "9.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# MCP als Vendor-Lock-in-Mitigations-Faktor

## Kernidee

Model Context Protocol (MCP) entkoppelt die Definition von Tools von einem bestimmten LLM-Provider. Wer Tools als MCP-Server baut, kann den LLM-Provider wechseln — ohne das Tool-Refactoring.

## Im Detail

**Das Problem ohne MCP:**
- Tools werden direkt für OpenAI Function Calling oder Anthropic Tool Use implementiert.
- Bei Provider-Wechsel: alle Tool-Definitionen müssen umgeschrieben werden.
- Ergebnis: technischer Lock-in, der Provider-Wechsel prohibitiv teuer macht.

**MCP als Lösung:**
- Tools als MCP-Server implementieren: standardisiertes Interface, unabhängig vom LLM-Provider.
- MCP-Client im LLM-Framework übersetzt MCP-Calls in provider-spezifische Formate.
- Provider-Wechsel: nur der Client ändert sich, Server bleiben unverändert.

**Strategische Implikation für Build-vs-Buy:**
- Bei Buy: prüfen, ob der Vendor MCP unterstützt.
- Bei Build: MCP als Architektur-Standard setzen für alle Tool-Implementierungen.
- Gibt dem Build-Pfad mehr Flexibilität und reduziert Long-Term-Lock-in.

*Verfallsdatum: Nov 2026 — MCP-Adoption entwickelt sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | Modul 5.3: MCP | Technische Vertiefung |

## Teste dein Verständnis

- [ ] Erkläre in eigenen Worten, wie MCP den Provider-Lock-in reduziert.
- [ ] Welche Frage würdest du einem Vendor stellen, um MCP-Unterstützung zu prüfen?
- [ ] Wann ist MCP-basierte Architektur besonders wichtig — und wann weniger relevant?
