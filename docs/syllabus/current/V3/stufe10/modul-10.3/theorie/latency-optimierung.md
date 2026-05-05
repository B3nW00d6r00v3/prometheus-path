---
title: "Latency-Optimierung"
module: "10.3"
type: theorie
fast_track: false
effort: "15min"
stability: yellow
---

# Latency-Optimierung

## Kernidee

Latenz bei LLM-Anwendungen hat zwei Komponenten: Time-to-First-Token (wie lange bis die erste Antwort erscheint) und Time-to-Last-Token (Gesamt-Dauer). Streaming löst das erste Problem sofort — für das zweite braucht es gezielte Techniken, je nach ob Frontier-API oder selbst-gehostetes Modell.

## Im Detail

**Latenz-Quellen verstehen:**

| Quelle | Typische Auswirkung | Lösung |
|---|---|---|
| Netzwerk-RTT zum Provider | 50-200ms | Regionale Endpoints wählen |
| Time-to-First-Token (TTFT) | 500ms-3s bei Frontier | Streaming aktivieren |
| Tokens/Sekunde (TPS) | Modell-abhängig | Kleineres Modell, Quantisierung |
| Kontextlänge | Quadratisch steigend | Kontext komprimieren |

**Technik 1: Streaming (wichtigste Maßnahme)**
- User sieht erste Tokens nach ~500ms statt auf vollständige Antwort (3-10s) zu warten.
- Implementierung: `stream=True` in API-Call, Frontend zeigt Tokens progressiv an.
- Wahrgenommene Latenz sinkt drastisch, tatsächliche Gesamt-Latenz bleibt gleich.

**Technik 2: Speculative Decoding (für selbst-gehostete Modelle)**
- Kleines Draft-Modell schlägt mehrere Tokens vor, großes Modell verifiziert batch-weise.
- Speedup: 2-3x bei guter Draft-Modell-Wahl.
- Voraussetzung: eigene Infrastruktur (vLLM unterstützt Speculative Decoding nativ).

**Technik 3: Quantisierung**
- FP8, INT8 oder INT4 statt FP16/BF16 Gewichte.
- Modell wird kleiner → passt in weniger GPU-Speicher → mehr Parallelität.
- Qualitätsverlust: bei INT8 minimal, bei INT4 messbar aber oft akzeptabel.
- Tools: bitsandbytes, GGUF (für Ollama/llama.cpp), AWQ.

**Technik 4: Continuous Batching**
- Eingebaut in vLLM und SGLang.
- Neue Anfragen werden eingereiht sobald Kapazität frei — kein Warten auf vollständige Batches.
- Automatisch aktiv wenn Inferenz-Server korrekt konfiguriert.

**Technik 5: Edge-Inference**
- Für Latenz-kritische Use-Cases (Echtzeit-Voice, Gaming): Modell läuft lokal auf Edge-Device.
- Aktuell nur für sehr kleine Modelle (Phi-4, Gemma 3 2B) praktikabel.
- Wachsendes Feld — 2026 noch Nische, 2027 relevanter.

**Praxis-Priorität:** Streaming implementieren (1 Stunde Aufwand, größte wahrgenommene Verbesserung) vor allen anderen Techniken.

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [vLLM Docs](https://docs.vllm.ai) | Continuous Batching, Speculative Decoding |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Time-to-First-Token und Time-to-Last-Token?
- [ ] Warum verbessert Streaming die wahrgenommene Latenz, ohne die tatsächliche Latenz zu senken?
- [ ] Welche Quantisierungsstufe bietet den besten Trade-off zwischen Geschwindigkeit und Qualität?
