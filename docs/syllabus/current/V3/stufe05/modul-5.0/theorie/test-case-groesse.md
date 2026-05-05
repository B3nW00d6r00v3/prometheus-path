---
title: "Test-Case-Größenordnung"
module: "5.0"
type: theorie
fast_track: true
effort: "5min"
stability: green
expires: null
---

# Test-Case-Größenordnung

## Kernidee

Für den ersten Einstieg in Eval reichen 5-15 Test-Cases. Wichtiger als die Anzahl ist die bewusste Mischung aus Standard-Inputs, Edge Cases und bekannten Failure Modes — wer nur Standard-Inputs testet, schmeichelt seinem System.

## Im Detail

**Für Modul 5.0:** 5-15 Test-Cases sind das Ziel. Das ist keine wissenschaftliche Eval — es ist ein Einstieg, der Eval-Mindset entwickelt.

**Empfohlene Mischung:**

| Kategorie | Anteil | Beschreibung |
|-----------|--------|--------------|
| Standard-Inputs | ~60% | Typische Nutzereingaben, die das System gut beantworten sollte |
| Edge Cases | ~25% | Grenzfälle, ungewöhnliche Formulierungen, kurze/lange Inputs |
| Bekannte Failure Modes | ~15% | Inputs, bei denen du weißt, dass das System kippt |

**Warum diese Mischung?** Wer nur Standard-Inputs testet, hat eine Test-Suite, die das System schmeichelt. Edge Cases und Failure Modes zeigen, wo das System tatsächlich versagt.

**Skalierung in Modul 5.4:** Dort erweiterst du auf 50-100 Test-Cases für produktionstaugliche Eval. In 5.0 geht es darum, das Mindset zu entwickeln — nicht darum, ein vollständiges Eval-Set aufzubauen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Warum 50-100 das Minimum für Production-Eval sind |

## Teste dein Verständnis

- [ ] Kannst du erklären, warum 60/25/15-Mischung besser ist als 100% Standard-Inputs?
- [ ] Weißt du, was ein "bekannter Failure Mode" für deinen Use-Case wäre?
- [ ] Hast du für deinen Use-Case mindestens einen Edge Case und einen Failure Mode identifiziert?
