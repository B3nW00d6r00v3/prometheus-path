---
title: "Risikoklassifizierung-Checkliste für eigene Use-Cases"
module: "9.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Risikoklassifizierung-Checkliste für eigene Use-Cases

## Kernidee

Für jeden KI-Use-Case einer Organisation müssen fünf Fragen beantwortet werden, um die Risikoklasse nach EU AI Act festzustellen. Die Klassifizierung entscheidet, welche Compliance-Anforderungen gelten.

## Im Detail

**Fünf-Fragen-Checkliste zur Risikoklassifizierung:**

1. **Beeinflusst der Use-Case kritische Bereiche?**
   - Ja zu: Beschäftigung, Bildung, Kredit/Versicherung, kritische Infrastruktur, Strafverfolgung, Migration → High-Risk prüfen (Annex III).
   - Nein → weiter zu Frage 2.

2. **Werden personenbezogene Daten verarbeitet?**
   - Ja → DSGVO-Anforderungen zusätzlich. DSFA wenn Hochrisiko für Betroffene.
   - Nein → weiter zu Frage 3.

3. **Trifft die KI Entscheidungen mit erheblichen Auswirkungen auf Personen?**
   - Ja → Automated-Decision-Making nach Art. 22 DSGVO, Human-Oversight-Anforderungen des AI Act.
   - Nein → weiter zu Frage 4.

4. **Muss Transparenz gewährleistet sein?**
   - Ja (Chatbot, KI-generierter Content) → Limited Risk, Kennzeichnungspflicht.
   - Nein → wahrscheinlich Minimal Risk.

5. **Welche AI-Literacy-Anforderungen gelten für die Mitarbeiter?**
   - Für alle Use-Cases: AI Literacy nach Art. 4 prüfen. Welches Niveau für welche Rollen?

**Entscheidungsbaum-Ergebnis:**
- Unacceptable Risk → verboten, nicht implementieren.
- High Risk → umfangreiche Compliance-Dokumentation, Conformity Assessment.
- Limited Risk → Kennzeichnung, Transparenz-Hinweise.
- Minimal Risk → freiwillige Best Practices, keine gesetzlichen Pflichten.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Offiziell | [AI Act Explorer](https://artificialintelligenceact.eu) | Interaktives Klassifizierungs-Tool |

## Teste dein Verständnis

- [ ] Wende die 5-Fragen-Checkliste auf deinen Capstone-Use-Case an — welche Risikoklasse ergibt sich?
- [ ] Welche der fünf Fragen ist für Standard-Unternehmens-Use-Cases am häufigsten mit „Ja" zu beantworten?
- [ ] Was ist der nächste Schritt nach der Klassifikation als High-Risk?
