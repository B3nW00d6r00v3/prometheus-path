# Querschnitt: Math-Foundation

**Aufwand:** 🔧 10-30h · 🧮 80-150h · 💼 5-15h  
**Wann nötig:** ab Stufe 7 (Deep Learning Foundations) — vorher konzeptionelles Verständnis aus 2.5 reicht

| Stufen-Bezüge | Capstone-Bezug | Tools |
|---|---|---|
| Stufe 7 (Pflicht-Gate 🧮), Stufe 8 | Capstone B | 3Blue1Brown, Khan Academy, Mathematics for ML |

Dieser Querschnitt ist **Just-in-Time** — du brauchst ihn nicht vor Stufe 7. Wer 🧮 ist, sollte ihn vor Karpathys Zero-to-Hero (Modul 7.1) angefangen haben. Wer 🔧 ist, kann ihn parallel zu Stufe 7 selektiv durcharbeiten. Wer 💼 ist, braucht oft nur konzeptionelles Verständnis von Lineare Algebra und Wahrscheinlichkeit.

**Wichtig:** Dieser Querschnitt ist nicht "lerne komplette Mathematik" — es ist "lerne die Mathematik, die du für moderne KI brauchst". Drei Säulen: **Lineare Algebra**, **Calculus** (Ableitungen), **Wahrscheinlichkeit & Statistik**.

Für **🧮** ist die Math-Foundation **harte Pflicht-Vorbedingung für Stufe 7**, validiert durch einen **Math-Diagnose-Test als Gate-Sektion** (siehe nächster Abschnitt). Lernende die die Just-in-Time-Empfehlung als "kann ich mir während Stufe 7 holen" interpretieren, kollidieren in 7.1 mit Backprop, weil die Calculus-Basis fehlt. Diagnose-Gate vor Stufe 7 fängt das systematisch ab.

Für 🔧 und 💼 bleibt Just-in-Time Empfehlung (kein hartes Gate), weil ihre Stufen-7-Tiefe konzeptionell ist und deutlich weniger Math-Anker hat.

---

## Math-Diagnose-Test als Gate-Sektion (primär für 🧮)

**Aufwand:** 2-4h für den Test selbst + Lück-Schluss (variabel, oft 10-40h für 🧮)
**Wann:** Vor Stufe 7. Bei 🔧 optional als Self-Check.
**Voraussetzungen:** Modul 2.5 (Math-Konzepte konzeptionell)

### Warum dieses Gate existiert

Just-in-Time-Math funktioniert für 🔧, weil dort die Math-Tiefe in Stufen 7-10 begrenzt ist (Architektur-Entscheidungen treffen, Hyperparameter wählen — kein Backprop von Hand). Für 🧮 funktioniert Just-in-Time **nicht zuverlässig**: Modul 7.1 (Karpathys micrograd) verlangt Calculus-Basis vom ersten Tag, plus Lineare Algebra für die Matrix-Operationen ab Lecture 2 (makemore-Bigram). Wer ohne diese Basis startet, bricht in Lecture 1-3 ab oder kommt nur passiv mit (Code abschreiben ohne Verstehen).

Das Math-Diagnose-Gate ist die systematische Lösung: **vor** Stufe 7 wird gemessen, ob die Foundation steht. Wenn nicht, schließt du die Lücken — *dann* startest du Stufe 7. Erfahrungswerte aus etablierten Curricula (DLAI Specialization, Stanford CS230, Stanford CS336, fast.ai): 60-70% der Lernenden, die Backprop-Verständnis erreichen, hatten vorher solide Math-Foundation. Bei den anderen 30-40% war Math-Lücke der häufigste Abbruch-Grund.

### Lernziel

Du hast den Math-Diagnose-Test bestanden (mindestens 12 von 15 Aufgaben korrekt) und damit nachgewiesen, dass Lineare Algebra, Calculus und Wahrscheinlichkeit auf dem Niveau sind, das Stufe 7 verlangt.

