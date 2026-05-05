---
title: "Authentication für LLM-Apps"
module: "5.5"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Authentication für LLM-Apps

## Kernidee

Sobald deine LLM-App mehr als einen Nutzer hat, ist Auth Pflicht — nicht optional. Jede Anfrage verursacht API-Kosten, und ohne Auth zahlt ein einziger Power-User dein gesamtes Budget auf. Auth trennt auch Nutzer-Sessions und ermöglicht Rate-Limiting per User.

## Im Detail

**Wann brauchst du Auth?**

- Multi-User-App (mehr als du selbst).
- Öffentlich zugängliche App.
- API-Budget-Kontrolle nötig.
- User-spezifische Daten oder Konversations-History.

**Wann brauchst du keine Auth?**

- Persönliches Tool nur für dich (localhost).
- Internes Tool in einem vertrauenswürdigen Netzwerk mit ausreichend kleinem Nutzerkreis.

**Auth-Optionen 2026:**

| Option | Typ | Aufwand | Wann |
|--------|-----|---------|------|
| **Clerk** | SaaS | Gering | Production-Apps, Startups |
| **Auth0** | SaaS | Mittel | Enterprise-Anforderungen |
| **Supabase Auth** | OSS+SaaS | Mittel | Wenn Supabase als DB |
| **BetterAuth** | OSS | Mittel | Wenn kein SaaS-Lock-in |
| **NextAuth.js** | OSS | Mittel | Next.js-nativ |

**Minimales Setup mit Clerk und Next.js:**

```typescript
// middleware.ts
import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    publicRoutes: ["/"]
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}
```

```typescript
// app/api/chat/route.ts
import { auth } from "@clerk/nextjs"

export async function POST(req: Request) {
    const { userId } = auth()
    if (!userId) {
        return new Response("Unauthorized", { status: 401 })
    }
    
    // Ab hier: authentifizierter Nutzer
    // userId für Rate-Limiting und User-spezifische Daten nutzen
    ...
}
```

**DSGVO-Relevanz:** Sobald du User-Daten speicherst (Konversations-History, Nutzerdaten), gelten DSGVO-Anforderungen. Auth-Provider mit EU-Servern wählen oder prüfen, wo Daten gespeichert werden.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠 Tool | [Clerk](https://clerk.com) | Einfachster Einstieg |
| 🛠 Tool | [BetterAuth](https://www.better-auth.com) | OSS-Alternative |

## Teste dein Verständnis

- [ ] Wann ist Auth für eine LLM-App Pflicht — und wann nicht?
- [ ] Welchen Auth-Anbieter würdest du für ein schnelles Next.js-Projekt wählen?
- [ ] Warum ist Auth wichtig für Cost-Kontrolle bei LLM-APIs?
