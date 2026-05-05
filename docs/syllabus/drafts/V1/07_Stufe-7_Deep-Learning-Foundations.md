# Stufe 7: Deep Learning Foundations

**Aufwand gesamt:** 🔧 60-100h · 🧮 200-350h · 💼 10-20h
**Voraussetzungen:** Stufen 1-6 (Math-Querschnitt für 🧮 vor dieser Stufe)
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Diese Stufe ist das mathematische und konzeptionelle Fundament moderner KI. Wer 🧮 ist, lebt hier — Karpathys Zero-to-Hero und fast.ai sind die Welt für mehrere Monate. Wer 🔧 ist, holt sich gezielt das, was für bewusste Modell-Auswahl und Fine-Tuning nötig ist. Wer 💼 ist, lernt die Größenordnungen und Konzepte, um Stakeholder-Gespräche führen zu können.

**Hier startet das Capstone-Foundations-Projekt (🧮): nanoGPT-Vertiefung mit eigenem Korpus.**

**Ergebnis nach Stufe 7:**
- Du verstehst Backpropagation mathematisch (🧮 vollständig, 🔧 konzeptionell, 💼 prinzipiell).
- Du kennst die moderne Transformer-Architektur (RoPE, GQA, KV-Cache, MLA).
- Du hast Computer Vision und Multimodalität verstanden.
- 🧮: nanoGPT von Grund auf trainiert auf eigenem Korpus.
- 🔧: Du kannst Modelle bewusst wählen für Fine-Tuning in 10.2.

---

## Modul 7.1: Neural Networks & Backpropagation

Die Grundlage allen Deep Learnings. Karpathys "Zero to Hero"-Serie ist 2026 der Goldstandard für dieses Material — sechs Stunden Video, Wochen Hands-on. Es gibt keine bessere Quelle. Dieses Modul lehrt **wann du was davon brauchst** und wie du es track-spezifisch durcharbeitest. Wer 🧮 ist, geht durch alle sieben Karpathy-Lectures. Wer 🔧 ist, geht durch die ersten drei (bis zur Tiny GPT-Implementation). Wer 💼 ist, schaut den ersten Lecture und liest die Zusammenfassungen.

**Aufwand:** 🔧 30-50h · 🧮 80-120h · 💼 5-10h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Math-Querschnitt (Lineare Algebra + Calculus mindestens konzeptionell)

### Lernziel
**🧮:** Du hast micrograd nachimplementiert und makemore von Grund auf gebaut. Du verstehst Backprop mathematisch und kannst Forward/Backward für eine einfache MLP per Hand auf Papier rechnen.

**🔧:** Du verstehst Neural Networks konzeptionell genug, um Architekturen zu lesen, Hyperparameter sinnvoll zu wählen, und Fine-Tuning-Entscheidungen zu treffen.

**💼:** Du verstehst, was ein Neural Network ist, was Training bedeutet (Cost! Compute!), und kannst Größenordnungen einordnen ("8B Parameter — wie viel ist das?").

### Theorie

- 🟢 **Was ist ein Neural Network?** — Schichten von Neuronen, jedes berechnet `output = activation(weights · inputs + bias)`. Deep Learning = mehrere Schichten gestapelt. Das Lernen passiert durch Anpassung der Weights via Backpropagation. [3Blue1Brown — Neural Networks Series (Video)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) (Pflicht-Vorbereitung)

- 🟢 **Forward Pass: Inferenz** — Input geht durch alle Layer, am Ende Output. Mit Linear Algebra: jede Layer ist eine Matrix-Multiplikation plus Activation Function. [d2l.ai — Multilayer Perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/index.html)

