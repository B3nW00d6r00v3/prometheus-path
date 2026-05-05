# Glossar

Alle Fachbegriffe, die im KI-Meisterlehrplan vorkommen — alphabetisch sortiert, kompakt erklärt.

---

## A

**A/B-Testing** — Statistisches Experiment, bei dem zwei Varianten (A vs. B) mit echten Nutzern verglichen werden. Grundlage für datengetriebene Entscheidungen in ML und Product.

**Ablation Study** — Systematisches Entfernen von Modell-Komponenten, um deren Beitrag zur Gesamtleistung zu messen.

**Activation Function** — Nichtlineare Funktion (ReLU, GELU, Sigmoid) nach einer Neuron-Berechnung, die dem Netz Ausdruckskraft verleiht.

**Adapter (LoRA)** — Kleine trainierbare Matrizen, die in ein gefrorenes Modell eingesetzt werden (Parameter-Efficient Fine-Tuning).

**Adoption-Curve** — S-Kurve, die Übernahme einer Innovation in einer Organisation modelliert: Innovators → Early Adopters → Early Majority → Late Majority → Laggards.

**Agent** — Autonomes LLM-System, das Ziele verfolgt, Tools aufruft und iterativ Entscheidungen trifft.

**Agentic OS** — Software-Schicht für Multi-Agent-Koordination. Zwei Bedeutungen: (a) Framework-Pattern (Context + Memory + Skills + Self-Learning Layers), (b) System-Software-Layer (Process-Scheduling, Isolation für Agenten).

**Agentenschwarm** — Multi-Agent-Architektur mit dezentraler oder hybrider Koordination. Patterns: Conductor / Hierarchical / Peer-Swarm / Hybrid.

**AI Act (EU)** — EU-Regulierung für KI-Systeme, gestuft nach Risiko-Klassen (minimal, limited, high, unacceptable). Seit 2024 in Kraft, schrittweise anwendbar bis 2027.

**Alignment** — Training eines Modells, damit es menschliche Werte und Absichten zuverlässig umsetzt (Safety + Helpfulness).

**Attention (Self-Attention)** — Mechanismus in Transformers, bei dem jeder Token gewichtete Verbindungen zu allen anderen Tokens bildet.

**A-Tiefe-Module** — Module mit besonders volatilen Inhalten, die einen 3-Monats-Audit-Zyklus benötigen.

**Audit-Modus (Coursera)** — Kostenloser Lese-Zugriff auf Coursera-Kurse ohne Zertifikat und ohne Quiz-Zugriff.

**AutoML** — Automatisierte Suche nach optimaler ML-Pipeline (Feature-Engineering, Modell-Wahl, Hyperparameter).

---

## B

**Backpropagation (Backprop)** — Algorithmus zum Trainieren neuronaler Netze via Kettenregel. Berechnet Gradienten des Loss für jedes Gewicht.

**Batch Size** — Anzahl der Trainingsbeispiele, die gleichzeitig durch das Netz laufen, bevor Gewichte aktualisiert werden.

**Benchmark** — Standardisierter Testdatensatz zum Vergleich von Modellen (z.B. MMLU, HumanEval, GPQA).

**BLEU** — Metrik für maschinelle Übersetzung. Vergleicht n-Gramm-Übereinstimmung zwischen Modell-Output und Referenz.

**Boosting** — Ensemble-Methode, bei der schwache Modelle sequenziell kombiniert werden (XGBoost, LightGBM, CatBoost).

**Build-vs-Buy** — Strategische Entscheidung: eigene KI-Lösung entwickeln oder kommerzielle Anbieter nutzen.

---

## C

**Capstone** — Integrations-Projekt am Ende des Curriculums, das alle gelernten Fähigkeiten in einem realen System vereint.

**Catastrophic Forgetting** — Verlust allgemeiner Fähigkeiten durch zu starkes Fine-Tuning auf speziellen Daten.

**Chain-of-Thought (CoT)** — Prompting-Technik, bei der das Modell Zwischenschritte explizit ausformuliert.

**Chunking** — Aufteilen langer Dokumente in kürzere Segmente für Embedding und Retrieval (RAG).

**CI/CD** — Continuous Integration / Continuous Deployment. Automatisierte Build-, Test- und Deploy-Pipelines.

**Classification** — ML-Aufgabe: Zuordnung von Inputs zu diskreten Kategorien.

