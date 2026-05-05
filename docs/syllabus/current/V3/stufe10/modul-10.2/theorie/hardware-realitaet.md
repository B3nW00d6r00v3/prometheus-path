---
title: "Hardware-Realität für Fine-Tuning 2026"
module: "10.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Hardware-Realität für Fine-Tuning 2026

## Kernidee

Die Hardware-Frage ist die praktischste beim Fine-Tuning: was kostet es, was brauche ich? 2026 ist die Antwort überraschend zugänglich — Consumer-Hardware reicht für kleine Modelle, Cloud-GPU-Rental macht große Modelle erschwinglich. Wer die Optionen kennt, trifft die richtige Entscheidung für sein Budget.

## Im Detail

**Option A — Cloud-GPU-Rental (empfohlen für die meisten):**
- Keine Hardware-Investition, zahle nur für Trainingszeit
- **Lambda Labs**: ~1-3 €/Stunde für H100, gutes UX
- **RunPod**: günstigstes H100 im Markt, Community-Pods auch günstiger
- **Modal**: serverless, zahle nur wenn der Job läuft — ideal für kurze Experiments
- **Typische Kosten:** 7B-LoRA-Run auf 10K Samples = 2-4 Stunden = 5-15 €

**Option B — Consumer-Hardware:**
- **24GB VRAM** (RTX 4090, RTX 3090, RTX 4080 Super): QLoRA auf 7B-Modellen, LoRA auf 3B
- **48GB VRAM** (Apple Silicon M3/M4 Max 128GB, 2x RTX 4090, A6000): LoRA auf 13B-Modellen
- Apple Silicon hat niedrige VRAM-Bandbreite — gut für lokales Inferenz, langsamer beim Training als NVIDIA-GPUs

**Option C — Managed Fine-Tuning (für 💼 oder schnelle Tests):**
- **Together AI**: Click-GUI, zahle pro Token, kein eigener Code
- **Fireworks AI**: ähnlich, gut für Production-Grade-Modelle
- **OpenAI Fine-Tuning API**: für GPT-Modelle, teurer, aber einfachste UX
- **Anyscale**: für Llama-Modelle

**Hardware-Faustregel 2026:**
- Erstes Experiment: Cloud-GPU (Modal oder RunPod) — kein Risiko, sofort verfügbar
- Regelmäßiges Training: Consumer-Hardware ab 24GB oder dauerhaftes Cloud-Setup

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Service | [Lambda Labs](https://lambdalabs.com) | GPU-Rental, gutes UX |
| 🛠️ Service | [RunPod](https://www.runpod.io) | Günstigstes H100 |
| 🛠️ Service | [Modal](https://modal.com) | Serverless, nur für Trainingszeit zahlen |
| 🛠️ Service | [vast.ai](https://vast.ai) | Marketplace, günstige Consumer-GPUs |

## Teste dein Verständnis

- [ ] Wie viel kostet ein 7B-LoRA-Run auf 10.000 Samples typischerweise?
- [ ] Welche Consumer-Hardware reicht für QLoRA auf 7B-Modellen?
- [ ] Wann ist Managed Fine-Tuning (Together AI etc.) der richtige Ansatz?
