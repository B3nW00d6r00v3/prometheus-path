---
title: "Cost und Performance multimodaler Modelle"
module: "7.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Cost und Performance multimodaler Modelle

## Kernidee

Bilder-Input ist deutlich teurer als Text-Input — typisch 1.000 bis 5.000 Tokens pro Bild je nach Auflösung und Modell. Für Volumen-Anwendungen sind lokale OSS-Modelle oder Image-Resizing entscheidende Cost-Hebel.

## Im Detail

**Wie Bilder abgerechnet werden:**

Die meisten APIs rechnen Bilder in Token-Äquivalente um:
- **Claude:** Ein 750×750px-Bild ≈ 1.500 Tokens. Ein 2000×2000px-Bild ≈ 5.000 Tokens. Claude unterstützt bis zu 5MB pro Bild.
- **GPT-5 (OpenAI):** "Low-Detail" ~85 Tokens, "High-Detail" ~1.500-5.000 Tokens je nach Auflösung.
- **Gemini:** Variables Pricing, oft günstiger bei niedrigen Auflösungen.

**Cost-Optimierungs-Strategien:**

1. **Bilder vor dem API-Aufruf skalieren** — auf die minimale notwendige Auflösung. Ein 4000×3000px-Scan für Tabellen-Extraktion kann auf 1500×1125px reduziert werden ohne Qualitätsverlust. Spart 4-8× Token-Cost.

2. **JPEG statt PNG** — kleinere Dateigröße, keine Qualitätseinbuße für Analyse (außer bei Text-in-Bild).

3. **Lokale OSS-Modelle für hohe Volumina** — Llama 3.2 Vision oder Qwen-VL lokal: keine per-API-Cost, nur Hardware. Ab ~10.000 Bilder/Monat oft günstiger als Cloud.

4. **Caching** — wenn dasselbe Bild mehrfach analysiert wird, Ergebnis cachen.

**Latenz:**
- Cloud-APIs (Claude, GPT-5): 1-5 Sekunden für ein Bild.
- Lokale OSS-Modelle auf Consumer-GPU (RTX 4090): 2-10 Sekunden.
- Nicht für Real-Time-Anwendungen geeignet — klassische CV (YOLO, TensorRT) für <100ms.

**Vergleichs-Tabelle (Schätzwerte Mai 2026):**

| Modell | Input-Cost (ca.) | Latenz | Qualität |
|--------|-----------------|--------|---------|
| Claude Sonnet 4.6 | ~$0.003/Bild | 1-3s | Sehr hoch |
| GPT-5 (high-detail) | ~$0.004/Bild | 1-4s | Sehr hoch |
| Gemini 3.1 Pro | ~$0.002/Bild | 1-3s | Sehr hoch |
| Qwen-VL (lokal) | Hardware-Cost | 2-10s | Hoch |

*Preise sind Schätzwerte und ändern sich regelmäßig.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📊 Vergleich | [LLM Stats — Multimodal Pricing](https://llm-stats.com) | Aktueller Modell-Preisvergleich |
| 🌐 Docs | [Anthropic — Image Token Calculation](https://docs.claude.com/en/docs/build-with-claude/vision) | Wie Claude Bilder berechnet |

## Teste dein Verständnis

- [ ] Warum ist ein hochauflösendes Bild teurer als ein niedrig aufgelöstes in der API?
- [ ] Was ist die günstigste Strategie für 100.000 Bilder/Monat — Cloud oder lokal?
- [ ] Welche zwei einfachen Maßnahmen reduzieren Bild-API-Kosten sofort?
- [ ] Für welche Use-Cases ist die API-Latenz (1-5s) ein Problem — und wie löst man das?
