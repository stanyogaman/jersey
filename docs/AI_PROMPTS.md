# AI Prompt Pack — Jersey Request Catalog

Use these prompts one by one in Cursor, Claude Code, Codex, or another coding assistant.

## Prompt 01 — Project Foundation

Build a production-ready Next.js 15 TypeScript project for an English-only sportswear request catalog.

Tech stack:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- MySQL
- Prisma ORM
- Cloudflare R2 image storage
- Railway deployment
- Custom admin CMS

Business model:
Customers browse sports-inspired styles and submit a request. Admin confirms availability, size, delivery and final price before payment.

Public wording must be neutral. Use terms like sports-inspired jersey, basketball style, football style, baseball style, hockey style, fanwear style, custom request.

Create base folders: app, components, lib, prisma, public.

Add scripts: dev, build, start, db:push, db:seed.

Make the initial app compile successfully.

## Prompt 02 — Database Schema

Add Prisma MySQL schema with models: User, Product, ProductImage, Category, ProductCategory, CustomerRequest, Page, SiteSetting, MediaFile, AiChatSession, AiChatMessage.

Product must include title, slug, descriptions, price, costPrice, sku, private supplierUrl, status, sportType, sizes, tags, SEO fields, H1-H4, canonical URL, OG fields, robots index/follow and timestamps.

CustomerRequest must include selected product, product name, sport type, size, height, weight, regular size, fit, quantity, name, email, WhatsApp, Telegram, country, city, message, status and admin note.

Create lib/prisma.ts and prisma/seed.ts for admin user and default settings.

## Prompt 03 — Admin Authentication

Create /admin/login with secure admin login using hashed password and httpOnly cookie session. Protect /admin and /api/admin routes. Add logout.

## Prompt 04 — Admin Dashboard

Create admin layout with sidebar and routes: dashboard, products, categories, requests, pages, media, SEO, settings. Add dashboard cards for product and request counts.

## Prompt 05 — Products Admin

Build product CRUD with image gallery, categories, status, pricing, private supplier URL, size options, tags and full SEO fields. Add Google preview component.

## Prompt 06 — Categories Admin

Build category CRUD with name, slug, description, image, status, sort order and SEO fields. Seed default neutral categories.

## Prompt 07 — Cloudflare R2 Media

Add R2 upload, media library, delete, alt text editing and product image integration. Validate image type and file size. Protect all upload routes.

## Prompt 08 — Public Catalog

Build homepage, catalog, category page, product page, request page, size guide, FAQ, about and contact. Use only published products and categories.

## Prompt 09 — Customer Requests CRM

Build public request form and admin request CRM with statuses: new, contacted, waiting_for_customer, confirmed, invoice_sent, paid, ordered_from_supplier, shipped, completed, cancelled.

## Prompt 10 — Settings and Scripts

Build admin settings tabs for General, Contacts, Social Links, SEO, Scripts, AI Assistant and Notifications. Include Google verification, analytics, tag manager, custom header and footer scripts.

## Prompt 11 — SEO

Add dynamic metadata, canonical URLs, OG tags, sitemap.xml and robots.txt. Exclude admin, API, drafts and hidden content.

## Prompt 12 — AI Jersey Fit Assistant

Build AI assistant that asks for sport type, height, weight, usual size and preferred fit. It gives approximate size suggestions and always says final size must be confirmed before payment.

## Prompt 13 — Notifications

Add Telegram notification for new customer requests and WhatsApp/Telegram contact links generated from admin settings.

## Prompt 14 — CMS Pages

Build CMS page editor for About, FAQ, Size Guide, Delivery, Contact, Privacy Policy, Terms and Disclaimer.

## Prompt 15 — Homepage Editor

Add admin homepage editor for hero, buttons, featured categories, featured products, how-it-works steps and bottom CTA.

## Prompt 16 — Manual Import Helper

Create an admin helper where admin can paste a source URL, product title, category, sport type and image URLs. It creates draft products. Do not build aggressive scraping. Admin must review before publishing.

## Prompt 17 — Legal Pages

Add editable default legal/trust page copy explaining this is an independent request catalog and all details are confirmed before payment.

## Prompt 18 — UI Polish

Improve mobile UI, product cards, admin tables, loading states, empty states, error messages, delete confirmations, badges and sticky mobile CTAs.

## Prompt 19 — Railway Deployment

Review build for Railway. Ensure prisma generate runs during build, env variables are documented, MySQL works, R2 routes are protected, and sitemap/robots work. Add DEPLOYMENT.md.

## Prompt 20 — Final QA

Run npm install, npm run build, npx prisma validate and npx prisma generate. Fix all TypeScript, ESLint, import, runtime, auth, upload, request and SEO errors.
