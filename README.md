# Our Cookbook

**Recipes we love, made together.**

A recipe collection built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no magic. Every line of code is real and visible. Open any file, read it, change it, and see the result in your browser.

This is a learning project! We're building this cookbook together to learn how the web works from the ground up. If you ever get stuck, try asking [Claude](https://claude.ai) — paste your code and ask what's happening.

---

## Getting Started

1. **Clone this repo** and open it in VS Code
2. **Open the Terminal** in VS Code (`` Ctrl+` `` or View → Terminal)
3. **Start the server:**
   ```
   python3 -m http.server 4323
   ```
4. **Open your browser** to [http://localhost:4323](http://localhost:4323)

That's it! No installs, no downloads, no waiting. Edit a file, refresh the browser, see your changes.

---

## Project Structure

```
our-cookbook/
├── index.html              ← Homepage (the recipe grid you see first)
├── recipes/
│   ├── _template.html      ← Copy this to add a new recipe!
│   ├── baked-chicken.html
│   ├── beef-stew.html
│   ├── choc-chia-pudding.html
│   └── protein-pancakes.html
├── css/
│   ├── tokens.css          ← Colors, fonts, spacing (change these to restyle everything!)
│   ├── global.css          ← Base styles for every page
│   ├── components.css      ← Cards, recipe pages, header
│   └── animations.css      ← Entrance effects and hover states
├── js/
│   ├── recipes.js          ← Recipe data (we'll use this later)
│   └── render-cards.js     ← Dynamic card rendering (we'll use this later)
├── images/recipes/         ← Put recipe photos here
└── favicon.svg
```

## Want to Add a Recipe?

Check out [RECIPES-HOWTO.md](RECIPES-HOWTO.md) — it walks you through every step!

**The short version:** Copy `recipes/_template.html`, fill in your recipe, add a card to `index.html`. Done.

---

## Quick Tips

- **Change the whole vibe:** Edit the color variables in `css/tokens.css` — one change updates the entire site
- **Inspect anything:** Right-click any element in the browser → Inspect. You'll see the exact HTML and CSS that makes it look that way
- **Break things on purpose:** That's how you learn! You can always undo with `Ctrl+Z`
- **Ask Claude for help:** Paste any code into [claude.ai](https://claude.ai) and ask "what does this do?" or "how do I change this?"

---

## Made With

- **HTML** — structure (what's on the page)
- **CSS** — style (how it looks)
- **JavaScript** — behavior (coming soon!)
- **Claude** — AI pair programmer who helped build the foundation
