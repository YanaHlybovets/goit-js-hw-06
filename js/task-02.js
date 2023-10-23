
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients");

const listItems = ingredients.map(ing => {
  const listItem = document.createElement("li");
  listItem.textContent = ing;
  listItem.classList.add("item");
  return listItem;
});

listOfIngredients.append(...listItems);