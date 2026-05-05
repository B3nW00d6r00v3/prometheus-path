# Capstone B: Foundations (🧮)

**Working Title:** nanoGPT-Vertiefung mit Preference-Tuning auf eigenem Korpus
**Aufwand:** 80-200h zusätzlich zu den Stufen-Aufwänden, Hardware-Cost 50-200€ realistisch
**Last verified:** Mai 2026 · **Re-check by:** Aug 2026 *(volatile Foundation-Modelle und Fine-Tuning-Tools)*
**Voraussetzungen:** 🧮-Track, Stufen 1-6 absolviert, Math-Diagnose-Test bestanden vor Stufe 7 *(NEU in v2.1, siehe `12_querschnitt_math.md`)*

Du baust ein eigenes Sprachmodell von Grund auf, integrierst mindestens eine moderne Architektur-Komponente (RoPE oder GQA), trainierst auf einem eigenen Korpus und vollendest mit Preference-Tuning. Endprodukt: dokumentierte Trainings-Pipeline, fine-getunetes Modell, Eval-Vergleich gegen Baseline-Modelle.

**Wichtige Strukturänderungen in v2.1:**

- **Verschobener Update-Block aus Stufe 7** (war in v2.0 am Ende von Stufe 7) — jetzt als Capstone-Foundations-Update-Sektion hier.
- **Math-Diagnose-Gate als Pflicht-Vorbedingung** *(NEU in v2.1)* — siehe `12_querschnitt_math.md`. Just-in-Time-Math reicht für 🧮 nicht.
- **Klassisches-ML-Foundations-Pflicht** vor Stufe 7: Module 8.1, 8.2, 8.5 müssen vor Stufe 7 absolviert sein für 🧮 *(NEU in v2.1)*. Konkret in 8.2: Logistic Regression from scratch als Brücke zu Backprop in 7.1.
- **S7-Self-Assessment** als Pflicht-Anker am Ende von Stufe 7 *(NEU in v2.1)* — siehe `07_stufe7.md`. Backprop auf Papier + eigene nanoGPT-Variante.
- **Decision-Framework Fine-Tuning vs. RAG vs. Prompt-Engineering** *(NEU in v2.1)* — siehe `10_stufe10.md`. Pflicht vor Phase 5/6 (SFT/DPO).
- **Capstone-Abschluss-Master-Sektion** in `15_capstone_a_engineer.md` referenziert — Demo-Video, Pitch, Lessons-Learned, Outcome-Schwellen-Check für 🧮.

---

## Konzept

Du baust ein eigenes Sprachmodell von Grund auf, integrierst mindestens eine moderne Architektur-Komponente (RoPE oder GQA), trainierst auf einem eigenen Korpus und vollendest mit Preference-Tuning. Das System wächst iterativ über das Curriculum:

- **Stufe 7** legt Foundation: Karpathy Zero-to-Hero, moderne Transformer-Architektur, eigener Korpus
- **Stufe 8** ist für 🧮 teilweise Pflicht-Vorbedingung (Module 8.1+8.2+8.5 vor Stufe 7), in Stufe 8 selbst nur 8.3 und 8.4
- **Stufe 10** vollendet mit SFT + Preference Tuning (DPO oder ORPO) plus Inferenz-Setup
- **Stufe 11** vollendet mit Final-Doku, Demo, Pitch (Master-Sektion in `15_capstone_a_engineer.md`)

Wer 🧮 ist, hat hier seine Hauptarbeit. Wer 🔧 mit-macht, kann den Capstone als Vertiefungs-Projekt für eigene Architektur-Verständnisse nutzen — aber Capstone-A bleibt der Haupt-Pfad für 🔧.

---

## Pflicht-Vorbedingungen vor Capstone-Start *(verstärkt in v2.1)*

Vor dem eigentlichen Capstone-Start (Phase 1 in Stufe 7) müssen für 🧮 folgende Voraussetzungen erfüllt sein:

1. **Module 8.1, 8.2, 8.5 absolviert** *(NEU in v2.1)* — Klassisches-ML-Foundations als Vorbereitung auf Backprop:
 - 8.1: Distance-Metrics als Foundation für Embedding-Verständnis
 - 8.2: **Logistic Regression from scratch** (Pflicht-Aufgabe, NEU in v2.1) — die einfachste Backprop-Variante, direkte Brücke zu Modul 7.1
 - 8.5: Statistik-Foundation für Eval

