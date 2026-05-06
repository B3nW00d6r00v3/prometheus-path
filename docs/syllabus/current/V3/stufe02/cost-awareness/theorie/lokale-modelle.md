---
title: "Lokale Modelle: Strom-Cost statt Token-Cost"
module: "cost-awareness"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Lokale Modelle: Strom-Cost statt Token-Cost

## Kernidee

Wenn du ein LLM lokal auf deinem Rechner laufen lässt (z.B. via Ollama), bezahlst du keine Tokens — aber du bezahlst Strom und Hardware-Verschleiß. Das ist wie der Unterschied zwischen Taxi (pro Fahrt bezahlen) und eigenem Auto (Anschaffung + Benzin + Wartung). Für intensives Lernen und Iterieren ist lokal oft die günstigere Option, besonders auf moderner Apple-Silicon-Hardware.

## Überblick: Lokal vs. Cloud

| Aspekt | Lokal (Ollama) | Cloud (API) |
|--------|---------------|-------------|
| Kosten pro Token | $0 | $0,15-$75 pro 1M |
| Hardware-Kosten | Einmalig (vorhandener Laptop reicht oft) | Keine |
| Strom-Kosten | ~0,01-0,05€/Stunde | In Token-Preis enthalten |
| Modellqualität | Gut (7-70B), aber unter Frontier | Frontier verfügbar |
| Datenschutz | 100% lokal, kein Cloud-Transfer | Daten gehen zum Provider |
| Internet nötig? | Nein (nach Download) | Ja |
| Setup-Aufwand | ~10 Minuten (Ollama) | ~5 Minuten (API-Key) |
| Geschwindigkeit | Abhängig von Hardware | Schnell (GPU-Cluster) |

## Im Detail

### Was "kostenlos" wirklich kostet

Lokale Modelle haben keine Token-Kosten, aber andere Kosten:

**Strom:**
- Apple M1/M2/M3/M4: ~10-30 Watt unter Last → ca. 0,3-1,0 Cent pro Stunde (bei 30 ct/kWh)
- NVIDIA RTX 4070: ~200 Watt unter Last → ca. 6 Cent pro Stunde
- NVIDIA RTX 4090: ~450 Watt unter Last → ca. 13,5 Cent pro Stunde

**Rechenbeispiel:** 4 Stunden intensives Arbeiten mit einem 8B-Modell auf einem MacBook Pro M3:
- Stromverbrauch: ~20 Watt × 4h = 80 Wh = 0,08 kWh
- Kosten: 0,08 × 0,30€ = **2,4 Cent**
- Vergleich Cloud: 200 API-Calls × 1.000 Tokens Input × $3/1M = **$0,60 ≈ 55 Cent** (bei Sonnet)

→ Lokal ist bei intensiver Nutzung über **20x günstiger** (nur Strom gerechnet).

**Hardware-Verschleiß:**
- SSD: Modelle werden von der SSD geladen (7B = ~4 GB, 70B = ~40 GB). Bei SSDs mit 600 TBW Lebensdauer vernachlässigbar.
- GPU/Apple Silicon: Keine beweglichen Teile, Lebensdauer 5-10+ Jahre bei normaler Nutzung.
- Praktisch: Hardware-Verschleiß durch LLM-Nutzung ist vernachlässigbar.

### Welche Hardware für welches Modell

| Modellgröße | RAM-Bedarf (Q4) | Beispiel-Hardware | Tokens/Sekunde |
|-------------|-----------------|-------------------|---------------|
| 3B | 2-3 GB | Jeder Laptop mit 8 GB RAM | 30-60 tok/s |
| 7-8B | 4-5 GB | MacBook Air M1 (8 GB) | 20-40 tok/s |
| 13-14B | 8-10 GB | MacBook Pro M2 (16 GB) | 15-30 tok/s |
| 32-34B | 18-22 GB | MacBook Pro M3 Pro (36 GB) | 10-20 tok/s |
| 70B | 38-42 GB | Mac Studio M2 Ultra (64 GB) | 5-15 tok/s |

*Q4 = 4-Bit-Quantisierung. Volle Präzision (FP16) braucht ~2x mehr RAM.*

**Apple Silicon Vorteil:** Unified Memory bedeutet, dass der gesamte RAM als GPU-Speicher genutzt wird. Ein MacBook Pro mit 36 GB RAM kann ein 32B-Modell laufen lassen — das braucht bei NVIDIA eine GPU mit 24+ GB VRAM (RTX 4090 oder teurer).

### Ollama: In 5 Minuten loslegen

