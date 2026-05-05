---
title: "Modul 5.0: Eval-Mini-Block"
module: "5.0"
type: index
fast_track: true
effort: "4-6h"
---

# Modul 5.0: Eval-Mini-Block

In v2.0 stand Eval-Methodik in Modul 5.4 — **nach** Modul 5.1, in dem du dein erstes RAG-System baust. Das war ein Antipattern: du hast etwas gebaut, ohne zu wissen, wie du beurteilen kannst, ob es gut ist. Das ist genau die "Vibe-Only-LLM-App"-Falle, vor der das Curriculum in jedem zweiten Modul warnt.

In v2.1 ziehen wir das Minimum aus dem Eval-Querschnitt vor Modul 5.1: **Test-Case-Anatomie + ein Reference-Free-Eval praktisch geübt**. Das reicht für ein Eval-Mindset bei Modul 5.1 — die Vertiefung folgt in 5.4 wie gehabt.

**Aufwand:** 🔧 4-6h · 🧮 4-6h · 💼 4-6h *(gleich für alle Tracks — Eval ist universelle Kerndisziplin)*  
**Voraussetzungen:** Module 2.3, 2.5, optional 4.1

## Lernziel

Du kannst aus deinem Use-Case (Modul 2.3 Prompt-Library oder 4.1 FastAPI-Service) **5-15 Test-Cases sauber konstruieren** und einen einfachen **Reference-Free-Eval-Run** mit zwei verschiedenen Prompts oder Modellen durchführen. Du verstehst Test-Case-Anatomie und kannst LLM-as-Judge minimal anwenden.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Hamel Husains "Your AI Product Needs Evals" (Pflicht)](theorie/hamel-husain-evals.md) | ✅ | 30-45min |
| 2 | [Was ist ein Test-Case?](theorie/test-case-anatomie.md) | ✅ | 10min |
| 3 | [Reference-Based vs. Reference-Free Eval](theorie/reference-based-vs-free.md) | ✅ | 10min |
| 4 | [LLM-as-Judge in der Minimal-Form](theorie/llm-as-judge-minimal.md) | ✅ | 10min |
| 5 | [Erste Eval-Tool-Wahl: Promptfoo oder DeepEval](theorie/eval-tool-wahl.md) | ✅ | 10min |
| 6 | [Test-Case-Größenordnung](theorie/test-case-groesse.md) | ✅ | 5min |
| 7 | [Was du in 5.0 NICHT lernst](theorie/abgrenzung-5-0.md) | ⏭️ | 5min |

## Praxis: Mini-Eval auf bestehende Arbeit

Wähle EINE der folgenden Eingangs-Arbeiten als Eval-Ziel:

**Option A (für Engineers mit Modul 4.1 abgeschlossen):** Eval auf deinen FastAPI-LLM-Service aus 4.1.

**Option B (für alle Tracks):** Eval auf deine Prompt-Library aus 2.3 — wähle den Prompt, den du am häufigsten nutzt.

**Option C (für 💼 oder Lernende ohne Code):** Eval auf einen No-Code-Workflow aus 2.6.

Egal welche Option:

1. **Test-Case-Set bauen** (5-15 Cases): Schreibe in einer Markdown- oder CSV-Datei pro Test-Case Input + Erwartung + Metadaten. Mische bewusst Standard / Edge / Failure Mode.
2. **Eval-Tool wählen**: Promptfoo (CLI) oder DeepEval (Python). API-Hauptpfad: gegen Cloud-Modell deiner Wahl. OSS-Pfad: gegen Ollama lokal.
3. **Erstes Eval-Run**: deinen aktuellen Prompt/Service gegen das Test-Set laufen lassen, Output-Report (Markdown oder Promptfoo-View) sichern.
4. **Variation und Vergleich**: Erstelle eine zweite Version (anderer Prompt, anderes Modell) und vergleiche beide gegen das gleiche Test-Set.
5. **Reflektion** (`stufe-5_anwendungen/5-0-eval-mini/reflektion.md`): Was hat dich überrascht? Wo war dein Bauchgefühl falsch?

**Im Portfolio:** `stufe-5_anwendungen/5-0-eval-mini/` mit Test-Set, Skripten, Reports.

## 🎁 Mehrwert-Mini-Projekt

**Eval-Cheat-Sheet** als 1-Pager im Portfolio: deine persönliche "Wie schreibe ich einen guten Test-Case?"-Checkliste. Wert: bei jedem zukünftigen LLM-Projekt 30 Min gespart.

## 🌱 Open-Source-Pfad

**Ollama-basierter OSS-Pfad:** Ollama läuft lokal, Promptfoo unterstützt nativ Ollama-Endpoints. Setup:

```bash
# Promptfoo gegen Ollama
ollama serve  # läuft im Hintergrund
promptfoo init my-eval
# in promptfooconfig.yaml: providers: [ollama:chat:llama3.2:3b, ollama:chat:qwen2.5:7b]
promptfoo eval
```

LLM-as-Judge im OSS-Modus: ein stärkeres lokales Modell (z.B. `qwen2.5:14b` falls Hardware reicht) als Judge gegen ein kleineres als Subject. Komplett kostenfrei.

## Outcome-Check

- [ ] Hamel Husains "Your AI Product Needs Evals" gelesen
- [ ] 5-15 Test-Cases mit klarer Anatomie (Input + Erwartung + Metadaten) im Portfolio
- [ ] Bewusste Mischung Standard / Edge / Failure Mode dokumentiert
- [ ] Erster Eval-Run mit Promptfoo oder DeepEval erfolgreich durchgeführt
- [ ] Vergleichs-Run mit zweiter Variante (anderer Prompt oder Modell)
- [ ] Reflektion-Doku mit überraschenden Erkenntnissen
- [ ] Eval-Cheat-Sheet als 1-Pager (optional)

**Du bist bereit für Modul 5.1 mit echtem Eval-Mindset.**