**Cold-Start Problem** — Situation, in der ein System (z.B. Recommender) keine Daten über neue Nutzer/Items hat.

**Compaction** — Strategie zur Context-Window-Kompression: ältere Konversationsteile zusammenfassen statt löschen.

**Confusion Matrix** — Tabelle mit True/False Positives/Negatives — Basis für Precision, Recall, F1.

**Context Engineering** — Disziplin der Token-Budget-Allokation, Memory-Architektur und Compaction-Strategien für LLM-Agents.

**Context Window** — Maximale Anzahl Tokens, die ein LLM gleichzeitig verarbeiten kann (z.B. 200K bei Claude).

**Cross-Entropy Loss** — Standard-Loss-Funktion für Klassifikation und Sprachmodell-Training.

**Cross-Validation** — Technik zur robusten Modell-Evaluation durch wiederholtes Trainieren/Testen auf verschiedenen Daten-Splits.

---

## D

**Data Augmentation** — Künstliche Vergrößerung des Trainingsdatensatzes durch Transformationen (Rotation, Rauschen, Paraphrasierung).

**Data Drift** — Statistische Verschiebung der Input-Daten nach Deployment, die Modell-Qualität degradiert.

**DDP (Distributed Data Parallel)** — Multi-GPU-Training: identisches Modell auf jeder GPU, Gradienten-Mittelung nach jedem Step.

**Diarization** — Sprecher-Trennung in Audio-Aufnahmen (wer spricht wann?).

**Diffusion Models** — Generative Modelle, die durch schrittweise Rausch-Entfernung Bilder/Audio/Video erzeugen.

**Distributed Training** — Multi-GPU-Training-Strategien: DDP, FSDP, ZeRO 1/2/3, Tensor-Parallelism, Pipeline-Parallelism.

**DPO (Direct Preference Optimization)** — Preference-Tuning-Methode, die RLHF ohne separaten Reward-Model vereinfacht.

**DSGVO (GDPR)** — Datenschutz-Grundverordnung der EU. Relevant für jeden KI-Einsatz mit personenbezogenen Daten.

---

## E

**Embedding** — Dichte Vektor-Repräsentation von Text/Bildern/Audio in einem hochdimensionalen Raum. Semantisch ähnliche Inhalte liegen nah beieinander.

**Ensemble** — Kombination mehrerer Modelle zur Verbesserung der Vorhersage-Qualität.

**Eval-as-CI** — Eval-Run bei jedem Pull Request als automatisierte Qualitätssicherung für LLM-Systeme.

**Express-Pfad** — Reduzierte Curriculum-Variante (~150-220h statt Vollvariante) mit ehrlich reduzierter Outcome-Rubrik.

---

## F

**F1-Score** — Harmonisches Mittel aus Precision und Recall. Nützlich bei unbalancierten Klassen.

**Faithfulness** — RAG-Eval-Metrik: Stimmt die generierte Antwort mit dem abgerufenen Kontext überein?

**Feature Engineering** — Manuelle oder automatisierte Erstellung informativer Eingabe-Features für ML-Modelle.

**Few-Shot Learning** — Modell lernt aus wenigen Beispielen (typisch 2-5 im Prompt).

**Fine-Tuning** — Weitertraining eines vortrainierten Modells auf aufgabenspezifischen Daten.

**Foundation Model** — Großes vortrainiertes Modell als Basis für Downstream-Aufgaben (GPT, Claude, Llama, Gemini).

**FSDP (Fully Sharded Data Parallel)** — Distributed-Training-Strategie: Modell-Parameter über GPUs verteilt, bei Bedarf zusammengesetzt.

**Function Calling** — LLM-Fähigkeit, strukturierte Tool-Aufrufe zu generieren statt Freitext.

---

## G

**Goldstandard (Capstone)** — Höchste Lern-Tiefe im Capstone: inklusive 4-6 Wochen Operate-Phase mit echten Nutzern.

**Gradient Descent** — Optimierungsalgorithmus: Gewichte in Richtung des steilsten Abstiegs der Loss-Funktion anpassen.

**GraphRAG** — RAG-Variante mit Knowledge-Graph-Aufbau aus Korpus, dann LLM-Synthese über Graph-Struktur.

**GRPO (Group Relative Policy Optimization)** — Preference-Tuning-Methode für Reasoning-Modelle (DeepSeek R1).

