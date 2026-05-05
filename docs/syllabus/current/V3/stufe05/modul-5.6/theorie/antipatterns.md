---
title: "Skills-Engineering-Antipatterns"
module: "5.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Skills-Engineering-Antipatterns

## Kernidee

Fünf Antipatterns tauchen beim Skills-Engineering regelmäßig auf. Wer sie kennt, spart Stunden Debugging und verhindert Skills, die nie korrekt triggern, sich gegenseitig überdecken oder nach einem Library-Update brechen.

## Im Detail

**Antipattern 1: Skill, die alles können soll ("Universal-Helfer")**

```markdown
## Beschreibung  ← SCHLECHT
Diese Skill hilft bei allen Analyse-, Zusammenfassungs-, Dokumentations- und
Kommunikations-Aufgaben, egal welcher Domäne oder Komplexität.
```

*Problem:* Zu breite Description → wird entweder nie geladen (zu generisch) oder bei allem geladen (zu unspezifisch). Stattdessen: eine Skill pro klar abgegrenztem Workflow.

**Antipattern 2: Skill ohne klare Description**

```markdown
## Beschreibung  ← SCHLECHT
Hilfreich für bestimmte Aufgaben.
```

*Problem:* Der Agent kann keine Trigger-Entscheidung treffen. Die Skill wird ignoriert oder falsch getriggert. Description ist das wichtigste Element einer Skill.

**Antipattern 3: Skill mit unversionierten Code-Schnipseln**

```python
# in SKILL.md  ← SCHLECHT
import langchain  # ohne Version-Pin
from langchain.chains import SequentialChain  # deprecated in 0.2
```

*Problem:* LangChain v0.2 hat SequentialChain entfernt. Skill funktioniert nach Update nicht mehr. Immer Versionen pinnen und nach größeren Library-Updates testen.

**Antipattern 4: Skill statt MCP für Aktionen**

```markdown
## Anleitung  ← SCHLECHT
Schritt 1: Führe einen DB-Query aus.
Schritt 2: Sende das Ergebnis per E-Mail.
```

*Problem:* Skills sind deklaratives Wissen, keine Aktion auf externe Systeme. Für DB-Queries und E-Mail-Versand: MCP-Tools. Die Skill beschreibt, *wie* die Aufgabe gemacht wird — der MCP-Tool führt sie *aus*.

**Antipattern 5: Skill ohne Eval**

Eine Skill wird geschrieben, geladen, scheint zu funktionieren. Sechs Monate später: Library-Update, Plattform-Änderung, neue Formulierungen — die Skill triggert nicht mehr oder produziert schlechte Outputs. Niemand merkt es.

*Mitigation:* Trigger-Eval und Output-Eval dokumentieren. Mindestens nach größeren Plattform- oder Library-Changes wiederholen.

**Zusammenfassung:**

| Antipattern | Symptom | Mitigation |
|-------------|---------|-----------|
| Universal-Helfer | Immer oder nie geladen | Eine Skill pro klar abgegrenztem Workflow |
| Keine Description | Falsch-Trigger oder ignoriert | Description als erstes und wichtigstes Element |
| Unversionierter Code | Bricht nach Update | Versions-Pins, regelmäßige Tests |
| Skill als MCP-Ersatz | Beschreibt Aktionen | Aktionen → MCP-Tool; Wissen → Skill |
| Kein Eval | Stille Verschlechterung | Trigger- und Output-Eval dokumentieren |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | Gut gebaute Skills als Gegenbeispiel |

## Teste dein Verständnis

- [ ] Kannst du jeden der fünf Antipatterns in einem Satz beschreiben?
- [ ] Überprüfe deine eigene SKILL.md auf alle fünf Antipatterns.
- [ ] Welches Antipattern hältst du für das gefährlichste für langfristige Wartbarkeit?
