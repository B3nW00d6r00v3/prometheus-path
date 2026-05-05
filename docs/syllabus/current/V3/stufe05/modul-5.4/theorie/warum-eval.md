---
title: "Warum Eval? Was passiert ohne?"
module: "5.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Warum Eval? Was passiert ohne?

## Kernidee

Ohne Eval merkst du nicht, wenn deine Änderung das System verschlechtert. Eval ist die Grundlage für jede seriöse Optimierung. Ohne Eval ist jede "Verbesserung" ein Bauchgefühl — kein Ergebnis.

## Im Detail

Das Eval-Mindset aus Modul 5.0 gilt hier in voller Tiefe: wer ein RAG-System baut, ohne kontinuierliche Metriken, optimiert im Blindflug.

**Was passiert ohne Eval — konkrete Szenarien:**

1. **Die "Vibe-Improvement"-Falle:** Du änderst den System-Prompt, es "fühlt sich besser an". In Wirklichkeit verschlechtert sich Faithfulness von 0.82 auf 0.71. Du merkst es nicht.

2. **Regressions-Blindheit:** Ein neues Embedding-Modell verbessert Standard-Fragen um 15%, bricht aber Edge Cases. Ohne Eval-Dataset mit Edge Cases siehst du nur den Gewinn, nicht den Verlust.

3. **Cherry-Picked-Demo-Falle:** Du zeigst fünf Erfolgsbeispiele im Review. Das System versagt bei 30% der realen Anfragen. Niemand weiß es.

4. **Optimierungs-Nachweis fehlt:** Du willst einen anderen Chunk-Size testen. Ohne Vorher/Nachher-Metriken kannst du nicht zeigen, ob es besser wurde — auch dir selbst nicht.

**Der Eval-Kreislauf:**

```
Änderung → Eval-Run → Metriken → Entscheidung → Änderung → ...
```

Ohne diesen Kreislauf gibt es keine verlässliche Optimierung, nur zufällige Verbesserungen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel (Pflicht) | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Sollte aus Modul 5.0 bekannt sein |
| 📖 Artikel | [Eugene Yan — Eval-Driven Development](https://eugeneyan.com/writing/evals/) | Praktische Perspektive |

## Teste dein Verständnis

- [ ] Kannst du drei konkrete Szenarien nennen, in denen fehlende Eval zu schlechteren Entscheidungen führt?
- [ ] Was ist der Unterschied zwischen "Vibe-Improvement" und messbarer Verbesserung?
- [ ] Wie würdest du einer nicht-technischen Person erklären, warum Eval notwendig ist?
