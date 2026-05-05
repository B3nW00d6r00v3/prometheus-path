---
title: "Context-Pollution-Antipatterns"
module: "6.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Context-Pollution-Antipatterns

## Kernidee

Context Pollution bedeutet: der Agent hat zwar theoretisch alle nötigen Informationen im Window, aber durch zu viel Rauschen kann er nicht mehr effektiv darin navigieren. Fünf Antipatterns sind 2026 besonders häufig — und alle vermeidbar.

## Im Detail

**(1) Zu viele Tool-Definitions** — „alles könnte nützlich sein"  
Jede Tool-Definition kostet Tokens. 20 Tools mit je 200 Token Description = 4.000 Token nur für Tool-Definitionen, bevor irgendeine User-Message da ist. Das Modell wird verwirrt, trifft schlechtere Tool-Auswahl, und das Budget ist weg. **Lösung:** Lazy Loading — nur die Tools registrieren, die für den aktuellen Task relevant sind. Brücke zu Modul 5.6 Skills-Pattern.

**(2) Zu lange Tool-Results ohne Filter**  
Ein einziger Web-Search-Call kann 50.000 Tokens HTML zurückgeben. Wenn das ungefiltert in den Context geht, ist der Agent für die nächsten 20 Schritte mit Rauschen vergiftet. **Lösung:** Tool-Result-Truncation und -Filterung vor dem Einfügen in den Context.

**(3) Konversations-History ohne Summary**  
Ab Turn 30 wird es eng. Alle früheren Turns zu behalten frisst den Context auf. **Lösung:** Compaction (Sliding Window mit Summary oder LLM-Compactor).

**(4) RAG-Retrieval zu aggressiv**  
Top-50 Chunks statt Top-5 mit Reranker. 45 rauschartige Chunks vergiften den Context für die relevanten 5. **Lösung:** Reranking-Cascade (Brücke zu Modul 5.1 RAG-Frontier-Block).

**(5) Skills naiv geladen**  
Alle Skills in jeden Run, statt on-demand Discovery. Brücke zu Modul 5.6.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Enthält Antipattern-Übersicht |
| 📖 Vertiefung | [Modul 5.6: Skills-Pattern](../../modul-5.6/index.md) | Lazy Loading für Skills |

## Teste dein Verständnis

- [ ] Kannst du die fünf Antipatterns mit je einem Satz beschreiben?
- [ ] Welche der fünf Antipatterns hast du auf deine eigene App identifiziert?
- [ ] Was ist die Lösung für zu aggressive RAG-Retrieval?
