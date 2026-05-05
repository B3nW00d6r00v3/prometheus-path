---
title: "Open WebUI als lokale ChatGPT-Alternative"
module: "5.5"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Open WebUI als lokale ChatGPT-Alternative

## Kernidee

Open WebUI ist eine vollständige, selbst-gehostete ChatGPT-ähnliche Oberfläche für lokale LLMs (via Ollama) und Cloud-APIs. Mit eingebautem RAG-Support, MCP-Integration und hochgradig anpassbaren Pipelines ist es die OSS-Alternative zu ChatGPT Plus — ohne Account und ohne Datenschutzbedenken.

## Im Detail

**Was Open WebUI bietet:**

- **ChatGPT-ähnliche UI:** Konversationen, Chat-History, Modell-Auswahl.
- **Ollama-Integration:** Direkte Anbindung an lokale Modelle (llama3, qwen2.5, mistral, etc.).
- **RAG eingebaut:** Dokumente hochladen, indexieren, abfragen — ohne Code.
- **MCP-Support:** Verbinde MCP-Server direkt in der UI.
- **Functions und Pipelines:** Anpassbar mit Python-Code für eigene Logik.
- **Selbst-hosted:** Deine Daten bleiben lokal.

**Setup mit Docker:**

```bash
docker run -d \
  -p 3000:8080 \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main

# Dann im Browser: http://localhost:3000
```

**Mit Ollama:**

```bash
# Ollama läuft auf localhost:11434
docker run -d \
  -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

**Wann Open WebUI statt Custom-Frontend?**

Wenn dein Use-Case ein persönliches Produktivitäts-Tool oder lokales KI-System ist, und du keine spezifische UI-Logik brauchst: Open WebUI spart dir das gesamte Frontend. Für Production-Apps mit spezifischen UX-Anforderungen: Streamlit, Chainlit oder Vercel AI SDK.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠 Tool | [Open WebUI](https://openwebui.com) | Offizielle Seite |
| 📦 Code | [Open WebUI GitHub](https://github.com/open-webui/open-webui) | Code und Docs |

## Teste dein Verständnis

- [ ] Kannst du Open WebUI in einem Satz erklären?
- [ ] Welches Docker-Kommando startet Open WebUI mit Ollama-Anbindung?
- [ ] Wann ist Open WebUI die bessere Wahl als ein selbst gebautes Frontend?
