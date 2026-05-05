---
title: "LLM-as-Judge in der Minimal-Form"
module: "5.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# LLM-as-Judge in der Minimal-Form

## Kernidee

LLM-as-Judge bedeutet: ein anderes (oft stärkeres) LLM bewertet den Output deines Systems gegen vorgegebene Kriterien und gibt strukturierte Scores zurück. Damit kannst du reference-free evaluieren, ohne jeden Output manuell zu lesen.

## Im Detail

Das Minimal-Pattern für LLM-as-Judge:

1. **Input**: die ursprüngliche Frage oder Aufgabe.
2. **Output**: die generierte Antwort deines Systems.
3. **Kriterien**: 2-3 Bewertungsdimensionen ("Ist die Antwort sachlich korrekt? Beantwortet sie die Frage? Ist sie auf Deutsch?").
4. **Judge-Output**: strukturierter Score (z.B. `{"korrekt": true, "vollständig": false, "sprache_korrekt": true, "gesamt": 2/3}`).

**Minimal-Prompt für den Judge:**

```
Du bist ein strenger, präziser Evaluator.

Frage: {question}
Antwort: {answer}

Bewerte die Antwort nach diesen Kriterien:
1. Ist sie sachlich korrekt? (ja/nein)
2. Beantwortet sie die Frage vollständig? (ja/nein)
3. Ist sie auf Deutsch verfasst? (ja/nein)

Antworte nur mit einem JSON-Objekt: {"korrekt": bool, "vollständig": bool, "deutsch": bool}
```

**Wichtige Einschränkungen der Minimal-Form:**

- Der Judge-LLM hat eigene Biases (mehr dazu in Modul 5.4).
- Für 5.0 reicht die Minimal-Form — Vertiefung mit Bias-Mitigationen kommt in 5.4.
- Nutze ein **stärkeres Modell als Judge** als Subject: Judge = Claude 3.5 Sonnet, Subject = Claude Haiku oder ein lokales Modell.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Eugene Yan — LLM-as-Judge](https://eugeneyan.com/writing/llm-evaluators/) | Gründliche Einführung mit Fallstricken |

## Teste dein Verständnis

- [ ] Kannst du den Minimal-Prompt für LLM-as-Judge in eigenen Worten erklären?
- [ ] Weißt du, warum der Judge-LLM stärker als das Subject sein sollte?
- [ ] Welche 2-3 Kriterien würdest du für deinen Use-Case wählen?
