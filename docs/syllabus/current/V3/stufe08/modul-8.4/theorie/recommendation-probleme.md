---
title: "Recommendation-Probleme"
module: "8.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Recommendation-Probleme

## Kernidee

Ein Recommendation-System löst immer eine von drei Kern-Aufgaben: Top-N-Empfehlungen (was soll ich dem User zeigen?), Rating-Vorhersage (wie würde der User dieses Item bewerten?) oder personalisiertes Ranking (in welcher Reihenfolge soll ich diese Items zeigen?). Die Wahl der Aufgabe bestimmt die Modell-Wahl und die Eval-Metriken.

## Im Detail

**Die drei Kern-Aufgaben:**

**1. Top-N Recommendation**
"Welche 10 Filme könnten User A gefallen?"
- Output: geordnete Liste von N Items.
- Metriken: Precision@K, Recall@K, NDCG@K, Hit Rate.
- Typisch: Netflix-Homepage, Spotify Discover Weekly.

**2. Rating Prediction**
"Wie würde User A den Film B bewerten (1-5 Sterne)?"
- Output: Zahl zwischen 1 und 5.
- Metriken: RMSE, MAE.
- Wurde wichtig durch Netflix Prize (2009) — 1 Million Dollar für 10% RMSE-Verbesserung.
- In der Praxis weniger relevant als Top-N — User bewerten kaum noch alles explizit.

**3. Personalized Ranking / Click-Through Rate Prediction**
"Ordne diese 100 Produkte so, dass User A am wahrscheinlichsten klickt."
- Output: Score pro Item, dann sortiert.
- Metriken: AUC, NDCG, MAP.
- Typisch: Suchergebnis-Ranking, Feed-Ranking bei Social Media.

**Feedback-Typen:**

| Typ | Beispiel | Vorteil | Nachteil |
|-----|---------|---------|---------|
| Explizit | 5-Sterne-Rating | Direktes Signal | Selten, biased (nur Zufriedene bewerten) |
| Implizit | Klicks, Watchtime | Viel Daten | Rauschig (Klick ≠ Gefällt mir) |

**Warum ist RecSys schwierig?**

1. **Sparsität:** Typische User-Item-Matrizen sind 99.9%+ leer.
2. **Cold Start:** Neue User oder Items haben keine Historie.
3. **Filter Bubble:** Empfehlungen verstärken bestehende Präferenzen.
4. **Feedback Loop:** was empfohlen wird, wird häufiger geklickt → beeinflusst künftige Empfehlungen.
5. **Offline ≠ Online:** was in Offline-Eval gut aussieht, muss in Production nicht besser sein.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Konferenz | [RecSys Conference](https://recsys.acm.org) | Wichtigste Konferenz |
| 📖 Buch | [Recommender Systems Handbook](https://link.springer.com/book/10.1007/978-1-0716-2197-4) | Standardreferenz |
| 📖 Kurs | [Google — Recommendation Systems Course](https://developers.google.com/machine-learning/recommendation) | Kostenlos, praxisnah |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Top-N Recommendation und Rating Prediction?
- [ ] Warum ist implizites Feedback trotz Rauschen oft wertvoller als explizites?
- [ ] Was ist eine Filter Bubble und wie entsteht sie durch Empfehlungs-Algorithmen?
- [ ] Warum ist eine User-Item-Rating-Matrix typischerweise >99% leer?
