import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import slugify from "slugify";

const prisma = new PrismaClient();

function toSlug(value: string) {
  return slugify(value, { lower: true, strict: true });
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "change-this-password";
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      name: "Admin",
      role: "admin"
    },
    create: {
      email,
      password: hashedPassword,
      name: "Admin",
      role: "admin"
    }
  });
}

async function seedCategories() {
  const categories = [
    "Basketball Style",
    "Football Style",
    "Baseball Style",
    "Hockey Style",
    "Hoodies",
    "Hats",
    "Kids",
    "New Arrivals",
    "Bestsellers",
    "Custom Request"
  ];

  for (const [index, name] of categories.entries()) {
    await prisma.category.upsert({
      where: { slug: toSlug(name) },
      update: {},
      create: {
        name,
        slug: toSlug(name),
        status: "published",
        sortOrder: index,
        h1: name,
        seoTitle: `${name} | Jersey Request Catalog`,
        seoDescription: `Browse ${name.toLowerCase()} and send a custom request for availability, size and delivery confirmation.`
      }
    });
  }
}

async function seedPages() {
  const pages = [
    {
      title: "About",
      slug: "about",
      content:
        "Jersey Request Catalog is an independent sportswear request catalog. Browse styles, send a request, and our manager will confirm availability, size, delivery and final price before payment."
    },
    {
      title: "FAQ",
      slug: "faq",
      content:
        "Common questions about requests, sizing, availability, delivery and payment confirmation will be answered here."
    },
    {
      title: "Size Guide",
      slug: "size-guide",
      content:
        "Size recommendations are approximate. Please confirm final size with our manager before payment because sizing can vary between models."
    },
    {
      title: "Delivery Information",
      slug: "delivery-information",
      content:
        "Delivery time and options are confirmed manually after you send a request. Final delivery cost depends on country, city and product availability."
    },
    {
      title: "Contact",
      slug: "contact",
      content:
        "Send us a request or contact us through the available contact options on the website."
    },
    {
      title: "Privacy Policy",
      slug: "privacy-policy",
      content:
        "We collect only the information needed to process customer requests, such as name, contact details, size preferences and delivery location."
    },
    {
      title: "Terms & Conditions",
      slug: "terms-and-conditions",
      content:
        "This website works as a request catalog. Availability, sizing, delivery time, specifications and final price are confirmed manually before payment."
    },
    {
      title: "Disclaimer",
      slug: "disclaimer",
      content:
        "This website operates as an independent sportswear request catalog. We do not claim that any product is official, licensed, endorsed or approved by any sports league, team or brand unless explicitly stated in writing by the seller."
    }
  ];

  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: {
        ...page,
        status: "published",
        h1: page.title,
        seoTitle: `${page.title} | Jersey Request Catalog`,
        seoDescription: page.content.slice(0, 155)
      }
    });
  }
}

async function seedSettings() {
  const settings: Array<[string, string]> = [
    ["site_name", "Jersey Request Catalog"],
    ["default_seo_title", "Jersey Request Catalog | Sportswear Request Catalog"],
    ["default_seo_description", "Browse sports-inspired jersey and fanwear styles, then send a custom request for size, availability and delivery confirmation."],
    ["default_currency", "USD"],
    ["default_country", ""],
    ["working_hours", ""],
    ["footer_text", "Availability, sizing, delivery and final price are confirmed manually before payment."],
    ["whatsapp_number", ""],
    ["telegram_username", ""],
    ["instagram_url", ""],
    ["facebook_url", ""],
    ["tiktok_url", ""],
    ["youtube_url", ""],
    ["google_search_console_code", ""],
    ["google_analytics_script", ""],
    ["google_tag_manager_script", ""],
    ["custom_header_script", ""],
    ["custom_footer_script", ""]
  ];

  for (const [key, value] of settings) {
    await prisma.siteSetting.upsert({
      where: { key },
      update: {},
      create: { key, value }
    });
  }
}

async function main() {
  await seedAdmin();
  await seedCategories();
  await seedPages();
  await seedSettings();
  console.log("Database seed completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
