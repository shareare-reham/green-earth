const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};
loadCategories();
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  for (const category of categories) {
    const categoryList = document.createElement("div");
    categoryList.innerHTML = `
    <li>${category.category_name}</li>
    `;
    categoriesContainer.appendChild(categoryList);
  }
};
