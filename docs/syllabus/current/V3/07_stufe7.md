# Stufe 7: Deep Learning Foundations

**Aufwand:** 🔧 70-116h · 🧮 245-413h · 💼 13-25h  
**Voraussetzungen:** 🔧/💼: Stufen 1-6 · 🧮: Module 8.1+8.2+8.5 + Math-Diagnose + Stufen 1-6

| Querschnitte | Capstone-Beitrag | Tools |
|---|---|---|
| Math (Pflicht-Gate 🧮) | **Capstone B Start** (nanoGPT) | PyTorch, nanoGPT, Hugging Face Transformers, fast.ai |

Diese Stufe ist das mathematische und konzeptionelle Fundament moderner KI. Wer 🧮 ist, lebt hier — Karpathys Zero-to-Hero und fast.ai sind die Welt für mehrere Monate. Wer 🔧 ist, holt sich gezielt das, was für bewusste Modell-Auswahl und Fine-Tuning nötig ist. Wer 💼 ist, lernt die Größenordnungen und Konzepte, um Stakeholder-Gespräche führen zu können.

Hier startet das Capstone-Foundations-Projekt (🧮): nanoGPT-Vertiefung mit eigenem Korpus. *Capstone-spezifische Anforderungen siehe `18_capstone_b_foundations.md`.*

**Ergebnis nach Stufe 7:**
- Du verstehst Backpropagation mathematisch (🧮 vollständig, 🔧 konzeptionell, 💼 prinzipiell).
- Du kennst die moderne Transformer-Architektur (RoPE, GQA, KV-Cache, MLA).
- Du hast Computer Vision verstanden: CNNs, ViT, Vision Foundation Models.
- Du hast eine multimodale Anwendung gebaut.
- Audio/Voice-AI-Stack erklärbar + Voice-Agent-Pattern für eigenen Use-Case bewertet.
- Video-Generation-Awareness — Top-5-Modelle Mai 2026 erklärbar, Cost-Bandbreite, Use-Case-Limits verstanden.
- Reasoning-Modelle als Architektur-Familie verstanden: 🧮 mit eigenem GRPO-Mini-Run + Eval-Vergleich, 🔧 mit Reasoning-vs-Standard-Vergleich auf Capstone, 💼 mit 1-2-Pager an Team.
- Distributed Training-Patterns: 🧮 mit Multi-GPU-FSDP-Run auf 7B-Modell + Throughput-Vergleich, 🔧 mit Strategie-Wahl-Awareness-Brief.
- 🧮: nanoGPT auf eigenem Korpus trainiert (Capstone-Foundations Start).
- 🧮: Voraussetzungs-Block bestanden (8.1+8.2+8.5 + Math-Diagnose).
- 🧮: S7-Self-Assessment bestanden — Backprop auf Papier + eigene nanoGPT-Variante.
- 🔧: Modell-Configs lesen, Architektur-Entscheidungen treffen.
- 💼: Konzeptionelles Verständnis für Stakeholder-Gespräche, plus 1-2-Pager zu Reasoning-Modellen.

---

## Voraussetzungs-Block für 🧮

In v2.0 war Stufe 7 (Deep Learning) **vor** Stufe 8 (Klassisches ML) sequenziert — als didaktischer Rückblick. Das war der größte strukturelle Schwachpunkt der v2.0: Karpathy selbst empfiehlt klassisches ML als Foundation, jedes etablierte Curriculum (DeepLearning.AI Specialization, Stanford CS229 → CS231n) sequenziert klassisches ML *vor* Deep Learning. Backpropagation ist Spezialfall von Gradient Descent — den lernt man im Logistic-Regression-Kontext zuerst sauber.

Für 🧮 ist die Reihenfolge in v2.1 **harte Pflicht-Voraussetzung**, weil sonst Foundations-Lücken entstehen, die später nicht selbst geschlossen werden:

### Pflicht-Voraussetzungen für 🧮 vor Stufe 7

1. **Modul 8.1 (Data Exploration & Clustering)** — du hast saubere EDA-Pipelines gemacht und kennst Distance-Metrics. Wichtig für späteres Embedding-Verständnis.

2. **Modul 8.2 (Klassifikation & Decision Trees)** — **Logistic Regression from scratch implementiert** (Forward, Backward, Gradient Descent), Bias-Variance-Tradeoff praktisch demonstriert, Cross-Validation methodisch korrekt durchgeführt. Das ist die Foundation für Backprop in 7.1: Backprop ist Gradient Descent in einem mehrschichtigen Netz statt einer einzigen Logistic-Regression-Schicht.

3. **Modul 8.5 (A/B-Testing & Causal Inference)** — Statistik-Foundation für Eval. Wichtig für 7.x-Eval, 10.2 Fine-Tuning-Eval, Capstone-Eval.

4. **Math-Diagnose-Test bestanden** — siehe `12_querschnitt_math.md`. Just-in-Time-Math ohne Diagnose-Gate hat in v2.0 dazu geführt, dass Lernende in 7.1 mit Backprop kollidiert sind, weil die Calculus-Basis fehlte. Diagnose-Test vor Stufe 7, Lücken schließen, dann Stufe 7 starten.

### Für 🔧/💼 unkritisch

Für 🔧 und 💼 ist die Reihenfolge weniger kritisch, weil ihre Stufen-7-Tiefe konzeptionell ist (5-100h statt 215-365h). Sie können Stufe 7 vor Stufe 8 absolvieren — die Klassisches-ML-Vertiefung kommt dann in Stufe 8 nach.

### Wenn du 🧮 bist und schon in Stufe 7 angefangen hast

Stop. Mach erst Module 8.1, 8.2, 8.5 plus Math-Diagnose-Test. Es ist zwei bis vier Wochen mehr Aufwand vorne — du sparst Wochen, in denen du sonst in 7.1 hängen bleiben würdest, weil du das Fundament nicht hast.

---

## Modul 7.1: Neural Networks & Backpropagation

Die Grundlage allen Deep Learnings. Karpathys "Zero to Hero"-Serie ist 2026 der Goldstandard für dieses Material — sechs Stunden Video, Wochen Hands-on. Es gibt keine bessere Quelle. Dieses Modul lehrt **wann du was davon brauchst** und wie du es track-spezifisch durcharbeitest. Wer 🧮 ist, geht durch alle sieben Karpathy-Lectures. Wer 🔧 ist, geht durch die ersten drei (bis zur Tiny GPT-Implementation). Wer 💼 ist, schaut den ersten Lecture und liest die Zusammenfassungen.

**Aufwand:** 🔧 30-50h · 🧮 80-120h · 💼 5-10h
**Voraussetzungen:**
- **🧮: Voraussetzungs-Block oben (8.1+8.2+8.5 + Math-Diagnose) Pflicht**
- 🔧/💼: Math-Querschnitt (Lineare Algebra + Calculus mindestens konzeptionell)

### Lernziel
**🧮:** Du hast micrograd nachimplementiert und makemore von Grund auf gebaut. Du verstehst Backprop mathematisch und kannst Forward/Backward für eine einfache MLP per Hand auf Papier rechnen.

