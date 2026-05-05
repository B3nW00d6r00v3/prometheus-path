# Inventar v2.0 → v2.1: Vollständiges Mapping

**Zweck:** Diese Datei ist die Sicherung gegen Inhaltsverlust. Für jeden Block der Original-`KI-Meisterlehrplan_complete.txt` (v2.0, 5214 Zeilen) ist hier vermerkt, in welche v2.1-Datei er übergeht und welcher Status (unverändert / erweitert / neu / verschoben) gilt.

**Vorgehen beim Review:** Nach jeder gelieferten v2.1-Datei kann gegen dieses Inventar geprüft werden, ob alle erwarteten Inhalte enthalten sind und ob neue Inhalte korrekt markiert wurden.

**Quellfile:** `KI-Meisterlehrplan_complete.txt` (v2.0, Mai 2026, 5214 Zeilen)

**Ziel-Schema:** 19 Einzeldateien (`000_master.md`, 11× Stufen, 3× Querschnitte, 3× Capstones, `99_anhang.md`) + 1 konsolidierte Datei (`KI-Meisterlehrplan_v2.1_complete.md`).

---

## Status-Legende

- **unverändert** — Inhalt wird wörtlich aus v2.0 übernommen, ggf. mit aktualisiertem Datumsstempel.
- **erweitert** — bestehender Inhalt bleibt, neue Blöcke werden hinzugefügt (mit `+++ NEU IN v2.1 +++`-Markierung im Diff-Check, in der Endfassung sauber integriert).
- **angepasst** — bestehender Inhalt wird im Wortlaut leicht geändert (z.B. Voraussetzungs-Markierung von "optional" zu "Pflicht").
- **neu** — komplett neuer Block / Modul / Datei in v2.1.
- **verschoben** — Inhalt wechselt die Ziel-Datei (z.B. Capstone-Blöcke aus Stufen → Capstone-Dateien).

---

## Ziel-Datei 1: `000_master.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Titel "KI-Meisterlehrplan v2.0" | 1–8 | angepasst | wird v2.1 |
| Über dieses Curriculum | 9–25 | erweitert | Outcome-Rubrik-Konzept ergänzen |
| Track-Wahl | 26–46 | angepasst | 💼-Aufwand: 200–300h → 350–500h |
| Stufen-Übersicht | 47–64 | erweitert | Modul 5.0, 6.5, 9.0, 9.6 ergänzt |
| Querschnitte (Just-in-Time) | 65–76 | erweitert | Hinweis Math-Diagnose-Gate |
| Capstone-Projekte | 77–88 | erweitert | Operate-Phase als Goldstandard |
| Architektur-Entscheidungen v2.0 | 89–107 | erweitert | neue Entscheidungen v2.1 ergänzen |
| Quick-Start | 108–127 | erweitert | neue Voraussetzungs-Logik |
| Erwartete Dauer | 118–127 | angepasst | 💼 auf 350–500h |
| Nutzungs-Hinweise | 128–158 | unverändert | Format pro Modul, Portfolio-Aufbau, Aktualität |
| Verzeichnisstruktur | 159–180 | erweitert | neue Ordner für 5.0, 6.5, 9.0, 9.6 |
| Was kommt als nächstes? | 181–191 | erweitert | Ultra-Light geplant |
| Lizenz und Credits | 192–211 | unverändert | (Lizenz-Vorschlag CC BY-SA 4.0 ggf. in 99_anhang.md) |
| **NEU: Outcome-Rubrik pro Track** | — | neu | 5–8 messbare Kompetenz-Kriterien je Track |
| **NEU: Mid-Stage-Self-Assessments** | — | neu | Templates Ende S5/S7/S9 |
| **NEU: Aktualisierungslog v2.1.0** | — | neu | Änderungs-Übersicht v2.0 → v2.1 |

---

