import recipes from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  return `<ul class="recipe__tags">
      ${tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>`;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
      <figure class="recipe">
        <img src="${recipe.image}" width="700" alt="${recipe.name}">
        <figcaption>
          ${tagsTemplate(recipe.tags)}
          <h2><a href="#">${recipe.name}</a></h2>
          <p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
          </p>
          <p class="recipe__description">
            ${recipe.description}
          </p>
        </figcaption>
      </figure>
    `;
}

function renderRecipes(recipeList) {
  const recipeContainer = document.querySelector(".recipe-list");
  recipeContainer.innerHTML = recipeList
    .map((recipe) => recipeTemplate(recipe))
    .join("");
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

document.addEventListener("DOMContentLoaded", init);

document.querySelector("#search-button").addEventListener("click", searchHandler);

function filterRecipes(query) {
  return recipes
    .filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();

  const query = document.querySelector("#search-input").value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}
