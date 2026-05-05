---
title: "Eval-Dataset aufbauen"
module: "5.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Eval-Dataset aufbauen

## Kernidee

Das Eval-Dataset ist der wichtigste und am häufigsten unterschätzte Schritt beim Eval-Setup. 50-200 Test-Cases sind das Minimum für statistisch relevante Aussagen. Wer nur mit 5-10 selbst gewählten Beispielen evaluiert, baut eine Schmeichel-Evaluation — kein echtes Signal.

## Im Detail

Du hast in Modul 5.0 bereits 5-15 Test-Cases gebaut. Jetzt skalierst du auf 50-100.

**Drei Quellen für Test-Cases:**

**1. Real-World-Inputs (Goldstandard):**
- Echte User-Anfragen aus deiner App oder deinem Anwendungsfall.
- Anonymisiert und ggf. leicht verändert.
- Beste Repräsentation der echten Distribution.
- Oft selten verfügbar in frühen Projekt-Phasen.

**2. Synthetic Data (schnell skalieren):**
- LLM generiert Fragen aus deinen Dokumenten.
- Prompt: "Generiere 10 realistische Fragen, die jemand an dieses Dokument stellen würde — mische einfache und schwierige Fragen."
- Menschliche Validierung: mindestens 20% stichprobenartig prüfen.
- Gut für schnellen Scale, aber Achtung: LLM-generierte Fragen decken blinde Flecken des LLMs, nicht die der Nutzer.

**3. Edge Cases (bewusst konstruiert):**
- Fragen zu Randthemen, die in wenigen Dokumenten behandelt werden.
- Fragen mit mehrdeutigen Begriffen.
- Fragen, die das System in früheren Tests zum Scheitern gebracht haben.
- Fragen über Themen, die *nicht* in deiner Dokumentenbasis sind (Halluzinations-Test).

**Empfohlene Mischung für 100 Test-Cases:**
- ~60% Standard-Inputs (repräsentativ für den Hauptanwendungsfall)
- ~25% Edge Cases (Grenzfälle, schwierige Formulierungen)
- ~15% bekannte Failure Modes (Fragen, bei denen das System nachweislich versagt)

**Format (CSV oder Markdown-Tabelle):**

```csv
id,input,expected_output,category,difficulty,notes
001,"Was ist die Rückgaberichtlinie?","30 Tage, keine Begründung nötig","standard","easy","Standard-FAQ"
042,"Gilt die Rückgabe auch für digitale Produkte?","Nein, nur physische Waren","edge","medium","Nicht explizit in FAQ"
078,"Wann kam das Unternehmen an die Börse?","","failure_mode","hard","Nicht in Dokumenten"
```

**Wichtig:** Für Reference-Free-Eval (der Normalfall bei RAG) musst du nicht für jeden Test-Case eine vollständige Ground-Truth-Antwort haben — aber du brauchst klare **Erwartungen** ("muss Quelle nennen", "muss auf Deutsch antworten", "darf nicht halluzinieren").

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Hamel Husain — Eval-Dataset](https://hamel.dev) | Best Practices für Dataset-Bau |
| 📖 Docs | [LangSmith — Building Datasets](https://docs.smith.langchain.com) | Tool-gestützter Ansatz |

## Teste dein Verständnis

- [ ] Weißt du, wie du mit einem LLM synthetische Test-Cases für deinen Anwendungsfall generierst?
- [ ] Kannst du erklären, warum 5 Test-Cases kein ausreichendes Signal geben?
- [ ] Hast du die drei Quellen (Real-World, Synthetic, Edge Cases) für deinen eigenen Use-Case identifiziert?
