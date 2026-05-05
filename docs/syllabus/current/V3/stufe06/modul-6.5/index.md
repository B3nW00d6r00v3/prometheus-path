---
title: "Modul 6.5: Computer Use & Agentic Browsing"
module: "6.5"
type: index
fast_track: true
effort: "10-15h"
---

# Modul 6.5: Computer Use & Agentic Browsing

Anthropic Computer Use, OpenAI Operator, Google Project Mariner sind eigene Pattern-Klassen mit spezifischen Sicherheits-, Eval- und Praxis-Aspekten. Wer 2026 Agent-Systeme baut und Computer Use ignoriert, übergeht eine der wichtigsten neuen Pattern-Klassen. Modul 6.5 macht es zur eigenständigen Disziplin.

**Aufwand:** 🔧 10-15h · 🧮 6-10h · 💼 4-6h
**Voraussetzungen:** Module 6.1, 6.2

## Lernziel

Du hast einen Computer-Use-Agent zumindest **einmal selbst zum Laufen gebracht** (Anthropic Computer Use, OpenAI Operator, oder ein OSS-Äquivalent), kennst die spezifischen Sicherheits-Aspekte (Sandbox-Pflicht!), und verstehst, wann Computer Use die richtige Wahl ist und wann nicht.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Was ist Computer Use?](theorie/was-ist-computer-use.md) | ✅ | 10min |
| 2 | [Anthropic Computer Use](theorie/anthropic-computer-use.md) | ✅ | 15min |
| 3 | [OpenAI Operator](theorie/openai-operator.md) | ✅ | 10min |
| 4 | [Google Project Mariner](theorie/google-project-mariner.md) | ⏭️ | 10min |
| 5 | [OSS-Alternativen 2026](theorie/oss-alternativen.md) | ✅ | 10min |
| 6 | [Sandboxing — nicht optional](theorie/sandboxing-computer-use.md) | ✅ | 15min |
| 7 | [Confirmation-Pattern für destruktive Aktionen](theorie/confirmation-pattern.md) | ✅ | 10min |
| 8 | [Wann lohnt Computer Use sich?](theorie/wann-lohnt-computer-use.md) | ✅ | 10min |
| 9 | [Cost-Realität: 5-20x teurer](theorie/cost-realitaet.md) | ✅ | 10min |
| 10 | [Eval für Computer-Use-Agents](theorie/eval-computer-use.md) | ⏭️ | 10min |

## Praxis: Hauptprojekt — Computer-Use-Demo

Wähle EINE der folgenden Optionen:

**Option A: Anthropic Computer Use Demo (empfohlen für 🔧)**
- Klone [Anthropic Computer Use Demo Repo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo).
- Folge dem Quickstart: Docker-Container starten, Anthropic-API-Key eintragen, Demo-Task laufen lassen.
- **Erweitere** den Demo um einen eigenen Task aus deinem Alltag — Form ausfüllen, Daten extrahieren, Multi-Schritt-Workflow.
- **Beobachte** das Verhalten: Wo macht der Agent Fehler? Wie geht er mit unerwarteten UI-Zuständen um?
- **Cost-Tracking**: dokumentiere Cost pro Task.

**Option B: OSS-Browser-Automation (für 🌱-Pfad)**
- Setup mit [Browser Use](https://github.com/browser-use/browser-use) gegen Ollama (lokales LLM) oder Cloud-API.
- Implementiere einen Browser-Workflow deiner Wahl.

**Option C: Computer-Use-Awareness ohne eigenen Build (für 💼)**
- Schaue Anthropic Computer Use Demo Video oder OpenAI Operator Demo.
- Schreibe ein 2-Pager-Briefing für Stakeholder.
- Im Portfolio: `stufe-6_agenten/6-5-computer-use-briefing/`.

## Im Portfolio

`stufe-6_agenten/6-5-computer-use/` mit:
- Code (Optionen A und B) oder Briefing (Option C)
- README mit Setup und Demo-Run-Ergebnissen
- **Sicherheits-Audit**: welche Aktionen sind destruktiv? Wie ist Confirmation gelöst? Welche Sandbox?
- Cost-Pro-Task-Dokumentation
- Reflektion: wann würdest du Computer Use einsetzen, wann nicht?

## 🎁 Mehrwert-Mini-Projekte

- **Persönlicher Browser-Helfer-Agent** für eine wiederkehrende Browser-Aufgabe mit klaren Sicherheits-Beschränkungen.
- **Computer-Use-Failure-Mode-Sammlung** — Liste der Situationen, in denen dein Agent überraschend gescheitert ist.

## 🌱 Open-Source-Pfad

- [Browser Use](https://github.com/browser-use/browser-use) gegen Ollama lokal — komplett kostenfrei.
- [Anthropic Computer Use Demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) ist selbst OSS.
- Sandboxing mit Docker statt E2B: Container mit eingeschränktem User, eigenem Display via VNC.

## Outcome-Check

- [ ] Computer-Use-Agent mindestens einmal lauffähig erlebt (Option A, B oder Briefing nach C)
- [ ] Sicherheits-Audit dokumentiert: welche Sandbox, welche destruktiven Aktionen, welche Confirmation-Steps
- [ ] Cost-Pro-Task dokumentiert
- [ ] Reflektion zu "wann lohnt es sich, wann nicht?"
- [ ] Mindestens ein Failure-Mode dokumentiert
