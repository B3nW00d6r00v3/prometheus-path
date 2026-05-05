---
title: "Anti-Pattern: KI-Driven Development"
module: "3.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Anti-Pattern: KI-Driven Development

## Kernidee

Die Falle, in die viele Teams 2024-2026 gefallen sind: KI generiert Stories, KI schätzt, KI implementiert (mit Cursor/Claude Code). Das Ergebnis: Niemand versteht den Code mehr, technische Schulden explodieren, und das Team verliert die Kontrolle über das eigene Produkt. KI-Augmentation ja, aber Mensch behält Verantwortung für Architektur und Qualität.

## Im Detail

**Das Pattern:**

1. Product Owner lässt KI User Stories generieren (ohne Nutzerkontakt)
2. KI schätzt die Stories (ohne Team-Diskussion)
3. Entwickler lassen KI den Code schreiben (Cursor, Claude Code, Copilot)
4. KI schreibt Tests für ihren eigenen Code
5. KI erstellt Release Notes
6. Sprint Review zeigt "Features" — aber niemand versteht die Implementation

**Warum das schiefgeht:**

- **Verständnisverlust:** Wenn KI den Code schreibt und KI die Tests schreibt, prüft KI sich selbst. Niemand im Team hat ein mentales Modell der Architektur.
- **Technische Schulden:** KI-generierter Code funktioniert oft, ist aber schlecht strukturiert. Über Monate akkumulieren sich Abhängigkeiten, die niemand durchschaut.
- **Feature-Illusion:** Es sieht aus wie Fortschritt (viele Features, hohe Velocity), aber die Qualität sinkt. Bugs werden subtiler und schwerer zu finden.
- **Abhängigkeit:** Das Team wird abhängig von der KI. Ohne sie kann niemand mehr debuggen oder erweitern.

**Gesunde KI-Augmentation statt KI-Driven Development:**

| KI-Driven (schlecht) | KI-Augmented (gut) |
|---|---|
| KI generiert Stories allein | KI schlägt Stories vor, Team diskutiert und schärft |
| KI schätzt allein | KI liefert Vergleichsdaten, Team schätzt gemeinsam |
| KI implementiert allein | KI assistiert, Entwickler versteht und reviewt |
| KI testet ihren eigenen Code | Mensch definiert Test-Strategie, KI hilft bei Umsetzung |
| Niemand versteht die Codebasis | Team hat mentales Modell, KI beschleunigt Routinearbeit |

**Faustregeln:**

- Wenn du den KI-generierten Code nicht erklären kannst, darfst du ihn nicht committen
- Wenn niemand im Team die Architektur-Entscheidung getroffen hat, ist sie nicht getroffen
- KI ist ein Werkzeug, kein Teammitglied

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Addy Osmani — AI-Assisted Development](https://addyosmani.com) | Praxiserfahrungen mit KI in der Entwicklung |
| 📖 | [Thoughtworks Technology Radar](https://www.thoughtworks.com/radar) | Aktuelle Einschätzungen zu KI-Tools in der Entwicklung |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen KI-Driven und KI-Augmented Development?
- [ ] Warum ist "KI testet ihren eigenen Code" problematisch?
- [ ] Nenne drei Warnsignale, dass dein Team in KI-Driven Development abgerutscht ist.
