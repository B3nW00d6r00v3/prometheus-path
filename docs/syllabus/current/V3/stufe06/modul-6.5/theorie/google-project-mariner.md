---
title: "Google Project Mariner"
module: "6.5"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Google Project Mariner

## Kernidee

Google Project Mariner ist Googles Browser-Agent, Chrome-Extension-basiert und in Gemini integriert. Im Gegensatz zu Anthropic und OpenAI setzt Google auf eine Chrome-Extension als Interface statt einem separaten Container, was Integration in den normalen Browser-Workflow ermöglicht — aber auch Sicherheitsfragen aufwirft.

## Im Detail

**Architektur — Chrome-Extension:**
- Project Mariner läuft als Chrome-Extension im normalen Browser des Users.
- Kein separater Container oder VM nötig.
- Gemini sieht den aktuellen Tab und kann interagieren.
- Tighter Integration mit Google-Diensten (Search, Gmail, Docs, Maps).

**Vorteile der Chrome-Extension-Architektur:**
- Kein Setup-Overhead: Extension installieren, aktivieren.
- Zugriff auf existierende Browser-Sessions (User ist bereits eingeloggt auf Sites).
- Native Google-Integration: kann auf Google-Account-Daten zugreifen.

**Nachteile der Chrome-Extension-Architektur:**
- Sicherheitsfrage: Extension läuft im User-Browser mit Zugriff auf alle offenen Tabs.
- Kein isoliertes Sandbox-Environment.
- Weniger geeignet für sensible oder produktions-kritische Use-Cases.
- Nur Chrome (kein Firefox, kein Edge).

**Google-Integration:**
- Google Search Grounding: Mariner kann Suchergebnisse direkt als Kontext nutzen.
- Google Workspace: Docs, Sheets, Gmail als native Targets.
- Maps: Navigation und lokale Suche.

**Status Mai 2026:**
Project Mariner ist noch in Limited Access — nicht für alle User verfügbar. Stärker Consumer-fokussiert als Developer-fokussiert.

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Google Project Mariner](https://deepmind.google/technologies/project-mariner/) | DeepMind-Seite |

## Teste dein Verständnis

- [ ] Was ist der Kern-Unterschied in der Architektur zwischen Project Mariner und Anthropic Computer Use?
- [ ] Nenne einen Sicherheits-Aspekt der Chrome-Extension-Architektur, den du bei Anthropics Container-Ansatz nicht hast.
- [ ] Für welchen Use-Case-Typ ist Project Mariner besonders gut geeignet?
