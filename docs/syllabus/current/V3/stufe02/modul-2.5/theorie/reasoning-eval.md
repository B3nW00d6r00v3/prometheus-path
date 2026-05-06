---
title: "Eval-Implikation bei Reasoning"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Eval-Implikation bei Reasoning

## Kernidee

Bei einem klassischen LLM bewertest du nur die Antwort. Bei einem Reasoning-Modell gibt es eine zweite Ebene: den Denkprozess selbst. Stell dir vor, ein Schüler bekommt die richtige Antwort bei einer Mathe-Klausur — hat er den Lösungsweg verstanden, oder hat er geraten? Eval auf Trajectory-Ebene (was wurde gedacht, nicht nur was wurde gesagt) wird bei Reasoning-Modellen wichtig.

## Im Detail

### Zwei Eval-Ebenen

**Ebene 1: Output-Eval (klassisch)**

"Ist die Antwort korrekt?" Das ist die Standard-Eval-Frage, die bei allen LLMs gilt:

- Ist die Zusammenfassung akkurat?
- Hat der Code keine Bugs?
- Ist die Klassifikation korrekt?

Diese Ebene reicht bei klassischen LLMs, weil es keinen sichtbaren Denkprozess gibt.

**Ebene 2: Trajectory-Eval (neu bei Reasoning)**

"Ist der Denkprozess korrekt?" Diese Frage entsteht erst durch Reasoning-Modelle:

- Hat das Modell die richtigen Zwischenschritte gemacht?
- War der Reasoning-Pfad effizient oder hat es Umwege genommen?
- Hat es die richtigen Annahmen getroffen?
- Gibt es Fehler im Denkprozess, die zufällig zum richtigen Ergebnis geführt haben?

### Warum Trajectory-Eval wichtig ist

**Das "Richtig aus falschem Grund"-Problem:**

Ein Reasoning-Modell kann die korrekte Antwort geben, obwohl sein Denkprozess fehlerhaft war. Beispiel: "Was ist 847 x 293?" Das Modell rechnet intern falsch, korrigiert sich dann durch einen Zufall, und gibt das richtige Ergebnis. Beim nächsten ähnlichen Problem macht es denselben Fehler — und korrigiert sich nicht.

Wenn du nur den Output evaluierst, bewertest du das als "korrekt". Wenn du die Trajectory evaluierst, siehst du den Fehler und weißt: Dieses Modell ist bei diesem Task-Typ unzuverlässig.

**Das "Ineffizienz"-Problem:**

Ein Modell kommt zur richtigen Antwort, braucht dafür aber 5.000 Thinking-Tokens, obwohl 500 gereicht hätten. Output-Eval sagt "korrekt". Trajectory-Eval zeigt: Das Modell hat massiv Ressourcen verschwendet.

### Sichtbarkeit der Thinking-Tokens

Nicht alle Anbieter zeigen den Denkprozess:

- **Claude Extended Thinking:** Thinking-Tokens sind vollständig sichtbar (als `thinking` Block in der API-Response). Das macht Trajectory-Eval möglich.
- **OpenAI o-Modelle:** Thinking-Tokens sind teilweise verborgen. Du siehst eine Zusammenfassung, nicht den vollen Denkprozess.
- **DeepSeek R1:** Thinking-Tokens sind sichtbar (Chain-of-Thought als Teil der Response).

### Verbindung zu anderen Modulen

Die erste Berührung mit Eval war in Modul 2.3 (A/B-Vergleiche — "Welche Antwort ist besser?"). Das war reines Output-Eval.

Die volle Eval-Disziplin kommt in Modul 5.0 (Evals als eigenständiges Thema) und Modul 6.2 (Trajectory-Eval für Reasoning-Modelle im Detail).

**Hier reicht das Bewusstsein:** Reasoning-Modelle brauchen andere Eval-Strategien als klassische LLMs. "Ist die Antwort korrekt?" ist notwendig, aber nicht hinreichend.

### Praktischer Tipp

Wenn du bei Claude Extended Thinking arbeitest: Lies gelegentlich die Thinking-Tokens, nicht nur die finale Antwort. Du wirst überrascht sein, wie das Modell denkt — und du wirst Fehler im Denkprozess finden, die im finalen Output unsichtbar sind.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Grundlagen-Artikel zu Evals |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Sichtbare Thinking-Tokens bei Claude |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum "richtige Antwort" bei Reasoning-Modellen nicht ausreicht für Eval?
- [ ] Verstehst du den Unterschied zwischen Output-Eval und Trajectory-Eval?
- [ ] Kannst du das "Richtig aus falschem Grund"-Problem in eigenen Worten beschreiben?
- [ ] Weißt du, bei welchen Anbietern die Thinking-Tokens sichtbar sind?
