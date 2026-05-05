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

Jeder No-Code-Workflow folgt demselben Grundmuster, egal welche Plattform: Etwas passiert (Trigger), dadurch wird etwas getan (Aktion), eine Entscheidung wird getroffen (Bedingung), und ein Ergebnis kommt raus (Output). Das ist wie eine Dominokette -- ein Stein stoesst den naechsten an. Wenn du dieses Muster verstehst, kannst du auf jeder Plattform arbeiten.

## Im Detail

Die vier Grundbausteine in jedem No-Code-Tool:

1. **Trigger** -- was den Workflow startet. Beispiele: neue E-Mail eingetroffen, Datei in Cloud-Drive hochgeladen, Zeitplan (jeden Morgen 8 Uhr), Webhook-Aufruf von einer anderen App.

2. **Aktion** -- was der Workflow tut. Beispiele: Text an LLM senden, Daten in Tabelle schreiben, E-Mail versenden, API aufrufen, Datei erstellen.

3. **Bedingung** -- Entscheidungslogik im Workflow. Beispiele: wenn KI-Output Kategorie "dringend" enthaelt -> anderer Pfad, wenn Dateigroesse > 10MB -> Fehler-Benachrichtigung, wenn Wochentag = Montag -> zusaetzliche Aktion.

4. **Output** -- das Ergebnis des Workflows. Beispiele: Slack-Nachricht, E-Mail, Datei in Ordner, Datenbank-Eintrag, Webhook an andere App.

Diese Logik gilt ueberall -- Make, n8n, Zapier, und auch in Code (dort heisst es Event-Driven Architecture).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Make — Workflow Basics](https://www.make.com/en/help/scenarios) | Trigger-Aktion-Logik in Make |
| :hammer_and_wrench: | [n8n — Workflow Concepts](https://docs.n8n.io/workflows/) | Workflow-Konzepte in n8n |

## Teste dein Verstaendnis

- [ ] Kannst du die vier Grundbausteine eines Workflows benennen?
- [ ] Kannst du einen einfachen Workflow in Trigger-Aktion-Bedingung-Output beschreiben?
