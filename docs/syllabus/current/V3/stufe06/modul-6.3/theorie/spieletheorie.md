---
title: "Spieletheorie und Multi-Agent-Theorie"
module: "6.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Spieletheorie und Multi-Agent-Theorie

## Kernidee

Wenn mehrere Agents interagieren, reicht die Einzelagenten-Theorie (MDP) nicht mehr: die optimale Strategie eines Agents hängt jetzt von den Strategien der anderen ab. Spieletheorie formalisiert diese Abhängigkeit. Nash-Gleichgewicht, kooperative vs. kompetitive Spiele und Mechanism Design sind die wichtigsten Konzepte für Multi-Agent-Systeme.

## Im Detail

**Nash-Gleichgewicht:**
Ein Strategieprofil (ein Strategie-Satz für alle Spieler) ist ein Nash-Gleichgewicht, wenn kein Spieler durch einseitigen Wechsel seiner Strategie besser dastehen kann. Klassisches Beispiel: Gefangenendilemma.

- Nicht immer Pareto-optimal: im Gefangenendilemma wählen beide Spieler die dominante Strategie (Gestehen) und landen schlechter als bei Kooperation (Schweigen).
- Relevant für LLM-Agenten: wenn zwei Agents dieselbe Ressource konkurrieren, kann Nash-Denken helfen, stabile Gleichgewichte zu finden.

**Kooperative vs. Kompetitive Spiele:**
- **Kooperativ (Zero-Sum = nein):** Agents können gemeinsam besser abschneiden als einzeln. Beispiel: Forschungs-Pipeline mit Researcher + Writer + Reviewer — alle Agents haben dasselbe Ziel.
- **Kompetitiv (Zero-Sum):** was einer gewinnt, verliert der andere. Beispiel: Auktionen, Schach.
- Die meisten LLM-Multi-Agent-Systeme sind kooperativ — aber Koordinations-Probleme entstehen trotzdem.

**Mechanism Design (Reverse Game Theory):**
Statt eines gegebenen Spiels zu analysieren: wie designt man Regeln/Anreize, sodass rationale Agenten sich wie gewünscht verhalten? Relevant für Multi-Agent-Orchestrierung.

**Relevanz für LLM-Agenten 2026:**
- Peer-Swarm-Patterns (Modul 6.6): ohne Coordinator können Agenten in unerwünschte Nash-Gleichgewichte verfallen.
- Debate als Eval-Methode: zwei LLMs debattieren, das "Publikum" (drittes LLM) entscheidet — Game-Theoretisches Setting.
- Auction-basiertes Tool-Routing: welcher Sub-Agent bekommt welche Ressource?

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🎓 Kurs | [Stanford CS234 — Reinforcement Learning](https://web.stanford.edu/class/cs234/) | Multi-Agent RL-Kapitel |
| 🎓 Kurs | [Stanford CS221 — AI: Principles](https://stanford-cs221.github.io) | Game Theory Einheit |

## Teste dein Verständnis

- [ ] Erkläre Nash-Gleichgewicht anhand des Gefangenendilemmas.
- [ ] Warum sind die meisten LLM-Multi-Agent-Systeme kooperativ, nicht kompetitiv?
- [ ] Was ist Mechanism Design — und wie ist es die "Umkehrung" klassischer Spieletheorie?
