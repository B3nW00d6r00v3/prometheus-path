# Inventar v2.1 → v2.2: Vollständiges Mapping

**Zweck:** Diese Datei ist die Sicherung gegen Inhaltsverlust und das verbindliche Referenzdokument für die v2.1→v2.2-Migration. Für jeden Block der v2.1-Einzeldateien ist hier vermerkt, in welche v2.2-Datei er übergeht und welcher Status (unverändert / erweitert / neu / verschoben / renumbered) gilt.

**Vorgehen beim Review:** Nach jeder gelieferten v2.2-Datei kann gegen dieses Inventar geprüft werden, ob alle erwarteten Inhalte enthalten sind und ob neue Inhalte korrekt markiert wurden.

**Quellfiles:** v2.1 Einzeldateien (`000_master.md`, `01_stufe1.md` ... `99_anhang.md` plus `00_inventar_v2_0_zu_v2_1.md`).

**Ziel-Schema v2.2:** 23 Einzeldateien — `000_master.md`, 11× Stufen, **4× Querschnitte (NEU: 16_querschnitt_safety)**, **3× Capstones renumberiert auf 17/18/19**, `99_anhang.md`, plus zwei Inventar-Files (`00_inventar_v2_0_zu_v2_1.md` und diese hier). Plus konsolidierte Datei `KI-Meisterlehrplan_v2.2_complete.md`.

---

## Status-Legende

- **unverändert** — Inhalt wird wörtlich aus v2.1 übernommen, ggf. mit aktualisiertem Datumsstempel.
- **erweitert** — bestehender Inhalt bleibt, neue Blöcke werden hinzugefügt (mit `*(NEU in v2.2)*`-Markierung).
- **angepasst** — bestehender Inhalt wird im Wortlaut leicht geändert (z.B. Voraussetzungs-Markierung, Aufwand-Bandbreite).
- **neu** — komplett neuer Block / Modul / Datei in v2.2.
- **verschoben** — Inhalt wechselt die Ziel-Datei (in v2.2 betrifft das die Capstone-Files durch Renumbering).
- **renumbered** — Datei wird unter neuer Nummer geführt (alte Querverweise müssen aktualisiert werden).

---

## Renumbering-Map (Pflicht-Such-und-Ersetz)

In allen Dateien außerhalb der Capstone-Files selbst sind folgende Querverweise zu aktualisieren:

| v2.1-Pfad | v2.2-Pfad |
|---|---|
| `15_capstone_a_engineer.md` | `17_capstone_a_engineer.md` |
| `16_capstone_b_foundations.md` | `18_capstone_b_foundations.md` |
| `17_capstone_c_strategist.md` | `19_capstone_c_strategist.md` |

**File-Index 15 ist in v2.2 absichtlich frei** (Lücke zwischen 14_querschnitt_production und 16_querschnitt_safety) — reserviert für künftige Erweiterung im Querschnitt-Block oder als Markierung der bewussten Trennung Querschnitte ↔ Capstones.

**Querverweise in Modul-Dateien**, die typischerweise aktualisiert werden müssen:
- "siehe `15_capstone_a_engineer.md`" → "siehe `17_capstone_a_engineer.md`"
- "Master-Sektion in `15_capstone_a_engineer.md`" → "Master-Sektion in `17_capstone_a_engineer.md`"
- "Capstone-Update siehe `16_capstone_b_foundations.md`" → "siehe `18_capstone_b_foundations.md`"
- "Cross-Track-Capstone siehe `17_capstone_c_strategist.md`" → "siehe `19_capstone_c_strategist.md`"

---

