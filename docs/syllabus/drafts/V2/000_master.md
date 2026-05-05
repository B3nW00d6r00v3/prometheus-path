# KI-Meisterlehrplan v2.1

**Vom Beginner zum Meister — strukturiert, praxisnah, evidenz-basiert.**

**Version:** 2.1.0 · **Last verified:** Mai 2026 · **Re-check by:** Aug 2026 (3-Monats-Zyklus für volatile Module, siehe `99_anhang.md`)

---

## Über dieses Curriculum

Dieses Curriculum führt dich vom KI-Anfänger zum souveränen KI-Profi — mit klarem Praxis-Anker, modernen Inhalten (Mai 2026), und einem Format, das mit dir mitwächst.

**Was dieses Curriculum nicht ist:**
- Kein "in 30 Tagen zum KI-Experten" — das ist Marketing.
- Kein "lerne erst alle Mathematik, dann Praxis" — das ist nicht motivierend.
- Kein "kauf dir teure Kurse" — alle Inhalte basieren auf kostenlosen oder Open-Source-Ressourcen.

**Was es ist:**
- Ein selbst-gepacter Lehrplan, den du in Monaten bis Jahren durchläufst.
- 11 Stufen + 3 Querschnitte + 3 Capstone-Optionen.
- Modular: jedes Modul mit eigenem Aufwand, eigenem Outcome-Check.
- Track-flexibel: nach deiner Tiefen-Ambition skalierbar.
- Mit messbarer Outcome-Rubrik pro Track (siehe unten) — du kannst objektiv prüfen, wo du stehst.

---

## Track-Wahl

Drei Tiefen-Markierungen, die du **pro Modul** wählst — kein Forking, ein Hauptpfad mit anpassbarer Tiefe:

- **🔧 Engineer** — du baust KI-Anwendungen für Production. Mathematik solide, aber nicht akademisch tief. Schwerpunkt: bauen, deployen, härten.
- **🧮 Foundations** — du verstehst KI tief auf Modell-Ebene. Mathematik vollständig, eigenes Foundation-Modell-Training. Schwerpunkt: verstehen, forschen, fine-tunen.
- **💼 Strategist** — du führst KI-Initiativen in Organisationen. Mathematik konzeptionell, Praxis ausreichend für Stakeholder-Gespräche, Datenstrategie und Change Management auf Operating-Model-Niveau. Schwerpunkt: bewerten, entscheiden, skalieren.
- **🥇 Meister** — alle drei kombiniert. Maximaler Aufwand, maximaler Wert.

Die meisten Lernenden landen bei einer dominanten Wahl plus Elemente eines anderen Tracks.

**Aufwand-Übersicht (gesamt, ohne Capstone):**
- 🔧 Engineer: 250-400h
- 🧮 Foundations: 600-1000h
- 💼 Strategist: **350-500h** *(in v2.1 erhöht — bewusste Differenzierung gegenüber Bootcamps; Track 💼 zielt auf den anspruchsvollen KI-Strategen mit Praxis-Anker, nicht auf den Bootcamp-Manager. Begründung: Datenstrategie und Change Management sind in v2.1 als eigene Module ergänzt, plus Operating-Model-Vertiefung)*
- 🥇 Meister: 950-1450h

Plus Capstone: 80-220h zusätzlich je nach Track. Mit der neuen Operate-Phase als Goldstandard-Empfehlung für Capstone A: zusätzlich 40-80h für 4-6 Wochen Betrieb mit echten Nutzern.

---

## Outcome-Rubrik pro Track *(NEU in v2.1)*

Statt "umfassender KI-Profi" als unscharfes Versprechen: pro Track 6 messbare Kompetenzen. Du erfüllst sie nicht durch Modul-Abschluss, sondern durch Demonstration im Portfolio.

### 🔧 Engineer — Outcome-Rubrik

