---
title: "Anti-Patterns in Datenstrategie"
module: "9.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Anti-Patterns in Datenstrategie

## Kernidee

Die häufigsten Fehler in Datenstrategien sind keine technischen Fehler — sie sind Denkfehler. Fünf Anti-Patterns vernichten systematisch den Wert von KI-Investitionen, bevor der erste Use-Case live geht.

## Im Detail

Die fünf kritischsten Anti-Patterns:

1. **„Wir haben viele Daten"** ohne Qualitätsprüfung — Volumen ohne Qualität ist Datenmüll. Eine Million schlecht gelabelter Beispiele ist weniger wert als 10.000 sorgfältig kuratierte.

2. **KI-Use-Case ohne Daten-Audit** — Use-Case wird gewählt, dann nach 6 Monaten Entwicklung festgestellt: Daten zu schlecht, zu alt, nicht vorhanden. Modul 9.0 vor Modul 9.1 ist die Gegenstrategie.

3. **Vendor-Tunnelvision** — alle Daten in einem Cloud-Anbieter, ohne Lock-in-Awareness. Erst beim Vertragsverlängerungs-Gespräch wird klar, dass Wechseln 18 Monate dauern würde.

4. **Data-Lake-as-Trash-Can** — alles reinkippen, niemand findet was. Ein Lake ohne Governance und Katalog ist ein Datensumpf, kein Asset.

5. **Synthetic-Data-Wishful-Thinking** — synthetische Daten werden als Universallösung für fehlende echte Daten behandelt. In vielen Domänen (Medizin, Recht, Finanz) reichen sie nicht als Ersatz.

**Muster:** Die meisten Anti-Patterns haben gemeinsam, dass sie **Aufwand vermeiden** wollen, der sich kurz- bis mittelfristig als notwendig erweist.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Framework | [DAMA-DMBOK](https://www.dama.org) | Referenz für Daten-Management-Best-Practices |

## Teste dein Verständnis

- [ ] Warum ist „Data-Lake-as-Trash-Can" ein häufiges Anti-Pattern — welche Anreize führen dazu?
- [ ] Beschreibe ein reales Szenario, in dem „KI-Use-Case ohne Daten-Audit" zu Projektverzögerungen führt.
- [ ] In welcher Domäne wären synthetische Daten als alleinige Datenbasis besonders problematisch — und warum?
