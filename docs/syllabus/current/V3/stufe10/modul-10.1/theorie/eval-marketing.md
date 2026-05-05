---
title: "Eval für Marketing-KI"
module: "10.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Eval für Marketing-KI

## Kernidee

Eval im Marketing-KI-Kontext ist schwieriger als rein technische Eval, weil der ultimative Erfolgsmaßstab (Revenue, Retention) Wochen oder Monate nach dem Output eintritt. Die Lösung: ein dreistufiges Eval-Modell, das Proxy-Metriken früh liefert und Business-Metriken als Längsschnitt erhebt.

## Im Detail

**Die drei Eval-Ebenen für Marketing-KI:**

**Ebene 1 — Output-Qualität (sofort messbar):**
- Brand-Voice-Konsistenz: LLM-as-Judge mit Brand-Voice-Rubrik (1-5 Skala)
- Faktenrichtigkeit: manuelle Stichproben oder automatisierte Fakten-Verifikation via RAG
- SEO-Tauglichkeit: Keyword-Dichte, Readability-Score, Struktur-Check
- Toxizität / Bias-Scan: automatisiert mit Perspective API oder ähnlichem

**Ebene 2 — Engagement (Tage bis Wochen):**
- Open Rates, Click Rates, Conversion bei E-Mail-Kampagnen
- Scroll-Depth, Time-on-Page für Content
- A/B-Testing aus Modul 8.5: KI-generierter Content vs. manuell erstellter Content

**Ebene 3 — Business Impact (Monate):**
- Revenue, Retention, CAC (Customer Acquisition Cost)
- Braucht Längsschnitt-Daten und saubere Attributions-Modelle

**Anti-Pattern 2024-2026:** KI-Content-Generierung ohne Eval auf Ebene 1-2. Unternehmen merken erst nach Monaten, dass die Conversion gesunken ist, weil KI-Content zwar günstiger, aber schlechter konvertierend ist.

*Eval-Querschnitt-Anker: Methodik aus `13_querschnitt_eval.md`.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Verweis | Modul 8.5 — A/B-Testing | Statistische Grundlagen für Engagement-Eval |
| 📖 Verweis | Querschnitt Eval | Allgemeine Eval-Methodik |

## Teste dein Verständnis

- [ ] Welche drei Eval-Ebenen gibt es, und auf welchem Zeithorizont liefern sie Ergebnisse?
- [ ] Warum reicht Ebene-1-Eval allein nicht für Marketing-Entscheidungen?
- [ ] Was ist das klassische Anti-Pattern bei KI-Content-Generierung ohne Eval?
