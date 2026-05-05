---
title: "DSGVO und RAG"
module: "5.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
expires: null
---

# DSGVO und RAG

## Kernidee

Wenn deine RAG-Dokumente personenbezogene Daten enthalten, greifen DSGVO-Pflichten: Auftragsverarbeitungsvertrag mit dem Embedding-Provider, ein Lösch-Pfad für Embeddings (Right to be Forgotten), und ein Audit-Trail für Quell-Zitationen.

## Im Detail

**Wann ist DSGVO relevant für RAG?**

Wenn deine Dokumente personenbezogene Daten enthalten: Kundennamen, E-Mails, Adressen, Gesundheitsdaten, etc. Bei rein öffentlichen oder anonymisierten Daten ist das Risiko gering.

**Drei Pflicht-Punkte:**

**1. Auftragsverarbeitungsvertrag (AVV) mit dem Embedding-Provider:**

Wenn du personenbezogene Daten an einen externen API-Provider sendest (OpenAI, Cohere, Voyage AI), brauchst du einen AVV. Die großen Provider haben AVV-Vorlagen. OSS-Alternative: Embedding lokal mit BGE-M3 oder Qwen3-Embedding — kein Datenabfluss.

**2. Right-to-be-Forgotten — Lösch-Pfad für Embeddings:**

Wenn eine Person ihre Daten löschen lassen will, müssen die Embeddings aus der Vector-DB entfernt werden.

- **pgvector:** einfaches `DELETE FROM documents WHERE source_doc_id = ?`
- **ChromaDB:** `collection.delete(where={"source": "..."})`
- **Pinecone:** Delete-by-ID oder -Metadata

Wichtig: Embeddings sind technisch keine personenbezogenen Daten per se (Vektoren lassen keine Rückschlüsse auf Personen zu), aber die Quelldokumente schon. Vorsichtsmodus: beides löschen.

**3. Audit-Trail — welche Quellen welche Antwort:**

Jede RAG-Antwort sollte protokollieren, welche Chunks sie genutzt hat. Bei Vorfällen (falsche Auskunft, Datenschutzbeschwerde) ist der Audit-Trail unverzichtbar.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Behörde | [BfDI — KI und Datenschutz](https://www.bfdi.bund.de) | Offizielle deutsche Datenschutzbehörde |

## Teste dein Verständnis

- [ ] Enthält dein RAG-Datensatz personenbezogene Daten — ja oder nein?
- [ ] Weißt du, wie du in deiner gewählten Vector-DB Dokumente nach Quelle löschst?
- [ ] Hast du in deiner RAG-Implementierung Source-Citations vorgesehen?
