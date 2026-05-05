---
title: "Sandboxing für Tool-Execution"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Sandboxing für Tool-Execution

## Kernidee

Wenn ein Agent Code ausführen, Shell-Kommandos absetzen oder auf das Dateisystem zugreifen darf, ist Sandboxing keine Option — es ist Pflicht. Ohne Isolation kann ein manipulierter Prompt oder ein Fehler im Agent-Reasoning die gesamte Server-Infrastruktur gefährden.

## Im Detail

**Warum Sandboxing bei Agents?**

LLM-Agents mit Tool-Use können Code generieren und ausführen. Wenn dieser Code:
- direkt auf dem Host-System läuft: Zugriff auf alle Dateien, Prozesse, Netzwerk
- einen Prompt-Injection-Angriff ausführt: externer Angreifer übernimmt Code-Execution
- fehlerhafte Logik ausführt: unbeabsichtigte Datei-Löschung, unendliche Schleifen

Sandbox-Isolation verhindert, dass Code außerhalb des vorgesehenen Containers wirkt.

**Die wichtigsten Sandboxing-Ansätze 2026:**

**E2B — Cloud-Sandboxes (empfohlen für Einstieg)**
- Python-Execution as Service: Code läuft in isoliertem Container auf E2B-Infrastruktur
- API-basiert: `sandbox.run_code("print('hello')")`
- Timeout-Management eingebaut
- Bezahlmodell: nach Nutzung, kein eigenes Server-Setup
- [E2B Docs](https://e2b.dev/docs)

**Modal — Serverless mit Sandbox-Optionen**
- Serverless Python-Execution mit feingranularer Ressourcen-Kontrolle
- Gut für Agents, die kurze, unabhängige Code-Snippets ausführen
- Netzwerk-Isolation konfigurierbar

**Daytona — Dev-Environments als Sandboxen**
- Vollständige Dev-Environment-Isolation
- Für komplexere Agents, die nicht nur Code-Snippets, sondern ganze Projekte verwalten

**Docker-basiertes Self-Hosting**
- Maximale Kontrolle, kein Vendor-Lock-in
- Für On-Premise oder DSGVO-sensitive Umgebungen
- Aufwand: Sandbox-Container selbst bauen und verwalten

**WebContainers — Browser-basierte Sandbox**
- Node.js im Browser, kein Server nötig
- Für Anwendungen, wo Agent-Code im Browser des Users läuft

**Sandboxing-Regeln:**

1. **Netzwerk-Isolation**: Sandbox darf standardmäßig kein Netzwerk erreichen (Allowlisting für Ausnahmen)
2. **Dateisystem-Isolation**: Sandbox hat kein Zugriff auf Host-Dateisystem
3. **Ressourcen-Limits**: CPU, Memory, Disk — verhindert DoS durch schlechten Code
4. **Timeout**: jede Code-Execution hat ein Maximum (typisch 30-60 Sekunden)
5. **Audit-Log**: jede Execution wird geloggt (Input-Code + Ergebnis)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [E2B Docs](https://e2b.dev/docs) | Einfachster Einstieg in Cloud-Sandboxes |
| 🛠️ Tool | [Modal](https://modal.com) | Serverless mit feiner Ressourcen-Kontrolle |
| 🐙 Tool | [Daytona](https://daytona.io) | Dev-Environments als Sandboxen |

## Teste dein Verständnis

- [ ] Warum ist Sandboxing bei Code-ausführenden Agents Pflicht, nicht optional?
- [ ] Welche fünf Sandboxing-Regeln sollte jede Sandbox-Umgebung einhalten?
- [ ] Wann ist Docker-basiertes Self-Hosting gegenüber E2B die bessere Wahl?
