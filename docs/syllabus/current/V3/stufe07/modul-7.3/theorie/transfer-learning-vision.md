---
title: "Transfer Learning für Vision"
module: "7.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Transfer Learning für Vision

## Kernidee

Transfer Learning nutzt Modelle, die auf riesigen Datensätzen vortrainiert wurden (z.B. ImageNet mit 1,2 Millionen Bildern), als Ausgangspunkt für neue Aufgaben. Statt von Null zu trainieren, fine-tuned man nur die letzten Layer — das spart 10-100× Daten und Rechenzeit.

## Im Detail

**Warum Transfer Learning funktioniert:** In frühen Layern lernen CNNs und ViTs universelle Features: Kanten, Texturen, einfache Formen. Diese sind für fast alle Vision-Aufgaben nützlich. Nur die späten, aufgaben-spezifischen Layer müssen für neue Aufgaben angepasst werden.

**Zwei Haupt-Strategien:**

1. **Feature Extraction:** Den vortrainierten Teil einfrieren (Weights festhalten), nur den neu hinzugefügten Klassifikations-Head trainieren. Schnell, wenig Daten nötig, aber weniger flexibel.

2. **Fine-Tuning:** Den gesamten vortrainierten Teil mit niedrigerer Lernrate mittrainieren. Mehr Daten nötig, aber bessere Anpassung an neue Domäne.

**Wann welche Strategie:**
- **Feature Extraction:** Wenig Daten (<1000 Bilder), ähnliche Domäne zum Pre-Training.
- **Fine-Tuning:** Mehr Daten, neue oder sehr spezifische Domäne (Medizin, Satellit, Mikroskopie).
- **Full Training from Scratch:** Nur bei sehr großen Datasets (>100K Bilder) und sehr spezifischer Domäne sinnvoll.

**PyTorch-Praxis:**
```python
import torchvision.models as models
model = models.resnet50(weights='IMAGENET1K_V1')
# Alle Layer einfrieren
for param in model.parameters():
    param.requires_grad = False
# Neuen Kopf für eigene Klassen
model.fc = nn.Linear(2048, num_classes)
```

**2026-Realität:** Für die meisten Vision-Aufgaben lohnt sich kein Training from scratch mehr. Pre-trained Checkpoints von Hugging Face oder torchvision sind der Standard-Ausgangspunkt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📺 Tutorial | [PyTorch — Transfer Learning Tutorial](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html) | Offizielles Tutorial mit Code |
| 🌐 Modelle | [Hugging Face — Vision Models](https://huggingface.co/models?pipeline_tag=image-classification) | Tausende vortrainierter Modelle |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Feature Extraction und Fine-Tuning?
- [ ] Warum helfen auf ImageNet vortrainierte Features auch für Medizin-Bilder?
- [ ] Wann würdest du ein Modell von Grund auf trainieren statt zu fine-tunen?
- [ ] Wie friert man in PyTorch Layer ein (requires_grad)?
