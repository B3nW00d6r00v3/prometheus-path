---
title: "Inferenz-Patterns: CoT, Self-Consistency, Tree-Search"
module: "7.5"
type: theorie
fast_track: false
effort: "20min"
stability: green
---

# Inferenz-Patterns: CoT, Self-Consistency, Tree-Search

## Kernidee

Reasoning-Modelle nutzen mehrere Inferenz-Strategien, um die Qualität ihrer Antworten zu verbessern: interne Chain-of-Thought, Self-Consistency-Sampling (mehrere Pfade, Mehrheitsvotum), Best-of-N mit Verifier, und Tree-Search-Inferenz. Jede Strategie hat ein eigenes Cost-Qualitäts-Profil.

## Im Detail

**Chain-of-Thought intern:**

Bei Reasoning-Modellen passiert CoT eingebaut — die Thinking-Tokens sind die interne CoT. Im Gegensatz zu Standard-LLMs, wo CoT per Prompt erzeugt wird ("Let's think step by step"), macht ein Reasoning-Modell das automatisch. **Anti-Pattern:** CoT explizit per Prompt zu erzwingen bei Reasoning-Modellen kann die Qualität verschlechtern, weil das Modell dann zweifach "denkt".

**Self-Consistency-Sampling:**

```
Eingabe → [Output 1] [Output 2] ... [Output N] → Mehrheitsvotum
```

N verschiedene Reasoning-Pfade generieren, dann die häufigste Antwort wählen (Majority Voting). Funktioniert für: Mathe (eindeutige Antworten), Multiple-Choice, Code-Aufgaben. Cost: N× höher als einmaliges Sampling. Typisch N=5-20.

**Best-of-N mit Verifier:**

```
Eingabe → [Output 1] ... [Output N] → Verifier bewertet → Beste Antwort
```

N Outputs generieren, Verifier (PRM oder ORM) wählt die beste. Besser als Mehrheitsvotum, weil der Verifier Qualität bewertet statt nur zu zählen. Braucht trainiertes Verifier-Modell.

**Tree-Search-Inferenz:**

Analog zu Monte Carlo Tree Search (MCTS) in AlphaGo: der Reasoning-Prozess wird als Baum modelliert. An jedem Schritt werden mehrere Fortsetzungen evaluiert, die vielversprechendsten weiter verfolgt. Sehr teuer, aber theoretisch höchste Qualität. OpenAI nutzt Varianten davon für o3.

**Adaptive Thinking (Claude Opus 4.7):**

Das Modell entscheidet selbst, wieviel Thinking für die Anfrage nötig ist. Einfache Fragen → wenig Thinking. Komplexe → viel Thinking. Automatisches Cost-Management ohne manuelle Effort-Einstellung.

**Cost-Vergleich:**

| Pattern | Cost (relativ) | Qualitätszugewinn |
|---------|---------------|------------------|
| Standard (1 Sample) | 1× | Baseline |
| Self-Consistency (N=10) | 10× | +5-15% auf harten Tasks |
| Best-of-N + Verifier | N×+Verifier | +10-20% |
| Tree-Search | 50-1000× | +20-30% |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [Self-Consistency improves Chain of Thought (Wang et al.)](https://arxiv.org/abs/2203.11171) | Original Self-Consistency-Paper |
| 📄 Paper | [Scaling LLM Test-Time Compute (Google DeepMind)](https://arxiv.org/abs/2408.03314) | Systematischer Vergleich der Inferenz-Strategien |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen interner CoT (Reasoning-Modell) und explizitem CoT-Prompting?
- [ ] Wie funktioniert Self-Consistency-Sampling — was ist das "Mehrheitsvotum"?
- [ ] Warum ist Best-of-N mit Verifier besser als einfaches Mehrheitsvotum?
- [ ] Welches Inferenz-Pattern hat die höchste Cost — und wann rechtfertigt sich das?
