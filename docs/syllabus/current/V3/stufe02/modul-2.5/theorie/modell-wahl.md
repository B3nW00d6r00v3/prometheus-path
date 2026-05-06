---
title: "Welches Modell für welchen Task?"
module: "2.5"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Welches Modell für welchen Task?

## Kernidee

Es gibt keine universelle Antwort, aber klare Heuristiken: Schnelle einfache Tasks brauchen ein kleines, günstiges Modell. Komplexes Reasoning braucht ein Frontier-Modell. Lange Dokumente brauchen großen Context. Privatsphäre-kritische Daten brauchen ein lokales Modell. Wie bei Werkzeug: Du nimmst nicht den Vorschlaghammer für einen Nagel — und nicht den Uhrmacher-Schraubenzieher für eine Schraube im Dachbalken.

## Im Detail

### Die Entscheidungs-Matrix

| Use Case | Empfohlenes Tier | Konkrete Modelle (Mai 2026) |
|----------|-----------------|---------------------------|
| Einfache Fragen, FAQ, Klassifikation | Tier 1 (günstig) | Haiku 3.5, Gemini Flash, GPT-4o-mini, Llama 3.2 (lokal) |
| Standard-Coding-Aufgaben | Tier 2 (standard) | Sonnet 4.6, GPT-5, Qwen 3 Coder (OSS) |
| Komplexes Reasoning, Debugging | Tier 3 (premium) | Opus 4.7, o3, DeepSeek R1 |
| Lange Dokumente (>100 Seiten) | Großer Context | Gemini 3.1 (2M), Claude (1M) |
| Privatsphäre-kritische Daten | Lokal | Llama 4, Qwen 3, Gemma 4 via Ollama |
| Recherche mit aktuellen Daten | Web-Suche | Perplexity, ChatGPT mit Browsing |
| Deutsche Sprache (Qualität) | Gute Deutsch-Modelle | Claude, Gemma 4, Mistral 3 |
| EU-Compliance | Europäischer Anbieter | Mistral 3 (Frankreich) |

### Die vier Entscheidungs-Dimensionen

Bei jeder Modell-Wahl wägst du vier Dimensionen ab:

**1. Qualität:** Wie gut muss die Antwort sein? Für einen internen Slack-Bot reicht Tier 1. Für einen kundengerichteten Beratungs-Bot brauchst du Tier 2-3.

**2. Kosten:** Wie viele Anfragen pro Tag? Bei 100 Anfragen/Tag ist selbst Opus bezahlbar. Bei 1 Million Anfragen/Tag entscheiden Cent-Bruchteile über tausende Euro.

**3. Latenz:** Wie schnell muss die Antwort kommen? Echtzeit-Chat braucht schnelle Modelle (Haiku: ~200ms, Opus: ~2-5s). Batch-Verarbeitung über Nacht kann auch langsame Modelle nutzen.

**4. Compliance:** Dürfen die Daten in die Cloud? Wenn nicht: lokales Modell. Muss es ein EU-Anbieter sein? Dann Mistral.

### Häufige Fehler bei der Modell-Wahl

**"Immer das beste Modell nehmen":** Das ist wie immer Business Class fliegen — teuer und für die meisten Reisen unnötig. 80% der Aufgaben löst ein Tier-2-Modell genauso gut.

**"Das günstigste Modell für alles":** Spart Geld, aber liefert bei komplexen Aufgaben schlechte Ergebnisse. Wenn der Bot falsche Antworten gibt, kostet das mehr als das teurere Modell.

**"Nie wechseln":** Modelle verbessern sich quartalsweise. Was im Januar das beste war, kann im April von einem günstigeren Modell übertroffen werden. Regelmäßig evaluieren.

**"OSS ist immer besser/schlechter":** Weder noch. OSS ist besser für Datensouveränität und langfristige Kosten, schlechter für maximale Cutting-Edge-Qualität und einfaches Setup.

### Dein persönlicher Entscheidungsbaum

1. **Sensible Daten?** → Ja: lokales Modell (Ollama)
2. **Braucht es Reasoning?** → Ja: Opus 4.7, o3, DeepSeek R1
3. **Langes Dokument (>50 Seiten)?** → Ja: Gemini 3.1 oder Claude
4. **Aktuelle Informationen nötig?** → Ja: Perplexity oder ChatGPT
5. **Standard-Aufgabe?** → Ja: Sonnet 4.6 oder GPT-5
6. **Einfach + günstig?** → Ja: Haiku 3.5 oder GPT-4o-mini

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [LLM Stats](https://llm-stats.com) | Preise + Benchmarks im Vergleich |
| :hammer_and_wrench: | [LMSYS Chatbot Arena](https://lmarena.ai) | Praxis-basierter Vergleich |
| :hammer_and_wrench: | [Artificial Analysis](https://artificialanalysis.ai) | Speed + Kosten + Qualität |

## Teste dein Verständnis

- [ ] Hast du deinen eigenen Modell-Wahl-Cheat-Sheet erstellt?
- [ ] Kannst du für jeden deiner drei häufigsten Use-Cases das passende Modell benennen und begründen?
- [ ] Verstehst du die vier Entscheidungs-Dimensionen (Qualität, Kosten, Latenz, Compliance)?
- [ ] Kannst du den Entscheidungsbaum auf ein neues Szenario anwenden?
