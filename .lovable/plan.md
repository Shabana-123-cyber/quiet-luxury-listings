# Quiet Luxury Real Estate Website

## Scope
- Build a premium home page at `/` with a full-bleed property image, sticky navigation, search controls, trust statistics, and a three-card featured listings section.
- Build a representative property detail page at `/properties/coastal-residence` with a photo-led gallery, property information, amenities, neighborhood preview, and a sticky tour-request panel.
- Add working navigation and responsive mobile layouts without adding authentication, payments, or saved-search persistence.

## Visual direction
- Use white and light slate surfaces, deep navy typography, and restrained muted-gold accents.
- Pair Playfair Display headings with Plus Jakarta Sans body text.
- Keep corners controlled, spacing generous, and motion subtle; listing cards lift gently on hover.
- Generate cohesive editorial property photography for the full-screen home image and listing/gallery images.

## Interaction
- Search filters are usable controls and the search action scrolls visitors to matching featured listings.
- Listing cards link to the property detail page.
- The mobile menu, gallery controls, and tour-request form work in the browser.
- Tap targets remain at least 44px and layouts collapse cleanly to one column.

## Technical details
- Define all visual values as semantic tokens in the global design system.
- Use TanStack Router for the home and property detail routes, each with unique social and search metadata.
- Keep site-wide navigation and footer reusable, while preserving the existing root error handling.
- Verify the final pages at desktop and mobile sizes and check the latest preview build output.
