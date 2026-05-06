---
title: "Trainings-Pattern auf hoher Ebene"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Trainings-Pattern auf hoher Ebene

## Kernidee

Reasoning-Modelle entstehen nicht durch "mehr Daten" oder "größeres Modell". Sie werden mit speziellen Trainingsmethoden beigebracht, den Denkprozess selbst zu optimieren. Es ist wie der Unterschied zwischen einem Schüler, der Fakten auswendig lernt (Standard-LLM), und einem, der lernt, *wie man lernt* (Reasoning-Modell). Vertiefung in Modul 7.5 — hier reicht die Übersicht.

## Im Detail

### Warum Standard-Training nicht reicht

Standard-LLMs werden trainiert, das nächste Token vorherzusagen. Das funktioniert erstaunlich gut für Text-Generierung, Zusammenfassungen und kreative Aufgaben. Aber für echtes Reasoning — mehrstufiges Schließen, Fehler erkennen und korrigieren, verschiedene Lösungswege abwägen — reicht reines Next-Token-Prediction nicht aus.

Reasoning-Modelle brauchen ein Training, das den **Denkprozess selbst** belohnt, nicht nur das Endergebnis.

### Die wichtigsten Trainings-Methoden

**1. RLHF mit Reasoning-Reward**

Standard-RLHF (Reinforcement Learning from Human Feedback) belohnt gute Antworten. Reasoning-RLHF geht einen Schritt weiter: Es belohnt nicht nur gute Antworten, sondern auch gute Denkprozesse. Ein Modell, das zur richtigen Antwort kommt, aber einen fehlerhaften Denkweg hatte, bekommt weniger Belohnung als eines mit sauberem Reasoning.

**2. GRPO (Group Relative Policy Optimization)**

Von DeepSeek R1 bekannt gemacht. Statt ein separates Reward-Modell zu trainieren (wie bei klassischem RLHF), vergleicht GRPO Gruppen von Antworten relativ zueinander:

- Das Modell generiert N verschiedene Antworten auf dieselbe Frage
- Die Antworten werden bewertet (z.B. durch einen Verifier oder Ground-Truth)
- Das Modell wird verstärkt, die besseren Antworten häufiger zu produzieren

Der Vorteil: Kein aufwändiges Reward-Modell nötig. Das hat GRPO zugänglich für kleinere Teams gemacht — ein Grund, warum DeepSeek R1 mit vergleichsweise bescheidenen Ressourcen trainiert werden konnte.

**3. Process-Reward-Models (PRM)**

PRMs belohnen jeden einzelnen Reasoning-Schritt, nicht nur das Endergebnis. Stell dir vor, ein Mathe-Lehrer gibt Punkte für jeden korrekten Zwischenschritt, nicht nur für die Endantwort.

- **Vorteil:** Granulares Feedback, das Modell lernt, welche Schritte gut sind
- **Nachteil:** Aufwändig zu trainieren, weil menschliche Annotatoren jeden Schritt bewerten müssen

**4. Outcome-Reward-Models (ORM)**

ORMs belohnen nur das Endergebnis: richtig oder falsch. Einfacher zu implementieren als PRMs, aber weniger granular. Das Modell lernt, zur richtigen Antwort zu kommen, aber nicht unbedingt den besten Weg dorthin.

### PRM vs. ORM — Die Abwägung

| | PRM (Process) | ORM (Outcome) |
|---|---|---|
| **Belohnt** | Jeden Schritt | Nur das Endergebnis |
| **Analogie** | Mathe-Klausur mit Punkten für Rechenweg | Multiple-Choice-Test |
| **Qualität** | Bessere Reasoning-Chains | Kann zu "richtiges Ergebnis, falscher Weg" führen |
| **Aufwand** | Hoch (Schritt-für-Schritt-Annotation) | Niedrig (nur Endergebnis prüfen) |
| **Genutzt von** | OpenAI (vermutet), Google | DeepSeek R1 (teilweise) |

### Was du mitnehmen solltest

Du musst die technischen Details nicht verstehen — das kommt in Modul 7.5. Hier reicht:

1. **Reasoning-Modelle werden anders trainiert** als Standard-LLMs — es ist nicht "Standard-LLM mit besserem Prompt"
2. **Es gibt verschiedene Trainings-Methoden** (RLHF, GRPO, PRM, ORM) mit unterschiedlichen Trade-offs
3. **GRPO hat Reasoning-Training demokratisiert** — DeepSeek hat gezeigt, dass es auch ohne Milliarden-Budget geht
4. **Der Denkprozess wird trainiert**, nicht nur das Ergebnis

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [DeepSeek R1 Paper](https://arxiv.org/abs/2401.12954) | GRPO im Detail |
| :book: | [OpenAI — Learning to Reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/) | Hintergrund zu Reasoning-Training |
| :book: | [Lightman et al. — Let's Verify Step by Step (2023)](https://arxiv.org/abs/2305.20050) | Process-Reward-Models (OpenAI) |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen PRM und ORM in einem Satz erklären?
- [ ] Verstehst du, warum Reasoning-Modelle anders trainiert werden als Standard-LLMs?
- [ ] Kannst du erklären, was GRPO ist und warum es für Open-Source-Reasoning wichtig war?
- [ ] Weißt du, dass die technische Tiefe in Modul 7.5 kommt und hier die Übersicht reicht?
