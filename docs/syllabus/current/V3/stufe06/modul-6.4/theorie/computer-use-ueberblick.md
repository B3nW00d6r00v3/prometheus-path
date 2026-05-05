---
title: "Computer Use als Sonderpattern"
module: "6.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Computer Use als Sonderpattern

## Kernidee

Computer Use ist eine eigene Pattern-Klasse: das LLM interagiert nicht über definierte Tool-Funktionen, sondern direkt mit einer Computer-Umgebung durch Maus-Klicks, Tastatureingaben und Screenshot-Lesen. Claude ist seit Oktober 2024 Pionier in dieser Klasse, OpenAI Operator und Google Project Mariner folgten. Die Vertiefung ist in Modul 6.5.

## Im Detail

**Was Computer Use von Tool Use unterscheidet:**

| Eigenschaft | Tool Use | Computer Use |
|---|---|---|
| Interface | Definierte Funktionen (JSON Schema) | Computer-Screen (Pixel) |
| Aktionen | Strukturierte Calls | Maus, Tastatur, Scroll |
| Feedback | Strukturierter Output | Screenshot |
| Robustheit | Hoch (klares Interface) | Niedrig (UI kann sich ändern) |
| Kosten | Günstig | 5-20x teurer |

**Anthropic Computer Use (Oktober 2024):**
- Claude bekommt Screenshots als Input, gibt Aktionen zurück: `mouse_click(x, y)`, `type("text")`, `screenshot()`, `scroll()`.
- Anthropic stellt einen Reference-Docker-Container bereit.
- Native Integration im Claude Agent SDK.

**Wann Computer Use lohnt sich:**
- Es gibt keine API für die Ziel-Anwendung (Legacy-Software, exotische Web-Apps).
- Multi-Step-Workflow über mehrere UIs hinweg.
- Visuelle Erkennung ist Teil des Tasks (Charts lesen, Screenshots interpretieren).

**Wann Computer Use nicht lohnt sich:**
- API-basierter Pfad existiert (immer schneller, billiger, robuster).
- Repetitive deterministische Workflows (klassische RPA-Tools sind besser).
- Production-Stabilität gefordert (2026 noch Beta-Niveau).

**Sandbox-Pflicht:** Computer Use ohne Sandbox ist ein Sicherheitsrisiko. Niemals auf Production-Rechnern ohne strikte Einschränkungen. Details in Modul 6.5.

*Vertiefung aller Aspekte in Modul 6.5. Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use) | Offizielle Docs |
| 📖 Modul | [Modul 6.5 — Computer Use & Agentic Browsing](../../modul-6.5/index.md) | Vollständige Behandlung |

## Teste dein Verständnis

- [ ] Was ist der fundamentale Unterschied zwischen Tool Use und Computer Use?
- [ ] Nenne zwei Szenarien, in denen Computer Use die richtige Wahl ist.
- [ ] Warum ist Computer Use 5-20x teurer als normaler Tool Use?
