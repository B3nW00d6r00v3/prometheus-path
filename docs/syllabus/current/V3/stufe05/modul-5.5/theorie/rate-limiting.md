---
title: "Rate Limiting per User"
module: "5.5"
type: theorie
fast_track: false
effort: "5min"
stability: green
---

# Rate Limiting per User

## Kernidee

Ohne Rate Limiting kann ein einziger Power-User oder ein Bot dein gesamtes API-Budget in Minuten verbrauchen. Pro-User-Rate-Limits sind die einfachste und effektivste Cost-Protection für öffentlich zugängliche LLM-Apps.

## Im Detail

**Das Problem ohne Rate Limiting:**

- GPT-4o: ~$30/1M Input-Tokens.
- Ein böswilliger oder unvorsichtiger Nutzer sendet 1.000 lange Anfragen.
- Du zahlst die Rechnung, nicht der Nutzer.
- Oder: ein Bot nutzt deine App als kostenlosen LLM-Proxy.

**Implementierungsoptionen:**

**1. Upstash Rate Limit (serverless, Redis-basiert):**

```typescript
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 Anfragen pro Minute
})

export async function POST(req: Request) {
    const { userId } = auth()
    
    const { success, limit, reset, remaining } = await ratelimit.limit(userId)
    
    if (!success) {
        return new Response("Too Many Requests", {
            status: 429,
            headers: {
                "X-RateLimit-Limit": limit.toString(),
                "X-RateLimit-Reset": reset.toString(),
                "X-RateLimit-Remaining": remaining.toString()
            }
        })
    }
    
    // Anfrage verarbeiten...
}
```

**2. Helicone für Monitoring + Rate Limiting:**

```typescript
// Helicone als Proxy nutzen
const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    baseURL: "https://anthropic.helicone.ai",
    defaultHeaders: {
        "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
        "Helicone-User-Id": userId, // Pro-User-Tracking
    }
})
```

Helicone trackt Token-Verbrauch pro User und ermöglicht Dashboard-basiertes Rate Limiting und Cost-Monitoring.

**Empfohlene Limits für Stufe-5-Projekte:**

| Use-Case | Limit |
|----------|-------|
| Demo-App | 5 Anfragen/Minute, 50/Tag |
| Internes Tool | 20 Anfragen/Minute, 200/Tag |
| Production-App | Je nach Budget, mit Alerts |

**Vertiefung:** Rate Limiting in der Tiefe ist Production-Querschnitt-Thema. Hier nur das Minimum.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠 Tool | [Upstash Rate Limit](https://github.com/upstash/ratelimit) | Serverless-freundlich |
| 🛠 Tool | [Helicone](https://www.helicone.ai) | LLM-Observability + Cost-Tracking |

## Teste dein Verständnis

- [ ] Warum ist Rate Limiting für eine öffentliche LLM-App so wichtig?
- [ ] Wie würdest du mit Upstash ein Rate Limit von 10 Anfragen pro Minute implementieren?
- [ ] Was ist der Unterschied zwischen Upstash Rate Limit und Helicone?
