---
title: "Halluzinationen erkennen und behandeln"
module: "2.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Halluzinationen erkennen und behandeln

## Kernidee

Ein LLM lügt nicht — es halluziniert. Es generiert Text, der statistisch plausibel klingt, aber faktisch falsch ist. Halluzinationen sind kein Bug, der irgendwann gefixt wird — sie sind eine unvermeidliche Konsequenz der probabilistischen Natur von Sprachmodellen. Dein Job ist nicht, Halluzinationen zu verhindern (das ist unmöglich), sondern sie zu erkennen und zu behandeln — wie ein Arzt, der Symptome kennt, bevor er eine Diagnose stellt.

## Im Detail

### Warum halluzinieren LLMs?

LLMs sind Textvorhersage-Maschinen: Sie berechnen das wahrscheinlichste nächste Token basierend auf dem bisherigen Kontext. Sie haben kein Modell der Realität, keine Datenbank mit Fakten, kein "Wissen" im menschlichen Sinn. Sie haben Muster gelernt — und manchmal generieren diese Muster Text, der überzeugend klingt, aber falsch ist.

Stell dir vor, du fragst ein LLM nach einem Buch, das es nicht kennt. Statt "Ich weiß es nicht" zu sagen, produziert es eine plausible Zusammenfassung, weil es gelernt hat, wie Buchzusammenfassungen aussehen. Das Modell "weiß" nicht, dass es halluziniert — es gibt keine interne Ampel, die auf Rot springt.

### Die fünf häufigsten Halluzinations-Muster

**1. Erfundene Quellen mit plausiblen DOIs**

Bitte ein LLM, eine wissenschaftliche Behauptung mit Quellen zu belegen, und es generiert Paper-Titel, Autoren und DOIs, die real aussehen — aber nicht existieren. Beispiel: "Smith, J. & Miller, K. (2023). Deep Learning for Climate Prediction. Nature Machine Intelligence, 5(3), 112-119. DOI: 10.1038/s42256-023-00612-4" — klingt perfekt, existiert aber nicht.

**Gegenmittel:** DOIs immer auf doi.org prüfen. Wenn der Link ins Nichts führt, ist die Quelle erfunden.

**2. Falsche Zahlen und Datumsangaben**

LLMs sind notorisch schlecht bei numerischen Fakten. Frag nach der Einwohnerzahl einer mittelgroßen Stadt, dem Gründungsjahr eines Unternehmens oder einem Aktienkurs — die Antwort klingt präzise, ist aber oft falsch oder veraltet.

**Gegenmittel:** Jede Zahl, die du in einem wichtigen Dokument verwendest, gegen eine primäre Quelle prüfen.

**3. "Zu glatte" Antworten ohne Unsicherheit**

Echte Experten sagen "Das ist umstritten", "Dazu gibt es verschiedene Positionen" oder "Ich bin mir nicht sicher". Ein halluziniertes LLM klingt immer selbstsicher. Wenn die Antwort zu glatt, zu sicher, zu perfekt ist — Warnsignal.

**Gegenmittel:** Explizit nach Unsicherheiten und Gegenargumenten fragen. "Welche Punkte sind in der Forschung umstritten?"

**4. Code mit nicht-existenten Funktionen**

Ein LLM generiert Code, der eine API-Methode verwendet, die es nie gegeben hat. Beispiel: `pandas.DataFrame.auto_clean()` — klingt nützlich, existiert aber nicht. Das Modell hat das Muster "DataFrame hat Methoden" gelernt und extrapoliert.

**Gegenmittel:** Jede importierte Funktion und Methode gegen die offizielle Dokumentation prüfen, bevor du den Code ausführst.

**5. Halluzinationen bei Nischenthemen**

Je weniger Trainingsdaten zu einem Thema existieren, desto wahrscheinlicher halluziniert das Modell. Regionale Geschichte, seltene Krankheiten, spezifische Rechtsprechung — hier ist besondere Vorsicht geboten.

**Gegenmittel:** Bei Nischenthemen grundsätzlich jede Aussage extern verifizieren.

### Wann ist Halluzinationsrisiko besonders hoch?

- **Aktuelle Ereignisse:** Das Modell kennt nichts nach seinem Training-Cutoff
- **Numerische Fakten:** Zahlen, Daten, Statistiken
- **Zitate:** Wörtliche Zitate sind fast immer falsch oder verfälscht
- **Rechtliche Aussagen:** Paragraphen, Urteile, Fristen — nie ohne Juristen-Check
- **Biografische Details:** Lebensläufe, Karriere-Stationen, Publikationslisten

### Deine persönliche Halluzinations-Strategie

Entwickle eine Routine für jede KI-Interaktion:

1. **Vertraue, aber verifiziere:** Nutze KI-Outputs als Startpunkt, nicht als Endprodukt
2. **Quellen verlangen:** "Nenne mir die genaue Quelle für diese Aussage"
3. **Gegenprobe:** Gleiche wichtige Fakten mit einer Web-Suche oder Fachquelle ab
4. **Unsicherheits-Trigger:** Wenn die Antwort zu selbstsicher klingt, frag nach: "Wie sicher bist du dir? Gibt es Gegenargumente?"
5. **Domain-Awareness:** Bei Themen, die du selbst nicht einschätzen kannst, sei extra vorsichtig

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic — Reducing Hallucinations](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations) | Praktische Gegenmaßnahmen |
| :book: | [IBM — AI Hallucinations](https://www.ibm.com/topics/ai-hallucinations) | Grundlagen und Typen |
| :book: | [Vectara Hallucination Leaderboard](https://huggingface.co/spaces/vectara/leaderboard) | Welches Modell halluziniert am wenigsten? |

## Teste dein Verständnis

- [ ] Kannst du fünf typische Halluzinations-Muster benennen und jeweils ein Gegenmittel nennen?
- [ ] Hast du eine persönliche Strategie zur Halluzinations-Erkennung formuliert?
- [ ] Kannst du erklären, warum Halluzinationen kein Bug sind, sondern eine fundamentale Eigenschaft probabilistischer Sprachmodelle?
- [ ] Weißt du, in welchen Bereichen das Halluzinationsrisiko besonders hoch ist?
