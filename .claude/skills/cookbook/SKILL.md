---
name: cookbook
description: "Interactive cookbook development and learning assistant. Use when adding recipes, modifying design, building features, or when Emily asks how something works."
---

# Cookbook — Our Cookbook Development Skill

## When to Use
- Adding or editing recipes
- Modifying the design (colors, fonts, layout)
- Building new features
- When Emily asks "how does X work?" or "what is X?"

## Recipe Creation Workflow

When someone asks to add a recipe:

1. Ask what the recipe is called
2. Ask for ingredients (or let them paste a recipe)
3. Ask for basic info: prep time, cook time, servings, difficulty
4. Create the markdown file in `src/content/recipes/[slug].md`
5. Use the schema from CLAUDE.md for frontmatter
6. The dev server auto-reloads — the recipe appears immediately

Keep it conversational. Don't ask all questions at once — gather naturally.

## Explain Workflow

When Emily asks how something works:

**Pattern**: Show the result first, then explain the mechanism.

1. Start with what she can SEE (the visual result in the browser)
2. Then show the specific code that makes it happen (5-10 lines max)
3. Explain in plain language what those lines do
4. Use analogies: "Think of it like a recipe — the ingredients go in, the browser follows the steps"
5. Offer to let her try changing something small to see the effect

**Tone**: Friendly, encouraging, concrete. Avoid jargon dumps. One concept at a time.

**Example**: "How does the recipe grid work?"
→ "The grid shows all your recipes as cards. Here's how it works:
   In `src/pages/index.astro`, there's a line that says 'get all recipes from the content folder.'
   Then it loops through each recipe and creates a RecipeCard for it.
   The grid layout is CSS — it automatically figures out how many columns fit based on screen width.
   Want to try adding a recipe to see it appear in real time?"

## Design Modification Workflow

When someone wants to change the look:

1. **Colors**: Edit `@theme` block in `src/styles/global.css`
2. **Fonts**: Change the `--font-display` or `--font-body` values, update the Google Fonts link in `BaseLayout.astro`
3. **Spacing/sizing**: Adjust the `--space-*` or `--radius-*` tokens
4. **Card layout**: Modify `RecipeCard.astro`
5. **Page layout**: Modify the relevant page in `src/pages/`

Always start the dev server so changes are visible immediately.

## Feature Ideas (ready to vibe-code)

These are natural next features Emily might ask for:
- **Ingredient scaling**: Multiply quantities by serving count
- **Recipe photos**: Replace placeholders with real images
- **Meal planner**: Weekly menu builder
- **Shopping list**: Generate from selected recipes
- **Dark mode**: Toggle between light and dark themes
- **Categories page**: Browse by category
- **Print view**: Print-friendly recipe layout
- **Timer**: Built-in cooking timer on recipe pages