2. **Math-Diagnose-Test bestanden** *(NEU in v2.1)* — siehe `12_querschnitt_math.md` Gate-Sektion. Mindestens 12 von 15 Aufgaben korrekt. Bei <12: Lücken schließen, dann neu testen.

3. **Math-Querschnitt in Tiefe absolviert** — 3Blue1Brown alle drei Series + Khan Academy Subset + Mathematics for ML Buch Kapitel 1-4, 6.

Wer ohne diese Vorbedingungen Capstone B startet, läuft systematisch in Probleme: Karpathys Zero-to-Hero verlangt Calculus-Basis ab Tag 1, Matrix-Verständnis ab Lecture 2.

---

## Phasen entlang des Curriculums

### Phase 1 — Korpus-Wahl (Modul 7.1)
- Wähle einen Korpus mit Substanz und persönlichem Bezug: eigene Texte, Tweet-Archiv, Branchen-Korpus (Open-Source), kreative Schreibproben.
- Mindestens 5-50 MB Text für sinnvolles Training auf Consumer-Hardware.

### Phase 2 — Karpathy Zero-to-Hero (Modul 7.1)
- Alle 7 Lectures durcharbeiten
- micrograd, makemore, nanoGPT alle drei selbst nachimplementieren
- Erstes Char-Modell auf eigenem Korpus

### Phase 3 — Modern Transformer (Modul 7.2)
- nanoGPT-Codebase verstehen und kommentieren
- **Mindestens eine moderne Komponente einbauen**: RoPE, GQA, oder beide
- Training auf eigenem Korpus mit dokumentierten Loss-Curves

