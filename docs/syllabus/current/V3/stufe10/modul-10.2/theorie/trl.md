---
title: "TRL — die Standard-Library 2026"
module: "10.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# TRL — die Standard-Library 2026

## Kernidee

TRL (Transformer Reinforcement Learning) von Hugging Face ist die De-facto-Standard-Library für Fine-Tuning 2026. Sie implementiert SFT, DPO, ORPO, GRPO und RLHF/PPO in einer einheitlichen API — du musst keine eigene Trainings-Loop schreiben.

## Im Detail

**Was TRL bietet:**
- **SFTTrainer**: Supervised Fine-Tuning mit einem Datensatz von Prompt-Completion-Paaren
- **DPOTrainer**: Direct Preference Optimization mit chosen/rejected-Pairs
- **ORPOTrainer**: ORPO in einem Schritt
- **GRPOTrainer**: Group Relative Policy Optimization (neu in TRL 0.9+)
- **PPOTrainer**: Klassisches RLHF mit Reward-Modell (selten noch gebraucht)

**Integration mit dem HF-Ökosystem:**
- Direkt kompatibel mit Hugging Face Datasets, Models, Accelerate
- PEFT-Integration: LoRA/DoRA direkt in jedem Trainer aktivierbar
- W&B/MLflow-Logging out-of-the-box

**Typischer SFT-Code-Skeleton:**
```python
from trl import SFTTrainer
from peft import LoraConfig

lora_config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])
trainer = SFTTrainer(
    model=model,
    train_dataset=dataset,
    peft_config=lora_config,
    dataset_text_field="text",
    args=training_args,
)
trainer.train()
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [TRL Dokumentation](https://huggingface.co/docs/trl) | Vollständige API-Referenz |
| 🍳 Cookbook | [TRL Beispiele](https://github.com/huggingface/trl/tree/main/examples) | Praktische Notebooks |

## Teste dein Verständnis

- [ ] Welche Fine-Tuning-Methoden implementiert TRL?
- [ ] Wie aktiviert man LoRA in einem TRL-Trainer?
- [ ] Was ist der Vorteil von TRL gegenüber einer selbst geschriebenen Trainings-Loop?
