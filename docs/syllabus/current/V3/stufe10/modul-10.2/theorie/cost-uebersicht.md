---
title: "Fine-Tuning-Cost realistisch"
module: "10.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Fine-Tuning-Cost realistisch

## Kernidee

Fine-Tuning-Kosten sind 2026 für die meisten Use-Cases erschwinglich — aber nur mit PEFT-Methoden. Full Fine-Tuning ist fast nie sinnvoll. Wer die Kosten kennt, kann die "Fine-Tuning vs. Frontier-API"-Entscheidung ökonomisch fundiert treffen.

## Im Detail

**Typische Kosten 2026 (Cloud-GPU-Rental, H100):**

| Methode | Modell | Datensatz | Kosten | Trainingszeit |
|---|---|---|---|---|
| QLoRA | 7B | 10.000 Samples | 5-15 € | 2-4 Stunden |
| LoRA | 7B | 10.000 Samples | 10-30 € | 2-4 Stunden |
| LoRA | 13B | 10.000 Samples | 30-80 € | 4-8 Stunden |
| LoRA | 70B | 10.000 Samples | 150-400 € | 8-20 Stunden |
| Full Fine-Tuning | 7B | 10.000 Samples | 500-2.000 € | selten sinnvoll |
| Continued Pre-Training | 7B | 100GB Text | 1.000 € + | Spezial-Use-Cases |

**Kosten pro Iteration (nach ersten Run):**
- LoRA auf 7B: 1-5 € pro Iterations-Run (Hyperparameter-Anpassung, neuer Datensatz-Slice)
- Das macht schnelle Experimente realistisch — 10 Iterationen = 10-50 €

**Break-Even gegenüber Frontier-API:**
- Wenn du 10.000 Anfragen/Tag machst und Fine-getuntes 7B-Modell die gleiche Qualität wie GPT-5 (bei 0.015$/1K-Tokens) liefert:
- GPT-5-Kosten: ~150 €/Tag
- Fine-getuntes 7B auf eigenem Server (Hetzner H100): ~30 €/Tag
- Break-Even nach ~3-4 Monaten (bei einmaligen Fine-Tuning-Kosten von ~100 €)

**Managed Fine-Tuning (Together AI, OpenAI API):**
- Einfacher, aber teurer: Together AI berechnet per Token für Training + Inferenz
- Gut für ersten Versuch ohne eigene GPU-Verwaltung

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Service | [Lambda Labs GPU Pricing](https://lambdalabs.com/service/gpu-cloud) | Aktuelle Preise |
| 🛠️ Service | [Together AI Fine-Tuning](https://www.together.ai/fine-tuning) | Managed-Option |

## Teste dein Verständnis

- [ ] Was kostet ein typischer QLoRA-Run auf einem 7B-Modell mit 10.000 Samples?
- [ ] Warum ist Full Fine-Tuning fast nie sinnvoll verglichen mit LoRA?
- [ ] Wann lohnt sich Fine-Tuning ökonomisch gegenüber der Frontier-API?
