---
title: "Karpathys Zero to Hero-Serie"
module: "7.1"
type: theorie
fast_track: false
effort: "variabel (🧮: alle 7 Lectures · 🔧: Lectures 1-3)"
stability: green
---

# Karpathys Zero to Hero-Serie

## Kernidee

Andrej Karpathy baut in sieben Lectures von skalaren Gradienten (micrograd, ~100 Zeilen) bis zu nanoGPT (~300 Zeilen) — jede Zeile Code live erklärt. Wer das durchgemacht hat, versteht moderne LLMs auf Code-Ebene. Es gibt 2026 keine bessere Quelle für dieses Material.

## Im Detail

**Die sieben Lectures:**

| # | Titel | Schwerpunkt | Für |
|---|-------|-------------|-----|
| 1 | The spelled-out intro to neural networks and backpropagation (micrograd) | Backprop, Autograd | 🧮🔧 |
| 2 | The spelled-out intro to language modeling (makemore Bigram) | Bigram-Modell, Grundlagen | 🧮🔧 |
| 3 | Building makemore Part 2: MLP | MLP, Batch-Normalization | 🧮🔧 |
| 4 | Building makemore Part 3: Activations & Gradients | Gradient-Flow, Diagnose | 🧮 |
| 5 | Building makemore Part 4: Becoming a Backprop Ninja | Backprop von Hand | 🧮 |
| 6 | Building makemore Part 5: WaveNet | Hierarchische Modelle | 🧮 |
| 7 | Let's build GPT from scratch | nanoGPT, Transformer | 🧮🔧 |

**Empfohlene Vorgehensweise:**
- Lecture schauen (1-2h pro Lecture).
- Code **nicht kopieren** — selbst tipppen. Das ist der Lerneffekt.
- Eigene Kommentare hinzufügen, was du noch nicht verstehst.
- Nach Lecture: Experiment durchführen (z.B. Hyperparameter ändern, eigenen Datensatz nutzen).

**Warum diese Serie so gut ist:** Karpathy zeigt nicht nur "wie" es geht, sondern "warum" jede Design-Entscheidung getroffen wird. Die Lectures sind vollständig — kein Schönreden von Details. Wenn etwas in der Praxis kompliziert ist, zeigt Karpathy das live.

**Für 🔧:** Lectures 1, 2, 7 sind Pflicht. Lecture 3 sehr empfohlen. Lectures 4-6 optional.

**Für 🧮:** Alle 7 Lectures — das ist das Fundament für Capstone B (nanoGPT auf eigenem Korpus).

**Für 💼:** Lecture 1 schauen (nicht implementieren) gibt Intuition für das Training-Prinzip.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Übersicht | [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) | Alle Lectures + Links |
| 💻 Code | [GitHub: micrograd](https://github.com/karpathy/micrograd) | Lecture 1 — Autograd in ~100 Zeilen |
| 💻 Code | [GitHub: makemore](https://github.com/karpathy/makemore) | Lectures 2-6 — Char-Level Language Model |
| 💻 Code | [GitHub: nanoGPT](https://github.com/karpathy/nanoGPT) | Lecture 7 — GPT in ~300 Zeilen |

## Teste dein Verständnis

- [ ] Hast du Lecture 1 (micrograd) abgeschlossen und eigenen Code geschrieben?
- [ ] 🔧/🧮: Kannst du ein Bigram-Modell von Grund auf implementieren?
- [ ] 🧮: Hast du makemore in mindestens drei Stufen (Bigram, MLP, WaveNet) gebaut?
- [ ] 🧮: Läuft dein eigenes Char-Model auf einem eigenen Korpus?
