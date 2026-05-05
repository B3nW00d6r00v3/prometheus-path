---
title: "Personalisierung: das Spektrum"
module: "10.1"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Personalisierung: das Spektrum

## Kernidee

KI-Personalisierung ist kein binäres An/Aus, sondern ein Spektrum von einfacher Segment-Logik bis zu echtem 1:1-LLM-personalisierten Inhalten in Echtzeit. Höhere Personalisierungs-Stufen sind teurer und komplexer — die richtige Stufe hängt vom Use-Case und Budget ab, nicht von technologischem Ehrgeiz.

## Im Detail

**Das Personalisierungs-Spektrum (von einfach zu komplex):**

| Stufe | Beschreibung | Beispiel | Cost-Indikator |
|---|---|---|---|
| **Segment-basiert** | 5-10 Segmente, pro Segment angepasste Inhalte | "Enterprise-Kunden sehen andere CTAs" | Gering |
| **Behavioral** | Basiert auf User-Aktionen (Klicks, Käufe) | RecSys aus Modul 8.4 | Mittel |
| **Real-time Dynamic** | Zur Render-Zeit individualisierter Content via LLM | "Jede Seite wird für den User on-the-fly generiert" | Hoch |
| **1:1 LLM-personalized** | Jedes E-Mail/jeder Seitenbesuch individuell | Personalisierte Outreach-E-Mails per LLM | Sehr hoch |

**Wann welche Stufe?**
- Für 90% der Mittelstand-Use-Cases ist **Segment-basiert** der richtige Einstieg. Simpler Aufwand, messbarer Impact.
- **Behavioral** lohnt sich ab hohem Traffic und verfügbaren Interaktionsdaten (E-Commerce).
- **Real-time Dynamic** ist 2026 nur im Premium-Segment Standard — hohe LLM-Kosten pro Pageview.
- **1:1 LLM-personalized** ist in B2B-Sales und Premium-E-Commerce (2026) verbreitet. Nicht für Massen-Marketing skalierbar.

**DSGVO-Implikation:** Personalisierung jenseits von Segment-basiert erfordert Einwilligungsmanagement (Art. 22 bei automatisierten Entscheidungen).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Verweis | Modul 8.4 — RecSys | Technische Grundlagen für Behavioral-Personalisierung |
| 📖 Verweis | Modul 9.5 / DSGVO | Rechtliche Grundlagen für Personalisierung |

## Teste dein Verständnis

- [ ] Welche vier Stufen des Personalisierungs-Spektrums gibt es?
- [ ] Bei welcher Stufe ist DSGVO-Art.-22-Compliance relevant?
- [ ] Welche Stufe ist für einen mittelständischen B2B-Dienstleister sinnvoll — warum?
