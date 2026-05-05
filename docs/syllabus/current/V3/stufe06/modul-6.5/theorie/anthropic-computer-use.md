---
title: "Anthropic Computer Use"
module: "6.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Anthropic Computer Use

## Kernidee

Anthropic Computer Use (Oktober 2024) war der Pionier der Pattern-Klasse: Claude bekommt Screenshots als Input, gibt strukturierte Aktionen zurück, und eine Sandbox-Umgebung führt sie aus. Anthropic stellt einen vollständigen Reference-Docker-Container bereit, der die Sandbox konfiguriert und ein Web-Interface für Debugging bietet.

## Im Detail

**Technischer Ablauf:**
1. User gibt Task: "Buche ein Hotel in Berlin für nächste Woche."
2. Claude bekommt einen Screenshot der Browser-Umgebung.
3. Claude analysiert: "Ich sehe eine Browser-Startseite. Ich muss zu booking.com navigieren."
4. Claude gibt zurück: `{"action": "type", "text": "booking.com\n"}` (Browser-Adressleiste).
5. Screenshot wird aufgenommen, zurückgesendet.
6. Claude sieht Booking.com-Startseite. Wählt nächste Aktion.
7. Wiederholt bis Task erledigt.

**Reference-Docker-Container (Anthropic Quickstarts):**
- Enthält: Virtual Display (Xvfb), Browser (Chrome), VNC-Server, Web-Interface für Monitoring.
- Startet mit `docker-compose up`.
- Web-Interface auf `localhost:8080`: Echtzeit-Screenshots, Tool-Call-Logs.
- Sichere Sandbox: kein Zugriff auf Host-Filesystem, kein Zugriff auf Host-Network.

**Stärken:**
- Sehr gut dokumentiert, MIT-lizenziert.
- Native MCP-Integration: MCP-Tools können parallel zu Computer-Use-Aktionen genutzt werden.
- Robuste Pattern für Desktop- und Browser-Tasks.
- Extended Thinking: Claude kann ausführlicher nachdenken vor komplexen Navigations-Entscheidungen.

**Schwächen:**
- Noch Beta-Qualität (Mai 2026): manchmal falsche Klick-Koordinaten, fragile UI-Erkennung.
- Kosten: mehrere Screenshots pro Iteration × LLM-Call-Kosten. Ein 30-Step-Task kann $2-5 kosten.
- Latenz: Screenshot + LLM-Call + Aktion = 3-8 Sekunden pro Step.

**Tipps für den Einstieg:**
- Beginne mit einfachen, deterministischen Tasks (Formular ausfüllen mit bekannten Daten).
- Dokumentiere Failure-Modes: wo klickt der Agent falsch? Welche UI-Elemente erkennt er nicht?
- Nutze das Web-Interface für Debugging — Echtzeit-Screenshots sind sehr hilfreich.

*Verfallsdatum: Aug 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Computer Use](https://docs.claude.com/en/docs/build-with-claude/computer-use) | Hauptdokumentation |
| 📖 Demo | [Computer Use Demo Repo (GitHub)](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) | Quickstart |
| 📖 Safety | [Anthropic — Computer Use Safety](https://docs.claude.com/en/docs/build-with-claude/computer-use#safety-considerations) | Sicherheits-Hinweise |

## Teste dein Verständnis

- [ ] Beschreibe den technischen Ablauf eines Computer-Use-Agent-Runs in 5 Schritten.
- [ ] Was enthält der Reference-Docker-Container von Anthropic — und warum ist er wichtig?
- [ ] Nenne zwei Schwächen von Anthropic Computer Use (Mai 2026-Stand).
