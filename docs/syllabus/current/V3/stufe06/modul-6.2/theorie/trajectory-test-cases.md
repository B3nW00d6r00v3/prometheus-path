---
title: "Test-Cases für Trajectory-Eval"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Test-Cases für Trajectory-Eval

## Kernidee

Trajectory-Test-Cases sind keine einfachen Frage-Antwort-Paare. Sie definieren Input, erwarteten Endzustand, erlaubte Tool-Sequenzen und explizite Anti-Pfade — also was der Agent auf keinen Fall tun darf. Dieser Mehraufwand ist notwendig, weil Multi-Agents auf vielen verschiedenen Wegen zur richtigen Endantwort kommen können.

## Im Detail

**Aufbau eines Trajectory-Test-Cases:**

```yaml
test_case:
  id: "TC-001"
  input: "Recherchiere die drei besten Open-Source-Vector-Datenbanken und vergleiche sie."
  expected_end_state: |
    Vergleichstabelle mit mindestens 3 Datenbanken,
    je mindestens 3 Kriterien (Skalierung, Lizenz, Performance).
  valid_tool_sequences:
    - [web_search, web_search, rag_query, synthesize]
    - [web_search, web_fetch, synthesize]
    - [rag_query, web_search, synthesize]
  anti_paths:
    - "Agent soll NICHT mehr als 5 Web-Suchen pro Run machen."
    - "Agent soll NICHT ohne Web-Search-Ergebnis direkt eine Antwort generieren."
  success_criteria:
    - "Mindestens 3 Datenbanken erwähnt"
    - "Mindestens 3 Vergleichskriterien"
    - "Quellen referenziert"
```

**Warum mehrere valide Pfade?** Ein guter Agent findet sein Ziel auf verschiedenen Wegen. Test-Cases, die nur einen Pfad akzeptieren, bestrafen valide Kreativität. Definiere daher erlaubte Pfad-Klassen, nicht exakte Sequenzen.

**Anti-Pfade als Sicherheits-Anker:** Manche Pfade sind unakzeptabel — z.B. wenn der Agent kostspielige API-Calls in einer Endlosschleife macht oder eine destruktive Aktion ohne Confirmation ausführt. Anti-Pfade machen das explizit und messbar.

**Mindestgröße:** 10-20 Test-Cases für ein Production-Multi-Agent-System. Weniger als 10 ist nicht repräsentativ für die Varianz, die stochastische LLMs einbringen.

**Stochastik-Handling:** Mindestens 5 Runs pro Test-Case, Median als Hauptergebnis. Ein Agent, der 3 von 5 Test-Runs besteht, ist schwächer als einer mit 5/5 — auch wenn beide dasselbe Ergebnis im besten Fall produzieren.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangSmith — Datasets and Testing](https://docs.smith.langchain.com) | Test-Case-Management |
| 📖 Referenz | [Anthropic — SWE-bench Sonnet](https://www.anthropic.com/research/swe-bench-sonnet) | Beispiel für Trajectory-Eval auf Code-Tasks |

## Teste dein Verständnis

- [ ] Erstelle einen Trajectory-Test-Case für deinen eigenen Agent mit Input, Endzustand, zwei validen Pfaden und einem Anti-Pfad.
- [ ] Warum sind Median-Werte über 5 Runs aussagekräftiger als ein einzelner Lauf?
- [ ] Was ist der Unterschied zwischen einem Anti-Pfad und einem Failure-Mode?
