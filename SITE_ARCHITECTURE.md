# Mayan Xperience Tours Site Architecture

## Project Philosophy

Mayan Xperience Tours should be perceived first as a specialist in Riviera Maya tours and experiences.

The primary business is not a general marketplace. The site should behave like a digital travel advisor that helps visitors discover the right experience first, then personalize the rest of their vacation with useful complementary services.

Core principle:

**Tours first. Services after.**

Every navigation decision, page hierarchy, recommendation, and future feature should protect this commercial priority.

## Business Hierarchy

1. **Experiences and tours**
   - The main product category.
   - Highest visual priority.
   - Primary homepage placement.
   - Primary navigation language.
   - Strongest SEO and conversion focus.

2. **Complementary services**
   - Support the vacation planning journey.
   - Increase average booking value.
   - Should feel curated and helpful, not like unrelated products.
   - Should appear after the visitor has already discovered the main experiences.

3. **Trip planning tools**
   - Future layer for guided planning, recommendations, and itinerary requests.
   - Should connect tours and services into a personalized vacation plan.

## Current Project Assessment

The current project is compact and easy to understand:

- `app/page.tsx` renders the homepage.
- `components/HomePage.tsx` controls homepage language state and section order.
- `components/Navbar.tsx` is shared by Home and tour pages through `components/TourNavbar.tsx`.
- Individual tour pages currently exist at:
  - `/isla-mujeres`
  - `/tulum`
  - `/chichen-itza`
  - `/cenotes`
- Each tour page currently owns its own translations, gallery array, content sections, metadata, and WhatsApp CTA.

This works for a small site, but it will not scale well beyond a handful of products because content, layout, metadata, routing, recommendations, and WhatsApp logic will become duplicated across many page files.

The recommended architecture keeps the existing pages working while preparing a future migration toward a shared catalog and reusable product template.

## Recommended Information Architecture

### Homepage Journey

The homepage should guide the visitor through the real buying journey:

1. **Hero**
   - Emotional introduction.
   - Main promise.
   - Primary CTA toward tours.

2. **Featured Experiences**
   - Best-selling or most strategic tours only.
   - Strong visual priority.
   - Examples: Isla Mujeres, Chichen Itza, Tulum, Cenotes.

3. **Explore All Experiences**
   - Tour categories only.
   - Helps visitors browse the complete tour offering.
   - This replaces the idea of giving every product equal weight.

4. **Enhance Your Trip**
   - Complementary services only.
   - Presented as add-ons that improve the vacation.
   - Lower visual priority than tours.

5. **Why Travel With Us**
   - Trust, local expertise, service quality.

6. **Testimonials**
   - Social proof.

7. **Contact**
   - WhatsApp-first conversion path.

Recommended homepage message:

**First find the perfect experience. Then personalize your vacation with services that make the trip easier, richer, and more memorable.**

## Top-Level Navigation

Recommended primary navigation:

- **Experiences**
- **Services**
- **Plan My Trip** or **Trip Builder** (future)
- **About**
- **Contact**

For the current phase, the navigation can stay simple. When the site grows, `Experiences` should remain the most prominent item.

## Experiences Architecture

Experiences are the core catalog.

Recommended route model for future growth:

- `/experiences`
- `/experiences/category/[category]`
- `/experiences/[slug]`

The existing short URLs should remain supported for current SEO and sharing:

- `/isla-mujeres`
- `/tulum`
- `/chichen-itza`
- `/cenotes`

When the new catalog routes are introduced, these existing routes can either:

- redirect to `/experiences/[slug]`, or
- continue rendering the same shared product template using the same product data.

Do not delete existing routes abruptly.

### Experience Categories

#### Caribbean Islands

- Isla Mujeres
- Cozumel

#### Mayan Ruins & Culture

- Chichen Itza
- Tulum
- Coba
- Ek Balam

#### Cenotes

- Cenote Adventure
- Tulum + Cenote
- Tulum + Turtles + Cenote
- Snorkel with Turtles + Cenote

