---
title: "Wann welches Pattern?"
module: "6.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann welches Pattern?

## Kernidee

Die Wahl zwischen den vier Schwarm-Patterns ist keine Geschmacksfrage, sondern hängt von drei Faktoren ab: Strukturiertheit der Aufgabe, Parallelisierbarkeit der Sub-Tasks, und Anforderungen an Audit und Kontrolle. Die Faustregel 2026 ist eindeutig: Workflow > Agent, Single-Agent > Multi-Agent, Conductor > Schwarm — außer der Use-Case erzwingt das Gegenteil.

## Im Detail

**Faustregel 2026 — Pattern-Wahl:**

| Use-Case-Charakteristik | Empfohlenes Pattern |
|---|---|
| Compliance, Audit-Pflicht, klare Sub-Tasks | **Conductor** |
| Große Organisation, autonome Domänen | **Hierarchical** |
| Exploratorisch, Forschungs-Modus, parallel scrapeable | **Peer-Swarm** (Vorsicht: Drift) |
| Production mit Mix aus Strukturiertem und Parallelem | **Hybrid** |
| Einfacher sequentieller Workflow | **Single-Agent** |
| Deterministischer Ablauf | **Workflow** (kein Agent!) |

**Der wichtigste Test vor Pattern-Wahl:**

1. **Brauche ich überhaupt einen Agent?** Kann ein deterministischer Workflow (Funktion A → Funktion B → Funktion C) die Aufgabe lösen? → Kein Agent.
2. **Reicht ein Single-Agent?** Kann ein einziger Agent mit gutem System-Prompt und Tools die Aufgabe lösen? → Single-Agent.
3. **Brauche ich Multi-Agent?** Nur wenn: Aufgabe ist zu groß für ein Context-Window, Parallelisierung ist essentiell, oder klare Verantwortungs-Trennung ist nötig.
4. **Welches Multi-Agent-Pattern?** Dann die Faustregel-Tabelle oben anwenden.

**Grenzfälle:**
- **RAG-Research-Pipeline mit 3 Agents:** Conductor (Researcher → Writer → Reviewer) ist oft besser als Hierarchical — Overhead von Team-Leads lohnt sich nicht bei 3 Agents.
- **Enterprise-Code-Review mit 20 Agents:** Hierarchical (5 Domain-Leads × 4 Spezialisten) ist klar besser als Conductor (20-Agent-Bottleneck am Master).
- **Kreative Exploration mit variablem Ablauf:** Peer-Swarm kann sinnvoll sein, wenn Drift akzeptabel und manuelle Review am Ende.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Konzept | [Modul 6.2 — Wann Multi-Agent vermeiden?](../../modul-6.2/theorie/wann-multi-agent-vermeiden.md) | Basis-Entscheidung |

## Teste dein Verständnis

- [ ] Beantworte den 4-stufigen Test für deinen Capstone-Use-Case.
- [ ] Warum ist "Conductor > Schwarm" die Default-Empfehlung für Production?
- [ ] Nenne einen Use-Case, für den Peer-Swarm trotz Drift-Risiko die beste Wahl wäre.
