---
title: "Was ist Computer Use?"
module: "6.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Was ist Computer Use?

## Kernidee

Computer Use ist eine Pattern-Klasse, in der ein LLM nicht vordefinierte Tool-Funktionen aufruft, sondern direkt mit einer Computer-Umgebung interagiert — durch Maus-Klicks, Tastatureingaben, Screenshot-Lesen und Browser-Navigation. Das ist fundamentally anders als Tool Use und erfordert eigene Sicherheits-, Eval- und Praxis-Ansätze.

## Im Detail

**Die neue Pattern-Klasse:**
Vor Oktober 2024 waren LLM-Agents auf APIs und definierte Funktionen beschränkt. Computer Use öffnet die gesamte Computer-Oberfläche als Interface — jede Software, jede Website, jede Anwendung, die ein Mensch bedienen kann, ist jetzt auch für einen LLM-Agent erreichbar.

**Wie es technisch funktioniert:**
- Das LLM bekommt Screenshots als Input (visueller Kontext).
- Es analysiert den Screenshot und gibt strukturierte Aktionen zurück.
- Die Aktionen werden in einer Sandbox ausgeführt.
- Ein neuer Screenshot wird aufgenommen und zurückgesendet.
- Der Cycle wiederholt sich.

**Die neuen Aktions-Primitiven:**
- `screenshot()` — aktuellen Bildschirmzustand aufnehmen
- `mouse_click(x, y)` — Mausklick an Koordinate
- `type(text)` — Tastatureingabe
- `scroll(x, y, direction, amount)` — scrollen
- `key(combination)` — Tastenkombination (z.B. Ctrl+C)

**Pioniere der Pattern-Klasse:**
- **Anthropic Computer Use** (Oktober 2024): Claude führt Desktop- und Browser-Tasks aus.
- **OpenAI Operator** (2025): fokussiert auf Browser-Tasks.
- **Google Project Mariner** (2025): Chrome-Extension-basiert, Gemini-integriert.

**Warum eine eigene Disziplin:**
- Sicherheits-Profil fundamental anders (destruktive Aktionen ohne klare API-Grenzen).
- Eval schwieriger (kein strukturierter Output, visuelle Interpretation nötig).
- Cost-Profil anders (5-20x teurer als API-Calls).
- Robustheit anders (UI-Änderungen können Agents brechen).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use) | Offizielle Anthropic Docs |
| 📖 Demo | [Anthropic Computer Use Demo Repo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) | OSS-Referenz-Implementation |

## Teste dein Verständnis

- [ ] Erkläre den fundamentalen Unterschied zwischen Tool Use und Computer Use.
- [ ] Nenne die vier Aktions-Primitiven von Computer Use.
- [ ] Warum braucht Computer Use eine eigene Disziplin — und nicht nur "erweitertes Tool Use"?
