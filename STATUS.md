# Prometheus Path -- Status
*Updated: 2026-05-06*

## Status
🟢 Aktiv

## Letzter Fortschritt
Alle Theorie-Seiten in Modul 2.4 (KI-Realität verstehen) und Modul 2.5 (LLM Foundations VERTIEFT + Reasoning) grundlegend ausgebaut — insgesamt 28 Dateien.

**Modul 2.4 — KI-Realität verstehen (6 Seiten):**
- **halluzinationen-erkennen.md**: Warum LLMs halluzinieren, 5 häufigste Muster (erfundene Quellen, falsche Zahlen, zu glatte Antworten, nicht-existente Funktionen, Nischenthemen), persönliche Strategie
- **bias.md**: 5 Bias-Muster (Geschlechter-Bias, kulturelle Defaults, Sprach-Hierarchie, unter-repräsentierte Gruppen, zeitlicher Bias), Erkennungs-Strategien, Sycophancy-Problem
- **dsgvo-basics.md**: Training vs. Inference erklärt, Opt-Out-Policies pro Anbieter (OpenAI, Anthropic, Google), 5 DSGVO-Regeln mit Praxis-Beispielen, AVV-Pflicht, lokale Modelle
- **prompt-injection.md**: Direkte vs. indirekte Prompt Injection, konkrete Szenarien (Kundenservice-Bot, E-Mail, RAG), 5 Mindeststandards, Vergleich mit klassischen Injection-Angriffen
- **ai-literacy.md**: Art. 4 EU AI Act im Detail, seit 2.2.2025 geltend, 6 Kern-Kompetenzen, Konsequenzen bei Nicht-Einhaltung, Verbindung zu Prometheus-Curriculum
- **ki-kommunikation.md**: Transparenz als Standard 2026, Disclaimer-Vorlagen für beruflich/akademisch/Bewerbungen, Grenze der Transparenz (befreit nicht von Verantwortung)

**Modul 2.5 — LLM Foundations VERTIEFT + Reasoning (22 Seiten):**

*Hauptblock (9 Seiten):*
- **frontier-closed-source.md**: Big Five detailliert (Claude Opus/Sonnet/Haiku, GPT-5/5.5/o3, Gemini 2.5/3.1, Grok 4, Mistral 3) mit Stärken/Schwächen
- **open-source-2026.md**: Llama 4, Qwen 3, Gemma 3/4, DeepSeek V3/R1, Mistral 3 OSS mit Lizenzen, Vor-/Nachteile, Ollama-Einstieg
- **reasoning-modelle.md**: System-1/System-2-Analogie, Reasoning-Modelle aller Anbieter als Tabelle, wann Reasoning glänzt/overkill ist
- **function-calling.md**: Vierstufiger Workflow mit JSON-Schema-Beispiel, drei gelöste LLM-Limitationen, Basis für Agenten
- **mcp-konzept.md**: USB-C-Analogie, M×N vs. M+N Problem, Server/Client/Protokoll erklärt, Erfolgsgeschichte von 0 auf Industriestandard
- **multi-model-routing.md**: 70/25/5-Verteilung mit Tabelle, drei Routing-Strategien, Kostenrechnung (60-85% Ersparnis)
- **provider-abstraktion.md**: Vendor-Lock-in-Problem mit Code-Vergleich, LiteLLM vs. OpenRouter, wann Abstraktion, wann direkt ans SDK
- **cost-modell.md**: Cost-Formel mit Preis-Tabelle (7 Modelle), Prompt Caching erklärt, Thinking-Tokens, Architektur-Implikationen
- **modell-wahl.md**: Entscheidungs-Matrix, 4 Dimensionen, häufige Fehler, Entscheidungsbaum

*Reasoning-Prompting (7 Seiten):*
- **ask-dont-tell.md**: Navigationsgerät-Analogie, konkretes Code-Review-Beispiel, wann gilt / wann nicht
- **cot-anti-pattern.md**: Geschichte von CoT (Wei et al. 2022), warum es bei Reasoning schadet (Redundanz + Interferenz), Primzahlen-Beispiel
- **few-shot-anti-pattern.md**: Detektiv-Analogie, Beschwerde-Klassifikations-Beispiel, 0-2-Beispiel-Regel, Format-Beispiel vs. Denk-Beispiel
- **strukturierte-outputs-reasoning.md**: Constrained Decoding erklärt, Zwei-Schritt-Pattern (erst denken, dann formatieren), wann Structured Outputs direkt OK
- **reasoning-cost.md**: Versteckte Thinking-Tokens, Preisvergleichs-Tabelle (4 Szenarien), wann Aufpreis lohnt/Verschwendung, Start-Small-Strategie
- **wann-reasoning.md**: 10-Zeilen Entscheidungs-Matrix, 30-Sekunden-Regel, Grenzfälle, A/B-Test-Anleitung
- **reasoning-eval.md**: Output-Eval vs. Trajectory-Eval, "Richtig aus falschem Grund"-Problem, Sichtbarkeit der Thinking-Tokens pro Anbieter

*Block 2.5.5 (6 Seiten):*
- **test-time-compute.md**: Zwei Skalierungs-Achsen erklärt, Studenten-Analogie (Semester vs. Prüfung), Vergleichstabelle, Implikation für Effort-Parameter
- **reasoning-familie-2026.md**: Alle Anbieter mit Tabelle, OpenAI-Ansatz vs. Anthropic-Ansatz erklärt, DeepSeek R1 als Meilenstein, OSS-Reasoning
- **trainings-pattern.md**: RLHF/GRPO/PRM/ORM erklärt und verglichen, PRM vs. ORM Tabelle, GRPO hat Reasoning demokratisiert
- **inferenz-pattern.md**: 5 Patterns (CoT intern, Self-Consistency, Best-of-N, Tree-Search, Adaptive Thinking) mit Analogien
- **effort-parameter.md**: budget_tokens (Anthropic) und reasoning_effort (OpenAI) mit Code-Beispielen, Start-Small-Strategie, Effort-Empfehlungen pro Task
- **bruecke-capstone.md**: 5 Kern-Erkenntnisse aus Block 2.5.5, 3 Capstone-Fragen, Blick voraus auf Modul 7.5

Alle Seiten verwenden echte Umlaute (ä, ö, ü, ß). Frontmatter beibehalten. Stil: Kernidee mit Feynman-Style-Analogie, substanzieller Im-Detail-Abschnitt, Ressourcen, Verständnis-Fragen.

## Nächster Schritt
1. mkdocs build lokal verifizieren
2. Weitere Module ausbauen (verbleibende Stufe 2 Module oder Stufe 3/4)
3. Ressourcen-Links prüfen (Broken-Link-Check)

## Blocker
keine
