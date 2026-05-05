---
title: "Compaction als Pflicht-Pattern"
module: "6.0"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Compaction als Pflicht-Pattern

## Kernidee

Jeder langlebige Agent läuft irgendwann gegen das Context-Limit — das ist keine Ausnahme, sondern die Regel. Compaction ist die Antwort: ein explizites Pattern, das definiert, wie ältere Context-Inhalte komprimiert oder ausgelagert werden, bevor das Window voll ist. Es gibt vier bewährte Strategien; mindestens eine davon gehört in jede Production-Agent-Implementierung.

## Im Detail

**Vier Compaction-Strategien im Vergleich:**

**(1) Sliding Window mit Summary**
Alte Messages werden komprimiert und am Anfang als Summary aufbewahrt. Vorteil: einfach zu implementieren (~50 Zeilen Python). Nachteil: Informationsverlust bei der Komprimierung. Gut für: Konversations-Agenten, Chat-Bots.

**(2) LLM-as-Compactor**
Ein anderes (oft günstigeres) LLM komprimiert die Trajectory-History zu einem strukturierten Snapshot. Vorteil: höhere Qualität der Komprimierung. Nachteil: zusätzliche API-Kosten, Latenz. Gut für: komplexe Workflows, wo Trajectory-Genauigkeit wichtig ist.

**(3) Sub-Agent-Delegation**
Frischer Context-Window pro Sub-Agent — der Parent-Agent bekommt nur Summary zurück. Vorteil: kein Informationsverlust für den Sub-Task. Nachteil: Coordination-Overhead. Gut für: parallelisierbare Aufgaben, klare Sub-Task-Grenzen.

**(4) External Memory**
File oder Datenbank statt Window — der Agent retrieved on-demand. Vorteil: unbegrenzte History. Nachteil: Retrieval-Qualität kritisch, Latenz. Gut für: Agenten mit langem Gedächtnis (Tage, Wochen).

**Compaction-Trigger:** Definiere eine Token-Schwelle (z.B. 80 % des Context-Limits). Beim Erreichen: welche Strategie wird ausgeführt?

**Pflicht-Implementierung:** Mindestens eine der vier Strategien auf die eigene Stufe-5-Anwendung anwenden. Vorher-Nachher-Vergleich dokumentieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Compaction als Kern-Pattern |
| 🛠️ Framework | [Letta (vormals MemGPT)](https://letta.com) | OSS-Memory-Framework mit eingebauter Compaction |
| 🛠️ Tool | [Langfuse](https://langfuse.com) | Tracking des Context-Window-Verlaufs |

## Teste dein Verständnis

- [ ] Kannst du die vier Compaction-Strategien mit je einem Satz beschreiben?
- [ ] Für welche Use-Case-Klasse wählst du welche Strategie?
- [ ] Hast du mindestens eine Strategie für deine eigene App implementiert?
- [ ] Hast du einen Compaction-Trigger (Token-Schwelle) definiert?
