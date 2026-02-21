# Interactive Cookbook: Learning Roadmap

A session-by-session guide for learning web fundamentals through building.

---

## Philosophy

**Core principle:** Build first, explain after.

ESFPs learn best through direct experience with immediate feedback. Each session follows this pattern:

1. **Do** — Make a visible change together
2. **See** — Watch it appear in the browser
3. **Name** — Now explain what just happened
4. **Experiment** — "What happens if we change this?"

Resist the urge to front-load theory. Let curiosity drive the explanations.

---

## Pre-Work (Shingai)

Before Session 1, set up:

- [x] Build cookbook with pure HTML/CSS/JS (`our-cookbook/`)
- [x] Create warm-palette styling (cream/terracotta/sage) with design tokens
- [x] Build homepage with recipe card grid and staggered animations
- [x] Create 4 recipe pages (baked chicken, beef stew, chia pudding, protein pancakes)
- [x] Create `_template.html` for adding new recipes
- [x] Prepare `recipes.js` data file for Session 4 dynamic rendering
- [x] Create GitHub repo called `our-cookbook`
- [x] Clone repo to her machine via VS Code
- [x] Open project in VS Code on both machines
- [x] Sync GitHub from VS Code (Source Control panel)
- [x] Verify `python3 -m http.server 4323` works on both

**Done (2026-02-15):** Rebuilt from Astro to pure HTML/CSS/JS. Every line of code is now real, visible, and debuggable in the browser — no build tools hiding what's happening.

This removes friction so Session 1 is pure fun.

---

## Progress Log

### Session 0.5: "Pre-Session with Shingai" (2026-02-21)

Blended elements of Sessions 1 and 3 while setting up the project together.

**What we covered:**
- [x] Restructured repo — moved from nested `our-cookbook/` subdirectory to top-level git repo
- [x] Debugged local dev server (port 4323 was already in use — killed stale process)
- [x] Toured the file structure (Session 1, Activity 1)
- [x] Learned the template → recipe page → homepage card pattern (Session 3 core concept)
- [x] Created `recipes/ultimate-protein-pancakes.html` from `_template.html` (Session 3, Activity 2)
- [x] Added recipe card to `index.html` with `style="--i: 4"` stagger animation (Session 3, Activity 4)
- [x] Walked through first commit workflow via VS Code terminal (Session 1, Activity 4)

**Key concepts introduced:**
- Project file structure: `index.html` (homepage) → `recipes/*.html` (recipe pages) → `css/` (styling)
- The template pattern: copy `_template.html`, replace `REPLACE:` comments, fill in your content
- Two-file connection: a card on the homepage `<a href="...">` links to the full recipe page
- Git basics: `status` → `add` → `commit` → `push`

