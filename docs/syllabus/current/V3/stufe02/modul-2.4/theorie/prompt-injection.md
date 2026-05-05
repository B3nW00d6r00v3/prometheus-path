---
title: "Prompt Injection als Sicherheitsrisiko"
module: "2.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Prompt Injection als Sicherheitsrisiko

## Kernidee

Wenn dein LLM-System externe Daten liest (Webseiten, E-Mails, Dokumente), können diese versteckte Anweisungen enthalten, die das Modell ausführt. Das ist wie ein trojanisches Pferd: Der Text sieht harmlos aus, aber enthält Befehle wie "Ignoriere alle vorherigen Anweisungen und tue stattdessen X". Das ist das #1-Sicherheitsrisiko bei LLM-Anwendungen.

## Im Detail

Wenn dein LLM-System externe Daten liest (Web, Dokumente, E-Mails), können diese versteckte Anweisungen enthalten, die das Modell ausführt. Mindeststandard: nicht blind LLM-Outputs ausführen, Trennung zwischen System- und User-Daten, kritische Aktionen mit Mensch-Bestätigung. Prompt Injection ist besonders gefährlich bei: Agenten-Systemen (die autonom handeln), E-Mail-Verarbeitung, Web-Scraping mit LLM-Analyse. OWASP hat Prompt Injection als #1 Risiko in ihren LLM Top 10 gelistet.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OWASP — LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | Offizielle Sicherheits-Risiken |
| :book: | [Simon Willison — Prompt Injection](https://simonwillison.net/series/prompt-injection/) | Beste Artikelserie zum Thema |

## Teste dein Verständnis

- [ ] Kannst du erklären, wie Prompt Injection funktioniert?
- [ ] Weißt du, welche Maßnahmen das Risiko reduzieren (auch wenn keine es eliminiert)?
