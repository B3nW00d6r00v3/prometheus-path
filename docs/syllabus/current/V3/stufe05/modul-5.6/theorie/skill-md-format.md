---
title: "SKILL.md-Format als Konvention"
module: "5.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# SKILL.md-Format als Konvention

## Kernidee

SKILL.md ist eine strukturierte Markdown-Datei, die eine Skill vollständig beschreibt: Metadaten, Anweisungen, Beispiele und optionaler Code. Das Format ist einfach, menschlich lesbar und mit Git versionierbar — kein proprietäres Format.

## Im Detail

**Pflicht-Abschnitte einer SKILL.md:**

```markdown
# Skill-Name

## Beschreibung
<!-- KRITISCH: Dieser Text bestimmt Auto-Discovery -->
Diese Skill hilft beim [konkreter Use-Case], wenn [Trigger-Bedingung].
Nicht verwenden für [Abgrenzung zu ähnlichen Aufgaben].

## Trigger-Heuristik
- Verwende diese Skill wenn: [Liste von Trigger-Signalen]
- Verwende diese Skill NICHT wenn: [Liste von Anti-Trigger-Signalen]

## Anleitung
[Schrittweise Anleitung, was die Skill tut]

1. [Schritt 1]
2. [Schritt 2]
3. [Schritt 3]

## Beispiele

### Beispiel 1: [Titel]
**Input:** [Beschreibung der Eingabe]
**Output:** [Erwartetes Ergebnis]
**Besonderheiten:** [Was ist in diesem Beispiel wichtig]
```

**Optionale Abschnitte:**

```markdown
## Code-Schnipsel
```python
# Optionaler Helper-Code, der die Skill nutzen kann
def process_jira_tickets(tickets: list[dict]) -> str:
    ...
```

## Ressourcen
- [Link zu Vorlagen]
- [Link zu Hintergrund-Dokumenten]

## Bekannte Limitierungen
- [Was die Skill nicht kann]
- [Wann sie falsch triggert]
```

**Konkretes Beispiel: Status-Update-Skill**

```markdown
# Weekly Status Update Generator

## Beschreibung
Diese Skill generiert wöchentliche Status-Updates aus Jira-Tickets im Team-Format.
Verwenden wenn: Nutzer fragt nach "Status-Update", "weekly", "Wochenbericht", Jira-Tickets vorliegen.
Nicht verwenden für: Daily-Standups, Sprint-Retrospektiven, individuelle Ticket-Kommentare.

## Trigger-Heuristik
- ✅ "Erstelle ein Status-Update für diese Woche"
- ✅ "Was haben wir diese Woche abgeschlossen?"
- ❌ "Was ist der Status von Ticket XYZ?" (→ kein Wochenbericht)
- ❌ "Plane den nächsten Sprint" (→ anderer Workflow)

## Anleitung
1. Tickets nach Status gruppieren: Done, In Progress, Blocked.
2. Erledigte Tickets: 1-2 Zeilen Zusammenfassung je Ticket.
3. In Progress: Fortschritt und Blocker beschreiben.
4. Blocked: Blocker benennen, Eskalationsbedarf.
5. Format: Markdown-Tabelle, dann Fließtext-Zusammenfassung.

## Beispiele
### Beispiel 1: Standard-Wochenbericht
**Input:** Liste von 8 Jira-Tickets mit Status
**Output:** Markdown-Bericht mit Tabelle und 3-Satz-Zusammenfassung
```

**Verzeichnis-Struktur für komplexe Skills:**

```
my-skill/
├── SKILL.md           ← Haupt-Datei (Metadaten, Anleitung)
├── templates/
│   └── status-update.md   ← Vorlage
├── examples/
│   ├── example-1.md       ← Konkretes Beispiel
│   └── example-2.md
└── helpers/
    └── format_tickets.py  ← Helper-Script
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | 7 kanonische Beispiele für das Format |

## Teste dein Verständnis

- [ ] Kannst du eine SKILL.md für einen wiederholbaren Workflow aus deinem Alltag schreiben?
- [ ] Was macht eine gute Beschreibung aus — und warum ist sie kritisch für Auto-Discovery?
- [ ] Wann ist ein Unterverzeichnis statt einer einzelnen SKILL.md sinnvoll?
