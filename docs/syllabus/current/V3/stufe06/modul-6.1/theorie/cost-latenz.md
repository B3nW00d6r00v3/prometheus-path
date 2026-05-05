---
title: "Cost und Latenz von Agenten"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Cost und Latenz von Agenten

## Kernidee

Ein Agent-Run mit 10 Iterationen ist 10-mal teurer und 10-mal langsamer als ein einzelner LLM-Call. Das ist keine Warnung, es auszulassen — es ist ein Planungs-Parameter. Cost und Latenz müssen von Anfang an gemessen und optimiert werden, nicht nachträglich.

## Im Detail

**Cost-Rechnung:**

```
10 Iterationen × 1.000 Input-Tokens × 500 Output-Tokens
= 10.000 Input + 5.000 Output Tokens pro Run

Bei Claude Sonnet 4.6-Preisen (Mai 2026): ~$0.10-0.30 pro Run
Bei komplexeren Agenten: schnell $1-5 pro Run
```

**Latenz-Rechnung:**

10 sequenzielle LLM-Aufrufe × 3-6 Sekunden pro Call = **30-60 Sekunden Wartezeit** für einen Agent-Run. Für interaktive Use-Cases ist das oft zu lang.

**Optimierungen:**

1. **Parallele Tool-Calls** — wenn mehrere Tools unabhängig aufgerufen werden können, parallel statt sequenziell. Viele moderne LLMs unterstützen parallele Function-Calls nativ.

2. **Kleineres Modell für einfache Iterationen** — nicht jede Iteration braucht das stärkste Modell. Router: einfache Reasoning-Steps mit günstigerem Modell, komplexe mit stärkerem.

3. **Caching wiederkehrender Tool-Outputs** — wenn ein Tool denselben Input mehrfach bekommt (z.B. Web-Search mit gleicher Query), Ergebnis cachen. Prompt-Caching für den System-Prompt.

4. **Stop-Bedingungen eng setzen** — je früher der Agent fertig ist, desto weniger Iterations-Cost.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 💰 Pricing | [Anthropic Pricing](https://www.anthropic.com/pricing) | Aktuelle Claude-Preise |
| 🛠️ Tool | [Langfuse](https://langfuse.com) | Cost-Tracking pro Agent-Run |

## Teste dein Verständnis

- [ ] Berechne die geschätzten Kosten für deinen ReAct-Agent bei 10 Iterationen (mit aktuellen Preisen).
- [ ] Welche drei Optimierungen reduzieren Agent-Cost effektiv?
- [ ] Warum ist Latenz bei Agent-Runs strukturell höher als bei Single-Calls?
