---
title: "Case: Air Canada Chatbot-Lawsuit (2024)"
module: "9.7"
type: theorie
fast_track: true
effort: "30min"
stability: green
---

# Case: Air Canada Chatbot-Lawsuit (2024)

## Kernidee

Ein Air-Canada-Chatbot gab falsche Informationen über Trauerfall-Tarife. Ein kanadisches Gericht entschied: Air Canada haftet für die Aussagen des Chatbots. Der Case etabliert Präzedenz: LLM-Outputs sind rechtsverbindliche Unternehmens-Aussagen.

## Im Detail

**Was ist passiert?**

Ein Passagier befragte den Air-Canada-Chatbot zu Trauerfall-Tarifen (Rabatt bei kurzfristigen Flügen bei Beerdigung). Der Chatbot gab falsche Informationen — behauptete, der Rabatt sei auch rückwirkend beantragbar, was nach den tatsächlichen Air-Canada-Richtlinien nicht der Fall war. Air Canada versuchte sich damit zu verteidigen, dass der Chatbot ein eigenständiges Rechtssubjekt sei und nicht für seine Aussagen hafte. Das Gericht lehnte diese Verteidigung ab: Air Canada haftet für seinen Chatbot.

**Failure-Mode-Klassifikation:**
- **Primär: Compliance-Failure** — keine Haftungs-Klärung für Chatbot-Outputs, keine Unterscheidung zwischen informativen Aussagen und verbindlichen Zusagen.
- **Sekundär: Technik-Failure** — Halluzination von Unternehmens-Richtlinien, kein Faktencheck-Mechanismus, keine Eskalation bei Policy-Fragen an menschliche Agenten.

**Lehre-Extraktion:**
- LLM-Outputs sind rechtsverbindliche Unternehmens-Aussagen — ab sofort Standard-Annahme.
- Für alle Policy-Fragen: Retrieval aus verifizierter Quelle (RAG auf offizielle Richtlinien), nicht Generierung.
- Disclaimer allein schützt nicht — der Gericht entschied trotz Disclaimer zugunsten des Klägers.

*Verfallsdatum: alle 6 Monate — rechtliche Entwicklungen.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Presse | Reuters, CBC News (2024) | Berichte zur Gerichtsentscheidung |

## Teste dein Verständnis

- [ ] Welche technische Maßnahme hätte den Air-Canada-Fall mit hoher Wahrscheinlichkeit verhindert?
- [ ] Welche rechtliche Konsequenz hat das Urteil für alle Unternehmen, die LLM-Chatbots einsetzen?
- [ ] Welche Lehre überträgst du auf die Haftungs-Bewertung deines Capstone-Use-Cases?
