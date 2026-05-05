---
title: "Streamlit für schnelle Prototypen"
module: "5.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Streamlit für schnelle Prototypen

## Kernidee

Streamlit verwandelt ein Python-Skript in Minuten in eine Web-App. Mit nativen Streaming-Hooks und Chat-Komponenten ist es der schnellste Weg vom RAG-Python-Code zum nutzbaren Demo — ohne TypeScript, ohne Frontend-Kenntnisse.

## Im Detail

Streamlit ist der De-Facto-Standard für schnelle ML/LLM-Demos in Python-Communities. Ein Python-Skript wird oben nach unten ausgeführt, Streamlit stellt für jede Anweisung eine UI-Komponente bereit.

**Minimales Chat-Interface mit Streaming:**

```python
import streamlit as st
import anthropic

st.title("Mein RAG-Assistent")

client = anthropic.Anthropic()

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Stell eine Frage..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    
    with st.chat_message("user"):
        st.markdown(prompt)
    
    with st.chat_message("assistant"):
        # Streaming mit Streamlit
        with st.spinner("Suche in Dokumenten..."):
            context = rag_system.retrieve(prompt)
        
        response_placeholder = st.empty()
        full_response = ""
        
        with client.messages.stream(
            model="claude-opus-4-5",
            max_tokens=1000,
            messages=[{"role": "user", "content": f"Kontext: {context}\n\nFrage: {prompt}"}]
        ) as stream:
            for text in stream.text_stream:
                full_response += text
                response_placeholder.markdown(full_response + "▌")
        
        response_placeholder.markdown(full_response)
    
    st.session_state.messages.append({"role": "assistant", "content": full_response})
```

**Stärken:**
- Python-only, kein JavaScript nötig.
- Chat-Komponenten, Streaming und Sidebar out-of-the-box.
- Multi-Page-Apps mit wenig Boilerplate.
- Ideal für: interne Tools, Stakeholder-Demos, persönliche Produktivitäts-Apps.

**Schwächen:**
- Kein echter Multi-User-Support ohne zusätzliche Infrastruktur.
- Session-State-Verwaltung kann tricky werden bei komplexen Apps.
- Nicht für Production-Apps mit 100+ gleichzeitigen Nutzern geeignet.

**Source-Citations in Streamlit:**

```python
with st.expander("Quellen"):
    for i, chunk in enumerate(retrieved_chunks):
        st.write(f"**Quelle {i+1}:** {chunk.source}")
        st.write(chunk.text[:200] + "...")
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Streamlit Docs](https://docs.streamlit.io) | Vollständige Dokumentation |
| 📖 Docs | [Streamlit LLM Tutorials](https://docs.streamlit.io/develop/tutorials/llms) | LLM-spezifische Anleitungen |

## Teste dein Verständnis

- [ ] Kannst du ein Chat-Interface mit Streaming in Streamlit aus dem Gedächtnis skizzieren?
- [ ] Weißt du, wie du `st.session_state` für Konversations-History nutzt?
- [ ] Für welche Art von Nutzergruppe ist Streamlit am besten geeignet?
