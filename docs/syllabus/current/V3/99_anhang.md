# Anhang

Dieser Anhang enthält:
1. **Aktualisierungs-Mechanik** — 3-Monats-Audit-Schema für volatile A-Tiefe-Module
2. **Repo-Veröffentlichungs-Härtung** — README-Vorlage, CC-BY-SA-4.0-Lizenz, Contribution-Guide, Issue-Templates
3. **Coursera-Audit-Modus-Dokumentation**
4. **Capstone-Timeline** (orientativ)
5. **Cross-Track-Capstone-Hinweis**
6. **Optionales Glossar**

> **Changelog:** Für den vollständigen Aktualisierungslog (v2.0, v2.1, v2.2) siehe [Changelog](../../../changelog.md).
>
> **Inventar-Dateien:** Für strukturiertes Migrations-Mapping siehe `00_inventar_v2_0_zu_v2_1.md` (v2.0→v2.1) und `00_inventar_v2_1_zu_v2_2.md` (v2.1→v2.2).

---


# 1. Aktualisierungs-Mechanik

Das Curriculum ist ein lebendes Artefakt. Die Aktualisierungs-Mechanik in v2.1 differenziert nach Volatilität:

## A-Tiefe-Module (3-Monats-Audit)

Diese Module enthalten die volatilsten Inhalte (Modell-Empfehlungen, Tool-Landschaft, neue Pattern). Audit alle 3 Monate, nicht alle 6:

- **Modul 5.x** (RAG, Frameworks, MCP, Eval, UX) — Tool-Landschaft volatil
- **Modul 6.x** (Agents, Computer Use, Vendor-SDKs) — Vendor-SDKs ändern sich monatlich
- **Modul 7.1, 7.2** (Neural Network Foundations, Modern Transformer) — moderate Volatilität, Architektur-Updates
- **Modul 7.4** (Multimodal) — sehr volatil, Frontier-Multimodal-Modelle ändern sich monatlich
- **Modul 9.5** (Compliance) — EU AI Act Auslegungs-Praxis und Digital Omnibus
- **Modul 9.0** (Datenstrategie) — Daten-Plattformen-Landschaft
- **Modul 10.1, 10.2, 10.3** (Marketing, Fine-Tuning, LLMOps) — gesamte Stufe 10 ist A-Tiefe-volatil
- **Querschnitt Eval** — Tools, LLM-as-Judge-Bias-Forschung
- **Querschnitt Production** — Inferenz-Server, Cost-Tools, Sandboxing

**Audit-Schema pro 3-Monats-Audit:**

1. Pro 🔄-Bullet: ist das Verfallsdatum erreicht? Wenn ja: aktualisieren oder durch ✅ markieren als "noch gültig".
2. Tool-Listen prüfen: gibt es neue Standard-Tools? Sind alte obsolet?
3. Modell-Empfehlungen prüfen: Frontier-Models, OSS-Models, Embedding-Models.
4. Bei Compliance (9.5): EU-AI-Act-Service-Desk-Updates, BfDI-Stellungnahmen, BSI-Empfehlungen.
5. Changelog updaten mit Datum + Änderungs-Liste.

## B-Tiefe-Module (Halbjahres-Audit)

Diese Module sind weniger volatil — strukturelles Wissen, das sich langsam ändert:

- **Stufen 1-4** (Onboarding, KI-Foundation, Coding, Web-Foundations) — primär Tool-Updates
- **Modul 7.3** (Computer Vision Awareness)
- **Module 8.1-8.5** (Klassisches ML) — sehr stabil, Tool-Updates
- **Module 9.1-9.4, 9.6** (Use-Case-Discovery, Business Case, Operating Model, Build-vs-Buy, Change Management) — methodisch stabil
- **Querschnitt Math** — sehr stabil, primär neue Online-Kurse
- **Stufe 11** (Forschung) — methodisch stabil, primär Newsletter/Podcasts/Blogs-Landschaft

**Audit-Schema halbjährlich:** standard wie Modul-Re-check-by-Datum.

