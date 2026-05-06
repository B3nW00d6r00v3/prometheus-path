---
title: "Self-Hosting vs. Cloud"
module: "2.8"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-11"
---

# Self-Hosting vs. Cloud

## Kernidee

Self-Hosting gibt maximale Kontrolle -- Daten verlassen nie deinen Server, du bist von keinem Anbieter abhängig. Aber es erfordert technisches Know-how und Wartungsaufwand. Cloud-Lösungen sind sofort einsatzbereit und immer aktuell, aber du gibst Datenkontrolle in Teilen ab. Die richtige Wahl hängt von deinem Team, deiner Infrastruktur und deinen Compliance-Anforderungen ab.

## Im Detail

### Option 1: Self-Hosting

Du installierst den KI-Workspace auf deinem eigenen Server (physisch oder VPS) und verwaltest alles selbst.

**Tools für Self-Hosting:**

| Tool | Beschreibung | Stack |
|------|-------------|-------|
| **Synaplan** | Multi-Modell-Workspace mit RAG, Chatbots | PHP 8.3+, Docker |
| **LibreChat** | Open-Source ChatGPT-Alternative, Multi-Modell | Node.js, Docker |
| **Open WebUI** | Chat-Interface über Ollama | Python, Docker |

**Vorteile:**

- Volle Datenkontrolle -- nichts verlässt deinen Server
- Keine laufenden Plattform-Kosten (nur Server + API-Kosten)
- Keine Abhängigkeit von einem SaaS-Anbieter
- Bei hohem Volumen günstiger als Cloud-Abos
- Maximale DSGVO-Compliance -- du bist der Datenverarbeiter

**Nachteile:**

- Technisches Setup erforderlich (Docker, Server-Admin, Netzwerk)
- Updates, Backups und Security-Patches selbst managen
- Kein Support-Team bei Problemen
- Hardware-Investition oder VPS-Kosten

### Option 2: Cloud (EU-gehostet)

Du nutzt einen SaaS-Workspace eines Anbieters, der die Infrastruktur betreibt.

**Tools für Cloud:**

| Tool | Beschreibung | Server |
|------|-------------|--------|
| **Langdock** | Enterprise-Workspace mit 40+ Integrationen | Frankfurt |
| **Beyond the Loop** | All-in-One KI-Workspace | EU |
| **InnoGPT** | DSGVO-fokussierter Workspace | Deutsches RZ |
| **Lurus** | Deutsche KI-Plattform | Deutschland |

**Vorteile:**

- Kein Setup -- Account erstellen, Team einladen, loslegen
- Immer die neueste Version, automatische Updates
- Dedizierter Support bei Problemen
- Integrationen mit bestehenden Tools (Confluence, Notion, Google Drive)

**Nachteile:**

- Monatliche Kosten pro Nutzer
- Vertrauen in den Anbieter nötig (auch bei EU-Hosting)
- Vendor-Lock-in: Wechsel zu anderem Anbieter kann aufwändig sein
- Abhängigkeit von der Verfügbarkeit des Anbieters

### Option 3: Lokale Modelle via Ollama

Statt Cloud-APIs (OpenAI, Anthropic) kannst du Open-Source-Modelle komplett lokal auf eigener Hardware laufen lassen -- über Ollama als Backend.

**Vorteile:**

- Keine API-Kosten -- nach der Hardware-Investition kostenlos
- Absolute Privatsphäre -- Daten verlassen nie den Rechner
- Keine Internet-Abhängigkeit nach dem Modell-Download
- Ideal zum Experimentieren und für nicht-kritische Aufgaben

**Nachteile:**

- Hardware-Anforderungen: Für brauchbare Modelle (Llama 3.1 70B, Mistral Large) brauchst du mindestens 32 GB RAM, besser eine GPU mit 24 GB VRAM
- Modell-Qualität: Lokale Modelle sind Stand Mai 2026 merkbar schwächer als GPT-4o oder Claude Sonnet. Für einfache Aufgaben ausreichend, für komplexe Analyse oder kreatives Schreiben oft nicht
- Kein Web-Zugriff, keine Tool-Integrationen

**Kombination als Best Practice:** Synaplan oder LibreChat self-hosted mit Ollama für nicht-sensible Aufgaben UND Cloud-API-Keys (OpenAI, Anthropic) für Aufgaben, die starke Modelle brauchen. So hast du das Beste aus beiden Welten.

### LibreChat als OSS-Alternative

[LibreChat](https://github.com/danny-avila/LibreChat) verdient eine separate Erwähnung als die ausgereifteste Open-Source-Alternative zu ChatGPT Teams:

- **Multi-Modell:** OpenAI, Anthropic, Google, Azure, lokale Modelle -- alle in einem Interface
- **Self-hostbar:** Docker Compose auf eigenem Server, oder Deployment auf Azure/AWS/Hetzner
- **Features:** Konversations-Management, Presets, Plugins, Datei-Upload, Code-Ausführung
- **Community:** Aktive Open-Source-Community, regelmäßige Updates
- **Kosten:** Kostenlos (nur Server + API-Kosten)

Der Unterschied zu Synaplan: LibreChat ist stärker auf das Chat-Interface fokussiert (ChatGPT-Ersatz), während Synaplan mehr Richtung Workspace geht (RAG, einbettbare Chatbots, Team-Features).

### Entscheidungshilfe

| Kriterium | Self-Hosting | Cloud (EU) | Lokal (Ollama) |
|-----------|:----------:|:----------:|:--------------:|
| Setup-Aufwand | Hoch | Niedrig | Mittel |
| Laufende Kosten | Server + API | Abo/Nutzer | Hardware |
| Datenkontrolle | Maximal | Hoch (EU) | Maximal |
| Modell-Qualität | Wie Cloud-API | Wie Cloud-API | Eingeschränkt |
| Wartung | Selbst | Anbieter | Selbst |
| Integrationen | Begrenzt | Umfangreich | Keine |
| Best for | Tech-Teams | Business-Teams | Einzelpersonen |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Synaplan Docs](https://synaplan.com/docs) | Self-Hosting-Anleitung |
| :hammer_and_wrench: | [LibreChat GitHub](https://github.com/danny-avila/LibreChat) | Open-Source ChatGPT-Alternative |
| :hammer_and_wrench: | [Open WebUI](https://openwebui.com) | Lokales Chat-Interface |
| :hammer_and_wrench: | [Ollama](https://ollama.com) | Lokale Modelle auf eigener Hardware |
| :book: | [Hetzner Cloud](https://www.hetzner.com/cloud/) | Günstiges EU-Hosting für Self-Hosting |

## Teste dein Verständnis

- [ ] Nenne je zwei Vor- und Nachteile von Self-Hosting gegenüber Cloud-Lösungen.
- [ ] Für welches Team-Profil eignet sich Ollama als alleiniges Backend -- und für welches nicht?
- [ ] Was ist der Unterschied zwischen LibreChat und Synaplan?
