---
title: "Decision-Framework: Fine-Tuning vs. RAG vs. Prompt-Engineering"
module: "10.2"
type: theorie
fast_track: true
effort: "20min"
stability: green
---

# Decision-Framework: Fine-Tuning vs. RAG vs. Prompt-Engineering

## Kernidee

Die häufigste Entscheidungs-Falle 2026 ist, Fine-Tuning zu wählen, wenn besseres Prompting oder RAG das Problem lösen würden. Dieses Framework gehört **vor** jede Fine-Tuning-Investition: erst entscheiden, dann investieren. 80% der vermeintlichen Fine-Tuning-Bedarfe lassen sich mit Prompting + RAG lösen.

## Im Detail

**Die Entscheidungs-Hierarchie (in dieser Reihenfolge prüfen):**

**1. Prompt-Engineering — erste Wahl**
- **Wann es reicht:** allgemeine Aufgaben, gut definierte Outputs, wenn Few-Shot-Examples + System-Prompt das Verhalten erzeugen.
- **Test:** schaffst du es mit 5-10 sorgfältig kuratierten Few-Shot-Examples auf Frontier-Modellen (Claude Opus, GPT-5)? Dann brauchst du wahrscheinlich kein Fine-Tuning.
- **Cost:** niedrigste, sofort verfügbar, keine Compute-Investition.

**2. RAG — zweite Wahl, wenn Prompting nicht reicht**
- **Wann es reicht:** wenn das Problem ist "Modell weiß nicht über meine Daten" — RAG holt relevante Daten zur Inferenz-Zeit.
- **Test:** ist das Problem Faktenwissen oder Domain-Daten, die das Modell nicht hat? Dann ist RAG fast immer besser als Fine-Tuning.
- **Cost:** mittel, Setup-Aufwand für Embeddings + Vector-Store, aber kein Training.

**3. Fine-Tuning — dritte Wahl, nur wenn die ersten beiden nicht reichen**
- **Wann es lohnt:** sehr spezialisierte Sprache (medizinisch, juristisch, Brand-spezifisch im Stil), Cost-Reduktion durch kleines fine-getuntes Modell statt Frontier-API, strenges Output-Format-Erzwingen, Preference-Tuning für eigenes Brand-Verhalten.
- **Cost:** hoch — Daten-Aufbereitung, Compute, Eval, Modell-Updates bei neuen Foundation-Versionen.

**Konkrete Entscheidungs-Beispiele:**

| Problem | Richtige Lösung | Falsche Lösung |
|---|---|---|
| Fragen zu interner Wissensdatenbank | **RAG** | Fine-Tuning |
| Schreiben im Brand-Voice | Erst **Few-Shot testen**, dann ggf. Fine-Tuning | Sofort Fine-Tuning |
| 80% Cost-Reduktion bei API-Kosten | **Fine-Tuning eines kleinen Modells** | Frontier-API-Optimierung |
| Halluziniert Fakten | **RAG** | Fine-Tuning (macht es oft schlimmer!) |
| Perfektes JSON-Schema einhalten | Erst **Structured Outputs/Function Calling**, dann Few-Shot | Fine-Tuning |
| Reasoning auf Domain-Pattern | Erst **Reasoning-Modelle + Prompt-Engineering**, dann RAG | Sofort Fine-Tuning |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Sebastian Raschka — Fine-tuning vs RAG vs Prompt](https://magazine.sebastianraschka.com) | Klare Abwägungen |
| 📖 Docs | [Anthropic — When to Fine-tune](https://docs.claude.com) | Offizielle Empfehlungen |

## Teste dein Verständnis

- [ ] In welcher Reihenfolge sollte man Prompt-Engineering, RAG und Fine-Tuning prüfen?
- [ ] Wenn ein Modell Fakten halluziniert — ist Fine-Tuning oder RAG die richtige Lösung?
- [ ] Welcher Use-Case rechtfertigt tatsächlich Fine-Tuning als erste Wahl?
