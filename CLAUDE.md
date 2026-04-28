# CLAUDE — Our Cookbook

## Quick Context

Emily and Shingai's family recipe cookbook. Built with Astro + Tailwind. Recipes are markdown files — to add one, just create a `.md` file in `src/content/recipes/`.

Claude Code is the primary development tool. Emily can ask for features, changes, or explanations and Claude has full context.

## Key Files

| File | Purpose |
|------|---------|
| `src/content/recipes/*.md` | Recipe collection — add new recipes here |
| `src/content.config.ts` | Recipe schema (validates frontmatter fields) |
| `src/pages/index.astro` | Homepage with recipe card grid + search/filter |
| `src/pages/recipes/[...slug].astro` | Recipe detail page (dynamic from markdown) |
| `src/components/Header.astro` | Sticky navigation header |
| `src/components/RecipeCard.astro` | Card component for the recipe grid |
| `src/layouts/BaseLayout.astro` | Base HTML layout (fonts, meta, global CSS) |
| `src/styles/global.css` | Design tokens, base styles, animations |
| `astro.config.mjs` | Astro + Tailwind configuration |

## Dev Commands

```bash
npm run dev          # Start dev server at localhost:4323
npm run build        # Production build
npm run preview      # Preview production build
```

## Common Tasks

### Add a new recipe
Create a new `.md` file in `src/content/recipes/`:
```yaml
---
title: "Recipe Name"
description: "One-line description"
prepTime: 10        # minutes
cookTime: 30        # minutes
servings: 4
category: "dinner"  # breakfast | lunch | dinner | dessert | snack | drink | side
tags: ["tag1", "tag2"]
difficulty: "easy"  # easy | medium | involved
source: "Emily"
favorite: false
---

## Ingredients
- Item 1
- Item 2

## Instructions
1. Step one
2. Step two

## Notes
Any tips or variations.
```

### Change colors or fonts
Edit the `@theme` block in `src/styles/global.css`. All colors are CSS custom properties — change one value and it updates everywhere.

### Add a new page
Create a `.astro` file in `src/pages/`. Astro uses file-based routing — `src/pages/about.astro` becomes `/about`.

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | #faf7f2 | Page background |
| `--color-terracotta` | #c4653a | Primary accent (headings, links, badges) |
| `--color-sage` | #87a878 | Secondary accent (step numbers, image placeholders) |
| `--color-charcoal` | #2d2d2d | Body text |
| `--color-butter` | #f5e6c8 | Tag backgrounds |
| `--color-paprika` | #a3442a | Bold/emphasis text in recipes |
| `--color-linen` | #f0ebe3 | Alternating card backgrounds |
| `--color-warm-white` | #fffdf9 | Card backgrounds, recipe content |

### Typography
- **Headings**: Fraunces (variable font, SOFT 100 + WONK 1 for playful rounded serifs)
- **Body**: Source Sans 3

### Animations
- Cards: staggered entrance (fade up, 0.1s delay between each)
- Hero: fade up on page load
- Cards hover: lift + subtle rotation + shadow
- All animations respect `prefers-reduced-motion`

## Recipe Schema

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| title | string | yes | Recipe name |
| description | string | yes | One-line summary |
| prepTime | number | yes | Minutes |
| cookTime | number | yes | Minutes (0 for no-cook) |
| servings | number | yes | Number of servings |
| category | enum | yes | breakfast, lunch, dinner, dessert, snack, drink, side |
| tags | string[] | yes | Freeform tags for filtering |
| difficulty | enum | yes | easy, medium, involved |
| source | string | yes | Who created/adapted it |
| favorite | boolean | no | Default false. Shows star badge on card |
| image | string | no | Path to recipe photo |
| macros | object | no | { calories, protein, carbs, fat } — all numbers |

## How This Project Works (for teaching Emily)

**Astro** is a website builder. It takes your source files and turns them into a fast static website. Key concepts:
- **Pages** (`src/pages/`): Each `.astro` file becomes a URL. `index.astro` = homepage, `about.astro` = `/about`.
- **Components** (`src/components/`): Reusable pieces (like the header or recipe cards). They look like HTML but can have logic.
- **Content Collections** (`src/content/`): Your recipes live here as markdown files. Astro reads them, validates the frontmatter, and makes them available as data.
- **Layouts** (`src/layouts/`): Wrapper templates that provide shared structure (like the `<head>`, fonts, and header).

**Tailwind** is a CSS tool. Instead of writing CSS classes by hand, you use utility classes directly in the HTML (like `text-red-500` for red text). Our design tokens (colors, fonts, spacing) are defined in `global.css` and available as Tailwind utilities.

**How a recipe becomes a page**: When you create `src/content/recipes/lemon-chicken.md`, Astro automatically picks it up. The `[...slug].astro` page reads the markdown, renders it as HTML, and applies the recipe page styling. The homepage queries all recipes and creates a card for each one. No wiring needed — just create the file.

## Git Commits

Use conventional format with Claude co-author:
```
feat: add lemon chicken recipe

Co-Authored-By: Claude <noreply@anthropic.com>
```