## Ziel-Datei 1: `000_master.md`

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Titel + Versionszeile | angepasst | wird v2.2.0, neue "Was ist neu in v2.2"-Hinweis-Box |
| Über dieses Curriculum | unverändert | |
| Track-Wahl | erweitert | Aufwand-Übersicht von einer Spalte auf drei Bandbreiten (optimistisch / realistisch / mit Pufferung); Hinweis auf Express-Pfade |
| Outcome-Rubrik pro Track | erweitert | von 6 auf 7 messbare Kompetenzen pro Track (Frontier-Punkt 7); Self-Assessment-Schwellen entsprechend angepasst |
| Mid-Stage-Self-Assessments | unverändert | |
| Stufen-Übersicht | erweitert | neue Module-Hinweise pro Stufe (5.6, 6.0, 6.6, 6.7, 7.5, 7.6, 9.7); Aufwand-Spalten kalibriert; Reihenfolge-Hinweis "6.0 Pflicht-Vorlauf" |
| Querschnitte (Just-in-Time) | erweitert | 4. Querschnitt 16_querschnitt_safety NEU; Renumbering-Hinweis-Box |
| Capstone-Projekte | erweitert | File-Pfade auf 17/18/19 aktualisiert; Hinweis auf Phasen 7c/7d/7e in Capstone-A |
| Architektur-Entscheidungen | erweitert | Punkte 18-24 NEU (Context Engineering Pflicht-Vorlauf, Skills-Pattern, Reasoning-Familie, Schwarm/Agentic-OS, AI-Safety-Querschnitt, Aufwand-Realismus, Failure-Case-Library) |
| Quick-Start | erweitert | Punkt 9 (Modul 6.0 Pflicht-Vorlauf); Erwartete-Dauer-Tabelle auf realistische Aufwände kalibriert |
| **NEU: Express-Varianten pro Track** | neu | drei Express-Profile (🔧/🧮/💼) mit ehrlich reduzierter Outcome-Rubrik |
| **NEU: Track-Sequenzdiagramme** | neu | Mermaid-Visualisierungen für 🔧/🧮/💼 + 🥇-Hinweis |
| Nutzungs-Hinweise | unverändert | |
| Verzeichnisstruktur | erweitert | neue Files (Querschnitt 16, neues Inventar), Capstone-Renumbering, freie Lücke 15 dokumentiert |
| Was kommt als nächstes? | angepasst | v2.3-Roadmap statt v2.2-Roadmap (Voice-Capstone, Multi-Modal, Peer-Review, Live-Failure-Library, Ultra-Light) |
| Lizenz und Credits | erweitert | Stanford CS336 als Vergleichsreferenz; Anthropic Building Effective Agents + Effective Context Engineering; Hamel evals-skills + AI Evals FAQ; OSS-Stack erweitert (Letta, AutoGen, CrewAI, Claude Agent SDK, OpenAI Agents SDK) |
| **NEU: Aktualisierungslog v2.2.0** | neu | Welle 1/2/3-Struktur, Detail-Liste neuer Module |
| Aktualisierungslog v2.1 (Auszug) | unverändert | bleibt als Historie |

---

## Ziel-Datei 2: `01_stufe1.md` — Onboarding & Mindset

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Stufe-1-Header + Lernziel | unverändert | |
| Modul 1.1 Tools-Setup | unverändert | (Re-check Aug 2026 für Modell-Empfehlungen bleibt) |
| Modul 1.2 GitHub & Portfolio | unverändert | |
| Modul 1.3 Track-Wahl + Vorgeschmack-Demo | unverändert | (in v2.3 ggf. um eigenes Vorgeschmack-Demo-Repo ergänzen) |
| Quellen für die Stufe | unverändert | |
| Free-Zertifikate | unverändert | |
| Stufen-Outcome | unverändert | |
| Aktualisierungslog | erweitert | v2.2-Eintrag (keine inhaltlichen Änderungen, nur Versions-Vermerk) |

---

## Ziel-Datei 3: `02_stufe2.md` — Grundlagen

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Stufe-2-Header + Lernziel | unverändert | |
| Modul 2.1 LLM Foundations LIGHT | unverändert | |
| Cost-Awareness-Mini-Block (vor 2.2) | unverändert | |
| Modul 2.2 KI-Tools-Landschaft | unverändert | |
| Modul 2.3 Prompt Engineering | unverändert | |
| Modul 2.4 KI-Realität verstehen | unverändert | |
| Modul 2.5 LLM Foundations VERTIEFT | erweitert | **NEU: Block 2.5.5 Reasoning-Awareness** als Vorlauf zu Modul 7.5 (alle Tracks, +3-5h) |
| Modul 2.6 No-Code & Vibe-Coding | unverändert | |
| Modul 2.7 Python für KI | unverändert | |
| Free-Zertifikate | unverändert | |
| Stufen-Outcome | erweitert | Outcome zu Reasoning-Awareness ergänzt |
| Aktualisierungslog | erweitert | v2.2-Eintrag mit 2.5.5-Block-Doku |

