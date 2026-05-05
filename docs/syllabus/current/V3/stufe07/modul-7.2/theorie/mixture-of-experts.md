---
title: "Mixture of Experts (MoE)"
module: "7.2"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# Mixture of Experts (MoE)

## Kernidee

MoE ersetzt den einzelnen Feed-Forward-Layer eines Transformers durch viele spezialisierte "Experts". Pro Token sind nur einige Experts aktiv (sparse activation). Modell hat insgesamt 100B Parameter, aber pro Token nur 5B aktiv — Effizienz eines kleinen Modells, Kapazität eines großen.

## Im Detail

**Das Standard-FFN-Problem:** In einem Standard-Transformer ist der FFN-Layer für jedes Token aktiv und nutzt alle Parameter. Ein 70B-Modell benutzt bei jedem Token 70B Parameter — teuer in Compute und Memory.

**MoE-Architektur:**
- **Experts:** N parallele FFN-Layer (z.B. N=64).
- **Router (Gating Network):** Für jedes Token wählt ein gelerntes Router-Netz K aus N Experts aus (z.B. K=2 von N=64).
- **Sparse Activation:** Nur K Experts werden für dieses Token berechnet — alle anderen sind inaktiv.

**Praktische Zahlen (DeepSeek-V3):**
- Gesamt-Parameter: ~685B.
- Aktive Parameter pro Token: ~37B (K=8 von ~64 Experts).
- Trainings-Effizienz: vergleichbar mit einem 37B-Dense-Modell, aber höhere Kapazität.

**Wer nutzt MoE 2026:**
- DeepSeek V2, V3 (OSS, starke MoE-Implementierung).
- Mistral 8x7B, 8x22B (Mixtral-Familie, OSS).
- Gemini — angeblich MoE-basiert (intern, nicht offiziell bestätigt).
- OpenAI's größere Modelle — angeblich MoE (nicht offiziell bestätigt).

**Herausforderungen:**
- **Load Balancing:** Router muss Experts gleichmäßig nutzen, nicht immer dieselben. Spezielle Loss-Terme dafür nötig.
- **Training-Komplexität:** MoE-Training ist schwieriger als Dense-Training (Expert-Kollaps möglich).
- **Inferenz-Deployment:** Alle Experts müssen in Memory sein, auch wenn pro Token nur K aktiv sind.

*Verfallsdatum: Aug 2026 — MoE-Architekturen entwickeln sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📰 Blog | [Mistral — Mixture of Experts](https://mistral.ai/news/mixtral-of-experts/) | Mixtral-Einführung |
| 📄 Paper | [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437) | MoE in der Praxis |
| 🌐 Modell | [Mixtral 8x7B (Hugging Face)](https://huggingface.co/mistralai/Mixtral-8x7B-v0.1) | OSS MoE-Modell |

## Teste dein Verständnis

- [ ] Was ist der Kernunterschied zwischen einem Dense Transformer und einem MoE Transformer?
- [ ] Was macht der Router in einem MoE-Modell?
- [ ] Welche Effizienz-Vorteile hat MoE gegenüber einem Dense-Modell gleicher aktiver Parameter-Zahl?
- [ ] Was ist Expert-Kollaps und warum ist er ein Problem?
