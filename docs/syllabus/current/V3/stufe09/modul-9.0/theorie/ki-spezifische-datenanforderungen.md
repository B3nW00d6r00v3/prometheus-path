---
title: "KI-spezifische Datenanforderungen"
module: "9.0"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# KI-spezifische Datenanforderungen

## Kernidee

KI-Use-Cases stellen Anforderungen an Daten, die über klassisches BI-Reporting weit hinausgehen. Wer nur an Tabellen und Reports denkt, unterschätzt systematisch, was RAG, Fine-Tuning und Embedding-Pipelines an Daten-Infrastruktur voraussetzen.

## Im Detail

Fünf KI-spezifische Datenanforderungen, die über BI hinausgehen:

1. **Trainingsdaten-Qualität** — Labeling-Konsistenz, Bias-Awareness, Repräsentativität. Schlechte Labels erzeugen konfidente falsche Modelle.
2. **Vector-Stores** — für RAG-Systeme (Modul 5.1) braucht man Infrastruktur für Embeddings: Daten müssen in Vektoren überführt und durchsuchbar gespeichert werden.
3. **Embedding-Pipeline-Stabilität** — was passiert, wenn das Embedding-Modell wechselt? Alle Dokumente müssen neu eingebettet werden. Diese Kosten und Ausfallzeiten müssen eingeplant sein.
4. **Synthetic Data als Augmentation** — wenn echte Daten rar sind, können synthetische Daten ergänzen. Aber: synthetisch ersetzt nicht echte Daten in jeder Domäne.
5. **Data-for-Eval** — Test-Sets, die nicht im Training waren, sind essenziell für valide Evaluation. Ohne dedizierte Eval-Daten ist kein verlässliches Qualitäts-Urteil möglich.

**Wichtig:** Diese Anforderungen müssen in der Datenstrategie antizipiert werden — nicht erst beim Piloten.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Artikel | [BCG — Data for AI](https://www.bcg.com) | Business-Perspektive auf KI-Datenanforderungen |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Trainingsdaten und Eval-Daten — und warum dürfen sie sich nicht überlappen?
- [ ] Welche Konsequenzen hat ein Embedding-Modell-Wechsel für eine bestehende RAG-Pipeline?
- [ ] Nenne zwei Szenarien, in denen synthetische Daten sinnvoll sind, und zwei, in denen sie nicht ausreichen.