---

## Ziel-Datei 4: `03_stufe3.md` — Arbeitsmethoden mit KI

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk) |

---

## Ziel-Datei 5: `04_stufe4.md` — Programmier-Foundation

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk) |

---

## Ziel-Datei 6: `05_stufe5.md` — Anwendungen bauen

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Stufe-5-Header + Lernziel | erweitert | Hinweis auf Modul 5.6 als neuer Pflicht-Abschluss |
| Modul 5.0 Eval-Mini-Block | unverändert | |
| Modul 5.1 RAG modern | erweitert | **NEU: Block "RAG-Frontier 2026"** mit HyDE, Reasoning-Augmented Retrieval, GraphRAG, ColBERTv2/Late-Interaction, Reranking-Cascades; Aufwand +3-5h für 🔧/🧮, +1-2h für 💼; Outcome-Check ergänzt |
| Modul 5.2 LLM-Frameworks | erweitert | **NEU: Block "Structured Outputs / Constrained Generation"** (Pydantic + Outlines/Instructor + Function-Calling-Strict); **NEU: Claude Agent SDK als Vergleichs-Framework** neben LangChain/LlamaIndex/PydanticAI/DSPy; Aufwand +2-3h für 🔧 |
| Modul 5.3 MCP in der Praxis | unverändert | (MCP-Sicherheits-Block aus v2.1 bleibt; v2.2 ergänzt nicht hier, sondern via Querschnitt 16) |
| Modul 5.4 GenAI-Anwendungs-Eval | unverändert | |
| Modul 5.5 Frontend für LLM-Apps | unverändert | |
| **NEU: Modul 5.6 Skills-Pattern** | neu | Aufwand 4-6h 🔧, 4-6h 🧮, 3-4h 💼; Voraussetzungen 5.3+5.4; Pflicht 🔧, empfohlen 🧮/💼 |
| Capstone-Engineer-Update nach Stufe 5 | erweitert | Verweis auf Modul 5.6 als zusätzliche Phase; Renumbering-Hinweis (Capstone in `17_capstone_a_engineer.md`) |
| Free-Zertifikate | unverändert | |
| Stufen-Outcome | erweitert | Modul 5.6 + RAG-Frontier + Structured Outputs Outcome-Bullets |
| Aktualisierungslog | erweitert | v2.2-Eintrag |

---

## Ziel-Datei 7: `06_stufe6.md` — Agenten

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Stufe-6-Header + Lernziel | erweitert | Hinweis auf 6.0 als Pflicht-Vorlauf, plus 6.6/6.7 als neue Pflicht-Module |
| **NEU: Modul 6.0 Context Engineering** | neu | **Pflicht-Vorlauf zu 6.1-6.5 für alle Tracks**; Aufwand 8-12h 🔧/🧮, 4-6h 💼; Voraussetzungen Stufe 5 inkl. 5.6 |
| Modul 6.1 Agent-Patterns | angepasst | Voraussetzungen-Bullet um Modul 6.0 ergänzt |
| Modul 6.2 Multi-Agent + Trajectory-Eval | angepasst | Voraussetzungen-Bullet um Modul 6.0 ergänzt |
| Modul 6.3 RL & Agent-Theorie | unverändert | |
| Modul 6.4 Vendor-Patterns | erweitert | **NEU: Claude Agent SDK Tiefe** (Sub-Agent-Spawn, Skills-Integration, Compaction, Session-Mgmt); +1-2h für 🔧 |
| Modul 6.5 Computer Use | unverändert | |
| **NEU: Modul 6.6 Agentenschwärme** | neu | Conductor / Hierarchical / Peer-Swarm / Hybrid; Aufwand 8-12h 🔧, 6-10h 🧮, 3-5h 💼; Voraussetzungen 6.0, 6.2, 6.4; Pflicht 🔧 |
| **NEU: Modul 6.7 Agentic OS** | neu | Framework-Pattern + System-Layer-Awareness; Aufwand 6-10h 🔧, 4-6h 🧮/💼; Voraussetzungen 6.0, 5.6, 6.6 |
| Capstone-Engineer-Update nach Stufe 6 | erweitert | Phasen-Erweiterung um 6.6 + 6.7-Hinweise; Renumbering-Verweis |
| Free-Zertifikate | unverändert | |
| Stufen-Outcome | erweitert | Stark erweitert um 6.0, 6.6, 6.7 Outcome-Bullets |
| Aktualisierungslog | erweitert | v2.2-Eintrag |

