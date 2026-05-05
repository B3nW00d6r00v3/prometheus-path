---
title: "Abgrenzung Skill vs. andere Patterns"
module: "5.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Abgrenzung Skill vs. andere Patterns

## Kernidee

Fünf Schichten stehen zur Verfügung: System-Prompt, Prompt, MCP-Tool, RAG und Skill. Jede hat ihre Stärke — wer verwechselt, wann was passt, baut ineffiziente oder falsche Lösungen. Die Abgrenzung ist die Kernkompetenz dieses Moduls.

## Im Detail

**Das Fünf-Schichten-Modell:**

| Pattern | Was es ist | Wann aktiv | Persistent | Versionierbar |
|---------|-----------|-----------|------------|---------------|
| **System-Prompt** | Globale Persona/Konventionen | Immer, jede Session | Nein | Kaum |
| **Prompt** | Per-Request-Anweisung | Ad-hoc, einmalig | Nein | Kaum |
| **MCP-Tool** | Ausführbare externe Funktion | Wenn LLM Funktion aufruft | Ja (Server) | Ja |
| **RAG** | Echtzeit-Daten aus Corpus | Wenn Kontext-Lookup nötig | Ja (Index) | Index-basiert |
| **Skill** | Domain-Wissen + Templates + optionaler Code | On-demand per Agent | Ja (Datei) | Ja (Git) |

**Konkrete Entscheidungsbeispiele:**

*Use-Case: "Jede Woche ein Status-Update aus Jira-Tickets generieren"*
- System-Prompt? Zu generisch, gilt für alle Sessions.
- Prompt? Müsste man jede Woche neu schreiben.
- MCP-Tool? Wäre die Jira-API-Verbindung — aber nicht das Wissen über das Format.
- RAG? Kein laufender Corpus, sondern ein Workflow.
- **Skill:** Klarer Gewinner — persistierte Anleitung, Templates, Beispiele.

*Use-Case: "Suche in meiner Notiz-Datenbank"*
- **RAG:** Dynamische Retrieval aus vielen Dokumenten. Skill wäre hier falsch.

*Use-Case: "Erstelle einen GitHub-Issue"*
- **MCP-Tool:** Externe Aktion, API-Call. Skill wäre hier falsch (Skills sind deklarativ, keine Aktionen).

*Use-Case: "Du bist ein freundlicher Assistent und antwortest immer auf Deutsch"*
- **System-Prompt:** Global, immer aktiv, Session-Konvention.

**Die wichtigste Fehlentscheidung vermeiden:**

Skill ≠ MCP-Tool. Skills enthalten **Wissen und Anweisungen**, keine ausführbaren Aktionen auf externe Systeme. Wer eine Skill baut, die DB-Queries ausführen soll, hat das Pattern verfehlt — das ist ein MCP-Tool.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📦 Code | [Hamel evals-skills GitHub](https://github.com/hamelsmu/evals-skills) | Konkrete Beispiele |

## Teste dein Verständnis

- [ ] Nenne für jeden der fünf Patterns ein konkretes Beispiel aus deinem Alltag oder Beruf.
- [ ] Ein Kollege möchte eine Skill bauen, die automatisch Pull Requests erstellt. Was ist falsch daran?
- [ ] Wann würdest du RAG einer Skill vorziehen — und warum?
