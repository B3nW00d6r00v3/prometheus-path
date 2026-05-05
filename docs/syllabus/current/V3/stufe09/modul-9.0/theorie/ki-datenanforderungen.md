---
title: "KI-spezifische Datenanforderungen"
module: "9.0"
type: theorie
fast_track: false
effort: "15min"
stability: green
---

# KI-spezifische Datenanforderungen

## Kernidee

KI-Systeme haben andere Anforderungen an Daten als klassische BI-Systeme. Ein gut gepflegtes Data Warehouse für Analytics reicht oft nicht aus — KI braucht Trainingsdaten-Qualität, Embedding-Pipeline-Stabilität und dedizierte Eval-Datensätze, die bei klassischen Daten-Projekten schlicht nicht existieren.

## Im Detail

Fünf Anforderungen gehen über klassische BI hinaus:

**1. Trainingsdaten-Qualität**: Bei Fine-Tuning oder Few-Shot-Examples müssen Daten sorgfältig gelabelt sein. Bias-Awareness ist Pflicht — biased Trainingsdaten führen zu biased Outputs (iTutor-Case in Modul 9.7). Automatisiertes Labeling mit LLMs ist möglich, aber erfordert Eval der Labels selbst.

**2. Vector-Stores**: RAG-Systeme (Modul 5.1) speichern Daten als Embeddings in Vector-Datenbanken. Diese brauchen eigene Governance: wer pflegt den Index, wie wird veraltet entfernt, wie wird DSGVO-Compliance (Right-to-be-Forgotten) umgesetzt?

**3. Embedding-Pipeline-Stabilität**: Was passiert, wenn das Embedding-Modell wechselt? Alle Dokumente müssen neu embedded werden — potenziell Millionen von Einträgen. Das ist ein operativer Aufwand, der in die TCO-Berechnung (Modul 9.2) einfließen muss.

**4. Synthetic Data**: Als Augmentation für knappe echte Daten. Wichtige Einschränkung: synthetische Daten können echte Daten in vielen Domänen nicht vollständig ersetzen — besonders bei hochregulierten oder physikalisch komplexen Bereichen.

**5. Data-for-Eval**: Test-Sets müssen aus Daten bestehen, die **nicht** im Training waren. Contamination (Test-Daten im Training) ist ein häufiger Fehler, der zu übermäßig optimistischen Eval-Ergebnissen führt.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [BCG — Data for AI](https://www.bcg.com) | Business-Perspektive auf KI-Datenanforderungen |

## Teste dein Verständnis

- [ ] Welche deiner bestehenden Daten-Pipelines sind für Vector-Store-Ingestion geeignet?
- [ ] Was würde es kosten, alle Dokumente neu zu embedden, wenn ihr Embedding-Modell wechselt?
- [ ] Hast du dedizierte Eval-Datensätze, die nicht in Training oder Retrieval-Index vorkommen?
