---
title: "KI-Produkt-Heuristiken"
module: "3.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# KI-Produkt-Heuristiken

## Kernidee

Klassische UX-Heuristiken (wie Nielsens 10) reichen für KI-Produkte nicht. KI bringt zusätzliche Anforderungen mit: Der Nutzer muss wissen, *dass* es KI ist, *wann* sie falsch liegen kann, und *wie* er korrigieren kann. Microsoft hat 18 Heuristiken speziell für Mensch-KI-Interaktion definiert — die wichtigsten solltest du kennen.

## Im Detail

Bei KI-Produkten gelten zusätzliche UX-Regeln, die über klassische Usability hinausgehen:

**Die drei wichtigsten KI-UX-Prinzipien:**

1. **Erwartungs-Management:** Nutzer muss wissen, dass es KI ist und was sie kann/nicht kann. Keine "Magie" vortäuschen. Klare Kommunikation der Fähigkeiten und Grenzen.

2. **Korrigierbarkeit:** Nutzer muss falsche Outputs korrigieren können. Kein KI-System ist perfekt — wenn der Nutzer nicht korrigieren kann, wird Frustration zum Dealbreaker. Undo, Edit, Feedback-Optionen sind Pflicht.

3. **Transparenz:** Quellen zeigen (woher kommt die Antwort?), Confidence kommunizieren (wie sicher ist die KI?), Erklärbarkeit bieten (warum diese Antwort?).

**Microsofts 18 Heuristiken für Human-AI Interaction (Auswahl der wichtigsten):**

- **G1: Make clear what the system can do** — Fähigkeiten transparent machen
- **G2: Make clear how well the system can do what it can do** — Zuverlässigkeit kommunizieren
- **G6: Mitigate social biases** — Verzerrungen aktiv minimieren
- **G8: Support efficient invocation** — Einfacher Zugang zur KI-Funktion
- **G9: Support efficient dismissal** — Einfaches Ablehnen von KI-Vorschlägen
- **G11: Make clear why the system did what it did** — Erklärbarkeit
- **G14: Learn from user behavior** — Aus Nutzervhalten lernen und anpassen
- **G16: Convey the consequences of user actions** — Auswirkungen zeigen
- **G18: Encourage granular feedback** — Detailliertes Feedback ermöglichen

**Google PAIR Guidebook** ergänzt mit praktischen Patterns:

- Mental Models aufbauen (Nutzer muss ein korrektes Bild der KI-Fähigkeiten haben)
- Graceful Degradation (wenn KI scheitert, sollte der Fallback funktionieren)
- Feedback Loops (Nutzer-Korrekturen fließen zurück)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Microsoft Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/) | 18 Heuristiken mit Forschungsbasis |
| 📖 | [Google PAIR Guidebook](https://pair.withgoogle.com/guidebook/) | Praxisorientierter Guide |
| 📖 | [NN/g — AI UX](https://www.nngroup.com) | Laufend aktualisierte Artikel |

## Teste dein Verständnis

- [ ] Kannst du die drei wichtigsten KI-UX-Prinzipien (Erwartungs-Management, Korrigierbarkeit, Transparenz) erklären?
- [ ] Warum reichen Nielsens klassische 10 Heuristiken für KI-Produkte nicht?
- [ ] Nenne drei von Microsofts 18 Heuristiken und erkläre, warum sie bei KI wichtig sind.
