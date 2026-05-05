---
title: "OSS Multimodale Modelle"
module: "7.4"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# OSS Multimodale Modelle

## Kernidee

Open-Source-Multimodal-Modelle (Llama 3.2 Vision, Qwen-VL, LLaVA) laufen lokal via Ollama oder vLLM — ohne Cloud-Abhängigkeit. Sie sind entscheidend für DSGVO-sensible Anwendungen und Cost-kritische Volumen-Anwendungen.

## Im Detail

**Wichtigste OSS-Multimodal-Modelle 2026:**

- **Llama 3.2 Vision** (Meta, Llama Community License) — 11B und 90B mit Vision. Gute allgemeine Vision-Performance, über Ollama lokal nutzbar.

- **Qwen 2.5-VL / Qwen3-VL** (Alibaba, Apache 2.0) — starke multimodale Modelle mit gutem Deutsch-Support. Benchmark-Spitze im OSS-Bereich für viele Vision-Tasks.

- **LLaVA** (Haotian Liu et al.) — Klassiker der multimodalen OSS-Modelle, viele Varianten.

- **Pixtral** (Mistral) — Mistral's Vision-Modell, kommerziell nutzbar.

- **Gemma 3 Vision** (Google) — klein, effizient, Vision-fähig.

**Deployment 2026:**

- **Ollama** — einfachste lokale Option. `ollama pull llama3.2-vision:11b` und fertig.
- **vLLM** — Production-Deployment für höhere Durchsätze, GPU-Optimierung.
- **LM Studio** — Desktop-App für lokale Modelle (einfacher als Ollama für Nicht-Entwickler).

**Wann OSS vs. Cloud:**
- **OSS wählen:** DSGVO-sensible Daten, hohe Volumina (Cost), kein Internet auf Edge-Device, eigene Fine-Tuning-Kontrolle.
- **Cloud wählen:** Höchste Qualität nötig, niedrige Volumina, keine eigene Infra.

*Verfallsdatum: Aug 2026 — neue Modelle erscheinen monatlich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Modelle | [Ollama — Vision Models](https://ollama.com/search?c=vision) | Fertige Vision-Modelle für Ollama |
| 🛠️ Code | [Qwen-VL GitHub](https://github.com/QwenLM/Qwen-VL) | Qwen Vision-Language-Modell |
| 🌐 Modelle | [Hugging Face — Multimodal](https://huggingface.co/models?pipeline_tag=image-text-to-text) | Alle OSS-Multimodal-Modelle |

## Teste dein Verständnis

- [ ] Welche OSS-Multimodal-Modelle können via Ollama lokal betrieben werden?
- [ ] Was sind die drei Hauptgründe, OSS statt Cloud für multimodale Aufgaben zu wählen?
- [ ] Was ist der Unterschied zwischen Ollama und vLLM für lokale Inferenz?
- [ ] Wie schätzt du die Qualität von Qwen3-VL gegenüber Claude Sonnet 4.6 ein — wofür ausreichend?
