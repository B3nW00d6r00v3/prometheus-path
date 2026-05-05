---
title: "State-Management in Multi-Agent"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# State-Management in Multi-Agent

## Kernidee

In einem Multi-Agent-System stellt sich die Frage: wer weiß was, wann? State-Management definiert, welche Information zwischen Agents geteilt wird, wie sie kommunizieren und wann State gespeichert wird. LangGraph macht das explizit — andere Frameworks implizit, was Debugging erschwert.

## Im Detail

**Drei State-Modelle:**

**(1) Shared State** — alle Agents sehen denselben Zustand  
Einfach zu implementieren, aber Conflicting-Writes sind möglich. Gut für: kleine Systeme mit einfachem Datenfluss.

**(2) Message-Passing** — Agents sehen nur, was ihnen direkt gesendet wird  
Saubere Trennung, gut skalierbar, aber Aggregation auf höherer Ebene nötig.  
Gut für: Supervisor-Worker-Patterns.

**(3) Hybrid** — Shared State für globale Informationen, Message-Passing für lokale  
Pragmatik für Production-Systeme.

**LangGraph-Ansatz:** Shared State als explizites Python-Objekt (TypedDict oder Pydantic-Model), das durch den Graphen fließt. Jeder Node liest und schreibt in diesen State. Sehr transparent, gut debuggbar.

**Was in den State gehört:**
- Input-Daten
- Zwischen-Ergebnisse jedes Agents
- Tool-Call-History
- Cost-Akkumulator
- Status-Flags (welcher Schritt ist abgeschlossen?)

**Was nicht in den State gehört:**
- Rohe Tool-Results (zu groß) — lieber summarisiert
- Konversations-History ohne Compaction

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangGraph — State Management](https://langchain-ai.github.io/langgraph/concepts/) | LangGraph State-Konzepte |

## Teste dein Verständnis

- [ ] Erkläre den Unterschied zwischen Shared State und Message-Passing.
- [ ] Was ist der Vorteil von LangGraphs explizitem State-Objekt?
- [ ] Welche Informationen sollten in den State, welche nicht?