---

## Ziel-Datei 8: `07_stufe7.md` — Deep Learning Foundations

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Stufe-7-Header + Lernziel | unverändert | |
| Modul 7.1 NN & Backpropagation | unverändert | |
| Modul 7.2 Transformer modern | unverändert | |
| Modul 7.3 Computer Vision | unverändert | |
| Modul 7.4 Multimodale KI | erweitert | **NEU: Block "Audio/Voice-AI"** (Whisper, ElevenLabs, OpenAI Realtime API, STT/TTS-Patterns); **NEU: Block "Video-Generation Awareness"** (Veo 3, Sora, Runway Gen-4, Pika); Aufwand +6-10h 🔧, +12-18h 🧮, +3-5h 💼 |
| **NEU: Modul 7.5 Reasoning-Modelle als Architektur-Familie** | neu | Test-Time-Compute, GRPO, PRM/ORM, Inferenz-Patterns; Aufwand 4-6h 🔧, 12-18h 🧮, 3-5h 💼; Voraussetzungen 7.1+7.2, Stufe 8 für 🧮; Pflicht 🧮 |
| **NEU: Modul 7.6 Distributed Training systematisch** | neu | DDP, FSDP, ZeRO 1/2/3, Megatron-Style; Aufwand 4-6h 🔧, 18-30h 🧮, 0h 💼; Voraussetzungen 7.1+7.2 + 10.2; Pflicht 🧮 |
| Capstone-Foundations-Update nach Stufe 7 | erweitert | Verweis auf 7.5 + 7.6; Renumbering-Verweis |
| Free-Zertifikate | unverändert | |
| Stufen-Outcome | erweitert | Audio + 7.5 + 7.6 Outcome-Bullets |
| Aktualisierungslog | erweitert | v2.2-Eintrag |

---

## Ziel-Datei 9: `08_stufe8.md` — Klassisches ML & Statistik

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk) |

---

## Ziel-Datei 10: `09_stufe9.md` — KI-Strategie & Business

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Stufe-9-Header + Lernziel | erweitert | Hinweis auf 9.7 als neuer Modul-Abschluss |
| Modul 9.0 Datenstrategie | unverändert | |
| Modul 9.1 Use-Cases | unverändert | |
| Modul 9.2 ROI & Business Case | unverändert | |
| Modul 9.3 Operating Model | unverändert | |
| Modul 9.4 Build-vs-Buy | unverändert | |
| Modul 9.5 EU AI Act & Compliance | unverändert | |
| Modul 9.6 Change Management | unverändert | |
| **NEU: Modul 9.7 Failure-Case-Library DE/EU 2024-2026** | neu | Aufwand 3-5h 🔧/🧮, 8-12h 💼; Voraussetzungen 9.0-9.6; Pflicht 💼, empfohlen 🔧/🧮 |
| Capstone-Strategist-Update nach Stufe 9 | erweitert | Verweis auf 9.7; Renumbering-Verweis |
| Free-Zertifikate | unverändert | |
| Stufen-Outcome | erweitert | 9.7 Outcome-Bullets |
| Aktualisierungslog | erweitert | v2.2-Eintrag |

---

