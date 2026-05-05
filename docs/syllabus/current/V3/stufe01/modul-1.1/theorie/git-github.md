---
title: "Git & GitHub"
module: "1.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Git & GitHub

## Kernidee

Git ist wie eine Zeitmaschine für deinen Code — jede Änderung wird gespeichert und du kannst jederzeit zurückspringen. GitHub ist der Ort, wo dein Code öffentlich lebt und andere (oder Recruiter) ihn sehen können. Zusammen bilden sie das Rückgrat deines Lern-Portfolios: jedes Praxisprojekt, jeder Fortschritt wird hier dokumentiert.

## Im Detail

**Git** ist ein Versionskontrollsystem. Jeder `commit` ist ein Snapshot deines Projekts. Du kannst Branches erstellen (parallele Experimente), Änderungen zusammenführen, und bei Fehlern zurückreisen.

**GitHub** ist die Plattform, auf der dein Git-Repository online lebt. Dein gesamtes Lern-Portfolio läuft hier — ab Stufe 2 wird jedes Praxisprojekt gepusht.

**SSH-Key einrichten ist zwingend** für reibungsloses Arbeiten — ohne SSH musst du bei jedem Push dein Passwort eingeben.

**Minimaler Workflow:**

```bash
git init                    # Neues Repo
git add .                   # Änderungen stagen
git commit -m "Message"     # Snapshot erstellen
git push origin main        # Auf GitHub hochladen
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Pro Git Book (kostenlos)](https://git-scm.com/book) | Die Git-Bibel, alles drin |
| 📖 Docs | [GitHub SSH-Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) | SSH-Key einrichten |
| 🛠️ Interaktiv | [GitHub Skills — Intro to GitHub](https://github.com/skills/introduction-to-github) | Learning by Doing (~1h) |

## Teste dein Verständnis

- [ ] Kannst du erklären, was ein `commit` ist?
- [ ] Weißt du, warum SSH-Keys besser sind als Passwort?
- [ ] Funktioniert `git clone` mit einem Test-Repo?