1. **Eine produktive RAG-Anwendung mit Eval-Pipeline gebaut, deployed und mit Cost-Tracking betrieben.** Nachweis: Repo + Live-URL + Eval-Report (≥ 50 Test-Cases, dokumentierte Metriken über mindestens 4 Wochen).
2. **Einen Multi-Agent-Workflow mit Trajectory-Eval und Failure-Mode-Analyse umgesetzt.** Nachweis: Repo + Trajectory-Logs + Anti-Pattern-Reflexion ("wo hätte ich kein Multi-Agent gebraucht").
3. **Mindestens einen MCP-Server selbst gebaut und gegen mindestens drei MCP-Konsumenten getestet.** Nachweis: Server-Repo + MCP-Sicherheits-Audit (Auth, Rate-Limits, Tool-Description-Injection-Tests).
4. **Cost-Audit für eigene KI-Anwendung erstellt.** Nachweis: Modell-Routing-Strategie + Token-Pricing-Analyse + Multi-Model-Vergleich + dokumentierte Optimierungs-Entscheidungen.
5. **Production-Hardening-Checkliste auf eigenen Capstone angewendet.** Nachweis: Sandboxing, Idempotenz, Rollback-Plan, Incident-Response-Runbook, Monitoring-Setup.
6. **EU-AI-Act-Compliance für eigenen Use-Case dokumentiert.** Nachweis: Risiko-Klassifizierung + Compliance-Mappings + DSGVO-Bewusstsein.

**Self-Assessment-Schwellen:**
- Ende Stufe 5: 1 + 4 müssen erfüllbar sein.
- Ende Stufe 6: 2 + 3 müssen erfüllbar sein.
- Capstone-Abschluss: alle 6.

### 🧮 Foundations — Outcome-Rubrik

1. **Backpropagation auf Papier ohne Hilfsmittel ableiten können** für ein 2-Layer-Netz mit ReLU.
2. **Klassisches ML solide:** Logistic Regression from scratch implementiert (Forward, Backward, Gradient Descent), Bias-Variance-Tradeoff praktisch demonstriert, Cross-Validation methodisch korrekt durchgeführt. *(In v2.1 als Voraussetzung für Stufe 7 verankert.)*
3. **Eigenes Sprachmodell trainiert** auf eigenem Korpus — mindestens nanoGPT-Niveau, BF16, mit dokumentiertem Training-Run (Loss-Kurven, Hyperparameter-Begründung, Hardware-Realität).
4. **Preference-Tuning experimentell durchgeführt** (DPO oder ORPO) auf eigenem Pretraining-Modell mit selbst gebauten Präferenz-Daten.
5. **Transformer-Komponenten implementiert** und im Detail erklärt: Attention, RoPE oder ALiBi, GQA, KV-Cache. Nicht nur Black-Box-Nutzung.
6. **Evidence-basiertes Lesen** von mindestens 5 Foundational-Papern aus 2024-2026 (z.B. ein Paper aus jeder Kategorie: Architektur, Training, Eval, Alignment, Reasoning) mit eigener Zusammenfassung im Portfolio.

**Self-Assessment-Schwellen:**
- Ende Stufe 7: 1 + 5 müssen erfüllbar sein.
- Vor Stufe 7 (NEU in v2.1, Math-Diagnose-Gate): Math-Diagnose-Test bestanden + 2 substanziell vorhanden.
- Capstone-Abschluss: alle 6.

### 💼 Strategist — Outcome-Rubrik

