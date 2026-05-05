---
title: "Was ist ein Test-Case?"
module: "5.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Was ist ein Test-Case?

## Kernidee

Ein Test-Case besteht aus drei Bausteinen: Input (was ans System geht), Erwartung (was rauskommen soll) und Metadaten (Kategorie, Schwierigkeit). Ein Input ohne Erwartung ist kein Test — er ist eine Demo.

## Im Detail

Die drei Bausteine im Detail:

1. **Input** — was wird ans System geschickt? Eine Frage, ein Dokument, eine Anweisung. Konkret und vollständig formuliert, so wie es echte Nutzer schicken würden.

2. **Erwarteter Output oder Erwartung an den Output** — entweder eine Ground-Truth-Antwort (exakte Referenzantwort) oder akzeptable Eigenschaften:
   - "muss Quelle nennen"
   - "darf nicht halluzinieren"
   - "muss auf Deutsch antworten"
   - "Score zwischen 0 und 100"

3. **Metadaten** — damit du dein Test-Set analysieren kannst:
   - **Kategorie:** Standard / Edge Case / bekannter Failure Mode
   - **Schwierigkeitsgrad:** einfach / mittel / schwer

**Beispiel eines vollständigen Test-Cases:**

```yaml
input: "Was ist RAG in einfachen Worten?"
erwartung: "Antwort erklärt Retrieval-Augmented Generation, erwähnt externe Datenquellen, maximal 100 Wörter"
kategorie: standard
schwierigkeit: einfach
```

**Beispiel eines unvollständigen "Test-Cases":**

```yaml
input: "Was ist RAG in einfachen Worten?"
# kein erwarteter Output → das ist kein Test, das ist ein Demo-Input
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) | Abschnitt über Test-Case-Anatomie |

## Teste dein Verständnis

- [ ] Kannst du den Unterschied zwischen einem Test-Case und einem Demo-Input in einem Satz erklären?
- [ ] Weißt du, welche drei Metadaten-Felder ein Test-Case haben sollte?
- [ ] Kannst du einen eigenen Test-Case für deinen Use-Case aus 2.3 oder 4.1 aufschreiben?
