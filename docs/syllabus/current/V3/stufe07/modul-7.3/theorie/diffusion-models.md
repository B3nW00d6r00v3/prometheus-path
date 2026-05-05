---
title: "Stable Diffusion und Diffusion Models"
module: "7.3"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Stable Diffusion und Diffusion Models

## Kernidee

Diffusion Models erzeugen Bilder, indem sie schrittweise Rauschen entfernen — von reinem Rauschen zu einem kohärenten Bild. Stable Diffusion (OSS) und Flux sind die wichtigsten Open-Source-Implementierungen. Text-Prompts steuern den Entrauschungs-Prozess über CLIP-Embeddings.

## Im Detail

**Der Diffusion-Prozess:** In zwei Phasen:
1. **Forward Process (Training):** Bild wird schrittweise mit Gaussian Noise überlagert, bis es reines Rauschen ist. Das Modell lernt, jede Rausch-Stufe zu erkennen.
2. **Reverse Process (Inferenz):** Start mit reinem Rauschen. Das Modell entfernt schrittweise Rauschen (U-Net oder Transformer-Backbone). Nach 20-50 Schritten entsteht ein kohärentes Bild.

**Latent Diffusion (Stable Diffusion):** Statt im Pixel-Raum (teuer) operiert SD im Latent-Raum eines VAE (Variational Autoencoder). Das reduziert den Rechenaufwand um 4-8×.

**Text-Konditionierung:** CLIP-Text-Encoder wandelt den Prompt in Embeddings um. Diese werden über Cross-Attention in den Diffusion-Prozess injiziert — das Rauschen wird in Richtung des Prompts entfernt.

**Wichtige Modelle 2026:**
- **Stable Diffusion XL / SD3** — Stable Diffusion Foundation, OSS.
- **Flux (Black Forest Labs)** — Nachfolger von SD, OSS, stärker in Prompt-Following.
- **DALL-E 3** (OpenAI) — proprietär, sehr gut in Prompt-Following.
- **Midjourney** — proprietär, stark in künstlerischer Qualität.
- **Imagen** (Google) — proprietär.

**Praxis-Tools (OSS):**
- **ComfyUI** — modulares Node-basiertes UI für SD/Flux.
- **Automatic1111** — klassisches WebUI für SD.
- **Hugging Face Diffusers** — Programmier-Library für Diffusion-Pipelines.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Stable Diffusion 3 Paper (Esser et al. 2024)](https://arxiv.org/abs/2403.03206) | Architektur-Erklärung |
| 🌐 Docs | [Hugging Face Diffusers](https://huggingface.co/docs/diffusers/index) | OSS-Library für Diffusion-Modelle |
| 🌐 Tool | [ComfyUI](https://www.comfy.org) | Lokales UI für Stable Diffusion |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Forward- und Reverse-Prozess beim Diffusion-Training?
- [ ] Warum ist Latent Diffusion (Stable Diffusion) effizienter als Pixel-Diffusion?
- [ ] Wie wird ein Text-Prompt in den Diffusion-Prozess eingebracht?
- [ ] Was ist der Unterschied zwischen Stable Diffusion und Midjourney aus Anwender-Sicht?