## Ziel-Datei 11: `10_stufe10.md` — Spezialisierung & Production

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert (Decision-Framework + Eval-as-CI bleiben Pflicht-Inhalte aus v2.1) |
| Querverweise auf Capstone-Files | angepasst (Renumbering 15→17, 16→18, 17→19) |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk + Renumbering-Hinweis) |

---

## Ziel-Datei 12: `11_stufe11.md` — Forschung & Cutting-Edge

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk) |

---

## Ziel-Datei 13: `12_querschnitt_math.md` — Math-Foundation

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Math-Diagnose-Test als Gate-Sektion | erweitert | Stanford CS336 als zusätzliche Erfahrungs-Quelle in Diagnose-Gate-Begründung |
| Lineare Algebra | erweitert | **NEU: Stanford CS336 als Vertiefungs-Referenz für 🧮** (parallel zu Stufe 7) |
| Calculus | unverändert | |
| Wahrscheinlichkeit & Statistik | unverändert | |
| Anwendungs-Anker | unverändert | |
| Track-spezifische Empfehlungen | unverändert | |
| Outcome-Check | unverändert | |
| Aktualisierungslog | erweitert | v2.2-Eintrag mit CS336-Doku |

---

## Ziel-Datei 14: `13_querschnitt_eval.md` — Eval

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert (Hamel Husain bleibt Pflicht-Lektüre) |
| Optional: Hinweis auf Hamel evals-skills (Mär 2026) als Brücke zu Modul 5.6 in Tools-Liste oder Free-Zertifikate-Sektion | erweitert (Mini-Edit) |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk) |

---

## Ziel-Datei 15: `14_querschnitt_production.md` — Production & LLMOps

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert |
| Querverweise auf Querschnitt 16 (Safety) | erweitert (neue Querverweis-Stelle, weil Production und Safety oft parallel laufen) |
| Aktualisierungslog | erweitert (v2.2-Versions-Vermerk) |

---

## Ziel-Datei 16 (NEU): `16_querschnitt_safety.md` — AI Safety / Red-Teaming

| Inhalt | v2.2 Status |
|---|---|
| **Komplett neu** | neu |
| Threat-Model-Familie für LLM-Apps 2026 (Prompt Injection, Jailbreaking, PII-Leakage, Output-Manipulation, Tool-Misuse, Denial-of-Wallet, Model-Extraction) | neu |
| Red-Teaming-Methodik (Tools: Garak, PyRIT, Promptfoo Red Team Mode) | neu |
| Defense-Patterns (Input-Sanitization, Output-Filtering, Allowlist, Confirmation-Steps, Rate-Limiting, Sandboxing) | neu |
| OWASP Top 10 for LLM Applications 2025 als Pflicht-Referenz | neu |
| Anthropic RSP + Project Glasswing als Awareness | neu |
| Red-Team-as-CI (analog Eval-as-CI) | neu |
| Praxis: Red-Team-Pass auf eigenen Capstone | neu |
| Aufwand 6-12h 🔧, 6-12h 🧮, 4-8h 💼; Pflicht 🔧 vor Capstone-Operate | neu |

---

## Ziel-Dateien 17-19: Capstones (renumbered)

### `17_capstone_a_engineer.md` (vormals `15_capstone_a_engineer.md`)

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Konzept | unverändert | |
| Phasen 1-7 | unverändert (außer Renumbering interner Querverweise) | |
| Phase 7b Computer Use | unverändert | |
| **NEU: Phase 7c Schwarm-/Conductor-Vergleich** | neu | optional, baut auf Modul 6.6 |
| **NEU: Phase 7d Agentic-OS-Layer** | neu | optional, baut auf Modul 6.7 |
| **NEU: Phase 7e Red-Team-Pass** | neu | Pflicht für Operate-Phase-Goldstandard, baut auf Querschnitt 16 |
| Phase 8 Production-Hardening | unverändert | |
| Phase 9 Operate-Phase | unverändert (Goldstandard bleibt) | |
| Capstone-Abschluss-Master-Sektion | unverändert | (gilt weiter für alle drei Capstones, da Master-Sektion zentral hier) |
| Outcome-Schwellen | erweitert | um Phase-7c/7d/7e-Schwellen |
| Aktualisierungslog | erweitert | v2.2-Eintrag mit Phasen-Erweiterung und Renumbering-Vermerk |

