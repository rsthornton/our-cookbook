# Interactive Cookbook: Project Structure

A starter structure for learning web fundamentals with Astro.

---

## Where Real HTML & CSS Live

**The key insight:** Astro uses `.astro` files that combine HTML, CSS, and setup code. But they're clearly marked!

| What you're learning | Where to find it | What to look for |
|---------------------|------------------|------------------|
| **HTML** | `src/pages/*.astro` | Look for `✏️ HTML ZONE` comment |
| **CSS (global)** | `src/styles/global.css` | Pure CSS! Look for `🎨 GLOBAL CSS` header |
| **CSS (per-page)** | `<style>` blocks in `.astro` files | Look for `🎨 CSS ZONE` comment |
| **Recipe content** | `src/content/recipes/*.md` | Markdown files with frontmatter |

### The Three Zones in .astro Files

```
---
⚙️ SETUP ZONE - Skip this! (Server code that loads data)
---

✏️ HTML ZONE - Edit here! (Real HTML tags)

🎨 CSS ZONE - Style here! (Real CSS in <style> blocks)
```

**For learning:** Start by editing the HTML and CSS zones. The setup zone is plumbing—you'll learn it later.

---

## Directory Layout

```
our-cookbook/
├── public/
│   └── images/
│       └── recipes/          # Recipe photos go here
│
├── src/
│   ├── components/
│   │   ├── Header.astro           # Site navigation
│   │   ├── RecipeCard.astro       # Reusable recipe preview card
│   │   └── ImagePlaceholder.astro # Inviting "Add photo" placeholder
│   │
│   ├── layouts/
│   │   └── Base.astro        # Shared HTML structure (head, body wrapper)
│   │
│   ├── pages/
│   │   ├── index.astro       # Homepage: recipe grid
│   │   └── recipes/
│   │       └── [slug].astro  # Dynamic recipe pages
│   │
│   ├── content/
│   │   ├── config.ts         # Recipe schema (Astro content collections)
│   │   └── recipes/          # Markdown files for each recipe
│   │       └── baked-chicken.md  # Emily's first recipe!
│   │
│   └── styles/
│       └── global.css        # Base styles, CSS variables
│
├── astro.config.mjs
├── package.json
└── README.md
```

**Note:** Footer.astro is intentionally omitted—that's Emily's homework in Session 4!

---

## Key Files Explained

### `src/layouts/Base.astro`

The shell that wraps every page. This is where she'll learn that *every* webpage has this structure:

```astro
---
// This fenced area runs at build time (like a prep step)
const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} | Our Cookbook</title>
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <Header />
    <main>
      <slot />  <!-- Page content gets inserted here -->
    </main>
    <Footer />
  </body>
</html>
```

**Teaching moment:** This is *real* HTML. The `<slot />` is the only Astro-specific part—it's just saying "put the page content here."

---

### `src/pages/index.astro`

The homepage. Astro turns files in `/pages` into URLs automatically.

```astro
---
import { getCollection } from 'astro:content';
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import RecipeCard from '../components/RecipeCard.astro';

const recipes = await getCollection('recipes');
---

<Base title="Home">
  <Header />
  <main class="container">
    <section class="hero">
      <h1>Our Cookbook</h1>
      <p class="tagline">Recipes we love, made together</p>
    </section>

    <section class="recipes">
      <div class="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.data.title}
            slug={recipe.id.replace(/\.md$/, '')}
            description={recipe.data.description}
            cookTime={recipe.data.cookTime}
            tags={recipe.data.tags}
            favorite={recipe.data.favorite}
          />
        ))}
      </div>
    </section>
  </main>
</Base>
```

**Teaching moment:** The `{recipes.map(...)}` is JavaScript looping—for each recipe, make a card.

**Note:** In Astro 5, content collections use `recipe.id` (which includes `.md`), so we strip the extension for clean URLs.

---

### `src/content/recipes/baked-chicken.md`

Recipes live as Markdown files. This keeps content separate from code.

```markdown
---
title: Baked Chicken
description: Simple oven-baked chicken, flip twice for crispy skin
prepTime: 5
cookTime: 35
servings: 2
category: dinner
tags: [chicken, easy, weeknight]
difficulty: easy
source: Emily
favorite: true
---

## Ingredients

- Chicken pieces (thighs or drumsticks work great)
- Salt and pepper
- Olive oil (optional)

## Instructions

1. Preheat oven to **425°F**
2. Season chicken with salt and pepper
3. Place chicken in baking dish
4. Bake for **15 minutes**
5. Flip chicken, bake another **10 minutes**
6. Flip again, bake final **6-7 minutes**
7. Check that juices run clear, internal temp 165°F

## Notes

Total time is about 35 minutes. The multiple flips help get the skin crispy on all sides!
```

