---
title: "Was ist ein Neural Network?"
module: "7.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Was ist ein Neural Network?

## Kernidee

Ein Neural Network ist ein Stapel von Schichten, in denen jedes Neuron `output = activation(weights · inputs + bias)` berechnet. Deep Learning bedeutet: mehrere solcher Schichten hintereinander geschaltet. Das Lernen passiert durch Anpassung der Weights via Backpropagation.

## Im Detail

Stell dir ein einfaches Netz vor: Input-Schicht (deine Rohdaten), eine oder mehrere Hidden-Schichten (Transformationen), Output-Schicht (die Vorhersage). Jedes Neuron nimmt alle Werte der Vorgänger-Schicht, multipliziert sie mit gelernten Gewichten (Weights), addiert einen Bias, und wendet eine nicht-lineare Funktion (Activation Function) an.

**Warum "Deep" Learning?** Mit einer einzigen Schicht kann ein Network nur lineare Trennungen lernen — nutzlos für echte Probleme wie Bilderkennung oder Sprachverständnis. Mehrere Schichten erlauben das Lernen hierarchischer Features: erste Schicht lernt Kanten, zweite Schicht Formen, dritte Schicht Objekte.

**Größenordnungen:** Ein kleines Modell (MNIST-Klassifikation) hat vielleicht 100.000 Parameter. GPT-2 hat 117M Parameter. Llama 3.1 8B hat 8 Milliarden Parameter. Die Rechenzeit skaliert mit der Modellgröße.

**Training:** Das Network beginnt mit zufälligen Weights. Es sieht Trainings-Beispiele, berechnet einen Fehler (Loss), und passt die Weights in Richtung weniger Fehler an. Das ist Backpropagation — nach vielen tausend Iterationen (Epochs) lernt das Network, seine Fehler zu minimieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📺 Video-Serie | [3Blue1Brown — Neural Networks Series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) | Pflicht-Vorbereitung, 4 Videos, ~1h |
| 📖 Buch | [d2l.ai — Multilayer Perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/index.html) | Interaktives Lehrbuch mit Code |

## Teste dein Verständnis

- [ ] Kannst du erklären, was ein Neuron berechnet (Formel + Bedeutung)?
- [ ] Was bedeutet "deep" in Deep Learning — warum mehrere Schichten?
- [ ] Kannst du die Größenordnungen einordnen: was ist 8B Parameter grob?
- [ ] Was ist der Unterschied zwischen Training und Inferenz?