1. **Use-Case-Portfolio mit ROI-Quantifizierung** für eine reale Organisation erstellt — mindestens 5 Cases priorisiert, mindestens 1 davon im Pilot umgesetzt. *Pflicht: reale Org als Partner (eigener Arbeitgeber, NGO, Verein) — fiktive Orgs zählen nicht.*
2. **Datenstrategie für eine Organisation entworfen** *(NEU in v2.1, Modul 9.0)* — Datenreife-Assessment, Data Governance, Lock-in-Risiken, Daten-als-Voraussetzung-für-KI.
3. **Operating Model + Skalierungs-Plan** mit konkreten Strukturen, KPIs und Governance-Mechaniken erstellt. *(In v2.1 vertieft.)*
4. **Build-vs-Buy-Entscheidung methodisch begründet** für mindestens 2 Use-Cases mit TCO-Modell, Lock-in-Bewertung, Wettbewerbsvorteil-Analyse.
5. **EU-AI-Act-Compliance-Plan** für die Organisation erstellt — Risiko-Klassen, organisatorische Pflichten, Übergangsfristen.
6. **Change-Management-Konzept** *(NEU in v2.1, Modul 9.6)* — Stakeholder-Mapping, Adoption-Curve, Widerstands-Patterns, Schulungs- und Kommunikationsstrategie.

**Plus mindestens minimaler Hands-on-Anchor:** Eigenständig mindestens eine RAG-App gebaut (Modul 5.1) und mit Eval-Pipeline ausgewertet (Modul 5.4) — ohne diesen Praxis-Boden ist die Strategie hohl.

**Self-Assessment-Schwellen:**
- Ende Stufe 5: Hands-on-Anchor erfüllt.
- Ende Stufe 9: 1 + 2 + 5 müssen erfüllbar sein.
- Capstone-Abschluss: alle 6.

### 🥇 Meister — Outcome-Rubrik

Alle Outcomes der drei Tracks erfüllt **plus** ein Cross-Track-Capstone (siehe Capstone-Datei): ein Projekt, das Engineer-, Foundations- und Strategist-Kompetenzen integriert.

---

## Mid-Stage-Self-Assessments *(NEU in v2.1)*

Bisher trug der Capstone allein die Last der Outcome-Validierung. In v2.1 gibt es drei Mid-Stage-Self-Assessments, die du als Mini-Capstones absolvierst, bevor du in die nächste Phase gehst.

| Self-Assessment | Wann | Aufwand | Inhalt | Ziel |
|---|---|---|---|---|
| **S5-Self-Assessment** | Ende Stufe 5 | 8-12h | Eine eigenständige RAG-Anwendung mit Eval-Pipeline + Cost-Heuristik + kurzer Lessons-Learned-Reflektion. | Track-Realismus prüfen: kannst du tatsächlich bauen, was Stufe 5 versprochen hat? |
| **S7-Self-Assessment** *(nur 🧮)* | Ende Stufe 7 | 10-15h | Implementation-Übung "Backprop auf Papier + nanoGPT-Mini-Variante mit eigener Anpassung" + Reflektion zu Math-Diagnose-Test. | Foundations-Tiefe vor Stufe 8 prüfen. |
| **S9-Self-Assessment** *(primär 💼, optional andere)* | Ende Stufe 9 | 12-18h | Use-Case-Portfolio + Datenstrategie-Skizze + ROI-Modell für reale (oder klar definierte hypothetische) Organisation. | Strategie-Reife vor Capstone C prüfen. |

Self-Assessments sind keine Prüfungen — sie sind dein eigener Gate-Mechanismus. Wenn du eines nicht bestehst, gehst du eine Stufe zurück, statt überfordert in die nächste zu gehen.

Empfehlung: Self-Assessments im Portfolio-Repo als eigenständige Ordner (`stufe-5_self-assessment/`, etc.) mit README dokumentieren — auch das ist Teil der Lerner-Geschichte und für Recruiter wertvoll.

---

## Stufen-Übersicht *(angepasst in v2.1)*