### Der Test: 15 Aufgaben in drei Kategorien

**Aufwand:** 2-4 Stunden ohne Hilfsmittel (kein Taschenrechner für Konzept-Aufgaben, Papier und Stift erlaubt).

#### Kategorie A: Lineare Algebra (5 Aufgaben)

**A1.** Gegeben: Matrix M = [[2, 1], [3, 4]] und Vektor v = [1, 2]. Berechne M·v.

**A2.** Skalarprodukt: v = [1, 2, 3], w = [4, -1, 2]. Berechne v · w. Was bedeutet das geometrisch (in einem Satz)?

**A3.** Erkläre in 2-3 Sätzen, was eine Matrix-Multiplikation A·B in einem Neural Network repräsentiert. Was sind Zeilen-Spalten-Dimensionen, die kompatibel sein müssen?

**A4.** Gegeben: Matrix M = [[3, 0], [0, 2]]. Was sind die Eigenvektoren und Eigenwerte? (Bei Diagonal-Matrizen sind sie offensichtlich.)

**A5.** Gegeben: Vektor v = [3, 4]. Berechne die L2-Norm (euklidische Länge). Welche Norm wäre das L1?

#### Kategorie B: Calculus (5 Aufgaben)

**B1.** Berechne die Ableitung von f(x) = 3x² + 2x - 5 nach x.

**B2.** Berechne die Ableitung von f(x) = e^x · x. (Produktregel.)

**B3.** Kettenregel: berechne die Ableitung von f(x) = (3x + 1)². Schritt für Schritt erklären.

**B4.** Partielle Ableitungen: f(x, y) = x² + 3xy + y³. Berechne ∂f/∂x und ∂f/∂y.

**B5.** Erkläre in 3-4 Sätzen, was Gradient Descent ist. Was ist der Gradient? In welche Richtung bewegen sich die Weights?

#### Kategorie C: Wahrscheinlichkeit & Statistik (5 Aufgaben)

**C1.** Eine Münze hat Wahrscheinlichkeit 0.6 für Kopf. Was ist die Wahrscheinlichkeit, in 3 Würfen mindestens einmal Kopf zu sehen? (Hinweis: Komplement-Wahrscheinlichkeit nutzen.)

**C2.** Bedingte Wahrscheinlichkeit: P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2. Berechne P(A|B). Was bedeutet das?

**C3.** Gegeben eine Datenmenge {2, 4, 4, 6, 8, 10}. Berechne Mittelwert und Standardabweichung (Bevölkerungs-Variante).

**C4.** Erkläre in 2-3 Sätzen, was Cross-Entropy als Loss-Funktion misst. (Konzeptionell, keine Formel nötig.)

**C5.** Konfidenzintervall: ein A/B-Test zeigt 5% Conversion-Lift mit 95%-KI [1%, 9%]. Wie interpretierst du das? Wäre der Lift signifikant, wenn das KI [-2%, 12%] wäre?

### Bewertung — Selbstkorrektur

Korrigiere deinen Test selbst mit den Lösungen unten. Sei ehrlich: ein "knapp daneben" ist eine Lücke, kein "hätt's fast gehabt".

**Lösungen-Skizze (für Selbstkorrektur):**

