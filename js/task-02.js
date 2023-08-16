const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients")

ingredients.forEach(ing => {
  const ingreient = document.createElement("li");
  ingreient.textContent = ing;
  ingreient.classList.add("item");
  ul.appendChild(ingreient);
})