### Phase 4 — Wandb / TensorBoard Tracking
- [Weights & Biases](https://wandb.ai) (kostenlos für Open-Source) oder [TensorBoard](https://www.tensorflow.org/tensorboard) für Experiment-Tracking
- Hyperparameter-Sweeps

### Capstone-Foundations-Update nach Stufe 7 *(verschoben aus Stufe 7 in v2.1)*

Nach Stufe 7 hat dein Capstone-Foundations-Projekt im Aufbau:
- ✅ Korpus gewählt, Repo angelegt (Phase 1)
- ✅ Karpathy Zero-to-Hero komplett durchgearbeitet (Phase 2): micrograd, makemore, nanoGPT
- ✅ Erstes Char-Modell auf eigenem Korpus
- ✅ Modern Transformer (Phase 3): mindestens RoPE oder GQA selbst eingebaut, Training auf eigenem Korpus mit Loss-Curves
- ✅ Wandb/TensorBoard-Tracking eingerichtet (Phase 4)
- ✅ **S7-Self-Assessment bestanden** *(NEU in v2.1)*: Backprop auf Papier (1-2h, <90 Min ohne Hilfsmittel) + eigene nanoGPT-Variante mit zweiter moderner Komponente oder Hyperparameter-Studie

In Stufe 10.2 wird darauf SFT und Preference Tuning (DPO oder ORPO) angewendet, plus Eval mit Perplexity und MMLU-Delta. **Vor Phase 5/6 ist das Decision-Framework anzuwenden** *(NEU in v2.1)*: warum hier Fine-Tuning die richtige Wahl ist und nicht RAG oder Prompting — siehe `10_stufe10.md`.

### Phase 5 — SFT (Supervised Fine-Tuning) (Modul 10.2)

**Vor Phase 5: Decision-Framework anwenden** *(NEU in v2.1)* — dokumentiere für deinen Capstone-Use-Case, warum Fine-Tuning hier die richtige Wahl ist (nicht Prompting, nicht RAG). Drei-stufige Entscheidungs-Hierarchie aus `10_stufe10.md`. Bei einem Foundations-Capstone ist die Antwort meist klar (Fine-Tuning ist *der* Capstone-Inhalt), aber die Reflexion gehört dokumentiert.

- Aufbauend auf eigenem Foundation-Modell oder einem kleinen Open-Source-Modell (Qwen 3 0.5B/1.5B oder Gemma 3 2B)
- Instruction-Tuning auf kuratiertem Datensatz

### Phase 6 — Preference Tuning (DPO oder ORPO)
- Datensatz mit 50-200 Pair-Samples (eigene Curation oder UltraFeedback Subset)
- Training mit TRL und Unsloth

### Phase 7 — Eval (Modul 10.2)
- Perplexity Vorher/Nachher
- MMLU-Subset (mindestens STEM oder Humanities)
- LLM-as-Judge auf eigenem Test-Prompt-Set
- Catastrophic-Forgetting-Bewertung

### Phase 8 — Inferenz-Setup (Modul 10.3)
- Modell mit vLLM oder SGLang deployen
- Latency-Benchmarks
- Optional: API-Service mit FastAPI
- *Optional: Inference-Service-Operate-Phase* — siehe `14_querschnitt_production.md`

### Phase 9 — Final-Doku und Pitch (Capstone-Abschluss)

Siehe **Capstone-Abschluss-Master-Sektion in `15_capstone_a_engineer.md`** — gilt für alle drei Capstones, mit track-spezifischen Hinweisen für 🧮:

- README mit Architektur und Trainings-Pipeline
- Demo-Video (5-10 Min) mit Modell-Outputs vor/nach Fine-Tuning
- Pitch-Slides für technisches Publikum mit Perplexity Vorher/Nachher und MMLU-Subset-Score
- Portfolio-Eintrag

---

## Outcome-Schwellen

| Metrik | Schwelle | Wie messen |
|---|---|---|
| **Math-Diagnose-Test** *(NEU in v2.1)* | **bestanden mit ≥12/15 vor Stufe 7** | Selbstkorrektur in `self-assessments/math-diagnose/` |
| **Module 8.1+8.2+8.5 absolviert vor Stufe 7** *(NEU in v2.1)* | **inkl. Logistic Regression from scratch (8.2)** | Code im Portfolio |
| **S7-Self-Assessment bestanden** *(NEU in v2.1)* | **Backprop auf Papier <90 Min + nanoGPT-Variante** | `self-assessments/s7/` |
| **Decision-Framework dokumentiert** *(NEU in v2.1)* | **vor Phase 5/6: Begründung Fine-Tuning vs. RAG vs. Prompt** | Reflexions-Dokument im Capstone-Repo |
| Loss-Konvergenz | dokumentierte Loss-Curves, plausible Konvergenz | W&B / TensorBoard |
| Moderne Komponente | mindestens RoPE oder GQA selbst eingebaut | Code-Review |
| SFT durchgeführt | ja | Trainings-Logs |
| Preference Tuning | DPO oder ORPO mit ≥50 Pair-Samples | Trainings-Logs |
| Eval Vorher/Nachher | mindestens drei Metriken | Eval-Report |
| Catastrophic Forgetting | bewertet (Drop in MMLU-Subset <10%) | Eval-Report |
| Inferenz-Setup | vLLM oder SGLang lauffähig | Setup-Doku |

---

## Portfolio-Anforderungen

Im Portfolio-Repo unter `00_capstone/`:
- `README.md` mit: Track, Korpus, Architektur, Trainings-Pipeline, Eval-Outcomes
- Link zum Capstone-Repo
- `architecture.md` mit detaillierter Architektur-Beschreibung
- `training-logs/` mit W&B-Screenshots oder TensorBoard-Exports
- `eval-report.md` mit Vorher/Nachher
- `pitch-slides.pdf`
- `model-outputs/` mit Beispiel-Generierungen vor und nach Training/Tuning
- `lessons-learned.md`
- `decision-framework.md` *(NEU in v2.1)* — Begründung Fine-Tuning vs. RAG vs. Prompt für deinen Use-Case
- *Optional*: `inference-operate/` falls Phase 8 mit Operate-Phase erweitert

Plus Pflicht-Vorbedingungs-Belege:
- `self-assessments/math-diagnose/` *(NEU in v2.1)* — Math-Diagnose-Test mit Selbstkorrektur, Status
- `self-assessments/s7/` *(NEU in v2.1)* — S7-Self-Assessment-Outputs (Backprop auf Papier + nanoGPT-Variante)
- Verweis auf Modul-8.2-Logistic-Regression-from-scratch-Code

---

## Mögliche Korpus-Beispiele

- Eigene Tweets / Blog-Posts / Newsletter-Archiv (öffentlich verfügbar)
- Persönliche Tagebücher / Notizen (DSGVO: privat halten, nicht veröffentlichen)
- Branchen-Korpus aus Open-Data-Quellen
- Kreatives Schreiben (eigene Kurzgeschichten, Gedichte)
- Wissenschaftliche Paper aus eigenem Forschungsbereich
- Code-Korpus aus eigenen Repos (Code-Modell)
- Domain-spezifische Texte (z.B. Vereinssatzungen, Förderrichtlinien, eigene Dokumentationen)

---

## Hardware-Realität

- **Minimal**: 24GB VRAM (RTX 4090) oder Apple Silicon Max-Modelle (32-128GB unified memory) — reicht für QLoRA auf 7B-Modellen
- **Cloud-GPU-Rental**: Lambda Labs, RunPod, Modal — H100 für 1-3 €/h
- **Foundation-Pre-Training**: nicht zu Hause, kleine nanoGPT-Char-Models gehen
- **Cost-Schätzung**: ein vollständiger Capstone-Run mit SFT + DPO auf 7B-Modell: 50-200€ in Cloud-Kosten realistisch

---

## Ressourcen

- [Karpathy Zero to Hero](https://karpathy.ai/zero-to-hero.html)
- [Hugging Face TRL](https://huggingface.co/docs/trl)
- [Unsloth Docs](https://docs.unsloth.ai)
- [Sebastian Raschka — Build a Large Language Model From Scratch (Buch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
- [Hugging Face — LLM Course Chapter 11 (Fine-Tuning)](https://huggingface.co/learn/llm-course/chapter11)
- [Decision-Framework: Fine-Tuning vs. RAG vs. Prompt](file:./10_stufe10.md) *(siehe Modul 10.2 in v2.1)*

---

## Capstone-Abschluss-Verweis

Für den Capstone-Abschluss (Final-Doku, Demo-Video, Pitch, Lessons-Learned, Portfolio-Struktur, empfohlener Ablauf) siehe **`15_capstone_a_engineer.md` Master-Sektion**. Track-spezifische Hinweise für 🧮:

- **Demo-Video**: Trainings-Loss-Curves zeigen, Sample-Outputs vor/nach Fine-Tuning, Eval-Vergleich (Perplexity, MMLU-Subset).
- **Pitch-Outcome-Slide**: Perplexity Vorher/Nachher, MMLU-Subset-Score, Sample-Outputs.
- **Capstone-Outcome-Schwellen-Check für 🧮**:
 - Modell trainiert mit dokumentierten Loss-Curves
 - Preference Tuning (DPO oder ORPO) durchgeführt
 - Eval Vorher/Nachher mit Verbesserung
 - **Decision-Framework dokumentiert** *(NEU in v2.1)*
 - **S7-Self-Assessment bestanden** *(NEU in v2.1)*
 - **Math-Diagnose-Gate bestanden** *(NEU in v2.1)*

---

## Aktualisierungslog

- **2026-05-04:** Version v2.1.0 — **Capstone-Foundations-Update-Block aus Stufe 7 hierher verschoben** (mit S7-Self-Assessment-Pflicht und v2.1-Anker-Punkten); **Pflicht-Vorbedingungen-Block NEU** vor Phase 1 (Math-Diagnose-Gate, Module 8.1+8.2+8.5, Math-Querschnitt in Tiefe — alle NEU oder verstärkt in v2.1); **Decision-Framework-Pflicht** vor Phase 5/6 dokumentiert (Verweis auf Modul 10.2 NEU in v2.1); Outcome-Schwellen-Tabelle erweitert um vier neue Pflicht-Schwellen (Math-Diagnose, Module 8.1+8.2+8.5, S7-Self-Assessment, Decision-Framework); Portfolio-Anforderungen erweitert um decision-framework.md und Pflicht-Vorbedingungs-Belege; **Capstone-Abschluss-Verweis** auf Master-Sektion in `15_capstone_a_engineer.md` ergänzt mit track-spezifischen Hinweisen für 🧮; Ressourcen erweitert um Decision-Framework-Verweis. **Keine yesberlin-Beispiele** verwendet (Memory #1).
- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** **Aug 2026 (3-Monats-Audit)** für Foundation-Modell-Liste und Fine-Tuning-Tools (Unsloth, TRL, vLLM volatil). Plus Nov 2026 Hauptreview.
