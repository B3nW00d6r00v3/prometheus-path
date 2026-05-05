---
title: "Chainlit — Conversational UIs"
module: "5.5"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Chainlit — Conversational UIs

## Kernidee

Chainlit ist das spezialisierte Python-Framework für konversationelle UIs: Streaming, Source-Citations und Step-Visualisierung sind eingebaut, statt selbst gebaut. Für Chat-Apps ohne TypeScript-Aufwand ist Chainlit oft der schnellste Weg zur produktiven UI.

## Im Detail

Chainlit ist Python, aber deutlich mehr auf Chat-Flows zugeschnitten als Streamlit. Kernstärken:

- **Streaming:** Native Token-by-Token-Anzeige.
- **Steps:** Zeige jeden Schritt deiner RAG-Pipeline als klappbaren Schritt im UI ("Suche gestartet", "3 Chunks gefunden", "Antwort generiert").
- **Source-Citations:** `cl.source()` fügt direkt klickbare Quellenangaben zur Antwort hinzu.
- **Human Feedback:** Eingebauter 👍/👎-Button für einfaches User-Feedback.

**Minimales Chainlit-Beispiel:**

```python
import chainlit as cl

@cl.on_message
async def main(message: cl.Message):
    # Step: Retrieval visualisieren
    async with cl.Step(name="Dokumente suchen") as step:
        chunks = await rag_system.retrieve(message.content)
        step.output = f"{len(chunks)} relevante Chunks gefunden"
    
    # Antwort mit Streaming
    msg = cl.Message(content="")
    async for token in rag_system.generate_stream(message.content, chunks):
        await msg.stream_token(token)
    
    # Source-Citations
    sources = [cl.Text(name=c.source, content=c.text[:200]) for c in chunks]
    msg.elements = sources
    await msg.send()
```

**Starten:**
```bash
pip install chainlit
chainlit run app.py -w
```

**Wann Chainlit vs. Streamlit?**

| | Chainlit | Streamlit |
|---|---|---|
| Chat-fokussierte App | ✅ Besser | ✅ Geht |
| Step-Visualisierung | ✅ Eingebaut | Manuell |
| Source-Citations | ✅ Native | Manuell |
| Nicht-Chat-UI | ❌ Unpassend | ✅ Flexibler |
| Lernkurve | Mittel | Niedrig |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Chainlit Docs](https://docs.chainlit.io) | Vollständige Dokumentation |

## Teste dein Verständnis

- [ ] Was unterscheidet `cl.Step` von einer normalen `st.write`-Ausgabe in Streamlit?
- [ ] Wann würdest du Chainlit gegenüber Vercel AI SDK bevorzugen?
- [ ] Wie würdest du Source-Citations in Chainlit implementieren?