**Teaching moment:** The stuff between `---` is called "frontmatter"—it's metadata *about* the recipe that the code can use.

### Recipe Schema (`src/content/config.ts`)

The schema defines what fields recipes can have:

```typescript
import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    prepTime: z.number().optional(),      // minutes
    cookTime: z.number().optional(),      // minutes
    servings: z.number().optional(),
    yield: z.string().optional(),         // "2 loaves" or "24 cookies"
    tags: z.array(z.string()).default([]),
    category: z.enum(['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'drink', 'side']).optional(),
    source: z.string().optional(),        // "Grandma's recipe" or a URL
    image: z.string().optional(),         // path when you add photos
    difficulty: z.enum(['easy', 'medium', 'involved']).optional(),
    dateAdded: z.date().optional(),
    favorite: z.boolean().default(false),
  }),
});

export const collections = { recipes };
```

**Teaching moment:** This schema validates recipes—if you forget a required field or use the wrong type, Astro will tell you!

---

### `src/styles/global.css`

Start with CSS variables for consistency:

```css
:root {
  /* Colors */
  --color-cream: #faf7f2;
  --color-charcoal: #2d2d2d;
  --color-terracotta: #c4653a;
  --color-sage: #87a878;
  
  /* Typography */
  --font-display: 'Fraunces', serif;
  --font-body: 'Source Sans 3', sans-serif;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-cream);
  color: var(--color-charcoal);
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 600;
}
```

**Teaching moment:** CSS variables (`--color-cream`) let you define things once and reuse them everywhere. Change it in one place, it updates everywhere.

---

## Component Example: RecipeCard

`src/components/RecipeCard.astro`:

```astro
---
import ImagePlaceholder from './ImagePlaceholder.astro';

interface Props {
  title: string;
  slug: string;
  description?: string;
  cookTime?: number;
  tags?: string[];
  image?: string;
  favorite?: boolean;
}

const { title, slug, description, cookTime, tags = [], image, favorite = false } = Astro.props;
---

<a href={`/recipes/${slug}`} class="card">
  <div class="card-image">
    {image ? (
      <img src={image} alt={title} />
    ) : (
      <ImagePlaceholder size="small" />
    )}
    {favorite && <span class="favorite-badge">★</span>}
  </div>
  <div class="card-content">
    <h3 class="card-title">{title}</h3>
    {description && <p class="card-description">{description}</p>}
    <div class="card-meta">
      {cookTime && <span class="cook-time">{cookTime} min</span>}
      {tags.length > 0 && (
        <div class="tags">
          {tags.slice(0, 2).map((tag) => <span class="tag">{tag}</span>)}
        </div>
      )}
    </div>
  </div>
</a>

<style>
  .card {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .favorite-badge {
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    background: var(--color-terracotta);
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* ... more styles */
</style>
```

**Teaching moment:** The `<style>` block here only affects *this* component. That's Astro being helpful—the CSS won't leak out and mess up other things.

**Note:** The `ImagePlaceholder` component shows an inviting "+ Add photo" box when no image exists yet—this makes it obvious where photos will go!

---

## Getting Started Commands

```bash
# Create the project
npm create astro@latest our-cookbook

# Navigate into it
cd our-cookbook

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## GitHub Setup

```bash
# Initialize git (if not already)
git init

# Create .gitignore
echo "node_modules/\ndist/\n.astro/" > .gitignore

# First commit
git add .
git commit -m "Initial cookbook structure"

# Connect to GitHub (after creating repo on github.com)
git remote add origin https://github.com/yourusername/our-cookbook.git
git push -u origin main
```

---

## First Recipes

Emily's Baked Chicken is already in the cookbook! Next recipes to add together:

1. **Something she picks** — emotional investment drives motivation
2. **A family recipe with history** — use the `source` field to credit who it's from
3. **Something with multiple steps** — tests the instructions formatting

The baked chicken is marked as `favorite: true` so it shows with a star badge!

---

## Next Steps

See the companion **Learning Roadmap** for a session-by-session guide to building this together.
