---
title: "Wann Skill, wann Prompt, wann MCP, wann RAG?"
module: "5.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann Skill, wann Prompt, wann MCP, wann RAG?

## Kernidee

Die Wahl des richtigen Patterns spart Entwicklungszeit und produziert bessere Ergebnisse. Eine Entscheidungsregel: Skill für wiederholbare Domain-Workflows, MCP-Tool für externe Aktionen, RAG für dynamische Dokumentensuche, Prompt für einmalige ad-hoc-Aufgaben.

## Im Detail

**Entscheidungsregel — vier Fragen:**

1. **Ist es eine externe Aktion (DB-Call, API, Datei schreiben)?**
   → **MCP-Tool**

2. **Sind es viele Dokumente, die dynamisch durchsucht werden müssen?**
   → **RAG**

3. **Ist es ein wiederholbarer Workflow mit klaren Vorlagen und Schritten?**
   → **Skill**

4. **Ist es eine einmalige ad-hoc-Anfrage ohne Wiederholungswert?**
   → **Prompt**

**Entscheidungsbaum:**

```
Use-Case identifizieren
        │
        ▼
Externe Aktion? → Ja → MCP-Tool
        │
        ▼
Viele Dokumente durchsuchen? → Ja → RAG
        │
        ▼
Wiederholbarer Workflow? → Ja → Skill
        │
        ▼
Einmalige Aufgabe? → Ja → Prompt
```

**Konkrete Use-Cases — Zuordnung:**

| Use-Case | Pattern | Begründung |
|----------|---------|-----------|
| "Suche in meinen 500 PDF-Notizen" | RAG | Viele Dokumente, dynamisch |
| "Erstelle jede Woche ein Status-Update" | Skill | Wiederholt, Template, kein Dokument-Corpus |
| "Sende eine E-Mail an team@..." | MCP-Tool | Externe Aktion (E-Mail-API) |
| "Erkläre mir was pgvector ist" | Prompt | Einmalige Frage, kein Wiederholungswert |
| "Jede Session: Antworte auf Deutsch" | System-Prompt | Globale Konvention, immer aktiv |

**Kombinationen sind möglich:**

Ein vollständiger Workflow kann mehrere Patterns kombinieren:
- Skill lädt Domain-Kontext für einen Workflow.
- Im Workflow-Schritt wird ein MCP-Tool für eine externe Aktion gerufen.
- Ein anderer Schritt nutzt RAG für dynamische Dokumentensuche.

Diese Kombinationen sind der Normalfall in komplexen Agenten-Systemen — Brücke zu Stufe 6.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | Praxisbeispiele für Pattern-Entscheidungen |

## Teste dein Verständnis

- [ ] Nenne für deinen eigenen Alltag je einen Use-Case für Skill, MCP-Tool, RAG und Prompt.
- [ ] Warum ist ein Status-Update-Generator eine Skill und kein Prompt?
- [ ] Wie würdest du einen Workflow designen, der Skill, MCP-Tool und RAG kombiniert?
