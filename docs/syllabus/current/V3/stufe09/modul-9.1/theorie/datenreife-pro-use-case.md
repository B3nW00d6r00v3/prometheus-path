---
title: "Datenreife pro Use-Case bewerten"
module: "9.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Datenreife pro Use-Case bewerten

## Kernidee

Der häufigste Use-Case-Killer 2024-2026 ist nicht die Technik, sondern fehlende oder schlechte Daten. Jeder Use-Case muss daher nicht nur auf strategischen Fit, sondern auf Daten-Realität geprüft werden — bevor Ressourcen investiert werden.

## Im Detail

Fünf Dimensionen der Datenreife-Prüfung pro Use-Case:

1. **Welche Daten sind nötig?** — Eingangsdaten (was fließt in den Use-Case ein?), Trainingsdaten (falls Fine-Tuning geplant), Ground-Truth für Eval (wie validiert man Outputs?).

2. **Sind sie vorhanden?** — intern vorhanden, extern kaufbar, synthetisch erzeugbar, oder nicht vorhanden?

3. **In welcher Qualität?** — Reifegrade aus Modul 9.0 anwenden. Stufe 1-2: Use-Case vertagen oder Daten-Foundation-Projekt davor schalten. Stufe 4-5: Use-Case-Ready.

4. **DSGVO-Status?** — Dürfen die Daten für diesen Use-Case verwendet werden? Ist eine DSFA nötig? Besteht eine AVV mit dem LLM-Provider?

5. **Refresh-Cycle?** — wie oft müssen die Daten aktualisiert werden? Täglich (aufwändig), monatlich (mittel), einmalig (einfach). Use-Cases mit hohem Refresh-Bedarf haben höhere laufende Kosten.

**Konsequenz:** Use-Cases ohne ausreichende Datenreife werden in die Roadmap nach hinten verschoben, oder es wird ein Daten-Foundation-Projekt davor geschaltet.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | [9.0: Datenstrategie](../../modul-9.0/index.md) | Foundation für diese Bewertung |

## Teste dein Verständnis

- [ ] Beschreibe für einen Use-Case deiner Wahl alle fünf Dimensionen der Datenreife-Prüfung.
- [ ] Was tust du, wenn ein strategisch wichtiger Use-Case eine Datenreife-Lücke hat?
- [ ] Warum ist der DSGVO-Status eine Datenreife-Dimension und nicht nur eine Compliance-Frage?