| # | Stufe | Aufwand 🔧 | Aufwand 🧮 | Aufwand 💼 | Datei |
|---|---|---|---|---|---|
| 1 | Onboarding & Mindset *(+ Vorgeschmack-Demo)* | 6-9h | 6-9h | 6-9h | `01_stufe1.md` |
| 2 | Grundlagen *(+ Cost-Awareness-Block, + Reasoning-Prompting)* | 38-55h | 53-75h | 28-38h | `02_stufe2.md` |
| 3 | Arbeitsmethoden mit KI | 20-30h | 15-25h | 25-35h | `03_stufe3.md` |
| 4 | Programmier-Foundation *(Pflicht für 🔧)* | 30-50h | 30-50h | 0-15h | `04_stufe4.md` |
| 5 | Anwendungen bauen *(+ Modul 5.0 Eval-Mini, + MCP-Sicherheit, + A2A-Awareness, + S5-Self-Assessment)* | 70-115h | 60-95h | 35-55h | `05_stufe5.md` |
| 6 | Agenten *(+ Modul 6.5 Computer Use, + Trajectory-Eval Pflicht)* | 50-85h | 40-65h | 20-40h | `06_stufe6.md` |
| 7 | Deep Learning Foundations *(+ Math-Diagnose-Gate für 🧮, + Klassisches-ML-Voraussetzungen für 🧮, + S7-Self-Assessment)* | 60-100h | 215-365h | 10-20h | `07_stufe7.md` |
| 8 | Klassisches ML & Statistik *(+ Eval-Anker, für 🧮: 8.1+8.2+8.5 sind Voraussetzung für Stufe 7)* | 30-50h | 80-120h | 15-25h | `08_stufe8.md` |
| 9 | KI-Strategie & Business *(+ Modul 9.0 Datenstrategie, + Modul 9.6 Change Management, + 9.3 verstärkt, + S9-Self-Assessment)* | 25-40h | 18-30h | 80-130h | `09_stufe9.md` |
| 10 | Spezialisierung & Production *(+ Fine-Tuning-Decision-Framework, + Eval-as-CI-Verstärkung)* | 60-100h | 80-120h | 30-50h | `10_stufe10.md` |
| 11 | Forschung & Cutting-Edge | laufend | laufend | laufend | `11_stufe11.md` |

**Reihenfolge-Hinweise:**

- 🔧 **Stufe 4 ist Pflicht vor Stufe 5** *(NEU in v2.1)*. Wer Modul 5.x ohne Modul 4.1 startet, kollidiert in der Praxis. Das war in v2.0 eine bekannte Falle.
- 🧮 **Module 8.1, 8.2, 8.5 sind Pflicht-Voraussetzung für Stufe 7** *(NEU in v2.1)*. Klassisches ML als Foundation vor Deep Learning. Begründung in Architektur-Entscheidungen unten.
- 🧮 **Math-Diagnose-Test ist Gate vor Stufe 7** *(NEU in v2.1)*. Nicht JIT — Diagnose vorher, Lücken schließen, dann starten. Siehe `12_querschnitt_math.md`.
- 💼 **Hands-on-Anchor in Stufe 5 ist Pflicht.** Strategie ohne Bau-Erfahrung ist Theater. Mindestens Modul 5.1 + 5.4 (oder neu Modul 5.0).

---

## Querschnitte (Just-in-Time)

Querschnitte sind nicht Stufen, sondern parallele Vertiefungs-Ressourcen, die du heranziehst, wenn du sie brauchst:

| Querschnitt | Wann nötig | Datei |
|---|---|---|
| 🧮 Math-Foundation *(+ Diagnose-Test als Gate für 🧮)* | ab Stufe 7 (für 🧮 vorher), Diagnose-Test vor Stufe 7 | `12_querschnitt_math.md` |
| ✅ Eval | ab Modul 5.0 (Mini-Block), vertieft ab Modul 5.4, mit Ankern in S6/S8/S10/Capstone | `13_querschnitt_eval.md` |
| 🚀 Production & LLMOps | ab Stufe 5 als Bewusstsein, vertieft in Stufe 10, mit Capstone-Operate-Phase als Goldstandard | `14_querschnitt_production.md` |

---

## Capstone-Projekte

Drei Capstone-Optionen plus eine Meister-Option:

