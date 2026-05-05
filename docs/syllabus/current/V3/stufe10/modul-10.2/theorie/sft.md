---
title: "Supervised Fine-Tuning (SFT)"
module: "10.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Supervised Fine-Tuning (SFT)

## Kernidee

Supervised Fine-Tuning (SFT) ist die klassische Fine-Tuning-Variante: du gibst dem Modell Paare aus Eingabe und gewünschter Ausgabe, und es lernt, diese Zuordnung zu verallgemeinern. SFT ist der obligatorische erste Schritt, bevor Preference Tuning angewendet werden kann.

## Im Detail

**Wie SFT funktioniert:**
- Datensatz: Liste von `(Prompt, Completion)`-Paaren
- Training: Modell lernt, bei diesem Prompt diese Completion vorherzusagen (Cross-Entropy-Loss)
- Resultat: Modell ist auf die Aufgaben-Domäne spezialisiert

**Wann SFT ausreicht (ohne Preference Tuning):**
- Klar definiertes Input-Output-Pattern (z.B. Text-Extraktion, Klassifikation, Formatierung)
- Wenig Präferenz-Variabilität (eine Antwort ist klar richtig, nicht "Antwort A ist besser als B")
- Begrenzte Compute-Budget (Preference Tuning braucht mehr Daten und Training)

**Daten-Qualität ist entscheidend:**
- 500 hochqualitative Pairs schlagen 5.000 schlechte Pairs
- Konsistenz im Format: einheitlicher System-Prompt-Stil, einheitliche Completion-Struktur
- Repräsentative Abdeckung: alle Sub-Tasks des Use-Cases sollten im Datensatz vertreten sein

**Typische Hyperparameter-Einstellungen:**
- Learning Rate: 1e-5 bis 2e-4 (konservativ starten)
- Epochs: 1-3 (mehr riskiert Overfitting und Catastrophic Forgetting)
- Batch Size: abhängig von VRAM; mit Gradient Accumulation simulieren

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Hugging Face — SFT Trainer](https://huggingface.co/docs/trl/sft_trainer) | Praktische Implementierung |
| 📖 Paper | [LIMA: Less Is More for Alignment](https://huggingface.co/datasets/GAIR/lima) | 1000 Pairs erreichen starkes SFT |

## Teste dein Verständnis

- [ ] Was ist das Daten-Format für SFT?
- [ ] Wann reicht SFT allein — ohne nachfolgendes Preference Tuning?
- [ ] Warum sind 500 hochqualitative Pairs besser als 5.000 schlechte?
