---
title: "Content-Generierung über reine Generation hinaus"
module: "10.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Content-Generierung über reine Generation hinaus

## Kernidee

Naive Content-Generierung — "schreibe einen Blog-Post über X" — ist der Anfängerfehler. Professionelle KI-Content-Generierung ist ein mehrstufiger Prozess mit klar definierten Qualitätsstufen: Brief, Outline, Draft, Iteration, Optimierung. Ohne Eval ist keine dieser Stufen zuverlässig.

## Im Detail

**Naive Anwendung** (nicht produktionsreif):
- Prompt: "schreibe einen Blog-Post über Thema X"
- Ergebnis: generisches, oft austauschbares, SEO-schwaches, marken-loses Ergebnis

**Professionelle Anwendung** (mehrstufiger Pipeline-Ansatz):
1. **Content-Brief-Generierung** — Keyword-Recherche (Volumen, Competition, Intent), Konkurrenz-Analyse, Zielgruppen-Definition
2. **Outline-Creation** — Struktur mit H2/H3, Keyword-Platzierung, interne Links
3. **Draft mit Brand-Voice** — System-Prompt mit Marken-Beispielen, Few-Shot-Pattern
4. **Iteration mit Editor** — menschliche oder LLM-as-Editor-Stufe
5. **SEO-Optimierung** — Meta-Description, Title-Tag, Readability-Score
6. **Versionierung** — in Git oder CMS, um Änderungen nachvollziehen zu können

**Eval ist Pflicht** — drei kritische Dimensionen:
- **Brand-Voice-Konsistenz**: klingt es wie wir? (LLM-as-Judge mit Brand-Voice-Rubrik)
- **SEO-Tauglichkeit**: Keyword-Dichte, Readability, strukturierte Daten
- **Faktenrichtigkeit**: bei faktenbasierten Inhalten — Halluzinationen-Scan via RAG-Verifikation

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Content Generation Best Practices](https://docs.claude.com) | Offizielle Best Practices |
| 🍳 Cookbook | [Anthropic — Brand Voice Cookbook](https://github.com/anthropics/anthropic-cookbook) | Praktische Beispiele |

## Teste dein Verständnis

- [ ] Welche fünf Stufen hat professionelle KI-Content-Generierung?
- [ ] Welche drei Eval-Dimensionen sind für Content Pflicht?
- [ ] Warum ist ein einfacher "schreib mir einen Blog-Post"-Prompt keine valide Production-Lösung?
