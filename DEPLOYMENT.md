# Railway Deployment Guide

This project is prepared for Railway deployment.

## Current status

The repository currently contains the first project foundation:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Railway standalone output
- Prisma placeholder configured for MySQL
- Homepage placeholder
- Environment variable example

Admin CMS, real database models, product management, image upload and AI assistant will be added in later steps.

## Important

The build script runs:

```bash
prisma generate && next build
```

Because of this, Railway needs a valid `DATABASE_URL` variable before the first deploy.

## Deploy directly to Railway

1. Open Railway.
2. Click `New Project`.
3. Select `Deploy from GitHub repo`.
4. Choose this repository: `stanyogaman/jersey`.
5. Before final production use, add a MySQL database service.
6. Copy or reference the MySQL `DATABASE_URL` into the Next.js app service.
7. Add required variables from `.env.example`.
8. Deploy the app.
9. Open the service logs.
10. Generate a public Railway domain from the service Networking settings.

## Minimum variables for first deploy

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
NEXT_PUBLIC_SITE_URL="https://your-railway-domain.up.railway.app"
```

For the first placeholder deploy, only `DATABASE_URL` is required by the build.

## Later variables

These will be needed after admin, R2 upload, Telegram and AI features are added:

```env
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="change-this-password"
JWT_SECRET="replace-with-a-long-random-string"

CLOUDFLARE_R2_ACCOUNT_ID=""
CLOUDFLARE_R2_ACCESS_KEY_ID=""
CLOUDFLARE_R2_SECRET_ACCESS_KEY=""
CLOUDFLARE_R2_BUCKET_NAME=""
CLOUDFLARE_R2_PUBLIC_URL=""
CLOUDFLARE_R2_REGION="auto"

OPENAI_API_KEY=""

TELEGRAM_BOT_TOKEN=""
TELEGRAM_CHAT_ID=""

NEXT_PUBLIC_WHATSAPP_NUMBER=""
NEXT_PUBLIC_TELEGRAM_USERNAME=""
```

## Railway build and start commands

Railway should detect them from `package.json`:

```bash
npm run build
npm run start
```

The project also uses `output: "standalone"` inside `next.config.ts`.

## First deploy checklist

- GitHub repository connected to Railway
- MySQL service created
- `DATABASE_URL` added to app variables
- Build completed
- Logs show Next.js server started
- Public Railway domain generated
- Homepage opens successfully
