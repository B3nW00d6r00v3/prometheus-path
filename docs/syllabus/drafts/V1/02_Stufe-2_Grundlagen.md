# Stufe 2: Grundlagen

**Aufwand gesamt:** 🔧 35-50h · 🧮 50-70h · 💼 25-35h
**Voraussetzungen:** Stufe 1 abgeschlossen
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Stufe 2 baut die solide Grundlage über LLMs, die Tools-Landschaft, Prompting, Limitationen und OSS-Optionen. Du baust **erste sichtbare Projekte ohne Code-Hürde** (No-Code), bevor du Python lernst. Am Ende der Stufe hast du mindestens drei Mehrwert-Mini-Projekte, die du täglich nutzt — eine Prompt-Library, einen No-Code-Workflow, und ein Python-CLI-Tool.

**Ergebnis nach Stufe 2:**
- Du verstehst, was ein LLM ist (Theorie-Light) und wie die 2026-Landschaft aussieht.
- Du kannst Prompting professionell und mit Eval-Bewusstsein.
- Du erkennst Halluzinationen, Bias, DSGVO-Risiken.
- Du hast einen No-Code-Workflow gebaut, der dir Arbeit abnimmt.
- 🔧🧮: Du hast Python-Skripte, die LLM-APIs benutzen.
- 💼: Du verstehst die Modell-Landschaft strategisch.

---

## Modul 2.1: LLM Foundations LIGHT

Bevor du LLMs nutzt, solltest du in 60-90 Minuten das Grundprinzip verstehen — was ein LLM eigentlich tut, woher es kommt, wo seine Grenzen liegen. Keine Mathematik, keine Architektur-Tiefe (das kommt in 2.5 und Stufe 7). Nur die Konzepte, die du brauchst, um ab Modul 2.2 mit den Tools verantwortungsvoll arbeiten zu können.

**Aufwand:** 🔧 1-2h · 🧮 1-2h · 💼 1-2h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Keine

### Lernziel
Du kannst in eigenen Worten erklären: was ein LLM tut, was Tokens und Context Window sind, was "Trainingsdaten" und "Knowledge Cutoff" bedeuten, warum LLMs halluzinieren.

### Theorie

