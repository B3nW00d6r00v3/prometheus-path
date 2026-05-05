---
title: "Case: McDonald's AI-Drive-Through (eingestellt 2024)"
module: "9.7"
type: theorie
fast_track: true
effort: "30min"
stability: green
---

# Case: McDonald's AI-Drive-Through (eingestellt 2024)

## Kernidee

McDonald's beendete 2024 nach drei Jahren eine Partnerschaft mit IBM für KI-gestützte Drive-Through-Bestellsysteme. Der Case zeigt: Tech-Reife-Mismatch und fehlende Eval-Methodik sind ein zuverlässiges Rezept für öffentliches Scheitern in großem Maßstab.

## Im Detail

**Was ist passiert?**

McDonald's und IBM entwickelten ab 2021 ein KI-System für automatisierte Drive-Through-Bestellungen per Spracherkennung. Nach drei Jahren und Implementierung in mehreren hundert Restaurants wurde die Partnerschaft 2024 ohne vollständige Skalierung beendet. Kunden-Videos zeigten systematische Fehler: falsche Bestellungen, Kommunikationsprobleme bei Hintergrundlärm, wiederholte Fehlversuche.

**Failure-Mode-Klassifikation:**
- **Primär: Technik-Failure** — Spracherkennung in Lärm-Umgebungen (Drive-Through mit Außenlärm, Kinderrufen, Motorgeräuschen) war 2021-2024 nicht ausreichend reif für zuverlässigen produktiven Einsatz.
- **Sekundär: Daten-Failure** — Eval-Lücke: kein robustes Produktions-Eval-System, das Real-World-Performance systematisch gemessen und Rückschlüsse auf Skalierbarkeit ermöglicht hätte.

**Lehre-Extraktion:**
- KI-Pilot ohne robuste Eval ist Roulette — auch wenn erste Tests gut laufen.
- Produktions-Umgebungen (Lärm, Akzente, Sprachvarianz) sind dramatisch anders als Labor-Bedingungen.
- Skalierung ohne Eval-Gate ist finanziell und reputationell riskant.

**Verbindung zu Modul 9.2:** Pilot-Gate-Plan wäre hier entscheidend gewesen — klares Eval-Kriterium vor Skalierung auf hunderte Restaurants.

*Verfallsdatum: alle 6 Monate — neue Berichte können entstehen.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Presse | Heise, Reuters (2024) | Berichte zum Ende der Partnerschaft |

## Teste dein Verständnis

- [ ] Was hätte ein robustes Pilot-Gate-Kriterium für den McDonald's-Case enthalten müssen?
- [ ] Wo hätte eine Daten-Lücken-Analyse (Modul 9.0) diesen Fall vorhersagen können?
- [ ] Welche Lehre überträgst du direkt auf deinen Capstone-Use-Case?
