---
title: "Compute-Cost-Realität"
module: "7.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Compute-Cost-Realität

## Kernidee

Training großer Modelle kostet Millionen von Dollar, Fine-Tuning auf Consumer-Hardware ist für 7B-Modelle realistisch. Wer weiß, was Compute kostet, trifft bessere Entscheidungen: wann selber trainieren, wann API nutzen, wann Fine-Tunen sinnvoll ist.

## Im Detail

**Pretraining großer Modelle — für alle anderen:**
- Llama 3.1 70B: Meta hat Wochen auf tausenden GPUs trainiert — zig Millionen Dollar.
- Kein normaler Lernender macht das. Das ist Enterprise-Bereich.
- Das Ergebnis dieser Investition ist für uns kostenlos nutzbar (OSS-Modelle!).

**Fine-Tuning auf eigener Hardware — realistisch:**
- 7B-Modell mit QLoRA (4-bit Quantisierung + LoRA): 8-16GB VRAM — läuft auf RTX 4090 (24GB) oder High-End MacBook M4 Max (ca. 36GB UMA).
- 13B-Modell mit QLoRA: 12-24GB — braucht A100 oder 2× RTX 4090.
- Trainings-Zeit für kleinen Datensatz (1000 Samples, 3 Epochs): 30-90 Minuten auf Consumer-GPU.

**Cloud-Kosten für Experimente:**
- H100 (80GB): ~$2-4/h auf Lambda Labs, RunPod.
- A100 (40GB): ~$1-2/h.
- Ein Experiment (7B-Modell, 3h Training): $3-12.
- Budget für Modul 7.6 (Multi-GPU-Run): <50€ realistisch.

**API-Nutzung vs. eigenes Training:**
- Claude Sonnet 4.6 API: ~$3-5 pro 1M Tokens.
- 1000 Anfragen à 1000 Tokens: ~$3-5.
- Für viele Use-Cases günstiger als eigene Infrastruktur.
- **Faustregel:** API für Prototypen und niedriges Volumen, eigene Infrastruktur/Fine-Tuning für hohe Volumina und spezifische Domains.

**Compute für eigene Experimente in diesem Curriculum:**
- Modul 7.1 (micrograd, makemore): CPU reicht, <1h.
- Modul 7.2 (nanoGPT auf eigenem Korpus): GPU empfohlen, 1-3h, Consumer-GPU ausreichend.
- Modul 7.5 (Mini-GRPO-Run): Cloud-GPU, 1-3h, <30€.
- Modul 7.6 (Multi-GPU-Run auf 7B): Cloud-GPU, 1-3h, <50€.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📰 Blog | [Sebastian Raschka — LLM Training Costs](https://magazine.sebastianraschka.com) | Praktische Kostenabschätzungen |
| 🌐 Preise | [Lambda Labs GPU Pricing](https://lambdalabs.com/service/gpu-cloud) | Aktuelle Cloud-GPU-Preise |
| 🌐 Preise | [LLM Stats — API Pricing](https://llm-stats.com) | Vergleich API-Kosten |

## Teste dein Verständnis

- [ ] Wie viel VRAM braucht ein 7B-Modell für QLoRA Fine-Tuning (ungefähr)?
- [ ] Was kostet ein 3-Stunden-Trainings-Experiment auf einer A100 auf RunPod?
- [ ] Wann lohnt sich eigenes Fine-Tuning gegenüber API-Nutzung?
- [ ] Was ist der Unterschied zwischen Pretraining-Cost und Fine-Tuning-Cost in der Größenordnung?
