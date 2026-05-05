---
title: "Trajectory-Eval — Grundlagen"
module: "6.2"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Trajectory-Eval — Grundlagen

## Kernidee

Trajectory-Eval bewertet nicht das Ergebnis, sondern den Weg dorthin: welche Tools wurden gerufen, in welcher Reihenfolge, mit welchen Argumenten? Ein Agent kann die richtige Endantwort auf einem völlig falschen Weg erreichen — das ist nicht reproduzierbar und nicht verlässlich. Trajectory-Eval macht diesen Unterschied sichtbar.

## Im Detail

**Was ist Trajectory-Eval?**

Anders als bei Single-Output-Eval (RAG: „Ist die Antwort gut?") bewertet Trajectory-Eval den **Lösungsweg**:
- Welche Tools wurden gerufen?
- In welcher Reihenfolge?
- Mit welchen Argumenten?
- Mit welchem Outcome pro Step?

**Warum das entscheidend ist:**

Ein Multi-Agent-System kann die richtige Endantwort durch Glück erreichen:
- Agent A halluziniert eine Zwischenantwort.
- Agent B korrigiert sie zufällig mit Web-Search.
- Endantwort ist korrekt, aber nicht reproduzierbar.

Trajectory-Eval würde diesen „falschen" Weg aufdecken — die Endantwort allein würde ihn verstecken.

**Abgrenzung zu RAG-Eval (Modul 5.4):**
- RAG-Eval: Output-Qualität gegen Quellen.
- Trajectory-Eval: Prozess-Qualität über den gesamten Run.
- Ein gutes Multi-Agent-System braucht **beide** Eval-Layer.

**Eval-Querschnitt-Anker:** Siehe `13_querschnitt_eval.md`, Abschnitt "Agent-Eval". Dein Setup soll auf diesem Querschnitt aufbauen, nicht eigene Methodik erfinden.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangSmith — Agent Evaluation](https://docs.smith.langchain.com/old/cookbook/testing-examples/agent-evaluation) | Praktische Trajectory-Eval-Anleitung |
| 📖 Querschnitt | [13_querschnitt_eval.md](../../../13_querschnitt_eval.md) | Eval-Framework für alle Anwendungsklassen |

## Teste dein Verständnis

- [ ] Erkläre mit eigenen Worten, was Trajectory-Eval misst und warum Endantwort-Eval allein nicht ausreicht.
- [ ] Gibt es ein Szenario, bei dem ein Agent die richtige Endantwort auf falschem Weg gibt?
- [ ] Was ist der Unterschied zwischen Trajectory-Eval und RAG-Eval?
