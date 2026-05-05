# Tool-Übersicht

Umfassende Referenz aller KI-Tools, Frameworks und Plattformen — aus dem Curriculum und darüber hinaus. Basierend auf dem Syllabus-Inhalt und aktuellen Markt-Daten (u.a. [a16z Top 100 Gen AI Apps 2025](https://a16z.com/100-gen-ai-apps-4/)).

**Legende:**
- :green_circle: Stabil, gut etabliert
- :arrows_counterclockwise: Volatil, regelmäßig prüfen
- :seedling: Open Source
- :moneybag: Kostenpflichtig / Freemium

---

## LLMs & KI-Assistenten

Die Foundation-Modelle und Chat-Interfaces, mit denen du im Curriculum arbeitest.

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **ChatGPT** | :moneybag: Freemium | OpenAI-Flaggschiff. GPT-4o, o3, GPT-5. 400M+ wöchentliche Nutzer (2025). Multimodal, Voice, Reasoning. | [chat.openai.com](https://chat.openai.com) |
| **Claude** | :moneybag: Freemium | Anthropic. Opus 4.6, Sonnet 4.6, Haiku. 200K Context, Extended Thinking, Tool-Use, Artifacts. | [claude.ai](https://claude.ai) |
| **Gemini** | :moneybag: Freemium | Google. Gemini 2.5/3.1. Multimodal (Text, Bild, Video, Audio). Deep Research, Gems. | [gemini.google.com](https://gemini.google.com) |
| **DeepSeek** | :seedling: OSS | Chinesisches LLM. R1 (Reasoning), V3 (Chat). Starke Benchmarks bei niedrigem Trainings-Cost. | [chat.deepseek.com](https://chat.deepseek.com) |
| **Perplexity** | :moneybag: Freemium | KI-Suchmaschine mit Quellenangabe. Stark für Recherche-Aufgaben. | [perplexity.ai](https://perplexity.ai) |
| **Grok** | :moneybag: Freemium | xAI. Grok 4. Echtzeit-Zugriff auf X/Twitter-Daten. | [grok.x.ai](https://grok.x.ai) |
| **Mistral** | :seedling: OSS + API | Europäisches Modell. Mistral 3, Pixtral (Vision). Starke OSS-Modelle. | [mistral.ai](https://mistral.ai) |
| **Meta AI** | :seedling: OSS | Meta-Assistent basierend auf Llama. In WhatsApp, Instagram, Facebook integriert. | [meta.ai](https://meta.ai) |
| **Poe** | :moneybag: Freemium | Multi-Modell-Zugang (GPT, Claude, Gemini, Llama) über ein Interface. | [poe.com](https://poe.com) |

### Open-Source LLMs (lokal lauffähig)

| Modell | Parameter | Stärken | Zugang |
|--------|-----------|---------|--------|
| **Llama 4** (Meta) | 10B-400B+ | Allround, multilingual, open-weight | [llama.meta.com](https://llama.meta.com) |
| **Qwen 3** (Alibaba) | 0.6B-235B | Stark mehrsprachig, Vision-Varianten (QwQ, Qwen-VL) | [github.com/QwenLM](https://github.com/QwenLM) |
| **Gemma 4** (Google) | 2B-27B | Kompakt, gut für Edge/Mobile | [ai.google.dev/gemma](https://ai.google.dev/gemma) |
| **DeepSeek R1** | 7B-671B (MoE) | Reasoning, Chain-of-Thought | [github.com/deepseek-ai](https://github.com/deepseek-ai) |
| **Phi-4** (Microsoft) | 3B-14B | Sehr klein, überraschend fähig | [huggingface.co/microsoft](https://huggingface.co/microsoft) |
| **Mistral 3** | 7B-122B (MoE) | Europäisch, Apache-2.0 | [huggingface.co/mistralai](https://huggingface.co/mistralai) |

### Lokale LLM-Runner

| Tool | Beschreibung | Link |
|------|--------------|------|
| **Ollama** | :seedling: Einfachster Weg, LLMs lokal zu laufen. CLI + API. Mac/Linux/Windows. | [ollama.com](https://ollama.com) |
| **Open WebUI** | :seedling: Web-Interface über Ollama. ChatGPT-ähnliche UI lokal. | [openwebui.com](https://openwebui.com) |
| **LM Studio** | :moneybag: Free | GUI zum Laden und Testen von GGUF-Modellen lokal. | [lmstudio.ai](https://lmstudio.ai) |
| **vLLM** | :seedling: Production-Grade Inference-Server. PagedAttention für hohen Throughput. | [github.com/vllm-project/vllm](https://github.com/vllm-project/vllm) |
| **SGLang** | :seedling: Schneller Inference-Server mit RadixAttention. | [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang) |
| **llama.cpp** | :seedling: C++-Inferenz für Llama-Modelle auf Consumer-Hardware. | [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) |

---

## Coding-Tools & IDEs

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Cursor** | :moneybag: Freemium | KI-native IDE (VS Code Fork). Code-Generierung, Bug-Fixing, Codebase-Awareness. #1 Agentic IDE 2025. | [cursor.com](https://cursor.com) |
| **Claude Code** | :moneybag: Freemium | Anthropic CLI-Tool für Coding direkt im Terminal. Agentic, multi-file edits. | [claude.ai/code](https://claude.ai/code) |
| **GitHub Copilot** | :moneybag: Freemium | Microsoft/GitHub. Code-Completion und Chat in VS Code/JetBrains. | [github.com/features/copilot](https://github.com/features/copilot) |
| **Continue** | :seedling: OSS | VS Code Extension. Ollama-Integration für lokale KI-Coding-Hilfe. | [continue.dev](https://continue.dev) |
| **Cline** | :seedling: OSS | VS Code Extension. Autonomous coding agent im Editor. | [github.com/cline/cline](https://github.com/cline/cline) |
| **Aider** | :seedling: OSS | Terminal-basierter Coding-Assistent. Git-aware, multi-file edits. | [aider.chat](https://aider.chat) |
| **Windsurf** | :moneybag: Freemium | KI-IDE (Codeium). Flow-basiertes Coding mit Cascade-Agent. | [windsurf.com](https://windsurf.com) |
| **Replit Agent** | :moneybag: Freemium | Full-Stack-App-Entwicklung im Browser mit KI-Agent. | [replit.com](https://replit.com) |
| **CodeRabbit** | :moneybag: Freemium | KI-Code-Review. Automatische PR-Reviews mit Kontext. TAAFT Top 30. | [coderabbit.ai](https://coderabbit.ai) |
| **Kilo** | :moneybag: Freemium | Code-Review-Agent für Teams. Findet Bugs vor dem Merge. | [kilo.dev](https://kilo.dev) |

---

## App-Builder & Vibe Coding

Nicht-Programmierer bauen funktionierende Apps per Beschreibung. Trend 2025/2026 laut a16z.

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Bolt.new** | :moneybag: Freemium | Text-to-Web-App. Full-Stack-Apps in Minuten generieren. $20M ARR (2025). | [bolt.new](https://bolt.new) |
| **Lovable** | :moneybag: Freemium | Web-App-Builder aus Prompts. $17M ARR (2025). | [lovable.dev](https://lovable.dev) |
| **v0.dev** | :moneybag: Freemium | Vercel. React-UI-Generierung per Prompt. | [v0.dev](https://v0.dev) |
| **Replit Agent** | :moneybag: Freemium | Full-Stack-App-Erstellung per Prompt im Browser. | [replit.com](https://replit.com) |
| **Vercel** | :moneybag: Freemium | Hosting + Deployment für Next.js/React-Apps. AI SDK integriert. | [vercel.com](https://vercel.com) |
| **Fabricate** | :moneybag: Freemium | Text-Prompt zu deployed Web-App (Frontend + Backend). TAAFT #4 2026. | [fabricate.dev](https://fabricate.dev) |
| **Floot** | :moneybag: Freemium | KI-Plattform für Entrepreneurs zum App-Bau ohne Code. | [floot.ai](https://floot.ai) |
| **Base44** | :moneybag: Freemium | Full-functional Apps ohne Code, minimales Setup. | [base44.com](https://base44.com) |
| **biela.dev** | :moneybag: Freemium | "Stop learning to code. Start building." Idee → App. | [biela.dev](https://biela.dev) |
| **Rocket** | :moneybag: Freemium | Vibe-Solutioning-Plattform: Prompt → Production-App. | [rocket.new](https://rocket.new) |
| **Verdent** | :moneybag: Freemium | "AI Technical Cofounder" — Idee → laufendes Business. | [verdent.ai](https://verdent.ai) |

---

## Workflow-Automatisierung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **n8n** | :seedling: OSS | Visueller Workflow-Builder, self-hostable. LLM-Nodes integriert. | [n8n.io](https://n8n.io) |
| **Make.com** | :moneybag: Freemium | Visuell, mächtig, viele Integrationen. Ex-Integromat. | [make.com](https://make.com) |
| **Zapier** | :moneybag: Freemium | Klassiker für App-Verbindungen. KI-Features ausgebaut. | [zapier.com](https://zapier.com) |

---

## RAG & Vektordatenbanken

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **LangChain** | :seedling: OSS | Framework für LLM-Anwendungen. RAG, Agents, Chains. Großes Ökosystem. | [langchain.com](https://langchain.com) |
| **LlamaIndex** | :seedling: OSS | Fokus auf Daten-Ingestion und RAG. Stärker strukturiert als LangChain. | [llamaindex.ai](https://llamaindex.ai) |
| **Pinecone** | :moneybag: Managed | Managed Vektordatenbank. Serverless-Tier, schnell, skalierbar. | [pinecone.io](https://pinecone.io) |
| **Weaviate** | :seedling: OSS + Cloud | Vektordatenbank mit Hybrid Search (Vektor + Keyword). | [weaviate.io](https://weaviate.io) |
| **Milvus** | :seedling: OSS | Hochperformante Vektordatenbank. Zilliz Cloud als Managed-Option. | [milvus.io](https://milvus.io) |
| **Chroma** | :seedling: OSS | Einfachste Vektordatenbank für Prototyping. In-Memory oder persistent. | [trychroma.com](https://trychroma.com) |
| **pgvector** | :seedling: OSS | PostgreSQL-Extension für Vektor-Suche. Kein neues System nötig. | [github.com/pgvector/pgvector](https://github.com/pgvector/pgvector) |
| **DuckDB** | :seedling: OSS | Analytische Datenbank, lokal, schnell. VSS-Extension für Vektoren. | [duckdb.org](https://duckdb.org) |

### Embedding-Modelle

| Modell | Beschreibung | Link |
|--------|--------------|------|
| **BGE (BAAI)** | :seedling: State-of-the-Art OSS-Embeddings, multilingual. | [huggingface.co/BAAI](https://huggingface.co/BAAI) |
| **Sentence-Transformers** | :seedling: Python-Library für Embedding-Modelle. | [sbert.net](https://sbert.net) |
| **OpenAI Embeddings** | :moneybag: text-embedding-3-large/small. API-basiert. | [platform.openai.com](https://platform.openai.com) |
| **Cohere Embed** | :moneybag: Multilingual Embeddings via API. | [cohere.com](https://cohere.com) |

---

## Eval & Testing

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Promptfoo** | :seedling: OSS | CLI-first Eval-Framework. Vergleicht Prompts, Modelle, Konfigurationen. Red-Team-Modul integriert. | [promptfoo.dev](https://promptfoo.dev) |
| **Braintrust** | :seedling: OSS-Kern + Cloud | Eval-Plattform mit Logging, Tracing, Datasets. OSS-Kern seit 2025. | [braintrust.dev](https://braintrust.dev) |
| **DeepEval** | :seedling: OSS | Python-natives Eval-Framework. pytest-Integration. | [github.com/confident-ai/deepeval](https://github.com/confident-ai/deepeval) |
| **LangSmith** | :moneybag: Freemium | LangChain-Plattform für Tracing, Eval, Monitoring. | [smith.langchain.com](https://smith.langchain.com) |
| **Langfuse** | :seedling: OSS + Cloud | LLM-Observability: Tracing, Eval, Cost-Tracking. Self-hostable. | [langfuse.com](https://langfuse.com) |
| **Phoenix (Arize)** | :seedling: OSS + Cloud | LLM-Tracing und Eval. Notebook-freundlich. | [phoenix.arize.com](https://phoenix.arize.com) |
| **Garak** | :seedling: OSS | Adversarial Testing / Red-Teaming für LLMs. | [github.com/NVIDIA/garak](https://github.com/NVIDIA/garak) |
| **PyRIT** | :seedling: OSS | Microsoft Red-Teaming Framework für generative KI. | [github.com/Azure/PyRIT](https://github.com/Azure/PyRIT) |
| **LM Evaluation Harness** | :seedling: OSS | EleutherAI. Standard-Benchmark-Suite für LLMs. | [github.com/EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) |
| **Great Expectations** | :seedling: OSS | Data Quality Testing. Pflicht-Tool für Datenpipelines. | [greatexpectations.io](https://greatexpectations.io) |

---

## Fine-Tuning & Training

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Hugging Face Transformers** | :seedling: OSS | Standard-Library für Transformer-Modelle. Training, Inference, Hub. | [huggingface.co](https://huggingface.co) |
| **TRL** | :seedling: OSS | Transformer Reinforcement Learning. SFT, DPO, ORPO, GRPO von HuggingFace. | [github.com/huggingface/trl](https://github.com/huggingface/trl) |
| **Unsloth** | :seedling: OSS | 2-5x schnelleres Fine-Tuning mit weniger RAM. QLoRA-optimiert. | [unsloth.ai](https://unsloth.ai) |
| **Axolotl** | :seedling: OSS | Config-driven Fine-Tuning. YAML → LoRA/QLoRA-Training. | [github.com/axolotl-ai-cloud/axolotl](https://github.com/axolotl-ai-cloud/axolotl) |
| **PyTorch** | :seedling: OSS | Deep-Learning-Framework. Standard für Forschung und Production. | [pytorch.org](https://pytorch.org) |
| **Weights & Biases** | :moneybag: Freemium | Experiment-Tracking, Hyperparameter-Sweeps, Model Registry. | [wandb.ai](https://wandb.ai) |
| **Together AI** | :moneybag: API | Managed Fine-Tuning und Inference. Einfachster Weg zu Custom-Modellen. | [together.ai](https://together.ai) |

### GPU-Zugang für Training

| Anbieter | Typ | Beschreibung | Link |
|----------|-----|--------------|------|
| **Lambda Labs** | :moneybag: | Cloud-GPUs für ML. A100/H100 on-demand. | [lambdalabs.com](https://lambdalabs.com) |
| **RunPod** | :moneybag: | GPU-Marktplatz. Günstige Spot-Instanzen. | [runpod.io](https://runpod.io) |
| **Vast.ai** | :moneybag: | Peer-to-Peer GPU-Marktplatz. Günstigste Option. | [vast.ai](https://vast.ai) |
| **Modal** | :moneybag: Freemium | Serverless GPU-Compute. Pay-per-second. Python-native. | [modal.com](https://modal.com) |
| **Google Colab** | :moneybag: Freemium | Kostenlose T4-GPU. Pro-Tier für A100. | [colab.research.google.com](https://colab.research.google.com) |

---

## Bildgenerierung & -bearbeitung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Midjourney** | :moneybag: | Höchste Bildqualität (kommerziell). Discord + Web-Interface. | [midjourney.com](https://midjourney.com) |
| **DALL-E 3** | :moneybag: | OpenAI. In ChatGPT integriert. Gut für Text-in-Bild. | [openai.com](https://openai.com) |
| **Stable Diffusion** | :seedling: OSS | Lokal lauffähig. Riesiges Community-Ökosystem. | [stability.ai](https://stability.ai) |
| **Flux** | :seedling: OSS | Black Forest Labs. Neuere OSS-Modelle (2024-2026). | [blackforestlabs.ai](https://blackforestlabs.ai) |
| **Adobe Firefly** | :moneybag: | Rechtssicher für kommerzielle Nutzung (eigene Trainingsdaten). | [firefly.adobe.com](https://firefly.adobe.com) |
| **Ideogram** | :moneybag: Freemium | Stark bei Text-Rendering in Bildern. | [ideogram.ai](https://ideogram.ai) |
| **Leonardo** | :moneybag: Freemium | AI Art Platform mit vielen Modell-Optionen. | [leonardo.ai](https://leonardo.ai) |
| **Recraft** | :moneybag: Freemium | Design-orientierte Bildgenerierung. Vektor + Raster. | [recraft.ai](https://recraft.ai) |
| **ComfyUI** | :seedling: OSS | Node-basierter Stable-Diffusion-Workflow-Editor. Volle Kontrolle. | [comfy.org](https://www.comfy.org) |
| **Photoroom** | :moneybag: Freemium | Hintergrund-Entfernung, Produkt-Fotografie. Top 50 (a16z). | [photoroom.com](https://photoroom.com) |
| **Civitai** | :seedling: Community | Plattform zum Teilen von SD-Modellen, LoRAs, Workflows. | [civitai.com](https://civitai.com) |

---

## Videogenerierung & -bearbeitung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Veo 3 / 3.1** | :moneybag: | Google DeepMind. Stärkstes Video-Verständnis + Generation 2026. | [deepmind.google](https://deepmind.google) |
| **Sora** | :moneybag: | OpenAI. Launched Dez 2024. Hohe visuelle Qualität. | [sora.com](https://sora.com) |
| **Runway Gen-4.5** | :moneybag: Freemium | Pionier der Video-AI. Starke Kamera-Kontrolle, Motion Brush. | [runwayml.com](https://runwayml.com) |
| **Kling 3.0** | :moneybag: Freemium | Kuaishou (China). Lip-Sync, Kamera-Kontrolle. Top-Qualität 2026. | [klingai.com](https://klingai.com) |
| **Pika 2.0** | :moneybag: Freemium | Schnelle Iterationen, Szene-Kontrolle. | [pika.art](https://pika.art) |
| **Hailuo AI** | :moneybag: Freemium | MiniMax (China). Excellente Prompt-Adherence. #12 Web (a16z). | [hailuoai.video](https://hailuoai.video) |
| **Luma Dream Machine** | :moneybag: Freemium | Realistische Physik-Simulation in Videos. | [lumalabs.ai](https://lumalabs.ai) |
| **InVideo** | :moneybag: Freemium | KI-Video-Editor mit Templates. | [invideo.io](https://invideo.io) |
| **Veed** | :moneybag: Freemium | Intelligentes Video-Clipping und Auto-Captions. | [veed.io](https://veed.io) |
| **Synthesia** | :moneybag: | Avatar-basierte Videos aus Text. Enterprise-Fokus. | [synthesia.io](https://synthesia.io) |
| **Captions** | :moneybag: | Video-Untertitelung mit KI. Top Revenue (a16z). | [captions.ai](https://captions.ai) |
| **PixVerse** | :moneybag: Freemium | Text/Bild-to-Video. Starke Charakter-Konsistenz. TAAFT Top 20. | [pixverse.ai](https://pixverse.ai) |
| **Wan Video** | :moneybag: Freemium | Alibabas Video-Generierungsmodell. High-Quality Output. | [wan.video](https://wan.video) |
| **freebeat AI** | :moneybag: Freemium | KI-Video-Editor mit automatischem Beat-Sync. | [freebeat.ai](https://freebeat.ai) |
| **Fliz** | :moneybag: Freemium | Produkt-Videos automatisch aus URLs generieren. E-Commerce-Fokus. | [fliz.ai](https://fliz.ai) |
| **ClipFinder** | :moneybag: Freemium | KI-basierte Video-Clip-Suche und -Extraktion. | [clipfinder.ai](https://clipfinder.ai) |

---

## Audio & Voice

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Whisper** | :seedling: OSS | OpenAI. Goldstandard STT. Multilingual, lokal lauffähig. | [github.com/openai/whisper](https://github.com/openai/whisper) |
| **whisper.cpp** | :seedling: OSS | C++-Port von Whisper. 4-8x schneller auf CPU. | [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) |
| **ElevenLabs** | :moneybag: Freemium | Beste TTS-Qualität 2026. Voice-Cloning, 30+ Sprachen. Top 50 (a16z). | [elevenlabs.io](https://elevenlabs.io) |
| **Piper TTS** | :seedling: OSS | Lokal lauffähige TTS. Gute Qualität, DSGVO-freundlich. Empfohlen als OSS-Standard. | [github.com/rhasspy/piper](https://github.com/rhasspy/piper) |
| **Bark** | :seedling: OSS | Suno. Generatives Audio-Modell. Expressiv, kann Lachen/Musik/Effekte. | [github.com/suno-ai/bark](https://github.com/suno-ai/bark) |
| **F5-TTS** | :seedling: OSS | Voice-Cloning lokal mit Few-Shot-Samples. | [github.com/SWivid/F5-TTS](https://github.com/SWivid/F5-TTS) |
| **OpenVoice** | :seedling: OSS | Voice-Cloning mit Referenz-Audio. MyShell. | [github.com/myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice) |
| **Deepgram** | :moneybag: API | Sehr niedrige Latenz STT. Starke Diarization. | [deepgram.com](https://deepgram.com) |
| **AssemblyAI** | :moneybag: API | STT mit Speaker-Labels, Sentiment, Topic-Detection. | [assemblyai.com](https://assemblyai.com) |
| **OpenAI Realtime API** | :moneybag: API | Bidirektionale Audio-Streams. Sub-Sekunden-Latenz. Voice Agents. | [platform.openai.com/docs/guides/realtime](https://platform.openai.com/docs/guides/realtime) |
### Musik-Generierung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Suno** | :moneybag: Freemium | Volle Songs aus Text-Prompt. Marktführer KI-Musik (a16z Top 50). | [suno.com](https://suno.com) |
| **Udio** | :moneybag: Freemium | High-Fidelity Musik-Generierung. Starke Genre-Kontrolle. | [udio.com](https://udio.com) |
| **AirMusic** | :moneybag: Freemium | Text-to-Music mit feiner Stil-Kontrolle. TAAFT Top 50. | [airmusic.ai](https://airmusic.ai) |
| **Lyria** (Google) | :moneybag: | Google DeepMind Musik-Modell. In YouTube integriert. | [deepmind.google/discover/lyria](https://deepmind.google/discover/lyria) |
| **UniMusic** | :moneybag: Freemium | KI-Musik-Erstellung mit Vocal-Synthese. | [unimusic.ai](https://unimusic.ai) |
| **Tunee** | :moneybag: Freemium | Song-Generierung mit anpassbarem Stil und Lyrics. | [tunee.io](https://tunee.io) |

### Transkription & Dictation

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Whisper** | :seedling: OSS | OpenAI STT. Multilingual, lokal lauffähig. | [github.com/openai/whisper](https://github.com/openai/whisper) |
| **Wispr Flow** | :moneybag: Freemium | Voice-to-Text überall am Desktop. Low-Latency Dictation. | [wispr.flow](https://wispr.flow) |
| **VoiceType AI** | :moneybag: Freemium | Diktat-App mit Kontext-Verständnis und Auto-Formatierung. | [voicetype.io](https://voicetype.io) |
| **Paraspeech** | :moneybag: Freemium | Echtzeit-Transkription mit Speaker-Erkennung. | [paraspeech.ai](https://paraspeech.ai) |
| **EchoWrite** | :moneybag: Freemium | Voice-to-polished-text mit Stil-Anpassung. | [echowrite.ai](https://echowrite.ai) |
| **Freeway** | :moneybag: Freemium | Hands-free Diktieren mit KI-Verbesserung. | [freeway.app](https://freeway.app) |

---

## Meetings & Collaboration

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Otter.ai** | :moneybag: Freemium | Meeting-Transkription, Zusammenfassung, Action Items. | [otter.ai](https://otter.ai) |
| **Granola** | :moneybag: Freemium | KI-Meeting-Notizen mit automatischer Strukturierung. | [granola.ai](https://granola.ai) |
| **Fireflies.ai** | :moneybag: Freemium | Meeting-Aufnahme, Transkript, durchsuchbares Archiv. | [fireflies.ai](https://fireflies.ai) |
| **Supernormal** | :moneybag: Freemium | Automatische Meeting-Notes mit Zusammenfassung. | [supernormal.com](https://supernormal.com) |
| **Read AI** | :moneybag: Freemium | Meeting-Analyse: Engagement, Sentiment, Zusammenfassung. | [read.ai](https://read.ai) |
| **Hedy AI** | :moneybag: Freemium | KI-Meeting-Begleiter mit Echtzeit-Coaching. | [hedy.ai](https://hedy.ai) |
| **Mumble AI** | :moneybag: Freemium | Meeting-Prep und Live-Talking-Points per KI. | [mumble.ai](https://mumble.ai) |
| **Convo** | :moneybag: Freemium | Kollaborative Meeting-Intelligence-Plattform. | [convo.com](https://convo.com) |

---

## ML & Data Science

### Klassisches ML

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **scikit-learn** | :seedling: OSS | Standard-Library für klassisches ML in Python. | [scikit-learn.org](https://scikit-learn.org) |
| **XGBoost** | :seedling: OSS | Gradient Boosting. Immer noch State-of-the-Art für tabellarische Daten. | [xgboost.ai](https://xgboost.ai) |
| **LightGBM** | :seedling: OSS | Microsoft. Schneller als XGBoost bei großen Datasets. | [lightgbm.readthedocs.io](https://lightgbm.readthedocs.io) |
| **CatBoost** | :seedling: OSS | Yandex. Bestes Handling kategorischer Features. | [catboost.ai](https://catboost.ai) |
| **AutoGluon** | :seedling: OSS | Amazon. AutoML: wenige Zeilen Code → bestes Modell. | [auto.gluon.ai](https://auto.gluon.ai) |
| **PyCaret** | :seedling: OSS | Low-Code ML Library. Schnelles Prototyping. | [pycaret.org](https://pycaret.org) |
| **TabPFN** | :seedling: OSS | Foundation Model für tabellarische Daten. Zero-Shot-Klassifikation. | [github.com/automl/TabPFN](https://github.com/automl/TabPFN) |
| **Optuna** | :seedling: OSS | Hyperparameter-Optimierung. Bayesian + Pruning. | [optuna.org](https://optuna.org) |

### Recommender Systems

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Microsoft Recommenders** | :seedling: OSS | Best-Practices-Library. Aktiv gepflegt. Empfohlene primäre Referenz. | [github.com/microsoft/recommenders](https://github.com/microsoft/recommenders) |
| **NVIDIA Merlin** | :seedling: OSS | Production-Grade RecSys-Framework. GPU-optimiert für Skalierung. | [github.com/NVIDIA-Merlin](https://github.com/NVIDIA-Merlin) |
| **Surprise** | :seedling: OSS | Klassiker für didaktisches RecSys (wenig aktiv seit 2023). | [surpriselib.com](https://surpriselib.com) |
| **LightFM** | :seedling: OSS | Hybrid Recommender (wenig aktiv seit 2022, stabil für Lernzwecke). | [github.com/lyst/lightfm](https://github.com/lyst/lightfm) |

### Daten & Analytics

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Pandas** | :seedling: OSS | Standard-Datenmanipulation in Python. | [pandas.pydata.org](https://pandas.pydata.org) |
| **Polars** | :seedling: OSS | Schnellere Pandas-Alternative in Rust. | [pola.rs](https://pola.rs) |
| **DuckDB** | :seedling: OSS | Analytische SQL-DB, in-process. Pandas-Killer für Analysen. | [duckdb.org](https://duckdb.org) |
| **Jupyter** | :seedling: OSS | Standard-Notebook für Data Science und ML. | [jupyter.org](https://jupyter.org) |
| **SHAP** | :seedling: OSS | Model Explainability. Shapley-Werte für Feature-Importance. | [shap.readthedocs.io](https://shap.readthedocs.io) |

---

## Cloud-Plattformen & APIs

| Plattform | Beschreibung | Link |
|-----------|--------------|------|
| **OpenAI Platform** | GPT-5, o3, DALL-E, Whisper, Embeddings API. Function Calling. | [platform.openai.com](https://platform.openai.com) |
| **Anthropic Console** | Claude API. Messages API, Tool Use, Batch API. | [console.anthropic.com](https://console.anthropic.com) |
| **Google AI Studio** | Gemini API. Kostenloser Tier für Prototyping. | [aistudio.google.com](https://aistudio.google.com) |
| **AWS Bedrock** | Managed LLM-APIs (Claude, Llama, Titan). Enterprise-Governance. | [aws.amazon.com/bedrock](https://aws.amazon.com/bedrock) |
| **Azure AI** | OpenAI auf Azure. Enterprise-Compliance. Document Intelligence. | [azure.microsoft.com/ai](https://azure.microsoft.com/en-us/solutions/ai) |
| **Google Cloud Vertex AI** | Gemini + Custom Models + MLOps auf GCP. | [cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai) |

### LLM-Routing & Abstraction

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **LiteLLM** | :seedling: OSS | Unified API für 100+ LLM-Provider. Ein Interface, alle Modelle. | [litellm.ai](https://litellm.ai) |
| **OpenRouter** | :moneybag: API | Multi-Provider-Routing. Ein API-Key für alles. | [openrouter.ai](https://openrouter.ai) |
| **Helicone** | :moneybag: Freemium | LLM-Proxy mit Caching, Cost-Tracking, Rate-Limiting. | [helicone.ai](https://helicone.ai) |
| **Portkey** | :moneybag: Freemium | AI Gateway mit Fallbacks, Load-Balancing, Guardrails. | [portkey.ai](https://portkey.ai) |

---

## Monitoring & Observability

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Langfuse** | :seedling: OSS + Cloud | LLM-Tracing, Eval, Cost. Self-hostable. | [langfuse.com](https://langfuse.com) |
| **LangSmith** | :moneybag: Freemium | LangChain-Ökosystem. Tracing, Datasets, Eval-Runs. | [smith.langchain.com](https://smith.langchain.com) |
| **Helicone** | :moneybag: Freemium | Request-Level Cost-Tracking und Caching für LLMs. | [helicone.ai](https://helicone.ai) |
| **Phoenix (Arize)** | :seedling: OSS | LLM-Traces, Evals, Embeddings-Analyse in Notebooks. | [phoenix.arize.com](https://phoenix.arize.com) |
| **Weights & Biases** | :moneybag: Freemium | Experiment-Tracking, Model Registry, Sweeps. | [wandb.ai](https://wandb.ai) |
| **Sentry** | :moneybag: Freemium | Error-Tracking für Production-Apps. LLM-spezifische Traces. | [sentry.io](https://sentry.io) |

---

## Deployment & DevOps

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Docker** | :seedling: OSS | Container-Standard. Pflicht-Wissen für Production. | [docker.com](https://docker.com) |
| **GitHub Actions** | :moneybag: Freemium | CI/CD direkt in GitHub. Eval-as-CI, Red-Team-as-CI. | [github.com/features/actions](https://github.com/features/actions) |
| **FastAPI** | :seedling: OSS | Python Web-Framework. Async, Type-Safe, Auto-Docs. Standard für ML-APIs. | [fastapi.tiangolo.com](https://fastapi.tiangolo.com) |
| **Gradio** | :seedling: OSS | ML-Demo-Interfaces in Minuten. Hugging Face Spaces. | [gradio.app](https://gradio.app) |
| **Streamlit** | :seedling: OSS | Data-Apps in Python. Schnellstes Prototyping für ML-UIs. | [streamlit.io](https://streamlit.io) |

---

## Produktivität & Wissensmanagement

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **NotebookLM** | :moneybag: Free | Google. Dokumenten-basiertes RAG mit Audio-Output (Podcasts aus PDFs). | [notebooklm.google](https://notebooklm.google) |
| **Gamma** | :moneybag: Freemium | KI-Präsentationen. Slides aus Text generieren. Top 50 (a16z). | [gamma.app](https://gamma.app) |
| **Granola** | :moneybag: Freemium | KI-Meeting-Notizen. Automatische Zusammenfassung. | [granola.ai](https://granola.ai) |
| **Obsidian** | :moneybag: Free (Personal) | Lokales Knowledge Management mit Markdown. Plugin-Ökosystem. | [obsidian.md](https://obsidian.md) |
| **Notion** | :moneybag: Freemium | All-in-One Workspace mit KI-Integration. | [notion.so](https://notion.so) |
| **Quillbot** | :moneybag: Freemium | Paraphrasierung und Schreib-Verbesserung. Top 50 (a16z). | [quillbot.com](https://quillbot.com) |
| **Cal.ai** | :moneybag: | KI-Kalorie-Tracking per Foto. Top Revenue (a16z). | [cal.ai](https://cal.ai) |
| **Monica** | :moneybag: Freemium | Browser-KI-Assistent für diverse Aufgaben. Top 50 (a16z). | [monica.im](https://monica.im) |

---

## Bildung & Lernplattformen

| Plattform | Typ | Beschreibung | Link |
|-----------|-----|--------------|------|
| **Coursera** | :moneybag: Audit free | Universitätskurse. Audit-Modus = kostenlos ohne Zertifikat. | [coursera.org](https://coursera.org) |
| **DeepLearning.AI** | :moneybag: Freemium | Andrew Ng. Short Courses zu LLMs, RAG, Agents. | [deeplearning.ai](https://deeplearning.ai) |
| **fast.ai** | :seedling: Free | Practical Deep Learning. Top-Down-Ansatz. | [fast.ai](https://fast.ai) |
| **Kaggle Learn** | :seedling: Free | Micro-Kurse zu ML, Python, Data Science. | [kaggle.com/learn](https://kaggle.com/learn) |
| **Hugging Face** | :seedling: OSS + Hub | Model Hub, Datasets, Spaces. Zentrum des OSS-ML-Ökosystems. | [huggingface.co](https://huggingface.co) |
| **Papers with Code** | :seedling: Free | Forschungs-Papers mit Code-Implementierungen. | [paperswithcode.com](https://paperswithcode.com) |
| **arXiv** | :seedling: Free | Preprint-Server für ML/AI-Papers. | [arxiv.org](https://arxiv.org) |
| **Stanford CS336** | :seedling: Free | Language Modeling from Scratch. Vertiefung für Foundations-Track. | [cs336.stanford.edu](https://cs336.stanford.edu) |
| **Brainly** | :moneybag: Freemium | Hausaufgaben-Hilfe mit KI. Top 50 Web + Mobile (a16z). | [brainly.com](https://brainly.com) |
| **Speak** | :moneybag: | KI-Sprachlernen mit Voice. Top Revenue (a16z). | [speak.com](https://speak.com) |

---

## Leaderboards & Live-Quellen

Aktuelle Rankings und Tool-Übersichten, die regelmäßig geprüft werden sollten:

| Quelle | Was es zeigt | Link |
|--------|-------------|------|
| **LMSYS Chatbot Arena** | ELO-Ranking der LLMs basierend auf Blind-Votes | [lmarena.ai](https://lmarena.ai) |
| **Open LLM Leaderboard** | Benchmark-Scores für OSS-Modelle | [huggingface.co/spaces/open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard) |
| **MTEB Leaderboard** | Embedding-Modell-Vergleich | [huggingface.co/spaces/mteb/leaderboard](https://huggingface.co/spaces/mteb/leaderboard) |
| **There's An AI For That** | 24.000+ KI-Tools nach Kategorie | [theresanaiforthat.com](https://theresanaiforthat.com) |
| **a16z Top 100 Gen AI** | Quartals-Ranking der meistgenutzten Consumer-AI-Apps | [a16z.com/100-gen-ai-apps-4](https://a16z.com/100-gen-ai-apps-4/) |
| **Future Tools** | Kuratierte Tool-Sammlung mit Bewertungen | [futuretools.io](https://futuretools.io) |

---

## Compliance & Governance

| Ressource | Beschreibung | Link |
|-----------|--------------|------|
| **EU AI Act** | EU-KI-Verordnung. Risikoklassen, Compliance-Pflichten. | [artificialintelligenceact.eu](https://artificialintelligenceact.eu) |
| **NIST AI RMF** | US-Framework für KI-Risikomanagement. | [nist.gov/artificial-intelligence](https://www.nist.gov/artificial-intelligence) |
| **ISO 42001** | Internationaler Standard für AI Management Systems. | [iso.org](https://www.iso.org) |
| **Anthropic RSP** | Responsible Scaling Policy. Pre-Deployment-Evaluations, Safety-Thresholds. | [anthropic.com/news/anthropics-responsible-scaling-policy](https://www.anthropic.com/news/anthropics-responsible-scaling-policy) |
| **OWASP Top 10 LLM** | Die 10 kritischsten LLM-Sicherheitsrisiken. Pflicht-Lektüre. | [owasp.org/www-project-top-10-for-large-language-model-applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) |

---

## Entertainment & Companion AI

Kategorie mit starkem Wachstum laut a16z (8 der Top 50 Web-Apps):

| Tool | Beschreibung | Link |
|------|--------------|------|
| **Character.AI** | Rollenspiel-Chat mit KI-Charakteren. #1 in Kategorie. | [character.ai](https://character.ai) |
| **Talkie** | Charakter-Chat. Top 50 Web + Mobile (a16z). | [talkie-ai.com](https://talkie-ai.com) |

---

## Agenten & Task-Automatisierung

KI-Agenten, die selbstständig komplexe Aufgaben ausführen — über einfache Workflows hinaus.

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Lindy** | :moneybag: Freemium | No-Code KI-Agenten-Builder. Workflows mit natürlicher Sprache definieren. | [lindy.ai](https://lindy.ai) |
| **Raccoon AI** | :moneybag: Freemium | Browser-Automatisierung per KI-Agent. Web-Tasks delegieren. | [raccoon.ai](https://raccoon.ai) |
| **Viktor** | :moneybag: Freemium | Persönlicher KI-Agent für wiederkehrende digitale Aufgaben. | [viktor.ai](https://viktor.ai) |
| **Komos** | :moneybag: Freemium | KI-Agenten-Plattform für Unternehmensprozesse. | [komos.ai](https://komos.ai) |
| **OpenClaw** | :seedling: OSS | Open-Source-Framework für KI-Agenten-Orchestrierung. | [openclaw.ai](https://openclaw.ai) |
| **Skygen** | :moneybag: Freemium | Multi-Agent-System für komplexe Business-Workflows. | [skygen.ai](https://skygen.ai) |
| **InitRunner** | :moneybag: Freemium | DevOps-Agent: Infrastructure-Tasks per Prompt automatisieren. | [initrunner.com](https://initrunner.com) |
| **Watermelon** | :moneybag: Freemium | KI-Chatbot-Agent für Kundensupport. GPT-basiert. | [watermelon.ai](https://watermelon.ai) |

---

## Persönliche Assistenten & Wissens-Tools

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Recall** | :moneybag: Freemium | KI-gestütztes Gedächtnis: Webseiten, Notizen, Inhalte automatisch verknüpft. | [recall.ai](https://recall.ai) |
| **Notis** | :moneybag: Freemium | KI-Notiz-Assistent — Voice-to-structured-Notes mit Kontext. | [notis.ai](https://notis.ai) |
| **TheLibrarian.io** | :moneybag: Freemium | Persönliche Wissens-KI: Bücher, Artikel, Highlights durchsuchbar. | [thelibrarian.io](https://thelibrarian.io) |
| **Kin** | :moneybag: Freemium | Privater KI-Begleiter mit Langzeitgedächtnis. Lokale Daten. | [kin.ai](https://kin.ai) |
| **Collate** | :moneybag: Freemium | KI-Knowledge-Base für Teams: Docs, Wikis, Q&A automatisiert. | [collate.com](https://collate.com) |
| **Littlebird** | :moneybag: Freemium | KI-Assistent der proaktiv relevante Infos liefert. | [littlebird.ai](https://littlebird.ai) |
| **ZeroTwo** | :moneybag: Freemium | Persönlicher Produktivitäts-Agent mit Kalender- und Task-Integration. | [zerotwo.ai](https://zerotwo.ai) |

---

## Lernen & Bildung (KI-gestützt)

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Thea** | :moneybag: Freemium | KI-Tutor: adaptive Erklärungen, Quizzes, Zusammenfassungen. TAAFT #3. | [thea.so](https://thea.so) |
| **DeepTutor** | :moneybag: Freemium | KI-Tutor der mit dir PDFs und Papers durcharbeitet. | [deeptutor.ai](https://deeptutor.ai) |
| **SmartLearn** | :moneybag: Freemium | Adaptive Lernpfade mit KI-generiertem Content. | [smartlearn.ai](https://smartlearn.ai) |
| **Vertech Academy** | :moneybag: Freemium | Tech-Skill-Training mit KI-Coach und Hands-on-Projekten. | [vertechacademy.com](https://vertechacademy.com) |
| **Bookbud** | :moneybag: Freemium | KI-Buchzusammenfassungen mit personalisierten Insights. | [bookbud.ai](https://bookbud.ai) |

---

## Sales & Lead-Generierung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Jason AI** | :moneybag: Paid | KI-SDR: Automatisierte Outreach-Sequenzen mit Personalisierung. | [jason.ai](https://jason.ai) |
| **Reply.io** | :moneybag: Freemium | Multi-Channel-Outreach mit KI-Schreibassistent. | [reply.io](https://reply.io) |
| **Meetz** | :moneybag: Paid | KI-gestützte Meeting-Planung und Outreach-Automatisierung. | [meetz.ai](https://meetz.ai) |
| **Cora Intelligence** | :moneybag: Paid | KI-Recherche-Agent für B2B-Lead-Intelligence. | [cora.ai](https://cora.ai) |
| **Intuo** | :moneybag: Freemium | KI-Sales-Assistent mit CRM-Integration. | [intuo.io](https://intuo.io) |
| **Konvertly** | :moneybag: Freemium | Lead-Scoring und Conversion-Optimierung mit KI. | [konvertly.com](https://konvertly.com) |
| **Affint** | :moneybag: Freemium | KI-gestütztes Relationship-Intelligence für Sales-Teams. | [affint.ai](https://affint.ai) |

---

## SEO & Content-Marketing

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **SEOJuice** | :moneybag: Freemium | Automatische interne Verlinkung und SEO-Optimierung per KI. | [seojuice.io](https://seojuice.io) |
| **Averi AI** | :moneybag: Freemium | KI-Marketing-Team: Content-Strategie, SEO, Social. | [averi.ai](https://averi.ai) |
| **BlogSEO** | :moneybag: Freemium | SEO-optimierte Blogartikel per KI generieren. | [blogseo.ai](https://blogseo.ai) |
| **Wordrific** | :moneybag: Freemium | KI-Content-Generator mit SEO-Score und Keyword-Planung. | [wordrific.com](https://wordrific.com) |
| **Nodu AI** | :moneybag: Freemium | Content-Marketing-Automatisierung: Idee → SEO-Artikel. | [nodu.ai](https://nodu.ai) |
| **groas** | :moneybag: Paid | KI-optimierte Google Ads Kampagnen-Erstellung und -Management. | [groas.ai](https://groas.ai) |

---

## Schreiben & Textgenerierung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Jasper** | :moneybag: Paid | Enterprise-KI-Schreibplattform. Marketing-Fokus. | [jasper.ai](https://jasper.ai) |
| **Copy.ai** | :moneybag: Freemium | KI-Copywriting für Marketing, Ads, Social. | [copy.ai](https://copy.ai) |
| **Automateed** | :moneybag: Freemium | KI-Buch-Erstellung: Outline → Draft → Formatierung. | [automateed.com](https://automateed.com) |
| **ShakespeareAI** | :moneybag: Freemium | KI-Content mit Marken-Stimme und Ton-Konsistenz. | [shakespeare.ai](https://shakespeare.ai) |
| **Librida** | :moneybag: Freemium | KI-gestütztes Buch-Schreiben mit Kapitelplanung. | [librida.com](https://librida.com) |
| **WriteABookAI** | :moneybag: Freemium | Non-Fiction-Bücher per KI erstellen (Outline → Full Book). | [writeabookai.com](https://writeabookai.com) |

---

## Job-Suche & Karriere

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **Jobbyo** | :moneybag: Freemium | KI-Job-Matching: Profil-Analyse + automatische Bewerbungen. | [jobbyo.ai](https://jobbyo.ai) |
| **JobGPT** | :moneybag: Freemium | KI-Bewerbungsassistent: Anschreiben, CV-Optimierung, Interview-Prep. | [jobgpt.ai](https://jobgpt.ai) |
| **Seekario** | :moneybag: Freemium | KI-Karriere-Coach: Job-Suche, Networking, Skill-Gap-Analyse. | [seekario.ai](https://seekario.ai) |

---

## Finanzen & Trading

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **MarketAlerts.ai** | :moneybag: Freemium | KI-basierte Markt-Signale und Benachrichtigungen. | [marketalerts.ai](https://marketalerts.ai) |
| **GoAI** | :moneybag: Freemium | KI-Finanzanalyse für Retail-Investoren. | [goai.finance](https://goai.finance) |
| **MiDash** | :moneybag: Freemium | Dashboard für Portfolio-Analyse mit KI-Insights. | [midash.ai](https://midash.ai) |

---

## Übersetzung & Lokalisierung

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **DeepL** | :moneybag: Freemium | Beste maschinelle Übersetzung (besonders DE↔EN). Glossar-Funktion. | [deepl.com](https://deepl.com) |
| **Google Translate** | :green_circle: Free | 130+ Sprachen, Kamera-Übersetzung, Konversationsmodus. | [translate.google.com](https://translate.google.com) |
| **VersQ** | :moneybag: Paid | KI-Übersetzung mit fachspezifischem Kontext (Legal, Medical, Tech). | [versq.ai](https://versq.ai) |
| **Palabra.ai** | :moneybag: Freemium | Lokalisierungs-Plattform mit KI-Translation-Memory. | [palabra.ai](https://palabra.ai) |

---

## LLM-Vergleich & Routing

| Tool | Typ | Beschreibung | Link |
|------|-----|--------------|------|
| **ChatPlayground AI** | :moneybag: Freemium | Mehrere LLMs gleichzeitig abfragen und Antworten vergleichen. | [chatplayground.ai](https://chatplayground.ai) |
| **ChatComparison AI** | :moneybag: Freemium | Side-by-Side-Vergleich von LLM-Outputs. | [chatcomparison.ai](https://chatcomparison.ai) |
| **OpenRouter** | :moneybag: API | Ein API-Key für 100+ Modelle. Preis-Vergleich integriert. | [openrouter.ai](https://openrouter.ai) |
| **LiteLLM** | :seedling: OSS | Unified Python-SDK für alle LLM-Provider. | [litellm.ai](https://litellm.ai) |

---

*Letzte Aktualisierung: Mai 2026 · Basierend auf: Syllabus-Inhalte v2.2.1, a16z Top 100 Gen AI (Q1 2025), [TAAFT Leaderboard](https://theresanaiforthat.com/leaderboard/) (Mai 2026), eigene Recherche.*

*Hinweis: Die KI-Tool-Landschaft verändert sich monatlich. Prüfe [There's An AI For That](https://theresanaiforthat.com) und die [a16z-Liste](https://a16z.com/100-gen-ai-apps-4/) für aktuelle Ergänzungen.*

!!! tip "Tool fehlt?"
    Kennst du ein Tool, das hier fehlen sollte? Erstelle ein [GitHub Issue](https://github.com/B3nW00d6r00v3/prometheus-path/issues) mit Name, Link und Kategorie.
