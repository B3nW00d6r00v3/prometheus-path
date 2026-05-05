---
title: "Inferenz-Server für selbst-gehostete Modelle"
module: "10.3"
type: theorie
fast_track: false
effort: "15min"
stability: yellow
---

# Inferenz-Server für selbst-gehostete Modelle

## Kernidee

Wer fine-getunte oder Open-Source-Modelle in Production betreibt, braucht einen Inferenz-Server — nicht Ollama (zu einfach für Production), sondern spezialisierte Server wie vLLM oder SGLang, die für Throughput, Multi-Tenancy und Latenz optimiert sind.

## Im Detail

**Warum ein spezialisierter Inferenz-Server?**

Ollama ist ideal für lokale Entwicklung und Einzelnutzer. In Production mit mehreren gleichzeitigen Anfragen bricht die Performance ein. Spezialisierte Server lösen das mit Techniken wie PagedAttention (vLLM) und Continuous Batching.

**Die wichtigsten Inferenz-Server 2026:**

| Tool | Stärken | Schwächen | Wann nutzen |
|---|---|---|---|
| **vLLM** | De-facto Standard, PagedAttention, sehr hoher Throughput, gut dokumentiert | Aufwändigeres Setup | Production-Standard für die meisten Use-Cases |
| **SGLang** | Optimiert für Reasoning und strukturierte Outputs, schnell wachsend | Jünger, kleineres Community | Wenn Reasoning oder JSON-Output-Optimierung gefragt |
| **Ollama** | Sehr einfach, gut für Entwicklung | Zu langsam für Multi-User-Production | Lokale Entwicklung, Single-User |
| **TGI (Text Generation Inference)** | Hugging Face-supported, production-ready, gut dokumentiert | Weniger Throughput als vLLM | Hugging-Face-zentrierte Teams |
| **Together AI / Fireworks AI** | Managed, keine eigene Infrastruktur | Externe Abhängigkeit, Cost | Wenn kein eigenes GPU-Setup gewünscht |

**vLLM-Kernprinzip — PagedAttention:**
KV-Cache (Key-Value-Cache für Attention) wird wie Betriebssystem-Speicher verwaltet — kein verschwendeter GPU-Speicher, viel höhere parallele Nutzung. Ergebnis: 20-30x höherer Throughput als naives Batching.

**Continuous Batching:**
Statt auf vollständige Batches zu warten, verarbeitet der Server neue Anfragen sobald GPU-Kapazität frei wird. Kritisch für niedrige Latenz bei ungleichmäßigem Traffic.

**Deployment-Schritte (vLLM, konzeptuell):**
1. GPU-Server provisionieren (Lambda Labs, RunPod, Hetzner mit GPU)
2. vLLM-Docker-Image starten mit Modell-Pfad
3. OpenAI-kompatible API ist sofort verfügbar (Drop-in Replacement)
4. Optional: FastAPI-Wrapper für Auth, Rate-Limiting, Logging

*Verfallsdatum: Aug 2026 — SGLang wächst schnell und könnte vLLM einholen.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [vLLM Docs](https://docs.vllm.ai) | Vollständige vLLM-Dokumentation |
| 🐙 GitHub | [SGLang GitHub](https://github.com/sgl-project/sglang) | SGLang-Projekt und Benchmarks |
| 🔗 Service | [Together AI](https://www.together.ai) | Managed Inferenz für OSS-Modelle |

## Teste dein Verständnis

- [ ] Was ist PagedAttention und warum ist es entscheidend für Production-Throughput?
- [ ] Wann ist SGLang gegenüber vLLM die bessere Wahl?
- [ ] Welche Schritte brauche ich, um ein fine-getuntes Modell mit vLLM zu deployen?
