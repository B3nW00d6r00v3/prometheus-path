---
title: "Stochastik: dasselbe Prompt — unterschiedliche Antworten"
module: "2.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Stochastik: dasselbe Prompt — unterschiedliche Antworten

## Kernidee

Stell dir einen Würfel mit gewichteten Seiten vor: Die wahrscheinlichste Seite kommt am häufigsten, aber nicht immer. Temperature ist wie ein Regler, der den Würfel "fairer" oder "unfairer" macht. Temperature=0 nimmt fast immer die wahrscheinlichste Seite, Temperature=1 lässt auch ungewöhnlichere Seiten zu — das macht die Antworten kreativer, aber weniger vorhersagbar.

## Im Detail

Temperature und Top-p kontrollieren die Varianz der Antworten. Temperature=0 ist nahe deterministisch (fast immer dieselbe Antwort), Temperature=1 ist kreativ und variabel. Das hat direkte Konsequenzen für Eval: Wenn du denselben Prompt zweimal sendest und unterschiedliche Antworten bekommst, ist das kein Bug — es ist Stochastik. Für reproduzierbare Ergebnisse (z.B. in Tests oder Evaluationen) brauchst du niedrige Temperature oder mehrfache Durchläufe.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Temperature and Top-p](https://platform.openai.com/docs/guides/text-generation) | Offizielle Erklärung der Parameter |

## Teste dein Verständnis

- [ ] Kannst du erklären, was Temperature=0 vs. Temperature=1 bewirkt?
- [ ] Verstehst du, warum Stochastik für Evaluationen ein Problem darstellt?
