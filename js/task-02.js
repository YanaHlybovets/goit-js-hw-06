

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients")

ingredients.forEach(ing => {
  const listItem = `<li class="item">${ing}</li>`
  listOfIngredients.insertAdjacentHTML("beforeend", listItem);
});

  console.log(listOfIngredients);

