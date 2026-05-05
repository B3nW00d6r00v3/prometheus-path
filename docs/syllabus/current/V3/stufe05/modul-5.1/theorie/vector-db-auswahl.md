---
title: "Vector-DB-Auswahl 2026"
module: "5.1"
type: theorie
fast_track: true
effort: "15min"
stability: live
expires: "2026-08"
---

# Vector-DB-Auswahl 2026

## Kernidee

Kein Pinecone-Default mehr. Die richtige Vector-DB hängt von Use-Case, Datenmenge und bestehender Infrastruktur ab. Für die meisten Projekte mit weniger als 5 Millionen Vektoren und einer existierenden PostgreSQL-Infrastruktur ist pgvector der pragmatischste Weg.

## Im Detail

**Faustregel 2026:**

> Für <5M Vektoren mit existierender Postgres-Infra → pgvector.
> Für Prototypen lokal → ChromaDB.
> Für Performance mit OSS → Qdrant.
> Für nativen Hybrid-Search → Weaviate.
> Für schnelle Cloud-Production → Pinecone.
> Für Millionen-Skala → Milvus/Zilliz.

**Optionen im Überblick:**

| DB | Typ | Stärke | Schwäche |
|----|-----|--------|----------|
| **pgvector** | Postgres-Extension | Kein extra Service, SQL nativ, einfach | Nicht für massive Skala |
| **ChromaDB** | Embedded/Server | Lokal einfachstes Setup | Nicht für Production |
| **Qdrant** | OSS Server | Performance, Filter, OSS | Extra Service nötig |
| **Weaviate** | OSS Server | Hybrid Search nativ | Komplex |
| **Pinecone** | Managed Cloud | Schnell zur Production | Kosten, Lock-in |
| **Milvus/Zilliz** | OSS + Managed | Massive Skala | Overhead für kleine Projekte |

**pgvector als Production-Default:**

```sql
-- pgvector Setup (nach Docker-Start mit postgres + pgvector)
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE documents (
  id bigserial PRIMARY KEY,
  content text,
  embedding vector(1536)
);
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops);
```

Mit Docker lokal in 5 Minuten einsatzbereit.

*Verfallsdatum: August 2026 — DB-Landscape ändert sich.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [pgvector GitHub](https://github.com/pgvector/pgvector) | Postgres Vector Extension |
| 📖 Vergleich | [Cloudmagazin — pgvector vs Alternativen 2026](https://www.cloudmagazin.com) | Aktuelle Gegenüberstellung |

## Teste dein Verständnis

- [ ] Für deinen Use-Case: welche Vector-DB wählst du — und warum?
- [ ] Kannst du erklären, warum pgvector für viele Projekte pragmatischer als Pinecone ist?
- [ ] Weißt du, wann Weaviate gegenüber pgvector sinnvoll ist?