```bash
# 1. Ollama installieren
# macOS/Linux:
curl -fsSL https://ollama.com/install.sh | sh
# Windows: Installer von ollama.com

# 2. Erstes Modell herunterladen + starten
ollama run llama3.2:3b

# 3. Chatten (im Terminal)
>>> Was ist ein LLM?

# 4. Größeres Modell ausprobieren
ollama run qwen3:8b

# 5. Modelle verwalten
ollama list          # Installierte Modelle anzeigen
ollama rm llama3.2   # Modell löschen (Speicher freigeben)
```

**Download-Größen:**
- Llama 3.2 3B: ~2 GB
- Qwen 3 8B: ~5 GB
- Llama 3.3 70B: ~40 GB

### Wann lokal günstiger ist als Cloud

**Lokal gewinnt bei:**
- Intensive Iterationen (hunderte Prompts pro Tag beim Lernen)
- Experimentieren mit verschiedenen Prompt-Varianten
- DSGVO-sensible Daten (Kundendaten, medizinische Texte, Firmeninterna)
- Offline-Verfügbarkeit (Zug, Flugzeug, instabiles Internet)
- Fine-Tuning und Anpassung (nur mit lokalen Modellen möglich)

**Cloud gewinnt bei:**
- Seltene, aber schwere Aufgaben (Frontier-Qualität nötig)
- Wenn lokale Hardware nicht ausreicht (Modelle >70B)
- Wenn Geschwindigkeit kritisch ist (Cloud-GPUs sind schneller als Consumer-Hardware)
- Multimodale Aufgaben (Bild/Video-Verständnis bei lokalen Modellen eingeschränkt)
- Features wie Web-Suche, Code-Interpreter, Extended Thinking

### Break-Even-Rechnung: Lokal vs. Abo

| Szenario | Lokale Kosten (Strom) | Cloud-Alternative | Break-Even |
|----------|----------------------|-------------------|------------|
| Gelegenheitsnutzer (10 Prompts/Tag) | ~1 Cent/Tag | Free-Tier: $0 | Cloud günstiger |
| Lerner (50 Prompts/Tag) | ~3 Cent/Tag | Free-Tier: $0 / Abo: $20/Monat | Free-Tier günstiger, lokal günstiger als Abo |
| Power-User (200 Prompts/Tag) | ~10 Cent/Tag = ~$3/Monat | Abo: $20/Monat, API: $5-$15/Monat | Lokal deutlich günstiger |
| Entwickler (1.000 Calls/Tag) | ~50 Cent/Tag = ~$15/Monat | API: $30-$100+/Monat | Lokal viel günstiger |

**Caveat:** Lokale Modelle sind qualitativ unter Frontier-Modellen. Der Vergleich gilt nur, wenn die lokale Qualität für deine Aufgabe ausreicht.

### Empfehlung für Stufe 2

**Kombination aus beidem:**

1. **Lokal (Ollama)** für tägliches Üben, Prompt-Experimente, Halluzinations-Tests → $0
2. **Cloud Free-Tier** (Google AI Studio, ChatGPT Free, Claude Free) für Frontier-Vergleiche → $0
3. **Cloud API** (Startguthaben) für gezielte Tests mit Frontier-Modellen → $5 einmalig

**Gesamtkosten für Stufe 2: $0 bis $5.** Mehr brauchst du nicht.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Ollama](https://ollama.com) | Lokale LLMs in 5 Minuten — Pflicht-Install |
| :hammer_and_wrench: | [LM Studio](https://lmstudio.ai) | Alternative mit GUI (Download + Chat in einem Tool) |
| :hammer_and_wrench: | [Open WebUI](https://openwebui.com) | ChatGPT-ähnliches Interface für lokale Modelle |
| :book: | [Ollama Model Library](https://ollama.com/library) | Verfügbare Modelle durchstöbern |
| :book: | [Hugging Face GGUF Models](https://huggingface.co/models?sort=trending&search=gguf) | Quantisierte Modelle für lokale Nutzung |

## Teste dein Verständnis

- [ ] Installiere Ollama und lade ein 3B-Modell herunter (`ollama run llama3.2:3b`). Stelle dieselbe Frage an das lokale Modell und an ChatGPT. Wo liegen die Qualitätsunterschiede?
- [ ] Berechne: Du arbeitest 4 Stunden am Tag mit einem lokalen 8B-Modell auf einem MacBook. Was kostet dich der Strom pro Monat (bei 30 ct/kWh)? Vergleiche mit einem $20-Abo.
- [ ] Wann ist ein lokales Modell trotz $0-Token-Kosten die schlechtere Wahl? Nenne drei konkrete Szenarien.
