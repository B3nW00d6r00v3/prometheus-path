---
title: "DSPy — Programmatisches Prompt-Optimieren"
module: "5.2"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# DSPy — Programmatisches Prompt-Optimieren

## Kernidee

DSPy (von Stanford) verfolgt einen ungewöhnlichen Ansatz: statt Prompts manuell zu schreiben, definierst du Signaturen (was rein, was raus) und DSPy optimiert die Prompts automatisch gegen Eval-Metriken. Besonders wertvoll für Foundations-Track und Lernende mit ML-Hintergrund.

## Im Detail

**Das Kernkonzept:**

In LangChain schreibst du Prompts manuell und testest sie. In DSPy beschreibst du nur das gewünschte Verhalten:

```python
import dspy

class QuestionAnswer(dspy.Signature):
    """Beantworte die Frage auf Basis des Kontexts."""
    context = dspy.InputField(desc="Relevante Informationen")
    question = dspy.InputField(desc="Die Frage")
    answer = dspy.OutputField(desc="Kurze, präzise Antwort")

qa = dspy.Predict(QuestionAnswer)
```

DSPy optimiert dann die Prompts (Few-Shot-Beispiele, Instruktionen) automatisch gegen deine Eval-Metriken.

**Wann DSPy:**
- Du willst Prompts systematisch optimieren statt manuell tunen.
- Du hast ein Eval-Set (aus Modul 5.0/5.4) und willst es nutzen.
- 🧮 Lernende mit ML/Forschungs-Hintergrund.

**Wann nicht DSPy:**
- Schnelle Prototypen ohne Eval-Set (→ LangChain/SDK).
- Production-Code mit klaren Typen (→ PydanticAI).

**Lernkurve:** Steiler als LangChain — konzeptionell anders. Rechne mit 2-3h Einarbeitung.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [DSPy Docs](https://dspy.ai) | Vollständige Dokumentation mit Tutorials |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen manuell geschriebenem Prompt (LangChain) und DSPy-Signatur erklären?
- [ ] Weißt du, was DSPy zur Optimierung benötigt (Hint: Eval-Set)?
- [ ] Für deinen Track und Use-Case: lohnt sich DSPy?