| Capstone | Track | Datei |
|---|---|---|
| Production-Multi-Agent-RAG | 🔧 Engineer | `15_capstone_a_engineer.md` |
| nanoGPT mit Preference-Tuning | 🧮 Foundations | `16_capstone_b_foundations.md` |
| KI-Strategie + Pilot (mit realer Organisation) | 💼 Strategist | `17_capstone_c_strategist.md` |
| Cross-Track-Capstone | 🥇 Meister | siehe `17_capstone_c_strategist.md` (Anhang) oder `15_capstone_a_engineer.md` |

**NEU in v2.1: Operate-Phase als Goldstandard-Empfehlung** für Capstone A. Nach Build-and-Deploy: 4-6 Wochen Betrieb mit echten Nutzern, Cost-Tracking, Incident-Log, Eval-Drift-Monitoring. Markiert als "Goldstandard, nicht Pflicht" — wer Capstone A mit Operate-Phase abschließt, hat ein Recruiter-relevantes Differenzierungsmerkmal.

**Capstone C bleibt: reale Organisation als Partner ist Pflicht** (eigener Arbeitgeber, NGO, Verein). Fiktive Orgs zählen nicht — Strategie ohne realen Stakeholder-Druck bleibt akademisch.

---

## Architektur-Entscheidungen v2.1

Diese Entscheidungen prägen das Curriculum. Punkte 1–10 unverändert aus v2.0, Punkte 11–17 sind angepasst oder neu in v2.1.

1. **Track-Logik**: Tiefen-Markierungen pro Modul, kein Forking. Du gehst alle Stufen, mit gewählter Tiefe.
2. **Self-paced**: Aufwand pro Modul, kein "X Monate"-Versprechen.
3. **Open-Source-Hybrid**: Closed-Source-Standards plus OSS gleichberechtigt, jedes Modul mit OSS-Pfad. Keine Bezahl-Inhalte als Pflicht. Coursera-Materialien (DeepLearning.AI) im Audit-Modus kostenlos nutzbar — siehe `99_anhang.md`.
4. **Free-Zertifikate** plus Curriculum-interne Outcome-Schwellen.
5. **Aktualität**: Datumsstempel pro Modul, 🟢/🔄-Markierungen für stabil/veränderlich, Live-Quellen für volatile Bereiche. *(In v2.1: 3-Monats-Audit-Zyklus für volatile A-Module, Verfallsdatum pro 🔄-Bullet — siehe `99_anhang.md`.)*
6. **Just-in-Time-Math**: Mathematik als Querschnitt, nicht als Pre-Stufe. *(In v2.1 für 🧮 modifiziert: Diagnose-Test als Gate vor Stufe 7, weil JIT ohne Vorwissen für 🧮 nicht trägt.)*
7. **Eval als Querschnitt**: nicht Anhängsel, sondern Disziplin durch alle Stufen. *(In v2.1 verstärkt: Eval-Mini-Block als Modul 5.0 vor erstem RAG-Bau, plus explizite Eval-Anker in Stufen 6/8/10/Capstone.)*
8. **Production als Querschnitt**: Production-Bewusstsein früh, Vertiefung in Stufe 10. *(In v2.1: Cost-Awareness-Block bereits in Stufe 2, Capstone-Operate-Phase als Goldstandard.)*
9. **MCP als roter Faden**: konzeptionell in 2.5, Praxis in 5.3, Produktiv in 10.3. *(In v2.1 erweitert: Sicherheits-Block in 5.3, A2A/ACP-Awareness als Bullet in 5.3.)*
10. **Capstone durchgehend**: nicht am Ende, sondern startet in Stufe 5/7/9 je nach Track.
11. **Math-Sequenz**: ~~Klassisches ML (Stufe 8) **nach** Deep Learning (Stufe 7), als didaktischer Rückblick.~~ → **Geändert in v2.1:** Klassisches-ML-Kern (Module 8.1, 8.2, 8.5) ist **Pflicht-Voraussetzung für Stufe 7 für 🧮**. Begründung: Backprop ist Spezialfall von Gradient Descent, das im Logistic-Regression-Kontext zuerst sauber gelernt wird (Standard in DeepLearning.AI, CS229). Für 🔧 und 💼 ist die Reihenfolge weniger kritisch, da Tiefenstufen leichter — bleibt dort sequenziell.
12. **Strategie nach Praxis**: Stufe 9 (Strategie) erst nach Stufen 5-6 (Praxis) — Strategie ohne Substrat ist Theater. *(Unverändert.)*
13. **Outcome-Rubriken pro Track** *(NEU in v2.1)*: messbare Kompetenz-Kriterien statt unscharfes "Meister"-Versprechen.
14. **Mid-Stage-Self-Assessments** *(NEU in v2.1)*: Outcome-Validierung verteilt auf Stufen 5/7/9, nicht erst im Capstone.
15. **Stufe 4 ist Pflicht für 🔧** *(NEU in v2.1)*: war in v2.0 "optional", was zu Crashes in Stufe 5 führte.
16. **💼-Track als anspruchsvoller Strategen-Track** *(NEU in v2.1)*: 350-500h, mit Datenstrategie, Change Management, vertieftem Operating Model. Bewusste Differenzierung gegen Bootcamp-Niveau.
17. **Aktualisierungs-Mechanik mit Verfallsdatum** *(NEU in v2.1)*: pro 🔄-Bullet ein eigenes Verfallsdatum, nicht nur pro Modul. 3-Monats-Audit für volatile A-Module.