#### Adventure

- ATVs
- Monkey Sanctuary
- Sian Ka'an

#### Theme Parks

- Xcaret
- Xel-Ha
- Xplor
- Xenses
- Xenotes
- Xavage
- Xoximilco

## Services Architecture

Services should be presented as trip enhancers, not equal competitors to tours.

Recommended route model for future growth:

- `/services`
- `/services/category/[category]`
- `/services/[slug]`

### Service Categories

#### Transportation & Rentals

- Airport Transfers
- Car Rental
- Scooter Rental
- Private Driver
- Luxury Transportation
- Luxury Cars
- Equipment Rental

#### Photography & Media

- Vacation Photography
- Drone Photography
- Video Production
- Content Creation
- GoPro Rental

#### Events & Entertainment

- Coco Bongo
- Cirque du Soleil JOYA
- Beach Clubs
- Private DJ
- DJs
- Audio Equipment
- Event Production
- Inflatable Castles

#### Private Services

- Private Tour Guide
- Private Yacht
- Private Catamarans
- Romantic Experiences
- Custom Itinerary
- Private Chef
- Wedding Services
- Babysitting
- Fishing Trips
- Helicopter Tours

#### Local Experiences

- Restaurant Recommendations
- Taco Tour
- Tequila Experience
- Cooking Class
- Romantic Dinner

## What I Would Improve From The Original Proposal

The proposed category split is strong, but the site should avoid treating every item as a separate navigation destination too early.

Recommended improvements:

1. **Use "Featured Experiences" for best sellers only**
   - This keeps the homepage focused.
   - It protects the commercial priority of tours.

2. **Separate browsing from selling**
   - `Explore All Experiences` should help users understand tour categories.
   - Individual product pages should do the selling.

3. **Present services as "Enhance Your Trip"**
   - This framing feels consultative.
   - It supports cross-selling without making services feel like competing products.

4. **Avoid one page per product until a shared template exists**
   - New pages should be generated from structured product data.
   - This prevents 100 separate hand-coded layouts.

5. **Prepare recommendations as product relationships**
   - Cross-selling should come from data, not hard-coded UI.

## Product Model

Tours and services should eventually share one product model with a `type` field.

Recommended product fields:

- `id`
- `slug`
- `type`: `experience` or `service`
- `category`
- `subcategory` when needed
- `priority`: `featured`, `standard`, or `supporting`
- `title`
- `shortTitle`
- `summary`
- `description`
- `highlights`
- `importantInfo`
- `gallery`
- `heroImage`
- `whatsappMessage`
- `faq`
- `relatedProductIds`
- `recommendedServiceIds`
- `recommendedExperienceIds`
- `tripBuilderEligible`
- `seo`

### Phase 2 Implemented Model

The first shared product data model is now implemented with these real files:

```txt
types/
  product.ts

content/
  categories.ts
  products/
    experiences/
      caribbean-islands.ts
      mayan-ruins-culture.ts
      cenotes.ts
      index.ts

lib/
  language.ts
  links.ts
  products.ts
  whatsapp.ts
```

The model currently includes:

- `Product`
- `ExperienceProduct`
- `ServiceProduct`
- `ProductCategory`
- `ProductType`
- `ProductPriority`
- `LocalizedContent`
- `FAQItem`
- `ProductRecommendation`

Only the four existing experiences were migrated in this phase:

- Isla Mujeres
- Chichen Itza
- Tulum
- Cenotes

Services are typed and categorized, but no service product pages or service product data were created yet. This keeps the codebase clean while preparing the next phases.

Recommended folder direction for a future phase:

```txt
content/
  products/
    experiences/
      caribbean-islands.ts
      mayan-ruins-culture.ts
      cenotes.ts
      adventure.ts
      theme-parks.ts
    services/
      transportation-rentals.ts
      photography-media.ts
      events-entertainment.ts
      private-services.ts
      local-experiences.ts
  categories.ts
  recommendations.ts
```

This keeps product content out of page components and makes the catalog easier to grow.

