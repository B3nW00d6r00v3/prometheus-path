---
title: "Case: DSGVO-Verfahren gegen OpenAI in IT/DE (laufend)"
module: "9.7"
type: theorie
fast_track: true
effort: "30min"
stability: green
---

# Case: DSGVO-Verfahren gegen OpenAI in IT/DE (laufend)

## Kernidee

Die italienische Datenschutzbehörde verhängte im Dezember 2024 eine Strafe von 15 Millionen Euro gegen OpenAI. Deutsche Verfahren laufen. Der Case zeigt: DSGVO-Compliance für KI-Anbieter und -Nutzer ist nicht optional — auch nicht für Marktführer.

## Im Detail

**Was ist passiert?**

Die Garante (italienische Datenschutzbehörde) verhängte im Dezember 2024 eine Strafe von 15 Millionen Euro gegen OpenAI, primär wegen:
- Unzureichender Transparenz über Trainingsdaten-Quellen.
- Verletzung von Auskunfts- und Berichtigungsrechten von Nutzern.
- Unzureichender Rechtsgrundlage für die Verarbeitung personenbezogener Daten im Training.

Deutsche Verfahren beim BfDI laufen parallel (Stand Mai 2026).

**Failure-Mode-Klassifikation:**
- **Primär: Compliance-Failure** — Trainingsdaten-Compliance (welche Rechtsgrundlage für Scraping personenbezogener Daten aus dem Internet?), Auskunftsrechte-Implementation unzureichend.
- **Sekundär: Daten-Failure** — keine ausreichende Datenminimierung bei Trainingsdaten.

**Lehre für nutzende Organisationen:**
- AVV mit LLM-Providern ist Pflicht — nicht optional. Wer keinen AVV hat, verletzt DSGVO selbst.
- DSFA für KI-Use-Cases mit personenbezogenen Daten ist ernst zu nehmen.
- Compliance-Lücken aus Modul 9.5 müssen geschlossen sein, bevor ein Audit kommt — nicht danach.

*Verfallsdatum: alle 6 Monate — Verfahren entwickeln sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Behörde | [BfDI](https://www.bfdi.bund.de) | Deutsche Datenschutzbehörde |
| Presse | Heise, Reuters (Dezember 2024) | Berichterstattung zur Garante-Strafe |

## Teste dein Verständnis

- [ ] Hast du einen AVV mit allen LLM-Providern, die du nutzt — wie prüfst du das?
- [ ] Welche DSGVO-Anforderungen an Auskunftsrechte sind für deinen Capstone-Use-Case relevant?
- [ ] Was bedeutet das Garante-Urteil für die Frage, welche Daten du einem LLM senden darfst?
