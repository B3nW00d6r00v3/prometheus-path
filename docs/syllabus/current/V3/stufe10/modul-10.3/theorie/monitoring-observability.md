---
title: "Monitoring & Observability"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: yellow
---

# Monitoring & Observability

## Kernidee

LLM-Anwendungen brauchen drei Monitoring-Layer gleichzeitig: klassisches Application Monitoring für Errors und Performance, LLM-spezifisches Tracing für jeden Prompt und Response, und kontinuierliche Eval-Metriken auf echten Produktions-Anfragen. Wer nur einen Layer hat, ist blind.

## Im Detail

**Layer 1: Application Monitoring (klassisch)**
- Tools: Sentry (Error-Tracking), DataDog (Performance), Prometheus/Grafana (Metriken)
- Was gemessen wird: HTTP-Status-Codes, Response-Times, Error-Rates, Memory/CPU
- Wann nötig: immer — LLM-Anwendungen sind normale Software-Anwendungen
- Besonderheit bei LLMs: API-Timeouts und Rate-Limits als häufige Fehlerquellen extra tracken

**Layer 2: LLM-spezifisches Tracing**

Jeder LLM-Call sollte folgendes tracken:
- **Prompt** (vollständig, für Debugging)
- **Response** (vollständig)
- **Latenz** (Time-to-First-Token + Total)
- **Token-Count** (Input + Output)
- **Cost** (berechnet aus Token-Count × Modell-Preis)
- **Modell** (welches Modell wurde tatsächlich genutzt)
- **User/Session-ID** (für User-spezifische Analyse)

Tools für LLM-Tracing:

| Tool | Besonderheit | Lizenz |
|---|---|---|
| [Langfuse](https://langfuse.com) | Vollständiges OSS, self-hosted möglich | Open Source |
| [LangSmith](https://www.langchain.com/langsmith) | Tight LangChain-Integration | Proprietär |
| [Helicone](https://www.helicone.ai) | Proxy-basiert, einfaches Setup | Proprietär |
| [Phoenix/Arize](https://docs.arize.com) | ML-Observability-Plattform | Proprietär |

**Layer 3: Eval-Metriken in Production**
- Nicht nur auf Test-Datasets, sondern auf echten Produktions-Anfragen evaluieren.
- Sampling: nicht jede Anfrage evaluieren (zu teuer), sondern 5-10% Sample.
- Metriken: Faithfulness, Relevanz, Brand-Voice-Konsistenz (LLM-as-Judge).
- Alerts: wenn Eval-Score über mehrere Stunden unter Schwellenwert fällt.

**Langfuse als Empfehlung (OSS):**
- Traces, Cost, Eval-Metriken in einem Tool
- Self-hosted auf eigener Infrastruktur (wichtig für DSGVO)
- GitHub Actions Integration für Eval-as-CI

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [Langfuse](https://langfuse.com) | OSS LLM-Observability-Plattform |
| 📖 Docs | [Langfuse Docs](https://langfuse.com/docs) | Einstieg und Integrations-Guide |
| 🛠️ Tool | [LangSmith](https://www.langchain.com/langsmith) | LangChain-zentriertes Tracing |

## Teste dein Verständnis

- [ ] Welche drei Monitoring-Layer braucht eine LLM-Anwendung in Production?
- [ ] Was sollte jeder LLM-Call mindestens tracken?
- [ ] Warum ist Langfuse für DSGVO-sensible Anwendungen besonders relevant?
