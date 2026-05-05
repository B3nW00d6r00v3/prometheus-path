---
title: "GPAI-Pflichten (General-Purpose AI Models)"
module: "9.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# GPAI-Pflichten (General-Purpose AI Models)

## Kernidee

GPAI-Pflichten gelten seit 2.8.2025 — aber sie treffen primär Foundation-Modell-Provider (OpenAI, Anthropic, Google, Meta), nicht die meisten Unternehmen, die diese Modelle nutzen. Dennoch muss jeder wissen, wann er selbst zum GPAI-Provider wird.

## Im Detail

**Wer ist GPAI-Provider?**
- Organisationen, die Foundation-Modelle trainieren und anbieten.
- Betrifft: OpenAI, Anthropic, Google DeepMind, Meta (Llama), Mistral AI, etc.
- Nicht betrifft: Unternehmen, die nur API-Calls machen oder vorhandene Modelle nutzen.

**GPAI-Provider-Pflichten:**
- Transparenz über Trainings-Daten (technische Dokumentation).
- Copyright-Compliance bei Trainingsdaten.
- Energie-Verbrauch dokumentieren.

**Systemic-Risk-Modelle (zusätzliche Pflichten):**
- Modelle mit > 10^25 FLOPs Trainingsaufwand (sehr große Modelle).
- Zusätzlich: Adversarial Testing (Red Teaming), Cyber-Sicherheits-Maßnahmen, Incident Reporting an EU-Behörden.

**Wann bin ich als Nutzer-Organisation betroffen?**
- Wenn du ein Foundation-Modell fine-tunest und danach als eigenes Produkt vertreibst → potenzielle GPAI-Provider-Rolle.
- Wenn du nur API-Calls machst oder interne RAG-Systeme baust → in der Regel nicht betroffen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Offiziell | [GPAI Code of Practice](https://digital-strategy.ec.europa.eu) | Leitfaden für GPAI-Provider |

## Teste dein Verständnis

- [ ] Ist ein Unternehmen, das Llama 3 fine-tuned und intern einsetzt, ein GPAI-Provider?
- [ ] Was sind die drei Standard-Pflichten für alle GPAI-Provider?
- [ ] Ab wann gilt ein Modell als „Systemic Risk Model" mit zusätzlichen Pflichten?
