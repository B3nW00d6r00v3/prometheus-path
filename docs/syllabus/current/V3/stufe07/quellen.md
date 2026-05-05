---
title: "Quellen für Stufe 7"
module: "7"
type: quellen
stability: green
---

# Quellen für Stufe 7: Deep Learning Foundations

Eine kuratierte Übersicht aller Primärquellen, die in Stufe 7 referenziert werden. Sortiert nach Modul und Typ.

---

## Modul 7.1: Neural Networks & Backpropagation

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 📺 Video-Serie | [3Blue1Brown — Neural Networks Series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) | Pflicht-Vorbereitung für alle Tracks |
| 📺 Kurs | [Karpathy — Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) | Pflicht für 🧮, selektiv für 🔧 |
| 🛠️ Code | [GitHub: micrograd](https://github.com/karpathy/micrograd) | Backprop in ~100 Zeilen Python |
| 🛠️ Code | [GitHub: makemore](https://github.com/karpathy/makemore) | Char-Level-Language-Model |
| 🛠️ Code | [GitHub: nanoGPT](https://github.com/karpathy/nanoGPT) | GPT in ~300 Zeilen Python |
| 📖 Buch | [d2l.ai — Multilayer Perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/index.html) | Interaktives Lehrbuch |
| 📖 Buch | [d2l.ai — Optimization Algorithms](https://d2l.ai/chapter_optimization/) | Optimierer-Kapitel |
| 📖 Buch | [d2l.ai — Regularization](https://d2l.ai/chapter_multilayer-perceptrons/weight-decay.html) | Regularisierungs-Kapitel |
| 🌐 Docs | [PyTorch — Weight Initialization](https://pytorch.org/docs/stable/nn.init.html) | Initialisierungs-Referenz |
| 🌐 Blog | [Karpathy — A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/) | Klassiker, immer noch relevant |
| 🌐 Docs | [PyTorch Tutorials](https://pytorch.org/tutorials/) | Offizielle PyTorch-Dokumentation |
| 🌐 Docs | [PyTorch — MPS Backend](https://pytorch.org/docs/stable/notes/mps.html) | Apple Silicon GPU-Training |
| 🌐 Docs | [PyTorch — Automatic Mixed Precision](https://pytorch.org/docs/stable/amp.html) | FP16/BF16-Training |
| 🌐 Docs | [PyTorch — Distributed Training](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html) | DDP-Tutorial |
| 🌐 Blog | [Sebastian Raschka — LLM Training Costs](https://magazine.sebastianraschka.com) | Cost-Realität für LLM-Training |
| 🌐 Blog | [Sebastian Raschka — Modern Optimizers](https://magazine.sebastianraschka.com) | AdamW, Lion und andere |
| 🌐 Sammlung | [Papers with Code — Activation Functions](https://paperswithcode.com/methods/category/activation-functions) | Überblick Activation-Functions |

---

## Modul 7.2: Transformer-Architektur modern

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 📄 Paper | [Attention Is All You Need (Vaswani et al. 2017)](https://arxiv.org/abs/1706.03762) | Original Transformer-Paper — Pflicht |
| 🌐 Blog | [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/) | Beste visuelle Erklärung |
| 📺 Video | [Karpathy — Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY) | Praktische Implementierung |
| 📺 Video | [Karpathy — Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) | Tokenizer-Implementierung |
| 🛠️ Code | [Karpathy — nanoGPT](https://github.com/karpathy/nanoGPT) | Decoder-only Referenz-Implementation |
| 📄 Paper | [RoPE Paper (RoFormer)](https://arxiv.org/abs/2104.09864) | Rotary Position Embeddings |
| 📄 Paper | [GQA Paper](https://arxiv.org/abs/2305.13245) | Grouped Query Attention |
| 📄 Paper | [DeepSeek-V2 Paper (MLA)](https://arxiv.org/abs/2405.04434) | Multi-head Latent Attention |
| 📄 Paper | [Mistral — Mixture of Experts](https://mistral.ai/news/mixtral-of-experts/) | MoE-Architektur |
| 📄 Paper | [DeepSeek-V3 Paper](https://arxiv.org/abs/2412.19437) | DeepSeek MoE-Implementierung |
| 📄 Paper | [Mamba Paper](https://arxiv.org/abs/2312.00752) | State Space Models |
| 🌐 Blog | [Sebastian Raschka — LLM Architecture Comparison](https://magazine.sebastianraschka.com) | Pre-Norm, RMSNorm Vergleich |
| 🌐 Blog | [Sebastian Raschka — RoPE Visualisierung](https://magazine.sebastianraschka.com/p/llm-research-papers-the-2024-list) | RoPE visuell erklärt |
| 🌐 Docs | [Hugging Face — Tokenizers](https://huggingface.co/docs/tokenizers/index) | Tokenizer-Library |
| 🌐 Docs | [Hugging Face — KV Cache Tutorial](https://huggingface.co/docs/transformers/main/llm_tutorial_optimization) | KV-Cache Optimierung |
| 🌐 Blog | [DigitalApplied — KV Cache Optimization 2026](https://www.digitalapplied.com/blog/kv-cache-optimization-techniques-2026) | Aktuelle Optimierungen |

---

## Modul 7.3: Computer Vision

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 📖 Buch | [d2l.ai — Convolutional Neural Networks](https://d2l.ai/chapter_convolutional-neural-networks/) | CNN-Foundations |
| 🌐 Kurs | [Stanford CS231n](https://cs231n.github.io) | Klassischer CV-Kurs |
| 📄 Paper | [ResNet Paper (He et al. 2015)](https://arxiv.org/abs/1512.03385) | Deep Residual Learning |
| 📄 Paper | [ViT Paper (Dosovitskiy et al. 2020)](https://arxiv.org/abs/2010.11929) | Vision Transformer |
| 🌐 Docs | [Hugging Face — ViT Tutorial](https://huggingface.co/docs/transformers/model_doc/vit) | ViT-Implementierung |
| 📄 Paper | [CLIP Paper (Radford et al. 2021)](https://arxiv.org/abs/2103.00020) | Contrastive Language-Image Pre-training |
| 🛠️ Code | [OpenCLIP (OSS-Reimplementation)](https://github.com/mlfoundations/open_clip) | OSS-Äquivalent zu CLIP |
| 🌐 Docs | [Ultralytics YOLO](https://docs.ultralytics.com) | Object Detection Framework |
| 🛠️ Code | [YOLO-World](https://github.com/AILab-CVC/YOLO-World) | Open-Vocabulary Detection |
| 🛠️ Code | [SAM2 GitHub (Meta)](https://github.com/facebookresearch/sam2) | Segment Anything Model 2 |
| 🌐 Demo | [Segment Anything (Meta)](https://segment-anything.com) | Interaktive Demo |
| 🛠️ Code | [DINOv2 GitHub (Meta)](https://github.com/facebookresearch/dinov2) | Vision Foundation Model |
| 📄 Paper | [Stable Diffusion 3 Paper](https://arxiv.org/abs/2403.03206) | Diffusion Models |
| 🌐 Docs | [Hugging Face Diffusers](https://huggingface.co/docs/diffusers/index) | Diffusion-Library |
| 🌐 Tool | [ComfyUI](https://www.comfy.org) | Lokales UI für Stable Diffusion |
| 🌐 Tool | [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | WebUI für Stable Diffusion |
| 📺 Tutorial | [PyTorch — Transfer Learning Tutorial](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html) | Transfer Learning Praxis |
| 🌐 Library | [Albumentations](https://albumentations.ai) | Augmentation-Library |
| 🌐 Tool | [Roboflow Universe](https://universe.roboflow.com) | Pre-trained CV-Modelle |
| 🌐 Cookbook | [Anthropic — Vision Cookbook](https://github.com/anthropics/anthropic-cookbook) | Vision-LLM-Patterns |

---

## Modul 7.4: Multimodale KI

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 🌐 Docs | [Anthropic — Vision API](https://docs.claude.com/en/docs/build-with-claude/vision) | Claude Vision |
| 🌐 Docs | [OpenAI — Vision API](https://platform.openai.com/docs/guides/vision) | GPT Vision |
| 🌐 Docs | [Google — Gemini Multimodal](https://ai.google.dev/gemini-api/docs/vision) | Gemini Vision/Video |
| 🌐 Docs | [Google — Gemini Video Understanding](https://ai.google.dev/gemini-api/docs/video-understanding) | Video-Analyse |
| 🌐 Modelle | [Ollama — Vision Models](https://ollama.com/search?c=vision) | Lokale Vision-Modelle |
| 🛠️ Code | [Qwen-VL GitHub](https://github.com/QwenLM/Qwen-VL) | OSS Multimodal-Modell |
| 🛠️ Code | [OpenAI Whisper](https://github.com/openai/whisper) | STT Goldstandard, OSS |
| 🛠️ Code | [whisper.cpp](https://github.com/ggerganov/whisper.cpp) | Lokale Whisper-Implementierung |
| 🌐 Docs | [Deepgram](https://deepgram.com) | Realtime-STT-API |
| 🌐 Docs | [ElevenLabs Docs](https://elevenlabs.io/docs) | TTS — beste Qualität |
| 🛠️ Code | [Piper TTS](https://github.com/rhasspy/piper) | OSS-TTS, lokal |
| 🛠️ Code | [Bark (Suno AI)](https://github.com/suno-ai/bark) | OSS-TTS, expressiv |
| 🌐 Docs | [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) | Realtime-Voice-API |
| 🌐 Docs | [Anthropic — PDF Support](https://docs.claude.com/en/docs/build-with-claude/pdf-support) | Native PDF-Analyse |
| 🌐 Docs | [AWS Textract](https://aws.amazon.com/textract/) | Document-AI für Volumen |
| 🌐 Produkt | [Veo (Google DeepMind)](https://deepmind.google/technologies/veo/) | Video-Generation |
| 🌐 Produkt | [Sora (OpenAI)](https://openai.com/sora) | Video-Generation |
| 🌐 Produkt | [Runway ML](https://runwayml.com) | Video-Production |
| 📊 Vergleich | [LLM Stats — Multimodal Pricing](https://llm-stats.com) | Aktueller Preisvergleich |
| 🌐 Cookbook | [Anthropic Cookbook — Multimodal](https://github.com/anthropics/anthropic-cookbook/tree/main/multimodal) | Praxis-Beispiele |

---

## Modul 7.5: Reasoning-Modelle

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 📄 Paper | [DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948) | GRPO + Reasoning-Training |
| 📄 Paper | [OpenAI o1 System Card](https://openai.com/index/openai-o1-system-card/) | Test-Time-Compute Einführung |
| 📄 Paper | [Scaling LLM Test-Time Compute (Google DeepMind)](https://arxiv.org/abs/2408.03314) | Skalierungs-Analyse |
| 📄 Paper | [Let's Verify Step by Step (PRM, OpenAI)](https://arxiv.org/abs/2305.20050) | Process Reward Models |
| 📄 Paper | [Self-Consistency (Wang et al.)](https://arxiv.org/abs/2203.11171) | Self-Consistency-Sampling |
| 📄 Paper | [The Danger of Overthinking](https://arxiv.org/abs/2502.08235) | Overthinking-Analyse |
| 🌐 Docs | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Claude Thinking API |
| 🌐 Docs | [OpenAI — Reasoning Models Guide](https://platform.openai.com/docs/guides/reasoning) | o3-API-Dokumentation |
| 🛠️ Code | [TRL GRPOTrainer (Hugging Face)](https://huggingface.co/docs/trl/grpo_trainer) | GRPO-Implementation |
| 🌐 Benchmark | [MATH Benchmark](https://github.com/hendrycks/math) | Mathematisches Reasoning |
| 🌐 Benchmark | [SWE-Bench](https://www.swebench.com) | Code-Reasoning |

---

## Modul 7.6: Distributed Training

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 🌐 Docs | [PyTorch — Distributed Training Overview](https://pytorch.org/tutorials/beginner/dist_overview.html) | Übersicht |
| 📺 Tutorial | [PyTorch — DDP Tutorial](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html) | Data-Parallel |
| 🌐 Docs | [PyTorch FSDP Tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html) | Fully Sharded |
| 📄 Paper | [PyTorch FSDP Paper](https://arxiv.org/abs/2304.11277) | Technische Details FSDP |
| 📄 Paper | [ZeRO Paper (Rajbhandari et al. 2020)](https://arxiv.org/abs/1910.02054) | ZeRO-Stages |
| 🌐 Docs | [DeepSpeed Docs](https://www.deepspeed.ai/docs/) | ZeRO + Features |
| 🌐 Docs | [Hugging Face Accelerate](https://huggingface.co/docs/accelerate) | Wrapper-Layer |
| 🌐 Docs | [Hugging Face — DeepSpeed Integration](https://huggingface.co/docs/transformers/deepspeed) | Transformers + DeepSpeed |
| 🛠️ Code | [Megatron-LM (NVIDIA)](https://github.com/NVIDIA/Megatron-LM) | TP + PP für sehr große Modelle |
| 📄 Paper | [Megatron-LM Paper](https://arxiv.org/abs/1909.08053) | Tensor-Parallelism |
| 📄 Paper | [GPipe Paper](https://arxiv.org/abs/1811.06965) | Pipeline-Parallelism |
| 🌐 Blog | [Sebastian Raschka — Distributed Training](https://magazine.sebastianraschka.com) | Zugängliche Übersicht |

---

## Allgemeine Ressourcen für Stufe 7

| Typ | Quelle | Kommentar |
|-----|--------|-----------|
| 📖 Buch | [d2l.ai — Dive into Deep Learning](https://d2l.ai) | Referenz-Lehrbuch, alle Module |
| 🌐 Kurs | [Stanford CS336 — Language Models from Scratch](https://cs336.stanford.edu) | Tiefste Referenz für 🧮 |
| 🌐 Blog | [Sebastian Raschka — Magazin](https://magazine.sebastianraschka.com) | Regelmäßige Deep-Dive-Artikel |
| 🌐 Sammlung | [Promptingguide.ai](https://www.promptingguide.ai) | Prompt-Engineering-Ressourcen |