## Jahres-Audit (Major-Update)

Einmal jährlich (typisch Mai/Juni):
- Strukturelle Anpassungen falls nötig (z.B. neue Querschnitte für aufkommende Disziplinen).
- Versions-Major-Update (v2.1 → v3.0 oder ähnlich).
- Vollständiges Re-View aller Stufen-Outcome-Schwellen.

## Geplante Re-Checks

**Aug 2026 (3-Monats-Audit für v2.1, geplant):**
- Alle A-Tiefe-Module (Module 5.x, 6.x, 7.4, 9.0, 9.5, 10.x, Querschnitte Eval+Production)
- Capstone-Outcome-Schwellen erste Kalibrierung mit Real-Org-Erfahrungen

**November 2026 (Halbjahres-Audit, geplant):**
- B-Tiefe-Module (Stufen 1-4, 7.3, 8.x, 9.x außer 9.0+9.5, Querschnitt Math, Stufe 11)
- Vendor-SDK-Updates (6.4)
- Branchen-Reports aktualisieren (11.2)
- MCP-Server-Registry-Wachstum (5.3)

**Mai 2027 (Jahres-Audit, vorgemerkt):**
- Generelle Aktualitätsprüfung aller Module
- Strukturelle Anpassungen falls nötig
- v2.2 oder v3.0 je nach Umfang

---

# 2. Repo-Veröffentlichungs-Härtung

Wenn du dieses Curriculum als eigenes öffentliches Repo veröffentlichst, sind folgende Elemente Pflicht für solide Open-Source-Praxis. Im Rahmen der `99_anhang.md` werden hier Vorlagen bereitgestellt.

## README.md-Vorlage

```markdown
# KI-Meisterlehrplan v2.2

Selbst-gepactes Curriculum für KI-Engineering, Foundations und Strategy. Drei Tracks mit klaren Tiefen-Markierungen pro Modul, 11 Stufen plus 4 Querschnitte plus 3 Capstones.

## Schnellstart

1. Lies `000_master.md` für Track-Wahl und Outcome-Rubriken.
2. Wähle einen Track: 🔧 Engineer / 🧮 Foundations / 💼 Strategist.
3. Folge den Stufen-Dateien `01_stufe1.md` bis `11_stufe11.md`.
4. Vertiefe mit Querschnitten `12_querschnitt_math.md`, `13_querschnitt_eval.md`, `14_querschnitt_production.md`, `16_querschnitt_safety.md` (Just-in-Time).
5. Capstone in `17_capstone_a_engineer.md`, `18_capstone_b_foundations.md`, `19_capstone_c_strategist.md`.

## Track-Aufwände (orientativ, realistische Bandbreite — siehe `000_master.md` für volle drei-Bandbreiten-Tabelle)

- 🔧 Engineer: 390-620h *(Express-Variante: ~150-220h)*
- 🧮 Foundations: 870-1440h *(Express-Variante: ~250-400h)*
- 💼 Strategist: 490-700h *(Express-Variante: ~150-220h)*

## Lizenz

Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). Siehe `LICENSE.md`.

## Beitragen

Siehe `CONTRIBUTING.md`. Issues und Pull Requests willkommen.

## Versionierung

Siehe `99_anhang.md` für Aktualisierungslog und Aktualisierungs-Mechanik.

## Aktuelle Version

v2.2.0 (Mai 2026). Nächste Aktualisierung: Aug 2026 (3-Monats-Audit für A-Tiefe-Module).
```

## LICENSE.md (CC BY-SA 4.0)

```
Dieses Werk ist lizenziert unter einer
Creative Commons Attribution-ShareAlike 4.0 International License.

Du darfst:
- Teilen — das Material in jedwedem Format oder Medium vervielfältigen und weiterverbreiten
- Bearbeiten — das Material remixen, verändern und darauf aufbauen, und zwar für beliebige Zwecke, auch kommerziell

Unter folgenden Bedingungen:
- Namensnennung — Du musst angemessene Urheber- und Rechteangaben machen, einen Link zur Lizenz beifügen und angeben, ob Änderungen vorgenommen wurden.
- Weitergabe unter gleichen Bedingungen — Wenn du das Material remixt, veränderst oder anderweitig direkt darauf aufbaust, darfst du deine Beiträge nur unter derselben Lizenz wie das Original verbreiten.

Vollständiger Lizenztext:
https://creativecommons.org/licenses/by-sa/4.0/legalcode.de
```

