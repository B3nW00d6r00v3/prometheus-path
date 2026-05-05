---
title: "Sandboxing — nicht optional"
module: "6.5"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Sandboxing — nicht optional

## Kernidee

Ein Computer-Use-Agent kann beliebige Aktionen ausführen: Dateien löschen, E-Mails senden, Einkäufe tätigen, Passwörter eingeben. Sandboxing ist deshalb keine optionale Sicherheitsmaßnahme, sondern absolute Voraussetzung — bevor ein Computer-Use-Agent auch nur einmal auf einem echten System läuft.

## Im Detail

**Warum Computer Use ein anderes Sicherheitsprofil hat:**
Tool Use hat klare Grenzen: du definierst, welche Tools existieren, und was sie tun können. Computer Use kennt diese Grenzen nicht — der Agent sieht einen Bildschirm und kann (theoretisch) alles tun, was ein Mensch an diesem Computer tun kann.

**Minimum-Sandbox-Anforderungen:**
- **Isolierter User:** kein Root, kein sudo, eingeschränkte Dateisystem-Sicht.
- **Kein Zugriff auf Host-Filesystem:** Container-Volume-Mounts nur explizit für nötige Pfade.
- **Kein Netzwerk-Zugriff auf interne Netze:** der Agent soll nicht auf interne APIs oder Datenbanken zugreifen können.
- **Kein Zugriff auf echte Accounts:** kein Browser-Profile mit gespeicherten Passwörtern, kein eingeloggter Email-Account.
- **Zeitlimit:** Container-Timeout verhindert Endlos-Läufe.

**Sandboxing-Optionen 2026:**

| Option | Aufwand | Isolation | Kosten |
|---|---|---|---|
| Docker (eigener Container) | Mittel | Gut | Günstig |
| E2B (Cloud-Sandbox) | Niedrig | Sehr gut | Pay-per-Use |
| Modal (Serverless) | Niedrig | Sehr gut | Pay-per-Use |
| Browserbase | Niedrig | Browser-only | Pay-per-Use |
| VM (lokal) | Hoch | Sehr gut | Kostenfrei |

**Anthropic Reference-Container:**
Der offizielle Anthropic-Docker-Container implementiert bereits Minimum-Sandboxing. Für eigene Setups: als Basis verwenden.

**Was passiert ohne Sandbox:**
- Agent besucht eine Phishing-Site → speichert Credentials.
- Agent interpretiert einen böswilligen Website-Inhalt als Instruktion → löscht Dateien.
- Agent sendet E-Mails aus dem realen Email-Account.
- Agent tätigt Einkäufe mit gespeicherten Zahlungsmitteln.

**Production-Empfehlung:** E2B oder Modal für Cloud-Deployments (Setup in 10 Minuten, gute Isolation). Docker für lokale Experimente. Niemals direkt auf dem Host-System.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Computer Use Safety](https://docs.claude.com/en/docs/build-with-claude/computer-use#safety-considerations) | Sicherheits-Leitfaden |
| 📖 Docs | [E2B Docs](https://e2b.dev/docs) | Cloud-Sandbox |
| 📖 Docs | [Modal Docs](https://modal.com/docs) | Serverless-Sandbox |

## Teste dein Verständnis

- [ ] Nenne vier Minimum-Sandbox-Anforderungen für einen Computer-Use-Agent.
- [ ] Was kann in einem realen Worst-Case ohne Sandboxing passieren?
- [ ] Wähle eine Sandbox-Option für ein lokales Experiment und erkläre die Entscheidung.