- **A1**: M·v = [2·1 + 1·2, 3·1 + 4·2] = [4, 11]. Wer das nicht kann: Lineare-Algebra-Lücke.
- **A2**: v·w = 1·4 + 2·(-1) + 3·2 = 4 - 2 + 6 = 8. Geometrisch: Projektion oder Maß für "Ausrichtung" der Vektoren.
- **A3**: Matrix-Mult repräsentiert Layer-Transformation. Bei A·B müssen die Spalten von A gleich der Zeilen von B sein.
- **A4**: Eigenvektoren der Diagonal-Matrix [[3,0],[0,2]]: e1=[1,0] mit Eigenwert 3, e2=[0,1] mit Eigenwert 2.
- **A5**: L2 = √(9+16) = 5. L1 = |3| + |4| = 7.
- **B1**: f'(x) = 6x + 2.
- **B2**: f'(x) = e^x · x + e^x · 1 = e^x(x+1).
- **B3**: f'(x) = 2(3x+1) · 3 = 6(3x+1) = 18x + 6.
- **B4**: ∂f/∂x = 2x + 3y, ∂f/∂y = 3x + 3y².
- **B5**: Gradient Descent minimiert Loss durch iterativen Schritt entgegen des Gradienten. Gradient = Vektor partieller Ableitungen, zeigt steilsten Anstieg. Weights werden in Gegenrichtung bewegt.
- **C1**: P(mindestens 1 Kopf) = 1 - P(kein Kopf) = 1 - 0.4³ = 1 - 0.064 = 0.936.
- **C2**: P(A|B) = P(A∩B)/P(B) = 0.2/0.4 = 0.5. Bedeutet: wenn B passiert ist, ist A mit 50% wahrscheinlich.
- **C3**: Mittelwert = 34/6 ≈ 5.67. Varianz = Σ(x_i - μ)²/n ≈ 6.89. Standardabweichung ≈ 2.62.
- **C4**: Cross-Entropy misst Distanz zwischen vorhergesagter und tatsächlicher Wahrscheinlichkeitsverteilung. Bei Klassifikation: wie weit liegt die Modell-Wahrscheinlichkeit von der wahren Klasse weg.
- **C5**: 5% Lift mit KI [1%, 9%] ist signifikant (KI enthält 0% nicht). Bei [-2%, 12%]: nicht signifikant, weil 0% im Intervall liegt.

### Gate-Logik — wann hast du bestanden?

- **12+ von 15 Aufgaben korrekt** → Gate bestanden, du kannst Stufe 7 starten.
- **9-11 korrekt** → punktuelle Lücken. Lösche schwächste Kategorie nach mit den Quellen unten (5-15h), dann erneut testen.
- **<9 korrekt** → systematische Lücke. Komplette Math-Foundation nachholen (siehe nachfolgende Abschnitte) — typisch 30-80h für 🧮 vor Stufe 7. Das ist nicht verschwendete Zeit, das ist die Investition, die Stufe 7 erst möglich macht.

### Differenzierung pro Track

- **🧮**: Pflicht-Gate. Bestanden ist Voraussetzung für Stufe 7.
- **🔧**: Optional als Self-Check. Wer 9-11 erreicht, ist auf Stufe-7-Tiefe für 🔧 ausreichend.
- **💼**: Test ist nicht relevant — 💼-Tiefe in Stufe 7 ist konzeptionell, kein Backprop von Hand. Stattdessen reicht für 💼: konzeptionelles Verständnis aus 3Blue1Brown-Series.

### Im Portfolio

`self-assessments/math-diagnose/` mit:
- Test-Aufgaben mit deinen Antworten (Foto/Scan vom Papier oder LaTeX)
- Selbstkorrektur-Auswertung
- Gate-Status (bestanden / 9-11 / <9)
- Falls Lücken: Plan zum Schließen plus Re-Test-Datum

---

## Lineare Algebra

Vektoren, Matrizen, Matrix-Multiplikation, Eigenvektoren — die Sprache aller neuronalen Netze. Jede Layer ist eine Matrix-Multiplikation, jede Embedding ist ein Vektor, jeder Attention-Mechanismus rechnet mit Matrizen.

**Kern-Konzepte:**
- Vektoren und Vektor-Operationen (Addition, Skalarprodukt, Norm)
- Matrizen und Matrix-Multiplikation
- Linear-Transformationen geometrisch verstanden
- Eigenvektoren und Eigenwerte (Grundlage für PCA)
- Singular Value Decomposition (SVD)

**Quellen, hierarchisch nach Tiefe:**

- 🟢 [3Blue1Brown — Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) — geometrische Intuition, kostenlos, 15 Videos. **Pflicht für alle Tracks.** Beginne hier.

