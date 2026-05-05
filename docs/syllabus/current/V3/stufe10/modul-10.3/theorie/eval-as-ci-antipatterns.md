---
title: "Anti-Patterns bei Eval-as-CI"
module: "10.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Anti-Patterns bei Eval-as-CI

## Kernidee

Eval-as-CI kann scheitern, ohne dass es jemand merkt — nicht weil das System kaputt ist, sondern weil es schlecht implementiert ist. Sechs konkrete Anti-Patterns verwandeln Eval-as-CI von einer echten Qualitätssicherung in reines Theater.

## Im Detail

**Anti-Pattern 1: Eval-as-CI als Theater**

Eval läuft, niemand schaut auf die Ergebnisse. PR-Checks werden grüngeklickt ohne Analyse.

**Symptom:** Eval-Report wird nie geöffnet. Keine Diskussion über Eval-Ergebnisse in PR-Reviews.

**Lösung:** Eval-Ergebnis muss Teil des PR-Reviews sein — Pflichtfeld in PR-Template: "Eval-Ergebnis analysiert? Verbesserungen/Regressionen erklärt?"

---

**Anti-Pattern 2: Test-Dataset-Stagnation**

Das Test-Dataset wird einmal kuratiert und nie aktualisiert. Neue Fähigkeiten und Edge-Cases werden nicht abgedeckt.

**Symptom:** Alle PRs sind grün, aber User-Beschwerden über neue Fehler häufen sich.

**Lösung:** Alle 3-6 Monate Test-Dataset erweitern. Neue User-Beschwerden direkt in Test-Cases überführen.

---

**Anti-Pattern 3: Single-Run-Eval**

Jeder Test-Case wird nur einmal ausgeführt. Bei stochastischen LLMs ist ein Ergebnis nicht repräsentativ.

**Symptom:** Eval-Ergebnisse schwanken stark zwischen Runs. "Gestern war grün, heute ist rot — wir haben nichts geändert."

**Lösung:** Mindestens 5 Runs pro Test-Case, Aggregation als Mittelwert.

---

**Anti-Pattern 4: Schwellenwerte zu lasch**

20% Regression als "akzeptabel" definiert. Qual-Score kann stark sinken, bevor ein Block ausgelöst wird.

**Symptom:** Eval blockiert nie. Qualität sinkt unbemerkt.

**Lösung:** Hard-Block bei 5% für kritische Metriken. Anfangs streng calibrieren.

---

**Anti-Pattern 5: Schwellenwerte zu strikt**

1% Regression blockiert jeden PR. Entwickler können nichts mehr mergen.

**Symptom:** Eval-as-CI wird aktiv umgangen. Override wird zur Norm. CI wird deaktiviert.

**Lösung:** Schwellenwerte realistisch auf Basis historischer Varianz setzen. 2-Sigma-Bandbreite als Anhaltspunkt.

---

**Anti-Pattern 6: Override-Missbrauch**

Jeder PR wird mit Override-Flag durchgewunken, weil der Fix-Aufwand zu hoch erscheint.

**Symptom:** Override-Rate > 50% aller PRs mit Regressions-Warnung.

**Lösung:** Override-Rate dokumentieren, im Sprint-Review reviewen. Override braucht Reviewer-Approval.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Blog | [Promptfoo Best Practices](https://www.promptfoo.dev/docs) | Empfehlungen aus der Praxis |

## Teste dein Verständnis

- [ ] Was ist "Eval-as-CI als Theater" und wie erkennst du es?
- [ ] Warum ist Single-Run-Eval bei LLMs problematisch?
- [ ] Wie findest du den richtigen Schwellenwert — weder zu lasch noch zu strikt?