### `18_capstone_b_foundations.md` (vormals `16_capstone_b_foundations.md`)

| v2.1 Inhalt | v2.2 Status |
|---|---|
| Alle Inhalte | unverändert (Capstone-Foundations bleibt strukturell identisch) |
| Querverweise auf 15_capstone_a_engineer.md | angepasst (Master-Sektion in `17_capstone_a_engineer.md`) |
| Aktualisierungslog | erweitert (v2.2-Eintrag mit Renumbering-Vermerk) |

### `19_capstone_c_strategist.md` (vormals `17_capstone_c_strategist.md`)

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Alle Inhalte | unverändert (Phasen 1-9 + Operate-Phase bleiben) | |
| Phase 1.5 Datenstrategie | unverändert | |
| Phase 3.5 Change Management | unverändert | |
| Phase 5.5 S9-Self-Assessment | unverändert | |
| Capstone-Abschluss-Verweis | angepasst | Master-Sektion in `17_capstone_a_engineer.md` |
| Outcome-Schwellen | erweitert | optional um 9.7-Failure-Case-Anker (Outcome-Punkt 7 aus 💼-Rubrik) |
| Aktualisierungslog | erweitert | v2.2-Eintrag mit Renumbering-Vermerk + 9.7-Anker |

---

## Ziel-Datei 20: `99_anhang.md`

| v2.1 Inhalt | v2.2 Status | Anmerkung |
|---|---|---|
| Anhang-Header | erweitert | Hinweis auf zwei Inventar-Dateien |
| **NEU: v2.2.0 — Mai 2026 Aktualisierungslog** | neu | vor v2.1-Eintrag, Welle 1/2/3-Struktur, Migration-Hinweise |
| v2.1.0 Aktualisierungslog | unverändert | bleibt als Historie |
| v2.0.0 Aktualisierungslog | unverändert | bleibt als Historie |
| Aktualisierungs-Mechanik | unverändert | (Mechanik ist robust gegenüber Modul-Erweiterung) |
| Repo-Veröffentlichungs-Härtung | erweitert | README-Vorlage Schnellstart auf v2.2-Numbering (Querschnitt 16, Capstones 17/18/19); Track-Aufwände-Sektion auf realistische Bandbreite + Express-Variante kalibriert |
| Coursera-Audit-Modus-Doku | unverändert | |
| Capstone-Timeline | unverändert | (mit Operate-Phase aus v2.1 bleibt) |
| Cross-Track-Capstone-Hinweis | unverändert | |
| Glossar | erweitert | NEU: Agentic OS, Agentenschwarm, Context Engineering, Distributed Training, GraphRAG, HyDE, Late-Interaction Retrieval, Reasoning-Modelle, Red-Team-as-CI, Skill / SKILL.md, Structured Outputs, Test-Time-Compute |
| Aktualisierungslog dieser Datei | erweitert | v2.2-Eintrag |

---

## Neue Inhalte (gesamt) — was in v2.2 hinzukommt

**Welle 1 — Master & Struktur:**
1. Aufwand-Bandbreiten-Tabelle (drei Spalten) (`000_master.md`)
2. Express-Varianten pro Track (`000_master.md`)
3. Track-Sequenzdiagramme als Mermaid (`000_master.md`)
4. Outcome-Rubrik-Erweiterung von 6 auf 7 Punkte pro Track (`000_master.md`)
5. Architektur-Entscheidungen 18-24 (`000_master.md`)
6. Stanford CS336 als Vergleichs-/Vertiefungs-Referenz (`000_master.md`, `12_querschnitt_math.md`, `99_anhang.md`)
7. Capstone-Renumbering 15/16/17 → 17/18/19 mit Lücke 15 für künftige Erweiterung
8. Inventar-Datei `00_inventar_v2_1_zu_v2_2.md` (diese hier)

