---
title: "Workflow-Logik: Trigger, Aktion, Bedingung, Output"
module: "2.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Workflow-Logik: Trigger, Aktion, Bedingung, Output

## Kernidee

Jeder No-Code-Workflow folgt demselben Grundmuster, egal welche Plattform: Etwas passiert (Trigger), dadurch wird etwas getan (Aktion), eine Entscheidung wird getroffen (Bedingung), und ein Ergebnis kommt raus (Output). Das ist wie eine Dominokette -- ein Stein stößt den nächsten an. Wenn du dieses Muster verstehst, kannst du auf jeder Plattform arbeiten.

## Im Detail

### Die vier Grundbausteine

**1. Trigger -- Was den Workflow startet**

Ein Trigger ist das Ereignis, das die Kette in Gang setzt. Ohne Trigger passiert nichts.

Häufige Trigger-Typen:

- **Zeitgesteuert (Schedule):** Jeden Morgen um 8 Uhr, alle 15 Minuten, jeden Montag
- **Ereignisbasiert (Event):** Neue E-Mail eingetroffen, Datei hochgeladen, Formular abgeschickt
- **Webhook:** Eine andere App schickt eine HTTP-Anfrage an deinen Workflow
- **Manuell:** Du klickst "Jetzt ausführen" -- nützlich zum Testen

In Make.com ist der Trigger immer das erste Modul (runder Kreis). In n8n ist es der Start-Node. In Zapier heißt er einfach "Trigger".

**2. Aktion -- Was der Workflow tut**

Aktionen sind die Arbeitsschritte zwischen Trigger und Output.

Häufige Aktions-Typen:

- **API-Aufruf:** Text an LLM senden, Daten von einer API abrufen
- **Daten schreiben:** Zeile in Google Sheet einfügen, CRM-Kontakt erstellen
- **Kommunikation:** E-Mail senden, Slack-Nachricht posten
- **Datei-Operationen:** PDF erstellen, Datei in Cloud-Drive speichern
- **Transformation:** JSON parsen, Text formatieren, Daten zusammenführen

**3. Bedingung -- Entscheidungslogik**

Bedingungen steuern den Workflow-Verlauf basierend auf Daten. Sie machen aus einer linearen Kette einen intelligenten Prozess.

Häufige Bedingungs-Typen:

- **If/Else:** Wenn Sentiment positiv -> Pfad A, sonst -> Pfad B
- **Filter:** Nur weiterleiten, wenn Dateigröße > 1MB
- **Router (Make.com):** Daten auf mehrere Pfade aufteilen
- **Switch:** Verschiedene Pfade je nach Kategorie (dringend, normal, niedrig)

Beispiel: Ein KI-Workflow klassifiziert E-Mails als "dringend", "normal" oder "Spam". Je nach Ergebnis geht es einen anderen Pfad:

- Dringend -> Sofort Slack-Benachrichtigung + SMS
- Normal -> In Aufgaben-Liste eintragen
- Spam -> Archivieren und ignorieren

**4. Output -- Das Ergebnis**

Der Output ist das Ziel des Workflows -- was am Ende rauskommt.

Häufige Output-Typen:

- **Nachricht:** Slack-Message, E-Mail, Push-Benachrichtigung
- **Datei:** PDF, CSV-Export, Bild
- **Datenbank-Eintrag:** Zeile in Airtable, Notion-Eintrag, CRM-Update
- **Webhook:** Signal an einen anderen Workflow oder eine externe App

### Beispiel-Workflow: Täglicher KI-Newsletter

```
[Trigger: Jeden Morgen 7 Uhr]
    ↓
[Aktion: RSS-Feeds von 5 Tech-Blogs abrufen]
    ↓
[Aktion: Alle Artikel-Texte an Claude senden]
    → Prompt: "Fasse diese 5 Artikel in je 2 Sätzen zusammen"
    ↓
[Bedingung: Hat die KI eine gültige Zusammenfassung geliefert?]
    ↓ Ja                    ↓ Nein
[Aktion: E-Mail senden]    [Aktion: Fehler-Log + Slack-Alert]
    ↓
[Output: Newsletter im Postfach]
```

### Das Muster ist universell

Diese vier Bausteine gelten nicht nur für No-Code -- sie entsprechen der Event-Driven Architecture in der Softwareentwicklung:

| No-Code-Begriff | Code-Equivalent |
|-----------------|-----------------|
| Trigger | Event Listener, Webhook Handler, Cron Job |
| Aktion | Funktion, API Call, Service |
| Bedingung | if/else, switch/case, Pattern Matching |
| Output | Response, File Write, Database Insert |

Wer Workflow-Logik in No-Code versteht, hat die Grundlage für Event-Driven Programming in Code -- ein Vorsprung für Modul 2.7.

### Fehlerbehandlung nicht vergessen

Jeder Workflow kann fehlschlagen: API-Timeout, ungültige Daten, Rate Limits. Gute Workflows haben:

- **Error-Handler:** Was passiert, wenn ein Schritt fehlschlägt? (Make.com: Error-Route, n8n: Error-Workflow)
- **Retry-Logik:** Fehlgeschlagene Schritte automatisch wiederholen
- **Benachrichtigung:** Dich per Slack oder E-Mail informieren, wenn etwas schiefgeht
- **Fallback:** Alternative Aktion, wenn der Hauptweg nicht funktioniert

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Make -- Scenario Basics](https://www.make.com/en/help/scenarios) | Trigger-Aktion-Logik in Make |
| :hammer_and_wrench: | [n8n -- Workflow Concepts](https://docs.n8n.io/workflows/) | Workflow-Konzepte in n8n |
| :book: | [Zapier -- How Zaps Work](https://zapier.com/how-it-works) | Einfache Erklärung der Grundlogik |

## Teste dein Verständnis

- [ ] Kannst du die vier Grundbausteine eines Workflows benennen und je ein Beispiel geben?
- [ ] Beschreibe einen Workflow für folgendes Szenario: "Wenn ein neuer Eintrag in einem Google Sheet erscheint, soll die KI den Text zusammenfassen und das Ergebnis per Slack an dich schicken." Welche Trigger, Aktionen, Bedingungen und Outputs brauchst du?
- [ ] Warum ist Fehlerbehandlung in Workflows wichtig -- und was kann passieren, wenn sie fehlt?
