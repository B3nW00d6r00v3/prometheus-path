---
title: "Wann Fine-Tuning?"
module: "10.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann Fine-Tuning?

## Kernidee

Fine-Tuning lohnt sich 2026 in vier konkreten Szenarien — nicht mehr, nicht weniger. Foundation-Modelle plus gute Prompts plus RAG decken 80% der Bedarfe ab. Den Rest adressiert Fine-Tuning gezielt, nicht als Default-Lösung.

## Im Detail

**Fine-Tuning NICHT sinnvoll — stattdessen Prompting + RAG:**
- Domain-Wissen einbetten (RAG ist besser und flexibler)
- Halluzinationen reduzieren (RAG ist besser — Fine-Tuning macht es oft schlimmer)
- Output-Format erzwingen (Structured Outputs / Function Calling in modernen APIs)
- Weniger als 100 Beispiele verfügbar (Few-Shot reicht dann)

**Fine-Tuning SINNVOLL — die vier legitimen Szenarien 2026:**

1. **Sehr spezialisierte Sprache**: medizinisch, juristisch, technisch-spezifisch. Wenn Foundation-Modelle die Domäne nur schwach abdecken und RAG nicht genug bringt.

2. **Cost-Reduktion bei hohem Volumen**: kleines fine-getuntes 7B-Modell auf einer spezifischen Aufgabe schlägt GPT-5 zu einem Bruchteil der Kosten. Klassischer Business-Case: 10.000 tägliche Anfragen, Qualitäts-Parität erreichbar.

3. **Strenges Output-Format / Konsistenz**: wenn Function-Calling und Structured Outputs nicht reichen und das Modell bei jedem Output präzises Format einhalten muss.

4. **Preference-Tuning für eigenes Brand-Verhalten**: wenn nach Decision-Framework-Test (5-10 Few-Shot-Beispiele + System-Prompt) die Brand-Voice immer noch nicht stimmt.

**Die 80%-Faustregel:** 80% der vermeintlichen Fine-Tuning-Bedarfe lassen sich mit besserem Prompting + RAG lösen. Wer ohne diese Prüfung in Fine-Tuning investiert, verbrennt Wochen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Hugging Face — When to fine-tune](https://huggingface.co/docs/transformers/training) | Technische Perspektive |

## Teste dein Verständnis

- [ ] Welche vier Szenarien rechtfertigen Fine-Tuning 2026?
- [ ] Was ist die 80%-Faustregel?
- [ ] Warum macht Fine-Tuning Halluzinationen oft schlimmer statt besser?
