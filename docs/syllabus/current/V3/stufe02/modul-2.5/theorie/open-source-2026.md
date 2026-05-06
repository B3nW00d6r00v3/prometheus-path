---
title: "Modell-Landschaft 2026 — Open-Source"
module: "2.5"
type: theorie
fast_track: false
effort: "10min"
stability: live
expires: "2026-08"
---

# Modell-Landschaft 2026 — Open-Source

## Kernidee

Open-Source-Modelle sind 2026 keine "Budget-Version" mehr — sie haben in vielen Tasks Frontier-Niveau erreicht. Llama 4, Qwen 3, Gemma 4 und DeepSeek V3/R1 sind ernstzunehmende Alternativen, die lokal laufen, angepasst werden können und keine laufenden Token-Kosten verursachen. Der Trade-off: Du brauchst eigene Hardware (oder mietest GPU-Infrastruktur) und technisches Know-how.

## Im Detail

### Die wichtigsten Open-Source-Modell-Familien

**Meta — Llama 4 (Scout / Maverick / Behemoth)**

- Metas Flaggschiff-OSS-Reihe, 2025 veröffentlicht. Mehrere Größen von 8B bis 405B+ Parameter.
- **Scout** (kleiner, schnell): Ideal für Edge-Deployment und schnelle Inferenz.
- **Maverick** (mittel): Allrounder für die meisten Aufgaben.
- **Behemoth** (groß): Frontier-Qualität bei Reasoning und Code.
- Lizenz: Llama Community License (kommerziell nutzbar mit Einschränkungen für >700M Nutzer).
- **Stärke:** Breitestes Ökosystem, beste Tool-Unterstützung (Ollama, vLLM, TGI), starke Community.
- **Schwäche:** Lizenz ist nicht "echtes" Open Source (OSI-Definition), sondern Source-Available.

**Alibaba — Qwen 3 (0.6B bis 235B)**

- Chinesischer Anbieter, aber die Modelle sind vollständig offen (Apache 2.0 Lizenz).
- **Stärke:** Besonders stark in Code-Generierung und mehrsprachigen Aufgaben (Chinesisch, Englisch, Deutsch). Qwen 3 Coder ist eines der besten OSS-Code-Modelle.
- **Schwäche:** Community kleiner als Llama. Chinesischer Anbieter — für manche Nutzer ein Vertrauensthema.

**Google — Gemma 3 / Gemma 4**

- Googles OSS-Modell-Reihe. Apache 2.0 Lizenz (die offenste der großen Anbieter).
- **Stärke:** Gute deutsche Sprachqualität, effizientes Training, läuft auf Consumer-Hardware (2B/4B/9B Varianten). Gemma 4 ist für seine Größe beeindruckend leistungsfähig.
- **Schwäche:** Kleinere Modelle können bei komplexem Reasoning nicht mit Llama 4 Behemoth mithalten.

**DeepSeek — V3 / R1**

- **DeepSeek V3:** Starkes Chat-Modell, MoE-Architektur (Mixture of Experts), effizient bei Inferenz.
- **DeepSeek R1:** Das OSS-Reasoning-Modell. MIT-Lizenz. Hat demonstriert, dass Reasoning-Fähigkeiten nicht nur Closed-Source-Modellen vorbehalten sind.
- **Stärke:** Reasoning (R1), Mathematik, Code. Extrem kosteneffizient durch MoE-Architektur.
- **Schwäche:** Zensur bei politisch sensiblen Themen (China-bezogen). Web-Interface weniger poliert.

**Mistral — Mistral 3 OSS / Pixtral**

- Europäischer Anbieter (Frankreich). Apache 2.0 Lizenz für OSS-Varianten.
- **Stärke:** EU-Compliance, DSGVO-freundlich. Pixtral für Vision-Aufgaben.
- **Schwäche:** Kleinere Community als Llama oder Qwen.

### Vorteile von Open Source

- **Keine Token-Kosten:** Einmal Hardware bereitstellen, dann unbegrenzt nutzen
- **Datensouveränität:** Daten verlassen nie deinen Server — DSGVO-ideal
- **Fine-Tuning möglich:** Modelle an deine spezifische Domäne anpassen
- **Keine Vendor-Abhängigkeit:** Kein Anbieter kann den Dienst einstellen oder die Preise erhöhen
- **Transparenz:** Du kannst (theoretisch) nachvollziehen, was das Modell tut

### Nachteile von Open Source

- **Hardware-Bedarf:** Selbst ein 7B-Modell braucht eine ordentliche GPU (8-16 GB VRAM). Größere Modelle brauchen teure Hardware oder Cloud-GPUs.
- **Weniger regelmäßige Updates:** Closed-Source-Modelle werden kontinuierlich verbessert; OSS-Releases kommen in Sprüngen
- **Community- statt Enterprise-Support:** Kein SLA, kein Support-Ticket — du bist auf Community-Hilfe angewiesen
- **Tooling-Overhead:** Du musst Ollama/vLLM/TGI selbst aufsetzen und warten

### Lokal ausprobieren mit Ollama

Der einfachste Weg, OSS-Modelle lokal zu testen: [Ollama](https://ollama.com) installieren und `ollama run llama3.2:3b` oder `ollama run qwen3:7b` ausführen. In unter 5 Minuten hast du ein lokales LLM laufen — ohne Cloud, ohne API-Key, ohne Kosten.

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Hugging Face Model Hub](https://huggingface.co/models) | Alle OSS-Modelle |
| :hammer_and_wrench: | [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) | Benchmark-Vergleich |
| :hammer_and_wrench: | [Ollama](https://ollama.com) | Einfachster Weg, OSS-Modelle lokal zu nutzen |

## Teste dein Verständnis

- [ ] Kannst du fünf große Open-Source-Modell-Familien 2026 benennen und ihre Stärken beschreiben?
- [ ] Verstehst du die Trade-offs zwischen OSS und Closed-Source (Kosten, Qualität, Aufwand)?
- [ ] Weißt du, wie du ein OSS-Modell lokal mit Ollama starten kannst?
- [ ] Kannst du erklären, warum DeepSeek R1 ein Meilenstein für Open-Source-Reasoning war?
