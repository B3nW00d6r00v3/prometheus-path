---
title: "DSGVO-Schnittmenge mit dem AI Act"
module: "9.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# DSGVO-Schnittmenge mit dem AI Act

## Kernidee

EU AI Act und DSGVO gelten parallel — sie ergänzen sich, widersprechen sich manchmal, und zusammen sind sie die wichtigsten Rechtsrahmen für KI in der EU. Wer nur eines kennt, hat eine systematische Compliance-Lücke.

## Im Detail

**Vier wichtige Schnittstellen:**

1. **Personenbezogene Daten in Trainingsdaten** — wenn ein KI-Modell auf personenbezogenen Daten trainiert wurde (auch indirekt), gelten DSGVO-Anforderungen: Rechtsgrundlage, Zweckbindung, Auskunftsrechte.

2. **Automated Decision-Making (Art. 22 DSGVO)** — wenn KI automatisierte Entscheidungen mit rechtlicher oder erheblicher Wirkung trifft (z.B. Kredit-Ablehnung, Kündigung), hat der Betroffene das Recht auf menschliche Überprüfung. Überschneidet sich mit High-Risk-Anforderungen des AI Act.

3. **Recht auf Erklärung** — bei AI-Act-High-Risk-Systemen und DSGVO Art. 22: Betroffene können Erklärung der KI-Entscheidung verlangen. Technisch herausfordernd bei komplexen Modellen.

4. **Right to be Forgotten in Vector-Stores** — wenn Nutzer-Daten in RAG-Systemen eingebettet sind und ein Nutzer Löschung beantragt: Entfernung aus Vector-Stores ist technisch aufwändig und muss vorab geplant sein.

**Konflikte:** Bei Widersprüchen zwischen DSGVO und AI Act gilt oft das strengere Recht. Im Zweifelsfall: Rechtsberatung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Behörde | [BfDI — Datenschutz und KI](https://www.bfdi.bund.de) | Deutsche Datenschutzbehörde |
| Behörde | [HmbBfDI — AI und Datenschutz](https://datenschutz-hamburg.de) | Hamburger Perspektive |

## Teste dein Verständnis

- [ ] Warum ist Art. 22 DSGVO besonders relevant für High-Risk-KI-Systeme?
- [ ] Welche Schritte sind nötig, um Right-to-be-Forgotten in einem RAG-System technisch umzusetzen?
- [ ] Was tust du, wenn DSGVO und AI Act sich in einem konkreten Fall zu widersprechen scheinen?
