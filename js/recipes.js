/*
 * Recipe Data — Our Cookbook
 * ==========================
 * All our recipes stored as a JavaScript array.
 *
 * This file is prep work for Session 4 (dynamic rendering).
 * Right now the homepage cards are hardcoded in HTML.
 * Later, we'll use this data + render-cards.js to generate cards automatically.
 *
 * Each recipe object follows the same structure (schema):
 *   title       - The recipe name
 *   slug        - URL-friendly name (used for linking to recipe pages)
 *   description - Short summary shown on the card
 *   prepTime    - Preparation time in minutes
 *   cookTime    - Cooking time in minutes
 *   servings    - Number of servings
 *   category    - One of: breakfast, lunch, dinner, dessert, snack, drink, side
 *   tags        - Array of descriptive labels
 *   difficulty  - easy, medium, or involved
 *   source      - Who contributed this recipe
 *   favorite    - true/false — shows a star badge on the card
 */

const recipes = [
  {
    title: "Baked Chicken",
    slug: "baked-chicken",
    description: "Simple oven-baked chicken, flip twice for crispy skin",
    prepTime: 5,
    cookTime: 35,
    servings: 2,
    category: "dinner",
    tags: ["chicken", "easy", "weeknight"],
    difficulty: "easy",
    source: "Emily",
    favorite: true,
  },
  {
    title: "Beef Stew + Vegetables",
    slug: "beef-stew",
    description: "Hearty African-inspired beef stew with kale and peanut butter",
    prepTime: 20,
    cookTime: 120,
    servings: 6,
    category: "dinner",
    tags: ["beef", "stew", "hearty"],
    difficulty: "medium",
    source: "Family recipe",
    favorite: false,
  },
  {
    title: "Chocolate Chia Pudding",
    slug: "choc-chia-pudding",
    description: "5-ingredient overnight chocolate pudding — healthy and easy",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    category: "snack",
    tags: ["healthy", "no-cook", "chocolate"],
    difficulty: "easy",
    source: "Emily",
    favorite: false,
  },
  {
    title: "Protein Pancakes",
    slug: "protein-pancakes",
    description: "Emily's high-protein pancake mix with cottage cheese and collagen",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    category: "breakfast",
    tags: ["protein", "breakfast", "pancakes"],
    difficulty: "easy",
    source: "Emily",
    favorite: true,
  },
];
