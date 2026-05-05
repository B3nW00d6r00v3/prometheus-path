---
title: "Wann Multi-Agent vermeiden?"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann Multi-Agent vermeiden?

## Kernidee

Multi-Agent ist kein Upgrade — es ist eine Komplexitäts-Stufe, die echten Nutzen bringen muss. Vier Anti-Indikatoren: wenn ein Single-Agent es kann, wenn Latenz kritisch ist, wenn Cost ein Faktor ist, oder wenn das Eval-Setup noch nicht steht. Anthropic 2026: „Most agentic workflows benefit from simplicity, not complexity."

## Im Detail

**Prüfe diese Anti-Indikatoren, bevor du Multi-Agent baust:**

**(1) Wenn ein Single-Agent mit gutem System-Prompt es kann**  
Multi-Agent ist Overhead — in Code, Koordination, Debugging, Cost. Wenn ein einzelner Agent mit Tools und gutem System-Prompt die Aufgabe löst: Single-Agent bevorzugen.

**(2) Wenn Latenz kritisch ist**  
Multi-Agent kostet 5-10x mehr Zeit durch Coordination-Overhead (Spawning, Messaging, Aggregation). Für interaktive Use-Cases ist das oft inakzeptabel.

**(3) Wenn Cost ein Faktor ist**  
Multi-Agent kann 5-15x teurer sein als Single-Agent. Jeder Sub-Agent hat seinen eigenen Context + LLM-Aufrufe.

**(4) Wenn das Eval-Setup nicht steht**  
Multi-Agent ohne Eval ist Production-Roulette. Du weißt nicht, ob es funktioniert, in welchen Cases es scheitert, und wie du es verbessern sollst. Eval zuerst — Multi-Agent danach.

**Default-Empfehlung 2026:** Workflow > Agent, Single-Agent > Multi-Agent. Multi-Agent nur, wenn der Use-Case es explizit verlangt (parallele unabhängige Tasks, klare Domänen-Trennung, Scale-Anforderungen).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | "Start simple, add complexity only when needed" |

## Teste dein Verständnis

- [ ] Nenne die vier Anti-Indikatoren für Multi-Agent.
- [ ] Warum ist „Eval-Setup steht nicht" ein K.o.-Kriterium für Multi-Agent in Production?
- [ ] Bewerte deinen Capstone-Use-Case: wäre Single-Agent ausreichend?
