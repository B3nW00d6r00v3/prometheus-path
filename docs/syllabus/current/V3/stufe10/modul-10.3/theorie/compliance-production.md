---
title: "Compliance in Production"
module: "10.3"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Compliance in Production

## Kernidee

Production bedeutet echte Nutzer, echte Daten und echte rechtliche Verantwortung. Compliance ist kein einmaliger Check am Ende, sondern ein kontinuierlicher Prozess: AI Literacy für Nutzer, Logging für Audit, Right-to-be-Forgotten in Vector-Stores, und Bias-Monitoring als Dauer-Aufgabe.

## Im Detail

**Compliance-Dimensionen in LLM-Production-Systemen:**

**1. AI Literacy als Pflicht-Element (EU AI Act 2025+)**

Nutzer müssen wissen, dass sie mit KI interagieren. Konkrete Anforderungen:
- **Transparenz-Hinweis**: "Dieser Dienst nutzt KI-generierte Inhalte"
- **Opt-Out-Möglichkeit**: für KI-Personalisierung (besonders im Marketing)
- **Erklärbarkeit**: bei automatisierten Entscheidungen mit Relevanz für Nutzer (Art. 22 DSGVO)

Ohne diese Hinweise riskierst du DSGVO- und EU AI Act-Verstöße.

**2. Logging für Audit**

Production-Logs müssen für Audit-Zwecke aufbewahrt werden:
- Welche Entscheidungen hat das System getroffen?
- Auf Basis welcher Eingaben?
- Welches Modell und welcher Prompt wurde genutzt?
- Wann und für welchen Nutzer?

**Aufbewahrungsfristen:**
- DSGVO: abhängig vom Use-Case, typisch 6-12 Monate
- Finanz-Use-Cases: oft 7-10 Jahre (rechtliche Aufbewahrungspflichten)
- Audit-Logs: unveränderbar (Append-only, digital signiert)

**3. Right-to-be-Forgotten in Vector-Stores**

DSGVO Art. 17: Nutzer können Löschung ihrer Daten verlangen. Bei RAG-Systemen mit Vector-Stores bedeutet das:
- **Dokumenten-Tracking**: welche Embeddings gehören zu welchem Nutzer?
- **Lösch-Mechanismus**: bei Löschantrag werden zugehörige Embeddings aus dem Vector-Store entfernt
- **Backup-Konsistenz**: Löschung muss auch in Backups nachgezogen werden

Praktisch: Metadata zu jedem Embedding speichern (`user_id`, `document_id`, `created_at`) → bei Löschantrag Filter-Abfrage und gezielte Löschung.

**4. Bias-Monitoring kontinuierlich**

Einmalige Bias-Prüfung vor Launch reicht nicht — Modell-Updates und neue Daten können Bias einführen:
- **Demographische Parität**: sind Outputs für verschiedene Nutzergruppen gleichwertig?
- **Performance-Parität**: ist die Eval-Qualität für verschiedene Sprachen/Dialekte gleich?
- **Monitoring-Frequenz**: monatlich, oder bei jedem Modell-Update

Tools: [Fairlearn](https://fairlearn.org) für klassische ML-Modelle; für LLMs: LLM-as-Judge mit expliziten Fairness-Rubriken.

**Verbindung zu Modul 9.5 (AI Governance):**

Die Compliance-Anforderungen hier sind die operative Umsetzung der strategischen Governance aus Modul 9.5. Governance definiert Richtlinien — Production-Compliance setzt sie täglich um.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Gesetz | [EU AI Act](https://artificialintelligenceact.eu) | Volltext und Zusammenfassung |
| 📖 Behörde | [BfDI — DSGVO](https://www.bfdi.bund.de) | Deutsche DSGVO-Aufsicht |
| 🛠️ Tool | [Fairlearn](https://fairlearn.org) | OSS Bias-Detection für ML |

## Teste dein Verständnis

- [ ] Was sind die vier Compliance-Dimensionen für LLM-Production-Systeme?
- [ ] Wie implementierst du Right-to-be-Forgotten in einem RAG-System mit Vector-Store?
- [ ] Warum reicht einmalige Bias-Prüfung vor Launch nicht aus?
