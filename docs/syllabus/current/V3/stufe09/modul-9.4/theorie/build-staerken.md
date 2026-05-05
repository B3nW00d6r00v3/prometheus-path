---
title: "Build-Stärken — wann ist Eigenbau die richtige Wahl?"
module: "9.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Build-Stärken — wann ist Eigenbau die richtige Wahl?

## Kernidee

Build ist nicht die romantisch-technophile Standardantwort — sondern die richtige Wahl in fünf spezifischen Situationen. Außerhalb dieser Situationen ist Build oft teurer, langsamer und riskanter als Buy.

## Im Detail

**Fünf Situationen, in denen Build die richtige Wahl ist:**

1. **Wettbewerbsvorteil entsteht durch das System** — wenn die KI-Lösung selbst der Differenziator ist (z.B. proprietäres Empfehlungssystem auf einzigartigen Daten). Off-the-Shelf gibt den Vorteil auch Wettbewerbern.

2. **Kerngeschäft betroffen, niemand sonst hat dieselben Anforderungen** — einzigartige Domänen-Anforderungen, für die kein Tool existiert.

3. **Keine Off-the-Shelf-Lösung mit ausreichender Reife** — Frontier-Use-Case ohne etablierte Lösungen. Risiko: technisch anspruchsvoll.

4. **Stark spezialisierte Domäne** — Branchenspezifika, die generische Tools nicht abbilden können (z.B. hochspezialisierte Regulierungsanforderungen).

5. **Daten-Sensitivität zu hoch für Cloud-Vendor** — wenn Daten on-premises bleiben müssen (Sicherheits-, Datenschutz- oder regulatorische Gründe). Dann: lokales Deployment mit Open-Source-Modellen.

**Wichtig:** Selbst in Build-Situationen wird selten „alles" gebaut. Build on Buy ist häufig die Realität: eigene Applikationsschicht auf einem LLM-Provider-API.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | [Build-vs-Buy-Framework](build-vs-buy-framework.md) | Übergeordnetes Entscheidungsframework |

## Teste dein Verständnis

- [ ] Nenne für jede der fünf Situationen ein konkretes Branchen-Beispiel.
- [ ] Was ist der Unterschied zwischen „Build weil Kerngeschäft" und „Build weil kein Tool existiert"?
- [ ] Warum ist Daten-Sensitivität ein Build-Argument — und welche Alternativen gibt es?
