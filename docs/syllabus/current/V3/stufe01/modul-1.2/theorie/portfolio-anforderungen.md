---
title: "Portfolio-Anforderungen"
module: "1.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Portfolio-Anforderungen

## Kernidee

Ein gutes Portfolio-Projekt ist nicht einfach "Code auf GitHub". Es ist ein **dokumentiertes Ergebnis**: Was war das Problem? Warum ist es relevant? Wie hast du es gelöst? Was ist das Ergebnis? Was sind die Grenzen? Wer das liest, versteht in 2 Minuten, was du kannst — ohne den Code lesen zu müssen.

## Im Detail

**Jedes Projekt braucht ein README mit:**

1. **Was** — Ein Satz, was das Projekt tut
2. **Warum** — Welches Problem es löst / warum es existiert
3. **Wie** — Technischer Ansatz (Tools, Architektur)
4. **Outcome** — Messbares Ergebnis (Schwelle erreicht? Metriken?)
5. **Limitationen** — Was es nicht kann, was du anders machen würdest

**Code-Qualität:**

- Type Hints verwenden (ab Stufe 4 Standard)
- Lesbare Variablennamen
- Keine auskommentierten Code-Blöcke
- `.gitignore` korrekt (keine `.env`, keine `__pycache__/`)

**Sicherheit:**

- API-Keys NIE committen
- Personenbezogene Daten ohne Anonymisierung NIE committen
- Wenn es passiert: sofort rotieren (siehe Secrets Management)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Guide | [GitHub Best Practices for Portfolios](https://github.com/readme/guides/jonschlinkert) | Struktur-Inspiration |

## Teste dein Verständnis

- [ ] Kannst du die 5 README-Punkte (Was/Warum/Wie/Outcome/Limitationen) aufzählen?
- [ ] Weißt du, was NIE in ein Repo gehört?
- [ ] Hast du ein Beispiel-README für dein erstes Projekt im Kopf?
