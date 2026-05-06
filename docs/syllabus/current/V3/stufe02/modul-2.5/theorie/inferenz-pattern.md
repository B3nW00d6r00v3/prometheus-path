---
title: "Inferenz-Pattern auf hoher Ebene"
module: "2.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Inferenz-Pattern auf hoher Ebene

## Kernidee

Reasoning-Modelle haben verschiedene Strategien, wie sie "denken". Manche denken einfach länger (Chain-of-Thought intern), manche probieren mehrere Wege und wählen den besten (Self-Consistency), manche durchsuchen einen Baum von Möglichkeiten (Tree-Search). Claude Opus 4.7 hat eine Sonderform: Es entscheidet selbst, ob und wie viel Denken nötig ist (Adaptive Thinking). Die Strategie beeinflusst Qualität, Kosten und Latenz.

## Im Detail

### Die fünf wichtigsten Inferenz-Patterns

**1. Chain-of-Thought intern (Standard)**

Das Modell generiert automatisch eine Kette von Reasoning-Tokens, bevor es die eigentliche Antwort produziert. Die Thinking-Tokens sind der sichtbare (oder unsichtbare) Denkprozess.

- **Wie es funktioniert:** Das Modell "spricht mit sich selbst" — es formuliert Hypothesen, prüft sie, verwirft falsche Ansätze und konvergiert auf eine Antwort.
- **Analogie:** Laut denken beim Problemlösen. "Okay, also wenn X gilt, dann folgt Y, aber was ist mit Z? Nein, Z passt nicht, also muss es W sein..."
- **Genutzt von:** Alle Reasoning-Modelle (o3, Claude Thinking, R1, QwQ) als Basis-Pattern.

**2. Self-Consistency-Sampling**

Mehrere Reasoning-Pfade werden unabhängig generiert, und das häufigste Ergebnis wird als Antwort genommen (Mehrheits-Votum).

- **Wie es funktioniert:** Das Modell löst die Aufgabe 5-10 mal. Wenn 7 von 10 Durchläufen "42" als Antwort geben, ist "42" wahrscheinlich korrekt — auch wenn 3 Durchläufe andere Antworten geben.
- **Analogie:** Eine Jury statt eines einzelnen Richters. Die Mehrheit entscheidet.
- **Trade-off:** Höhere Accuracy, aber N-facher Compute. Lohnt sich bei Aufgaben, wo Korrektheit kritisch ist (Mathematik, formale Logik).

**3. Best-of-N mit Verifier**

N Antworten werden generiert, und ein separates Modell (Verifier) wählt die beste aus.

- **Wie es funktioniert:** Das Reasoning-Modell generiert 5 Antworten. Ein Verifier-Modell (oft ein PRM — Process Reward Model) bewertet jeden Reasoning-Pfad und wählt den besten.
- **Analogie:** Fünf Bewerbungen schreiben und einen Lektor die beste aussuchen lassen.
- **Trade-off:** Sehr hohe Qualität, aber aufwändig (N Generierungen + Verifier-Aufruf).

**4. Tree-Search-Inference**

Systematisches Durchsuchen eines Baums von Reasoning-Schritten, ähnlich wie Schach-Engines Zugmöglichkeiten durchrechnen.

- **Wie es funktioniert:** Bei jedem Reasoning-Schritt werden mehrere Optionen generiert. Vielversprechende Pfade werden weiterverfolgt, unpromising Pfade abgebrochen. Das Modell "sieht" mehrere Schritte voraus.
- **Analogie:** Schach-Engine (Stockfish/AlphaZero), die den Spielbaum durchsucht.
- **Trade-off:** Potenziell beste Qualität, aber exponentiell teuer bei großem Suchraum.

**5. Adaptive Thinking (Claude Opus 4.7)**

Das Modell entscheidet pro Anfrage selbst, ob und wie viel Reasoning sinnvoll ist.

- **Wie es funktioniert:** Bei "Was ist die Hauptstadt von Frankreich?" denkt es nicht (oder kaum). Bei "Beweise, dass es unendlich viele Primzahlen gibt" denkt es ausführlich. Das Modell hat gelernt, seinen eigenen Compute-Bedarf einzuschätzen.
- **Analogie:** Ein erfahrener Handwerker, der weiß, wann er nachdenken muss und wann er sofort loslegen kann.
- **Besonderheit:** Spart Kosten bei einfachen Aufgaben, liefert Qualität bei schweren. Der Nutzer steuert nur das maximale Budget.

### Welches Pattern nutzt welches Modell?

Die meisten Modelle nutzen intern Kombinationen dieser Patterns. Als Nutzer musst du die Details nicht kennen — aber das Bewusstsein hilft dir, Kosten und Qualität besser einzuschätzen.

| Modell | Primäres Pattern |
|--------|-----------------|
| o3 | CoT intern + vermutlich Tree-Search bei hohem Effort |
| Claude Opus 4.7 | CoT intern + Adaptive Thinking |
| Claude Sonnet 4.6 + Thinking | CoT intern |
| DeepSeek R1 | CoT intern (sichtbar) |
| Qwen QwQ | CoT intern (sichtbar) |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Inferenz bei o-Modellen |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Adaptive Thinking bei Claude |
| :book: | [Wang et al. — Self-Consistency (2022)](https://arxiv.org/abs/2203.11171) | Akademisches Paper zu Self-Consistency |

## Teste dein Verständnis

- [ ] Kannst du die fünf Inferenz-Patterns benennen und jeweils in einem Satz beschreiben?
- [ ] Was ist das Besondere an Adaptive Thinking bei Claude Opus 4.7?
- [ ] Kannst du erklären, warum Self-Consistency-Sampling teurer, aber genauer ist?
- [ ] Verstehst du die Analogie zwischen Tree-Search-Inference und Schach-Engines?
