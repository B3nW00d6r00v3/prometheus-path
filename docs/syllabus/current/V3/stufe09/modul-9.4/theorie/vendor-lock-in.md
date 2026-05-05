---
title: "Vendor-Lock-in bewerten"
module: "9.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Vendor-Lock-in bewerten

## Kernidee

Vendor-Lock-in bei KI-Tools ist oft gravierender als bei klassischer Software, weil Daten, Modelle und Integrationen gleichzeitig abhängig werden. Fünf Fragen helfen, Lock-in vor einer Buy-Entscheidung zu bewerten.

## Im Detail

**Fünf Fragen vor jeder Buy-Entscheidung:**

1. **Wie aufwändig ist die Migration zu einer Alternative?** — technisch (Daten-Export, API-Migration) und organisatorisch (Umschulung, Prozessanpassung). 6 Wochen vs. 18 Monate macht einen riesigen Unterschied.

2. **Sind Daten exportierbar?** — in welchem Format, wie vollständig, wie lange dauert es? Verbindung zu Daten-Lock-in aus Modul 9.0: proprietäre Datenformate erhöhen Lock-in massiv.

3. **Sind offene Standards supported?** — OpenAPI, MCP (Modul 5.3), offene Schnittstellen ermöglichen Provider-Wechsel ohne vollständiges Refactoring.

4. **Wie ist die Vendor-Stabilität?** — Funding-Situation, Marktanteil, Kundenbasis, Investor-Unterstützung. Ein Startup mit 2 Jahren Runway ist mehr Lock-in-Risiko als ein etablierter Player.

5. **Was passiert bei Insolvenz oder Akquisition?** — Escrow-Vereinbarungen für Source Code, Daten-Export-Rechte, Vertrags-Klauseln für Change-of-Control-Szenarien.

**MCP als Mitigation:** Model Context Protocol (Modul 5.3) entkoppelt Tool-Definitionen von LLM-Providern. Wer Tools als MCP-Server baut, kann den LLM-Provider wechseln ohne Tool-Refactoring.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | [Daten-Lock-in (9.0)](../../modul-9.0/theorie/daten-lock-in.md) | Verwandtes Risiko bei Daten |
| Standard | [MCP (Modul 5.3)](../../../../../) | Technische Lock-in-Mitigation |

## Teste dein Verständnis

- [ ] Bewerte zwei konkrete KI-Tools auf ihre Lock-in-Risiken anhand der fünf Fragen.
- [ ] Was ist der Unterschied zwischen Daten-Lock-in und Vendor-Lock-in?
- [ ] Wie würdest du eine Vertragsklausel für Daten-Portabilität formulieren?