---

## Quick-Start

### Wenn du heute startest

1. **Lies dieses Master-Dokument** komplett (20 Min in v2.1).
2. **Wähle deinen Track** — am besten dominanter Track plus 1-2 Module aus anderem Track. Schau dir die Outcome-Rubrik deines Tracks an: das ist dein Ziel-Bild.
3. **Gehe zu Stufe 1** (`01_stufe1.md`) — etabliere Tools, Portfolio-Repo, GitHub-Setup. Erlebe den Vorgeschmack-Demo (RAG + MCP + Eval), bevor du dich entmutigen lässt.
4. **Plane deinen Rhythmus** — wie viele Stunden pro Woche kannst du dir realistisch nehmen? Siehe Erwartete-Dauer-Tabelle unten.
5. **Setze einen 3-Monats-Review-Reminder** im Kalender — du wirst kalibrieren wollen.
6. **Für 🧮:** zusätzlich Math-Diagnose-Test in `12_querschnitt_math.md` machen, *bevor* du Stufe 7 erreichst. Nicht erst dann.
7. **Für 💼:** zusätzlich eine reale Organisation als späteren Capstone-Partner identifizieren — eigener Arbeitgeber, NGO, Verein. Ohne reale Org bleibt Capstone C akademisch.

### Erwartete Dauer

- **Vollzeit-Lerner** (40h/Woche): 🔧 ~2-3 Monate, 🧮 ~6-9 Monate, 💼 ~3-4 Monate, 🥇 ~9-12 Monate.
- **Berufsbegleitend** (10h/Woche): 🔧 ~6-12 Monate, 🧮 ~18-30 Monate, 💼 ~9-12 Monate, 🥇 ~24-36 Monate.
- **Hobby-Tempo** (3-5h/Woche): 🔧 ~18-30 Monate, 🧮 ~3-5 Jahre, 💼 ~18-30 Monate, 🥇 ~4-6 Jahre.

Realistisch sein, nicht abschrecken lassen. Stufenweise.

---

## Nutzungs-Hinweise

### Format pro Modul
Jedes Modul folgt einem Standard:
- Kurze Beschreibung (2-4 Sätze)
- Aufwand pro Track
- Datumsstempel (Last verified / Re-check by) — bei volatilen A-Modulen 3-Monats-Zyklus
- Voraussetzungen (in v2.1 mit harten Gates für 🧮 und 🔧 wo nötig)
- Lernziel mit Outcome-Schwelle
- Theorie (Bullets mit 🟢 stabil / 🔄 veränderlich + Quellen-Links + Verfallsdatum bei 🔄)
- Praxis: Hauptprojekt (40%+ Zeit, ins Portfolio)
- 🎁 Mehrwert-Mini-Projekte (sofort nutzbare kleine Tools)
- 🌱 Open-Source-Pfad
- Outcome-Check als Checklist