**Recipe added:** Ultimate Protein Pancakes (111g protein per batch — the evolved version of Emily's original, with whipped egg whites and chia seeds)

---

## Session 1: "Hello, Browser"

**Goal:** Understand that HTML = structure, see changes live.

**Duration:** 45–60 min

### Where Things Live (Quick Reference)

| What | Where | File |
|------|-------|------|
| **HTML** | The actual page structure | `index.html`, `recipes/*.html` |
| **CSS** | Design tokens (colors, fonts) | `css/tokens.css` |
| **CSS** | Global styles (reset, typography) | `css/global.css` |
| **CSS** | Component styles (cards, recipe pages) | `css/components.css` |
| **CSS** | Animations (entrance effects, hovers) | `css/animations.css` |

**Key insight:** Every file is real HTML, CSS, or JS. No build step, no magic — what you write is what the browser sees!

### Activities

1. **Tour the project** (5 min)
   - Show her the folder structure
   - Open `index.html` — "This is the homepage. Everything you see comes from this file."
   - Point out the teaching comments marked with boxes

2. **Edit the homepage together** (15 min)
   - Open `index.html` in VS Code
   - Change the `<h1>` text, refresh the browser
   - Add a `<p>` paragraph below it
   - Add another heading with `<h2>`

   **Teaching moment:** "HTML tags are like containers. `<h1>` says 'this is the main heading.' The browser knows how to display it."

3. **Experiment with tags** (15 min)
   - Try `<em>` for italics, `<strong>` for bold
   - Make a list with `<ul>` and `<li>`
   - Add a link with `<a href="...">`

   **Let her break things.** Remove a closing tag, see what happens.

4. **Her first commit** (10 min)
   - Open the **Terminal** in VS Code (`` Ctrl+` `` or View → Terminal)
   - Run `git status` — see the changed files highlighted in red/green
   - Run `git add .` — stage everything (files turn green)
   - Run `git commit -m "Add ultimate protein pancakes recipe"` — save the snapshot
   - Run `git push` — send it to GitHub
   - Visit the repo on github.com and see the commit

### Homework (optional)

Add a short "About Us" section to the homepage using the tags learned.

---

## Session 2: "Making It Pretty"

**Goal:** Understand that CSS = styling, and how selectors work.

**Duration:** 60 min

### Activities

1. **Review her homework** (5 min)
   - Celebrate what she added
   - Note: "It works, but it looks plain. Let's fix that."

2. **Introduce CSS** (20 min)
   - Open `css/tokens.css` — "These are our color names"
   - Open `css/global.css` — "These are the rules for how things look"
   - Change `--color-terracotta` to a different color, refresh
   - Instant magic — the whole site shifts!

   **Teaching moment:** "CSS variables let us name colors. Change the name once, it updates everywhere."

3. **Play with properties** (20 min)
   - `font-size`, `font-family`, `text-align`
   - `background-color` on `body`
   - `padding` and `margin` — use browser DevTools to visualize the box model

   **Key insight:** Open DevTools (right-click → Inspect), hover over elements, show her the box model visualization.

4. **Classes for specificity** (10 min)
   - Look at how `.hero`, `.card`, `.tag` target specific elements
   - Add a new class to an element and style it

   **Teaching moment:** "Classes let us be specific. Not *all* sections, just *this* one."

5. **Install Live Server extension** (5 min)
   - In VS Code: Extensions tab (sidebar) → search "Live Server" → Install
   - Right-click `index.html` → "Open with Live Server"
   - Now the browser **auto-refreshes** every time she saves a file — no more manual refresh!

   **Teaching moment:** "Extensions add superpowers to VS Code. This one watches your files and updates the browser automatically."

6. **Commit and push** (5 min)
   - "Add initial styling to homepage"

### Homework

Pick a color palette she likes (try [coolors.co](https://coolors.co)) and update the variables in `css/tokens.css`.

---

## Session 3: "Adding a Recipe"

**Goal:** Create a new recipe page from the template.

**Duration:** 60 min

### Activities

1. **Look at an existing recipe** (10 min)
   - Open `recipes/baked-chicken.html`
   - Walk through the structure together
   - "This is YOUR recipe! See how each section has a heading?"

   **Teaching moment:** "HTML gives us structure — headings, lists, paragraphs. The CSS makes it pretty."

2. **Create her next recipe** (20 min)
   - Copy `recipes/_template.html` to `recipes/her-choice.html`
   - Fill in the title, description, ingredients, instructions
   - Replace the placeholder text step by step

   **Teaching moment:** "See the `REPLACE:` comments? Those are notes for us — the browser ignores them."

3. **See it in the browser** (5 min)
   - Navigate directly to `http://localhost:4323/recipes/her-choice.html`
   - "Your words became a webpage!"

4. **Add a card on the homepage** (15 min)
   - Open `index.html`
   - Copy an existing card block
   - Update the title, description, link, and tags
   - Refresh — her recipe appears in the grid!

   **Teaching moment:** "Right now we copy-paste cards. In Session 4, we'll make the computer do it automatically."

5. **Her solo commit** (10 min)
   - She writes the commit message
   - She pushes
   - You pull on your machine, show that her changes arrived

### Homework

Add a third recipe and take a photo! Put the photo in `images/recipes/` and replace the placeholder with an `<img>` tag.

---

## Session 4: "Making the Computer Do the Work"

**Goal:** Understand how JavaScript can generate HTML from data.

**Duration:** 60 min

### Activities

1. **The problem** (5 min)
   - "What if we have 20 recipes? Do we copy-paste 20 cards?"
   - "What if we change the card design? We'd have to update every single one."
   - "There's a better way — let the computer generate the cards from data."

2. **Explore the recipe data** (15 min)
   - Open `js/recipes.js` — "This is all our recipes as data"
   - Walk through one object: title, slug, tags, etc.
   - Add her new recipe to the array

   **Teaching moment:** "Data and presentation are separate. The data says *what*, the HTML says *how to show it*."

3. **Wire up dynamic rendering** (20 min)
   - Open `js/render-cards.js` — walk through `createRecipeCard()`
   - Add the two `<script>` tags to `index.html`
   - Remove the hardcoded card HTML
   - Refresh — cards appear from data!

   **This is the "wow" moment.** The same cards, but generated automatically.

4. **Modify the card template** (15 min)
   - Change something in `createRecipeCard()` — every card updates
   - Add a new field (like difficulty) to the card display

   **Key insight:** "Change it once in the template function, it updates everywhere."

5. **Commit as a pair** (5 min)
   - Practice the PR workflow:
     - She creates a branch: `feature/dynamic-cards`
     - Makes changes, commits, pushes
     - Opens PR on GitHub
     - You review and merge

### Homework

Add a difficulty badge to the recipe cards by modifying `render-cards.js`.

---

## Session 5: "A Little Interactivity"

**Goal:** Introduce JavaScript for DOM manipulation.

**Duration:** 75 min

### Activities

1. **The goal: ingredient scaling** (5 min)
   - "What if someone wants to make half a recipe? Or double it?"
   - This requires *interactivity*—the page needs to respond to user input.

2. **JavaScript fundamentals** (20 min)
   - Add a `<script>` tag to a recipe page
   - `console.log('Hello!')` — open DevTools console
   - Variables: `let servings = 4;`
   - Simple math: `servings * 2`

   **Teaching moment:** "HTML is structure, CSS is style, JavaScript is behavior—it makes things *do* stuff."

3. **Selecting elements** (20 min)
   - `document.querySelector('.recipe-content')`
   - `element.textContent = 'new text'`
   - Change something on the page with JS

4. **Event listeners** (25 min)
   - Add a number input for servings
   - Listen for changes: `input.addEventListener('change', ...)`
   - Update displayed quantities

   **This is the "wow" moment.** The page responds to her input.

5. **Commit** (5 min)
   - "Add servings adjuster to recipe pages"

### Homework

Add a "Print Recipe" button that calls `window.print()`.

---

## Session 6: "Making It Findable"

**Goal:** Add filtering/search, reinforce JS skills.

**Duration:** 75 min

### Activities

1. **Tag display** (15 min)
   - Tags are already on the cards — review how they work
   - Style them differently (maybe category-based colors)

2. **Filter by tag** (45 min)
   - Add tag buttons to the homepage
   - On click, show/hide recipes that don't match
   - This combines: event listeners, DOM selection, conditionals

   **Stretch:** Add a simple text search over recipe titles.

3. **CSS transitions** (10 min)
   - Make the show/hide smooth with `transition` and `opacity`

   **Teaching moment:** "CSS can animate changes. We just say 'take 0.3 seconds to change opacity' and it handles the rest."

4. **Commit and reflect** (5 min)
   - Look back at Session 1. "Remember when changing an `<h1>` felt new?"

---

## Session 7: "Ship It"

**Goal:** Deploy to the real internet.

**Duration:** 45 min

### Activities

1. **Understand what we're deploying** (10 min)
   - "There's no build step! These files go directly to the server."
   - Compare to the old Astro version: "Before, a computer had to process our code. Now it's just... files."

   **Teaching moment:** "This is how the web started — HTML files on a server. Simple and powerful."

2. **Deploy to Netlify** (20 min)
   - Connect GitHub repo
   - No build command needed — publish directory is root `/`
   - Watch it go live
   - Get your URL

   **Celebration:** Her code is live on the internet.

3. **Set up continuous deployment** (10 min)
   - Push a small change
   - Watch Netlify automatically update
   - "This is the workflow: push code, it goes live."

4. **Share the link** (5 min)
   - Send it to a friend or family member
   - External validation is motivating

---

## Beyond the Roadmap

Once these sessions are complete, she'll have working knowledge of:

- HTML structure and semantic tags
- CSS styling, selectors, variables, and the box model
- JavaScript for interactivity and DOM manipulation
- Data-driven rendering (separating data from presentation)
- Git/GitHub collaboration workflow
- Deployment

**Possible next projects:**

- Add a "favorites" feature (localStorage)
- Meal planning page
- Recipe submission form
- Dark mode toggle
- Move to a framework like SvelteKit (now the abstractions will make sense because she knows what they're abstracting)

---

## Session Tips

**For Shingai:**

- Let her drive the keyboard as much as possible
- When she's stuck, ask "What do you think should happen?" before explaining
- Celebrate small wins genuinely
- If she wants to go off-script to try something, follow her curiosity
- Take breaks—ESFP energy comes in bursts

**For pairing:**

- Use VS Code Live Share for real-time collaboration
- Screen share when explaining concepts
- Let her own certain files (her recipes, her CSS experiments)
- Alternate who commits—both names in the git history

**When she's frustrated:**

- Zoom out: "Look how far we've come from Session 1"
- Zoom in: "Let's just get this one thing working"
- Take a break, make the recipe you're working on, come back
