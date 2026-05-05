---
title: "Modul 5.3: MCP in der Praxis"
module: "5.3"
type: index
fast_track: false
effort: "🔧 12-17h · 🧮 10-14h · 💼 5-7h"
---

# Modul 5.3: MCP in der Praxis

In Modul 2.5 hast du MCP konzeptionell verstanden. Hier baust du jetzt einen **eigenen MCP-Server** und konsumierst MCP-Server, die andere bereitstellen. MCP ist 2026 Industriestandard mit über 9.400 Servern in der öffentlichen Registry — wer Agents oder LLM-Apps baut, muss MCP können. Diese Praxis-Erfahrung ist die Grundlage für Stufe 6 (Agenten). Dedizierter MCP-Sicherheits-Block plus A2A/ACP-Awareness.

**Aufwand:** 🔧 12-17h · 🧮 10-14h · 💼 5-7h  
**Voraussetzungen:** Modul 2.5, 2.7, 5.1, 5.2

## Lernziel

Du hast einen funktionierenden MCP-Server gebaut (z.B. für eigene Datenquelle), und du hast in deiner LLM-App mindestens drei MCP-Server konsumiert (z.B. Filesystem, Postgres, GitHub). Du hast den Sicherheits-Block angewendet und dein Server hat ein dokumentiertes Sicherheits-Audit. Du kennst MCP-konkurrierende Protokolle als Awareness.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [MCP-Architektur in der Tiefe](theorie/mcp-architektur.md) | ✅ | 15min |
| 2 | [MCP-Primitives: Tools, Resources, Prompts](theorie/mcp-primitives.md) | ✅ | 10min |
| 3 | [Public MCP Registry und Ecosystem 2026](theorie/mcp-registry.md) | ✅ | 10min |
| 4 | [MCP-Clients 2026](theorie/mcp-clients.md) | ⏭️ | 10min |
| 5 | [Eigenen MCP-Server bauen — die SDKs](theorie/mcp-server-sdks.md) | ✅ | 15min |
| 6 | [MCP vs. Function Calling vs. Plugin-Frameworks](theorie/mcp-vs-alternativen.md) | ✅ | 10min |
| 7 | [MCP-Sicherheits-Block](theorie/mcp-sicherheit.md) | ✅ | 20min |
| 8 | [A2A/ACP-Awareness](theorie/a2a-acp-awareness.md) | ⏭️ | 10min |

## Praxis: Eigener MCP-Server + Konsum von dreien + Sicherheits-Audit

**Eigener MCP-Server bauen** — wähle eine Datenquelle aus deinem Alltag:
- Eigene Notizen (Obsidian, Markdown-Files in einem Ordner)
- Eigene Bookmarks-DB
- Eigene Time-Tracking-Daten
- Eigener Kalender-Export
- Eigene Workout-Logs

Der Server soll mindestens:
- 2-3 Tools exposen (z.B. `search_notes`, `get_note_by_id`, `summarize_recent_notes`)
- 1-2 Resources (z.B. statische Liste aller Notizen-Titel)
- Saubere Tool-Beschreibungen mit Pydantic-Schemas
- Logging der Aufrufe
- **Sicherheits-Audit dokumentiert**: Read-Only-Default, Rate-Limits, Audit-Logs, keine Secrets in Argumenten

**Drei MCP-Server konsumieren** in deiner LLM-App oder in Claude Desktop / Cursor:
- Filesystem-MCP-Server
- GitHub-MCP-Server
- Einen Server deiner Wahl aus der Public Registry

**Sicherheits-Audit** — schreibe `security-audit.md` für deinen eigenen Server:
- Welche Tools sind read-only, welche destruktiv?
- Wo sind Confirmation-Schritte gefordert?
- Welche Rate-Limits gelten pro Tool?
- Wie sehen Audit-Logs aus (Beispiel-Eintrag)?
- Wer kontrolliert die Tool-Beschreibungen?
- Welche Sandbox-Mechanismen, falls Code-Execution involviert?

Im Portfolio: `stufe-5_anwendungen/5-3-mcp/` mit Code, README, `security-audit.md`, Screenshots, Reflexion.

## 🎁 Mehrwert-Mini-Projekt

**Persönlicher Productivity-MCP-Stack** für Claude Desktop oder Cursor: dein eigener Notizen-Server + Filesystem + GitHub + Time-Tracking. Damit hat dein KI-Assistent Zugriff auf alles, was du täglich brauchst.

## 🌱 Open-Source-Pfad

- MCP ist von Anfang an Open-Source.
- Verbinde deinen MCP-Server mit lokalem Ollama-Setup über [Open WebUI](https://openwebui.com), das MCP-Support hat (oder über Cline-Extension in VS Code).
- Damit hast du lokales LLM + lokale Datenquellen + lokale Tools — komplett OSS-Stack.

## Outcome-Check

- [ ] Eigener MCP-Server lauffähig mit mindestens 2 Tools
- [ ] Server-Code im Portfolio mit README
- [ ] Drei externe MCP-Server in eigener App oder Claude Desktop konsumiert
- [ ] **`security-audit.md` im Portfolio**
- [ ] **Read-Only-Default und Rate-Limits implementiert**
- [ ] **Audit-Logs strukturiert (JSON), Beispiel-Einträge dokumentiert**
- [ ] **A2A/ACP als Awareness-Bullets gelesen — du kannst beide in einem Satz erklären**
- [ ] Reflexion: was hat MCP einfacher gemacht?
