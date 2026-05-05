---
title: "Anti-Patterns in Datenstrategie"
module: "9.0"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Anti-Patterns in Datenstrategie

## Kernidee

Die häufigsten Datenstrategie-Fehler folgen erkennbaren Mustern. Wer sie kennt, kann sie erkennen — bevor sechs Monate Projektarbeit an schlechten Daten scheitern. Diese Liste ist empirisch, nicht theoretisch: jedes Muster hat ein reales Projekt-Scheitern hinter sich.

## Im Detail

**1. "Wir haben viele Daten" ohne Qualitätsprüfung**: Volumen ohne Qualität ist Müll. Zehn Terabytes an schlecht gelabelten, inkonsistenten oder veralteten Daten sind für KI oft wertloser als 100 Gigabytes an sauberen, konsistenten Daten. Menge ist nicht gleich Wert.

**2. KI-Use-Case ohne Daten-Audit**: Der häufigste Use-Case-Killer 2024-2026. Der Use-Case klingt gut, sechs Monate nach Projektstart stellt sich heraus, dass die Daten zu schlecht, zu wenig oder DSGVO-inkompatibel sind. Modul 9.0 kommt daher **vor** Modul 9.1.

**3. Vendor-Tunnelvision**: Alle Daten in einem Cloud-Anbieter ohne Lock-in-Awareness. Entscheidung, die heute kosteneffizient klingt, wird in drei Jahren zum teuren Problem.

**4. Data-Lake-as-Trash-Can**: Alles in den Data Lake kippen, niemand findet danach was. Ohne Governance (Ownership, Catalog, Lineage) ist ein Data Lake wertlos. Nicht selten: Organisationen haben Terabytes an Daten, können aber für keinen Use-Case die richtigen Daten in akzeptabler Zeit finden.

**5. Synthetic-Data-Wishful-Thinking**: "Wir können fehlende Daten einfach synthetisch generieren." Synthetische Daten sind eine Ergänzung, kein Ersatz für echte Daten — besonders in Domänen mit physikalischen Constraints (Medizin, Materialwissenschaft, Finanz-Risiko).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [HBR — Why Data Projects Fail](https://hbr.org) | Empirische Perspektive auf Daten-Projekt-Scheitern |

## Teste dein Verständnis

- [ ] Welches dieser Anti-Patterns findest du am ehesten in deiner Organisation?
- [ ] Hattest du schon einmal ein Projekt, das an Daten-Qualität gescheitert ist?
- [ ] Wie würdest du ein "Daten-Audit" für einen konkreten KI-Use-Case aufsetzen?
