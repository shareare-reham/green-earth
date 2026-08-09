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
    <li id="${category.id}" onclick="loadPlantsByCat(${category.id})">${category.category_name}</li>
    `;
    categoriesContainer.appendChild(categoryList);
  }
};
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllPlants(json.plants));
};
loadAllPlants();
const displayAllPlants = (plants) => {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  for (const plant of plants) {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div class="card bg-white shadow-sm p-4 h-full flex flex-col">
            <figure class="">
                <img
                src="${plant.image}"
                alt="Plant"
                class="rounded-xl w-full h-56 object-cover" 
                />
            </figure>
        
            <div class="items-center flex flex-col flex-grow">
                <div class="my-3 flex-grow w-full">
                <h2 class="card-title">${plant.name}</h2>
                <p>
                    ${plant.description}
                </p>
                <div class="flex justify-between items-center mt-2">
                    <p class="btn bg-[#DCFCE7] text-[#15803D] rounded-3xl border-none">
                    ${plant.category}
                    </p>
                    <p class="font-bold text-lg">$<span>${plant.price}</span></p>
                </div>
                </div>
                <button class="btn btn-primary w-full rounded-3xl bg-[#15803D] border-none mt-auto">
                Add to Cart
                </button>
            </div>
        </div>
        `;
    cardsContainer.appendChild(cardDiv);
  }
};
const loadPlantsByCat = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      displayAllPlants(json.plants);
      activeCat(id);
    });
};
const removeAtvBtn = () => {
  const catBtns = document.querySelectorAll(".active-btn");
  catBtns.forEach((btn) => btn.classList.remove("active-btn"));
};
const activeCat = (id) => {
  removeAtvBtn();
  const activeBtn = document.getElementById(id);
  activeBtn.classList.add("active-btn");
};
removeAtvBtn();
