# Nilov Catering — Production Deploy

## Stack
- Next.js 16 + TypeScript + Tailwind CSS 4
- shadcn/ui (48 components)
- Framer Motion 12.42 (animations)
- Lenis 1.32 (smooth scroll)
- Static data (no database needed) — 33 dishes, 5 services, 6 testimonials bundled in code

## Local development
```bash
bun install
bun run dev
```

## Deploy to Vercel
1. Repo already connected: https://github.com/9xj89gzrtw-hue/nilov-catering-v13
2. Project already on Vercel: https://nilov-catering-v13.vercel.app
3. Push to main → Vercel auto-deploys
4. (Optional) Add TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID env vars for order notifications

## Architecture
- All menu/services/testimonials data is static in `src/lib/data.ts`
- Orders POST to `/api/orders` — currently logs to console
- To save orders: integrate Telegram bot, email, or add Vercel KV/Postgres later