**Begründung der Lizenzwahl:** CC BY-SA 4.0 ist Standard für Bildungsmaterial. Es erlaubt kommerzielle Nutzung (z.B. wenn ein Trainer das Curriculum als Basis für bezahlte Kurse nutzt), zwingt aber zur Weitergabe unter gleicher Lizenz — verhindert "Wissen-Enclosure" durch große Plattformen.

## CONTRIBUTING.md-Vorlage

```markdown
# Contributing

Danke fürs Vorbeischauen! Beiträge sind willkommen.

## Wie beitragen

### Issues

Issues sind willkommen für:
- Inhaltliche Fehler oder Ungenauigkeiten
- Veraltete Tool-Empfehlungen
- Missing Resources
- Strukturelle Verbesserungs-Vorschläge

Bitte nutze die passenden Issue-Templates.

### Pull Requests

Pull Requests sind willkommen für:
- Tippfehler-Korrekturen
- Veraltete Tools/Modelle aktualisieren
- Neue Free-Resources hinzufügen
- Neue Open-Source-Pfad-Optionen

Größere strukturelle Änderungen bitte erst als Issue diskutieren.

## Format-Konventionen

- Markdown mit Header-Hierarchie (siehe bestehende Dateien)
- 🔧/🧮/💼/🥇 Tiefen-Markierungen
- 🟢 (stabil) / 🔄 (volatil mit Verfallsdatum) / 🌱 (Open-Source-Pfad) / 🎁 (Mini-Projekt)
- Änderungen im zentralen Changelog dokumentieren

## Pull-Request-Prozess

1. Fork → Branch → Änderung → PR
2. PR-Description: was geändert, warum
3. Review wird typisch innerhalb 2-4 Wochen erfolgen
4. Bei A-Tiefe-Modulen: Quellen für Aktualisierungen verlinken

## Verhaltens-Kodex

Konstruktiv, respektvoll, faktenbasiert. Keine Werbung für eigene Bezahl-Produkte als "Pflicht-Empfehlung".
```

## Issue-Templates

### `.github/ISSUE_TEMPLATE/inhaltlicher-fehler.md`

```markdown
---
name: Inhaltlicher Fehler
about: Faktischer Fehler oder Ungenauigkeit gefunden
title: "[FEHLER] "
labels: bug, content
---

## Datei

Welche Datei? (z.B. `05_stufe5.md`)

## Stelle

Welche Sektion / welcher Bullet?

## Was ist falsch?

Beschreibe den Fehler.

## Was wäre richtig?

Begründung mit Quelle wenn möglich.
```

### `.github/ISSUE_TEMPLATE/veraltete-information.md`

```markdown
---
name: Veraltete Information
about: Tool, Modell, Pattern ist veraltet
title: "[VERALTET] "
labels: outdated, content
---

## Datei und Stelle

## Was ist veraltet?

## Was ist der aktuelle Stand?

Mit Quelle.

## Verfallsdatum-Stempel?

Ist es bereits als 🔄 mit Verfallsdatum markiert? Wenn ja: das Verfallsdatum ist erreicht und Update fällig.
```

### `.github/ISSUE_TEMPLATE/strukturelle-verbesserung.md`

```markdown
---
name: Strukturelle Verbesserung
about: Vorschlag für Architektur- oder Sequenz-Änderung
title: "[STRUKTUR] "
labels: enhancement, structure
---

## Vorschlag

Was soll geändert werden?

## Begründung

Welches Problem in v2.1 wird damit gelöst?

## Track-Auswirkung

Welcher Track ist betroffen? (🔧/🧮/💼/alle)

## Aufwand-Auswirkung

Erhöht / verringert / unverändert?

## Diskussions-Punkte

Was sind die offenen Fragen?
```

