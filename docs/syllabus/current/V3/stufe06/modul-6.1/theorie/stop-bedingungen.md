---
title: "Loop-Steuerung: Stop-Bedingungen"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Loop-Steuerung: Stop-Bedingungen

## Kernidee

Ein Agent ohne Stop-Bedingungen läuft endlos — oder bis das Budget weg ist. Vier Stop-Bedingungen gehören in jeden Production-Agent: maximale Iterationen, Final-Answer-Detektion, Cost-Limit und Time-Limit. Alle vier gleichzeitig, nicht nur eine.

## Im Detail

**Die vier Pflicht-Stop-Bedingungen:**

**(1) Max Iterations**  
Typisch: 10-20 Iterationen. Wenn der Agent nach 15 Schritten die Aufgabe nicht gelöst hat, ist etwas fundamental schiefgelaufen. Hart codiertes Limit, keine Ausnahmen.

**(2) Final Answer detektiert**  
Das LLM signalisiert Abschluss durch einen festgelegten Pattern (z.B. kein weiterer Tool-Call, ein spezielles `FINAL_ANSWER:`-Keyword, oder ein Boolean-Flag in strukturiertem Output). Muss explizit implementiert werden — das Modell hört nicht von selbst auf.

**(3) Cost Limit**  
Max Tokens oder max € pro Run. Bei 10 Iterationen × 1.000 Tokens × Claude Opus 4.6-Preise kann ein Run schnell mehrere Dollar kosten. Cost-Tracking pro Run ist Pflicht.

**(4) Time Limit**  
Max Sekunden oder Minuten pro Run. Verhindert hängende Runs bei langsamen Tool-Calls oder Netzwerk-Timeouts.

**Implementierungs-Pattern:**

```python
for iteration in range(MAX_ITERATIONS):
    if total_cost > COST_LIMIT:
        return "Cost limit reached"
    if time.time() - start_time > TIME_LIMIT:
        return "Time limit reached"
    response = llm_call(messages)
    if is_final_answer(response):
        return response
    # Tool-Call ausführen, Messages erweitern
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Stop-Bedingungen als Sicherheitsmuster |
| 📖 Cookbook | [Anthropic Cookbook — Agents](https://github.com/anthropics/anthropic-cookbook/tree/main/tool_use) | Praktische Implementierungsbeispiele |

## Teste dein Verständnis

- [ ] Nenne alle vier Pflicht-Stop-Bedingungen für einen Production-Agent.
- [ ] Warum reicht Max-Iterations allein nicht aus?
- [ ] Wie erkennt ein Agent programmatisch, dass er eine Final Answer gegeben hat?
