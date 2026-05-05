---
title: "Markdown-Basics"
module: "1.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Markdown-Basics

## Kernidee

Markdown ist die "Sprache" in der du auf GitHub kommunizierst — README-Dateien, Issues, Pull Requests, dieses Curriculum selbst, alles ist Markdown. Es ist absichtlich simpel: ein paar Zeichen (`#`, `*`, `-`, `[]()`) reichen für 95% aller Formatierungen. 30 Minuten Investment, lebenslanger Nutzen.

## Im Detail

**Die wichtigsten Elemente:**

```markdown
# Überschrift 1
## Überschrift 2

**Fett** und *kursiv*

- Aufzählung
- Noch ein Punkt

1. Nummerierte Liste
2. Zweiter Punkt

[Link-Text](https://url.com)

`Code inline`

​```python
# Code-Block
print("Hello")
​```

| Spalte 1 | Spalte 2 |
|----------|----------|
| Daten    | Mehr     |
```

**GitHub Flavored Markdown (GFM)** erweitert Standard-Markdown um:

- Task-Listen: `- [ ] Todo` / `- [x] Done`
- Tabellen (wie oben)
- Syntax-Highlighting in Code-Blöcken
- Autolinks für Issues (`#123`) und Mentions (`@user`)

**Tipp:** Die beste Art Markdown zu lernen ist, es zu benutzen. Schreib dein erstes README und iteriere.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Guide | [Markdown Guide](https://www.markdownguide.org) | Referenz + Tutorial |
| 📖 Spec | [GitHub Flavored Markdown](https://github.github.com/gfm/) | GitHub-Erweiterungen |
| 🛠️ Interaktiv | [GitHub Skills — Communicate using Markdown](https://github.com/skills/communicate-using-markdown) | Learning by Doing (~30min) |

## Teste dein Verständnis

- [ ] Kannst du eine Überschrift, einen Link und eine Liste schreiben?
- [ ] Weißt du, wie ein Code-Block in Markdown aussieht?
- [ ] Kennst du den Unterschied zwischen Standard-Markdown und GFM?