**🔧:** Du verstehst Neural Networks konzeptionell genug, um Architekturen zu lesen, Hyperparameter sinnvoll zu wählen, und Fine-Tuning-Entscheidungen zu treffen.

**💼:** Du verstehst, was ein Neural Network ist, was Training bedeutet (Cost! Compute!), und kannst Größenordnungen einordnen ("8B Parameter — wie viel ist das?").

### Theorie

- 🟢 **Was ist ein Neural Network?** — Schichten von Neuronen, jedes berechnet `output = activation(weights · inputs + bias)`. Deep Learning = mehrere Schichten gestapelt. Das Lernen passiert durch Anpassung der Weights via Backpropagation. [3Blue1Brown — Neural Networks Series (Video)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) (Pflicht-Vorbereitung)

- 🟢 **Forward Pass: Inferenz** — Input geht durch alle Layer, am Ende Output. Mit Linear Algebra: jede Layer ist eine Matrix-Multiplikation plus Activation Function. [d2l.ai — Multilayer Perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/index.html)

- 🟢 **Backpropagation: das Herzstück** — wie ein Network lernt. Loss-Function misst Fehler. Gradient (= partielle Ableitung des Loss nach jedem Weight) zeigt Richtung. Weights werden in Gegenrichtung des Gradients angepasst. Das ist Calculus + Lineare Algebra in Aktion. *Für 🧮: aus Modul 8.2 kennst du Gradient Descent für Logistic Regression — Backprop ist die mehrschichtige Variante. Das ist der Vorteil der korrigierten Sequenz.* [Karpathy — The spelled-out intro to neural networks (Video)](https://www.youtube.com/watch?v=VMj-3S1tku0) (Lecture 1, Pflicht für 🧮)

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

**Capstone-Foundations (🧮)**: Hier startet dein Capstone. Wähle einen eigenen Korpus (kann persönlich, kreativ, technisch sein), trainiere darauf zunehmend bessere Models. In 7.2 wird daraus ein moderner Transformer. *Capstone-spezifische Anforderungen siehe `18_capstone_b_foundations.md`.*

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
- [ ] **Voraussetzungs-Block bestanden** (8.1+8.2+8.5 + Math-Diagnose)
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

- 🔄 **RoPE (Rotary Position Embeddings)** — moderne Alternative zu Sinusoidal Positional Encoding. Statt absolute Position zu addieren, werden Q und K rotiert, wodurch Position relativ codiert wird. Vorteile: bessere Extrapolation auf längere Contexts, native Unterstützung für Context-Erweiterung. Llama 2/3/4, Mistral, Qwen — alle nutzen RoPE. *Verfallsdatum: Aug 2026.* [RoPE Paper (RoFormer)](https://arxiv.org/abs/2104.09864) · [Sebastian Raschka — RoPE Visualisierung](https://magazine.sebastianraschka.com/p/llm-research-papers-the-2024-list)

- 🔄 **GQA (Grouped Query Attention)** — moderne Effizienz-Variante von Multi-Head Attention: weniger K/V-Heads als Q-Heads, K/V werden über Q-Gruppen geteilt. Beispiel Llama 3.1: 32 Q-Heads, nur 8 K/V-Heads (8 Gruppen à 4 Q-Heads). Reduziert KV-Cache-Memory um 4x bei <0.5 Punkt Quality-Drop. Standard in Llama 3.x, 4, Qwen 2/3, Mistral. *Verfallsdatum: Aug 2026.* [GQA Paper](https://arxiv.org/abs/2305.13245) · [DigitalApplied — KV Cache Optimization 2026](https://www.digitalapplied.com/blog/kv-cache-optimization-techniques-2026)

- 🔄 **MQA (Multi-Query Attention)** — extreme Variante von GQA: alle Q-Heads teilen sich ein einziges K/V-Paar. Maximale Memory-Effizienz, aber Quality-Drop größer. Wenig genutzt 2026 — GQA ist der Sweet Spot.

- 🔄 **KV-Cache** — bei Inferenz: Keys und Values werden für alle bisherigen Tokens gespeichert, sodass jeder neue Token nicht alle Vorgänger neu berechnen muss. Linear wachsend mit Context-Length. Optimierungen: Quantisierung (FP8 KV-Cache halbiert Memory bei <1% Quality-Drop), Pruning, Compression. Bei 100K+ Context der dominante Memory-Faktor. *Verfallsdatum: Aug 2026.* [Hugging Face — KV Cache Tutorial](https://huggingface.co/docs/transformers/main/llm_tutorial_optimization)

- 🔄 **MLA (Multi-head Latent Attention)** — DeepSeek's Innovation 2024: statt K/V direkt zu cachen, werden sie in einen niedrig-dimensionalen Latent-Space projiziert. 7-14x Compression bei <0.2 Punkt Quality-Drop. Erlaubt 1M-Context auf moderater Hardware. Nur DeepSeek V2/V3/V4 nutzen das aktuell — mögliche zukünftige Standard. *Verfallsdatum: Aug 2026.* [DeepSeek-V2 Paper](https://arxiv.org/abs/2405.04434)

- 🔄 **Mixture of Experts (MoE)** — alternative Architektur: statt eines großen Feed-Forward-Layers viele kleine "Experts", von denen pro Token nur einige aktiv sind. Effizienz: Modell hat insgesamt 100B Parameter, aber pro Token nur 5B aktiv. Nutzer in DeepSeek, Mistral 8x7B, Gemini, OpenAI's größeren Modellen. Trainings-Komplexität höher. *Verfallsdatum: Aug 2026.* [Mistral — Mixture of Experts](https://mistral.ai/news/mixtral-of-experts/) · [DeepSeek-V3 Paper](https://arxiv.org/abs/2412.19437)

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

**Capstone-Foundations**: Dein Modell ist jetzt ein moderner Transformer auf eigenem Korpus. In 10.2 wird darauf Fine-Tuning angewendet. *Capstone-spezifische Anforderungen siehe `18_capstone_b_foundations.md`.*

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

- 🔄 **YOLO — Object Detection** — 2026: YOLOv11+ ist Stand. Real-time Detection, Bounding Boxes, Klassen. Praktisch für viele Use-Cases (Sicherheit, Medizin, Robotik). Ultralytics ist Standard-Implementation. *Verfallsdatum: Nov 2026.* [Ultralytics YOLO](https://docs.ultralytics.com) · [YOLO-World (Open-Vocabulary)](https://github.com/AILab-CVC/YOLO-World)

- 🔄 **SAM (Segment Anything Model) und SAM2** — Meta 2023/2024: Foundation Model für Segmentation. Mit Prompt (Punkt, Box, Text) segmentiert es jedes Objekt. SAM2 erweitert auf Video. Praxisrelevant für Medizin, Industrie, Robotik. [SAM2 GitHub](https://github.com/facebookresearch/sam2) · [Meta — Segment Anything](https://segment-anything.com)

- 🔄 **DINOv2** — Meta 2023: Vision Foundation Model mit Self-Supervised Learning. Erzeugt Vision-Features ohne Labels, die für viele Downstream-Tasks (Classification, Segmentation, Depth Estimation) reusable sind. [DINOv2](https://github.com/facebookresearch/dinov2)

- 🔄 **Stable Diffusion und Diffusion Models** — Text-to-Image-Generierung 2022+. Diffusion-Prozess: Bild von Rauschen zu Detail iterativ entrauschen. Stable Diffusion (OSS), Flux (neuere OSS-Modelle), DALL-E 3, Midjourney. [Stable Diffusion 3 Paper](https://arxiv.org/abs/2403.03206) · [Hugging Face Diffusers](https://huggingface.co/docs/diffusers/index)

- 🟢 **Transfer Learning für Vision** — Pre-trained Modelle (auf ImageNet, JFT) auf eigenen Daten fine-tunen. Für 🔧 oft 10-100x weniger Daten nötig als from-scratch. PyTorch-Standard via `torchvision.models`. [PyTorch — Transfer Learning Tutorial](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html)

- 🔄 **Vision-LLMs vs. klassische CV** — wichtige 2026-Beobachtung: für viele Aufgaben (OCR, Bild-Klassifikation, einfache Detection) ist ein Aufruf an Claude / GPT-5 / Gemini einfacher und qualitativ vergleichbar mit Custom-Modell. Custom-CV lohnt sich bei: Real-time-Anforderungen, Edge-Devices, sehr spezifischen Domänen, hohe Volumina mit Cost-Sensitivität. *Verfallsdatum: Nov 2026.* [Anthropic — Vision Cookbook](https://github.com/anthropics/anthropic-cookbook)

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

**Aufwand:** 🔧 14-22h · 🧮 20-30h · 💼 6-10h
**Voraussetzungen:** Modul 5.1, optional 7.1-7.3

### Lernziel
Du hast eine multimodale Anwendung gebaut (z.B. PDF-Analyse mit Tabellen und Bildern, Video-Zusammenfassung) und kannst zwischen Cloud-Multimodal-Modellen (Claude, GPT-5, Gemini) und lokalen OSS-Optionen wählen.

### Theorie

- 🔄 **Multimodale Frontier-Modelle Mai 2026** — alle großen Modelle sind multimodal:
 - **Claude Opus 4.7 / Sonnet 4.6** — Text + Vision, sehr stark bei komplexen Bildern und PDFs
 - **GPT-5 / 5.5** — nativ multimodal (Text, Bild, Audio), Realtime-Voice-Mode
 - **Gemini 3.1 Ultra** — nativ multimodal über alle Modalitäten (Text, Bild, Video, Audio), 2M Context — stärkstes Video-Verständnis
 - **Mistral 3 Pixtral** — europäische multimodale Option

 *Verfallsdatum: Aug 2026.* [Anthropic — Vision](https://docs.claude.com/en/docs/build-with-claude/vision) · [OpenAI — Vision](https://platform.openai.com/docs/guides/vision) · [Google — Gemini Multimodal](https://ai.google.dev/gemini-api/docs/vision)

- 🔄 **OSS Multimodale Modelle** — Llama 3.2 Vision, Qwen 2.5-VL und Qwen3-VL, LLaVA, Pixtral, Gemma 3 Vision. Über Ollama oder vLLM lokal lauffähig. Für DSGVO-sensible Anwendungen oder Cost-kritische Volumen-Anwendungen. *Verfallsdatum: Aug 2026.* [Ollama — Vision Models](https://ollama.com/search?c=vision) · [Qwen-VL](https://github.com/QwenLM/Qwen-VL)

- 🟢 **Vision-Use-Cases die 2026 zuverlässig funktionieren** — Bildbeschreibung, Texterkennung (OCR-Ersatz), einfache Klassifikation, Tabellen-Extraktion aus PDFs, Diagramm-Verständnis, einfache Bildbearbeitungs-Anweisungen. [Anthropic Cookbook — Vision Examples](https://github.com/anthropics/anthropic-cookbook/tree/main/multimodal)

- 🟢 **Vision-Schwächen** — präzise räumliche Aufgaben (Counting, exakte Positionen), feine Details (Mikroskopie, Medizin ohne Spezial-Training), reale Photo-Identifikation (oft refused), kontextuelle Wirklichkeit (was ist eigentlich rechts vom Bild?).

- 🔄 **Audio-Modalität — Basis-Bullet (siehe Tiefen-Block unten)** — STT (Speech-to-Text) Goldstandard ist immer noch Whisper (OpenAI, OSS) oder Whisper v3 turbo. TTS (Text-to-Speech): ElevenLabs (proprietär, beste Qualität), Piper (OSS), OpenAI Voice. Native Audio in LLMs: Gemini 2.5 mit "Audio Understanding", GPT-5 Realtime. *Verfallsdatum: Aug 2026.* [OpenAI Whisper](https://github.com/openai/whisper) · [Piper TTS](https://github.com/rhasspy/piper) · [ElevenLabs](https://elevenlabs.io)

---

#### Block: Audio/Voice-AI in der Tiefe

Audio ist 2026 nicht mehr Nische. Voice-Agents, Realtime-Conversation, Meeting-Transkription, Podcast-Analyse sind etablierte Use-Cases. Pflicht-Wissen für 🔧 mit Audio-Use-Case-Bezug, Awareness-Wissen für alle.

- 🔄 **STT (Speech-to-Text) Stack 2026:**
 - **Whisper** (OpenAI, MIT-Lizenz, OSS) — Goldstandard für deutsch- und multilingual-fähige STT, lokal lauffähig (whisper.cpp für Mac/Linux). Whisper v3 turbo ist 4-8× schneller bei vergleichbarer Qualität. Default-Wahl für die meisten Anwendungen.
 - **Deepgram** (proprietär, API) — sehr niedrige Latenz, hohe Diarization-Qualität (Sprecher-Trennung). Lohnt für Realtime-Anwendungen mit Latenz-SLA.
 - **AssemblyAI** (proprietär, API) — fokussiert auf strukturierte Outputs (Speaker-Labels, Sentiment, Topic-Detection out-of-the-box).
 - *Verfallsdatum: Aug 2026.* [Whisper GitHub](https://github.com/openai/whisper) · [whisper.cpp](https://github.com/ggerganov/whisper.cpp) · [Deepgram](https://deepgram.com)

- 🔄 **TTS (Text-to-Speech) Stack 2026:**
 - **ElevenLabs** (proprietär) — beste Qualität für emotional/expressiv klingende Stimmen, breite Sprachen-Unterstützung, Voice-Cloning. Cost-intensiv für Volumen.
 - **OpenAI Voice / Anthropic Voice** (sofern Mai 2026 verfügbar als Standalone-API) — solide Standard-Qualität, in API-Stack integriert.
 - **Piper TTS** (OSS) — lokal lauffähig, ausreichende Qualität für die meisten Use-Cases, DSGVO-freundlich. [Bark](https://github.com/suno-ai/bark) (Suno, OSS) als Alternative für expressivere Audio-Generierung.
 - **F5-TTS / OpenVoice** (OSS, neuer) — Voice-Cloning lokal mit Few-Shot-Voice-Samples.
 - *Verfallsdatum: Aug 2026.* [ElevenLabs Docs](https://elevenlabs.io/docs) · [Piper TTS](https://github.com/rhasspy/piper)

- 🔄 **Realtime-Voice-APIs als neuer Pattern 2026:**
 - **OpenAI Realtime API** (GPT-4o Realtime, GPT-5 Realtime) — bidirektionale Audio-Streams, Sub-Sekunden-Latenz, Tool-Use während Konversation, Voice-Activity-Detection (VAD) eingebaut. WebRTC oder WebSocket-Transport. *Verfallsdatum: Aug 2026.* [OpenAI Realtime API Docs](https://platform.openai.com/docs/guides/realtime)
 - **Gemini Live API** (Google) — vergleichbarer Realtime-Stack, besonders stark in Multilingual.
 - **Anthropic Voice** — bei Mai-2026-Stand prüfen, ob als Realtime-API verfügbar; falls ja, vergleichend einordnen.
 - *Verfallsdatum: Aug 2026.*

- 🟢 **Voice-Agent-Patterns** — drei dominante Architektur-Patterns 2026:
 - **STT → LLM → TTS-Pipeline** (klassisch, drei Komponenten, höhere Latenz, volle Kontrolle).
 - **Realtime-API-End-to-End** (eine API, niedrigere Latenz, weniger Kontrolle, höhere Cost).
 - **Hybrid** (Realtime-API für Conversation, klassische Pipeline für Spezial-Tasks wie Transkription-Archiv).
 - Faustregel: Realtime nur, wenn Latenz <500ms kritisch. Sonst klassische Pipeline.

- 🟢 **Audio-Anti-Patterns** — (1) STT ohne Punctuation-Modell (Output ist eine Wortwand), (2) TTS ohne SSML-Markup für Pausen/Betonung (klingt unmenschlich), (3) Realtime-API ohne Hangup-Detection (Cost-Spike), (4) keine Diarization bei Multi-Speaker-Aufnahmen (Sprecher vermengen sich), (5) Audio-Daten ohne PII-Filterung in Logs.

- 🟢 **Praxis-Hinweis für eigenen Capstone (🔧):** Wenn dein Capstone Audio-Use-Case beinhaltet (Voice-Agent, Meeting-Tool, Podcast-Analyse), wähle bewusst zwischen den drei Patterns. Dokumentiere die Entscheidung. **Awareness:** Voice-Agent-Capstone ist in v2.3 als eigenständige Variante geplant — aktuell ist Audio in 7.4 ein Block, kein eigenständiger Capstone-Pfad.

---

- 🔄 **Video-Modalität — Basis-Bullet (siehe Tiefen-Block unten)** — Gemini 3.1 ist 2026 das stärkste Modell für Video-Verständnis (kann Stunden-Videos analysieren). Praxis-Use-Cases: Meeting-Zusammenfassungen, Tutorial-Index, Sicherheits-Analyse. Video-Generierung ist anderes Thema (siehe Video-Generation-Awareness-Block unten). *Verfallsdatum: Aug 2026.* [Gemini Video Understanding](https://ai.google.dev/gemini-api/docs/video-understanding)

---

#### Block: Video-Generation Awareness

Video-Generation ist 2026 ein eigenständiges Feld, das sich rasant entwickelt. Curriculum-Stand: **Awareness-Wissen, kein Praxis-Capstone** — die Modell-Landschaft ist zu volatil und die Praxis-Anwendungen 2026 für die meisten Lernenden noch zu nischen-spezifisch.

- 🔄 **Top-Tier-Generative-Video-Modelle Mai 2026:**
 - **Veo 3 / Veo 3.1** (Google DeepMind) — natives Audio mit Video, sehr hohe Qualität, primär für Werbung/Marketing.
 - **Sora** (OpenAI) — Sora 2 als Re-Release nach 2025er-Pause; starke Storytelling-Fähigkeit, längere Sequenzen.
 - **Runway Gen-4 / Gen-4.5** — Industrie-Standard für professionelle Video-Produktion, fortgeschrittene Camera-Motion-Controls.
 - **Pika 2.0** — schnelle Generation, Consumer-fokussiert, niedrigere Cost.
 - **Kling 2.0 / 3.0** (Kuaishou) — chinesische Top-Option, sehr stark bei Stunts/Action-Szenen.
 - *Verfallsdatum: Aug 2026 — Modelle und Pricing ändern sich quartalsweise.* [Veo](https://deepmind.google/technologies/veo/) · [Sora](https://openai.com/sora) · [Runway](https://runwayml.com)

- 🔄 **Video-Generation-Use-Cases 2026:**
 - **Werbung und Marketing**: 5-30 Sekunden Spots, hoher Polish.
 - **Storyboarding**: schnelle Visualisierung von Szenen für Vor-Production.
 - **Educational Content**: Erklär-Animationen, schwer-zu-filmende Szenen.
 - **Internal Comms**: Trainings-Videos, Demo-Sequenzen.
 - **NICHT 2026-tauglich**: lange Filme (>1 Min konsistent), präzise lippensynchrone Dialoge, exakte Charakter-Konsistenz über mehrere Szenen.

- 🟢 **Awareness-Outcome (alle Tracks):** Du kennst die fünf Top-Modelle, kannst eine Use-Case-Modell-Empfehlung machen, verstehst Cost-Bandbreiten (5-30 Cent pro Sekunde Video je nach Qualität), und weißt, wann Video-Generation **nicht** das richtige Tool ist (lange Inhalte, hoher Konsistenzanspruch). Keine Praxis-Implementierung in diesem Modul.

- 🟢 **Praxis-Hinweis (optional 🔧 für Mehrwert-Mini-Projekt):** ein 5-Sekunden-Clip via Runway/Pika generieren, Cost und Quality dokumentieren — als Snapshot für eigene Use-Case-Bewertung. Nicht im Hauptprojekt-Pflichtumfang.

---

- 🟢 **Document AI mit Layout-Verständnis** — moderne Multimodale können PDFs mit Layout (Tabellen, Spalten, Bilder) verstehen. Native PDF-Support in Claude und Gemini, OpenAI seit 2024. Klassische Document-AI-Tools (AWS Textract, Azure Document Intelligence, Google Document AI) bleiben für Production-Volumes wichtig. [Anthropic — PDF Support](https://docs.claude.com/en/docs/build-with-claude/pdf-support)

- 🟢 **Multimodal-Prompting-Patterns** — wichtige Patterns: (1) Bild zuerst, Frage danach (klassisch). (2) Strukturierter Output erzwingen (JSON-Schema). (3) Multiple Bilder vergleichen ("was ist anders?"). (4) Bild + Text-Kontext kombinieren ("hier ist das Bild und der Original-Text, fasse zusammen"). [Anthropic Cookbook — Multimodal Patterns](https://github.com/anthropics/anthropic-cookbook)

- 🟢 **Cost und Performance multimodaler Modelle** — Bilder-Input ist teurer als Text. Bei Cloud-APIs typisch: 1000-5000 Tokens pro Bild je nach Auflösung. Latenz höher als reine Text-Aufrufe. Für Volumen-Anwendungen: lokale OSS-Modelle ernsthaft prüfen. [LLM Stats — Multimodal Pricing](https://llm-stats.com)

### Praxis: Hauptprojekt — Multimodale Anwendung deiner Wahl

Wähle EINEN Use-Case und baue ihn:

**Option A: PDF-Analyse-Tool** — komplexe PDFs mit Tabellen, Bildern, Charts. Pipeline: PDF-Upload → multimodal-LLM-Aufruf → strukturierter Output (JSON mit extrahierten Daten). Use-Case: Rechnungs-Verarbeitung, Forschungs-Paper-Auswertung, Vertrags-Analyse.

**Option B: Video-Zusammenfassungs-Tool** — Video als Input, KI erzeugt strukturierte Zusammenfassung mit Timestamps. Use-Case: Lecture-Notes aus YouTube, Meeting-Protokoll aus Aufzeichnung. Mit Gemini 3.1 oder lokal mit Whisper + Llama 3.2 Vision (Frame-Sampling).

**Option C: Multimodaler Personal Assistant** — Bild oder Audio als Input, KI antwortet kontextuell. Use-Case: "Was ist auf diesem Schild?", "Übersetze dieses Foto-Menü", "Beschreibe dieses Bild für meine Großeltern".

**Option D: Document AI für Eigenbedarf** — alle eigenen Belege/Verträge automatisch parsen, in Markdown oder Datenbank überführen. DSGVO-relevant, deshalb lokales OSS-Setup empfohlen.

**Option E: Voice-Agent-Mini** — einfacher Voice-Assistant mit STT (Whisper lokal) → LLM (Claude/GPT/lokal) → TTS (Piper oder ElevenLabs). Use-Case: persönlicher Voice-Wissens-Assistent auf eigenem RAG aus 5.1, Lerngesprächs-Begleiter, Sprach-Tagebuch-Assistent. Trade-off-Reflexion klassische Pipeline vs. Realtime-API dokumentieren.

Im Portfolio: `stufe-7_deep-learning/7-4-multimodal/` mit Code, Beispielen, Vergleich Cloud vs. lokal.

### 🎁 Mehrwert-Mini-Projekte
- **Eigener Foto-zu-Markdown-Converter**: Bild von einer handgeschriebenen Notiz → strukturierte Markdown-Notiz.
- **Audio-Tagebuch-Transkribierer**: tägliche Audio-Memos mit Whisper transkribieren, mit LLM strukturieren.

### 🌱 Open-Source-Pfad
Komplett OSS-Stack:
- Llama 3.2 Vision oder Qwen 2.5-VL via Ollama für multimodale Inferenz
- Whisper lokal (whisper.cpp für Mac/Linux, Optimized) für Audio
- Piper TTS oder Bark für Speech-Output
- Gradio oder Streamlit für Frontend

### Outcome-Check
- [ ] Multimodale Anwendung lauffähig
- [ ] Mindestens zwei Modelle verglichen (Cloud vs. lokal, oder zwei Cloud-Anbieter)
- [ ] Cost-Analyse pro Aufruf
- [ ] Reflexion: für welche Use-Cases reicht OSS, wo muss Cloud sein?
- [ ] **Audio/Voice-AI-Stack 2026 erklärbar** — STT-Optionen (Whisper / Deepgram / AssemblyAI), TTS-Optionen (ElevenLabs / OpenAI / Piper / Bark), Realtime-API-Pattern
- [ ] **Voice-Agent-Pattern für eigenen Use-Case bewertet** — STT→LLM→TTS-Pipeline vs. Realtime-API-End-to-End vs. Hybrid
- [ ] **Video-Generation-Awareness** — Top-5-Modelle Mai 2026 (Veo 3, Sora, Runway, Pika, Kling) erklärbar, Cost-Bandbreite gemerkt, Use-Case-Limits verstanden

---

## Modul 7.5: Reasoning-Modelle als Architektur-Familie

In Modul 2.5.5 hast du Reasoning-Modelle als Architektur-Familie auf Awareness-Niveau kennengelernt. Modul 7.5 vertieft das mit Trainings- und Inferenz-Tiefe — für 🧮 mit eigenem GRPO-Mini-Run, für 🔧 mit Production-Engineering-Patterns, für 💼 als 1-2-Pager mit Cost-Awareness und strategischer Implikation.

**Aufwand:** 🔧 4-6h · 🧮 12-18h · 💼 3-5h
**Voraussetzungen:** Module 7.1 (NN/Backprop), 7.2 (Modern Transformer); für 🧮 zusätzlich Stufe 8 (RL-Awareness in 6.3)
**Status:** **Pflicht 🧮**, optional 🔧, Awareness 💼

### Lernziel
- **🧮**: Du verstehst Test-Time-Compute als eigene Architektur-Familie. Du kannst die Trainings- und Inferenz-Patterns von o1/o3, Claude Thinking, DeepSeek R1 mathematisch und mechanistisch einordnen. Du hast einen Mini-GRPO-Run auf einem 1B-Modell durchgeführt.
- **🔧**: Du kannst Reasoning-Modelle in Production angemessen einsetzen (Cost-Awareness, Latenz, Stop-Bedingungen) und ihre Failure-Modes erkennen. Du hast einen Standard-vs-Reasoning-Vergleich auf eigenem Capstone-Use-Case mit 10-20 Test-Cases gemacht.
- **💼**: Du verstehst, was Reasoning-Modelle sind, was sie kosten (5-30× Standard-LLM), wann sie strategisch sinnvoll sind und wann nicht.

### Theorie

- 🟢 **Test-Time-Compute als eigene Skalierungs-Achse** — bisher (2018-2024): mehr Training-Compute = bessere Modelle. Neu seit OpenAI o1 (2024): mehr **Inferenz-Compute** (Thinking-Tokens) = bessere Antworten bei harten Tasks. Eigene Skalierungs-Achse, eigene Kosten-Struktur, eigene Trainings-Patterns. Brücke zu Block 2.5.5.

- 🟢 **Reasoning-Modell-Familie 2026:**
 - **OpenAI**: o1 → o3 → o3-mini, plus o4 / o5 in Roadmap.
 - **Anthropic**: Claude Sonnet 4.6 mit Thinking, Claude Opus 4.7 mit **Adaptive Thinking** (Modell entscheidet selbst, wieviel Thinking nötig).
 - **DeepSeek** R1 (OSS, MIT-Lizenz) → R2.
 - **Google**: Gemini 2.5 Reasoning, Gemini 3.1 Thinking.
 - **Alibaba** Qwen QwQ (OSS, Apache 2.0).
 - *Verfallsdatum: Aug 2026.*

- 🟢 **Trainings-Patterns (Vertiefung für 🧮):**
 - **RLHF mit Reasoning-Reward** — klassische RL-Schiene mit Reward auf Reasoning-Qualität.
 - **GRPO (Group Relative Policy Optimization)** — DeepSeek R1, gruppenbasiertes RL **ohne separaten Critic** (nur Reward-Modell). Effizienter als PPO bei großen Modellen. [DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)
 - **Process-Reward-Models (PRM)** — Reward pro Reasoning-Schritt, nicht nur am Ende.
 - **Outcome-Reward-Models (ORM)** — Reward nur am Ende der Reasoning-Chain.

- 🟢 **Inferenz-Patterns:**
 - **Chain-of-Thought intern** — bei Reasoning-Modellen passiert CoT eingebaut, nicht via Prompt.
 - **Self-Consistency-Sampling** — mehrere Reasoning-Pfade, Mehrheits-Votum. Cost-Trade-off.
 - **Best-of-N mit Verifier** — N Antworten generieren, Verifier wählt beste.
 - **Tree-Search-Inference** — wie Monte-Carlo-Tree-Search im Reasoning-Raum.
 - **Adaptive Thinking** (Claude Opus 4.7) — Modell entscheidet selbst, wieviel Thinking pro Anfrage nötig.

- 🟢 **Engineering-Patterns für 🔧:**
 - **Ask-don't-Tell**: bei Reasoning-Modellen *kein* CoT-Prompt nötig — sie machen es eingebaut. CoT explizit zu prompten kann Quality verschlechtern (**Anti-Pattern!**). Brücke zu Modul 2.5.
 - **Effort-Parameter**: Claude 4.7 (`thinking.budget_tokens` low/medium/high/xhigh), OpenAI (`reasoning_effort` low/medium/high). Pflicht-API-Kenntnis.
 - **Cost-Awareness**: Thinking-Tokens werden meist berechnet, oft 5-30× mehr Token als Standard-Output.
 - **Latenz**: Reasoning-Modelle haben Sekunden bis Minuten Time-to-First-Token bei harten Tasks. Streaming-Strategie überdenken.

- 🟢 **Wann Reasoning-Modell, wann Standard?** — Faustregel:
 - **Reasoning**: komplexe Math, Code-Debugging, Multi-Step-Planning, Trade-off-Analysen, formale Logik.
 - **Standard**: Klassifikation, Retrieval-Augmented-Tasks, Brand-Voice-Generation, schnelle Antworten, Zusammenfassungen, Übersetzungen.
 - **Faustregel** *(aus Modul 2.5)*: wenn du das Ergebnis selbst in 30 Sekunden hingekriegt hättest, brauchst du kein Reasoning-Modell.

- 🟢 **Failure-Modes Reasoning** — drei häufige:
 - **(1) Overthinking auf simplen Tasks** — Cost-Spike, schlechtere Qualität (Modell denkt sich tiefer in falsche Richtung).
 - **(2) Halluzinations-Persistenz** — Modell denkt sich tiefer in initialen Fehler, kommt nicht heraus.
 - **(3) "Thinking-Theater"** — lange Thinking-Tokens, schlechtes Resultat, weil Reasoning-Chain nicht eval-konvergent.

- 🟢 **Eval von Reasoning** — Eval-Methodik anders als bei Standard-LLMs: nicht nur Output, auch **Trajectory der Thinking-Tokens** (für 🧮 + 🔧). Verifier-basierte Eval (PRM/ORM) als Vertiefung. Brücke zu Modul 6.2 Trajectory-Eval und Querschnitt 13.

- 🟢 **Stanford CS336 Post-Training-Block** als Vertiefungs-Referenz für 🧮 — deckt Reasoning-Training systematisch ab. Brücke zu Master-Sektion "Lizenz und Credits".

### Praxis (track-spezifisch)

**🧮 — Hauptprojekt: Mini-GRPO-Run auf 1B-Modell**

- **Theorie-Lektüre**: DeepSeek-R1 Paper (Abstract + Method-Sektion) + GRPO-Block (Brücke zu Modul 10.2 Fine-Tuning).
- **Praxis**: Mini-GRPO-Run auf einem 1B-Open-Source-Modell (z.B. Qwen 2.5 0.5B oder TinyLlama) mit kleinem Reasoning-Datensatz (GSM8K-Subset oder MATH-Subset, 100-300 Samples).
- **Tools**: TRL (`GRPOTrainer`) oder Unsloth, auf Cloud-GPU (Lambda/RunPod, 1-3h Compute, <30€).
- **Eval**: Vorher-Nachher-Vergleich auf Held-Out-Set des Reasoning-Benchmarks (10-20 Test-Cases).
- **Reflexion**: Wo skaliert Reasoning-Training auf 1B-Modell, wo nicht? Was würde 7B/13B ändern?
- Im Portfolio: `stufe-7_deep-learning/7-5-reasoning-architecture/` mit Code, Eval-Report, Reflexion.

**🔧 — Hauptprojekt: Standard-vs-Reasoning-Vergleich auf Capstone**

- **Use-Case wählen**: 10-20 Test-Cases aus deinem Capstone (Mix aus einfach + komplex).
- **Vergleich**: Standard-Modell (z.B. Sonnet 4.6 ohne Thinking) vs. Reasoning-Modell (z.B. Opus 4.7 mit High-Effort) auf allen Test-Cases.
- **Messen**: Cost-Tracking pro Run, Latenz-Messung, Quality-Eval (Faithfulness oder Task Success Rate).
- **Decision-Framework**: für welche Capstone-Pfade Reasoning, für welche Standard? Tabelle mit Begründung.
- Im Portfolio: `stufe-7_deep-learning/7-5-reasoning-engineer/` mit Vergleichs-Tabelle, Decision-Framework, Reflexion.

**💼 — 1-2-Pager**

- Was sind Reasoning-Modelle? (Test-Time-Compute, Familie 2026)
- Was kosten sie? (5-30× Standard-LLM, Latenz-Aufschlag)
- Welche strategische Implikation für dein Use-Case-Portfolio (Modul 9.1)?
- Wann lohnt der Cost-Aufpreis, wann nicht?
- Im Portfolio: `stufe-7_deep-learning/7-5-reasoning-strategist.md`.

### 🌱 Open-Source-Pfad
- **DeepSeek R1** (MIT-Lizenz) für lokale Reasoning-Inferenz via Ollama oder vLLM.
- **Qwen QwQ** (Apache 2.0) als zweite OSS-Reasoning-Option.
- **GRPO** via TRL (Hugging Face) oder Unsloth — beide OSS.

### Outcome-Check (track-spezifisch)

**🧮:**
- [ ] DeepSeek-R1-Paper-Lektüre dokumentiert (Abstract + Method)
- [ ] Mini-GRPO-Run dokumentiert (Code, Logs, Cost)
- [ ] Eval-Vergleich Vorher-Nachher
- [ ] Reflexion zu Skalierungs-Grenzen auf 1B vs. größer

**🔧:**
- [ ] Standard-vs-Reasoning-Vergleich auf Capstone dokumentiert (10-20 Test-Cases)
- [ ] Cost+Latenz+Quality-Tabelle
- [ ] Decision-Framework für Capstone-Pfade
- [ ] Anti-Pattern bewusst getestet (Reasoning auf simple Aufgabe → Cost-Spike beobachtet)

**💼:**
- [ ] 1-2-Pager im Portfolio
- [ ] Cost-Bandbreite mit konkreten Zahlen
- [ ] Strategische Implikation für eigenes Use-Case-Portfolio dokumentiert

---

## Modul 7.6: Distributed Training systematisch

Multi-GPU-Training ist 2026 nicht mehr Forschungs-Nische — Open-Source-Modelle ab 7B benötigen es. Dieses Modul lehrt 🧮 systematisch DDP, FSDP, ZeRO 1/2/3, plus Tensor- und Pipeline-Parallelism als Awareness. Für 🔧 als konzeptionelles Verständnis für Architektur-Entscheidungen ("welches Modell auf welcher Hardware?"). Für 💼 nicht relevant.

**Aufwand:** 🔧 4-6h · 🧮 18-30h · 💼 0h
**Voraussetzungen:** Module 7.1, 7.2; idealerweise 10.2 (Fine-Tuning) als Anwendungsanker
**Status:** **Pflicht 🧮**, optional 🔧, **nicht für 💼**

### Lernziel
- **🧮**: Du verstehst und kannst implementieren — Data-Parallel (DDP), Fully Sharded Data Parallel (FSDP), ZeRO-Stages, plus Awareness für Tensor- und Pipeline-Parallelism. Du hast einen Multi-GPU-Training-Run gemacht (Cloud-GPU-Rental, 2-4 GPUs, <50€ Cost).
- **🔧**: Awareness und konzeptionelles Verständnis für Architektur-Entscheidungen — welches Model auf welcher Hardware mit welcher Strategie?

### Theorie

- 🟢 **Warum Distributed Training?** — Modelle ab 7B passen nicht mehr auf eine einzelne GPU für Training (selbst H100 mit 80GB). Distributed Training verteilt Modell oder Daten auf mehrere GPUs/Nodes.

- 🟢 **Data-Parallel (DDP)** — gleiches Modell auf jeder GPU, unterschiedliche Datenbatches, Gradienten am Ende synchronisiert. Einfach zu implementieren, aber Modell muss auf einer GPU passen. Standard für kleine bis mittlere Modelle (bis ~3B).

- 🟢 **Fully Sharded Data Parallel (FSDP)** — Modell-Parameter, Gradienten, Optimizer-State werden über GPUs verteilt (sharded). Jede GPU hat nur Teil des Modells, beim Forward-/Backward-Pass werden Shards on-demand zusammengeführt. Standard für 7B-30B-Modelle. PyTorch-native seit 2024.

- 🟢 **ZeRO (Zero Redundancy Optimizer) Stages** — DeepSpeed-Variante mit drei Stages:
 - **ZeRO-1**: Optimizer-State sharded.
 - **ZeRO-2**: + Gradients sharded.
 - **ZeRO-3**: + Modell-Parameter sharded (entspricht FSDP).
 - Trade-off: mehr Sharding = weniger Memory pro GPU, aber mehr Communication-Overhead.

- 🟢 **Tensor-Parallelism (Awareness)** — Modell-Layer werden über GPUs aufgeteilt (z.B. Attention-Heads auf verschiedene GPUs). Megatron-LM-Pattern. Komplex, lohnt erst ab Multi-Node-Setups.

- 🟢 **Pipeline-Parallelism (Awareness)** — verschiedene Layer auf verschiedenen GPUs, Daten fließen wie in Pipeline durch. Megatron-LM kombiniert TP + PP.

- 🔄 **Tools 2026:**
 - **PyTorch FSDP** (native, OSS) — 🧮 Default-Wahl für 7B-30B.
 - **DeepSpeed** (Microsoft, OSS) — ZeRO-Stages, viele Production-Features.
 - **Accelerate** (Hugging Face, OSS) — Wrapper über FSDP/DeepSpeed mit einfacherer API.
 - **Megatron-LM** (NVIDIA, OSS) — TP + PP für >30B-Modelle.
 - *Verfallsdatum: Aug 2026.*

- 🟢 **Stanford CS336 als Vertiefungsreferenz für 🧮** — deckt Distributed Training systematisch ab.

- 🟢 **Sebastian Raschka's Distributed-Training-Articles** als parallele Lektüre.

### Praxis 🧮: Hauptprojekt — Multi-GPU-Run auf 7B-Modell

- **Setup**: Cloud-GPU-Rental (Lambda Labs, RunPod, Modal), 2-4 GPUs (H100 oder A100). Compute-Cost-Budget: <50€ realistisch.
- **Modell**: ein 7B-OSS-Modell (Qwen 2.5 7B, Llama 3.1 8B oder Gemma 3 7B).
- **Strategie**: FSDP via PyTorch oder Accelerate. Optional: DeepSpeed ZeRO-3 als Vergleich.
- **Datensatz**: kleines Sample (z.B. Alpaca-Subset, 500-1000 Samples).
- **Trainings-Run**: 1-3h, dokumentierte Loss-Curves, Throughput (Tokens/Sekunde), Memory-Auslastung pro GPU.
- **Vergleich**: Single-GPU (mit QLoRA, weil sonst OOM) vs. Multi-GPU mit FSDP. Throughput, Memory, Cost.
- **Reflexion**: bei welcher Modellgröße lohnt Multi-GPU? Wann reicht Single-GPU mit QLoRA?
- Im Portfolio: `stufe-7_deep-learning/7-6-distributed-training/` mit Code, W&B-Logs, Vergleichs-Report, Reflexion.

### Praxis 🔧: Awareness-Brief

- 1-Pager: was ist DDP, FSDP, ZeRO konzeptionell?
- Architektur-Entscheidungs-Tabelle: welches Modell-Größen-Range mit welcher Strategie auf welcher Hardware?
- Im Portfolio: `stufe-7_deep-learning/7-6-distributed-awareness.md`.

### 🌱 Open-Source-Pfad
- **PyTorch FSDP** + **Hugging Face Accelerate** — komplett OSS.
- **DeepSpeed** + **Hugging Face Transformers** — komplett OSS.
- Cloud-GPU-Rental kann nicht OSS sein, aber: Hetzner Dedicated GPU-Server (mehr DSGVO-freundlich als US-Provider) oder lokal mit 2× RTX 4090 (Privat-Setup für ernsthafte 🧮).

### Outcome-Check

**🧮:**
- [ ] Multi-GPU-Run dokumentiert (Code, W&B-Logs, Hardware-Setup)
- [ ] FSDP (oder DeepSpeed ZeRO-3) implementiert auf 7B-Modell
- [ ] Throughput, Memory, Cost-Vergleich Single-GPU (QLoRA) vs. Multi-GPU (FSDP)
- [ ] Reflexion zu Modellgröße-vs-Strategie

**🔧:**
- [ ] Awareness-Brief im Portfolio
- [ ] Architektur-Entscheidungs-Tabelle (Modell-Range × Strategie × Hardware)

---

## S7-Self-Assessment (primär für 🧮)

**Aufwand:** 10-15h *(primär 🧮 — für andere Tracks optional)*
**Wann:** Am Ende der Stufe 7, vor Beginn nächster Stufe (Stufe 8 falls noch nicht gemacht, oder Stufe 9)
**Voraussetzungen:** Module 7.1, 7.2, 7.3, 7.4

### Warum dieses Self-Assessment

In v2.0 trug der Capstone-B (Foundations) allein die Last der Stufen-7-Outcome-Validierung. Das war zu spät: 🧮-Lernende absolvierten Modul-Outcomes (Checkboxen), waren aber nicht wirklich Foundation-kompetent. S7-Self-Assessment fängt das ab — bevor du in den Capstone-Endspurt gehst.

Für 🔧/💼 ist S7 optional — sie haben in dieser Stufe weniger Tiefe und entsprechend weniger Validierungs-Bedarf.

### Aufgabe für 🧮 (Pflicht)

Zwei Sub-Aufgaben:

**Sub-Aufgabe 1: Backprop auf Papier (1-2h)**

Nimm ein 2-Layer-Netz mit ReLU, 2 Input-Features, 2 Hidden-Units, 1 Output. Mit konkreten Weights und einem konkreten Input-Sample (z.B. x=[0.5, 0.3], Target y=1):

- Schreibe Forward Pass auf Papier durch.
- Berechne den Loss (MSE oder Cross-Entropy).
- Berechne alle Gradienten von Hand (∂L/∂W für jeden Weight).
- Berechne den Weight-Update mit einem Learning-Rate von 0.1.

**Erfolgs-Schwelle:** Du machst es ohne Hilfsmittel und kannst es in <90 Min. Wenn nicht — zurück zu Karpathy Lecture 1 + 2.

**Sub-Aufgabe 2: nanoGPT-Mini-Variante mit eigener Anpassung (8-13h)**

Auf deinem Capstone-Korpus (aus 7.1/7.2):
- Trainiere eine kleine nanoGPT-Variante (3-6 Layer, kleine Embedding-Dimension).
- **Mache eine eigene Modifikation**: zweite moderne Komponente einbauen (wenn du in 7.2 RoPE eingebaut hast, jetzt GQA — oder umgekehrt). Oder: eine eigene Hyperparameter-Studie mit 3-5 Konfigurationen, dokumentierte Trade-offs.
- Trainings-Run mit Loss-Curves dokumentieren.
- Sample-Outputs deines Modells.
- 1-Seite-Reflektion: was hast du anders gemacht als nanoGPT-Default? Was war das Ergebnis?

**Im Portfolio:** `self-assessments/s7/` mit:
- Backprop-Aufgabe (Foto/Scan vom Papier oder LaTeX)
- Code der nanoGPT-Variante
- Trainings-Logs
- Reflektion

### Self-Assessment-Schwellen — wann hast du bestanden?

- [ ] **Backprop auf Papier** in <90 Min ohne Hilfsmittel.
- [ ] **Eigene nanoGPT-Variante** läuft, eigene Modifikation begründet und dokumentiert.
- [ ] Sample-Outputs zeigen, dass das Modell gelernt hat (kein zufälliger Output).
- [ ] Reflektion ehrlich: mindestens 2 Schwächen / Erkenntnisse.

**Wenn du diese Schwellen nicht erreichst:** Zurück zu den schwächsten Stellen in 7.1/7.2 — bevor du den Capstone-B-Endspurt machst. Foundation-Lücken werden im Capstone deutlich, dann ist es teurer zu reparieren.

### Optional für 🔧/💼

🔧 kann als Bonus die Backprop-Aufgabe machen — gibt Tiefenverständnis für Modul-Wahl in 10.2 (Fine-Tuning).

💼 kann als Bonus eine "Stakeholder-Briefing-Variante" schreiben: "Was ich aus Stufe 7 mitgenommen habe, in 5 Folien für mein Team". Übung im Strategist-Kommunikationsstil.

---
## Free-Zertifikate für Stufe 7

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Karpathy Zero to Hero](https://karpathy.ai/zero-to-hero.html) | Andrej Karpathy | 60-100h | Pflicht für 🧮 in 7.1, 7.2 |
| [DeepLearning.AI Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) | Andrew Ng (Coursera Audit-Modus) | ~100h | Vertiefung 7.1, alle Tracks |
| [Stanford CS231n](https://cs231n.github.io) | Stanford | 40-80h | Vertiefung 7.3 für 🧮 |
| [Hugging Face — Computer Vision Course](https://huggingface.co/learn/computer-vision-course) | Hugging Face | 20-40h | Praxis-Vertiefung 7.3 |
| [fast.ai — Practical Deep Learning](https://course.fast.ai) | fast.ai | 60-80h | Alternative zu DLAI |
| [d2l.ai — Dive into Deep Learning](https://d2l.ai) | Aston Zhang et al. | als Buch | Referenz-Lehrbuch |

**Coursera-Audit-Modus-Hinweis:** Andrew Ng's Deep Learning Specialization ist im Audit-Modus auf Coursera kostenlos zugänglich (Materialien ja, Zertifikat nein). Details siehe `99_anhang.md`.

---

## Stufen-Outcome

Nach Stufe 7 hast du:
- ✅ Backpropagation verstanden (track-spezifisch tief)
- ✅ Moderne Transformer-Architektur verstanden (RoPE, GQA, KV-Cache, MLA)
- ✅ Computer Vision: CNNs, ViT, Vision Foundation Models
- ✅ Multimodale Anwendung gebaut
- ✅ **Audio/Voice-AI-Stack erklärbar + Voice-Agent-Pattern für eigenen Use-Case bewertet**
- ✅ **Video-Generation-Awareness** — Top-5-Modelle Mai 2026 erklärbar, Cost-Bandbreite, Use-Case-Limits verstanden
- ✅ **Reasoning-Modelle als Architektur-Familie verstanden**: 🧮 mit eigenem GRPO-Mini-Run + Eval-Vergleich, 🔧 mit Reasoning-vs-Standard-Vergleich auf Capstone, 💼 mit 1-2-Pager an Team
- ✅ **Distributed Training-Patterns**: 🧮 mit Multi-GPU-FSDP-Run auf 7B-Modell + Throughput-Vergleich, 🔧 mit Strategie-Wahl-Awareness-Brief
- 🧮: nanoGPT auf eigenem Korpus trainiert (Capstone-Foundations Start, *Update siehe `18_capstone_b_foundations.md`*)
- 🧮: **Voraussetzungs-Block bestanden** (8.1+8.2+8.5 + Math-Diagnose)
- 🧮: **S7-Self-Assessment bestanden** — Backprop auf Papier + eigene nanoGPT-Variante
- 🔧: Modell-Configs lesen, Architektur-Entscheidungen treffen
- 💼: Konzeptionelles Verständnis für Stakeholder-Gespräche, plus 1-2-Pager zu Reasoning-Modellen

**Du bist bereit für Stufe 8: Klassisches ML & Statistik.** *Für 🧮 hast du Module 8.1+8.2+8.5 schon vorgezogen — in Stufe 8 fokussierst du dich auf 8.3 (Regression & Boosting) und 8.4 (Recommendation Systems), die nicht-Pflicht-Vorbedingung waren.*

