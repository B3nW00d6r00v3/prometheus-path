# Querschnitt: Math-Foundation

**Aufwand:** 🔧 10-30h · 🧮 80-150h · 💼 5-15h
**Wann nötig:** ab Stufe 7 (Deep Learning Foundations) — vorher konzeptionelles Verständnis aus 2.5 reicht
**Last verified:** Mai 2026 · **Re-check by:** Nov 2026

Dieser Querschnitt ist **Just-in-Time** — du brauchst ihn nicht vor Stufe 7. Wer 🧮 ist, sollte ihn vor Karpathys Zero-to-Hero (Modul 7.1) angefangen haben. Wer 🔧 ist, kann ihn parallel zu Stufe 7 selektiv durcharbeiten. Wer 💼 ist, braucht oft nur konzeptionelles Verständnis von Lineare Algebra und Wahrscheinlichkeit.

**Wichtig:** Dieser Querschnitt ist nicht "lerne komplette Mathematik" — es ist "lerne die Mathematik, die du für moderne KI brauchst". Drei Säulen: **Lineare Algebra**, **Calculus** (Ableitungen), **Wahrscheinlichkeit & Statistik**.

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

- 🟢 [Mathematics for Machine Learning — Imperial College London](https://www.coursera.org/learn/linear-algebra-machine-learning) — Audit kostenlos, sehr ML-fokussiert. Empfohlen für 🧮.

- 🟢 [Mathematics for Machine Learning Book](https://mml-book.github.io) — kostenloses Buch, akademische Tiefe. **Standard-Referenz für 🧮.**

- 🟢 [Gilbert Strang — Linear Algebra Lectures (MIT OCW)](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) — der Klassiker, akademisch tief. Optional für 🧮 als Vertiefung.

**Anwendungs-Anker im Curriculum:**
- Modul 7.1 (Neural Networks): Forward-Pass = Matrix-Multiplikation
- Modul 7.2 (Transformer): Q,K,V-Matrizen, Attention = Matrix-Operationen
- Modul 8.1 (PCA): Eigenvektoren, SVD
- Modul 5.1 (RAG-Embeddings): Vektoren im hochdimensionalen Raum

**Track-spezifische Empfehlung:**
- 💼: 3Blue1Brown reicht (4-5h), konzeptionelles Verständnis ist Ziel.
- 🔧: 3Blue1Brown + Khan Academy oder Imperial College Audit (10-20h), praktisches Verständnis.
- 🧮: Komplette Pflicht: 3Blue1Brown + Imperial College + Mathematics for ML Book Kapitel 1-4 (40-80h), tiefes Verständnis.

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

**Track-spezifische Empfehlung:**
- 💼: 3Blue1Brown reicht (3-4h).
- 🔧: 3Blue1Brown + Khan Academy Multivariable Subset (8-15h).
- 🧮: 3Blue1Brown + Khan Academy Multivariable + 3Blue1Brown Backprop + Karpathy Lecture 1 (20-40h).

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

- 🟢 [Coursera — Bayesian Methods for Machine Learning](https://www.coursera.org/learn/bayesian-methods-in-machine-learning) — Audit kostenlos, für 🧮 vertieft.

**Anwendungs-Anker:**
- Modul 7.1: Cross-Entropy als Loss
- Modul 8.2: Naive Bayes, Klassifikations-Wahrscheinlichkeiten
- Modul 8.5: A/B-Testing, Hypothesentests, Konfidenzintervalle
- Modul 5.4: LLM-as-Judge (Bayesian Reasoning oft hilfreich)

**Track-spezifische Empfehlung:**
- 💼: StatQuest Fundamentals + Khan Academy Subset (10-15h). Wichtig für 9.2 (ROI mit Konfidenz) und 8.5 (A/B-Testing).
- 🔧: StatQuest Fundamentals + ML + Khan Academy (15-25h).
- 🧮: alle Quellen + Mathematics for ML Buch Kapitel 6 (40-80h).

## Anwendungs-Strategie

Lerne **nicht alles auf einmal**. Just-in-Time-Pattern:

1. **Vor Stufe 7** (für 🧮) oder **vor Modul 5.1** (für 🔧): 3Blue1Brown Linear Algebra Series schauen (~5h).
2. **Während Stufe 7**: Calculus parallel zu Karpathy (Backprop verlangt es).
3. **Vor Modul 8.5** (für alle): StatQuest Fundamentals.
4. **Bei Bedarf**: vertiefe spezifische Themen, wenn du in einem Modul Hänger hast.

**Anti-Pattern**: 3 Monate Mathematik im Voraus durchpauken und dann anfangen mit Praxis. Funktioniert für die meisten nicht — Praxis-Anker fehlen. Just-in-Time ist motivierender.

## Free-Zertifikate

| Zertifikat | Anbieter | Aufwand | Wann sinnvoll |
|---|---|---|---|
| [3Blue1Brown YouTube](https://www.3blue1brown.com) | Grant Sanderson | 10-15h | Pflicht für alle Tracks |
| [Khan Academy](https://www.khanacademy.org) | Khan Academy | 30-60h | Vertiefung 🔧🧮 |
| [MIT OCW 18.06 Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) | MIT | 40-60h | Vertiefung 🧮 |
| [Imperial College — Mathematics for ML](https://www.coursera.org/specializations/mathematics-machine-learning) | Imperial / Coursera | 60-100h | Vertiefung 🧮, mit Audit kostenlos |
| [Mathematics for Machine Learning Book](https://mml-book.github.io) | Deisenroth/Faisal/Ong | als Buch | Standard-Referenz 🧮 |

## Outcome-Check

**🧮:**
- [ ] Backprop mit Stift und Papier auf einer kleinen MLP rechnen können
- [ ] Eigenvektoren und SVD konzeptionell + rechnerisch verstanden
- [ ] Bayes-Theorem in eigenen Worten erklären können
- [ ] MLE als Konzept verstanden (warum ist Cross-Entropy ein MLE-Estimator?)

**🔧:**
- [ ] Matrix-Multiplikation in eigenen Worten erklären, wie sie in Neural Networks angewendet wird
- [ ] Gradient Descent in eigenen Worten erklären
- [ ] Konfidenzintervalle für eigene Eval-Reports korrekt nutzen
- [ ] PCA als Vorverarbeitungs-Schritt verstanden

**💼:**
- [ ] Konzeptionelles Verständnis: was ist ein Vektor, eine Matrix, ein Gradient
- [ ] Was ist eine Wahrscheinlichkeitsverteilung, was ist Erwartungswert
- [ ] Hypothesentests grundsätzlich verstehen (für 8.5)

## Aktualisierungslog

- **2026-05-02:** Initiale Version v2.0.0
- **Re-check geplant:** November 2026 — primär: neue Online-Kurse, neue interaktive Visualisierungs-Tools.