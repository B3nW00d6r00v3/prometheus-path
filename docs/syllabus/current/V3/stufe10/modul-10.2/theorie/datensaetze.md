---
title: "Datensätze für Fine-Tuning"
module: "10.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Datensätze für Fine-Tuning

## Kernidee

Daten sind der limitierende Faktor beim Fine-Tuning, nicht die Methode. Drei Quellen stehen zur Verfügung: eigene Daten (wertvollste, oft seltenste), synthetische Daten (skalierbar, aber Qualitätskontrolle nötig) und Open-Source-Datensätze (guter Einstieg, wenig spezifisch).

## Im Detail

**Quelle 1 — Eigene Daten (beste Qualität für spezifische Aufgaben):**
- Brand-Voice-Beispiele: 50-500 eigene Texte im gewünschten Stil
- Domain-spezifische Q&A-Paare: Experten formulieren typische Fragen + Muster-Antworten
- Stil-Vorbilder: Publikationen, Artikel, Kommunikation in gewünschtem Ton
- **Vorteil:** maximal relevant für dein Use-Case
- **Nachteil:** Erstellungs-Aufwand, oft nur Hunderte Samples verfügbar

**Quelle 2 — Synthetic Data (skalierbar):**
- Starkes Frontier-Modell (GPT-5, Claude Opus) generiert Trainings-Daten aus Seed-Prompts
- Tools: [Distilabel](https://github.com/argilla-io/distilabel) (Framework), [Bonito](https://github.com/BatsResearch/bonito)
- **Vorteil:** skalierbar auf tausende Samples ohne menschliche Annotation
- **Nachteil:** Risk of "garbage in, garbage out" — Qualitätskontrolle durch Sampling + menschliche Prüfung Pflicht

**Quelle 3 — Open Datasets (guter Einstieg):**
- [LIMA](https://huggingface.co/datasets/GAIR/lima) — 1.000 hochqualitative SFT-Pairs, beweist "Less is More"
- [UltraFeedback](https://huggingface.co/datasets/openbmb/UltraFeedback) — DPO-ready mit chosen/rejected-Pairs
- [Alpaca](https://huggingface.co/datasets/tatsu-lab/alpaca) — 52K instruction-following-Pairs (datiert, aber noch nützlich)
- [Hugging Face Datasets](https://huggingface.co/datasets) — tausende weitere

**Daten-Qualitätsprinzip:** 500 hochqualitative, kuratierte Pairs schlagen 50.000 automatisierte Pairs. Qualitätskontrolle durch Sampling, manuelle Sichtung, LLM-as-Judge.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📊 Dataset | [LIMA](https://huggingface.co/datasets/GAIR/lima) | SFT-Standard |
| 📊 Dataset | [UltraFeedback](https://huggingface.co/datasets/openbmb/UltraFeedback) | DPO-Standard |
| 🛠️ Tool | [Distilabel](https://github.com/argilla-io/distilabel) | Synthetic Data Generation |
| 🛠️ Tool | [Bonito](https://github.com/BatsResearch/bonito) | Task-spezifische Datengenerierung |

## Teste dein Verständnis

- [ ] Welche drei Datenquellen stehen für Fine-Tuning zur Verfügung?
- [ ] Was ist das Risiko bei synthetischen Trainingsdaten?
- [ ] Warum ist LIMA wichtig für das Verständnis von Daten-Qualität vs. Quantität?
