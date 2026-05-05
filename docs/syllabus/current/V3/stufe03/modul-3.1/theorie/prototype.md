---
title: "KI-spezifische Prototypen"
module: "3.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Prototype: KI-spezifische Prototypen

## Kernidee

Bei KI-Produkten ist der Prototyp oft funktional, nicht nur visuell. Statt eines Click-Dummies kannst du ein echtes KI-Erlebnis simulieren — "Wizard of Oz" mit ChatGPT, oder ein schneller Prototyp mit Vibe-Coding-Tools. Das senkt die Schwelle zum Testen mit echten Nutzern enorm.

## Im Detail

Klassisches Prototyping (Wireframes, Click-Dummies) reicht bei KI-Produkten oft nicht, weil der Kern des Erlebnisses die KI-Interaktion ist. Ein statischer Mockup zeigt nicht, wie sich ein KI-Chat anfühlt.

**KI-spezifische Prototyping-Ansätze:**

- **Wizard of Oz:** Du sitzt hinter den Kulissen und "spielst" die KI. Der Nutzer interagiert mit einem Interface, aber die Antworten kommen von dir (oder von ChatGPT, das du manuell steuerst). Ideal für: Testen, ob die KI-Funktion überhaupt gewünscht ist.

- **ChatGPT/Claude als Prototyp:** Du baust einen Custom GPT oder nutzt System-Prompts, um dein KI-Produkt zu simulieren. Nutzer interagieren direkt. Schnellster Weg zu einem testbaren KI-Erlebnis.

- **Vibe-Coding-Prototyp:** Tools aus Modul 2.6 (Bolt, Lovable, v0) können in Stunden eine funktionale Web-App erzeugen, die eine KI-API anbindet. Nicht produktionsreif, aber testbar.

- **Concierge-Prototyp:** Du lieferst den Service manuell (mit KI-Hilfe), ohne Automatisierung. Ideal für: Validierung, ob der Wert stimmt, bevor du in Technik investierst.

**Wann welcher Prototyp?**

| Prototyp-Typ | Aufwand | Geeignet für |
|---|---|---|
| Wizard of Oz | 1-2h | Konzept-Validierung |
| Custom GPT / System Prompt | 2-4h | Interaktions-Validierung |
| Vibe-Coding (Bolt/Lovable) | 4-8h | Funktionale Validierung |
| Concierge-Service | Laufend | Wert-Validierung |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 | [Wizard of Oz Prototyping](https://en.wikipedia.org/wiki/Wizard_of_Oz_experiment) | Klassische Methode, ideal für KI |
| 📖 | [Nielsen Norman Group — Prototyping](https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/) | Fidelity-Stufen verstehen |

## Teste dein Verständnis

- [ ] Warum reichen statische Mockups bei KI-Produkten oft nicht?
- [ ] Kannst du die vier Prototyping-Ansätze benennen und je ein Beispiel geben?
- [ ] Wann würdest du einen Wizard-of-Oz-Prototyp einem Vibe-Coding-Prototyp vorziehen?
