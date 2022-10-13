// API Data Load Function
const loadMeals = (search) => {
  // Dynamic URL & Search System
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

// Display Arrow Function
const displayMeals = (meals) => {
  const mealsContainer = document.getElementById('meal-container');
  mealsContainer.textContent = '';
  meals.forEach((meal) => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div onclick='loadMealDetail(${meal.idMeal})' class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      </div>
    </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

// Search Food
const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // Call Function
  loadMeals(searchText);
  searchField.value = '';
};

// Meal Detail Function
const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

// Display Meal
const displayMealDetails = (meal) => {
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
    </div>
  </div>
  `;
};

loadMeals('c');
