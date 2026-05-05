# Stufe 3: Arbeitsmethoden mit KI

**Aufwand gesamt:** 🔧 20-30h · 🧮 15-25h · 💼 25-35h
**Voraussetzungen:** Stufe 2 abgeschlossen
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Bevor du in Stufe 5 produktive KI-Anwendungen baust, lernst du **wie man strukturiert mit KI arbeitet**: Use-Cases identifizieren statt blind zu bauen, Design Thinking für KI-Probleme, Sprint-Planung mit KI-Unterstützung. Der häufigste Fehler bei KI-Projekten 2026 ist nicht die Technik — es ist, dass jemand das falsche Problem löst. Diese Stufe verhindert das.

**Ergebnis nach Stufe 3:**
- Du kannst einen KI-Use-Case strukturiert bewerten (Use-Case-Canvas).
- Du kennst Design-Thinking-Methodik mit KI-Augmentation.
- Du planst Sprints mit KI-Tools, ohne dass die Tools dich kontrollieren.
- 💼: Du hast drei eigene Use-Case-Canvases mit ROI-Schätzung.

---

## Modul 3.1: Design Thinking + KI

Design Thinking ist die etablierte Methodik, um Nutzerprobleme zu verstehen, bevor man Lösungen baut. Mit KI verändert sich der Werkzeugkasten — KI beschleunigt User-Research, Synthese, Prototyping —, aber die Methodik bleibt gleich. Dieses Modul lehrt dich, Design-Thinking-Workflows mit KI zu augmentieren, ohne in den Fehler zu verfallen, KI selbst als Lösung zu sehen.

**Aufwand:** 🔧 4-6h · 🧮 4-6h · 💼 8-12h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Stufe 2

### Lernziel
Du kannst einen vollständigen Design-Thinking-Prozess (Empathize → Define → Ideate → Prototype → Test) auf ein eigenes KI-Problem anwenden, mit gezielter KI-Augmentation in jeder Phase.

### Theorie

