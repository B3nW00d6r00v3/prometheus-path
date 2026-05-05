---
title: "Anthropic Claude Skills 2025/2026"
module: "5.6"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Anthropic Claude Skills 2025/2026

## Kernidee

Anthropic Claude Skills sind die plattformspezifische Implementierung des Skills-Patterns für Claude Desktop und Claude Code. Sie definieren Format, Auto-Discovery-Mechanismus und Sandbox-Verhalten für Claude-native Skill-Integrationen.

## Im Detail

**Was Claude Skills sind:**

Claude Skills sind SKILL.md-Dateien, die Claude (Desktop, Code) beim Ausführen von Tasks automatisch laden kann. Der Discovery-Mechanismus gleicht Task-Beschreibungen mit Skill-Descriptions ab — ähnlich wie RAG, aber für Workflow-Wissen statt Dokumenten.

**Sandbox-Verhalten:**

Skills laufen in der Claude-Sandbox. Code-Snippets in einer Skill werden nicht direkt ausgeführt, sondern als Anleitung für den Agenten bereitgestellt. Das ist sicherer als MCP-Tools (die echte Code-Execution haben), aber weniger flexibel.

**Unterschied Claude Skills vs. Hamel evals-skills:**

| | Claude Skills (Anthropic) | Hamel evals-skills |
|---|---|---|
| Plattform | Claude Desktop / Claude Code | Plattform-agnostisch |
| Format | SKILL.md (kompatibel) | SKILL.md |
| Discovery | Anthropic-intern | Plattform-abhängig |
| Lizenz | Proprietär (Anthropic) | MIT (OSS) |

**Integration mit Claude Code:**

Claude Code (das CLI-Tool) lädt Skills automatisch aus einem konfigurierten Skills-Verzeichnis. Das macht Skills zum natürlichen Erweiterungspunkt für Claude Code Workflows — Brücke zu Modul 6.4 (Claude Agent SDK Skills-Integration).

**Verfügbarkeit Mai 2026:**

Claude Skills sind in Claude Desktop und Claude Code (Pro/Team) verfügbar. Details und aktueller Feature-Stand: Anthropic-Dokumentation prüfen, da sich das Feature noch weiterentwickelt.

**Empfehlung:** Beginne mit dem plattform-agnostischen Hamel-Format (SKILL.md) — das funktioniert mit Claude und anderen Plattformen. Dann Anthropic-spezifische Features als optionale Erweiterung.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic Claude Skills Overview](https://www.anthropic.com/news) | Aktueller Stand Mai 2026 |
| 📦 Code | [Claude Code Skills Beispiele](https://github.com/anthropics/anthropic-cookbook) | Praktische Beispiele |

## Teste dein Verständnis

- [ ] Was ist der Unterschied zwischen Claude Skills und Hamel evals-skills?
- [ ] Warum empfiehlt das Curriculum, mit dem plattform-agnostischen SKILL.md-Format zu beginnen?
- [ ] Wie laden Claude Desktop oder Claude Code Skills automatisch?
