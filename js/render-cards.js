/*
 * Dynamic Card Renderer — Our Cookbook
 * =====================================
 * SESSION 4 PREP: This file is ready for when we learn JavaScript!
 *
 * It reads the recipe data from recipes.js and creates HTML cards
 * automatically — so we don't have to copy-paste card HTML for each recipe.
 *
 * TO ACTIVATE (Session 4):
 * 1. Add <script src="/js/recipes.js"></script> to index.html (before this script)
 * 2. Add <script src="/js/render-cards.js"></script> to index.html
 * 3. Remove the hardcoded card HTML from the recipe-grid div
 * 4. The cards will be generated automatically from the data!
 */

// This function creates one recipe card's HTML
function createRecipeCard(recipe, index) {
  const tagsHTML = recipe.tags
    .slice(0, 2)
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');

  const favoriteHTML = recipe.favorite
    ? '<span class="favorite-badge" title="Favorite">&#9733;</span>'
    : '';

  return `
    <a href="/recipes/${recipe.slug}.html" class="card" style="--i: ${index}">
      <div class="card-image">
        <div class="card-placeholder">
          <span class="icon">+</span>
          <span class="text">Add photo</span>
        </div>
        ${favoriteHTML}
      </div>
      <div class="card-content">
        <h3 class="card-title">${recipe.title}</h3>
        ${recipe.description ? `<p class="card-description">${recipe.description}</p>` : ''}
        <div class="card-meta">
          ${recipe.cookTime ? `<span class="cook-time">${recipe.cookTime} min</span>` : ''}
          <div class="tags">${tagsHTML}</div>
        </div>
      </div>
    </a>
  `;
}

// When the page loads, render all cards into the grid
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.recipe-grid');
  if (grid && typeof recipes !== 'undefined') {
    grid.innerHTML = recipes.map(createRecipeCard).join('');
  }
});