### `.github/ISSUE_TEMPLATE/neue-resource.md`

```markdown
---
name: Neue Resource vorschlagen
about: Neuer Kurs / Buch / Tool / Blog
title: "[RESOURCE] "
labels: resource, content
---

## Resource

URL und Bezeichnung.

## Welche Stelle im Curriculum?

Wo passt es? (Stufe, Modul)

## Free / Bezahl?

Bezahl-Resourcen werden nur als Optional aufgenommen.

## Warum ist es besser als bestehende?

```

## Versionierungs-Prozess

- **Patch-Version** (v2.1.x): kleine Korrekturen, neue Resources, Tool-Updates ohne strukturelle Änderung.
- **Minor-Version** (v2.x.0): inhaltliche Vertiefung, neue Module, neue Querschnitte ohne Skelett-Bruch.
- **Major-Version** (vx.0.0): strukturelle Änderungen, Sequenz-Reformen, Track-Änderungen.

---

# 3. Coursera-Audit-Modus-Dokumentation

Mehrere im Curriculum referenzierte Kurse sind auf Coursera oder DeepLearning.AI gehostet. Im **Audit-Modus** sind diese kostenlos zugänglich — ohne Zertifikat, aber mit vollständigem Inhalts-Zugriff.

## Wie funktioniert der Audit-Modus auf Coursera?