## Reusable Page System

Do not create a unique template for every tour or service.

Recommended reusable product page structure:

- `ProductHero`
- `ProductGallery`
- `ProductIntro`
- `ProductHighlights`
- `ProductImportantInfo`
- `ProductFAQ`
- `RelatedProducts`
- `CompleteYourTrip`
- `ProductWhatsAppCTA`

Recommended future route component:

```txt
app/
  experiences/
    page.tsx
    category/
      [category]/
        page.tsx
    [slug]/
      page.tsx
  services/
    page.tsx
    category/
      [category]/
        page.tsx
    [slug]/
      page.tsx
```

Each route should load product data by slug and render the shared product template.

This route structure intentionally avoids placing two different dynamic segments at the same level in Next.js. Category pages should use `/experiences/category/[category]` and product pages should use `/experiences/[slug]`. The same convention should apply to services.

## Route Naming Conventions

Use simple, lowercase, hyphenated English slugs.

Good:

- `/experiences/isla-mujeres`
- `/experiences/chichen-itza`
- `/experiences/tulum`
- `/services/airport-transfers`
- `/services/vacation-photography`
- `/services/private-yacht`

Avoid:

- capital letters
- accents in URLs
- emojis
- long marketing phrases
- duplicated category words

Category slugs:

- `caribbean-islands`
- `mayan-ruins-culture`
- `cenotes`
- `adventure`
- `theme-parks`
- `transportation-rentals`
- `photography-media`
- `events-entertainment`
- `private-services`
- `local-experiences`

## Language Strategy

The current site uses `?lang=en`, `?lang=es`, and `?lang=fr`.

Short term:

- Keep the current query parameter strategy.
- Preserve `lang` in all links.
- Continue defaulting to English when the value is missing or invalid.

Long term:

- Consider route-based localization only if SEO strategy requires it.
- Examples: `/en/experiences/isla-mujeres`, `/es/experiencias/isla-mujeres`.
- Do not migrate to localized routes until the product catalog is data-driven.

## Cross-Selling Strategy

Recommendations should feel like helpful planning suggestions.

Recommended labels:

- `Complete Your Trip`
- `You May Also Like`
- `Guests Also Enjoyed`
- `Make This Experience Even Better`

Example recommendation mapping:

### Chichen Itza

- Airport Transfer
- Vacation Photography
- Restaurant Recommendation
- Coco Bongo
- Private Guide

### Isla Mujeres

- Golf Cart Rental
- Drone Photography
- Private Catamaran
- Romantic Dinner

### ATVs

- Cenote Experience
- Private Transportation
- GoPro Rental
- Beach Club

Implementation recommendation:

- Store recommendations as product IDs.
- Do not hard-code recommendations inside page components.
- Allow recommendations to include both experiences and services.
- Give tours priority in the recommendation order when both types are present.

## Trip Builder / Plan My Trip Preparation

The future Trip Builder should not be a traditional shopping cart.

It should feel like a personalized itinerary request:

1. Visitor discovers a tour.
2. Visitor adds related services.
3. Visitor builds a lightweight vacation plan.
4. Visitor sends a personalized request by WhatsApp.
5. The team continues the conversation and finalizes details.

Recommended future data fields:

- `tripBuilderEligible`
- `tripBuilderCategory`
- `suggestedPairings`
- `requiresDate`
- `requiresGuests`
- `requiresPickupLocation`
- `planningNotes`

Recommended future UI components:

- `TripBuilderProvider`
- `AddToTripButton`
- `TripSummaryDrawer`
- `TripRequestCTA`
- `SuggestedAddOns`

The product model should be ready for this even before the UI exists.

## Growth Strategy For 100+ Products

To keep the project clean with more than 100 experiences and services:

1. **Move content out of page files**
   - Pages should render templates.
   - Product data should live in typed content files.

2. **Use one shared product template**
   - A tour and a service should share most layout components.
   - Differences should come from content and product type.

