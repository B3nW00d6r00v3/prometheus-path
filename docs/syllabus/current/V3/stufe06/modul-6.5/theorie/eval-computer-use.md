---
title: "Eval für Computer-Use-Agents"
module: "6.5"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Eval für Computer-Use-Agents

## Kernidee

Computer-Use-Eval ist eine eigene Disziplin und unterscheidet sich von API-Eval und Trajectory-Eval: du bewertest nicht nur, ob die Aufgabe gelöst wurde, sondern auch Robustheit gegen UI-Änderungen und Safety-Rate (wie oft führt der Agent destruktive Aktionen ohne Confirmation aus). Standardisierte Benchmarks existieren erst in früher Form.

## Im Detail

**Die drei Kern-Metriken für Computer-Use-Eval:**

**1. Task Success Rate:**
- Boolean: wurde die Aufgabe gelöst? (oder Partial-Success-Skala: 0, 0.5, 1.0)
- Mindestens 5 Runs pro Test-Case (LLMs sind stochastisch, Screenshots variieren).
- Median über Runs als Hauptergebnis.

**2. Robustness gegen UI-Änderungen:**
- Wie verhält sich der Agent, wenn ein Button einen Pixel verschoben ist?
- Wenn eine Seite anders geladen wird (Werbe-Banner, Cookies-Modal)?
- Wenn das UI ein Light/Dark-Mode-Wechsel hat?
- Test: nehme bekannte Tasks und verändere das UI leicht. Miss Task Success Rate vorher/nachher.

**3. Safety Rate:**
- Wie oft führt der Agent eine destruktive Aktion (E-Mail senden, Kaufen, Löschen) ohne Confirmation aus?
- Safety Rate = (Runs ohne unerlaubte destruktive Aktion) / (Alle Runs).
- Ziel: Safety Rate = 100% für destruktive Aktionen mit konfiguriertem Confirmation-Step.

**Benchmarks (früher Stand 2026):**
- **OSWorld:** Benchmark für Desktop-Tasks auf echten OS-Environments. Task Success Rate als Hauptmetrik.
- **WebArena:** Benchmark für Browser-Tasks auf realistischen Webseiten.
- Anthropic publiziert eigene Computer-Use-Benchmark-Ergebnisse.

**Praktische Eval-Empfehlung:**
Für Lernprojekte in Stufe 6: 5-10 eigene Test-Cases mit konkreten Tasks, je 3 Runs, manuelle Bewertung von Task Success Rate + beobachtete Failure-Modes. Kein komplexes Eval-Framework nötig.

**Anker zu Querschnitt Eval (`13_querschnitt_eval.md`):**
Computer-Use-Eval ist eine Spezialisierung von Trajectory-Eval aus Modul 6.2, erweitert um visuelle Robustheit und Safety-Rate.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Benchmark | [OSWorld](https://os-world.github.io) | Desktop-Tasks-Benchmark |
| 📖 Benchmark | [WebArena](https://webarena.dev) | Browser-Tasks-Benchmark |

## Teste dein Verständnis

- [ ] Nenne die drei Kern-Metriken für Computer-Use-Eval und erkläre jede in einem Satz.
- [ ] Was ist Robustness gegen UI-Änderungen — und wie testest du sie?
- [ ] Warum ist Safety Rate eine eigene Metrik — die in normalem Trajectory-Eval fehlt?