- 🟢 **Backpropagation: das Herzstück** — wie ein Network lernt. Loss-Function misst Fehler. Gradient (= partielle Ableitung des Loss nach jedem Weight) zeigt Richtung. Weights werden in Gegenrichtung des Gradients angepasst. Das ist Calculus + Lineare Algebra in Aktion. [Karpathy — The spelled-out intro to neural networks (Video)](https://www.youtube.com/watch?v=VMj-3S1tku0) (Lecture 1, Pflicht für 🧮)

- 🟢 **Karpathys "Zero to Hero"-Serie** — sieben Lectures, in denen Karpathy von skalaren Gradienten (micrograd, ~100 Zeilen) zu nanoGPT (~300 Zeilen) baut. Jede Zeile ist erklärt. Wer das durchgemacht hat, versteht moderne LLMs auf Code-Ebene. [Neural Networks: Zero to Hero (Playlist)](https://karpathy.ai/zero-to-hero.html) · [GitHub: micrograd](https://github.com/karpathy/micrograd) · [GitHub: makemore](https://github.com/karpathy/makemore) · [GitHub: nanoGPT](https://github.com/karpathy/nanoGPT)

- 🟢 **Activation Functions: ReLU, GELU, SiLU/Swish** — nicht-lineare Funktionen, die zwischen Layers angewendet werden. Ohne sie wäre ein Neural Network mathematisch eine einzige Linear-Transformation. ReLU ist Klassiker, GELU dominant in Transformers, SiLU/Swish in Llama-Architektur. [Papers with Code — Activation Functions](https://paperswithcode.com/methods/category/activation-functions)

- 🟢 **Optimierer: SGD, Adam, AdamW, Lion** — wie Gradienten zum Update verarbeitet werden. SGD ist Klassiker, Adam Standard, AdamW Default in modernen Trainings. Lion ist 2023-Vorschlag mit guter Performance. [d2l.ai — Optimization Algorithms](https://d2l.ai/chapter_optimization/) · [Sebastian Raschka — Modern Optimizers](https://magazine.sebastianraschka.com)

- 🟢 **Loss Functions** — Cross-Entropy für Classification, Mean Squared Error für Regression, Custom-Losses für spezielle Aufgaben. Die richtige Loss-Function hängt vom Problem ab. [d2l.ai — Loss Functions](https://d2l.ai/chapter_linear-regression/)

- 🟢 **Regularisierung: Dropout, Weight Decay, Batch Normalization, Layer Normalization** — Techniken gegen Overfitting. Dropout setzt zufällig Neuronen auf 0. Weight Decay schrumpft Weights. BatchNorm/LayerNorm normalisieren Aktivierungen. LayerNorm dominiert in Transformers, BatchNorm in CNNs. [d2l.ai — Regularization](https://d2l.ai/chapter_multilayer-perceptrons/weight-decay.html)

- 🟢 **Initialisierung: Xavier, He, Kaiming** — Weights müssen sinnvoll initialisiert werden, sonst lernt das Network nicht. Xavier für Sigmoid/Tanh, Kaiming/He für ReLU. Modern: oft automatische Initialisierungen in Frameworks. [PyTorch — Weight Initialization](https://pytorch.org/docs/stable/nn.init.html)

- 🟢 **Vanishing/Exploding Gradients** — bei tiefen Networks: Gradienten können verschwinden oder explodieren. Lösungen: bessere Activations (ReLU statt Sigmoid), Skip Connections (ResNets), LayerNorm, gute Initialisierung. [Karpathy — A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/) (Klassiker, immer noch relevant)

- 🟢 **GPU-Training-Basics** — moderne Networks brauchen GPUs. PyTorch ist 2026 dominant (TensorFlow ist nicht weg, aber kleiner). CUDA für NVIDIA, MPS für Apple Silicon, ROCm für AMD. [PyTorch Tutorials](https://pytorch.org/tutorials/) · [PyTorch — MPS Backend](https://pytorch.org/docs/stable/notes/mps.html)

- 🟢 **Mixed Precision Training (FP16, BF16)** — moderne Trainings nutzen 16-bit Floats statt 32-bit, halbiert Speicher und beschleunigt Training. BF16 ist Standard 2026 (besserer Range als FP16). [PyTorch — Automatic Mixed Precision](https://pytorch.org/docs/stable/amp.html)

- 🟢 **Distributed Training: DDP, FSDP** — bei großen Modellen: Training über mehrere GPUs. DDP (Data Parallel) ist einfach, FSDP (Fully Sharded Data Parallel) für Modelle, die nicht auf eine GPU passen. [PyTorch — Distributed Training](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html)

- 🟢 **Compute-Cost-Realität** — ein modernes 70B-Modell von Grund auf trainieren: Hunderte von H100-GPUs für Wochen, einstellige Millionen-Beträge. Fine-Tuning auf Consumer-Hardware: 24-48GB VRAM ausreichend. Wer für 🔧 fine-tuned, fängt klein an (3B-7B Modelle). [Sebastian Raschka — LLM Training Costs](https://magazine.sebastianraschka.com)

### Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (vollständige Karpathy-Serie):**
- Alle 7 Karpathy-Lectures durcharbeiten, Code von Grund auf nachimplementieren.
- micrograd: ~100 Zeilen Python, Backprop von Grund auf, dokumentiert.
- makemore: Char-Level-Language-Model in Bigram, dann MLP, dann WaveNet-Stil.
- Eigenes kleines Char-Model auf eigenem Korpus (z.B. eigene Tweets, eigene Texte) trainieren.
- Im Portfolio: `stufe-7_deep-learning/7-1-zero-to-hero/` mit allen Implementierungen, Reflektionen, Korpus-Wahl-Begründung.

**Capstone-Foundations (🧮)**: Hier startet dein Capstone. Wähle einen eigenen Korpus (kann persönlich, kreativ, technisch sein), trainiere darauf zunehmend bessere Models. In 7.2 wird daraus ein moderner Transformer.

**Für 🔧 (selektiv):**
- Karpathy Lecture 1 (micrograd) und Lecture 2 (makemore Bigram) bearbeiten, dokumentieren.
- d2l.ai Chapter 4 (MLPs) und Chapter 5 (Builders Guide) durcharbeiten.
- Praktisches Mini-Projekt: einfaches Klassifikations-Modell auf MNIST oder eigenem Datensatz mit PyTorch, mit Type Hints, mit Logging.
- Im Portfolio: `stufe-7_deep-learning/7-1-foundations-engineer/`.

**Für 💼 (konzeptionell):**
- 3Blue1Brown Neural Networks Series schauen (4 Videos, ~1h).
- Karpathy Lecture 1 schauen (nicht nachimplementieren).
- 1-Pager schreiben: "Was ist ein Neural Network, was ist Training, was kostet es?" — als Briefing für Stakeholder.
- Im Portfolio: `stufe-7_deep-learning/7-1-neural-networks-strategist/`.

### 🎁 Mehrwert-Mini-Projekte
- **Eigene Visualisierungs-Notebooks** für Backprop, Gradient Descent — verständnis-vertiefend, auch lehrbar.
- **PyTorch-Cheat-Sheet** mit eigenen Code-Snippets für die häufigsten Operationen.

### 🌱 Open-Source-Pfad
PyTorch und alle Karpathy-Materialien sind OSS. Bonus: Implementierungen mit JAX (Google's Alternative zu PyTorch) statt PyTorch — anders strukturiert, lehrt funktionalen Stil.

### Outcome-Check (track-spezifisch)
**🧮:**
- [ ] micrograd selbst implementiert
- [ ] makemore in mindestens drei Stufen (Bigram, MLP, WaveNet)
- [ ] Eigenes Char-Model auf eigenem Korpus trainiert
- [ ] Backprop mit Stift und Papier durchgerechnet (für eine kleine MLP)

**🔧:**
- [ ] Mindestens micrograd und Bigram-makemore selbst implementiert
- [ ] Eigenes PyTorch-Klassifikations-Modell mit Best Practices
- [ ] Verständnis für Hyperparameter und ihre Wirkung

**💼:**
- [ ] 3Blue1Brown Series und Karpathy Lecture 1 geschaut
- [ ] Stakeholder-Briefing geschrieben

---

## Modul 7.2: Transformer-Architektur modern

Das Original "Attention is All You Need" Paper von 2017 ist Foundation-Lektüre — aber wer 2026 LLMs versteht, muss die **modernen Komponenten** kennen, die 2024-2026 Standard wurden: **RoPE** (Rotary Position Embeddings), **GQA** (Grouped Query Attention), **KV-Cache**, **MLA** (Multi-head Latent Attention bei DeepSeek). Dieses Modul ergänzt das Original-Transformer-Wissen um diese modernen Bausteine. Karpathys "Let's build GPT from scratch"-Lecture ist die didaktische Brücke.

**Aufwand:** 🔧 15-25h · 🧮 60-90h · 💼 0-3h (skip für 💼)
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 7.1

### Lernziel
**🧮:** Du hast nanoGPT von Grund auf nachgebaut, mindestens eine moderne Komponente (RoPE oder GQA) eingebaut, und auf deinem eigenen Korpus trainiert.

**🔧:** Du verstehst die moderne Transformer-Architektur ausreichend, um Modell-Konfigurations-Files zu lesen und Architektur-Entscheidungen zu bewerten.

**💼:** Skip oder oberflächlich — das ist Theorie, die du als Strategist nicht direkt brauchst.

### Theorie

- 🟢 **Original Transformer (2017)** — Vaswani et al., "Attention is All You Need". Encoder-Decoder-Architektur, Self-Attention, Multi-Head Attention, Positional Encoding (sinusoidal). Foundational, aber 2026 nicht mehr State-of-the-Art. [Original Paper](https://arxiv.org/abs/1706.03762) · [The Illustrated Transformer (Klassiker-Erklärung)](https://jalammar.github.io/illustrated-transformer/)

- 🟢 **Self-Attention mathematisch: Q, K, V** — die Kern-Operation: `Attention(Q,K,V) = softmax(QK^T/√d_k)V`. Q (Query), K (Key), V (Value) sind alles lineare Transformationen des Input. Softmax über Skalarprodukte gewichtet, wie viel jedes Token zu jedem anderen "schaut". √d_k normalisiert für Skala-Stabilität. [Karpathy — Let's build GPT from scratch (Video)](https://www.youtube.com/watch?v=kCc8FmEb1nY) (Pflicht für 🧮 + 🔧)

- 🟢 **Multi-Head Attention** — statt einer Attention-Operation: mehrere parallele "Heads", jeder mit eigenen Q,K,V-Matrizen. Output wird konkateniert und projiziert. Idee: verschiedene Heads lernen verschiedene Beziehungs-Typen. Klassisch ist Multi-Head, aber 2024-2026 dominiert GQA. [Promptingguide.ai — Self-Attention](https://www.promptingguide.ai)

- 🟢 **Decoder-only Architektur (GPT-Stil)** — die meisten modernen LLMs sind Decoder-only: ein Stack aus Self-Attention + Feed-Forward Layern. Encoder-Decoder noch in T5, Bart. [Karpathy — nanoGPT](https://github.com/karpathy/nanoGPT) (Decoder-only Implementation)

- 🟢 **Pre-Norm vs. Post-Norm** — wo Layer Normalization sitzt. Post-Norm ist Original-Paper, Pre-Norm hat sich durchgesetzt für Stabilität bei tiefen Modellen. Modern oft RMSNorm statt LayerNorm. [Sebastian Raschka — LLM Architecture Comparison](https://magazine.sebastianraschka.com)

- 🔄 **RoPE (Rotary Position Embeddings)** — moderne Alternative zu Sinusoidal Positional Encoding. Statt absolute Position zu addieren, werden Q und K rotiert, wodurch Position relativ codiert wird. Vorteile: bessere Extrapolation auf längere Contexts, native Unterstützung für Context-Erweiterung. Llama 2/3/4, Mistral, Qwen — alle nutzen RoPE. [RoPE Paper (RoFormer)](https://arxiv.org/abs/2104.09864) · [Sebastian Raschka — RoPE Visualisierung](https://magazine.sebastianraschka.com/p/llm-research-papers-the-2024-list)

- 🔄 **GQA (Grouped Query Attention)** — moderne Effizienz-Variante von Multi-Head Attention: weniger K/V-Heads als Q-Heads, K/V werden über Q-Gruppen geteilt. Beispiel Llama 3.1: 32 Q-Heads, nur 8 K/V-Heads (8 Gruppen à 4 Q-Heads). Reduziert KV-Cache-Memory um 4x bei <0.5 Punkt Quality-Drop. Standard in Llama 3.x, 4, Qwen 2/3, Mistral. [GQA Paper](https://arxiv.org/abs/2305.13245) · [DigitalApplied — KV Cache Optimization 2026](https://www.digitalapplied.com/blog/kv-cache-optimization-techniques-2026)

- 🔄 **MQA (Multi-Query Attention)** — extreme Variante von GQA: alle Q-Heads teilen sich ein einziges K/V-Paar. Maximale Memory-Effizienz, aber Quality-Drop größer. Wenig genutzt 2026 — GQA ist der Sweet Spot.

- 🔄 **KV-Cache** — bei Inferenz: Keys und Values werden für alle bisherigen Tokens gespeichert, sodass jeder neue Token nicht alle Vorgänger neu berechnen muss. Linear wachsend mit Context-Length. Optimierungen: Quantisierung (FP8 KV-Cache halbiert Memory bei <1% Quality-Drop), Pruning, Compression. Bei 100K+ Context der dominante Memory-Faktor. [Hugging Face — KV Cache Tutorial](https://huggingface.co/docs/transformers/main/llm_tutorial_optimization)

- 🔄 **MLA (Multi-head Latent Attention)** — DeepSeek's Innovation 2024: statt K/V direkt zu cachen, werden sie in einen niedrig-dimensionalen Latent-Space projiziert. 7-14x Compression bei <0.2 Punkt Quality-Drop. Erlaubt 1M-Context auf moderater Hardware. Nur DeepSeek V2/V3/V4 nutzen das aktuell — mögliche zukünftige Standard. [DeepSeek-V2 Paper](https://arxiv.org/abs/2405.04434)

- 🔄 **Mixture of Experts (MoE)** — alternative Architektur: statt eines großen Feed-Forward-Layers viele kleine "Experts", von denen pro Token nur einige aktiv sind. Effizienz: Modell hat insgesamt 100B Parameter, aber pro Token nur 5B aktiv. Nutzer in DeepSeek, Mistral 8x7B, Gemini, OpenAI's größeren Modellen. Trainings-Komplexität höher. [Mistral — Mixture of Experts](https://mistral.ai/news/mixtral-of-experts/) · [DeepSeek-V3 Paper](https://arxiv.org/abs/2412.19437)

- 🔄 **Sliding Window Attention** — Mistral-Innovation: Token sieht nur die letzten N Tokens (z.B. 4K), nicht den gesamten Context. Reduziert Memory bei langen Contexts, aber kann Long-Range-Dependencies verlieren. Trade-off-abhängig. [Mistral — Sliding Window](https://mistral.ai)

- 🔄 **Tokenizer 2026: BPE, SentencePiece, Tiktoken** — unter Modellebene: Tokenizer entscheidet, wie Text in Tokens zerlegt wird. BPE und Variants dominieren. Tiktoken ist OpenAI's, SentencePiece bei Llama. Effizienz unterscheidet sich stark zwischen Sprachen (Deutsch oft 30-50% mehr Tokens als Englisch). [Hugging Face — Tokenizers](https://huggingface.co/docs/tokenizers/index) · [Karpathy — Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE)

- 🟢 **State Space Models / Mamba als Alternative** — nicht-Transformer-Architektur, 2023-2025 viel diskutiert. Lineare Komplexität in Context-Length statt quadratisch. 2026: noch nicht dominant, aber aktiv erforscht. [Mamba Paper](https://arxiv.org/abs/2312.00752)

### Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (Capstone-Foundations-Vertiefung):**
- Karpathy "Let's build GPT from scratch" (Lecture 7) komplett nachimplementieren.
- nanoGPT-Codebase verstehen, kommentieren.
- **Mindestens eine moderne Komponente einbauen**: RoPE oder GQA. Dokumentieren mit Vorher/Nachher-Vergleich (Performance, Memory).
- Auf eigenem Korpus trainieren (aus 7.1).
- Im Portfolio: `stufe-7_deep-learning/7-2-modern-transformer/` mit Code, Architektur-Diagramm, Trainings-Logs, Reflektion.

**Capstone-Foundations**: Dein Modell ist jetzt ein moderner Transformer auf eigenem Korpus. In 10.2 wird darauf Fine-Tuning angewendet.

**Für 🔧:**
- Karpathy "Let's build GPT from scratch" schauen (nicht zwingend selbst implementieren).
- Llama-Code von Hugging Face lesen und verstehen: wo ist RoPE? wo ist GQA? wie groß sind die Heads?
- Modell-Konfigurations-Files (z.B. `config.json` von Llama 3) lesen und alle Felder erklären können.
- Mini-Projekt: zwei kleine Modelle vergleichen (z.B. Llama-3.2-3B vs. Qwen-2.5-3B), Architektur-Unterschiede dokumentieren.
- Im Portfolio: `stufe-7_deep-learning/7-2-architektur-vergleich/`.

**Für 💼:**
- Optional: ein kurzer Überblick (1h) über die Innovationen ohne Praxis. Reicht oft.

### 🎁 Mehrwert-Mini-Projekte
- **Eigene Architektur-Visualisierungen** für Blog/LinkedIn — gut zum Verständnis vertiefen.
- **Modell-Pricing-Calculator** der Token-Cost basierend auf Context-Length und KV-Cache schätzt.

### 🌱 Open-Source-Pfad
- Alle Quellen sind OSS.
- Bonus: Implementiere eigene Modelle in JAX/Flax statt PyTorch — funktional, anders strukturiert.
- Hugging Face Transformers-Library als Referenz für moderne Implementierungen.

### Outcome-Check (track-spezifisch)
**🧮:**
- [ ] nanoGPT komplett nachgebaut und dokumentiert
- [ ] Mindestens eine moderne Komponente (RoPE oder GQA) selbst eingebaut
- [ ] Auf eigenem Korpus trainiert mit dokumentierten Loss-Curves

**🔧:**
- [ ] Karpathy GPT-Lecture geschaut
- [ ] Modell-Configs lesen können
- [ ] Architektur-Vergleich zweier kleiner Modelle

**💼:**
- [ ] Konzeptionelles Verständnis der wichtigsten Innovationen

---

## Modul 7.3: Computer Vision

Computer Vision ist 2026 nicht mehr nur CNN-basiert — Vision Transformers (ViT) und **Vision Foundation Models** (SAM, DINOv2) haben das Feld neu definiert. Plus: moderne LLMs (Claude, GPT-5) haben native Vision-Fähigkeiten, die für viele praktische Aufgaben klassische CV ersetzen. Dieses Modul lehrt sowohl die Foundations (CNN, ViT) als auch wann du klassische CV brauchst und wann ein Vision-LLM-Aufruf reicht.

**Aufwand:** 🔧 8-15h · 🧮 30-50h · 💼 3-5h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 7.1

### Lernziel
**🧮:** Du verstehst CNNs (Convolutions, Pooling, klassische Architekturen) und Vision Transformers. Du hast ein Bild-Klassifikations-Modell selbst gebaut und mit Transfer Learning fine-tuned.

**🔧:** Du kennst die wichtigsten CV-Architekturen, kannst YOLO/SAM nutzen und weißt, wann Vision-LLMs die bessere Wahl sind.

**💼:** Du kennst die strategischen Optionen — Custom-CV vs. Vision-LLMs vs. Off-the-Shelf-APIs.

### Theorie

- 🟢 **CNN-Grundlagen** — Convolution-Layer extrahieren lokale Features (Kanten, Texturen), Pooling reduziert Auflösung, Dense Layer für Classification. Klassische Architekturen: VGG (klassisch), ResNet (Skip Connections), EfficientNet (skalierbar). [d2l.ai — Convolutional Neural Networks](https://d2l.ai/chapter_convolutional-neural-networks/) · [Stanford CS231n](https://cs231n.github.io)

- 🟢 **ResNet und Skip Connections** — die Architektur, die 2015 sehr tiefe Networks ermöglichte. Skip Connections lösen Vanishing Gradients. Bis heute Backbone vieler Modelle. [ResNet Paper](https://arxiv.org/abs/1512.03385)

- 🔄 **Vision Transformer (ViT)** — Bild wird in Patches zerlegt (z.B. 16x16), wie Tokens behandelt, durch Standard-Transformer geschickt. 2020 von Google vorgestellt, mittlerweile konkurrenzfähig zu CNNs bei großen Datasets. [ViT Paper](https://arxiv.org/abs/2010.11929) · [Hugging Face — ViT Tutorial](https://huggingface.co/docs/transformers/model_doc/vit)

- 🔄 **CLIP — Text und Bild im selben Embedding-Raum** — OpenAI 2021: Modell trainiert auf 400M Bild-Text-Paaren, lernt gemeinsamen Embedding-Space. Foundation für alles Multimodale, was danach kam. [CLIP Paper](https://arxiv.org/abs/2103.00020) · [OpenCLIP (OSS-Reimplementation)](https://github.com/mlfoundations/open_clip)

- 🔄 **YOLO — Object Detection** — 2026: YOLOv11+ ist Stand. Real-time Detection, Bounding Boxes, Klassen. Praktisch für viele Use-Cases (Sicherheit, Medizin, Robotik). Ultralytics ist Standard-Implementation. [Ultralytics YOLO](https://docs.ultralytics.com) · [YOLO-World (Open-Vocabulary)](https://github.com/AILab-CVC/YOLO-World)

- 🔄 **SAM (Segment Anything Model) und SAM2** — Meta 2023/2024: Foundation Model für Segmentation. Mit Prompt (Punkt, Box, Text) segmentiert es jedes Objekt. SAM2 erweitert auf Video. Praxisrelevant für Medizin, Industrie, Robotik. [SAM2 GitHub](https://github.com/facebookresearch/sam2) · [Meta — Segment Anything](https://segment-anything.com)

- 🔄 **DINOv2** — Meta 2023: Vision Foundation Model mit Self-Supervised Learning. Erzeugt Vision-Features ohne Labels, die für viele Downstream-Tasks (Classification, Segmentation, Depth Estimation) reusable sind. [DINOv2](https://github.com/facebookresearch/dinov2)

- 🔄 **Stable Diffusion und Diffusion Models** — Text-to-Image-Generierung 2022+. Diffusion-Prozess: Bild von Rauschen zu Detail iterativ entrauschen. Stable Diffusion (OSS), Flux (neuere OSS-Modelle), DALL-E 3, Midjourney. [Stable Diffusion 3 Paper](https://arxiv.org/abs/2403.03206) · [Hugging Face Diffusers](https://huggingface.co/docs/diffusers/index)

- 🟢 **Transfer Learning für Vision** — Pre-trained Modelle (auf ImageNet, JFT) auf eigenen Daten fine-tunen. Für 🔧 oft 10-100x weniger Daten nötig als from-scratch. PyTorch-Standard via `torchvision.models`. [PyTorch — Transfer Learning Tutorial](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html)

- 🔄 **Vision-LLMs vs. klassische CV** — wichtige 2026-Beobachtung: für viele Aufgaben (OCR, Bild-Klassifikation, einfache Detection) ist ein Aufruf an Claude / GPT-5 / Gemini einfacher und qualitativ vergleichbar mit Custom-Modell. Custom-CV lohnt sich bei: Real-time-Anforderungen, Edge-Devices, sehr spezifischen Domänen, hohe Volumina mit Cost-Sensitivität. [Anthropic — Vision Cookbook](https://github.com/anthropics/anthropic-cookbook)

- 🟢 **Augmentation und Datenaufbereitung** — Vision-Modelle brauchen viele Daten. Augmentation: Rotation, Flip, Crop, Color-Jitter — vervielfacht Datenmenge synthetisch. Tools: Albumentations, torchvision.transforms. [Albumentations](https://albumentations.ai) · [d2l.ai — Image Augmentation](https://d2l.ai/chapter_computer-vision/image-augmentation.html)

### Praxis: Hauptprojekt — track-spezifisch

**Für 🧮 (Tiefe):**
- Eigenes Image-Classification-Modell mit PyTorch von Grund auf, dann mit Transfer Learning (ResNet als Backbone), dann mit ViT.
- Mindestens drei Modelle vergleichen auf einem eigenen oder kuratierten Datensatz (z.B. CIFAR-10, eigene Foto-Sammlung).
- Trainings-Logs, Confusion Matrices, Misclassified-Examples-Analyse.
- Bonus: SAM2 oder DINOv2 für ein eigenes Bild ausprobieren.
- Im Portfolio: `stufe-7_deep-learning/7-3-cv-vergleich/`.

**Für 🔧:**
- YOLO oder SAM für einen praktischen Use-Case nutzen (z.B. Object Detection auf eigenen Fotos, Segmentation für eigenes Projekt).
- Vergleich: dieselbe Aufgabe mit Vision-LLM (Claude oder GPT-5 mit Vision) lösen — was ist besser, was schneller, was günstiger?
- Im Portfolio: `stufe-7_deep-learning/7-3-cv-praxis/`.

**Für 💼:**
- Recherche: drei reale Use-Cases aus deinem Bereich, in denen CV relevant ist (z.B. Qualitätskontrolle, Dokumenten-Verarbeitung, Sicherheits-Monitoring).
- Build-vs-Buy-Analyse für jeden: Custom-Modell vs. Off-the-Shelf-API vs. Vision-LLM.
- 1-Pager im Portfolio.

### 🎁 Mehrwert-Mini-Projekte
- **Eigene Foto-Tagger** mit Vision-LLM oder lokalem CLIP-Modell — alle deine Fotos automatisch beschreiben/kategorisieren.
- **Personal Document Scanner** mit OCR (Tesseract OSS oder Vision-LLM) für eigene Belege/Dokumente.

### 🌱 Open-Source-Pfad
- PyTorch + torchvision + Hugging Face Transformers (alles OSS).
- SAM2, DINOv2, OpenCLIP, Ultralytics YOLO — alle OSS und production-ready.
- Stable Diffusion lokal via [ComfyUI](https://www.comfy.org) oder [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui).
- [Roboflow Universe](https://universe.roboflow.com) für viele Pre-trained Models.

### Outcome-Check
**🧮:**
- [ ] Mindestens drei CV-Modelle implementiert/fine-tuned (CNN, Transfer Learning, ViT)
- [ ] Trainings-Logs und Vergleichs-Analyse
- [ ] SAM oder DINOv2 ausprobiert

**🔧:**
- [ ] YOLO oder SAM in eigenem Use-Case eingesetzt
- [ ] Vergleich CV-Modell vs. Vision-LLM dokumentiert

**💼:**
- [ ] Build-vs-Buy-Analyse für 3 reale Use-Cases

---

## Modul 7.4: Multimodale KI

Modern LLMs sind 2026 oft multimodal — sie verarbeiten Text, Bild, Audio, Video, PDFs nativ. Dieses Modul lehrt dich, wann multimodale Modelle die richtige Wahl sind, wie du sie effektiv prompst, und wo ihre Grenzen liegen. Plus: lokale OSS-Multimodal-Modelle wie LLaVA, Qwen-VL, die für viele Use-Cases reichen.

**Aufwand:** 🔧 8-12h · 🧮 8-12h · 💼 3-5h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 5.1, optional 7.1-7.3

### Lernziel
Du hast eine multimodale Anwendung gebaut (z.B. PDF-Analyse mit Tabellen und Bildern, Video-Zusammenfassung) und kannst zwischen Cloud-Multimodal-Modellen (Claude, GPT-5, Gemini) und lokalen OSS-Optionen wählen.

### Theorie

- 🔄 **Multimodale Frontier-Modelle Mai 2026** — alle großen Modelle sind multimodal:
 - **Claude Opus 4.7 / Sonnet 4.6** — Text + Vision, sehr stark bei komplexen Bildern und PDFs
 - **GPT-5 / 5.5** — nativ multimodal (Text, Bild, Audio), Realtime-Voice-Mode
 - **Gemini 3.1 Ultra** — nativ multimodal über alle Modalitäten (Text, Bild, Video, Audio), 2M Context — stärkstes Video-Verständnis
 - **Mistral 3 Pixtral** — europäische multimodale Option

 [Anthropic — Vision](https://docs.claude.com/en/docs/build-with-claude/vision) · [OpenAI — Vision](https://platform.openai.com/docs/guides/vision) · [Google — Gemini Multimodal](https://ai.google.dev/gemini-api/docs/vision)

- 🔄 **OSS Multimodale Modelle** — Llama 3.2 Vision, Qwen 2.5-VL und Qwen3-VL, LLaVA, Pixtral, Gemma 3 Vision. Über Ollama oder vLLM lokal lauffähig. Für DSGVO-sensible Anwendungen oder Cost-kritische Volumen-Anwendungen. [Ollama — Vision Models](https://ollama.com/search?c=vision) · [Qwen-VL](https://github.com/QwenLM/Qwen-VL)

- 🟢 **Vision-Use-Cases die 2026 zuverlässig funktionieren** — Bildbeschreibung, Texterkennung (OCR-Ersatz), einfache Klassifikation, Tabellen-Extraktion aus PDFs, Diagramm-Verständnis, einfache Bildbearbeitungs-Anweisungen. [Anthropic Cookbook — Vision Examples](https://github.com/anthropics/anthropic-cookbook/tree/main/multimodal)

- 🟢 **Vision-Schwächen** — präzise räumliche Aufgaben (Counting, exakte Positionen), feine Details (Mikroskopie, Medizin ohne Spezial-Training), reale Photo-Identifikation (oft refused), kontextuelle Wirklichkeit (was ist eigentlich rechts vom Bild?).

- 🔄 **Audio-Modalität** — STT (Speech-to-Text) Goldstandard ist immer noch Whisper (OpenAI, OSS) oder Whisper v3 turbo. TTS (Text-to-Speech): ElevenLabs (proprietär, beste Qualität), Coqui (OSS), OpenAI Voice. Native Audio in LLMs: Gemini 2.5 mit "Audio Understanding", GPT-5 Realtime. [OpenAI Whisper](https://github.com/openai/whisper) · [Coqui TTS](https://github.com/coqui-ai/TTS) · [ElevenLabs](https://elevenlabs.io)

- 🔄 **Video-Modalität** — Gemini 3.1 ist 2026 das stärkste Modell für Video-Verständnis (kann Stunden-Videos analysieren). Praxis-Use-Cases: Meeting-Zusammenfassungen, Tutorial-Index, Sicherheits-Analyse. Video-Generierung ist anderes Thema (Sora abgeschaltet 2026, Veo 3.1, Kling 3.0, Runway Gen-4.5 dominant). [Gemini Video Understanding](https://ai.google.dev/gemini-api/docs/video-understanding)

- 🟢 **Document AI mit Layout-Verständnis** — moderne Multimodale können PDFs mit Layout (Tabellen, Spalten, Bilder) verstehen. Native PDF-Support in Claude und Gemini, OpenAI seit 2024. Klassische Document-AI-Tools (AWS Textract, Azure Document Intelligence, Google Document AI) bleiben für Production-Volumes wichtig. [Anthropic — PDF Support](https://docs.claude.com/en/docs/build-with-claude/pdf-support)

- 🟢 **Multimodal-Prompting-Patterns** — wichtige Patterns: (1) Bild zuerst, Frage danach (klassisch). (2) Strukturierter Output erzwingen (JSON-Schema). (3) Multiple Bilder vergleichen ("was ist anders?"). (4) Bild + Text-Kontext kombinieren ("hier ist das Bild und der Original-Text, fasse zusammen"). [Anthropic Cookbook — Multimodal Patterns](https://github.com/anthropics/anthropic-cookbook)

- 🟢 **Cost und Performance multimodaler Modelle** — Bilder-Input ist teurer als Text. Bei Cloud-APIs typisch: 1000-5000 Tokens pro Bild je nach Auflösung. Latenz höher als reine Text-Aufrufe. Für Volumen-Anwendungen: lokale OSS-Modelle ernsthaft prüfen. [LLM Stats — Multimodal Pricing](https://llm-stats.com)

### Praxis: Hauptprojekt — Multimodale Anwendung deiner Wahl

Wähle EINEN Use-Case und baue ihn:

**Option A: PDF-Analyse-Tool** — komplexe PDFs mit Tabellen, Bildern, Charts. Pipeline: PDF-Upload → multimodal-LLM-Aufruf → strukturierter Output (JSON mit extrahierten Daten). Use-Case: Rechnungs-Verarbeitung, Forschungs-Paper-Auswertung, Vertrags-Analyse.

**Option B: Video-Zusammenfassungs-Tool** — Video als Input, KI erzeugt strukturierte Zusammenfassung mit Timestamps. Use-Case: Lecture-Notes aus YouTube, Meeting-Protokoll aus Aufzeichnung. Mit Gemini 3.1 oder lokal mit Whisper + Llama 3.2 Vision (Frame-Sampling).

**Option C: Multimodaler Personal Assistant** — Bild oder Audio als Input, KI antwortet kontextuell. Use-Case: "Was ist auf diesem Schild?", "Übersetze dieses Foto-Menü", "Beschreibe dieses Bild für meine Großeltern".

**Option D: Document AI für Eigenbedarf** — alle eigenen Belege/Verträge automatisch parsen, in Markdown oder Datenbank überführen. DSGVO-relevant, deshalb lokales OSS-Setup empfohlen.

Im Portfolio: `stufe-7_deep-learning/7-4-multimodal/` mit Code, Beispielen, Vergleich Cloud vs. lokal.

### 🎁 Mehrwert-Mini-Projekte
- **Eigener Foto-zu-Markdown-Converter**: Bild von einer handgeschriebenen Notiz → strukturierte Markdown-Notiz.
- **Audio-Tagebuch-Transkribierer**: tägliche Audio-Memos mit Whisper transkribieren, mit LLM strukturieren.

### 🌱 Open-Source-Pfad
Komplett OSS-Stack:
- Llama 3.2 Vision oder Qwen 2.5-VL via Ollama für multimodale Inferenz
- Whisper lokal (whisper.cpp für Mac/Linux, Optimized) für Audio
- Coqui TTS oder Piper für Speech-Output
- Gradio oder Streamlit für Frontend

### Outcome-Check
- [ ] Multimodale Anwendung lauffähig
- [ ] Mindestens zwei Modelle verglichen (Cloud vs. lokal, oder zwei Cloud-Anbieter)
- [ ] Cost-Analyse pro Aufruf
- [ ] Reflexion: für welche Use-Cases reicht OSS, wo muss Cloud sein?

---

## Capstone-Update für Track B (Foundations)

Nach Stufe 7 hat Track B sein Capstone-Foundations-Projekt im Aufbau:
- ✅ NN-Foundation (7.1)
- ✅ Moderne Transformer-Architektur (7.2)
- ✅ Trainings-Pipeline auf eigenem Korpus

In Stufe 10.2 (Fine-Tuning) wird darauf DPO oder ähnliches Preference-Tuning angewendet, plus Eval mit Perplexity und MMLU-Delta.

---

## Free-Zertifikate für Stufe 7

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Karpathy Zero to Hero](https://karpathy.ai/zero-to-hero.html) | Andrej Karpathy | 60-100h | Pflicht für 🧮 in 7.1, 7.2 |
| [DeepLearning.AI Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) | Andrew Ng | ~100h | Vertiefung 7.1, alle Tracks |
| [Stanford CS231n](https://cs231n.github.io) | Stanford | 40-80h | Vertiefung 7.3 für 🧮 |
| [Hugging Face — Computer Vision Course](https://huggingface.co/learn/computer-vision-course) | Hugging Face | 20-40h | Praxis-Vertiefung 7.3 |
| [fast.ai — Practical Deep Learning](https://course.fast.ai) | fast.ai | 60-80h | Alternative zu DLAI |
| [d2l.ai — Dive into Deep Learning](https://d2l.ai) | Aston Zhang et al. | als Buch | Referenz-Lehrbuch |

---

## Stufen-Outcome

Nach Stufe 7 hast du:
- ✅ Backpropagation verstanden (track-spezifisch tief)
- ✅ Moderne Transformer-Architektur verstanden (RoPE, GQA, KV-Cache, MLA)
- ✅ Computer Vision: CNNs, ViT, Vision Foundation Models
- ✅ Multimodale Anwendung gebaut
- 🧮: nanoGPT auf eigenem Korpus trainiert (Capstone-Foundations Start)
- 🔧: Modell-Configs lesen, Architektur-Entscheidungen treffen
- 💼: Konzeptionelles Verständnis für Stakeholder-Gespräche

**Du bist bereit für Stufe 8: Klassisches ML & Statistik — als didaktischer Rückblick auf einfacheren Konzepten.**

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: neue Multimodal-Modelle, Modern-Transformer-Innovationen (jährlich neue Standards), Vision Foundation Models.