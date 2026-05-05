---
title: "Wann lohnt Computer Use sich?"
module: "6.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann lohnt Computer Use sich?

## Kernidee

Computer Use ist keine Default-Wahl — es ist ein letzter Ausweg, wenn API-basierte Lösungen nicht existieren. Der Entscheidungsbaum ist klar: gibt es eine API? Nimm die API. Gibt es keine API, ist der Task wiederholt nötig, und ist das UI stabil? Dann ist Computer Use eine Überlegung wert.

## Im Detail

**Entscheidungsbaum:**

```
Hat die Ziel-Anwendung eine API?
├── JA → API nutzen (schneller, billiger, robuster)
└── NEIN → Ist die Aufgabe repetitiv genug, um Automatisierung zu rechtfertigen?
    ├── NEIN → Manuelle Durchführung
    └── JA → Ist das UI stabil (ändert sich selten)?
        ├── NEIN → Risiko hoch, Computer Use fragil
        └── JA → Computer Use ist eine Option
```

**Wann Computer Use lohnt:**
- (1) **Keine API für die Ziel-Anwendung:** Legacy-Software, exotische Web-Apps, Government-Portale ohne API.
- (2) **Multi-Step-Workflow über mehrere UIs hinweg:** z.B. "Kopiere Kundendaten aus System A (kein API) in System B (kein API)".
- (3) **Visuelle Erkennung ist Teil des Tasks:** Charts lesen, Screenshots interpretieren, visuelle QA.
- (4) **Temporäre Lösung:** während eine echte API gebaut wird.

**Wann Computer Use nicht lohnt:**
- **API existiert:** immer bevorzugen — schneller, günstiger, robuster, kein UI-Change-Risiko.
- **Repetitive deterministische Workflows ohne visuelle Komponente:** klassische RPA-Tools (UIPath, Selenium, Playwright-Skripte) sind besser und billiger.
- **Production-Stabilität gefordert:** UI-Änderungen brechen Computer-Use-Agents. Für Production-kritische Workflows nicht geeignet (2026-Stand).
- **Kosten-sensitiver Use-Case:** Computer Use ist 5-20x teurer als API-Calls.

**Realitäts-Check für eigene Use-Cases:**
Bevor du Computer Use wählst: frage dich, ob in einem Jahr eine API existieren wird. Wenn ja — warte auf die API oder investiere in eine API-Wrapper-Library. Computer Use als Interims-Lösung ist vertretbar; als langfristige Strategie selten.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — When to Use Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use) | Offizielle Guidance |

## Teste dein Verständnis

- [ ] Beschreibe den Entscheidungsbaum: "Soll ich Computer Use nutzen?" in 4 Fragen.
- [ ] Nenne drei Szenarien, in denen Computer Use klar die falsche Wahl wäre.
- [ ] Für welchen deiner eigenen Use-Cases könnte Computer Use sinnvoll sein — und warum?