**Guardrails** — Sicherheits-Layer um LLM-Systeme: Input-/Output-Filterung, Rate-Limiting, Content-Moderation.

---

## H

**Hallucination** — LLM generiert faktenwidrige oder erfundene Inhalte mit hoher Confidence.

**Hyperparameter** — Parameter, die vor dem Training festgelegt werden (Learning Rate, Batch Size, Epochs).

**HyDE (Hypothetical Document Embeddings)** — RAG-Pattern: LLM generiert hypothetische Antwort, deren Embedding zum Retrieval genutzt wird.

---

## I

**Inference** — Modell-Vorhersage auf neuen Daten (im Gegensatz zu Training).

**In-Context Learning (ICL)** — LLM lernt aus Beispielen im Prompt, ohne Gewichts-Updates.

---

## J

**Jailbreaking** — Umgehung von Sicherheits-Einschränkungen eines LLMs durch manipulative Prompts.

---

## K

**Knowledge Distillation** — Transfer von Wissen eines großen Modells (Teacher) in ein kleineres (Student).

**KPI (Key Performance Indicator)** — Messbare Kennzahl zur Bewertung von Geschäfts-/Modell-Erfolg.

---

## L

**Late-Interaction Retrieval** — Token-Level-Matching statt Single-Vector-Embedding (z.B. ColBERTv2). Höhere Retrieval-Qualität bei höherer Cost.

**Latent Space** — Abstrakter Zwischenraum, in dem ein Modell Daten-Repräsentationen lernt.

**LLM (Large Language Model)** — Großes Sprachmodell, trainiert auf Textdaten, fähig zu Textgenerierung, Reasoning und Tool-Use.

**LLM-as-Judge** — Eval-Methode, bei der ein LLM Outputs anderer Modelle bewertet.

**LLMOps** — MLOps-Variante spezialisiert auf LLM-Lifecycle: Prompt-Versioning, Eval, Monitoring, Cost-Tracking.

**LoRA (Low-Rank Adaptation)** — Parameter-effiziente Fine-Tuning-Methode: nur kleine Adapter-Matrizen werden trainiert.

**Loss Function** — Mathematische Funktion, die den "Fehler" eines Modells misst (minimiert während Training).

---

## M

**MCP (Model Context Protocol)** — Anthropic-Standard für Tool-Integration in LLMs. Offenes Protokoll für Server/Client-Architektur.

**MMLU** — Massive Multitask Language Understanding. Standard-Benchmark für allgemeine LLM-Fähigkeiten.

**MLOps** — Machine Learning Operations: Prozesse und Tools für ML-Lifecycle in Production.

**Multimodal** — Modell verarbeitet mehrere Modalitäten (Text + Bild + Audio + Video).

---

## N

**NDCG (Normalized Discounted Cumulative Gain)** — Ranking-Metrik für Recommender und Retrieval-Systeme.

**Next-Token Prediction** — Grundlegendes Trainingsziel von Sprachmodellen: nächstes Token vorhersagen.

---

## O

**Operate-Phase** — 4-6 Wochen Real-User-Betrieb als höchste Capstone-Stufe (Goldstandard).

**ORPO (Odds Ratio Preference Optimization)** — Preference-Tuning ohne separaten SFT-Schritt.

**Overfitting** — Modell memoriert Trainingsdaten statt generalisierbarer Muster.

---

## P

**PEFT (Parameter-Efficient Fine-Tuning)** — Sammelbegriff für LoRA, QLoRA, DoRA und verwandte Methoden.

**Perplexity** — Metrik für Sprachmodell-Qualität: wie "überrascht" ist das Modell vom nächsten Token?

**Pipeline (ML)** — Ende-zu-Ende-Verarbeitungskette: Data → Preprocessing → Model → Postprocessing → Output.

**Precision** — Anteil korrekter positiver Vorhersagen an allen positiven Vorhersagen.

**Prompt Engineering** — Systematische Gestaltung von LLM-Eingaben für optimale Outputs.

**Prompt Injection** — Sicherheitsangriff: bösartiger Input überschreibt System-Instruktionen des LLMs.

---

## Q

**QLoRA** — Quantisiertes LoRA: Fine-Tuning auf 4-Bit-quantisiertem Modell, drastisch weniger GPU-RAM.

