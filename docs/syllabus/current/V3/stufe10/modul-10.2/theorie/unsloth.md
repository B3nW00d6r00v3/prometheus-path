---
title: "Unsloth — Speed-Optimierung"
module: "10.2"
type: theorie
fast_track: false
effort: "10min"
stability: yellow
---

# Unsloth — Speed-Optimierung

## Kernidee

Unsloth macht dasselbe wie TRL/Axolotl, aber 2-5x schneller — durch Custom-CUDA-Kernels, die Hugging Face's Standard-Implementierung nicht nutzt. Für Consumer-Hardware und schnelle Iterations-Zyklen ist Unsloth 2026 oft die erste Wahl.

## Im Detail

**Was Unsloth optimiert:**
- Custom CUDA-Kernels für Attention und andere kritische Berechnungen
- Reduzierter Memory-Footprint durch Gradient-Checkpointing-Optimierungen
- Ergebnis: 2-5x schneller bei gleicher Qualität, ~50% weniger VRAM-Nutzung

**Wann Unsloth:**
- Consumer-Hardware (RTX 4090, Apple Silicon) — jede Stunde Training kostet Zeit und/oder Geld
- Cloud-GPU-Rental — direkter €-Vorteil durch halbe Trainings-Zeit
- Schnelle Experimentier-Iterationen: neuen Datensatz testen, neuen Hyperparameter prüfen

**Unsloth-Modelle auf Hugging Face:**
Unsloth bietet viele populäre Modelle vorquantisiert und Unsloth-optimiert an (`unsloth/Qwen2.5-7B-Instruct`, `unsloth/Llama-3.2-3B-Instruct`), die noch schneller laden und trainieren.

**Einschränkungen:**
- Nicht alle Modelle und Methoden unterstützt (aber die wichtigsten schon)
- Community-Projekt, weniger Enterprise-Support als Hugging Face

*Verfallsdatum: Nov 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Repo | [Unsloth GitHub](https://github.com/unslothai/unsloth) | Quellcode |
| 📖 Docs | [Unsloth Dokumentation](https://docs.unsloth.ai) | Tutorials und API |
| 🤗 Hub | [Unsloth Modelle auf HF](https://huggingface.co/unsloth) | Voroptimierte Modelle |

## Teste dein Verständnis

- [ ] Wie viel schneller ist Unsloth typischerweise verglichen mit Standard TRL?
- [ ] Warum ist Unsloth besonders relevant für Consumer-Hardware?
- [ ] Was sind die Einschränkungen von Unsloth?
