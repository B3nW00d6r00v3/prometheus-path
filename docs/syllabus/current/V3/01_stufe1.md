# Stufe 1: Onboarding & Mindset

**Aufwand:** 6-9h (gleich für alle Tracks)
**Voraussetzungen:** Keine

| Querschnitte | Capstone-Beitrag | Tools |
|---|---|---|
| — | Grundverständnis alle Tracks | ChatGPT, Claude, Perplexity, Ollama |

Bevor du inhaltlich startest, brauchst du drei Dinge: eine **funktionierende Lernumgebung**, eine **klare Track-Wahl**, und ein **GitHub-Portfolio**, in das ab Stufe 2 alle Praxisprojekte gepusht werden. Diese Stufe enthält keine KI-Inhalte zum Selbst-Bauen — die starten in Stufe 2. Hier richtest du das Fundament ein, damit du nicht beim ersten echten Modul am Setup stolperst.

Modul 1.3 enthält einen **Vorgeschmack-Demo-Block** (RAG + MCP + Eval), in dem du drei vorbereitete Demos klonst und laufen lässt — ohne sie selbst zu bauen oder verstehen zu müssen. Reiner "Wow-Effekt": du siehst, wohin die Reise geht, bevor du Stufen 2-4 absolvierst.

**Ergebnis nach Stufe 1:**
- Tools laufen (Python, IDE, Ollama, GitHub).
- Track ist gewählt (🔧 Engineer / 🧮 Foundations / 💼 Strategist / 🥇 Meister).
- Portfolio-Repo ist öffentlich auf GitHub mit erstem Commit.
- Du hast einmal RAG, MCP und Eval in Aktion gesehen.

---

## Modul 1.1: Tools-Setup & Lernumgebung

Bevor du KI lernst, muss sie auf deinem Rechner laufen. Dieses Modul richtet die lokale Umgebung ein: Python, IDE, Ollama für lokale LLMs, plus optional einen Cloud-API-Key für State-of-the-Art-Vergleiche. Open-Source-First heißt nicht Open-Source-Only — beides ist nötig, weil Frontier-Modelle (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Ultra) nicht lokal lauffähig sind.

**Aufwand:** 🔧 2-3h · 🧮 2-3h · 💼 2-3h
**Voraussetzungen:** Keine

### Lernziel
Lokale Umgebung läuft. Ein Python-Skript ruft erfolgreich *ein lokales LLM* (via Ollama) und *eine Cloud-API* auf.

### Theorie

