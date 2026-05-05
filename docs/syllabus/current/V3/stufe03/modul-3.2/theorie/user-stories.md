---
title: "User Stories & Acceptance Criteria"
module: "3.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# User Stories und Acceptance Criteria

## Kernidee

Eine User Story beschreibt eine Anforderung aus Nutzerperspektive: "Als <Rolle> möchte ich <Aktion>, damit <Wert>." Acceptance Criteria machen die Story testbar: klare Bedingungen, wann die Story "fertig" ist. KI hilft bei der Generierung von Story-Varianten und Acceptance-Criteria-Vorschlägen — aber der Mensch muss den Wert und die Relevanz bewerten.

## Im Detail

**Aufbau einer User Story:**

```
Als [Rolle]
möchte ich [Aktion/Feature],
damit [Wert/Nutzen].
```

**Beispiel:**
```
Als neuer Mitarbeiter
möchte ich eine KI-Suche über das Firmen-Wiki,
damit ich Antworten auf Fragen finde, ohne Kolleg:innen unterbrechen zu müssen.
```

**Acceptance Criteria (AC):**
Testbare Bedingungen, die definieren, wann die Story erfüllt ist.

```
Gegeben: ein neuer Mitarbeiter mit Zugang zum Wiki
Wenn: er eine Frage in natürlicher Sprache eingibt
Dann: erhält er eine Antwort mit Quellenverweis innerhalb von 5 Sekunden
Und: die Antwort basiert nur auf Firmendokumenten (keine Halluzinationen)
```

**KI-Augmentation bei Stories:**

- **Story-Generierung:** Aus einer vagen Beschreibung ("wir brauchen was für Onboarding") generiert KI mehrere Story-Varianten mit verschiedenen Perspektiven.
- **Acceptance Criteria:** KI schlägt Kriterien vor, die du leicht übersiehst (Edge Cases, Fehlerfälle, Performance).
- **Story-Splitting:** Zu große Stories werden von KI in kleinere, unabhängige Stories aufgeteilt.

**Wichtig:** KI kennt den Geschäftskontext nicht. Sie kann formal korrekte Stories schreiben, die inhaltlich am Bedarf vorbeigehen. Deshalb: KI-Vorschläge immer als Startpunkt, nie als Endergebnis.

**INVEST-Kriterien für gute Stories:**

- **I**ndependent — unabhängig von anderen Stories
- **N**egotiable — verhandelbar, nicht festgeschrieben
- **V**aluable — liefert Wert für den Nutzer
- **E**stimable — schätzbar im Aufwand
- **S**mall — klein genug für einen Sprint
- **T**estable — mit klaren Acceptance Criteria

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Mike Cohn — User Stories Applied](https://www.mountaingoatsoftware.com/agile/user-stories) | Klassische Referenz |
| 📖 | [Atlassian — User Stories](https://www.atlassian.com/agile/project-management/user-stories) | Praxis inkl. Acceptance Criteria |

## Teste dein Verständnis

- [ ] Kannst du eine User Story für ein eigenes Projekt formulieren?
- [ ] Was sind die INVEST-Kriterien?
- [ ] Wo hilft KI bei der Story-Formulierung, und wo sind ihre Grenzen?