**Quantisierung** — Reduktion der Modell-Gewicht-Präzision (z.B. 16-Bit → 4-Bit) für schnellere Inferenz und weniger Speicher.

---

## R

**RAG (Retrieval-Augmented Generation)** — LLM mit externem Wissens-Retrieval: Frage → Suche relevanter Dokumente → LLM generiert Antwort basierend auf Dokumenten.

**Reasoning-Modelle** — Architektur-Familie mit Test-Time-Compute als Skalierungsachse (o3, Claude Thinking, R1). Denken intern länger nach für bessere Antworten.

**Recall** — Anteil gefundener relevanter Ergebnisse an allen relevanten Ergebnissen.

**Red-Teaming** — Systematisches Testen von KI-Systemen auf Sicherheitslücken durch Angriffs-Simulation.

**Red-Team-as-CI** — Automatisierte Red-Team-Tests in CI/CD-Pipeline (analog zu Eval-as-CI).

**Regularization** — Technik gegen Overfitting (Dropout, Weight Decay, L1/L2).

**Reinforcement Learning** — Lern-Paradigma: Agent lernt durch Trial-and-Error mit Belohnungs-Signal.

**Reranking** — Zweiter Retrieval-Schritt: erster Durchlauf liefert Kandidaten, Reranker sortiert nach Relevanz.

**RLHF (Reinforcement Learning from Human Feedback)** — Klassische Preference-Tuning-Variante mit separatem Reward-Model.

**ROI (Return on Investment)** — Kennzahl: Gewinn relativ zur Investition. Entscheidend für Business Cases.

---

## S

**Self-Assessment** — Strukturierte Selbst-Bewertung am Ende einer Stufe (S5/S7/S9).

**Semantic Search** — Suche basierend auf Bedeutung (Embeddings) statt Keyword-Matching.

**Skill (SKILL.md)** — Persistierter, versionierter Domain-Kontext für Agents (Markdown + Templates + Code).

**Softmax** — Funktion, die einen Vektor in Wahrscheinlichkeitsverteilung umwandelt (Summe = 1).

**Structured Outputs** — Constrained Generation mit Pydantic-Schemas, JSON-Mode oder Function-Calling-Strict-Modes.

**STT (Speech-to-Text)** — Automatische Transkription gesprochener Sprache in Text.

---

## T

**TCO (Total Cost of Ownership)** — Alle Kosten über den gesamten Lebenszyklus einer Lösung.

**Temperature** — Sampling-Parameter: höher = kreativer/zufälliger, niedriger = deterministischer.

**Test-Time Compute** — Skalierungsachse: mehr Inferenz-Rechenzeit für bessere Antworten (Reasoning-Modelle).

**Token** — Kleinste Verarbeitungseinheit eines LLMs (~4 Zeichen bei englischem Text, ~2-3 bei deutschem).

**Top-K / Top-P (Nucleus Sampling)** — Sampling-Strategien: Auswahl aus den K wahrscheinlichsten bzw. den Tokens, die zusammen Wahrscheinlichkeit P ergeben.

**Trajectory-Eval** — Agent-Evaluation mit Fokus auf den gesamten Entscheidungspfad (nicht nur das Endergebnis).

**Transformer** — Architektur hinter allen modernen LLMs. Basiert auf Self-Attention-Mechanismus (Vaswani et al. 2017).

**Transfer Learning** — Wissen aus einer Aufgabe auf eine andere übertragen (Basis für Fine-Tuning).

**TTS (Text-to-Speech)** — Generierung gesprochener Sprache aus Text.

---

## U

**Underfitting** — Modell ist zu einfach, um die Muster in den Daten zu erfassen.

---

## V

**Vector Database** — Spezialisierte Datenbank für hochdimensionale Embeddings mit Nearest-Neighbor-Suche.

**Vibe Coding** — Trend 2025/2026: Apps per natürlichsprachiger Beschreibung generieren lassen (Bolt, Lovable, v0.dev).

---

## W

**Weight** — Trainierbare Parameter eines neuronalen Netzes.

---

## Z

**Zero-Shot** — Modell löst Aufgabe ohne Beispiele im Prompt, nur mit Instruktion.

**ZeRO (Zero Redundancy Optimizer)** — Distributed-Training-Strategie von DeepSpeed (Stages 1/2/3: Optimizer-States / Gradients / Parameters verteilt).