- 🟢 **Python 3.11+** — die meisten KI-Libraries (`transformers`, `langchain`, `openai`, `anthropic`) setzen 3.11 voraus. 3.10 funktioniert noch, 3.9 stößt an Grenzen. Empfehlung: [pyenv](https://github.com/pyenv/pyenv) für Versionsmanagement. [Real Python — Installing Python](https://realpython.com/installing-python/)

- 🟢 **Virtual Environments** sind Pflicht — sonst kollidieren Library-Versionen über Projekte hinweg. Standard: `venv` (in Python integriert) oder `uv` (modern, deutlich schneller). [Real Python — Virtual Environments](https://realpython.com/python-virtual-environments-a-primer/) · [uv Documentation](https://docs.astral.sh/uv/)

- 🟢 **IDE: Cursor (KI-native) oder VS Code mit Continue-Extension (OSS-Variante)** — beides geeignet. Cursor hat eingebaute KI-Features, Continue ist die Open-Source-Alternative für VS Code. [Cursor](https://cursor.com) · [Continue](https://www.continue.dev) · [VS Code](https://code.visualstudio.com)

- 🟢 **Git + GitHub-Account** — non-negotiable, dein gesamtes Lern-Portfolio läuft hier. SSH-Key einrichten ist zwingend für reibungsloses Arbeiten. [Pro Git Book (kostenlos)](https://git-scm.com/book) · [GitHub SSH-Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

- 🔄 **Ollama für lokale LLMs** — läuft auf Mac/Linux/Windows, ermöglicht OSS-First-Workflows. Empfohlene Einsteiger-Modelle Mai 2026: `llama3.2:3b` (klein, 4GB RAM), `qwen2.5:7b` (stärker, 16GB RAM), `gemma3:4b` (gute deutsche Sprache). Aktuelle Empfehlungen ändern sich — siehe Library-Link. *Verfallsdatum dieses Bullets: Aug 2026.* [Ollama](https://ollama.com) · [Modell-Library](https://ollama.com/library)

- 🔄 **Mindestens ein Cloud-API-Key (oder bewusste Entscheidung dagegen)** — für Frontier-Modell-Vergleiche. Empfehlung: Google AI Studio (großzügigster Free-Tier Mai 2026), oder Anthropic ($5 Test-Credit), oder OpenAI. API-Keys NIE ins Git committen — `.env`-Dateien plus `.gitignore` sind Standard. *Verfallsdatum dieses Bullets: Aug 2026.* [Anthropic Console](https://console.anthropic.com) · [OpenAI Platform](https://platform.openai.com) · [Google AI Studio](https://aistudio.google.com) · [python-dotenv](https://pypi.org/project/python-dotenv/)

- 🟢 **Sicherheit von Anfang an: Secrets Management** — `.env` lokal, niemals committen. Für später (Production): Cloud Secret Manager. Wer ein Secret committet, muss es als kompromittiert behandeln und rotieren. [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning) · [git-secrets Tool](https://github.com/awslabs/git-secrets)

### Praxis: Hauptprojekt — Hello-World mit lokalem + Cloud-LLM

- Virtual Environment einrichten, alle Tools installieren (`ollama`, `anthropic`, `openai`, `google-genai`, `python-dotenv`).
- Skript `hello_world.py` schreiben: ruft *einmal* Ollama lokal auf, *einmal* Cloud-API.
- Beide Antworten erfolgreich → Setup steht.
- Code ins Portfolio-Repo committen (Stufe-1-Ordner).

**Tutorial-Walkthroughs:**
- [Anthropic Quickstart Guide](https://docs.claude.com/en/docs/get-started)
- [OpenAI Quickstart](https://platform.openai.com/docs/quickstart)
- [Google AI Studio Quickstart](https://ai.google.dev/gemini-api/docs/quickstart)
- [Ollama Python Library](https://github.com/ollama/ollama-python)

### 🎁 Mehrwert-Mini-Projekt
**Persönliches Setup-Cheat-Sheet** als Markdown im Portfolio-Repo: dein OS, Python-Version, IDE, installierte Modelle, eingerichtete API-Keys, eigene Anpassungen. Wert: in 6 Monaten beim nächsten Setup oder neuem Rechner sparst du Stunden.

### 🌱 Open-Source-Pfad
Komplett ohne Cloud-API arbeiten: nur Ollama nutzen, mehrere Modelle parallel installieren (`llama3.2:3b`, `qwen2.5:7b`, `gemma3:4b`), selbst vergleichen. Spätere Module (5.x ff.) setzen Cloud-Vergleiche voraus — kann nachgeholt werden, wenn du willst.

### Outcome-Check
- [ ] `python3 --version` zeigt 3.11+
- [ ] Virtual Environment aktivierbar
- [ ] Git + GitHub funktionieren (Test mit `git clone`)
- [ ] `ollama run llama3.2:3b` antwortet
- [ ] Optional: Cloud-API-Key eingerichtet
- [ ] `hello_world.py` läuft mit beiden Quellen
- [ ] `.gitignore` blockiert `.env`
- [ ] `setup-cheatsheet.md` im Portfolio

---

## Modul 1.2: GitHub & Portfolio-Strategie

Dein **GitHub-Portfolio** ist das wichtigste Output dieses Curriculums — wichtiger als jedes Zertifikat. Recruiter und Hiring Manager schauen 2026 primär auf reale Projekte, nicht auf Kursabschlüsse. Dieses Modul richtet das Portfolio strategisch ein, damit jedes Praxisprojekt ab Stufe 2 sofort einen sauberen Platz hat.

**Aufwand:** 🔧 1h · 🧮 1h · 💼 1h
**Voraussetzungen:** Modul 1.1 (GitHub-Account aktiv)

### Lernziel
Öffentliches GitHub-Repo `ki-meisterlehrplan-portfolio` (oder eigene Variante) mit klarer Struktur, ausgefülltem README und ersten Commits.

### Theorie

- 🟢 **Warum Portfolio > Zertifikat:** Zertifikate signalisieren "hat einen Kurs gemacht". Ein Portfolio mit echten, dokumentierten Projekten signalisiert "kann Problem X mit Tools Y lösen". Letzteres ist 2026 das stärkere Recruiting-Signal. [Hamel Husain — How To Get Hired As A Machine Learning Engineer](https://hamel.dev/blog/posts/hiring/)

- 🟢 **Portfolio-Anforderungen** pro Projekt: README mit Was/Warum/Wie/Outcome (Schwelle erreicht?)/Limitationen. Code lesbar, mit Type Hints. API-Keys NIE committen. Personenbezogene Daten ohne Anonymisierung NIE committen. [GitHub Best Practices for Portfolios](https://github.com/readme/guides/jonschlinkert)

- 🟢 **Naming-Konventionen** — Lesbarkeit > Kürze: `stufe-2_grundlagen/` statt `s2/`, `2.6_no-code-newsletter-workflow/` statt `nc1/`. Konsistenz über Repos hinweg.

- 🔄 **GitHub-Profil-README** — Repo mit deinem Username als Name (z.B. `username/username`) wird auf deinem Profil angezeigt. Erster Eindruck für jeden, der dich sucht. [GitHub Docs — Profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)

- 🟢 **Markdown-Basics** — README, Issues, Pull Requests, Curriculum selbst, alles ist Markdown. 30-Min-Investment lohnt sich. [Markdown Guide](https://www.markdownguide.org) · [GitHub Flavored Markdown](https://github.github.com/gfm/)

### Praxis: Hauptprojekt — Portfolio-Repo aufsetzen

- Repo `ki-meisterlehrplan-portfolio` erstellen (Public, mit README, mit `.gitignore` für Python, MIT-Lizenz oder eigene Wahl).
- Lokal klonen.
- Ordnerstruktur anlegen: ein Ordner pro Stufe (`stufe-1_onboarding/` bis `stufe-11_forschung/`), plus `capstone/`, `mehrwert-projekte/` und `self-assessments/` für die Mid-Stage-Self-Assessments S5/S7/S9.
- README mit eigenen Daten füllen: Über mich, Track-Wahl (kommt in Modul 1.3), Lernziele, Stufen-Checklist.
- Setup-Cheat-Sheet aus 1.1 in `stufe-1_onboarding/` verschieben und committen.

**Tutorials:**
- [GitHub Skills — Introduction to GitHub](https://github.com/skills/introduction-to-github) — interaktiv, ~1h
- [GitHub Skills — Communicate using Markdown](https://github.com/skills/communicate-using-markdown) — interaktiv, ~30min

### 🎁 Mehrwert-Mini-Projekt
**GitHub-Profil-README** anlegen, falls noch nicht vorhanden: Wer du bist, was du gerade lernst (Verlinkung aufs Portfolio), Kontakt. Wert: dein Profil wirkt sofort professionell, jeder Recruiter-Klick zählt.

### 🌱 Open-Source-Pfad
GitHub ist Microsoft-Closed-Source. OSS-Alternativen: [Codeberg](https://codeberg.org) (EU-basiert, non-profit) oder [GitLab](https://gitlab.com) (auch self-hosted). Pragmatisch: GitHub bleibt 2026 Recruiting-Standard. Empfehlung: Haupt-Repo auf GitHub, optional Mirror auf Codeberg.

### Outcome-Check
- [ ] Repo `ki-meisterlehrplan-portfolio` öffentlich auf GitHub
- [ ] Struktur mit allen 11 Stufen-Ordnern + Capstone + Mehrwert-Projekte + Self-Assessments
- [ ] README mit Track-Platzhalter, Lernzielen, Stufen-Checklist
- [ ] Setup-Cheat-Sheet aus 1.1 ist in `stufe-1_onboarding/` eingecheckt
- [ ] Optional: GitHub-Profil-README

---

## Modul 1.3: Track-Wahl & Lern-Methodik

Dieses Curriculum hat **drei Track-Tiefen** (Engineer, Foundations, Strategist) und eine **Meister-Variante** (alle drei). Die Wahl ist nicht verbindlich — Wechsel sind erlaubt — aber bewusst zu treffen, ist wichtig: sie bestimmt deine Modul-Tiefen, deinen Capstone, deinen Zeitaufwand. Zusätzlich erlebst du am Ende des Moduls einen Vorgeschmack-Demo-Block (RAG + MCP + Eval) — drei vorbereitete Demos zum Klonen und Laufenlassen, damit du *siehst*, wohin du in Stufen 5-6 selbst kommst.

**Aufwand:** 🔧 3-4h · 🧮 3-4h · 💼 3-4h
**Voraussetzungen:** Modul 1.2 (Portfolio aktiv)

### Lernziel
Track ist begründet gewählt und im Portfolio dokumentiert. Lern-Plan für die ersten 8 Wochen ist skizziert. Du hast einmal eine RAG-Anwendung, einen MCP-Server und eine Eval-Pipeline in Aktion gesehen — ohne sie selbst gebaut zu haben.

### Theorie

- 🟢 **Drei Tracks, vier Möglichkeiten:**
  - 🔧 **Engineer** — du baust KI-Systeme, sie laufen produktiv. Ziel: AI Engineer / ML Engineer / KI-Entwickler.
  - 🧮 **Foundations** — du verstehst, *warum* KI funktioniert, mathematisch und konzeptionell. Ziel: ML Researcher / Data Scientist mit Tiefe / PhD-Vorbereitung.
  - 💼 **Strategist** — du identifizierst KI-Use-Cases und führst sie ein. Ziel: KI-Manager / KI-Berater / KI-Lead. *Aufwand auf 350-500h erhöht — bewusste Differenzierung gegenüber Bootcamps; Schwerpunkt auf Datenstrategie, Change Management, Operating Model.*
  - 🥇 **Meister** — alle drei Tiefen. Ziel: Senior-Position mit voller Spannweite, eigene Beratung, Top-Tier-Engineer.

- 🟢 **Track-Wahl ist nicht final** — du kannst nach Stufe 4 (Anwendungen) oder Stufe 7 (Deep Learning) wechseln, wenn du merkst, dass dich eine andere Tiefe mehr interessiert. Das Curriculum ist track-flexibel.

- 🟢 **Realistische Zeit-Erwartungen** (basierend auf etablierten Curricula wie DeepLearning.AI, Hugging Face, fast.ai):

| Track | Bei 6h/Woche | Bei 10h/Woche | Bei 15h/Woche |
|---|---|---|---|
| 🔧 Engineer | 18-24 Monate | 12-15 Monate | 9-12 Monate |
| 🧮 Foundations | 30-36 Monate | 18-24 Monate | 15-18 Monate |
| 💼 Strategist | 14-20 Monate | 9-12 Monate | 6-8 Monate |
| 🥇 Meister | 36+ Monate | 24-36 Monate | 18-24 Monate |

Wenn du mit "12 Monate bis Job-Ready"-Versprechen geködert wurdest: das ist Marketing. Tiefe braucht Zeit.

- 🟢 **Lern-Methodik dieses Curriculums** — vier Bausteine pro Modul:
  1. **Theorie** mit Quellen-Links (verstehen, was passiert).
  2. **Praxis-Hauptprojekt** (mindestens 40% der Modul-Zeit, kommt ins Portfolio).
  3. **🎁 Mehrwert-Mini-Projekt** (klein, sofort nutzbar — z.B. Prompt Library, Newsletter-Workflow).
  4. **🌱 Open-Source-Pfad** (alternative Implementierung mit OSS, oft schwieriger, als Bonus).

- 🟢 **Querschnitte** (Math, Eval, Production) sind nicht sequenziell — bearbeitest du parallel, wenn du eine Lücke spürst. Erste Berührung mit Eval bereits in Modul 5.0 (Eval-Mini-Block). Math-Querschnitt ab Stufe 7 (für 🧮 vorher mit Diagnose-Test als Gate).

- 🟢 **Capstone** — durchgehendes Projekt ab track-spezifischem Startpunkt:
  - 🔧 startet in Stufe 5.1 (RAG-Agent-System, mit Operate-Phase als Goldstandard).
  - 🧮 startet in Stufe 7.1 (eigenes kleines LLM trainieren).
  - 💼 startet in Stufe 9.1 (KI-Strategie + Pilot — *reale Organisation Pflicht*).

- 🟢 **Outcome-Rubrik pro Track** — siehe `000_master.md`. Sieben messbare Kompetenzen pro Track, plus Mid-Stage-Self-Assessments Ende Stufe 5 / 7 / 9. Vor dem Start: schau dir die Outcome-Rubrik deines Tracks an — das ist dein Ziel-Bild.

- 🟢 **Wie viel pro Woche?** Self-paced. Aber: weniger als 4h/Woche → vergisst du beim Wiedereinstieg die Hälfte. Empfehlung: 6h/Woche minimum, 8-12h ideal.

- 🔄 **Lernroutinen, die etablierte Praktiker empfehlen:**
  - Cal Newport, *Deep Work* — Methodik für fokussiertes Lernen ohne Ablenkung.
  - Barbara Oakley, *Learning How to Learn* — kognitive Lernstrategien, [Coursera-Kurs kostenlos](https://www.coursera.org/learn/learning-how-to-learn) (Audit-Modus, siehe `99_anhang.md`).
  - Hamel Husain Blog für 🔧-Track. [hamel.dev](https://hamel.dev)
  - Sebastian Raschka Blog für 🧮-Track. [magazine.sebastianraschka.com](https://magazine.sebastianraschka.com)

### Praxis: Hauptprojekt — Track-Wahl + Lern-Plan + Vorgeschmack-Demo

**Teil 1 — Track-Wahl + Lern-Plan (1-2h):**

- Datei `stufe-1_onboarding/track-wahl.md` schreiben mit:
  - Welcher Track? (🔧 / 🧮 / 💼 / 🥇)
  - Warum dieser Track? (3-5 ehrliche Sätze)
  - Konkretes Karriere-Ziel in 12-18 Monaten?
  - Vorerfahrung?
  - Zeit pro Woche?
  - Welcher Capstone wird Hauptprojekt?
  - Outcome-Rubrik deines Tracks lesen (`000_master.md`) und 1-2 Outcomes als persönliches Zwischenziel markieren.
- Datei `stufe-1_onboarding/lern-plan.md` für die ersten 8 Wochen skizzieren (Tabelle: Woche / Modul / geplante Stunden / Status).
- Portfolio-README aktualisieren: Track + Capstone-Platzhalter eintragen.
- Alles committen.

**Teil 2 — Vorgeschmack-Demo (2-3h):**

Drei vorbereitete Demos zum Klonen und Laufenlassen. **Du musst sie nicht verstehen oder erweitern.** Ziel ist ausschließlich, dass du *siehst*, wie sich RAG, MCP und Eval anfühlen, bevor du dich durch Stufen 2-4 arbeitest.

**Demo 1 — RAG (~45 Min):**
- Klone: [LangChain RAG Tutorial Repo](https://github.com/langchain-ai/rag-from-scratch) oder [LlamaIndex Quickstart](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/) (verlinkt — wähle eines).
- Folge dem Quickstart-Notebook: ein paar PDFs in einen Vector-Store laden, eine Frage stellen, Antwort mit Quellen-Verweis bekommen.
- **Was du erleben sollst:** Der Unterschied zwischen "LLM rät" und "LLM antwortet auf Basis deiner Dokumente".
- **Was du NICHT tun sollst:** Den Code verstehen oder modifizieren. Reines Erleben.

**Demo 2 — MCP (~45 Min):**
- Klone einen offiziellen Anthropic-MCP-Server-Beispiel: [MCP Quickstart](https://modelcontextprotocol.io/quickstart) — wähle "Filesystem"-Server oder "GitHub"-Server.
- Verbinde ihn mit Claude Desktop oder einem MCP-Client deiner Wahl.
- Stelle eine Frage, die den Server nutzt: "Liste mir die Dateien in Ordner X" oder "Welche Issues gibt es im Repo Y".
- **Was du erleben sollst:** Wie ein LLM auf Basis eines Tool-Servers Echtweltzugriffe macht — der Unterschied zwischen "LLM hat Wissen" und "LLM kann Aktionen ausführen".

**Demo 3 — Eval (~45 Min):**
- Klone: [Promptfoo Quickstart](https://www.promptfoo.dev/docs/getting-started/) oder [DeepEval Quickstart](https://docs.confident-ai.com/docs/getting-started).
- Folge dem 5-Minuten-Tutorial: zwei verschiedene Prompts auf 5-10 Test-Cases laufen lassen, automatischen Vergleich sehen.
- **Was du erleben sollst:** Der Unterschied zwischen "ich hoffe, mein Prompt funktioniert" und "ich messe, welcher Prompt besser funktioniert" — die Grundidee von Eval-Driven Development.

**Reflektion (~30 Min):**

Schreibe in `stufe-1_onboarding/vorgeschmack-reflektion.md`:
- Welche der drei Demos hat dich am meisten beeindruckt? Warum?
- Welcher Use-Case in deinem eigenen Kontext wäre eine offensichtliche Anwendung?
- Was hast du nicht verstanden? *(Das ist okay — die Stufen 2-6 erklären alles. Diese Notiz ist deine "Spickzettel-Liste" für später.)*

**Wichtig:** Wenn eine Demo nicht läuft (API-Fehler, Tool-Update etc.), mach trotzdem weiter mit den anderen. Tutorials brechen — das ist die Realität. Kein Demo-Failure ist ein Stufen-1-Blocker.

**Quellen Vorgeschmack-Demo (alle Mai 2026 verifiziert, *Verfallsdatum Aug 2026*):**
- [Model Context Protocol Quickstart](https://modelcontextprotocol.io/quickstart)
- [LangChain RAG From Scratch](https://github.com/langchain-ai/rag-from-scratch)
- [LlamaIndex Starter Example](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/)
- [Promptfoo Getting Started](https://www.promptfoo.dev/docs/getting-started/)
- [DeepEval Documentation](https://docs.confident-ai.com)

### 🎁 Mehrwert-Mini-Projekt
**Lern-Tagebuch** als `LERN_TAGEBUCH.md` im Repo-Root. Pro Lern-Session 2-3 Sätze: Was gelernt? Was überrascht? Wo gehadert? Wert: in 6 Monaten erkennst du Hadern-Muster und siehst, wie weit du gekommen bist.

### 🌱 Open-Source-Pfad
Track-Wahl ist tool-unabhängig — kein OSS-Pfad nötig.

**Vorgeschmack-Demos im OSS-Modus:** Alle drei Demos lassen sich rein OSS durchführen — Demo 1 mit Ollama statt Cloud-API (etwas langsamer), Demo 2 mit beliebigem MCP-Client, Demo 3 mit Promptfoo + Ollama-Backend. Wenn du den vollen OSS-Weg gehst, dauert die Demo-Phase 30-60 Min länger.

### Outcome-Check
- [ ] `track-wahl.md` mit klarer Begründung im Portfolio
- [ ] `lern-plan.md` für 8 Wochen skizziert
- [ ] Portfolio-README zeigt Track und Capstone-Platzhalter
- [ ] Outcome-Rubrik des gewählten Tracks gelesen, 1-2 Zwischenziele markiert
- [ ] Vorgeschmack-Demo: mindestens 2 von 3 Demos einmal erfolgreich gelaufen
- [ ] `vorgeschmack-reflektion.md` mit kurzer Notiz im Portfolio
- [ ] Optional: `LERN_TAGEBUCH.md` mit erstem Eintrag

---

## Quellen für die gesamte Stufe

🟢 **Stabil**
- [Pro Git Book](https://git-scm.com/book) — Git-Bibel, kostenlos online
- [Real Python](https://realpython.com) — Python-Tutorials in hoher Qualität
- [GitHub Skills](https://skills.github.com) — interaktive Lern-Module
- [Markdown Guide](https://www.markdownguide.org)
- Cal Newport, *Deep Work* (Buch)
- [Barbara Oakley — Learning How to Learn (Coursera, kostenlos im Audit-Modus)](https://www.coursera.org/learn/learning-how-to-learn)

🔄 **Live**
- [Ollama Library](https://ollama.com/library) — aktuelle Modell-Empfehlungen
- [Anthropic Docs](https://docs.claude.com)
- [OpenAI Docs](https://platform.openai.com/docs)
- [Google AI Studio Docs](https://ai.google.dev/gemini-api/docs)
- [Hamel Husain Blog](https://hamel.dev) — für 🔧-Track
- [Sebastian Raschka Magazine](https://magazine.sebastianraschka.com) — für 🧮-Track
- [Model Context Protocol](https://modelcontextprotocol.io) — für Vorgeschmack-Demo
- [Promptfoo](https://www.promptfoo.dev) — für Vorgeschmack-Demo

📺 **Video** (optional)
- [Fireship — How to Set Up VS Code for Python](https://www.youtube.com/results?search_query=fireship+vscode+python+setup) (oder beliebige aktuelle Tutorials)

---

## Free-Zertifikate (optional, vor Stufe 2)

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [Introduction to GitHub](https://github.com/skills/introduction-to-github) | GitHub Skills | ~1h | Wenn Git/GitHub neu für dich ist |
| [Communicate with Markdown](https://github.com/skills/communicate-using-markdown) | GitHub Skills | ~30min | Wenn Markdown neu ist |
| [Python Crash Course](https://www.kaggle.com/learn/python) | Kaggle Learn | ~7h | Wenn Python ganz neu, vor Stufe 2.7 |
| [Learning How to Learn](https://www.coursera.org/learn/learning-how-to-learn) | Coursera (Audit-Modus) | ~15h | Wenn dir Lerntechniken fehlen |

**Coursera-Audit-Modus-Hinweis:** Coursera-Kurse sind in der Audit-Variante kostenlos zugänglich. Beim Klick auf "Enroll" zeigt Coursera teils nur die Paid-Variante prominent — der Audit-Link ist meistens kleiner darunter ("Enroll for free / Audit"). Details siehe `99_anhang.md`.

---

## Stufen-Outcome

Nach Stufe 1 hast du:
- ✅ Funktionierende Lernumgebung mit Python, Ollama, IDE, Git, optional Cloud-API.
- ✅ Öffentliches GitHub-Portfolio mit klarer Struktur und README (inkl. `self-assessments/` Ordner).
- ✅ Bewusst gewählten Track mit Begründung und Outcome-Rubrik-Bewusstsein.
- ✅ Skizzierten Lern-Plan für die ersten 8 Wochen.
- ✅ **Erste Berührung mit RAG, MCP und Eval** durch Vorgeschmack-Demo.

**Du bist bereit für Stufe 2: Grundlagen.**