## Ziel-Datei 2: `01_stufe1.md` — Onboarding & Mindset

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-1-Header + Lernziel | 212–226 | unverändert | |
| Modul 1.1: Tools-Setup & Lernumgebung | 227–284 | unverändert | |
| Modul 1.2: GitHub & Portfolio-Strategie | 285–334 | unverändert | |
| Modul 1.3: Track-Wahl & Lern-Methodik | 335–414 | erweitert | **+ Vorgeschmack-Demo (RAG+MCP+Eval, generisch)** |
| Quellen für die gesamte Stufe | 415–437 | unverändert | |
| Free-Zertifikate (optional, vor Stufe 2) | 438–448 | unverändert | + Coursera-Audit-Modus-Hinweis |
| Stufen-Outcome | 449–460 | erweitert | Outcome-Bullet "Vorgeschmack erlebt" |
| Aktualisierungslog | 461–465 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 3: `02_stufe2.md` — Grundlagen

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-2-Header + Lernziel | 466–483 | unverändert | |
| Modul 2.1: LLM Foundations LIGHT | 484–530 | unverändert | (Outcode-Check Tippfehler in Z.523 als "Outcome-Check" korrigieren) |
| **NEU: Cost-Awareness-Mini-Block** | — | neu | vor Modul 2.2 — Token-Pricing, Input/Output-Verhältnis, erste Cost-Heuristik |
| Modul 2.2: KI-Tools-Landschaft | 531–590 | unverändert | |
| Modul 2.3: Prompt Engineering | 591–641 | unverändert | |
| Modul 2.4: KI-Realität verstehen | 642–688 | unverändert | |
| Modul 2.5: LLM Foundations VERTIEFT | 689–751 | erweitert | **+ Reasoning-spezifisches Prompting-Block** (ask-don't-tell, CoT-Anti-Patterns bei Reasoning-Modellen) |
| Modul 2.6: No-Code & Vibe-Coding | 752–814 | unverändert | |
| Modul 2.7: Python für KI | 815–878 | unverändert | |
| Free-Zertifikate für Stufe 2 | 879–891 | unverändert | |
| Stufen-Outcome | 892–906 | erweitert | Outcome zu Cost-Awareness |
| Aktualisierungslog | 907–911 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 4: `03_stufe3.md` — Arbeitsmethoden mit KI

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-3-Header + Lernziel | 912–927 | unverändert | |
| Modul 3.1: Design Thinking + KI | 928–989 | unverändert | |
| Modul 3.2: Agile mit KI | 990–1053 | unverändert | |
| Modul 3.3: Use-Case-Methodik & MVP-Denken | 1054–1125 | unverändert | (Abgrenzung zu 9.1 ggf. präzisieren) |
| Free-Zertifikate für Stufe 3 | 1126–1138 | unverändert | |
| Stufen-Outcome | 1139–1151 | unverändert | |
| Aktualisierungslog | 1152–1156 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 5: `04_stufe4.md` — Programmier-Foundation

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-4-Header + Lernziel | 1157–1171 | angepasst | **"optional" → "Pflicht für 🔧 vor Stufe 5"** |
| Modul 4.1: Python-Vertiefung für KI | 1172–1237 | angepasst | Voraussetzungs-Markierung für 🔧 verstärkt |
| Free-Zertifikate für Stufe 4 | 1238–1247 | unverändert | |
| Stufen-Outcome | 1248–1259 | erweitert | Pflicht-Markierung für 🔧 |

---

## Ziel-Datei 6: `05_stufe5.md` — Anwendungen bauen

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-5-Header + Lernziel | 1260–1275 | erweitert | Hinweis auf Modul 5.0 als Pflicht-Vorlauf |
| **NEU: Modul 5.0 Eval-Mini-Block** | — | neu | **Hamel Husain Pflichtlektüre, Test-Case-Anatomie, erstes Reference-Free-Eval (4–6h), API-Hauptpfad + Ollama-OSS-Pfad** |
| Modul 5.1: RAG modern | 1276–1342 | unverändert | (Voraussetzung um 5.0 ergänzt) |
| Modul 5.2: LLM-Frameworks im Vergleich | 1343–1399 | unverändert | |
| Modul 5.3: MCP in der Praxis | 1400–1474 | erweitert | **+ MCP-Sicherheits-Block (Prompt-Injection via Tool-Beschreibung, Rate-Limits, Auth)** + **A2A/ACP-Awareness-Bullets** |
| Modul 5.4: GenAI-Anwendungs-Eval | 1475–1531 | unverändert | (Eval-Mini-Block in 5.0 macht 5.4 zur Vertiefung) |
| Modul 5.5: Frontend für LLM-Apps | 1532–1607 | unverändert | |
| Capstone-Update für Track A (Engineer) | 1608–1625 | verschoben | → `15_capstone_a_engineer.md` (im Capstone-File konsolidieren) |
| Free-Zertifikate für Stufe 5 | 1626–1638 | unverändert | |
| Stufen-Outcome | 1639–1653 | erweitert | Eval-Mini-Block-Outcome + Self-Assessment Ende Stufe 5 |
| Aktualisierungslog | 1654–1658 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 7: `06_stufe6.md` — Agenten

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-6-Header + Lernziel | 1659–1677 | unverändert | |
| Modul 6.1: Agent-Patterns | 1678–1751 | unverändert | |
| Modul 6.2: Multi-Agent & LangGraph | 1752–1832 | erweitert | **+ Agent-Trajectory-Eval als Pflicht-Block** (Trajectory-Metrics, Tool-Call-Quality, Failure-Mode-Analyse) + **Eval-Querschnitt-Anker** |
| Modul 6.3: RL & Agent-Theorie | 1833–1912 | unverändert | |
| Modul 6.4: Vendor-Patterns im Vergleich | 1913–1982 | unverändert | |
| **NEU: Modul 6.5 Computer Use & Agentic Browsing** | — | neu | Anthropic Computer Use, Browser-Automation-Patterns, Sicherheits-Aspekte |
| Capstone-Update für Track A (Engineer) | 1983–1997 | verschoben | → `15_capstone_a_engineer.md` |
| Free-Zertifikate für Stufe 6 | 1998–2010 | unverändert | |
| Stufen-Outcome | 2011–2024 | erweitert | + Trajectory-Eval, Computer Use |
| Aktualisierungslog | 2025–2029 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 8: `07_stufe7.md` — Deep Learning Foundations

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-7-Header + Lernziel | 2030–2048 | erweitert | **+ Voraussetzungs-Block: für 🧮 sind Module 8.1+8.2+8.5 Pflicht; Math-Diagnose-Test als Gate** |
| Modul 7.1: Neural Networks & Backpropagation | 2049–2141 | erweitert | + Math-Diagnose-Vorprüfung verlinken |
| Modul 7.2: Transformer-Architektur modern | 2142–2232 | unverändert | |
| Modul 7.3: Computer Vision | 2233–2315 | unverändert | |
| Modul 7.4: Multimodale KI | 2316–2385 | unverändert | |
| Capstone-Update für Track B (Foundations) | 2386–2396 | verschoben | → `16_capstone_b_foundations.md` |
| Free-Zertifikate für Stufe 7 | 2397–2409 | unverändert | |
| Stufen-Outcome | 2410–2424 | erweitert | + Self-Assessment Ende Stufe 7 |
| Aktualisierungslog | 2425–2429 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 9: `08_stufe8.md` — Klassisches ML & Statistik

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-8-Header + Lernziel | 2430–2446 | erweitert | **+ Hinweis: 8.1+8.2+8.5 sind Pflicht-Voraussetzung für Stufe 7 (🧮)** |
| Modul 8.1: Data Exploration & Clustering | 2447–2517 | erweitert | + Eval-Querschnitt-Anker (Klassifikations-Eval) |
| Modul 8.2: Klassifikation & Decision Trees | 2518–2601 | erweitert | + Eval-Querschnitt-Anker |
| Modul 8.3: Regression & Boosting | 2602–2680 | unverändert | |
| Modul 8.4: Recommendation Systems | 2681–2749 | unverändert | |
| Modul 8.5: A/B-Testing & Causal Inference | 2750–2828 | erweitert | + Statistik-Foundation für Eval verlinken |
| Free-Zertifikate für Stufe 8 | 2829–2843 | unverändert | |
| Stufen-Outcome | 2844–2857 | unverändert | |
| Aktualisierungslog | 2858–2862 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 10: `09_stufe9.md` — KI-Strategie & Business

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-9-Header + Lernziel | 2863–2882 | angepasst | **💼-Aufwand auf 350–500h, neue Module ergänzt** |
| **NEU: Modul 9.0 Datenstrategie für KI** | — | neu | Daten-Reife-Assessment, Data Governance, Daten als Voraussetzung für KI-Initiativen, Lock-in-Bewertung |
| Modul 9.1: KI-Use-Cases identifizieren (strategisch) | 2883–2960 | unverändert | (Abgrenzung zu 3.3 in Header präzisieren) |
| Modul 9.2: ROI-Quantifizierung & Business Cases | 2961–3037 | unverändert | |
| Modul 9.3: KI-Skalierung & Operating Model | 3038–3106 | erweitert | **+ Operating Model vertieft, KPI-Frameworks, Governance-Strukturen** |
| Modul 9.4: Build-vs-Buy & Wettbewerbsvorteile | 3107–3190 | unverändert | |
| Modul 9.5: EU AI Act & Compliance vertieft | 3191–3278 | unverändert | |
| **NEU: Modul 9.6 Change Management für KI-Initiativen** | — | neu | Stakeholder-Mapping, Adoption-Curves, Widerstands-Pattern, Schulungs-Konzepte, Kommunikation |
| Capstone-Update für Track C (Strategist) | 3279–3291 | verschoben | → `17_capstone_c_strategist.md` |
| Free-Zertifikate für Stufe 9 | 3292–3306 | unverändert | |
| Stufen-Outcome | 3307–3320 | erweitert | + 9.0, 9.6, Self-Assessment Ende Stufe 9 |
| Aktualisierungslog | 3321–3325 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 11: `10_stufe10.md` — Spezialisierung & Production

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-10-Header + Lernziel | 3326–3343 | unverändert | |
| Modul 10.1: KI im Marketing (Branchen-Pattern) | 3344–3455 | unverändert | |
| Modul 10.2: Fine-Tuning modern | 3456–3595 | erweitert | **+ Decision-Framework "Fine-Tuning vs. RAG vs. Prompt-Engineering"** + Cost-Block + Eval-Querschnitt-Anker |
| Modul 10.3: MLOps + LLMOps Production | 3596–3763 | erweitert | + Eval-Querschnitt-Anker (Eval-as-CI) + Verweis auf Capstone-Operate-Phase |
| Free-Zertifikate für Stufe 10 | 3764–3779 | unverändert | |
| Stufen-Outcome | 3780–3794 | unverändert | |
| Aktualisierungslog | 3795–3799 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 12: `11_stufe11.md` — Forschung & Cutting-Edge

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Stufe-11-Header + Lernziel | 3800–3819 | unverändert | |
| Modul 11.1: Wie bleibe ich am Stand? | 3820–3929 | unverändert | |
| Modul 11.2: Branchen-Vertiefung | 3930–4018 | unverändert | |
| Capstone-Abschluss (alle Tracks) | 4019–4054 | verschoben | → konsolidiert in Capstone-Dateien (`15_…`, `16_…`, `17_…`) und `15_capstone_a_engineer.md` (Abschluss-Sektion gemeinsam für alle drei) |
| Free-Zertifikate für Stufe 11 | 4055–4072 | unverändert | |
| Stufen-Outcome | 4073–4085 | unverändert | |
| Aktualisierungslog | 4086–4091 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 13: `12_querschnitt_math.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Querschnitt-Header | 4092–4101 | erweitert | **+ Math-Diagnose-Test als Gate vor Stufe 7 für 🧮 (neuer Abschnitt)** |
| Lineare Algebra | 4102–4135 | unverändert | |
| Calculus | 4136–4167 | unverändert | |
| Wahrscheinlichkeit und Statistik | 4168–4205 | unverändert | |
| Anwendungs-Strategie | 4206–4216 | erweitert | + Diagnose-Test-Verweis |
| **NEU: Math-Diagnose-Test** | — | neu | 15–20 Aufgaben, Selbstkorrektur, Gate-Logik beschrieben |
| Free-Zertifikate | 4217–4226 | unverändert | + Coursera-Audit-Modus-Hinweis |
| Outcome-Check | 4227–4245 | erweitert | + Diagnose-Pass als Outcome |
| Aktualisierungslog | 4246–4251 | erweitert | v2.1-Eintrag |

---

## Ziel-Datei 14: `13_querschnitt_eval.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Querschnitt-Header | 4252–4261 | erweitert | + Hinweis Modul 5.0 als Vorgriff |
| Warum Eval die Kern-Disziplin ist | 4262–4269 | unverändert | |
| Eval-Dataset aufbauen | 4270–4286 | unverändert | |
| Eval-Methoden im Detail | 4287–4327 | unverändert | (Reference-Based, Reference-Free, LLM-as-Judge, Human Eval) |
| Online-Eval und Continuous Eval | 4328–4338 | unverändert | |
| Eval-as-CI | 4339–4358 | unverändert | |
| Tool-Übersicht 2026 | 4359–4373 | unverändert | (mit 🔄-Stempel pro Tool) |
| Statistik-Foundation für Eval | 4374–4383 | unverändert | |
| Eval für unterschiedliche Anwendungs-Klassen | 4384–4408 | unverändert | (RAG, Agent, Klassifikation, Generation) |
| Anti-Pattern bei Eval | 4409–4417 | unverändert | |
| Praxis: Eval-Pipeline für eigenen Capstone | 4418–4429 | unverändert | |
| Free-Zertifikate | 4430–4440 | unverändert | |
| Outcome-Check | 4441–4449 | unverändert | |
| Aktualisierungslog | 4450–4455 | erweitert | v2.1-Eintrag (3-Monats-Audit) |

---

## Ziel-Datei 15: `14_querschnitt_production.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Querschnitt-Header | 4456–4463 | unverändert | |
| Cost-Engineering | 4464–4514 | unverändert | (Multi-Model-Routing, Prompt-Caching, Context-Optimierung, Cost-Tracking-Tools) |
| Latency-Optimierung | 4515–4528 | unverändert | |
| Inferenz-Server für selbst-gehostete Modelle | 4529–4542 | unverändert | |
| Monitoring und Observability | 4543–4552 | unverändert | |
| Eval-as-CI Pattern | 4553–4561 | unverändert | |
| Sandboxing für Tool-Execution | 4562–4572 | unverändert | |
| MCP-Sicherheit in Production | 4573–4585 | unverändert | (Hinweis: Kurzform jetzt auch in Modul 5.3) |
| Idempotenz und Rollback | 4586–4597 | unverändert | |
| Prompt-Versionierung | 4598–4606 | unverändert | |
| Incident-Response für KI-Apps | 4607–4620 | unverändert | |
| Compliance in Production | 4621–4630 | unverändert | |
| Deployment-Patterns | 4631–4644 | unverändert | |
| Klassisches MLOps für klassisches ML | 4645–4656 | unverändert | |
| Anti-Pattern in Production | 4657–4667 | unverändert | |
| Praxis: Production-Hardening für eigenen Capstone | 4668–4676 | erweitert | + Verweis auf Capstone-Operate-Phase als Goldstandard |
| Free-Zertifikate | 4677–4687 | unverändert | |
| Outcome-Check | 4688–4709 | unverändert | |
| Aktualisierungslog | 4710–4714 | erweitert | v2.1-Eintrag (3-Monats-Audit) |

---

## Ziel-Datei 16: `15_capstone_a_engineer.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Capstone-Projekte-Header (allgemein) | 4715–4731 | unverändert | (Intro-Block, der für alle drei Capstones gilt — wird in jeder Capstone-Datei als Header-Verweis aufgenommen oder in `000_master.md` zentral) |
| Capstone A: Engineer (🔧) — Konzept | 4732–4738 | unverändert | |
| Phasen (entlang des Curriculums) | 4739–4786 | unverändert | |
| Outcome-Schwellen | 4787–4798 | unverändert | |
| Portfolio-Anforderungen | 4799–4807 | unverändert | |
| Mögliche Domain-Beispiele | 4808–4816 | unverändert | (yesberlin-Beispiele NICHT verwenden, falls vorhanden — privat) |
| Ressourcen | 4817–4825 | unverändert | |
| **NEU: Operate-Phase als Goldstandard** | — | neu | 4–6 Wochen Betrieb mit echten Nutzern, Cost-Tracking, Incident-Log, Eval-Drift-Monitoring — als "Goldstandard, nicht Pflicht" markiert |
| Capstone-Updates aus Stufen 5+6 | 1608–1625, 1983–1997 | verschoben | konsolidiert in diese Datei |
| Capstone-Abschluss-Sektion (alle Tracks) | 4019–4054 + 5063–5108 | erweitert | konsolidiert in diese Datei (Demo-Video, Pitch, Lessons-Learned, Portfolio-Veröffentlichung) — gilt für alle drei Capstones |
| Capstone-Timeline (orientativ) | 5092–5108 | unverändert | (für alle drei Capstones gemeinsam — in `15_…` als Master-Sektion) |

---

## Ziel-Datei 17: `16_capstone_b_foundations.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Capstone B: Foundations (🧮) — Konzept | 4826–4832 | unverändert | |
| Phasen | 4833–4877 | unverändert | |
| Outcome-Schwellen | 4878–4889 | unverändert | |
| Portfolio-Anforderungen | 4890–4901 | unverändert | |
| Mögliche Korpus-Beispiele | 4902–4910 | unverändert | (yesberlin-Korpus NICHT als Beispiel — privat) |
| Hardware-Realität | 4911–4917 | unverändert | |
| Ressourcen | 4918–4926 | unverändert | |
| Capstone-Update aus Stufe 7 | 2386–2396 | verschoben | konsolidiert in diese Datei |
| Verweis auf Capstone-Abschluss-Sektion | — | erweitert | Querverweis auf `15_capstone_a_engineer.md` (gemeinsame Abschluss-Sektion) |

---

## Ziel-Datei 18: `17_capstone_c_strategist.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Capstone C: Strategist (💼) — Konzept | 4927–4933 | unverändert | |
| Phasen | 4934–4992 | unverändert | |
| Outcome-Schwellen | 4993–5005 | unverändert | |
| Portfolio-Anforderungen | 5006–5019 | unverändert | |
| Mögliche Organisations-Beispiele | 5020–5027 | unverändert | (yesberlin NICHT als Beispiel) |
| Mögliche Pilot-Beispiele | 5028–5036 | unverändert | |
| Compliance-Tipp | 5037–5040 | unverändert | |
| Ressourcen | 5041–5049 | unverändert | |
| Capstone-Update aus Stufe 9 | 3279–3291 | verschoben | konsolidiert in diese Datei |
| Cross-Track-Capstone (optional) | 5050–5062 | unverändert | (steht traditionell bei Strategist; alternativ in `15_capstone_a_engineer.md` als Anhang) |
| Verweis auf Capstone-Abschluss-Sektion | — | erweitert | Querverweis auf `15_capstone_a_engineer.md` |

---

## Ziel-Datei 19: `99_anhang.md`

| v2.0 Inhalt | v2.0 Zeilen | v2.1 Status | Anmerkung |
|---|---|---|---|
| Aktualisierungslog (gesamtes Curriculum) | 5114–5214 | unverändert | (vollständig übernommen) |
| **NEU: Aktualisierungs-Mechanik v2.1** | — | neu | 3-Monats-Audit-Schema für A-Module, Verfallsdatum-Stempel pro Volatil-Bullet |
| **NEU: Repo-Veröffentlichungs-Härtung** | — | neu | README-Vorlage, Lizenz CC BY-SA 4.0, Contribution-Guide, Issue-Templates für "Inhalt veraltet" |
| **NEU: Coursera-Audit-Modus-Hinweis** | — | neu | Wie DeepLearning.AI-Materialien kostenlos nutzbar bleiben |
| **NEU: Glossar (optional)** | — | neu | Wichtigste Abkürzungen 2026 (RAG, MCP, RAG, DPO, RoPE, GQA, etc.) |

---

## Sicherheits-Check: Vollständigkeit

Geprüfte v2.0-Zeilen-Ranges:
- 1–211: → `000_master.md` ✓
- 212–465: → `01_stufe1.md` ✓
- 466–911: → `02_stufe2.md` ✓
- 912–1156: → `03_stufe3.md` ✓
- 1157–1259: → `04_stufe4.md` ✓
- 1260–1658: → `05_stufe5.md` (+ Capstone-Block 1608–1625 verschoben) ✓
- 1659–2029: → `06_stufe6.md` (+ Capstone-Block 1983–1997 verschoben) ✓
- 2030–2429: → `07_stufe7.md` (+ Capstone-Block 2386–2396 verschoben) ✓
- 2430–2862: → `08_stufe8.md` ✓
- 2863–3325: → `09_stufe9.md` (+ Capstone-Block 3279–3291 verschoben) ✓
- 3326–3799: → `10_stufe10.md` ✓
- 3800–4091: → `11_stufe11.md` (+ Capstone-Abschluss 4019–4054 verschoben) ✓
- 4092–4251: → `12_querschnitt_math.md` ✓
- 4252–4455: → `13_querschnitt_eval.md` ✓
- 4456–4714: → `14_querschnitt_production.md` ✓
- 4715–4825: → `15_capstone_a_engineer.md` ✓
- 4826–4926: → `16_capstone_b_foundations.md` ✓
- 4927–5108: → `17_capstone_c_strategist.md` (+ Capstone-Abschluss 5063–5108 ggf. konsolidiert in `15_…`) ✓
- 5109–5113: → `15_capstone_a_engineer.md` (Aktualisierungslog Capstone) ✓
- 5114–5214: → `99_anhang.md` ✓

**Alle 5214 Zeilen der v2.0 sind einer v2.1-Datei zugeordnet.** Keine Verluste vorgesehen.

---

## Neue Inhalte (gesamt) — was in v2.1 hinzukommt

**Tier 1 (Struktur):**
1. Outcome-Rubrik pro Track (`000_master.md`)
2. Mid-Stage-Self-Assessments S5/S7/S9 (`01–11_stufeN.md`, jeweils Stufen-Outcome-Sektion + zentrale Doku in `000_master.md`)
3. Modul 8.1+8.2+8.5 als Pflicht-Voraussetzung für Stufe 7 für 🧮 (`07_stufe7.md`, `08_stufe8.md`)
4. Stufe 4 als Pflicht für 🔧 (`04_stufe4.md`, `000_master.md`)
5. Math-Diagnose-Test als Gate vor Stufe 7 für 🧮 (`12_querschnitt_math.md`)
6. Capstone-Operate-Phase als Goldstandard (`15_capstone_a_engineer.md`)

**Tier 2 (Inhalte):**
7. Vorgeschmack-Demo Modul 1.3 (`01_stufe1.md`) — RAG+MCP+Eval generisch, **kein yesberlin**
8. Modul 5.0 Eval-Mini-Block (`05_stufe5.md`) — Hamel Husain, API + Ollama
9. Modul 6.5 Computer Use & Agentic Browsing (`06_stufe6.md`)
10. Reasoning-Prompting-Block in Modul 2.5 (`02_stufe2.md`)
11. A2A/ACP-Awareness-Bullets in Modul 5.3 (`05_stufe5.md`)
12. MCP-Sicherheits-Block in Modul 5.3 (`05_stufe5.md`)
13. Cost-Awareness-Mini-Block vor Modul 2.2 (`02_stufe2.md`)
14. Agent-Trajectory-Eval Pflicht-Block in Modul 6.2 (`06_stufe6.md`)
15. Eval-Querschnitt-Anker in Stufen 6/8/10/Capstone (`06_…`, `08_…`, `10_…`, `15_…`)
16. Fine-Tuning-vs-RAG-vs-Prompt-Decision-Framework in Modul 10.2 (`10_stufe10.md`)
17. Modul 9.0 Datenstrategie für KI (`09_stufe9.md`)
18. Modul 9.6 Change Management für KI-Initiativen (`09_stufe9.md`)
19. Modul 9.3 verstärkt: Operating Model, KPI, Governance (`09_stufe9.md`)

**Tier 3 (Pflege):**
20. 3-Monats-Aktualitäts-Audit für A-Module (`99_anhang.md` + Aktualisierungslogs der betroffenen Module)
21. Verfallsdatum-Stempel pro 🔄-Bullet (Mechanik in `99_anhang.md`, Anwendung in allen Modulen mit 🔄)
22. Repo-Härtung: README, CC BY-SA 4.0, Contribution-Guide, Issue-Templates (`99_anhang.md`)
23. Coursera-Audit-Modus dokumentieren (`99_anhang.md` + an Free-Zertifikate-Stellen)
24. 💼-Aufwand auf 350–500h (`000_master.md`, Stufen-Übersicht, Track-Wahl)

---

## Lieferungs-Reihenfolge (geplant)

1. **Diese Datei** — `00_inventar_v2.0_zu_v2.1.md` ✓ (jetzt geliefert)
2. `000_master.md`
3. `01_stufe1.md` bis `11_stufe11.md` (eine pro Antwort, ggf. zwei wenn Stufe kurz)
4. `12_querschnitt_math.md`, `13_querschnitt_eval.md`, `14_querschnitt_production.md`
5. `15_capstone_a_engineer.md`, `16_capstone_b_foundations.md`, `17_capstone_c_strategist.md`
6. `99_anhang.md`
7. `KI-Meisterlehrplan_v2.1_complete.md` (konsolidierte Datei, durch Konkatenation aller 19 Einzeldateien)

---

**Stand:** Dieses Inventar ist das verbindliche Referenzdokument für die v2.1-Migration. Bei jeder gelieferten Datei wird gegen die hier vermerkten v2.0-Zeilen-Ranges geprüft, ob alle Inhalte enthalten sind.

**Letzte Aktualisierung:** 04. Mai 2026
