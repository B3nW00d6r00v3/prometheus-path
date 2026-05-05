---
title: "Modul 5.2: LLM-Frameworks im Vergleich"
module: "5.2"
type: index
fast_track: false
effort: "🔧 14-21h · 🧮 10-15h · 💼 5-7h"
---

# Modul 5.2: LLM-Frameworks im Vergleich

LangChain ist 2026 nicht mehr der unumstrittene Standard. Die Framework-Landschaft hat sich fragmentiert: LangChain für breite Orchestrierung, LlamaIndex für RAG-Spezial, PydanticAI für Type-Safe-Agents, DSPy für programmatisches Prompt-Optimieren. Dieses Modul lehrt dich, **bewusst zu wählen** statt blind LangChain zu nehmen — und Pattern *unter* den Frameworks zu verstehen, damit du nicht Vendor-locked bist.

**Aufwand:** 🔧 14-21h · 🧮 10-15h · 💼 5-7h  
**Voraussetzungen:** Module 2.5, 2.7, 5.1

## Lernziel

Du hast dasselbe RAG- oder Chain-Beispiel in mindestens zwei Frameworks implementiert und kannst Stärken/Schwächen begründet vergleichen. Du verstehst Pattern, die unter allen Frameworks gleich sind.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Frameworks vs. SDKs vs. Pattern](theorie/frameworks-vs-sdks.md) | ✅ | 10min |
| 2 | [LangChain — Stärken und Schwächen 2026](theorie/langchain.md) | ✅ | 15min |
| 3 | [LlamaIndex — RAG-fokussiert](theorie/llamaindex.md) | ✅ | 10min |
| 4 | [PydanticAI — Type-Safe Agents](theorie/pydantic-ai.md) | ⏭️ | 10min |
| 5 | [DSPy — Programmatisches Prompt-Optimieren](theorie/dspy.md) | ⏭️ | 10min |
| 6 | [Haystack — Enterprise-Fokus](theorie/haystack.md) | ⏭️ | 10min |
| 7 | [Provider-Abstraktion: LiteLLM und OpenRouter](theorie/litelm-openrouter.md) | ✅ | 10min |
| 8 | [Vendor-SDKs als Alternative 2026](theorie/vendor-sdks.md) | ✅ | 10min |
| 9 | [Structured Outputs](theorie/structured-outputs.md) | ✅ | 20min |
| 10 | [Claude Agent SDK als Vergleichs-Framework](theorie/claude-agent-sdk.md) | ✅ | 15min |
| 11 | [Pattern unter allen Frameworks](theorie/gemeinsame-pattern.md) | ✅ | 10min |

## Praxis: Dasselbe Beispiel in zwei Frameworks

- Wähle einen konkreten Use-Case (z.B. "Dokument-Q&A mit Memory", oder Erweiterung deines RAG-Systems aus 5.1).
- Implementiere ihn **zwei Mal** in unterschiedlichen Frameworks:
  - Variante A: LangChain
  - Variante B: LlamaIndex *oder* PydanticAI *oder* direkter SDK-Code mit LiteLLM
- Vergleiche: Lines of Code, Lesbarkeit, Performance (Token-Verbrauch, Latenz), Wartbarkeit.
- Schreibe einen kurzen Vergleichs-Bericht: welches Framework für welchen Use-Case?
- Im Portfolio: `stufe-5_anwendungen/5-2-framework-vergleich/`.

## 🎁 Mehrwert-Mini-Projekt

**Persönliche Framework-Decision-Matrix** als Markdown: für welche Use-Case-Kategorie nimmst du welches Framework? Mit Begründung. Wert: bei jedem neuen Projekt eine Minute statt eine Stunde Recherche.

## 🌱 Open-Source-Pfad

Alle genannten Frameworks sind OSS — kein zusätzlicher OSS-Pfad nötig. Bonus: Implementiere die Variante B als reines SDK-Code mit Ollama (kein Framework), um zu sehen wie viel "magisch" das Framework macht.

## Outcome-Check

- [ ] Zwei Implementierungen desselben Use-Cases in zwei Frameworks
- [ ] Beide lauffähig mit vergleichbarem Output
- [ ] Vergleichs-Tabelle: Lines of Code, Latenz, Token-Verbrauch
- [ ] Framework-Decision-Matrix für eigene Zwecke
- [ ] **Mindestens ein Use-Case mit Structured Outputs umgesetzt** (Pydantic-Schema → validierter Output, kein manuelles Parsing)
- [ ] **Claude Agent SDK vs. Framework-Implementation für eigenen Use-Case begründet entschieden**
