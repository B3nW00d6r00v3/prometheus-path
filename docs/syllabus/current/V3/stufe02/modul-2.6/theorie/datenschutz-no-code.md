---
title: "Datenschutz bei No-Code mit KI"
module: "2.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# Datenschutz bei No-Code mit KI

## Kernidee

Cloud-No-Code + Cloud-LLM = deine Daten reisen um die Welt. Wenn du personenbezogene Daten verarbeitest (Namen, E-Mails, Gesundheitsdaten), musst du wissen, wohin sie gehen. Die DSGVO-freundlichste Option: n8n self-hosted plus lokales Ollama. Daten verlassen nie deinen Rechner.

## Im Detail

### Das Problem: Datenflüsse in Cloud-Workflows

Wenn du einen Make.com-Workflow baust, der E-Mails durch OpenAI schickt, passiert Folgendes:

1. **Deine Daten** gehen an Make.com-Server (USA/EU, je nach Plan)
2. **Make.com** schickt sie an OpenAI-Server (USA)
3. **OpenAI** verarbeitet sie und schickt das Ergebnis zurück
4. **Make.com** leitet das Ergebnis an den nächsten Schritt weiter

Das sind mindestens zwei Drittanbieter, die deine Daten sehen. Für öffentliche Daten kein Problem. Für personenbezogene oder vertrauliche Daten ein DSGVO-Risiko.

### Drei Strategien für datenschutzkonformes No-Code

**Strategie 1: Nur nicht-sensible Daten verarbeiten**

Die einfachste Lösung: keine personenbezogenen Daten in den Workflow. Statt Rohdaten verarbeitest du:

- Zusammenfassungen statt Original-E-Mails
- Anonymisierte Texte (Namen/E-Mails entfernt)
- Öffentlich verfügbare Informationen (RSS-Feeds, Nachrichtenartikel)
- Eigene kreative Texte ohne Drittbezug

**Strategie 2: DSGVO-konforme Cloud-Anbieter wählen**

Wenn du personenbezogene Daten verarbeiten musst:

| Anforderung | Was du prüfen musst |
|-------------|---------------------|
| **Server-Standort** | EU-Server verfügbar? (Make.com: ja, Zapier: eingeschränkt) |
| **AVV** | Auftragsverarbeitungsvertrag vorhanden? (Enterprise-Pläne bieten das) |
| **Zero-Retention** | Werden Daten vom KI-Anbieter gespeichert? (API-Nutzung: meist nein) |
| **DPA** | Data Processing Agreement mit dem KI-Anbieter? |

Wichtig: Die **API-Nutzung** von OpenAI und Anthropic ist datenschutzrechtlich besser als die **Consumer-Chat-Nutzung**. Bei API-Calls werden Daten standardmäßig nicht zum Training verwendet. Bei Consumer-Chats ist Opt-out nötig.

**Strategie 3: Self-Hosting (maximale Kontrolle)**

Die sicherste Option: alles auf dem eigenen Server.

```
[n8n auf eigenem Server] → [Ollama auf eigenem Server] → [Ergebnis bleibt auf Server]
```

- **n8n self-hosted:** Docker-Container auf eigenem VPS (z.B. Hetzner, ~5 EUR/Monat)
- **Ollama:** Lokale LLMs (Llama 3, Mistral) ohne Cloud-Abhängigkeit
- **Ergebnis:** Kein einziges Datenbyte verlässt deinen Server

Setup in 30 Minuten:

```bash
# n8n starten
docker run -d --name n8n -p 5678:5678 n8nio/n8n

# Ollama installieren (auf demselben Server)
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.1
```

### Checkliste: Ist dein Workflow datenschutzkonform?

Geh diese Fragen durch, bevor du einen Workflow mit Daten produktiv schaltest:

- [ ] **Welche Daten fließen durch den Workflow?** (Personenbezogen? Vertraulich? Öffentlich?)
- [ ] **Wohin gehen die Daten?** (Welche Server? Welche Länder?)
- [ ] **Werden die Daten gespeichert?** (Vom No-Code-Tool? Vom KI-Anbieter?)
- [ ] **Gibt es einen AVV?** (Mit dem No-Code-Anbieter UND dem KI-Anbieter?)
- [ ] **Können die Daten zum Training verwendet werden?** (Bei API: meist nein. Bei Consumer: prüfen.)

### Datenschutz-Stufen nach Risiko

| Risiko | Datentyp | Empfohlene Lösung |
|--------|---------|-------------------|
| **Gering** | Öffentliche Daten, eigene Texte | Jede Plattform, jeder KI-Anbieter |
| **Mittel** | Interne Dokumente, Business-Daten | Cloud mit AVV, API-Nutzung (kein Training) |
| **Hoch** | Personenbezogene Daten (DSGVO) | EU-Cloud mit AVV + Zero-Retention |
| **Sehr hoch** | Gesundheit, Finanzen, Behörden | Self-Hosting (n8n + Ollama) oder Aleph Alpha |

### Für Stufe 2 reicht das

Du musst kein DSGVO-Experte werden. Die wichtigste Erkenntnis für jetzt:

1. **Sei dir bewusst**, welche Daten durch deinen Workflow fließen
2. **Für persönliche Projekte** ohne fremde Daten: nutze, was du willst
3. **Sobald fremde/sensible Daten beteiligt sind**: Self-Hosting oder Cloud mit AVV
4. **Im Zweifel**: Daten anonymisieren, bevor sie in den Workflow gehen

Tiefergehende DSGVO-Themen findest du in Modul 2.8 (KI-Workspaces für Teams & Unternehmen).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [BfDI -- KI und Datenschutz](https://www.bfdi.bund.de) | Deutsche Datenschutz-Behörde zu KI |
| :hammer_and_wrench: | [n8n Docker Compose](https://docs.n8n.io/hosting/installation/docker/) | Self-Hosting-Anleitung |
| :hammer_and_wrench: | [Ollama](https://ollama.com) | Lokale LLMs ohne Cloud |
| :book: | [OpenAI API Data Usage Policy](https://openai.com/enterprise-privacy) | Wie OpenAI API-Daten behandelt |

## Teste dein Verständnis

- [ ] Welche Daten fließen in einem typischen Make.com + OpenAI-Workflow wohin?
- [ ] Was ist der Unterschied zwischen API-Nutzung und Consumer-Chat-Nutzung aus Datenschutz-Sicht?
- [ ] Welche Self-Hosting-Option gibt dir maximale Datenkontrolle -- und was brauchst du dafür?