- 🟢 **Was ein LLM grundsätzlich tut: Wahrscheinlichkeits-Vorhersage** — gegeben einen Text, sagt das Modell das wahrscheinlichste nächste Token vorher. Stochastisches Werkzeug, kein deterministischer Algorithmus. [3Blue1Brown — Was ist ein GPT? (Video, 25 Min)](https://www.youtube.com/watch?v=wjZofJX0v4M)

- 🟢 **Tokens, nicht Wörter** — LLMs arbeiten mit Tokens (Sub-Wort-Einheiten). "Hallo Welt" ist 2 Tokens, "Außergewöhnlichkeit" eventuell 4. Wichtig für Cost (pro Token bezahlt) und Context Window. [OpenAI Tokenizer (interaktiv)](https://platform.openai.com/tokenizer) · [Tiktokenizer (für mehrere Modelle)](https://tiktokenizer.vercel.app)

- 🟢 **Context Window: das Kurzzeitgedächtnis** — die maximale Token-Anzahl, die ein Modell pro Anfrage berücksichtigt (Input + Output). 2026: Claude Opus 4.7 hat 1M Tokens, Gemini 3.1 Ultra 2M, kleinere Modelle ~32K-128K. Was außerhalb des Context Windows liegt, "weiß" das Modell für diesen Aufruf nicht. [Anthropic — Context Windows Explained](https://docs.claude.com/en/docs/build-with-claude/context-windows)

- 🟢 **Trainingsdaten und Knowledge Cutoff** — ein LLM "kennt" nur die Daten, mit denen es trainiert wurde. Cutoff-Datum ist meist mehrere Monate vor Release. Was danach passierte, ist dem Modell unbekannt — außer es bekommt diese Information per Prompt oder Tool. [Simon Willison — LLM Cheatsheet](https://simonwillison.net/series/llms/)

- 🟢 **Halluzinationen — kein Bug, sondern Feature** — weil LLMs Wahrscheinlichkeiten vorhersagen, generieren sie auch dann plausible Texte, wenn sie keine Information haben. Sie "erfinden" sicher klingende Antworten. Mit Halluzinationen umzugehen ist Pflicht-Skill jedes KI-Profis. [IBM — What are AI hallucinations?](https://www.ibm.com/topics/ai-hallucinations) · [Anthropic — Reducing Hallucinations](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations)

- 🟢 **Stochastik: dasselbe Prompt → unterschiedliche Antworten** — Temperature und Top-p kontrollieren die Varianz. Temperature=0 ist nahe deterministisch, Temperature=1 ist kreativ. Hat Konsequenzen für Eval (siehe Querschnitt Eval). [OpenAI — Temperature and Top-p](https://platform.openai.com/docs/guides/text-generation)

- 🔄 **Frontier vs. Open-Source 2026** — Frontier-Closed-Source (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Ultra) führt in vielen Benchmarks. Open-Source (Llama 4, Qwen 3, DeepSeek V4, Gemma 4) hat den Abstand stark verringert und ist in vielen Use-Cases ausreichend. [LLM Stats Leaderboard](https://llm-stats.com) · [LMSYS Chatbot Arena](https://lmarena.ai)

### Praxis: Hauptprojekt — Token & Halluzinations-Experiment

- Mit dem [OpenAI Tokenizer](https://platform.openai.com/tokenizer) eigene Texte in Tokens zerlegen (z.B. eine E-Mail, ein deutscher Fachartikel) — wieviele Tokens für was? Vergleichen mit englischer Übersetzung — meist 30-50% mehr Tokens für Deutsch.
- Ein lokales LLM (Ollama, `llama3.2:3b`) mit drei Test-Prompts konfrontieren, wo es halluzinieren *muss* (z.B. "Wer war der Bürgermeister von Frankfurt am 1. April 2026?", oder "Erfinde mir eine wissenschaftliche Studie zu Thema X mit Quellenangabe"). Ergebnisse dokumentieren.
- Kurzes Reflektion-Doku im Portfolio: was ist passiert, wann halluziniert es offensichtlich, wann subtil?

### 🎁 Mehrwert-Mini-Projekt
**Token-Counter-Bookmarklet** oder **Browser-Lesezeichen für Tiktokenizer** — sodass du bei jedem Prompt schnell die Token-Anzahl prüfen kannst, bevor du Cost-relevante API-Aufrufe machst.

### 🌱 Open-Source-Pfad
Komplett mit Ollama-Modellen arbeiten — vergleichen, wie verschiedene Modellgrößen (3B, 7B, 13B, 70B falls Hardware reicht) bei Halluzinations-Prompts unterschiedlich performant sind. Größere Modelle halluzinieren weniger, aber auch nicht null.

### Outcode-Check
- [ ] Kannst du in 2-3 Sätzen erklären, was ein LLM tut?
- [ ] Hast du Tokens für eigene Texte gezählt und Deutsch vs. Englisch verglichen?
- [ ] Hast du mindestens 3 Halluzinations-Beispiele dokumentiert?
- [ ] Reflektion-Doku im Portfolio (`stufe-2_grundlagen/2-1-llm-foundations-light/`)?

---

## Modul 2.2: KI-Tools-Landschaft

Bevor du Prompt Engineering lernst, musst du wissen, **wofür** du es lernst. Dieses Modul gibt dir den Überblick über die KI-Tools-Landschaft Mai 2026 — Chatbots, Coding-Assistenten, Suchmaschinen, Agenten, Bild/Audio/Video-Generatoren, OSS-Alternativen. Du testest die wichtigsten selbst und entscheidest, welche fünf du täglich nutzen willst.

**Aufwand:** 🔧 4-6h · 🧮 4-6h · 💼 5-7h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Modul 2.1, mindestens ein Cloud-API-Key oder bewusster OSS-Pfad aus Stufe 1

### Lernziel
Du hast aus jeder Tool-Kategorie mindestens ein Tool praktisch getestet und kannst eine begründete Auswahl treffen, welche fünf Tools du in deinen Alltag integrierst.

### Theorie

- 🔄 **Universelle Chatbots / Assistants** — die Frontier-Liga: ChatGPT, Claude, Gemini, Grok, Perplexity (suchend). Jeweils Free-Tier verfügbar, Paid-Tier mit höheren Limits, längeren Contexts und Modell-Auswahl. Welcher passt zu dir, hängt von Use-Case und Sprachpräferenz ab. [LMSYS Chatbot Arena](https://lmarena.ai) für direkten Vergleich · [LLM Stats](https://llm-stats.com)

- 🔄 **Coding-Assistenten** — Cursor (KI-native IDE, Quasi-Standard 2026), Claude Code (CLI-Tool für Terminal-Workflow), GitHub Copilot (in IDE integriert), Cline und Continue (OSS-Alternativen für VS Code), Aider (Terminal, OSS). Ein Coding-Assistent ist 2026 nicht optional für Engineers. [Cursor](https://cursor.com) · [Claude Code](https://docs.claude.com/en/docs/agents-and-tools/claude-code/overview) · [Continue](https://continue.dev) · [Aider](https://aider.chat)

- 🔄 **KI-gestützte Suche** — Perplexity (Suchmaschine mit Quellen), Phind (für Coding), You.com. Im Gegensatz zu Chatbots: aktuelle Webdaten plus Quellenangabe. Stark für Recherche-Aufgaben. [Perplexity](https://perplexity.ai) · [Phind](https://phind.com)

- 🔄 **No-Code KI-App-Builder ("Vibe Coding")** — Bolt.new (Web-Apps in Minuten), Lovable.dev, v0.dev (von Vercel, React-fokussiert), Replit Agent (Full-Stack-Apps). Nicht-Programmierer bauen funktionierende Apps. [Bolt](https://bolt.new) · [Lovable](https://lovable.dev) · [v0](https://v0.dev) · [Replit](https://replit.com)

- 🔄 **Workflow-Automatisierung mit KI** — Make.com (visuell, mächtig), n8n (OSS, self-hostable), Zapier (Klassiker, KI-Integration ausgebaut). Standard-Stack für Verbindung von Tools mit LLM-Steps. [Make](https://make.com) · [n8n](https://n8n.io) · [Zapier](https://zapier.com)

- 🔄 **Bildgenerierung** — Midjourney (kommerziell, höchste Qualität), DALL-E 3 (in ChatGPT), Stable Diffusion (OSS, lokal lauffähig via [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) oder [ComfyUI](https://www.comfy.org)), Flux (OSS, neuere Modelle 2024-2026), Adobe Firefly (rechtssicher für kommerzielle Nutzung). [Stable Diffusion Models auf Civitai](https://civitai.com)

- 🔄 **Audio: Speech-to-Text und Text-to-Speech** — Whisper (OpenAI, OSS, lokal lauffähig), ElevenLabs (proprietär, hohe Qualität für TTS), [Coqui TTS](https://github.com/coqui-ai/TTS) (OSS-TTS), [Speechmatics](https://www.speechmatics.com) (kommerziell). Für deutschsprachige Inhalte besonders wichtig: viele Modelle sind primär englisch trainiert. [Whisper](https://github.com/openai/whisper) · [ElevenLabs](https://elevenlabs.io)

- 🔄 **Videogenerierung** — Runway Gen-4.5, Kling 3.0, Veo 3.1, Luma Dream Machine, Pika. Sora wurde 2026 abgeschaltet, API läuft noch bis September 2026. Stark in Bewegung, monatlich neue Optionen. [There's An AI For That — Video Generation](https://theresanaiforthat.com/s/video-generation/)

- 🔄 **Spezialisierte Tools** — NotebookLM (Google, Dokumenten-basiertes RAG mit Audio-Output), Granola (Meeting-Notizen), Cal.ai (Terminorganisation), Gamma (Präsentationen), Cursor (Coding). Die Liste verändert sich monatlich.

- 🔄 **Live-Quelle für aktuelle Tool-Übersicht** — [There's An AI For That](https://theresanaiforthat.com) listet 24.000+ KI-Tools nach Kategorie und ist 2026 die zuverlässigste Übersicht. [Future Tools](https://www.futuretools.io) · [AI Hunt](https://aihunt.so)

### Praxis: Hauptprojekt — Persönliche Tool-Stack-Doku

- Aus jeder Kategorie mindestens ein Tool 30-60 Min praktisch testen.
- Datei `mein-tool-stack.md` im Portfolio mit Tabelle: Tool / Kategorie / Use-Case bei mir / Free oder Paid? / OSS oder proprietär? / Bewertung 1-5.
- Auswahl der **fünf Tools, die du täglich nutzen willst** — mit Begründung pro Tool.
- Ein Diagramm oder eine Liste, wie diese fünf Tools zusammenspielen (z.B. "Recherche mit Perplexity → Notiz in NotebookLM → Slide-Erstellung in Gamma").

### 🎁 Mehrwert-Mini-Projekte (mehrere möglich)
- **Browser-Lesezeichen-Sammlung** für deine fünf Tools, organisiert in einem Bookmark-Ordner "AI Daily".
- **Wöchentliche "AI Tool Discovery"-Routine** — eine halbe Stunde pro Woche neue Tools auf [There's An AI For That](https://theresanaiforthat.com) prüfen.
- **Persönlicher Tools-Vergleich** für eine spezifische Aufgabe (z.B. "Welcher Chatbot schreibt am besten deutsche E-Mails?") mit Test-Ergebnis.

### 🌱 Open-Source-Pfad
- Statt Cursor: VS Code + [Continue](https://continue.dev) + Ollama lokal.
- Statt Midjourney: Stable Diffusion lokal via [ComfyUI](https://www.comfy.org).
- Statt Make.com: n8n self-hosted.
- Statt ElevenLabs: [Coqui TTS](https://github.com/coqui-ai/TTS) lokal.
- Statt ChatGPT: [Open WebUI](https://openwebui.com) als lokales Chat-Interface über Ollama.

### Outcome-Check
- [ ] Mindestens ein Tool aus jeder Kategorie selbst getestet
- [ ] `mein-tool-stack.md` im Portfolio mit Tabelle und Auswahl
- [ ] Fünf Tools für täglichen Einsatz festgelegt mit Begründung
- [ ] OSS-Alternativen mindestens einmal getestet (auch wenn du proprietär bleibst)

---

## Modul 2.3: Prompt Engineering

Prompt Engineering ist 2026 nicht mehr "Geheim-Technik" — es ist Standard-Skill. In diesem Modul lernst du systematisches Prompting, **mit Eval-Bewusstsein von Anfang an**. Das bedeutet: nicht nur "wie schreibe ich einen Prompt", sondern auch "wie weiß ich, ob mein Prompt besser ist als der vorherige?" Damit baust du den ersten Anker zum Querschnitt-Eval auf, ohne dass du dort schon tief eintauchen musst.

**Aufwand:** 🔧 8-12h · 🧮 8-12h · 💼 6-10h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.1, 2.2

### Lernziel
Du kannst Prompts systematisch entwickeln, mit Standard-Frameworks arbeiten, und einfache A/B-Vergleiche zwischen Prompts durchführen. Du hast eine eigene Prompt-Library mit mindestens 20 kategorisierten, getesteten Prompts.

### Theorie

- 🟢 **Anatomie eines guten Prompts: Kontext, Rolle, Aufgabe, Format, Beispiele, Constraints** — diese sechs Elemente sind die Grundbausteine. Frameworks wie RTF (Role/Task/Format), CTF (Context/Task/Format) oder COSTAR sind Hilfen, kein Selbstzweck. [Anthropic — Prompt Engineering Overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) · [OpenAI — Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

- 🟢 **Few-Shot Prompting: Beispiele zeigen statt erklären** — gib dem Modell 2-5 Beispiele für die gewünschte Output-Form. Wirksamer als Beschreibungen. [Promptingguide.ai — Few-Shot Prompting](https://www.promptingguide.ai/techniques/fewshot)

- 🟢 **Chain-of-Thought (CoT) und Reasoning** — "Denke Schritt für Schritt" und ähnliche Hinweise verbessern bei Reasoning-Aufgaben deutlich. Bei modernen Reasoning-Modellen (Claude mit Extended Thinking, GPT-o-Modelle, DeepSeek R1) übernimmt das Modell das selbst und CoT-Prompts sind teilweise kontraproduktiv. [Promptingguide.ai — CoT](https://www.promptingguide.ai/techniques/cot) · [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking)

- 🟢 **Strukturierte Outputs: JSON, XML, Markdown** — wenn du den Output programmatisch weiterverarbeiten willst, fordere strukturierte Form an. Modern: "Structured Outputs" als API-Feature (OpenAI, Anthropic) erzwingen Schema-Validität. [OpenAI — Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) · [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview)

- 🟢 **System-Prompt vs. User-Prompt** — der System-Prompt setzt Kontext und Verhalten, der User-Prompt enthält die konkrete Aufgabe. Trennung wichtig für Wartbarkeit von KI-Apps.

- 🟢 **Prompt-Eval von Anfang an: Wie weißt du, ob ein Prompt besser ist?** — bei einem einzelnen Prompt fühlt sich "besser" subjektiv an. Echtes Bewusstsein für Eval entsteht erst, wenn du **zwei Prompts auf 5-10 Test-Inputs vergleichst** und die Ergebnisse misst (manuell oder mit LLM-as-Judge). Das ist der erste Schritt zum Querschnitt Eval. [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/)

- 🔄 **Context Engineering — neuer Begriff 2025/2026** — die Idee, dass nicht das einzelne Prompt das Problem ist, sondern **wie der gesamte Kontext (System-Prompt + Conversation-History + Retrieval + Tool-Outputs) strukturiert ist**. Wichtig für lange Workflows. [Latent Space — Context Engineering](https://www.latent.space)

- 🟢 **Prompt-Bibliotheken als Industriepraxis** — Microsoft, Anthropic, OpenAI veröffentlichen kuratierte Prompts. Du baust deine eigene als persönliches Werkzeug. [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook) · [OpenAI Cookbook](https://cookbook.openai.com)

### Praxis: Hauptprojekt — Persönliche Prompt-Library

- GitHub-Unter-Repo oder Ordner `meine-prompt-library/` im Portfolio.
- Mindestens 20 Prompts kategorisiert (z.B. Schreiben/Coding/Lernen/Analyse/Alltag).
- Pro Prompt: Titel, Use-Case, der Prompt-Text, Beispiel-Input und Beispiel-Output, Modell-Empfehlung, Notizen zur Optimierung.
- Mindestens 3 Prompts in zwei Versionen (v1 und v2) mit dokumentiertem A/B-Vergleich auf 5 Test-Inputs — welcher ist besser, warum?

### 🎁 Mehrwert-Mini-Projekt
**Custom GPT / Claude Project / Gemini Gem für deinen Top-Use-Case** — z.B. "E-Mail-Antwort-Assistent in meinem Stil". System-Prompt + Beispiele + Constraints. Sofort nutzbar, spart minutenweise pro Tag.

### 🌱 Open-Source-Pfad
- [Open WebUI](https://openwebui.com) als lokales Chat-Interface mit Ollama, eigene "Modelfile"-Definitionen (Ollama-eigenes Format für System-Prompts).
- [LangChain Hub](https://smith.langchain.com/hub) durchsuchen, OSS-Prompts als Vorlage nehmen und anpassen.

### Outcome-Check
- [ ] Prompt-Library mit mindestens 20 kategorisierten Prompts
- [ ] Mindestens 3 A/B-Vergleiche mit Test-Inputs dokumentiert
- [ ] Mindestens ein Custom GPT / Claude Project / Gem oder OSS-Äquivalent gebaut
- [ ] README erklärt die Library-Struktur

---

## Modul 2.4: KI-Realität verstehen

Bevor du echte Projekte baust, musst du wissen, **wo KI lügt, wo sie verzerrt ist, und welche Datenschutz-Fallstricke du vermeiden musst**. Dieses Modul ist absichtlich kurz und praxisnah — keine Paragraphen-Lehre, sondern Bewusstsein für die häufigsten Fallen. Die formelle EU-AI-Act-Vertiefung folgt in Modul 9.5; hier geht es um sofort relevante Realität.

**Aufwand:** 🔧 3-4h · 🧮 3-4h · 💼 4-5h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.1, 2.3

### Lernziel
Du erkennst Halluzinationen aktiv, kennst die wichtigsten Bias-Muster, weißt wann DSGVO bei KI-Nutzung greift, und kennst deine zukünftige AI-Literacy-Verantwortung.

### Theorie

- 🟢 **Halluzinationen erkennen und behandeln** — typische Muster: erfundene Quellen, falsche Zitate, plausibel klingende Statistiken ohne Beleg, Code mit nicht-existenten Funktionen, Halluzinationen bei wenig dokumentierten Themen. Standard-Gegenmittel: Quellen verlangen, mit Webseite/Dokument verifizieren, Skepsis bei "zu glatten" Antworten. [Anthropic — Reducing Hallucinations](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations) · [IBM — AI Hallucinations](https://www.ibm.com/topics/ai-hallucinations)

- 🟢 **Bias in KI-Systemen** — LLMs spiegeln die Vorurteile der Trainingsdaten. Häufige Muster: Geschlechter-Bias bei Berufen ("Krankenschwester" → female default), kulturelle Defaults (oft US-zentrisch), unter-repräsentierte Gruppen, Sprachen-Hierarchien (Englisch ist oft "Standard"). [MIT — AI Ethics Resources](https://aiethics.mit.edu) · [Algorithm Watch — Auditing Algorithms](https://algorithmwatch.org)

- 🟢 **DSGVO-Basics für KI-Nutzer** — fünf Punkte zum Mitnehmen: (1) Personenbezogene Daten gehören nicht ungeprüft in Cloud-LLM-APIs (2) Auftragsverarbeitungs-Verträge mit Cloud-Anbietern sind Pflicht für Firmen-Nutzung (3) Lokale LLMs (Ollama) sind DSGVO-freundlicher (4) Right-to-be-Forgotten gilt auch für Vector-DBs (5) Dokumentation der KI-Nutzung ist mit EU AI Act zunehmend Pflicht. [BfDI — KI und Datenschutz (Deutsch)](https://www.bfdi.bund.de) · [HmbBfDI — Diskussionspapier KI](https://datenschutz-hamburg.de)

- 🟢 **Prompt Injection als Sicherheitsrisiko** — wenn dein LLM-System externe Daten liest (Web, Dokumente, E-Mails), können diese versteckte Anweisungen enthalten, die das Modell ausführt. Mindeststandard: nicht blind LLM-Outputs ausführen, Trennung zwischen System- und User-Daten, kritische Aktionen mit Mensch-Bestätigung. [OWASP — LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) · [Simon Willison — Prompt Injection](https://simonwillison.net/series/prompt-injection/)

- 🟢 **AI Literacy nach EU AI Act Art. 4** — seit 2.2.2025 Compliance-Pflicht: Wer in der EU KI in einer Organisation einsetzt, muss Mitarbeiter:innen schulen. Du wirst möglicherweise schon in 12 Monaten dafür verantwortlich sein. Vertiefung in Modul 9.5. [EU AI Act Service Desk — AI Literacy](https://ai-act-service-desk.ec.europa.eu)

- 🔄 **Ehrliche Kommunikation über KI-Nutzung** — wachsender Trend in Deutschland: KI-Outputs als solche kennzeichnen, Disclosure in Bewerbungen, Kundenkommunikation, wissenschaftlicher Arbeit. Ehrlichkeit ist 2026 Standardpraxis, nicht mehr optional. [Heise — KI-Disclaimer Trend](https://www.heise.de)

### Praxis: Hauptprojekt — Halluzinations-Tagebuch (1 Woche)

- 7 Tage lang dokumentierst du jede Halluzination, jeden Bias, jedes DSGVO-relevante Verhalten, das du in der KI-Nutzung beobachtest.
- Datei `halluzinations-tagebuch.md` im Portfolio.
- Pro Eintrag: Datum, Tool, Prompt, fragwürdiger Output, was war falsch, wie hast du es erkannt.
- Am Ende: 3-5 persönliche Regeln, die du daraus ableitest.

### 🎁 Mehrwert-Mini-Projekt
**Eigene "KI-Disclaimer"-Vorlagen** für E-Mails, Bewerbungen, Kundenkommunikation, in denen du KI-Nutzung transparent machst. Wert: ehrliche Kommunikation ohne dich jedes Mal neu erfinden zu müssen.

### 🌱 Open-Source-Pfad
[Garak](https://github.com/leondz/garak) — OSS-Tool zum systematischen Testen von LLM-Schwächen (Halluzinationen, Prompt Injection, Bias) gegen lokale Modelle. Für Engineers ein guter Einstieg in adversarial testing.

### Outcome-Check
- [ ] Halluzinations-Tagebuch über 7 Tage geführt mit mindestens 10 Einträgen
- [ ] Persönliche Regeln (3-5) aus dem Tagebuch abgeleitet
- [ ] DSGVO-Basics in eigenen Worten zusammengefasst
- [ ] AI-Literacy-Pflicht nach Art. 4 verstanden
- [ ] Optional: KI-Disclaimer-Vorlagen erstellt

---

## Modul 2.5: LLM Foundations VERTIEFT

Jetzt, mit Praxiserfahrung aus 2.2 und 2.3, kannst du LLM-Theorie sinnvoll vertiefen. Dieses Modul deckt die 2026er-Modell-Landschaft, Multi-Model-Routing, Provider-Abstraktion, MCP als Konzept, Function Calling, Reasoning-Modelle und Cost/Performance-Trade-offs ab. **Hier wird MCP zum ersten Mal eingeführt**, praktisch wird es in Modul 5.3.

**Aufwand:** 🔧 8-12h · 🧮 12-18h · 💼 4-6h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.1-2.4

### Lernziel
Du verstehst die Modell-Landschaft Mai 2026, kennst MCP konzeptionell, verstehst Function Calling und Multi-Model-Routing, und kannst eine begründete Entscheidung treffen, welches Modell für welchen Use-Case.

### Theorie

- 🔄 **Modell-Landschaft Mai 2026 — Frontier Closed-Source** — Anthropic Claude Opus 4.7 und Sonnet 4.6 (1M Context), OpenAI GPT-5 / 5.5 (Standard für viele Tasks), Google Gemini 2.5 / 3.1 Ultra (2M Context, nativ multimodal), xAI Grok 4 (Realtime-Daten), Mistral 3 (europäisch). Modell-Stärken sind aufgaben-abhängig, kein "bestes Modell für alles". Live-Quelle: [LLM Stats](https://llm-stats.com) · [LMSYS Chatbot Arena](https://lmarena.ai)

- 🔄 **Modell-Landschaft 2026 — Open-Source** — Meta Llama 4 (mehrere Größen), Alibaba Qwen 3 (stark in Chinesisch + Code), Google Gemma 3/4 (Apache 2.0, gute deutsche Sprache), DeepSeek V4 (Reasoning-Stärke), Mistral 3 OSS-Variante. OSS hat in vielen Tasks Frontier-Niveau erreicht, besonders bei Specialized Tasks. [Hugging Face Model Hub](https://huggingface.co/models) · [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)

- 🔄 **Reasoning-Modelle als eigene Klasse** — OpenAI GPT-o3 / o4 / o5, Anthropic Claude mit Extended Thinking, DeepSeek R1, Google Gemini Thinking. Diese Modelle "denken" intern länger und sind stark bei mehrstufigen Problemen (Mathematik, Coding, komplexe Analysen). Cost und Latenz sind höher — nicht für jeden Task ideal. [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) · [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking)

- 🟢 **Function Calling / Tool Use als Standard** — moderne LLMs können nicht nur Text generieren, sondern strukturierte "Tool Calls" produzieren, die dein Code dann ausführt (z.B. Datenbank-Anfrage, Web-Suche, API-Call). Pflicht-Konzept für jeden, der Anwendungen baut. [Anthropic — Tool Use](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) · [OpenAI — Function Calling](https://platform.openai.com/docs/guides/function-calling)

- 🔄 **MCP (Model Context Protocol) — Konzept** — von Anthropic Ende 2024 vorgestellt, 2026 Industriestandard mit 78% Enterprise-Adoption. MCP ist eine **Protokoll-Schicht über Function Calling**: derselbe MCP-Server funktioniert mit Claude, ChatGPT, Gemini, Cursor und allen modernen Agent-Frameworks. Statt M×N Custom-Integrationen baust du M+N standardisierte Server. Praktische Anwendung in Modul 5.3. [Model Context Protocol Docs](https://modelcontextprotocol.io) · [Anthropic — MCP Introduction](https://www.anthropic.com/news/model-context-protocol)

- 🔄 **Multi-Model-Routing als Production-Pattern 2026** — kein Production-System nutzt nur ein einziges Modell. Stattdessen: 70% der Anfragen an günstiges Modell (z.B. Haiku, Gemini Flash), 25% an Standard (Sonnet, GPT-5), 5% an Frontier (Opus, GPT-5.5). Cost-Reduktion 60-80% bei vergleichbarer Qualität. Tools: [LiteLLM](https://github.com/BerriAI/litellm), [OpenRouter](https://openrouter.ai). Vertiefung im Querschnitt Production.

- 🔄 **Provider-Abstraktion als Best Practice** — wer direkt gegen Anthropic-SDK oder OpenAI-SDK programmiert, ist Vendor-locked. Provider-Abstraktion (LiteLLM, OpenRouter) macht Modell-Wechsel zur Konfigurations-Frage statt Code-Refactoring. [LiteLLM Docs](https://docs.litellm.ai) · [OpenRouter](https://openrouter.ai)

- 🟢 **Cost-Modell verstehen: Input vs. Output Tokens** — die meisten APIs berechnen Input und Output unterschiedlich (Output meist 3-5x teurer). Lange Kontexte mit langen Outputs werden schnell teuer. Prompt Caching (Anthropic, OpenAI) reduziert Cost bei wiederholten Prefixen um bis zu 90%. [Anthropic — Pricing](https://www.anthropic.com/pricing) · [OpenAI — Pricing](https://openai.com/pricing) · [Anthropic — Prompt Caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching)

- 🔄 **Welches Modell für welchen Task?** — keine universelle Antwort, aber Heuristiken:
 - Schnelle einfache Tasks → Haiku, Gemini Flash, Llama 3.2 lokal
 - Standard-Coding-Aufgaben → Sonnet 4.6, GPT-5, Qwen 3 Coder OSS
 - Komplexes Reasoning → Opus 4.7, GPT-o-Serie, DeepSeek R1
 - Lange Dokumente → Gemini 3.1 (2M Context)
 - Privatsphäre-kritisch → lokale OSS-Modelle via Ollama
 - Deutsche Sprache → Mistral 3, Gemma 4, Claude (alle gut)

### Praxis: Hauptprojekt — Modell-Vergleichs-Notebook

- Drei Test-Prompts aus deinem Alltag wählen (z.B. eine Übersetzung, eine Code-Review, eine kreative Aufgabe).
- Diese Prompts gegen 5-7 Modelle laufen lassen: Claude Sonnet, GPT-5 (oder Mini), Gemini, plus 2-3 lokale OSS via Ollama.
- Ergebnisse dokumentieren: Qualität (subjektiv 1-5), Latenz, Cost (falls Cloud), eigene Bewertung.
- Konsolidierter Bericht im Portfolio: welches Modell für welche Aufgabe?
- Bonus 🔧🧮: Notebook in Python schreiben und LiteLLM zur Provider-Abstraktion nutzen.

### 🎁 Mehrwert-Mini-Projekte
- **Eigener "Modell-Wahl-Cheat-Sheet"** — 1-Pager mit deiner persönlichen Modell-Empfehlung pro Use-Case-Kategorie.
- **Cost-Tracker-Bookmark** — Lesezeichen zu [LLM Stats Pricing-Tabelle](https://llm-stats.com) für schnelle Cost-Schätzungen.

### 🌱 Open-Source-Pfad
- Komplett mit Ollama: vergleiche `llama3.2:3b`, `qwen2.5:7b`, `gemma3:4b`, `deepseek-r1:7b`, `phi-4` lokal — gleiche Test-Prompts.
- [LiteLLM lokal](https://docs.litellm.ai) als einheitlicher Endpunkt für Ollama-Modelle, dann selbe Prompts gegen alle.
- [Open WebUI](https://openwebui.com) für komfortablen Vergleich im Browser.

### Outcome-Check
- [ ] Modell-Vergleichs-Notebook im Portfolio mit dokumentierten Ergebnissen
- [ ] Persönlicher Modell-Wahl-Cheat-Sheet
- [ ] MCP konzeptionell verstanden (kannst du in 3 Sätzen erklären?)
- [ ] Mindestens einmal mit LiteLLM oder OpenRouter Provider-Abstraktion getestet
- [ ] Bewusstsein für Cost-Trade-offs und Multi-Model-Routing

---

## Modul 2.6: No-Code & Vibe-Coding

Bevor du Python lernst, **baust du etwas Sichtbares**. No-Code-Plattformen (Make.com, n8n) und Vibe-Coding-Tools (Bolt, Lovable, v0) erlauben dir, in Stunden statt Wochen funktionierende KI-Workflows und Web-Apps zu produzieren. Das ist nicht Spielerei — es ist 2026 ein eigenständiger professioneller Skill für schnelle Prototypen, MVPs und Workflow-Automatisierung. Wer No-Code beherrscht, kann später bewusst entscheiden, wann Code nötig wird (was in Modul 2.7 motiviert wird).

**Aufwand:** 🔧 8-10h · 🧮 8-10h · 💼 8-12h
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.1-2.5

### Lernziel
Du hast einen lauffähigen No-Code-KI-Workflow gebaut, der dir täglich Arbeit abnimmt, und eine kleine Web-App mit einem Vibe-Coding-Tool prototypisiert.

### Theorie

- 🔄 **No-Code-Workflow-Tools 2026** — Make.com (visuell, mächtig, große Bibliothek), n8n (OSS-Alternative, self-hostable, deutscher Founder), Zapier (Klassiker, weniger flexibel aber zuverlässig). Stärken unterschiedlich: Make für komplexe Logik mit vielen Schritten, n8n für Self-Hosting und Datensouveränität, Zapier für Standard-Integrationen. [Make](https://make.com) · [n8n](https://n8n.io) · [Zapier](https://zapier.com)

- 🔄 **Vibe-Coding-Plattformen** — Bolt.new (Web-Apps in Minuten, Stack ist React/Next.js), Lovable.dev (Full-Stack mit Datenbank), v0.dev (Vercel, fokussiert auf React-Komponenten), Replit Agent (komplette Apps mit Backend), Claude Artifacts (für Quick-Demos in Claude.ai). Tools wandeln Beschreibung in lauffähigen Code, du iterierst durch Beschreibung statt Coding. [Bolt](https://bolt.new) · [Lovable](https://lovable.dev) · [v0](https://v0.dev)

- 🔄 **Wann No-Code ausreicht, wann nicht** — Stärken: schneller Prototyp, einfache Workflows, keine Infrastruktur, Stakeholder-Demos. Grenzen: komplexe Datenstrukturen, Performance-kritische Anwendungen, fortgeschrittene KI-Pipelines (Custom Embeddings, Fine-Tuning), Production mit hoher Last, Vendor-Abhängigkeit. Faustregel: für 80% der typischen Aufgaben reicht No-Code, für die spannenden 20% braucht es Code. [Lenny's Newsletter — No-Code Reality](https://www.lennysnewsletter.com)

- 🟢 **Workflow-Logik verstehen: Trigger → Aktion → Bedingung → Output** — die Grundbausteine in jedem No-Code-Tool. Trigger (z.B. neue E-Mail), Aktion (z.B. an LLM senden), Bedingung (z.B. wenn KI-Output bestimmten Typ enthält), Output (z.B. in Slack posten). Diese Logik gilt überall.

- 🟢 **LLM-Integration in No-Code-Workflows** — die meisten Plattformen haben native KI-Module: Make hat OpenAI/Anthropic/Perplexity-Module, n8n hat OpenAI-Node, Zapier hat AI Actions. Plus generische HTTP-Module für jede beliebige API. [n8n AI Modul Docs](https://docs.n8n.io/advanced-ai/) · [Make OpenAI Integration](https://www.make.com/en/integrations/openai-gpt-3)

- 🟢 **Datenschutz bei No-Code mit KI** — Cloud-No-Code-Tools schicken Daten an Cloud-LLM-APIs. Für DSGVO-relevante Daten: n8n self-hosted plus lokales Ollama als KI-Backend. Oder bewusst nur nicht-personenbezogene Daten verarbeiten.

- 🔄 **Vibe-Coding-Patterns** — was funktioniert: präzise Beschreibungen, iteratives Verfeinern, ein Feature pro Iteration, klare Zielsysteme/Stack-Vorgaben. Was nicht funktioniert: vage Aufgabenstellungen, Komplexität in einem Schritt, Erwartung von Produktions-Reife. Viele Vibe-Coding-Outputs brauchen anschließend Code-Review und Refactoring.

### Praxis: Hauptprojekt — Wähle EINS aus den drei Optionen

**Option A: Newsletter-Workflow (eher 💼/🔧)**
- Make.com oder n8n: täglich definierte RSS-Feeds oder Newsletter parsen, mit LLM zusammenfassen, in dein E-Mail-Postfach oder Slack pushen.
- Erweiterung: nach Themen kategorisieren, nur relevante zusammenfassen, Bullet-Points erstellen.

**Option B: Persönlicher KI-Assistent als Web-App (eher 🔧/🧮)**
- Mit Bolt.new oder Lovable.dev: einfache Chat-Oberfläche, die deinen Use-Case löst (z.B. "Schreibe meine Lebenslauf-Versionen für unterschiedliche Stellen").
- Anbindung an OpenAI/Anthropic-API.
- Hosting auf der Plattform (kostenlos im Free-Tier).

**Option C: Datei-zu-Datei-Pipeline (eher 💼)**
- n8n oder Make.com: Trigger ist Upload zu Cloud-Drive, KI verarbeitet Datei (z.B. Meeting-Transkript zu Protokoll, PDF zu Zusammenfassung), Ergebnis landet im Output-Ordner.
- Praxis-Wert für Wissensarbeiter.

Jede Option im Portfolio dokumentieren: was, warum, wie, Screenshots, Code/Workflow-Export.

### 🎁 Mehrwert-Mini-Projekte (mehrere möglich)
- **Tägliche Routine-Automatisierung** — z.B. "jeden Morgen 6 Uhr fasst KI mir das Wetter, Termine, wichtige News in eine Slack-DM".
- **WhatsApp/Telegram-Bot** über Make.com oder n8n als persönlicher KI-Assistent unterwegs.
- **Vibe-Coded Mini-Tool** für eine spezifische Aufgabe (z.B. "schöner Markdown-Tabellen-Editor", "Persönlicher Decision-Log").

### 🌱 Open-Source-Pfad (besonders empfohlen für 🔧)
- **n8n self-hosted via Docker** auf eigenem Server oder lokal mit lokalem Ollama als KI-Backend. Kein Cloud-API, kein Vendor-Lock-in. Anleitung: [n8n Docker Compose](https://docs.n8n.io/hosting/installation/docker/).
- **Open WebUI mit Pipelines** ([Open WebUI Docs](https://docs.openwebui.com)) als komplett selbst-gehostete Chat-Plattform mit Workflow-Logik.
- **Vibe-Coding-Alternative**: lokales Coding mit Cline-Extension in VS Code plus Ollama als Backend — etwas mühsamer, aber 100% lokal und kostenfrei.

### Outcome-Check
- [ ] Mindestens ein lauffähiger Workflow / eine Web-App im Portfolio
- [ ] Workflow / App löst echtes Problem aus deinem Alltag
- [ ] README erklärt: Was tut es? Warum? Wie? Stack?
- [ ] Du nutzt das Projekt täglich oder mehrfach pro Woche
- [ ] OSS-Pfad mindestens einmal getestet (auch wenn du Cloud bleibst)

---

## Modul 2.7: Python für KI

Du hast in 2.6 die Grenzen von No-Code gesehen. Jetzt lernst du Python — gezielt für KI-Anwendungen, nicht als allgemeine Programmiersprache. Wer schon Python kann, kann das Modul stark verkürzen oder skippen (mit Outcome-Check als Selbsttest). Wer Python neu lernt, sollte hier mindestens 30-50h einplanen — Python ist die Sprache aller KI-Module ab Stufe 4.

**Aufwand:** 🔧 30-50h · 🧮 30-50h · 💼 0-15h (optional, Konzepte reichen)
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026
**Voraussetzungen:** Module 2.1-2.6

### Lernziel
Du kannst LLM-APIs aufrufen, Daten strukturiert verarbeiten, mit Async-Patterns arbeiten, Type Hints und Pydantic einsetzen, und einfache CLI-Tools schreiben. Du hast eigene Python-Skripte im Portfolio.

### Theorie

- 🟢 **Python-Grundlagen kompakt** — Variablen, Datentypen, Listen, Dicts, Schleifen, Funktionen, Klassen-Basics. Wer komplett neu: 20-30h. [Helsinki Mooc.fi — Python Programming MOOC](https://programming-25.mooc.fi) (kostenlos, hochqualitativ, deutsche Übersetzung partiell verfügbar) · [Real Python — Python Basics](https://realpython.com/learning-paths/python-basics/)

- 🟢 **Virtual Environments und Package Management** — `venv` als Standard, `uv` als moderne schnelle Alternative, `pip` für Pakete, `requirements.txt` oder `pyproject.toml` für Reproduzierbarkeit. [uv Documentation](https://docs.astral.sh/uv/) · [Real Python — Virtualenv](https://realpython.com/python-virtual-environments-a-primer/)

- 🟢 **Type Hints und mypy** — Python ist dynamisch typisiert, aber Type Hints (`def foo(x: int) -> str`) verbessern Lesbarkeit, Tooling-Support, und finden Fehler früh. Pflicht für Production-Code 2026. [Python Docs — Type Hints](https://docs.python.org/3/library/typing.html) · [mypy](https://mypy.readthedocs.io)

- 🟢 **Pydantic für Datenvalidierung** — die Industrie-Standard-Library für strukturierte Daten in Python. Definiert Schemas, validiert Inputs, ist Grundlage für Tool Use, Function Calling, FastAPI. [Pydantic Docs](https://docs.pydantic.dev) · [Pydantic Tutorial](https://docs.pydantic.dev/latest/tutorial/)

- 🟢 **Async Programming für API-Calls** — LLM-APIs sind langsam (Sekunden pro Aufruf). `asyncio` macht parallele Aufrufe möglich, was bei mehreren Anfragen drastisch schneller ist. Pflicht-Wissen für jede LLM-App. [Real Python — Async IO](https://realpython.com/async-io-python/) · [Anthropic — Async Examples](https://github.com/anthropics/anthropic-sdk-python#async-usage)

- 🟢 **Logging statt print()** — `print()` ist zum Debugging okay, in Production verwendet man `logging` mit Levels, Formattern, optional strukturiertem JSON-Output. [Python Logging HOWTO](https://docs.python.org/3/howto/logging.html) · [Loguru — Modern Logging](https://github.com/Delgan/loguru) (einfacher als logging)

- 🟢 **LLM-SDK-Patterns** — alle Provider-SDKs (Anthropic, OpenAI, Google) folgen ähnlichen Patterns: Client-Init, Message-Erstellung, Streaming, Tool-Definitionen, Error Handling. [Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python) · [OpenAI Python SDK](https://github.com/openai/openai-python) · [Google Generative AI SDK](https://github.com/google-gemini/generative-ai-python)

- 🟢 **CLI-Tools mit Click oder Typer** — für persönliche Skripte ist ein CLI-Interface 100x praktischer als hardcoded Argumente. Typer ist moderner, basiert auf Type Hints. [Typer Docs](https://typer.tiangolo.com) · [Click Docs](https://click.palletsprojects.com)

- 🟢 **dotenv für Secrets** — `.env`-Datei für API-Keys, mit `python-dotenv` ladbar. Niemals Secrets in Code. [python-dotenv](https://github.com/theskumar/python-dotenv)

- 🟢 **Testing-Basics: pytest** — Tests für KI-Code sind anders als klassisch (LLM-Outputs sind nicht-deterministisch). Aber Tests für die nicht-KI-Logik (Daten-Parsing, Pipelines, Tool-Funktionen) sind Standard. [Real Python — pytest](https://realpython.com/pytest-python-testing/) · [pytest Docs](https://docs.pytest.org)

### Praxis: Hauptprojekt — CLI-Tool für tägliche Aufgabe

- Wähle eine wiederkehrende Aufgabe aus deinem Alltag (Beispiele: Slack-Nachrichten zusammenfassen, RSS-Feeds curaten, Code-Review-Notizen aus Git-Diff generieren, E-Mails priorisieren).
- Baue ein Python-CLI-Tool mit Typer:
 - Liest Input (Datei, URL, oder von stdin)
 - Ruft LLM-API auf (mit Pydantic-validiertem Schema für Output)
 - Schreibt strukturierten Output
 - Hat Type Hints, Logging, Error Handling, `.env`-basierte Secrets
- Bonus: einfache Tests mit pytest für die nicht-KI-Logik.
- Code im Portfolio mit README, das Installation und Nutzung erklärt.

### 🎁 Mehrwert-Mini-Projekte
- **Persönliches Python-Snippets-Repo** — Sammlung von wiederverwendbaren Funktionen (`call_claude()`, `load_config()`, `chunk_text()`).
- **Daily-Briefing-CLI** — täglicher Cron-Job, der dir morgens deine Top-Tasks aus mehreren Quellen aggregiert.
- **PDF-Bulk-Processor** — CLI, das einen Ordner voller PDFs durch ein LLM jagt und strukturierte Outputs erzeugt.

### 🌱 Open-Source-Pfad
- Statt Cloud-API: alle Beispiele mit Ollama lokal über `ollama-python` Library oder über OpenAI-kompatible Endpoints (Ollama bietet das nativ).
- [LiteLLM lokal](https://docs.litellm.ai) als einheitlicher Endpunkt — derselbe Code funktioniert für Ollama, OpenAI, Anthropic.
- Für Vibe-Coding-Workflow: [Aider](https://aider.chat) als Open-Source-Alternative zu Cursor, läuft im Terminal.

### Outcome-Check
- [ ] CLI-Tool im Portfolio, lauffähig auf deinem Rechner
- [ ] Code nutzt Type Hints, Pydantic, Logging, dotenv
- [ ] README erklärt Installation und Nutzung
- [ ] Optional: Tests mit pytest
- [ ] Optional: Snippets-Repo für wiederverwendbare Code-Bausteine
- [ ] Du kannst LLM-APIs (Cloud oder lokal) aus Python heraus aufrufen

---

## Free-Zertifikate für Stufe 2

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Python Programming MOOC](https://programming-25.mooc.fi) | Helsinki Universität | 30-50h | Vor / parallel zu 2.7 |
| [Kaggle Python](https://www.kaggle.com/learn/python) | Kaggle Learn | ~7h | Crash-Course alternativ |
| [DLAI — ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng) | DeepLearning.AI | ~2h | Vertiefung zu 2.3 |
| [DLAI — Building Systems with the ChatGPT API](https://learn.deeplearning.ai/courses/chatgpt-building-system) | DeepLearning.AI | ~2h | Vertiefung 2.5/2.7 |
| [Anthropic — Prompt Engineering Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Anthropic | ~5h | Vertiefung zu 2.3 |
| [Hugging Face — LLM Course](https://huggingface.co/learn/llm-course) | Hugging Face | 20-40h | Vertiefung 2.5, vor Stufe 5 |

---

## Stufen-Outcome

Nach Stufe 2 hast du:
- ✅ Solides LLM-Verständnis (Theorie + 2026-Modell-Landschaft)
- ✅ Persönliche Prompt-Library mit dokumentierten A/B-Tests
- ✅ Halluzinations- und DSGVO-Bewusstsein
- ✅ Modell-Vergleichs-Notebook und persönlichen Wahl-Cheat-Sheet
- ✅ MCP konzeptionell verstanden (Praxis folgt in 5.3)
- ✅ Mindestens ein No-Code-Workflow oder eine Web-App, die du täglich nutzt
- 🔧🧮: Python-CLI-Tool mit allen Best Practices

**Du bist bereit für Stufe 3: Arbeitsmethoden mit KI.**

---

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: Modell-Empfehlungen in 2.5, Vibe-Coding-Tool-Landschaft in 2.6, MCP-Adoption-Stand.