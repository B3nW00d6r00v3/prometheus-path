---
title: "Cost-Engineering als Kerndisziplin"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: yellow
---

# Cost-Engineering als Kerndisziplin

## Kernidee

Bei LLM-Anwendungen macht API-Cost oft 50-80% des operativen Budgets aus — Cost-Engineering ist deshalb keine Optimierungs-Aufgabe am Ende, sondern eine Kern-Architektur-Entscheidung von Anfang an. Wer Cost nicht systematisch angeht, verliert die wirtschaftliche Kontrolle über seine Anwendung.

## Im Detail

**Sechs Optimierungs-Ebenen (in Reihenfolge des Aufwand-Nutzens):**

**1. Modell-Wahl — größter Hebel**
- Nicht jede Anfrage braucht ein Frontier-Modell.
- 70/25/5-Routing: 70% günstige schnelle Modelle (Haiku, Gemini Flash), 25% mittelgroße (Sonnet, GPT-4o-mini), 5% Frontier (Opus, GPT-5) nur für echte Komplexität.
- Kostenverhältnis 2026: Haiku zu Opus ca. 1:100. Richtiges Routing spart 80-90%.

**2. Prompt-Caching — sofortiger Effekt**
- Anthropic und OpenAI cachen lange, wiederkehrende System-Prompts.
- Bei System-Prompts mit 1000+ Tokens und häufigen Anfragen: bis zu 90% Token-Cost-Reduktion.
- Implementierung: Prompts so strukturieren, dass der stabile Teil (System-Prompt) vorne steht.

**3. Prompt-Optimierung**
- Kürzere Prompts: unnötige Wiederholungen, übermäßige Erklärungen im System-Prompt entfernen.
- Weniger Few-Shot-Beispiele, wenn nicht zwingend nötig.
- Konkrete, präzise Aufgabenbeschreibung statt langer Ausführungen.

**4. Context-Compression**
- Lange Konversations-Histories nicht vollständig mitsenden.
- Strategie: nach X Runden zusammenfassen (Summarization-Call), dann Zusammenfassung statt vollständige History.
- Reduktion von 10.000 Tokens auf 500 Tokens für History ist realistisch.

**5. Output-Limit**
- `max_tokens` explizit setzen, um ungewollt lange Outputs zu verhindern.
- Strukturierte Outputs (JSON) statt Prosa reduzieren oft Token-Count.

**6. Batching**
- Mehrere unabhängige Anfragen bündeln wo möglich.
- Async-Processing für nicht-zeitkritische Aufgaben.

**Cost-Tracking als Voraussetzung:** Ohne Messung kein Engineering. Helicone, Langfuse oder LangSmith tracken Cost pro Request, pro User, pro Tag — diese Daten sind Pflicht.

*Verfallsdatum: Aug 2026 — Modell-Pricing ändert sich häufig.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching) | Implementierungs-Guide |
| 📖 Docs | [Helicone Docs — Cost Optimization](https://docs.helicone.ai) | Praxis-Guide mit konkreten Metriken |

## Teste dein Verständnis

- [ ] Welcher Optimierungs-Hebel bringt in der Praxis typischerweise die größte Cost-Reduktion?
- [ ] Was ist Prompt-Caching und bei welchen Prompts bringt es am meisten?
- [ ] Erkläre das 70/25/5-Routing-Prinzip mit einem konkreten Beispiel.
