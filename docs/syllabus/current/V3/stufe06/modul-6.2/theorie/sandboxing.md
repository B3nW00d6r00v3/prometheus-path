---
title: "Sandboxing für gefährliche Tools"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Sandboxing für gefährliche Tools

## Kernidee

Wenn dein Agent Code ausführen oder Shell-Commands aufrufen kann, brauchst du Sandboxing — sonst kann ein verirrter Agent dein System beschädigen, Dateien löschen oder Netzwerkzugriff missbrauchen. Sandboxing ist keine Optimierung, sondern Sicherheitspflicht.

## Im Detail

**Warum Sandboxing?**  
Ein Agent mit Code-Execution kann — durch Fehler oder Prompt-Injection — beliebigen Code auf dem Host ausführen. Ohne Sandbox: `rm -rf /`, Netzwerkzugriff auf interne Services, Credential-Exfiltration möglich.

**Sandboxing-Optionen 2026:**

**(1) E2B** (cloud-basiert)  
Ephemere Cloud-Sandboxes, die nach jedem Run gelöscht werden. Gut dokumentiert, einfache API. Nachteil: Cloud-Abhängigkeit, Datenschutz prüfen.

**(2) Modal** (serverless mit Sandbox)  
Serverless Functions mit Sandbox-Isolation. Stark für parallele Sandbox-Runs. Nachteil: Vendor-Lock-in.

**(3) Daytona** (Dev Environments)  
Sandbox als vollständige Dev-Environment. Nachteil: mehr Overhead als E2B für einfache Tasks.

**(4) Docker-basierte Sandbox** (selbst gehostet)  
`docker run --rm --network=none --read-only ...` als minimalste Sandbox. Gut für OSS-Pfad, volle Kontrolle. Nachteil: Setup-Aufwand.

**OSS-Empfehlung:** Docker mit eingeschränktem User, `--network=none`, `--read-only`, gemountetes tmp-Directory.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [E2B Docs](https://e2b.dev/docs) | Cloud-Sandboxes |
| 🛠️ Tool | [Modal](https://modal.com) | Serverless Sandbox |
| 📖 Docs | [Docker Security](https://docs.docker.com/engine/security/) | Self-hosted Sandbox-Grundlagen |

## Teste dein Verständnis

- [ ] Nenne zwei konkrete Risiken eines Agents ohne Code-Sandbox.
- [ ] Was ist das minimale Docker-Command für eine sichere Code-Sandbox?
- [ ] Wann wählst du E2B gegenüber einer eigenen Docker-Sandbox?
