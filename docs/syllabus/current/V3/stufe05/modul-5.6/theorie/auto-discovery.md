---
title: "Auto-Discovery via Description-Matching"
module: "5.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Auto-Discovery via Description-Matching

## Kernidee

Der Agent entscheidet zur Laufzeit, welche Skill geladen wird, basierend auf dem Abgleich der Skill-Beschreibung mit dem aktuellen Task-Kontext. Description-Engineering ist damit zur Pflicht-Disziplin geworden: zu generisch, zu spezifisch oder zu vielversprechend — alle drei Fehler führen zu falschen Trigger-Entscheidungen.

## Im Detail

**Wie Auto-Discovery funktioniert:**

1. User gibt einen Task an den Agenten.
2. Agent hat Zugriff auf eine Liste von Skills mit ihren Beschreibungen.
3. Agent vergleicht Task-Kontext mit Skill-Beschreibungen (Embedding-Ähnlichkeit oder LLM-Reasoning).
4. Agent entscheidet: Skill A laden? Skill B? Keine?
5. Geladene Skill wird in den Kontext eingefügt, beeinflusst das Verhalten.

**Die drei Beschreibungs-Fehler:**

**Fehler 1: Zu generisch**

```markdown
## Beschreibung
Diese Skill hilft bei der Arbeit.
```

*Problem:* Wird bei fast allem oder bei nichts geladen — der Agent weiß nicht, wann er sie braucht.

**Fehler 2: Zu spezifisch**

```markdown
## Beschreibung
Diese Skill generiert Status-Updates für das Prometheus-Projekt
im Q2-2026 Sprint-Format mit dem deutschen Team.
```

*Problem:* Wird nur in exakt diesem Kontext geladen. Für ähnliche Aufgaben nicht erkannt.

**Fehler 3: Zu vielversprechend**

```markdown
## Beschreibung
Diese Skill kann bei ALLEN Analyse-Aufgaben helfen, egal welcher Art.
```

*Problem:* Wird bei unpassenden Aufgaben geladen und produziert schlechten Output.

**Goldilocks-Beschreibung:**

```markdown
## Beschreibung
Diese Skill generiert wöchentliche Status-Updates aus Ticket-Listen
(Jira, Linear, GitHub Issues) im Team-Format mit Gruppierung nach Status.
Verwenden wenn: Nutzer fragt nach Wochenbericht, Status-Update, Weekly.
NICHT verwenden für: Daily-Standups, Sprint-Planung, individuelle Tickets.
```

**Description-Engineering-Iterationsprozess:**

1. Erste Beschreibung schreiben.
2. Trigger-Eval: 5-10 Inputs testen, davon ~5 die triggern sollen, ~5 die nicht sollen.
3. Precision und Recall messen: False Positives (falsch geladen), False Negatives (nicht geladen obwohl sollte).
4. Beschreibung anpassen, wiederholen bis ≥80% korrekt.

**Trigger-Eval-Tabelle (Beispiel):**

| Input | Soll triggern | Hat getriggert | Korrekt |
|-------|--------------|----------------|---------|
| "Erstelle ein Status-Update" | ✅ | ✅ | ✅ |
| "Was haben wir diese Woche gemacht?" | ✅ | ✅ | ✅ |
| "Was ist der Status von Ticket 42?" | ❌ | ❌ | ✅ |
| "Plane den nächsten Sprint" | ❌ | ✅ | ❌ — False Positive |
| "Analysiere diese CSV" | ❌ | ❌ | ✅ |

*Ergebnis: 4/5 korrekt = 80% — Mindest-Schwelle erreicht.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | Beispiele für gute Beschreibungen |

## Teste dein Verständnis

- [ ] Kannst du die drei Beschreibungs-Fehler in je einem Satz beschreiben?
- [ ] Wie würdest du eine Trigger-Eval-Tabelle für deine eigene Skill aufbauen?
- [ ] Was ist die Mindest-Schwelle für korrekte Trigger-Genauigkeit in Modul 5.6?