1. Auf [coursera.org](https://www.coursera.org) den gewünschten Kurs aufrufen.
2. Auf "Enroll for free" klicken.
3. Pop-up: "Audit the Course" wählen (oft als kleinerer Link unter dem prominenten "Start Free Trial"-Button).
4. Du bekommst Zugriff auf alle Videos und Reading-Materialien.
5. **Nicht zugänglich** im Audit-Modus: Quizze, graded Assignments, Peer Reviews, Zertifikat. Wenn du diese willst, musst du upgraden.

## Wie funktioniert es bei DeepLearning.AI Short Courses?

DeepLearning.AI Short Courses (~2h) sind direkt auf [learn.deeplearning.ai](https://learn.deeplearning.ai) ohne Coursera-Account kostenlos zugänglich. Kein Audit-Modus nötig.

## Wann lohnt sich der Audit-Modus für dieses Curriculum?

**Pflicht-Audit-Kurse (in v2.1 referenziert):**
- DLAI Short Courses (in Stufen 5, 6, 7, 8, 10, Querschnitt Eval, Querschnitt Production)
- Mathematics for Machine Learning Specialization (Imperial College, in `12_querschnitt_math.md`)
- Bayesian Methods for Machine Learning (Querschnitt Math)
- MLOps Specialization (Andrew Ng, in `14_querschnitt_production.md`)

**Wann zertifizieren statt nur auditieren?**

Zertifikate von Coursera/DLAI sind 2026 in den meisten KI-Job-Kontexten **nicht entscheidend**. Wer ein Portfolio mit Capstone hat, hat den besseren Beleg. Zertifikat lohnt sich nur:
- Wenn Arbeitgeber explizit fragt
- Wenn Bildungsgutschein das übernimmt (in Deutschland: BAMF, Arbeitsagentur)
- Wenn die Quiz-Struktur didaktisch hilft (Sebastian Raschka empfiehlt das für Math-Kurse)

## Hinweis zur kommerziellen Nutzung

Wenn dieses Curriculum als Basis für bezahlte Kurse genutzt wird (CC BY-SA 4.0 erlaubt das), sollten die Kursleiter prüfen, ob die referenzierten Coursera-Audit-Kurse weiter im Curriculum bleiben oder durch eigene Inhalte ersetzt werden. Coursera-Audit-Modus-Verweise sind keine Pflicht-Bestandteile, sondern Empfehlungen.

---

# 4. Capstone-Timeline (orientativ)

Grobe Zeit-Verteilung über das Curriculum, nur Capstone-Anteil (zusätzlich zu regulären Stufen-Aufwänden):

| Phase | 🔧 Engineer | 🧮 Foundations | 💼 Strategist |
|---|---|---|---|
| Idee + Setup | Stufe 3-5 (~10h) | Stufe 7 (~5h) | Stufe 9 (~10h) |
| Foundation | Stufe 5 (~30h) | Stufe 7 (~80-120h) | Stufe 9 (~30h) |
| Vertiefung | Stufe 6 (~25h) | Stufe 10.2 (~40-60h) | Stufe 10 Pilot (~40h) |
| Production | Stufe 10.3 (~40h) | Stufe 10.3 (~15h) | Stufe 10.1 (~20h) |
| **Operate-Phase** | **Stufe 10/11 (~30-50h für 4-6 Wochen Real-User-Betrieb)** | optional (~15h) | **Stufe 10/11 (~40-60h für 4-6 Wochen Operate mit Stakeholdern)** |
| Final | Stufe 11 (~15h) | Stufe 11 (~10h) | Stufe 11 (~15h) |
| **Total** | **~150-170h** | **~165-225h** | **~155-175h** |

Plus die regulären Stufen-Aufwände — das oben ist nur der Capstone-Anteil.

**v2.1-Korrektur:** in v2.0 lag Capstone-A bei ~120h, Capstone-B bei ~150-220h, Capstone-C bei ~115h. v2.1 erweitert um Operate-Phase (4-6 Wochen Real-User-Betrieb) für Capstone-A und Capstone-C als Goldstandard.

---

# 6. Cross-Track-Capstone (optional, ambitioniert)

Wer Zeit und Energie hat, kann ein Capstone-Projekt machen, das alle drei Tracks integriert:

**Beispiel**: Eigene SaaS-Plattform aufbauen
- 💼 Strategie + Business Case + Pilot mit echten Kunden
- 🔧 Production-Stack: RAG, Agents, Eval-as-CI, MCP, Multi-Model-Routing
- 🧮 Optional: fine-getunetes Modell für Spezialaufgabe als Differenziator

Das ist ambitioniert, oft 200-400h zusätzlich zu den drei Track-Aufwänden. Aber: das Ergebnis ist ein launchable Product. Manche Curriculum-Absolventen 2026 starten so ihr eigenes Startup.

**v2.1-Hinweis**: Cross-Track-Capstone ist mit Operate-Phase noch ambitionierter — 4-6 Wochen Real-User-Betrieb plus Stakeholder-Operate plus Production-Hardening parallel. Realistisch nur, wenn du das in echtem Geschäfts-Kontext machst (eigene Org, eigenes Produkt).

---

# 6. Optionales Glossar

Begriffe, die quer durchs Curriculum vorkommen — kompakt erklärt für Schnell-Referenz:

**A-Tiefe-Module:** Module mit besonders volatilen Inhalten, brauchen 3-Monats-Audit.

**Adoption-Curve:** S-Kurve, die Übernahme einer Innovation in einer Org modelliert (Innovators → Early Adopters → Early Majority → Late Majority → Laggards).

**Audit-Modus:** Kostenloser Lese-Zugriff auf Coursera-Kurse ohne Zertifikat und Quiz-Zugriff.

**Backprop:** Backpropagation, Algorithmus zum Trainieren neuronaler Netze via Kettenregel.

**Capstone:** Integrations-Projekt am Ende des Curriculums.

**Cross-Entropy:** Standard-Loss-Funktion für Klassifikation.

**Catastrophic Forgetting:** Verlust allgemeiner Fähigkeiten durch zu starkes Fine-Tuning.

**DPO/ORPO/GRPO:** Moderne Preference-Tuning-Methoden (ohne RLHF-Komplexität).

**EU AI Act:** EU-Regulierung für KI, gestuft nach Risiko-Klassen.

**Eval-as-CI:** Eval-Run bei jedem Pull Request, automatisierte Qualitäts-Sicherung.

**Faithfulness:** RAG-Eval-Metrik: stimmt die Antwort mit dem Kontext überein?

**Foundation-Modell:** Vortrainiertes Sprachmodell als Basis für Fine-Tuning.

**Goldstandard:** v2.1-Begriff für Capstone-Operate-Phase als höchste Lern-Tiefe.

**LLM-as-Judge:** Eval-Methode, bei der ein LLM Outputs anderer Modelle bewertet.

**LoRA / QLoRA / DoRA:** Parameter-effiziente Fine-Tuning-Methoden.

**MCP (Model Context Protocol):** Anthropic-Standard für Tool-Integration in LLMs.

**MMLU:** Standard-Benchmark für allgemeine Sprachmodell-Fähigkeiten.

**Agentic OS:** Software-Schicht für Multi-Agent-Koordination. Zwei Bedeutungen — (a) Framework-Pattern (Context + Memory + Skills + Self-Learning Layers), (b) System-Software-Layer (Process-Scheduling, Isolation für Agenten).

**Agentenschwarm:** Multi-Agent-Architektur mit dezentraler oder hybrider Koordination. Patterns: Conductor / Hierarchical / Peer-Swarm / Hybrid.

**Context Engineering:** Disziplin der Token-Budget-Allokation, Memory-Architektur, Compaction-Strategien für LLM-Agents. Anthropic 2025 als Nachfolger von Prompt Engineering proklamiert.

**Distributed Training:** Multi-GPU-Training-Strategien: DDP (Data-Parallel), FSDP (Fully Sharded Data Parallel), ZeRO 1/2/3, Megatron-Style Tensor+Pipeline-Parallelism.

**GraphRAG:** RAG-Variante mit Knowledge-Graph-Aufbau aus Korpus, dann LLM-Synthese über Graph-Struktur. Microsoft Research 2024.

**HyDE:** Hypothetical Document Embeddings — LLM generiert hypothetische Antwort, deren Embedding zur Retrieval genutzt wird. RAG-Frontier-Pattern.

**Late-Interaction Retrieval:** Token-Level-Matching statt Single-Vector-Embedding (z.B. ColBERTv2). Höhere Qualität, höhere Cost.

**Operate-Phase:** 4-6 Wochen Real-User-Betrieb nach Production-Hardening / Pilot-Tests.

**PEFT:** Parameter-Efficient Fine-Tuning (Sammelbegriff für LoRA und Verwandte).

**RAG:** Retrieval-Augmented Generation — LLM mit externem Wissens-Retrieval.

**Reasoning-Modelle:** Architektur-Familie mit Test-Time-Compute als Skalierungs-Achse (o3, Claude Thinking, R1). Trainings-Patterns: GRPO, PRM/ORM.

**Red-Team-as-CI:** Automatisierte Red-Team-Tests in CI/CD-Pipeline (analog zu Eval-as-CI). Querschnitt 16.

**RLHF:** Reinforcement Learning from Human Feedback — klassische Preference-Tuning-Variante.

**Self-Assessment:** Strukturierte Selbst-Bewertung am Ende einer Stufe (S5/S7/S9 in v2.1).

**Skill / SKILL.md:** Persistierter, versionierter Domain-Kontext für Agents (Markdown + Templates + Code). Anthropic Claude Skills, OpenAI Codex Skills, Hamel evals-skills.

**Structured Outputs:** Constrained Generation mit Pydantic-Schemas, JSON-Mode, Function-Calling-Strict-Modes. Pflicht-Block in Modul 5.2.

**TCO:** Total Cost of Ownership — alle Kosten über Lebenszyklus.

**Test-Time-Compute:** Skalierungs-Achse: mehr Inferenz-Rechenzeit für bessere Antworten (Reasoning-Modelle). Eigene Familie neben Training-Compute-Skalierung.

**Trajectory-Eval:** Agent-Eval-Pflicht-Block mit 4 Metriken.

**vLLM / SGLang:** Open-Source Inferenz-Server für LLMs.