3. **Group products by category files**
   - Avoid one massive `products.ts`.
   - Avoid one page file per product.

4. **Use stable product IDs**
   - Slugs can change for SEO.
   - IDs should remain stable for recommendations and Trip Builder.

5. **Centralize WhatsApp message generation**
   - Do not handwrite WhatsApp URLs in every page.
   - Use a shared helper that receives product title, language, and selected trip items.

6. **Centralize language helpers**
   - Reuse one language parser.
   - Reuse one link builder that preserves `lang`.

7. **Create category indexes from data**
   - Category pages should read the catalog and filter by category.
   - Do not manually maintain repeated card lists.

8. **Keep visual components separate from content**
   - Components should not know specific tour names unless they are receiving them as props.

9. **Add validation for product data**
   - Use TypeScript types first.
   - Later, consider schema validation for required fields.

10. **Design recommendations as relationships**
    - Store `relatedProductIds`.
    - Render recommendations through a reusable component.

## Recommended Implementation Phases

### Phase 1: Architecture Documentation

- Create this document.
- Do not create new pages yet.
- Do not add empty folders without implementation.

### Phase 2: Shared Product Data Model

- Define product and category types.
- Move existing tour content into structured data.
- Keep existing URLs working.

### Phase 3: Product Page Template

- Build one reusable template.
- Migrate existing tour pages to the shared template.
- Keep current design behavior.

Completed in this phase:

- Added `components/product/ProductPageTemplate.tsx`.
- Kept the existing short routes:
  - `/isla-mujeres`
  - `/tulum`
  - `/chichen-itza`
  - `/cenotes`
- Reduced each existing page to loading its product from the shared catalog, resolving `lang`, preserving metadata, and passing the product to the shared template.
- Reused:
  - `TourNavbar`
  - `Gallery`
  - `buildWhatsAppHref`
  - `getLanguage`
  - `getRequiredProductById`
  - `getProductMetadata`

Not changed in this phase:

- No dynamic routes were created.
- No service pages were created.
- No Trip Builder or Plan My Trip UI was created.
- No visible design changes were intended.
- Footer was not added to tour pages because the current tour pages did not render it; adding it now would change the visible layout. It remains part of the target product template system for a future visual/layout phase.

### Phase 3.5: Complete Product Catalog

- Complete the centralized catalog with all experiences and services already identified for Mayan Xperience Tours.
- Keep the catalog as the single source of truth for product and service information.
- Do not create dynamic routes, listing pages, filters, search, Trip Builder, or new visible UI yet.
- Keep current visible pages unchanged.

Completed in this phase:

- Added shared catalog TODO helpers in `content/products/shared.ts` so incomplete products can be represented consistently without inventing marketing content.
- Added `categoryIds` in `content/categories.ts` so products reference the central category source instead of repeating category strings.
- Added service product files under `content/products/services/`.
- Updated `lib/products.ts` so the unified catalog includes both experiences and services.
- Added runtime catalog validation for:
  - duplicate product IDs
  - duplicate product slugs
  - invalid category references
  - product relationships pointing to missing products

Experiences now represented in the catalog:

- Isla Mujeres
- Chichen Itza
- Tulum
- Cenotes
- Cozumel
- Sunset Catamaran
- Tulum Express
- Coba
- Ek Balam
- Tulum + Cenote
- Tulum + Turtles + Cenote
- Snorkeling with Turtles + Cenote
- Sian Ka'an
- ATV Adventure
- ATV + Snorkeling Express
- Monkey Sanctuary
- Xcaret
- Xel-Ha
- Xplor
- Xenses
- Xenotes
- Xavage
- Xoximilco

Services now represented in the catalog:

- Airport Transportation
- Private Transportation
- Car Rentals
- Photography
- Drone Photography
- Private Tours
- Yacht Rentals
- Fishing Tours
- Romantic Experiences
- Concierge Services
- Events & Celebrations

Information still pending:

