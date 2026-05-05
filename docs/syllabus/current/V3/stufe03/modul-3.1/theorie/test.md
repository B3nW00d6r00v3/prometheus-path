---
title: "Usability-Testing für KI-Produkte"
module: "3.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Test: Usability-Testing für KI-Produkte ist anders

## Kernidee

Standard-Usability-Testing ("Klicke auf den Warenkorb") funktioniert bei KI-Produkten nicht, weil KI-Outputs nicht-deterministisch sind. Derselbe Input kann verschiedene Outputs liefern. Deshalb brauchst du spezielle Test-Methoden: Repeated Tasks, Edge Cases und Failure Modes.

## Im Detail

Klassisches Usability-Testing gibt einem Nutzer eine Aufgabe und beobachtet, ob und wie er sie löst. Bei KI-Produkten ist das komplizierter:

**Warum KI-Testing anders ist:**

- **Nicht-Determinismus:** Gleicher Input → unterschiedlicher Output. Ein Test mit einer Person reicht nicht.
- **Emergentes Verhalten:** Nutzer entdecken Verwendungen, die du nicht geplant hast.
- **Vertrauensdynamik:** Nutzer müssen lernen, wann sie KI vertrauen können und wann nicht.

**Spezielle Test-Methoden für KI:**

- **Repeated Tasks:** Den gleichen Task mehrfach ausführen lassen und Varianz beobachten. Ist das Ergebnis konsistent genug? Stört die Varianz den Nutzer?

- **Edge Cases:** Was passiert bei ungewöhnlichen Inputs? Leere Eingaben, sehr lange Texte, andere Sprache, fachfremde Fragen. Wie reagiert die KI, und wie reagiert der Nutzer darauf?

- **Failure Modes:** Was passiert, wenn KI falsch liegt? Erkennt der Nutzer den Fehler? Kann er korrigieren? Verliert er das Vertrauen?

- **Trust Calibration:** Beobachte, ob Nutzer zu viel oder zu wenig Vertrauen in die KI haben. Beides ist problematisch — Over-Trust führt zu ungeprüfter Übernahme, Under-Trust zu Nicht-Nutzung.

**Test-Setup für KI-Produkte:**

1. Mindestens 3 Testpersonen (besser 5)
2. Jeden Task mindestens 2x ausführen lassen
3. Explizit nach Vertrauen fragen ("Würdest du diesem Ergebnis vertrauen?")
4. Failure-Szenarien einplanen (absichtlich falsche/schwierige Inputs)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [NN/g — Testing AI Products](https://www.nngroup.com) | Methoden für KI-Usability-Tests |
| 📖 | [Google PAIR — User Testing for AI](https://pair.withgoogle.com/guidebook/) | Googles Guidebook für KI-UX |

## Teste dein Verständnis

- [ ] Warum funktioniert Standard-Usability-Testing bei KI-Produkten nicht?
- [ ] Was sind Repeated Tasks und warum sind sie bei KI wichtig?
- [ ] Was bedeutet "Trust Calibration" und warum ist sie relevant?