### Portfolio-Aufbau
Du baust parallel zum Curriculum ein GitHub-Portfolio auf:
- `stufe-1_onboarding/` bis `stufe-11_forschung/` als Hauptordner
- `querschnitte/` für Querschnitt-Outputs
- `00_capstone/` als oberster Capstone-Ordner
- `self-assessments/` für Mid-Stage-Self-Assessments *(NEU in v2.1)*
- Alle Hauptprojekte sind im Portfolio dokumentiert
- README pro Projekt mit Was/Warum/Wie

### Aktualität sicherstellen
- Pro Modul: Datumsstempel beachten ("Last verified: Mai 2026")
- 🔄-Bullets sind Stand-Mai-2026 — bei Bedarf via Live-Quellen verifizieren
- Live-Quellen sind in den Modulen verlinkt
- **3-Monats-Audit-Zyklus für volatile A-Module** *(NEU in v2.1)*: 2.5, 5.1, 5.3, 5.4, 6.2, 6.5, 7.1, 7.2, 10.2, 10.3, Eval-Querschnitt, Production-Querschnitt
- Curriculum gesamt wird mindestens halbjährlich aktualisiert (siehe `99_anhang.md`)

---

## Verzeichnisstruktur *(angepasst in v2.1)*

```
KI-Meisterlehrplan/
├── 000_master.md (diese Datei)
├── 01_stufe1.md
├── 02_stufe2.md
├── 03_stufe3.md
├── 04_stufe4.md
├── 05_stufe5.md
├── 06_stufe6.md
├── 07_stufe7.md
├── 08_stufe8.md
├── 09_stufe9.md
├── 10_stufe10.md
├── 11_stufe11.md
├── 12_querschnitt_math.md
├── 13_querschnitt_eval.md
├── 14_querschnitt_production.md
├── 15_capstone_a_engineer.md
├── 16_capstone_b_foundations.md
├── 17_capstone_c_strategist.md
└── 99_anhang.md (Aktualisierungslog, Aktualisierungs-Mechanik, Repo-Härtung, Glossar)
```

Plus eine konsolidierte Datei `KI-Meisterlehrplan_v2.1_complete.md`, die alle 19 Einzeldateien zusammenführt — für Lernende, die lieber eine einzige Datei haben.

---

## Was kommt als nächstes?

Wenn dieses Curriculum für dich resoniert:

1. **Mache es zu deinem**: forke das Repo, passe an deine Bedürfnisse an, ergänze eigene Notizen.
2. **Teile es weiter**: das Curriculum ist offen lizenziert (Vorschlag CC BY-SA 4.0, siehe `99_anhang.md`) — KI-Lernen ist kein Wettkampf.
3. **Pflege Aktualität**: bei volatilen Inhalten (Modelle, Tools) Live-Quellen verifizieren statt blind dem Curriculum zu folgen.
4. **Verbinde dich**: lokale KI-Communities, Online-Communities, Reading Groups (siehe Modul 11.1).

**Geplant für v2.2 (Stand Mai 2026):** Eine Ultra-Light-Version (Quick-Start-Pfad mit ~60-80h durch das bestehende Curriculum) für Lernende, die nur den schnellen Einstieg suchen.

---

## Lizenz und Credits

Vorschlag für die offene Veröffentlichung: **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**. Details siehe `99_anhang.md`.

Dieses Curriculum integriert Inhalte und Inspiration aus zahlreichen Quellen, die in den jeweiligen Modulen verlinkt sind. Wichtige Foundations:

- Andrew Ng's Machine Learning Specialization und DeepLearning.AI
- Andrej Karpathy's Zero to Hero und nanoGPT
- Hamel Husain's Eval-Posts (zentrale Pflichtlektüre für Modul 5.0 und Eval-Querschnitt)
- Sebastian Raschka's Magazine
- Anthropic, OpenAI, Google, Hugging Face Documentation
- Karim Lakhani's Competing in the Age of AI
- Eugene Yan's und Lilian Weng's Blogs
- 3Blue1Brown's Visual Math Series