- 🟢 [Khan Academy — Linear Algebra](https://www.khanacademy.org/math/linear-algebra) — strukturierter Kurs mit Übungsaufgaben, kostenlos. Empfohlen für 🔧🧮.

- 🟢 [Mathematics for Machine Learning — Imperial College London](https://www.coursera.org/learn/linear-algebra-machine-learning) — Coursera Audit-Modus kostenlos, sehr ML-fokussiert. Empfohlen für 🧮.

- 🟢 [Mathematics for Machine Learning Book](https://mml-book.github.io) — kostenloses Buch, akademische Tiefe. **Standard-Referenz für 🧮.**

- 🟢 [Gilbert Strang — Linear Algebra Lectures (MIT OCW)](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) — der Klassiker, akademisch tief. Optional für 🧮 als Vertiefung.

- 🟢 **[Stanford CS336 — Language Modeling from Scratch](https://stanford-cs336.github.io/)** — Spring 2024 Lecture Notes, sehr aktuell, deckt Tokenization → Architecture → Pretraining → Scaling Laws → Mid-Training → Post-Training (RLHF, DPO) → Inference systematisch ab. Anwendungs-orientierte Mathematik in modernen LLMs (Tensor-Operationen für Multi-Head-Attention, Scaling Laws, Mixed-Precision-Numerik). Empfohlen für 🧮 als parallele Lektüre zu Stufe 7 — die Stanford-Sequenz und unsere Stufe-7-Sequenz verstärken sich gegenseitig.

**Anwendungs-Anker im Curriculum:**
- Modul 7.1 (Neural Networks): Forward-Pass = Matrix-Multiplikation
- Modul 7.2 (Transformer): Q,K,V-Matrizen, Attention = Matrix-Operationen
- Modul 8.1 (PCA): Eigenvektoren, SVD
- Modul 5.1 (RAG-Embeddings): Vektoren im hochdimensionalen Raum
- *Modul 8.2 (Logistic Regression from scratch)*: Matrix-Operationen für Forward Pass

**Track-spezifische Empfehlung:**
- 💼: 3Blue1Brown reicht (4-5h), konzeptionelles Verständnis ist Ziel.
- 🔧: 3Blue1Brown + Khan Academy oder Imperial College Audit (10-20h), praktisches Verständnis.
- 🧮: Komplette Pflicht: 3Blue1Brown + Imperial College + Mathematics for ML Book Kapitel 1-4 (40-80h), tiefes Verständnis. *Diagnose-Test-Aufgaben A1-A5 müssen ohne Probleme lösbar sein vor Stufe 7.*

---

## Calculus (Ableitungen für Backpropagation)

Backpropagation ist Anwendung der Kettenregel auf neuronale Netze. Wer Backprop verstehen will, braucht Ableitungen, partielle Ableitungen, Gradienten, Kettenregel.

**Kern-Konzepte:**
- Funktion, Ableitung, Tangente
- Partielle Ableitungen (mehrere Variablen)
- Gradient als Vektor partieller Ableitungen
- Kettenregel (Pflicht für Backprop)
- Optimierung mit Gradient Descent

**Quellen:**

- 🟢 [3Blue1Brown — Essence of Calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) — geometrische Intuition, kostenlos, 12 Videos. **Pflicht für alle Tracks.**

- 🟢 [Khan Academy — Calculus 1 + Multivariable](https://www.khanacademy.org/math/calculus-1) — strukturierter Aufbau, viele Übungen, kostenlos.

- 🟢 [3Blue1Brown — Backpropagation Calculus](https://www.youtube.com/watch?v=tIeHLnjs5U8) — Backprop-Mathematik geometrisch erklärt. **Pflicht für 🧮.**

- 🟢 [Karpathy — Spelled-out intro to neural networks](https://www.youtube.com/watch?v=VMj-3S1tku0) — Karpathys micrograd-Lecture rechnet Backprop von Grund auf vor. **Pflicht für 🧮 in Modul 7.1.**

**Anwendungs-Anker:**
- Modul 7.1: Backpropagation, Gradient Descent
- Modul 7.2: Loss-Funktionen optimieren
- Modul 8.3: Gradient Boosting (Gradient Descent im Funktionsraum)
- Modul 6.3: RL und Policy Gradients (für 🧮)
- *Modul 8.2 (Logistic Regression from scratch)*: Gradient-Berechnung von Hand als Foundation für Backprop

**Track-spezifische Empfehlung:**
- 💼: 3Blue1Brown reicht (3-4h).
- 🔧: 3Blue1Brown + Khan Academy Multivariable Subset (8-15h).
- 🧮: 3Blue1Brown + Khan Academy Multivariable + 3Blue1Brown Backprop + Karpathy Lecture 1 (20-40h). *Diagnose-Test-Aufgaben B1-B5 müssen ohne Probleme lösbar sein vor Stufe 7.*

---

## Wahrscheinlichkeit und Statistik

Wahrscheinlichkeit ist die Sprache der Inferenz, Statistik die Sprache der Eval. Cross-Entropy, Bayesian Methods, Hypothesis Testing, Konfidenzintervalle — alles braucht diese Foundation.

**Kern-Konzepte:**
- Wahrscheinlichkeitsverteilungen (Normal, Bernoulli, Multinomial)
- Bedingte Wahrscheinlichkeit, Bayes-Theorem
- Erwartungswert, Varianz, Standardabweichung
- Maximum Likelihood Estimation (MLE)
- Cross-Entropy als Loss-Funktion
- Hypothesentests, p-Werte, Konfidenzintervalle (für Modul 8.5)
- Bayesian vs. Frequentist Statistik

**Quellen:**

- 🟢 [StatQuest — Statistics Fundamentals](https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9) — Josh Starmer, sehr zugänglich, kostenlos. **Pflicht für alle Tracks.**

- 🟢 [StatQuest — Machine Learning](https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF) — ML-orientierte Statistik. Empfohlen für 🔧🧮.

- 🟢 [Khan Academy — Statistics & Probability](https://www.khanacademy.org/math/statistics-probability) — strukturiert mit Übungen, kostenlos.

- 🟢 [Seeing Theory](https://seeing-theory.brown.edu) — interaktive Visualisierungen für Wahrscheinlichkeit, kostenlos. **Highly empfohlen.**

- 🟢 [Mathematics for Machine Learning Book — Kapitel 6](https://mml-book.github.io) — Probability-Foundation für 🧮.

- 🟢 [Coursera — Bayesian Methods for Machine Learning](https://www.coursera.org/learn/bayesian-methods-in-machine-learning) — Coursera Audit-Modus kostenlos, für 🧮 vertieft.

**Anwendungs-Anker:**
- Modul 7.1: Cross-Entropy als Loss
- Modul 8.2: Naive Bayes, Klassifikations-Wahrscheinlichkeiten, Logistic Regression Loss
- Modul 8.5: A/B-Testing, Hypothesentests, Konfidenzintervalle
- Modul 5.4: LLM-as-Judge (Bayesian Reasoning oft hilfreich)
- *Querschnitt-Eval (`13_querschnitt_eval.md`)*: Power Analysis, Multiple-Testing-Korrektur

**Track-spezifische Empfehlung:**
- 💼: StatQuest Fundamentals + Khan Academy Subset (10-15h). Wichtig für 9.2 (ROI mit Konfidenz) und 8.5 (A/B-Testing).
- 🔧: StatQuest Fundamentals + ML + Khan Academy (15-25h).
- 🧮: alle Quellen + Mathematics for ML Buch Kapitel 6 (40-80h). *Diagnose-Test-Aufgaben C1-C5 müssen ohne Probleme lösbar sein vor Stufe 7.*

---

## Anwendungs-Strategie

Lerne **nicht alles auf einmal**. Just-in-Time-Pattern (für 🔧 und 💼):

1. **Vor Stufe 7** (für 🔧): 3Blue1Brown Linear Algebra Series schauen (~5h).
2. **Während Stufe 7**: Calculus parallel zu Karpathy (Backprop verlangt es).
3. **Vor Modul 8.5** (für alle): StatQuest Fundamentals.
4. **Bei Bedarf**: vertiefe spezifische Themen, wenn du in einem Modul Hänger hast.

**Für 🧮 in v2.1:** Das Just-in-Time-Pattern reicht nicht. Stattdessen:
1. **Vor Stufe 7**: kompletter Math-Querschnitt durchgearbeitet (3Blue1Brown alle 3 Series + Khan Academy Subset + ggf. Imperial College / MIT OCW).
2. **Vor Stufe 7**: **Math-Diagnose-Test bestanden** (Gate-Sektion oben).
3. **Während Stufe 7**: Math-Querschnitt als Referenz, nicht als Erstlern-Material.
4. **Modul 8.2 (Logistic Regression from scratch)**: Math wird *aktiv* angewendet — Foundation muss da sein.

**Anti-Pattern**: 3 Monate Mathematik im Voraus durchpauken und dann anfangen mit Praxis. Funktioniert für die meisten 🔧/💼-Lernende nicht — Praxis-Anker fehlen, Motivation sinkt.

**Aber für 🧮 ist der gegenteilige Anti-Pattern in v2.0 das größere Problem gewesen**: Stufe 7 starten ohne Math-Foundation, dann in Karpathy Lecture 1-3 abbrechen oder passiv mitkommen. v2.1 löst das mit dem Diagnose-Gate.

---

## Free-Zertifikate

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [3Blue1Brown YouTube](https://www.3blue1brown.com) | Grant Sanderson | 10-15h | Pflicht für alle Tracks |
| [Khan Academy](https://www.khanacademy.org) | Khan Academy | 30-60h | Vertiefung 🔧🧮 |
| [MIT OCW 18.06 Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) | MIT | 40-60h | Vertiefung 🧮 |
| [Imperial College — Mathematics for ML](https://www.coursera.org/specializations/mathematics-machine-learning) | Imperial / Coursera (Audit-Modus) | 60-100h | Vertiefung 🧮 |
| [Mathematics for Machine Learning Book](https://mml-book.github.io) | Deisenroth/Faisal/Ong | als Buch | Standard-Referenz 🧮 |

**Coursera-Audit-Modus-Hinweis:** Imperial College und Bayesian-Kurs auf Coursera sind im Audit-Modus kostenlos zugänglich. Details siehe `99_anhang.md`.

---

## Outcome-Check

**🧮:**
- [ ] **Math-Diagnose-Test bestanden (12+ von 15)**
- [ ] Backprop mit Stift und Papier auf einer kleinen MLP rechnen können
- [ ] Eigenvektoren und SVD konzeptionell + rechnerisch verstanden
- [ ] Bayes-Theorem in eigenen Worten erklären können
- [ ] MLE als Konzept verstanden (warum ist Cross-Entropy ein MLE-Estimator?)

**🔧:**
- [ ] Matrix-Multiplikation in eigenen Worten erklären, wie sie in Neural Networks angewendet wird
- [ ] Gradient Descent in eigenen Worten erklären
- [ ] Konfidenzintervalle für eigene Eval-Reports korrekt nutzen
- [ ] PCA als Vorverarbeitungs-Schritt verstanden
- [ ] Optional: Math-Diagnose-Test als Self-Check (9+ von 15)

**💼:**
- [ ] Konzeptionelles Verständnis: was ist ein Vektor, eine Matrix, ein Gradient
- [ ] Was ist eine Wahrscheinlichkeitsverteilung, was ist Erwartungswert
- [ ] Hypothesentests grundsätzlich verstehen (für 8.5)

