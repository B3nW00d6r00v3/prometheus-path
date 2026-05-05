---
title: "Antipatterns im Agentic OS"
module: "6.7"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Antipatterns im Agentic OS

## Kernidee

Fünf häufige Fehler beim Aufbau eines Agentic OS machen das System schlechter statt besser: Buzzword-OS ohne persistente Schicht, Memory ohne Versionierung, Skills ohne Eval, Self-Learning ohne Eval-Anker, und System-Software-Layer für einfache Use-Cases. Jeder dieser Fehler ist vermeidbar, wenn du weißt, wo er entstehen kann.

## Im Detail

**Antipattern 1: "Agentic OS" als reines Buzzword**
- Was passiert: das System heißt "Agentic OS", hat aber keine persistente Memory-Schicht, keine versionierten Skills, kein Self-Learning. Es ist ein normales Multi-Agent-Setup mit einem coolen Namen.
- Wie vermeiden: prüfe, ob die vier Layers wirklich implementiert sind. Wenn nicht: nenn es, was es ist.

**Antipattern 2: Memory-Layer ohne Versionierung**
- Was passiert: das Memory wird aktualisiert, aber ohne Git-Versionierung oder ähnliches. Wenn ein fehlerhaftes Update eingeht, gibt es kein Rollback. Wissen driftet unkontrolliert.
- Wie vermeiden: Memory-Files als versionierte Textdateien in Git. Jede Änderung ist ein Commit.

**Antipattern 3: Skills-Layer ohne Eval**
- Was passiert: Skills werden entwickelt und deployed, aber nie evaluiert. Eine neue Skill-Version könnte schlechter sein als die alte — du merkst es nicht, weil kein Eval läuft.
- Wie vermeiden: Eval-Setup aus Modul 5.0/5.4 auf Skills anwenden. Jede neue Skill-Version gegen dasselbe Test-Set evaluieren.

**Antipattern 4: Self-Learning ohne Eval-Anker**
- Was passiert: der Self-Learning-Layer passt Memory und Skills automatisch an — aber auf Basis der falschen Metrik. Das System "lernt" das Falsche und optimiert auf einen schlechten Proxy.
- Beispiel: Self-Learning-Layer optimiert auf "Agent-Antwort ist lang" statt "Agent-Antwort ist korrekt".
- Wie vermeiden: Eval-Anker aus `13_querschnitt_eval.md`. Kein Self-Learning ohne explizit definierte Eval-Metrik.

**Antipattern 5: System-Software-Layer für einfachen Use-Case**
- Was passiert: ein Team baut eine vollständige AIOS-Foundation-basierte Infrastruktur für einen Agent mit 3 Tools und 100 Runs pro Tag.
- Wie vermeiden: Skalierungs-Schwelle: CLAUDE.md für <10k Token Memory, `AGENT_OS/`-Verzeichnis für mittlere Projekte, Framework nur für echte Enterprise-Skala.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Querschnitt | [Querschnitt Eval (13_querschnitt_eval.md)](../../../../../13_querschnitt_eval.md) | Eval-Anker |

## Teste dein Verständnis

- [ ] Welches der fünf Antipatterns ist für dein Capstone-Projekt am relevantesten — und wie vermeidest du es?
- [ ] Warum ist "Self-Learning ohne Eval-Anker" besonders gefährlich?
- [ ] Was ist die Konsequenz von Memory ohne Versionierung — nenne ein konkretes Szenario.