Plus die Open-Source-Communities, die LangChain, LlamaIndex, vLLM, Ollama, Hugging Face, RAGAS, Promptfoo, Langfuse und unzählige weitere Tools möglich machen.

---

## Aktualisierungslog v2.1 (Auszug)

**v2.1.0 — Mai 2026**

Diese Version ist das Ergebnis einer strukturierten Review-Runde durch ein Bewertungs-Gremium aus 5 Rollen (Curriculum-Architekt, CTO/Engineering Lead, AI Engineering Spezialist, AI Foundations Spezialist, Applied AI Spezialist) plus Moderator und Research-Assistent. Vollständiger Log siehe `99_anhang.md`.

**Strukturelle Änderungen (Tier 1):**
- Outcome-Rubrik pro Track ergänzt (war in v2.0 unscharf als "Meister"-Versprechen)
- Mid-Stage-Self-Assessments S5/S7/S9 ergänzt (Outcome-Validierung verteilt, nicht nur im Capstone)
- Module 8.1+8.2+8.5 als Pflicht-Voraussetzung für Stufe 7 für 🧮 (Sequenz-Korrektur)
- Stufe 4 von "optional" zu "Pflicht für 🔧 vor Stufe 5"
- Math-Diagnose-Test als Gate vor Stufe 7 für 🧮 (Querschnitt erweitert)
- Capstone-Operate-Phase als Goldstandard-Empfehlung in Capstone A
- 💼-Aufwand auf 350-500h erhöht (bewusste Positionierung)

**Inhaltliche Ergänzungen (Tier 2):**
- Modul 1.3: Vorgeschmack-Demo (RAG + MCP + Eval, generisch)
- Modul 5.0: Eval-Mini-Block (Hamel Husain, API-Hauptpfad + Ollama-OSS-Pfad) — neu
- Modul 6.5: Computer Use & Agentic Browsing — neu
- Modul 9.0: Datenstrategie für KI — neu
- Modul 9.6: Change Management für KI-Initiativen — neu
- Cost-Awareness-Mini-Block vor Modul 2.2
- Reasoning-spezifisches Prompting in Modul 2.5
- A2A/ACP-Awareness und MCP-Sicherheits-Block in Modul 5.3
- Agent-Trajectory-Eval als Pflicht-Block in Modul 6.2
- Eval-Querschnitt-Anker in Stufen 6/8/10/Capstone
- Fine-Tuning-vs-RAG-vs-Prompt-Decision-Framework in Modul 10.2
- Modul 9.3 verstärkt: Operating Model, KPI, Governance

**Pflege & Veröffentlichung (Tier 3):**
- 3-Monats-Aktualitäts-Audit für A-Module
- Verfallsdatum-Stempel pro 🔄-Bullet
- Repo-Veröffentlichungs-Härtung: README-Vorlage, Lizenz-Vorschlag (CC BY-SA 4.0), Contribution-Guide, Issue-Templates
- Coursera-Audit-Modus dokumentiert für DeepLearning.AI-Verlinkungen

**Bewusst NICHT umgesetzt (mit Begründung):**
- RL eigenständig: Modul 6.3 reicht für >95% der Lernenden, Hugging Face RL Course ist verlinkt für Vertiefung
- Audio/Speech eigenständig: Multimodal-Modul 7.4 deckt es ausreichend für Mai 2026
- NLP-Foundations vor LLMs (CS224N-Stil): Aufwand-Nutzen schlecht, optional als Querschnitt-Material verlinkt
- Externe Capstone-Reviewer als Pflicht: für Open-Repo nicht durchsetzbar, bleibt Empfehlung
- Kohorten-Modus: nicht realistisch ohne Plattform

---

**Mai 2026**