**Welle 2 — Erweiterungen bestehender Module:**
9. RAG-Frontier-Block in 5.1 (HyDE, GraphRAG, ColBERTv2/Late-Interaction, Reasoning-Augmented Retrieval, Reranking-Cascades)
10. Structured Outputs / Constrained Generation als Block in 5.2
11. Claude Agent SDK als Vergleichs-Framework in 5.2 + Tiefe in 6.4
12. Audio/Voice-AI-Block in 7.4 (Whisper, ElevenLabs, OpenAI Realtime API)
13. Video-Generation-Awareness-Block in 7.4 (Veo 3, Sora, Runway Gen-4, Pika)

**Welle 3 — neue Pflicht-Module + Querschnitt + Capstone-Phasen:**
14. Modul 2.5.5 Reasoning-Awareness-Block (Vorlauf zu 7.5)
15. Modul 5.6 Skills-Pattern (Claude Skills, Codex Skills, Hamel evals-skills)
16. Modul 6.0 Context Engineering (Pflicht-Vorlauf zu Stufe 6)
17. Modul 6.6 Agentenschwärme (Conductor / Hierarchical / Peer-Swarm / Hybrid)
18. Modul 6.7 Agentic OS (Framework-Pattern + System-Layer)
19. Modul 7.5 Reasoning-Modelle als Architektur-Familie
20. Modul 7.6 Distributed Training systematisch
21. Modul 9.7 Failure-Case-Library DE/EU 2024-2026
22. Querschnitt 16 AI Safety / Red-Teaming
23. Capstone-A Phase 7c Schwarm-/Conductor-Vergleich (optional)
24. Capstone-A Phase 7d Agentic-OS-Layer (optional)
25. Capstone-A Phase 7e Red-Team-Pass (Pflicht für Operate-Goldstandard)

---

## Lieferungs-Reihenfolge (umgesetzt)

1. **Diese Datei** — `00_inventar_v2_1_zu_v2_2.md` ✓ (Welle 1 fertig)
2. `000_master.md` — Welle 1 fertig ✓
3. `12_querschnitt_math.md` — Welle 1 fertig ✓
4. `99_anhang.md` — Welle 1 fertig ✓
5. `05_stufe5.md` — Welle 2 (Erweiterungen 5.1+5.2)
6. `06_stufe6.md` — Welle 2 (Erweiterung 6.4)
7. `07_stufe7.md` — Welle 2 (Erweiterung 7.4)
8. `02_stufe2.md` — Welle 3 (NEU: Block 2.5.5)
9. `05_stufe5.md` — Welle 3 (NEU: Modul 5.6)
10. `06_stufe6.md` — Welle 3 (NEU: Modul 6.0 prepend, 6.6+6.7 append)
11. `07_stufe7.md` — Welle 3 (NEU: 7.5+7.6 append)
12. `09_stufe9.md` — Welle 3 (NEU: Modul 9.7 append)
13. `16_querschnitt_safety.md` — Welle 3 (komplett neu)
14. `17_capstone_a_engineer.md` — Welle 3 (Phasen 7c/7d/7e + Renumbering)
15. `18_capstone_b_foundations.md` — Welle 3 (nur Renumbering)
16. `19_capstone_c_strategist.md` — Welle 3 (Renumbering + 9.7-Anker)
17. Stufen-Module mit Capstone-Querverweisen (`10_stufe10.md`) — Welle 3 (Renumbering)
18. `13_querschnitt_eval.md`, `14_querschnitt_production.md` — Welle 3 (Mini-Edits + Querschnitt-16-Verweis + Versions-Vermerk)
19. `01_stufe1.md`, `03_stufe3.md`, `04_stufe4.md`, `08_stufe8.md`, `11_stufe11.md` — Welle 3 (nur Versions-Vermerk im Aktualisierungslog)
20. `KI-Meisterlehrplan_v2.2_complete.md` — finale Konkatenation aller v2.2-Einzeldateien

---

**Stand:** Dieses Inventar ist das verbindliche Referenzdokument für die v2.2-Migration. Bei jeder gelieferten Datei wird gegen die hier vermerkten v2.1-Inhalte und v2.2-Status-Markierungen geprüft.

**Letzte Aktualisierung:** 04. Mai 2026
