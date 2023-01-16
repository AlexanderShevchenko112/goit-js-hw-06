const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  listOfIngredients.appendChild(liElem);
}
