---
title: "Brücke zu Capstone-Wahl"
module: "2.5"
type: theorie
fast_track: true
effort: "5min"
stability: green
expires: null
---

# Brücke zu Capstone-Wahl

## Kernidee

Alles, was du in Block 2.5.5 über Reasoning-Modelle gelernt hast, ist kein Selbstzweck — es bereitet dich auf eine bewusste Entscheidung vor: Braucht mein Capstone-Projekt ein Reasoning-Modell? Wenn dein Capstone "denken" erfordert (mehrstufige Analyse, Code-Debugging, formale Logik), wirst du ein Reasoning-Modell evaluieren müssen. Wenn nicht, sparst du Geld und Latenz mit einem klassischen Modell.

## Im Detail

### Was du aus Block 2.5.5 mitnimmst

Du hast jetzt die Architektur-Awareness, um in späteren Stufen fundierte Entscheidungen zu treffen:

1. **Test-Time-Compute:** Du verstehst die zweite Skalierungs-Achse und weißt, dass mehr Denkzeit nicht automatisch besser ist.
2. **Reasoning-Familie:** Du kennst die wichtigsten Reasoning-Modelle aller großen Anbieter — Closed Source und Open Source.
3. **Trainings-Pattern:** Du weißt, dass Reasoning-Modelle anders trainiert werden (RLHF, GRPO, PRM/ORM) — kein "Standard-LLM mit besserem Prompt".
4. **Inferenz-Pattern:** Du kennst die verschiedenen Denkstrategien (CoT intern, Self-Consistency, Tree-Search, Adaptive Thinking).
5. **Effort-Parameter:** Du weißt, wie du die Denktiefe steuern kannst (`budget_tokens`, `reasoning_effort`).

### Die Capstone-Frage

Wenn du in Stufe 5-6 dein Capstone planst, wirst du auf die Theorie aus diesem Block zurückkommen und drei Fragen beantworten:

**1. Braucht mein Use-Case Reasoning?**

- Analyse, Debugging, Mathematik, komplexe Entscheidungen → Ja
- Zusammenfassung, Übersetzung, Klassifikation, kreative Texte → Nein

**2. Wenn ja: Welches Modell, welcher Effort-Level?**

- Budget-kritisch: DeepSeek R1 (lokal, OSS, kostenlos)
- Qualitäts-kritisch: Claude Opus 4.7 oder o3
- Balance: Claude Sonnet 4.6 mit Thinking auf Medium

**3. Wie evaluiere ich die Reasoning-Qualität?**

- Output-Eval reicht nicht — Trajectory-Eval einplanen (Modul 6.2)
- A/B-Test: Reasoning-Modell vs. klassisches Modell auf deinem Use Case

### Der Blick voraus

Modul 7.5 vertieft Reasoning-Modelle mit eigenen Praxis-Vergleichen pro Track. Dort wirst du:

- Eigene Reasoning-Benchmarks für deinen Use Case bauen
- Effort-Parameter systematisch optimieren
- Reasoning-Kosten gegen Qualitätsgewinn quantifizieren
- Trajectory-Eval in der Praxis anwenden

**Hier reicht:** Du hast die Architektur-Awareness. Du weißt, dass Reasoning-Modelle existieren, woher sie kommen, und wann sie sich lohnen. Du musst noch keine Entscheidung treffen — aber du bist vorbereitet, wenn es soweit ist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Modul 7.5 — Reasoning-Modelle als Architektur-Familie](../../index.md) | Vertiefung in Stufe 7 |

## Teste dein Verständnis

- [ ] Kannst du beurteilen, ob dein aktueller Use-Case von einem Reasoning-Modell profitieren würde?
- [ ] Weißt du, wo du in der Curriculums-Struktur die Vertiefung findest (Modul 7.5)?
- [ ] Kannst du die drei Capstone-Fragen (Braucht es Reasoning? Welches Modell? Wie evaluieren?) beantworten?
- [ ] Hast du die fünf Kern-Erkenntnisse aus Block 2.5.5 verinnerlicht?
