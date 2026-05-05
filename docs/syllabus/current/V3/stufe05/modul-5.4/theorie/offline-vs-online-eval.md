---
title: "Offline vs. Online Eval"
module: "5.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Offline vs. Online Eval

## Kernidee

Offline-Eval prüft vor dem Deployment mit einem Test-Dataset — schnell, reproduzierbar, automatisierbar. Online-Eval misst in Production mit echten Nutzern — langsamer, aber näher an der Realität. Beide sind nötig, keine ersetzt die andere.

## Im Detail

**Offline-Eval (vor Deployment):**

- Festes Test-Dataset, keine Echtzeit-Nutzerdaten.
- Vollständig automatisierbar: CI-Pipeline, jeder Commit kann evaluiert werden.
- Reproduzierbar: gleiche Inputs, gleiche Conditions, gleiche Metriken.
- **Schwäche:** Test-Dataset kann von Production-Distribution abweichen.

**Online-Eval (in Production):**

- Echte User-Anfragen, echtes Feedback.
- Methoden: explizites Feedback (👍👎), implizites Feedback (Sitzungslänge, Follow-up-Fragen), A/B-Tests.
- Näher an der Realität als jedes Test-Dataset.
- **Schwäche:** Langsamer, schwerer zu interpretieren, Datenschutz-Komplexität.

**Das Zusammenspiel:**

| | Offline | Online |
|---|---|---|
| Wann | Vor Deployment | In Production |
| Daten | Statisches Test-Dataset | Echte User-Anfragen |
| Speed | Schnell (automatisiert) | Langsam (Nutzer-Feedback) |
| Reproduzierbar | Ja | Nein |
| Realistic | Teilweise | Hoch |
| DSGVO-Komplexität | Niedrig | Hoch |

**Für Modul 5.4:** Fokus liegt auf Offline-Eval. Online-Eval und Production-Monitoring sind Querschnitts-Themen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Eugene Yan — Eval-Driven Development](https://eugeneyan.com/writing/evals/) | Gute Erklärung beider Typen |

## Teste dein Verständnis

- [ ] Kannst du in zwei Sätzen den Unterschied zwischen Offline- und Online-Eval erklären?
- [ ] Warum ersetzt Online-Eval nicht Offline-Eval — und umgekehrt?
- [ ] In welchem Schritt des Entwicklungs-Workflows setzt du welchen Eval-Typ ein?
