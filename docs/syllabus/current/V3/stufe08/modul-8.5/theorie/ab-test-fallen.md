---
title: "Häufige A/B-Test-Fallen"
module: "8.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Häufige A/B-Test-Fallen

## Kernidee

Schlechte A/B-Tests sind schlimmer als gar keine Tests — sie geben falsche Sicherheit. Die häufigsten Fallen: Peeking (zwischendurch stoppen), Multiple-Testing ohne Korrektur, zu kleine Sample-Size, ignorierte Guardrails, Post-hoc Segment-Auswahl. Ein Experiment mit diesen Fehlern kann eine schlechte Entscheidung "validieren" und sie unumkehrbar machen.

## Im Detail

**Die 7 häufigsten Fallen:**

**1. Peeking und frühes Stoppen**
- Problem: täglich schauen und stoppen, wenn p < 0.05.
- Folge: false-positive Rate steigt auf 30%+.
- Lösung: Sample-Size vorausberechnen, Experiment vollständig laufen lassen.

**2. Multiple Testing ohne Korrektur**
- Problem: 20 Metriken testen, die signifikante verkünden.
- Folge: Erwartetes false positive pro Experiment ≈ 1.
- Lösung: Bonferroni/Holm/FDR je nach Anzahl Tests.

**3. Zu kleine Sample-Size**
- Problem: Experiment startet ohne Power Analysis.
- Folge: "Kein Effekt" bedeutet nur "nicht genug Power", nicht "kein Effekt".
- Lösung: Power Analysis VOR dem Start, mindestens 80% Power.

**4. Ignorierte Guardrail-Metriken**
- Problem: OEC verbessert sich, andere Metriken werden nicht geprüft.
- Folge: lokale Optimierung mit globalem Schaden.
- Lösung: Guardrail-Metriken definieren und automatisch überprüfen.

**5. Post-hoc Segment-Auswahl (HARKing)**
- Problem: nach dem Test alle Segmente durchsuchen, das signifikante verkünden.
- Folge: zufällige Segmentierung wird als "Erkennntnis" vermarktet.
- Lösung: Segmente VOR dem Test definieren und dokumentieren.

**6. Novelty-Effekt**
- Problem: User reagieren auf Neues — Effekt verschwindet nach ein paar Tagen.
- Folge: kurzfristiger Lift sieht toll aus, langfristig kein Effekt.
- Lösung: Experiment lange genug laufen lassen (mindestens ein vollständiger Wochenzyklus).

**7. Confounding durch ungleiche Gruppenzuweisung**
- Problem: zufällig landen mehr Heavy-User in Gruppe B.
- Folge: Gruppe B konvertiert mehr, nicht wegen Treatment.
- Lösung: stratifizierte Randomisierung; Check: sind Gruppen zu Experiment-Start ähnlich?

**Pre-Mortem Checklist:**
```markdown
VOR dem Experiment:
- [ ] OEC vorab definiert und dokumentiert?
- [ ] Guardrail-Metriken definiert?
- [ ] Sample-Size berechnet (Power Analysis)?
- [ ] Maximale Laufzeit definiert?
- [ ] Segmente für Analyse vorab festgelegt?
- [ ] Randomisierungs-Einheit klar (User, Session, Account)?
- [ ] Novelty-Effekt-Risiko eingeschätzt?

NACH dem Experiment:
- [ ] Baseline-Check: waren Gruppen vorab vergleichbar?
- [ ] Multiple-Testing-Korrektur angewendet?
- [ ] Guardrail-Metriken geprüft?
- [ ] Konfidenzintervalle (nicht nur p-Werte) berichtet?
- [ ] Segment-Analyse durchgeführt (nur vorab definierte)?
```

**Rotes Flag: "Daten-Tourismus"**

> "Wir schauen uns die Daten an, um herauszufinden, ob wir einen Test machen sollen."

Das ist Ergebnis-gesteuertes Testen — du siehst einen zufälligen positiven Trend, führst dann den "Test" durch, und confirmest, was du ohnehin erwartet hast.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Trustworthy Online Controlled Experiments — Common Pitfalls](https://experimentguide.com) | Kohavi |
| 📖 Blog | [Ron Kohavi — Surprising results and mistakes](https://exp-platform.com) | Praxis-Erfahrungen |
| 📖 Artikel | [HBR — The Trouble with A/B-Testing](https://hbr.org) | Management-Perspektive |

## Teste dein Verständnis

- [ ] Erkläre in zwei Sätzen, warum Peeking die false-positive Rate inflationiert.
- [ ] Was ist ein Novelty-Effekt und wie erkennst du ihn?
- [ ] Dein Manager fragt dich nach einem Tag: "Sehen wir schon was?" — was sagst du?
- [ ] Warum ist ein A/B-Test mit Methodenfehlern schlimmer als kein Test?