- 🟢 **Design Thinking als Doppel-Diamant** — die fünf Phasen sind nicht linear, sondern zwei Schleifen: Problem-Phase (Empathize + Define) divergiert zuerst breit und konvergiert auf das richtige Problem, Lösungs-Phase (Ideate + Prototype + Test) divergiert breit und konvergiert auf die richtige Lösung. Häufigster Fehler: zu schnell zur Lösung springen. [IDEO Design Thinking](https://designthinking.ideo.com) · [Stanford d.school Bootcamp Bootleg (kostenloses PDF)](https://dschool.stanford.edu/resources/the-bootcamp-bootleg)

- 🟢 **Empathize: User-Research mit KI-Augmentation** — Interviews bleiben menschlich, aber KI hilft bei: Transkription (Whisper), Synthese mehrerer Interviews (Claude/GPT), Pattern-Erkennung in qualitativen Daten, Persona-Generierung als Diskussionsgrundlage. **Wichtig:** KI ist Hilfe, nicht Ersatz — wer Personas allein durch KI generiert, baut auf Trainingsdaten-Stereotypen. [NN/g — User Research mit KI](https://www.nngroup.com/articles/ai-user-research/) · [IDEO U Free Resources](https://www.ideou.com/pages/design-thinking-resources)

- 🟢 **Define: Problem-Statement formulieren** — die "How Might We"-Frage als Werkzeug. KI hilft bei der Reformulierung: gegeben ein vages Problem, generiere 10 verschiedene Problem-Statements, dann Mensch wählt das schärfste. [Stanford d.school — Define Mode](https://dschool.stanford.edu/resources)

- 🟢 **Ideate: Brainstorming mit KI als Sparring-Partner** — Crazy 8s, SCAMPER, Worst-Possible-Idea — alle klassischen Methoden funktionieren, KI kann Ideen-Volumen vervielfachen. **Vorsicht:** KI-Ideen tendieren zu Standard-Mustern. Mensch muss bewerten und divergent denken, KI darf nicht die Auswahl treffen. [IDEO Method Cards](https://www.ideo.com/post/method-cards)

- 🟢 **Prototype: KI-spezifische Prototypen** — bei KI-Produkten ist der Prototyp oft funktional ("Wizard of Oz" mit ChatGPT), nicht nur visuell. Vibe-Coding-Tools aus Modul 2.6 (Bolt, Lovable, v0) sind ideale Prototyping-Werkzeuge. [Wizard of Oz Prototyping](https://en.wikipedia.org/wiki/Wizard_of_Oz_experiment)

- 🟢 **Test: Usability-Testing für KI-Produkte ist anders** — Standard-Tasks reichen nicht, weil KI-Outputs nicht-deterministisch sind. Test-Methodik: Repeated Tasks (gleicher Task mehrfach, Varianz beobachten), Edge Cases (was passiert bei ungewöhnlichen Inputs?), Failure Modes (was passiert wenn KI falsch liegt?). [NN/g — Testing AI Products](https://www.nngroup.com)

- 🟢 **KI-Produkt-Heuristiken** — bei KI-Produkten gelten zusätzliche UX-Regeln: Erwartungs-Management (Nutzer muss wissen, dass es KI ist), Korrigierbarkeit (Nutzer muss falsche Outputs korrigieren können), Transparenz (Quellen, Confidence). [Microsoft Guidelines for Human-AI Interaction (18 Heuristiken)](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/) · [Google PAIR Guidebook](https://pair.withgoogle.com/guidebook/)

- 🟢 **Service Design Thinking für KI** — KI-Produkte sind oft Services, keine Software. Customer Journey Maps zeigen, wo KI Touchpoints hat. Service Blueprints zeigen, was hinter den Kulissen passiert (welcher KI-Service, welche Datenquellen, welche Eskalationspfade). [Service Design Tools](https://servicedesigntools.org)

- 🔄 **KI-Tools für Design Thinking 2026** — Miro mit AI Features (Affinitätsmapping, Synthese), FigJam AI (Brainstorming-Cluster), Notion AI (Synthese von Notizen), NotebookLM (Forschungsmaterial-Verarbeitung), Otter.ai (Interview-Transkription). *Verfallsdatum: Nov 2026.* [Miro AI](https://miro.com/ai/) · [FigJam AI](https://www.figma.com/figjam/ai-tools/) · [NotebookLM](https://notebooklm.google.com)

### Praxis: Hauptprojekt — Design-Thinking-Sprint für eigenes KI-Problem

Du wählst ein **eigenes Problem** aus deinem Umfeld (Job, Verein, Hobby) und führst einen kompletten Design-Thinking-Sprint mit KI-Augmentation durch:

- **Empathize:** mindestens 2-3 Interviews mit potenziellen Nutzern (Familie, Kolleg:innen, Community) führen, mit Whisper transkribieren, mit Claude/GPT synthetisieren.
- **Define:** mindestens 5 "How Might We"-Statements generieren (selbst + KI), das schärfste auswählen, begründen.
- **Ideate:** mindestens 20 Ideen generieren (KI hilft beim Volumen), in Cluster sortieren, top 3 auswählen.
- **Prototype:** mit Vibe-Coding-Tool aus 2.6 oder als Click-Dummy in Figma einen funktionalen Prototyp bauen — auch wenn er noch nicht "schön" ist.
- **Test:** mindestens 3 Personen testen lassen, Feedback dokumentieren, Iteration planen.
- Alles im Portfolio dokumentieren als `stufe-3_arbeitsmethoden/3-1-design-thinking-sprint/` mit Foto/Screenshot pro Phase.

**Wichtig:** Das Problem muss **echt** sein, nicht erfunden. Wenn du keins findest, beobachte deine Woche und identifiziere wiederkehrende Frustrationen.

### 🎁 Mehrwert-Mini-Projekte
- **Persönlicher Design-Thinking-Notion-Workspace** mit Templates für jede Phase, in denen du KI-Prompts vorab als Vorlage hast.
- **Mini-Service-Blueprint** für eines deiner Mini-Projekte aus Stufe 2 (z.B. Newsletter-Workflow): visualisiere Customer Journey + Backend-Steps.

### 🌱 Open-Source-Pfad
- [draw.io](https://draw.io) (OSS) statt Miro für Affinitätsmapping und Service Blueprints.
- [Excalidraw](https://excalidraw.com) (OSS) für schnelle Sketches und Click-Dummies.
- Whisper lokal über [whisper.cpp](https://github.com/ggerganov/whisper.cpp) für Interview-Transkription ohne Cloud.

### Outcome-Check
- [ ] Vollständiger Design-Thinking-Sprint im Portfolio dokumentiert
- [ ] Mindestens 2 echte Interviews durchgeführt und transkribiert
- [ ] Funktionaler Prototyp (auch wenn unfertig)
- [ ] Mindestens 3 Test-Sessions mit echten Personen
- [ ] Reflexion: was hat KI beschleunigt, wo war sie überflüssig oder schädlich?

---

## Modul 3.2: Agile mit KI

Agile Methoden (Scrum, Kanban) sind 2026 in vielen Unternehmen Standard für Produktentwicklung. KI verändert Agile-Praxis nicht fundamental — Sprints bleiben Sprints, Stand-ups bleiben Stand-ups —, aber sie augmentiert viele Routinen: Backlog-Refinement, Story-Schreibung, Estimation, Retro-Synthese. Dieses Modul lehrt dich, KI als Sprint-Helfer zu nutzen, ohne in die Falle zu tappen, dass KI-Vorschläge die Team-Diskussion ersetzen.

**Aufwand:** 🔧 4-6h · 🧮 4-6h · 💼 8-12h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Stufe 2

### Lernziel
Du verstehst Scrum und Kanban, kennst KI-Augmentations-Patterns für agile Routinen, und kannst einen 2-wöchigen Sprint mit KI-Tools planen und durchführen.

### Theorie

- 🟢 **Scrum-Grundlagen** — Roles (Product Owner, Scrum Master, Dev Team), Events (Sprint Planning, Daily, Review, Retro), Artefakte (Product Backlog, Sprint Backlog, Increment). Scrum Guide ist 13 Seiten, lesbar in einer Stunde. [Scrum Guide (kostenlos)](https://scrumguides.org/scrum-guide.html) · [Scrum.org Free Resources](https://www.scrum.org/resources)

- 🟢 **Kanban-Grundlagen** — visualisierte Arbeit, WIP-Limits, kontinuierlicher Fluss, weniger zeremoniell als Scrum. Wann Scrum, wann Kanban? Scrum: Produktentwicklung mit Iterationen. Kanban: kontinuierlicher Service-Betrieb. [Atlassian Kanban Guide](https://www.atlassian.com/agile/kanban) · [Kanban University](https://kanban.university)

- 🟢 **User Stories und Acceptance Criteria** — "Als <Rolle> möchte ich <Aktion>, damit <Wert>" plus testbare Acceptance Criteria. KI hilft bei der Generierung von Story-Varianten und Acceptance-Criteria-Vorschlägen aus vagen Beschreibungen. [Mike Cohn — User Stories Applied (klassisch)](https://www.mountaingoatsoftware.com/agile/user-stories) · [Atlassian — Acceptance Criteria](https://www.atlassian.com/agile/project-management/user-stories)

- 🟢 **Story-Estimation mit KI-Hilfe** — Story Points oder T-Shirt-Sizes klassisch, KI kann Comparable-Stories aus dem Backlog vorschlagen ("ähnliche Stories wurden mit 5 Punkten bewertet"). Aber: KI darf nicht die finale Schätzung treffen — Team-Diskussion ist Kern der Estimation. [Mike Cohn — Estimating with Story Points](https://www.mountaingoatsoftware.com/agile/scrum/scrum-tools/planning-poker)

- 🟢 **Backlog-Refinement mit KI** — KI strukturiert Stakeholder-Input zu Stories, identifiziert Dubletten, schlägt Aufteilung großer Stories vor. Praxis-Check immer durch Mensch: KI sieht Inhalte, nicht Kontext.

- 🟢 **Daily Stand-up bleibt menschlich** — KI hat hier wenig Mehrwert, weil Daily über Mensch-zu-Mensch-Kommunikation läuft (Blocker, Bedürfnisse, Kontext). Wer ein KI-Tool für Daily braucht, hat ein anderes Problem.

- 🟢 **Sprint Review mit KI: Demo-Vorbereitung beschleunigen** — KI generiert Demo-Skripte aus Stories, schreibt Release Notes, fasst Sprint-Ergebnisse für Stakeholder zusammen. Substanz bleibt menschlich.

- 🟢 **Retro mit KI: Synthese statt Generierung** — KI kann Retro-Notes thematisch clustern, Action Items extrahieren, Patterns über mehrere Retros hinweg erkennen ("Blocker XY taucht zum dritten Mal auf"). Erkenntnisse darf KI vorschlagen, nicht alleinig erzeugen. [Atlassian — Retrospective Techniques](https://www.atlassian.com/team-playbook/plays/retrospective)

- 🔄 **Agile-Tools mit KI-Integration 2026** — Jira hat Atlassian Intelligence, Linear hat AI-Features, Notion-AI für Backlog-Pflege, [Reclaim AI](https://reclaim.ai) für Time-Boxing, [Read AI](https://www.read.ai) für Meeting-Synthese. *Verfallsdatum: Nov 2026.* [Linear](https://linear.app) (besonders bei Tech-Teams populär) · [Atlassian Intelligence](https://www.atlassian.com/software/artificial-intelligence)

- 🟢 **Anti-Pattern: KI-Driven Development** — Falle, in die viele Teams 2024-2026 gefallen sind: KI generiert Stories, KI schätzt, KI implementiert (mit Cursor/Claude Code). Das Ergebnis: niemand versteht den Code mehr, technische Schulden explodieren. KI-Augmentation ja, aber Mensch behält Verantwortung für Architektur und Qualität.

### Praxis: Hauptprojekt — Eigener 2-Wochen-Sprint

Plane und führe einen eigenen 2-wöchigen Sprint durch (für ein eigenes Lern-Ziel oder Projekt — z.B. "Curriculum-Module 2.5-2.7 abschließen mit allen Outcome-Checks"):

- **Sprint Planning:** Backlog mit 10-15 Items in einem Tool deiner Wahl (Linear, Notion, Trello, GitHub Projects). KI hilft bei der Story-Formulierung. Sprint-Goal definieren.
- **Estimation:** Items mit T-Shirt-Sizes oder Story Points schätzen. KI darf Vorschläge machen.
- **Daily Reflection (5 Min):** kurze Notiz, was du gestern getan hast, was heute, ob es Blocker gibt.
- **Sprint Review nach 2 Wochen:** was wurde fertig, was nicht, warum.
- **Retro:** mit KI-Hilfe Pattern aus Daily-Reflections extrahieren, 3 Action Items für nächsten Sprint.
- Dokumentation im Portfolio: `stufe-3_arbeitsmethoden/3-2-mein-erster-sprint/` mit Backlog-Snapshot, Burndown (manuell oder Tool-generiert), Retro-Outputs.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliches Sprint-Template** in Linear/Notion/GitHub Projects, das du für jedes Projekt wiederverwendest.
- **Retro-Prompt-Library** — KI-Prompts für verschiedene Retro-Formate (Sailboat, Glad/Sad/Mad, 4Ls).
- **Estimation-Cheat-Sheet** — deine persönliche Skala für Story-Points, mit Beispielen aus eigener Erfahrung.

### 🌱 Open-Source-Pfad
- [Plane](https://plane.so) (OSS-Alternative zu Linear/Jira, self-hostable).
- [Wekan](https://wekan.github.io) (OSS Kanban Board).
- KI-Augmentation komplett mit Ollama lokal: Story-Generierung, Retro-Synthese — für DSGVO-sensible Team-Daten.

### Outcome-Check
- [ ] Eigener 2-Wochen-Sprint vollständig durchgeführt und dokumentiert
- [ ] Sprint Backlog mit 10+ Stories, jede mit Acceptance Criteria
- [ ] Mindestens drei Daily-Reflections geführt
- [ ] Sprint Review und Retro durchgeführt
- [ ] Mindestens 3 Action Items aus Retro abgeleitet
- [ ] Reflexion: wo hat KI sinnvoll geholfen, wo war sie Ablenkung?

---

## Modul 3.3: Use-Case-Methodik & MVP-Denken

Der teuerste Fehler bei KI-Projekten 2026 ist nicht die Implementierung — es ist, dass Teams Wochen oder Monate in Use-Cases investieren, die kein echtes Problem lösen, kein Geld bringen, oder mit klassischer Software billiger gelöst worden wären. Dieses Modul lehrt dich, einen KI-Use-Case strukturiert zu bewerten, **bevor** du ihn baust. Das ist die Disziplin, die in Stufe 5 (Anwendungen) und Stufe 9 (Strategie) tiefer wird.

**Abgrenzung 3.3 vs. 9.1 (klargestellt in v2.1):** Modul 3.3 lehrt Use-Case-Methodik auf **Einzel-Use-Case-Ebene** — du bewertest einen Use-Case mit einem Canvas und entscheidest, ob er gebaut wird. Modul 9.1 (Stufe 9, KI-Strategie) lehrt Use-Case-Identifikation auf **Portfolio-Ebene für eine Organisation** — du erstellst ein priorisiertes Use-Case-Portfolio mit strategischer Logik (Wettbewerbsvorteil, Operating-Model-Fit, Lock-in-Risiken). Hier in 3.3 lernst du die operative Disziplin, in 9.1 die strategische Brille. Beide bauen aufeinander auf.

**Aufwand:** 🔧 8-10h · 🧮 5-8h · 💼 10-15h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 3.1, 3.2

### Lernziel
Du kannst einen KI-Use-Case mit einem strukturierten Canvas bewerten (Problem, Wert, Stakeholder, Daten, Risiken, ROI, MVP-Definition) und entscheiden, ob er gebaut werden soll oder nicht.

### Theorie

- 🟢 **Was ist ein guter KI-Use-Case?** — Vier Kriterien: (1) **Echtes Problem**, das nachweislich Frustration / Geld / Zeit kostet. (2) **KI-spezifische Stärke** — natürliche Sprache, Mustererkennung, Synthese. Ein Lookup ist kein KI-Use-Case. (3) **Verfügbare Daten** in ausreichender Menge und Qualität. (4) **Akzeptable Fehlerrate** — bei medizinischen Diagnosen muss KI 99.9% richtig liegen, bei E-Mail-Klassifikation reichen 90%. [a16z — Generative AI Use Cases](https://a16z.com) · [McKinsey — State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)

- 🟢 **AI Use Case Canvas** — strukturiertes Bewertungs-Werkzeug, ähnlich wie Business Model Canvas. Felder: Problem, Wert, Nutzer, Datenquellen, KI-Methode, Erfolgs-Metriken, Risiken, ROI-Schätzung, MVP-Definition. Mehrere Templates verfügbar, Kern ist überall ähnlich. [Beispiel-Templates auf Miro](https://miro.com/templates/ai-canvas/) · [PWC AI Canvas](https://www.pwc.de)

- 🟢 **Impact-Effort-Matrix für Use-Case-Priorisierung** — wenn du mehrere Ideen hast: 2x2-Matrix (Impact: niedrig/hoch × Effort: niedrig/hoch). Quick Wins (hoch/niedrig) zuerst, Big Bets (hoch/hoch) als Investment, niedrig/niedrig ignorieren, niedrig/hoch streichen. [Atlassian — Impact Effort Matrix](https://www.atlassian.com/team-playbook/plays/impact-effort-matrix)

- 🟢 **MVP-Denken bei KI-Produkten** — Minimum Viable Product = kleinste Version, die echten Wert liefert und Lernen ermöglicht. Bei KI: Wizard-of-Oz-MVP (KI-Funktion durch Mensch simuliert), Concierge-MVP (manueller Service als Lerngrundlage), Prototype-MVP (echter, aber unfertiger KI-Prototyp). [Eric Ries — The Lean Startup](http://theleanstartup.com) · [Strategyzer — Testing Business Ideas](https://www.strategyzer.com/library/testing-business-ideas)

- 🟢 **Build-vs-Buy-Entscheidung** — bevor du baust: gibt es eine fertige Lösung? Vertiefung in Modul 9.4. Hier die Faustregel: Build, wenn (a) Wettbewerbsvorteil entsteht, (b) Kerngeschäft betroffen ist, (c) keine Off-the-Shelf-Lösung existiert. Buy, wenn Standard-Aufgabe und externe Lösung Time-to-Market verkürzt.

- 🟢 **ROI-Schätzung für KI-Use-Cases** — drei Wert-Kategorien: (1) **Cost Reduction** (z.B. weniger manuelle Arbeit, X Stunden × Y €/Stunde × Anzahl Mitarbeiter). (2) **Revenue Increase** (z.B. höhere Conversion, mehr Sales). (3) **Risk Reduction** (z.B. weniger Compliance-Strafen, weniger Bugs). Cost: Entwicklung (einmalig) + Betrieb (laufend pro Monat) + Wartung. ROI = (Wert - Cost) / Cost. Vertiefung in Modul 9.2.

- 🟢 **Risiken systematisch bewerten** — vier Kategorien: (1) **Technisch** (Daten unzureichend, Modell nicht gut genug, Halluzinationen kritisch). (2) **Rechtlich** (DSGVO, EU AI Act, Branchen-Regulation). (3) **Organisatorisch** (Akzeptanz, Schulungsbedarf, Change-Resistance). (4) **Wirtschaftlich** (ROI nicht realistisch, Cost explodiert, Wettbewerb überholt). [BCG — AI Risk Framework](https://www.bcg.com)

- 🟢 **Stakeholder-Mapping** — wer hat Einfluss, wer ist betroffen? Power-Interest-Grid: viel Einfluss + viel Interesse = "Manage closely". Bei KI-Projekten besonders: Mitarbeitende-Vertretung (Betriebsrat), Datenschutz-Beauftragte, Compliance, IT-Sicherheit. [Mendelow's Matrix](https://www.tutor2u.net)

- 🟢 **Anti-Pattern: "AI for AI's sake"** — wenn ein Use-Case mit KI nur deshalb gebaut wird, weil "KI gerade Buzzword ist". Häufigster Marker: Vorstand fordert KI-Projekt ohne klares Problem. Gegenmittel: Use-Case-Canvas zwingt zur Frage "warum eigentlich?".

- 🔄 **2026-Reality-Check: Wo KI heute wirklich Wert liefert** — fünf Pattern, die in der Praxis konsistent funktionieren: (1) Texterstellung und -bearbeitung (Marketing, Berichte, E-Mails). (2) Wissensarbeit-Augmentation (Recherche, Synthese, Code). (3) Klassifikation und Triage (Tickets, Leads, Spam). (4) Suche und Retrieval (intern, Dokumente, Wissensbasen). (5) Analyse und Reporting (Daten zu Insights). Was 2026 NICHT zuverlässig funktioniert: vollautonome Agenten in komplexen Domänen, Kreativarbeit ohne Mensch, hochpräzise Faktenarbeit ohne Verifikation. *Verfallsdatum: Nov 2026.* [a16z — Production AI Use Cases](https://a16z.com)

### Praxis: Hauptprojekt — Drei Use-Case-Canvases mit ROI

Wähle drei verschiedene KI-Use-Case-Ideen — eine aus deinem Berufsalltag, eine aus einem Hobby/Verein, eine aus deinem Privatleben. Für jede:

- **AI Use Case Canvas** vollständig ausfüllen (Template wählen oder selbst gestalten):
 - Problem-Statement
 - Zielnutzer
 - KI-Wert (warum überhaupt KI?)
 - Datenquellen
 - KI-Methode (Prompting, RAG, Agent, klassisches ML?)
 - Erfolgsmetriken (mindestens 2 messbar)
 - Risiken (mindestens 4 in den vier Kategorien)
 - ROI-Schätzung (auch wenn grob)
 - MVP-Definition (was ist die kleinste Version, die du in 2 Wochen bauen könntest?)
 - Build-vs-Buy-Bewertung (gibt es Off-the-Shelf-Lösungen? Welche?)
- **Priorisierung mit Impact-Effort-Matrix**: welche der drei Ideen würdest du als erstes angehen?
- **Reflexion**: welcher Use-Case hat den Canvas-Test bestanden, welcher gescheitert? Warum?
- Im Portfolio: `stufe-3_arbeitsmethoden/3-3-use-case-canvases/` mit allen drei Canvases als Markdown oder PDF.

**Wichtig:** Mindestens einer dieser Use-Cases sollte realistisch genug sein, dass du ihn als möglichen Capstone betrachten könntest (siehe `000_master.md`, Capstone-Auswahl).

### 🎁 Mehrwert-Mini-Projekte
- **Persönliches Use-Case-Canvas-Template** als wiederverwendbares Markdown im Portfolio.
- **"Use Case Idea Backlog"** — laufende Liste von Ideen, die dir kommen, mit Quick-Score (1-5 Impact, 1-5 Effort).
- **Build-vs-Buy-Recherche-Routine** — bei jeder neuen Idee 30 Min recherchieren, was es als Off-the-Shelf-Lösung gibt.

### 🌱 Open-Source-Pfad
Use-Case-Methodik ist tool-unabhängig. Wer die Canvases als interaktives Tool will: [Excalidraw](https://excalidraw.com) oder [draw.io](https://draw.io) für visuelle Canvases, beides OSS.

### Outcome-Check
- [ ] Drei vollständig ausgefüllte AI Use Case Canvases im Portfolio
- [ ] Impact-Effort-Matrix mit allen drei Ideen
- [ ] ROI-Schätzungen mit dokumentierten Annahmen
- [ ] MVP-Definitionen pro Use-Case
- [ ] Mindestens ein Canvas qualifiziert sich als möglicher Capstone
- [ ] Reflexion zu Build-vs-Buy für jeden Use-Case

---

## Free-Zertifikate für Stufe 3

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Stanford d.school Bootcamp Bootleg](https://dschool.stanford.edu/resources/the-bootcamp-bootleg) | Stanford d.school | ~5h | Vor / während 3.1 |
| [IBM Design Thinking Practitioner](https://www.ibm.com/training/badge/ibm-design-thinking-practitioner) | IBM | ~5-10h | Vertiefung 3.1 mit Badge |
| [Coursera — AI for Product Owners](https://www.coursera.org/learn/ai-for-product-owners) | Scrum Alliance / Coursera (Audit-Modus) | ~10h | Vertiefung 3.2 |
| [Coursera — AI for Project Managers and Scrum Masters](https://www.coursera.org/learn/ai-for-project-managers-and-scrum-masters) | Scrum Alliance / Coursera (Audit-Modus) | ~10h | Vertiefung 3.2 |
| [Strategyzer — Business Model Generation](https://www.strategyzer.com) | Strategyzer | Free Resources | Vertiefung 3.3 |
| [DLAI — AI for Everyone](https://www.coursera.org/learn/ai-for-everyone) | Andrew Ng (Coursera Audit-Modus) | ~10h | Wenn 💼-Track unsicher |

**Coursera-Audit-Modus-Hinweis (NEU in v2.1):** Coursera-Kurse sind im Audit-Modus kostenlos zugänglich (Materialien ja, Zertifikat nein). Details siehe `99_anhang.md`.

---

## Stufen-Outcome

Nach Stufe 3 hast du:
- ✅ Vollständigen Design-Thinking-Sprint mit echten Nutzern durchgeführt
- ✅ Eigenen 2-Wochen-Sprint mit Backlog, Daily-Reflections, Retro
- ✅ Drei Use-Case-Canvases mit ROI-Schätzung im Portfolio
- ✅ Capstone-Idee identifiziert (für 🔧 in Stufe 5, für 🧮 in Stufe 7, für 💼 in Stufe 9)
- ✅ Methodik etabliert, um KI-Projekte strukturiert zu bewerten

**Du bist bereit für Stufe 4: Programmier-Foundation (Pflicht für 🔧 vor Stufe 5, optional für 💼/🧮)** *(Pflicht-Markierung NEU in v2.1)*.

---

## Aktualisierungslog

- **2026-05-04:** Version v2.2.0 — Aktualisierungslog-Eintrag ohne inhaltliche Änderungen. Stufe 3 (Arbeitsmethoden mit KI) ist von v2.2-Frontier-Themen nicht betroffen. Module 3.1-3.3 unverändert.
- **2026-05-04:** Version v2.1.0 — Abgrenzung Modul 3.3 zu Modul 9.1 explizit klargestellt (operative Einzelfall-Bewertung vs. strategische Portfolio-Sicht); Verfallsdatum-Stempel pro 🔄-Bullet eingeführt; Coursera-Audit-Modus-Hinweis bei Free-Zertifikaten ergänzt; Hinweis auf Stufe 4 als Pflicht für 🔧 (NEU in v2.1) im Stufen-Outcome.
- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: KI-Tool-Integrationen in Jira/Linear/Notion (3.2), 2026-Reality-Check-Patterns (3.3).
