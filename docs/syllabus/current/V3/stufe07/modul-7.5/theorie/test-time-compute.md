---
title: "Test-Time-Compute als Skalierungs-Achse"
module: "7.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Test-Time-Compute als Skalierungs-Achse

## Kernidee

Bisher (2018-2024) galt: mehr Training-Compute = bessere Modelle. Seit OpenAI o1 (September 2024) gibt es eine neue Skalierungs-Achse: mehr **Inferenz-Compute** (Thinking-Tokens) = bessere Antworten bei harten Tasks. Das ist eine eigene Paradigma-Verschiebung mit eigener Kosten-Struktur.

## Im Detail

**Die klassische Skalierungs-Achse (Pre-Training):**

Nach der Scaling Law (Chinchilla, Kaplan) gilt: doppelt so viel Training-Compute → konsistente Qualitätsverbesserung. Das Limit: Training ist teuer, langsam, einmalig.

**Die neue Skalierungs-Achse (Test-Time-Compute):**

Statt das Modell größer zu machen: das Modell mehr "denken" lassen. Bei jeder Anfrage können Hunderte bis Tausende von "Thinking-Tokens" generiert werden — interne Rechenschritte, die die Antwort verbessern.

**Was das bedeutet:**
- Ein mittelgroßes Modell mit viel Test-Time-Compute kann ein großes Modell ohne Test-Time-Compute übertreffen — bei bestimmten Aufgaben.
- Die Qualität skaliert (näherungsweise) linear mit der Menge an Inferenz-Compute.
- Das macht Qualität "kaufbar" pro Anfrage statt nur per Training.

**Wann Test-Time-Compute hilft:**
- **Harte Tasks:** Mathematik, Code-Debugging, Multi-Step-Planung, formale Logik.
- **Aufgaben, bei denen Überprüfung einfacher als Generierung:** Beweise verifizieren ist leichter als sie finden — Reasoning-Modelle nutzen das.

**Wann Test-Time-Compute nicht hilft:**
- Einfache Aufgaben (Klassifikation, einfache Zusammenfassungen) — mehr Thinking gibt schlechtere Ergebnisse.
- Faktische Abfragen — das Modell "denkt" sich tiefer in Halluzinationen.
- Real-Time-Anwendungen — Sekunden bis Minuten Latenz unakzeptabel.

**Die Kosten-Struktur:** Thinking-Tokens werden berechnet. Bei o3-High oder Claude Opus 4.7 mit Extended-Thinking können Anfragen 10-100× mehr Token kosten als Standard-Antworten. Deshalb: selektiv einsetzen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📄 Paper | [OpenAI o1 System Card](https://openai.com/index/openai-o1-system-card/) | Einführung des Test-Time-Compute-Paradigmas |
| 🌐 Blog | [Scaling LLM Test-Time Compute (Google DeepMind)](https://arxiv.org/abs/2408.03314) | Formale Analyse der Skalierungs-Achse |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Training-Time-Compute und Test-Time-Compute?
- [ ] Warum hilft mehr Thinking bei Mathe-Aufgaben, aber nicht bei einfachen Klassifikationen?
- [ ] Was bedeutet es, dass "Qualität kaufbar" wird per Anfrage statt per Training?
- [ ] Welche Cost-Konsequenz hat ein Reasoning-Modell mit hohem Effort-Setting?