- Final copy for all newly added placeholder products.
- Final EN / ES / FR translations for newly added placeholder products.
- Final hero images and galleries for newly added placeholder products.
- Final SEO titles, descriptions, Open Graph data, and Twitter metadata.
- Final included / not included details.
- Final FAQ content.
- Final curated relationship mappings for recommendations and Trip Builder.

Ready for the next phase:

- Automatic product listings can read from `lib/products.ts`.
- Category pages can filter products by the central category IDs.
- Dynamic routes can load products by slug without changing visual components.
- Related Products and Complete Your Trip sections can read product relationships from the catalog.
- Future CMS or database migration can replace local content files while keeping components data-driven.

### Phase 4: Category Browsing

- Add `/experiences`.
- Add experience category pages.
- Add `Explore All Experiences` on Home.

Completed in this phase:

- Added the first visible catalog layer at `/experiences`.
- Added the reusable category route `/experiences/category/[category]`.
- Added shared experience listing components under `components/experiences/`.
- Added `content/experience-categories.ts` as the curated configuration for the experience browsing layer.
- Connected the Home navigation and primary Hero CTA to `/experiences` while preserving `?lang=en|es|fr`.
- Added `status: "published" | "draft"` support to product data.
- Published only the four complete experiences with real pages and images:
  - Isla Mujeres
  - Chichen Itza
  - Tulum
  - Cenotes
- Kept incomplete catalog products as `draft`, so they can appear only as disabled Coming Soon previews on `/experiences` and never as bookable category-page listings.
- Added metadata for `/experiences` and dynamic category metadata for `/experiences/category/[category]`.
- Invalid category slugs return `notFound()`.

Not changed in this phase:

- No service browsing page was added.
- No Trip Builder or Plan My Trip UI was added.
- No dynamic individual product route was added.
- No existing product detail page was redesigned.
- No invented product descriptions, prices, durations, images, or translations were added.

Ready for the next phase:

- Category listing pages can display additional products automatically as soon as their catalog entries move from `draft` to `published`.
- Future product routes can load by slug from the same catalog.
- Related products and Trip Builder can reuse `status`, category config, and product relationship fields.

### Phase 5: Complementary Services

- Add `/services`.
- Add `Enhance Your Trip` on Home.
- Render service browsing from the centralized service product data.

### Phase 6: Cross-Selling

- Add `Complete Your Trip` blocks on product pages.
- Use product relationship data.
- Keep recommendations curated and non-aggressive.

### Phase 7: Trip Builder

- Add lightweight trip planning state.
- Allow users to collect tours and services.
- Send the final selection through WhatsApp as a personalized planning request.

## Final Recommended Architecture

```txt
app/
  page.tsx
  experiences/
    page.tsx
    [category]/
      page.tsx
    [slug]/
      page.tsx
  services/
    page.tsx
    [category]/
      page.tsx
    [slug]/
      page.tsx
  plan-my-trip/
    page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
  home/
    Hero.tsx
    FeaturedExperiences.tsx
    ExploreAllExperiences.tsx
    EnhanceYourTrip.tsx
    WhyUs.tsx
    Testimonials.tsx
    Contact.tsx
  product/
    ProductPageTemplate.tsx
    ProductHero.tsx
    ProductGallery.tsx
    ProductHighlights.tsx
    ProductFAQ.tsx
    ProductWhatsAppCTA.tsx
    RelatedProducts.tsx
    CompleteYourTrip.tsx
  trip-builder/
    AddToTripButton.tsx
    TripSummaryDrawer.tsx
    TripRequestCTA.tsx

content/
  products/
    experiences/
    services/
  categories.ts
  recommendations.ts

lib/
  language.ts
  links.ts
  whatsapp.ts
  products.ts
  recommendations.ts
```

This structure is a target architecture, not a request to create all files immediately.

## Architectural Rule

Before adding any new product page, ask:

**Can this be added as product data instead of a new custom page?**

If the answer is yes, add data and reuse the template.

This rule is what will allow Mayan Xperience Tours to grow for the next 5 to 10 years without rebuilding the site architecture.
