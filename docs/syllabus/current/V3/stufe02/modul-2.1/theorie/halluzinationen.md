---
title: "Halluzinationen — kein Bug, sondern Feature"
module: "2.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Halluzinationen — kein Bug, sondern Feature

## Kernidee

Weil ein LLM immer das "wahrscheinlichste nächste Wort" vorhersagt, erzeugt es auch dann überzeugend klingende Texte, wenn es keine echte Information hat. Es "erfindet" mit Überzeugung — wie ein Redner, der nie "Ich weiß es nicht" sagt. Mit Halluzinationen umzugehen ist Pflicht-Skill für jeden, der LLMs professionell nutzt. Nicht ob ein LLM halluziniert ist die Frage, sondern wann und wie du es erkennst.

## Überblick: Arten von Halluzinationen

| Art | Beschreibung | Beispiel | Gefährlichkeit |
|-----|-------------|---------|----------------|
| Fakten-Halluzination | Erfundene Fakten, die plausibel klingen | "Einstein erhielt 1921 den Nobelpreis für die Relativitätstheorie" (falsch — es war der photoelektrische Effekt) | Hoch — schwer zu erkennen |
| Quellen-Halluzination | Erfundene Quellenangaben | Erfundener DOI, nicht existentes Paper mit echtem Autor-Namen | Sehr hoch — wirkt verifizierbar |
| Code-Halluzination | Nicht existente Funktionen oder APIs | `pandas.DataFrame.ai_analyze()` — gibt es nicht | Mittel — Fehler beim Ausführen |
| Zahlen-Halluzination | Erfundene Statistiken | "73% aller Unternehmen nutzen KI" — frei erfundene Zahl | Hoch — Zahlen wirken autoritativ |
| Logik-Halluzination | Korrekt klingendes, aber falsches Reasoning | Falsche mathematische Beweise, die formal aussehen | Sehr hoch — Fehler im Denkprozess |

## Im Detail

### Warum Halluzinationen unvermeidbar sind

Halluzinationen sind kein Software-Bug, den man patchen kann. Sie sind eine direkte Konsequenz der Architektur: Ein LLM ist darauf trainiert, immer eine plausible Fortsetzung zu generieren. Es hat kein Konzept von "wahr" oder "falsch" — nur von "wahrscheinlich" und "unwahrscheinlich". Wenn ein Thema in den Trainingsdaten unterrepräsentiert ist, interpoliert das Modell aus verwandten Mustern und erzeugt dabei plausiblen Unsinn.

Stell es dir so vor: Ein LLM ist wie ein brillanter Redner, der jedes Thema überzeugend vortragen kann — auch wenn er keine Ahnung hat. Die "Überzeugungskraft" ist eingebaut, das "Wissen" nicht.

### Wann Halluzinationen besonders häufig sind

- **Nischenthemen:** Je weniger Trainingsdaten zu einem Thema, desto mehr muss das Modell interpolieren
- **Aktuelle Ereignisse:** Nach dem Knowledge Cutoff halluziniert das Modell systematisch
- **Spezifische Zahlen:** Daten, Statistiken, Preise — das Modell "rät" oft
- **Personen:** Biografische Details, Zitate, Publikationslisten werden regelmäßig vermischt oder erfunden
- **Quellenangaben:** LLMs erfinden routinemäßig DOIs, URLs und Paper-Titel

### Halluzinationsraten: Zahlen und Fakten

Halluzinationsraten variieren stark nach Modell und Aufgabe. Einige Orientierungspunkte (Stand 2026):

- **Frontier-Modelle (GPT-4o, Claude Opus, Gemini Ultra):** ca. 3-8% Halluzinationsrate bei Faktenfragen
- **Kleinere Modelle (Haiku, Flash, GPT-4o-mini):** ca. 8-15%
- **Lokale Modelle (7B-13B):** ca. 15-30%
- **Bei Quellen-Generierung:** bis zu 50%+ — auch bei Frontier-Modellen

Die Raten sinken mit jeder Modellgeneration, aber Null wird nie erreicht.

### Strategien gegen Halluzinationen

**1. Fakten-Check als Grundhaltung**
Behandle jede LLM-Aussage wie eine unbelegte Behauptung. Prüfe Fakten, Zahlen und Quellen — immer.

**2. Quellenangaben verifizieren**
Wenn ein LLM eine Quelle nennt, klicke den Link an oder suche den Titel. Erfundene Quellen sind häufiger als die meisten denken.

**3. Strukturierte Prompts**
"Wenn du dir nicht sicher bist, sage 'Ich bin nicht sicher' statt zu raten" — das reduziert Halluzinationen messbar, eliminiert sie aber nicht.

**4. Chain-of-Thought / Reasoning**
Modelle, die ihren Denkprozess zeigen (Claude Extended Thinking, o3), halluzinieren weniger, weil Widersprüche im Denkprozess sichtbar werden.

**5. Grounding durch Kontext**
Gib dem Modell die relevanten Informationen im Prompt mit, statt es aus dem "Gedächtnis" abrufen zu lassen. Ein LLM, das aus einem mitgegebenen Dokument zitiert, halluziniert deutlich weniger als eines, das frei antworten soll.

**6. Mehrere Modelle befragen**
Wenn zwei unabhängige Modelle dasselbe sagen, ist die Wahrscheinlichkeit höher, dass es stimmt — aber keine Garantie.

### Die Zukunft: Weniger, aber nie Null

Jede neue Modellgeneration halluziniert weniger als die vorherige. Techniken wie RAG (Retrieval-Augmented Generation), Grounding und verbesserte Trainingsmethoden helfen. Aber solange LLMs probabilistische Systeme sind, werden sie halluzinieren. Der professionelle Umgang damit — nicht die Vermeidung — ist der Skill.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [IBM — What are AI hallucinations?](https://www.ibm.com/topics/ai-hallucinations) | Solide Grundlagen-Erklärung |
| :book: | [Anthropic — Reducing Hallucinations](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations) | Praktische Gegenmaßnahmen für Claude |
| :book: | [Vectara Hallucination Leaderboard](https://github.com/vectara/hallucination-leaderboard) | Vergleich der Halluzinationsraten verschiedener Modelle |
| :movie_camera: | [AI Explained — Why LLMs Hallucinate](https://www.youtube.com/watch?v=cfqtFvWOfg0) | Verständliche Video-Erklärung |

## Teste dein Verständnis

- [ ] Frag ein LLM nach einer "wissenschaftlichen Studie" zu einem beliebigen Thema und lass dir den DOI geben. Verifiziere die Quelle — existiert sie? Was sagt das über Quellen-Halluzinationen?
- [ ] Warum kann man Halluzinationen nicht einfach "wegprogrammieren"? Was müsste sich an der Grundarchitektur ändern?
- [ ] Du nutzt Claude für eine wichtige Recherche. Das Modell liefert fünf Fakten mit Prozentangaben. Welche Schritte unternimmst du, bevor du diese Zahlen in einer Präsentation verwendest?
