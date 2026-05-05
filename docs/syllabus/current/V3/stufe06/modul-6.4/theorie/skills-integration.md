---
title: "Skills-Integration im Claude Agent SDK"
module: "6.4"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Skills-Integration im Claude Agent SDK

## Kernidee

Das Claude Agent SDK lädt Skills on-demand basierend auf Description-Matching — ohne dass du jede Skill manuell registrieren musst. Du legst SKILL.md-Dateien in einem Verzeichnis an, und das SDK discovert und lädt sie zur Laufzeit, wenn ein Task sie benötigt. Das ist Context Engineering in Aktion: nur relevanter Context kommt ins Window.

## Im Detail

**Was ist ein Skill im SDK-Kontext?**
Eine Skill-Datei (SKILL.md) enthält:
- `name` und `description` (für Discovery)
- Schritt-für-Schritt-Anleitungen für einen wiederholbaren Workflow
- Optionale Code-Snippets oder Templates
- Input/Output-Spezifikation

**Discovery-Mechanismus:**
- Das SDK liest alle SKILL.md-Files in einem konfigurierten Verzeichnis beim Start.
- Wenn ein neuer Task eingeht, matcht das SDK die Task-Beschreibung gegen Skill-Descriptions (semantisches Matching).
- Nur passende Skills werden in den Context geladen.
- Nicht geladene Skills fressen kein Token-Budget.

**Vorteil gegenüber statischer Tool-Registration:**
- 50 Skills definiert, aber nur 2-3 laden für jeden spezifischen Task → Tool-Definition-Budget deutlich kleiner.
- Brücke zu Modul 6.0 (Context-Pollution-Antipattern #5: Skills naive geladen).

**Beispiel-Workflow:**
```
SKILLS/
├── web-research.md      # "Führe systematische Web-Recherche durch"
├── code-review.md       # "Prüfe Code auf Qualität und Sicherheit"
├── email-drafter.md     # "Verfasse professionelle E-Mails"
└── data-analysis.md     # "Analysiere tabellarische Daten"
```
Task: "Recherchiere die neuesten RL-Paper." → nur `web-research.md` wird geladen.

**Description-Engineering:**
Die Skill-Description ist entscheidend für korrektes Discovery. Vage Description → falsche Skills laden. Präzise, Keyword-reiche Description → korrektes Matching. Das ist eine eigene Engineering-Disziplin.

*Verfallsdatum: Nov 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Modul | [Modul 5.6 — Skills-Pattern](../../../../05_stufe5.md) | Vollständige Skills-Behandlung |
| 📖 Konzept | [Modul 6.0 — Claude Skills als Context-Engineering-Pattern](../../../modul-6.0/theorie/claude-skills-context.md) | Context-Perspektive |

## Teste dein Verständnis

- [ ] Wie unterscheidet sich dynamische Skill-Discovery von statischer Tool-Registration?
- [ ] Was ist der Context-Engineering-Vorteil von on-demand Skill-Loading?
- [ ] Schreibe eine Skill-Description für einen "Data-Validation-Skill", die präzises Discovery ermöglicht.
