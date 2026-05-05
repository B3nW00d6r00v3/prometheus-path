---
title: "Axolotl — High-Level-Wrapper"
module: "10.2"
type: theorie
fast_track: false
effort: "10min"
stability: yellow
---

# Axolotl — High-Level-Wrapper

## Kernidee

Axolotl ist ein Config-File-getriebener Fine-Tuning-Wrapper über TRL und PEFT — statt Code schreibst du eine YAML-Datei, die das gesamte Training konfiguriert. Das spart Zeit für Standard-Fine-Tuning-Runs und reduziert Fehler, opfert aber Flexibilität für Nicht-Standard-Setups.

## Im Detail

**Wie Axolotl funktioniert:**
- Du schreibst eine `config.yml` mit Modell, Datensatz, Methode (SFT/DPO/ORPO), LoRA-Settings, Hyperparametern
- Axolotl übersetzt das automatisch in TRL/PEFT-Code und startet das Training
- Logging, Checkpointing, Multi-GPU-Setup automatisch konfiguriert

**Beispiel-Config (vereinfacht):**
```yaml
base_model: unsloth/Qwen2.5-7B-Instruct
model_type: AutoModelForCausalLM
datasets:
  - path: mein_datensatz
    type: alpaca
load_in_4bit: true
adapter: lora
lora_r: 16
lora_alpha: 32
output_dir: ./output
```

**Wann Axolotl vs. TRL direkt:**
- **Axolotl**: Standard-Fine-Tuning-Runs, schneller Start, weniger Boilerplate
- **TRL direkt**: wenn du benutzerdefinierten Loss, Custom-Data-Loading, ungewöhnliche Methoden brauchst

*Verfallsdatum: Nov 2026 — API kann sich ändern.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Repo | [Axolotl GitHub](https://github.com/axolotl-ai-cloud/axolotl) | Quellcode und Dokumentation |
| 🍳 Beispiele | [Axolotl Config-Beispiele](https://github.com/axolotl-ai-cloud/axolotl/tree/main/examples) | Referenz-Configs |

## Teste dein Verständnis

- [ ] Was ist der Hauptvorteil von Axolotl gegenüber TRL direkt?
- [ ] In welchem Fall solltest du TRL direkt statt Axolotl verwenden?
- [ ] Was konfiguriert man in einer Axolotl-YAML-Datei?
