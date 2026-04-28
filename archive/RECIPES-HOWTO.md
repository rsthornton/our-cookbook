# How to Add a Recipe

Adding a recipe is a two-step process: create the recipe page, then add a card on the homepage.

## Step 1: Create the Recipe Page

1. Open the `recipes/` folder
2. Copy `_template.html` and rename it (e.g., `my-new-recipe.html`)
   - Use lowercase, hyphens instead of spaces: `banana-bread.html`, not `Banana Bread.html`
3. Open your new file and look for the `REPLACE:` comments
4. Fill in:
   - The `<title>` tag (in the `<head>`)
   - The `<h1>` (recipe name)
   - The description
   - Prep time, cook time, servings
   - Tags
   - Ingredients (as `<li>` items inside `<ul>`)
   - Instructions (as `<li>` items inside `<ol>`)
   - Notes (optional)
   - Source (who contributed it)
5. Save the file
6. Visit `http://localhost:4323/recipes/my-new-recipe.html` to see it!

## Step 2: Add a Card on the Homepage

1. Open `index.html`
2. Find the recipe grid section (look for `<div class="recipe-grid">`)
3. Copy one of the existing card blocks (everything from `<a href=...` to `</a>`)
4. Paste it after the last card
5. Update:
   - The `href` to point to your new recipe: `href="/recipes/my-new-recipe.html"`
   - The `style="--i: N"` — increase the number by 1 (this controls animation order)
   - The card title, description, cook time, and tags
6. Save and refresh the homepage — your recipe appears!

## Adding a Photo

1. Put your photo in the `images/recipes/` folder
2. In your recipe page, find the placeholder div:
   ```html
   <div class="placeholder">
     <span class="icon">+</span>
     <span class="text">Add photo</span>
   </div>
   ```
3. Replace it with an `<img>` tag:
   ```html
   <img src="/images/recipes/my-photo.jpg" alt="My New Recipe">
   ```
4. Do the same on the homepage card if you want the photo there too

## Example: What a Card Looks Like

```html
<a href="/recipes/banana-bread.html" class="card" style="--i: 4">
  <div class="card-image">
    <div class="card-placeholder">
      <span class="icon">+</span>
      <span class="text">Add photo</span>
    </div>
  </div>
  <div class="card-content">
    <h3 class="card-title">Banana Bread</h3>
    <p class="card-description">Classic banana bread, extra ripe bananas are key</p>
    <div class="card-meta">
      <span class="cook-time">60 min</span>
      <div class="tags">
        <span class="tag">baking</span>
        <span class="tag">easy</span>
      </div>
    </div>
  </div>
</a>
```

## Commit Your Work

After adding a recipe:

1. Open **GitHub Desktop** (or use the Source Control tab in VS Code)
2. You should see your new/changed files highlighted
3. Write a commit message like: "Add banana bread recipe"
4. Click **Commit** then **Push**
