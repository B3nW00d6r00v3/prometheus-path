---
title: "AI Platform vs. Tool Sprawl"
module: "9.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# AI Platform vs. Tool Sprawl

## Kernidee

Ohne zentrale AI Platform entsteht Tool Sprawl: jedes Team baut eigene KI-Tools, nutzt verschiedene Provider, teilt kein Wissen. Das Ergebnis ist redundante Kosten, inkonsistente Qualität und Governance-Lücken.

## Im Detail

**Tool Sprawl — das Anti-Pattern:**
- Team A nutzt OpenAI direkt, Team B Anthropic, Team C Azure OpenAI.
- Kein gemeinsames Monitoring, keine gemeinsamen Eval-Standards.
- Datenschutz-Lücken durch unkontrollierte Datenflüsse.
- Costs unkontrolliert, da kein zentrales Tracking.
- Wissen wird nicht geteilt.

**AI Platform als Lösung — vier Kernkomponenten:**

1. **Gemeinsamer LLM-Gateway** (z.B. LiteLLM, OpenRouter): zentraler Zugriffspunkt für alle Teams. Monitoring, Cost-Tracking und Provider-Switching an einem Ort.

2. **Gemeinsames RAG-Backend**: Unternehmenswissen zentral eingebettet und durchsuchbar. Verhindert, dass jedes Team dasselbe Dokument 10× einbettet.

3. **Gemeinsames Eval-Framework**: Standard-Metriken und Testsets, die alle Use-Cases verwenden. Vergleichbarkeit.

4. **Gemeinsames Monitoring**: Alle Use-Cases in einem Dashboard. Anomalie-Detection für Qualitäts-Drift und Cost-Spikes.

**Was dezentral bleiben kann:** Domänen-spezifische Prompt-Engineering, Fachlogik, Use-Case-spezifische Features.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Tool | [LiteLLM](https://github.com/BerriAI/litellm) | OSS LLM-Gateway für Multi-Provider |
| Artikel | [Anyscale — Building AI Platforms](https://www.anyscale.com) | Platform-Architekturen für KI |

## Teste dein Verständnis

- [ ] Welche konkreten Kosten entstehen durch Tool Sprawl in einer Organisation mit 10 Teams?
- [ ] Welche der vier Plattform-Komponenten hat in deinem Kontext den höchsten sofortigen Wert?
- [ ] Wie verteidigst du den Investitionsaufwand einer AI Platform gegenüber „jedes Team baut selbst"?
