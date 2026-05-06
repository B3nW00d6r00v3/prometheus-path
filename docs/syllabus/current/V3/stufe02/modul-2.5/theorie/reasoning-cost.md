---
title: "Cost-Realität: Reasoning kostet 5-15x mehr"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Cost-Realität: Reasoning kostet 5-15x mehr

## Kernidee

Reasoning-Modelle sind wie ein Anwalt, der jede Frage gründlich recherchiert — großartig bei komplexen Rechtsfällen, Geldverschwendung bei einer einfachen Adressänderung. Die internen Thinking-Tokens, die du nicht siehst, bezahlst du trotzdem. Setze Reasoning-Modelle gezielt ein, nicht als Default.

## Im Detail

### Woher kommen die Mehrkosten?

Reasoning-Modelle generieren intern lange Reasoning-Chains — Thinking-Tokens, die der eigentliche "Denkprozess" sind. Diese Tokens werden generiert, bevor die eigentliche Antwort kommt, und sie zählen als Output-Tokens (die teuerste Token-Kategorie).

**Typisches Beispiel:**

Du fragst: "Ist diese Code-Änderung sicher?"

- **Klassisches LLM (Sonnet ohne Thinking):** Generiert direkt 200 Output-Tokens Antwort. Kosten: ~$0.003
- **Reasoning-Modell (Opus mit Thinking):** Generiert intern 3.000 Thinking-Tokens + 200 Antwort-Tokens. Kosten: ~$0.24

Das ist 80x teurer — für dieselbe Frage. Die Antwort des Reasoning-Modells ist gründlicher, aber ob das den Aufpreis wert ist, hängt von der Aufgabe ab.

### Die versteckte Kosten-Falle

Das Tückische: Du siehst die Thinking-Tokens nicht (oder nur teilweise, je nach Anbieter), aber du zahlst für sie. Bei Claude Extended Thinking sind die Thinking-Tokens sichtbar — du siehst den internen Denkprozess. Bei manchen OpenAI-o-Modellen sind sie verborgen. In beiden Fällen stehen sie auf der Rechnung.

### Konkrete Preise (Mai 2026, Richtwerte)

| Szenario | Klassisch (Sonnet) | Reasoning (Opus + Thinking) | Faktor |
|----------|-------------------|---------------------------|--------|
| Einfache Frage (200 Tokens Out) | ~$0.003 | ~$0.24 | ~80x |
| Code-Review (500 Tokens Out) | ~$0.008 | ~$0.45 | ~56x |
| Komplexe Analyse (1000 Tokens Out) | ~$0.015 | ~$0.60 | ~40x |
| Mathematik-Problem (300 Tokens Out) | ~$0.005 | ~$0.30 | ~60x |

*Hinweis: Die Thinking-Token-Menge variiert stark — bei einfachen Fragen denkt das Modell weniger, bei schweren mehr. Der Effort-Parameter steuert das aktiv.*

### Wann der Aufpreis sich lohnt

Der 5-15x Aufpreis (im Durchschnitt) lohnt sich, wenn:

- **Die Qualität business-kritisch ist:** Ein falsches Code-Review kann Stunden Debugging kosten. $0.50 für ein gründliches Review ist billiger als 2 Stunden Developer-Zeit.
- **Die Aufgabe genuinely schwer ist:** Mathematik, formale Logik, mehrstufiges Reasoning — hier ist das klassische Modell nicht "gleich gut, nur billiger", sondern tatsächlich schlechter.
- **Der Fehler teuer ist:** Falsche rechtliche Analyse, falscher Finanzbericht, falscher medizinischer Hinweis — hier ist Gründlichkeit ihren Preis wert.

### Wann der Aufpreis Verschwendung ist

- **Einfache Zusammenfassung:** Ein klassisches Modell fasst genauso gut zusammen
- **Übersetzung:** Kein Reasoning nötig
- **Simple Klassifikation:** "Ist diese E-Mail Spam?" — Haiku reicht
- **Kreatives Schreiben:** Reasoning kann hier sogar schaden (zu analytisch, weniger kreativ)
- **Datenextraktion:** "Extrahiere alle E-Mail-Adressen aus diesem Text" — kein Denken nötig

### Strategie: Start Small, Scale Up

Die pragmatische Strategie für API-Nutzung:

1. **Default: Klassisches Modell** (Sonnet, GPT-5) für alle Aufgaben
2. **Evaluation:** Prüfe die Qualität der Antworten
3. **Upgrade selektiv:** Nur für Tasks, wo die Qualität merklich besser ist, auf Reasoning-Modell wechseln
4. **Effort-Parameter nutzen:** Wenn Reasoning, dann mit "low" starten und nur bei Bedarf auf "high" erhöhen

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Pricing](https://www.anthropic.com/pricing) | Aktuelle Preise inkl. Thinking-Tokens |
| :book: | [OpenAI Pricing](https://openai.com/pricing) | Preise für o-Modelle |
| :hammer_and_wrench: | [LLM Price Check](https://llmpricecheck.com) | Preisvergleich aller Anbieter |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum Reasoning-Modelle teurer sind, auch wenn die Thinking-Tokens nicht sichtbar sind?
- [ ] Hast du eine Faustregel, wann du ein Reasoning-Modell einsetzen würdest und wann nicht?
- [ ] Verstehst du die "Start Small, Scale Up"-Strategie?
- [ ] Kannst du den Cost-Faktor für einen typischen Reasoning-Aufruf grob abschätzen?
